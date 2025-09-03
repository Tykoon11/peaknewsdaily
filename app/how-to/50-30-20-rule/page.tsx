import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '50/30/20 Rule: Simple Budget That Works',
  description: 'Learn the 50/30/20 budgeting rule, what counts as needs vs. wants, and how to adapt it for debt or low income. Includes quick setup checklist.',
}

export default function Rule503020Page() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">50/30/20 Rule</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to use the 50/30/20 rule to budget</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn the 50/30/20 budgeting rule, what counts as needs vs. wants, and how to adapt it for debt or low income. Includes quick setup checklist.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">The formula</h2>
          <ul className="text-blue-700 space-y-2">
            <li><strong>50% Needs:</strong> housing, utilities, groceries, transport, minimum debt, insurance.</li>
            <li><strong>30% Wants:</strong> dining out, entertainment, subscriptions, travel.</li>
            <li><strong>20% Saving/Debt:</strong> emergency fund, investing, extra debt payments.</li>
          </ul>
        </div>

        <h2>Setup in 10 minutes</h2>
        <ol>
          <li>Find your after‑tax monthly income.</li>
          <li>Multiply by 0.50, 0.30, 0.20 for target caps.</li>
          <li>Map each expense to Needs vs. Wants.</li>
          <li>Automate the 20% on payday.</li>
        </ol>

        <h2>Adapting the rule</h2>
        <ul>
          <li><strong>High housing costs:</strong> Nudge to 60/20/20 temporarily.</li>
          <li><strong>Debt payoff sprint:</strong> Try 50/20/30 (swap Wants/Saving percentages).</li>
          <li><strong>Low income:</strong> Keep Wants at 10–15% and push more to Needs until income grows.</li>
        </ul>

        <h2>Common misclassifications</h2>
        <ul>
          <li>Groceries = Need; takeout = Want.</li>
          <li>Phone: base plan = Need; add‑ons = Want.</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Examples</h3>
          <p><strong>$4,000 net/month →</strong></p>
          <ul className="mt-2">
            <li>Needs $2,000 (50%)</li>
            <li>Wants $1,200 (30%)</li>
            <li>Saving/Debt $800 (20%)</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is 50/30/20 realistic?</h3>
              <p className="text-gray-700">Yes—treat it as a guide, not a law.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I invest inside the 20%?</h3>
              <p className="text-gray-700">Absolutely. Prioritize emergency fund first.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about childcare?</h3>
              <p className="text-gray-700">It's a Need; adjust other categories accordingly.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-build-a-monthly-budget" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← How to Build a Monthly Budget</h3>
              <p className="text-sm text-blue-700 mt-1">Complete budgeting system</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/irregular-income" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Budgeting on Irregular Income →</h3>
              <p className="text-sm text-green-700 mt-1">For freelancers & gig workers</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}