import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Build Credit from Scratch Fast (US & Canada)',
  description: 'No credit history? Use secured cards, credit-builder loans, and reporting tools to build credit in months.',
}

export default function BuildCreditFromScratchPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Build Credit from Scratch</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to build credit from scratch (fastest methods)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          No credit history? Use secured cards, credit-builder loans, and reporting tools to build credit in months.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">0→700 plan</h2>
          <ul className="text-green-700 space-y-1">
            <li><strong>Secured credit card</strong> (deposit-backed; low limit is fine).</li>
            <li><strong>Credit-builder loan</strong> (funds locked while you "repay," then released).</li>
            <li><strong>Authorized user</strong> on a well-managed, older card (low utilization, no lates).</li>
            <li><strong>Report on-time payments</strong> (rent/phone) via approved services.</li>
            <li>Automate payments to avoid accidental lates.</li>
            <li>Keep utilization &lt;10–30% of limit.</li>
          </ul>
        </div>

        <h2>Timeline</h2>
        <p>First score may appear in ~1–3 months; meaningful growth in ~3–6 months with perfect habits.</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Mistakes to avoid</h3>
          <ul className="text-red-700 space-y-1">
            <li>Applying for many cards at once</li>
            <li>Letting balances report near the limit</li>
            <li>Missing a single payment (massive score hit)</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How fast can I build credit from zero?</h3>
              <p className="text-gray-700">First score appears in 1-3 months; good credit possible in 3-6 months with perfect habits.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I become an authorized user?</h3>
              <p className="text-gray-700">Yes, if the primary holder has excellent payment history and low utilization.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-get-a-secured-credit-card-and-upgrade-later" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Get Secured Card →</h3>
              <p className="text-sm text-blue-700 mt-1">Start building with a secured card</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-improve-your-credit-score-in-30-90-days" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Improve Score Fast →</h3>
              <p className="text-sm text-green-700 mt-1">Quick wins in 30-90 days</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}