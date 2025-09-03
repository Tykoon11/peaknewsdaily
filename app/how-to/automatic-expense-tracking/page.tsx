import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Track Expenses Automatically (No Spreadsheets)',
  description: 'Ditch manual tracking. Link accounts, set rules, and let your money categorize itself. Learn simple automations that actually work.',
}

export default function AutomaticExpenseTrackingPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Automatic Expense Tracking</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to track expenses automatically without spreadsheets</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Ditch manual tracking. Link accounts, set rules, and let your money categorize itself. Learn simple automations that actually work.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Set up in 4 steps</h2>
        <ol>
          <li><strong>Connect accounts</strong> in a reputable aggregator or your bank's app.</li>
          <li><strong>Create 10–15 master categories</strong> that match your budget.</li>
          <li><strong>Write rules:</strong> "If merchant = Shell → category = Transport."</li>
          <li><strong>Review weekly:</strong> fix mislabels; the system improves over time.</li>
        </ol>

        <h2>Automations that help</h2>
        <ul>
          <li>Push notifications for large transactions.</li>
          <li>Bill‑due alerts; low‑balance alerts.</li>
          <li>Round‑ups to savings; paycheck splits on deposit.</li>
        </ul>

        <h2>Privacy & security basics</h2>
        <ul>
          <li>Use read‑only connections when possible.</li>
          <li>Enable 2FA; review connected apps quarterly.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Mini‑audit checklist (once a week)</h3>
          <ul>
            <li>Top 10 merchants this week</li>
            <li>Subscriptions renewed</li>
            <li>Categories over plan</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to track cash?</h3>
              <p className="text-gray-700">Keep cash minimal or log it as one "Cash spend" per week.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if categories get messy?</h3>
              <p className="text-gray-700">Reduce to fewer buckets; add rules.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will this replace a budget?</h3>
              <p className="text-gray-700">It powers it—budget = plan, tracking = feedback.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}