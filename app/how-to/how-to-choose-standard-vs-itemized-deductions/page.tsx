import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Standard vs Itemized Deductions: How to Choose & Maximize Tax Savings',
  description: 'Decision framework for standard vs itemized deductions. Track expenses, understand thresholds, and optimize your tax strategy.',
}

export default function StandardVsItemizedDeductionsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Standard vs Itemized Deductions</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">Standard vs Itemized Deductions: How to Choose & Maximize Tax Savings</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Decision framework for standard vs itemized deductions. Track expenses, understand thresholds, and optimize your tax strategy.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Decision framework</h2>
        
        <p>Choose itemized deductions only when they exceed your standard deduction amount. Most taxpayers benefit from the standard deduction.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Tax Year 2024</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Standard Deduction (US)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Additional (65+ or Blind)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Single</td>
                <td className="border border-gray-300 px-3 py-2">$14,600</td>
                <td className="border border-gray-300 px-3 py-2">+$1,950</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Married Filing Jointly</td>
                <td className="border border-gray-300 px-3 py-2">$29,200</td>
                <td className="border border-gray-300 px-3 py-2">+$1,550 each</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Married Filing Separately</td>
                <td className="border border-gray-300 px-3 py-2">$14,600</td>
                <td className="border border-gray-300 px-3 py-2">+$1,550</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Head of Household</td>
                <td className="border border-gray-300 px-3 py-2">$21,900</td>
                <td className="border border-gray-300 px-3 py-2">+$1,950</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-blue-900 mb-3">Quick Decision Test</h3>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• Add up your mortgage interest, SALT deductions, and charitable giving</li>
            <li>• If total exceeds your standard deduction by $500+, consider itemizing</li>
            <li>• If close to the threshold, calculate both ways</li>
            <li>• Remember time cost of recordkeeping vs tax savings</li>
          </ul>
        </div>

        <h2>Major itemized deductions</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">High-Value Deductions</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Mortgage interest:</strong> Primary + secondary homes</li>
              <li>• <strong>SALT deductions:</strong> $10,000 cap (state/local taxes)</li>
              <li>• <strong>Charitable donations:</strong> Cash + non-cash gifts</li>
              <li>• <strong>Medical expenses:</strong> Above 7.5% of AGI threshold</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Overlooked Deductions</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• <strong>Investment advisory fees:</strong> (Subject to 2% AGI floor)</li>
              <li>• <strong>Tax preparation costs:</strong> Professional fees</li>
              <li>• <strong>Unreimbursed work expenses:</strong> (Limited situations)</li>
              <li>• <strong>Casualty/theft losses:</strong> Federally declared disasters</li>
            </ul>
          </div>
        </div>

        <h2>Regional differences</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">SALT deduction cap</p>
                <p className="text-blue-700 text-sm">$10,000 limit on state/local taxes makes itemizing less valuable in high-tax states</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Mortgage interest limits</p>
                <p className="text-blue-700 text-sm">$750,000 loan limit for new mortgages ($1M for pre-2017 loans)</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Charitable deduction limits</p>
                <p className="text-blue-700 text-sm">Generally 50% of AGI for cash donations, varies by organization type</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">No standard deduction equivalent</p>
                <p className="text-purple-700 text-sm">All deductions are "itemized" - claim what applies to your situation</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Major deductions/credits</p>
                <p className="text-purple-700 text-sm">Medical expenses, charitable donations, carrying charges, moving expenses</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">🇬🇧 UK</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Personal allowance system</p>
                <p className="text-green-700 text-sm">Automatic tax-free amount (£12,570 for 2024-25), limited additional deductions</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Allowable deductions</p>
                <p className="text-green-700 text-sm">Professional subscriptions, charitable donations (Gift Aid), pension contributions</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Record-keeping system</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Set up tracking early</p>
              <p className="text-gray-600 text-sm">Don't wait until tax season—track deductible expenses throughout the year</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Digital receipt storage</p>
              <p className="text-gray-600 text-sm">Apps like Shoeboxed, Receipt Bank, or simple cloud folders with photos</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Separate deductible accounts</p>
              <p className="text-gray-600 text-sm">Use dedicated credit cards or bank accounts for charitable, medical, business expenses</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Annual deduction review</p>
              <p className="text-gray-600 text-sm">By October, estimate totals and make strategic year-end moves if itemizing</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Not running both calculations:</strong> Assuming itemizing is better without comparing</li>
            <li>• <strong>Missing the timing:</strong> Not bunching deductions in alternating years</li>
            <li>• <strong>Poor documentation:</strong> Losing receipts or not tracking mileage properly</li>
            <li>• <strong>Ignoring AGI thresholds:</strong> Missing deductions subject to income limits</li>
            <li>• <strong>Double-counting:</strong> Claiming same expense in multiple categories</li>
          </ul>
        </div>

        <h2>Strategic timing</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">Bunching Strategies</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Two-year cycle approach</p>
              <p className="text-green-700 text-sm">Itemize every other year by bunching deductible expenses, take standard deduction in off years</p>
            </div>
            <div>
              <p className="font-medium text-green-800">December timing moves</p>
              <p className="text-green-700 text-sm">Pay January mortgage early, bunch charitable donations, accelerate medical procedures</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Donor-advised funds</p>
              <p className="text-green-700 text-sm">Make large charitable contribution in one year, distribute over multiple years</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Use tax software to calculate both standard and itemized deductions automatically. 
            Most modern tax prep software will choose the higher amount for you, but review the details 
            to understand which deductions provide the most value.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can married couples choose different deduction methods?</h3>
              <p className="text-gray-700">
                If filing separately, each spouse can choose standard or itemized independently. 
                If filing jointly, you must both use the same method—whichever provides the higher total deduction.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I'm close to the standard deduction threshold?</h3>
              <p className="text-gray-700">
                Calculate both ways and consider the time value of recordkeeping. If itemizing saves less than $200-500, 
                the standard deduction might be worth it for the simplicity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do state taxes affect the decision?</h3>
              <p className="text-gray-700">
                States have their own standard deduction amounts and rules. Some states don't allow itemizing if you 
                took the federal standard deduction, while others are independent of your federal choice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I itemize if I have no mortgage?</h3>
              <p className="text-gray-700">
                It's less likely but possible. Focus on charitable donations, SALT deductions, and medical expenses. 
                Renters in high-tax states might still benefit from itemizing due to state/local tax deductions.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-file-your-taxes-online-checklist" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← File Taxes Online</h3>
              <p className="text-sm text-emerald-700 mt-1">Complete checklist for online tax filing</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-track-investment-cost-basis-accurately" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Track Investment Cost Basis →</h3>
              <p className="text-sm text-emerald-700 mt-1">Accurate record-keeping for capital gains</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}