import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Map, Boxes, Building2, Layers, Construction, Cog, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/services'

const iconMap = { Map, Boxes, Building2, Layers, Construction, Cog }

export default function ServicesGrid() {
  return (
    <section id="services" className="py-14 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Core Services"
          subtitle="Six specialized verticals delivering precision CAD drafting and design solutions to engineering firms worldwide."
          className="mb-10 md:mb-16"
        />

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
                className="group relative rounded-card overflow-hidden min-h-[320px] flex flex-col
                           shadow-card hover:shadow-hover transition-shadow duration-300 cursor-pointer"
              >
                {/* Background image — always visible, zooms gently on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center
                              transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${svc.cardBg || svc.heroImage})` }}
                />

                {/* Permanent dark gradient — lifts slightly on hover to reveal more image */}
                <div className="absolute inset-0
                                bg-gradient-to-b from-navy/55 via-navy/70 to-navy/92
                                group-hover:from-navy/40 group-hover:via-navy/58 group-hover:to-navy/85
                                transition-all duration-500" />

                {/* Bottom accent bar slides in on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent z-10
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 origin-left" />

                {/* Card content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full min-h-[320px]">
                  {/* Icon — sits at top */}
                  <div className="w-14 h-14 rounded-xl bg-white/15 group-hover:bg-accent/30
                                  flex items-center justify-center
                                  transition-colors duration-300 mb-auto">
                    <Icon size={26} strokeWidth={1.6} className="stroke-white" />
                  </div>

                  {/* Text — anchored to bottom */}
                  <div className="mt-8">
                    <h3 className="text-[1.05rem] font-bold text-white mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-[0.84rem] text-white/75 leading-relaxed mb-5 line-clamp-2">
                      {svc.tagline}
                    </p>
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-accent
                                 group-hover:gap-3 transition-all duration-200"
                    >
                      Explore Services
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
  )
}
