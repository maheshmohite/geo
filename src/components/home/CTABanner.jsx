import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'
import { companyInfo } from '../../data/siteData'

export default function CTABanner() {
  return (
    <section className="relative bg-navy py-14 md:py-20 lg:py-24 overflow-hidden text-center">
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[860px] h-[440px]
                      bg-[radial-gradient(circle,rgba(240,90,40,0.14)_0%,transparent_68%)]
                      pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection delay={0.05}>
          <span className="section-eyebrow" style={{ color: 'rgba(255,160,120,0.9)' }}>
            Get Started Today
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.12}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.9rem] font-black text-white leading-tight mb-5">
            Ready to Streamline Your<br className="hidden sm:block" /> Drafting Workflow?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-[0.95rem] md:text-[1rem] text-white/68 max-w-[580px] mx-auto leading-[1.76] mb-8 md:mb-10">
            Partner with GeoNectar for accurate, cost-effective, and on-time CAD drafting — trusted
            by engineering and surveying firms worldwide.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.28}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center">
            <Link to="/contact-us"
              className="btn btn-orange px-8 md:px-10 py-3.5 md:py-4 text-[0.95rem] md:text-[0.97rem] w-full sm:w-auto justify-center">
              Let&rsquo;s Talk →
            </Link>
            <a href={`tel:${companyInfo.phone}`}
              className="btn btn-outline-white px-7 md:px-8 py-3.5 md:py-4 text-[0.95rem] md:text-[0.97rem] w-full sm:w-auto justify-center">
              {companyInfo.phone}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
