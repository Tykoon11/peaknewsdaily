import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paper Trading: Set It Up Right (Realistic Rules & Routines)',
  description: 'A realistic paper account template + habits to avoid bad fills and overconfidence.',
}

export default function PaperTradingSetupPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Paper Trading Setup</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">Paper Trading: Set It Up Right (Realistic Rules & Routines)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A realistic paper account template + habits to avoid bad fills and overconfidence.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Choose a platform</h2>
        
        <p><strong>Match to your live broker</strong> whenever possible. If you plan to trade with TD Ameritrade, use thinkorswim's Paper Money. Planning on Interactive Brokers? Use their Trader Workstation demo.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Platform Selection Criteria</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Same order entry interface as live account</li>
              <li>• Identical market data feeds (Level 1 vs Level 2)</li>
              <li>• Realistic execution simulation</li>
              <li>• Access to same asset classes (stocks, options, futures)</li>
              <li>• Mobile app functionality if needed</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Market Data Requirements</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• Real-time quotes for active strategies</li>
              <li>• 15-minute delay acceptable for swing trading</li>
              <li>• Level 2 data if you trade momentum/scalping</li>
              <li>• TotalView for full order book practice</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://www.nasdaq.com/solutions/nasdaq-totalview" className="text-purple-600 hover:underline" target="_blank" rel="noopener">Nasdaq TotalView Details</a>
            </div>
          </div>
        </div>

        <h2>Configure realism</h2>
        
        <p>The biggest mistake in paper trading is unrealistic settings that give false confidence. Configure your simulator to mirror real-world conditions:</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Setting</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Realistic Configuration</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Starting Capital</td>
                <td className="border border-gray-300 px-3 py-2">Match your actual available funds</td>
                <td className="border border-gray-300 px-3 py-2">Practice proper position sizing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Commissions</td>
                <td className="border border-gray-300 px-3 py-2">$0 stocks, $0.50-0.65 options contracts</td>
                <td className="border border-gray-300 px-3 py-2">Account for real trading costs</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Slippage</td>
                <td className="border border-gray-300 px-3 py-2">1-3 cents on liquid stocks, more on illiquid</td>
                <td className="border border-gray-300 px-3 py-2">Market orders rarely get perfect fills</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Track results</h2>
        
        <p>The goal isn't just to make paper profits—it's to develop systems and habits that work with real money.</p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Pre-Trade Checklist</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Why am I entering this trade?</li>
              <li>• What's my exact entry trigger?</li>
              <li>• Where will I take profits?</li>
              <li>• What's my stop-loss level?</li>
              <li>• How much am I risking?</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">During the Trade</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Did my entry execute as planned?</li>
              <li>• Am I managing emotions properly?</li>
              <li>• Is the trade thesis still valid?</li>
              <li>• Should I adjust my stop-loss?</li>
              <li>• Am I following my plan?</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Post-Trade Review</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• What went right/wrong?</li>
              <li>• Did I follow my rules?</li>
              <li>• Was entry timing optimal?</li>
              <li>• How can I improve next time?</li>
              <li>• Was position size appropriate?</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Even experienced traders return to paper trading when testing new strategies, trading in new market conditions, 
            or after a string of losses. There's no shame in stepping back to practice—it's a sign of discipline.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should I paper trade before going live?</h3>
              <p className="text-gray-700">
                Minimum 3 months of consistent results, but many traders benefit from 6-12 months. 
                Focus on consistency and discipline rather than arbitrary time periods.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I paper trade the exact same dollar amounts I'll trade live?</h3>
              <p className="text-gray-700">
                Yes—use position sizes you can actually afford. This teaches proper risk management and 
                prevents overconfidence from unrealistic position sizing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my paper trading results are too good to be true?</h3>
              <p className="text-gray-700">
                They probably are. Check your settings for unrealistic fills, no slippage, or perfect timing. 
                Real trading includes costs and imperfections that paper trading often ignores.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-a-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose Your Broker First</h3>
              <p className="text-sm text-blue-700 mt-1">Match your paper trading platform to your intended live broker</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-use-level-2-quotes-and-time-sales" 
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900">Level 2 Data & Order Flow →</h3>
              <p className="text-sm text-purple-700 mt-1">Advanced tools for serious paper traders</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}