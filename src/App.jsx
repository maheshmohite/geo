import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ui/ScrollToTop'
import CookieConsent from './components/ui/CookieConsent'

// Pages
import HomePage             from './pages/HomePage'
import AboutPage            from './pages/AboutPage'
import ServicesPage         from './pages/ServicesPage'
import ServiceCategoryPage  from './pages/ServiceCategoryPage'
import SubServicePage       from './pages/SubServicePage'
import IndustriesPage       from './pages/IndustriesPage'
import IndustryDetailPage   from './pages/IndustryDetailPage'
import PortfolioPage        from './pages/PortfolioPage'
import CaseStudiesPage      from './pages/CaseStudiesPage'
import CaseStudyDetailPage  from './pages/CaseStudyDetailPage'
import BlogPage             from './pages/BlogPage'
import BlogPostPage         from './pages/BlogPostPage'
import ContactPage          from './pages/ContactPage'
import LegalPage            from './pages/legal/LegalPage'
import NotFoundPage         from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                                              element={<HomePage />} />
          <Route path="/about-us"                                      element={<AboutPage />} />

          {/* Services */}
          <Route path="/services"                                      element={<ServicesPage />} />
          <Route path="/services/:categorySlug"                        element={<ServiceCategoryPage />} />
          <Route path="/services/:categorySlug/:subSlug"               element={<SubServicePage />} />

          {/* Industries */}
          <Route path="/industries"                                    element={<IndustriesPage />} />
          <Route path="/industries/:slug"                              element={<IndustryDetailPage />} />

          {/* Portfolio */}
          <Route path="/portfolio"                                     element={<PortfolioPage />} />
          <Route path="/portfolio/:slug"                               element={<PortfolioPage />} />

          {/* Case Studies */}
          <Route path="/case-studies"                                  element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug"                            element={<CaseStudyDetailPage />} />

          {/* Blog */}
          <Route path="/blog"                                          element={<BlogPage />} />
          <Route path="/blog/category/:slug"                           element={<BlogPage />} />
          <Route path="/blog/:slug"                                    element={<BlogPostPage />} />

          {/* Contact */}
          <Route path="/contact-us"                                    element={<ContactPage />} />

          {/* Legal */}
          <Route path="/privacy-policy"       element={<LegalPage type="privacy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage type="terms" />} />
          <Route path="/disclaimer"           element={<LegalPage type="disclaimer" />} />
          <Route path="/cookie-policy"        element={<LegalPage type="cookies" />} />

          {/* 404 */}
          <Route path="*"                                              element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
