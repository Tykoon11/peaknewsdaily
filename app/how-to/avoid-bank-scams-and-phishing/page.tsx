import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spot & Avoid Bank Scams: Phishing Protection Guide',
  description: 'Recognize common banking scams, phishing attacks, and social engineering tactics. Learn to protect your accounts and personal information.',
}

export default function AvoidBankScamsAndPhishingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Spot & Avoid Bank Scams: Phishing Protection Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognize common banking scams, phishing attacks, and social engineering tactics. Learn to protect your accounts and personal information.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Bank Scams</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-900 mb-2">Phishing Emails/Texts</h3>
                  <p className="text-red-700 text-sm">Fake "urgent" messages asking you to click links or provide credentials.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <h3 className="font-semibold text-orange-900 mb-2">Fake Tech Support</h3>
                  <p className="text-orange-700 text-sm">Callers claiming to be from your bank asking for passwords/PINs.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-900 mb-2">Check Overpayment</h3>
                  <p className="text-yellow-700 text-sm">Fake checks with requests to return "overpayment" before check bounces.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-900 mb-2">Romance Scams</h3>
                  <p className="text-purple-700 text-sm">Online relationships leading to requests for money transfers.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-900 mb-2">ATM Skimming</h3>
                  <p className="text-blue-700 text-sm">Devices attached to card readers to steal your PIN/card data.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Watch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">!</span>
                  <p className="text-gray-700">Urgency pressure: "Act now or your account will be closed!"</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">!</span>
                  <p className="text-gray-700">Unsolicited contact asking for sensitive information.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">!</span>
                  <p className="text-gray-700">Generic greetings ("Dear Customer" vs your actual name).</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">!</span>
                  <p className="text-gray-700">Poor grammar, spelling errors in official communications.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">!</span>
                  <p className="text-gray-700">Requests to bypass normal bank procedures.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">!</span>
                  <p className="text-gray-700">Links to suspicious URLs (not your bank's official domain).</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection Strategies</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Verify Everything</h3>
                  <p className="text-green-700 text-sm">Call your bank directly using the number on your card/statements.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Use Official Channels</h3>
                  <p className="text-blue-700 text-sm">Log in through bookmarked URLs or official mobile apps only.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Enable Alerts</h3>
                  <p className="text-purple-700 text-sm">Set up transaction notifications for immediate fraud detection.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Monitor Accounts</h3>
                  <p className="text-orange-700 text-sm">Check statements regularly; report suspicious activity immediately.</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-2">Secure Your Info</h3>
                  <p className="text-teal-700 text-sm">Never share PINs, passwords, or SSNs via phone/email.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">If You're Targeted</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Immediate Actions</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Don't click any links or download attachments</li>
                    <li>• Don't provide any personal information</li>
                    <li>• End the call/delete the message</li>
                    <li>• Contact your bank directly</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">If Already Compromised</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Change passwords immediately</li>
                    <li>• Review recent transactions</li>
                    <li>• File fraud reports with bank/police</li>
                    <li>• Monitor credit reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>Remember:</strong> Legitimate banks will never ask for passwords, PINs, or sensitive information via phone/email.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How can I tell if an email is really from my bank?</h3>
                  <p className="text-gray-600">Check the sender domain, look for personalization, and verify by calling directly.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I accidentally clicked a phishing link?</h3>
                  <p className="text-gray-600">Don't enter any information. Close the page, change passwords, and monitor accounts.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are banking apps safer than websites?</h3>
                  <p className="text-gray-600">Generally yes—apps are harder to fake and use additional security layers.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
                <a href="/how-to/setup-hardware-wallet-cold-storage" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to set up a hardware wallet (cold storage)
                </a>
                <a href="/how-to/choose-crypto-exchange-security-checklist" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to choose a crypto exchange (security checklist)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}