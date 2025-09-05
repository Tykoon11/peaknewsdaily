import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Stop-Loss and Take-Profit Orders',
  description: 'Master stop-loss and take-profit orders. Learn where to place them, how to size risk, and the bracket setups that protect capital and lock profits.',
}

export default function UseStopLossTakeProfitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              📊 Stock & ETF Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Use Stop-Loss and Take-Profit Orders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master stop-loss and take-profit orders. Learn where to place them, how to size risk, and the bracket setups that protect capital and lock profits.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use a predefined risk amount per trade (e.g., 1% of account)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Place stops where your trade thesis is invalidated, not at round numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Bracket orders automate stop-loss + take-profit and remove emotion</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Why SL/TP Matter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why SL/TP matter</h2>
              <p className="text-gray-600 leading-relaxed">
                Stops cap downside; take-profits systematize exits so wins don't evaporate. Together, they turn a good entry into a complete plan.
              </p>
            </div>

            {/* Stop Placement Frameworks */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to place your stop (3 frameworks)</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">%-Risk</h3>
                  <p className="text-blue-700 mb-2">Beginner-friendly.</p>
                  <p className="text-blue-600 text-sm">
                    <strong>Example:</strong> Risk $100; if entry is $50 and stop is $48, you can buy 50 shares.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Volatility (ATR)</h3>
                  <p className="text-green-700">
                    Stop at 1.5–2× ATR from entry to allow normal noise.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Structure</h3>
                  <p className="text-purple-700">
                    Place below support/swing low (longs) or above resistance/swing high (shorts).
                  </p>
                </div>
              </div>
            </div>

            {/* Take-Profit Methods */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Take-profit methods</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">Fixed R-multiple:</span>
                  <span>Target at 2R if risking 1R.</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">Prior structure:</span>
                  <span>Exit near previous highs/lows.</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">Trailing:</span>
                  <span>Trail by ATR or moving average when trend accelerates.</span>
                </div>
              </div>
            </div>

            {/* Bracket Orders */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bracket orders (set-and-forget)</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-700">
                  Enter with a linked stop-loss and take-profit. If one fills, the other cancels automatically (OCO).
                </p>
              </div>
            </div>

            {/* Mistakes to Avoid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mistakes to avoid</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Stops too tight for the timeframe's volatility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Moving stops away to "avoid being wrong"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Skipping stops on earnings or illiquid names</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step-by-Step */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-step (generic broker)</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="font-semibold text-gray-900 mr-2">1.</span>
                    <span>Choose order type (often limit)</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold text-gray-900 mr-2">2.</span>
                    <span>Set entry price</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold text-gray-900 mr-2">3.</span>
                    <span>Add stop-loss (price & quantity)</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold text-gray-900 mr-2">4.</span>
                    <span>Add take-profit (price & quantity)</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold text-gray-900 mr-2">5.</span>
                    <span>Review risk $, submit</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Ready to Practice?</h3>
                <p className="text-green-800">
                  Add a 2R/1R bracket template in your broker and use it on your next demo trade.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do stops guarantee price?</h3>
                  <p className="text-gray-600">No—gaps can fill worse than your stop level.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Trailing or fixed?</h3>
                  <p className="text-gray-600">Trail in trends; fixed in range conditions.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/place-your-first-stock-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to place your first stock trade
                </a>
                <a href="/how-to/manage-risk-per-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to manage risk per trade (position sizing)
                </a>
                <a href="/how-to/trade-earnings-season-safely" className="text-green-600 hover:text-green-700 hover:underline">
                  How to trade earnings season safely
                </a>
                <a href="/how-to/build-a-trading-journal" className="text-green-600 hover:text-green-700 hover:underline">
                  How to build a trading journal that improves results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}