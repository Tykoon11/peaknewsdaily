import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'APR vs. Interest Rate: What\'s the Difference?',
  description: 'Learn why APR is the true borrowing cost. See examples for loans and credit cards so you don\'t overpay.',
}

export default function CalculateAPRVsInterestRatePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">APR vs Interest Rate</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to calculate APR vs interest rate (and why it matters)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn why APR is the true borrowing cost. See examples for loans and credit cards so you don't overpay.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Explainer</h2>
          <ul className="text-blue-700 space-y-2">
            <li><strong>Interest Rate:</strong> Cost of borrowing without most fees.</li>
            <li><strong>APR:</strong> Annualized rate that includes fees (origination, certain costs).</li>
          </ul>
        </div>

        <h2>Why it matters</h2>
        <ul>
          <li>For installment loans, compare APR across lenders.</li>
          <li>For credit cards, purchase APR + fees define real cost of carrying a balance.</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps to compare offers</h3>
          <ol className="text-green-700 space-y-2">
            <li>Line up APR, fees, term.</li>
            <li>Calculate total interest over the life of the loan.</li>
            <li>Watch compounding and promotional rates.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a lower interest rate always cheaper?</h3>
              <p className="text-gray-700">Not if fees make the APR higher.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do all fees go into APR?</h3>
              <p className="text-gray-700">Not always (varies by product/region). Compare total cost too.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Calculate Your Cost</h3>
          <p className="text-purple-700">Use our APR vs. Rate calculator to see your real cost in seconds.</p>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-get-a-personal-loan-at-the-best-rate" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Personal Loan Best Rates</h3>
              <p className="text-sm text-blue-700 mt-1">Apply this knowledge to get the best rate</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/category/how-to" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">More How-To Guides →</h3>
              <p className="text-sm text-green-700 mt-1">Explore all financial topics</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}