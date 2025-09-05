import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Maximize RRSP/401(k)/ISA Tax Shelters (Complete Guide)',
  description: 'Contribution limits, employer matching, Roth vs traditional, withdrawal strategies, and regional optimization.',
}

export default function MaximizeTaxSheltersPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Maximize Tax Shelters</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Maximize RRSP/401(k)/ISA Tax Shelters (Complete Guide)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Contribution limits, employer matching, Roth vs traditional, withdrawal strategies, and regional optimization.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Priority order for contributions</h2>
        
        <p>Maximize tax-advantaged accounts in order of tax benefit and employer matching. Don't leave free money on the table.</p>

        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Emergency fund first</p>
              <p className="text-gray-600 text-sm">$1,000-2,500 starter emergency fund before retirement contributions</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Employer match (free money)</p>
              <p className="text-gray-600 text-sm">Contribute enough to 401(k) to get full employer match</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">HSA (triple tax advantage)</p>
              <p className="text-gray-600 text-sm">Max out Health Savings Account if available</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">IRA/RRSP/ISA maximum</p>
              <p className="text-gray-600 text-sm">Max out individual retirement accounts</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Max 401(k)/workplace plan</p>
              <p className="text-gray-600 text-sm">Complete employer plan contributions</p>
            </div>
          </div>
        </div>

        <h2>2024 contribution limits by region</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 py-2 text-left">Account Type</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">2024 Limit</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Age 50+ Catch-up</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">401(k)</td>
                    <td className="border border-gray-300 px-3 py-2">$23,000</td>
                    <td className="border border-gray-300 px-3 py-2">+$7,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">IRA (Traditional/Roth)</td>
                    <td className="border border-gray-300 px-3 py-2">$7,000</td>
                    <td className="border border-gray-300 px-3 py-2">+$1,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">HSA</td>
                    <td className="border border-gray-300 px-3 py-2">$4,300 / $8,550 family</td>
                    <td className="border border-gray-300 px-3 py-2">+$1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 py-2 text-left">Account Type</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">2024 Limit</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Special Rules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">RRSP</td>
                    <td className="border border-gray-300 px-3 py-2">18% income, max $31,560</td>
                    <td className="border border-gray-300 px-3 py-2">Carry forward unused room</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">TFSA</td>
                    <td className="border border-gray-300 px-3 py-2">$7,000</td>
                    <td className="border border-gray-300 px-3 py-2">Withdrawals restore room next year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">FHSA</td>
                    <td className="border border-gray-300 px-3 py-2">$8,000</td>
                    <td className="border border-gray-300 px-3 py-2">First-time homebuyers only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">🇬🇧 United Kingdom</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 py-2 text-left">Account Type</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">2024-25 Limit</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Tax Relief</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">Pension</td>
                    <td className="border border-gray-300 px-3 py-2">£60,000 annual allowance</td>
                    <td className="border border-gray-300 px-3 py-2">At marginal tax rate</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">ISA (all types)</td>
                    <td className="border border-gray-300 px-3 py-2">£20,000</td>
                    <td className="border border-gray-300 px-3 py-2">Tax-free growth/withdrawals</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">LISA</td>
                    <td className="border border-gray-300 px-3 py-2">£4,000 (25% bonus)</td>
                    <td className="border border-gray-300 px-3 py-2">First home or retirement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2>Traditional vs Roth decision framework</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Choose Traditional/RRSP When:</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Currently in high tax bracket (24%+ US, 30%+ Canada)</li>
              <li>• Expect lower income in retirement</li>
              <li>• Need immediate tax deduction</li>
              <li>• Maxing out dollar limits (can effectively save more)</li>
              <li>• Employer match is traditional (get deduction + match)</li>
              <li>• Plan to retire to lower-tax jurisdiction</li>
            </ul>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Choose Roth/TFSA When:</h4>
            <ul className="text-cyan-700 text-sm space-y-2">
              <li>• Currently in low tax bracket (12% or less US)</li>
              <li>• Young with decades of growth ahead</li>
              <li>• Expect higher income/tax rates in retirement</li>
              <li>• Want tax-free withdrawals in retirement</li>
              <li>• Estate planning benefits (no RMDs)</li>
              <li>• Concerned about future tax rate increases</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-3">Hedge Your Bets Strategy</h3>
          <div className="space-y-2">
            <p className="text-yellow-700 text-sm">If uncertain, split contributions between traditional and Roth accounts</p>
            <p className="text-yellow-700 text-sm">Provides flexibility in retirement to manage tax brackets</p>
            <p className="text-yellow-700 text-sm">Example: 60% traditional (immediate savings), 40% Roth (tax diversification)</p>
          </div>
        </div>

        <h2>Advanced strategies</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Mega Backdoor Roth (US)</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm"><strong>Requirements:</strong> 401(k) allows after-tax contributions and in-service withdrawals</p>
              <p className="text-blue-700 text-sm"><strong>Process:</strong> Contribute after-tax dollars, immediately convert to Roth</p>
              <p className="text-blue-700 text-sm"><strong>Limit:</strong> Up to $69,000 total 401(k) contributions (2024)</p>
              <p className="text-blue-700 text-sm"><strong>Benefit:</strong> Massive Roth contributions for high earners</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Spousal IRA Contributions</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Non-working spouse can contribute based on working spouse's income</p>
              <p className="text-green-700 text-sm">Double your household IRA contribution limit</p>
              <p className="text-green-700 text-sm">Each spouse can have traditional and/or Roth IRA</p>
              <p className="text-green-700 text-sm">Income limits apply to household AGI</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">RRSP/TFSA Optimization (Canada)</h4>
            <div className="space-y-2">
              <p className="text-purple-700 text-sm">Use RRSP in high-income years, TFSA in lower-income periods</p>
              <p className="text-purple-700 text-sm">RRSP deduction can reduce clawback of benefits (GIS, CCB)</p>
              <p className="text-purple-700 text-sm">TFSA withdrawals don't affect income-tested benefits</p>
              <p className="text-purple-700 text-sm">Consider FHSA for first-time homebuyers</p>
            </div>
          </div>
        </div>

        <h2>Common mistakes to avoid</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Costly Errors</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Not getting employer match:</strong> Leaving 50-100% returns on the table</li>
            <li>• <strong>Over-contributing:</strong> 6% excess contribution penalty annually</li>
            <li>• <strong>Wrong account type:</strong> Not considering current vs future tax brackets</li>
            <li>• <strong>Cashing out when changing jobs:</strong> 20% withholding + 10% penalty + taxes</li>
            <li>• <strong>Not naming beneficiaries:</strong> Complicates estate settlement</li>
            <li>• <strong>Ignoring fees:</strong> High-cost funds can erode decades of returns</li>
          </ul>
        </div>

        <h2>Investment strategies inside tax shelters</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Tax-Efficient Placement</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Tax-advantaged accounts:</strong> Bonds, REITs, actively managed funds</li>
              <li>• <strong>Taxable accounts:</strong> Tax-efficient index funds, individual stocks</li>
              <li>• <strong>Roth accounts:</strong> Highest-growth potential investments</li>
              <li>• <strong>Traditional accounts:</strong> Income-generating assets</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Low-Cost Options</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Index funds:</strong> Broad market exposure, minimal fees</li>
              <li>• <strong>Target date funds:</strong> Age-appropriate allocation, rebalancing</li>
              <li>• <strong>ETFs:</strong> Tax-efficient, low expense ratios</li>
              <li>• <strong>Avoid:</strong> High-fee actively managed funds, frequent trading</li>
            </ul>
          </div>
        </div>

        <h2>Withdrawal strategies</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Account Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Early Withdrawal Rules</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Required Distributions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">401(k) Traditional</td>
                <td className="border border-gray-300 px-3 py-2">10% penalty before 59.5 (some exceptions)</td>
                <td className="border border-gray-300 px-3 py-2">RMDs at 73</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">401(k) Roth</td>
                <td className="border border-gray-300 px-3 py-2">Contributions anytime, earnings 5-year + 59.5</td>
                <td className="border border-gray-300 px-3 py-2">RMDs at 73</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">IRA Traditional</td>
                <td className="border border-gray-300 px-3 py-2">10% penalty + taxes (exceptions apply)</td>
                <td className="border border-gray-300 px-3 py-2">RMDs at 73</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Roth IRA</td>
                <td className="border border-gray-300 px-3 py-2">Contributions anytime tax/penalty free</td>
                <td className="border border-gray-300 px-3 py-2">No RMDs during lifetime</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">TFSA</td>
                <td className="border border-gray-300 px-3 py-2">Anytime, no penalties</td>
                <td className="border border-gray-300 px-3 py-2">None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Automate your contributions to remove emotional decision-making. Set up payroll deductions for 401(k) 
            and automatic monthly transfers for IRA/TFSA. Increase contributions by 1-2% annually or whenever you get a raise.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I contribute to 401(k) if there's no employer match?</h3>
              <p className="text-gray-700">
                Usually max out IRA first (more investment options, lower fees), then return to 401(k). 
                Exception: if you're in a very high tax bracket and need the larger deduction limit of 401(k).
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I contribute to both RRSP and TFSA?</h3>
              <p className="text-gray-700">
                Yes, they have separate contribution limits. Strategy depends on income level and tax situation. 
                High earners often prioritize RRSP for immediate tax deduction, then TFSA.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I can't max out all my accounts?</h3>
              <p className="text-gray-700">
                Follow the priority order: emergency fund, employer match, HSA, then IRA/TFSA, then remaining 401(k) space. 
                Even small amounts compound significantly over decades.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I pay off debt or contribute to retirement accounts?</h3>
              <p className="text-gray-700">
                Get employer match first (it's guaranteed return), pay off high-interest debt (>6-7%), 
                then balance debt payoff with retirement contributions based on interest rates vs expected investment returns.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-estimate-quarterly-taxes-and-avoid-penalties" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Estimate Quarterly Taxes</h3>
              <p className="text-sm text-emerald-700 mt-1">Avoid underpayment penalties</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-claim-home-office-deductions-properly" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Home Office Deductions →</h3>
              <p className="text-sm text-emerald-700 mt-1">Properly claim home office expenses</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}