import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'
import { portfolioCategories } from '../data/siteData'

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="A selection of CAD drafting, BIM, and engineering design work delivered for clients across USA, UK, Australia & India."
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Our Work"
            title="Browse Portfolio Categories"
            subtitle="Explore sample outputs across our six service verticals."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {portfolioCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-card border border-black/[0.07] shadow-card
                           hover:shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden h-48">
                  <img src={cat.image} alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                  <span className="absolute top-4 right-4 bg-accent text-white text-[0.72rem]
                                   font-bold px-2.5 py-1 rounded-full">
                    {cat.count} samples
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-heading mb-2">{cat.title}</h3>
                  <p className="text-[0.84rem] text-brand-body mb-4 leading-relaxed">{cat.description}</p>
                  <Link to={`/portfolio/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-[0.82rem] font-bold text-navy
                               group-hover:text-accent transition-colors">
                    View Samples
                    <ArrowRight size={13} strokeWidth={2.5}
                      className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[0.78rem] text-brand-body/60 mt-12">
            All portfolio samples are shown with client permission or have been anonymized. Contact us to discuss your specific project requirements.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
