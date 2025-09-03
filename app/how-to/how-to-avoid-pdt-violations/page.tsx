import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Avoid Pattern Day Trader (PDT) Violations',
  description: 'Understand FINRA\'s Pattern Day Trader rule and avoid violations with smart scheduling, cash accounts, and trade trackers.',
}

export default function AvoidPDTViolationsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid PDT Violations</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            ⚠️
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to avoid pattern day trader (PDT) violations</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Navigate FINRA&apos;s Pattern Day Trader rule without getting your account restricted.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What is the PDT rule?</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3">FINRA PDT Rule Summary</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Applies to:</strong> U.S. margin accounts under $25,000</li>
            <li>• <strong>Violation:</strong> 4+ day trades in any 5 business day period</li>
            <li>• <strong>Consequence:</strong> 90-day trading restriction to closing positions only</li>
            <li>• <strong>Exception:</strong> Accounts with $25,000+ equity are exempt</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Definitions</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>Day Trade:</strong> Buy and sell (or sell short and buy to cover) the same security on the same trading day</p>
            
            <p><strong>Pattern Day Trader:</strong> Anyone who executes 4 or more day trades within any 5 consecutive business days</p>
            
            <p><strong>Business Days:</strong> Monday through Friday when markets are open (holidays don&apos;t count)</p>
            
            <p><strong>Round Trip:</strong> Complete buy/sell cycle in same day (partial fills count as separate trades)</p>
          </div>
        </div>

        <h2>Round-trip definition and tracking</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">What Counts as a Day Trade</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">✓ Counts as Day Trade</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Buy 100 AAPL, sell 100 AAPL same day</li>
                <li>• Sell short 50 TSLA, cover 50 TSLA same day</li>
                <li>• Buy 200 SPY, sell 100 SPY same day (partial)</li>
                <li>• Multiple partial fills = multiple day trades</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-800 mb-2">✗ NOT a Day Trade</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Buy today, sell tomorrow</li>
                <li>• Hold position overnight</li>
                <li>• Options trades (different rules)</li>
                <li>• Cash account violations (different system)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Ways to avoid violations</h2>
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Strategy 1: Trade Less Frequently</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>Limit:</strong> Maximum 3 day trades per rolling 5-day period</p>
              <p><strong>Method:</strong> Track each day trade and count backwards 5 business days</p>
              <p><strong>Safety:</strong> Stop at 2 day trades if unsure of your count</p>
              <p><strong>Reset:</strong> Counter resets when oldest day trade falls outside 5-day window</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Strategy 2: Use Cash Accounts</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>How it works:</strong> Cash accounts aren&apos;t subject to PDT rules</p>
              <p><strong>Limitation:</strong> Must wait for settlement (T+2) before reusing funds</p>
              <p><strong>Example:</strong> Sell $1000 of stock Monday, can&apos;t use that $1000 until Wednesday</p>
              <p><strong>Best for:</strong> Swing traders, position traders</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Strategy 3: Swing Trade Instead</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Hold period:</strong> Enter today, exit tomorrow or later</p>
              <p><strong>Timeframes:</strong> 4-hour, daily, weekly charts</p>
              <p><strong>Benefits:</strong> No PDT concerns, less stress, better risk/reward</p>
              <p><strong>Drawback:</strong> Overnight gap risk</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Strategy 4: Focus on ETFs</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>Lower volatility:</strong> Less need for tight stops and quick exits</p>
              <p><strong>Predictable patterns:</strong> Better for swing trading approaches</p>
              <p><strong>Less gap risk:</strong> Diversification smooths price action</p>
              <p><strong>Popular choices:</strong> SPY, QQQ, IWM for broad market exposure</p>
            </div>
          </div>
        </div>

        <h2>A simple tracker template</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">PDT Tracking Spreadsheet</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-left">Date</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Symbol</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Buy Time</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Sell Time</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Day Trade?</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">Rolling Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">3/15</td>
                  <td className="border border-gray-300 px-2 py-1">AAPL</td>
                  <td className="border border-gray-300 px-2 py-1">10:30 AM</td>
                  <td className="border border-gray-300 px-2 py-1">2:15 PM</td>
                  <td className="border border-gray-300 px-2 py-1 text-red-600">YES</td>
                  <td className="border border-gray-300 px-2 py-1 bg-yellow-100">1/3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1">3/16</td>
                  <td className="border border-gray-300 px-2 py-1">SPY</td>
                  <td className="border border-gray-300 px-2 py-1">9:45 AM</td>
                  <td className="border border-gray-300 px-2 py-1">3/17 11:30 AM</td>
                  <td className="border border-gray-300 px-2 py-1 text-green-600">NO</td>
                  <td className="border border-gray-300 px-2 py-1 bg-yellow-100">1/3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">3/17</td>
                  <td className="border border-gray-300 px-2 py-1">QQQ</td>
                  <td className="border border-gray-300 px-2 py-1">1:00 PM</td>
                  <td className="border border-gray-300 px-2 py-1">3:30 PM</td>
                  <td className="border border-gray-300 px-2 py-1 text-red-600">YES</td>
                  <td className="border border-gray-300 px-2 py-1 bg-yellow-100">2/3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">Track the last 5 business days. When count reaches 3, stop day trading until oldest trade drops off.</p>
        </div>

        <h2>International/broker differences</h2>
        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Global Variations</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>U.S. Brokers:</strong> Must enforce PDT rule for accounts under $25K</p>
            
            <p><strong>International Brokers:</strong> May have different rules:</p>
            <ul className="ml-4 space-y-1">
              <li>• Some don&apos;t enforce PDT on non-U.S. citizens</li>
              <li>• Different minimum account sizes</li>
              <li>• Alternative structure (cash accounts, etc.)</li>
            </ul>
            
            <p><strong>Important:</strong> Always verify with your specific broker—rules change frequently</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">PDT Violation Consequences</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Immediate:</strong> Account flagged as Pattern Day Trader</li>
            <li>• <strong>Restriction:</strong> 90 days of closing-only transactions</li>
            <li>• <strong>Margin call:</strong> Must maintain $25K minimum or face further restrictions</li>
            <li>• <strong>Appeal:</strong> One-time removal possible if you contact broker immediately</li>
            <li>• <strong>Reset:</strong> Restriction lifts after 90 days if you stay under 4 day trades</li>
          </ul>
        </div>

        <h2>Workaround strategies</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Multiple Broker Accounts</h4>
            <p className="text-green-700 text-sm mb-2">Split funds across 2-3 brokers to get 9 day trades per week</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Example: $15K at Broker A, $15K at Broker B = 6 total day trades per 5-day period</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Scale Into Positions</h4>
            <p className="text-yellow-700 text-sm mb-2">Buy today, sell tomorrow to avoid day trade classification</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Trade execution: Enter Monday, exit Tuesday = swing trade, not day trade</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">End-of-Day Strategy</h4>
            <p className="text-purple-700 text-sm mb-2">Enter positions in final hour, exit next morning</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Benefit: Capture overnight gaps while minimizing day trade usage</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does PDT apply to cash accounts?</h3>
              <p className="text-gray-700">No, PDT rules only apply to margin accounts. Cash accounts have settlement rules instead—you must wait T+2 for funds to settle before reusing them.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do ETF day trades count toward the limit?</h3>
              <p className="text-gray-700">Yes, if they&apos;re same-day round trips. ETFs, stocks, and most securities count equally toward your 3 day trade limit.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I accidentally make a 4th day trade?</h3>
              <p className="text-gray-700">Your account gets flagged immediately. Call your broker right away—they may remove it as a one-time courtesy if you explain it was accidental.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I day trade with $24,999?</h3>
              <p className="text-gray-700">No, you need $25,000 minimum equity at the start of each trading day. Being even $1 short subjects you to PDT restrictions.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-manage-risk-per-trade" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Risk Management</h3>
              <p className="text-sm text-blue-700 mt-1">Position sizing fundamentals</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-trade-etfs-vs-stocks" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">ETFs vs Stocks →</h3>
              <p className="text-sm text-green-700 mt-1">Choose the right instrument</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}