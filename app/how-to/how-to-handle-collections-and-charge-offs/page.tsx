import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Handle Collections & Charge-Offs (Step-by-Step)',
  description: 'Stop damage from collections and charge-offs. Validate debts, negotiate, and improve your report the right way.',
}

export default function HandleCollectionsChargeOffsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Handle Collections & Charge-Offs</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to handle collections and charge-offs</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Stop damage from collections and charge-offs. Validate debts, negotiate, and improve your report the right way.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">First steps</h2>
          <ul className="text-red-700 space-y-1">
            <li>Validate the debt in writing; request itemization and proof you owe it.</li>
            <li>Know limitation periods (vary by province/state).</li>
            <li>No phone admissions; keep communication in writing.</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Resolution paths</h3>
          <ul className="text-blue-700 space-y-2">
            <li><strong>Pay for deletion</strong> (collector updates to "deleted" or "paid—deleted" where allowed).</li>
            <li><strong>Settle for less</strong> with a written agreement on how it will report.</li>
            <li><strong>If identity theft:</strong> Dispute and file a police/ID theft report; freeze credit.</li>
          </ul>
        </div>

        <h2>After payment/settlement</h2>
        <ul>
          <li>Get confirmation letter and monitor your report for correct updates.</li>
          <li>Build positive history to dilute the negative mark over time.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I pay old collections?</h3>
              <p className="text-gray-700">Only if you can negotiate pay-for-delete or need it gone for a loan. Paying doesn't improve score on old debts.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I settle for less than owed?</h3>
              <p className="text-gray-700">Often yes, especially on older debts. Get any agreement in writing first.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the collector won't validate the debt?</h3>
              <p className="text-gray-700">They must stop collection activities until they provide validation. Dispute with credit bureaus if they can't validate.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-remove-late-payments-from-your-report" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Remove Late Payments</h3>
              <p className="text-sm text-blue-700 mt-1">Goodwill & dispute strategies</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-get-a-secured-credit-card-and-upgrade-later" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Get Secured Card →</h3>
              <p className="text-sm text-green-700 mt-1">Rebuild with secured credit</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}