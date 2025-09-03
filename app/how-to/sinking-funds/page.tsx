import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sinking Funds: Pay for Big Purchases Without Debt',
  description: 'Avoid debt on big expenses by saving a little each month. Learn how to set up sinking funds and track them easily.',
}

export default function SinkingFundsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Sinking Funds</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to use sinking funds for big purchases</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Avoid debt on big expenses by saving a little each month. Learn how to set up sinking funds and track them easily.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">What is a sinking fund?</h2>
          <p className="text-blue-700">A dedicated mini‑savings for a known future expense (car repairs, travel, gifts).</p>
        </div>

        <h2>Setup</h2>
        <ol>
          <li>Pick the expense and target date.</li>
          <li>Divide cost by months left = monthly amount.</li>
          <li>Create separate sub‑accounts or labeled trackers.</li>
        </ol>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Examples</h3>
          <ul>
            <li>Car maintenance: $600/year → $50/month.</li>
            <li>Travel: $2,400 in 12 months → $200/month.</li>
          </ul>
        </div>

        <h2>Tips</h2>
        <ul>
          <li>Automate transfers.</li>
          <li>Keep funds in high‑yield savings but separate from emergency fund.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many funds is too many?</h3>
              <p className="text-gray-700">3–7 active funds is a sweet spot.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if timing changes?</h3>
              <p className="text-gray-700">Recalculate monthly amount.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I borrow from one?</h3>
              <p className="text-gray-700">Only if you replenish next month.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}