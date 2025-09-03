import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lower Credit Utilization Fast (Smart Tactics)',
  description: 'Cut credit utilization without closing accounts—timing tricks, payment strategy, and limit management.',
}

export default function LowerCreditUtilizationPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Lower Credit Utilization</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to lower credit utilization the smart way</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Cut credit utilization without closing accounts—timing tricks, payment strategy, and limit management.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Tactics</h2>
          <ul className="text-blue-700 space-y-1">
            <li>Multiple payments per month so statements report low balances.</li>
            <li>Spread balances across cards; avoid any card &gt;30% (ideally &lt;10%).</li>
            <li>Ask for higher limits (soft pull preferred).</li>
            <li>Keep old cards open to preserve total available credit.</li>
            <li>Time large purchases after the statement date so they don't report.</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Do not</h3>
          <ul className="text-red-700 space-y-1">
            <li>Close your oldest credit card just to "clean up."</li>
            <li>Max out cards—even briefly—before a major loan application.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the best utilization percentage?</h3>
              <p className="text-gray-700">Under 10% overall, with no individual card over 30%.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I pay my credit card?</h3>
              <p className="text-gray-700">Before the statement date to report lower balances, but keep one card with small usage.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will asking for credit increases hurt my score?</h3>
              <p className="text-gray-700">Ask if it's a soft pull first. Hard pulls may lower score temporarily but increase available credit.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-improve-your-credit-score-in-30-90-days" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Improve Score 30-90 Days</h3>
              <p className="text-sm text-blue-700 mt-1">Quick wins for credit improvement</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-remove-late-payments-from-your-report" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Remove Late Payments →</h3>
              <p className="text-sm text-green-700 mt-1">Goodwill & dispute strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}