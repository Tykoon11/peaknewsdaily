import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Contact PeakNewsDaily',
  description: 'Contact PeakNewsDaily for editorial questions, corrections, DMCA notices, partnerships, or site support.'
}

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Contact"
      title="Contact PeakNewsDaily"
      description="Need to reach the team? Use the contact details below for editorial questions, corrections, legal notices, partnerships, or technical support."
    >
      <h2>General contact</h2>
      <p>
        Email: <a href="mailto:hello@peaknewsdaily.com">hello@peaknewsdaily.com</a>
      </p>

      <h2>Editorial and corrections</h2>
      <p>
        If you spot a factual issue, broken citation, outdated figure, or attribution problem, email <a href="mailto:editor@peaknewsdaily.com">editor@peaknewsdaily.com</a> with the page URL and a concise explanation.
      </p>

      <h2>Advertising and partnerships</h2>
      <p>
        For advertising, sponsorship, partnership, or media inquiries, contact <a href="mailto:partnerships@peaknewsdaily.com">partnerships@peaknewsdaily.com</a>.
      </p>

      <h2>Legal notices</h2>
      <p>
        For copyright, DMCA, or other legal notices, contact <a href="mailto:legal@peaknewsdaily.com">legal@peaknewsdaily.com</a>. For copyright-specific requests, review the DMCA page first so your notice includes the required details.
      </p>

      <h2>Response times</h2>
      <p>
        We aim to review legitimate inquiries as quickly as possible. Response times vary depending on volume, the nature of the request, and whether additional verification is required.
      </p>
    </LegalPage>
  )
}
