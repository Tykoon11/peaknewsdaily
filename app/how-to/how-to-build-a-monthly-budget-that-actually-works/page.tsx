import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build a Monthly Budget That Actually Works',
  description: 'Build a simple, realistic budget you\'ll actually follow. Learn the 5‑step system, categories, and tools to stay on track—without giving up what you love.',
}

export default function MonthlyBudgetPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Monthly Budget</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to build a monthly budget that actually works</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Build a simple, realistic budget you'll actually follow. Learn the 5‑step system, categories, and tools to stay on track—without giving up what you love.
        </p>
      </header>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Why most budgets fail</h2>
          <ul className="text-red-700 space-y-1">
            <li>They're too complex, too strict, or ignore real habits.</li>
            <li>The fix: keep it simple, automate, and review monthly.</li>
          </ul>
        </div>

        <h2>Step 1: Map your money (net income)</h2>
        <ul>
          <li>Use last 2–3 months of pay stubs and deposits.</li>
          <li>Average irregular income with a "baseline" (more on that below).</li>
        </ul>

        <h2>Step 2: List essential expenses (needs)</h2>
        <ul>
          <li>Housing, utilities, groceries, transport, minimum debt payments, insurance.</li>
          <li>Add annual/quarterly items as monthly "sinking funds."</li>
        </ul>

        <h2>Step 3: Prioritize goals</h2>
        <ul>
          <li>Emergency fund → debt payoff → retirement → big purchases.</li>
          <li>Assign target amounts and deadlines.</li>
        </ul>

        <h2>Step 4: Set spending plans by category</h2>
        <ul>
          <li>Start with 10–15 categories max.</li>
          <li>Give every dollar a job (zero-based or 50/30/20—your choice).</li>
        </ul>

        <h2>Step 5: Automate & track</h2>
        <ul>
          <li>Auto‑pay bills and auto‑transfer savings on payday.</li>
          <li>Track by "accounting for outcomes," not every latte: weekly category check‑ins.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Example starter categories</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>Housing (30–35%)</strong></p>
              <p>Utilities (5–10%)</p>
              <p>Food (10–15%)</p>
              <p>Transport (10–15%)</p>
            </div>
            <div>
              <p>Insurance (5–10%)</p>
              <p>Debt (10–20%)</p>
              <p>Savings/Investing (10–20%)</p>
              <p>Discretionary (5–15%)</p>
            </div>
          </div>
        </div>

        <h2>Monthly review ritual (15 minutes)</h2>
        <ol>
          <li>Check what worked/overran.</li>
          <li>Move surplus to goals or cover shortfalls.</li>
          <li>Reset category amounts for next month.</li>
        </ol>

        <h2>Pro tips</h2>
        <ul>
          <li>Separate accounts: bills, spending, savings.</li>
          <li>Use a "buffer" category for surprises.</li>
          <li>Keep a 1‑page budget; the best budget is the one you'll use.</li>
        </ul>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long until it "sticks"?</h3>
              <p className="text-gray-700">60–90 days. Expect adjustments.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need an app?</h3>
              <p className="text-gray-700">No. Bank alerts + a simple tracker works.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my income is variable?</h3>
              <p className="text-gray-700">Build using your conservative baseline and add "top‑up" rules (see Article #3).</p>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Up Next</p>
            <Link 
              href="/how-to/how-to-use-the-50-30-20-rule-to-budget" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">50/30/20 Rule: Simple Budget That Works</h3>
              <p className="text-sm text-blue-700 mt-1">Learn the popular budgeting framework</p>
            </Link>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Related</p>
            <Link 
              href="/how-to/how-to-create-a-zero-based-budget-step-by-step" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Zero‑Based Budget: Step‑by‑Step Guide</h3>
              <p className="text-sm text-green-700 mt-1">Give every dollar a job</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}