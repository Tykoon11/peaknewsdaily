import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Place Your First Stock Trade: Market vs Limit Orders',
  description: 'Learn how to place your first stock trade the right way. Market vs limit orders explained, with step-by-step screenshots, risk tips, and common mistakes.',
}

export default function PlaceFirstStockTradePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Place Your First Stock Trade</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to place your first stock trade (market vs limit)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Placing your first trade feels big—but it&apos;s mostly about choosing the right order type and double-checking the details.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Key Takeaways</h2>
          <ul className="text-green-700 space-y-1">
            <li>• <strong>Use limit orders</strong> as a beginner—they give you price control</li>
            <li>• <strong>Never risk more than 1-2%</strong> of your account on a single trade</li>
            <li>• <strong>Double-check everything:</strong> ticker, quantity, price, and order type</li>
          </ul>
        </div>

        <h2>Step 1: Open the order ticket</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <ol className="space-y-2">
            <li>In your broker app, search the ticker (e.g., AAPL)</li>
            <li>Tap <strong>Trade</strong> or <strong>Buy/Sell</strong> to open the ticket</li>
            <li>Confirm you&apos;re on the stock (not options) ticket</li>
          </ol>
        </div>

        <h2>Step 2: Choose Buy or Sell</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Buy</h4>
            <p className="text-blue-700 text-sm">If you want to open a new long position</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Sell</h4>
            <p className="text-orange-700 text-sm">If you&apos;re closing shares you already own (or shorting—advanced)</p>
          </div>
        </div>

        <h2>Step 3: Select order type</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Market Order</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>How it works:</strong> Fills immediately at the best available price</p>
              <p><strong>Pros:</strong> Instant execution</p>
              <p><strong>Cons:</strong> Price can slip on fast moves or illiquid tickers</p>
              <p><strong>Best for:</strong> Very liquid, large-cap stocks during regular hours</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Limit Order (Recommended)</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>How it works:</strong> You set the maximum you&apos;ll pay (buy) or minimum you&apos;ll accept (sell)</p>
              <p><strong>Pros:</strong> Price control; avoids surprise fills</p>
              <p><strong>Cons:</strong> May not fill</p>
              <p><strong>Best for:</strong> Most beginners—set your price and wait</p>
            </div>
          </div>
        </div>

        <h2>Step 4: Set quantity</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Risk Management Rule</h3>
          <p className="text-red-700">
            <strong>Never risk more than 1–2% of your account on a single trade.</strong> Calculate your position size based on your stop-loss distance, not just how much you want to invest.
          </p>
        </div>

        <p>Decide how many shares or how much cash to invest. Many brokers now support fractional shares, so you can invest a specific dollar amount instead of buying whole shares.</p>

        <h2>Step 5: Choose time-in-force</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Order Type</th>
                <th className="border border-gray-300 px-3 py-2">Description</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Day</td>
                <td className="border border-gray-300 px-3 py-2">Cancels at market close if not filled</td>
                <td className="border border-gray-300 px-3 py-2">Most trades</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">GTC (Good-&apos;Til-Canceled)</td>
                <td className="border border-gray-300 px-3 py-2">Stays active (often up to 60–90 days)</td>
                <td className="border border-gray-300 px-3 py-2">Patient entries</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Step 6: Review and submit</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Pre-Submission Checklist</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ Correct ticker symbol</li>
            <li>✓ Right side (buy/sell)</li>
            <li>✓ Accurate quantity</li>
            <li>✓ Proper order type</li>
            <li>✓ Reasonable limit price (if using limit order)</li>
            <li>✓ Estimated total cost fits your budget</li>
          </ul>
        </div>

        <p>Submit your order. Your broker will show status updates: &quot;Filled,&quot; &quot;Partially Filled,&quot; or &quot;Working.&quot;</p>

        <h2>Market vs Limit: Quick decision table</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Situation</th>
                <th className="border border-gray-300 px-3 py-2">Recommendation</th>
                <th className="border border-gray-300 px-3 py-2">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Need it now + liquid stock</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Market</td>
                <td className="border border-gray-300 px-3 py-2">Fast execution, minimal slippage</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Price sensitive or fast market</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Limit</td>
                <td className="border border-gray-300 px-3 py-2">Price protection</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Pre-market/after-hours</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Limit only</td>
                <td className="border border-gray-300 px-3 py-2">Liquidity is thin</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2">Beginner trade</td>
                <td className="border border-gray-300 px-3 py-2 text-center"><strong>Limit</strong></td>
                <td className="border border-gray-300 px-3 py-2"><strong>Learn with control</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Add basic protection (optional but smart)</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Stop-Loss</h4>
            <p className="text-red-700 text-sm mb-2">An order that triggers when price hits your risk level</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Example: &quot;Sell if price falls to $97&quot;</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Take-Profit</h4>
            <p className="text-green-700 text-sm mb-2">Locks in gains at a target price</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Example: &quot;Sell at $108&quot;</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600">Some brokers let you attach both to your entry order (called bracket orders).</p>

        <h2>Common mistakes to avoid</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Top First-Timer Mistakes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Using market orders on low-volume stocks</strong> (causes slippage)</li>
            <li>• <strong>Typo risk:</strong> Adding an extra zero to quantity or limit price</li>
            <li>• <strong>Market orders in extended hours</strong> (spreads are wide)</li>
            <li>• <strong>Forgetting time-in-force</strong> (stale GTC orders can fill weeks later)</li>
            <li>• <strong>No position sizing plan</strong> (risking too much per trade)</li>
          </ul>
        </div>

        <h2>Pro tips</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Advanced Techniques</h3>
          <ul className="text-purple-700 space-y-2">
            <li>• <strong>Limit buy slightly below current price</strong> to control entry</li>
            <li>• <strong>Check the bid-ask spread</strong>—if it&apos;s wide, always use limit</li>
            <li>• <strong>For ETFs, avoid first/last 5 minutes</strong> when spreads are widest</li>
            <li>• <strong>Start with blue-chip stocks or broad ETFs</strong> for better liquidity</li>
          </ul>
        </div>

        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Ready to Try?</h3>
          <p className="text-green-700">
            Start with a limit buy on a large, liquid ETF (e.g., S&P 500 ETF like SPY or VOO). Place a tiny test order to learn your broker&apos;s interface before sizing up. Remember: your first trade should be about learning the process, not making money.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a limit order guaranteed to fill?</h3>
              <p className="text-gray-700">No. If the market never trades at your limit price, it won&apos;t fill. That&apos;s the trade-off for price control.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel or edit an order after submitting?</h3>
              <p className="text-gray-700">Yes—until it fills. Look for &quot;Modify&quot; or &quot;Cancel&quot; buttons on your working order in your broker app.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I make a mistake?</h3>
              <p className="text-gray-700">Contact your broker immediately. Some mistakes can be corrected, but filled trades usually can&apos;t be undone—you&apos;d need to place an offsetting trade.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I trade individual stocks or ETFs first?</h3>
              <p className="text-gray-700">ETFs are generally safer for beginners due to built-in diversification. Start with broad market ETFs before moving to individual stocks.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-a-brokerage-account-checklist" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose a Brokerage</h3>
              <p className="text-sm text-blue-700 mt-1">Platform selection checklist</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-use-stop-loss-and-take-profit" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Stop-Loss Orders →</h3>
              <p className="text-sm text-green-700 mt-1">Protect your capital</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}