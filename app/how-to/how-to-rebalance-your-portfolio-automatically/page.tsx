import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automatic Rebalancing: Keep Your Portfolio on Target',
  description: 'Learn rules-based rebalancing using drift bands, recurring buys, or all-in-one ETFs/robo-advisors.',
}

export default function RebalancePortfolioAutomaticallyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Auto Rebalance Portfolio</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to rebalance your portfolio automatically</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn rules-based rebalancing using drift bands, recurring buys, or all-in-one ETFs/robo-advisors.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What is rebalancing?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-700">
            Rebalancing means returning your portfolio to your target allocation. If you want 60% stocks/40% bonds but growth pushes it to 70%/30%, you sell stocks and buy bonds to get back to 60%/40%.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Example: Portfolio Drift</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-medium text-yellow-700">Target Allocation</h4>
              <div className="mt-2">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-1">
                  60%
                </div>
                <p className="text-sm">Stocks</p>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-1 mt-2">
                  40%
                </div>
                <p className="text-sm">Bonds</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-yellow-700">After Market Growth</h4>
              <div className="mt-2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-1">
                  75%
                </div>
                <p className="text-sm">Stocks</p>
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-1 mt-2">
                  25%
                </div>
                <p className="text-sm">Bonds</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-yellow-700">After Rebalancing</h4>
              <div className="mt-2">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-1">
                  60%
                </div>
                <p className="text-sm">Stocks</p>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-1 mt-2">
                  40%
                </div>
                <p className="text-sm">Bonds</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Automatic rebalancing options</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">1. One-Ticket ETFs</h4>
            <p className="text-green-700 text-sm mb-3">Auto-rebalancing happens inside the fund</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Examples:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• VTHRX (Target Date)</li>
                <li>• VEQT (All-equity)</li>
                <li>• VBAL (Balanced)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">2. Robo-Advisors</h4>
            <p className="text-blue-700 text-sm mb-3">Set target mix; rebalances automatically</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Examples:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Wealthfront, Betterment</li>
                <li>• Vanguard Personal Advisor</li>
                <li>• Schwab Intelligent Portfolios</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibant text-purple-800 mb-3">3. DIY Rules</h4>
            <p className="text-purple-700 text-sm mb-3">Manual rules-based approach</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Methods:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• ±5% drift bands</li>
                <li>• Annual calendar date</li>
                <li>• New contributions first</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>DIY rebalancing strategies</h2>
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Strategy 1: Drift Bands (±5%)</h4>
            <div className="space-y-2 text-yellow-700 text-sm">
              <li><strong>Target:</strong> 60% stocks, 40% bonds</li>
              <li><strong>Rebalance when:</strong> Stocks hit 65%+ or 55%-</li>
              <li><strong>Action:</strong> Sell overweight, buy underweight</li>
              <li><strong>Frequency:</strong> Check monthly, rebalance as needed</li>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Strategy 2: Calendar Rebalancing</h4>
            <div className="space-y-2 text-blue-700 text-sm">
              <li><strong>Schedule:</strong> Same date annually (Jan 1, birthday)</li>
              <li><strong>Action:</strong> Rebalance regardless of current allocation</li>
              <li><strong>Pros:</strong> Simple, consistent</li>
              <li><strong>Cons:</strong> May rebalance unnecessarily</li>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibant text-green-800 mb-3">Strategy 3: New Money First</h4>
            <div className="space-y-2 text-green-700 text-sm">
              <li><strong>Method:</strong> Direct new contributions to underweight assets</li>
              <li><strong>Example:</strong> If stocks are overweight, buy only bonds with new money</li>
              <li><strong>Benefit:</strong> No selling required, tax-efficient</li>
              <li><strong>Best for:</strong> Regular contributors with taxable accounts</li>
            </div>
          </div>
        </div>

        <h2>Tax-smart rebalancing tips</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Minimize Tax Impact</h3>
          <ol className="text-red-700 space-y-2">
            <li><strong>Use new contributions first</strong> – Avoid selling appreciated assets</li>
            <li><strong>Prioritize tax-advantaged accounts</strong> – IRA/401k for sells, taxable for buys</li>
            <li><strong>Harvest losses</strong> – Sell losers in taxable accounts to offset gains</li>
            <li><strong>Consider asset location</strong> – Hold tax-inefficient funds in tax-advantaged accounts</li>
            <li><strong>Time your rebalancing</strong> – Wait for long-term capital gains rates (1+ year)</li>
          </ol>
        </div>

        <h2>Rebalancing frequency comparison</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Frequency</th>
                <th className="border border-gray-300 px-3 py-2">Pros</th>
                <th className="border border-gray-300 px-3 py-2">Cons</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Monthly</td>
                <td className="border border-gray-300 px-3 py-2">Quick corrections</td>
                <td className="border border-gray-300 px-3 py-2">Overtrading, taxes</td>
                <td className="border border-gray-300 px-3 py-2">Tax-advantaged only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Quarterly</td>
                <td className="border border-gray-300 px-3 py-2">Regular maintenance</td>
                <td className="border border-gray-300 px-3 py-2">Still frequent</td>
                <td className="border border-gray-300 px-3 py-2">Active managers</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Annually</td>
                <td className="border border-gray-300 px-3 py-2">Simple, tax-friendly</td>
                <td className="border border-gray-300 px-3 py-2">May miss big drifts</td>
                <td className="border border-gray-300 px-3 py-2">Most investors</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Threshold</td>
                <td className="border border-gray-300 px-3 py-2">Only when needed</td>
                <td className="border border-gray-300 px-3 py-2">Requires monitoring</td>
                <td className="border border-gray-300 px-3 py-2">Experienced investors</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Setting up automatic rebalancing</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Implementation Steps</h3>
          <ol className="text-gray-700 space-y-3">
            <li>
              <strong>Choose your method:</strong>
              <ul className="mt-1 ml-4 space-y-1 text-sm">
                <li>• Easy: Target-date fund or robo-advisor</li>
                <li>• DIY: Set calendar reminders + rules</li>
              </ul>
            </li>
            <li>
              <strong>Set up monitoring:</strong>
              <ul className="mt-1 ml-4 space-y-1 text-sm">
                <li>• Track allocations in spreadsheet or app</li>
                <li>• Set alerts for 5%+ drift</li>
              </ul>
            </li>
            <li>
              <strong>Create action plan:</strong>
              <ul className="mt-1 ml-4 space-y-1 text-sm">
                <li>• Priority 1: Use new contributions</li>
                <li>• Priority 2: Rebalance in tax-advantaged accounts</li>
                <li>• Priority 3: Tax-loss harvest in taxable accounts</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I rebalance?</h3>
              <p className="text-gray-700">Annually or at drift thresholds—consistency matters more than frequency. Avoid over-rebalancing which increases taxes and fees.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will rebalancing hurt my returns?</h3>
              <p className="text-gray-700">It can slightly in raging bull markets, but it reduces risk and prevents major drawdowns. The behavioral benefit often outweighs small return costs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Should I rebalance during market crashes?</h3>
              <p className="text-gray-700">Yes—this forces you to "buy low, sell high." Crashes are when rebalancing provides the most value.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I can't afford to rebalance?</h3>
              <p className="text-gray-700">Use new contributions to buy underweight assets. Consider switching to target-date funds or adding more bonds to reduce volatility.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-dollar-cost-average-and-when-not-to" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Dollar-Cost Averaging</h3>
              <p className="text-sm text-blue-700 mt-1">How it works and when not to</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-avoid-common-beginner-investing-mistakes" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Avoid Investing Mistakes →</h3>
              <p className="text-sm text-green-700 mt-1">12 mistakes beginners make</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}