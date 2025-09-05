import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Realistic Forex Profit Targets: ATR, Structure & R-Multiples',
  description: 'Stop guessing exits. Use ATR, support/resistance, and R-multiples to set achievable FX profit targets.',
}

export default function SetRealisticProfitTargetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              💱 Forex & CFD Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Realistic Forex Profit Targets: ATR, Structure & R-Multiples
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop guessing exits. Use ATR, support/resistance, and R-multiples to set achievable FX profit targets.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-indigo-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Combine structure, ATR, and R-multiples for realistic targets</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Higher timeframes produce fewer, larger moves</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Target the nearest confluence for highest probability</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Three Methods */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Evidence-Based Methods</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Structure Targets</h3>
                  <p className="text-blue-700">Aim for prior swing high/low or supply/demand zones.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">ATR-Based</h3>
                  <p className="text-green-700">Target = k × ATR (e.g., 1.5×ATR(14)) to reflect typical range.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">R-Multiples</h3>
                  <p className="text-purple-700">If stop = 20 pips, 1.5R = 30 pips target.</p>
                </div>
              </div>
            </div>

            {/* Combine for Probability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Combine for Probability</h2>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800 mb-2">
                  <strong>Target the nearest confluence</strong> (e.g., 1.5×ATR aligns with prior swing). Trail partials if momentum continues.
                </p>
              </div>
            </div>

            {/* Timeframe Matters */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeframe Matters</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Higher timeframes produce fewer, larger moves. Match targets to volatility and session (London/NY overlap moves most majors).
                </p>
              </div>
            </div>

            {/* Examples Table */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Setting Examples</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-indigo-900">Method</th>
                      <th className="px-4 py-3 text-left font-semibold text-indigo-900">Example</th>
                      <th className="px-4 py-3 text-left font-semibold text-indigo-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">Structure</td>
                      <td className="px-4 py-3">Previous resistance at 1.1080</td>
                      <td className="px-4 py-3">Range-bound markets</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">ATR-Based</td>
                      <td className="px-4 py-3">2×ATR(14) = 60 pips</td>
                      <td className="px-4 py-3">Trending markets</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">R-Multiple</td>
                      <td className="px-4 py-3">2R target (40 pips if stop is 20)</td>
                      <td className="px-4 py-3">Consistent risk management</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pro Tips & Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips & Common Mistakes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pro Tips</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Log actual vs planned R to refine realism</li>
                    <li>• Consider partial exits at multiple levels</li>
                    <li>• Adjust for market session volatility</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Common Mistakes</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Fixed 50-pip targets regardless of volatility</li>
                    <li>• Ignoring news impact on targets</li>
                    <li>• Not adjusting for different pairs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is 1:1 R:R okay?</h3>
                  <p className="text-gray-600">It can be, if your win rate supports it.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I always trail stops?</h3>
                  <p className="text-gray-600">Not always—test fixed targets vs trailing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Best indicator?</h3>
                  <p className="text-gray-600">ATR plus price structure is a strong baseline.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/size-a-forex-position-properly" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to size a forex position properly
                </a>
                <a href="/how-to/build-a-simple-forex-strategy" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to build a simple forex strategy
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