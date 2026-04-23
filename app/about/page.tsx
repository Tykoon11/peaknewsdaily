import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'About PeakNewsDaily',
  description: 'Learn what PeakNewsDaily covers, how the editorial team approaches market coverage, and what readers should expect from the site.'
}

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="About"
      title="About PeakNewsDaily"
      description="PeakNewsDaily is a financial media and education site focused on market-moving news, practical explainers, and tools that help readers make sense of fast-moving markets."
    >
      <p>
        We cover major developments across stocks, crypto, macro, trading, and personal finance topics with an emphasis on clarity, speed, and usefulness. Our goal is simple: help readers understand what happened, why it matters, and what to watch next.
      </p>

      <h2>What we publish</h2>
      <ul>
        <li>Breaking and developing financial news</li>
        <li>Market summaries and topic pages</li>
        <li>Educational how-to guides and explainers</li>
        <li>Broker, investing, and tool-related resource pages</li>
        <li>Data-driven market snapshots and reference material</li>
      </ul>

      <h2>Our editorial approach</h2>
      <p>
        PeakNewsDaily aims to separate reporting, aggregation, and educational content clearly. When we summarize third-party reporting or source material, we attribute the original source and link out when appropriate. When we publish educational content, we aim for practical, plain-English guidance rather than hype.
      </p>

      <h2>What PeakNewsDaily is not</h2>
      <p>
        PeakNewsDaily is not a broker, investment adviser, law firm, tax firm, or substitute for professional advice. Nothing on this site should be interpreted as individualized financial, legal, tax, or investment advice.
      </p>

      <h2>Reader trust matters</h2>
      <p>
        Trust signals matter for readers and advertisers alike. That is why we publish public-facing policy pages, risk disclosures, and contact information, and why we continue improving content quality, navigation, and transparency across the site.
      </p>

      <p>
        For questions, corrections, or business inquiries, visit our <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  )
}
