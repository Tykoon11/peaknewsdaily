import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Close a Credit Card Without Hurting Your Credit Score',
  description: 'Sometimes closing a card makes sense. Learn how to protect your score, points, and history with downgrades, reallocations, and timing.',
}

export default function HowToCloseCardWithoutHurtingScore() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Close Card Without Hurting Score</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💎
          </div>
          <span className="text-pink-600 font-medium">Credit Cards & Rewards</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Close a Credit Card Without Hurting Your Credit Score
        </h1>
        <p className="text-xl text-gray-600">
          Sometimes closing a card makes sense. Learn how to protect your score, points, and history with downgrades, reallocations, and timing.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🎯 Safe Card Closure Strategy</h3>
          <p className="text-pink-700">
            To close a card safely, first consider product changing or reallocating credit to protect utilization. Redeem or move points, stop autopays, and wait for a zero balance. After closing, monitor your utilization and score for changes.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Closing a Card Can Be the Right Move—But Do It Carefully</h3>
          <p className="mb-4">
            Closing a card can be the right move—but do it carefully. Your score is sensitive to utilization and account age, so explore alternatives first: product change to a no-fee card or reallocate some credit to another card with the same issuer. Before you close, make sure the balance is $0, redeem or transfer points, and move any autopays.
          </p>
          <p>
            Then confirm the closure in writing and watch your reports for updates over the next two statements. This guide walks you through each step to keep your credit intact.
          </p>
        </div>

        <h2>When Closing Is Reasonable (Fees, Overlap, Low Use)</h2>

        <p>Sometimes closing a card makes financial sense despite the potential score impact.</p>

        <h3>Good Reasons to Close a Card</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Financial Reasons</h4>
            <ul className="text-red-700 space-y-2">
              <li>• High annual fee with unused benefits</li>
              <li>• Temptation to overspend</li>
              <li>• Variable APR increased significantly</li>
              <li>• Issuer changed terms unfavorably</li>
              <li>• Too many cards to manage effectively</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-3">Practical Reasons</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Duplicate rewards categories</li>
              <li>• Poor customer service experience</li>
              <li>• Limited acceptance network</li>
              <li>• Better alternatives available</li>
              <li>• Simplifying your wallet</li>
            </ul>
          </div>
        </div>

        <h3>Annual Fee Decision Matrix</h3>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-gray-800 mb-4">Keep vs Close Decision</h4>
          <div className="space-y-3">
            <p><strong>Keep if:</strong> Annual benefits value exceeds annual fee + score impact cost</p>
            <p><strong>Consider downgrade if:</strong> Benefits are less than fee but account age is valuable</p>
            <p><strong>Close if:</strong> No downgrade option + benefits do not justify fee + minimal score impact</p>
          </div>
        </div>

        <h2>Protecting Your Credit: Age, Utilization, Mix</h2>

        <p>Understand how closing cards affects your credit score components.</p>

        <h3>Credit Score Factors Affected by Card Closures</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Credit Factor</th>
                <th className="px-4 py-3 text-left font-semibold">Percent of Score</th>
                <th className="px-4 py-3 text-left font-semibold">Impact When Closing</th>
                <th className="px-4 py-3 text-left font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Payment History</td>
                <td className="px-4 py-3">35 percent</td>
                <td className="px-4 py-3 text-green-600">No immediate impact</td>
                <td className="px-4 py-3">History remains for years</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Credit Utilization</td>
                <td className="px-4 py-3">30 percent</td>
                <td className="px-4 py-3 text-red-600">Immediate increase</td>
                <td className="px-4 py-3">Next statement cycle</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Length of Credit History</td>
                <td className="px-4 py-3">15 percent</td>
                <td className="px-4 py-3 text-yellow-600">Delayed impact</td>
                <td className="px-4 py-3">10 years later</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Credit Mix</td>
                <td className="px-4 py-3">10 percent</td>
                <td className="px-4 py-3 text-yellow-600">Minor impact</td>
                <td className="px-4 py-3">Immediate</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">New Credit</td>
                <td className="px-4 py-3">10 percent</td>
                <td className="px-4 py-3 text-green-600">No impact</td>
                <td className="px-4 py-3">Not affected</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Utilization Impact (The Big One)</h3>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-semibold text-red-800 mb-3">⚠️ Utilization Spike Risk</h4>
          <p className="text-red-700 mb-3">
            Closing a card immediately reduces your total available credit, which can spike your utilization ratio even if you do not spend more money.
          </p>
          <div className="space-y-2 text-red-700">
            <p><strong>Before:</strong> $1,000 balance ÷ $10,000 total limit = 10 percent utilization</p>
            <p><strong>After closing $3,000 limit card:</strong> $1,000 balance ÷ $7,000 limit = 14.3 percent utilization</p>
          </div>
        </div>

        <h2>Alternatives First: Product Change or Limit Reallocation</h2>

        <p>Before closing, explore options that protect your credit while addressing your concerns.</p>

        <h3>Product Change (Downgrade)</h3>

        <ul>
          <li><strong>Switch to no-fee version:</strong> Keep account history without annual fee</li>
          <li><strong>Same issuer family:</strong> Must be within same card product family</li>
          <li><strong>Preserves account age:</strong> Original opening date stays the same</li>
          <li><strong>Keeps credit limit:</strong> Usually maintains same available credit</li>
          <li><strong>No hard inquiry:</strong> Does not add another pull to credit report</li>
        </ul>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">🚀 Safe Card Closure Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Consider product change or limit reallocation first</li>
            <li>☐ Calculate utilization impact before closing</li>
            <li>☐ Pay balance to $0</li>
            <li>☐ Redeem or transfer all points and rewards</li>
            <li>☐ Switch all autopays to other cards</li>
            <li>☐ Use remaining annual benefits</li>
            <li>☐ Call to close and get written confirmation</li>
            <li>☐ Monitor credit reports for closure</li>
            <li>☐ Track score changes over next 3 months</li>
            <li>☐ Adjust spending patterns if utilization spikes</li>
          </ul>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-downgrade-or-product-change-a-card" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Downgrade or Product-Change Card</h3>
            <p className="text-pink-600 text-sm mt-2">Keep account history without annual fees</p>
          </Link>
          <Link href="/how-to/how-to-get-a-credit-limit-increase-responsibly" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Credit Limit Increase</h3>
            <p className="text-pink-600 text-sm mt-2">Offset lost credit limits on remaining cards</p>
          </Link>
          <Link href="/how-to/how-to-redeem-points-for-the-highest-value" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Redeem Points for Maximum Value</h3>
            <p className="text-pink-600 text-sm mt-2">Use rewards before losing the card</p>
          </Link>
          <Link href="/how-to/how-to-choose-your-first-credit-card" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Your First Credit Card</h3>
            <p className="text-pink-600 text-sm mt-2">Replace closed cards strategically</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Does closing a credit card erase my payment history?</h3>
            <p className="text-gray-600">
              No, closed accounts in good standing typically stay on your credit report for 10 years, continuing to contribute positively to your payment history and average account age during that time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I close my card before the annual fee posts?</h3>
            <p className="text-gray-600">
              Time it carefully to avoid another fee. Some issuers offer prorated refunds if you close within 30-60 days of the fee posting, but it is usually better to close before the fee hits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What if closing the card makes my utilization spike?</h3>
            <p className="text-gray-600">
              Consider reallocating the credit limit to another card with the same issuer, or pay down balances on your remaining cards before closing. You can also request limit increases on other cards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I reopen a closed credit card?</h3>
            <p className="text-gray-600">
              Some issuers allow reopening within 30 days of closure, but it is not guaranteed. After 30 days, you would typically need to apply as a new customer, which may not qualify for signup bonuses you have previously received.
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does closing a credit card erase my payment history?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Closed accounts in good standing can stay on your report for years."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Should I close my card before the annual fee posts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Time it to avoid another fee; some issuers offer prorated refunds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if closing the card makes my utilization spike?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Reallocate limit or pay other balances first."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </div>
  )
}