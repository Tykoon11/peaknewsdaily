import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start Trading Forex: Complete Beginner Guide',
  description: 'Learn the forex basics—pairs, pips, lot sizes, leverage, risk rules, and a simple starter plan—to place your first responsible FX trade.',
}

export default function StartTradingForexPage() {
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
              How to Start Trading Forex (Complete Beginner Guide)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the forex basics—pairs, pips, lot sizes, leverage, risk rules, and a simple starter plan—to place your first responsible FX trade.
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-indigo-700">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Start with a demo account and practice with 0.5-1% risk per trade</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Focus on 1-3 major pairs until you're consistently profitable</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Use proper position sizing and always have a stop-loss plan</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* What is Forex? */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Forex?</h2>
              <p className="text-gray-600 leading-relaxed">
                Forex is the global market for trading one currency against another (e.g., EUR/USD). It runs 24/5 with the highest liquidity of any market.
              </p>
            </div>

            {/* Key Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Terms You Must Know</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Base/Quote</h3>
                  <p className="text-blue-700 text-sm">In EUR/USD 1.1050, EUR = base, USD = quote.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Pip</h3>
                  <p className="text-green-700 text-sm">Standard 0.0001 price move on most pairs (0.01 on JPY pairs).</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Spread</h3>
                  <p className="text-yellow-700 text-sm">Broker markup between bid and ask.</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Leverage</h3>
                  <p className="text-purple-700 text-sm">Borrowed buying power (e.g., 1:30, 1:100). Magnifies gains and losses.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Lot Size</h3>
                  <p className="text-gray-700 text-sm">Standard (100k units), mini (10k), micro (1k).</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step: Your First Responsible Trade</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="font-semibold text-gray-900">Pick a Regulated Broker</p>
                    <p className="text-gray-600 text-sm">(see broker selection guide)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="font-semibold text-gray-900">Open a Demo</p>
                    <p className="text-gray-600 text-sm">Practice order types (market, limit, stop)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="font-semibold text-gray-900">Define Risk per Trade</p>
                    <p className="text-gray-600 text-sm">(e.g., 0.5–1% of account)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="font-semibold text-gray-900">Choose a Pair & Timeframe</p>
                    <p className="text-gray-600 text-sm">(e.g., EUR/USD on 4H)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <p className="font-semibold text-gray-900">Plan the Trade</p>
                    <p className="text-gray-600 text-sm">Entry, stop-loss, take-profit, and rationale</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <div>
                    <p className="font-semibold text-gray-900">Position Size Properly</p>
                    <p className="text-gray-600 text-sm">(see sizing guide)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
                  <div>
                    <p className="font-semibold text-gray-900">Journal the Trade</p>
                    <p className="text-gray-600 text-sm">(screenshots, notes, lessons)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Starter Setup */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Simple Starter Setup (Example)</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Trend filter:</strong> 50-EMA slope</li>
                  <li><strong>Entry:</strong> Pullback to 20-EMA + bullish/bearish engulfing candle</li>
                  <li><strong>Stop:</strong> Below/above swing</li>
                  <li><strong>Target:</strong> 1.5–2.0R or next structure</li>
                </ul>
              </div>
            </div>

            {/* Risk & Psychology */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk & Psychology</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-red-700 mb-3">
                  Start small. Avoid revenge trades. Accept losing streaks as normal. Treat trading like a business with KPIs (win rate, average R, expectancy).
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-red-800">Pro Tips:</strong> Use a checklist before every trade. Automate screenshots with your platform's tools.</p>
                  <p><strong className="text-red-800">Common Mistakes:</strong> Over-leveraging, no stop-loss, strategy hopping every week.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How much to start?</h3>
                  <p className="text-gray-600">Start with what you can afford to lose; many begin with $500–$2,000 and risk 0.5–1% per trade.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is demo trading useful?</h3>
                  <p className="text-gray-600">Yes—prove consistent rules and risk control before going live.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How many pairs should I trade?</h3>
                  <p className="text-gray-600">1–3 liquid majors until you're consistent.</p>
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
                <a href="/how-to/size-a-forex-position-properly" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to size a forex position properly
                </a>
                <a href="/how-to/choose-a-regulated-forex-broker" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a regulated forex broker
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