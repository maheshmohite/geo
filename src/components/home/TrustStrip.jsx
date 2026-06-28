import { ShieldCheck, BadgeCheck, Clock, Users, Layers } from 'lucide-react'
import { trustItems } from '../../data/siteData'

const iconMap = { ShieldCheck, BadgeCheck, Clock, Users, Layers }

export default function TrustStrip() {
  return (
    <div className="bg-navy-mid py-3.5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
        {trustItems.map(({ icon, label }) => {
          const Icon = iconMap[icon] || ShieldCheck
          return (
            <div key={label} className="flex items-center gap-2">
              <Icon size={16} className="stroke-accent flex-shrink-0" strokeWidth={1.8} />
              <span className="text-[0.77rem] font-semibold text-white/78 tracking-[0.3px]">
                {label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
