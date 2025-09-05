import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Place Your First Stock Trade (Market vs Limit)',
  description: 'Learn how to place your first stock trade the right way. Market vs limit orders explained, with step-by-step screenshots, risk tips, and common mistakes.',
}

export default function PlaceFirstStockTradePage() {
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
              How to Place Your First Stock Trade (Market vs Limit)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to place your first stock trade the right way. Market vs limit orders explained, with step-by-step screenshots, risk tips, and common mistakes.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Choose limit orders for price control, market orders for instant execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Never risk more than 1-2% of your account on a single trade</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Double-check ticker, quantity, and order type before submitting</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Placing your first trade feels big—but it's mostly about choosing the right order type and double-checking the details. This guide shows you exactly what to click, when to use market vs limit orders, and how to avoid the classic first-timer mistakes.
              </p>
            </div>

            {/* Step 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Open the order ticket</h2>
              <div className="space-y-3 text-gray-600">
                <p>• In your broker app, search the ticker (e.g., AAPL)</p>
                <p>• Tap <strong>Trade</strong> or <strong>Buy/Sell</strong> to open the ticket</p>
                <p>• Confirm you're on the stock (not options) ticket</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Choose Buy or Sell</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Buy</strong> if you want to open a new long position.</p>
                <p><strong>Sell</strong> if you're closing shares you already own (or shorting—advanced).</p>
              </div>
            </div>

            {/* Step 3 - Order Types */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Select order type</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Market Order</h3>
                  <p className="text-blue-700 mb-3">Fills immediately at the best available price.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Pros:</strong> Instant execution</p>
                    <p><strong>Cons:</strong> Price can slip on fast moves or illiquid tickers</p>
                    <p><strong>Best for:</strong> Very liquid, large-cap stocks during regular hours</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Limit Order</h3>
                  <p className="text-green-700 mb-3">You set the maximum you'll pay (buy) or minimum you'll accept (sell).</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Pros:</strong> Price control; avoids surprise fills</p>
                    <p><strong>Cons:</strong> May not fill</p>
                    <p><strong>Best for:</strong> Most beginners—set your price and wait</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Set quantity (or use "dollars" if your broker supports it)</h2>
              <div className="space-y-3 text-gray-600">
                <p>Decide how many shares or how much cash to invest.</p>
                <p><strong>Quick rule:</strong> Never risk more than 1–2% of your account on a single trade (more on sizing below).</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Choose time-in-force</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Day:</strong> Cancels at market close if not filled</p>
                <p><strong>GTC (Good-'Til-Canceled):</strong> Stays active (often up to 60–90 days)</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Review and submit</h2>
              <div className="space-y-3 text-gray-600">
                <p>Double-check ticker, side (buy/sell), quantity, order type, limit price, and estimated cost.</p>
                <p>Submit. Your broker will show "Filled," "Partially Filled," or "Working."</p>
              </div>
            </div>

            {/* Market vs Limit Decision Table */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Market vs Limit: Quick decision table</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Need it now + liquid stock?</strong> Market.</p>
                  <p><strong>Price sensitive or fast market?</strong> Limit.</p>
                  <p><strong>Pre-market/after-hours?</strong> Limit only (liquidity is thin).</p>
                </div>
              </div>
            </div>

            {/* Protection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add basic protection (optional but smart)</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Stop-loss:</strong> An order that triggers when price hits your risk level (e.g., "Sell if price falls to $97").</p>
                <p><strong>Take-profit:</strong> Locks gains at a target (e.g., "Sell at $108").</p>
                <p>Some brokers let you attach both to the entry (called bracket orders).</p>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common mistakes to avoid</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Using market orders on low-volume stocks (slippage)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Typo-risk: adding a zero to share quantity or limit price</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Buying in extended hours with a market order</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Forgetting time-in-force (a stale GTC can fill weeks later)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro tips</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Place a limit buy slightly below current price to control entry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Check the bid-ask spread—if it's wide, always use a limit order</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>For ETFs, avoid the first and last 5 minutes of the day when spreads are widest</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Ready to Try?</h3>
                <p className="text-green-800">
                  Start with a limit buy on a large, liquid ETF (e.g., S&P 500 ETF). Place a tiny test order to learn your broker's flow before sizing up.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is a limit order guaranteed to fill?</h3>
                  <p className="text-gray-600">No. If the market never trades at your limit price, it won't fill.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I cancel or edit an order after submitting?</h3>
                  <p className="text-gray-600">Yes—until it fills. Look for Modify or Cancel on the working order.</p>
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
                <a href="/how-to/read-candlestick-charts" className="text-green-600 hover:text-green-700 hover:underline">
                  How to read candlestick charts (for beginners)
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