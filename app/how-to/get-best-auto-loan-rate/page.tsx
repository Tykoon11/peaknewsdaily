import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get the Best Auto Loan Rate (Step-by-Step)',
  description: 'Slash your auto loan APR with timing, credit prep, and lender shopping. Learn pre-approval tactics, rate tiers, and how to avoid hidden dealer markups.',
}

export default function BestAutoLoanRatePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Best Auto Loan Rate</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">The smart way to lock a low auto loan rate</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use strategic timing, credit optimization, and lender competition to secure the lowest possible APR.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Know your credit tier</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Credit Score Tiers and Typical APRs</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-blue-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-blue-300 px-3 py-2 text-left">Credit Tier</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Score Range</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Typical APR</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Lender Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-300 px-3 py-2 font-medium text-green-600">Super Prime</td>
                  <td className="border border-blue-300 px-3 py-2">781-850</td>
                  <td className="border border-blue-300 px-3 py-2">3.5-6.0%</td>
                  <td className="border border-blue-300 px-3 py-2">Banks, credit unions</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-300 px-3 py-2 font-medium text-green-600">Prime</td>
                  <td className="border border-blue-300 px-3 py-2">661-780</td>
                  <td className="border border-blue-300 px-3 py-2">6.0-9.0%</td>
                  <td className="border border-blue-300 px-3 py-2">Banks, dealers</td>
                </tr>
                <tr>
                  <td className="border border-blue-300 px-3 py-2 font-medium text-yellow-600">Near Prime</td>
                  <td className="border border-blue-300 px-3 py-2">601-660</td>
                  <td className="border border-blue-300 px-3 py-2">9.0-13.0%</td>
                  <td className="border border-blue-300 px-3 py-2">Credit unions, online</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-300 px-3 py-2 font-medium text-red-600">Subprime</td>
                  <td className="border border-blue-300 px-3 py-2">501-600</td>
                  <td className="border border-blue-300 px-3 py-2">13.0-18.0%</td>
                  <td className="border border-blue-300 px-3 py-2">Dealer financing</td>
                </tr>
                <tr>
                  <td className="border border-blue-300 px-3 py-2 font-medium text-red-600">Deep Subprime</td>
                  <td className="border border-blue-300 px-3 py-2">&lt;500</td>
                  <td className="border border-blue-300 px-3 py-2">18.0%+</td>
                  <td className="border border-blue-300 px-3 py-2">Specialized lenders</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Fix fast wins before applying</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Credit Utilization Quick Fixes</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Pay down balances:</strong> Target &lt;30% utilization on all cards (&lt;10% is even better)</p>
              <p><strong>Time your payments:</strong> Pay before statement closing date to show lower balances</p>
              <p><strong>Request limit increases:</strong> Lowers utilization ratio without paying down debt</p>
              <p><strong>Don't close paid-off cards:</strong> Keeps available credit high and accounts aging</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Credit Report Cleanup (30-60 days)</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>Dispute errors:</strong> Check all three bureaus (Experian, Equifax, TransUnion)</p>
              <p><strong>Pay off collections:</strong> Small collections can be paid for delete</p>
              <p><strong>Request goodwill deletions:</strong> Ask for removal of late payments from good standing accounts</p>
              <p><strong>Become an authorized user:</strong> Family member with excellent credit can boost your score</p>
            </div>
          </div>
        </div>

        <h2>Get multiple pre-approvals</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Lender Shopping Strategy</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Credit Unions</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Often lowest rates</li>
                <li>• Member-focused service</li>
                <li>• Flexible underwriting</li>
                <li>• Local decision making</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">National Banks</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Competitive for prime credit</li>
                <li>• Relationship discounts</li>
                <li>• Online applications</li>
                <li>• Fast approval process</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Online Lenders</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Streamlined process</li>
                <li>• Competitive rates</li>
                <li>• Quick pre-qualification</li>
                <li>• Direct dealer payment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Pre-Approval Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">Documents You'll Need</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>□ Driver's license</li>
                <li>□ Proof of income (pay stubs, tax returns)</li>
                <li>□ Proof of residence</li>
                <li>□ Bank statements</li>
                <li>□ List of debts and monthly payments</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">Information to Compare</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>□ APR (not just interest rate)</li>
                <li>□ Maximum loan amount</li>
                <li>□ Term options</li>
                <li>□ Fees and closing costs</li>
                <li>□ Pre-payment penalties</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Time your application correctly</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">The 14-30 Day Shopping Window</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>FICO scoring:</strong> Multiple auto loan inquiries within 14-30 days count as a single inquiry</p>
            <p><strong>VantageScore:</strong> 14-day window for rate shopping without multiple hard pulls</p>
            <p><strong>Strategy:</strong> Apply to all lenders within 2 weeks to minimize credit impact</p>
            <p><strong>Timing:</strong> Shop rates first, then look for cars with pre-approval in hand</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Rate Shopping Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-blue-800">Week 1-2: Credit Prep</h4>
                <p className="text-blue-700 text-sm">Pull credit reports, dispute errors, optimize utilization</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Week 3: Rate Shopping</h4>
                <p className="text-blue-700 text-sm">Apply to 3-5 lenders within 10 days, compare offers</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-blue-800">Week 4: Car Shopping</h4>
                <p className="text-blue-700 text-sm">Shop with best pre-approval, negotiate price separately</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Use pre-approval to beat dealer finance</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">The Pre-Approval Power Play</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">✓ What to Do</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Bring written pre-approval letter</li>
                <li>• Negotiate car price first, financing second</li>
                <li>• Let dealer try to beat your rate</li>
                <li>• Read all paperwork carefully</li>
                <li>• Take photos of documents</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-800 mb-2">✗ What to Avoid</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Negotiating monthly payment only</li>
                <li>• Accepting first finance offer</li>
                <li>• Signing without reading</li>
                <li>• Adding unnecessary products</li>
                <li>• Letting them "work numbers"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Dealer Finance Office Script</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>Opening:</strong> "I have a pre-approval at [rate]%. If you can beat it without add-ons, I'll finance here. Otherwise I'll use my lender."</p>
            <p><strong>If they counter:</strong> "Show me the APR and terms on paper. I need to compare total cost, not just monthly payment."</p>
            <p><strong>For add-ons:</strong> "Remove all optional products. I'm only accepting the agreed-upon price and financing terms."</p>
            <p><strong>Final check:</strong> "This matches our agreed price of $X with $Y down at Z% APR for W months, correct?"</p>
          </div>
        </div>

        <h2>Watch for fees, add-ons, and "yo-yo" financing</h2>
        <div className="space-y-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Common Dealer Markups to Avoid</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Rate Markups</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Lender offers 6%, dealer quotes 8%</li>
                  <li>• "Dealer reserve" = their profit</li>
                  <li>• Legal in most states (2% markup cap)</li>
                  <li>• <strong>Protection:</strong> Bring pre-approval</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Unnecessary Add-ons</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Extended warranties</li>
                  <li>• Gap insurance (cheaper elsewhere)</li>
                  <li>• Paint protection/VIN etching</li>
                  <li>• <strong>Just say no</strong> to all add-ons</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Yo-Yo Financing Scam Protection</h3>
            <div className="text-orange-700 space-y-3">
              <p><strong>The scam:</strong> "Your financing fell through, come back to sign new (worse) terms"</p>
              <p><strong>Reality:</strong> Often the original financing was fine, they want more profit</p>
              <p><strong>Protection:</strong> Get "guaranteed" approval, read all fine print</p>
              <p><strong>Response:</strong> "I'll return the car and use my pre-approved lender"</p>
            </div>
          </div>
        </div>

        <h2>Term length strategy</h2>
        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Why Shorter Terms Win</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-indigo-300">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="border border-indigo-300 px-3 py-2 text-left">Loan Amount</th>
                  <th className="border border-indigo-300 px-3 py-2 text-left">48 Months @ 6%</th>
                  <th className="border border-indigo-300 px-3 py-2 text-left">72 Months @ 7%</th>
                  <th className="border border-indigo-300 px-3 py-2 text-left">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-indigo-300 px-3 py-2">$25,000</td>
                  <td className="border border-indigo-300 px-3 py-2">$587/month</td>
                  <td className="border border-indigo-300 px-3 py-2">$383/month</td>
                  <td className="border border-indigo-300 px-3 py-2 text-green-600">-$204/month</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border border-indigo-300 px-3 py-2"><strong>Total Interest</strong></td>
                  <td className="border border-indigo-300 px-3 py-2 text-green-600"><strong>$3,174</strong></td>
                  <td className="border border-indigo-300 px-3 py-2 text-red-600"><strong>$2,568</strong></td>
                  <td className="border border-indigo-300 px-3 py-2 text-red-600"><strong>+$3,394</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-indigo-700 text-sm mt-3">Lower monthly payment costs $3,394 more over the life of the loan. If payment feels tight, choose a cheaper car instead.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do multiple auto loan inquiries hurt my credit?</h3>
              <p className="text-gray-700">No, if done within 14-30 days. Credit scoring models recognize rate shopping and count multiple auto loan inquiries as a single inquiry for scoring purposes.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are credit unions really cheaper than banks?</h3>
              <p className="text-gray-700">Often, yes. Credit unions average 1-2 percentage points lower than banks because they're non-profit and member-owned. However, shop around—some banks offer competitive rates to attract customers.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What term length gets the best rate?</h3>
              <p className="text-gray-700">Shorter terms (36-48 months) typically offer the lowest rates. Lenders see them as less risky, and you pay less total interest even if the rate is the same.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can the dealer mark up my APR?</h3>
              <p className="text-gray-700">Yes, legally in most states up to 2%. If a lender approves you at 6%, the dealer can quote 8% and keep the 2% difference. This is why pre-approval is crucial for comparison.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/car-affordability-calculator-rules" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Car Affordability Rules</h3>
              <p className="text-sm text-indigo-700 mt-1">How much car can you afford?</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/lease-vs-finance-cheaper" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Lease vs Finance →</h3>
              <p className="text-sm text-green-700 mt-1">Which option saves money?</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}