import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Transfer Your Brokerage Account (ACATS): Step-by-Step',
  description: 'A simple ACATS checklist—before, during, after—plus fees, timing, and how to avoid delays.',
}

export default function TransferBrokerageAccountACATSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Transfer Your Brokerage Account (ACATS): Step-by-Step
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple ACATS checklist—before, during, after—plus fees, timing, and how to avoid delays.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Transfer with ACATS (What It Is)</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-700 mb-4">
                  <strong>ACATS (Automated Customer Account Transfer Service)</strong> automates and standardizes moving assets between firms via NSCC/DTCC. Most transfers complete within a few business days.
                </p>
                <div className="text-xs space-y-1">
                  <div><a href="https://dtcc.com/settlement-and-asset-services/equities-clearing-services/acats" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DTCC ACATS Overview</a></div>
                  <div><a href="https://dtcclearning.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DTCC Learning Resources</a></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Transfer Checklist</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Match title/registration exactly</p>
                    <p className="text-gray-600 text-sm">Account names and Social Security Numbers must match perfectly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Settle all open trades</p>
                    <p className="text-gray-600 text-sm">Wait for T+2 settlement on recent purchases before initiating transfer.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Close options near expiry</p>
                    <p className="text-gray-600 text-sm">Options expiring soon may not transfer cleanly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Note non-transferable assets</p>
                    <p className="text-gray-600 text-sm">Some mutual funds, CDs, or proprietary products may not transfer.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <p className="text-gray-700 font-medium">Download statements and tax documents</p>
                    <p className="text-gray-600 text-sm">Keep records before losing access to your old account.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Initiate the Transfer</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">The Process</h3>
                <ol className="text-green-700 space-y-2">
                  <li><strong>1.</strong> Open your new receiving account first</li>
                  <li><strong>2.</strong> Submit transfer form at the receiving broker</li>
                  <li><strong>3.</strong> Receiving firm triggers the ACATS request</li>
                  <li><strong>4.</strong> Delivering firm validates and processes</li>
                  <li><strong>5.</strong> Assets move via DTCC systems</li>
                </ol>
                <div className="mt-4 text-xs">
                  <a href="https://dtcc.com" target="_blank" rel="noopener" className="text-green-600 hover:underline">DTCC Transfer Systems</a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees & Timing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Typical Fees</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Outgoing transfer: $50-$125</li>
                    <li>• Partial transfer: Often higher fees</li>
                    <li>• Full transfer: May be reimbursed by new broker</li>
                    <li>• Check with both firms for exact costs</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Timeline</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Standard: 3-6 business days</li>
                    <li>• Complex accounts: Up to 2 weeks</li>
                    <li>• Delays from: margin debit, unsettled funds</li>
                    <li>• International holdings may take longer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can Delay Your Transfer</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Margin debit balances:</strong> Must be cleared before transfer.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-700"><strong>Unsettled funds:</strong> Recent deposits or trade proceeds not yet settled.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-700"><strong>Registration mismatches:</strong> Names, addresses, or SSNs don't match exactly.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-700"><strong>Pending corporate actions:</strong> Stock splits, dividends, or mergers in process.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">After the Move</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Re-enroll dividend reinvestment plans (DRIPs)</p>
                    <p className="text-gray-600 text-sm">DRIP elections typically don't transfer automatically.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Update options trading permissions</p>
                    <p className="text-gray-600 text-sm">May need to reapply for complex options strategies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Subscribe to market data feeds</p>
                    <p className="text-gray-600 text-sm">Real-time quotes and Level 2 data subscriptions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Link bank accounts</p>
                    <p className="text-gray-600 text-sm">Set up ACH transfers and wire instructions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <p className="text-gray-700 font-medium">Verify cost basis information</p>
                    <p className="text-gray-600 text-sm">Ensure all tax lot information transferred correctly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Account moves use ACATS via DTCC/NSCC. The receiving broker handles the paperwork, but you should monitor progress and follow up if delays occur.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long does an ACATS transfer take?</h3>
                  <p className="text-gray-600">Most complete in 3-6 business days once initiated, barring issues like unsettled trades or registration mismatches.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Will cost basis transfer?</h3>
                  <p className="text-gray-600">Yes for covered securities in the US, but verify after arrival and keep your own records as backup.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I trade during the transfer?</h3>
                  <p className="text-gray-600">Your old account will be frozen during transfer. Plan accordingly or maintain separate funds for trading.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if my transfer gets rejected?</h3>
                  <p className="text-gray-600">Common reasons include margin debits, name mismatches, or pending corporate actions. Fix the issue and resubmit.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
                </a>
                <a href="/how-to/export-statements-taxes" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to export account statements for taxes
                </a>
                <a href="/how-to/file-complaint-against-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to file complaints against a broker
                </a>
                <a href="/how-to/lower-trading-fees" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to lower trading commissions and fees
                </a>
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
                      "name": "How long does an ACATS transfer take?",
                      "acceptedAnswer": {"@type":"Answer","text":"Most complete in a few business days once initiated, barring issues like unsettled trades or registration mismatches."}
                    },
                    {
                      "@type": "Question",
                      "name": "Will cost basis transfer?",
                      "acceptedAnswer": {"@type":"Answer","text":"Yes for covered securities in the US, but verify after arrival and keep your own records."}
                    }
                  ]
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}