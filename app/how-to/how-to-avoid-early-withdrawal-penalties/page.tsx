import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avoid Early Withdrawal Penalties (US & Canada Rules Explained)',  
  description: 'Know the ages, exceptions, and smarter alternatives to access money early from RRSP/401(k)/IRA/LIRA—without costly penalties and taxes.',
}

export default function AvoidEarlyWithdrawalPenaltiesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Early Withdrawal Penalties</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">How to avoid early withdrawal penalties</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Know the ages, exceptions, and smarter alternatives to access money early from RRSP/401(k)/IRA/LIRA—without costly penalties and taxes.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>US early withdrawal rules</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-4">Standard 10% Early Withdrawal Penalty</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-800">Applies to:</p>
              <p className="text-red-700 text-sm">Traditional and Roth 401(k), Traditional IRA withdrawals before age 59½</p>
            </div>
            <div>
              <p className="font-medium text-red-800">On top of:</p>
              <p className="text-red-700 text-sm">Regular income taxes (except for Roth contributions)</p>
            </div>
            <div>
              <p className="font-medium text-red-800">Example cost:</p>
              <p className="text-red-700 text-sm">$10,000 withdrawal = $1,000 penalty + $2,200 taxes (22% bracket) = $3,200 total cost</p>
            </div>
          </div>
        </div>

        <h2>US penalty exceptions</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Exception</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Applies To</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">First-time home purchase</td>
                <td className="border border-gray-300 px-3 py-2">IRA only</td>
                <td className="border border-gray-300 px-3 py-2">Up to $10,000 lifetime</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Higher education expenses</td>
                <td className="border border-gray-300 px-3 py-2">IRA only</td>
                <td className="border border-gray-300 px-3 py-2">You, spouse, children, grandchildren</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Medical expenses</td>
                <td className="border border-gray-300 px-3 py-2">Both IRA & 401(k)</td>
                <td className="border border-gray-300 px-3 py-2">Above 7.5% of AGI threshold</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Disability</td>
                <td className="border border-gray-300 px-3 py-2">Both IRA & 401(k)</td>
                <td className="border border-gray-300 px-3 py-2">Total and permanent disability</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Substantially Equal Payments (72t)</td>
                <td className="border border-gray-300 px-3 py-2">Both IRA & 401(k)</td>
                <td className="border border-gray-300 px-3 py-2">Fixed payments for 5 years or until 59½</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Rule of 55</td>
                <td className="border border-gray-300 px-3 py-2">401(k) only</td>
                <td className="border border-gray-300 px-3 py-2">Leave job at 55+ (50+ for public safety)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Roth IRA special rules</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">More Flexible Access</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Contributions anytime</p>
              <p className="text-green-700 text-sm">Withdraw original contributions tax and penalty-free at any age</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Earnings restrictions</p>
              <p className="text-green-700 text-sm">Must be 59½ + account open 5 years for tax-free earnings withdrawal</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Conversion ladder strategy</p>
              <p className="text-green-700 text-sm">Convert Traditional IRA to Roth, wait 5 years, withdraw penalty-free</p>
            </div>
          </div>
        </div>

        <h2>Canada withdrawal rules</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 TFSA (Tax-Free Savings Account)</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">No penalties ever</p>
                <p className="text-purple-700 text-sm">Withdraw any amount at any age without tax or penalty</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Contribution room restoration</p>
                <p className="text-purple-700 text-sm">Withdrawn amount is added back to contribution room next January 1st</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">No income impact</p>
                <p className="text-purple-700 text-sm">TFSA withdrawals don't affect income-tested benefits (GIS, CCB, OAS)</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="font-semibold text-orange-900 mb-4">RRSP Withdrawals</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-orange-800">No penalty, but costly</p>
                <p className="text-orange-700 text-sm">Full amount added to taxable income + withholding tax</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Withholding tax rates</p>
                <p className="text-orange-700 text-sm">10% (up to $5,000), 20% ($5,001-$15,000), 30% (over $15,000)</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Lost contribution room</p>
                <p className="text-orange-700 text-sm">Cannot re-contribute withdrawn amounts (unlike TFSA)</p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h3 className="font-semibold text-cyan-900 mb-4">Locked-In Accounts (LIRA/LIF)</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-cyan-800">Generally locked until retirement age</p>
                <p className="text-cyan-700 text-sm">Earliest access typically 55, varies by province</p>
              </div>
              <div>
                <p className="font-medium text-cyan-800">Unlocking provisions</p>
                <p className="text-cyan-700 text-sm">Financial hardship, shortened life expectancy, small amounts</p>
              </div>
              <div>
                <p className="font-medium text-cyan-800">Provincial differences</p>
                <p className="text-cyan-700 text-sm">Each province has different unlocking rules and conditions</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Smarter alternatives to early withdrawal</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Use Taxable Savings First</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">No penalties on regular investment accounts</p>
              <p className="text-green-700 text-sm">Capital gains may qualify for preferential tax rates</p>
              <p className="text-green-700 text-sm">Preserve tax-advantaged space for long-term growth</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">401(k) Loans (If Available)</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">Borrow up to 50% of balance or $50,000, whichever is less</p>
              <p className="text-blue-700 text-sm">Repay yourself with interest (typically 5-6%)</p>
              <p className="text-blue-700 text-sm">Risk: If you leave job, loan typically due immediately</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Bridge with Other Income</h4>
            <div className="space-y-2">
              <p className="text-yellow-700 text-sm">Part-time work or consulting income</p>
              <p className="text-yellow-700 text-sm">Spousal income or support</p>
              <p className="text-yellow-700 text-sm">Home equity line of credit (carefully considered)</p>
            </div>
          </div>
        </div>

        <h2>Special programs for early access</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">🇺🇸 Roth IRA Conversion Ladder</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">Convert Traditional IRA to Roth IRA annually</p>
              <p className="text-blue-700 text-sm">Wait 5 years, then withdraw converted amount penalty-free</p>
              <p className="text-blue-700 text-sm">Ideal for early retirees with low-income years for conversions</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">🇨🇦 Home Buyers' Plan (HBP)</h4>
            <div className="space-y-2">
              <p className="text-purple-700 text-sm">Withdraw up to $35,000 from RRSP for first home</p>
              <p className="text-purple-700 text-sm">Must repay over 15 years starting in second year</p>
              <p className="text-purple-700 text-sm">Missed repayments become taxable income</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Lifelong Learning Plan (LLP)</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Withdraw up to $20,000 from RRSP for education</p>
              <p className="text-green-700 text-sm">Must repay over 10 years</p>
              <p className="text-green-700 text-sm">For you or spouse's full-time education or training</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ When NOT to Withdraw Early</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>For lifestyle spending:</strong> Vacation, car, non-essential purchases</li>
            <li>• <strong>Market timing:</strong> Moving money based on market predictions</li>
            <li>• <strong>Without considering alternatives:</strong> Not exploring other funding sources first</li>
            <li>• <strong>For investments:</strong> Withdrawing to invest elsewhere rarely makes sense</li>
            <li>• <strong>Credit card debt:</strong> Often better to negotiate payment plans than raid retirement</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Plan ahead:</strong> Build emergency funds in taxable accounts before needing retirement funds</li>
            <li>• <strong>Know the rules:</strong> Penalty exceptions can save thousands in specific situations</li>
            <li>• <strong>Consider timing:</strong> Low-income years may be better for taxable withdrawals</li>
            <li>• <strong>Get professional advice:</strong> Complex rules warrant expert guidance for large amounts</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I access Roth IRA money penalty-free before 59½?</h3>
              <p className="text-gray-700">
                Yes, you can withdraw your original contributions anytime without penalty. For earnings, you need to meet 
                the 5-year rule and be 59½, or qualify for specific exceptions like first-time home purchase.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is RRSP withdrawal ever a smart move?</h3>
              <p className="text-gray-700">
                Possibly during very low-income years when you'd be in a low tax bracket, or to avoid higher future brackets. 
                However, the lost contribution room and compound growth make this generally unattractive.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do rules change for government programs?</h3>
              <p className="text-gray-700">
                Yes, laws evolve regularly. For example, the CARES Act temporarily waived some early withdrawal penalties. 
                Always verify current exceptions and rules before taking action, as outdated information can be costly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the best strategy for early retirement access?</h3>
              <p className="text-gray-700">
                Build a "bridge" using taxable accounts and cash for the first 5-10 years, then use Roth conversion ladders 
                and penalty-free withdrawal strategies. Plan this well in advance of early retirement.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-create-a-retirement-income-withdrawal-plan" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Create Withdrawal Plan</h3>
              <p className="text-sm text-teal-700 mt-1">Turn savings into retirement income</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-execute-a-backdoor-roth-step-by-step" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Execute Backdoor Roth →</h3>
              <p className="text-sm text-teal-700 mt-1">High earners can access Roth benefits</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}