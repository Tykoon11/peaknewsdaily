import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Trade Earnings Season Safely',
  description: 'Earnings are volatile. Learn safe ways to trade or avoid them: calendars, gaps, spreads, hedges, and risk caps that protect your account.',
}

export default function TradeEarningsSeasonPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Trade Earnings Safely</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to trade earnings season safely</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Navigate earnings volatility with proven strategies that protect capital while capturing opportunities.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">The Earnings Reality Check</h2>
          <p className="text-red-700 mb-3">
            Even &quot;good&quot; earnings can cause stocks to drop 10-20%. Even great companies miss estimates. Earnings are the highest-risk events in trading.
          </p>
          <p className="text-red-600 text-sm">
            Professional traders often reduce position sizes by 50-75% during earnings season.
          </p>
        </div>

        <h2>The risks: gaps, slippage, IV crush</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Gap Risk</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Stocks can gap 5-15% overnight</li>
              <li>• Stop-losses don&apos;t work on gaps</li>
              <li>• Even &quot;good&quot; news can cause drops</li>
              <li>• Guidance matters more than results</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Slippage</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Bid-ask spreads widen dramatically</li>
              <li>• Market orders get terrible fills</li>
              <li>• Liquidity disappears at key levels</li>
              <li>• Extended hours amplify the problem</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">IV Crush</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• Volatility premium evaporates post-earnings</li>
              <li>• Options lose value even if you&apos;re right on direction</li>
              <li>• Affects stock traders through option-heavy names</li>
              <li>• Most severe in high-IV stocks</li>
            </ul>
          </div>
        </div>

        <h2>Playbook A: Sit out—close before earnings, reopen after</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">The Conservative Approach</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>Strategy:</strong> Exit positions 1-3 days before earnings, wait for volatility to settle</p>
            
            <p><strong>Timeline:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• T-3: Begin reducing position sizes</li>
              <li>• T-1: Close all positions in earnings stocks</li>
              <li>• T+1: Wait for initial reaction to settle</li>
              <li>• T+2: Consider re-entry if setup remains valid</li>
            </ul>
            
            <p><strong>Benefits:</strong> Sleep well, avoid gap risk, preserve capital</p>
            <p><strong>Drawbacks:</strong> Miss big moves, lose momentum trades</p>
          </div>
        </div>

        <h2>Playbook B: Small size + wide stops + predefined max loss</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">The Controlled Risk Approach</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Position Sizing:</strong> Reduce normal size by 50-75%</p>
            
            <p><strong>Risk Management Rules:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Maximum 0.5-1% account risk per earnings play</li>
              <li>• Set stop-loss at 15-20% (wider than normal)</li>
              <li>• Use limit orders only—no market orders</li>
              <li>• Pre-define maximum total loss for the day</li>
            </ul>
            
            <p><strong>Entry Criteria:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Strong technical setup (breakout, pullback)</li>
              <li>• Clear support/resistance levels</li>
              <li>• Stock in strong sector/theme</li>
              <li>• Positive pre-earnings momentum</li>
            </ul>
          </div>
        </div>

        <h2>ETF alternatives to avoid single-name risk</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Sector Play Strategy</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>Concept:</strong> Trade sector ETFs during earnings season instead of individual stocks</p>
            
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-yellow-300">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="border border-yellow-300 px-2 py-1 text-left">Sector</th>
                    <th className="border border-yellow-300 px-2 py-1 text-left">ETF</th>
                    <th className="border border-yellow-300 px-2 py-1 text-left">Earnings Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-yellow-300 px-2 py-1">Technology</td>
                    <td className="border border-yellow-300 px-2 py-1">XLK</td>
                    <td className="border border-yellow-300 px-2 py-1">FAANG earnings season</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-yellow-300 px-2 py-1">Banks</td>
                    <td className="border border-yellow-300 px-2 py-1">XLF</td>
                    <td className="border border-yellow-300 px-2 py-1">Q4 bank earnings</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-300 px-2 py-1">Retail</td>
                    <td className="border border-yellow-300 px-2 py-1">XRT</td>
                    <td className="border border-yellow-300 px-2 py-1">Holiday earnings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p><strong>Advantages:</strong> Diversified risk, no single-stock gaps, more predictable</p>
          </div>
        </div>

        <h2>Post-earnings drift and follow-through</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">The Post-Earnings Edge</h3>
          <div className="text-purple-700 space-y-3">
            <p><strong>Phenomenon:</strong> Stocks often continue moving in the direction of the initial earnings reaction for 1-5 days</p>
            
            <p><strong>High-Probability Setups:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Strong earnings beat + guidance raise = continuation higher</li>
              <li>• Earnings miss + guidance cut = continuation lower</li>
              <li>• Breakout confirmation after earnings gap</li>
              <li>• Volume confirmation on follow-through days</li>
            </ul>
            
            <p><strong>Entry Rules:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Wait for initial volatility to calm (T+1 or T+2)</li>
              <li>• Look for pullback to support after gap higher</li>
              <li>• Use normal position sizing (volatility has decreased)</li>
              <li>• Set stops below post-earnings low/high</li>
            </ul>
          </div>
        </div>

        <h2>Calendar planning and watchlist</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Earnings Calendar Strategy</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Week Before Earnings</h4>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Identify all earnings dates in your watchlist</li>
                <li>• Mark key reporting dates on calendar</li>
                <li>• Decide exit strategy for each position</li>
                <li>• Prepare post-earnings re-entry levels</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700">Earnings Week</h4>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Check after-hours earnings announcements daily</li>
                <li>• Monitor guidance and management commentary</li>
                <li>• Track sector rotation patterns</li>
                <li>• Update watchlist with new opportunities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700">Post-Earnings</h4>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Scan for continuation patterns</li>
                <li>• Look for oversold bounces or breakdowns</li>
                <li>• Update fundamental thesis if needed</li>
                <li>• Plan next quarter&apos;s earnings approach</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Earnings Season Don&apos;ts</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Don&apos;t use market orders</strong> during earnings—spreads are too wide</li>
            <li>• <strong>Don&apos;t chase gaps</strong>—wait for pullbacks or continuation patterns</li>
            <li>• <strong>Don&apos;t ignore guidance</strong>—it matters more than past quarter results</li>
            <li>• <strong>Don&apos;t scale into losers</strong>—fundamental thesis may have changed</li>
            <li>• <strong>Don&apos;t trade every earnings</strong>—be selective and patient</li>
          </ul>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Earnings Trading Toolkit</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Essential Resources</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Earnings calendar (Yahoo Finance, Investing.com)</li>
                <li>• Earnings whisper numbers (Street consensus)</li>
                <li>• Options implied volatility data</li>
                <li>• Sector rotation heat maps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Key Metrics to Track</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Revenue growth vs. estimates</li>
                <li>• Forward guidance changes</li>
                <li>• Management commentary tone</li>
                <li>• Post-earnings analyst upgrades/downgrades</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should beginners hold through earnings?</h3>
              <p className="text-gray-700">Usually no. The risk-reward is poor for inexperienced traders. Start with the &quot;sit out&quot; approach until you understand earnings dynamics.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are ETFs safer during earnings season?</h3>
              <p className="text-gray-700">Yes, diversification reduces single-stock risk. Sector ETFs still move on major earnings, but with less extreme volatility than individual names.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When is the best time to re-enter after earnings?</h3>
              <p className="text-gray-700">Typically 1-3 days after the announcement, once initial volatility settles and you can see the true direction of follow-through.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I find earnings dates for my watchlist?</h3>
              <p className="text-gray-700">Most broker platforms show earnings dates. Free sources include Yahoo Finance, Investing.com, and Earnings Whispers for comprehensive calendars.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-scan-for-high-probability-setups" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Stock Scanning</h3>
              <p className="text-sm text-blue-700 mt-1">Find high-probability setups</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-manage-risk-per-trade" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Risk Management →</h3>
              <p className="text-sm text-green-700 mt-1">Position sizing fundamentals</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}