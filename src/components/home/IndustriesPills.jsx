import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building, Map, FileText, Home, GitBranch, Triangle, Wrench, Cog,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { industries } from '../../data/industries'

const iconMap = { Building, Map, Layers: FileText, Home, GitBranch, Triangle, Wrench, Cog }

export default function IndustriesPills() {
  return (
    <section id="industries" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Sectors"
          title="Industries We Serve"
          subtitle="Deep domain expertise across the full built-environment spectrum — from land survey to heavy industry."
          className="mb-8 md:mb-14"
        />

        <div className="flex flex-wrap justify-center gap-3.5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
            >
              <Link
                to={`/industries/${ind.slug}`}
                className="group flex items-center gap-2.5 px-6 py-3.5
                           bg-brand-light border border-black/[0.07] rounded-full
                           text-[0.88rem] font-semibold text-brand-heading
                           hover:bg-navy hover:text-white hover:border-navy
                           hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,31,68,0.2)]
                           transition-all duration-200"
              >
                <svg className="w-4 h-4 stroke-accent group-hover:stroke-white/75 transition-colors flex-shrink-0"
                     fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" /><path d="M2 12h2M20 12h2M12 2v2M12 20v2"/>
                </svg>
                {ind.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
