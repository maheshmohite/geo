import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'
import { caseStudies } from '../data/siteData'

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real-world project examples that demonstrate the quality, speed, and value GeoNectar delivers for engineering firms worldwide."
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Client Results"
            title="From Challenge to Delivery"
            subtitle="Explore how we've helped survey firms, BIM consultants, and structural engineers overcome drafting challenges."
            className="mb-14"
          />

          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-card border border-black/[0.07] shadow-card
                           hover:shadow-hover transition-all duration-300 overflow-hidden
                           grid grid-cols-1 md:grid-cols-3"
              >
                <div className="overflow-hidden h-52 md:h-auto">
                  <img src={cs.image} alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[0.72rem] bg-accent/10 text-accent font-bold
                                     px-3 py-1 rounded-full uppercase tracking-wider">
                      {cs.category}
                    </span>
                    <span className="text-[0.72rem] text-brand-body">{cs.country}</span>
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-brand-heading mb-3">{cs.title}</h3>
                  <p className="text-[0.88rem] text-brand-body leading-relaxed mb-5">{cs.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.results.map((r) => (
                      <span key={r}
                        className="flex items-center gap-1.5 text-[0.76rem] bg-brand-light
                                   border border-black/[0.06] rounded-full px-3 py-1.5 text-brand-heading font-medium">
                        <span className="text-accent">✓</span> {r}
                      </span>
                    ))}
                  </div>
                  <Link to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-navy
                               group-hover:text-accent transition-colors">
                    Read Case Study
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
