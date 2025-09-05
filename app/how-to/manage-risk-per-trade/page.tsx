import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Manage Risk Per Trade (Position Sizing)',
  description: 'Position sizing made simple: choose a fixed % risk, calculate share size from entry-to-stop distance, and keep losses small and consistent.',
}

export default function ManageRiskPerTradePage() {
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
              How to Manage Risk Per Trade (Position Sizing)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Position sizing made simple: choose a fixed % risk, calculate share size from entry-to-stop distance, and keep losses small and consistent.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Pick a risk unit (0.5–1% of equity is beginner-safe)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Shares = Risk $ / (Entry − Stop) (longs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Consistent risk beats "gut feel" sizing over time</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* The Formula with Example */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The formula with example</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-700">
                  <p className="font-semibold mb-2">Example:</p>
                  <p>Account $10,000; risk 1% = $100</p>
                  <p>Entry $50, stop $48 → risk/share $2 → 50 shares</p>
                </div>
              </div>
            </div>

            {/* Why Constant Risk Matters */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why constant risk per trade beats random sizing</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-700">
                  Fixed percentage risk allows your edge to compound predictably while preventing any single trade from severely damaging your account.
                </p>
              </div>
            </div>

            {/* Volatility-Aware Stops */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Volatility-aware stops</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-700">
                  <strong>Use ATR to avoid noise:</strong> stop at 1.5–2× ATR. Recalculate shares accordingly.
                </p>
              </div>
            </div>

            {/* Position Sizing Formula */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Position sizing formula</h2>
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-400">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Shares = Risk $ ÷ (Entry Price - Stop Price)</p>
                  <p className="text-gray-600 text-sm">For long positions</p>
                </div>
              </div>
            </div>

            {/* Scaling Rules */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scaling rules</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-3 text-yellow-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Add only if original stop holds (never widen)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>If adding, keep total risk ≤ 1–1.5R</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Risk Unit Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing your risk unit</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">0.5% Risk</h3>
                  <p className="text-green-700 text-sm">Very conservative, good for beginners</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">1% Risk</h3>
                  <p className="text-blue-700 text-sm">Balanced approach for most traders</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">2% Risk</h3>
                  <p className="text-orange-700 text-sm">Aggressive, requires experience</p>
                </div>
              </div>
            </div>

            {/* Mistakes to Avoid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mistakes to avoid</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Same share count for every trade regardless of stop distance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Increasing risk after losses ("revenge risk")</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Create Your Calculator</h3>
                <p className="text-green-800">
                  Create a sizing calculator in your sheet: input entry, stop, risk %, output shares.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is 2% per trade okay?</h3>
                  <p className="text-gray-600">Aggressive; 0.5–1% is steadier for learning.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Adjust risk after wins?</h3>
                  <p className="text-gray-600">Keep it constant; let edge show up.</p>
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
                <a href="/how-to/place-your-first-stock-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to place your first stock trade
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