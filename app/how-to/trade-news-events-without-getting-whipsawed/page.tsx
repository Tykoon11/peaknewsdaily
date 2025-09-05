import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Forex News Without Whipsaws (Practical Playbook)',
  description: 'See spreads, slippage, and alternative tactics like straddles, fade plays, or standing aside during volatile news.',
}

export default function TradeNewsEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              💱 Forex & CFD Trading
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Trading Forex News Without Whipsaws (Practical Playbook)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See spreads, slippage, and alternative tactics like straddles, fade plays, or standing aside during volatile news.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Know the Risks</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">Spreads widen and orders fill worse than expected.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-700">Slippage on stops/entries is common.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700">Spikes reverse quickly—be prepared.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tactics</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Stand Aside</h3>
                  <p className="text-green-700">The safest option—trade the post-news trend.</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Straddle Orders</h3>
                  <p className="text-blue-700">Pending buy stop above range, sell stop below; cancel the other on fill (practice first!).</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Fade Overreaction</h3>
                  <p className="text-purple-700">Only with strict rules and confirmation.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• Check the economic calendar; avoid low liquidity times</li>
                  <li>• Use hard stops. Reduce size. Consider "no trade during red-flag news" rule</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do all news releases matter?</h3>
                  <p className="text-gray-600">Focus on tier-1 events for your pairs.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is VPS needed?</h3>
                  <p className="text-gray-600">Only if latency-sensitive strategies require it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}