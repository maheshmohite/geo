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
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Map
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
                  className="group relative rounded-card overflow-hidden min-h-[380px] flex flex-col
                             shadow-card hover:shadow-hover transition-shadow duration-300"
                >
                  {/* Background image — always visible, zooms on hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center
                                transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${svc.cardBg || svc.heroImage})` }}
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

                  {/* Card content */}
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full min-h-[380px]">
                    {/* Icon at top */}
                    <div className="w-14 h-14 rounded-xl bg-white/15 group-hover:bg-accent/30
                                    flex items-center justify-center
                                    transition-colors duration-300 mb-auto">
                      <Icon size={26} strokeWidth={1.6} className="stroke-white" />
                    </div>

                    {/* Text at bottom */}
                    <div className="mt-8">
                      <h3 className="text-[1.05rem] font-bold text-white mb-2">
                        {svc.title}
                      </h3>
                      <p className="text-[0.84rem] text-white/75 leading-relaxed mb-4 line-clamp-2">
                        {svc.description}
                      </p>

                      {/* Sub-service pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {svc.subServices.slice(0, 3).map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/services/${svc.slug}/${sub.slug}`}
                            className="text-[0.73rem] bg-white/10 border border-white/20 rounded-full
                                       px-3 py-1 text-white/75
                                       hover:bg-accent hover:text-white hover:border-accent
                                       transition-all duration-150"
                          >
                            {sub.title}
                          </Link>
                        ))}
                        {svc.subServices.length > 3 && (
                          <span className="text-[0.73rem] bg-white/10 border border-white/20
                                           rounded-full px-3 py-1 text-white/60">
                            +{svc.subServices.length - 3} more
                          </span>
                        )}
                      </div>

                      <Link
                        to={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-accent
                                   group-hover:gap-3 transition-all duration-200"
                      >
                        Explore All Services
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
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
