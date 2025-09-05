import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Downgrade or Product-Change a Credit Card (Step by Step)',
  description: 'Keep your account history and avoid annual fees by downgrading or product-changing. Learn rules, timelines, and pitfalls for each issuer.',
}

export default function HowToDowngradeOrProductChangeCard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Downgrade or Product-Change Card</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💎
          </div>
          <span className="text-pink-600 font-medium">Credit Cards & Rewards</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Downgrade or Product-Change a Credit Card (Step by Step)
        </h1>
        <p className="text-xl text-gray-600">
          Keep your account history and avoid annual fees by downgrading or product-changing. Learn rules, timelines, and pitfalls for each issuer.
        </p>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🎯 Smart Downgrade Strategy</h3>
          <p className="text-pink-700">
            Before your annual fee posts, call your issuer to product-change to a no-fee card in the same family. This keeps your account history, credit limit, and account age while eliminating fees. Best done 30-60 days before the annual fee is due.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Keep Your Credit History Without the Annual Fee</h3>
          <p className="mb-4">
            Keep your credit history without the annual fee. A product change (also called downgrading) lets you switch to a different card within the same issuer's family while preserving your original account opening date, payment history, and often your credit limit.
          </p>
          <p>
            This is one of the smartest moves in credit card management—you avoid annual fees, maintain your account age for credit scoring, and keep your available credit for utilization calculations. This guide covers when to downgrade, how to do it with each major issuer, and what to watch out for.
          </p>
        </div>

        <h2>Why Product Changes Beat Closing Cards</h2>

        <p>Understanding the benefits of product changes over account closures helps you make the right decision.</p>

        <h3>What You Keep vs What You Lose</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Factor</th>
                <th className="px-4 py-3 text-left font-semibold">Product Change</th>
                <th className="px-4 py-3 text-left font-semibold">Account Closure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Account Age</td>
                <td className="px-4 py-3 text-green-600">Preserved</td>
                <td className="px-4 py-3 text-red-600">Counts for 10 years, then lost</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Payment History</td>
                <td className="px-4 py-3 text-green-600">Preserved</td>
                <td className="px-4 py-3 text-yellow-600">Preserved for 10 years</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Credit Limit</td>
                <td className="px-4 py-3 text-green-600">Usually preserved</td>
                <td className="px-4 py-3 text-red-600">Lost immediately</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Annual Fee</td>
                <td className="px-4 py-3 text-green-600">Eliminated</td>
                <td className="px-4 py-3 text-green-600">Eliminated</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Premium Benefits</td>
                <td className="px-4 py-3 text-red-600">Lost</td>
                <td className="px-4 py-3 text-red-600">Lost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Credit Score Impact</h3>
        <ul>
          <li><strong>Utilization protection:</strong> Keeps credit limit, so your utilization ratio stays low</li>
          <li><strong>Age of accounts:</strong> Preserves your oldest account date</li>
          <li><strong>No hard inquiry:</strong> Product changes don't require credit pulls</li>
          <li><strong>Payment history intact:</strong> All your on-time payments remain</li>
        </ul>

        <h2>When to Downgrade vs When to Keep</h2>

        <p>Not every card should be downgraded. Consider your usage and the card's value proposition.</p>

        <h3>Downgrade If:</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-3">Good Candidates for Downgrading</h4>
          <ul className="text-green-700 space-y-2">
            <li>• Annual fee exceeds the value you get from benefits</li>
            <li>• You rarely use the card's premium features</li>
            <li>• It's one of your oldest credit accounts</li>
            <li>• You want to keep the credit limit for utilization</li>
            <li>• There's a no-fee version available</li>
            <li>• You're not meeting minimum spending requirements</li>
          </ul>
        </div>

        <h3>Keep the Premium Card If:</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-3">Worth Keeping Despite the Fee</h4>
          <ul className="text-blue-700 space-y-2">
            <li>• Annual benefits exceed the annual fee</li>
            <li>• You regularly use airport lounges, travel credits, etc.</li>
            <li>• Card has strong ongoing rewards in categories you spend in</li>
            <li>• You're working toward elite status or big redemptions</li>
            <li>• The card has unique benefits not available elsewhere</li>
          </ul>
        </div>

        <h2>Issuer-Specific Downgrade Rules and Options</h2>

        <p>Each issuer has different policies and available downgrade paths.</p>

        <h3>Chase Product Changes</h3>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-gray-800 mb-4">Chase Rules</h4>
          <ul className="space-y-2">
            <li>• Must wait 12 months after account opening to downgrade</li>
            <li>• Can product change within card families (not between families)</li>
            <li>• No hard inquiry required</li>
            <li>• Can downgrade premium cards to no-fee versions</li>
          </ul>
          
          <h5 className="font-semibold mt-4 mb-2">Popular Chase Downgrades:</h5>
          <ul className="space-y-1">
            <li>• Sapphire Preferred/Reserve → Freedom or Freedom Flex</li>
            <li>• Southwest Priority → Southwest Plus</li>
            <li>• United Explorer → United Gateway</li>
            <li>• World of Hyatt → Freedom (sometimes allowed)</li>
          </ul>
        </div>

        <h3>American Express Product Changes</h3>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-gray-800 mb-4">Amex Rules</h4>
          <ul className="space-y-2">
            <li>• Very restrictive product change policy</li>
            <li>• Usually only allows upgrades, not downgrades</li>
            <li>• Some charge cards can downgrade to no-fee versions</li>
            <li>• Credit cards have limited downgrade options</li>
          </ul>
          
          <h5 className="font-semibold mt-4 mb-2">Limited Amex Downgrades:</h5>
          <ul className="space-y-1">
            <li>• Gold Card → Green Card (charge cards)</li>
            <li>• Platinum → Gold → Green</li>
            <li>• Most credit cards: very limited options</li>
          </ul>
        </div>

        <h3>Citi Product Changes</h3>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-gray-800 mb-4">Citi Rules</h4>
          <ul className="space-y-2">
            <li>• More flexible than Amex, less flexible than Chase</li>
            <li>• Can downgrade within card families</li>
            <li>• Must wait 12 months after account opening</li>
            <li>• Some cards have good no-fee downgrade options</li>
          </ul>
          
          <h5 className="font-semibold mt-4 mb-2">Citi Downgrade Options:</h5>
          <ul className="space-y-1">
            <li>• Premier → Double Cash</li>
            <li>• Prestige → Premier → Double Cash</li>
            <li>• AAdvantage Executive → AAdvantage Platinum</li>
          </ul>
        </div>

        <h3>Capital One Product Changes</h3>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-gray-800 mb-4">Capital One Rules</h4>
          <ul className="space-y-2">
            <li>• Very limited product change options</li>
            <li>• Mostly allows upgrades only</li>
            <li>• Some cards can downgrade to Quicksilver</li>
            <li>• Often need to close and reapply instead</li>
          </ul>
        </div>

        <h2>Step-by-Step Downgrade Process</h2>

        <p>The actual process is straightforward, but timing and preparation matter.</p>

        <h3>Before You Call</h3>

        <ol>
          <li><strong>Research available options:</strong> Know which no-fee cards you can downgrade to</li>
          <li><strong>Use remaining benefits:</strong> Airport lounge passes, credits, etc.</li>
          <li><strong>Check account age:</strong> Confirm you've had the card for 12+ months</li>
          <li><strong>Time it right:</strong> Call 30-60 days before annual fee posts</li>
          <li><strong>Consider retention offers:</strong> Be prepared to decline fee waivers if downgrading is better</li>
        </ol>

        <h3>The Phone Call Script</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-3">What to Say</h4>
          <p className="mb-3">
            "Hi, I'd like to product change my [current card name] to the [target card name]. I want to avoid the annual fee but keep my account history. Can you help me with that?"
          </p>
          <div className="space-y-2">
            <p><strong>If they offer retention bonuses:</strong> "I appreciate the offer, but I'd prefer to downgrade to avoid future fees."</p>
            <p><strong>If they say it's not possible:</strong> "Are there any other no-fee cards in your family I can product change to?"</p>
            <p><strong>Get confirmation:</strong> "Can you confirm this will preserve my account opening date and not affect my credit score?"</p>
          </div>
        </div>

        <h3>What to Expect After the Call</h3>

        <ul>
          <li><strong>New card in 7-10 days:</strong> Your new card will arrive by mail</li>
          <li><strong>Same account number (usually):</strong> Most downgrades keep the same account</li>
          <li><strong>Different rewards structure:</strong> Your new card's rewards take effect immediately</li>
          <li><strong>Credit report updates:</strong> Account shows new product name but same opening date</li>
        </ul>

        <h2>Potential Downsides and How to Minimize Them</h2>

        <p>Product changes aren't always perfect. Here's what might go wrong and how to prepare.</p>

        <h3>Possible Downsides</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">What You Might Lose</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Premium rewards rates (5x, 3x categories)</li>
              <li>• Travel benefits (lounge access, credits)</li>
              <li>• Purchase protections and insurance</li>
              <li>• Priority customer service</li>
              <li>• Upgrade eligibility to premium cards</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-3">Rare but Possible Issues</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• Credit limit reduction</li>
              <li>• Points/miles balance complications</li>
              <li>• Different payment due dates</li>
              <li>• Changes to authorized user policies</li>
              <li>• Loss of some account features</li>
            </ul>
          </div>
        </div>

        <h3>Minimizing Downgrade Downsides</h3>

        <ul>
          <li><strong>Use benefits first:</strong> Maximize value from premium features before downgrading</li>
          <li><strong>Redeem points/miles:</strong> Some loyalty programs have complications with downgrades</li>
          <li><strong>Update autopay:</strong> New card might have different payment terms</li>
          <li><strong>Keep documentation:</strong> Screenshot your account details before the change</li>
        </ul>

        <h2>Alternative Strategies If Downgrades Aren't Available</h2>

        <p>When your issuer doesn't allow product changes, you have other options.</p>

        <h3>Retention Offers and Fee Waivers</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-3">Negotiating with Your Issuer</h4>
          <ul className="text-green-700 space-y-2">
            <li>• Call and ask for retention offers before downgrading</li>
            <li>• Accept fee waivers if they're worth more than downgrade benefits</li>
            <li>• Consider statement credits and bonus points offers</li>
            <li>• Evaluate one-time vs ongoing value</li>
          </ul>
        </div>

        <h3>The Close and Reapply Strategy</h3>

        <ul>
          <li><strong>When to consider:</strong> If you want a no-fee card but can't downgrade</li>
          <li><strong>Wait period:</strong> Wait 30+ days between closing and reapplying</li>
          <li><strong>Signup bonus eligibility:</strong> You might qualify for new customer bonuses</li>
          <li><strong>Credit score impact:</strong> Temporary utilization increase until new card arrives</li>
        </ul>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">🚀 Successful Downgrade Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Research available no-fee cards in the same family</li>
            <li>☐ Use all remaining premium benefits before downgrading</li>
            <li>☐ Redeem or transfer any points/miles if necessary</li>
            <li>☐ Call 30-60 days before annual fee posts</li>
            <li>☐ Ask specifically for a "product change" or "downgrade"</li>
            <li>☐ Confirm account opening date and history are preserved</li>
            <li>☐ Get confirmation email or reference number</li>
            <li>☐ Update any autopay settings when new card arrives</li>
            <li>☐ Verify new card shows up correctly on credit report</li>
          </ul>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-close-a-card-without-hurting-your-score" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Close Card Without Hurting Score</h3>
            <p className="text-pink-600 text-sm mt-2">When downgrading isn't possible</p>
          </Link>
          <Link href="/how-to/how-to-get-credit-limit-increase-responsibly" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Credit Limit Increase</h3>
            <p className="text-pink-600 text-sm mt-2">Maximize the value of your downgraded card</p>
          </Link>
          <Link href="/how-to/how-to-choose-your-first-credit-card" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Your First Credit Card</h3>
            <p className="text-pink-600 text-sm mt-2">Know what you're downgrading to</p>
          </Link>
          <Link href="/how-to/how-to-redeem-points-for-maximum-value" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Redeem Points for Maximum Value</h3>
            <p className="text-pink-600 text-sm mt-2">Use rewards before downgrading</p>
          </Link>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Will downgrading my card hurt my credit score?</h3>
            <p className="text-gray-600">
              No, product changes don't hurt your credit score. They preserve your account history, don't require a hard inquiry, and maintain your credit limit. This actually helps your score by keeping utilization low.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How long do I need to wait before downgrading a new card?</h3>
            <p className="text-gray-600">
              Most issuers require you to wait 12 months after account opening before allowing product changes. This prevents people from getting signup bonuses and immediately downgrading.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens to my rewards points when I downgrade?</h3>
            <p className="text-gray-600">
              Points usually stay in your account, but the earning rate changes to your new card's structure. However, some loyalty programs have complex rules, so redeem or transfer valuable points before downgrading if you're unsure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I upgrade back to a premium card later?</h3>
            <p className="text-gray-600">
              Usually yes, but policies vary by issuer. Some allow upgrades anytime, others require waiting periods. You may also be eligible for signup bonuses if you haven't had the premium card recently.
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
                  "name": "Will downgrading my card hurt my credit score?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, product changes preserve your account history and don't require a hard inquiry."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How long do I need to wait before downgrading a new card?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most issuers require waiting 12 months after account opening before allowing product changes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens to my rewards points when I downgrade?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Points usually stay but earning rates change; complex loyalty programs may have complications."
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