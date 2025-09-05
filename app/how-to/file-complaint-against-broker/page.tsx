import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to File a Complaint Against a Broker (US & Canada)',
  description: 'What to document, where to file (FINRA/SEC/State; CIRO), and what happens next.',
}

export default function FileComplaintAgainstBrokerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to File a Complaint Against a Broker (US & Canada)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What to document, where to file (FINRA/SEC/State; CIRO), and what happens next.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You File</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-3">First: Try Direct Resolution</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Contact the firm's compliance department in writing</li>
                  <li>• Clearly explain the issue and desired resolution</li>
                  <li>• Set a reasonable deadline (30 days typical)</li>
                  <li>• Keep copies of all correspondence</li>
                  <li>• Document phone calls with dates, times, and names</li>
                </ul>
                <div className="mt-3 text-xs">
                  <a href="https://finra.org/investors/need-help/file-complaint" target="_blank" rel="noopener" className="text-yellow-600 hover:underline">FINRA: How to File a Complaint</a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Document</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Essential Information</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Account numbers and statements</li>
                    <li>• Trade confirmations showing errors</li>
                    <li>• Dates, times, and amounts involved</li>
                    <li>• Names of people you spoke with</li>
                    <li>• Email chains and written correspondence</li>
                    <li>• Screenshots of platform issues</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Financial Impact</h3>
                  <ul className="text-purple-700 text-sm space-y-2">
                    <li>• Specific losses or damages claimed</li>
                    <li>• Fees charged incorrectly</li>
                    <li>• Missed investment opportunities</li>
                    <li>• Interest or carrying costs incurred</li>
                    <li>• Time spent resolving the issue</li>
                    <li>• Professional costs (lawyer, CPA)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to File (United States)</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">FINRA (Primary for Brokers)</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Who:</strong> Brokerage firms and their registered representatives</li>
                    <li>• <strong>Online:</strong> FINRA Investor Complaint Center</li>
                    <li>• <strong>Process:</strong> Free online form, routed to appropriate department</li>
                    <li>• <strong>Follow-up:</strong> FINRA forwards to firm for response within specific timeframes</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <a href="https://finra.org/investors/need-help/file-complaint" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FINRA Complaint Center</a>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">SEC (Investment Advisers)</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• <strong>Who:</strong> Investment advisory firms and their representatives</li>
                    <li>• <strong>Online:</strong> SEC Tips, Complaints and Referrals Portal</li>
                    <li>• <strong>Process:</strong> Online form or written complaint</li>
                    <li>• <strong>Focus:</strong> Fraud, unsuitable advice, fee disputes</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <a href="https://sec.gov/tcr" target="_blank" rel="noopener" className="text-green-600 hover:underline">SEC Tips & Complaints</a>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">State Regulators</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• <strong>Who:</strong> State-registered advisers, insurance products</li>
                    <li>• <strong>Process:</strong> Varies by state (online forms or mail)</li>
                    <li>• <strong>Advantages:</strong> May have enforcement powers SEC/FINRA lack</li>
                    <li>• <strong>When:</strong> Concurrent filing often recommended</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to File (Canada)</h2>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-3">CIRO (Investment Industry Regulatory Organization)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-indigo-800 mb-2">Filing Options</p>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Online complaint form</li>
                      <li>• Email: complaints@ciro.ca</li>
                      <li>• Phone: 1-877-442-4322</li>
                      <li>• Mail to CIRO offices</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-indigo-800 mb-2">What CIRO Handles</p>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Trading and account issues</li>
                      <li>• Unsuitable investment advice</li>
                      <li>• Unauthorized trading</li>
                      <li>• Fee and commission disputes</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-xs space-y-1">
                  <div><a href="https://ciro.ca/investors/how-file-complaint" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">CIRO Complaint Process</a></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Filing Process</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Gather all documentation</p>
                    <p className="text-gray-600 text-sm">Account statements, correspondence, trade confirmations, screenshots.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Complete online form or write formal complaint</p>
                    <p className="text-gray-600 text-sm">Be specific about dates, amounts, and desired resolution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Submit with supporting documents</p>
                    <p className="text-gray-600 text-sm">Upload files online or mail copies (never originals).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Receive acknowledgment and case number</p>
                    <p className="text-gray-600 text-sm">Keep this for tracking and follow-up communications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <p className="text-gray-700 font-medium">Regulator forwards to firm for response</p>
                    <p className="text-gray-600 text-sm">Firm typically has 30-45 days to provide written response.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <div>
                    <p className="text-gray-700 font-medium">Review firm's response</p>
                    <p className="text-gray-600 text-sm">Determine if resolution is acceptable or if further action needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Possible Outcomes</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>• Firm provides satisfactory resolution</li>
                    <li>• Regulatory investigation launched</li>
                    <li>• Referral to enforcement division</li>
                    <li>• Mediation or arbitration recommended</li>
                    <li>• No action if complaint unfounded</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">Important Limitations</h3>
                  <ul className="text-orange-700 text-sm space-y-2">
                    <li>• Regulators don't directly recover money</li>
                    <li>• They focus on industry-wide issues</li>
                    <li>• Individual disputes may need arbitration</li>
                    <li>• Process can take months to complete</li>
                    <li>• No guarantee of financial compensation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">If You Seek Compensation</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Firm's Internal Process</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Most firms have internal complaint resolution</li>
                    <li>• May offer settlement to resolve dispute</li>
                    <li>• Document any offers in writing</li>
                    <li>• Consider consultation with attorney before accepting</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">FINRA Dispute Resolution (US)</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• <strong>Arbitration:</strong> Binding resolution by neutral panel</li>
                    <li>• <strong>Mediation:</strong> Non-binding facilitated negotiation</li>
                    <li>• <strong>Filing fees:</strong> Based on claim amount ($50-$1,800)</li>
                    <li>• <strong>Time limit:</strong> Generally 6 years from occurrence</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <a href="https://finra.org/arbitration-mediation" target="_blank" rel="noopener" className="text-purple-600 hover:underline">FINRA Dispute Resolution</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Effective Complaints</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700"><strong>Be specific:</strong> Include exact dates, amounts, account numbers, and names.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700"><strong>Stay factual:</strong> Avoid emotional language; stick to verifiable facts.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700"><strong>Organize documents:</strong> Present information chronologically with clear labels.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700"><strong>State desired outcome:</strong> Be clear about what resolution you're seeking.</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700"><strong>Keep records:</strong> Save all correspondence and track deadlines.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <p className="text-orange-800">
                <strong>Time Limits:</strong> Most regulatory complaints should be filed within a reasonable time of the incident. For arbitration, specific statutes of limitations apply (typically 6 years).
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Will filing a complaint hurt my relationship with my broker?</h3>
                  <p className="text-gray-600">Firms are prohibited from retaliating against clients who file complaints. If retaliation occurs, report it immediately.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do I need a lawyer?</h3>
                  <p className="text-gray-600">Not for filing the initial complaint, but consider legal counsel for significant losses or complex arbitration cases.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long does the complaint process take?</h3>
                  <p className="text-gray-600">Initial responses typically within 30-45 days. Full investigation can take several months.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I file complaints with multiple regulators?</h3>
                  <p className="text-gray-600">Yes—filing with FINRA, SEC, and state regulators simultaneously is often recommended.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/verify-broker-regulated" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to verify if a broker is regulated
                </a>
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
                </a>
                <a href="/how-to/transfer-brokerage-account-acats" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to transfer your brokerage account (ACATS)
                </a>
                <a href="/how-to/export-statements-taxes" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to export account statements for taxes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}