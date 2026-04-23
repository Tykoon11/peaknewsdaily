import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'DMCA Notice',
  description: 'How to submit a copyright complaint or counter-notice to PeakNewsDaily.'
}

export default function DmcaPage() {
  return (
    <LegalPage
      eyebrow="Copyright"
      title="DMCA Notice"
      description="If you believe content on PeakNewsDaily infringes your copyright, send a complete notice with the information below so we can review it efficiently."
    >
      <h2>Include the following in your notice</h2>
      <ol>
        <li>Identification of the copyrighted work you claim has been infringed.</li>
        <li>The exact URL or enough detail to locate the allegedly infringing material on PeakNewsDaily.</li>
        <li>Your full name, organization if applicable, mailing address, email address, and phone number.</li>
        <li>A statement that you have a good-faith belief the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorized to act on behalf of the copyright owner.</li>
        <li>Your physical or electronic signature.</li>
      </ol>

      <h2>Send notices to</h2>
      <p>
        Email: <a href="mailto:dmca@peaknewsdaily.com">dmca@peaknewsdaily.com</a>
      </p>

      <h2>Counter-notices</h2>
      <p>
        If you believe material was removed or disabled by mistake or misidentification, you may send a counter-notice that complies with applicable law.
      </p>
    </LegalPage>
  )
}
