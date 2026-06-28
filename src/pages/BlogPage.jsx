import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CTABanner from '../components/home/CTABanner'
import SEO from '../components/ui/SEO'
import { blogPosts, blogCategories } from '../data/siteData'

export default function BlogPage() {
  const { slug } = useParams()
  const filtered = slug
    ? blogPosts.filter((p) => p.category === slug)
    : blogPosts

  const activeCategory = blogCategories.find((c) => c.slug === slug)
  const pageTitle = activeCategory ? activeCategory.title : 'Blog & Insights'
  const canonicalPath = slug ? `/blog/category/${slug}` : '/blog'

  return (
    <>
      <SEO
        title={pageTitle}
        description="Expert articles on CAD drafting, BIM, civil engineering, survey best practices, and outsourcing strategies for AEC professionals."
        canonical={canonicalPath}
      />
      <PageHero
        title={activeCategory ? activeCategory.title : 'Blog & Insights'}
        subtitle="Expert perspectives on CAD drafting, BIM, civil engineering, and outsourcing best practices."
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          ...(activeCategory ? [{ label: activeCategory.title }] : []),
        ]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
                {(filtered.length ? filtered : blogPosts).map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group bg-white rounded-card border border-black/[0.07] shadow-card
                               hover:shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="overflow-hidden h-44">
                      <img src={post.image} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[0.7rem] bg-accent/10 text-accent font-bold
                                         rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                          {blogCategories.find((c) => c.slug === post.category)?.title ?? post.category}
                        </span>
                        <span className="flex items-center gap-1 text-[0.72rem] text-brand-body/60">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-brand-heading leading-snug mb-2 text-[0.97rem]">
                        {post.title}
                      </h3>
                      <p className="text-[0.83rem] text-brand-body leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-[0.81rem] font-bold text-navy
                                   group-hover:text-accent transition-colors">
                        Read Article
                        <ArrowRight size={13} strokeWidth={2.5}
                          className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-brand-light rounded-xl p-6">
                <h4 className="text-[0.72rem] font-bold tracking-[1.8px] uppercase text-brand-body mb-4">
                  Categories
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog"
                      className={`text-[0.84rem] hover:text-accent transition-colors ${!slug ? 'text-accent font-semibold' : 'text-brand-body'}`}>
                      All Articles
                    </Link>
                  </li>
                  {blogCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link to={`/blog/category/${cat.slug}`}
                        className={`text-[0.84rem] hover:text-accent transition-colors ${slug === cat.slug ? 'text-accent font-semibold' : 'text-brand-body'}`}>
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-6">
                <h4 className="text-white font-bold mb-2">Free Consultation</h4>
                <p className="text-white/60 text-[0.82rem] mb-4 leading-relaxed">
                  Have a drafting project in mind? Talk to our team.
                </p>
                <Link to="/contact-us" className="btn btn-orange w-full justify-center text-sm py-2.5">
                  Book a Call
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
