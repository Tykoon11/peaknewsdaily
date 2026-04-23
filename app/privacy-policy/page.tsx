import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn what information PeakNewsDaily collects, how it is used, and the choices available to visitors and subscribers.'
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="PeakNewsDaily uses a minimal-data approach. This policy explains what we collect, why we collect it, and how you can contact us about your information."
    >
      <p>
        PeakNewsDaily publishes financial news, market data, educational explainers, and related editorial content. We only collect information that is reasonably necessary to operate the site, improve the product, respond to inquiries, prevent abuse, and comply with legal obligations.
      </p>

      <h2>Information we may collect</h2>
      <ul>
        <li><strong>Technical usage data:</strong> IP address, browser type, operating system, device type, pages visited, referral information, and timestamps.</li>
        <li><strong>Contact information you submit:</strong> name, email address, and any details you provide when contacting us or submitting content.</li>
        <li><strong>Account and moderation data:</strong> information needed to manage contributor accounts, submissions, comment systems, or abuse-prevention workflows.</li>
        <li><strong>Advertising and analytics signals:</strong> limited data from analytics and advertising vendors that help us understand site performance and serve ads responsibly.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>Operate, secure, and maintain PeakNewsDaily.</li>
        <li>Measure traffic, usage patterns, and content performance.</li>
        <li>Respond to support requests, submissions, legal notices, and editorial inquiries.</li>
        <li>Detect spam, fraud, scraping, abuse, and other misuse.</li>
        <li>Comply with legal obligations and enforce our terms and policies.</li>
      </ul>

      <h2>Cookies, analytics, and advertising</h2>
      <p>
        PeakNewsDaily may use cookies or similar technologies to remember preferences, understand traffic, and support advertising. Third-party providers such as analytics vendors, ad networks, and embedded media platforms may also set cookies or collect information according to their own policies.
      </p>
      <p>
        If Google AdSense or other advertising products are used on the site, those providers may use cookies to serve ads based on a visitor&apos;s prior visits to this site or other websites. Visitors can learn more about how Google uses information in advertising by reviewing Google&apos;s policies and ad settings tools.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell personal information in the ordinary sense of selling customer lists. We may share limited data with service providers, hosting platforms, analytics tools, moderation vendors, legal advisors, or regulators when reasonably necessary to operate the site or comply with the law.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain information only for as long as it is needed for operational, editorial, security, legal, or compliance purposes. Retention periods may vary depending on the type of data and the reason it was collected.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can block or clear cookies through your browser settings.</li>
        <li>You can avoid submitting personal information through site forms if you prefer not to share it.</li>
        <li>You can contact us to request correction or deletion of information you previously submitted, subject to legal or operational limits.</li>
      </ul>

      <h2>Children&apos;s privacy</h2>
      <p>
        PeakNewsDaily is intended for a general audience and is not directed to children under 13. If you believe a child submitted personal information through the site, contact us and we will review the request promptly.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may revise this Privacy Policy from time to time to reflect changes in the site, legal requirements, analytics, advertising, or editorial operations. Material updates will be posted on this page with an updated effective date.
      </p>
    </LegalPage>
  )
}
