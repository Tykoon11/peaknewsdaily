import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Scan for High-Probability Stock Setups',
  description: 'Build scans for the best setups: trends, breakouts, pullbacks, and volume/volatility filters—plus a repeatable daily routine you can stick to.',
}

export default function ScanHighProbabilitySetupsPage() {
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
              How to Scan for High-Probability Stock Setups
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build scans for the best setups: trends, breakouts, pullbacks, and volume/volatility filters—plus a repeatable daily routine you can stick to.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Define one setup before scanning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use liquidity & volatility filters to avoid noise</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Keep a watchlist of 20–30 tickers; review daily</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Choose Your Setup */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose your setup</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Breakout trend-follow</h3>
                  <p className="text-blue-700">Price near 52-week high + volume surge.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Pullback in uptrend</h3>
                  <p className="text-green-700">Above 50-MA, pulls to 20-MA with RSI reset.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Mean-reversion</h3>
                  <p className="text-purple-700">Extended from 20-MA snaps back on capitulation volume.</p>
                </div>
              </div>
            </div>

            {/* Core Scan Filters */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Core scan filters</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Avg volume ≥ 1M shares</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Price ≥ $5</strong> (or broker minimum)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>ATR% ≥ 2%</strong> (enough movement)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Relative Volume ≥ 1.5</strong> on the day</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Example Scans */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Example scans</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Breakout</h3>
                  <p className="text-blue-700 text-sm">
                    Price within 2% of 52-week high, RVOL ≥ 2, close &gt; prior high.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pullback</h3>
                  <p className="text-green-700 text-sm">
                    Close above 50-MA, RSI(14) 35–50, bullish candle at 20-MA.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Routine */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily routine (15–25 mins)</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Pre-market</h3>
                  <p className="text-yellow-700">Note gaps, catalysts.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">After close</h3>
                  <p className="text-orange-700">Run scans, tag 5 A-setups.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Plan</h3>
                  <p className="text-green-700">Entry, stop, take-profit; size by risk unit.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Log</h3>
                  <p className="text-blue-700">Reasons + screenshots.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Build Your First Scan</h3>
                <p className="text-green-800">
                  Build one breakout scan and save a watchlist rule to update automatically each day.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Free or paid scanners?</h3>
                  <p className="text-gray-600">Start free; upgrade for alerts/backtests later.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How many watchlist names?</h3>
                  <p className="text-gray-600">10–30 focused is ideal.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/read-candlestick-charts" className="text-green-600 hover:text-green-700 hover:underline">
                  How to read candlestick charts (for beginners)
                </a>
                <a href="/how-to/use-stop-loss-and-take-profit" className="text-green-600 hover:text-green-700 hover:underline">
                  How to use stop-loss and take-profit orders
                </a>
                <a href="/how-to/manage-risk-per-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to manage risk per trade (position sizing)
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