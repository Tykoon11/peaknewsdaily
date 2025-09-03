import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get a Secured Credit Card & Upgrade Later',
  description: 'Open a secured card the right way and graduate to unsecured—limits, deposits, timelines, and fees explained.',
}

export default function GetSecuredCreditCardUpgradePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Get Secured Credit Card</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to get a secured credit card and upgrade later</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Open a secured card the right way and graduate to unsecured—limits, deposits, timelines, and fees explained.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Choosing a card</h2>
          <ul className="text-blue-700 space-y-1">
            <li>Low annual fee, reports to all bureaus, reasonable deposit range.</li>
            <li><strong>Upgrade path:</strong> Issuer explicitly supports graduating to unsecured and refunding the deposit.</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Usage plan</h3>
          <ul className="text-green-700 space-y-1">
            <li>Deposit only what you need, keep utilization &lt;10–30%, pay in full monthly.</li>
            <li>After 6–12 months of perfect payments, request an upgrade or limit increase.</li>
          </ul>
        </div>

        <h2>Pro tip</h2>
        <p>If your bank offers prequalification (soft pull), check that before applying.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I deposit?</h3>
              <p className="text-gray-700">Start with $200-500. You can often add to it later to increase your limit.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When can I upgrade to unsecured?</h3>
              <p className="text-gray-700">Typically 6-12 months with perfect payment history and improved credit score.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I get my deposit back?</h3>
              <p className="text-gray-700">Yes, when you upgrade to unsecured or close the account in good standing.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-build-credit-from-scratch-fastest-methods" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Build Credit from Scratch</h3>
              <p className="text-sm text-blue-700 mt-1">Complete credit building plan</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-freeze-your-credit-to-prevent-fraud" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Freeze Credit →</h3>
              <p className="text-sm text-green-700 mt-1">Stop fraud fast</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}