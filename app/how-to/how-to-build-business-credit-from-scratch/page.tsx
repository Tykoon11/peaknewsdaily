import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build Business Credit from Scratch: Step-by-Step Guide',
  description: 'Build business credit with EIN, DUNS number, business accounts, and vendor credit. Monitor scores and separate from personal credit for better financing terms.',
}

export default function HowToBuildBusinessCreditFromScratch() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Build Business Credit from Scratch</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            📈
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Build Business Credit from Scratch: Step-by-Step Guide
        </h1>
        <p className="text-xl text-gray-600">
          Build business credit with EIN, DUNS number, business accounts, and vendor credit. Monitor scores and separate from personal credit for better financing terms.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🎯 Business Credit Building Strategy</h3>
          <p className="text-pink-700">
            Start with EIN and business entity, open accounts with your business name, establish vendor credit with net-30 terms, and monitor business credit reports. Keep business and personal credit completely separate from day one.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Business Credit Opens More Financing Doors</h3>
          <p className="mb-4">
            Strong business credit lets you qualify for loans, credit lines, and vendor terms without personal guarantees. It protects your personal credit score, increases borrowing capacity, and signals credibility to partners and customers.
          </p>
          <p>
            This guide walks you through building business credit systematically, from entity formation through establishing trade lines and monitoring your scores across all major business credit bureaus.
          </p>
        </div>

        <h2>Foundation: Business Entity and Identification</h2>

        <p>Business credit requires a legitimate business entity separate from your personal identity.</p>

        <h3>Required Business Documentation</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Essential Identifiers</h4>
            <ul className="text-green-700 space-y-2">
              <li>• EIN (Federal Tax ID) from IRS</li>
              <li>• Business entity formation (LLC, Corp)</li>
              <li>• Business name registration</li>
              <li>• State tax registration</li>
              <li>• Business licenses and permits</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Business Presence</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Physical business address</li>
              <li>• Dedicated business phone line</li>
              <li>• Professional website with contact info</li>
              <li>• Business email address</li>
              <li>• Google Business Profile listing</li>
            </ul>
          </div>
        </div>

        <h3>Get Your DUNS Number</h3>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-pink-800 mb-4">D&B Data Universal Numbering System</h4>
          <p className="text-pink-700 mb-3">
            The DUNS number is a unique 9-digit identifier for businesses created by Dun & Bradstreet. It is free to obtain and required for many business credit applications, government contracts, and vendor relationships.
          </p>
          <div className="space-y-2 text-pink-700">
            <p><strong>How to get it:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Apply online at dnb.com (free process)</li>
              <li>Provide business name, address, phone, EIN</li>
              <li>Verify information is accurate</li>
              <li>Receive DUNS number within 5 business days</li>
            </ul>
          </div>
        </div>

        <h2>Establish Business Banking Relationships</h2>

        <p>Banking relationships are foundational for business credit reporting and demonstrate financial stability.</p>

        <h3>Business Account Setup Strategy</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Account Type</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Credit Building Value</th>
                <th className="px-4 py-3 text-left font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Business Checking</td>
                <td className="px-4 py-3">Primary operations</td>
                <td className="px-4 py-3 text-green-600">High</td>
                <td className="px-4 py-3">Regular deposits, payment history</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Business Savings</td>
                <td className="px-4 py-3">Emergency reserves</td>
                <td className="px-4 py-3 text-yellow-600">Medium</td>
                <td className="px-4 py-3">Shows financial stability</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Business Credit Card</td>
                <td className="px-4 py-3">Expenses and credit history</td>
                <td className="px-4 py-3 text-green-600">Very High</td>
                <td className="px-4 py-3">Reports to business bureaus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Business Line of Credit</td>
                <td className="px-4 py-3">Cash flow management</td>
                <td className="px-4 py-3 text-green-600">Very High</td>
                <td className="px-4 py-3">Revolving credit history</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Banking Relationship Best Practices</h3>

        <ul>
          <li><strong>Maintain positive balances:</strong> Avoid overdrafts and NSF fees completely</li>
          <li><strong>Use business name consistently:</strong> All accounts under registered business name</li>
          <li><strong>Regular activity:</strong> Steady deposits and payments show active business</li>
          <li><strong>Build history before borrowing:</strong> 6-12 months of clean banking history</li>
          <li><strong>Consider multiple banks:</strong> Diversify relationships for better options</li>
        </ul>

        <h2>Start with Secured Business Credit</h2>

        <p>Secured credit cards and accounts help establish initial credit history with minimal risk.</p>

        <h3>Secured Business Credit Options</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Secured Business Credit Cards</h4>
            <p className="text-gray-600 mb-2">Deposit requirement: $500-$25,000, credit limit equals deposit</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Capital One Secured Business Card</li>
              <li>• Wells Fargo Business Secured Credit Card</li>
              <li>• US Bank Business Secured Credit Card</li>
              <li>• Applied Bank Secured Business Card</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Business Credit Builder Loans</h4>
            <p className="text-gray-600 mb-2">Small loans held in CD while you make payments</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Self Credit Builder (business version)</li>
              <li>• Local credit union programs</li>
              <li>• Community bank offerings</li>
              <li>• $500-$5,000 typical amounts</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-semibold text-yellow-800 mb-3">💡 Secured Credit Strategy</h4>
          <ul className="text-yellow-700 space-y-2">
            <li>• Start with 2-3 secured accounts to build diverse credit mix</li>
            <li>• Keep utilization below 10% even on secured cards</li>
            <li>• Pay balances in full every month to establish payment history</li>
            <li>• Graduate to unsecured credit after 6-12 months</li>
            <li>• Verify that secured cards report to business credit bureaus</li>
          </ul>
        </div>

        <h2>Establish Vendor Credit Relationships</h2>

        <p>Trade credit from suppliers builds business credit faster than credit cards alone.</p>

        <h3>Vendor Credit Building Process</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Net-30 Vendors (Report to Credit Bureaus)</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Uline (business supplies)</li>
              <li>• Grainger (industrial supplies)</li>
              <li>• Quill (office supplies)</li>
              <li>• Dell Business (technology)</li>
              <li>• Crown Office Supply</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Starter Vendor Programs</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Amazon Business (business account)</li>
              <li>• Home Depot Pro (contractor account)</li>
              <li>• Staples Business (office supplies)</li>
              <li>• FedEx Business (shipping account)</li>
              <li>• Local suppliers and wholesalers</li>
            </ul>
          </div>
        </div>

        <h3>Trade Credit Application Tips</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Vendor Credit Application</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Apply using business name and EIN (not SSN)</li>
            <li>☐ Provide business references (bank, other vendors)</li>
            <li>☐ Start with small orders to establish trust</li>
            <li>☐ Pay initial invoices early (within 15 days)</li>
            <li>☐ Gradually request credit limit increases</li>
            <li>☐ Confirm vendor reports to credit bureaus</li>
            <li>☐ Maintain perfect payment history</li>
            <li>☐ Use trade references for additional vendor applications</li>
          </ul>
        </div>

        <h2>Monitor Business Credit Reports</h2>

        <p>Regular monitoring helps you track progress and catch errors early.</p>

        <h3>Major Business Credit Bureaus</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Credit Bureau</th>
                <th className="px-4 py-3 text-left font-semibold">Score Range</th>
                <th className="px-4 py-3 text-left font-semibold">Free Report</th>
                <th className="px-4 py-3 text-left font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Dun & Bradstreet</td>
                <td className="px-4 py-3">1-100 (Paydex Score)</td>
                <td className="px-4 py-3 text-green-600">Limited</td>
                <td className="px-4 py-3">Most widely used, supplier reports</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Experian Business</td>
                <td className="px-4 py-3">1-100 (Intelliscore Plus)</td>
                <td className="px-4 py-3 text-yellow-600">Basic only</td>
                <td className="px-4 py-3">Extensive trade data</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Equifax Business</td>
                <td className="px-4 py-3">101-992 (Business Risk Score)</td>
                <td className="px-4 py-3 text-red-600">Paid only</td>
                <td className="px-4 py-3">Banking and credit card focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">FICO SBSS</td>
                <td className="px-4 py-3">0-300 (Small Business Score)</td>
                <td className="px-4 py-3 text-red-600">Paid only</td>
                <td className="px-4 py-3">Lender decision tool</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Credit Monitoring Strategy</h3>

        <ul>
          <li><strong>Quarterly review schedule:</strong> Check all reports every 3 months</li>
          <li><strong>Dispute errors immediately:</strong> Incorrect information hurts scores</li>
          <li><strong>Track payment timing:</strong> Early payments improve Paydex scores</li>
          <li><strong>Monitor credit utilization:</strong> Keep business card balances low</li>
          <li><strong>Verify reporting vendors:</strong> Ensure trade lines appear correctly</li>
        </ul>

        <h2>Advanced Business Credit Strategies</h2>

        <p>Once established, optimize your business credit profile for better financing terms.</p>

        <h3>Credit Mix Optimization</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Revolving Credit (30%)</h4>
            <p className="text-gray-700">Business credit cards, lines of credit. Keep utilization under 30%, preferably under 10%.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Installment Credit (25%)</h4>
            <p className="text-gray-700">Equipment financing, term loans, SBA loans. Shows ability to handle structured payments.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Trade Credit (45%)</h4>
            <p className="text-gray-700">Vendor net-30 accounts, supplier credit lines. Foundation of business credit scoring.</p>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean separation enables business credit</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-banking-and-credit-cards" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Banking</h3>
            <p className="text-pink-600 text-sm mt-2">Banking relationships support credit building</p>
          </Link>
          <Link href="/how-to/how-to-get-a-business-loan-or-line-of-credit" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Business Loan or Line of Credit</h3>
            <p className="text-pink-600 text-sm mt-2">Strong credit improves loan terms</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-entity-llc-corp-sole-prop" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Entity</h3>
            <p className="text-pink-600 text-sm mt-2">Entity formation is credit foundation</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does it take to build business credit?</h3>
            <p className="text-gray-600">
              Basic business credit can be established in 3-6 months with secured cards and vendor accounts. Strong business credit typically takes 12-24 months of consistent payment history and credit diversity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I build business credit with bad personal credit?</h3>
            <p className="text-gray-600">
              Yes, but it is more challenging. Start with secured business accounts, maintain perfect payment history, and avoid personal guarantees when possible. Business credit is separate but personal credit may be considered initially.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need revenue to start building business credit?</h3>
            <p className="text-gray-600">
              Some revenue helps but is not always required initially. Focus on entity formation, banking relationships, and secured credit first. Vendor credit often requires proof of business activity and purchases.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I use my SSN or EIN for business credit applications?</h3>
            <p className="text-gray-600">
              Always use your EIN when possible to build true business credit separate from personal credit. Some initial applications may require SSN for identity verification, but specify EIN as primary identifier.
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
                    "text": "Basic credit in 3-6 months, strong credit in 12-24 months with consistent history."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I build business credit with bad personal credit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but start with secured accounts and maintain perfect payment history."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use my SSN or EIN for business credit applications?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Always use EIN when possible to build separate business credit."
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