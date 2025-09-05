import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Choose Business Banking and Credit Cards',
  description: 'Select business accounts and credit cards with low fees, good features, and credit-building potential. Compare banks, understand requirements, and optimize cash management.',
}

export default function HowToChooseBusinessBankingAndCreditCards() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Choose Business Banking and Credit Cards</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            🏦
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Choose Business Banking and Credit Cards
        </h1>
        <p className="text-xl text-gray-600">
          Select business accounts and credit cards with low fees, good features, and credit-building potential. Compare banks, understand requirements, and optimize cash management.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🏆 Banking Selection Strategy</h3>
          <p className="text-pink-700">
            Choose banks with low monthly fees, good online features, and business lending capability. Pick credit cards that report to business bureaus, offer rewards on your spending categories, and have reasonable fees. Prioritize relationship building over rate chasing.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Banking Relationships Are Business Infrastructure</h3>
          <p className="mb-4">
            Your business banking relationships affect daily operations, credit building, lending opportunities, and financial growth. The wrong bank can cost thousands in fees, limit your growth, or complicate your finances. The right relationships provide capital, services, and support as you scale.
          </p>
          <p>
            This guide helps you evaluate business banking options, compare credit cards strategically, understand fee structures, and choose financial partners that grow with your business.
          </p>
        </div>

        <h2>Business Checking Account Essentials</h2>

        <p>Business checking is your primary operating account—choose features that support your workflow.</p>

        <h3>Key Features to Evaluate</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Essential Features</h4>
            <ul className="text-green-700 space-y-2">
              <li>• No monthly fees or reasonable minimums</li>
              <li>• Unlimited or high transaction limits</li>
              <li>• Mobile banking with remote deposit</li>
              <li>• Online bill pay and transfers</li>
              <li>• Debit card with business name</li>
              <li>• Integration with accounting software</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Nice-to-Have Features</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Interest on balances</li>
              <li>• Multiple user access with permissions</li>
              <li>• Cash management tools</li>
              <li>• Merchant services integration</li>
              <li>• International wire capabilities</li>
              <li>• Dedicated business banker</li>
            </ul>
          </div>
        </div>

        <h3>Fee Structure Comparison</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Bank Type</th>
                <th className="px-4 py-3 text-left font-semibold">Monthly Fee</th>
                <th className="px-4 py-3 text-left font-semibold">Transaction Limit</th>
                <th className="px-4 py-3 text-left font-semibold">Minimum Balance</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Online Banks</td>
                <td className="px-4 py-3 text-green-600">$0-15</td>
                <td className="px-4 py-3">Unlimited</td>
                <td className="px-4 py-3">$0-500</td>
                <td className="px-4 py-3">Digital-first businesses</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Credit Unions</td>
                <td className="px-4 py-3 text-green-600">$5-20</td>
                <td className="px-4 py-3">100-300/month</td>
                <td className="px-4 py-3">$100-1,000</td>
                <td className="px-4 py-3">Local businesses, lower fees</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Community Banks</td>
                <td className="px-4 py-3 text-yellow-600">$15-35</td>
                <td className="px-4 py-3">200-500/month</td>
                <td className="px-4 py-3">$500-2,500</td>
                <td className="px-4 py-3">Relationship banking, lending</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Large Banks</td>
                <td className="px-4 py-3 text-red-600">$25-75</td>
                <td className="px-4 py-3">150-300/month</td>
                <td className="px-4 py-3">$1,500-5,000</td>
                <td className="px-4 py-3">Multi-location, complex needs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Business Credit Card Strategy</h2>

        <p>Business credit cards build credit history, provide rewards, and offer expense management tools.</p>

        <h3>Credit Card Selection Criteria</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Credit Bureau Reporting</h4>
            <p className="text-gray-700">Verify card reports to business credit bureaus (Dun & Bradstreet, Experian Business, Equifax Business) to build business credit separate from personal credit.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Rewards Alignment</h4>
            <p className="text-gray-700">Choose cards with bonus categories that match your spending: office supplies, gas, travel, dining, or general purchases. Calculate actual rewards value, not just percentages.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Credit Limit and Terms</h4>
            <p className="text-gray-700">Sufficient credit limit for monthly expenses, reasonable APR for cash flow gaps, and manageable annual fees relative to rewards earned.</p>
          </div>
        </div>

        <h3>Business Credit Card Categories</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Cash Back Cards</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Simple rewards structure</li>
              <li>• 1-5% cash back on purchases</li>
              <li>• Good for businesses that value simplicity</li>
              <li>• Lower annual fees typically</li>
              <li>• Example: Chase Ink Business Cash</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Travel Rewards Cards</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Points/miles for travel purchases</li>
              <li>• Airport lounge access and perks</li>
              <li>• Good for businesses with travel needs</li>
              <li>• Higher annual fees but more benefits</li>
              <li>• Example: Capital One Spark Miles</li>
            </ul>
          </div>
        </div>

        <h2>Banking Relationship Strategy</h2>

        <p>Build relationships that support your business growth and financing needs.</p>

        <h3>Primary Banking Relationship</h3>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-pink-800 mb-4">Choosing Your Primary Bank</h4>
          <p className="text-pink-700 mb-3">
            Your primary bank should handle 70-80% of your banking needs and be positioned to grow with your business. Consider local community banks or credit unions for relationship banking, or online banks for low fees and digital features.
          </p>
          <div className="space-y-2 text-pink-700">
            <p><strong>Evaluate:</strong> Lending appetite, local decision-making, SBA lending, and business services</p>
            <p><strong>Test:</strong> Customer service responsiveness, online platform quality, and problem resolution</p>
            <p><strong>Build:</strong> Regular communication, account growth, and multiple service relationships</p>
          </div>
        </div>

        <h3>Multi-Bank Strategy Benefits</h3>

        <ul>
          <li><strong>Risk diversification:</strong> Protect against single bank failure or account freezes</li>
          <li><strong>Service optimization:</strong> Use different banks for specific strengths</li>
          <li><strong>Competitive leverage:</strong> Multiple relationships improve lending negotiations</li>
          <li><strong>FDIC coverage:</strong> Maximize deposit insurance across institutions</li>
          <li><strong>Geographic flexibility:</strong> Access to services in different locations</li>
        </ul>

        <h2>Account Structure for Business Growth</h2>

        <p>Organize accounts to support operations, cash management, and tax planning.</p>

        <h3>Essential Business Accounts</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Operating Checking</h4>
            <p className="text-gray-600 mb-2">Primary account for daily transactions, bill payments, and customer deposits</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• High transaction limits</li>
              <li>• Excellent online banking</li>
              <li>• Integration with accounting software</li>
              <li>• Low or no monthly fees</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Business Savings/Money Market</h4>
            <p className="text-gray-600 mb-2">Emergency fund, tax reserves, and excess cash storage</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Higher interest rates</li>
              <li>• FDIC/NCUA insured</li>
              <li>• Easy transfers to operating account</li>
              <li>• Separate tax reserve tracking</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-2">Payroll Account (if applicable)</h4>
            <p className="text-gray-600 mb-2">Dedicated account for employee payroll and payroll taxes</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Separate from operating funds</li>
              <li>• Integration with payroll services</li>
              <li>• ACH capabilities</li>
              <li>• Clear audit trail</li>
            </ul>
          </div>
        </div>

        <h2>Application and Setup Process</h2>

        <p>Gather required documentation and establish accounts efficiently.</p>

        <h3>Required Documentation</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Bank Account Opening Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ EIN (Employer Identification Number) from IRS</li>
            <li>☐ Business formation documents (Articles of Incorporation/Organization)</li>
            <li>☐ Operating Agreement or Corporate Bylaws</li>
            <li>☐ Business licenses and permits</li>
            <li>☐ Owner identification (driver's license, passport)</li>
            <li>☐ Proof of business address</li>
            <li>☐ Initial deposit (cash or check from personal account)</li>
            <li>☐ List of authorized signers and their information</li>
          </ul>
        </div>

        <h3>Account Setup Best Practices</h3>

        <ul>
          <li><strong>Start relationship early:</strong> Open accounts before you need credit or services</li>
          <li><strong>Bring substantial deposits:</strong> Larger balances get better service and rates</li>
          <li><strong>Meet decision makers:</strong> Introduce yourself to business bankers and managers</li>
          <li><strong>Set up all services:</strong> Online banking, mobile deposit, bill pay, and alerts</li>
          <li><strong>Establish patterns:</strong> Regular deposits and account activity build history</li>
        </ul>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Business accounts enable clean separation</p>
          </Link>
          <Link href="/how-to/how-to-build-business-credit-from-scratch" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Build Business Credit</h3>
            <p className="text-pink-600 text-sm mt-2">Banking relationships support credit building</p>
          </Link>
          <Link href="/how-to/how-to-get-a-business-loan-or-line-of-credit" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Business Loan or Line of Credit</h3>
            <p className="text-pink-600 text-sm mt-2">Banking relationships help with financing</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Business cards simplify expense tracking</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need a business bank account for my LLC?</h3>
            <p className="text-gray-600">
              While not legally required in most states, business accounts are essential for liability protection, tax benefits, and professional credibility. Mixing personal and business funds can pierce the corporate veil.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get business credit cards with no business credit history?</h3>
            <p className="text-gray-600">
              Yes, many issuers approve business cards based on personal credit initially. Start with secured business cards or cards from banks where you have existing relationships, then build business credit history.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I choose a local bank or national bank?</h3>
            <p className="text-gray-600">
              Consider local banks for relationship lending and personalized service, national banks for convenience and technology, or online banks for low fees. Many businesses use a combination based on different needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How many business credit cards should I have?</h3>
            <p className="text-gray-600">
              Start with 1-2 cards for different purposes (general purchases, specific categories). Add more as your business grows and you can manage them responsibly. Focus on building history before expanding.
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
                  "name": "Do I need a business bank account for my LLC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While not legally required, business accounts are essential for liability protection and tax benefits."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I get business credit cards with no business credit history?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, many issuers approve based on personal credit initially. Start with secured cards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I choose a local bank or national bank?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Consider local for relationships, national for convenience, or online for low fees."
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