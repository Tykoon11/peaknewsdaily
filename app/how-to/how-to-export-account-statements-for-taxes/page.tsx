import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Export Brokerage Statements for Taxes (US & Canada)',
  description: 'Get 1099/T5008, trades, dividends, and cost basis right—plus a quarterly export routine.',
}

export default function ExportStatementsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Export Account Statements</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">Export Brokerage Statements for Taxes (US & Canada)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Get 1099/T5008, trades, dividends, and cost basis right—plus a quarterly export routine.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What to download</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Form 1099 Composite:</strong> All investment income</li>
              <li>• <strong>1099-B:</strong> Proceeds from broker transactions</li>
              <li>• <strong>1099-DIV:</strong> Dividends and distributions</li>
              <li>• <strong>1099-INT:</strong> Interest income</li>
              <li>• <strong>Realized gains/losses:</strong> Detailed trade summaries</li>
              <li>• <strong>Monthly statements:</strong> All account activity</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>T5008:</strong> Securities transactions</li>
              <li>• <strong>T5:</strong> Investment income slips</li>
              <li>• <strong>T3:</strong> Investment income from trusts</li>
              <li>• <strong>Trade confirmations:</strong> Individual transaction details</li>
              <li>• <strong>Annual statements:</strong> Year-end summaries</li>
              <li>• <strong>Adjusted cost base:</strong> For capital gains calculations</li>
            </ul>
          </div>
        </div>

        <h2>Cost basis hygiene</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Match ACATS transfers</p>
              <p className="text-gray-600 text-sm">Ensure transferred positions show correct acquisition dates and costs.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Reconcile corporate actions</p>
              <p className="text-gray-600 text-sm">Stock splits, mergers, and spin-offs can affect cost basis calculations.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Verify dividend reinvestments</p>
              <p className="text-gray-600 text-sm">DRIP transactions create new tax lots that must be tracked.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Keep your own records</p>
              <p className="text-gray-600 text-sm">Brokers may not have complete historical data, especially for older accounts.</p>
            </div>
          </div>
        </div>

        <h2>Automation</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">Quarterly Export Routine</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Set calendar reminders</p>
              <p className="text-green-700 text-sm">Last week of March, June, September, December</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Download everything</p>
              <p className="text-green-700 text-sm">Monthly statements, trade confirmations, tax documents</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Cloud backup</p>
              <p className="text-green-700 text-sm">Upload to secure cloud storage (Google Drive, Dropbox, OneDrive)</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Organize by year</p>
              <p className="text-green-700 text-sm">Create folders: "2024 Taxes", "2023 Taxes", etc.</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Document Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">When Available</th>
                <th className="border border-gray-300 px-3 py-2 text-left">File Format</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Monthly Statements</td>
                <td className="border border-gray-300 px-3 py-2">Month-end + 5 business days</td>
                <td className="border border-gray-300 px-3 py-2">PDF</td>
                <td className="border border-gray-300 px-3 py-2">7 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Tax Forms (US)</td>
                <td className="border border-gray-300 px-3 py-2">January 31</td>
                <td className="border border-gray-300 px-3 py-2">PDF</td>
                <td className="border border-gray-300 px-3 py-2">7 years</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Tax Slips (Canada)</td>
                <td className="border border-gray-300 px-3 py-2">February 28</td>
                <td className="border border-gray-300 px-3 py-2">PDF</td>
                <td className="border border-gray-300 px-3 py-2">6 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Trade Confirmations</td>
                <td className="border border-gray-300 px-3 py-2">Same day or T+1</td>
                <td className="border border-gray-300 px-3 py-2">PDF, CSV</td>
                <td className="border border-gray-300 px-3 py-2">7 years</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Realized G/L Reports</td>
                <td className="border border-gray-300 px-3 py-2">Available anytime</td>
                <td className="border border-gray-300 px-3 py-2">PDF, Excel</td>
                <td className="border border-gray-300 px-3 py-2">7 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Before Account Transfers</h3>
          <p className="text-yellow-700 mb-2">
            Download all historical statements and tax documents BEFORE transferring your account. 
            You may lose access to historical data from your old broker.
          </p>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Last 7 years of statements</li>
            <li>• All tax forms from previous years</li>
            <li>• Complete trade history with cost basis</li>
            <li>• Corporate action notifications</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Export in multiple formats when available. PDFs for official records, Excel/CSV for analysis. 
            Some tax software can import CSV files directly, saving manual entry time.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should I keep brokerage statements?</h3>
              <p className="text-gray-700">
                US: 7 years for tax purposes. Canada: 6 years. Keep indefinitely for positions you still hold 
                to maintain accurate cost basis records.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my broker doesn't provide cost basis information?</h3>
              <p className="text-gray-700">
                You're responsible for tracking it yourself. Use trade confirmations and account statements to 
                reconstruct purchase dates, prices, and any adjustments from corporate actions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I just rely on my broker's tax forms?</h3>
              <p className="text-gray-700">
                Usually yes, but verify the information. Brokers may not have complete records for transferred 
                positions or older accounts. Cross-check against your own records when possible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about cryptocurrency transactions?</h3>
              <p className="text-gray-700">
                Most traditional brokers don't handle crypto. If you trade crypto through other platforms, 
                you'll need separate records. Each transaction is a taxable event in most jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-transfer-your-brokerage-account-acat-guide" 
              className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <h3 className="font-semibold text-orange-900">← Export Before Transferring</h3>
              <p className="text-sm text-orange-700 mt-1">Get all documents before you switch brokers</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-choose-a-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Choose a Broker →</h3>
              <p className="text-sm text-blue-700 mt-1">Consider tax reporting features</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}