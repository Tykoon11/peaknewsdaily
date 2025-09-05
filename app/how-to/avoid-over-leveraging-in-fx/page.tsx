import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avoid Over-Leveraging in Forex: Simple Risk Rules',
  description: 'Keep drawdowns small with proven risk limits: low risk per trade, realistic stops, and smart use of leverage.',
}

export default function AvoidOverLeveragingPage() {
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
              Avoid Over-Leveraging in Forex: Simple Risk Rules
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep drawdowns small with proven risk limits: low risk per trade, realistic stops, and smart use of leverage.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Core Principles */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Core Principles</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-900 mb-2">Risk per Trade: 0.5–1% of equity</h3>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h3 className="font-semibold text-orange-900 mb-2">Max Daily Risk: 2–3% stop for the day</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-900 mb-2">Position Sizing: Based on stop distance, not desire for profit</h3>
                </div>
              </div>
            </div>

            {/* Practical Controls */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Controls</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Use smaller lots than your maximum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Avoid stacking correlated pairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Widen stops only if your plan says so (not after entry)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Tips & Mistakes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips & Common Mistakes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Pro Tips</h3>
                  <p className="text-green-700">Predefine a "cool-off" rule after 2–3 losses.</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Common Mistakes</h3>
                  <p className="text-red-700">Increasing size to "get back" losses.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is high leverage always bad?</h3>
                  <p className="text-gray-600">It's a tool—your risk per trade determines danger.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I trade micro lots?</h3>
                  <p className="text-gray-600">Yes—ideal for granular sizing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I hedge?</h3>
                  <p className="text-gray-600">Only if your tested plan includes it.</p>
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
                <a href="/how-to/choose-a-regulated-forex-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a regulated forex broker
                </a>
                <a href="/how-to/build-a-simple-forex-strategy" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to build a simple forex strategy
                </a>
                <a href="/how-to/start-trading-forex-complete-beginner-guide" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to start trading forex (complete beginner guide)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}