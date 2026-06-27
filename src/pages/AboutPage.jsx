import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Globe } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'
import WhyChooseUs from '../components/home/WhyChooseUs'
import { testimonials } from '../data/siteData'

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
  { icon: CheckCircle, title: 'Precision First',   desc: 'Every deliverable undergoes multi-stage QA before handover. We never compromise on accuracy.' },
  { icon: Users,       title: 'Client Partnership', desc: 'We operate as an extension of your team, not just a vendor. Communication and responsiveness are core to our model.' },
  { icon: Award,       title: 'ISO-Certified Quality', desc: 'Our ISO 9001:2015-certified processes ensure consistent, repeatable, high-quality outcomes.' },
  { icon: Globe,       title: 'Global Standards',  desc: 'Our team is trained in US, UK, Australian, and Indian engineering and survey standards.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GeoNectar Technologies"
        subtitle="Expert CAD Drafting & Design Outsourcing — built on precision, reliability, and a deep understanding of the AEC industry."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">Precision Drafting,<br />Delivered Worldwide</h2>
              <p className="section-sub mb-5">
                GeoNectar Technologies was founded with a single mission: to give surveyors, civil engineers, architects,
                and structural consultants access to expert CAD drafting support without the overhead of expanding
                in-house teams.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                Based in Pune, India — one of the world's leading engineering outsourcing hubs — our team of 25+
                certified CAD drafters and BIM specialists has delivered 150+ projects across the USA, UK, Australia, and India.
              </p>
              <p className="text-brand-body leading-relaxed">
                ISO 9001:2015 certified, we operate with rigorous quality management systems that ensure every drawing,
                model, and report we deliver is accurate, compliant, and ready for immediate use.
              </p>
            </div>
            <div>
              <img
                src="https://placehold.co/600x420/0A1F44/4a7fc1?text=GeoNectar+Team+%26+Office"
                alt="GeoNectar Team"
                className="rounded-xl shadow-float w-full object-cover h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader eyebrow="Our Values" title="What Drives Us" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
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

      <WhyChooseUs />
      <CTABanner />
    </>
  )
}
