import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Reduce Taxes Legally (Credits & Deductions You\'re Missing)',
  description: 'Comprehensive tax reduction strategies: credits vs deductions, retirement accounts, health savings, timing strategies.',
}

export default function ReduceTaxesLegallyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Reduce Taxes Legally</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Reduce Taxes Legally (Credits & Deductions You're Missing)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Comprehensive tax reduction strategies: credits vs deductions, retirement accounts, health savings, timing strategies.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Credits vs deductions: understand the difference</h2>
        
        <p>Tax credits reduce your tax bill dollar-for-dollar. Deductions reduce your taxable income. Credits are almost always more valuable.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">📈 Tax Credits (Better)</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Direct tax reduction</p>
                <p className="text-green-700 text-sm">$1,000 credit = $1,000 less tax owed</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Types available</p>
                <p className="text-green-700 text-sm">Child tax credit, earned income credit, education credits</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Refundable vs non-refundable</p>
                <p className="text-green-700 text-sm">Some can create refunds beyond what you paid in taxes</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">📊 Tax Deductions</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Reduces taxable income</p>
                <p className="text-blue-700 text-sm">$1,000 deduction = $220-370 tax savings (depending on bracket)</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Above vs below the line</p>
                <p className="text-blue-700 text-sm">Above-the-line deductions reduce AGI, more valuable</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Standard vs itemized</p>
                <p className="text-blue-700 text-sm">Take whichever is higher for your situation</p>
              </div>
            </div>
          </div>
        </div>

        <h2>High-impact tax credits</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Child Tax Credit (US)</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>$2,000 per child</strong> under 17 (2024)</li>
              <li>• <strong>Up to $1,700 refundable</strong> (Additional Child Tax Credit)</li>
              <li>• <strong>Income limits:</strong> Phases out starting at $200K (single) / $400K (married)</li>
              <li>• <strong>Requirements:</strong> Child must be US citizen, live with you 6+ months</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Earned Income Tax Credit (EITC)</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Maximum $7,830</strong> with 3+ children (2024)</li>
              <li>• <strong>Fully refundable</strong> - can exceed taxes owed</li>
              <li>• <strong>Income limits vary</strong> by filing status and number of children</li>
              <li>• <strong>Work requirement:</strong> Must have earned income from employment</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Education Credits</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>American Opportunity Credit:</strong> $2,500/year (40% refundable)</li>
              <li>• <strong>Lifetime Learning Credit:</strong> $2,000/year (non-refundable)</li>
              <li>• <strong>Income limits:</strong> Phase out at higher incomes</li>
              <li>• <strong>Cannot claim both</strong> for same student in same year</li>
            </ul>
          </div>
        </div>

        <h2>Retirement account strategies</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Account Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">2024 Limit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Tax Benefit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">401(k) Traditional</td>
                <td className="border border-gray-300 px-3 py-2">$23,000 (+$7,500 if 50+)</td>
                <td className="border border-gray-300 px-3 py-2">Immediate deduction</td>
                <td className="border border-gray-300 px-3 py-2">High current tax bracket</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">401(k) Roth</td>
                <td className="border border-gray-300 px-3 py-2">$23,000 (+$7,500 if 50+)</td>
                <td className="border border-gray-300 px-3 py-2">Tax-free growth</td>
                <td className="border border-gray-300 px-3 py-2">Lower current tax bracket</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Traditional IRA</td>
                <td className="border border-gray-300 px-3 py-2">$7,000 (+$1,000 if 50+)</td>
                <td className="border border-gray-300 px-3 py-2">Deduction (income limits)</td>
                <td className="border border-gray-300 px-3 py-2">No 401(k) or low income</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Roth IRA</td>
                <td className="border border-gray-300 px-3 py-2">$7,000 (+$1,000 if 50+)</td>
                <td className="border border-gray-300 px-3 py-2">Tax-free withdrawals</td>
                <td className="border border-gray-300 px-3 py-2">Under income limits</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">HSA</td>
                <td className="border border-gray-300 px-3 py-2">$4,300 individual / $8,550 family</td>
                <td className="border border-gray-300 px-3 py-2">Triple tax advantage</td>
                <td className="border border-gray-300 px-3 py-2">HDHP participants</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Advanced strategies</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Tax-Loss Harvesting</h4>
            <div className="space-y-2">
              <p className="text-yellow-700 text-sm">Sell losing investments to offset capital gains</p>
              <p className="text-yellow-700 text-sm">$3,000 annual limit on losses against ordinary income</p>
              <p className="text-yellow-700 text-sm">Watch wash sale rules (30-day restriction)</p>
              <p className="text-yellow-700 text-sm">Carry forward unused losses to future years</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Backdoor Roth Strategy</h4>
            <div className="space-y-2">
              <p className="text-orange-700 text-sm">Contribute to non-deductible traditional IRA</p>
              <p className="text-orange-700 text-sm">Convert to Roth IRA immediately</p>
              <p className="text-orange-700 text-sm">Avoids income limits for Roth contributions</p>
              <p className="text-orange-700 text-sm">Watch pro-rata rule if you have other traditional IRAs</p>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Charitable Giving Strategies</h4>
            <div className="space-y-2">
              <p className="text-teal-700 text-sm">Donate appreciated assets instead of cash</p>
              <p className="text-teal-700 text-sm">Bunch donations in alternating years</p>
              <p className="text-teal-700 text-sm">Use donor-advised funds for timing flexibility</p>
              <p className="text-teal-700 text-sm">Qualified Charitable Distribution from IRA (70.5+)</p>
            </div>
          </div>
        </div>

        <h2>Regional variations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">State tax considerations</p>
                <p className="text-blue-700 text-sm">SALT deduction cap ($10,000), state-specific credits, municipal bond interest</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Health Savings Accounts</p>
                <p className="text-blue-700 text-sm">Triple tax advantage: deductible, growth tax-free, withdrawals tax-free for medical</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">RRSP contributions</p>
                <p className="text-purple-700 text-sm">18% of previous year income, maximum $31,560 (2024), carry forward unused room</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">TFSA maximization</p>
                <p className="text-purple-700 text-sm">$7,000 annual limit (2024), tax-free growth and withdrawals</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">🇬🇧 UK</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">ISA allowances</p>
                <p className="text-green-700 text-sm">£20,000 annual allowance (2024-25), tax-free growth and withdrawals</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Pension contributions</p>
                <p className="text-green-700 text-sm">Annual allowance £60,000, tax relief at marginal rate</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Year-end planning</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Maximize retirement contributions</p>
              <p className="text-gray-600 text-sm">401(k) deadline: Dec 31. IRA deadline: Tax filing deadline (April 15)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Execute tax-loss harvesting</p>
              <p className="text-gray-600 text-sm">Sell losing positions before Dec 31, but watch wash sale rules</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Bunch deductible expenses</p>
              <p className="text-gray-600 text-sm">Prepay January mortgage, make charitable donations, schedule medical procedures</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Consider Roth conversions</p>
              <p className="text-gray-600 text-sm">Convert traditional IRA to Roth in low-income years</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Common Tax Planning Mistakes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Waiting until tax season:</strong> Many strategies require year-end action</li>
            <li>• <strong>Focusing only on federal:</strong> Ignoring state tax implications</li>
            <li>• <strong>Not tracking basis:</strong> Overpaying on capital gains due to poor records</li>
            <li>• <strong>Assuming higher income = higher taxes:</strong> Tax-advantaged accounts can change this</li>
            <li>• <strong>Ignoring tax-free growth:</strong> Underestimating value of Roth accounts and HSAs</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Track your marginal tax rate throughout the year. If a promotion or side income pushes you into a higher bracket, 
            accelerate deductions and delay income when possible. If you're in a lower bracket this year, consider Roth conversions.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I prioritize tax credits or deductions?</h3>
              <p className="text-gray-700">
                Always prioritize tax credits since they reduce taxes dollar-for-dollar. Then focus on above-the-line deductions, 
                retirement contributions, and finally itemized deductions if they exceed the standard deduction.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I contribute to retirement accounts?</h3>
              <p className="text-gray-700">
                At minimum, contribute enough to your 401(k) to get the full employer match. Then consider maxing out HSA, 
                then Roth IRA (if eligible), then remaining 401(k) space, based on your tax situation and goals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it worth hiring a tax professional?</h3>
              <p className="text-gray-700">
                Consider professional help if you have complex investments, own a business, experienced major life changes, 
                or your potential tax savings exceed the cost of professional help (typically $200-1000+).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I reduce taxes if I'm already retired?</h3>
              <p className="text-gray-700">
                Yes. Manage withdrawal timing from different account types, use tax-loss harvesting, consider charitable 
                giving strategies, and plan Roth conversions in lower-income years.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-track-investment-cost-basis-accurately" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Track Investment Cost Basis</h3>
              <p className="text-sm text-emerald-700 mt-1">Accurate records prevent tax overpayment</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-handle-side-hustle-taxes-self-employment" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Side Hustle Taxes →</h3>
              <p className="text-sm text-emerald-700 mt-1">Self-employment tax strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}