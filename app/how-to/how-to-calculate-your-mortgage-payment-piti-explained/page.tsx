import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mortgage Payment Calculator: PITI Explained (with Examples)',
  description: 'Learn PITI—principal, interest, taxes, insurance—plus HOA/CMHC/PMI and how to estimate monthly mortgage payments with and without escrow.',
}

export default function MortgagePaymentPITIPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Calculate Mortgage Payment</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to calculate your mortgage payment (PITI explained)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn PITI—principal, interest, taxes, insurance—plus HOA/CMHC/PMI and how to estimate monthly mortgage payments with and without escrow.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            Your monthly mortgage payment usually equals PITI: principal + interest + property taxes + homeowners insurance. Add HOA/condo fees and, if applicable, PMI (US) or mortgage default insurance (Canada). Use the formula M = P·[r(1+r)^n]/[(1+r)^n–1] for principal &amp; interest, then add monthly estimates for taxes/insurance/fees to get your total.
          </p>
        </div>

        <h2>What is PITI? (Plus HOA/condo fees and PMI/CMHC)</h2>
        <p>PITI breaks down your total housing payment:</p>
        <ul>
          <li><strong>Principal</strong> – Amount going toward loan balance</li>
          <li><strong>Interest</strong> – Cost of borrowing</li>
          <li><strong>Taxes</strong> – Property taxes (usually escrowed monthly)</li>
          <li><strong>Insurance</strong> – Homeowners/hazard insurance</li>
        </ul>

        <p>Additional costs often included:</p>
        <ul>
          <li><strong>PMI</strong> (US) – Private mortgage insurance if down payment &lt; 20%</li>
          <li><strong>CMHC/Sagen/Canada Guaranty</strong> (Canada) – Mortgage default insurance</li>
          <li><strong>HOA/Condo fees</strong> – Monthly association dues</li>
        </ul>

        <h2>The mortgage formula (principal &amp; interest)</h2>
        <p>The standard mortgage payment formula:</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-center my-4">
          M = P × [r(1+r)^n] / [(1+r)^n – 1]
        </div>

        <h3>Variables: loan amount (P), monthly rate (r), term in months (n)</h3>
        <ul>
          <li><strong>M</strong> = Monthly payment (principal + interest only)</li>
          <li><strong>P</strong> = Principal loan amount</li>
          <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12)</li>
          <li><strong>n</strong> = Total number of payments (years × 12)</li>
        </ul>

        <h3>Worked example: $400,000 at 6.5% for 30 years</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
          <ul className="space-y-2 text-green-800">
            <li>P = $400,000</li>
            <li>r = 6.5% ÷ 12 = 0.0541667</li>
            <li>n = 30 × 12 = 360 payments</li>
          </ul>
          <p className="mt-4 font-semibold text-green-900">
            Result: M = $2,528 per month (principal + interest)
          </p>
        </div>

        <h2>Estimating taxes &amp; insurance (escrow vs. pay direct)</h2>
        <p>Most lenders require escrow for taxes and insurance:</p>
        <ul>
          <li><strong>Property taxes</strong> – Typically 0.5–2.5% of home value annually</li>
          <li><strong>Homeowners insurance</strong> – Usually $800–2,000+ annually</li>
          <li><strong>Escrow cushion</strong> – Lenders hold 2-month buffer</li>
        </ul>

        <p>Example: $400,000 home might add $400–600/month for taxes and insurance combined.</p>

        <h2>When PMI/CMHC applies and how to remove/reduce it</h2>
        <p><strong>US (PMI):</strong></p>
        <ul>
          <li>Required with &lt;20% down payment</li>
          <li>Costs 0.3–1.5% of loan amount annually</li>
          <li>Automatically cancels at 78% loan-to-value</li>
          <li>Can request removal at 80% LTV with re-appraisal</li>
        </ul>

        <p><strong>Canada (CMHC/Sagen/Canada Guaranty):</strong></p>
        <ul>
          <li>Required with &lt;20% down payment</li>
          <li>One-time premium (2.8–4% of loan) usually added to mortgage</li>
          <li>Cannot be "removed" but refinancing at ≥20% equity avoids new insurance</li>
        </ul>

        <h2>Extras to budget: HOA/condo fees, utilities, maintenance (1–3%/yr)</h2>
        <p>Beyond PITI, budget for:</p>
        <ul>
          <li><strong>HOA/condo fees</strong> – $100–500+ monthly</li>
          <li><strong>Utilities</strong> – $150–300+ monthly</li>
          <li><strong>Maintenance</strong> – 1–3% of home value annually</li>
          <li><strong>Emergency repairs</strong> – Keep 3–6 months housing expenses saved</li>
        </ul>

        <h2>Quick calculator table (common loan sizes &amp; rates)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Loan Amount</th>
                <th className="border border-gray-300 px-4 py-2">5.5% (30yr)</th>
                <th className="border border-gray-300 px-4 py-2">6.0% (30yr)</th>
                <th className="border border-gray-300 px-4 py-2">6.5% (30yr)</th>
                <th className="border border-gray-300 px-4 py-2">7.0% (30yr)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">$300,000</td>
                <td className="border border-gray-300 px-4 py-2">$1,703</td>
                <td className="border border-gray-300 px-4 py-2">$1,799</td>
                <td className="border border-gray-300 px-4 py-2">$1,896</td>
                <td className="border border-gray-300 px-4 py-2">$1,996</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">$400,000</td>
                <td className="border border-gray-300 px-4 py-2">$2,271</td>
                <td className="border border-gray-300 px-4 py-2">$2,398</td>
                <td className="border border-gray-300 px-4 py-2">$2,528</td>
                <td className="border border-gray-300 px-4 py-2">$2,661</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">$500,000</td>
                <td className="border border-gray-300 px-4 py-2">$2,839</td>
                <td className="border border-gray-300 px-4 py-2">$2,998</td>
                <td className="border border-gray-300 px-4 py-2">$3,160</td>
                <td className="border border-gray-300 px-4 py-2">$3,327</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>US vs. Canada notes (stress test; fixed terms vs amortization)</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Canada-Specific</h3>
          <ul className="text-yellow-700 space-y-1">
            <li>Stress test at contract rate + 2% or 5.25% (whichever is higher)</li>
            <li>Fixed terms (1–5 years) vs. 25–30 year amortization</li>
            <li>Gross Debt Service (GDS) ≤32%, Total Debt Service (TDS) ≤40%</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">US-Specific</h3>
          <ul className="text-blue-700 space-y-1">
            <li>Debt-to-income ratios typically ≤28% front-end, ≤36% back-end</li>
            <li>30-year fixed rates more common than in Canada</li>
            <li>PMI costs and removal rules vary by loan type</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's a good rule of thumb for taxes &amp; insurance monthly?</h3>
              <p className="text-gray-700">Estimate 0.2–0.5% of home value monthly combined (varies significantly by location and home value).</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I budget for maintenance?</h3>
              <p className="text-gray-700">Plan for 1–3% of home value annually, or roughly $100–300 per month for a typical home.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When does PMI/CMHC drop off?</h3>
              <p className="text-gray-700">US: PMI auto-cancels at 78% LTV or by request at 80%. Canada: Insurance premium is paid upfront (no ongoing payments to cancel).</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I escrow taxes/insurance or pay them myself?</h3>
              <p className="text-gray-700">Escrow ensures you won't miss payments but you lose interest on that money. Self-pay gives control but requires discipline.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-save-for-a-down-payment-fast" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Save for Down Payment Fast</h3>
              <p className="text-sm text-blue-700 mt-1">9 proven tactics to hit your goal sooner</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-get-pre-approved-for-a-mortgage" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Get Pre-Approved for Mortgage →</h3>
              <p className="text-sm text-green-700 mt-1">Documents, timeline, and pitfalls to avoid</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}