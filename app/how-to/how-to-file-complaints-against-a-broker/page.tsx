import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to File a Complaint Against a Broker (US & Canada)',
  description: 'What to document, where to file (FINRA/SEC/State; CIRO), and what happens next.',
}

export default function FileComplaintsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">File Broker Complaints</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">How to File a Complaint Against a Broker (US & Canada)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          What to document, where to file (FINRA/SEC/State; CIRO), and what happens next.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Before you file</h2>
        
        <p>Write to the firm's compliance department first and keep copies of all communications.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-blue-900 mb-3">Document Everything</h3>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• Account statements showing the problem</li>
            <li>• Trade confirmations and execution reports</li>
            <li>• All correspondence with the broker</li>
            <li>• Phone call logs with dates/times</li>
            <li>• Screenshots of account dashboards</li>
            <li>• Any recordings (if legal in your jurisdiction)</li>
          </ul>
        </div>

        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Contact compliance department</p>
              <p className="text-gray-600 text-sm">Send written complaint via email and certified mail</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Give reasonable time to respond</p>
              <p className="text-gray-600 text-sm">Usually 30 business days for investigation</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Keep detailed records</p>
              <p className="text-gray-600 text-sm">Date of complaint, reference numbers, response received</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <p className="text-yellow-700">
            <strong>Important:</strong> Many issues can be resolved directly with the broker's compliance team. 
            Escalating to regulators should be done when internal resolution fails or involves serious misconduct.
          </p>
          <div className="mt-3 text-xs">
            <a href="https://www.finra.org/investors/need-help/file-a-complaint" target="_blank" rel="noopener" className="text-yellow-600 hover:underline">FINRA: Before You File</a>
          </div>
        </div>

        <h2>Where to file (US)</h2>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">FINRA</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Broker misconduct</li>
              <li>• Unauthorized trading</li>
              <li>• Unsuitable recommendations</li>
              <li>• Churning accounts</li>
              <li>• Failure to execute trades</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://www.finra.org/investors/need-help/file-a-complaint" target="_blank" rel="noopener" className="text-red-600 hover:underline">FINRA Online Complaint Center</a>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">SEC</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Investment adviser issues</li>
              <li>• Securities fraud</li>
              <li>• Ponzi schemes</li>
              <li>• Market manipulation</li>
              <li>• Disclosure violations</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://www.sec.gov/tcr" target="_blank" rel="noopener" className="text-blue-600 hover:underline">SEC Tips, Complaints & Referrals</a>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">State Regulators</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Local investment advisers</li>
              <li>• State-registered securities</li>
              <li>• Regional broker issues</li>
              <li>• Insurance product sales</li>
              <li>• Small claims matters</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://www.nasaa.org/contact-your-regulator/" target="_blank" rel="noopener" className="text-green-600 hover:underline">Find Your State Regulator</a>
            </div>
          </div>
        </div>

        <h2>Where to file (Canada)</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 CIRO Complaint Process</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Online complaint form</p>
              <p className="text-purple-700 text-sm">Complete details about the issue and broker involved</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Email or phone options</p>
              <p className="text-purple-700 text-sm">complaints@ciro.ca or 1-877-442-4322</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Required information</p>
              <p className="text-purple-700 text-sm">Your details, broker firm name, nature of complaint, desired resolution</p>
            </div>
          </div>
          <div className="mt-4 text-xs">
            <a href="https://www.ciro.ca/investors/how-file-complaint" target="_blank" rel="noopener" className="text-purple-600 hover:underline">CIRO: How to File a Complaint</a>
          </div>
        </div>

        <h2>If you seek compensation</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Internal Process</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Ask about the firm's internal dispute resolution</li>
              <li>• Request supervisor or compliance officer review</li>
              <li>• Document all settlement offers and responses</li>
              <li>• Set reasonable deadlines for resolution</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Arbitration/Mediation (US)</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• FINRA Dispute Resolution for eligible claims</li>
              <li>• Binding arbitration for larger disputes</li>
              <li>• Mediation for potentially quick resolution</li>
              <li>• Consider legal representation for significant amounts</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://www.finra.org/arbitration-mediation" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FINRA Dispute Resolution</a>
            </div>
          </div>
        </div>

        <h2>What happens next</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Timeline</th>
                <th className="border border-gray-300 px-3 py-2 text-left">What to Expect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Your Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Days 1-5</td>
                <td className="border border-gray-300 px-3 py-2">Acknowledgment of complaint received</td>
                <td className="border border-gray-300 px-3 py-2">Respond to any requests for clarification</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Days 5-30</td>
                <td className="border border-gray-300 px-3 py-2">Investigation begins, broker contacted</td>
                <td className="border border-gray-300 px-3 py-2">Provide additional documentation if requested</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">30-90 days</td>
                <td className="border border-gray-300 px-3 py-2">Regulator review, possible enforcement</td>
                <td className="border border-gray-300 px-3 py-2">Stay available for follow-up questions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">90+ days</td>
                <td className="border border-gray-300 px-3 py-2">Final determination, possible sanctions</td>
                <td className="border border-gray-300 px-3 py-2">Consider other options if unsatisfied</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">⚠️ Important Limitations</h3>
          <ul className="text-orange-700 space-y-2">
            <li>• <strong>Regulatory complaints don't guarantee compensation</strong></li>
            <li>• <strong>Focus is on misconduct, not investment losses from market risk</strong></li>
            <li>• <strong>Time limits apply—don't wait too long to file</strong></li>
            <li>• <strong>Criminal fraud should also be reported to law enforcement</strong></li>
            <li>• <strong>Consider legal advice for large losses or complex cases</strong></li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will filing a complaint get my money back?</h3>
              <p className="text-gray-700">
                Not automatically. Regulatory complaints focus on broker conduct and potential sanctions. 
                For compensation, you typically need arbitration, litigation, or direct settlement with the firm.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long do I have to file a complaint?</h3>
              <p className="text-gray-700">
                Generally 2-6 years depending on the issue and jurisdiction, but don't wait. 
                File as soon as possible while evidence is fresh and records are available.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I file complaints with multiple agencies?</h3>
              <p className="text-gray-700">
                Yes, different agencies handle different aspects. You might file with FINRA for broker conduct 
                and SEC for securities fraud, or both if the case warrants it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the broker goes out of business during my complaint?</h3>
              <p className="text-gray-700">
                SIPC may cover account assets up to limits, but compensation for misconduct becomes much harder. 
                This is why it's important to act quickly and understand your broker's financial stability.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-verify-if-a-broker-is-regulated" 
              className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <h3 className="font-semibold text-red-900">← Verify Before You Invest</h3>
              <p className="text-sm text-red-700 mt-1">Check regulation to avoid problem brokers</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-choose-a-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Choose a Better Broker →</h3>
              <p className="text-sm text-blue-700 mt-1">Research and compare before switching</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}