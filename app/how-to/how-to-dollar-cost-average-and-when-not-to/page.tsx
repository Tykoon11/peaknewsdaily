import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dollar-Cost Averaging: How It Works (And When Not To)',
  description: 'Automate investing on a schedule—benefits, drawbacks, and when lump sum may be better.',
}

export default function DollarCostAveragingPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Dollar-Cost Averaging</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to dollar-cost average (and when not to)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Automate investing on a schedule—benefits, drawbacks, and when lump sum may be better.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>How to DCA</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Simple Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li><strong>Pick a schedule</strong> (weekly/bi-weekly/monthly)</li>
            <li><strong>Set automatic transfers</strong> + buys</li>
            <li><strong>Use the same ETF(s)</strong> each time</li>
            <li><strong>Stick to the plan</strong> regardless of market conditions</li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Example DCA Setup</h3>
          <div className="space-y-2 text-blue-700">
            <p><strong>Amount:</strong> $500/month</p>
            <p><strong>Schedule:</strong> 1st of every month</p>
            <p><strong>Investment:</strong> VTI (Total Stock Market)</p>
            <p><strong>Result:</strong> Buy more shares when prices are low, fewer when high</p>
          </div>
        </div>

        <h2>How DCA works</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2">Month</th>
                <th className="border border-gray-300 px-3 py-2">Investment</th>
                <th className="border border-gray-300 px-3 py-2">Share Price</th>
                <th className="border border-gray-300 px-3 py-2">Shares Bought</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Jan</td>
                <td className="border border-gray-300 px-3 py-2">$500</td>
                <td className="border border-gray-300 px-3 py-2">$100</td>
                <td className="border border-gray-300 px-3 py-2">5.00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Feb</td>
                <td className="border border-gray-300 px-3 py-2">$500</td>
                <td className="border border-gray-300 px-3 py-2">$80</td>
                <td className="border border-gray-300 px-3 py-2">6.25</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Mar</td>
                <td className="border border-gray-300 px-3 py-2">$500</td>
                <td className="border border-gray-300 px-3 py-2">$120</td>
                <td className="border border-gray-300 px-3 py-2">4.17</td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border border-gray-300 px-3 py-2">Total</td>
                <td className="border border-gray-300 px-3 py-2">$1,500</td>
                <td className="border border-gray-300 px-3 py-2">Avg: $97.56</td>
                <td className="border border-gray-300 px-3 py-2">15.42</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600">Average cost per share: $97.56 vs. simple average price of $100</p>

        <h2>Benefits of DCA</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Reduces timing risk</h4>
            <p className="text-green-700 text-sm">You don't need to guess the best time to invest. Market timing is extremely difficult even for professionals.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Eliminates decision fatigue</h4>
            <p className="text-green-700 text-sm">Set it and forget it. No need to constantly decide when and how much to invest.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Builds discipline</h4>
            <p className="text-green-700 text-sm">Forces regular investing habit. Helps you invest during scary market periods.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Smooths volatility</h4>
            <p className="text-green-700 text-sm">Reduces impact of short-term market swings on your average purchase price.</p>
          </div>
        </div>

        <h2>When NOT to DCA</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Lump Sum May Be Better When:</h3>
          <ul className="text-red-700 space-y-3">
            <li>
              <strong>You already have a large lump sum</strong>
              <div className="text-sm mt-1">If you have $50k sitting in cash and a long timeline, historical data shows lump sum investing often outperforms DCA (~65% of the time)</div>
            </li>
            <li>
              <strong>High trading fees</strong>
              <div className="text-sm mt-1">$5-10 commission per trade makes frequent small purchases expensive</div>
            </li>
            <li>
              <strong>Account minimums</strong>
              <div className="text-sm mt-1">Some funds require $1,000+ minimums that prevent small regular purchases</div>
            </li>
            <li>
              <strong>Tax considerations</strong>
              <div className="text-sm mt-1">In taxable accounts, spreading purchases may create more tax complexity</div>
            </li>
          </ul>
        </div>

        <h2>DCA vs Lump Sum: The Evidence</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Research Findings</h3>
          <div className="space-y-3 text-yellow-700">
            <p><strong>Vanguard Study Results:</strong></p>
            <ul className="space-y-2 text-sm">
              <li>• Lump sum beat DCA ~67% of the time over 10+ year periods</li>
              <li>• Average outperformance: 1-3% annually</li>
              <li>• Reason: Markets trend upward over time</li>
            </ul>
            <p><strong>But DCA still makes sense for:</strong></p>
            <ul className="space-y-2 text-sm">
              <li>• Regular income investors (most people)</li>
              <li>• Risk-averse investors who sleep better</li>
              <li>• Behavioral benefits of automation</li>
            </ul>
          </div>
        </div>

        <h2>Best practices for DCA</h2>
        <div className="space-y-4 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Choose your frequency</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• <strong>Weekly:</strong> Maximum volatility smoothing, more transactions</li>
              <li>• <strong>Bi-weekly:</strong> Aligns with paychecks, good balance</li>
              <li>• <strong>Monthly:</strong> Most common, easier to track</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibant text-purple-800 mb-3">Align with your cash flow</h4>
            <p className="text-purple-700 text-sm mb-2">Best schedule matches when you get paid:</p>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Get paid monthly? Invest monthly</li>
              <li>• Get paid bi-weekly? Consider bi-weekly investing</li>
              <li>• Irregular income? Set aside money and DCA from savings</li>
            </ul>
          </div>
        </div>

        <h2>Setting up automated DCA</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Step-by-Step Setup</h3>
          <ol className="text-gray-700 space-y-2">
            <li><strong>1.</strong> Set up automatic bank transfer to brokerage</li>
            <li><strong>2.</strong> Enable automatic investing in your chosen ETF(s)</li>
            <li><strong>3.</strong> Choose dollar amount and frequency</li>
            <li><strong>4.</strong> Enable dividend reinvestment (DRIP)</li>
            <li><strong>5.</strong> Set calendar reminder to review annually</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will DCA guarantee profits?</h3>
              <p className="text-gray-700">No—just smooths entry points. If markets decline over your entire investing period, DCA won't save you from losses.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the best schedule?</h3>
              <p className="text-gray-700">Align with your pay cycle for consistency. Monthly is most popular and practical for most investors.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I pause DCA during market crashes?</h3>
              <p className="text-gray-700">No! That defeats the purpose. Crashes are when DCA works best—you're buying more shares at lower prices.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I DCA and lump sum invest?</h3>
              <p className="text-gray-700">Yes! DCA your regular income and lump sum invest windfalls (bonuses, tax refunds, inheritance).</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-understand-risk-tolerance-vs-capacity" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Risk Tolerance vs Capacity</h3>
              <p className="text-sm text-blue-700 mt-1">Know the difference</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-rebalance-your-portfolio-automatically" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Auto-Rebalance Portfolio →</h3>
              <p className="text-sm text-green-700 mt-1">Keep your allocation on target</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}