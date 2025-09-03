import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Use Stop-Loss and Take-Profit Orders',
  description: 'Master stop-loss and take-profit orders. Learn where to place them, how to size risk, and the bracket setups that protect your capital.',
}

export default function StopLossTakeProfitPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Stop-Loss &amp; Take-Profit</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🛡️
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to use stop-loss and take-profit orders</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Master protective orders that limit losses and lock in gains—the foundation of disciplined trading.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What stop-loss &amp; take-profit do (and don&apos;t)</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">What They Do</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• <strong>Stop-loss:</strong> Automatically sells when price hits your risk level</li>
            <li>• <strong>Take-profit:</strong> Automatically sells when price hits your target</li>
            <li>• <strong>Remove emotion</strong> from exit decisions</li>
            <li>• <strong>Enforce discipline</strong> when you&apos;re not watching</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">What They Don&apos;t Do</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Guarantee your exit price</strong> (gaps can cause worse fills)</li>
            <li>• <strong>Work in all market conditions</strong> (circuit breakers, halts)</li>
            <li>• <strong>Replace position sizing</strong> (still need proper risk per trade)</li>
          </ul>
        </div>

        <h2>3 ways to set stops: % risk, ATR/volatility, structure</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Method 1: Fixed Percentage</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>How:</strong> Set stop X% below entry (e.g., 5-10%)</p>
              <p><strong>Pros:</strong> Simple, consistent risk</p>
              <p><strong>Cons:</strong> Ignores volatility—might be too tight or too loose</p>
              <p><strong>Best for:</strong> Beginners, broad ETFs</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Method 2: ATR (Average True Range)</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>How:</strong> Set stop 1.5-2x ATR below entry</p>
              <p><strong>Pros:</strong> Adapts to stock&apos;s natural volatility</p>
              <p><strong>Cons:</strong> Requires calculation</p>
              <p><strong>Best for:</strong> Individual stocks with varying volatility</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Method 3: Technical Levels</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>How:</strong> Place stops below support, above resistance</p>
              <p><strong>Pros:</strong> Uses market structure</p>
              <p><strong>Cons:</strong> Subjective, requires chart reading skills</p>
              <p><strong>Best for:</strong> Pattern-based entries</p>
            </div>
          </div>
        </div>

        <h2>Bracket orders (entry + SL + TP in one)</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Complete Trade Setup</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-100 p-4 rounded">
              <h4 className="font-medium text-blue-800">Entry Order</h4>
              <p className="text-sm text-blue-700">Buy 100 AAPL at $150</p>
            </div>
            <div className="bg-red-100 p-4 rounded">
              <h4 className="font-medium text-red-800">Stop-Loss</h4>
              <p className="text-sm text-red-700">Sell if price drops to $145</p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <h4 className="font-medium text-green-800">Take-Profit</h4>
              <p className="text-sm text-green-700">Sell if price rises to $160</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">All three orders placed simultaneously—entry fills first, then SL/TP become active.</p>
        </div>

        <h2>Trailing stops: when they help, when they hurt</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Market Condition</th>
                <th className="border border-gray-300 px-3 py-2">Trailing Stops</th>
                <th className="border border-gray-300 px-3 py-2">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Strong uptrend</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">✓ Helpful</td>
                <td className="border border-gray-300 px-3 py-2">Captures most of the move</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Choppy/sideways</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">✗ Harmful</td>
                <td className="border border-gray-300 px-3 py-2">Gets whipsawed out early</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">High volatility stock</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">⚠ Careful</td>
                <td className="border border-gray-300 px-3 py-2">Use wider trails (2-3x ATR)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ETF vs stock nuances</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">ETFs</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Lower gap risk due to diversification</li>
              <li>• Stops work more predictably</li>
              <li>• Can use tighter stops (3-5%)</li>
              <li>• Less overnight risk</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Individual Stocks</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Higher gap risk (earnings, news)</li>
              <li>• Need wider stops (8-15%)</li>
              <li>• Consider pre-earnings exit</li>
              <li>• Monitor after-hours news</li>
            </ul>
          </div>
        </div>

        <h2>Step-by-step: placing SL/TP in your broker</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Broker Instructions</h3>
          <ol className="text-gray-700 space-y-2">
            <li><strong>1. After your entry fills:</strong> Go to Positions or Portfolio</li>
            <li><strong>2. Find your position:</strong> Click the stock/ETF you own</li>
            <li><strong>3. Select &quot;Add Stop&quot; or &quot;Manage Position&quot;</strong></li>
            <li><strong>4. Choose order type:</strong>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• <strong>Stop-Loss:</strong> Triggers market order at your price</li>
                <li>• <strong>Stop-Limit:</strong> Triggers limit order (more control)</li>
              </ul>
            </li>
            <li><strong>5. Set your stop price</strong> and quantity (usually all shares)</li>
            <li><strong>6. Choose time-in-force</strong> (GTC recommended)</li>
            <li><strong>7. Review and submit</strong></li>
          </ol>
        </div>

        <h2>Mistakes: stops too tight, moving stops, ignoring gap risk</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Common Stop-Loss Mistakes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Setting stops too tight:</strong> Normal volatility stops you out</li>
            <li>• <strong>Moving stops against you:</strong> &quot;Just a little more room...&quot;</li>
            <li>• <strong>No stops at all:</strong> Small losses become big losses</li>
            <li>• <strong>Ignoring gap risk:</strong> Stops can&apos;t protect against overnight gaps</li>
            <li>• <strong>Using stops in illiquid stocks:</strong> Can cause dramatic slippage</li>
          </ul>
        </div>

        <h2>Quick templates (1R/2R system)</h2>
        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Risk-Reward Templates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-gray-800 mb-2">Conservative (1R:2R)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Entry: $100</li>
                <li>Stop-Loss: $95 (-5%)</li>
                <li>Take-Profit: $110 (+10%)</li>
                <li>Risk $5 to make $10</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-gray-800 mb-2">Aggressive (1R:3R)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Entry: $100</li>
                <li>Stop-Loss: $92 (-8%)</li>
                <li>Take-Profit: $124 (+24%)</li>
                <li>Risk $8 to make $24</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Practice on Paper Account</h3>
          <p className="text-blue-700">
            Before risking real money, practice stop-loss and take-profit orders on a paper trading account. Learn your broker&apos;s interface and test different stop distances to see what works for your strategy.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do stop-losses guarantee my exit price?</h3>
              <p className="text-gray-700">No—gaps can cause worse fills. If a stock closes at $50 and opens at $45, your $48 stop becomes a market order at $45 or wherever it trades.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are trailing stops good for volatile stocks?</h3>
              <p className="text-gray-700">Only with wider trails. Use 2-3x ATR for volatile stocks, or they&apos;ll get stopped out by normal price swings.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I use stop-limit or stop-loss orders?</h3>
              <p className="text-gray-700">Stop-loss (market) ensures execution but not price. Stop-limit gives price control but may not fill. For liquid stocks, stop-loss is usually better.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I set stops on ETFs the same way as stocks?</h3>
              <p className="text-gray-700">Yes—same mechanics. ETFs often have lower gap risk due to diversification, so you can typically use tighter stops.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-place-your-first-stock-trade" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Place Your First Trade</h3>
              <p className="text-sm text-blue-700 mt-1">Market vs limit orders</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-manage-risk-per-trade" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Position Sizing →</h3>
              <p className="text-sm text-green-700 mt-1">Manage risk per trade</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}