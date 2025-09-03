import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Scan for High-Probability Stock Setups',
  description: 'Build scans that surface the best setups: trends, breakouts, pullbacks, volume, and volatility filters—plus a repeatable daily routine.',
}

export default function ScanHighProbabilitySetupsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Scan for Setups</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🔍
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to scan for high-probability stock setups</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Build systematic scans that surface the best trading opportunities while filtering out noise.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Define your setup</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Breakout Setup</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Price near 52-week high</li>
              <li>• Above key resistance</li>
              <li>• Volume surge confirmation</li>
              <li>• Tight consolidation before break</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Pullback Setup</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Strong uptrend intact</li>
              <li>• Price near 20/50 MA support</li>
              <li>• RSI oversold (&lt;30)</li>
              <li>• Volume drying up on decline</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Mean-Reversion</h4>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Extended move from average</li>
              <li>• RSI extreme (&gt;70 or &lt;30)</li>
              <li>• Key support/resistance nearby</li>
              <li>• Reversal pattern forming</li>
            </ul>
          </div>
        </div>

        <h2>Core filters: volume, price, ATR, relative volume</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Essential Scan Filters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Filter</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Typical Range</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">Average Volume</td>
                  <td className="py-2">Ensure liquidity</td>
                  <td className="py-2">&gt;500K shares/day</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">Price Range</td>
                  <td className="py-2">Avoid penny stocks</td>
                  <td className="py-2">$5-$500</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">ATR %</td>
                  <td className="py-2">Volatility filter</td>
                  <td className="py-2">1-8% daily range</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">Relative Volume</td>
                  <td className="py-2">Unusual activity</td>
                  <td className="py-2">&gt;1.5x average</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Breakout scan: price near 52-week high + volume surge</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Breakout Scanner Settings</h3>
          <div className="space-y-3 text-blue-700">
            <p><strong>Price Filters:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Price &gt; $5 and &lt; $200</li>
              <li>• Price within 5% of 52-week high</li>
              <li>• Price &gt; 20-day moving average</li>
            </ul>
            
            <p><strong>Volume Filters:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Average volume &gt; 500K</li>
              <li>• Current volume &gt; 150% of average</li>
            </ul>
            
            <p><strong>Technical Filters:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• RSI &gt; 50 (momentum)</li>
              <li>• ATR % between 2-6%</li>
            </ul>
          </div>
        </div>

        <h2>Pullback scan: uptrend + 20/50 MA + RSI reset</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Pullback Scanner Settings</h3>
          <div className="space-y-3 text-green-700">
            <p><strong>Trend Filters:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Price &gt; 50-day MA &gt; 200-day MA</li>
              <li>• 20-day MA trending up</li>
              <li>• Stock up &gt;15% in last 3 months</li>
            </ul>
            
            <p><strong>Pullback Filters:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Price near 20 or 50-day MA (within 3%)</li>
              <li>• RSI between 25-45</li>
              <li>• Down 5-15% from recent high</li>
            </ul>
            
            <p><strong>Quality Filters:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Market cap &gt; $500M</li>
              <li>• Average volume &gt; 1M</li>
            </ul>
          </div>
        </div>

        <h2>ETF screens vs single names</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Factor</th>
                <th className="border border-gray-300 px-3 py-2">ETFs</th>
                <th className="border border-gray-300 px-3 py-2">Individual Stocks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Volatility</td>
                <td className="border border-gray-300 px-3 py-2">Lower, more predictable</td>
                <td className="border border-gray-300 px-3 py-2">Higher, news-driven spikes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Gap Risk</td>
                <td className="border border-gray-300 px-3 py-2">Minimal overnight gaps</td>
                <td className="border border-gray-300 px-3 py-2">Earnings/news gaps common</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Liquidity</td>
                <td className="border border-gray-300 px-3 py-2">Major ETFs very liquid</td>
                <td className="border border-gray-300 px-3 py-2">Varies widely by stock</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Best Scans</td>
                <td className="border border-gray-300 px-3 py-2">Sector rotation, momentum</td>
                <td className="border border-gray-300 px-3 py-2">Breakouts, earnings plays</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">ETF Sector Rotation Scanner</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Relative Strength:</strong> Outperforming SPY by &gt;3% in 30 days</li>
            <li>• <strong>Volume Surge:</strong> Above-average volume for 3+ days</li>
            <li>• <strong>Technical Setup:</strong> Above 50-day MA with RSI &gt; 50</li>
            <li>• <strong>Focus Sectors:</strong> XLK (tech), XLF (finance), XLE (energy), XLV (health)</li>
          </ul>
        </div>

        <h2>Daily routine: pre-market to post-close</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Daily Scanning Schedule</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700">Pre-Market (7:00-9:30 AM)</h4>
              <ul className="text-purple-600 text-sm space-y-1 ml-4">
                <li>• Run overnight news scan</li>
                <li>• Check gap up/down stocks</li>
                <li>• Review economic calendar</li>
                <li>• Update watchlist priorities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-700">Market Open (9:30-10:00 AM)</h4>
              <ul className="text-purple-600 text-sm space-y-1 ml-4">
                <li>• Monitor breakout candidates</li>
                <li>• Check relative volume leaders</li>
                <li>• Scan for opening range breakouts</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-700">Mid-Day (12:00-2:00 PM)</h4>
              <ul className="text-purple-600 text-sm space-y-1 ml-4">
                <li>• Run pullback scans</li>
                <li>• Update swing trade watchlist</li>
                <li>• Review sector performance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-700">After Close (4:00-5:00 PM)</h4>
              <ul className="text-purple-600 text-sm space-y-1 ml-4">
                <li>• Full universe scan with daily data</li>
                <li>• Log results in trading journal</li>
                <li>• Prepare tomorrow&apos;s watchlist</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Logging results to refine scans</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Scan Performance Tracking</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-left">Date</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Scan Type</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Results</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Success Rate</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">3/15</td>
                  <td className="border border-gray-300 px-2 py-1">Breakout</td>
                  <td className="border border-gray-300 px-2 py-1">12 stocks</td>
                  <td className="border border-gray-300 px-2 py-1">58%</td>
                  <td className="border border-gray-300 px-2 py-1">Strong market day</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1">3/16</td>
                  <td className="border border-gray-300 px-2 py-1">Pullback</td>
                  <td className="border border-gray-300 px-2 py-1">8 stocks</td>
                  <td className="border border-gray-300 px-2 py-1">25%</td>
                  <td className="border border-gray-300 px-2 py-1">Market selling off</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">Track which scan types work best in different market conditions</p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-red-800 mb-2">Refinement Rules</h3>
          <ul className="text-red-700 space-y-1">
            <li>• If scan produces &gt;50 results daily, add more filters</li>
            <li>• If success rate &lt;40%, review filter criteria</li>
            <li>• Adjust volume requirements based on market volatility</li>
            <li>• Test new filters on historical data before going live</li>
          </ul>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Scanner Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Free Scanners</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Finviz (web-based, great filters)</li>
                <li>• TradingView (limited free scans)</li>
                <li>• Yahoo Finance screener</li>
                <li>• Most broker platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Paid Scanners</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Trade Ideas (AI-powered)</li>
                <li>• TC2000 (advanced filters)</li>
                <li>• Finviz Elite (real-time data)</li>
                <li>• TradingView Pro (unlimited scans)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free vs paid scanners?</h3>
              <p className="text-gray-700">Free scanners work fine to start. Upgrade to paid when you need real-time alerts, backtesting, or advanced filters.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many tickers should I watch?</h3>
              <p className="text-gray-700">Keep a focused list of 10-30 stocks. Better to know a few stocks well than to track hundreds poorly.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I scan during market hours?</h3>
              <p className="text-gray-700">Yes, but limit to 2-3 quick scans. Spend most trading time executing, not searching for new opportunities.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s the best scan for beginners?</h3>
              <p className="text-gray-700">Start with a simple breakout scan: stocks near 52-week highs with above-average volume. Add complexity gradually.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-read-candlestick-charts" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Candlestick Charts</h3>
              <p className="text-sm text-blue-700 mt-1">Pattern recognition basics</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-trade-earnings-season-safely" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Earnings Trading →</h3>
              <p className="text-sm text-green-700 mt-1">Navigate volatility safely</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}