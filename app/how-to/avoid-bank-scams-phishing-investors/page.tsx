import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bank & Broker Scams: How to Spot and Avoid Phishing (2025)',
  description: 'The definitive checklist to avoid phishing, SIM-swap, fake "support," and rogue brokers.',
}

export default function AvoidBankScamsPhishingInvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bank & Broker Scams: How to Spot and Avoid Phishing (2025)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The definitive checklist to avoid phishing, SIM-swap, fake "support," and rogue brokers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fast Tell-Tales</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Urgency tactics:</strong> "Act now or your account will be closed/suspended!"</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Password/OTP requests:</strong> Legitimate services never ask for passwords or 2FA codes.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Spoofed domains:</strong> bankofamerica-security.com instead of bankofamerica.com</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>QR code phishing:</strong> "Scan this to secure your account" leading to fake login pages.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Generic greetings:</strong> "Dear Customer" instead of your actual name.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Scam Types</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">Phishing Emails/Texts</h3>
                  <ul className="text-orange-700 text-sm space-y-2">
                    <li>• "Suspicious activity detected"</li>
                    <li>• "Verify your identity immediately"</li>
                    <li>• "Your account has been compromised"</li>
                    <li>• Links to fake login pages</li>
                    <li>• Attachments with malware</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-3">Fake Support Calls</h3>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li>• "This is [Bank] security department"</li>
                    <li>• Ask for account numbers or SSN</li>
                    <li>• Request remote access to computer</li>
                    <li>• Pressure to act immediately</li>
                    <li>• Can't provide your account details</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Investment Scams</h3>
                  <ul className="text-purple-700 text-sm space-y-2">
                    <li>• Guaranteed high returns</li>
                    <li>• "Secret" trading strategies</li>
                    <li>• Celebrity endorsements (often fake)</li>
                    <li>• Pyramid/Ponzi structures</li>
                    <li>• Unlicensed "brokers"</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">SIM Swap Attacks</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Sudden loss of cell service</li>
                    <li>• Social engineering mobile carriers</li>
                    <li>• Bypass SMS-based 2FA</li>
                    <li>• Access password reset links</li>
                    <li>• Take over financial accounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardening Your Accounts</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Strong Authentication</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• <strong>Hardware keys:</strong> YubiKey, Google Titan for phishing resistance</li>
                    <li>• <strong>Authenticator apps:</strong> Google Authenticator, Authy over SMS</li>
                    <li>• <strong>Passkeys:</strong> Built into iOS/Android/Windows where supported</li>
                    <li>• <strong>Backup codes:</strong> Print and store securely offline</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <a href="https://pages.nist.gov/800-63-3/sp800-63b.html" target="_blank" rel="noopener" className="text-green-600 hover:underline">NIST Authentication Guidelines</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Device Hygiene</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Keep OS and apps updated</p>
                    <p className="text-gray-600 text-sm">Enable automatic updates for security patches.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Use unique passwords with a manager</p>
                    <p className="text-gray-600 text-sm">Different passwords for every financial account.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Secure your mobile carrier account</p>
                    <p className="text-gray-600 text-sm">Add PIN/password, enable port-out protection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Be cautious with public Wi-Fi</p>
                    <p className="text-gray-600 text-sm">Avoid financial transactions on unsecured networks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Phishing Defense Tactics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Email/Text Verification</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Check sender address carefully</li>
                    <li>• Hover over links to see real destination</li>
                    <li>• Look for typos and poor grammar</li>
                    <li>• Verify through official channels</li>
                    <li>• Never click suspicious attachments</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-3">Website Safety</h3>
                  <ul className="text-teal-700 text-sm space-y-2">
                    <li>• Bookmark official login pages</li>
                    <li>• Check for HTTPS and valid certificates</li>
                    <li>• Type URLs manually when in doubt</li>
                    <li>• Look for official contact information</li>
                    <li>• Verify domain names exactly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do If You Clicked</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-900 mb-3">Immediate Actions</h3>
                  <ol className="text-red-700 space-y-2">
                    <li><strong>1.</strong> Don't enter any information on suspicious pages</li>
                    <li><strong>2.</strong> Close the browser/app immediately</li>
                    <li><strong>3.</strong> Change passwords for affected accounts</li>
                    <li><strong>4.</strong> Revoke active sessions (log out all devices)</li>
                    <li><strong>5.</strong> Enable or strengthen 2FA</li>
                  </ol>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">Follow-up Steps</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Monitor account statements closely</li>
                    <li>• Set up account alerts for all transactions</li>
                    <li>• Consider freezing credit reports</li>
                    <li>• Report to your bank/broker immediately</li>
                    <li>• File reports with FBI IC3 or local police</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recognizing Legitimate Communications</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Real Banks/Brokers Will:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Use your actual name (not "Dear Customer")</li>
                      <li>• Reference specific account numbers (partial)</li>
                      <li>• Never ask for passwords or PINs</li>
                      <li>• Give you time to respond (no urgency)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Provide direct phone numbers to call back</li>
                      <li>• Have proper grammar and spelling</li>
                      <li>• Match their usual communication style</li>
                      <li>• Be verifiable through official channels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Protection Strategies</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700"><strong>Dedicated devices:</strong> Use a separate device/browser only for financial activities.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700"><strong>Email aliases:</strong> Use unique email addresses for each financial institution.</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700"><strong>Phone number protection:</strong> Don't use your main number for account recovery.</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700"><strong>Regular audits:</strong> Review account permissions and connected services quarterly.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>Golden Rule:</strong> When in doubt, hang up or close the message. Contact your financial institution directly using official contact methods from their website or your statements.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How can I tell if a call is really from my bank?</h3>
                  <p className="text-gray-600">Hang up and call the official number on your card or statement. Real institutions won't mind this verification.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I already gave out my information?</h3>
                  <p className="text-gray-600">Act immediately: change passwords, contact your bank, monitor accounts, and consider freezing credit.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are investment opportunities on social media legitimate?</h3>
                  <p className="text-gray-600">Extremely rarely. Always verify through official regulatory databases before investing any money.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How do I protect against SIM swapping?</h3>
                  <p className="text-gray-600">Add carrier PIN protection, use app-based 2FA instead of SMS, and monitor your phone service closely.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/set-up-two-factor-authentication" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set up two-factor authentication correctly
                </a>
                <a href="/how-to/verify-broker-regulated" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to verify if a broker is regulated
                </a>
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
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