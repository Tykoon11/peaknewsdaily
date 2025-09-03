import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Manage Risk Per Trade: Position Sizing',
  description: 'Position sizing made simple: choose a fixed % risk, calculate share size from entry-to-stop distance, and keep losses small and consistent.',
}

export default function ManageRiskPerTradePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Risk Per Trade</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            ⚖️
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to manage risk per trade (position sizing)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Master the math that keeps you in the game—consistent risk management is the difference between success and blowup.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">The Golden Rule</h2>
          <p className="text-blue-700 mb-3">
            Risk a fixed percentage of your account on every trade—usually 0.5% to 2%. This keeps you alive through losing streaks and lets compound growth work its magic.
          </p>
          <p className="text-blue-600 text-sm">
            Example: $50,000 account × 1% risk = $500 maximum loss per trade
          </p>
        </div>

        <h2>Why constant risk per trade beats random sizing</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Fixed Risk Benefits</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Survive long losing streaks</li>
              <li>• Compound gains consistently</li>
              <li>• Remove emotional sizing decisions</li>
              <li>• Know maximum daily/weekly loss</li>
              <li>• Scale position with account growth</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Random Sizing Problems</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• One bad trade wipes out months of gains</li>
              <li>• Revenge trading after losses</li>
              <li>• Position size based on &quot;confidence&quot;</li>
              <li>• No mathematical edge</li>
              <li>• High probability of ruin</li>
            </ul>
          </div>
        </div>

        <h2>The formula: Shares = (Risk $) / (Entry − Stop)</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Position Sizing Formula</h3>
          <div className="bg-white p-4 rounded border text-center my-4">
            <code className="text-lg">Shares = Risk Amount ÷ (Entry Price - Stop Price)</code>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">Example Calculation</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Account size: $50,000</li>
                <li>• Risk per trade: 1% = $500</li>
                <li>• Entry price: $100</li>
                <li>• Stop-loss: $95</li>
                <li>• Risk per share: $100 - $95 = $5</li>
                <li>• <strong>Position size: $500 ÷ $5 = 100 shares</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Pick your risk unit (0.5–2% of equity)</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Risk Level</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
                <th className="border border-gray-300 px-3 py-2">Pros</th>
                <th className="border border-gray-300 px-3 py-2">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">0.5%</td>
                <td className="border border-gray-300 px-3 py-2">New traders</td>
                <td className="border border-gray-300 px-3 py-2">Very safe, long survival</td>
                <td className="border border-gray-300 px-3 py-2">Slow growth</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">1%</td>
                <td className="border border-gray-300 px-3 py-2">Most traders</td>
                <td className="border border-gray-300 px-3 py-2">Good risk/reward balance</td>
                <td className="border border-gray-300 px-3 py-2">Moderate growth pace</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1.5%</td>
                <td className="border border-gray-300 px-3 py-2">Experienced traders</td>
                <td className="border border-gray-300 px-3 py-2">Faster growth potential</td>
                <td className="border border-gray-300 px-3 py-2">Higher volatility</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">2%+</td>
                <td className="border border-gray-300 px-3 py-2">Pros only</td>
                <td className="border border-gray-300 px-3 py-2">Maximum growth</td>
                <td className="border border-gray-300 px-3 py-2">High risk of ruin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Risk Level Reality Check</h3>
          <div className="text-yellow-700 space-y-2">
            <p><strong>At 1% risk:</strong> You can lose 69 trades in a row before losing half your account</p>
            <p><strong>At 2% risk:</strong> You can lose 34 trades in a row before losing half your account</p>
            <p><strong>At 5% risk:</strong> You can lose 13 trades in a row before losing half your account</p>
            <p className="text-yellow-800 font-semibold">Choose conservatively—losing streaks happen to everyone.</p>
          </div>
        </div>

        <h2>Use ATR for volatility-aware stops</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">ATR-Based Position Sizing</h3>
          <div className="text-purple-700 space-y-3">
            <p><strong>ATR (Average True Range):</strong> Measures a stock&apos;s typical daily price movement</p>
            
            <p><strong>Stop-Loss Distance:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Conservative: 1.5 × ATR</li>
              <li>• Moderate: 2.0 × ATR</li>
              <li>• Aggressive: 1.0 × ATR</li>
            </ul>
            
            <div className="bg-white p-4 rounded border mt-4">
              <h4 className="font-semibold text-purple-800 mb-2">ATR Example</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>Stock: AAPL at $150</li>
                <li>20-day ATR: $3.00</li>
                <li>Stop distance: 2 × $3.00 = $6.00</li>
                <li>Stop-loss: $150 - $6.00 = $144</li>
                <li>Position: $500 risk ÷ $6 = 83 shares</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Scaling rules: add only if original stop holds</h2>
        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Position Scaling Guidelines</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>When to Add to Winners:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Trade is profitable and original stop hasn&apos;t been hit</li>
              <li>• New technical setup confirms continuation</li>
              <li>• Can raise stop to breakeven or better</li>
              <li>• Total position risk stays within limits</li>
            </ul>
            
            <p><strong>Pyramid Sizing Example:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Entry 1: 100 shares at $50 (1% risk)</li>
              <li>• Entry 2: 50 shares at $55 (0.5% additional risk)</li>
              <li>• Entry 3: 25 shares at $60 (0.25% additional risk)</li>
              <li>• Total risk: 1.75% with decreasing size</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Scaling Mistakes to Avoid</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Adding to losers:</strong> &quot;Averaging down&quot; increases losses</li>
            <li>• <strong>Equal-sized adds:</strong> Risk compounds dangerously</li>
            <li>• <strong>No stop adjustment:</strong> Original stop must move higher</li>
            <li>• <strong>Ignoring correlation:</strong> Don&apos;t scale into similar positions</li>
          </ul>
        </div>

        <h2>Spreadsheet template + example</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Position Sizing Calculator Template</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-left">Field</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Formula/Value</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">Account Size</td>
                  <td className="border border-gray-300 px-2 py-1">Current equity</td>
                  <td className="border border-gray-300 px-2 py-1">$50,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1">Risk %</td>
                  <td className="border border-gray-300 px-2 py-1">Your chosen %</td>
                  <td className="border border-gray-300 px-2 py-1">1%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">Risk $</td>
                  <td className="border border-gray-300 px-2 py-1">Account × Risk %</td>
                  <td className="border border-gray-300 px-2 py-1">$500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1">Entry Price</td>
                  <td className="border border-gray-300 px-2 py-1">Planned entry</td>
                  <td className="border border-gray-300 px-2 py-1">$100</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">Stop Price</td>
                  <td className="border border-gray-300 px-2 py-1">Stop-loss level</td>
                  <td className="border border-gray-300 px-2 py-1">$95</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1">Risk/Share</td>
                  <td className="border border-gray-300 px-2 py-1">Entry - Stop</td>
                  <td className="border border-gray-300 px-2 py-1">$5</td>
                </tr>
                <tr className="bg-yellow-100">
                  <td className="border border-gray-300 px-2 py-1"><strong>Position Size</strong></td>
                  <td className="border border-gray-300 px-2 py-1"><strong>Risk $ ÷ Risk/Share</strong></td>
                  <td className="border border-gray-300 px-2 py-1"><strong>100 shares</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-xs text-gray-600">
            <p><strong>Verification:</strong> 100 shares × $5 risk = $500 total risk = 1% of $50,000 ✓</p>
          </div>
        </div>

        <h2>Advanced considerations</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Correlation Risk</h4>
            <p className="text-blue-700 text-sm mb-2">Don&apos;t risk 1% on 5 tech stocks—that&apos;s really 5% on one sector</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Solution: Limit correlated positions to 3-4% total risk</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Gap Risk Adjustment</h4>
            <p className="text-orange-700 text-sm mb-2">Earnings, biotech catalysts can gap beyond stops</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Solution: Reduce position size by 50% for high-gap-risk trades</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Account Growth</h4>
            <p className="text-green-700 text-sm mb-2">As account grows, dollar risk increases automatically</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">$100K account at 1% = $1,000 risk (vs $500 at $50K)</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is 2% per trade too much?</h3>
              <p className="text-gray-700">For beginners, yes. Start with 0.5-1% until you have a proven system. Even pros rarely exceed 2% on individual trades.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I change risk after a win streak?</h3>
              <p className="text-gray-700">Stay consistent to avoid tilt. Some traders gradually increase from 1% to 1.5% after extended profitability, but avoid dramatic changes.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my calculated position size is too expensive?</h3>
              <p className="text-gray-700">Either widen your stop-loss or skip the trade. Never risk more than your predetermined amount just to take a position.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I handle fractional shares?</h3>
              <p className="text-gray-700">Round down to whole shares to stay under your risk limit. Some brokers support fractional shares for exact position sizing.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-trade-earnings-season-safely" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Earnings Trading</h3>
              <p className="text-sm text-blue-700 mt-1">Navigate volatility safely</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-avoid-pdt-violations" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Avoid PDT Violations →</h3>
              <p className="text-sm text-green-700 mt-1">Pattern day trader rules</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}