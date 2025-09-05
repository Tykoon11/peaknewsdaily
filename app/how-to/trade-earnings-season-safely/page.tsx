import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Trade Earnings Season Safely',
  description: 'Earnings are volatile. Trade them safely with calendars, small size, wide stops, and ETF alternatives to avoid single-name blowups.',
}

export default function TradeEarningsSeasonSafelyPage() {
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
              How to Trade Earnings Season Safely
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earnings are volatile. Trade them safely with calendars, small size, wide stops, and ETF alternatives to avoid single-name blowups.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Gaps defeat tight stops—size down or step aside</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Prefer post-earnings follow-through over holding through prints</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use ETF proxies to trade themes with lower idiosyncratic risk</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Risk Profile */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk profile of earnings</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-red-700">
                  Large gaps, slippage, and spreads widen. Even "beat" results can sell off.
                </p>
              </div>
            </div>

            {/* Safer Playbooks */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safer playbooks</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Sit Out</h3>
                  <p className="text-blue-700">Close positions pre-report; re-enter next day if trend resumes.</p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Small & Wide</h3>
                  <p className="text-yellow-700">Cap to ½ risk unit with wider, structure-based stops.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Theme via ETF</h3>
                  <p className="text-green-700">Use sector/industry ETFs to avoid single-stock landmines.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Post-E Drift</h3>
                  <p className="text-purple-700">Trade breakouts/breakdowns after numbers with defined levels.</p>
                </div>
              </div>
            </div>

            {/* Planning */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Maintain an earnings calendar for holdings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>No new positions 48h before a print unless it's a deliberate event play</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Avoid market orders in the first 5–15 minutes post-print</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Track Your Earnings Trades</h3>
                <p className="text-green-800">
                  Add an "Earnings" column to your journal—tag "pre," "post," or "avoid," then track results.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should beginners hold through earnings?</h3>
                  <p className="text-gray-600">Usually no.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Stops work on gaps?</h3>
                  <p className="text-gray-600">They trigger, but fills can be much worse.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/use-stop-loss-and-take-profit" className="text-green-600 hover:text-green-700 hover:underline">
                  How to use stop-loss and take-profit orders
                </a>
                <a href="/how-to/manage-risk-per-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to manage risk per trade (position sizing)
                </a>
                <a href="/how-to/trade-etfs-vs-stocks" className="text-green-600 hover:text-green-700 hover:underline">
                  How to trade ETFs vs individual stocks
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