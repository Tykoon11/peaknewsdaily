import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Investing With $100: Step-by-Step Guide',
  description: 'Only have $100? Learn the exact steps to open an account, pick your first fund, automate contributions, and avoid newbie mistakes.',
}

export default function StartInvestingWith100Page() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Start Investing With $100</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📈
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to start investing with $100 (step by step)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Only have $100? Learn the exact steps to open an account, pick your first fund, automate contributions, and avoid newbie mistakes.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">TL;DR</h2>
          <p className="text-blue-700">
            Open a no-fee brokerage, buy one broad-market ETF, automate $25–$100/month, and leave it alone.
          </p>
        </div>

        <h2>Step-by-step</h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Step 1: Pick a platform</h3>
          <p className="text-green-700 mb-3">Choose a $0-commission brokerage with fractional shares.</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">US Options</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Fidelity, Schwab, Vanguard</li>
                <li>• Robinhood, Webull (mobile-first)</li>
                <li>• M1 Finance (auto-investing)</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">Canada Options</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Questrade, Interactive Brokers</li>
                <li>• Wealthsimple Trade</li>
                <li>• TD Direct, RBC Direct</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Step 2: Open the right account</h3>
          <p className="text-blue-700 mb-3">Tax-advantaged first, then taxable.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left p-2 font-semibold">Account Type</th>
                  <th className="text-left p-2 font-semibold">US</th>
                  <th className="text-left p-2 font-semibold">Canada</th>
                  <th className="text-left p-2 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="text-blue-700">
                <tr className="bg-white">
                  <td className="p-2 font-medium">Tax-Free Growth</td>
                  <td className="p-2">Roth IRA</td>
                  <td className="p-2">TFSA</td>
                  <td className="p-2">Young investors</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Tax Deferred</td>
                  <td className="p-2">Traditional IRA</td>
                  <td className="p-2">RRSP</td>
                  <td className="p-2">Higher earners</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 font-medium">Taxable</td>
                  <td className="p-2">Brokerage</td>
                  <td className="p-2">Non-registered</td>
                  <td className="p-2">After maxing above</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Step 3: Fund it</h3>
          <ul className="text-purple-700 space-y-2">
            <li>• Deposit your $100 (bank transfer, check, wire)</li>
            <li>• Set up automatic transfers: $25-100 every payday</li>
            <li>• Most platforms allow weekly/bi-weekly/monthly schedules</li>
            <li>• Start small and increase as you get comfortable</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Step 4: Buy one ETF</h3>
          <p className="text-yellow-700 mb-3">A total-market or S&P 500 ETF is enough to start.</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">US Beginner ETFs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>VTI</strong> - Total US Stock Market</li>
                <li>• <strong>VOO</strong> - S&P 500 Index</li>
                <li>• <strong>VT</strong> - Total World Stock</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">Canada Beginner ETFs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>VFV</strong> - S&P 500 (CAD)</li>
                <li>• <strong>TDB902</strong> - Total Market</li>
                <li>• <strong>VEQT</strong> - Global Equity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Step 5: Automate &amp; ignore</h3>
          <ul className="text-red-700 space-y-2">
            <li>• Enable dividend reinvestment (DRIP)</li>
            <li>• Set up recurring purchases of the same ETF</li>
            <li>• Add $25-100 each payday automatically</li>
            <li>• Don't check daily prices - check quarterly at most</li>
            <li>• Focus on increasing your income and savings rate</li>
          </ul>
        </div>

        <h2>Example allocation (starter)</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                100%
              </div>
              <p className="font-semibold text-gray-800">Broad-Market Equity ETF</p>
              <p className="text-sm text-gray-600 mt-2">Simple, diversified, low-cost</p>
            </div>
          </div>
        </div>

        <h2>Common mistakes to avoid</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <ul className="text-red-700 space-y-3">
            <li>
              <strong>❌ Chasing hot stocks/crypto on day 1</strong>
              <br />
              <span className="text-sm">Start with broad market exposure, speculate later with "play money"</span>
            </li>
            <li>
              <strong>❌ Over-diversifying with 10+ funds</strong>
              <br />
              <span className="text-sm">One broad ETF gives you thousands of stocks already</span>
            </li>
            <li>
              <strong>❌ Timing the market instead of automating</strong>
              <br />
              <span className="text-sm">Time in market beats timing the market</span>
            </li>
            <li>
              <strong>❌ Not having an emergency fund first</strong>
              <br />
              <span className="text-sm">Keep 3-6 months expenses in savings before investing</span>
            </li>
            <li>
              <strong>❌ Investing while carrying high-interest debt</strong>
              <br />
              <span className="text-sm">Pay off credit cards (20%+ interest) before investing (7-10% expected)</span>
            </li>
          </ul>
        </div>

        <h2>The power of starting small</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Monthly Investment</th>
                <th className="border border-gray-300 px-4 py-2">After 10 Years</th>
                <th className="border border-gray-300 px-4 py-2">After 20 Years</th>
                <th className="border border-gray-300 px-4 py-2">After 30 Years</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">$50/month</td>
                <td className="border border-gray-300 px-4 py-2">$8,200</td>
                <td className="border border-gray-300 px-4 py-2">$24,700</td>
                <td className="border border-gray-300 px-4 py-2">$58,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">$100/month</td>
                <td className="border border-gray-300 px-4 py-2">$16,400</td>
                <td className="border border-gray-300 px-4 py-2">$49,400</td>
                <td className="border border-gray-300 px-4 py-2">$116,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">$200/month</td>
                <td className="border border-gray-300 px-4 py-2">$32,800</td>
                <td className="border border-gray-300 px-4 py-2">$98,800</td>
                <td className="border border-gray-300 px-4 py-2">$232,000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-2">*Assumes 7% annual return. Past performance doesn't guarantee future results.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is $100 enough to start investing?</h3>
              <p className="text-gray-700">Yes—fractional shares make it workable. Many brokerages have no minimums and you can buy partial shares of expensive ETFs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I buy more?</h3>
              <p className="text-gray-700">Automate monthly or on payday. Weekly if you want to smooth out volatility more, but monthly is usually sufficient and reduces fees.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I wait for a market crash to invest?</h3>
              <p className="text-gray-700">No. Time in the market beats timing the market. Start now with small amounts and keep investing regularly regardless of market conditions.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need the money soon?</h3>
              <p className="text-gray-700">Only invest money you won't need for 5+ years. Keep emergency funds and short-term goals in savings accounts.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Next Steps</h3>
          <p className="text-blue-700">Ready to level up? Learn about building a simple three-fund portfolio and understanding expense ratios.</p>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-a-brokerage-account-checklist" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose a Brokerage</h3>
              <p className="text-sm text-blue-700 mt-1">Complete checklist for picking the right platform</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-pick-etfs-for-beginners" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Pick ETFs for Beginners →</h3>
              <p className="text-sm text-green-700 mt-1">4 rules for choosing beginner-friendly funds</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}