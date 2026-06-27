import PageHero from '../../components/ui/PageHero'

const content = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How GeoNectar Technologies collects, uses, and protects your personal information.',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect information you provide when you submit enquiry forms, contact us by email or phone, or use our services. This may include your name, email address, phone number, company name, and project details.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'We use collected information to respond to enquiries, provide our services, send relevant communications (with your consent), and improve our website and service quality. We do not sell or share your information with third parties for marketing purposes.',
      },
      {
        heading: 'Data Security',
        body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is stored securely and access is restricted to authorized personnel only.',
      },
      {
        heading: 'Data Retention',
        body: 'We retain personal data only as long as necessary for the purposes for which it was collected, or as required by applicable law. Client project files are retained for a minimum of 7 years for audit and reference purposes.',
      },
      {
        heading: 'Your Rights',
        body: 'Depending on your jurisdiction, you may have rights including access to your data, correction of inaccurate data, deletion of your data, and objection to processing. To exercise these rights, contact us at services@geo-nectar.com.',
      },
      {
        heading: 'Contact',
        body: 'For privacy-related queries, contact us at: services@geo-nectar.com or GeoNectar Technologies, Ganga Trueno Business Park, 2nd Floor, New Airport Road, Viman Nagar, Pune 411014, India.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'The terms governing use of GeoNectar Technologies services and this website.',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: 'By accessing this website or engaging GeoNectar Technologies for services, you agree to these Terms & Conditions. If you do not agree, please do not use this website or our services.',
      },
      {
        heading: 'Services',
        body: 'GeoNectar Technologies provides CAD drafting, BIM modeling, and related engineering design outsourcing services. Specific terms for each project engagement are governed by the relevant project agreement or statement of work.',
      },
      {
        heading: 'Intellectual Property',
        body: 'All drawings, models, and deliverables produced by GeoNectar Technologies become the property of the client upon full payment. GeoNectar retains the right to use anonymized project samples in its portfolio with client consent.',
      },
      {
        heading: 'Confidentiality',
        body: 'GeoNectar Technologies treats all client project information as strictly confidential. We do not share client data, drawings, or project details with third parties without explicit written consent.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'GeoNectar Technologies liability for any claim arising from our services is limited to the fees paid for the specific project giving rise to the claim. We are not liable for indirect, consequential, or incidental damages.',
      },
      {
        heading: 'Governing Law',
        body: 'These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra, India.',
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    subtitle: 'Important information about the use of GeoNectar Technologies website and content.',
    sections: [
      {
        heading: 'General',
        body: 'The information on this website is provided for general information purposes only. GeoNectar Technologies makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information.',
      },
      {
        heading: 'Professional Advice',
        body: 'Content on this website does not constitute professional engineering, surveying, or legal advice. Always engage qualified professionals licensed in your jurisdiction for advice on specific projects.',
      },
      {
        heading: 'External Links',
        body: 'This website may contain links to external sites. GeoNectar Technologies has no control over the content of those sites and accepts no responsibility for them.',
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    subtitle: 'How GeoNectar Technologies uses cookies on this website.',
    sections: [
      {
        heading: 'What Are Cookies',
        body: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.',
      },
      {
        heading: 'How We Use Cookies',
        body: 'We use essential cookies to ensure the website functions correctly, and analytics cookies (with your consent) to understand how visitors interact with our site so we can improve it.',
      },
      {
        heading: 'Managing Cookies',
        body: 'You can control and delete cookies through your browser settings. Disabling cookies may affect some website functionality. For more information, visit www.aboutcookies.org.',
      },
    ],
  },
}

export default function LegalPage({ type }) {
  const page = content[type] || content.privacy
  const breadcrumbMap = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    cookies: 'Cookie Policy',
  }

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[{ label: breadcrumbMap[type] }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-6">
          <p className="text-[0.8rem] text-brand-body/50 mb-10">
            Last updated: January 1, 2025
          </p>
          <div className="space-y-10">
            {page.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-[1.05rem] font-bold text-brand-heading mb-3">{s.heading}</h2>
                <p className="text-brand-body leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
