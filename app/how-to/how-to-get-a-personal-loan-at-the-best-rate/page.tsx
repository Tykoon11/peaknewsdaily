import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get a Personal Loan at the Best Rate',
  description: 'Boost your approval odds and lower your APR with these steps: shop multiple lenders, improve your credit, and pick the right term.',
}

export default function GetPersonalLoanBestRatePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Personal Loan Best Rate</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to get a personal loan at the best rate</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Boost your approval odds and lower your APR with these steps: shop multiple lenders, improve your credit, and pick the right term.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>Check your credit and dispute errors before applying.</li>
            <li>Improve quick wins: utilization under 30%, pay small collections, add income.</li>
            <li>Pre-qualify with 3–5 lenders (soft pulls).</li>
            <li>Compare APR, fees, term, total interest—not just monthly payment.</li>
            <li>Pick the shortest term you can comfortably afford.</li>
            <li>Use autopay and consider a creditworthy co-borrower to cut APR.</li>
          </ol>
        </div>

        <h2>Pro tips</h2>
        <ul>
          <li>Credit unions often beat big banks.</li>
          <li>Avoid add-on products (credit insurance) unless needed.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fixed or variable?</h3>
              <p className="text-gray-700">Fixed = predictable; variable may start lower but can rise.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much can I borrow?</h3>
              <p className="text-gray-700">Typically $1k–$50k+ depending on credit/income.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Get Started</h3>
          <p className="text-purple-700">Get rate quotes from top lenders in 60 seconds (no hard pull).</p>
        </div>
      </article>
    </main>
  )
}