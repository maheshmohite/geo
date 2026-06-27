import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { stats } from '../../data/siteData'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden pt-24 lg:pt-28">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
      {/* Orange glow */}
      <div className="absolute -top-32 -right-24 w-[700px] h-[700px]
                      bg-[radial-gradient(circle,rgba(240,90,40,0.12)_0%,transparent_68%)]
                      pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Content */}
          <div>
            {/* Badge */}
            <motion.div {...fade(0.1)}
              className="inline-flex items-center gap-2.5 bg-accent/[0.13] border border-accent/28
                         rounded-full px-4 py-2 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot flex-shrink-0" />
              <span className="text-[0.72rem] font-bold text-orange-300 uppercase tracking-widest">
                ISO Certified · Trusted Worldwide
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 {...fade(0.2)}
              className="text-4xl md:text-5xl xl:text-[3.4rem] font-black text-white
                         leading-[1.12] mb-5"
            >
              Expert CAD Drafting<br />
              &amp; <span className="text-accent">Design Outsourcing</span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...fade(0.3)}
              className="text-[1.04rem] text-white/70 leading-[1.78] mb-9 max-w-[490px]"
            >
              Trusted by Surveyors, Engineers &amp; Architects across USA, UK, Australia &amp; India.
              Precision-grade deliverables, faster turnaround, significant cost savings.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.4)} className="flex flex-wrap gap-3.5 mb-10">
              <Link to="/contact-us" className="btn btn-orange px-8 py-3.5 text-[0.95rem]">
                Get a Free Quote →
              </Link>
              <Link to="/services" className="btn btn-outline-white px-8 py-3.5 text-[0.95rem]">
                View Our Services
              </Link>
            </motion.div>

            {/* Trust flags */}
            <motion.div {...fade(0.5)} className="flex items-center gap-3.5">
              <span className="text-[0.75rem] text-white/45">Serving clients in</span>
              <div className="flex gap-2 text-xl">
                <span title="United States">🇺🇸</span>
                <span title="United Kingdom">🇬🇧</span>
                <span title="Australia">🇦🇺</span>
                <span title="India">🇮🇳</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <img
                src="https://placehold.co/600x390/0A1F44/4a7fc1?text=CAD+%26+BIM+Drafting"
                alt="CAD Drafting and BIM Services"
                className="w-full h-[390px] object-cover"
              />
            </div>
            {/* Float cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-3.5
                         shadow-float"
            >
              <div className="text-[0.62rem] text-brand-body uppercase tracking-wider mb-1">Projects Delivered</div>
              <div className="text-[1.4rem] font-black text-navy">150+</div>
              <div className="text-[0.66rem] text-brand-body">Across all verticals</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute top-5 -right-5 bg-white rounded-xl px-5 py-3.5
                         shadow-float"
            >
              <div className="text-[0.62rem] text-brand-body uppercase tracking-wider mb-1">Accuracy Rate</div>
              <div className="text-[1.4rem] font-black text-navy">99.8%</div>
              <div className="text-[0.66rem] text-brand-body">Quality guaranteed</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-20 bg-black/25 border-t border-white/[0.08] relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className={`py-8 text-center px-6
                  ${i < stats.length - 1 ? 'border-r border-white/[0.1]' : ''}
                  ${i === 1 ? 'border-r-0 lg:border-r border-white/[0.1]' : ''}
                `}
              >
                <div className="text-3xl lg:text-4xl font-black text-accent leading-none mb-2
                                [font-size:clamp(1.4rem,3vw,2.4rem)]">
                  {s.value}
                </div>
                <div className="text-[0.78rem] text-white/55 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
