import { motion } from 'framer-motion'
import { Users, Lightbulb, Handshake, BookOpen, Star, TrendingUp } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'

const disciplines = [
  'CAD Drafters',
  'Survey Specialists',
  'Civil & Architectural Engineers',
  'BIM Professionals',
  'Quality Analysts',
  'Project Coordinators',
]

const pillars = [
  {
    icon: Star,
    title: 'Technical Expertise',
    desc: 'Every team member is trained in international drafting standards, client-specific workflows, and industry best practices to ensure seamless integration with the way our customers work.',
  },
  {
    icon: Handshake,
    title: 'Accountability & Collaboration',
    desc: 'We combine deep technical knowledge with a culture of accountability and collaboration — ensuring projects are delivered on time, to specification, and with zero compromise on quality.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Through ongoing training, technology adoption, and knowledge sharing, our teams continually evolve to stay ahead of changing engineering standards, software advancements, and global market expectations.',
  },
  {
    icon: TrendingUp,
    title: 'Seamless Integration',
    desc: 'We operate as an extension of your in-house team — adapting to your processes, communication style, quality requirements, and project objectives for a truly frictionless partnership.',
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Behind every drawing, model, and deliverable is a multidisciplinary team committed to one purpose — helping our clients deliver exceptional projects."
        breadcrumbs={[{ label: 'About Us', href: '/about-us' }, { label: 'Our Team' }]}
      />

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="section-eyebrow">Our People</span>
              <h2 className="section-title">Our Greatest Strength<br />Is Our People.</h2>
              <p className="section-sub mb-5">
                Behind every drawing, model, and deliverable is a multidisciplinary team of CAD drafters, survey
                specialists, civil and architectural engineers, BIM professionals, quality analysts, and project
                coordinators committed to one purpose — helping our clients deliver exceptional projects with
                confidence, precision, and pride.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                We combine technical expertise with a culture of accountability, collaboration, and continuous
                improvement. Every team member is trained in international drafting standards, client-specific
                workflows, and industry best practices to ensure seamless integration with the way our customers work.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                We believe outsourcing should never feel outsourced. That is why we operate as an extension of
                your in-house team — adapting to your processes, communication style, quality requirements, and
                project objectives. Whether supporting a single assignment or acting as a dedicated long-term
                delivery partner, our professionals bring the same commitment, responsiveness, and attention to detail.
              </p>
              <p className="text-brand-body leading-relaxed">
                At GeoNectar, engineering excellence is not simply about producing drawings — it is about building
                trusted partnerships, enabling growth, and delivering work that both our clients and our people
                are proud of.
              </p>
            </div>
            <div className="space-y-5">
              <img
                src="/images/about/about-our-team.jpg"
                alt="GeoNectar Team"
                className="rounded-xl shadow-float w-full object-cover h-[320px]"
              />
              {/* Disciplines */}
              <div className="bg-brand-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                    <Users size={18} strokeWidth={1.8} className="stroke-white" />
                  </div>
                  <span className="font-semibold text-brand-heading text-sm">Our Disciplines</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {disciplines.map((d) => (
                    <span key={d}
                      className="px-3 py-1.5 bg-white rounded-full text-[0.78rem] text-brand-body
                                 border border-black/[0.06] font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 md:py-20 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="How We Work"
            title="Built Around Your Success"
            subtitle="Our team structure and culture are designed to make us a seamless extension of your organisation."
            className="mb-10 md:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
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

      {/* Learning culture */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow">Our Culture</span>
            <h2 className="section-title mb-6">Learning Is Embedded<br />in Everything We Do</h2>
            <p className="text-brand-body leading-relaxed mb-5">
              Through ongoing training, technology adoption, and knowledge sharing, our teams continually evolve
              to stay ahead of changing engineering standards, software advancements, and global market expectations.
            </p>
            <p className="text-brand-body leading-relaxed">
              We foster an environment built on teamwork, integrity, innovation, and mutual respect. Every employee
              is encouraged to contribute ideas, solve challenges, and grow alongside the organisation — because
              we believe great work comes from empowered people.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
