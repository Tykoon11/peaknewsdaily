import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Use a Balance Transfer Card (Step-by-Step)',
  description: 'Move debt to 0% APR the smart way. Learn timing, fees, payment strategy, and how to avoid rate shocks.',
}

export default function UseBalanceTransferCardRightWayPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Balance Transfer Card Right Way</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to use a balance transfer card the right way</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Move debt to 0% APR the smart way. Learn timing, fees, payment strategy, and how to avoid rate shocks.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>Pre-qualify for 0% APR (12–21 months).</li>
            <li>Check transfer fee (3–5%) and ensure the savings beat the fee.</li>
            <li>Transfer only what you can repay during promo.</li>
            <li>Set autopay for more than the minimum; divide balance by promo months.</li>
            <li>Don't spend on the BT card (purchase APR may differ).</li>
            <li>Set reminders 60/30/7 days before promo ends.</li>
            <li>If needed, roll remaining balance to a backup plan (loan or second BT).</li>
          </ol>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Pitfalls</h3>
          <ul className="text-red-700 space-y-1">
            <li>Paying late → losing the promo APR.</li>
            <li>Treating it like new credit to spend.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will closing old cards help?</h3>
              <p className="text-gray-700">Usually no; closing can hurt utilization.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I transfer between same bank cards?</h3>
              <p className="text-gray-700">Often no—different issuer helps.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Plan Your Payoff</h3>
          <p className="text-purple-700">Try our Balance Transfer Payoff Planner to set your monthly amount.</p>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-consolidate-credit-card-debt-options-compared" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Consolidate Credit Card Debt</h3>
              <p className="text-sm text-blue-700 mt-1">Compare all options first</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/category/how-to" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">More How-To Guides →</h3>
              <p className="text-sm text-green-700 mt-1">Explore all financial topics</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}