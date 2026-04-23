import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'Understand how PeakNewsDaily approaches sourcing, corrections, attribution, and editorial quality.'
}

export default function EditorialPolicyPage() {
  return (
    <LegalPage
      eyebrow="Editorial Standards"
      title="Editorial Policy"
      description="PeakNewsDaily aims to publish useful, well-attributed, reader-first content. This page explains the standards that guide our reporting, summaries, and educational articles."
    >
      <h2>Core principles</h2>
      <ul>
        <li>Clarity over hype</li>
        <li>Attribution over ambiguity</li>
        <li>Usefulness over filler</li>
        <li>Corrections over defensiveness</li>
      </ul>

      <h2>Sourcing and attribution</h2>
      <p>
        We strive to identify original sources, name publishers when summarizing outside reporting, and link to primary or source material when appropriate. Aggregated summaries should not be presented as original reporting.
      </p>

      <h2>Educational content</h2>
      <p>
        Guides and explainers are written for informational and educational purposes. They are reviewed for clarity and practical value, but readers should still verify facts, rates, regulations, and platform-specific terms before acting.
      </p>

      <h2>Corrections policy</h2>
      <p>
        If a material factual error is identified, we aim to correct it promptly. Readers can send corrections to <a href="mailto:editor@peaknewsdaily.com">editor@peaknewsdaily.com</a> and should include the affected URL plus supporting detail.
      </p>

      <h2>Commercial relationships</h2>
      <p>
        If PeakNewsDaily publishes sponsored, affiliate-supported, or promotional content, the commercial nature of that content should be disclosed clearly so readers can distinguish it from standard editorial material.
      </p>
    </LegalPage>
  )
}
