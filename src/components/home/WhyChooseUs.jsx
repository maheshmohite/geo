import { motion } from 'framer-motion'
import { Zap, CheckCircle, DollarSign } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { whyChooseUs } from '../../data/siteData'

const iconMap = { Zap, CheckCircle, DollarSign }

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-brand-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why GeoNectar"
          title="The GeoNectar Advantage"
          subtitle="We combine deep engineering expertise, cutting-edge CAD/BIM tools, and a client-first delivery model to provide measurable value on every engagement."
          className="mb-10 md:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-white rounded-card p-6 md:p-9 shadow-card text-center
                           hover:-translate-y-1.5 hover:shadow-hover transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-navy to-navy-mid
                                flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} strokeWidth={1.6} className="stroke-white" />
                </div>
                <h3 className="text-[1.05rem] font-bold text-brand-heading mb-3">{item.title}</h3>
                <p className="text-[0.88rem] text-brand-body leading-[1.75]">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
