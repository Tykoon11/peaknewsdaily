import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Refinance High-Interest Debt (Safely)',
  description: 'Lower your monthly payment or APR without risking your home or credit. Here\'s how to compare refinance options.',
}

export default function RefinanceHighInterestDebtSafelyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Refinance High-Interest Debt</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to refinance high-interest debt safely</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Lower your monthly payment or APR without risking your home or credit. Here's how to compare refinance options.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Paths</h2>
          <ul className="text-blue-700 space-y-2">
            <li><strong>Personal loan refinance</strong> (fixed APR).</li>
            <li><strong>Home equity</strong> (HELOC/second mortgage)—lowest rates, highest collateral risk.</li>
            <li><strong>Auto refinance</strong> (mind negative equity).</li>
            <li><strong>Student loan refinance</strong> (beware loss of government protections).</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>Check credit + DTI; fix quick wins (utilization, errors).</li>
            <li>Pre-qualify and compare APR + fees + term + total cost.</li>
            <li>Avoid extending terms so far that you pay more interest overall.</li>
            <li>Don't refinance unsecured → secured lightly.</li>
            <li>Finalize and set autopay; don't run up old cards again.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does refinance hurt credit?</h3>
              <p className="text-gray-700">Small short-term impact; can help long term.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a lower monthly payment always better?</h3>
              <p className="text-gray-700">Not if it means much more total interest.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Check Your Savings</h3>
          <p className="text-purple-700">Use our Refi Savings Estimator to see if it's worth it.</p>
        </div>
      </article>
    </main>
  )
}