import { useParams, Link } from 'react-router-dom'
import { Clock, ArrowLeft } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SEO from '../components/ui/SEO'
import JsonLd from '../components/ui/JsonLd'
import { blogPosts, blogCategories } from '../data/siteData'
import NotFoundPage from './NotFoundPage'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <NotFoundPage />

  const category = blogCategories.find((c) => c.slug === post.category)
  const publishedIso = new Date(post.date).toISOString()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt.slice(0, 155),
    image: `https://geo-nectar.com${post.image}`,
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: { '@type': 'Organization', name: 'GeoNectar Technologies', url: 'https://geo-nectar.com' },
    publisher: {
      '@type': 'Organization',
      name: 'GeoNectar Technologies',
      logo: { '@type': 'ImageObject', url: 'https://geo-nectar.com/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://geo-nectar.com/blog/${post.slug}` },
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt.slice(0, 155)}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        article={{ publishedTime: publishedIso, author: 'GeoNectar Technologies' }}
      />
      <JsonLd schema={articleSchema} />
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: category?.title ?? 'Article', to: `/blog/category/${post.category}` },
          { label: post.title },
        ]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <article className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 text-[0.78rem] text-brand-body/60">
                <span className="bg-accent/10 text-accent font-bold px-2.5 py-0.5 rounded-full">
                  {category?.title}
                </span>
                <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                <span>{post.date}</span>
              </div>

              <img src={post.image} alt={post.title}
                className="rounded-xl w-full h-64 object-cover mb-8" />

              <div className="prose max-w-none text-brand-body leading-relaxed space-y-4">
                <p>{post.excerpt}</p>
                <p>
                  At GeoNectar Technologies, we bring deep expertise in this area across our projects with
                  clients in the USA, UK, and Australia. Our ISO-certified processes ensure every deliverable
                  meets the highest standards of accuracy and compliance.
                </p>
                <h3 className="text-[1.05rem] font-bold text-brand-heading mt-6">Key Considerations</h3>
                <p>
                  Understanding the requirements and standards applicable to your jurisdiction is the first
                  step. Our team is trained in US (ALTA/NSPS, AASHTO), UK (RICS, BS standards), and
                  Australian (Austroads, AS standards) requirements.
                </p>
                <h3 className="text-[1.05rem] font-bold text-brand-heading mt-6">How GeoNectar Can Help</h3>
                <p>
                  Our specialist drafting teams are available to support your next project with fast
                  turnarounds, transparent pricing, and production-ready outputs. Contact us to discuss
                  your specific requirements.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-black/[0.07]">
                <Link to="/blog"
                  className="inline-flex items-center gap-2 text-[0.84rem] font-bold text-navy hover:text-accent transition-colors">
                  <ArrowLeft size={14} strokeWidth={2.5} /> Back to Blog
                </Link>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-navy rounded-xl p-7">
                <h4 className="text-white font-bold mb-3">Need Drafting Support?</h4>
                <p className="text-white/60 text-[0.84rem] mb-5 leading-relaxed">
                  Get a free quote from our specialist team within 24 hours.
                </p>
                <Link to="/contact-us" className="btn btn-orange w-full justify-center">
                  Get a Free Quote
                </Link>
              </div>

              <div className="bg-brand-light rounded-xl p-6">
                <h4 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-brand-body mb-4">
                  Recent Articles
                </h4>
                <ul className="space-y-4">
                  {blogPosts.filter((p) => p.slug !== slug).slice(0, 3).map((p) => (
                    <li key={p.slug}>
                      <Link to={`/blog/${p.slug}`}
                        className="text-[0.83rem] text-brand-body hover:text-accent transition-colors leading-snug block">
                        {p.title}
                      </Link>
                      <span className="text-[0.72rem] text-brand-body/50 mt-0.5 block">{p.date}</span>
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
