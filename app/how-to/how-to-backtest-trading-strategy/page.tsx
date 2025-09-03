import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Backtest a Trading Strategy Properly',
  description: 'Backtest without fooling yourself: data quality, out-of-sample tests, walk-forward, and realistic costs so your live results match your backtest.',
}

export default function BacktestTradingStrategyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Backtest Strategy</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🧪
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to backtest a trading strategy properly</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Test strategies with rigorous methodology so your live results match your expectations.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">The Backtest Reality Check</h2>
          <p className="text-red-700 mb-3">
            Most backtests are dangerously optimistic. They use perfect hindsight, ignore costs, and cherry-pick favorable periods. Proper backtesting prevents expensive live trading mistakes.
          </p>
          <p className="text-red-600 text-sm">
            Rule: If your backtest looks too good to be true, it probably is.
          </p>
        </div>

        <h2>Define rules before testing</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Strategy Specification Checklist</h3>
          <div className="text-blue-700 space-y-3">
            <div>
              <p><strong>Entry Rules:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Exact conditions that trigger a buy signal</li>
                <li>• Price level, indicator values, time restrictions</li>
                <li>• Market regime filters (bull/bear, volatility)</li>
              </ul>
            </div>
            
            <div>
              <p><strong>Exit Rules:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Stop-loss: exact % or ATR multiple</li>
                <li>• Take-profit: target % or technical level</li>
                <li>• Time-based: maximum hold period</li>
              </ul>
            </div>
            
            <div>
              <p><strong>Position Sizing:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Fixed dollar amount, % of equity, or volatility-based</li>
                <li>• Maximum positions, correlation limits</li>
                <li>• Compounding vs. fixed size throughout test</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Data matters: survivorship bias, dividends, corporate actions</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Data Quality Issues</h3>
          <div className="space-y-4 text-yellow-700">
            <div>
              <p><strong>Survivorship Bias:</strong></p>
              <p className="text-sm">Testing only companies that still exist today inflates results. Include delisted/bankrupt stocks for realistic performance.</p>
            </div>
            
            <div>
              <p><strong>Look-Ahead Bias:</strong></p>
              <p className="text-sm">Using information not available at trade time. Example: Using &quot;close&quot; prices to generate signals, then entering at &quot;close&quot; prices.</p>
            </div>
            
            <div>
              <p><strong>Corporate Actions:</strong></p>
              <p className="text-sm">Stock splits, dividends, spin-offs affect price history. Use adjusted data or manually account for these events.</p>
            </div>
            
            <div>
              <p><strong>Data Errors:</strong></p>
              <p className="text-sm">Bad ticks, missing data, incorrect prices. Always review outlier trades that seem too good to be true.</p>
            </div>
          </div>
        </div>

        <h2>Split: in-sample vs out-of-sample vs live sim</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Proper Test Methodology</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">In-Sample (70%)</h4>
              <ul className="text-blue-700 text-xs space-y-1">
                <li>• Develop and optimize strategy</li>
                <li>• Test different parameters</li>
                <li>• Refine entry/exit rules</li>
                <li>• Example: 2010-2018 data</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">Out-of-Sample (20%)</h4>
              <ul className="text-green-700 text-xs space-y-1">
                <li>• Test final strategy on unseen data</li>
                <li>• No further optimization allowed</li>
                <li>• Validate in-sample results</li>
                <li>• Example: 2019-2020 data</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded">
              <h4 className="font-semibold text-purple-800 mb-2">Live Simulation (10%)</h4>
              <ul className="text-purple-700 text-xs space-y-1">
                <li>• Paper trade with real-time data</li>
                <li>• Include execution delays</li>
                <li>• Test psychological factors</li>
                <li>• Example: 2021+ forward test</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Costs/slippage modeling</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Realistic Cost Assumptions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-red-300">
              <thead className="bg-red-100">
                <tr>
                  <th className="border border-red-300 px-3 py-2 text-left">Cost Type</th>
                  <th className="border border-red-300 px-3 py-2">Conservative</th>
                  <th className="border border-red-300 px-3 py-2">Aggressive</th>
                  <th className="border border-red-300 px-3 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-red-300 px-3 py-2 font-medium">Commissions</td>
                  <td className="border border-red-300 px-3 py-2">$1-5 per trade</td>
                  <td className="border border-red-300 px-3 py-2">$0</td>
                  <td className="border border-red-300 px-3 py-2">Many brokers now $0</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-red-300 px-3 py-2 font-medium">Bid-Ask Spread</td>
                  <td className="border border-red-300 px-3 py-2">0.05-0.20%</td>
                  <td className="border border-red-300 px-3 py-2">0.01-0.05%</td>
                  <td className="border border-red-300 px-3 py-2">Depends on liquidity</td>
                </tr>
                <tr>
                  <td className="border border-red-300 px-3 py-2 font-medium">Market Impact</td>
                  <td className="border border-red-300 px-3 py-2">0.10-0.50%</td>
                  <td className="border border-red-300 px-3 py-2">0.02-0.10%</td>
                  <td className="border border-red-300 px-3 py-2">Higher for large orders</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-red-300 px-3 py-2 font-medium">Execution Delay</td>
                  <td className="border border-red-300 px-3 py-2">1-3 minutes</td>
                  <td className="border border-red-300 px-3 py-2">Instant</td>
                  <td className="border border-red-300 px-3 py-2">Signal to execution time</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-red-600 mt-2">Use conservative estimates for initial backtests. Costs compound over many trades.</p>
        </div>

        <h2>Metrics that matter</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Performance Metrics</h3>
            <div className="grid md:grid-cols-2 gap-4 text-blue-700">
              <div>
                <p><strong>Return Metrics:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• CAGR (Compound Annual Growth Rate)</li>
                  <li>• Total return vs. buy-and-hold</li>
                  <li>• Risk-adjusted returns (Sharpe ratio)</li>
                </ul>
              </div>
              <div>
                <p><strong>Risk Metrics:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Maximum drawdown</li>
                  <li>• Volatility (standard deviation)</li>
                  <li>• Downside deviation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Trade-Level Metrics</h3>
            <div className="grid md:grid-cols-2 gap-4 text-green-700">
              <div>
                <p><strong>Win/Loss Stats:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Win rate (%)</li>
                  <li>• Average win vs. average loss</li>
                  <li>• Profit factor (gross profit/gross loss)</li>
                </ul>
              </div>
              <div>
                <p><strong>Consistency:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Consecutive losing trades</li>
                  <li>• Monthly return distribution</li>
                  <li>• Percentage of profitable months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Benchmark Comparisons</h3>
          <div className="text-purple-700 space-y-2">
            <p><strong>What to compare against:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Buy-and-hold SPY (broad market)</li>
              <li>• Sector-specific ETF if relevant</li>
              <li>• Risk-free rate (T-bills)</li>
              <li>• Simple moving average strategies</li>
            </ul>
            <p className="text-sm text-purple-600 mt-3">
              Your strategy should beat relevant benchmarks on a risk-adjusted basis.
            </p>
          </div>
        </div>

        <h2>Common pitfalls</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Backtesting Mistakes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Curve fitting:</strong> Over-optimizing parameters to historical data</li>
            <li>• <strong>Small sample size:</strong> Testing on too few trades or too short period</li>
            <li>• <strong>Ignoring market regimes:</strong> Strategy works in trends but fails in chop</li>
            <li>• <strong>Perfect timing:</strong> Assuming exact entry/exit at signal prices</li>
            <li>• <strong>No position sizing:</strong> Using unrealistic fixed dollar amounts</li>
            <li>• <strong>Cherry picking periods:</strong> Testing only bull markets or favorable conditions</li>
            <li>• <strong>Ignoring correlation:</strong> Assuming you can diversify with similar strategies</li>
          </ul>
        </div>

        <h2>Walk-forward analysis</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Walk-Forward Process</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Step 1:</strong> Optimize strategy on first 12 months of data</p>
            <p><strong>Step 2:</strong> Trade with optimized parameters for next 3 months</p>
            <p><strong>Step 3:</strong> Re-optimize using 12-month rolling window</p>
            <p><strong>Step 4:</strong> Trade next 3 months with new parameters</p>
            <p><strong>Step 5:</strong> Repeat throughout entire dataset</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded mt-4">
            <p className="text-blue-700 text-sm">
              <strong>Benefit:</strong> More realistic results that account for parameter drift and changing market conditions.
            </p>
          </div>
        </div>

        <h2>Backtesting tools and platforms</h2>
        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Platform Options</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Beginner-Friendly</h4>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• TradingView Pine Script (free)</li>
                <li>• Portfolio Visualizer (web-based)</li>
                <li>• Yahoo Finance historical data + Excel</li>
                <li>• Broker platform backtesting tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Advanced</h4>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Python (pandas, backtrader, zipline)</li>
                <li>• R (quantstrat, PerformanceAnalytics)</li>
                <li>• Amibroker (dedicated backtesting)</li>
                <li>• MetaTrader (for forex/CFDs)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should a backtest be?</h3>
              <p className="text-gray-700">Multiple market cycles—ideally 10+ years for equity strategies. Include both bull and bear markets, high and low volatility periods.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s walk-forward analysis?</h3>
              <p className="text-gray-700">Repeated train/validate cycles that simulate how you&apos;d actually optimize and trade the strategy over time, accounting for changing market conditions.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I include dividends in stock backtests?</h3>
              <p className="text-gray-700">Yes, use total return data that includes dividends. Excluding them understates long-term buy-and-hold performance significantly.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s a good Sharpe ratio for a trading strategy?</h3>
              <p className="text-gray-700">Above 1.0 is good, above 1.5 is excellent. Compare to buy-and-hold benchmarks and factor in implementation costs and complexity.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-trade-etfs-vs-stocks" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← ETFs vs Stocks</h3>
              <p className="text-sm text-blue-700 mt-1">Choose the right instrument</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-build-trading-journal" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Trading Journal →</h3>
              <p className="text-sm text-green-700 mt-1">Track and improve results</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}