import Hero         from '../components/home/Hero'
import TrustStrip   from '../components/home/TrustStrip'
import ClientsStrip from '../components/home/ClientsStrip'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyChooseUs  from '../components/home/WhyChooseUs'
import IndustriesPills from '../components/home/IndustriesPills'
import HowItWorks   from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import CTABanner    from '../components/home/CTABanner'
import SEO          from '../components/ui/SEO'
import JsonLd       from '../components/ui/JsonLd'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GeoNectar Technologies',
  url: 'https://geo-nectar.com',
  logo: 'https://geo-nectar.com/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-409-934-5355',
    contactType: 'Customer Service',
    areaServed: ['US', 'GB', 'AU', 'IN'],
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ganga Trueno Business Park, 2nd Floor, New Airport Road, Viman Nagar',
    addressLocality: 'Pune',
    postalCode: '411014',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/geonectar',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GeoNectar Technologies',
  image: 'https://geo-nectar.com/images/og-image.jpg',
  url: 'https://geo-nectar.com',
  telephone: '+1-409-934-5355',
  email: 'services@geo-nectar.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ganga Trueno Business Park, 2nd Floor, New Airport Road, Viman Nagar',
    addressLocality: 'Pune',
    postalCode: '411014',
    addressCountry: 'IN',
  },
  description: 'ISO-certified CAD drafting, BIM modeling, and design outsourcing services for surveyors, engineers, and architects in USA, UK, Australia & India.',
  areaServed: ['United States', 'United Kingdom', 'Australia', 'India'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CAD Drafting & BIM Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Land Survey Drafting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BIM Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Civil Engineering & Drafting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Building Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mechanical Design' } },
    ],
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GeoNectar Technologies',
  url: 'https://geo-nectar.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://geo-nectar.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <SEO
        title="Expert CAD Drafting & Design Outsourcing | ISO Certified"
        description="GeoNectar Technologies delivers ISO-certified CAD drafting, BIM modeling, and design outsourcing services to surveyors, engineers, and architects across USA, UK, Australia & India. 150+ projects delivered."
        canonical="/"
        ogType="website"
      />
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={webSiteSchema} />
      <Hero />
      <TrustStrip />
      <ClientsStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <IndustriesPills />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  )
}
