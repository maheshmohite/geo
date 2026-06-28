import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'
import { getServiceBySlug } from '../data/services'
import NotFoundPage from './NotFoundPage'

export default function ServiceCategoryPage() {
  const { categorySlug } = useParams()
  const svc = getServiceBySlug(categorySlug)
  if (!svc) return <NotFoundPage />

  return (
    <>
      <PageHero
        title={svc.title}
        subtitle={svc.tagline}
        image={svc.heroImage}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: svc.title },
        ]}
      />

      {/* Description + benefits */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="section-eyebrow">Overview</span>
              <h2 className="section-title">{svc.title} Services</h2>
              <p className="section-sub leading-relaxed mb-8">{svc.description}</p>
              <Link to="/contact-us" className="btn btn-orange">
                Get a Free Quote →
              </Link>
            </div>
            <div className="bg-brand-light rounded-xl p-8">
              <h3 className="text-[1.05rem] font-bold text-brand-heading mb-5">Why Choose GeoNectar?</h3>
              <ul className="space-y-3.5">
                {svc.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="stroke-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[0.88rem] text-brand-body leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Our Specialisms"
            title={`${svc.title} Sub-Services`}
            subtitle="Click any service below to learn more about our capabilities and deliverables."
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {svc.subServices.map((sub, i) => (
              <motion.div
                key={sub.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                className="group relative rounded-card overflow-hidden min-h-[280px] flex flex-col
                           shadow-card hover:shadow-hover transition-shadow duration-300"
              >
                {/* Background image — sub's own photo, else parent category photo, else SVG */}
                <div
                  className="absolute inset-0 bg-cover bg-center
                              transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${sub.cardBg || svc.cardBg || sub.image})` }}
                />

                {/* Permanent dark gradient — lifts slightly on hover */}
                <div className="absolute inset-0
                                bg-gradient-to-b from-navy/55 via-navy/70 to-navy/95
                                group-hover:from-navy/40 group-hover:via-navy/58 group-hover:to-navy/88
                                transition-all duration-500" />

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent z-10
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-7 flex flex-col h-full min-h-[280px]">
                  {/* Dot icon at top */}
                  <div className="w-10 h-10 rounded-lg bg-white/15 group-hover:bg-accent/30
                                  flex items-center justify-center
                                  transition-colors duration-300 mb-auto">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Text anchored to bottom */}
                  <div className="mt-8">
                    <h3 className="text-[0.97rem] font-bold text-white mb-2">{sub.title}</h3>
                    <p className="text-[0.84rem] text-white/75 leading-relaxed mb-4 line-clamp-2">
                      {sub.description}
                    </p>
                    <Link
                      to={`/services/${svc.slug}/${sub.slug}`}
                      className="inline-flex items-center gap-1.5 text-[0.81rem] font-bold text-accent
                                 group-hover:gap-2.5 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
