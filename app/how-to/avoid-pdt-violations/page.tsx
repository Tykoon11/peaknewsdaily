import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Avoid Pattern Day Trader (PDT) Violations',
  description: 'Understand FINRA\'s Pattern Day Trader rule and avoid violations using smarter scheduling, cash accounts, and a simple round-trip tracker.',
}

export default function AvoidPDTViolationsPage() {
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
              How to Avoid Pattern Day Trader (PDT) Violations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand FINRA's Pattern Day Trader rule and avoid violations using smarter scheduling, cash accounts, and a simple round-trip tracker.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>4+ day trades in 5 business days with &lt;$25k = PDT</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Track round trips; swing trade to reduce frequency</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Consider a cash account (different settlement rules)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* PDT Basics */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">PDT basics (U.S.)</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-red-700 font-semibold mb-2">The Rule:</p>
                <p className="text-red-600">
                  A "day trade" is opening and closing the same security on the same day. 
                  4+ within a rolling 5-day window can flag PDT if equity &lt; $25k.
                </p>
              </div>
            </div>

            {/* Avoiding Violations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Avoiding violations</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Trade less frequently</h3>
                  <p className="text-blue-700">Move to swing timeframes.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Cash account</h3>
                  <p className="text-green-700">
                    Avoids PDT but respects T+2 settlement for stocks (can only re-use settled funds).
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Journal tracker</h3>
                  <p className="text-purple-700">
                    Log date, ticker, open/close times to monitor the 5-day count.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important notes</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-yellow-700 font-semibold mb-2">ETFs count too for the rule.</p>
                <p className="text-yellow-600 text-sm">
                  Day trading ETFs is subject to the same PDT restrictions as individual stocks.
                </p>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mistakes</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Scaling in/out same day without realizing each is a potential day trade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Forgetting that partial fills can still count toward round trips</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Account Types Comparison */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account types comparison</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Margin Account</h3>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p><strong>Pros:</strong> Instant buying power, can short sell</p>
                    <p><strong>Cons:</strong> Subject to PDT rule if &lt;$25k</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Cash Account</h3>
                  <div className="space-y-2 text-green-700 text-sm">
                    <p><strong>Pros:</strong> No PDT restrictions</p>
                    <p><strong>Cons:</strong> Must wait for settlement (T+2), no shorting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Track Your Day Trades</h3>
                <p className="text-green-800">
                  Add a PDT counter column in your journal that auto-flags when you hit 3 day trades in 5 days.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Does PDT apply outside the U.S.?</h3>
                  <p className="text-gray-600">Varies—check your broker/jurisdiction.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do options change it?</h3>
                  <p className="text-gray-600">Same rule basis; settlement differs—verify with broker.</p>
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
                <a href="/how-to/build-a-trading-journal" className="text-green-600 hover:text-green-700 hover:underline">
                  How to build a trading journal that improves results
                </a>
                <a href="/how-to/trade-etfs-vs-stocks" className="text-green-600 hover:text-green-700 hover:underline">
                  How to trade ETFs vs individual stocks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}