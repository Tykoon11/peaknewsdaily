import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get Out of Debt on a Low Income (Realistic Plan)',
  description: 'A practical step-by-step to pay off debt when money is tight: triage, negotiate bills, increase income, and pick a payoff method.',
}

export default function GetOutOfDebtLowIncomePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Get Out of Debt Low Income</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to get out of debt on a low income</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A practical step-by-step to pay off debt when money is tight: triage, negotiate bills, increase income, and pick a payoff method.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Steps</h3>
          <ol className="text-orange-700 space-y-2">
            <li>Triage essentials: housing, food, utilities, transport.</li>
            <li>Build a $500–$1,000 starter emergency fund to stop new debt.</li>
            <li>Cut fixed costs: negotiate bills, cancel unused services, shop insurance.</li>
            <li>Boost income: overtime, side gigs, sell items, tax benefits.</li>
            <li>Choose snowball or avalanche; automate minimums + extra.</li>
            <li>Explore hardship plans or a DMP if APRs are crushing.</li>
            <li>Review monthly; celebrate milestones.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I save or pay debt first?</h3>
              <p className="text-gray-700">Keep a small buffer, then focus on high-cost debt.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is bankruptcy an option?</h3>
              <p className="text-gray-700">It can be a reset for severe cases—get local legal advice.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Get Started</h3>
          <p className="text-purple-700">Grab our Low-Income Debt Plan checklist (printable).</p>
        </div>
      </article>
    </main>
  )
}