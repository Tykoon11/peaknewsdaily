import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Build a Trading Journal That Improves Results',
  description: 'Turn your journal into an edge: log setups, emotions, risk, outcomes, and weekly reviews that reveal what actually makes you money.',
}

export default function BuildTradingJournalPage() {
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
              How to Build a Trading Journal That Improves Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your journal into an edge: log setups, emotions, risk, outcomes, and weekly reviews that reveal what actually makes you money.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Log setup, thesis, risk, execution, emotions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Tag by setup, market regime, mistake types</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Do a 30–60 min weekly review with KPIs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* What to Record */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to record</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Before</h3>
                  <p className="text-blue-700">Setup, entry plan, stop, target, risk $.</p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">During</h3>
                  <p className="text-yellow-700">Emotions, deviations from plan.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">After</h3>
                  <p className="text-green-700">Result in R, screenshot, lesson learned.</p>
                </div>
              </div>
            </div>

            {/* Tagging System */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tagging</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-700 mb-3">
                  Use tags like <span className="font-semibold">breakout, pullback, trend, range, news, FOMO, late, size error</span>.
                </p>
                <p className="text-purple-600 text-sm">
                  Over time, surface win rate and expectancy by tag.
                </p>
              </div>
            </div>

            {/* Weekly Review Ritual */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Weekly review ritual</h2>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Top 5 wins/losses</h3>
                  <p className="text-orange-700 text-sm">One line each.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Biggest mistake & one fix</h3>
                  <p className="text-red-700 text-sm">For next week.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">KPI dashboard</h3>
                  <p className="text-green-700 text-sm">Win rate, avg R, expectancy, drawdown.</p>
                </div>
              </div>
            </div>

            {/* Essential Metrics to Track */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential metrics to track</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">Win Rate</p>
                    <p className="text-gray-600 text-sm">% of profitable trades</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">Average R</p>
                    <p className="text-gray-600 text-sm">Risk-adjusted returns</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">Expectancy</p>
                    <p className="text-gray-600 text-sm">Expected value per trade</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">Max Drawdown</p>
                    <p className="text-gray-600 text-sm">Largest losing streak</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Spreadsheet, Notion, or dedicated journal app; export broker fills and attach screenshots.
                </p>
              </div>
            </div>

            {/* Sample Journal Entry */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample journal entry</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <div className="text-blue-800 text-sm">
                  <p><strong>Date:</strong> 2024-01-15</p>
                  <p><strong>Ticker:</strong> AAPL</p>
                  <p><strong>Setup:</strong> Pullback to 20-MA in uptrend</p>
                  <p><strong>Entry:</strong> $185.50 | <strong>Stop:</strong> $182.00 | <strong>Target:</strong> $192.00</p>
                  <p><strong>Risk:</strong> $100 (1%) | <strong>Size:</strong> 28 shares</p>
                  <p><strong>Tags:</strong> pullback, trend, earnings-week</p>
                  <p><strong>Result:</strong> +1.8R | <strong>P&L:</strong> $180</p>
                  <p><strong>Notes:</strong> Clean setup, stuck to plan. Earnings played out well.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Start Your Journal</h3>
                <p className="text-green-800">
                  Create a journal template with required fields + tags; commit to 20 logged trades before changing formats.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Paper or app?</h3>
                  <p className="text-gray-600">The best is the one you'll use daily.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long to review?</h3>
                  <p className="text-gray-600">30–60 mins per week is plenty.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/manage-risk-per-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to manage risk per trade (position sizing)
                </a>
                <a href="/how-to/backtest-trading-strategy" className="text-green-600 hover:text-green-700 hover:underline">
                  How to backtest a trading strategy properly
                </a>
                <a href="/how-to/use-stop-loss-and-take-profit" className="text-green-600 hover:text-green-700 hover:underline">
                  How to use stop-loss and take-profit orders
                </a>
                <a href="/how-to/scan-for-high-probability-setups" className="text-green-600 hover:text-green-700 hover:underline">
                  How to scan for high-probability stock setups
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}