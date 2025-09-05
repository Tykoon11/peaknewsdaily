import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Separate Business and Personal Finances Completely',
  description: 'Set up proper financial separation with business accounts, expense tracking, and record-keeping. Avoid commingling that hurts liability protection and taxes.',
}

export default function HowToSeparateBusinessPersonalFinances() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Separate Business Personal Finances</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            🏦
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Separate Business and Personal Finances Completely
        </h1>
        <p className="text-xl text-gray-600">
          Set up proper financial separation with business accounts, expense tracking, and record-keeping. Avoid commingling that hurts liability protection and taxes.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🔒 Clean Separation Strategy</h3>
          <p className="text-pink-700">
            Open dedicated business accounts, use separate credit cards, track every transaction, and never mix personal/business expenses. Document transfers between accounts with clear business purposes and maintain detailed records.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Financial Separation Protects You Legally and Financially</h3>
          <p className="mb-4">
            Mixing business and personal finances can destroy your liability protection, complicate taxes, trigger IRS audits, and make your business look unprofessional to lenders and investors. Clean separation is not just good bookkeeping—it is legal and financial protection.
          </p>
          <p>
            This guide shows you exactly how to set up bulletproof financial separation, what transactions to never mix, and how to handle gray-area expenses that could go either way.
          </p>
        </div>

        <h2>Why Financial Separation Matters</h2>

        <p>Proper separation protects your business entity, simplifies taxes, and builds credibility.</p>

        <h3>Legal Protection Risks</h3>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-semibold text-red-800 mb-3">⚠️ Piercing the Corporate Veil</h4>
          <p className="text-red-700 mb-3">
            If you treat your LLC or corporation like a personal piggy bank, courts can "pierce the corporate veil" and hold you personally liable for business debts and lawsuits. This eliminates the main reason you formed the entity in the first place.
          </p>
          <div className="space-y-2 text-red-700">
            <p><strong>High-risk behaviors:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Using business accounts for personal expenses</li>
              <li>Paying personal bills from business cash</li>
              <li>No formal documentation of loans/transfers</li>
              <li>Mixing personal and business assets</li>
            </ul>
          </div>
        </div>

        <h3>Tax Compliance and Audit Risk</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-3">IRS Red Flags</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• Personal expenses claimed as business deductions</li>
              <li>• Business income deposited to personal accounts</li>
              <li>• No clear business purpose for expenses</li>
              <li>• Excessive business deductions relative to income</li>
              <li>• Missing or poor documentation</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Clean Records Benefits</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Simplified tax preparation</li>
              <li>• Lower audit risk</li>
              <li>• Clear deduction documentation</li>
              <li>• Professional credibility</li>
              <li>• Better loan qualification</li>
            </ul>
          </div>
        </div>

        <h2>Set Up Business Banking Properly</h2>

        <p>Dedicated business accounts are your first line of defense against commingling.</p>

        <h3>Essential Business Accounts</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Business Checking Account</h4>
            <p className="text-gray-600 mb-2">Primary account for all business income and operating expenses</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Use business name and EIN (not SSN)</li>
              <li>• Higher transaction limits than personal accounts</li>
              <li>• Business debit card for day-to-day expenses</li>
              <li>• Online banking with business features</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Business Savings/Money Market</h4>
            <p className="text-gray-600 mb-2">Emergency fund and tax reserve separate from operating cash</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 3-6 months of expenses minimum</li>
              <li>• Quarterly tax payment reserves</li>
              <li>• Equipment replacement fund</li>
              <li>• Growth opportunity reserves</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-2">Business Credit Cards</h4>
            <p className="text-gray-600 mb-2">Separate cards for business expenses, travel, and online purchases</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Business name as primary cardholder</li>
              <li>• Different rewards categories than personal cards</li>
              <li>• Employee cards for staff expenses</li>
              <li>• Detailed monthly statements for accounting</li>
            </ul>
          </div>
        </div>

        <h3>Business Banking Setup Checklist</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">🏦 Banking Setup Steps</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Obtain EIN from IRS (even sole proprietorships should)</li>
            <li>☐ Gather business formation documents (Articles, Operating Agreement)</li>
            <li>☐ Research business banking fees and requirements</li>
            <li>☐ Open business checking account with initial deposit</li>
            <li>☐ Order business debit cards and checks</li>
            <li>☐ Set up online banking and mobile app access</li>
            <li>☐ Apply for business credit card</li>
            <li>☐ Open business savings account</li>
            <li>☐ Set up automatic transfers for tax reserves</li>
            <li>☐ Update all business payment systems with new account</li>
          </ul>
        </div>

        <h2>Handle Mixed-Use Expenses Correctly</h2>

        <p>Some expenses legitimately serve both business and personal purposes—handle these carefully.</p>

        <h3>Home Office Expenses</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Expense Type</th>
                <th className="px-4 py-3 text-left font-semibold">Payment Method</th>
                <th className="px-4 py-3 text-left font-semibold">Tax Treatment</th>
                <th className="px-4 py-3 text-left font-semibold">Documentation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Office rent portion</td>
                <td className="px-4 py-3">Personal account</td>
                <td className="px-4 py-3">Business deduction (percentage)</td>
                <td className="px-4 py-3">Square footage calculation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Internet service</td>
                <td className="px-4 py-3">Personal account</td>
                <td className="px-4 py-3">Partial business deduction</td>
                <td className="px-4 py-3">Usage percentage estimate</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Cell phone</td>
                <td className="px-4 py-3">Personal or business</td>
                <td className="px-4 py-3">Business portion only</td>
                <td className="px-4 py-3">Call logs, usage records</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Computer equipment</td>
                <td className="px-4 py-3">Business account</td>
                <td className="px-4 py-3">Business deduction (percentage)</td>
                <td className="px-4 py-3">Business use percentage</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Vehicle Expenses</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Actual Expense Method</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Track all vehicle expenses</li>
              <li>• Calculate business use percentage</li>
              <li>• Deduct business portion only</li>
              <li>• Keep detailed mileage log</li>
              <li>• Save all receipts and documentation</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Standard Mileage Method</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Track business miles only</li>
              <li>• Use IRS standard rate (65.5 cents/mile 2023)</li>
              <li>• No other vehicle expense deductions</li>
              <li>• Simpler record keeping</li>
              <li>• Good for mixed-use vehicles</li>
            </ul>
          </div>
        </div>

        <h2>Document Every Transaction</h2>

        <p>Proper documentation protects you in audits and supports your expense deductions.</p>

        <h3>Required Documentation Elements</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Receipt Requirements</h4>
            <p className="text-gray-700">Amount, date, business name, description of goods/services, payment method. Keep digital copies and physical receipts for amounts over $75.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Business Purpose</h4>
            <p className="text-gray-700">Who was involved, what business purpose was served, when it occurred, where it took place. Write notes on receipts while details are fresh.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Travel and Meals</h4>
            <p className="text-gray-700">Detailed logs with business contacts, meeting purposes, locations, and times. Meal expense limits apply (50% deductible for most business meals).</p>
          </div>
        </div>

        <h3>Digital Record-Keeping System</h3>

        <ul>
          <li><strong>Receipt scanning apps:</strong> Expensify, Receipt Bank, Wave Receipts</li>
          <li><strong>Cloud storage:</strong> Organized folders by expense type and year</li>
          <li><strong>Accounting software:</strong> QuickBooks, Xero, FreshBooks integration</li>
          <li><strong>Bank feed connections:</strong> Automatic transaction importing</li>
          <li><strong>Backup systems:</strong> Regular exports and multiple storage locations</li>
        </ul>

        <h2>Handle Owner Payments Properly</h2>

        <p>How you pay yourself depends on your business entity and affects taxes and liability protection.</p>

        <h3>Owner Payment Methods by Entity</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Business Entity</th>
                <th className="px-4 py-3 text-left font-semibold">Payment Method</th>
                <th className="px-4 py-3 text-left font-semibold">Tax Treatment</th>
                <th className="px-4 py-3 text-left font-semibold">Documentation Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Sole Proprietorship</td>
                <td className="px-4 py-3">Owner draws</td>
                <td className="px-4 py-3">Not deductible expense</td>
                <td className="px-4 py-3">Transfer memo in records</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Single-Member LLC</td>
                <td className="px-4 py-3">Member distributions</td>
                <td className="px-4 py-3">Not deductible expense</td>
                <td className="px-4 py-3">Distribution resolution</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Multi-Member LLC</td>
                <td className="px-4 py-3">Guaranteed payments + distributions</td>
                <td className="px-4 py-3">GP deductible, distributions not</td>
                <td className="px-4 py-3">Operating agreement terms</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">S-Corporation</td>
                <td className="px-4 py-3">W-2 wages + distributions</td>
                <td className="px-4 py-3">Wages deductible, distributions not</td>
                <td className="px-4 py-3">Payroll records, board resolutions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-semibold text-yellow-800 mb-3">💡 Owner Payment Best Practices</h4>
          <ul className="text-yellow-700 space-y-2">
            <li>• Schedule regular, consistent payments (monthly or quarterly)</li>
            <li>• Document the business purpose and board approval if required</li>
            <li>• Transfer from business account to personal account</li>
            <li>• Never use business cards for personal expenses instead of distributions</li>
            <li>• Maintain loan documentation for any business loans to owners</li>
          </ul>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-choose-business-entity-llc-corp-sole-prop" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Entity</h3>
            <p className="text-pink-600 text-sm mt-2">Entity structure affects separation requirements</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-banking-and-credit-cards" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Banking</h3>
            <p className="text-pink-600 text-sm mt-2">Find accounts that support clean separation</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Proper expense categorization and documentation</p>
          </Link>
          <Link href="/how-to/how-to-build-business-credit-from-scratch" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Build Business Credit</h3>
            <p className="text-pink-600 text-sm mt-2">Separate accounts enable business credit building</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I ever use business funds for personal expenses?</h3>
            <p className="text-gray-600">
              Only through proper owner distributions, salary, or documented loans with market-rate interest. Never directly pay personal expenses from business accounts without formal documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I accidentally mixed a personal expense with business?</h3>
            <p className="text-gray-600">
              Immediately transfer the personal portion from your personal account to the business account, document the correction, and adjust your accounting records. One-time mistakes are less concerning than patterns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need separate business accounts as a sole proprietor?</h3>
            <p className="text-gray-600">
              Not legally required, but strongly recommended. Separate accounts make taxes easier, improve professionalism, and prepare you for potential entity conversion later.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I handle business equipment I use personally?</h3>
            <p className="text-gray-600">
              Track business vs personal use percentages, deduct only the business portion, and maintain usage logs. Pay from business account if primarily business use, personal if primarily personal.
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
                  "name": "Can I ever use business funds for personal expenses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Only through proper owner distributions or documented loans with market-rate interest."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What if I accidentally mixed a personal expense with business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Immediately transfer the personal portion back and document the correction."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need separate business accounts as a sole proprietor?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Not legally required, but strongly recommended for taxes and professionalism."
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