import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Manage Accounts Receivable and Avoid Late Payers',
  description: 'Improve cash flow with credit checks, payment terms, invoicing systems, and collections processes. Reduce bad debt and speed up customer payments.',
}

export default function HowToManageAccountsReceivableAndAvoidLatePayers() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Manage Accounts Receivable</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💰
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Manage Accounts Receivable and Avoid Late Payers
        </h1>
        <p className="text-xl text-gray-600">
          Improve cash flow with credit checks, payment terms, invoicing systems, and collections processes. Reduce bad debt and speed up customer payments.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">💳 Receivables Management Strategy</h3>
          <p className="text-pink-700">
            Screen customers before extending credit, set clear payment terms, send invoices immediately, follow up systematically on overdue accounts, and use automation tools to streamline the entire process.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Poor Receivables Management Kills Cash Flow</h3>
          <p className="mb-4">
            Late payments and bad debt can destroy profitable businesses by creating cash flow crises. Every day money stays unpaid costs you interest, opportunity, and operational flexibility. Professional receivables management systems reduce payment delays, minimize bad debt, and improve cash flow predictability.
          </p>
          <p>
            This guide shows you how to establish credit policies, create efficient invoicing systems, implement collection procedures, and use technology to manage receivables professionally.
          </p>
        </div>

        <h2>Establish Credit Policies and Customer Screening</h2>

        <p>Prevent payment problems by qualifying customers before extending credit terms.</p>

        <h3>Customer Credit Application Process</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Required Information</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Legal business name and DBA</li>
              <li>• Business address and phone</li>
              <li>• Federal tax ID (EIN)</li>
              <li>• Years in business</li>
              <li>• Bank references (2-3 accounts)</li>
              <li>• Trade references (3-5 suppliers)</li>
              <li>• Personal guarantee from owners</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Credit Verification Steps</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Check business credit reports (D&B, Experian)</li>
              <li>• Verify business registration and licenses</li>
              <li>• Contact bank references</li>
              <li>• Call trade references for payment history</li>
              <li>• Review financial statements if available</li>
              <li>• Search for liens and judgments</li>
              <li>• Set appropriate credit limits</li>
            </ul>
          </div>
        </div>

        <h3>Credit Limit Guidelines</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Credit Risk Level</th>
                <th className="px-4 py-3 text-left font-semibold">Credit Score Range</th>
                <th className="px-4 py-3 text-left font-semibold">Payment Terms</th>
                <th className="px-4 py-3 text-left font-semibold">Credit Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-green-600">Low Risk</td>
                <td className="px-4 py-3">80-100 (D&B Paydex)</td>
                <td className="px-4 py-3">Net 30</td>
                <td className="px-4 py-3">10-15% of annual revenue</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-yellow-600">Medium Risk</td>
                <td className="px-4 py-3">70-79 (D&B Paydex)</td>
                <td className="px-4 py-3">Net 15 or COD</td>
                <td className="px-4 py-3">5-10% of annual revenue</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-red-600">High Risk</td>
                <td className="px-4 py-3">Below 70</td>
                <td className="px-4 py-3">COD or prepayment</td>
                <td className="px-4 py-3">Cash only or small limits</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-600">New Customer</td>
                <td className="px-4 py-3">No history</td>
                <td className="px-4 py-3">COD first 3 orders</td>
                <td className="px-4 py-3">Build history gradually</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Optimize Payment Terms and Policies</h2>

        <p>Clear, reasonable payment terms encourage faster payment and reduce disputes.</p>

        <h3>Payment Terms Structure</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Net Payment Terms</h4>
            <p className="text-gray-600 mb-2">Standard payment periods without discounts</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Net 15: Payment due within 15 days</li>
              <li>• Net 30: Payment due within 30 days (most common)</li>
              <li>• Net 45: Extended terms for large customers</li>
              <li>• Due on receipt: Immediate payment required</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-semibold mb-2">Early Payment Discounts</h4>
            <p className="text-gray-600 mb-2">Incentivize faster payment with discounts</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 2/10 Net 30: 2% discount if paid within 10 days</li>
              <li>• 1/15 Net 30: 1% discount if paid within 15 days</li>
              <li>• Calculate if discount cost < financing cost</li>
              <li>• Example: 2% for 20 days early = 36% annual rate</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Late Payment Penalties</h4>
            <p className="text-gray-600 mb-2">Discourage late payment with reasonable fees</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 1.5% monthly service charge (18% annual)</li>
              <li>• Flat late fee: $25-50 for smaller invoices</li>
              <li>• Must comply with state usury laws</li>
              <li>• Clearly stated on invoices and contracts</li>
            </ul>
          </div>
        </div>

        <h2>Professional Invoicing Systems</h2>

        <p>Efficient invoicing accelerates payment and reduces disputes.</p>

        <h3>Invoice Best Practices</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Professional Invoice Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Send invoices immediately upon delivery</li>
            <li>☐ Use consistent invoice numbering system</li>
            <li>☐ Include clear payment terms and due dates</li>
            <li>☐ Provide detailed description of goods/services</li>
            <li>☐ Show quantities, rates, and extended amounts</li>
            <li>☐ Include your business contact information</li>
            <li>☐ Add customer purchase order numbers</li>
            <li>☐ Offer multiple payment methods</li>
            <li>☐ Include remittance address and instructions</li>
            <li>☐ Professional branding and formatting</li>
          </ul>
        </div>

        <h3>Invoice Timing Strategies</h3>

        <ul>
          <li><strong>Immediate invoicing:</strong> Send within 24 hours of delivery/completion</li>
          <li><strong>Progress billing:</strong> Invoice milestones on long-term projects</li>
          <li><strong>Recurring billing:</strong> Automate monthly/quarterly invoices</li>
          <li><strong>End-of-month billing:</strong> Batch invoicing for efficiency</li>
          <li><strong>Electronic delivery:</strong> Email invoices for faster delivery</li>
        </ul>

        <h2>Systematic Collections Process</h2>

        <p>Consistent follow-up procedures minimize overdue accounts and bad debt.</p>

        <h3>Collection Timeline</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Days Past Due</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
                <th className="px-4 py-3 text-left font-semibold">Method</th>
                <th className="px-4 py-3 text-left font-semibold">Tone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">5 days</td>
                <td className="px-4 py-3">Friendly reminder</td>
                <td className="px-4 py-3">Email/automated</td>
                <td className="px-4 py-3">Helpful reminder</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">15 days</td>
                <td className="px-4 py-3">First notice</td>
                <td className="px-4 py-3">Email + phone call</td>
                <td className="px-4 py-3">Professional concern</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">30 days</td>
                <td className="px-4 py-3">Second notice</td>
                <td className="px-4 py-3">Certified letter + call</td>
                <td className="px-4 py-3">Serious follow-up</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">45 days</td>
                <td className="px-4 py-3">Final demand</td>
                <td className="px-4 py-3">Letter + management call</td>
                <td className="px-4 py-3">Urgent payment required</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">60+ days</td>
                <td className="px-4 py-3">Collection agency</td>
                <td className="px-4 py-3">Third-party collections</td>
                <td className="px-4 py-3">Legal action threatened</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Effective Collection Communications</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">First Contact (5-15 days)</h4>
            <p className="text-gray-700">"This is a friendly reminder that invoice #12345 for $1,250 was due on March 15th. Please let us know if there are any questions or if you need a copy of the invoice."</p>
          </div>
          
          <div className="border-l-4 border-yellow-600 pl-6">
            <h4 className="font-semibold text-yellow-800 mb-2">Second Contact (30 days)</h4>
            <p className="text-gray-700">"Invoice #12345 is now 30 days overdue. Please remit payment immediately or contact us to discuss payment arrangements. Continued delays may affect credit terms."</p>
          </div>
          
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold text-red-800 mb-2">Final Demand (45+ days)</h4>
            <p className="text-gray-700">"Final demand for payment of $1,250 on invoice #12345, now 45 days past due. Payment must be received within 10 days to avoid collection action and additional fees."</p>
          </div>
        </div>

        <h2>Technology and Automation Tools</h2>

        <p>Automated systems reduce administrative burden and improve collection efficiency.</p>

        <h3>Accounts Receivable Software</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Accounting Software Integration</h4>
            <ul className="text-green-700 space-y-2">
              <li>• QuickBooks Online/Desktop</li>
              <li>• Xero with invoice automation</li>
              <li>• FreshBooks for service businesses</li>
              <li>• NetSuite for larger businesses</li>
              <li>• Automated aging reports</li>
              <li>• Payment tracking and reminders</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Specialized Collections Tools</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Fundbox (invoice factoring/advances)</li>
              <li>• BlueVine (invoice factoring)</li>
              <li>• Invoiced (AR automation platform)</li>
              <li>• YayPay (AI-powered collections)</li>
              <li>• Automated email sequences</li>
              <li>• Payment portal integration</li>
            </ul>
          </div>
        </div>

        <h3>Payment Processing Options</h3>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-yellow-800 mb-4">Multiple Payment Methods</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Credit/Debit Cards:</strong></p>
              <p className="text-sm text-gray-600">2.9% + 30¢ typical fee, instant processing, higher acceptance rates</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>ACH Bank Transfers:</strong></p>
              <p className="text-sm text-gray-600">0.75% typical fee, 2-3 day processing, lower cost for large amounts</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Online Payment Portals:</strong></p>
              <p className="text-sm text-gray-600">Secure customer self-service, automated reconciliation, payment confirmations</p>
            </div>
          </div>
        </div>

        <h2>Measuring and Monitoring Performance</h2>

        <p>Track key metrics to identify problems and improve collection performance.</p>

        <h3>Key Receivables Metrics</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Formula</th>
                <th className="px-4 py-3 text-left font-semibold">Good Target</th>
                <th className="px-4 py-3 text-left font-semibold">Warning Signs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Days Sales Outstanding</td>
                <td className="px-4 py-3">AR ÷ (Sales ÷ 365)</td>
                <td className="px-4 py-3">30-45 days</td>
                <td className="px-4 py-3 text-red-600">Over 60 days</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Collection Effectiveness</td>
                <td className="px-4 py-3">Collections ÷ (AR + Collections)</td>
                <td className="px-4 py-3">85-95%</td>
                <td className="px-4 py-3 text-red-600">Under 80%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Bad Debt Rate</td>
                <td className="px-4 py-3">Write-offs ÷ Total Sales</td>
                <td className="px-4 py-3">Under 2%</td>
                <td className="px-4 py-3 text-red-600">Over 5%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Aging > 90 Days</td>
                <td className="px-4 py-3">90+ Day AR ÷ Total AR</td>
                <td className="px-4 py-3">Under 10%</td>
                <td className="px-4 py-3 text-red-600">Over 20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-manage-cash-flow-for-seasonal-businesses" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Manage Seasonal Cash Flow</h3>
            <p className="text-pink-600 text-sm mt-2">Receivables management affects cash flow</p>
          </Link>
          <Link href="/how-to/how-to-choose-accounting-software-for-your-business" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Accounting Software</h3>
            <p className="text-pink-600 text-sm mt-2">Software streamlines receivables management</p>
          </Link>
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean separation supports receivables tracking</p>
          </Link>
          <Link href="/how-to/how-to-get-a-business-loan-or-line-of-credit" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Business Loan</h3>
            <p className="text-pink-600 text-sm mt-2">Good receivables help qualify for financing</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">When should I turn accounts over to collections?</h3>
            <p className="text-gray-600">
              Generally after 60-90 days past due and multiple collection attempts. Consider the account size, customer relationship value, and likelihood of payment when deciding timing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I offer early payment discounts?</h3>
            <p className="text-gray-600">
              Yes, if the discount rate is less than your cost of capital. A 2/10 net 30 discount equals about 36% annual rate, which is expensive but may be worth it for cash flow improvement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I charge late fees on overdue invoices?</h3>
            <p className="text-gray-600">
              Yes, if clearly stated in your terms and compliant with state laws. Most states allow 1-1.5% monthly service charges. Include late fee terms on all invoices and contracts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I handle customers who always pay late?</h3>
            <p className="text-gray-600">
              Tighten payment terms (COD, prepayment), require deposits, reduce credit limits, or add service charges. Persistent late payers often indicate cash flow problems or poor payment practices.
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
                  "name": "When should I turn accounts over to collections?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally after 60-90 days past due and multiple collection attempts."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Should I offer early payment discounts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if the discount rate is less than your cost of capital."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I charge late fees on overdue invoices?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Yes, if clearly stated in terms and compliant with state laws."
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