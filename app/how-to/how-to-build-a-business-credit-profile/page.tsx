import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build a Business Credit Profile: Complete Guide',
  description: 'Establish business credit with EIN, trade references, business accounts, and credit monitoring. Build strong credit scores for better financing terms and business growth.',
}

export default function HowToBuildBusinessCreditProfile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Build Business Credit Profile</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            📈
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Build a Business Credit Profile: Complete Guide
        </h1>
        <p className="text-xl text-gray-600">
          Establish business credit with EIN, trade references, business accounts, and credit monitoring. Build strong credit scores for better financing terms and business growth.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🏗️ Credit Profile Building Strategy</h3>
          <p className="text-pink-700">
            Start with business entity and EIN, establish business accounts using business name only, build trade credit with reporting vendors, monitor all three business credit bureaus, and maintain perfect payment history while keeping personal and business credit separate.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Strong Business Credit Opens Financing Doors</h3>
          <p className="mb-4">
            A strong business credit profile enables financing without personal guarantees, higher credit limits, better terms, and signals credibility to vendors and partners. Poor or nonexistent business credit limits growth opportunities and increases personal financial risk.
          </p>
          <p>
            This guide walks you through building business credit systematically, from entity formation through establishing trade relationships and monitoring your credit profile across all major business credit bureaus.
          </p>
        </div>

        <h2>Foundation: Business Identity and Structure</h2>

        <p>Business credit requires a legitimate business entity separate from your personal identity.</p>

        <h3>Essential Business Documentation</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Legal Business Identity</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Business entity (LLC, Corp, Partnership)</li>
              <li>• EIN (Employer Identification Number)</li>
              <li>• State business registration</li>
              <li>• Required business licenses</li>
              <li>• DUNS number from D&B (free)</li>
              <li>• Business name consistency across all accounts</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Business Presence</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Physical business address (not PO Box)</li>
              <li>• Dedicated business phone line</li>
              <li>• Professional website with contact info</li>
              <li>• Business email address</li>
              <li>• Google Business Profile listing</li>
              <li>• Industry association memberships</li>
            </ul>
          </div>
        </div>

        <h3>Business Banking Setup</h3>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-yellow-800 mb-4">Banking for Credit Building</h4>
          <p className="text-yellow-700 mb-3">
            Open business accounts using your EIN and business name only—never use your SSN or personal name. This separation is crucial for building independent business credit that doesn't appear on your personal credit report.
          </p>
          <div className="space-y-2 text-yellow-700">
            <p><strong>Account requirements:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Business checking account with business name</li>
              <li>Business savings account for reserves</li>
              <li>Maintain positive balances consistently</li>
              <li>Avoid overdrafts and NSF fees completely</li>
              <li>Keep accounts active with regular transactions</li>
            </ul>
          </div>
        </div>

        <h2>Establish Business Credit Accounts</h2>

        <p>Build credit history through business credit cards and financing relationships.</p>

        <h3>Business Credit Card Strategy</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Card Type</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
                <th className="px-4 py-3 text-left font-semibold">Reports to Business Bureaus</th>
                <th className="px-4 py-3 text-left font-semibold">Requirements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Secured Business Card</td>
                <td className="px-4 py-3">New businesses, bad personal credit</td>
                <td className="px-4 py-3 text-green-600">Yes</td>
                <td className="px-4 py-3">Security deposit, minimal credit</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Unsecured Business Card</td>
                <td className="px-4 py-3">Established businesses, good credit</td>
                <td className="px-4 py-3 text-green-600">Yes</td>
                <td className="px-4 py-3">Business history, good personal credit</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Store Business Cards</td>
                <td className="px-4 py-3">Building initial trade lines</td>
                <td className="px-4 py-3 text-yellow-600">Sometimes</td>
                <td className="px-4 py-3">Business purchases from retailer</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Corporate Cards</td>
                <td className="px-4 py-3">Large businesses, employee cards</td>
                <td className="px-4 py-3 text-green-600">Yes</td>
                <td className="px-4 py-3">Strong financials, established business</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Credit Card Best Practices</h3>

        <ul>
          <li><strong>Apply using EIN only:</strong> Use business information, not personal SSN when possible</li>
          <li><strong>Keep utilization low:</strong> Under 30% of credit limit, preferably under 10%</li>
          <li><strong>Pay balances in full:</strong> Avoid interest charges and show strong cash flow</li>
          <li><strong>Use cards regularly:</strong> Small monthly purchases maintain account activity</li>
          <li><strong>Request limit increases:</strong> Higher limits improve credit utilization ratios</li>
        </ul>

        <h2>Build Trade Credit Relationships</h2>

        <p>Trade credit from suppliers is the foundation of strong business credit profiles.</p>

        <h3>Trade Credit Building Process</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Phase 1: Net-30 Vendors</h4>
            <p className="text-gray-600 mb-2">Start with vendors who report to business credit bureaus</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Uline (business supplies)</li>
              <li>• Grainger (industrial supplies)</li>
              <li>• Quill (office supplies)</li>
              <li>• Crown Office Supply</li>
              <li>• Net-30 payment terms, pay within 15 days initially</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-semibold mb-2">Phase 2: Industry Suppliers</h4>
            <p className="text-gray-600 mb-2">Establish credit with suppliers in your industry</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Research suppliers who report payment history</li>
              <li>• Start with small orders and pay early</li>
              <li>• Request credit limit increases quarterly</li>
              <li>• Maintain perfect payment history</li>
              <li>• Use trade references for new applications</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Phase 3: Diverse Credit Mix</h4>
            <p className="text-gray-600 mb-2">Expand to different types of business credit</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Business fuel cards (Fleet cards)</li>
              <li>• Equipment financing relationships</li>
              <li>• Business lines of credit</li>
              <li>• SBA loan participation</li>
              <li>• Corporate credit cards with multiple issuers</li>
            </ul>
          </div>
        </div>

        <h3>Vendor Credit Application Tips</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Trade Credit Application</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Apply using business name and EIN exclusively</li>
            <li>☐ Provide business bank and trade references</li>
            <li>☐ Submit financial statements when requested</li>
            <li>☐ Start with small credit requests ($500-1,000)</li>
            <li>☐ Pay first orders early (within 10-15 days)</li>
            <li>☐ Verify vendor reports to credit bureaus</li>
            <li>☐ Request credit limit increases after 6 months</li>
            <li>☐ Maintain active account usage</li>
          </ul>
        </div>

        <h2>Monitor Business Credit Reports</h2>

        <p>Regular monitoring helps track progress and catch errors that could hurt your credit profile.</p>

        <h3>Business Credit Bureau Overview</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Credit Bureau</th>
                <th className="px-4 py-3 text-left font-semibold">Primary Score</th>
                <th className="px-4 py-3 text-left font-semibold">Score Range</th>
                <th className="px-4 py-3 text-left font-semibold">Key Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Dun & Bradstreet</td>
                <td className="px-4 py-3">Paydex Score</td>
                <td className="px-4 py-3">1-100</td>
                <td className="px-4 py-3">Payment timeliness (80+ is good)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Experian Business</td>
                <td className="px-4 py-3">Intelliscore Plus</td>
                <td className="px-4 py-3">1-100</td>
                <td className="px-4 py-3">Payment risk assessment</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Equifax Business</td>
                <td className="px-4 py-3">Business Risk Score</td>
                <td className="px-4 py-3">101-992</td>
                <td className="px-4 py-3">Overall credit risk</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">FICO SBSS</td>
                <td className="px-4 py-3">Small Business Score</td>
                <td className="px-4 py-3">0-300</td>
                <td className="px-4 py-3">Lender decision tool</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Credit Monitoring Strategy</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Monthly Monitoring</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Check all three major bureaus</li>
              <li>• Verify new trade lines appear correctly</li>
              <li>• Dispute any errors immediately</li>
              <li>• Track payment timing impact on scores</li>
              <li>• Monitor credit utilization ratios</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Score Optimization</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Pay all accounts early when possible</li>
              <li>• Keep credit utilization under 30%</li>
              <li>• Maintain diverse types of credit</li>
              <li>• Build long-term account relationships</li>
              <li>• Avoid closing old accounts</li>
            </ul>
          </div>
        </div>

        <h2>Advanced Credit Building Strategies</h2>

        <p>Sophisticated tactics to accelerate credit building and maximize credit profile strength.</p>

        <h3>Payment Timing Optimization</h3>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-yellow-800 mb-4">Paydex Score Optimization</h4>
          <p className="text-yellow-700 mb-3">
            D&B's Paydex score is based on payment timing relative to terms. Early payments boost scores significantly:
          </p>
          <div className="space-y-2 text-yellow-700">
            <p><strong>Paydex Score Guide:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>100: Pay 30+ days early</li>
              <li>90-99: Pay 20-29 days early</li>
              <li>80-89: Pay 1-19 days early</li>
              <li>70-79: Pay on time</li>
              <li>Below 70: Pay late</li>
            </ul>
          </div>
        </div>

        <h3>Strategic Account Management</h3>

        <ul>
          <li><strong>Account aging:</strong> Keep older accounts active to show credit history length</li>
          <li><strong>Credit mix diversity:</strong> Revolving credit, installment loans, trade credit</li>
          <li><strong>Geographic diversification:</strong> Accounts with national and local creditors</li>
          <li><strong>Industry relevance:</strong> Credit relationships with industry-specific vendors</li>
          <li><strong>Limit optimization:</strong> Request increases every 6-12 months</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>

        <p>Avoid these errors that can damage your business credit profile.</p>

        <h3>Credit Building Mistakes</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold text-red-800 mb-2">Mixing Personal and Business Credit</h4>
            <p className="text-gray-700">Using SSN instead of EIN, personal guarantees when not required, mixing personal and business expenses</p>
          </div>
          
          <div className="border-l-4 border-yellow-600 pl-6">
            <h4 className="font-semibold text-yellow-800 mb-2">Inconsistent Business Information</h4>
            <p className="text-gray-700">Different business names, addresses, or phone numbers across applications create confusion and verification delays</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Poor Payment Timing</h4>
            <p className="text-gray-700">Paying on due date instead of early, making payments inconsistently, or ignoring payment timing impact on scores</p>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-build-business-credit-from-scratch" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Build Business Credit from Scratch</h3>
            <p className="text-pink-600 text-sm mt-2">Detailed step-by-step credit building process</p>
          </Link>
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Financial separation enables independent credit</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-banking-and-credit-cards" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Banking</h3>
            <p className="text-pink-600 text-sm mt-2">Banking relationships support credit building</p>
          </Link>
          <Link href="/how-to/how-to-get-a-business-loan-or-line-of-credit" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Business Loan</h3>
            <p className="text-pink-600 text-sm mt-2">Strong credit improves loan terms and approval</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does it take to build business credit?</h3>
            <p className="text-gray-600">
              Basic business credit can be established in 3-6 months with trade accounts and business credit cards. Strong business credit typically takes 12-24 months of consistent payment history and diverse credit relationships.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I build business credit with bad personal credit?</h3>
            <p className="text-gray-600">
              Yes, but it's more challenging initially. Start with secured business credit cards, vendor accounts that don't require personal guarantees, and maintain perfect payment history. Business credit is separate from personal credit once established.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I use my SSN or EIN when applying for business credit?</h3>
            <p className="text-gray-600">
              Always use your EIN when possible to build true business credit separate from personal credit. Some initial applications may require SSN for identity verification, but specify EIN as the primary identifier.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between business credit and personal credit?</h3>
            <p className="text-gray-600">
              Business credit is tied to your EIN and business entity, appears on separate reports, uses different scoring models, and doesn't count against personal credit utilization. It enables financing without personal liability when properly maintained.
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
                  "name": "How long does it take to build business credit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Basic credit in 3-6 months, strong credit in 12-24 months with consistent payment history."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I build business credit with bad personal credit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but start with secured cards and vendor accounts while maintaining perfect payment history."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use my SSN or EIN when applying for business credit?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Always use EIN when possible to build separate business credit tied to your business entity."
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