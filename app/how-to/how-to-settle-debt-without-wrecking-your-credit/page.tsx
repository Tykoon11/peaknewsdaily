import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Settle Debt Without Destroying Your Credit',
  description: 'Learn when settlement makes sense, how to negotiate, tax traps to avoid, and how to start rebuilding your credit right after.',
}

export default function SettleDebtWithoutWreckingCreditPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Settle Debt Right Way</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to settle debt without wrecking your credit</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn when settlement makes sense, how to negotiate, tax traps to avoid, and how to start rebuilding your credit right after.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-2">When it fits</h2>
          <p className="text-orange-700">You're 90–180+ days behind and can't catch up; lump sum available.</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>Save a realistic lump sum (40–60% is common, varies widely).</li>
            <li>Ask for "settled in full" and 1099-C expectations in writing.</li>
            <li>Pay via traceable method; never give full bank access.</li>
            <li>Monitor credit; dispute any inaccurate reporting.</li>
            <li>Start rebuilding (secured card, on-time utilities, low utilization).</li>
          </ol>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Pitfalls</h3>
          <ul className="text-red-700 space-y-1">
            <li>Paying a "settlement company" high fees to do what you can do yourself.</li>
            <li>Ignoring tax on forgiven amounts (may apply).</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long will it hurt my credit?</h3>
              <p className="text-gray-700">Negative marks can linger up to 6–7 years; impact lessens over time with positive behavior.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I get a mortgage later?</h3>
              <p className="text-gray-700">Yes—after re-establishing solid credit/payment history.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Plan Your Settlement</h3>
          <p className="text-purple-700">Use our Settlement Planner to model offers and credit impact.</p>
        </div>
      </article>
    </main>
  )
}