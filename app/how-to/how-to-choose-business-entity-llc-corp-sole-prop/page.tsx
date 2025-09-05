import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Choose Business Entity: LLC vs Corp vs Sole Proprietorship',
  description: 'Compare business structures for taxes, liability, and growth. Understand when to choose LLC, S-Corp, C-Corp, or sole proprietorship with decision frameworks and costs.',
}

export default function HowToChooseBusinessEntity() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Choose Business Entity</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            🏢
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Choose Business Entity: LLC vs Corp vs Sole Proprietorship
        </h1>
        <p className="text-xl text-gray-600">
          Compare business structures for taxes, liability, and growth. Understand when to choose LLC, S-Corp, C-Corp, or sole proprietorship with decision frameworks and costs.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">⚖️ Entity Selection Framework</h3>
          <p className="text-pink-700">
            Choose based on liability needs, tax preferences, and growth plans. Sole proprietorship for simple service businesses, LLC for asset protection with flexibility, S-Corp for self-employment tax savings, C-Corp for investor funding and scaling.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Your Business Structure Affects Everything</h3>
          <p className="mb-4">
            Your business entity choice impacts how much you pay in taxes, your personal liability for business debts, how you can raise money, and even your credibility with customers and vendors. The wrong choice can cost thousands in extra taxes or expose you to personal lawsuits.
          </p>
          <p>
            This guide breaks down each entity type with real examples, tax implications, and decision frameworks to help you choose the structure that fits your business goals and situation.
          </p>
        </div>

        <h2>Business Entity Comparison Overview</h2>

        <p>Each business structure balances liability protection, tax efficiency, and operational complexity differently.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Entity Type</th>
                <th className="px-4 py-3 text-left font-semibold">Liability Protection</th>
                <th className="px-4 py-3 text-left font-semibold">Tax Treatment</th>
                <th className="px-4 py-3 text-left font-semibold">Setup Cost</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Sole Proprietorship</td>
                <td className="px-4 py-3 text-red-600">None</td>
                <td className="px-4 py-3">Personal tax return</td>
                <td className="px-4 py-3 text-green-600">$0-50</td>
                <td className="px-4 py-3">Simple service businesses</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Single-Member LLC</td>
                <td className="px-4 py-3 text-green-600">Strong</td>
                <td className="px-4 py-3">Personal tax return</td>
                <td className="px-4 py-3">$100-500</td>
                <td className="px-4 py-3">Solo entrepreneurs</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Multi-Member LLC</td>
                <td className="px-4 py-3 text-green-600">Strong</td>
                <td className="px-4 py-3">Partnership return</td>
                <td className="px-4 py-3">$100-500</td>
                <td className="px-4 py-3">Partnerships, flexible ownership</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">S-Corporation</td>
                <td className="px-4 py-3 text-green-600">Strong</td>
                <td className="px-4 py-3">Pass-through + W2</td>
                <td className="px-4 py-3">$500-1,500</td>
                <td className="px-4 py-3">High-income service providers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">C-Corporation</td>
                <td className="px-4 py-3 text-green-600">Strongest</td>
                <td className="px-4 py-3">Double taxation</td>
                <td className="px-4 py-3">$1,000-3,000</td>
                <td className="px-4 py-3">Investor funding, scaling</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Sole Proprietorship: Simplest but Riskiest</h2>

        <p>Default structure for unincorporated businesses—easy to start but offers no liability protection.</p>

        <h3>Sole Proprietorship Characteristics</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Advantages</h4>
            <ul className="text-green-700 space-y-2">
              <li>• No formation paperwork or fees</li>
              <li>• Simple tax filing (Schedule C)</li>
              <li>• Complete control and flexibility</li>
              <li>• No separate bank account required</li>
              <li>• Easy to dissolve</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Disadvantages</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Personal liability for all business debts</li>
              <li>• Self-employment tax on all profits</li>
              <li>• Limited credibility with vendors/customers</li>
              <li>• Cannot raise investor capital</li>
              <li>• Difficult to sell or transfer business</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-semibold text-red-800 mb-3">⚠️ Personal Liability Risk</h4>
          <p className="text-red-700 mb-3">
            As a sole proprietor, your personal assets (home, car, savings) can be seized to pay business debts or lawsuit judgments. This includes accidents, product liability, contract disputes, or employee issues.
          </p>
          <p className="text-red-700">
            <strong>Example:</strong> A client slips at your home office and sues for $200,000. Your homeowners insurance might not cover business activities, putting your house at risk.
          </p>
        </div>

        <h3>Good Fit For Sole Proprietorship</h3>

        <ul>
          <li><strong>Very low liability businesses:</strong> Freelance writing, consulting, tutoring</li>
          <li><strong>Testing business ideas:</strong> Start simple before committing to entity formation</li>
          <li><strong>Very small revenue:</strong> Under $10,000 annually</li>
          <li><strong>No employees:</strong> Just you, no contractors or staff</li>
          <li><strong>No physical location:</strong> Service-based, no customer visits</li>
        </ul>

        <h2>Limited Liability Company (LLC): Flexibility with Protection</h2>

        <p>Most popular choice for small businesses—combines liability protection with tax flexibility.</p>

        <h3>LLC Key Features</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Liability Protection</h4>
            <p className="text-gray-600">Members' personal assets generally protected from business debts and lawsuits (with exceptions for personal guarantees and negligence)</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Tax Flexibility</h4>
            <p className="text-gray-600">Can elect different tax treatments: sole proprietorship (single-member), partnership (multi-member), S-Corp, or C-Corp</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Ownership Flexibility</h4>
            <p className="text-gray-600">Unlimited members, different classes of ownership, profit/loss allocations that don't match ownership percentages</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-2">Management Structure</h4>
            <p className="text-gray-600">Member-managed (owners run day-to-day) or manager-managed (hired managers), flexible operating agreement terms</p>
          </div>
        </div>

        <h3>LLC Formation Process</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 LLC Formation Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Choose available business name</li>
            <li>☐ File Articles of Organization with state</li>
            <li>☐ Create Operating Agreement (even single-member)</li>
            <li>☐ Obtain EIN from IRS</li>
            <li>☐ Open business bank account</li>
            <li>☐ Get required business licenses/permits</li>
            <li>☐ Set up accounting system</li>
            <li>☐ Consider professional liability insurance</li>
          </ul>
        </div>

        <h2>S-Corporation: Tax Savings for High Earners</h2>

        <p>Tax election that can save self-employment taxes for profitable businesses.</p>

        <h3>S-Corp Tax Advantage</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-4">Self-Employment Tax Savings</h4>
          <div className="space-y-3">
            <p className="text-green-700">
              <strong>LLC/Sole Prop:</strong> Pay 15.3% self-employment tax on ALL profit
            </p>
            <p className="text-green-700">
              <strong>S-Corp:</strong> Pay payroll taxes only on reasonable salary, not on distributions
            </p>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Example: $100k profit</p>
              <p>LLC: $100k × 15.3% = $15,300 SE tax</p>
              <p>S-Corp: $60k salary × 15.3% = $9,180 payroll tax</p>
              <p className="font-semibold text-green-800">Savings: $6,120 annually</p>
            </div>
          </div>
        </div>

        <h3>S-Corp Requirements and Restrictions</h3>

        <ul>
          <li><strong>Reasonable salary required:</strong> Must pay yourself W-2 wages for services performed</li>
          <li><strong>100 shareholders maximum:</strong> All must be US citizens/residents</li>
          <li><strong>One class of stock:</strong> No preferred shares or different voting rights</li>
          <li><strong>Calendar year:</strong> Generally required unless business purpose for different year</li>
          <li><strong>Payroll compliance:</strong> Quarterly reports, annual W-2s, unemployment taxes</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-semibold text-yellow-800 mb-3">⚡ Reasonable Salary Rule</h4>
          <p className="text-yellow-700 mb-3">
            IRS requires S-Corp owners who work in the business to pay themselves a "reasonable salary" for services performed. You cannot just take distributions to avoid payroll taxes entirely.
          </p>
          <p className="text-yellow-700">
            <strong>Rule of thumb:</strong> 60-70% of profit as salary, remaining as distributions. IRS looks at comparable wages for similar roles in your industry and location.
          </p>
        </div>

        <h2>C-Corporation: Built for Growth and Investment</h2>

        <p>Traditional corporate structure with strongest liability protection and investment capabilities.</p>

        <h3>C-Corp Advantages for Growth</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Investment-Friendly</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Multiple stock classes (common, preferred)</li>
              <li>• Employee stock options and plans</li>
              <li>• Venture capital and institutional investors</li>
              <li>• No ownership restrictions</li>
              <li>• Perpetual existence</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-3">Tax Benefits</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Lower initial tax rates (21% federal)</li>
              <li>• Retain earnings for growth</li>
              <li>• Deduct 100% of health insurance</li>
              <li>• Section 1202 qualified small business stock</li>
              <li>• Deduct losses against other income</li>
            </ul>
          </div>
        </div>

        <h3>C-Corp Double Taxation Challenge</h3>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-red-800 mb-4">Double Taxation Reality</h4>
          <p className="text-red-700 mb-3">
            C-Corp profits are taxed at the corporate level (21% federal), then again when distributed as dividends to shareholders (up to 20% capital gains rate). This creates an effective tax rate of up to 37% on distributed profits.
          </p>
          <div className="space-y-2 text-red-700">
            <p><strong>Corporate profit:</strong> $100,000</p>
            <p><strong>Corporate tax:</strong> $21,000 (21%)</p>
            <p><strong>Dividend distribution:</strong> $79,000</p>
            <p><strong>Shareholder tax:</strong> $15,800 (20%)</p>
            <p className="font-semibold"><strong>Total tax:</strong> $36,800 (36.8%)</p>
          </div>
        </div>

        <h2>Decision Framework: Which Entity to Choose</h2>

        <p>Use these decision trees to narrow down your best options.</p>

        <h3>Primary Decision Factors</h3>

        <div className="space-y-6 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">1. Liability Exposure</h4>
            <p className="text-gray-700">High risk (customers, employees, products) = LLC minimum. Professional services = consider professional liability insurance regardless of entity.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">2. Tax Optimization</h4>
            <p className="text-gray-700">Profit over $60k = consider S-Corp election. Need to retain earnings = C-Corp. Want flexible distributions = LLC.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">3. Growth and Investment Plans</h4>
            <p className="text-gray-700">Seeking investors = C-Corp. Partner with others = LLC or S-Corp. Solo operation = LLC or sole prop.</p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-semibold text-purple-800 mb-2">4. Administrative Tolerance</h4>
            <p className="text-gray-700">Want simplicity = sole prop or LLC. Can handle payroll = S-Corp or C-Corp. Need maximum formality = C-Corp.</p>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business & Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Essential for any business entity</p>
          </Link>
          <Link href="/how-to/how-to-build-business-credit-from-scratch" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Build Business Credit</h3>
            <p className="text-pink-600 text-sm mt-2">Leverage your business structure for credit</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-banking-and-credit-cards" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Banking</h3>
            <p className="text-pink-600 text-sm mt-2">Banking needs vary by entity type</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Tax responsibilities differ by entity</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my business entity later?</h3>
            <p className="text-gray-600">
              Yes, but it can be complex and costly. LLCs can elect S-Corp or C-Corp tax treatment without changing entity. Converting between entity types may trigger tax consequences and require legal assistance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Does an LLC really protect my personal assets?</h3>
            <p className="text-gray-600">
              Generally yes, but there are exceptions. Personal guarantees on loans, personal negligence, and piercing the corporate veil (mixing business/personal finances) can expose personal assets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How much profit do I need to justify S-Corp election?</h3>
            <p className="text-gray-600">
              Generally $60,000+ in annual profit makes S-Corp election worthwhile due to self-employment tax savings. Factor in additional payroll costs and administrative burden when calculating break-even.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I form in Delaware or my home state?</h3>
            <p className="text-gray-600">
              Most small businesses should form in their home state to avoid double filing fees. Delaware benefits mainly apply to companies seeking venture capital or going public.
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
                  "name": "Can I change my business entity later?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but conversion can be complex and trigger tax consequences."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Does an LLC really protect my personal assets?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally yes, with exceptions for personal guarantees and negligence."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much profit do I need to justify S-Corp election?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Generally $60,000+ annually makes S-Corp election worthwhile."
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