import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms that govern access to and use of PeakNewsDaily.'
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      description="These Terms of Service govern access to PeakNewsDaily and the use of its content, submissions, tools, and site features."
    >
      <h2>Acceptance of terms</h2>
      <p>
        By accessing or using PeakNewsDaily, you agree to comply with these terms and all applicable laws. If you do not agree, do not use the site.
      </p>

      <h2>Informational use only</h2>
      <p>
        PeakNewsDaily provides news, commentary, educational material, tools, and market information for general informational purposes. Nothing on the site is personalized financial, legal, tax, or investment advice.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use the site for unlawful, abusive, deceptive, or fraudulent activity.</li>
        <li>Do not interfere with site operations, attempt unauthorized access, or scrape the site in ways that harm service stability.</li>
        <li>Do not submit material you do not have the right to share.</li>
        <li>Do not impersonate people, entities, or affiliations you do not hold.</li>
      </ul>

      <h2>Third-party content and links</h2>
      <p>
        Some pages summarize or link to third-party content, sources, feeds, tools, and services. We do not control those third-party properties and are not responsible for their content, availability, security, or practices.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise noted, the site design, branding, original editorial copy, and site materials are owned by PeakNewsDaily or used with permission. Unauthorized reproduction, republication, or redistribution may violate intellectual property laws.
      </p>

      <h2>No warranties</h2>
      <p>
        PeakNewsDaily is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranty that the site will always be uninterrupted, accurate, complete, timely, or free from errors.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, PeakNewsDaily and its operators will not be liable for losses or damages arising from the use of, or reliance on, the site or its content.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.
      </p>
    </LegalPage>
  )
}
