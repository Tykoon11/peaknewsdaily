import { redirect } from 'next/navigation'

type Params = { slug: string }

const legacyPostRedirects: Record<string, string> = {
  'crypto-wallet-security-guide': '/how-to/setup-hardware-wallet-cold-storage',
  'position-sizing-guide-2025': '/education/position-sizing-101',
  'welcome-to-peaknewsdaily-trading': '/education/welcome',
  'sp-500-index-investing-complete-2025-strategy-guide': '/how-to/how-to-invest-for-the-long-term-evidence-based',
  'value-investing-2025-warren-buffett-strategy-modern-markets': '/how-to/how-to-invest-for-the-long-term-evidence-based',
  '2025-portfolio-diversification-guide-modern-asset-allocation-strategies': '/how-to/how-to-rebalance-your-portfolio-automatically',
  'esg-investing-guide-2025-sustainable-socially-responsible-investing': '/how-to/how-to-invest-for-the-long-term-evidence-based',
  'dividend-investing-strategy-2025-high-yield-stocks-income-portfolio': '/how-to/how-to-invest-for-the-long-term-evidence-based',
  'real-estate-investment-trusts-reits-complete-2025-guide': '/how-to/how-to-buy-your-first-rental-property-beginner-guide',
  'retirement-planning-2025-401k-ira-investment-strategies': '/how-to/how-to-calculate-your-retirement-number',
  'etf-vs-mutual-funds-2025-complete-comparison-smart-investors': '/how-to/how-to-pick-etfs-for-beginners',
}

export default async function LegacyPostRedirectPage({
  params,
}: {
  params: Params
}) {
  const destination = legacyPostRedirects[params.slug] ?? '/news'
  redirect(destination)
}
