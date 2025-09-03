import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Refinance Your Mortgage: Do the Break-Even Math',
  description: 'Learn when refinancing pays off. Calculate break-even, compare closing costs, and avoid term traps that raise lifetime interest.',
}

export default function RefinanceMortgageBreakEvenPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Refinance Break-Even</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to refinance your mortgage (break-even analysis)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn when refinancing pays off. Calculate break-even, compare closing costs, and avoid term traps that raise lifetime interest.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            Refinancing is worth it if monthly savings × months you'll keep the loan ≥ total refi costs. Include appraisal, legal, lender fees, and rate/term changes. Watch "term reset" (e.g., 30 → new 30) which can increase lifetime interest despite a lower rate—consider matching remaining term.
          </p>
        </div>

        <h2>Reasons to refi (rate drop, cash-out, remove PMI, change term)</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Rate &amp; Term Refinance</h4>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>Lower interest rate (usually 0.5%+ drop worthwhile)</li>
              <li>Switch from ARM to fixed (or vice versa)</li>
              <li>Change loan term (30-year to 15-year)</li>
              <li>Remove PMI after home appreciation</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Cash-Out Refinance</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>Access home equity for investments</li>
              <li>Consolidate high-interest debt</li>
              <li>Fund major home improvements</li>
              <li>Education or business expenses</li>
            </ul>
          </div>
        </div>

        <h2>True cost of refinancing (line-item breakdown)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Cost Category</th>
                <th className="border border-gray-300 px-4 py-2">Typical Range</th>
                <th className="border border-gray-300 px-4 py-2">$400k Loan Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Origination/Points</td>
                <td className="border border-gray-300 px-4 py-2">0–1% of loan</td>
                <td className="border border-gray-300 px-4 py-2">$0–$4,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Appraisal</td>
                <td className="border border-gray-300 px-4 py-2">$300–$600</td>
                <td className="border border-gray-300 px-4 py-2">$500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Title insurance</td>
                <td className="border border-gray-300 px-4 py-2">$500–$2,000</td>
                <td className="border border-gray-300 px-4 py-2">$1,200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Legal/Notary</td>
                <td className="border border-gray-300 px-4 py-2">$500–$1,500</td>
                <td className="border border-gray-300 px-4 py-2">$800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Credit report</td>
                <td className="border border-gray-300 px-4 py-2">$25–$100</td>
                <td className="border border-gray-300 px-4 py-2">$50</td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border border-gray-300 px-4 py-2">Total Closing Costs</td>
                <td className="border border-gray-300 px-4 py-2">2–5% of loan</td>
                <td className="border border-gray-300 px-4 py-2">$2,550–$8,550</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Break-even formula with examples</h2>
        <p><strong>Basic break-even calculation:</strong></p>
        <div className="bg-gray-100 p-4 rounded my-4">
          <p className="font-mono text-center">
            Break-even months = Total closing costs ÷ Monthly savings
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Example: Rate Drop Refinance</h3>
          <div className="space-y-2 text-green-700">
            <p><strong>Current loan:</strong> $400,000 at 7.0%, 25 years left = $2,827/month</p>
            <p><strong>New loan:</strong> $400,000 at 5.5%, 30 years = $2,271/month</p>
            <p><strong>Monthly savings:</strong> $2,827 - $2,271 = $556</p>
            <p><strong>Closing costs:</strong> $4,000</p>
            <p><strong>Break-even:</strong> $4,000 ÷ $556 = 7.2 months</p>
          </div>
          <p className="mt-4 font-semibold text-green-900">Decision: If staying &gt;8 months, refinance makes sense</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Watch Out: Term Reset Trap</h3>
          <div className="space-y-2 text-red-700">
            <p>Same scenario but considering total interest:</p>
            <p><strong>Keep current loan:</strong> 25 years × $2,827 = $848,100 total payments</p>
            <p><strong>New 30-year loan:</strong> 30 years × $2,271 = $817,560 total payments</p>
            <p><strong>Better option:</strong> Refi to 25-year at 5.5% = $2,467/month, less lifetime interest</p>
          </div>
        </div>

        <h2>Pitfalls: term reset, prepayment penalties, points</h2>
        <p><strong>Common mistakes to avoid:</strong></p>
        <ul>
          <li><strong>Term reset:</strong> Going from 25 years left to new 30-year increases total interest</li>
          <li><strong>Prepayment penalties:</strong> Some loans charge 2–6 months interest to pay off early</li>
          <li><strong>Points confusion:</strong> Each point = 1% of loan amount, usually lowers rate by 0.25%</li>
          <li><strong>Cash-out limits:</strong> Most lenders cap at 80–90% of home value</li>
          <li><strong>Debt consolidation trap:</strong> Using home equity to pay credit cards, then running up cards again</li>
        </ul>

        <h2>US vs. Canada: portability, penalties, blend-and-extend</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">United States</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>Refinancing = new loan, full closing costs</li>
              <li>Usually no prepayment penalties on conventional loans</li>
              <li>30-year terms common, can refinance anytime</li>
              <li>Rate-and-term vs cash-out have different rules</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Canada</h4>
            <ul className="text-green-700 space-y-1 text-sm">
              <li><strong>Portability:</strong> Transfer mortgage to new home</li>
              <li><strong>Blend-and-extend:</strong> Mix current rate with new money</li>
              <li><strong>IRD penalties:</strong> Can be very expensive to break early</li>
              <li><strong>Renewal:</strong> Different from refinancing, happens every term</li>
            </ul>
          </div>
        </div>

        <h2>Checklist before you apply</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Pre-Application Checklist</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>☐ Calculate true break-even (include all costs)</li>
            <li>☐ Check credit score (740+ gets best rates)</li>
            <li>☐ Determine current home value (recent sales, online estimates)</li>
            <li>☐ Review current loan for prepayment penalties</li>
            <li>☐ Shop 3–5 lenders for quotes within 2-week window</li>
            <li>☐ Consider term options (don't just default to 30-year)</li>
            <li>☐ Evaluate cash-out needs vs home equity line of credit</li>
            <li>☐ Factor in how long you plan to stay in the home</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often can I refinance?</h3>
              <p className="text-gray-700">No legal limit, but most lenders require 6-month "seasoning" between refis. Consider closing costs and break-even each time.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is "no-cost" refinancing real?</h3>
              <p className="text-gray-700">Costs are built into higher interest rate or loan balance. True if you're not staying long-term, but compare total cost.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I buy points?</h3>
              <p className="text-gray-700">If you'll keep the loan long enough for lower payment to offset point cost. Each point usually saves 0.25% rate.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-avoid-pmi-or-remove-it-early" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Avoid/Remove PMI</h3>
              <p className="text-sm text-blue-700 mt-1">Hit 20% equity faster</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-compare-lenders-and-lock-your-rate" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibant text-green-900">Compare Lenders &amp; Lock Rate →</h3>
              <p className="text-sm text-green-700 mt-1">Shop without overpaying</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}