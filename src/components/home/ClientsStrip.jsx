import { clients } from '../../data/siteData'

export default function ClientsStrip() {
  return (
    <div className="bg-brand-light border-b border-black/[0.05] py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.72rem] font-bold text-black/30 tracking-[2.5px] uppercase mb-6">
          Trusted by leading firms worldwide
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {clients.map((name) => (
            <span
              key={name}
              className="text-[0.88rem] font-bold text-black/22 uppercase tracking-wide
                         hover:text-navy transition-colors duration-200 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
