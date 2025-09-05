import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper Trading: Set It Up Right (Realistic Rules & Routines)',
  description: 'A realistic paper account template + habits to avoid bad fills and overconfidence.',
}

export default function PaperTradingSetupPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Paper Trading Setup</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">Paper Trading: Set It Up Right (Realistic Rules & Routines)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A realistic paper account template + habits to avoid bad fills and overconfidence.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">🎯 Why Paper Trading Matters</h3>
          <p className="text-green-700 mb-2">
            Paper trading isn't just for beginners—professional traders use simulators to test new strategies, 
            practice during volatile markets, and validate system changes without risking capital.
          </p>
        </div>

        <h2>Choose a platform</h2>
        
        <p><strong>Match to your live broker</strong> whenever possible. If you plan to trade with TD Ameritrade, use thinkorswim's Paper Money. Planning on Interactive Brokers? Use their Trader Workstation demo.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Platform Selection Criteria</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Same order entry interface as live account</li>
              <li>• Identical market data feeds (Level 1 vs Level 2)</li>
              <li>• Realistic execution simulation</li>
              <li>• Access to same asset classes (stocks, options, futures)</li>
              <li>• Mobile app functionality if needed</li>
              <li>• Charting tools and indicators you'll use live</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Market Data Requirements</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• Real-time quotes for active strategies</li>
              <li>• 15-minute delay acceptable for swing trading</li>
              <li>• Level 2 data if you trade momentum/scalping</li>
              <li>• TotalView for full order book practice</li>
              <li>• After-hours data for gap strategies</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://www.nasdaq.com/solutions/nasdaq-totalview" className="text-purple-600 hover:underline" target="_blank" rel="noopener">Nasdaq TotalView Details</a>
            </div>
          </div>
        </div>

        <h2>Configure realism</h2>
        
        <p>The biggest mistake in paper trading is unrealistic settings that give false confidence. Configure your simulator to mirror real-world conditions:</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Setting</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Realistic Configuration</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Starting Capital</td>
                <td className="border border-gray-300 px-3 py-2">Match your actual available funds</td>
                <td className="border border-gray-300 px-3 py-2">Practice proper position sizing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Commissions</td>
                <td className="border border-gray-300 px-3 py-2">$0 stocks, $0.50-0.65 options contracts</td>
                <td className="border border-gray-300 px-3 py-2">Account for real trading costs</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Slippage</td>
                <td className="border border-gray-300 px-3 py-2">1-3 cents on liquid stocks, more on illiquid</td>
                <td className="border border-gray-300 px-3 py-2">Market orders rarely get perfect fills</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Reject Orders</td>
                <td className="border border-gray-300 px-3 py-2">Enable for illiquid stocks/bad prices</td>
                <td className="border border-gray-300 px-3 py-2">Not every order fills in real markets</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Buying Power</td>
                <td className="border border-gray-300 px-3 py-2">Match margin requirements (2:1 or 4:1)</td>
                <td className="border border-gray-300 px-3 py-2">Learn margin rules and day trading limits</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Short Availability</td>
                <td className="border border-gray-300 px-3 py-2">Limit hard-to-borrow stocks</td>
                <td className="border border-gray-300 px-3 py-2">Not all stocks are shortable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Unrealistic Settings to Avoid</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Perfect fills:</strong> Every market order at exact bid/ask</li>
            <li>• <strong>No commissions:</strong> Ignoring real costs</li>
            <li>• <strong>Unlimited buying power:</strong> Unrealistic capital</li>
            <li>• <strong>Instant execution:</strong> No network delays</li>
            <li>• <strong>Always able to short:</strong> Hard-to-borrow stocks available</li>
          </ul>
        </div>

        <h2>Track results</h2>
        
        <p>The goal isn't just to make paper profits—it's to develop systems and habits that work with real money.</p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Pre-Trade Checklist</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Why am I entering this trade?</li>
              <li>• What's my exact entry trigger?</li>
              <li>• Where will I take profits?</li>
              <li>• What's my stop-loss level?</li>
              <li>• How much am I risking?</li>
              <li>• What's my risk/reward ratio?</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">During the Trade</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Did my entry execute as planned?</li>
              <li>• Am I managing emotions properly?</li>
              <li>• Is the trade thesis still valid?</li>
              <li>• Should I adjust my stop-loss?</li>
              <li>• Am I following my plan?</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Post-Trade Review</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• What went right/wrong?</li>
              <li>• Did I follow my rules?</li>
              <li>• Was entry timing optimal?</li>
              <li>• How can I improve next time?</li>
              <li>• Was position size appropriate?</li>
            </ul>
          </div>
        </div>

        <h2>Journal templates</h2>
        
        <p>Keep detailed records to identify patterns and improve your trading:</p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Essential Trade Log Fields</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Basic Trade Data</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Date and time of entry/exit</li>
                <li>• Symbol and quantity</li>
                <li>• Entry and exit prices</li>
                <li>• P&L (dollars and percentage)</li>
                <li>• Commission costs</li>
                <li>• Position hold time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Strategy Analysis</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Trade setup/strategy used</li>
                <li>• Market conditions</li>
                <li>• Risk/reward ratio planned vs actual</li>
                <li>• Emotion/confidence level (1-10)</li>
                <li>• Lessons learned</li>
                <li>• Screenshots of charts</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Monthly review routine</h2>
        
        <p>Review your paper trading results monthly to build good habits before risking real money:</p>

        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Calculate key metrics</p>
              <p className="text-gray-600 text-sm">Win rate, average win/loss, profit factor, maximum drawdown, Sharpe ratio if possible.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Identify pattern strengths</p>
              <p className="text-gray-600 text-sm">Which setups worked best? What market conditions favor your style?</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Spot recurring mistakes</p>
              <p className="text-gray-600 text-sm">Emotional trading, poor entries, not following stops, position sizing errors.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Refine your rules</p>
              <p className="text-gray-600 text-sm">Update your trading plan based on what you've learned.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Set next month's goals</p>
              <p className="text-gray-600 text-sm">Focus on process goals (following rules) over profit goals.</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">🚨 Paper Trading Pitfalls</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Overconfidence from perfect fills:</strong> Real trading has slippage and delays</li>
            <li>• <strong>Ignoring psychology:</strong> Real money creates different emotional pressure</li>
            <li>• <strong>Unrealistic position sizes:</strong> Trading larger than you could with real capital</li>
            <li>• <strong>Perfect timing:</strong> Paper trading often allows perfect entry/exit timing</li>
            <li>• <strong>No liquidity constraints:</strong> Large orders may not fill in real markets</li>
            <li>• <strong>Skipping the journal:</strong> Missing the opportunity to build good habits</li>
          </ul>
        </div>

        <h2>Transition to live trading</h2>
        
        <p>When should you make the switch? Look for consistent profitability over at least 3 months, disciplined execution of your trading plan, and proper risk management habits.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Ready to Go Live</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• 3+ months of consistent paper profits</li>
              <li>• Following your trading plan 90%+ of time</li>
              <li>• Proper position sizing and risk management</li>
              <li>• Detailed trading journal maintained</li>
              <li>• Comfortable with platform and tools</li>
              <li>• Capital you can afford to lose</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Stay on Paper</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Inconsistent results or frequent losses</li>
              <li>• Emotional trading or revenge trading</li>
              <li>• Not following stop-losses or trading plan</li>
              <li>• Poor risk management or oversizing</li>
              <li>• Still learning the platform</li>
              <li>• Can't afford the capital risk</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Even experienced traders return to paper trading when testing new strategies, trading in new market conditions, 
            or after a string of losses. There's no shame in stepping back to practice—it's a sign of discipline.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should I paper trade before going live?</h3>
              <p className="text-gray-700">
                Minimum 3 months of consistent results, but many traders benefit from 6-12 months. 
                Focus on consistency and discipline rather than arbitrary time periods.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I paper trade the exact same dollar amounts I'll trade live?</h3>
              <p className="text-gray-700">
                Yes—use position sizes you can actually afford. This teaches proper risk management and 
                prevents overconfidence from unrealistic position sizing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my paper trading results are too good to be true?</h3>
              <p className="text-gray-700">
                They probably are. Check your settings for unrealistic fills, no slippage, or perfect timing. 
                Real trading includes costs and imperfections that paper trading often ignores.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I skip paper trading if I'm experienced in other markets?</h3>
              <p className="text-gray-700">
                No—different markets have different characteristics. Even forex traders should paper trade stocks 
                first to understand settlement, margin rules, and execution differences.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/choose-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose Your Broker First</h3>
              <p className="text-sm text-blue-700 mt-1">Match your paper trading platform to your intended live broker</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/level-2-quotes-time-and-sales" 
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900">Level 2 Data & Order Flow →</h3>
              <p className="text-sm text-purple-700 mt-1">Advanced tools for serious paper traders</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}