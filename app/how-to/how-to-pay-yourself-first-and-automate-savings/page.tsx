import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pay Yourself First: Automate Savings That Stick',
  description: 'Save effortlessly by moving money before you see it. Learn the exact automations to hit your goals without willpower.',
}

export default function PayYourselfFirstPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Pay Yourself First</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to pay yourself first and automate savings</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Save effortlessly by moving money before you see it. Learn the exact automations to hit your goals without willpower.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">The sequence</h2>
          <ol className="text-green-700 space-y-2">
            <li>On payday, split your deposit: bills, savings, spending.</li>
            <li>Auto‑transfer to savings/investing <strong>the same day</strong> you get paid.</li>
            <li>Keep separate goal‑based sub‑accounts.</li>
          </ol>
        </div>

        <h2>What to automate</h2>
        <ul>
          <li>Emergency fund transfer</li>
          <li>Retirement/investing contribution</li>
          <li>Sinking funds (travel, car, gifts)</li>
          <li>Extra debt payment</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Example setup (biweekly)</h3>
          <ul>
            <li>$150 → Emergency</li>
            <li>$100 → Roth/TFSA/RRSP equivalent</li>
            <li>$50 → Car maintenance</li>
            <li>$25 → Gifts</li>
          </ul>
        </div>

        <h2>Make it invisible</h2>
        <ul>
          <li>Name accounts (e.g., "Paris 2026").</li>
          <li>Hide savings cards in your banking app.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Won't I overdraft?</h3>
              <p className="text-gray-700">Schedule savings after your paycheck clears and keep a small checking buffer.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which goal first?</h3>
              <p className="text-gray-700">Starter emergency fund → high‑interest debt → retirement.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often to review?</h3>
              <p className="text-gray-700">Quarterly; increase contributions after raises.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Previous</p>
            <Link 
              href="/how-to/how-to-create-a-zero-based-budget-step-by-step" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Zero-Based Budget</h3>
              <p className="text-sm text-blue-700 mt-1">Give every dollar a job</p>
            </Link>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Up Next</p>
            <Link 
              href="/how-to/how-to-build-a-3-6-month-emergency-fund-fast" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Build Emergency Fund Fast</h3>
              <p className="text-sm text-green-700 mt-1">3-6 months of expenses quickly</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}