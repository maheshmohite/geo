import { motion } from 'framer-motion'
import { Award, Globe, Layers, ShieldCheck, TrendingUp, Handshake } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'

const certItems = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified Quality Management System',
    desc: 'GeoNectar operates under an ISO 9001:2015 certified quality management framework, providing structured processes, documented review procedures, and continuous improvement initiatives across all operations. From project onboarding to final delivery, our teams follow rigorous quality protocols that ensure consistency, accountability, and client satisfaction.',
  },
  {
    icon: Globe,
    title: 'Global Engineering Standards & Best Practices',
    desc: 'Our professionals work in accordance with internationally accepted drafting, surveying, and engineering standards across the United States, United Kingdom, Australia, and India. We align our deliverables with client-specific requirements, regulatory codes, and industry best practices to ensure seamless project execution and compliance.',
  },
  {
    icon: Layers,
    title: 'Multi-Level Quality Assurance',
    desc: 'Every drawing, model, and report passes through a documented quality review process involving discipline experts, senior reviewers, and project coordinators. This structured approach minimises revisions, reduces project risks, and delivers outputs that are ready for immediate use by clients and stakeholders.',
  },
  {
    icon: ShieldCheck,
    title: 'Information Security & Confidentiality',
    desc: 'Protecting client data is fundamental to our operations. We maintain strict confidentiality protocols, secure file-sharing practices, controlled access environments, and comprehensive non-disclosure procedures to safeguard intellectual property and sensitive project information throughout the engagement lifecycle.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement Culture',
    desc: 'We foster a culture of learning, innovation, and operational excellence. Through ongoing training, process optimisation, and technology adoption, our teams continuously enhance their capabilities to meet evolving industry demands and exceed client expectations.',
  },
  {
    icon: Handshake,
    title: 'A Trusted Engineering Partner',
    desc: 'Our certifications and compliance practices represent more than formal credentials — they embody our promise to deliver dependable, transparent, and world-class engineering support. We strive to become a seamless extension of our clients\' organisations, enabling them to scale confidently, accelerate delivery, and achieve long-term success.',
  },
]

const footerStats = [
  { value: 'ISO 9001:2015', label: 'Certified' },
  { value: '25+', label: 'Engineering Professionals' },
  { value: '150+', label: 'Projects Delivered' },
  { value: 'USA · UK · AU · IN', label: 'Global Reach' },
]

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certifications & Compliance"
        subtitle="Built on Standards. Driven by Trust. Quality is not an afterthought — it is engineered into every process, workflow, and deliverable."
        breadcrumbs={[{ label: 'About Us', href: '/about-us' }, { label: 'Certifications' }]}
      />

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-title mb-6">Built on Standards.<br />Driven by Trust.</h2>
            <p className="text-brand-body leading-relaxed">
              At GeoNectar Technologies, quality is not an afterthought — it is engineered into every process,
              every workflow, and every deliverable. Our commitment to internationally recognised standards ensures
              that our clients receive accurate, secure, and submission-ready outputs, regardless of project
              scale or geography.
            </p>
          </div>

          {/* Cert grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {certItems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-card p-8 shadow-card border border-black/[0.05] flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon size={22} strokeWidth={1.8} className="stroke-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-heading mb-2 text-[0.97rem]">{title}</h3>
                  <p className="text-[0.85rem] text-brand-body leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-12 md:py-16 bg-navy">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {footerStats.map(({ value, label }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-[0.78rem] text-white/60 uppercase tracking-wider">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
