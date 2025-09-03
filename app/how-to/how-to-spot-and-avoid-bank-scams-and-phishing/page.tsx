import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bank Scams & Phishing: Spot the Red Flags',
  description: 'Keep your money safe. Learn the signs of phishing, fake bank texts, and investment scams—and what to do next.',
}

export default function SpotAvoidBankScamsPhishingPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Bank Scams Phishing</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            🔒
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to spot and avoid bank scams &amp; phishing</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Keep your money safe. Learn the signs of phishing, fake bank texts, and investment scams—and what to do next.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Common red flags</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">🚩 Urgent "act now" language</h4>
            <div className="text-red-700 text-sm space-y-1">
              <li>• "Account suspended—verify immediately"</li>
              <li>• "Limited time to avoid fees"</li>
              <li>• "Click within 24 hours or lose access"</li>
              <li>• "Suspicious activity detected—act now"</li>
            </div>
            <p className="text-red-600 text-xs mt-2"><strong>Real banks:</strong> Give you time and multiple ways to contact them</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">🚩 Password/security requests</h4>
            <div className="text-red-700 text-sm space-y-1">
              <li>• "Confirm your password to continue"</li>
              <li>• "Verify your PIN for security"</li>
              <li>• "Send us your 2FA code"</li>
              <li>• "Update your security questions"</li>
            </div>
            <p className="text-red-600 text-xs mt-2"><strong>Real banks:</strong> Never ask for passwords/PINs via email/text</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">🚩 Suspicious domains &amp; links</h4>
            <div className="text-red-700 text-sm space-y-1">
              <li>• chasebank.security-check.com</li>
              <li>• wellsfargo-alerts.net</li>
              <li>• bankofamerica-verify.org</li>
              <li>• Shortened links (bit.ly, tinyurl)</li>
            </div>
            <p className="text-red-600 text-xs mt-2"><strong>Real banks:</strong> Use their official domain (chase.com, not chasebank.com)</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">🚩 Attachments &amp; downloads</h4>
            <div className="text-red-700 text-sm space-y-1">
              <li>• "Download this security update"</li>
              <li>• "Open attached statement"</li>
              <li>• "Install our new app from this link"</li>
              <li>• .exe, .zip files from "banks"</li>
            </div>
            <p className="text-red-600 text-xs mt-2"><strong>Real banks:</strong> Don't send executable files or ask you to download security updates</p>
          </div>
        </div>

        <h2>Common scam types</h2>
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibant text-yellow-800 mb-3">Phishing Emails</h4>
            <div className="text-yellow-700 text-sm mb-3">
              <p><strong>Example:</strong> "Dear Customer, We've detected unusual activity on your account. Click here to verify your identity within 24 hours or your account will be suspended."</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">How to spot:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Generic greeting ("Dear Customer")</li>
                <li>• Urgent deadline</li>
                <li>• Suspicious sender email</li>
                <li>• Grammar/spelling errors</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibant text-purple-800 mb-3">SMS/Text Scams</h4>
            <div className="text-purple-700 text-sm mb-3">
              <p><strong>Example:</strong> "CHASE ALERT: Suspicious $500 charge blocked. Reply STOP to cancel or ALLOW to approve. Ref: CH4782"</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">How to spot:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Asks you to reply or click link</li>
                <li>• From non-official number</li>
                <li>• Creates false urgency</li>
                <li>• Asks for account details</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibant text-blue-800 mb-3">Investment Scams</h4>
            <div className="text-blue-700 text-sm mb-3">
              <p><strong>Example:</strong> "Guaranteed 20% returns! Limited spots available. This AI trading bot never loses. Join 10,000+ successful investors!"</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">How to spot:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Guaranteed high returns</li>
                <li>• "Limited time" pressure</li>
                <li>• No mention of risks</li>
                <li>• Celebrity endorsements</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibant text-green-800 mb-3">Tech Support Scams</h4>
            <div className="text-green-700 text-sm mb-3">
              <p><strong>Example:</strong> "This is Microsoft/Apple. Your computer is infected with malware that's accessing your bank accounts. Give us remote access to fix it."</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">How to spot:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Unsolicited calls about computer problems</li>
                <li>• Asks for remote access</li>
                <li>• Claims to be from big tech companies</li>
                <li>• Wants payment in gift cards/crypto</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>What to do if targeted</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-green-800 mb-4">Immediate Actions</h3>
          <ol className="text-green-700 space-y-2">
            <li><strong>Do NOT click any links</strong> in suspicious messages</li>
            <li><strong>Go directly to bank website/app</strong> by typing URL manually</li>
            <li><strong>Call the number on your bank card</strong> (not the number in the message)</li>
            <li><strong>Verify the message</strong> through official channels</li>
            <li><strong>Forward phishing attempts</strong> to your bank's fraud team</li>
            <li><strong>Delete the suspicious message</strong> after reporting</li>
          </ol>
        </div>

        <h2>Protection strategies</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibant text-blue-800 mb-3">Email Security</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Enable 2FA</strong> on all financial accounts</li>
              <li>• <strong>Use strong, unique passwords</strong> for each account</li>
              <li>• <strong>Check sender domains</strong> carefully before clicking</li>
              <li>• <strong>Hover over links</strong> to see actual destination</li>
              <li>• <strong>Be skeptical</strong> of urgent requests</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibant text-purple-800 mb-3">Account Monitoring</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>Set up account alerts</strong> for all transactions</li>
              <li>• <strong>Check statements monthly</strong> for unauthorized charges</li>
              <li>• <strong>Monitor credit reports</strong> for new accounts</li>
              <li>• <strong>Use bank/brokerage apps</strong> for quick balance checks</li>
              <li>• <strong>Report suspicious activity</strong> immediately</li>
            </ul>
          </div>
        </div>

        <h2>If you've been scammed</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-red-800 mb-4">Damage Control Steps</h3>
          <ol className="text-red-700 space-y-3">
            <li>
              <strong>Contact your bank immediately</strong>
              <div className="text-sm mt-1">Report unauthorized transactions within 2 business days for full protection</div>
            </li>
            <li>
              <strong>Change all passwords</strong>
              <div className="text-sm mt-1">Bank accounts, investment accounts, email, any shared passwords</div>
            </li>
            <li>
              <strong>Enable/update 2FA</strong>
              <div className="text-sm mt-1">Use authenticator apps, not SMS when possible</div>
            </li>
            <li>
              <strong>File reports</strong>
              <div className="text-sm mt-1">Local police, FTC (US), Anti-Fraud Centre (Canada), IC3.gov</div>
            </li>
            <li>
              <strong>Monitor all accounts</strong>
              <div className="text-sm mt-1">Daily checks for 30+ days, credit monitoring service</div>
            </li>
            <li>
              <strong>Document everything</strong>
              <div className="text-sm mt-1">Screenshots, reference numbers, dates, contact info</div>
            </li>
          </ol>
        </div>

        <h2>Investment-specific scams</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-yellow-800 mb-4">Watch Out For</h3>
          <ul className="text-yellow-700 space-y-2">
            <li><strong>Pump-and-dump schemes:</strong> "This penny stock will 10x next week!"</li>
            <li><strong>Ponzi schemes:</strong> Guaranteed high returns paid from new investor money</li>
            <li><strong>Fake brokerages:</strong> Professional-looking sites that steal your deposits</li>
            <li><strong>"Insider information":</strong> Claims of non-public info about stocks</li>
            <li><strong>Cryptocurrency scams:</strong> Fake exchanges, mining schemes, celebrity endorsements</li>
            <li><strong>Robo-advisor imposters:</strong> Fake versions of legitimate platforms</li>
          </ul>
          
          <div className="mt-4 p-4 bg-white rounded">
            <p className="text-sm font-medium text-gray-800">Remember:</p>
            <p className="text-sm text-gray-700">If an investment opportunity seems too good to be true, it probably is. Stick to regulated brokerages and established investment products.</p>
          </div>
        </div>

        <h2>Teaching family members</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-blue-800 mb-4">Simple Rules for Everyone</h3>
          <div className="space-y-3 text-blue-700">
            <div>
              <p className="font-medium">📞 "When in doubt, hang up and call back"</p>
              <p className="text-sm">Use the number on your card/statement, not the one they give you</p>
            </div>
            <div>
              <p className="font-medium">🚫 "Banks don't ask for passwords via email/text"</p>
              <p className="text-sm">Never provide sensitive information through these channels</p>
            </div>
            <div>
              <p className="font-medium">⏰ "Urgency is a red flag"</p>
              <p className="text-sm">Legitimate banks give you time to respond to issues</p>
            </div>
            <div>
              <p className="font-medium">🔍 "Verify independently"</p>
              <p className="text-sm">Check claims through official websites or phone calls</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">My bank texted me—is it real or fake?</h3>
              <p className="text-gray-700">Treat as fake until verified. Call the number on your bank card to confirm any requests for action or information.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">I clicked a suspicious link—now what?</h3>
              <p className="text-gray-700">Don't panic. Close the browser, run antivirus scan, change passwords on financial accounts, and contact your bank immediately.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">How can I tell if an investment opportunity is legitimate?</h3>
              <p className="text-gray-700">Check if the company is registered with SEC (US) or provincial securities commission (Canada). Avoid guaranteed returns and high-pressure tactics.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Should I use public Wi-Fi for banking?</h3>
              <p className="text-gray-700">Avoid if possible. If necessary, use your phone's hotspot or a VPN. Never save passwords on public computers.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibant text-green-800 mb-2">Bottom Line</h3>
          <p className="text-green-700">
            Your bank will never ask for passwords, PINs, or 2FA codes via email or text. When in doubt, hang up and call the official number. Prevention is easier than recovery.
          </p>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-invest-for-the-long-term-evidence-based" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibant text-blue-900">← Long-Term Investing</h3>
              <p className="text-sm text-blue-700 mt-1">Evidence-based playbook</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-start-investing-with-100-step-by-step" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibant text-green-900">Start Investing With $100 →</h3>
              <p className="text-sm text-green-700 mt-1">Complete beginner guide</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}