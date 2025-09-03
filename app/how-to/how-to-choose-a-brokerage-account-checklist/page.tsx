import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brokerage Account Checklist: Pick the Right One',
  description: 'Fees, fractional shares, account types, and support—use this checklist to pick the best brokerage for your needs.',
}

export default function ChooseBrokerageAccountPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Choose Brokerage Account</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to choose a brokerage account (checklist)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Fees, fractional shares, account types, and support—use this checklist to pick the best brokerage for your needs.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>The quick checklist</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Must-Haves</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">$0 trading commissions &amp; no inactivity fees</p>
                <p className="text-sm text-green-700">Avoid $4.95+ per trade or monthly maintenance fees</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Fractional shares + dividend reinvestment (DRIP)</p>
                <p className="text-sm text-green-700">Buy partial shares of expensive stocks/ETFs automatically</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Account types: tax-advantaged + taxable</p>
                <p className="text-sm text-green-700">IRA/TFSA/RRSP for tax benefits, regular accounts for flexibility</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Automation: recurring buys &amp; transfers</p>
                <p className="text-sm text-green-700">Set up dollar-cost averaging without manual work</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Order types: market, limit, stop</p>
                <p className="text-sm text-green-700">Basic order types for better execution</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Mobile + desktop reliability, 2FA security</p>
                <p className="text-sm text-green-700">Apps that don't crash during market volatility</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Customer support and easy transfers out</p>
                <p className="text-sm text-green-700">Phone support, ACATS transfers, no exit fees</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5">✓</div>
              <div>
                <p className="font-medium text-green-800">Regulatory protection</p>
                <p className="text-sm text-green-700">CIPF/CDIC (Canada) or SIPC/FDIC (US) coverage</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Nice-to-haves</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Advanced Features</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Auto-rebalancing portfolios</li>
                <li>• Tax-loss harvesting</li>
                <li>• Research tools &amp; analysis</li>
                <li>• Extended hours trading</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Convenience</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• High cash sweep APY</li>
                <li>• Easy tax form exports</li>
                <li>• API access for tracking</li>
                <li>• Educational content</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Popular brokerage comparison</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Brokerage</th>
                <th className="border border-gray-300 px-3 py-2">Commissions</th>
                <th className="border border-gray-300 px-3 py-2">Fractional</th>
                <th className="border border-gray-300 px-3 py-2">Min Deposit</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Fidelity</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Yes</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Beginners, research</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Schwab</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Yes</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Full service, checking</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Vanguard</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Limited</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Index investors</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Questrade (CA)</td>
                <td className="border border-gray-300 px-3 py-2">Free ETFs</td>
                <td className="border border-gray-300 px-3 py-2">No</td>
                <td className="border border-gray-300 px-3 py-2">$1,000</td>
                <td className="border border-gray-300 px-3 py-2">ETF investors</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Wealthsimple (CA)</td>
                <td className="border border-gray-300 px-3 py-2">$0 CAD</td>
                <td className="border border-gray-300 px-3 py-2">Yes</td>
                <td className="border border-gray-300 px-3 py-2">$0</td>
                <td className="border border-gray-300 px-3 py-2">Simple, mobile-first</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Red flags to avoid</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Avoid These Features</h3>
          <ul className="text-red-700 space-y-2">
            <li><strong>❌ High trading commissions</strong> - $4.95+ per trade adds up fast</li>
            <li><strong>❌ Monthly maintenance fees</strong> - $25/month = $300/year in fees</li>
            <li><strong>❌ High minimum deposits</strong> - $2,500+ prevents getting started</li>
            <li><strong>❌ Limited investment options</strong> - No ETFs, only mutual funds</li>
            <li><strong>❌ Poor customer reviews</strong> - Apps that crash, no phone support</li>
            <li><strong>❌ Complex fee structures</strong> - Hidden charges, inactivity penalties</li>
            <li><strong>❌ No fractional shares</strong> - Limits diversification with small amounts</li>
          </ul>
        </div>

        <h2>Account types explained</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Tax-Advantaged Accounts</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-700">Roth IRA / TFSA</p>
                <p className="text-sm text-green-600">Tax-free growth, withdraw anytime (contributions)</p>
              </div>
              <div>
                <p className="font-medium text-green-700">Traditional IRA / RRSP</p>
                <p className="text-sm text-green-600">Tax deduction now, pay taxes when withdrawing</p>
              </div>
              <div>
                <p className="font-medium text-green-700">401(k) / Group RRSP</p>
                <p className="text-sm text-green-600">Employer match, higher contribution limits</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Taxable Accounts</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-700">Individual Brokerage</p>
                <p className="text-sm text-blue-600">No contribution limits, full flexibility</p>
              </div>
              <div>
                <p className="font-medium text-blue-700">Joint Account</p>
                <p className="text-sm text-blue-600">Shared ownership with spouse/partner</p>
              </div>
              <div>
                <p className="font-medium text-blue-700">Trust Account</p>
                <p className="text-sm text-blue-600">For beneficiaries, estate planning</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Security features to verify</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Security Checklist</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>✓ Two-factor authentication (2FA) required</li>
            <li>✓ SIPC insurance up to $500k (US) or CIPF coverage (Canada)</li>
            <li>✓ Bank-level encryption (256-bit SSL)</li>
            <li>✓ Account alerts for logins, trades, transfers</li>
            <li>✓ Ability to set trading restrictions/limits</li>
            <li>✓ Clean regulatory record (check FINRA BrokerCheck)</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need multiple brokerages?</h3>
              <p className="text-gray-700">Not at the start—simplicity wins. Choose one good platform and focus on investing consistently. You can always transfer later.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are fractional shares important?</h3>
              <p className="text-gray-700">Yes—they unlock diversification with small amounts. Without them, you'd need $400+ to buy one share of some ETFs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I pick the wrong broker?</h3>
              <p className="text-gray-700">You can transfer your account to a new broker using ACATS transfers. Most good brokers will even pay the transfer fee.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I use a robo-advisor instead?</h3>
              <p className="text-gray-700">Robo-advisors are good for beginners who want full automation, but they charge 0.25-0.50% annually. DIY ETF investing is cheaper.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-start-investing-with-100-step-by-step" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Start Investing With $100</h3>
              <p className="text-sm text-blue-700 mt-1">Step-by-step beginner guide</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-pick-etfs-for-beginners" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Pick ETFs for Beginners →</h3>
              <p className="text-sm text-green-700 mt-1">4 rules for choosing funds</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}