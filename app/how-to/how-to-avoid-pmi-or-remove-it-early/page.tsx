import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Avoid PMI—or Remove It Early (US) / Mortgage Insurance (Canada)',
  description: 'Hit 20% equity faster with value add-ons, recasts, and re-appraisals. See lender rules for PMI removal and Canadian mortgage insurance.',
}

export default function AvoidRemovePMIPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Remove PMI</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to avoid PMI or remove it early</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Hit 20% equity faster with value add-ons, recasts, and re-appraisals. See lender rules for PMI removal and Canadian mortgage insurance.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            To avoid PMI (US), start with 20% down or use combo loans. To remove it early, reach 80% LTV via extra principal and request removal or re-appraisal; it cancels automatically at 78% (certain loans). In Canada, insurer premiums are built in; you can't "remove" them, but a refi at ≤80% LTV eliminates new insurance.
          </p>
        </div>

        <h2>How PMI works (US) and when it auto-cancels</h2>
        <p><strong>PMI Basics:</strong></p>
        <ul>
          <li>Required when down payment &lt; 20% (80% LTV or higher)</li>
          <li>Protects lender, not borrower, against default</li>
          <li>Costs 0.3–1.5% of loan amount annually</li>
          <li>Paid monthly, upfront, or combination</li>
        </ul>

        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">PMI Removal Rules</th>
                <th className="border border-gray-300 px-4 py-2">Conventional</th>
                <th className="border border-gray-300 px-4 py-2">FHA (MIP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Auto-cancellation</td>
                <td className="border border-gray-300 px-4 py-2">78% LTV, on-time payments</td>
                <td className="border border-gray-300 px-4 py-2">11 years + 78% LTV</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Request removal</td>
                <td className="border border-gray-300 px-4 py-2">80% LTV, may need appraisal</td>
                <td className="border border-gray-300 px-4 py-2">Not available if &lt;10% down</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Upfront MIP</td>
                <td className="border border-gray-300 px-4 py-2">Not applicable</td>
                <td className="border border-gray-300 px-4 py-2">1.75% of loan amount</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Tactics to reach 80% LTV fast (prepayments, value-add, re-appraisal)</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Ways to Build Equity Faster</h3>
          <ul className="text-green-700 space-y-2">
            <li><strong>Extra principal payments:</strong> Target PMI removal date and calculate monthly amount needed</li>
            <li><strong>Lump-sum payments:</strong> Tax refunds, bonuses, inheritance toward principal</li>
            <li><strong>Home improvements:</strong> Kitchen, bathroom, additions that boost appraised value</li>
            <li><strong>Market appreciation:</strong> Rising home values in your area</li>
            <li><strong>Re-appraisal:</strong> If market has risen significantly since purchase</li>
          </ul>
        </div>

        <p><strong>Example calculation:</strong> $400,000 home, $320,000 loan (80% LTV)</p>
        <div className="bg-gray-100 p-4 rounded my-4">
          <p className="font-mono text-sm">
            Target loan balance: $320,000 × 0.80 = $256,000<br/>
            Current balance: $315,000<br/>
            Need to pay down: $315,000 - $256,000 = $59,000<br/>
            Timeline: 2 years = $59,000 ÷ 24 = $2,458/month extra
          </p>
        </div>

        <h2>Loan recast vs. refinance</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Loan Recast</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li><strong>How:</strong> Make large principal payment, lender recalculates payments</li>
              <li><strong>Cost:</strong> $150–500 fee typically</li>
              <li><strong>Rate:</strong> Stays the same</li>
              <li><strong>Best for:</strong> Keeping current rate, just lowering payments</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Refinance</h4>
            <ul className="text-purple-700 space-y-1 text-sm">
              <li><strong>How:</strong> New loan replaces old loan</li>
              <li><strong>Cost:</strong> 2–5% of loan amount in closing costs</li>
              <li><strong>Rate:</strong> Current market rates</li>
              <li><strong>Best for:</strong> Better rate available, cash-out, term change</li>
            </ul>
          </div>
        </div>

        <h2>Canada: insured mortgages—how premiums work; options at refi</h2>
        <p><strong>Canadian Mortgage Insurance:</strong></p>
        <ul>
          <li>Required for down payments &lt; 20%</li>
          <li>Providers: CMHC, Sagen (formerly Genworth), Canada Guaranty</li>
          <li>One-time premium: 2.8–4.0% of loan amount</li>
          <li>Usually added to mortgage principal (financed)</li>
        </ul>

        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Down Payment</th>
                <th className="border border-gray-300 px-4 py-2">Premium Rate</th>
                <th className="border border-gray-300 px-4 py-2">$400k Home Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">5–9.99%</td>
                <td className="border border-gray-300 px-4 py-2">4.00%</td>
                <td className="border border-gray-300 px-4 py-2">$15,200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">10–14.99%</td>
                <td className="border border-gray-300 px-4 py-2">3.10%</td>
                <td className="border border-gray-300 px-4 py-2">$10,850</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">15–19.99%</td>
                <td className="border border-gray-300 px-4 py-2">2.80%</td>
                <td className="border border-gray-300 px-4 py-2">$8,960</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>At renewal/refinance:</strong> If you've built 20%+ equity, new mortgage doesn't need insurance.</p>

        <h2>Beware lender overlays &amp; portfolio rules</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Potential Roadblocks</h3>
          <ul className="text-yellow-700 space-y-2">
            <li><strong>Seasoning requirements:</strong> Some lenders require 2+ years before PMI removal</li>
            <li><strong>Payment history:</strong> Must have perfect payment record</li>
            <li><strong>Property type restrictions:</strong> Condos, investment properties may have different rules</li>
            <li><strong>Appraisal requirements:</strong> Lender may require full appraisal vs. AVM</li>
            <li><strong>Portfolio loans:</strong> Lender sets own rules, may not follow standard PMI cancellation</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can PMI be tax-deductible?</h3>
              <p className="text-gray-700">In the US, PMI deduction was available in some years but often expires. Check current tax law or consult tax professional.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it worth paying for recast vs waiting?</h3>
              <p className="text-gray-700">Compare recast fee vs monthly PMI savings. If PMI is $200/month, $250 recast fee pays off in ~1.5 months.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I get an appraisal for PMI removal?</h3>
              <p className="text-gray-700">When home values in your area have risen significantly, or you've made major improvements. Cost is $300–600 but could save thousands in PMI.</p>
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
              <h3 className="font-semibold text-blue-900">← Save Down Payment Fast</h3>
              <p className="text-sm text-blue-700 mt-1">9 proven tactics</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-refinance-your-mortgage-break-even-analysis" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Refinance Break-Even →</h3>
              <p className="text-sm text-green-700 mt-1">Do the math first</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}