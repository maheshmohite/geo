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
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
      <section className="py-20 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Our Specialisms"
            title={`${svc.title} Sub-Services`}
            subtitle="Click any service below to learn more about our capabilities and deliverables."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {svc.subServices.map((sub, i) => (
              <motion.div
                key={sub.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                className="group bg-white rounded-card border border-black/[0.07] p-7
                           shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                <h3 className="text-[0.97rem] font-bold text-brand-heading mb-2">{sub.title}</h3>
                <p className="text-[0.84rem] text-brand-body leading-relaxed mb-4">{sub.description}</p>
                <Link
                  to={`/services/${svc.slug}/${sub.slug}`}
                  className="inline-flex items-center gap-1.5 text-[0.81rem] font-bold text-navy
                             group-hover:text-accent transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight size={13} strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
