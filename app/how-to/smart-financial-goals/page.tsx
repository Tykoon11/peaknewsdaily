import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SMART Financial Goals: Templates & Examples',
  description: 'Turn vague money wishes into SMART goals you’ll hit. Free template + examples for saving, debt, and investing.',
}

export default function SmartFinancialGoalsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">SMART Financial Goals</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to set SMART financial goals (templates + examples)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Turn vague money wishes into SMART goals you’ll hit. Free template + examples for saving, debt, and investing.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">The SMART framework</h2>
          <p className="text-blue-700"><strong>Specific, Measurable, Achievable, Relevant, Time‑bound</strong>.</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Template</h3>
          <p className="text-green-700 italic">"I will save <strong>$3,000</strong> for an emergency fund by <strong>June 30</strong> by transferring <strong>$250</strong> from each biweekly paycheck."</p>
        </div>

        <h2>Examples</h2>
        <ul>
          <li><strong>Debt:</strong> Pay off $2,400 card by Dec 31 with $200/month + snowball.</li>
          <li><strong>Savings:</strong> $1,200 holiday fund by Nov 15 at $100/month.</li>
          <li><strong>Investing:</strong> Increase retirement to 12% by next raise.</li>
        </ul>

        <h2>Tracking</h2>
        <ul>
          <li>Post goals where you see them; review monthly.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I miss a target?</h3>
              <p className="text-gray-700">Adjust the deadline, not the goal.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many goals at once?</h3>
              <p className="text-gray-700">1–3 max.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I stack goals?</h3>
              <p className="text-gray-700">Yes—finish one, redirect funds to the next.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}