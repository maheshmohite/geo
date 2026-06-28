import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../../data/services'

const megaMenuCols = [
  {
    heading: 'Land Survey Drafting',
    slug: 'land-survey-drafting-services',
    items: ['ALTA/NSPS', 'Topographical', 'Boundary Survey', 'Mortgage Survey', 'Aerial Survey', 'Wetland Delineation', 'Photogrammetry', 'GIS Mapping'],
    slugs: ['alta-nsps-survey-drafting','topographical-survey-drafting','boundary-survey-drafting','mortgage-survey-drafting','aerial-survey-drafting','wetland-delineation-drafting','photogrammetry-drafting','gis-mapping-drafting'],
  },
  {
    heading: 'BIM Services',
    slug: 'bim-services',
    items: ['Architectural BIM', 'Structural BIM', 'MEP BIM', 'Point Cloud to BIM', 'BIM Modelling', 'CAD to BIM', 'BIM Coordination', 'Clash Detection'],
    slugs: ['architectural-bim-modeling','structural-bim-modeling','mep-bim-modeling','point-cloud-to-bim','bim-modelling','cad-to-bim','bim-coordination','clash-detection'],
  },
  {
    heading: 'Civil Engineering',
    slug: 'civil-engineering-services-drafting',
    items: ['Architectural Services', '3D Rendering', 'Land Development', 'Road Network', 'Stormwater Drainage', 'Utility Layout'],
    slugs: ['architectural-services-drafting','3d-rendering-visualization','land-development-drafting','road-network-drafting','stormwater-drainage-drafting','utility-layout-drafting'],
  },
  {
    heading: 'Building Services',
    slug: 'building-services',
    items: ['Facility Management', 'MEP', 'HVAC', 'Electrical', 'Plumbing', 'Fire Protection', 'Structural Detailing'],
    slugs: ['facility-management-drawings','mep-drafting','hvac-drafting','electrical-drafting','plumbing-drafting','fire-protection-drafting','structural-design-detailing'],
  },
]

const industryDropdown = [
  'Architecture & Construction', 'Land Surveying', 'Civil Engineering',
  'Real Estate', 'Infrastructure', 'Structural Engineering', 'MEP Consultants',
]
const industrySlug = [
  'architecture-construction', 'land-surveying', 'civil-engineering',
  'real-estate', 'infrastructure', 'structural-engineering', 'mep-consultants',
]

const aboutDropdown = ['Our Story', 'Team', 'Certifications', 'Careers']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [industryOpen, setIndustryOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const megaTimerRef = useRef(null)
  const industryTimerRef = useRef(null)
  const aboutTimerRef = useRef(null)

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  // Sticky scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Hover helpers with delay to prevent flicker
  const createHover = (setter, timerRef) => ({
    onMouseEnter: () => {
      clearTimeout(timerRef.current)
      setter(true)
    },
    onMouseLeave: () => {
      timerRef.current = setTimeout(() => setter(false), 120)
    },
  })

  const megaHover     = createHover(setMegaOpen, megaTimerRef)
  const industryHover = createHover(setIndustryOpen, industryTimerRef)
  const aboutHover    = createHover(setAboutOpen, aboutTimerRef)

  const dropdownAnim = {
    initial:  { opacity: 0, y: 8 },
    animate:  { opacity: 1, y: 0 },
    exit:     { opacity: 0, y: 8 },
    transition: { duration: 0.18, ease: 'easeOut' },
  }

  return (
    <>
      {/* ── DESKTOP NAVBAR ─────────────────────────────── */}
      <header
        className={`sticky top-0 z-[900] bg-white transition-shadow duration-300
          ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.12)]' : 'shadow-[0_2px_12px_rgba(0,0,0,0.07)]'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px] gap-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 stroke-accent fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <div className="text-[1.2rem] font-extrabold text-navy leading-none">
                Geo<span className="text-accent">Nectar</span>
              </div>
              <div className="text-[0.58rem] font-semibold text-brand-body tracking-[1.2px] uppercase mt-0.5">
                Technologies
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {/* Services mega menu */}
            <div className="relative" {...megaHover}>
              <span className="nav-link select-none">
                Services <ChevronDown size={11} strokeWidth={2.5}
                  className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
              </span>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div {...dropdownAnim}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5
                               bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.13)]
                               border border-black/[0.06] p-7
                               grid grid-cols-3 gap-x-8 gap-y-5 z-[200] w-[780px]"
                  >
                    {megaMenuCols.map((col) => (
                      <div key={col.slug}>
                        <Link
                          to={`/services/${col.slug}`}
                          className="block text-[0.68rem] font-bold tracking-[1.8px] uppercase
                                     text-accent mb-2.5 pb-2 border-b border-accent/15
                                     hover:text-accent/80 transition-colors"
                        >
                          {col.heading}
                        </Link>
                        <ul className="space-y-1">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={`/services/${col.slug}/${col.slugs[i]}`}
                                className="block text-[0.82rem] text-brand-body py-1
                                           hover:text-navy hover:pl-1 transition-all duration-150"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries dropdown */}
            <div className="relative" {...industryHover}>
              <Link to="/industries" className="nav-link">
                Industries <ChevronDown size={11} strokeWidth={2.5}
                  className={`transition-transform duration-200 ${industryOpen ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {industryOpen && (
                  <motion.ul {...dropdownAnim}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg
                               shadow-[0_12px_40px_rgba(0,0,0,0.11)] border border-black/[0.06]
                               py-2 min-w-[220px] z-[200]"
                  >
                    {industryDropdown.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={`/industries/${industrySlug[i]}`}
                          className="block px-5 py-2 text-[0.84rem] text-brand-body
                                     hover:text-navy hover:bg-brand-light transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio"    className="nav-link">Portfolio</Link>
            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/blog"         className="nav-link">Blog</Link>

            {/* About dropdown */}
            <div className="relative" {...aboutHover}>
              <Link to="/about-us" className="nav-link">
                About Us <ChevronDown size={11} strokeWidth={2.5}
                  className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.ul {...dropdownAnim}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg
                               shadow-[0_12px_40px_rgba(0,0,0,0.11)] border border-black/[0.06]
                               py-2 min-w-[160px] z-[200]"
                  >
                    {aboutDropdown.map((item, i) => (
                      <li key={i}>
                        <Link
                          to="/about-us"
                          className="block px-5 py-2 text-[0.84rem] text-brand-body
                                     hover:text-navy hover:bg-brand-light transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact-us"
            className="hidden lg:inline-flex btn btn-navy text-sm px-5 py-2.5 flex-shrink-0"
          >
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-navy"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE NAV ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-[800] bg-navy overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 stroke-white fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-white font-extrabold text-lg">Geo<span className="text-accent">Nectar</span></span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-1">
                <X size={24} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="px-6 py-4 space-y-1">
              {/* Services */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-white/85
                             font-medium text-base rounded-lg hover:bg-white/[0.07] transition-colors"
                >
                  Services
                  <ChevronDown size={16}
                    className={`transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-0.5">
                        {megaMenuCols.map((col) => (
                          <Link
                            key={col.slug}
                            to={`/services/${col.slug}`}
                            className="block px-4 py-2.5 text-[0.88rem] text-white/65
                                       hover:text-accent hover:bg-white/[0.05] rounded transition-colors"
                          >
                            {col.heading}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-white/85
                             font-medium text-base rounded-lg hover:bg-white/[0.07] transition-colors"
                >
                  Industries
                  <ChevronDown size={16}
                    className={`transition-transform duration-200 ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-0.5">
                        {industryDropdown.map((item, i) => (
                          <Link
                            key={i}
                            to={`/industries/${industrySlug[i]}`}
                            className="block px-4 py-2.5 text-[0.88rem] text-white/65
                                       hover:text-accent hover:bg-white/[0.05] rounded transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: 'Portfolio',    to: '/portfolio' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Blog',         to: '/blog' },
                { label: 'About Us',     to: '/about-us' },
                { label: 'Contact Us',   to: '/contact-us' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="block px-4 py-3.5 text-white/85 font-medium text-base
                             rounded-lg hover:bg-white/[0.07] hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}

              <div className="pt-4">
                <Link to="/contact-us"
                  className="block w-full text-center btn btn-orange text-base py-3.5"
                >
                  Get a Free Quote →
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
