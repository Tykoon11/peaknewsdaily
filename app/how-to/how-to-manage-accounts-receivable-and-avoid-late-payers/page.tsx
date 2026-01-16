import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Manage Accounts Receivable and Avoid Late Payers',
  description: 'Improve cash flow with credit checks, payment terms, invoicing systems, and collections processes. Reduce bad debt and speed up customer payments.',
}

export default function HowToManageAccountsReceivableAndAvoidLatePayers() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Manage Accounts Receivable</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center text-white text-xl">
            🚀
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Business & Startup Finance</p>
            <h1 className="text-4xl font-bold text-gray-900">How to manage accounts receivable and avoid late payers</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Improve cash flow with credit checks, payment terms, invoicing systems, and collections processes. Reduce bad debt and speed up customer payments.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-rose-900 mb-4">💳 Receivables Management Strategy</h3>
          <p className="text-rose-700 text-sm">
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

        <h2>Professional Invoicing Systems</h2>
        <p>Efficient invoicing accelerates payment and reduces disputes.</p>

        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-rose-900 mb-4">📋 Professional Invoice Checklist</h3>
          <ul className="text-rose-700 text-sm space-y-2">
            <li>• Send invoices immediately upon delivery</li>
            <li>• Use consistent invoice numbering system</li>
            <li>• Include clear payment terms and due dates</li>
            <li>• Provide detailed description of goods/services</li>
            <li>• Show quantities, rates, and extended amounts</li>
            <li>• Include your business contact information</li>
            <li>• Add customer purchase order numbers</li>
            <li>• Offer multiple payment methods</li>
            <li>• Include remittance address and instructions</li>
            <li>• Professional branding and formatting</li>
          </ul>
        </div>

        <h2>Collection procedures and follow-up</h2>
        
        <p>Systematic collection processes improve payment rates without damaging customer relationships.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Days Overdue</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Action</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Method</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Tone</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">1-10 days</td>
                <td className="border border-gray-300 px-3 py-2">Friendly reminder</td>
                <td className="border border-gray-300 px-3 py-2">Email</td>
                <td className="border border-gray-300 px-3 py-2">Helpful/assuming oversight</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">11-20 days</td>
                <td className="border border-gray-300 px-3 py-2">Second notice</td>
                <td className="border border-gray-300 px-3 py-2">Phone call + email</td>
                <td className="border border-gray-300 px-3 py-2">Professional concern</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">21-30 days</td>
                <td className="border border-gray-300 px-3 py-2">Formal demand</td>
                <td className="border border-gray-300 px-3 py-2">Certified letter</td>
                <td className="border border-gray-300 px-3 py-2">Firm but professional</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">31+ days</td>
                <td className="border border-gray-300 px-3 py-2">Final notice/collection</td>
                <td className="border border-gray-300 px-3 py-2">Legal demand letter</td>
                <td className="border border-gray-300 px-3 py-2">Serious consequences</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Technology and automation</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Automation Benefits</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Automatic invoice generation and delivery</li>
              <li>• Scheduled payment reminders</li>
              <li>• Aging reports and dashboard analytics</li>
              <li>• Integration with accounting systems</li>
              <li>• Online payment processing</li>
              <li>• Customer credit monitoring alerts</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Key Metrics to Track</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Days Sales Outstanding (DSO)</li>
              <li>• Average collection period</li>
              <li>• Aging bucket percentages</li>
              <li>• Bad debt as % of sales</li>
              <li>• Collection effectiveness index</li>
              <li>• Customer payment patterns</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Legal Considerations</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Fair Debt Collection Practices Act:</strong> Governs collection communications and methods</li>
            <li>• <strong>State collection laws:</strong> Additional restrictions may apply in your jurisdiction</li>
            <li>• <strong>Documentation requirements:</strong> Keep detailed records of all collection activities</li>
            <li>• <strong>Professional collection agencies:</strong> Consider outsourcing difficult accounts</li>
          </ul>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-rose-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-rose-700 space-y-2">
            <li>• <strong>Payment incentives:</strong> Offer early payment discounts (2/10 net 30)</li>
            <li>• <strong>Credit insurance:</strong> Consider coverage for large accounts</li>
            <li>• <strong>Factoring services:</strong> Convert receivables to immediate cash if needed</li>
            <li>• <strong>Regular credit reviews:</strong> Monitor customer creditworthiness quarterly</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should I give customers to pay?</h3>
              <p className="text-gray-700">
                Industry standard is Net 30, but consider your cash flow needs and competitive practices. 
                Shorter terms (Net 15) improve cash flow but may hurt competitiveness.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I send accounts to collection?</h3>
              <p className="text-gray-700">
                Generally after 60-90 days of non-payment, but document your collection efforts first. 
                Some collection agencies work accounts as early as 30 days past due.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I charge interest on overdue accounts?</h3>
              <p className="text-gray-700">
                Yes, if disclosed in your credit terms and allowed by state law. Typical rates are 1-2% per month, 
                but check local usury laws for maximum allowed rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I require personal guarantees?</h3>
              <p className="text-gray-700">
                For new customers, large credit limits, or businesses with limited credit history, personal guarantees 
                provide additional security and demonstrate customer commitment to payment.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-write-a-simple-business-budget" 
              className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
            >
              <h3 className="font-semibold text-rose-900">← Write Business Budget</h3>
              <p className="text-sm text-rose-700 mt-1">Plan for receivables in your cash flow</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-choose-accounting-software-for-your-business" 
              className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
            >
              <h3 className="font-semibold text-rose-900">Choose Accounting Software →</h3>
              <p className="text-sm text-rose-700 mt-1">Automate your receivables management</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}