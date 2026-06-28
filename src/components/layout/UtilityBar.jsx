import { Phone, Mail } from 'lucide-react'
import { companyInfo } from '../../data/siteData'

export default function UtilityBar() {
  return (
    <div className="bg-navy-dark text-white/80 text-[0.8rem] py-2 z-50 relative">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
        {/* Left: contact links */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors"
          >
            <Phone size={12} strokeWidth={2} />
            {companyInfo.phone}
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors"
          >
            <Mail size={12} strokeWidth={2} />
            {companyInfo.email}
          </a>
        </div>

        {/* Right: CTA */}
        <a
          href="/contact-us"
          className="hidden sm:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white
                     text-[0.76rem] font-semibold px-4 py-1.5 rounded-btn transition-all duration-200"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  )
}
