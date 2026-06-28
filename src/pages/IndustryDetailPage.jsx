import { useParams, Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import { getIndustryBySlug } from '../data/industries'
import { services } from '../data/services'
import NotFoundPage from './NotFoundPage'

export default function IndustryDetailPage() {
  const { slug } = useParams()
  const ind = getIndustryBySlug(slug)
  if (!ind) return <NotFoundPage />

  return (
    <>
      <PageHero
        title={ind.title}
        subtitle={ind.tagline}
        image={ind.image}
        hideTitle={!!ind.image}
        breadcrumbs={[
          { label: 'Industries', to: '/industries' },
          { label: ind.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="section-eyebrow">Industry Overview</span>
              <h2 className="section-title">GeoNectar for {ind.title}</h2>
              <p className="text-brand-body leading-relaxed mb-8">{ind.description}</p>


              <h3 className="text-[1.05rem] font-bold text-brand-heading mb-4">Key Services for This Industry</h3>
              <div className="flex flex-wrap gap-2">
                {ind.services.map((s) => (
                  <span key={s}
                    className="bg-brand-light border border-black/[0.07] rounded-full px-4 py-2
                               text-[0.84rem] font-medium text-brand-heading">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <aside>
              <div className="bg-navy rounded-xl p-7 mb-6 sticky top-24">
                <h4 className="text-white font-bold text-[1rem] mb-3">
                  Work with GeoNectar
                </h4>
                <p className="text-white/60 text-[0.84rem] mb-5 leading-relaxed">
                  Specialist outsourcing for {ind.title} firms. Get a no-obligation quote today.
                </p>
                <Link to="/contact-us" className="btn btn-orange w-full justify-center">
                  Get a Free Quote
                </Link>
              </div>

              <div className="bg-brand-light rounded-xl p-6">
                <h4 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-brand-body mb-4">
                  All Services
                </h4>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-[0.84rem] text-brand-body
                                   hover:text-accent transition-colors group">
                        <ArrowRight size={13} strokeWidth={2.5} className="text-accent" />
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
