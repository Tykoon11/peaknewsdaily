import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Pay Yourself as a Business Owner: Complete Guide',
  description: 'Learn owner payment methods by entity type: draws, distributions, salary, and guaranteed payments. Understand tax implications and optimization strategies.',
}

export default function HowToPayYourselfAsBusinessOwner() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Pay Yourself as Business Owner</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💵
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Pay Yourself as a Business Owner: Complete Guide
        </h1>
        <p className="text-xl text-gray-600">
          Learn owner payment methods by entity type: draws, distributions, salary, and guaranteed payments. Understand tax implications and optimization strategies.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">💰 Owner Payment Strategy</h3>
          <p className="text-pink-700">
            Payment method depends on business entity: sole props take draws, LLCs take distributions, S-Corps require reasonable salary plus distributions, C-Corps pay salary and dividends. Each has different tax implications and requirements.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Owner Payments Affect Taxes and Business Health</h3>
          <p className="mb-4">
            How you pay yourself impacts self-employment taxes, income taxes, business cash flow, and liability protection. The wrong payment method can cost thousands in extra taxes, trigger IRS scrutiny, or undermine your business entity protection.
          </p>
          <p>
            This guide explains payment methods by entity type, tax implications, compliance requirements, and strategies to optimize your total tax burden while maintaining proper business practices.
          </p>
        </div>

        <h2>Payment Methods by Business Entity</h2>

        <p>Your business entity determines which payment methods are available and required.</p>

        <h3>Sole Proprietorship: Owner's Draws</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">How Owner's Draws Work</h4>
            <p className="text-gray-600 mb-2">Transfer money from business account to personal account</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Not a deductible business expense</li>
              <li>• No payroll taxes on draw amounts</li>
              <li>• Pay self-employment tax on all business profit</li>
              <li>• Can take draws anytime in any amount</li>
              <li>• Document transfers for accounting records</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-yellow-50">
            <h4 className="font-semibold mb-2">Tax Treatment</h4>
            <p className="text-gray-600 mb-2">All business profit subject to self-employment tax regardless of draws taken</p>
            <div className="bg-white p-3 rounded border text-sm">
              <p><strong>Example:</strong> Business profit $100,000, draws $60,000</p>
              <p>Self-employment tax: $100,000 × 15.3% = $15,300</p>
              <p>Income tax: Based on full $100,000 profit</p>
            </div>
          </div>
        </div>

        <h3>LLC: Member Distributions</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Single-Member LLC</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Same as sole proprietorship for taxes</li>
              <li>• Take distributions anytime</li>
              <li>• Self-employment tax on all profit</li>
              <li>• No salary or payroll requirements</li>
              <li>• Document distributions for records</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Multi-Member LLC</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Guaranteed payments for services</li>
              <li>• Distributions of remaining profits</li>
              <li>• Follow operating agreement terms</li>
              <li>• K-1 tax reporting to members</li>
              <li>• Self-employment tax considerations</li>
            </ul>
          </div>
        </div>

        <h3>S-Corporation: Salary + Distributions</h3>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-semibold text-red-800 mb-3">⚠️ Reasonable Salary Requirement</h4>
          <p className="text-red-700 mb-3">
            S-Corp owners who work in the business MUST pay themselves a reasonable salary through payroll before taking distributions. This salary is subject to payroll taxes, while distributions are not subject to self-employment tax.
          </p>
          <div className="space-y-2 text-red-700">
            <p><strong>Salary considerations:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comparable to what you'd pay someone else for the same work</li>
              <li>Industry standards for similar roles and experience</li>
              <li>Generally 60-70% of total compensation is reasonable</li>
              <li>IRS scrutinizes very low salaries relative to distributions</li>
            </ul>
          </div>
        </div>

        <h3>C-Corporation: Salary + Dividends</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Payment Type</th>
                <th className="px-4 py-3 text-left font-semibold">Tax Treatment</th>
                <th className="px-4 py-3 text-left font-semibold">Business Deduction</th>
                <th className="px-4 py-3 text-left font-semibold">Owner Tax Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">W-2 Salary</td>
                <td className="px-4 py-3">Ordinary income</td>
                <td className="px-4 py-3 text-green-600">Yes, deductible</td>
                <td className="px-4 py-3">Up to 37% + payroll taxes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Qualified Dividends</td>
                <td className="px-4 py-3">Capital gains</td>
                <td className="px-4 py-3 text-red-600">No deduction</td>
                <td className="px-4 py-3">0%, 15%, or 20%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Bonus Payments</td>
                <td className="px-4 py-3">Ordinary income</td>
                <td className="px-4 py-3 text-green-600">Yes, deductible</td>
                <td className="px-4 py-3">Up to 37% + payroll taxes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Tax Optimization Strategies</h2>

        <p>Structure owner payments to minimize total tax burden while maintaining compliance.</p>

        <h3>S-Corp Tax Savings Example</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-4">Self-Employment Tax Savings</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">LLC Tax Treatment:</p>
              <p>Business profit: $150,000</p>
              <p>Self-employment tax: $150,000 × 15.3% = $22,950</p>
              <p>Income tax: $150,000 × effective rate</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">S-Corp Tax Treatment:</p>
              <p>Reasonable salary: $90,000 (payroll tax: $13,770)</p>
              <p>Distribution: $60,000 (no self-employment tax)</p>
              <p><strong className="text-green-700">Tax savings: $9,180 annually</strong></p>
            </div>
          </div>
        </div>

        <h3>Timing and Cash Flow Considerations</h3>

        <ul>
          <li><strong>Regular schedule:</strong> Monthly or quarterly distributions for budgeting</li>
          <li><strong>Business needs first:</strong> Maintain adequate working capital</li>
          <li><strong>Tax planning:</strong> Time distributions for optimal tax years</li>
          <li><strong>Emergency reserves:</strong> Keep 3-6 months expenses in business</li>
          <li><strong>Growth investment:</strong> Balance owner pay with reinvestment needs</li>
        </ul>

        <h2>Compliance and Documentation</h2>

        <p>Proper documentation and compliance protect your business entity and tax positions.</p>

        <h3>Required Documentation</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Owner Payment Documentation</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Board resolutions authorizing compensation (corporations)</li>
            <li>☐ Operating agreement terms for distributions (LLCs)</li>
            <li>☐ Payroll records and W-2s for salary payments</li>
            <li>☐ Bank transfer records for distributions/draws</li>
            <li>☐ Accounting entries documenting payment type</li>
            <li>☐ Reasonable salary documentation (S-Corps)</li>
            <li>☐ Minutes documenting compensation decisions</li>
            <li>☐ Loan agreements if advances to owners</li>
          </ul>
        </div>

        <h3>Payroll Setup for Corporate Owners</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Payroll Service Options</h4>
            <p className="text-gray-600 mb-2">Professional payroll processing for corporate owners</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• ADP, Paychex, Gusto for full-service payroll</li>
              <li>• QuickBooks Payroll for integrated accounting</li>
              <li>• Square Payroll for simple needs</li>
              <li>• Handles federal/state tax withholding</li>
              <li>• Files quarterly and annual payroll reports</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">DIY Payroll Requirements</h4>
            <p className="text-gray-600 mb-2">Self-processing corporate payroll (not recommended)</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Calculate federal/state income tax withholding</li>
              <li>• Calculate and pay FICA taxes (Social Security/Medicare)</li>
              <li>• File quarterly Form 941</li>
              <li>• Issue W-2s by January 31st</li>
              <li>• Pay unemployment taxes (FUTA/SUTA)</li>
            </ul>
          </div>
        </div>

        <h2>Common Mistakes and Red Flags</h2>

        <p>Avoid these owner payment errors that trigger audits or penalties.</p>

        <h3>IRS Red Flags</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Audit Triggers</h4>
            <ul className="text-red-700 space-y-2">
              <li>• S-Corp salary too low relative to distributions</li>
              <li>• No salary payments for working S-Corp owners</li>
              <li>• Irregular or poorly documented payments</li>
              <li>• Mixing personal and business expenses</li>
              <li>• Excessive loans to owners without repayment</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-3">Best Practices</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• Maintain consistent payment schedules</li>
              <li>• Document business purpose for all payments</li>
              <li>• Follow entity-specific requirements</li>
              <li>• Keep detailed records and receipts</li>
              <li>• Consult tax professionals for complex situations</li>
            </ul>
          </div>
        </div>

        <h3>Entity Protection Considerations</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Piercing the Corporate Veil</h4>
            <p className="text-gray-700">Improper owner payments can undermine liability protection. Avoid treating the business as a personal piggy bank or failing to follow corporate formalities.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Proper Authorization</h4>
            <p className="text-gray-700">Corporate payments should be authorized by board resolution. LLC payments should follow operating agreement terms and member approval processes.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Arm's Length Transactions</h4>
            <p className="text-gray-700">Owner compensation should be reasonable and comparable to what an unrelated party would receive for similar services.</p>
          </div>
        </div>

        <h2>Planning Your Owner Compensation</h2>

        <p>Strategic planning optimizes taxes and supports business growth.</p>

        <h3>Annual Compensation Planning</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-4">Owner Pay Planning Process</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">1. Determine Personal Needs</p>
              <p className="text-sm text-gray-600">Calculate living expenses, taxes, savings goals, and debt payments</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">2. Assess Business Cash Flow</p>
              <p className="text-sm text-gray-600">Ensure adequate working capital and growth investment after owner pay</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">3. Optimize Tax Structure</p>
              <p className="text-sm text-gray-600">Choose entity and payment mix that minimizes total tax burden</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">4. Plan Payment Schedule</p>
              <p className="text-sm text-gray-600">Regular distributions for budgeting, bonus payments for tax optimization</p>
            </div>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-choose-business-entity-llc-corp-sole-prop" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Entity</h3>
            <p className="text-pink-600 text-sm mt-2">Entity choice determines payment options</p>
          </Link>
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean separation enables proper owner payments</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Owner payments need proper documentation</p>
          </Link>
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Budget planning includes owner compensation</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How much should I pay myself as an S-Corp owner?</h3>
            <p className="text-gray-600">
              Pay a reasonable salary for services performed, typically 60-70% of total compensation. Research comparable salaries in your industry and location. The remainder can be distributions free from self-employment tax.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I take money from my business anytime as an LLC?</h3>
            <p className="text-gray-600">
              Generally yes, but follow your operating agreement terms and ensure adequate cash flow for business operations. Document distributions properly and consider tax implications of timing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I don't pay myself a salary in my S-Corp?</h3>
            <p className="text-gray-600">
              IRS may reclassify distributions as wages subject to payroll taxes, plus penalties and interest. Working S-Corp owners must receive reasonable compensation through payroll before taking distributions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I change my business entity to save on owner taxes?</h3>
            <p className="text-gray-600">
              Consider S-Corp election for LLCs with high profits to save self-employment taxes. Consult tax professionals to analyze your specific situation, as entity changes have costs and compliance requirements.
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much should I pay myself as an S-Corp owner?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pay a reasonable salary for services performed, typically 60-70% of total compensation."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I take money from my business anytime as an LLC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally yes, but follow operating agreement terms and ensure adequate cash flow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I don't pay myself a salary in my S-Corp?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "IRS may reclassify distributions as wages subject to payroll taxes, plus penalties."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </div>
  )
}