import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Invest in Inside TFSA, RRSP, 401(k) or IRA (Simple Portfolio)',
  description: 'Build a low-cost, diversified portfolio inside tax-advantaged accounts. Learn asset allocation by goal and choose index ETFs or funds with clear rules.',
}

export default function InvestInsideRetirementAccountsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Invest Inside Retirement Accounts</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">What to invest in inside TFSA/RRSP/401(k)/IRA</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Build a low-cost, diversified portfolio inside tax-advantaged accounts. Learn asset allocation by goal and choose index ETFs or funds with clear rules.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Core principles</h2>
        
        <p>Tax-advantaged accounts are ideal for long-term wealth building. Keep it simple with broad diversification and low costs.</p>

        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Asset allocation first</p>
              <p className="text-gray-600 text-sm">Decide your stock/bond mix based on time horizon and risk tolerance</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Use broad, low-cost index funds/ETFs</p>
              <p className="text-gray-600 text-sm">Capture market returns with minimal fees and maximum diversification</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Automate contributions and rebalancing</p>
              <p className="text-gray-600 text-sm">Remove emotions and maintain target allocation over time</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Stay the course</p>
              <p className="text-gray-600 text-sm">Avoid frequent changes and market timing attempts</p>
            </div>
          </div>
        </div>

        <h2>Asset allocation by time horizon</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Time to Retirement</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Conservative</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Moderate</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aggressive</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">30+ years</td>
                <td className="border border-gray-300 px-3 py-2">80% stocks, 20% bonds</td>
                <td className="border border-gray-300 px-3 py-2">90% stocks, 10% bonds</td>
                <td className="border border-gray-300 px-3 py-2">100% stocks</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">15-30 years</td>
                <td className="border border-gray-300 px-3 py-2">70% stocks, 30% bonds</td>
                <td className="border border-gray-300 px-3 py-2">80% stocks, 20% bonds</td>
                <td className="border border-gray-300 px-3 py-2">90% stocks, 10% bonds</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">5-15 years</td>
                <td className="border border-gray-300 px-3 py-2">50% stocks, 50% bonds</td>
                <td className="border border-gray-300 px-3 py-2">70% stocks, 30% bonds</td>
                <td className="border border-gray-300 px-3 py-2">80% stocks, 20% bonds</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">&lt;5 years</td>
                <td className="border border-gray-300 px-3 py-2">30% stocks, 70% bonds</td>
                <td className="border border-gray-300 px-3 py-2">50% stocks, 50% bonds</td>
                <td className="border border-gray-300 px-3 py-2">60% stocks, 40% bonds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Simple portfolio options</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">One-Fund Solution</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Target-Date Funds</p>
                <p className="text-green-700 text-sm">Automatically adjusts allocation as you age (e.g., Target 2060)</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Balanced/All-in-One ETFs</p>
                <p className="text-green-700 text-sm">Fixed allocation across global stocks and bonds</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Examples</p>
                <p className="text-green-700 text-sm">US: Vanguard Target Date, Fidelity Freedom; Canada: Vanguard All-in-One ETFs (VGRO, VBAL)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Three-Fund Portfolio</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">US/Home Country Equity (40-70%)</p>
                <p className="text-blue-700 text-sm">Total Stock Market or S&P 500 index fund</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">International Equity (20-40%)</p>
                <p className="text-blue-700 text-sm">Developed + emerging markets</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Bonds (10-50%)</p>
                <p className="text-blue-700 text-sm">Total bond market or aggregate bond index</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Recommended funds by region</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-xs">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-2 py-1 text-left">Asset Class</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Vanguard</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Fidelity</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Schwab</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1 font-medium">US Total Market</td>
                    <td className="border border-gray-300 px-2 py-1">VTSAX/VTI</td>
                    <td className="border border-gray-300 px-2 py-1">FZROX/FSKAX</td>
                    <td className="border border-gray-300 px-2 py-1">SWTSX/SCHB</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-medium">International</td>
                    <td className="border border-gray-300 px-2 py-1">VTIAX/VXUS</td>
                    <td className="border border-gray-300 px-2 py-1">FTIHX/FZILX</td>
                    <td className="border border-gray-300 px-2 py-1">SWISX/SCHF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1 font-medium">Bonds</td>
                    <td className="border border-gray-300 px-2 py-1">VBTLX/BND</td>
                    <td className="border border-gray-300 px-2 py-1">FXNAX/FSKAX</td>
                    <td className="border border-gray-300 px-2 py-1">SWAGX/SCHZ</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-medium">Target Date</td>
                    <td className="border border-gray-300 px-2 py-1">VFFVX series</td>
                    <td className="border border-gray-300 px-2 py-1">FDVV series</td>
                    <td className="border border-gray-300 px-2 py-1">SWYJX series</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-xs">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-2 py-1 text-left">Asset Class</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Vanguard</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">iShares</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">TD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1 font-medium">Canadian Equity</td>
                    <td className="border border-gray-300 px-2 py-1">VTI</td>
                    <td className="border border-gray-300 px-2 py-1">ITOT</td>
                    <td className="border border-gray-300 px-2 py-1">TDB902</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-medium">US Equity</td>
                    <td className="border border-gray-300 px-2 py-1">VTI</td>
                    <td className="border border-gray-300 px-2 py-1">ITOT</td>
                    <td className="border border-gray-300 px-2 py-1">TDB902</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1 font-medium">International</td>
                    <td className="border border-gray-300 px-2 py-1">VEA</td>
                    <td className="border border-gray-300 px-2 py-1">IEFA</td>
                    <td className="border border-gray-300 px-2 py-1">TDB911</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-medium">All-in-One</td>
                    <td className="border border-gray-300 px-2 py-1">VGRO/VBAL</td>
                    <td className="border border-gray-300 px-2 py-1">XGRO/XBAL</td>
                    <td className="border border-gray-300 px-2 py-1">TDBG/TDBALANCE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2>Tax-efficient fund placement</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Tax-Advantaged Accounts</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Bonds and bond funds:</strong> Interest taxed as ordinary income</li>
              <li>• <strong>REITs:</strong> High dividend yields, taxed heavily</li>
              <li>• <strong>International stocks:</strong> Dividend withholding considerations</li>
              <li>• <strong>Actively managed funds:</strong> Generate more taxable distributions</li>
              <li>• <strong>High-turnover strategies:</strong> Create short-term capital gains</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Taxable Accounts</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Tax-efficient index funds:</strong> Low turnover, minimal distributions</li>
              <li>• <strong>Individual stocks:</strong> Control timing of capital gains</li>
              <li>• <strong>Tax-managed funds:</strong> Designed for tax efficiency</li>
              <li>• <strong>Municipal bonds:</strong> Tax-free interest (US)</li>
              <li>• <strong>Growth-focused investments:</strong> Unrealized gains not taxed</li>
            </ul>
          </div>
        </div>

        <h2>Rebalancing strategy</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">When to Rebalance</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-yellow-800">Calendar-based</p>
                <p className="text-yellow-700 text-sm">Annually or semi-annually on set dates</p>
              </div>
              <div>
                <p className="font-medium text-yellow-800">Threshold-based</p>
                <p className="text-yellow-700 text-sm">When any asset class drifts 5-10% from target</p>
              </div>
              <div>
                <p className="font-medium text-yellow-800">New money rebalancing</p>
                <p className="text-yellow-700 text-sm">Direct new contributions to underweight assets</p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Rebalancing Methods</h4>
            <div className="space-y-2">
              <p className="text-cyan-700 text-sm"><strong>Sell high, buy low:</strong> Trim overweight assets, add to underweight</p>
              <p className="text-cyan-700 text-sm"><strong>Contribution rebalancing:</strong> Direct new money to restore balance</p>
              <p className="text-cyan-700 text-sm"><strong>Tax-loss harvesting:</strong> Use losses in taxable accounts to offset rebalancing gains</p>
            </div>
          </div>
        </div>

        <h2>Common mistakes to avoid</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Portfolio Pitfalls</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Over-diversification:</strong> Owning 20+ similar funds that overlap</li>
            <li>• <strong>Home country bias:</strong> Not enough international diversification</li>
            <li>• <strong>Chasing performance:</strong> Switching to last year's winners</li>
            <li>• <strong>High fees:</strong> Actively managed funds eating returns</li>
            <li>• <strong>Market timing:</strong> Trying to time entry and exit points</li>
            <li>• <strong>Emotional decisions:</strong> Selling during downturns, buying at peaks</li>
          </ul>
        </div>

        <h2>Special considerations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Individual Stocks and "Satellite" Holdings</h4>
            <div className="space-y-2">
              <p className="text-orange-700 text-sm">Keep individual stocks to 5-10% maximum of portfolio</p>
              <p className="text-orange-700 text-sm">Consider company stock from employer as part of this allocation</p>
              <p className="text-orange-700 text-sm">Sector-specific ETFs are also "satellite" holdings</p>
              <p className="text-orange-700 text-sm">Core index funds should be 80-90% of holdings</p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Alternative Investments</h4>
            <div className="space-y-2">
              <p className="text-indigo-700 text-sm"><strong>REITs:</strong> 5-10% allocation for real estate exposure</p>
              <p className="text-indigo-700 text-sm"><strong>Commodities:</strong> Small allocation for inflation protection</p>
              <p className="text-indigo-700 text-sm"><strong>Cryptocurrency:</strong> Maximum 5%, treat as speculative</p>
              <p className="text-indigo-700 text-sm"><strong>Remember:</strong> Alternatives often increase complexity without improving returns</p>
            </div>
          </div>
        </div>

        <h2>Glidepath strategy</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">Age-Based Allocation Shift</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Traditional rule: 120 - your age = stock %</p>
              <p className="text-green-700 text-sm">30 years old = 90% stocks; 50 years old = 70% stocks</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Modern version: Shift 1-2% per year</p>
              <p className="text-green-700 text-sm">More gradual decline accommodates longer lifespans</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Target date funds automate this</p>
              <p className="text-green-700 text-sm">Professionally managed glidepaths with automatic rebalancing</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Start simple:</strong> One target-date fund is better than analysis paralysis</li>
            <li>• <strong>Focus on costs:</strong> Every 0.1% in fees costs thousands over decades</li>
            <li>• <strong>Automate everything:</strong> Contributions, rebalancing, increases</li>
            <li>• <strong>Ignore daily noise:</strong> Check accounts monthly at most</li>
            <li>• <strong>Stay disciplined:</strong> Stick to your plan through market volatility</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are individual stocks okay in retirement accounts?</h3>
              <p className="text-gray-700">
                If you must own individual stocks, limit them to 5-10% of your portfolio and treat them as "satellite" 
                holdings around a core of broad index funds. Most investors are better served with diversified funds.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I rebalance?</h3>
              <p className="text-gray-700">
                Annually is sufficient for most investors, or when any asset class drifts more than 5-10% from target. 
                More frequent rebalancing rarely improves returns and can increase trading costs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I include crypto and alternatives?</h3>
              <p className="text-gray-700">
                Keep speculative investments small (under 5%) and understand the custody and tax rules. 
                Traditional asset classes provide better risk-adjusted returns for most retirement portfolios.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's better: target-date funds or building my own?</h3>
              <p className="text-gray-700">
                Target-date funds are excellent for most investors—professional management, automatic rebalancing, 
                and age-appropriate allocations. Build your own only if you want more control and will maintain discipline.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-roll-over-a-401k-pension-when-you-change-jobs" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Rollover When Changing Jobs</h3>
              <p className="text-sm text-teal-700 mt-1">Move retirement accounts safely</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-create-a-retirement-income-withdrawal-plan" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Create Withdrawal Plan →</h3>
              <p className="text-sm text-teal-700 mt-1">Turn savings into retirement income</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}