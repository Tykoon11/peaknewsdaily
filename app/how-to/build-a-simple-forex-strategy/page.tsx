import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Simple Forex Strategy You Can Actually Follow',
  description: 'Use this rules-based template—trend filter, entry trigger, stop, and exit—to build and test your first FX strategy.',
}

export default function BuildSimpleForexStrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              💱 Forex & CFD Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              A Simple Forex Strategy You Can Actually Follow
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use this rules-based template—trend filter, entry trigger, stop, and exit—to build and test your first FX strategy.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategy Template</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Market:</strong> 1–3 major pairs</li>
                  <li><strong>Timeframe:</strong> 1H or 4H</li>
                  <li><strong>Trend Filter:</strong> Price above 50-EMA = long-bias; below = short-bias</li>
                  <li><strong>Entry Trigger:</strong> Pullback to 20-EMA + engulfing candle in trend direction</li>
                  <li><strong>Stop:</strong> Beyond swing or 1×ATR(14)</li>
                  <li><strong>Target:</strong> 1.5–2.0R or structure level</li>
                  <li><strong>Risk:</strong> 0.5–1% per trade</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Example (Long)</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <ol className="space-y-2 text-blue-800">
                  <li>1. Price above 50-EMA</li>
                  <li>2. Pullback touches 20-EMA and prints bullish engulfing</li>
                  <li>3. Enter on candle close; stop below swing; target next resistance ~1.8R</li>
                </ol>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips & Common Mistakes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pro Tips</h3>
                  <p className="text-green-700 text-sm">Forward-test at least 30–50 trades. Record screenshots and metrics (win rate, average R, drawdown).</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Common Mistakes</h3>
                  <p className="text-red-700 text-sm">Changing rules mid-test; over-optimizing parameters.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Which indicators?</h3>
                  <p className="text-gray-600">20/50 EMAs + ATR is enough to start.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long to test?</h3>
                  <p className="text-gray-600">Minimum one market cycle per timeframe.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/size-a-forex-position-properly" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to size a forex position properly
                </a>
                <a href="/how-to/set-realistic-profit-targets-in-forex" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set realistic profit targets in forex
                </a>
                <a href="/how-to/use-mt4-mt5-indicators-responsibly" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to use MT4/MT5 indicators responsibly
                </a>
                <a href="/how-to/avoid-over-leveraging-in-fx" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to avoid over-leveraging in FX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}