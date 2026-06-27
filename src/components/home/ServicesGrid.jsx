import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Map, Boxes, Building2, Layers, Construction, Cog, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/services'

const iconMap = { Map, Boxes, Building2, Layers, Construction, Cog }

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Core Services"
          subtitle="Six specialized verticals delivering precision CAD drafting and design solutions to engineering firms worldwide."
          className="mb-16"
        />

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
                className="group relative card border border-black/[0.07] p-9 overflow-hidden cursor-default"
              >
                {/* Orange left accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent
                                scale-y-0 group-hover:scale-y-100 transition-transform
                                duration-300 origin-top rounded-l" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy/[0.06] flex items-center justify-center
                                mb-5 transition-colors duration-200 group-hover:bg-accent/[0.09]">
                  <Icon size={26} strokeWidth={1.6}
                    className="stroke-navy transition-colors duration-200 group-hover:stroke-accent" />
                </div>

                <h3 className="text-[1.03rem] font-bold text-brand-heading mb-2.5">{svc.title}</h3>
                <p className="text-[0.86rem] text-brand-body leading-relaxed mb-5 line-clamp-3">
                  {svc.tagline}
                </p>
                <Link
                  to={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-navy
                             transition-all duration-200 group-hover:text-accent"
                >
                  Explore Services
                  <ArrowRight size={14} strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
