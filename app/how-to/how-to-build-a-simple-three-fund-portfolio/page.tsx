import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Three-Fund Portfolio: The Simple, Diversified Setup',
  description: 'Build a low-cost three-fund portfolio using total US/Canada, international, and bonds—allocation examples inside.',
}

export default function ThreeFundPortfolioPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Three-Fund Portfolio</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to build a simple three-fund portfolio</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Build a low-cost three-fund portfolio using total US/Canada, international, and bonds—allocation examples inside.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>The three funds</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Domestic Total-Market Equity</h3>
            <p className="text-blue-700 text-sm mb-3">Broad exposure to your home country's stock market</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Examples:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• US: VTI, SWTSX</li>
                <li>• Canada: VTI, TDB900</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">International Total-Market Equity</h3>
            <p className="text-green-700 text-sm mb-3">Developed and emerging markets outside home country</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Examples:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• VTIAX, FTIHX</li>
                <li>• VEA + VWO (separate)</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Investment-Grade Bonds</h3>
            <p className="text-purple-700 text-sm mb-3">Stability and diversification from fixed income</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Examples:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• US: BND, VBTLX</li>
                <li>• Canada: VAB, TDB909</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Sample allocations</h2>
        <div className="space-y-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Aggressive (Young investors, long timeline)</h4>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  50%
                </div>
                <p className="font-medium text-red-800 text-sm">Domestic Equity</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-red-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  40%
                </div>
                <p className="font-medium text-red-800 text-sm">International</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-red-300 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  10%
                </div>
                <p className="font-medium text-red-800 text-sm">Bonds</p>
              </div>
            </div>
            <p className="text-red-700 text-sm">High growth potential, higher volatility. Good for 20+ year timeline.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Balanced (Moderate timeline, middle-aged)</h4>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  40%
                </div>
                <p className="font-medium text-blue-800 text-sm">Domestic Equity</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  30%
                </div>
                <p className="font-medium text-blue-800 text-sm">International</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  30%
                </div>
                <p className="font-medium text-blue-800 text-sm">Bonds</p>
              </div>
            </div>
            <p className="text-blue-700 text-sm">Balanced growth and stability. Good for 10-20 year timeline.</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Conservative (Near/in retirement, low risk)</h4>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  30%
                </div>
                <p className="font-medium text-green-800 text-sm">Domestic Equity</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  20%
                </div>
                <p className="font-medium text-green-800 text-sm">International</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-green-300 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  50%
                </div>
                <p className="font-medium text-green-800 text-sm">Bonds</p>
              </div>
            </div>
            <p className="text-green-700 text-sm">Lower volatility, steady income. Good for 5-10 year timeline.</p>
          </div>
        </div>

        <h2>How to maintain</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Maintenance Strategy</h3>
          <ol className="text-yellow-700 space-y-2">
            <li><strong>Automate purchases</strong> – Set up recurring buys to target percentages</li>
            <li><strong>Rebalance annually</strong> – Or when any fund drifts ±5% from target</li>
            <li><strong>Use new money first</strong> – Direct new contributions to underweight funds</li>
            <li><strong>Tax-smart rebalancing</strong> – Use tax-advantaged accounts for sells</li>
            <li><strong>Review annually</strong> – Adjust allocation as you age or goals change</li>
          </ol>
        </div>

        <h2>Sample three-fund implementations</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Platform</th>
                <th className="border border-gray-300 px-3 py-2">Domestic</th>
                <th className="border border-gray-300 px-3 py-2">International</th>
                <th className="border border-gray-300 px-3 py-2">Bonds</th>
                <th className="border border-gray-300 px-3 py-2">Total ER</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Vanguard ETFs</td>
                <td className="border border-gray-300 px-3 py-2">VTI (0.03%)</td>
                <td className="border border-gray-300 px-3 py-2">VXUS (0.08%)</td>
                <td className="border border-gray-300 px-3 py-2">BND (0.03%)</td>
                <td className="border border-gray-300 px-3 py-2">~0.05%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Fidelity</td>
                <td className="border border-gray-300 px-3 py-2">FZROX (0.00%)</td>
                <td className="border border-gray-300 px-3 py-2">FTIHX (0.06%)</td>
                <td className="border border-gray-300 px-3 py-2">FXNAX (0.03%)</td>
                <td className="border border-gray-300 px-3 py-2">~0.03%</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Canada (TD)</td>
                <td className="border border-gray-300 px-3 py-2">TDB902 (0.33%)</td>
                <td className="border border-gray-300 px-3 py-2">TDB911 (0.51%)</td>
                <td className="border border-gray-300 px-3 py-2">TDB909 (0.33%)</td>
                <td className="border border-gray-300 px-3 py-2">~0.39%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why include bonds?</h3>
              <p className="text-gray-700">Bonds dampen volatility and help you stay invested during stock market crashes. They also provide diversification and steady income.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use a one-ticket ETF instead?</h3>
              <p className="text-gray-700">Yes—funds like VTHRX, VEQT, or target-date funds offer built-in rebalancing. Less control but more convenience.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I choose my allocation?</h3>
              <p className="text-gray-700">Consider your age, risk tolerance, and timeline. A common rule: bond % = your age (40 years old = 40% bonds).</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I include REITs as a fourth fund?</h3>
              <p className="text-gray-700">Optional. REITs are already included in total market funds. A separate REIT fund adds complexity for modest diversification benefit.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-pick-etfs-for-beginners" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Pick ETFs for Beginners</h3>
              <p className="text-sm text-blue-700 mt-1">4 rules for choosing funds</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-understand-risk-tolerance-vs-capacity" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Risk Tolerance vs Capacity →</h3>
              <p className="text-sm text-green-700 mt-1">Know the difference for better allocation</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}