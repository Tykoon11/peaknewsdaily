import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Ways to Consolidate Credit Card Debt (Pros & Cons)',
  description: 'Compare balance transfers, personal loans, HELOCs, and DMPs. See costs, requirements, and when consolidation actually saves money.',
}

export default function ConsolidateCreditCardDebtPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Consolidate Credit Card Debt</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to consolidate credit card debt (options compared)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Compare balance transfers, personal loans, HELOCs, and DMPs. See costs, requirements, and when consolidation actually saves money.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Options (with who it fits)</h2>
          <ul className="text-blue-700 space-y-2">
            <li><strong>0% Balance Transfer (12–21 mo):</strong> Strong credit, can pay off fast, low fee (3–5%).</li>
            <li><strong>Personal Loan (fixed APR):</strong> Good credit, need predictable payments 2–5 yrs.</li>
            <li><strong>HELOC/Home Equity:</strong> Homeowners seeking low rates; risk: home as collateral.</li>
            <li><strong>Debt Management Plan (DMP):</strong> Through nonprofit; lowers rates, not a loan.</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>Pull your credit reports + FICO/VantageScore.</li>
            <li>Calculate payoff time and compare APR + fees.</li>
            <li>Use a debt consolidation calculator (we provide one).</li>
            <li>Apply for your chosen option; don't close old cards immediately.</li>
            <li>Set autopay + payment reminders; avoid new spending until paid.</li>
          </ol>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Pitfalls</h3>
          <ul className="text-red-700 space-y-1">
            <li>Fees wiping out savings (BT fees, origination).</li>
            <li>Consolidating without fixing spending triggers.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will consolidation hurt my credit?</h3>
              <p className="text-gray-700">There may be a small, short-term dip; on-time payments usually help over time.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it always cheaper?</h3>
              <p className="text-gray-700">Only if the effective APR and total fees are lower than current blended APR.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Check Your Savings</h3>
          <p className="text-purple-700">Try our Consolidation Calculator to check if you'll actually save.</p>
        </div>
      </article>
    </main>
  )
}