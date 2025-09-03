import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build a Trading Journal That Improves Results',
  description: 'Turn your journal into an edge: log setups, emotions, risk, and outcomes. Review rituals and tags that reveal what actually works for you.',
}

export default function BuildTradingJournalPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Build Trading Journal</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            📝
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to build a trading journal that improves results</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Transform random trades into systematic improvement with disciplined record-keeping and analysis.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Why Journaling Works</h2>
          <p className="text-blue-700 mb-3">
            Professional traders journal every trade. It&apos;s the fastest way to identify what works, what doesn&apos;t, and what patterns lead to your biggest wins and losses.
          </p>
          <p className="text-blue-600 text-sm">
            Without a journal, you&apos;re just gambling with expensive lessons.
          </p>
        </div>

        <h2>What to log: setup, thesis, risk, execution, outcome, lesson</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Essential Journal Fields</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Field</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Why It Matters</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Date/Time</td>
                  <td className="border border-gray-300 px-3 py-2">Track market conditions</td>
                  <td className="border border-gray-300 px-3 py-2">2024-03-15, 10:30 AM</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Symbol</td>
                  <td className="border border-gray-300 px-3 py-2">Analyze performance by stock</td>
                  <td className="border border-gray-300 px-3 py-2">AAPL</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Setup/Pattern</td>
                  <td className="border border-gray-300 px-3 py-2">Identify best setups</td>
                  <td className="border border-gray-300 px-3 py-2">Breakout above resistance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Entry Price</td>
                  <td className="border border-gray-300 px-3 py-2">Track execution quality</td>
                  <td className="border border-gray-300 px-3 py-2">$175.50</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Exit Price</td>
                  <td className="border border-gray-300 px-3 py-2">Calculate actual returns</td>
                  <td className="border border-gray-300 px-3 py-2">$182.25</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Position Size</td>
                  <td className="border border-gray-300 px-3 py-2">Verify risk management</td>
                  <td className="border border-gray-300 px-3 py-2">100 shares</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Stop Loss</td>
                  <td className="border border-gray-300 px-3 py-2">Track risk per trade</td>
                  <td className="border border-gray-300 px-3 py-2">$170.00</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">P&L ($)</td>
                  <td className="border border-gray-300 px-3 py-2">Bottom line results</td>
                  <td className="border border-gray-300 px-3 py-2">+$675</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">R-Multiple</td>
                  <td className="border border-gray-300 px-3 py-2">Risk-adjusted performance</td>
                  <td className="border border-gray-300 px-3 py-2">+1.2R</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Tagging: breakout/pullback, market regime, news, mistake types</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Setup Tags</h3>
            <div className="grid md:grid-cols-2 gap-4 text-blue-700">
              <div>
                <p><strong>Pattern Types:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Breakout</li>
                  <li>• Pullback</li>
                  <li>• Reversal</li>
                  <li>• Continuation</li>
                </ul>
              </div>
              <div>
                <p><strong>Technical Setups:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Flag/Pennant</li>
                  <li>• Support/Resistance</li>
                  <li>• Moving Average</li>
                  <li>• Gap Play</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Market Context Tags</h3>
            <div className="grid md:grid-cols-2 gap-4 text-green-700">
              <div>
                <p><strong>Market Regime:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Bull Market</li>
                  <li>• Bear Market</li>
                  <li>• Sideways/Choppy</li>
                  <li>• High Volatility</li>
                </ul>
              </div>
              <div>
                <p><strong>Session Time:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Market Open</li>
                  <li>• Mid-Day</li>
                  <li>• Power Hour</li>
                  <li>• Earnings Season</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Mistake Tags</h3>
            <div className="grid md:grid-cols-2 gap-4 text-red-700">
              <div>
                <p><strong>Execution Errors:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Late Entry</li>
                  <li>• Chased Price</li>
                  <li>• Wrong Size</li>
                  <li>• No Stop Set</li>
                </ul>
              </div>
              <div>
                <p><strong>Emotional Mistakes:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• FOMO Trade</li>
                  <li>• Revenge Trade</li>
                  <li>• Moved Stop</li>
                  <li>• Over-Confident</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>Weekly review: top 5 wins/losses, fix one mistake</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Weekly Review Process</h3>
          <div className="space-y-4 text-purple-700">
            <div>
              <h4 className="font-semibold">Step 1: Performance Summary (10 min)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Total P&L for the week</li>
                <li>• Number of trades taken</li>
                <li>• Win rate and average R-multiple</li>
                <li>• Best and worst trades</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 2: Top 5 Analysis (15 min)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Review 3 biggest winners—what went right?</li>
                <li>• Review 2 biggest losers—what went wrong?</li>
                <li>• Look for patterns in setups, timing, execution</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 3: Improvement Focus (10 min)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Identify ONE specific mistake to fix next week</li>
                <li>• Create actionable plan to avoid it</li>
                <li>• Set measurable goal for improvement</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Tools: spreadsheet vs app; screenshots; broker exports</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Journaling Tools Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-gray-800 mb-2">Spreadsheet (Excel/Sheets)</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Pros:</strong> Free, flexible, custom formulas</p>
                <p><strong>Cons:</strong> Manual data entry, no charts</p>
                <p><strong>Best for:</strong> Simple tracking, tight budgets</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-gray-800 mb-2">Trading Apps</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Pros:</strong> Auto-sync, analytics, mobile</p>
                <p><strong>Cons:</strong> Monthly fees, less customization</p>
                <p><strong>Best for:</strong> Active traders, convenience</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-gray-800 mb-2">Broker Reports</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Pros:</strong> Accurate data, tax reports</p>
                <p><strong>Cons:</strong> Basic analysis, no context</p>
                <p><strong>Best for:</strong> Data source, not primary journal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Screenshot Strategy</h3>
          <div className="text-yellow-700 space-y-2">
            <p><strong>What to capture:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Chart at entry time (before trade)</li>
              <li>• Order execution confirmation</li>
              <li>• Exit decision point</li>
              <li>• Post-trade chart analysis</li>
            </ul>
            <p className="text-sm text-yellow-600 mt-3">
              Screenshots provide context that numbers alone can&apos;t capture.
            </p>
          </div>
        </div>

        <h2>KPI dashboard (win rate by tag, avg R, expectancy)</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Key Performance Indicators</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-green-300">
              <thead className="bg-green-100">
                <tr>
                  <th className="border border-green-300 px-3 py-2 text-left">Metric</th>
                  <th className="border border-green-300 px-3 py-2 text-left">Formula</th>
                  <th className="border border-green-300 px-3 py-2 text-left">Good Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-300 px-3 py-2 font-medium">Win Rate</td>
                  <td className="border border-green-300 px-3 py-2">Winners / Total Trades</td>
                  <td className="border border-green-300 px-3 py-2">&gt;50%</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-300 px-3 py-2 font-medium">Average R</td>
                  <td className="border border-green-300 px-3 py-2">Avg Gain / Avg Risk</td>
                  <td className="border border-green-300 px-3 py-2">&gt;0.3R</td>
                </tr>
                <tr>
                  <td className="border border-green-300 px-3 py-2 font-medium">Expectancy</td>
                  <td className="border border-green-300 px-3 py-2">(Win% × AvgWin) - (Loss% × AvgLoss)</td>
                  <td className="border border-green-300 px-3 py-2">&gt;0</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-300 px-3 py-2 font-medium">Profit Factor</td>
                  <td className="border border-green-300 px-3 py-2">Gross Profit / Gross Loss</td>
                  <td className="border border-green-300 px-3 py-2">&gt;1.5</td>
                </tr>
                <tr>
                  <td className="border border-green-300 px-3 py-2 font-medium">Max Consecutive Losses</td>
                  <td className="border border-green-300 px-3 py-2">Longest losing streak</td>
                  <td className="border border-green-300 px-3 py-2">&lt;5 trades</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Sample journal template</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Trade Journal Entry Example</h3>
          <div className="bg-white p-4 rounded border text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p><strong>Date:</strong> March 15, 2024</p>
                <p><strong>Symbol:</strong> AAPL</p>
                <p><strong>Setup:</strong> Breakout above $175 resistance</p>
                <p><strong>Entry:</strong> $175.50 (100 shares)</p>
                <p><strong>Stop:</strong> $170.00</p>
                <p><strong>Target:</strong> $185.00</p>
                <p><strong>Exit:</strong> $182.25 (partial profit take)</p>
              </div>
              <div>
                <p><strong>Risk:</strong> $550 (1% of account)</p>
                <p><strong>P&L:</strong> +$675</p>
                <p><strong>R-Multiple:</strong> +1.2R</p>
                <p><strong>Tags:</strong> Breakout, Bull Market, Tech Sector</p>
                <p><strong>Market Context:</strong> SPY trending up, low VIX</p>
                <p><strong>Execution:</strong> Good—entered on breakout with volume</p>
                <p><strong>Lesson:</strong> Taking partial profits worked well</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Journal Success Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Write immediately:</strong> Log trades right after closing positions</li>
            <li>• <strong>Be honest:</strong> Include emotional state and mistakes</li>
            <li>• <strong>Focus on process:</strong> Good process with bad outcome is still success</li>
            <li>• <strong>Keep it simple:</strong> Don&apos;t over-complicate the system</li>
            <li>• <strong>Review regularly:</strong> Weekly reviews are more valuable than daily logging</li>
            <li>• <strong>Track everything:</strong> Even paper trades teach valuable lessons</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paper or app?</h3>
              <p className="text-gray-700">Whatever you&apos;ll actually use daily. Digital is easier to analyze, but paper can be more thoughtful. Consistency matters more than format.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should reviews take?</h3>
              <p className="text-gray-700">30–60 minutes weekly is enough. Focus on patterns and actionable improvements rather than reviewing every single trade in detail.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I journal winning trades too?</h3>
              <p className="text-gray-700">Absolutely. Understanding what works is as important as fixing what doesn&apos;t. Many traders accidentally stop doing what made them successful.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I don&apos;t have time to journal every trade?</h3>
              <p className="text-gray-700">Focus on significant trades—biggest wins, worst losses, and emotional trades. Quality analysis beats quantity of entries.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-backtest-trading-strategy" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Backtest Strategy</h3>
              <p className="text-sm text-blue-700 mt-1">Test before you trade</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-spot-and-avoid-bank-scams-and-phishing" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Security Guide →</h3>
              <p className="text-sm text-green-700 mt-1">Protect your accounts</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}