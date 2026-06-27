import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/siteData'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#FFC107] text-sm">★</span>
      ))}
    </div>
  )
}

function QuoteIcon() {
  return (
    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-5 flex-shrink-0">
      <svg className="w-[18px] h-[18px] fill-white" viewBox="0 0 24 24">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
      </svg>
    </div>
  )
}

export default function Testimonials() {
  // Show first 2 on home page
  const shown = testimonials.slice(0, 2)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {shown.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
              className="bg-brand-light rounded-card p-9 border border-black/[0.05]
                         hover:-translate-y-1 hover:shadow-hover transition-all duration-300"
            >
              <QuoteIcon />
              <Stars count={t.rating} />
              <p className="text-[0.93rem] text-brand-body leading-[1.8] mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center
                                text-white font-bold text-[0.9rem] flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.9rem] font-bold text-brand-heading">{t.name}</div>
                  <div className="text-[0.76rem] text-brand-body mt-0.5">
                    {t.role} · {t.company} · {t.country} {t.flag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
