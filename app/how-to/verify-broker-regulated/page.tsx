import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Verify a Broker Is Regulated (US & Canada)',
  description: 'Use official registries (FINRA BrokerCheck, SEC IAPD, CIRO, CIPF). Step-by-step with links.',
}

export default function VerifyBrokerRegulatedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Verify a Broker Is Regulated (US & Canada)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use official registries (FINRA BrokerCheck, SEC IAPD, CIRO, CIPF). Step-by-step with links.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Checks</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-4">United States</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-blue-800">FINRA BrokerCheck</p>
                      <p className="text-blue-700 text-sm mb-2">Search brokers and brokerage firms</p>
                      <a href="https://brokercheck.finra.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">brokercheck.finra.org</a>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">SEC IAPD</p>
                      <p className="text-blue-700 text-sm mb-2">Investment adviser lookup</p>
                      <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">adviserinfo.sec.gov</a>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">SIPC Membership</p>
                      <p className="text-blue-700 text-sm mb-2">Asset protection verification</p>
                      <a href="https://sipc.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">sipc.org</a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-4">Canada</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-purple-800">CIRO Membership</p>
                      <p className="text-purple-700 text-sm mb-2">Investment industry regulator</p>
                      <a href="https://ciro.ca" target="_blank" rel="noopener" className="text-purple-600 hover:underline text-sm">ciro.ca</a>
                    </div>
                    <div>
                      <p className="font-medium text-purple-800">CIPF Coverage</p>
                      <p className="text-purple-700 text-sm mb-2">Canadian investor protection</p>
                      <a href="https://cipf.ca" target="_blank" rel="noopener" className="text-purple-600 hover:underline text-sm">cipf.ca</a>
                    </div>
                    <div>
                      <p className="font-medium text-purple-800">Provincial Securities</p>
                      <p className="text-purple-700 text-sm mb-2">Local securities administrators</p>
                      <a href="https://securities-administrators.ca" target="_blank" rel="noopener" className="text-purple-600 hover:underline text-sm">securities-administrators.ca</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Verification</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">For US Brokers</h3>
                  <ol className="text-green-700 space-y-2">
                    <li><strong>1.</strong> Search firm name on FINRA BrokerCheck</li>
                    <li><strong>2.</strong> Review disciplinary history and disclosures</li>
                    <li><strong>3.</strong> Confirm SIPC membership for asset protection</li>
                    <li><strong>4.</strong> If they provide investment advice, check SEC IAPD</li>
                    <li><strong>5.</strong> Verify physical business address</li>
                  </ol>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-3">For Canadian Brokers</h3>
                  <ol className="text-indigo-700 space-y-2">
                    <li><strong>1.</strong> Check CIRO member directory</li>
                    <li><strong>2.</strong> Confirm CIPF coverage status</li>
                    <li><strong>3.</strong> Review any disciplinary actions</li>
                    <li><strong>4.</strong> Check with provincial securities regulator</li>
                    <li><strong>5.</strong> Verify Canadian business registration</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Avoid</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Guaranteed returns:</strong> No legitimate investment can guarantee profits.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>High-pressure tactics:</strong> "Limited time" offers or rushed decisions.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Offshore registration only:</strong> No US/Canadian regulatory oversight.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>No physical address:</strong> Only P.O. boxes or foreign locations.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Wallet-only "brokers":</strong> Ask you to send crypto to personal wallets.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Unsolicited contact:</strong> Cold calls or spam emails offering investment opportunities.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Trails</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-3">US Investment Advisers</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Form ADV Part 1 (business info)</li>
                    <li>• Form ADV Part 2 (services & fees)</li>
                    <li>• Disciplinary history</li>
                    <li>• Assets under management</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <a href="https://investor.gov" target="_blank" rel="noopener" className="text-yellow-600 hover:underline">SEC Investor.gov</a>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-3">What to Review</h3>
                  <ul className="text-teal-700 space-y-2">
                    <li>• Registration status and dates</li>
                    <li>• Disciplinary actions or complaints</li>
                    <li>• Business practices and conflicts</li>
                    <li>• Fee structure transparency</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800">
                <strong>Mini-CTA:</strong> Run BrokerCheck / IAPD / CIRO search before depositing $1. Legitimate brokers welcome regulatory verification.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Verification Steps</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Check business registration</p>
                    <p className="text-gray-600 text-sm">Verify with state/provincial business registries.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Review client agreements</p>
                    <p className="text-gray-600 text-sm">Understand fee structures and dispute resolution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Test customer service</p>
                    <p className="text-gray-600 text-sm">Call with questions before opening an account.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Check online reviews carefully</p>
                    <p className="text-gray-600 text-sm">Focus on regulatory records over testimonials.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if a broker isn't in FINRA BrokerCheck?</h3>
                  <p className="text-gray-600">They may not be registered to sell securities. Check if they're an RIA on SEC IAPD or avoid completely.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Does SIPC protect against trading losses?</h3>
                  <p className="text-gray-600">No—SIPC only protects against broker failure, not investment losses from market risk.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can foreign brokers serve US/Canadian clients?</h3>
                  <p className="text-gray-600">Yes, but they should still register with local regulators or partner with licensed firms.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What about crypto exchanges?</h3>
                  <p className="text-gray-600">Many operate in regulatory gray areas. Check for money services business licenses and regulatory compliance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
                </a>
                <a href="/how-to/file-complaint-against-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to file complaints against a broker
                </a>
                <a href="/how-to/avoid-bank-scams-phishing-investors" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to spot and avoid bank scams & phishing
                </a>
                <a href="/how-to/set-up-two-factor-authentication" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set up two-factor authentication correctly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}