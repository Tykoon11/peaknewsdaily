import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forex Position Sizing: The Only Formula You Need',
  description: 'Use this simple risk-based formula to size every forex trade correctly. Includes examples for micro/mini/standard lots.',
}

export default function SizeForexPositionPage() {
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
              Forex Position Sizing: The Only Formula You Need
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use this simple risk-based formula to size every forex trade correctly. Includes examples for micro/mini/standard lots.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-indigo-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Position Size = Risk $ ÷ (Stop pips × Pip value)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Choose 0.5–1% risk per trade for safe money management</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Recalculate when pair or account currency changes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* The Rule */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rule</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <ol className="space-y-3 text-blue-800">
                  <li><strong>1.</strong> Choose risk per trade (e.g., 1% of $2,000 = $20)</li>
                  <li><strong>2.</strong> Measure stop distance in pips (entry to stop)</li>
                  <li><strong>3.</strong> Find pip value for your lot size/pair</li>
                  <li><strong>4.</strong> Position Size = Risk ÷ (Stop pips × Pip value)</li>
                </ol>
              </div>
            </div>

            {/* Formula Box */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Sizing Formula</h2>
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-indigo-400">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Position Size = Risk $ ÷ (Stop Distance in Pips × Pip Value)</p>
                  <p className="text-gray-600 text-sm">The universal forex position sizing formula</p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Example (EUR/USD, USD account)</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="space-y-3 text-green-800">
                  <p><strong>Equity:</strong> $2,000; Risk = 1% = $20</p>
                  <p><strong>Stop:</strong> 25 pips; Pip value per mini lot ≈ $1</p>
                  <p><strong>Size:</strong> $20 ÷ (25 × $1) = 0.80 mini lots = 0.08 lot</p>
                </div>
              </div>
            </div>

            {/* Risk Percentage Guide */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing Your Risk Percentage</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">0.5% Risk</h3>
                  <p className="text-green-700 text-sm">Ultra-conservative, good for beginners</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">1% Risk</h3>
                  <p className="text-blue-700 text-sm">Balanced approach, most common</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">2% Risk</h3>
                  <p className="text-orange-700 text-sm">Aggressive, requires experience</p>
                </div>
              </div>
            </div>

            {/* Lot Size Reference */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lot Size Reference</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Micro Lot (0.01)</h3>
                    <p className="text-gray-600 text-sm">1,000 units</p>
                    <p className="text-gray-600 text-sm">~$0.10/pip (USD pairs)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mini Lot (0.10)</h3>
                    <p className="text-gray-600 text-sm">10,000 units</p>
                    <p className="text-gray-600 text-sm">~$1/pip (USD pairs)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Standard Lot (1.00)</h3>
                    <p className="text-gray-600 text-sm">100,000 units</p>
                    <p className="text-gray-600 text-sm">~$10/pip (USD pairs)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips & Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips & Common Mistakes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pro Tips</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Recalculate when pair or account currency changes</li>
                    <li>• Use scripts/EA or built-in calculators</li>
                    <li>• Include a small buffer for spread/slippage</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Common Mistakes</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Using fixed lot sizes regardless of stop distance</li>
                    <li>• Ignoring spread/slippage near news</li>
                    <li>• Not adjusting for different account currencies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What risk % is safe?</h3>
                  <p className="text-gray-600">0.5–1% is common; adapt to your edge and psychology.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Include commissions?</h3>
                  <p className="text-gray-600">Yes—assume a small buffer.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What about partial exits?</h3>
                  <p className="text-gray-600">Plan them—sizing still uses initial stop distance.</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/read-currency-pairs-and-pips" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to read currency pairs and pips
                </a>
                <a href="/how-to/avoid-over-leveraging-in-fx" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to avoid over-leveraging in FX
                </a>
                <a href="/how-to/set-realistic-profit-targets-in-forex" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set realistic profit targets in forex
                </a>
                <a href="/how-to/build-a-simple-forex-strategy" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to build a simple forex strategy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}