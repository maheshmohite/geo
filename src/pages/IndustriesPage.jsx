import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'
import { industries } from '../data/industries'

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Deep domain expertise across the full built-environment spectrum — from land surveying to heavy industry."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Sectors"
            title="Domain Expertise Across Key Industries"
            subtitle="We have developed deep, repeatable expertise in the sectors our clients operate in — enabling faster onboarding and higher-quality outputs."
            className="mb-10 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                className="group bg-white rounded-card border border-black/[0.07] shadow-card
                           hover:shadow-hover hover:-translate-y-1 transition-all duration-300
                           overflow-hidden"
              >
                <img src={ind.image} alt={ind.title}
                  className="w-full h-44 object-cover" />
                <div className="p-7">
                  <h3 className="text-[1.05rem] font-bold text-brand-heading mb-2">{ind.title}</h3>
                  <p className="text-[0.86rem] text-brand-body leading-relaxed mb-4">{ind.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ind.services.map((s) => (
                      <span key={s}
                        className="text-[0.72rem] bg-brand-light border border-black/[0.06]
                                   rounded-full px-3 py-1 text-brand-body">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-navy
                               group-hover:text-accent transition-colors"
                  >
                    Learn More
                    <ArrowRight size={13} strokeWidth={2.5}
                      className="group-hover:translate-x-1 transition-transform" />
                  </Link>
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
