import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * Reusable inner-page hero banner with breadcrumb.
 */
export default function PageHero({ title, subtitle, breadcrumbs = [], image, hideTitle = false }) {
  return (
    <section className="relative bg-navy overflow-hidden pt-20 pb-16">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
      {/* Orange glow */}
      <div className="absolute -top-24 -right-20 w-[500px] h-[500px]
                      bg-[radial-gradient(circle,rgba(240,90,40,0.12)_0%,transparent_68%)]
                      pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6 text-[0.78rem] text-white/50 flex-wrap">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-white/30" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-accent transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {hideTitle && image ? (
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-float w-full max-w-3xl object-cover h-[320px]"
            />
          </div>
        ) : (
          <div className={image ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : ''}>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base text-white/68 leading-relaxed max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>
            {image && (
              <div className="hidden lg:block">
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl shadow-float w-full object-cover h-[280px]"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
