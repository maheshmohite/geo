import { useParams, Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import { caseStudies } from '../data/siteData'
import NotFoundPage from './NotFoundPage'

export default function CaseStudyDetailPage() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return <NotFoundPage />

  return (
    <>
      <PageHero
        title={cs.title}
        subtitle={cs.summary}
        image={cs.image}
        breadcrumbs={[
          { label: 'Case Studies', to: '/case-studies' },
          { label: cs.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="section-eyebrow">{cs.category}</span>
              <h2 className="section-title">Project Overview</h2>
              <p className="text-brand-body leading-relaxed mb-6">{cs.summary}</p>
              <img src={cs.image} alt={cs.title}
                className="rounded-xl w-full h-64 object-cover mb-8" />

              <h3 className="text-[1.05rem] font-bold text-brand-heading mb-4">The Challenge</h3>
              <p className="text-brand-body leading-relaxed mb-6">
                Our client needed a reliable outsourcing partner capable of delivering high-quality
                CAD drafting outputs within tight project deadlines, with zero compromise on accuracy
                or standards compliance.
              </p>

              <h3 className="text-[1.05rem] font-bold text-brand-heading mb-4">Our Approach</h3>
              <p className="text-brand-body leading-relaxed mb-6">
                GeoNectar assigned a dedicated project team with specialist expertise in this
                discipline. We implemented our ISO 9001:2015-certified QA process, with multi-stage
                reviews before each deliverable was released to the client.
              </p>

              <h3 className="text-[1.05rem] font-bold text-brand-heading mb-4">Results Delivered</h3>
              <ul className="space-y-3">
                {cs.results.map((r, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="stroke-accent flex-shrink-0" strokeWidth={2} />
                    <span className="text-brand-body font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="bg-brand-light rounded-xl p-7 mb-6">
                <h4 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-brand-body mb-4">
                  Project Details
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-[0.72rem] uppercase tracking-wider text-brand-body/60">Category</span>
                    <p className="font-semibold text-brand-heading text-sm mt-0.5">{cs.category}</p>
                  </div>
                  <div>
                    <span className="text-[0.72rem] uppercase tracking-wider text-brand-body/60">Country</span>
                    <p className="font-semibold text-brand-heading text-sm mt-0.5">{cs.country}</p>
                  </div>
                  <div>
                    <span className="text-[0.72rem] uppercase tracking-wider text-brand-body/60">Client</span>
                    <p className="font-semibold text-brand-heading text-sm mt-0.5">{cs.client}</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy rounded-xl p-7">
                <h4 className="text-white font-bold mb-3">Start Your Project</h4>
                <p className="text-white/60 text-[0.84rem] mb-5 leading-relaxed">
                  Get expert drafting support on your next project.
                </p>
                <Link to="/contact-us" className="btn btn-orange w-full justify-center">
                  Get a Free Quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
