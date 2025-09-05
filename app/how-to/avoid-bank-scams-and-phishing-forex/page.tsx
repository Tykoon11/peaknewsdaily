import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avoid Bank & Broker Phishing: Trader-Focused Guide',
  description: 'Protect your funds with this step-by-step checklist to spot bank, broker, and trading-platform phishing scams.',
}

export default function AvoidBankScamsPhishingForexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              💱 Forex & CFD Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Avoid Bank & Broker Phishing: Trader-Focused Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your funds with this step-by-step checklist to spot bank, broker, and trading-platform phishing scams.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700">"Support" DMs asking for passwords or remote access.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-700">Links that almost match your bank/broker domain.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-700">Pressure to move funds to a "safe" wallet/account.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-700">Impersonation of regulators or auditors.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection Checklist</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="space-y-3 text-green-700">
                  <li>• Bookmark official bank/broker portals; never log in from email links</li>
                  <li>• Enable 2FA (app-based over SMS where possible)</li>
                  <li>• Set withdrawal whitelists and lock them</li>
                  <li>• Verify support via official site ticket or phone number</li>
                  <li>• Never share your MT4/MT5 master password (use investor-read-only)</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">If You Clicked a Bad Link</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <ol className="space-y-2 text-red-700">
                  <li>1. Disconnect device from internet</li>
                  <li>2. Change passwords from a clean device</li>
                  <li>3. Contact bank/broker fraud team immediately</li>
                  <li>4. Freeze cards and monitor statements</li>
                </ol>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are "account verification" emails legit?</h3>
                  <p className="text-gray-600">Only if initiated by you—confirm inside your account portal.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can brokers call me to invest?</h3>
                  <p className="text-gray-600">Reputable firms don't cold-call for investments.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are guaranteed-profit "managed accounts" real?</h3>
                  <p className="text-gray-600">No—guarantees are a hallmark of fraud.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/choose-a-regulated-forex-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a regulated forex broker
                </a>
                <a href="/how-to/start-trading-forex-complete-beginner-guide" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to start trading forex (complete beginner guide)
                </a>
                <a href="/how-to/avoid-over-leveraging-in-fx" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to avoid over-leveraging in FX
                </a>
                <a href="/how-to/size-a-forex-position-properly" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to size a forex position properly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}