import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Backtest a Trading Strategy Properly',
  description: 'Backtest without fooling yourself: clean data, out-of-sample tests, walk-forward, and realistic costs so live results match the backtest.',
}

export default function BacktestTradingStrategyPage() {
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
              How to Backtest a Trading Strategy Properly
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backtest without fooling yourself: clean data, out-of-sample tests, walk-forward, and realistic costs so live results match the backtest.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Define rules before testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Split in-sample vs out-of-sample; keep a final hold-out</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Model costs & slippage or results will be fantasy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Clean Rules */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Clean rules</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-700">
                  Specify entry, exit, filters, and sizing in writing—no peeking.
                </p>
              </div>
            </div>

            {/* Data Quality */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data quality</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700"><strong>Avoid survivorship bias:</strong> Include delisted names.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700"><strong>Adjust for dividends & splits.</strong></p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700"><strong>Use enough history</strong> to include multiple regimes.</p>
                </div>
              </div>
            </div>

            {/* Validation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Validation</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="space-y-3 text-purple-700">
                  <p><strong>In-sample</strong> to build →</p>
                  <p><strong>Out-of-sample</strong> to validate →</p>
                  <p><strong>Walk-forward</strong> to mimic live adaptation.</p>
                  <p className="mt-3 font-semibold">Keep a small final hold-out you never touch.</p>
                </div>
              </div>
            </div>

            {/* Costs & Slippage */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costs & slippage</h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-orange-700">
                  Add commissions, spread/impact assumptions, and limit vs market order logic.
                </p>
              </div>
            </div>

            {/* Metrics That Matter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Metrics that matter</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Return Metrics</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• CAGR</li>
                    <li>• Max Drawdown</li>
                    <li>• Sharpe/Sortino</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Trade Metrics</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Win rate</li>
                    <li>• Expectancy</li>
                    <li>• Profit Factor</li>
                    <li>• R-multiples distribution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pitfalls */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pitfalls</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Overfitting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Small sample sizes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Re-optimizing until perfect (then failing live)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Proper Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The proper process</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800"><strong>1.</strong> Write strategy rules clearly</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-800"><strong>2.</strong> Prepare clean, bias-free data</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800"><strong>3.</strong> Test on in-sample data</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-800"><strong>4.</strong> Validate on out-of-sample</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-800"><strong>5.</strong> Add realistic costs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                  <p className="text-gray-800"><strong>6.</strong> Final hold-out test</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Test Your Strategy</h3>
                <p className="text-green-800">
                  Write your rules on one page, then run a paper-trade month to compare live vs backtest behavior.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long is enough?</h3>
                  <p className="text-gray-600">Aim for 10+ years if possible for equities.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What is walk-forward?</h3>
                  <p className="text-gray-600">Re-train on a rolling window, validate on the next segment.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/build-a-trading-journal" className="text-green-600 hover:text-green-700 hover:underline">
                  How to build a trading journal that improves results
                </a>
                <a href="/how-to/scan-for-high-probability-setups" className="text-green-600 hover:text-green-700 hover:underline">
                  How to scan for high-probability stock setups
                </a>
                <a href="/how-to/manage-risk-per-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to manage risk per trade (position sizing)
                </a>
                <a href="/how-to/use-stop-loss-and-take-profit" className="text-green-600 hover:text-green-700 hover:underline">
                  How to use stop-loss and take-profit orders
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}