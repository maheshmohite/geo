import { useParams, Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import { getServiceBySlug, getSubServiceBySlug } from '../data/services'
import NotFoundPage from './NotFoundPage'

export default function SubServicePage() {
  const { categorySlug, subSlug } = useParams()
  const category = getServiceBySlug(categorySlug)
  const sub = getSubServiceBySlug(categorySlug, subSlug)
  if (!category || !sub) return <NotFoundPage />

  // Related sub-services (siblings, excluding current)
  const related = category.subServices.filter((s) => s.slug !== subSlug).slice(0, 3)

  return (
    <>
      <PageHero
        title={sub.title}
        subtitle={sub.description}
        image={sub.image}
        hideTitle={!!sub.image}
        breadcrumbs={[
          { label: 'Services',      to: '/services' },
          { label: category.title, to: `/services/${category.slug}` },
          { label: sub.title },
        ]}
      />

      {/* Main content */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <span className="section-eyebrow">Service Detail</span>
              <h2 className="section-title">{sub.title}</h2>
              {(Array.isArray(sub.content) ? sub.content : [sub.content]).map((para, i) => (
                <p key={i} className="text-brand-body leading-relaxed mb-6">{para}</p>
              ))}


              <h3 className="text-[1.1rem] font-bold text-brand-heading mb-4">
                Why Outsource to GeoNectar?
              </h3>
              {category.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <CheckCircle size={17} className="stroke-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[0.88rem] text-brand-body leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside>
              {/* CTA card */}
              <div className="bg-navy rounded-xl p-7 mb-6 sticky top-24">
                <h4 className="text-white font-bold text-[1rem] mb-3">Ready to get started?</h4>
                <p className="text-white/60 text-[0.84rem] mb-5 leading-relaxed">
                  Get a free quote for your {sub.title.toLowerCase()} project within 24 hours.
                </p>
                <Link to="/contact-us" className="btn btn-orange w-full justify-center mb-3">
                  Get a Free Quote
                </Link>
                <a href="tel:+14099345355"
                  className="block text-center text-[0.82rem] text-white/50 hover:text-accent transition-colors">
                  +1 409 934 5355
                </a>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="bg-brand-light rounded-xl p-6">
                  <h4 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-brand-body mb-4">
                    Related Services
                  </h4>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/services/${category.slug}/${r.slug}`}
                          className="flex items-center gap-2 text-[0.84rem] text-brand-body
                                     hover:text-accent transition-colors group"
                        >
                          <ArrowRight size={13} strokeWidth={2.5}
                            className="text-accent group-hover:translate-x-0.5 transition-transform" />
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${category.slug}`}
                    className="block mt-4 text-[0.81rem] font-bold text-navy hover:text-accent
                               transition-colors"
                  >
                    View all {category.shortTitle} services →
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
