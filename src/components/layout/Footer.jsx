import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'
import { companyInfo } from '../../data/siteData'
import { services } from '../../data/services'

const quickLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Services',     to: '/services' },
  { label: 'Industries',   to: '/industries' },
  { label: 'Portfolio',    to: '/portfolio' },
  { label: 'About Us',     to: '/about-us' },
  { label: 'Contact Us',   to: '/contact-us' },
  { label: 'Blog',         to: '/blog' },
]

const legalLinks = [
  { label: 'Privacy Policy',      to: '/privacy-policy' },
  { label: 'Terms & Conditions',  to: '/terms-and-conditions' },
  { label: 'Disclaimer',          to: '/disclaimer' },
  { label: 'Cookie Policy',       to: '/cookie-policy' },
]

const socials = [
  { Icon: Linkedin,  href: 'https://www.linkedin.com/in/geo-nectar-technologies-75369b368/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/geo.nectartechnologies?igsh=MXdramZ5bXlwYzl1Mw==', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/images/geonectar-logo.png" alt="Geo-Nectar Technologies"
                className="h-10 w-auto bg-white rounded-lg px-2 py-1" />
            </Link>
            <p className="text-[0.84rem] leading-relaxed text-white/55 mb-5">
              Expert CAD Drafting &amp; Design Outsourcing for Surveyors, Engineers, and Architects Worldwide. Precision. Speed. Value.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.07] flex items-center justify-center
                             hover:bg-accent transition-colors duration-200"
                >
                  <Icon size={15} className="fill-white/65 stroke-none" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h5 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-white mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-[0.84rem] text-white/55
                               hover:text-accent transition-colors group"
                  >
                    <span className="text-accent text-xs">›</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h5 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-white mb-4">
              Our Services
            </h5>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-1.5 text-[0.84rem] text-white/55
                               hover:text-accent transition-colors group"
                  >
                    <span className="text-accent text-xs">›</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">{s.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h5 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-white mb-4">
              Get in Touch
            </h5>
            <div className="space-y-3.5">
              <div className="flex gap-3 items-start">
                <Phone size={14} className="stroke-accent mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <a href={`tel:${companyInfo.phone}`}
                   className="text-[0.83rem] text-white/55 hover:text-accent transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={14} className="stroke-accent mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <a href={`mailto:${companyInfo.email}`}
                   className="text-[0.83rem] text-white/55 hover:text-accent transition-colors break-all">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="stroke-accent mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <span className="text-[0.83rem] text-white/55 leading-relaxed">
                  {companyInfo.address}
                </span>
              </div>
              <div className="pt-3">
                <Link to="/contact-us"
                  className="inline-flex btn btn-orange text-[0.82rem] px-5 py-2.5">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3 flex-wrap text-center sm:text-left">
          <p className="text-[0.79rem] text-white/38">
            © {new Date().getFullYear()} GeoNectar Technologies. All rights reserved.
          </p>
          <div className="flex gap-3 sm:gap-5 flex-wrap justify-center sm:justify-end">
            {legalLinks.map(({ label, to }) => (
              <Link key={to} to={to}
                className="text-[0.75rem] sm:text-[0.79rem] text-white/38 hover:text-accent transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
