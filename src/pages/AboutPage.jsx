import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Globe, Target, Handshake, TrendingUp, BookOpen } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'

const milestones = [
  { year: '2018', event: 'GeoNectar Technologies founded in Pune, India' },
  { year: '2019', event: 'First ALTA/NSPS survey drafting contracts with US survey firms' },
  { year: '2020', event: 'BIM Services division established; Revit & Navisworks capability added' },
  { year: '2021', event: 'UK and Australian client base developed; team grows to 25+ specialists' },
  { year: '2022', event: 'ISO 9001:2015 certification achieved' },
  { year: '2023', event: 'Structural Design and Mechanical Design verticals launched' },
  { year: '2024', event: '150+ projects delivered; expanded to 6 service verticals' },
]

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every deliverable undergoes multi-stage QA before handover. We never compromise on accuracy.',
  },
  {
    icon: Handshake,
    title: 'Client Partnership',
    desc: 'We operate as an extension of your team — not just a vendor. Communication and responsiveness are core to our model.',
  },
  {
    icon: Award,
    title: 'ISO-Certified Quality',
    desc: 'Our ISO 9001:2015-certified processes ensure consistent, repeatable, high-quality outcomes across every project.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    desc: 'Our team is trained in US, UK, Australian, and Indian engineering and survey standards for seamless compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    desc: 'We embrace advanced technologies and continuously improve our processes to deliver faster and smarter solutions.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Growth',
    desc: 'We invest in people, knowledge, and long-term partnerships to stay ahead of industry advancements.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GeoNectar Technologies"
        subtitle="Expert CAD Drafting & Design Outsourcing — built on precision, reliability, and a deep understanding of the AEC industry."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">Founded on a Mission.<br />Built for Scale.</h2>
              <p className="section-sub mb-5">
                GeoNectar Technologies was founded with a single mission: to provide surveyors, civil engineers,
                architects, and structural consultants with expert CAD drafting and geospatial support — without
                the overhead and limitations of expanding in-house teams.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                Headquartered in Pune, India, one of the world's leading engineering outsourcing hubs, we have
                built a dedicated team of 25+ certified CAD drafters, BIM specialists, and geospatial professionals
                committed to delivering accuracy, efficiency, and reliability. To date, we have successfully completed
                over 150 projects for clients across the United States, the United Kingdom, Australia, and India.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                Our journey began with a vision to bridge the gap between engineering expertise and scalable delivery
                solutions. We recognised that modern firms face increasing pressure from tight deadlines, talent
                shortages, and growing project complexities. GeoNectar was established to become a dependable
                extension of our clients' teams — helping them accelerate project delivery while maintaining the
                highest standards of quality and compliance.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                Today, we provide comprehensive services including land survey drafting, ALTA/NSPS surveys,
                topographic mapping, point cloud processing, GIS solutions, BIM support, architectural drafting,
                structural detailing, mechanical drafting, and MEP engineering services. By leveraging advanced
                technologies, streamlined workflows, and robust quality control processes, we ensure that every
                deliverable is accurate, code-compliant, and ready for immediate use.
              </p>
              <p className="text-brand-body leading-relaxed">
                As an ISO 9001:2015 certified organisation, quality is embedded in everything we do. At GeoNectar,
                we believe true partnerships are built on trust, technical excellence, and a shared commitment to
                success. We are more than an outsourcing provider — we are a long-term engineering partner dedicated
                to helping our clients grow, innovate, and deliver exceptional results worldwide.
              </p>
            </div>
            <div>
              <img
                src="/images/about/about-our-story.jpg"
                alt="GeoNectar Team"
                className="rounded-xl shadow-float w-full object-cover h-[420px]"
              />
              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { value: '25+', label: 'Engineering Professionals' },
                  { value: '150+', label: 'Projects Delivered' },
                  { value: '4', label: 'Global Markets' },
                  { value: 'ISO', label: '9001:2015 Certified' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-brand-light rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-navy">{value}</div>
                    <div className="text-[0.78rem] text-brand-body mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader eyebrow="Our Values" title="What Drives Us" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-card p-8 shadow-card flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon size={22} strokeWidth={1.8} className="stroke-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-heading mb-2">{title}</h3>
                  <p className="text-[0.86rem] text-brand-body leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader eyebrow="Our Journey" title="Key Milestones" className="mb-14" />
          <div className="relative border-l-2 border-accent/20 pl-8 space-y-8 ml-4">
            {milestones.map(({ year, event }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[2.75rem] top-1.5 w-4 h-4 rounded-full bg-accent
                                shadow-[0_0_0_3px_rgba(240,90,40,0.2)]" />
                <span className="text-[0.72rem] font-bold text-accent uppercase tracking-widest">{year}</span>
                <p className="text-brand-body mt-1 leading-relaxed">{event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
