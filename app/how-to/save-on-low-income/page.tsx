import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Save Money on a Low Income: Practical Plan',
  description: 'Realistic ways to save when money’s tight. Trim the right expenses, maximize benefits, and build momentum with tiny automations.',
}

export default function SaveOnLowIncomePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Save on Low Income</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to save money on a low income (practical steps)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Realistic ways to save when money’s tight. Trim the right expenses, maximize benefits, and build momentum with tiny automations.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Start with wins that don't hurt</h2>
        <ul>
          <li>Renegotiate phone/internet (see scripts below).</li>
          <li>Switch to cheaper insurance tiers where suitable.</li>
          <li>Explore community benefits and tax credits.</li>
        </ul>

        <h2>Tiny automations</h2>
        <ul>
          <li>$10–$25 per paycheck to savings.</li>
          <li>Round‑ups on purchases.</li>
        </ul>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
          <h3 className="text-xl font-semibold text-orange-800 mb-2">Lower the "Big 3"</h3>
          <ul className="text-orange-700 space-y-2">
            <li><strong>Housing:</strong> roommates, move within your city, or negotiate at lease renewal.</li>
            <li><strong>Transport:</strong> transit pass, carpool, usage‑based insurance.</li>
            <li><strong>Food:</strong> plan 7 meals, repeat staples, bulk + frozen.</li>
          </ul>
        </div>

        <h2>Income boosters</h2>
        <ul>
          <li>Overtime/extra shifts, seasonal gigs, sell unused items.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much can I realistically save?</h3>
              <p className="text-gray-700">Start with 1–5%; raise as income improves.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I have debt?</h3>
              <p className="text-gray-700">Minimums + tiny savings → then increase savings while tackling high‑interest debt.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is cash‑only better?</h3>
              <p className="text-gray-700">If overspending is an issue, try cash for tricky categories.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}