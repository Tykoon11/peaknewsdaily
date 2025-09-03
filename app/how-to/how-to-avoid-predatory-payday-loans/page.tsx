import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Avoid Predatory Payday Loans (Safer Alternatives)',
  description: 'Payday loans are expensive and risky. Learn legal risks, warning signs, and better options that won\'t trap you in debt.',
}

export default function AvoidPredatoryPaydayLoansPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Predatory Payday Loans</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to avoid predatory payday loans</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Payday loans are expensive and risky. Learn legal risks, warning signs, and better options that won't trap you in debt.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Warning signs</h2>
          <p className="text-red-700">Triple-digit APR equivalents, rollovers, "no credit check," access to your bank account, aggressive collections.</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Safer alternatives</h3>
          <ul className="text-green-700 space-y-2">
            <li>Paycheck advance from employer or earned-wage access.</li>
            <li>Credit union small-dollar loans (PALs).</li>
            <li>Payment plan with utility/creditor.</li>
            <li>Local assistance programs.</li>
            <li>Side income gigs + budget triage.</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Steps if you're stuck</h3>
          <ol className="text-orange-700 space-y-2">
            <li>Stop rollovers; request an installment plan if allowed.</li>
            <li>Close/restrict ACH access after payoff.</li>
            <li>Prioritize essentials; negotiate other bills.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are payday loans legal where I live?</h3>
              <p className="text-gray-700">Laws vary by province/state—check your regulator.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will it help my credit?</h3>
              <p className="text-gray-700">Most don't report positive payments; some report delinquencies.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Better Options</h3>
          <p className="text-purple-700">See 10 payday-loan alternatives you can apply for today.</p>
        </div>
      </article>
    </main>
  )
}