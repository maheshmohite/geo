import { motion } from 'framer-motion'
import { Globe, BookOpen, Users, Cpu, TrendingUp, CheckCircle, Mail } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'

const whyJoin = [
  {
    icon: Globe,
    title: 'Work on International Projects',
    desc: 'Gain exposure to global engineering standards, client workflows, and diverse projects in surveying, architecture, infrastructure, and construction.',
  },
  {
    icon: BookOpen,
    title: 'Learn and Grow Continuously',
    desc: 'We invest in our people through technical training, mentorship, software certifications, and ongoing professional development programs that keep our teams at the forefront of industry advancements.',
  },
  {
    icon: Users,
    title: 'Collaborative and Inclusive Culture',
    desc: 'We foster an environment built on teamwork, integrity, innovation, and mutual respect. Every employee is encouraged to contribute ideas, solve challenges, and grow alongside the organisation.',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven Excellence',
    desc: 'From AutoCAD and Civil 3D to BIM, GIS, LiDAR, and point cloud technologies, we empower our teams with modern tools and efficient workflows to deliver exceptional results.',
  },
  {
    icon: TrendingUp,
    title: 'Opportunities for Career Advancement',
    desc: 'As a growing organisation, we offer clear pathways for leadership, specialisation, and professional progression across multiple engineering disciplines.',
  },
]

const opportunities = [
  'Survey CAD Drafting',
  'Civil Engineering & Civil 3D',
  'Architectural Drafting & BIM Modeling',
  'Structural Engineering & Detailing',
  'Mechanical and MEP Design',
  'GIS & LiDAR Processing',
  'Point Cloud Modeling',
  'Quality Assurance & Project Coordination',
]

const coreValues = [
  { title: 'Integrity', desc: 'We uphold the highest standards of ethics and professionalism.' },
  { title: 'Quality', desc: 'We deliver precise, reliable, and client-focused solutions.' },
  { title: 'Innovation', desc: 'We embrace technology and continuously improve our processes.' },
  { title: 'Collaboration', desc: 'We succeed together through teamwork and mutual respect.' },
  { title: 'Growth', desc: 'We invest in people, knowledge, and long-term partnerships.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at GeoNectar"
        subtitle="Build Your Career. Shape Global Projects. Join a team passionate about engineering excellence, innovation, and people."
        breadcrumbs={[{ label: 'About Us', href: '/about-us' }, { label: 'Careers' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="section-title">Engineering Excellence.<br />Global Careers.</h2>
              <p className="section-sub mb-5">
                At GeoNectar Technologies, we are passionate about engineering excellence, innovation, and people.
                We provide CAD, BIM, surveying, and geospatial solutions to clients across the United States,
                United Kingdom, Australia, and India, helping them deliver complex projects with accuracy and confidence.
              </p>
              <p className="text-brand-body leading-relaxed mb-5">
                Our success is driven by talented professionals who bring technical expertise, curiosity, and a
                commitment to quality. We believe in creating opportunities where individuals can learn, grow, and
                make a meaningful impact on projects that shape communities and infrastructure worldwide.
              </p>
              <p className="text-brand-body leading-relaxed">
                Whether you are a fresh graduate with strong fundamentals or an experienced professional seeking
                global exposure, GeoNectar offers a platform where your skills can thrive and your career can grow.
              </p>
            </div>
            <div>
              <img
                src="/images/about/about-careers.jpg"
                alt="Careers at GeoNectar"
                className="rounded-xl shadow-float w-full object-cover h-[340px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader eyebrow="Why GeoNectar" title="Why Join GeoNectar?" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyJoin.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-card p-7 shadow-card flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon size={20} strokeWidth={1.8} className="stroke-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-heading mb-2 text-[0.95rem]">{title}</h3>
                  <p className="text-[0.84rem] text-brand-body leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Current openings */}
            <div>
              <span className="section-eyebrow">Open Roles</span>
              <h2 className="section-title mb-6">Current Opportunities</h2>
              <p className="text-brand-body leading-relaxed mb-7">
                We are always looking for passionate and talented professionals across our engineering disciplines.
                Fresh graduates with strong fundamentals and experienced professionals seeking global exposure are
                both encouraged to apply.
              </p>
              <ul className="space-y-3">
                {opportunities.map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0" strokeWidth={2} />
                    <span className="text-brand-body text-[0.9rem]">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values + CTA */}
            <div className="space-y-6">
              <div className="bg-brand-light rounded-xl p-8">
                <h3 className="font-bold text-brand-heading mb-5 text-lg">Our Values</h3>
                <ul className="space-y-4">
                  {coreValues.map(({ title, desc }) => (
                    <li key={title} className="flex gap-3">
                      <span className="font-bold text-navy text-[0.88rem] min-w-[90px]">{title}</span>
                      <span className="text-brand-body text-[0.84rem] leading-relaxed">— {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply CTA */}
              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="font-bold text-white mb-3 text-lg">Join Our Journey</h3>
                <p className="text-white/75 text-[0.88rem] leading-relaxed mb-5">
                  If you are passionate about engineering, technology, and solving real-world challenges,
                  GeoNectar offers a platform where your skills can thrive and your career can grow.
                  Become part of a team that is helping shape the future of engineering support services
                  across the globe.
                </p>
                <a
                  href="mailto:hr@geo-nectar.com"
                  className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold
                             px-6 py-3 rounded-lg text-sm hover:bg-accent/90 transition-colors"
                >
                  <Mail size={16} strokeWidth={2} />
                  Send Your Resume
                </a>
                <p className="text-white/50 text-[0.78rem] mt-3">hr@geo-nectar.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
