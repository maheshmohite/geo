import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-6 py-20">
        <div className="text-[6rem] font-black text-navy/[0.08] leading-none mb-4">404</div>
        <h1 className="text-[1.8rem] font-bold text-brand-heading mb-4">Page Not Found</h1>
        <p className="text-brand-body mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Check the URL or navigate back to the homepage.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="btn btn-navy">Back to Home</Link>
          <Link to="/services" className="btn btn-outline-navy">View Services</Link>
          <Link to="/contact-us" className="btn btn-orange">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
