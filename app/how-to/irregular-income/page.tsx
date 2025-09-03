import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Budgeting on Irregular Income: Freelancer Guide',
  description: 'Freelancers: stop the cash‑flow rollercoaster. Use a baseline budget, buffer account, and pay‑yourself‑a‑salary system to stay stable.',
}

export default function IrregularIncomePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Irregular Income</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to budget with irregular income (freelancers & gig workers)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Freelancers: stop the cash‑flow rollercoaster. Use a baseline budget, buffer account, and pay‑yourself‑a‑salary system to stay stable.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-2">Core system</h2>
          <ol className="text-orange-700 space-y-2">
            <li><strong>Find your Baseline Income:</strong> average the lowest 3 of the last 6 months.</li>
            <li><strong>Create a Buffer:</strong> keep 1 month of expenses in a separate "Income Smoothing" account.</li>
            <li><strong>Pay Yourself a Salary:</strong> transfer the same amount (baseline) on the 1st & 15th.</li>
            <li><strong>Overflow Rules:</strong> excess above 1 month buffer → taxes, emergency fund, goals, then discretionary.</li>
          </ol>
        </div>

        <h2>Category must‑haves</h2>
        <ul>
          <li><strong>Taxes:</strong> set aside 25–35% of profits (local rules vary).</li>
          <li><strong>Business reserve:</strong> 1–3 months of business expenses.</li>
          <li><strong>Irregulars:</strong> annual software, equipment, healthcare.</li>
        </ul>

        <h2>Invoice rhythm & cash‑flow hygiene</h2>
        <ul>
          <li>Invoice weekly, due in 7–14 days.</li>
          <li>Late‑fee clause, easy payment links, and automated reminders.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Example</h3>
          <p>Baseline expenses $3,000 → Pay yourself $3,200/month. Big month? Leave the excess in the buffer until it exceeds $3,200—then allocate to goals.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I have a $0 month?</h3>
              <p className="text-gray-700">Your buffer funds the salary; rebuild it next good month.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How big should my buffer be?</h3>
              <p className="text-gray-700">Start with 1 month; aim for 2.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need a business account?</h3>
              <p className="text-gray-700">Yes—separate business and personal to stay sane.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/50-30-20-rule" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← 50/30/20 Rule</h3>
              <p className="text-sm text-blue-700 mt-1">Simple budgeting framework</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/automatic-expense-tracking" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Automatic Expense Tracking →</h3>
              <p className="text-sm text-green-700 mt-1">No spreadsheets required</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}