import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Mortgage Lenders & Lock Your Rate (Without Overpaying)',
  description: 'Rate vs APR, fees to watch, timing a rate lock, and how to shop multiple quotes in 48 hours without tanking your credit.',
}

export default function CompareLendersRateLockPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Compare Lenders Rate Lock</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to compare lenders and lock your rate</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Rate vs APR, fees to watch, timing a rate lock, and how to shop multiple quotes in 48 hours without tanking your credit.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            Collect 3–5 Loan Estimates on the same day and compare APR, points, and lender fees—not just the rate. Ask about lock length (30–120 days), extension costs, and float-down options. Batch applications within a short window so credit pulls count as one inquiry for scoring.
          </p>
        </div>

        <h2>Rate vs. APR vs. points (what really moves cost)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Term</th>
                <th className="border border-gray-300 px-4 py-2">Definition</th>
                <th className="border border-gray-300 px-4 py-2">What It Tells You</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Interest Rate</td>
                <td className="border border-gray-300 px-4 py-2">Base rate charged on loan balance</td>
                <td className="border border-gray-300 px-4 py-2">Monthly payment calculation</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">APR</td>
                <td className="border border-gray-300 px-4 py-2">Rate + fees expressed annually</td>
                <td className="border border-gray-300 px-4 py-2">True cost of loan for comparison</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Points</td>
                <td className="border border-gray-300 px-4 py-2">1 point = 1% of loan amount upfront</td>
                <td className="border border-gray-300 px-4 py-2">Usually buys 0.125–0.25% lower rate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Example: Why APR Matters</h3>
          <div className="space-y-2 text-yellow-700">
            <p><strong>Lender A:</strong> 6.00% rate, $2,000 fees, 6.15% APR</p>
            <p><strong>Lender B:</strong> 6.25% rate, $500 fees, 6.28% APR</p>
            <p><strong>Better deal:</strong> Lender A (lower APR despite higher rate)</p>
          </div>
          <p className="mt-4 text-sm text-yellow-600">*Assuming you keep the loan for full term. If paying off early, lower fees matter more.</p>
        </div>

        <h2>Read the Loan Estimate / Cost of Borrowing disclosure</h2>
        <p><strong>Key sections to compare (page 1):</strong></p>
        <ul>
          <li><strong>Loan amount</strong> – Make sure all quotes are for same amount</li>
          <li><strong>Interest rate</strong> – What you'll pay monthly</li>
          <li><strong>Monthly P&I</strong> – Principal and interest payment</li>
          <li><strong>APR</strong> – True cost for comparison</li>
        </ul>

        <p><strong>Key sections to compare (page 2):</strong></p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Section A: Origination Charges</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>Origination fee (%)</li>
              <li>Points (discount points)</li>
              <li>Processing, underwriting fees</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibant text-blue-800 mb-2">Section B: Third-Party Services</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>Appraisal, credit report</li>
              <li>Title insurance, attorney fees</li>
              <li>Survey, pest inspection</li>
            </ul>
          </div>
        </div>

        <h2>Lock periods, extensions, float-down</h2>
        <p><strong>Standard lock periods:</strong></p>
        <ul>
          <li><strong>30 days:</strong> Quick closings, often free</li>
          <li><strong>45-60 days:</strong> Most common, small fee or rate increase</li>
          <li><strong>90-120 days:</strong> New construction, costs 0.125–0.50% more</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Lock Options to Ask About</h3>
          <ul className="text-green-700 space-y-2">
            <li><strong>Float-down:</strong> Capture lower rates if they drop during lock period</li>
            <li><strong>Lock extensions:</strong> Cost if closing is delayed (usually 0.125–0.25% per 15 days)</li>
            <li><strong>Free re-lock:</strong> Some lenders offer if rate drops significantly</li>
            <li><strong>Construction-to-perm:</strong> Extended locks for new builds</li>
          </ul>
        </div>

        <h2>Timing &amp; credit impacts (rate-shopping window)</h2>
        <p><strong>Credit score protection:</strong></p>
        <ul>
          <li>All mortgage inquiries within 14–45 days count as single inquiry</li>
          <li>Shop all lenders within this window to minimize credit impact</li>
          <li>Don't apply for other credit during house-hunting period</li>
          <li>Each hard pull may lower score 2–5 points temporarily</li>
        </ul>

        <p><strong>Best timing strategy:</strong></p>
        <ol>
          <li>Research lenders online first (no credit pulls)</li>
          <li>Pick 3–5 lenders to get official Loan Estimates</li>
          <li>Apply to all within 48 hours on same business day</li>
          <li>Compare offers and negotiate</li>
          <li>Lock rate with chosen lender</li>
        </ol>

        <h2>Negotiating: match/beat quotes, lender credits</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Negotiation Tactics</h3>
          <ul className="text-purple-700 space-y-2">
            <li><strong>Rate matching:</strong> Ask if they'll match competitor's rate/fees</li>
            <li><strong>Lender credits:</strong> Trade higher rate for reduced closing costs</li>
            <li><strong>Fee waivers:</strong> Application, processing, or underwriting fees</li>
            <li><strong>Appraisal waivers:</strong> Some loans qualify for automated valuation</li>
            <li><strong>Bulk discounts:</strong> If buying multiple properties or high loan amount</li>
          </ul>
        </div>

        <p><strong>What to say:</strong> "Lender X offered me [specific rate/terms]. Can you match or beat that?"</p>

        <h2>Types of lenders to consider</h2>
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Big Banks</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li><strong>Pros:</strong> One-stop shopping, branch access</li>
              <li><strong>Cons:</strong> Often higher rates, slower service</li>
              <li><strong>Best for:</strong> Existing customers, complex situations</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Credit Unions</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li><strong>Pros:</strong> Lower rates, member focus</li>
              <li><strong>Cons:</strong> Membership required, limited programs</li>
              <li><strong>Best for:</strong> Members, straightforward loans</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Online Lenders</h4>
            <ul className="text-purple-700 text-sm space-y-1">
              <li><strong>Pros:</strong> Competitive rates, fast process</li>
              <li><strong>Cons:</strong> No in-person service</li>
              <li><strong>Best for:</strong> Tech-savvy, rate shoppers</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does locking a rate cost money?</h3>
              <p className="text-gray-700">Most 30-60 day locks are free. Longer locks (90+ days) often cost 0.125-0.50% of loan amount or add to rate.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch lenders after locking?</h3>
              <p className="text-gray-700">Yes, but you lose your rate lock and pay application fees again. Only switch if you find significantly better terms.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if rates drop after I lock?</h3>
              <p className="text-gray-700">Ask about float-down provisions upfront. Some lenders offer one-time re-lock if rates drop 0.25%+ during lock period.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-refinance-your-mortgage-break-even-analysis" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Refinance Break-Even</h3>
              <p className="text-sm text-blue-700 mt-1">Do the math first</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-buy-your-first-rental-property-beginner-guide" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">First Rental Property →</h3>
              <p className="text-sm text-green-700 mt-1">Beginner's guide to investing</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}