import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Remove Late Payments (Goodwill & Disputes)',
  description: 'Late payment on your credit report? Learn goodwill, proof-of-error, and pay-for-delete strategies that actually work.',
}

export default function RemoveLatePaymentsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Remove Late Payments</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to remove late payments from your report</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Late payment on your credit report? Learn goodwill, proof-of-error, and pay-for-delete strategies that actually work.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Options</h2>
          <ul className="text-blue-700 space-y-2">
            <li><strong>Was it reporting error?</strong> Dispute with evidence (bank statements, confirmations).</li>
            <li><strong>Is it legit but isolated?</strong> Try a goodwill request to the lender if you have a strong on-time history.</li>
            <li><strong>Auto-pay setup:</strong> Show that you've fixed the root cause.</li>
            <li><strong>Severe delinquencies:</strong> Negotiate to re-age or to update as "paid as agreed" (rare but possible).</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Scripts (mini)</h3>
          <div className="text-green-700 space-y-4">
            <div>
              <p><strong>Goodwill:</strong> "I value our relationship and have been on time for X years; this one late was due to ___ (documented). Please consider removing as a goodwill adjustment."</p>
            </div>
            <div>
              <p><strong>Error dispute:</strong> "Attached proof shows on-time payment. Please correct inaccurate reporting."</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How successful are goodwill letters?</h3>
              <p className="text-gray-700">Higher success with isolated lates, long positive history, and documented hardship.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I remove accurate late payments?</h3>
              <p className="text-gray-700">Only through goodwill requests or negotiation—you can't dispute accurate information.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long do late payments stay on my report?</h3>
              <p className="text-gray-700">Typically 7 years, but impact lessens over time.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-lower-credit-utilization-the-smart-way" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Lower Credit Utilization</h3>
              <p className="text-sm text-blue-700 mt-1">Smart tactics that work fast</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-handle-collections-and-charge-offs" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Handle Collections →</h3>
              <p className="text-sm text-green-700 mt-1">Stop damage from collections</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}