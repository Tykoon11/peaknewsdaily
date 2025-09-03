import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Trade ETFs vs Individual Stocks',
  description: 'ETFs vs stocks: when to choose diversification, how to assess liquidity and spreads, and the strategies that work best for each.',
}

export default function TradeETFsVsStocksPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">ETFs vs Stocks</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            ⚖️
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to trade ETFs vs individual stocks</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Choose the right instrument for your strategy: diversified ETFs or focused individual stock plays.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Pros/cons of ETFs</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">ETF Advantages</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Instant diversification:</strong> One purchase = hundreds of stocks</li>
              <li>• <strong>Lower gap risk:</strong> No single-company news events</li>
              <li>• <strong>Predictable behavior:</strong> Follows sector/market trends</li>
              <li>• <strong>Tax efficiency:</strong> In-kind redemptions minimize distributions</li>
              <li>• <strong>Lower volatility:</strong> Smoother price action</li>
              <li>• <strong>Professional management:</strong> Index methodology handles rebalancing</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">ETF Disadvantages</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• <strong>Limited upside:</strong> Can&apos;t capture individual stock moonshots</li>
              <li>• <strong>Tracking error:</strong> May not perfectly match index</li>
              <li>• <strong>Expense ratios:</strong> Annual fees (though typically low)</li>
              <li>• <strong>Sector concentration:</strong> Some ETFs heavily weighted in few names</li>
              <li>• <strong>Less control:</strong> Can&apos;t avoid specific companies</li>
            </ul>
          </div>
        </div>

        <h2>Liquidity: underlying vs on-screen volume</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">ETF Liquidity Truth</h3>
          <p className="text-blue-700 mb-3">
            ETF liquidity comes from two sources: on-screen trading volume AND the liquidity of underlying holdings.
          </p>
          <p className="text-blue-600 text-sm">
            A &quot;low volume&quot; ETF holding liquid stocks (like SPY components) can still trade efficiently through the creation/redemption process.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Liquidity Assessment</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Factor</th>
                  <th className="border border-gray-300 px-3 py-2">Major ETFs</th>
                  <th className="border border-gray-300 px-3 py-2">Niche ETFs</th>
                  <th className="border border-gray-300 px-3 py-2">Individual Stocks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Daily Volume</td>
                  <td className="border border-gray-300 px-3 py-2">50M+ shares</td>
                  <td className="border border-gray-300 px-3 py-2">100K-1M shares</td>
                  <td className="border border-gray-300 px-3 py-2">Highly variable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Bid-Ask Spread</td>
                  <td className="border border-gray-300 px-3 py-2">$0.01</td>
                  <td className="border border-gray-300 px-3 py-2">$0.02-0.10</td>
                  <td className="border border-gray-300 px-3 py-2">$0.01-0.50+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Market Impact</td>
                  <td className="border border-gray-300 px-3 py-2">Minimal</td>
                  <td className="border border-gray-300 px-3 py-2">Low-moderate</td>
                  <td className="border border-gray-300 px-3 py-2">High for large orders</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">After-Hours</td>
                  <td className="border border-gray-300 px-3 py-2">Good liquidity</td>
                  <td className="border border-gray-300 px-3 py-2">Limited</td>
                  <td className="border border-gray-300 px-3 py-2">Varies widely</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Strategies that fit ETFs</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Trend Following</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Why ETFs work:</strong> Smooth, persistent trends without single-stock noise</p>
              <p><strong>Best timeframes:</strong> Daily, weekly charts</p>
              <p><strong>Example setups:</strong> SPY breakouts, sector rotation plays</p>
              <p><strong>Risk management:</strong> Clean support/resistance levels</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Swing Trading</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Why ETFs work:</strong> Predictable mean reversion, lower gap risk</p>
              <p><strong>Hold periods:</strong> 2-10 days typically</p>
              <p><strong>Example setups:</strong> Oversold bounces, range breakouts</p>
              <p><strong>Popular choices:</strong> QQQ, IWM, XLK, XLF</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Asset Rotation</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>Why ETFs work:</strong> Pure sector/style exposure without stock-picking</p>
              <p><strong>Strategy:</strong> Relative strength rotation between sectors</p>
              <p><strong>Example:</strong> Tech (XLK) to Energy (XLE) to Financials (XLF)</p>
              <p><strong>Timeframe:</strong> Medium-term, 1-6 month holds</p>
            </div>
          </div>
        </div>

        <h2>When individual stocks are better</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Individual Stock Advantages</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Earnings plays:</strong> Binary events with large moves</li>
            <li>• <strong>News-driven momentum:</strong> FDA approvals, partnerships, etc.</li>
            <li>• <strong>Technical breakouts:</strong> Clean chart patterns</li>
            <li>• <strong>Relative strength:</strong> Outperforming their sector</li>
            <li>• <strong>Specific catalyst timing:</strong> Product launches, analyst upgrades</li>
            <li>• <strong>Higher volatility:</strong> Bigger profit potential per trade</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Individual Stock Risks</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Gap risk:</strong> Overnight news can create 10-20% gaps</li>
            <li>• <strong>Earnings uncertainty:</strong> Even good companies miss estimates</li>
            <li>• <strong>Liquidity issues:</strong> Wide spreads in smaller names</li>
            <li>• <strong>Company-specific risk:</strong> Fraud, management changes, lawsuits</li>
            <li>• <strong>Sector correlation:</strong> When sector falls, individual stocks usually follow</li>
          </ul>
        </div>

        <h2>Costs: expense ratios &amp; hidden spreads</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">True Cost Comparison</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">ETF Costs</h4>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Expense ratio: 0.03-0.75% annually</li>
                <li>• Bid-ask spread: $0.01-0.10 per trade</li>
                <li>• Premium/discount to NAV: Usually &lt;0.05%</li>
                <li>• No individual stock commission per holding</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700">Individual Stock Costs</h4>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Commission: $0 at most major brokers</li>
                <li>• Bid-ask spread: $0.01-0.50+ per trade</li>
                <li>• Market impact: Higher on large orders</li>
                <li>• Research costs: Time to analyze each company</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Popular Trading ETFs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Broad Market</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• SPY - S&P 500</li>
                <li>• QQQ - Nasdaq 100</li>
                <li>• IWM - Russell 2000</li>
                <li>• VTI - Total Stock Market</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Sector Specific</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• XLK - Technology</li>
                <li>• XLF - Financials</li>
                <li>• XLE - Energy</li>
                <li>• XLV - Healthcare</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Strategy selection framework</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Decision Tree</h3>
          <div className="space-y-4 text-purple-700">
            <div>
              <p><strong>Choose ETFs when:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• New to trading (lower risk)</li>
                <li>• Playing broad market themes</li>
                <li>• Want overnight holding comfort</li>
                <li>• Limited time for individual stock research</li>
                <li>• Account size &lt;$25K (fewer day trade restrictions)</li>
              </ul>
            </div>
            
            <div>
              <p><strong>Choose individual stocks when:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Specific catalyst/news play</li>
                <li>• Earnings season opportunities</li>
                <li>• Strong relative strength vs sector</li>
                <li>• Clean technical setup</li>
                <li>• Willing to accept higher risk for higher reward</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Blended Approach</h3>
          <div className="text-green-700 space-y-2">
            <p><strong>Core-Satellite Strategy:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• 70-80% in broad market ETFs (core positions)</li>
              <li>• 20-30% in individual stock plays (satellite positions)</li>
              <li>• Reduces overall risk while maintaining upside potential</li>
              <li>• ETFs provide steady base, stocks add alpha opportunities</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is low ETF volume a problem?</h3>
              <p className="text-gray-700">Not necessarily. Check the liquidity of underlying holdings. ETFs holding liquid stocks can trade efficiently even with lower on-screen volume through creation/redemption.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use stops on ETFs the same way as stocks?</h3>
              <p className="text-gray-700">Yes, same mechanics apply. ETFs often have smoother price action, making stop-losses more predictable than individual stocks.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do ETFs move independently or just follow the market?</h3>
              <p className="text-gray-700">Sector and style ETFs can have significant independent movement. Technology ETFs may outperform when tech is favored, even in flat markets.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should beginners start with ETFs or stocks?</h3>
              <p className="text-gray-700">ETFs are generally better for beginners due to built-in diversification, lower volatility, and reduced company-specific risk. Master ETF trading first.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-avoid-pdt-violations" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Avoid PDT Violations</h3>
              <p className="text-sm text-blue-700 mt-1">Pattern day trader rules</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-backtest-trading-strategy" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Backtest Strategy →</h3>
              <p className="text-sm text-green-700 mt-1">Test before you trade</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}