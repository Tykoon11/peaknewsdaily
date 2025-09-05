import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Export Brokerage Statements for Taxes (US & Canada)',  
  description: 'Get 1099/T5008, trades, dividends, and cost basis right—plus a quarterly export routine.',
}

export default function ExportStatementsTaxesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Export Brokerage Statements for Taxes (US & Canada)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get 1099/T5008, trades, dividends, and cost basis right—plus a quarterly export routine.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Download</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">United States</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• <strong>Form 1099 Composite:</strong> All tax forms combined</li>
                    <li>• <strong>1099-B:</strong> Capital gains/losses from sales</li>
                    <li>• <strong>1099-DIV:</strong> Dividend income</li>
                    <li>• <strong>1099-INT:</strong> Interest income</li>
                    <li>• <strong>Monthly statements:</strong> Complete account activity</li>
                    <li>• <strong>Trade confirmations:</strong> Individual transaction details</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Canada</h3>
                  <ul className="text-purple-700 text-sm space-y-2">
                    <li>• <strong>T5008:</strong> Securities transactions statement</li>
                    <li>• <strong>T5:</strong> Investment income slips</li>
                    <li>• <strong>T3:</strong> Trust income distributions</li>
                    <li>• <strong>Monthly statements:</strong> Account summaries</li>
                    <li>• <strong>Trade confirmations:</strong> Transaction records</li>
                    <li>• <strong>Foreign income slips:</strong> US dividend withholding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Reports</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Capital Gains/Losses</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Realized gains/losses report (by tax year)</li>
                    <li>• Short-term vs long-term classification</li>
                    <li>• Wash sale adjustments included</li>
                    <li>• Cost basis method used (FIFO, specific lots, etc.)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-3">Dividend & Interest Income</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Qualified vs non-qualified dividends</li>
                    <li>• Return of capital distributions</li>
                    <li>• Foreign tax credits available</li>
                    <li>• Interest from cash sweeps and CDs</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-3">Cost Basis Details</h3>
                  <ul className="text-teal-700 space-y-2">
                    <li>• Purchase dates and prices by lot</li>
                    <li>• Corporate action adjustments (splits, spinoffs)</li>
                    <li>• Transferred positions from other brokers</li>
                    <li>• Reinvested dividend cost basis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Basis Hygiene</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Verify ACATS transfers</p>
                    <p className="text-gray-600 text-sm">Ensure cost basis transferred correctly from previous brokers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Match corporate actions</p>
                    <p className="text-gray-600 text-sm">Stock splits, mergers, and spinoffs should reflect in cost basis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Reconcile dividend reinvestments</p>
                    <p className="text-gray-600 text-sm">Each DRIP purchase creates a new tax lot with its own basis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Keep personal records</p>
                    <p className="text-gray-600 text-sm">Don't rely solely on broker records—maintain your own spreadsheet.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quarterly Export Routine</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Every Quarter Checklist</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Download Files</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>☐ Monthly statements (PDF + CSV)</li>
                      <li>☐ Trade confirmations</li>
                      <li>☐ Dividend/interest summary</li>
                      <li>☐ Position summary with cost basis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Organization</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>☐ Create folder: "Taxes/[Year]/Q[#]/[Broker]"</li>
                      <li>☐ Upload to secure cloud storage</li>
                      <li>☐ Update personal tracking spreadsheet</li>
                      <li>☐ Note any discrepancies to investigate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">File Formats & Access</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Preferred Formats</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• <strong>CSV/Excel:</strong> For importing to tax software</li>
                    <li>• <strong>PDF:</strong> For official record keeping</li>
                    <li>• <strong>QIF:</strong> For older tax programs (if available)</li>
                    <li>• <strong>TXF:</strong> TurboTax format (some brokers)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Access Tips</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>• Download during business hours for support</li>
                    <li>• Some reports only available after month/year end</li>
                    <li>• Keep login credentials secure and updated</li>
                    <li>• Enable two-factor authentication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Situations</h2>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-700"><strong>Wash Sales:</strong> Ensure your broker calculated wash sale deferrals correctly, especially across accounts.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700"><strong>Options Exercises/Assignments:</strong> Stock positions created by options may have complex cost basis calculations.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700"><strong>International Holdings:</strong> Foreign tax credits and currency conversions need special attention.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700"><strong>Uncovered Securities:</strong> Older positions may not have cost basis reported—you'll need personal records.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Automation Tips</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Set calendar reminders</p>
                    <p className="text-gray-600 text-sm">Quarterly downloads and year-end tax form availability.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Use tax software integration</p>
                    <p className="text-gray-600 text-sm">Many brokers can export directly to TurboTax, H&R Block, etc.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Cloud storage backup</p>
                    <p className="text-gray-600 text-sm">Automatic sync to Google Drive, Dropbox, or OneDrive.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Version control</p>
                    <p className="text-gray-600 text-sm">Name files with dates (YYYY-MM-DD format for easy sorting).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Download statements monthly, not just at tax time. This makes it easier to catch errors early and ensures you don't lose access to historical data.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">When are tax forms available?</h3>
                  <p className="text-gray-600">Usually by January 31st (US) or February 28th (Canada), but complex accounts may receive corrected forms later.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if my cost basis is wrong?</h3>
                  <p className="text-gray-600">Contact your broker immediately. You can also override with correct information on your tax return, but keep documentation.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long should I keep records?</h3>
                  <p className="text-gray-600">At least 7 years after the tax year. Keep cost basis records until you sell all shares of a position.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I get records from old accounts?</h3>
                  <p className="text-gray-600">Contact your old broker. Most keep records for several years, but may charge fees for older data.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/transfer-brokerage-account-acats" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to transfer your brokerage account (ACATS)
                </a>
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
                </a>
                <a href="/how-to/set-up-two-factor-authentication" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set up two-factor authentication correctly
                </a>
                <a href="/how-to/file-complaint-against-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to file complaints against a broker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}