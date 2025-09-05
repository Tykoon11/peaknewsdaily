import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Currency Pairs & Pips Explained (With Easy Examples)',
  description: 'Learn base vs quote, majors vs crosses, and how to calculate pip value step by step so you never misread an FX chart again.',
}

export default function ReadCurrencyPairsPipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              💱 Forex & CFD Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Currency Pairs & Pips Explained (With Easy Examples)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn base vs quote, majors vs crosses, and how to calculate pip value step by step so you never misread an FX chart again.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-indigo-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Most pairs: 1 pip = 0.0001, JPY pairs: 1 pip = 0.01</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Stick to tight-spread majors when starting out</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Platforms show pip values automatically, but understanding helps</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Pair Types */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pair Types</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Majors</h3>
                  <p className="text-blue-700">EUR/USD, GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD, NZD/USD.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Crosses</h3>
                  <p className="text-green-700">Pairs without USD (e.g., EUR/GBP).</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">Exotics</h3>
                  <p className="text-orange-700">Major + emerging currency (wider spreads).</p>
                </div>
              </div>
            </div>

            {/* Price Format & Pips */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Price Format & Pips</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Most pairs: 1 pip = 0.0001</p>
                    <p className="font-semibold text-gray-900 mb-2">JPY pairs: 1 pip = 0.01</p>
                  </div>
                  
                  <div className="bg-blue-100 p-4 rounded border-l-4 border-blue-400">
                    <p className="font-semibold text-blue-900 mb-2">Example:</p>
                    <p className="text-blue-800">EUR/USD from 1.1050 to 1.1063 = 13 pips</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pip Value Calculation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pip Value (Quick Method, USD Account)</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">For USD-quoted pairs (e.g., EUR/USD):</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold">Micro lot (0.01)</p>
                      <p className="text-green-700">≈ $0.10/pip</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold">Mini (0.10)</p>
                      <p className="text-green-700">≈ $1/pip</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold">Standard (1.00)</p>
                      <p className="text-green-700">≈ $10/pip</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">For non-USD quote:</h3>
                  <p className="text-purple-700">Convert pip value to your account currency at current rate (platforms show this automatically).</p>
                </div>
              </div>
            </div>

            {/* Base vs Quote Currency */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Base vs Quote Currency</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <div className="text-blue-800">
                  <p className="font-semibold mb-2">Example: EUR/USD 1.1050</p>
                  <p><strong>EUR</strong> = Base currency (what you're buying/selling)</p>
                  <p><strong>USD</strong> = Quote currency (what you're paying with)</p>
                  <p className="mt-2 text-sm">This means 1 Euro costs 1.1050 US Dollars</p>
                </div>
              </div>
            </div>

            {/* Pro Tips & Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips & Common Mistakes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pro Tips</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Stick to tight-spread pairs early</li>
                    <li>• Check tick size/precision in your platform</li>
                    <li>• Most platforms auto-calculate pip values</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Common Mistakes</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Confusing pip and point</li>
                    <li>• Forgetting JPY pip is 0.01</li>
                    <li>• Not checking spread differences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What's a fractional pip (pipette)?</h3>
                  <p className="text-gray-600">One-tenth of a pip (5th decimal place or 3rd on JPY).</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Why do spreads change?</h3>
                  <p className="text-gray-600">Liquidity varies by session/news.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are crosses more expensive to trade?</h3>
                  <p className="text-gray-600">Often yes—wider spreads.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/start-trading-forex-complete-beginner-guide" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to start trading forex (complete beginner guide)
                </a>
                <a href="/how-to/size-a-forex-position-properly" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to size a forex position properly
                </a>
                <a href="/how-to/choose-a-regulated-forex-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a regulated forex broker
                </a>
                <a href="/how-to/set-realistic-profit-targets-in-forex" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set realistic profit targets in forex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}