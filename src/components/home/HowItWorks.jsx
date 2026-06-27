import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { howItWorks } from '../../data/siteData'

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Our Process"
          title="How It Works"
          subtitle="A simple, structured four-step engagement model ensuring seamless project delivery every time."
          className="mb-16"
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[34px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] z-0"
            style={{
              background: 'repeating-linear-gradient(90deg,#F05A28 0,#F05A28 8px,transparent 8px,transparent 20px)',
            }}
          />

          {howItWorks.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
              className="relative z-10 text-center"
            >
              {/* Circle */}
              <div className="w-[70px] h-[70px] rounded-full bg-accent flex items-center justify-center
                              mx-auto mb-5 text-white text-xl font-black relative
                              shadow-[0_6px_22px_rgba(240,90,40,0.38)]">
                {s.step}
                <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-accent/32" />
              </div>

              <h3 className="text-[0.97rem] font-bold text-brand-heading mb-2.5">{s.title}</h3>
              <p className="text-[0.83rem] text-brand-body leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
