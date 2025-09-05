import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Read Candlestick Charts (For Beginners)',
  description: 'Learn candlesticks fast: anatomy, timeframes, six patterns that matter, and how to avoid overfitting. Practical rules with risk-first examples.',
}

export default function ReadCandlestickChartsPage() {
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
              How to Read Candlestick Charts (For Beginners)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn candlesticks fast: anatomy, timeframes, six patterns that matter, and how to avoid overfitting. Practical rules with risk-first examples.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Start with daily or 4-hour charts to reduce noise</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Patterns work best in context (trend + support/resistance + volume)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Candles guide entries, but risk management decides outcome</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Anatomy 101 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Anatomy 101</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-700 font-semibold mb-2">Open–High–Low–Close (OHLC)</p>
                <p className="text-blue-600">Body shows control; wicks show rejection.</p>
              </div>
            </div>

            {/* Timeframes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeframes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">1–5m</h3>
                  <p className="text-red-700 text-sm">Noisy, scalper-level</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Hourly/4H</h3>
                  <p className="text-yellow-700 text-sm">Swing trade sweet spot</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Daily/Weekly</h3>
                  <p className="text-green-700 text-sm">Cleanest signals, slower pace</p>
                </div>
              </div>
            </div>

            {/* Six Helpful Patterns */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Six helpful beginner patterns</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Bullish/Bearish Engulfing</h3>
                  <p className="text-gray-600">Reversal confirmation at levels</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Hammer / Shooting Star</h3>
                  <p className="text-gray-600">Wick rejections</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Doji</h3>
                  <p className="text-gray-600">Indecision; wait for follow-through</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Inside Bar</h3>
                  <p className="text-gray-600">Compression → breakout</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Morning/Evening Star</h3>
                  <p className="text-gray-600">Multi-candle reversal at key zones</p>
                </div>
              </div>
            </div>

            {/* Context Beats Patterns */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Context beats patterns</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-700">
                  <strong>Overlay:</strong> trend (20/50 MA), key levels, and volume. Only act when pattern aligns with higher-timeframe bias.
                </p>
              </div>
            </div>

            {/* Practice Plan */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice plan</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-700">
                  Pick one setup (e.g., inside-bar breakout), back-view 100 charts, then demo trade 20 instances.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Start Practicing</h3>
                <p className="text-green-800">
                  Add a 20/50 MA and mark 10 inside bars this month—trade only those with volume confirmation.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Best timeframe for beginners?</h3>
                  <p className="text-gray-600">Daily/4H.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do patterns work on ETFs?</h3>
                  <p className="text-gray-600">Yes—liquidity helps execution.</p>
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
                <a href="/how-to/scan-for-high-probability-setups" className="text-green-600 hover:text-green-700 hover:underline">
                  How to scan for high-probability stock setups
                </a>
                <a href="/how-to/use-stop-loss-and-take-profit" className="text-green-600 hover:text-green-700 hover:underline">
                  How to use stop-loss and take-profit orders
                </a>
                <a href="/how-to/backtest-trading-strategy" className="text-green-600 hover:text-green-700 hover:underline">
                  How to backtest a trading strategy properly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}