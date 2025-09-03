import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Read Candlestick Charts for Beginners',
  description: 'Learn candlesticks fast: what each candle shows, the patterns that matter, and how to avoid over-fitting. Simple examples with risk rules.',
}

export default function ReadCandlestickChartsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Read Candlestick Charts</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            📈
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to read candlestick charts (for beginners)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Master the basics of candlestick patterns and chart reading without falling into over-analysis traps.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Anatomy of a candle</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Four Key Prices</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-blue-700 space-y-2">
                <li><strong>Open:</strong> First traded price in the period</li>
                <li><strong>High:</strong> Highest price reached</li>
                <li><strong>Low:</strong> Lowest price reached</li>
                <li><strong>Close:</strong> Final traded price</li>
              </ul>
            </div>
            <div>
              <ul className="text-blue-700 space-y-2">
                <li><strong>Body:</strong> Rectangle from open to close</li>
                <li><strong>Wicks:</strong> Lines extending to high/low</li>
                <li><strong>Green/White:</strong> Close &gt; Open (bullish)</li>
                <li><strong>Red/Black:</strong> Close &lt; Open (bearish)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Visual Example</h3>
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-green-700 mb-2">Bullish Candle</h4>
              <div className="mx-auto w-4 bg-green-100 border border-green-400 relative" style={{height: '80px'}}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-green-600" style={{height: '10px'}}></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-green-600" style={{height: '10px'}}></div>
                <div className="bg-green-400 h-12 mt-2"></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Close higher than open</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-red-700 mb-2">Bearish Candle</h4>
              <div className="mx-auto w-4 bg-red-100 border border-red-400 relative" style={{height: '80px'}}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-red-600" style={{height: '10px'}}></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-red-600" style={{height: '10px'}}></div>
                <div className="bg-red-400 h-12 mt-2"></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Close lower than open</p>
            </div>
          </div>
        </div>

        <h2>Timeframes: 1m vs daily vs weekly</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Timeframe</th>
                <th className="border border-gray-300 px-3 py-2">Signal Quality</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
                <th className="border border-gray-300 px-3 py-2">Drawback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1-5 minute</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">High noise</td>
                <td className="border border-gray-300 px-3 py-2">Day trading scalps</td>
                <td className="border border-gray-300 px-3 py-2">False signals</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">1-4 hour</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Moderate</td>
                <td className="border border-gray-300 px-3 py-2">Swing trading</td>
                <td className="border border-gray-300 px-3 py-2">Still choppy</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Daily</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">High quality</td>
                <td className="border border-gray-300 px-3 py-2">Beginners</td>
                <td className="border border-gray-300 px-3 py-2">Slower signals</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Weekly</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Very reliable</td>
                <td className="border border-gray-300 px-3 py-2">Long-term trends</td>
                <td className="border border-gray-300 px-3 py-2">Infrequent setups</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Beginner Recommendation</h3>
          <p className="text-yellow-700">Start with daily charts. They filter out most noise while providing enough trading opportunities. Once comfortable, experiment with 4-hour charts for more frequent signals.</p>
        </div>

        <h2>6 beginner patterns that actually help</h2>

        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">1. Bullish Engulfing</h3>
            <div className="text-green-700">
              <p className="mb-2"><strong>Pattern:</strong> Small red candle followed by large green candle that engulfs it</p>
              <p className="mb-2"><strong>Signal:</strong> Potential trend reversal from down to up</p>
              <p><strong>Trade:</strong> Buy above the green candle&apos;s high</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">2. Bearish Engulfing</h3>
            <div className="text-red-700">
              <p className="mb-2"><strong>Pattern:</strong> Small green candle followed by large red candle that engulfs it</p>
              <p className="mb-2"><strong>Signal:</strong> Potential trend reversal from up to down</p>
              <p><strong>Trade:</strong> Short below the red candle&apos;s low</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">3. Hammer</h3>
            <div className="text-blue-700">
              <p className="mb-2"><strong>Pattern:</strong> Small body with long lower wick (2x+ the body)</p>
              <p className="mb-2"><strong>Signal:</strong> Buyers stepped in after selling pressure</p>
              <p><strong>Trade:</strong> Buy above hammer high, especially after downtrend</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">4. Doji</h3>
            <div className="text-purple-700">
              <p className="mb-2"><strong>Pattern:</strong> Open equals close (tiny body, long wicks)</p>
              <p className="mb-2"><strong>Signal:</strong> Indecision—potential trend change</p>
              <p><strong>Trade:</strong> Wait for next candle to confirm direction</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">5. Inside Bar</h3>
            <div className="text-orange-700">
              <p className="mb-2"><strong>Pattern:</strong> Current candle&apos;s range fits inside previous candle</p>
              <p className="mb-2"><strong>Signal:</strong> Consolidation before breakout</p>
              <p><strong>Trade:</strong> Buy above or sell below the &quot;mother bar&quot; range</p>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">6. Morning/Evening Star</h3>
            <div className="text-teal-700">
              <p className="mb-2"><strong>Pattern:</strong> Three candles—trend, small body (star), reversal</p>
              <p className="mb-2"><strong>Signal:</strong> Strong reversal signal</p>
              <p><strong>Trade:</strong> Enter after confirmation candle</p>
            </div>
          </div>
        </div>

        <h2>Context first: trend + levels + volume</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-red-800 mb-2">Critical Rule</h3>
          <p className="text-red-700">
            <strong>Never trade patterns in isolation.</strong> A hammer at resistance in a downtrend has different odds than a hammer at support in an uptrend.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Context Checklist</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Trend:</strong> Is the pattern with or against the main trend?</li>
            <li>• <strong>Support/Resistance:</strong> Is it near a key level?</li>
            <li>• <strong>Volume:</strong> Did volume confirm the pattern?</li>
            <li>• <strong>Market conditions:</strong> Bull market vs bear market</li>
            <li>• <strong>Time of day:</strong> Opening gaps vs mid-day vs close</li>
          </ul>
        </div>

        <h2>Avoid the trap: pattern ≠ guarantee</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Pattern Trading Mistakes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Pattern hunting:</strong> Seeing patterns that aren&apos;t there</li>
            <li>• <strong>Ignoring failure rate:</strong> Even good patterns fail 30-50% of the time</li>
            <li>• <strong>No risk management:</strong> Patterns without stops = disaster</li>
            <li>• <strong>Over-analyzing:</strong> Analysis paralysis kills timing</li>
            <li>• <strong>Backtesting bias:</strong> Cherry-picking successful examples</li>
          </ul>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Success Framework</h3>
          <ol className="text-blue-700 space-y-2">
            <li><strong>1. Pattern recognition:</strong> Identify high-probability setups</li>
            <li><strong>2. Context analysis:</strong> Trend, levels, volume confluence</li>
            <li><strong>3. Risk management:</strong> Define stop-loss before entry</li>
            <li><strong>4. Position sizing:</strong> Risk 1-2% max per trade</li>
            <li><strong>5. Trade management:</strong> Let winners run, cut losers fast</li>
          </ol>
        </div>

        <h2>Practice plan + free charting tools</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Free Charting Platforms</h3>
          <ul className="text-green-700 space-y-2">
            <li>• <strong>TradingView:</strong> Best free charts, social features</li>
            <li>• <strong>Yahoo Finance:</strong> Basic but reliable</li>
            <li>• <strong>Finviz:</strong> Great for screening + charts</li>
            <li>• <strong>Your broker app:</strong> Usually includes basic charting</li>
          </ul>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">30-Day Practice Plan</h3>
          <div className="text-purple-700 space-y-2">
            <p><strong>Week 1:</strong> Study 10 charts daily, identify basic candle types</p>
            <p><strong>Week 2:</strong> Spot patterns in historical data, note context</p>
            <p><strong>Week 3:</strong> Paper trade patterns with proper risk management</p>
            <p><strong>Week 4:</strong> Review results, refine pattern selection criteria</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which timeframe should beginners use?</h3>
              <p className="text-gray-700">Daily and 4-hour charts to start. They have less noise and more reliable signals than shorter timeframes.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do patterns work on ETFs?</h3>
              <p className="text-gray-700">Yes, but ETFs tend to follow broader market patterns more than individual stock dynamics. They&apos;re actually better for beginners due to lower volatility.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How reliable are candlestick patterns?</h3>
              <p className="text-gray-700">Individual patterns are only 50-60% reliable. Success comes from combining patterns with trend, support/resistance, and proper risk management.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I memorize all candlestick patterns?</h3>
              <p className="text-gray-700">No. Focus on 5-6 high-probability patterns and master them with context. Quality over quantity always wins.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-use-stop-loss-and-take-profit" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Stop-Loss Orders</h3>
              <p className="text-sm text-blue-700 mt-1">Protect your capital</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-scan-for-high-probability-setups" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Stock Scanning →</h3>
              <p className="text-sm text-green-700 mt-1">Find high-probability setups</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}