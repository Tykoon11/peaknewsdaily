import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zero‑Based Budget: Step‑by‑Step Guide',
  description: 'Give every dollar a job. Build a flexible zero‑based budget with envelopes, sinking funds, and monthly rollovers.',
}

export default function ZeroBasedBudgetPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Zero-Based Budget</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to create a zero-based budget step by step</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Give every dollar a job. Build a flexible zero‑based budget with envelopes, sinking funds, and monthly rollovers.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">The idea</h2>
          <p className="text-blue-700">Income – Outgo = <strong>Zero</strong> (on purpose). Every dollar goes to a category: bills, goals, and fun.</p>
        </div>

        <h2>Steps</h2>
        <ol>
          <li>List net income for the month.</li>
          <li>Create categories (needs, wants, savings).</li>
          <li>Assign dollars until the unassigned balance = 0.</li>
          <li>Spend from categories; move money as needed.</li>
          <li>Reconcile weekly; reset next month.</li>
        </ol>

        <h2>Envelopes & sinking funds</h2>
        <ul>
          <li>Digital or physical envelopes for groceries, fuel, dining, etc.</li>
          <li>Add sinking funds: car maintenance, gifts, travel.</li>
        </ul>

        <h2>Handling mid‑month surprises</h2>
        <ul>
          <li>Move $$ from lower‑priority wants.</li>
          <li>Keep a small "miscellaneous" envelope.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Isn't this rigid?</h3>
              <p className="text-gray-700">It's flexible—move money, keep the plan.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about annual bills?</h3>
              <p className="text-gray-700">Fund monthly as sinking funds.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do rollovers expire?</h3>
              <p className="text-gray-700">Choose: monthly reset or allow rollovers.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}