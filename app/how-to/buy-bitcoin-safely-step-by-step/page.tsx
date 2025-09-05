import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Buy Bitcoin Safely: A Step-by-Step Guide',
  description: 'Learn how to buy Bitcoin safely—from choosing a secure exchange to setting up a hardware wallet, making a test buy, and avoiding common scams.',
}

export default function BuyBitcoinSafelyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Buy Bitcoin Safely: A Step-by-Step Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to buy Bitcoin safely—from choosing a secure exchange to setting up a hardware wallet, making a test buy, and avoiding common scams.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-orange-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Start small and always test withdrawals before large purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Use reputable exchanges and enable all security features</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Move Bitcoin to self-custody (hardware wallet) for long-term holding</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                Follow these steps to purchase BTC without exposing yourself to unnecessary risk.
              </p>
            </div>

            {/* Steps */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Decide custody first</h3>
                    <p className="text-gray-600 text-sm">Exchange wallet (temporary) vs self-custody (hardware wallet recommended).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pick a reputable exchange</h3>
                    <p className="text-gray-600 text-sm">Focus on licensing, transparent security practices, uptime, and predictable withdrawals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable security</h3>
                    <p className="text-gray-600 text-sm">Unique email, strong password, app-based 2FA, anti-phishing code, withdrawal address allowlist.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fund account</h3>
                    <p className="text-gray-600 text-sm">Start with a small deposit via bank transfer, debit, or e-transfer; avoid credit if you can't clear the balance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Place a test order</h3>
                    <p className="text-gray-600 text-sm">Buy a small amount of BTC using a limit order to control price slippage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Withdraw immediately (test)</h3>
                    <p className="text-gray-600 text-sm">Send a tiny amount to your wallet to confirm address + network fees.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Move the rest</h3>
                    <p className="text-gray-600 text-sm">After the test clears, withdraw the remaining BTC to self-custody.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">8</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Back up your seed phrase</h3>
                    <p className="text-gray-600 text-sm">Write it on paper or steel; store in separate, safe locations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">9</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Set a review cadence</h3>
                    <p className="text-gray-600 text-sm">Quarterly security check (firmware, backups, passphrase still remembered).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips & Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips & Mistakes to Avoid</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pro Tips</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Verify the full address + chain before every withdrawal</li>
                    <li>• Keep gas/fee funds ready; don't withdraw with a zero fee balance</li>
                    <li>• Treat your email as an asset; secure it with hardware-key 2FA if possible</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Mistakes to Avoid</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Leaving long-term holdings on exchanges</li>
                    <li>• Reusing passwords or 2FA across services</li>
                    <li>• Sharing screenshots of wallets/addresses publicly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is KYC mandatory?</h3>
                  <p className="text-gray-600">Often yes for fiat onramps; P2P has different rules but higher risk.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How much should I start with?</h3>
                  <p className="text-gray-600">Only what you can afford to lose; begin small and scale up.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do I need a hardware wallet?</h3>
                  <p className="text-gray-600">Strongly recommended for holdings you won't trade frequently.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/choose-crypto-exchange-security-checklist" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to choose a crypto exchange (security checklist)
                </a>
                <a href="/how-to/setup-hardware-wallet-cold-storage" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to set up a hardware wallet (cold storage)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
                <a href="/how-to/avoid-bank-scams-and-phishing" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to spot and avoid bank scams & phishing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}