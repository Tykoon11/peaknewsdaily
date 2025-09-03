import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stuck in a Bad Car Loan? Your Exit Plan',
  description: 'High APR or payment shock? Learn five exits: refinance, downsize, sell private, hardship options, or temporary relief—without wrecking your credit.',
}

export default function GetOutOfBadCarLoanPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Bad Car Loan Exit</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            🆘
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">Escape a bad auto loan (without nuking your credit)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Smart exit strategies for high-rate loans, unaffordable payments, or buyer's remorse.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Diagnose the problem: APR vs price vs term</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3">Common "Bad Loan" Scenarios</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>High APR:</strong> 15%+ rate due to bad credit or dealer markup</li>
            <li>• <strong>Payment shock:</strong> Monthly payment straining your budget</li>
            <li>• <strong>Long term:</strong> 84+ months with years of negative equity</li>
            <li>• <strong>Wrong car:</strong> Bought more car than you need/can afford</li>
          </ul>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Isolate Your Pain Point</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">If the APR is the problem:</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Check current credit score</li>
                <li>• Research current market rates</li>
                <li>• Consider refinancing</li>
                <li>• Calculate total interest savings</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">If the payment is too high:</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Review monthly budget</li>
                <li>• Consider selling/downsizing</li>
                <li>• Explore temporary hardship relief</li>
                <li>• Evaluate refinance with longer term</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Option 1: Refinance or shorten the term</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">When Refinancing Makes Sense</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Credit improved:</strong> Score increased 50+ points since original loan</p>
            <p><strong>Rates dropped:</strong> Market rates fell significantly</p>
            <p><strong>Income increased:</strong> Better debt-to-income ratio</p>
            <p><strong>Original rate was high:</strong> Dealer marked up your rate or subprime financing</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Refinancing Example: 18% to 8%</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-blue-300">
              <thead className="bg-blue-50">
                <tr>
                  <th className="border border-blue-300 px-3 py-2 text-left">Loan Details</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Current Loan</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Refinanced</th>
                  <th className="border border-blue-300 px-3 py-2 text-left">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-300 px-3 py-2">Balance</td>
                  <td className="border border-blue-300 px-3 py-2">$22,000</td>
                  <td className="border border-blue-300 px-3 py-2">$22,000</td>
                  <td className="border border-blue-300 px-3 py-2">-</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-300 px-3 py-2">APR</td>
                  <td className="border border-blue-300 px-3 py-2 text-red-600">18.0%</td>
                  <td className="border border-blue-300 px-3 py-2 text-green-600">8.0%</td>
                  <td className="border border-blue-300 px-3 py-2">10% lower</td>
                </tr>
                <tr>
                  <td className="border border-blue-300 px-3 py-2">Term remaining</td>
                  <td className="border border-blue-300 px-3 py-2">48 months</td>
                  <td className="border border-blue-300 px-3 py-2">48 months</td>
                  <td className="border border-blue-300 px-3 py-2">Same</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-300 px-3 py-2">Monthly payment</td>
                  <td className="border border-blue-300 px-3 py-2 text-red-600">$665</td>
                  <td className="border border-blue-300 px-3 py-2 text-green-600">$538</td>
                  <td className="border border-blue-300 px-3 py-2 font-medium">-$127/mo</td>
                </tr>
                <tr>
                  <td className="border border-blue-300 px-3 py-2">Total interest</td>
                  <td className="border border-blue-300 px-3 py-2 text-red-600">$9,920</td>
                  <td className="border border-blue-300 px-3 py-2 text-green-600">$3,824</td>
                  <td className="border border-blue-300 px-3 py-2 font-medium text-green-600">Save $6,096</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Extra Principal Payments Strategy</h3>
          <div className="text-purple-700 space-y-2">
            <p><strong>Target principal only:</strong> Extra payments go toward loan balance, not interest</p>
            <p><strong>Even small amounts help:</strong> Extra $50/month can cut years off loan</p>
            <p><strong>Snowball effect:</strong> Less principal = less interest each month</p>
            <p><strong>Flexibility:</strong> Make extra payments when you can afford it</p>
          </div>
        </div>

        <h2>Option 2: Downsize/sell private to reset LTV</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">The Downsizing Strategy</h3>
          <div className="text-orange-700 space-y-3">
            <p><strong>Sell current car:</strong> Get market value (likely less than you owe)</p>
            <p><strong>Pay off difference:</strong> Use savings to cover negative equity</p>
            <p><strong>Buy cheaper car:</strong> Lower price = smaller loan = lower payment</p>
            <p><strong>Net result:</strong> Lower total debt and monthly payment</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Downsizing Math Example</h3>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold text-red-800 mb-3">Current Situation</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Car value: $18,000</li>
                  <li>• Loan balance: $23,000</li>
                  <li>• Monthly payment: $485</li>
                  <li>• Negative equity: -$5,000</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-3">After Downsizing</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Sell car for: $18,000</li>
                  <li>• Pay $5,000 cash to clear loan</li>
                  <li>• Buy $12,000 used car</li>
                  <li>• New payment: $285/month</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">Net Result</h4>
              <p className="text-blue-700 text-sm"><strong>Monthly savings: $200</strong> • <strong>Annual savings: $2,400</strong> • <strong>Out-of-pocket: $5,000</strong> (breaks even in 2.1 years)</p>
            </div>
          </div>
        </div>

        <h2>Option 3: Hardship programs & deferrals</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Temporary Relief Options</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>Payment deferral:</strong> Skip 1-3 payments (interest usually still accrues)</p>
            <p><strong>Loan modification:</strong> Extend term to lower monthly payment</p>
            <p><strong>Rate reduction:</strong> Temporary or permanent APR decrease</p>
            <p><strong>Skip-a-payment:</strong> One-time relief option (may have fees)</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Hardship Program Cautions</h3>
          <div className="text-red-700 space-y-2">
            <p><strong>Interest accrual:</strong> Interest often continues during deferral periods</p>
            <p><strong>Extended payoff:</strong> Deferred payments added to end of loan</p>
            <p><strong>Credit impact:</strong> May show as "paid as agreed" or modification on report</p>
            <p><strong>Limited use:</strong> Most lenders allow only 1-2 deferrals per loan</p>
            <p><strong>Last resort:</strong> Use only when facing true financial hardship</p>
          </div>
        </div>

        <h2>Avoid repo: communicate early</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Proactive Communication Script</h3>
          <div className="bg-white p-4 rounded border text-gray-700">
            <p className="mb-3">"Hello, I'm calling about my auto loan [account number]. I'm experiencing temporary financial difficulty and may have trouble making my payment on [date]. What options do you have to help me avoid missing payments?"</p>
            
            <p className="mb-3"><strong>Follow-up questions to ask:</strong></p>
            <ul className="mb-3 text-sm">
              <li>• Do you offer payment deferrals or extensions?</li>
              <li>• Can we modify the loan terms temporarily?</li>
              <li>• What happens if I'm 30 days late vs. 60 days late?</li>
              <li>• Can I get this agreement in writing?</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Document Everything</h3>
          <div className="text-indigo-700 space-y-2">
            <p><strong>Call logs:</strong> Date, time, representative name, and conversation summary</p>
            <p><strong>Reference numbers:</strong> Save any confirmation or case numbers</p>
            <p><strong>Written agreements:</strong> Request email or mail confirmation of any arrangements</p>
            <p><strong>Payment confirmation:</strong> Keep receipts for all payments made</p>
          </div>
        </div>

        <h2>Voluntary surrender vs. repossession</h2>
        <div className="bg-red-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Why Both Options Are Terrible</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Voluntary Surrender</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Credit score drops 100-150 points</li>
                <li>• Stays on report for 7 years</li>
                <li>• Still owe deficiency balance</li>
                <li>• Shows as "voluntary surrender"</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Repossession</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Credit score drops 100-150 points</li>
                <li>• Stays on report for 7 years</li>
                <li>• Still owe deficiency balance</li>
                <li>• Plus repo and auction fees</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-4 rounded mt-4">
            <p className="text-red-800 font-medium">Both options destroy your credit and you still owe money. Exhaust all other options first.</p>
          </div>
        </div>

        <h2>Alternative exit strategies</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Lease Assumption (if applicable)</h4>
            <p className="text-green-700 text-sm mb-2">Transfer your lease to someone else</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Only works if you're leasing. Websites: SwapALease, LeaseTrader. Transfer fees apply.</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Loan Assumption by Family</h4>
            <p className="text-blue-700 text-sm mb-2">Transfer loan to family member with better credit</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Requires lender approval and family member qualification. You're released from liability.</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Bankruptcy (absolute last resort)</h4>
            <p className="text-purple-700 text-sm mb-2">Chapter 7 or 13 can discharge or reduce auto loans</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Destroys credit for 7-10 years. Consult bankruptcy attorney. May lose the car anyway.</p>
            </div>
          </div>
        </div>

        <h2>Prevention for next time</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Lessons Learned Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Before You Buy</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>□ Get pre-approved for financing</li>
                <li>□ Shop rates from multiple lenders</li>
                <li>□ Calculate total cost of ownership</li>
                <li>□ Follow 20/4/10 rule (20% down, 4 years max, 10% of income)</li>
                <li>□ Buy certified pre-owned or reliable used</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Loan Management</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>□ Make extra principal payments when possible</li>
                <li>□ Refinance when credit improves</li>
                <li>□ Monitor your credit score regularly</li>
                <li>□ Build emergency fund for payment protection</li>
                <li>□ Review insurance and budget annually</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will refinancing hurt my credit?</h3>
              <p className="text-gray-700">Temporarily, yes. The hard inquiry may drop your score 5-10 points initially, but the lower payment and reduced debt-to-income ratio help long-term.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I sell a car I still owe on?</h3>
              <p className="text-gray-700">Yes, but you'll need to coordinate with your lender. If you owe more than it's worth, you'll need to pay the difference to clear the title.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the fastest way to lower the payment?</h3>
              <p className="text-gray-700">Refinancing to a lower rate or longer term provides immediate relief. Selling and downsizing takes longer but reduces total debt burden.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is voluntary surrender better than repo?</h3>
              <p className="text-gray-700">Marginally—it shows you tried to cooperate—but both destroy your credit equally. You still owe the deficiency balance either way. Avoid both if possible.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/sell-car-privately-top-dollar" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Sell Car Privately</h3>
              <p className="text-sm text-indigo-700 mt-1">Get top dollar for your car</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/avoid-bank-scams-phishing-car-buying" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Avoid Car Buying Scams →</h3>
              <p className="text-sm text-green-700 mt-1">Protect your money and identity</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}