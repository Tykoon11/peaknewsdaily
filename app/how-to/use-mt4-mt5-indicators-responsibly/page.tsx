import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Using MT4/MT5 Indicators Responsibly (No Overfitting)',
  description: 'Get clean signals from MT4/MT5 by limiting indicators, avoiding repainting, and testing parameters properly.',
}

export default function UseMT4MT5IndicatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              💱 Forex & CFD Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Using MT4/MT5 Indicators Responsibly (No Overfitting)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get clean signals from MT4/MT5 by limiting indicators, avoiding repainting, and testing parameters properly.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Less Is More</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-2 text-blue-700">
                  <li>• Pick 1–3 complementary tools (trend, trigger, volatility)</li>
                  <li>• Confirm with price structure, not indicators alone</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Avoid These Traps</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Repainting Indicators</h3>
                  <p className="text-red-700 text-sm">Verify on live candles.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Curve-Fitting</h3>
                  <p className="text-orange-700 text-sm">Don't over-tune inputs to past data.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Signal Spam</h3>
                  <p className="text-yellow-700 text-sm">Multiple conflicting indicators cause paralysis.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="space-y-2 text-green-700">
                  <li>• Use higher-timeframe context</li>
                  <li>• Keep default settings as a baseline</li>
                  <li>• Test changes on a separate out-of-sample period</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are custom indicators safe?</h3>
                  <p className="text-gray-600">From reputable sources—review code/permissions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What about EAs?</h3>
                  <p className="text-gray-600">Treat as strategies—backtest, forward-test, and monitor risk.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/build-a-simple-forex-strategy" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to build a simple forex strategy
                </a>
                <a href="/how-to/set-realistic-profit-targets-in-forex" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set realistic profit targets in forex
                </a>
                <a href="/how-to/start-trading-forex-complete-beginner-guide" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to start trading forex (complete beginner guide)
                </a>
                <a href="/how-to/choose-a-regulated-forex-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a regulated forex broker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}