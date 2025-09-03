import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Save for a Down Payment Fast: 9 Proven Tactics',
  description: 'Use automated savings, "pay yourself first," side income, and tax-advantaged accounts to hit your down-payment goal sooner.',
}

export default function SaveDownPaymentFastPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Save Down Payment Fast</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to save for a down payment fast</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use automated savings, "pay yourself first," side income, and tax-advantaged accounts to hit your down-payment goal sooner.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            Set a target (price × down-payment %) and deadline, then automate weekly transfers to a high-yield account. Cut 3–5 big expenses, add a short-term side income, bank windfalls, and use employer stock/bonus programs wisely. Check first-time buyer incentives and allowable gifts; avoid risky investments for near-term goals.
          </p>
        </div>

        <h2>How much you need (down payment + closing costs + buffer)</h2>
        <p><strong>Total cash needed calculation:</strong></p>
        <div className="bg-gray-100 p-4 rounded my-4">
          <p className="font-mono">
            Down payment: Home price × % (5%, 10%, 20%)<br/>
            Closing costs: Home price × 2-5%<br/>
            Emergency buffer: 3-6 months of new mortgage payment<br/>
            <strong>Total target = Down payment + Closing + Buffer</strong>
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Home Price</th>
                <th className="border border-gray-300 px-4 py-2">10% Down</th>
                <th className="border border-gray-300 px-4 py-2">20% Down</th>
                <th className="border border-gray-300 px-4 py-2">Closing Costs</th>
                <th className="border border-gray-300 px-4 py-2">Total (20%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">$300,000</td>
                <td className="border border-gray-300 px-4 py-2">$30,000</td>
                <td className="border border-gray-300 px-4 py-2">$60,000</td>
                <td className="border border-gray-300 px-4 py-2">$6,000-15,000</td>
                <td className="border border-gray-300 px-4 py-2">$75,000-85,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">$500,000</td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
                <td className="border border-gray-300 px-4 py-2">$100,000</td>
                <td className="border border-gray-300 px-4 py-2">$10,000-25,000</td>
                <td className="border border-gray-300 px-4 py-2">$125,000-140,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Where to park cash (HISA/GICs/treasuries)</h2>
        <p><strong>Safe options for down payment funds:</strong></p>
        <ul>
          <li><strong>High-yield savings accounts:</strong> 4-5% APY, FDIC/CDIC insured, instant access</li>
          <li><strong>Money market accounts:</strong> Similar to HISA, may have check-writing</li>
          <li><strong>CDs/GICs:</strong> Fixed rates, terms of 6 months-2 years, penalties for early withdrawal</li>
          <li><strong>Treasury bills:</strong> 3-12 month terms, backed by government, no state tax (US)</li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Avoid for Down Payment Savings</h3>
          <ul className="text-red-700 space-y-1">
            <li>Stock market investments (too volatile for 1-3 year timeline)</li>
            <li>Cryptocurrency (extreme volatility)</li>
            <li>Long-term CDs (may need access before maturity)</li>
            <li>Your mattress (no growth, inflation risk)</li>
          </ul>
        </div>

        <h2>Automation &amp; expense triage</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Automation Setup</h3>
          <ol className="text-green-700 space-y-2">
            <li>Calculate target monthly savings (total needed ÷ months to buy)</li>
            <li>Set up automatic transfer on payday to separate savings account</li>
            <li>Use "pay yourself first" principle—save before discretionary spending</li>
            <li>Round-up apps to save spare change automatically</li>
            <li>Direct deposit percentage straight to down payment account</li>
          </ol>
        </div>

        <p><strong>Big expense cuts (target 3-5 items):</strong></p>
        <ul>
          <li><strong>Housing:</strong> Move to cheaper place, get roommate, house-sit</li>
          <li><strong>Transportation:</strong> Sell expensive car, use public transit, bike/walk</li>
          <li><strong>Food:</strong> Cook at home, meal prep, limit restaurants to special occasions</li>
          <li><strong>Subscriptions:</strong> Cancel unused services, negotiate bills, share accounts</li>
          <li><strong>Entertainment:</strong> Free activities, library events, reduce streaming services</li>
        </ul>

        <h2>Boost income (seasonal gigs, micro-skills)</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Quick Income Boosts</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>Sell items you don't need (furniture, electronics, clothes)</li>
              <li>Gig work (rideshare, delivery, TaskRabbit)</li>
              <li>Freelance your skills (writing, design, tutoring)</li>
              <li>Seasonal work (tax prep, holiday retail)</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Longer-term Income</h4>
            <ul className="text-purple-700 space-y-1 text-sm">
              <li>Ask for raise or promotion at current job</li>
              <li>Part-time evening/weekend job</li>
              <li>Online business (Etsy, dropshipping)</li>
              <li>Rent out parking space or storage</li>
            </ul>
          </div>
        </div>

        <h2>Grants, tax credits, gifts (program rules)</h2>
        <p><strong>First-time buyer programs:</strong></p>
        <ul>
          <li><strong>Down payment assistance programs:</strong> Many cities/states offer grants or low-interest loans</li>
          <li><strong>FHA loans:</strong> 3.5% down minimum</li>
          <li><strong>VA loans:</strong> $0 down for qualified veterans</li>
          <li><strong>USDA loans:</strong> $0 down in rural areas</li>
          <li><strong>Good Neighbor Next Door:</strong> 50% discount for teachers, firefighters, etc.</li>
        </ul>

        <p><strong>Gift money rules:</strong></p>
        <ul>
          <li>Most lenders allow gift funds for down payment</li>
          <li>Must be from family member (spouse, parent, sibling, grandparent)</li>
          <li>Requires signed gift letter stating it's not a loan</li>
          <li>Document paper trail from donor's account</li>
          <li>Some programs have limits on gift percentage</li>
        </ul>

        <p><strong>Tax-advantaged accounts:</strong></p>
        <ul>
          <li><strong>First-Time Homebuyer RRSP (Canada):</strong> Withdraw up to $35,000 tax-free</li>
          <li><strong>Roth IRA (US):</strong> Withdraw contributions anytime; $10,000 earnings for first home</li>
          <li><strong>401(k) loan:</strong> Borrow against your balance (risky, has restrictions)</li>
        </ul>

        <h2>Avoiding common mistakes (market risk, dipping into RRSP/401k without a plan)</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Common Pitfalls</h3>
          <ul className="text-yellow-700 space-y-2">
            <li><strong>Investing in stocks:</strong> Can lose 20-50% right when you need to buy</li>
            <li><strong>Not accounting for closing costs:</strong> Budget 2-5% of purchase price</li>
            <li><strong>Raiding retirement early:</strong> Taxes, penalties, lost compound growth</li>
            <li><strong>Taking on debt to save:</strong> Credit cards, personal loans defeat the purpose</li>
            <li><strong>Setting unrealistic timeline:</strong> Rushing leads to poor decisions</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Sample Savings Plan</h3>
          <p className="text-blue-700 mb-3"><strong>Goal:</strong> $80,000 in 24 months ($3,333/month)</p>
          <ul className="text-blue-700 space-y-1">
            <li>Current income after tax: $5,000/month</li>
            <li>Cut expenses by: $1,500/month</li>
            <li>Side income: $800/month</li>
            <li>Family gift: $20,000</li>
            <li>Monthly savings: $2,500 × 24 = $60,000 + $20,000 gift = $80,000 ✓</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How big should the emergency buffer be?</h3>
              <p className="text-gray-700">Keep 3-6 months of your NEW mortgage payment separate from down payment. This protects against job loss or major repairs early on.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I invest down-payment funds in the stock market?</h3>
              <p className="text-gray-700">Not recommended for funds needed within 3 years. Market volatility could force you to sell at a loss right when you want to buy.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the gift money rules?</h3>
              <p className="text-gray-700">Must be from close family, require gift letter, and document the transfer. Some loan programs limit gift percentage or require some of your own funds.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-build-a-monthly-budget-that-actually-works" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Build Monthly Budget</h3>
              <p className="text-sm text-blue-700 mt-1">Framework that actually works</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-get-pre-approved-for-a-mortgage" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Get Pre-Approved Next →</h3>
              <p className="text-sm text-green-700 mt-1">Documents and timeline guide</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}