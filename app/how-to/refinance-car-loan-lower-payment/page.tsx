import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Refinance a Car Loan (Lower Your Payment)',
  description: 'Refinance your auto loan the right way: when it makes sense, how to qualify, where to shop, and the math to ensure you save real money—not just time.',
}

export default function RefinanceCarLoanPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Refinance Car Loan</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📈
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">Refinance your auto loan: a step-by-step guide</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Cut your monthly payment and total interest with smart refinancing tactics that actually work.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>When refinancing makes sense</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Prime Refinancing Opportunities</h3>
          <ul className="text-green-700 space-y-2">
            <li>• <strong>Credit improved:</strong> Score increased 50+ points since original loan</li>
            <li>• <strong>Rates dropped:</strong> Market rates fell 1%+ from your current APR</li>
            <li>• <strong>Income increased:</strong> Better debt-to-income ratio improves qualification</li>
            <li>• <strong>Original loan had high rate:</strong> Dealer markup or subprime financing initially</li>
          </ul>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Quick Savings Calculator</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Current Loan Example</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Balance: $18,000</li>
                <li>• Current rate: 9.5% APR</li>
                <li>• 36 months remaining</li>
                <li>• Current payment: $577/month</li>
                <li>• Total remaining interest: $2,772</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">After Refinancing</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Same balance: $18,000</li>
                <li>• New rate: 6.5% APR</li>
                <li>• 36 months (same term)</li>
                <li>• New payment: $551/month</li>
                <li>• Total interest: $1,836</li>
                <li>• <strong className="text-green-600">Savings: $936</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <h2>What lenders look for</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Loan-to-Value (LTV) Requirements</h3>
            <div className="text-blue-700 space-y-3">
              <p><strong>Current LTV:</strong> Loan balance ÷ current vehicle value</p>
              <p><strong>Most lenders want:</strong> LTV under 110-125%</p>
              <p><strong>If underwater:</strong> May need cash down or wait for principal paydown</p>
              <p><strong>Get vehicle value:</strong> KBB, Edmunds, or dealer appraisal</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Vehicle Age and Mileage Limits</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>Age limits:</strong> Most lenders finance up to 7-10 year old vehicles</p>
              <p><strong>Mileage limits:</strong> Under 100,000-150,000 miles typically</p>
              <p><strong>Minimum loan:</strong> $5,000-7,500 minimum (varies by lender)</p>
              <p><strong>Credit unions:</strong> Often more flexible on age/mileage limits</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Payment History Matters</h3>
            <div className="text-orange-700 space-y-2">
              <p><strong>On-time payments:</strong> At least 12 months of perfect payment history preferred</p>
              <p><strong>Recent late payments:</strong> Can disqualify or increase rate</p>
              <p><strong>Same lender:</strong> Your current lender may not refinance their own loan</p>
              <p><strong>Seasoning period:</strong> Some lenders require 6+ months since origination</p>
            </div>
          </div>
        </div>

        <h2>Rate shop and pre-qualify</h2>
        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Best Places to Shop Refi Rates</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Credit Unions</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Typically lowest rates</li>
                <li>• Member-focused service</li>
                <li>• Flexible underwriting</li>
                <li>• Join online if needed</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Online Lenders</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Fast pre-qualification</li>
                <li>• Competitive rates</li>
                <li>• No branch visits needed</li>
                <li>• Same-day decisions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Banks</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Relationship discounts</li>
                <li>• Local decision making</li>
                <li>• In-person service</li>
                <li>• Established processes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Soft Pull vs Hard Pull</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>Soft pull (pre-qualification):</strong> Estimated rate, no credit impact</p>
            <p><strong>Hard pull (application):</strong> Final approval, temporary score dip</p>
            <p><strong>Strategy:</strong> Soft pull multiple lenders, hard pull only your top 1-2 choices</p>
            <p><strong>Shopping window:</strong> Multiple auto inquiries in 14-30 days count as one</p>
          </div>
        </div>

        <h2>Avoid extending the term too far</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Term Extension Trade-offs</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Scenario</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Monthly Payment</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Total Interest</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Keep current term (36 mo)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">$551</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">$1,836</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">$19,836</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Extend to 48 months</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">$429</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">$2,592</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">$20,592</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Extend to 60 months</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">$352</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">$3,120</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">$21,120</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3">Lower payment isn't always better—extending from 36 to 60 months costs $1,284 more in interest</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Smart Term Selection Strategy</h3>
          <div className="text-yellow-700 space-y-2">
            <p><strong>Keep current term:</strong> If you can afford the payment, maximize interest savings</p>
            <p><strong>Slight extension okay:</strong> If it frees up cash for high-interest debt payoff</p>
            <p><strong>Avoid long terms:</strong> Don't turn 2 years remaining into 5 years just for lower payment</p>
            <p><strong>Extra payments:</strong> Even small additional principal payments accelerate payoff</p>
          </div>
        </div>

        <h2>Close the loop properly</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Title Transfer Process</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>New lender handles:</strong> Most refi lenders coordinate directly with your old lender</p>
              <p><strong>Title timing:</strong> Old loan must be satisfied before new lender gets title</p>
              <p><strong>Grace period:</strong> Usually 10-15 days to complete the transfer process</p>
              <p><strong>Your responsibility:</strong> Continue making payments until transfer is complete</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">GAP Coverage Considerations</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Current GAP policy:</strong> May not transfer to new loan automatically</p>
              <p><strong>Check cancellation:</strong> Cancel old GAP and get prorated refund</p>
              <p><strong>New GAP coverage:</strong> Shop rates from new lender vs. insurance company</p>
              <p><strong>Still underwater?:</strong> GAP coverage still recommended if LTV &gt; 100%</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Final Verification Steps</h3>
            <div class="text-purple-700 space-y-2">
              <p><strong>Payoff confirmation:</strong> Verify old loan shows $0 balance</p>
              <p><strong>First payment date:</strong> Note when new payment starts (usually 30-45 days)</p>
              <p><strong>Auto-pay setup:</strong> Set up automatic payments to avoid late fees</p>
              <p><strong>Document retention:</strong> Keep all paperwork until loan is paid off</p>
            </div>
          </div>
        </div>

        <h2>Common refinancing mistakes</h2>
        <div class="space-y-4 my-8">
          <div class="border-l-4 border-red-400 pl-4">
            <h3 class="font-semibold text-red-800">Focusing only on monthly payment</h3>
            <p class="text-red-700 text-sm">Lower payment via extended term can cost thousands more in total interest. Calculate total cost, not just monthly savings.</p>
          </div>
          
          <div class="border-l-4 border-red-400 pl-4">
            <h3 class="font-semibold text-red-800">Not shopping around</h3>
            <p class="text-red-700 text-sm">First offer isn't always best. Credit unions, online lenders, and banks can have dramatically different rates for the same borrower.</p>
          </div>
          
          <div class="border-l-4 border-red-400 pl-4">
            <h3 class="font-semibold text-red-800">Ignoring fees and costs</h3>
            <p class="text-red-700 text-sm">Factor in title fees, documentation fees, and any prepayment penalties on your current loan. Sometimes fees offset the savings.</p>
          </div>
          
          <div class="border-l-4 border-red-400 pl-4">
            <h3 class="font-semibold text-red-800">Refinancing too early or too late</h3>
            <p class="text-red-700 text-sm">Very new loans may have prepayment penalties. Very old loans may not have enough balance/term left to make refinancing worthwhile.</p>
          </div>
        </div>

        <h2>When refinancing doesn't make sense</h2>
        <div class="bg-red-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-red-800 mb-4">Skip Refinancing If...</h3>
          <ul class="text-red-700 space-y-2">
            <li>• You're planning to pay off the loan within 12 months</li>
            <li>• Your vehicle is worth significantly less than loan balance</li>
            <li>• Current loan has less than $5,000 balance</li>
            <li>• You can only improve APR by less than 1%</li>
            <li>• Fees and costs exceed 6 months of payment savings</li>
            <li>• Your credit has declined since original loan</li>
          </ul>
        </div>

        <div class="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">How much will a 1% APR drop save me?</h3>
              <p class="text-gray-700">On a $20,000 loan over 60 months, dropping from 8% to 7% saves about $57/month or $3,420 total. Use an online calculator with your specific numbers.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Can I refinance with bad credit?</h3>
              <p class="text-gray-700">Yes, but rates may not improve much. Focus on credit unions and online lenders that specialize in less-than-perfect credit. Wait if your score is actively improving.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Does auto refi reset my warranty or GAP?</h3>
              <p class="text-gray-700">Warranty continues unchanged. GAP coverage may need to be cancelled and re-purchased. Check with both your old and new lenders about GAP transfer policies.</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Is there a prepayment penalty?</h3>
              <p class="text-gray-700">Most modern auto loans don't have prepayment penalties, but check your current loan agreement. Some older loans or subprime lenders may charge fees for early payoff.</p>
            </div>
          </div>
        </div>
      </article>

      <nav class="mt-16 pt-8 border-t border-gray-200">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/lease-vs-finance-cheaper" 
              class="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 class="font-semibold text-indigo-900">← Lease vs Finance</h3>
              <p class="text-sm text-indigo-700 mt-1">Which option is cheaper?</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/negotiate-car-price-scripts" 
              class="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 class="font-semibold text-green-900">Car Negotiation Scripts →</h3>
              <p class="text-sm text-green-700 mt-1">Get the lowest price possible</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}