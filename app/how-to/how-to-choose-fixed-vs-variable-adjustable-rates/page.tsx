import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fixed vs. Variable/Adjustable Mortgage Rates: How to Choose',
  description: 'Compare fixed vs. variable/ARM mortgages by payment stability, risk, break-even math, and rate outlook—plus when each wins.',
}

export default function FixedVsVariableRatesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Fixed vs Variable Rates</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to choose fixed vs variable/adjustable rates</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Compare fixed vs. variable/ARM mortgages by payment stability, risk, break-even math, and rate outlook—plus when each wins.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            Choose fixed for payment certainty and easy budgeting. Choose variable/ARM if you can handle payment changes and expect rates to fall before your reset. Compare total 5-year cost using today's fixed rate vs. a rate path for variable (caps, margins). If a +1–2% rise breaks your budget, fixed is safer.
          </p>
        </div>

        <h2>How fixed, variable, and ARMs work (terms, caps, margins)</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Fixed Rate</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li><strong>Rate:</strong> Stays same for entire term</li>
              <li><strong>Payment:</strong> Never changes (predictable)</li>
              <li><strong>Term:</strong> 15-30 years (US), 1-10 years (Canada)</li>
              <li><strong>Risk:</strong> Interest rate risk to lender</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Variable/ARM</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li><strong>Rate:</strong> Changes with market conditions</li>
              <li><strong>Payment:</strong> Can go up or down</li>
              <li><strong>Benchmark:</strong> Prime (Canada), Fed funds/SOFR (US)</li>
              <li><strong>Risk:</strong> Payment shock to borrower</li>
            </ul>
          </div>
        </div>

        <p><strong>Key Terms to Understand:</strong></p>
        <ul>
          <li><strong>Margin/Spread</strong> – Fixed amount added to benchmark (e.g., Prime + 0.5%)</li>
          <li><strong>Caps</strong> – Maximum rate increase per adjustment/lifetime</li>
          <li><strong>Floor</strong> – Minimum rate (often the margin)</li>
          <li><strong>Adjustment frequency</strong> – Monthly, annually, or at renewal</li>
        </ul>

        <h2>Decision factors: budget tolerance, time horizon, rate outlook</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Choose Fixed If:</h3>
          <ul className="text-yellow-700 space-y-1">
            <li>You need predictable payments for budgeting</li>
            <li>You're stretching to qualify (tight debt ratios)</li>
            <li>You expect rates to rise significantly</li>
            <li>You're risk-averse or new to homeownership</li>
            <li>Current fixed rates are historically attractive</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Choose Variable/ARM If:</h3>
          <ul className="text-purple-700 space-y-1">
            <li>You can handle payment increases of 20-30%</li>
            <li>You expect rates to fall or stay stable</li>
            <li>You plan to sell/refinance within 3-5 years</li>
            <li>Variable rate discount is substantial (&gt;0.5-1.0%)</li>
            <li>You have stable, growing income</li>
          </ul>
        </div>

        <h2>Break-even analysis: when does variable beat fixed?</h2>
        
        <p><strong>Simple Break-Even Formula:</strong></p>
        <div className="bg-gray-100 p-4 rounded my-4">
          <p className="font-mono text-center">
            Monthly savings × months = total savings<br/>
            If total savings &gt; switching costs, variable wins
          </p>
        </div>

        <p><strong>Example Scenario:</strong></p>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Scenario</th>
                <th className="border border-gray-300 px-4 py-2">Fixed 5.5%</th>
                <th className="border border-gray-300 px-4 py-2">Variable starts 4.5%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">$400k loan payment</td>
                <td className="border border-gray-300 px-4 py-2">$2,271/month</td>
                <td className="border border-gray-300 px-4 py-2">$2,027/month</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Monthly savings</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">$244</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Break-even if rates rise to 5.5%</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">After 12 months</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Variable wins if avg rate &lt;</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">5.5% over 5 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>US vs. Canada: terms vs amortization; penalties for breaking</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">United States</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li><strong>Common:</strong> 30-year fixed rate mortgages</li>
              <li><strong>ARMs:</strong> 5/1, 7/1, 10/1 (fixed then adjustable)</li>
              <li><strong>Prepayment:</strong> Usually no penalty</li>
              <li><strong>Refinance:</strong> Relatively easy/common</li>
              <li><strong>Rate caps:</strong> 2/2/5 typical (2% first, 2% periodic, 5% lifetime)</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Canada</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li><strong>Terms:</strong> 1-10 years (rate guarantee period)</li>
              <li><strong>Amortization:</strong> 15-30 years (full payoff time)</li>
              <li><strong>Variable:</strong> Rate changes monthly with prime</li>
              <li><strong>Penalties:</strong> 3 months interest or IRD (higher)</li>
              <li><strong>Portability:</strong> Often can transfer to new home</li>
            </ul>
          </div>
        </div>

        <h2>Real scenarios (first-time buyer, move in 3 years, investor)</h2>

        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-2">First-Time Buyer (Tight Budget)</h4>
            <p className="text-green-700 text-sm">
              <strong>Recommendation:</strong> Fixed rate<br/>
              <strong>Reason:</strong> Predictable payments, easier budgeting, less risk of payment shock while adjusting to homeownership costs.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-2">Moving in 3 Years (Job Transfer)</h4>
            <p className="text-blue-700 text-sm">
              <strong>Recommendation:</strong> Variable or short ARM<br/>
              <strong>Reason:</strong> Lower initial rate, won't be exposed to long-term rate risk, savings over 3 years likely to exceed risk.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-2">Real Estate Investor (Cash Flow Focus)</h4>
            <p className="text-purple-700 text-sm">
              <strong>Recommendation:</strong> Depends on cash flow cushion<br/>
              <strong>Reason:</strong> Variable if strong cash flow reserves; fixed if operating on thin margins or multiple properties.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch from variable to fixed mid-term?</h3>
              <p className="text-gray-700">Canada: Often yes, at renewal or with penalties. US: Usually requires refinancing with closing costs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are typical prepayment penalties?</h3>
              <p className="text-gray-700">Canada: 3 months interest (variable) or IRD calculation (fixed). US: Most conventional loans have no prepayment penalty.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there hybrid mortgage options?</h3>
              <p className="text-gray-700">Yes—convertible mortgages (variable to fixed) and combination mortgages (part fixed, part variable) offer middle ground.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do rate caps work on ARMs?</h3>
              <p className="text-gray-700">Caps limit increases: first adjustment cap (usually 2-5%), periodic cap (1-2% per adjustment), and lifetime cap (5-6% total increase).</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-get-pre-approved-for-a-mortgage" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Get Pre-Approved for Mortgage</h3>
              <p className="text-sm text-blue-700 mt-1">Documents, timeline, and pitfalls</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-refinance-your-mortgage-break-even-analysis" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Refinance Break-Even Analysis →</h3>
              <p className="text-sm text-green-700 mt-1">Do the math to see if refi pays off</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}