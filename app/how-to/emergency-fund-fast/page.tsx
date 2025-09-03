import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Build a 3–6 Month Emergency Fund—Fast',
  description: 'A practical plan to save 3–6 months of expenses quickly. Use tiers, temporary cuts, and windfalls to hit the goal.',
}

export default function EmergencyFundFastPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Emergency Fund Fast</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to build a 3–6 month emergency fund fast</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A practical plan to save 3–6 months of expenses quickly. Use tiers, temporary cuts, and windfalls to hit the goal.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Target the right number</h2>
        <ul>
          <li>Add rent/mortgage, utilities, food, transport, insurance, minimum debt.</li>
          <li>Multiply by 3–6 based on job stability and dependents.</li>
        </ul>

        <h2>Fast‑track tactics</h2>
        <ul>
          <li>Temporary 60‑day "sprint budget."</li>
          <li>Sell 3–5 high‑value items.</li>
          <li>Redirect tax refunds/bonuses.</li>
          <li>Take a short‑term side gig; earmark 100% to the fund.</li>
        </ul>

        <h2>Where to keep it</h2>
        <ul>
          <li>High‑yield savings, not invested. Must be liquid and safe.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Milestones</h3>
          <p>$1,000 starter → 1 month → 3 months → 6 months.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is 12 months overkill?</h3>
              <p className="text-gray-700">For volatile income or single earners, consider 9–12.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I invest it?</h3>
              <p className="text-gray-700">No—this is for emergencies, not growth.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use it for a car?</h3>
              <p className="text-gray-700">That's a sinking fund, not an emergency.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}