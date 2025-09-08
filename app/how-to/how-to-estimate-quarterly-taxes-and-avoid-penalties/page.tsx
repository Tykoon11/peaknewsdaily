import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Estimate Quarterly Taxes and Avoid Penalties',
  description: 'Safe harbor rules, payment schedules, Form 1040ES, and strategies for freelancers and investors.',
}

export default function EstimateQuarterlyTaxesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Estimate Quarterly Taxes</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Estimate Quarterly Taxes and Avoid Penalties</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Safe harbor rules, payment schedules, Form 1040ES, and strategies for freelancers and investors.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Who needs to make quarterly payments</h2>
        
        <p>Make estimated tax payments if you expect to owe $1,000+ when you file your return, after withholding and credits.</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-3">Common Situations Requiring Estimates</h3>
          <ul className="text-red-700 text-sm space-y-2">
            <li>• Self-employment income (freelancing, consulting, gig work)</li>
            <li>• Investment income (dividends, capital gains, rental income)</li>
            <li>• Business profits from sole proprietorship or partnership</li>
            <li>• Retirement account withdrawals (traditional IRA/401k)</li>
            <li>• Unemployment compensation or other untaxed income</li>
            <li>• Insufficient withholding from regular employment</li>
          </ul>
        </div>

        <h2>Safe harbor rules</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">Option 1: Pay 90% of Current Year</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Calculate expected tax</p>
                <p className="text-green-700 text-sm">Estimate total tax for current year, subtract withholding</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Pay 90% by quarters</p>
                <p className="text-green-700 text-sm">Divide by 4, make equal payments by due dates</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Best for</p>
                <p className="text-green-700 text-sm">Lower income years, significant income drops</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">Option 2: Pay 100%/110% of Prior Year</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">100% if AGI ≤ $150,000</p>
                <p className="text-blue-700 text-sm">Pay 100% of last year's total tax liability</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">110% if AGI &gt; $150,000</p>
                <p className="text-blue-700 text-sm">High earners must pay 110% of prior year</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Best for</p>
                <p className="text-blue-700 text-sm">Income growth, unpredictable earnings</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Payment schedule and due dates</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Quarter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Income Period</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Due Date 2024</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Payment Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Q1</td>
                <td className="border border-gray-300 px-3 py-2">Jan 1 - Mar 31</td>
                <td className="border border-gray-300 px-3 py-2">April 15, 2024</td>
                <td className="border border-gray-300 px-3 py-2">25% of annual estimate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Q2</td>
                <td className="border border-gray-300 px-3 py-2">Apr 1 - May 31</td>
                <td className="border border-gray-300 px-3 py-2">June 17, 2024</td>
                <td className="border border-gray-300 px-3 py-2">25% of annual estimate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Q3</td>
                <td className="border border-gray-300 px-3 py-2">Jun 1 - Aug 31</td>
                <td className="border border-gray-300 px-3 py-2">September 16, 2024</td>
                <td className="border border-gray-300 px-3 py-2">25% of annual estimate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Q4</td>
                <td className="border border-gray-300 px-3 py-2">Sep 1 - Dec 31</td>
                <td className="border border-gray-300 px-3 py-2">January 15, 2025</td>
                <td className="border border-gray-300 px-3 py-2">25% (or file return by Feb 1)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-3">Key Payment Rules</h3>
          <ul className="text-yellow-700 text-sm space-y-2">
            <li>• Payments due by 11:59 PM on due date (or next business day if weekend/holiday)</li>
            <li>• Must be received or postmarked by due date</li>
            <li>• Electronic payments must be submitted by 8 PM ET on due date</li>
            <li>• Can skip Q4 payment if you file and pay in full by February 1</li>
          </ul>
        </div>

        <h2>Calculation methods</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Method 1: Annualized Income Installment</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">Calculate tax on actual income earned each quarter</p>
              <p className="text-blue-700 text-sm">Good for seasonal businesses or uneven income</p>
              <p className="text-blue-700 text-sm">Requires Form 2210 Schedule AI</p>
              <p className="text-blue-700 text-sm">More complex but can reduce required payments</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Method 2: Standard Equal Payments</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Same payment amount each quarter</p>
              <p className="text-green-700 text-sm">Based on either 90% current year or 100%/110% prior year</p>
              <p className="text-green-700 text-sm">Simpler calculation and planning</p>
              <p className="text-green-700 text-sm">Use Form 1040ES worksheets</p>
            </div>
          </div>
        </div>

        <h2>Form 1040ES worksheet</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Estimate adjusted gross income</p>
              <p className="text-gray-600 text-sm">Include all income sources: wages, self-employment, investments, etc.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Calculate deductions</p>
              <p className="text-gray-600 text-sm">Standard or itemized deductions, above-the-line deductions</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Determine taxable income and tax</p>
              <p className="text-gray-600 text-sm">Apply tax brackets, add self-employment tax if applicable</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Subtract credits and withholding</p>
              <p className="text-gray-600 text-sm">Child tax credit, earned income credit, W-2 withholding</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Divide by 4 for quarterly amounts</p>
              <p className="text-gray-600 text-sm">Round up to avoid underpayment if close to threshold</p>
            </div>
          </div>
        </div>

        <h2>Payment methods</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Electronic Options (Recommended)</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>IRS Direct Pay:</strong> Free, bank transfer from checking/savings</li>
              <li>• <strong>EFTPS:</strong> Electronic Federal Tax Payment System</li>
              <li>• <strong>Tax software:</strong> Most software can schedule payments</li>
              <li>• <strong>Bank bill pay:</strong> Schedule recurring payments</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Traditional Methods</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• <strong>Form 1040ES vouchers:</strong> Mail with check</li>
              <li>• <strong>Phone payments:</strong> 1-888-PAY-1040 (fees apply)</li>
              <li>• <strong>Credit/debit cards:</strong> Third-party processors (fees apply)</li>
              <li>• <strong>Money orders:</strong> If no checking account</li>
            </ul>
          </div>
        </div>

        <h2>Penalty calculations</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-4">Underpayment Penalty Details</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-800">Current penalty rate</p>
              <p className="text-red-700 text-sm">8% annually (as of 2024), calculated quarterly on shortage</p>
            </div>
            <div>
              <p className="font-medium text-red-800">How it's calculated</p>
              <p className="text-red-700 text-sm">Applied separately to each quarter's underpayment</p>
            </div>
            <div>
              <p className="font-medium text-red-800">Exceptions</p>
              <p className="text-red-700 text-sm">Prior year AGI under $150K, casualty/disaster, unusual circumstances</p>
            </div>
          </div>
        </div>

        <h2>Special situations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Seasonal Income</h4>
            <div className="space-y-2">
              <p className="text-purple-700 text-sm">Use annualized income installment method</p>
              <p className="text-purple-700 text-sm">Pay based on income actually received each quarter</p>
              <p className="text-purple-700 text-sm">Can significantly reduce early-year payment requirements</p>
              <p className="text-purple-700 text-sm">Requires careful record-keeping and Form 2210</p>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">W-2 Employees with Side Income</h4>
            <div className="space-y-2">
              <p className="text-teal-700 text-sm">Option 1: Make quarterly payments on side income</p>
              <p className="text-teal-700 text-sm">Option 2: Increase W-4 withholding at main job</p>
              <p className="text-teal-700 text-sm">Withholding is considered paid evenly throughout year</p>
              <p className="text-teal-700 text-sm">Can help avoid underpayment even with uneven side income</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="font-semibold text-amber-800 mb-3">Retirees with Investment Income</h4>
            <div className="space-y-2">
              <p className="text-amber-700 text-sm">Factor in Social Security taxation thresholds</p>
              <p className="text-amber-700 text-sm">Consider timing of IRA/401k withdrawals</p>
              <p className="text-amber-700 text-sm">May want voluntary withholding on distributions</p>
              <p className="text-amber-700 text-sm">Roth conversions create current-year tax liability</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Forgetting self-employment tax:</strong> 15.3% on net SE income often overlooked</li>
            <li>• <strong>Using wrong prior year amount:</strong> Must use total tax, not amount owed</li>
            <li>• <strong>Missing due dates:</strong> Even one day late can trigger penalties</li>
            <li>• <strong>Not adjusting for income changes:</strong> Continue old payments despite changed circumstances</li>
            <li>• <strong>Ignoring state requirements:</strong> Most states have separate estimated tax rules</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Set up automatic bank transfers to a separate "tax savings" account with each payment you receive. 
            Transfer 25-30% of self-employment income immediately, then use this account to make quarterly payments. 
            This prevents spending money needed for taxes.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I miss a quarterly payment deadline?</h3>
              <p className="text-gray-700">
                Make the payment as soon as possible to minimize penalty interest. The penalty is calculated separately 
                for each quarter, so late payment on one quarter doesn't affect others. You may still owe penalty for the late quarter.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I adjust my payments during the year?</h3>
              <p className="text-gray-700">
                Yes, you can change payment amounts for future quarters based on updated income projections. 
                If income drops significantly, you can reduce remaining payments. If it increases, increase payments to avoid penalties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to make state quarterly payments too?</h3>
              <p className="text-gray-700">
                Most states with income taxes have their own estimated payment requirements, usually similar to federal rules 
                but with different thresholds. Check your state tax agency website for specific requirements and due dates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I overpay my quarterly estimates?</h3>
              <p className="text-gray-700">
                Overpayments are credited toward next year's taxes or refunded when you file your return. 
                It's generally better to slightly overpay than underpay to avoid penalties, especially if amounts are uncertain.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-file-amended-returns-if-you-made-a-mistake" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← File Amended Returns</h3>
              <p className="text-sm text-emerald-700 mt-1">Fix mistakes on filed tax returns</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-maximize-rrsp-401k-isa-tax-shelters" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Maximize Tax Shelters →</h3>
              <p className="text-sm text-emerald-700 mt-1">RRSP, 401(k), and ISA strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}