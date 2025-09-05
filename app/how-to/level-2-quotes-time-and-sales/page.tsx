import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Level 2 Quotes & Time & Sales: Read Order Flow Like a Pro',
  description: 'Understand market makers/ECNs, depth-of-book (e.g., Nasdaq TotalView), and traps to avoid.',
}

export default function Level2QuotesTimeAndSalesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Level 2 Quotes & Time & Sales</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">Level 2 Quotes & Time & Sales: Read Order Flow Like a Pro</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Understand market makers/ECNs, depth-of-book (e.g., Nasdaq TotalView), and traps to avoid.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">📊 Level 2 vs Level 1 Data</h3>
          <p className="text-blue-700">
            <strong>Level 1</strong> shows only the best bid/ask (inside market). <strong>Level 2</strong> reveals 
            multiple price levels from different market participants, giving you insight into supply/demand zones 
            and potential support/resistance levels.
          </p>
        </div>

        <h2>What Level 2 shows</h2>
        
        <p>Level 2 data displays the order book depth—all current bids and offers at different price levels, 
        along with the market participants (market makers, ECNs) providing those quotes.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Bid Side (Buyers)</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Price levels below current market</li>
              <li>• Size (number of shares) at each level</li>
              <li>• Market maker or ECN providing quote</li>
              <li>• Time priority (first come, first served)</li>
              <li>• Aggregate size across all participants</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Ask Side (Sellers)</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Price levels above current market</li>
              <li>• Available shares at each level</li>
              <li>• ECN/MM codes (NSDQ, ARCA, etc.)</li>
              <li>• Queue position importance</li>
              <li>• Total liquidity visible</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Key Market Participants You'll See</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• <strong>NSDQ:</strong> Nasdaq market maker</li>
                <li>• <strong>ARCA:</strong> NYSE Arca ECN</li>
                <li>• <strong>BATS/BZX:</strong> Cboe exchanges</li>
                <li>• <strong>EDGX:</strong> Cboe EDGX</li>
              </ul>
            </div>
            <div>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• <strong>IEX:</strong> Investors Exchange</li>
                <li>• <strong>MEMX:</strong> Members Exchange</li>
                <li>• <strong>PSX:</strong> Nasdaq PSX</li>
                <li>• <strong>LTSE:</strong> Long Term Stock Exchange</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Depth-of-book feeds (TotalView & similar)</h2>
        
        <p>Standard Level 2 typically shows only the best quote from each market participant. 
        <strong>Depth-of-book feeds like Nasdaq TotalView</strong> show the complete order book—every price level with all orders.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Data Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">What You See</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Level 1</td>
                <td className="border border-gray-300 px-3 py-2">Best bid/ask only</td>
                <td className="border border-gray-300 px-3 py-2">Usually free</td>
                <td className="border border-gray-300 px-3 py-2">Long-term investors</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Level 2</td>
                <td className="border border-gray-300 px-3 py-2">Top quote from each MM/ECN</td>
                <td className="border border-gray-300 px-3 py-2">$15-30/month</td>
                <td className="border border-gray-300 px-3 py-2">Active day traders</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">TotalView</td>
                <td className="border border-gray-300 px-3 py-2">Complete order book depth</td>
                <td className="border border-gray-300 px-3 py-2">$30-60/month</td>
                <td className="border border-gray-300 px-3 py-2">Scalpers, HFT-style traders</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">OpenBook</td>
                <td className="border border-gray-300 px-3 py-2">Full depth for NYSE stocks</td>
                <td className="border border-gray-300 px-3 py-2">$25-50/month</td>
                <td className="border border-gray-300 px-3 py-2">Large cap specialists</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <p className="text-purple-700 text-sm">
            <strong>Learn more about depth feeds:</strong> 
            <a href="https://www.nasdaq.com/solutions/nasdaq-totalview" className="text-purple-600 hover:underline ml-1" target="_blank" rel="noopener">
              Nasdaq TotalView Information
            </a>
          </p>
        </div>

        <h2>Time & sales tape</h2>
        
        <p>The Time & Sales window shows completed transactions in chronological order—actual trades that occurred, not just quotes.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">What Each Print Shows</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Time & Price</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Exact execution time</li>
                <li>• Trade price</li>
                <li>• Uptick/downtick indicator</li>
                <li>• Previous trade reference</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Volume & Size</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Share quantity</li>
                <li>• Block trade indicators</li>
                <li>• Cumulative volume</li>
                <li>• Lot size variations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Execution Details</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Exchange/ECN where trade occurred</li>
                <li>• Trade conditions (if any)</li>
                <li>• Market vs limit order indication</li>
                <li>• Intermarket sweep orders (ISO)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Practical setups</h2>
        
        <p>Here's how experienced traders use Level 2 and Time & Sales for different trading situations:</p>

        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Opening Auctions</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Watch imbalance indicators 10-15 minutes before open</li>
              <li>• Note unusual size buildup on one side</li>
              <li>• Anticipate gap fills based on overnight order flow</li>
              <li>• Time entries after initial volatility settles</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Support/Resistance Confirmation</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Large size at key levels suggests institutional interest</li>
              <li>• Refreshing orders show continued commitment</li>
              <li>• Size disappearing may signal false support</li>
              <li>• Hidden/iceberg orders reveal institutional activity</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Breakout Validation</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Volume spike in Time & Sales confirms breakout</li>
              <li>• Multiple ECN participation shows broad interest</li>
              <li>• Large consecutive prints suggest institutional buying</li>
              <li>• Lack of size on opposite side reduces pullback risk</li>
            </ul>
          </div>
        </div>

        <h2>Limitations & traps to avoid</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">🚨 What Level 2 Can't Show You</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Hidden liquidity:</strong> Iceberg orders and reserve size</li>
            <li>• <strong>Dark pools:</strong> Large institutional orders trading off-exchange</li>
            <li>• <strong>Stop orders:</strong> Only appear when triggered</li>
            <li>• <strong>Algorithm behavior:</strong> Smart order routing and execution tactics</li>
            <li>• <strong>Cross-trading:</strong> Internal matching within brokerages</li>
            <li>• <strong>After-hours activity:</strong> Limited participation and liquidity</li>
          </ul>
        </div>

        <h2>Common misconceptions</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Myth:</strong> "Large size on the bid means the stock will go up"<br/>
              <strong>Reality:</strong> Orders can be canceled instantly, and large size may be algorithmic probing.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Myth:</strong> "Level 2 shows all available liquidity"<br/>
              <strong>Reality:</strong> Hidden orders, dark pools, and iceberg orders provide significant hidden liquidity.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Myth:</strong> "More ECNs showing = more liquidity"<br/>
              <strong>Reality:</strong> ECNs may show minimal size to maintain market presence without real depth.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Myth:</strong> "Time & Sales shows all volume"<br/>
              <strong>Reality:</strong> Dark pool transactions and some institutional trades don't appear in the tape.
            </p>
          </div>
        </div>

        <h2>Getting started with Level 2</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Start with highly liquid stocks</p>
              <p className="text-gray-600 text-sm">SPY, QQQ, AAPL—stocks with tight spreads and consistent volume.</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Focus on patterns, not prediction</p>
              <p className="text-gray-600 text-sm">Learn to recognize accumulation, distribution, and liquidity patterns.</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Combine with technical analysis</p>
              <p className="text-gray-600 text-sm">Use Level 2 to time entries near support/resistance, not as standalone signals.</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Practice during high-volume periods</p>
              <p className="text-gray-600 text-sm">First hour and last hour provide the most active order flow to study.</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Keep size perspective</p>
              <p className="text-gray-600 text-sm">1,000 shares is small for AAPL but large for a $5 stock. Context matters.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Background Reading</h3>
          <p className="text-gray-700 text-sm">
            For deeper understanding of market microstructure and order flow, consider reading about:
          </p>
          <ul className="text-gray-600 text-sm space-y-1 mt-2">
            <li>• National Best Bid and Offer (NBBO) rules</li>
            <li>• Regulation NMS and order protection</li>
            <li>• Market maker obligations and incentives</li>
            <li>• Payment for order flow (PFOF) impact</li>
          </ul>
          <div className="mt-3">
            <a href="https://www.investopedia.com/terms/m/microstructure.asp" 
               className="text-blue-600 hover:underline text-sm" 
               target="_blank" 
               rel="noopener">
              Investopedia: Market Microstructure
            </a>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Don't rely on Level 2 alone. The most valuable use is confirming setups from technical analysis, 
            timing entries and exits, and understanding short-term liquidity. It's a tool for execution, 
            not strategy.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Level 2 worth the monthly cost?</h3>
              <p className="text-gray-700">
                Only if you're an active day trader making multiple trades per day. For swing traders or investors, 
                Level 1 data is usually sufficient. The cost should be offset by improved execution.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why do I see fake walls that disappear when price approaches?</h3>
              <p className="text-gray-700">
                These could be algorithmic probes, bluffing tactics, or orders with hidden size that gets pulled. 
                This is why Level 2 reading requires experience and shouldn't be your only decision factor.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between TotalView and regular Level 2?</h3>
              <p className="text-gray-700">
                TotalView shows the complete order book depth—every order at every price level. Regular Level 2 
                typically shows only the best quote from each market participant, limiting your view of total liquidity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can Level 2 help with options trading?</h3>
              <p className="text-gray-700">
                Options Level 2 exists but is less useful due to wider spreads, market maker dominance, and 
                different liquidity patterns. Stock Level 2 is more valuable for underlying analysis when trading options.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/paper-trading-setup" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">← Practice with Paper Trading</h3>
              <p className="text-sm text-green-700 mt-1">Test Level 2 reading skills risk-free</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/lower-trading-fees" 
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900">Lower Trading Fees →</h3>
              <p className="text-sm text-purple-700 mt-1">Optimize market data costs and execution</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}