import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Map, Boxes, Building2, Layers, Construction, Cog, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import { services } from '../data/services'

const iconMap = { Map, Boxes, Building2, Layers, Construction, Cog }

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our CAD Drafting & Design Services"
        subtitle="Six specialized service verticals delivering precision drafting, BIM modeling, and design outsourcing to engineering firms across the USA, UK, Australia & India."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Map
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
                  className="group relative bg-white rounded-card border border-black/[0.07]
                             shadow-card hover:shadow-hover hover:-translate-y-1.5
                             transition-all duration-300 p-9 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent
                                  scale-y-0 group-hover:scale-y-100 transition-transform
                                  duration-300 origin-top rounded-l" />

                  <div className="w-14 h-14 rounded-xl bg-navy/[0.06] flex items-center justify-center
                                  mb-5 group-hover:bg-accent/[0.09] transition-colors duration-200">
                    <Icon size={26} strokeWidth={1.6}
                      className="stroke-navy group-hover:stroke-accent transition-colors duration-200" />
                  </div>

                  <h3 className="text-[1.05rem] font-bold text-brand-heading mb-2.5">{svc.title}</h3>
                  <p className="text-[0.86rem] text-brand-body leading-relaxed mb-5">{svc.description}</p>

                  {/* Sub-services preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.subServices.slice(0, 4).map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/services/${svc.slug}/${sub.slug}`}
                        className="text-[0.74rem] bg-brand-light border border-black/[0.06] rounded-full
                                   px-3 py-1 text-brand-body hover:bg-accent hover:text-white
                                   hover:border-accent transition-all duration-150"
                      >
                        {sub.title}
                      </Link>
                    ))}
                    {svc.subServices.length > 4 && (
                      <span className="text-[0.74rem] bg-brand-light border border-black/[0.06]
                                       rounded-full px-3 py-1 text-brand-body">
                        +{svc.subServices.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-navy
                               group-hover:text-accent transition-colors duration-200"
                  >
                    Explore All Services
                    <ArrowRight size={14} strokeWidth={2.5}
                      className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
