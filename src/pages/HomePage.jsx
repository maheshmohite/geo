import Hero         from '../components/home/Hero'
import TrustStrip   from '../components/home/TrustStrip'
import ClientsStrip from '../components/home/ClientsStrip'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyChooseUs  from '../components/home/WhyChooseUs'
import IndustriesPills from '../components/home/IndustriesPills'
import HowItWorks   from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import CTABanner    from '../components/home/CTABanner'

export default function HomePage() {
  return (
    <>
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
