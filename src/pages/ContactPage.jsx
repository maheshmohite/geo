import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'
import { companyInfo } from '../data/siteData'
import { services } from '../data/services'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your CAD drafting or BIM project requirements. We respond within 24 hours."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <h2 className="text-[1.5rem] font-bold text-brand-heading mb-2">Send Us a Message</h2>
              <p className="text-brand-body mb-8 text-[0.9rem]">
                Fill in the form below and a member of our team will get back to you within 24 hours
                with a detailed response and, where relevant, a free project quote.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="text-[1.1rem] font-bold text-brand-heading mb-2">Message Sent!</h3>
                  <p className="text-brand-body text-[0.88rem]">
                    Thank you for reaching out. A GeoNectar team member will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: 'Full Name *',    name: 'name',    type: 'text',  placeholder: 'John Smith' },
                      { label: 'Email Address *', name: 'email',   type: 'email', placeholder: 'john@company.com' },
                      { label: 'Phone Number',    name: 'phone',   type: 'tel',   placeholder: '+1 555 000 0000' },
                      { label: 'Company Name',    name: 'company', type: 'text',  placeholder: 'Smith Surveying LLC' },
                    ].map(({ label, name, type, placeholder }) => (
                      <div key={name}>
                        <label className="block text-[0.8rem] font-semibold text-brand-heading mb-1.5">
                          {label}
                        </label>
                        <input
                          type={type} name={name} value={form[name]}
                          onChange={handleChange} placeholder={placeholder}
                          required={name === 'name' || name === 'email'}
                          className="w-full border border-black/[0.12] rounded-lg px-4 py-3
                                     text-[0.88rem] text-brand-heading placeholder-brand-body/40
                                     focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                                     transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[0.8rem] font-semibold text-brand-heading mb-1.5">
                      Service Required
                    </label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-black/[0.12] rounded-lg px-4 py-3
                                 text-[0.88rem] text-brand-heading bg-white
                                 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                                 transition-colors"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.title}</option>
                      ))}
                      <option value="other">Other / Not Listed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.8rem] font-semibold text-brand-heading mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      required rows={5}
                      placeholder="Tell us about your project — deliverables needed, timeline, volume, standards required, etc."
                      className="w-full border border-black/[0.12] rounded-lg px-4 py-3
                                 text-[0.88rem] text-brand-heading placeholder-brand-body/40
                                 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                                 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit"
                    className="btn btn-orange px-10 py-3.5 text-[0.95rem] w-full sm:w-auto">
                    <Send size={16} strokeWidth={2} />
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.1} className="lg:col-span-2 space-y-6">
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-[1.05rem] font-bold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex gap-3.5 items-start">
                    <Phone size={18} className="stroke-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div>
                      <div className="text-[0.72rem] uppercase tracking-wider text-white/45 mb-0.5">Phone</div>
                      <a href={`tel:${companyInfo.phone}`}
                        className="text-white/85 hover:text-accent transition-colors text-[0.88rem]">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <Mail size={18} className="stroke-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div>
                      <div className="text-[0.72rem] uppercase tracking-wider text-white/45 mb-0.5">Email</div>
                      <a href={`mailto:${companyInfo.email}`}
                        className="text-white/85 hover:text-accent transition-colors text-[0.88rem] break-all">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <MapPin size={18} className="stroke-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div>
                      <div className="text-[0.72rem] uppercase tracking-wider text-white/45 mb-0.5">Address</div>
                      <p className="text-white/75 text-[0.84rem] leading-relaxed">{companyInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <Clock size={18} className="stroke-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div>
                      <div className="text-[0.72rem] uppercase tracking-wider text-white/45 mb-0.5">Response Time</div>
                      <p className="text-white/75 text-[0.84rem]">Within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Markets */}
              <div className="bg-brand-light rounded-xl p-7">
                <h4 className="text-[0.8rem] font-bold text-brand-heading mb-4">Markets We Serve</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { flag: '🇺🇸', name: 'United States' },
                    { flag: '🇬🇧', name: 'United Kingdom' },
                    { flag: '🇦🇺', name: 'Australia' },
                    { flag: '🇮🇳', name: 'India' },
                  ].map(({ flag, name }) => (
                    <div key={name} className="flex items-center gap-2.5">
                      <span className="text-xl">{flag}</span>
                      <span className="text-[0.84rem] text-brand-body font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
