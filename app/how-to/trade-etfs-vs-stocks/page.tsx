import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Trade ETFs vs Individual Stocks',
  description: 'ETFs vs stocks: when to choose diversification, how to judge liquidity and spreads, and the strategies that fit each best.',
}

export default function TradeETFsVsStocksPage() {
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
              How to Trade ETFs vs Individual Stocks
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ETFs vs stocks: when to choose diversification, how to judge liquidity and spreads, and the strategies that fit each best.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>ETFs = diversification + lower single-name risk</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Judge ETF liquidity by underlying basket, not just on-screen volume</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use ETFs for trend/rotation; pick stocks for idiosyncratic edges</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Pros & Cons Comparison */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros & cons</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">ETFs</h3>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p><strong>Pros:</strong> Diversified, typically tax-efficient, small expense ratios</p>
                    <p><strong>Cons:</strong> May have tracking error and spreads</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Stocks</h3>
                  <div className="space-y-2 text-green-700 text-sm">
                    <p><strong>Pros:</strong> Higher upside (and downside), earnings catalysts, more research edges</p>
                    <p><strong>Cons:</strong> Earnings risk, single-name concentration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liquidity & Execution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liquidity & execution</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-3 text-yellow-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Check bid-ask spread and iNAV/NAV premium on thin ETFs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Prefer limit orders, especially near open/close</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategy Fits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategy fits</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">ETFs</h3>
                  <p className="text-purple-700">Trend following, sector rotation, risk-parity.</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Stocks</h3>
                  <p className="text-orange-700">Earnings momentum, turnaround plays, deep research edges.</p>
                </div>
              </div>
            </div>

            {/* Costs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costs</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>ETFs:</strong> Expense ratio + hidden spread cost.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Stocks:</strong> Consider earnings gaps and slippage.
                </p>
              </div>
            </div>

            {/* When to Choose What */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When to choose what</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Choose ETFs when:</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Trading broad market trends</li>
                    <li>• Implementing sector rotation</li>
                    <li>• Want diversified exposure</li>
                    <li>• Risk management is priority</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Choose stocks when:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• You have company-specific research edge</li>
                    <li>• Trading earnings momentum</li>
                    <li>• Seeking higher potential returns</li>
                    <li>• Playing specific catalysts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Practice Both</h3>
                <p className="text-green-800">
                  Pick one broad-market ETF and one sector ETF to practice execution with limit orders this week.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Low ETF volume = bad?</h3>
                  <p className="text-gray-600">Not always—if underlying is liquid, execution can still be fine.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Use stops on ETFs?</h3>
                  <p className="text-gray-600">Yes—same as stocks.</p>
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
                <a href="/how-to/trade-earnings-season-safely" className="text-green-600 hover:text-green-700 hover:underline">
                  How to trade earnings season safely
                </a>
                <a href="/how-to/manage-risk-per-trade" className="text-green-600 hover:text-green-700 hover:underline">
                  How to manage risk per trade (position sizing)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}