import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important financial, editorial, and advertising disclaimers for PeakNewsDaily.'
}

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Disclosure"
      title="Disclaimer"
      description="Please read these important disclosures before relying on any content, data, or educational material published on PeakNewsDaily."
    >
      <h2>Not financial advice</h2>
      <p>
        PeakNewsDaily publishes general news, commentary, market data, and educational content. Nothing on the site is intended to be individualized investment, financial planning, tax, accounting, or legal advice.
      </p>

      <h2>Market data limitations</h2>
      <p>
        Prices, charts, calendars, summaries, and other market information may be delayed, incomplete, or unavailable. Data should be verified with official exchanges, issuers, broker platforms, or primary sources before making decisions.
      </p>

      <h2>Editorial independence and monetization</h2>
      <p>
        PeakNewsDaily may display advertising, affiliate links, sponsored placements, or partner-related content. Advertising or monetization does not guarantee endorsement, and readers should perform independent due diligence before acting on any offer, product, or service.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        Markets involve risk. Past performance, case studies, examples, and historical outcomes are not guarantees of future results.
      </p>

      <h2>User responsibility</h2>
      <p>
        You are responsible for evaluating whether any strategy, broker, asset, or educational approach fits your own goals, risk tolerance, and circumstances.
      </p>
    </LegalPage>
  )
}
