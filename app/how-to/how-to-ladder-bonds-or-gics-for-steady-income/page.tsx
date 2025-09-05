import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Ladder Bonds or GICs for Steady Income (Step-by-Step)',
  description: 'Learn how to build a bond or GIC ladder for predictable retirement income. Complete guide with examples, timing strategies, and reinvestment tactics.',
  keywords: 'bond ladder, GIC ladder, fixed income, retirement income, bonds, guaranteed investment certificates',
  openGraph: {
    title: 'How to Ladder Bonds or GICs for Steady Income',
    description: 'Step-by-step guide to building bond and GIC ladders for predictable retirement income.',
    type: 'article',
  },
}

function createSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function HowToLadderBondsGICs() {
  const faqs = [
    {
      question: "What's the minimum amount needed to start a bond or GIC ladder?",
      answer: "You can start with as little as $10,000-25,000, but $50,000+ allows for better diversification. Begin with 5-year ladders using $5,000-10,000 per rung for individual bonds, or use bond funds/ETFs for smaller amounts."
    },
    {
      question: "Should I use individual bonds/GICs or bond funds for laddering?",
      answer: "Individual bonds/GICs provide guaranteed principal return and predictable income, ideal for retirement. Bond funds offer diversification and liquidity but have price volatility. For retirement income, individual securities are typically preferred."
    },
    {
      question: "How do I handle reinvestment when rates are falling?",
      answer: "Extend your ladder by purchasing longer-term bonds/GICs, consider high-quality corporate bonds for higher yields, or temporarily hold cash in high-yield savings while waiting for better rates. Maintain some flexibility in your strategy."
    },
    {
      question: "What happens if I need money before a bond/GIC matures?",
      answer: "GICs often have early redemption penalties. Bonds can be sold on secondary markets but may trade below face value if rates have risen. Keep 6-12 months of expenses in liquid savings separate from your ladder."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/category/how-to" className="hover:text-blue-600">How To</Link>
            <span className="mx-2">/</span>
            <span>How to Ladder Bonds or GICs for Steady Income</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
              🏖️
            </div>
            <div>
              <div className="text-sm text-teal-600 font-medium">Retirement & Pensions</div>
              <h1 className="text-3xl font-bold text-gray-900">How to Ladder Bonds or GICs for Steady Income</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Bond and GIC laddering creates predictable income streams perfect for retirement. This strategy involves purchasing bonds or GICs with staggered maturity dates, providing regular income and principal return while managing interest rate risk.
            </p>

            <h2>What is a Bond/GIC Ladder?</h2>
            
            <p>A ladder is a portfolio of bonds or GICs with different maturity dates, typically spaced equally apart (e.g., one maturing each year). As each security matures, you receive your principal back and can reinvest at current rates.</p>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-3">Example: 5-Year GIC Ladder</h3>
              <ul className="space-y-2">
                <li><strong>Year 1:</strong> $10,000 GIC @ 3.5% (matures 2025)</li>
                <li><strong>Year 2:</strong> $10,000 GIC @ 4.0% (matures 2026)</li>
                <li><strong>Year 3:</strong> $10,000 GIC @ 3.8% (matures 2027)</li>
                <li><strong>Year 4:</strong> $10,000 GIC @ 4.2% (matures 2028)</li>
                <li><strong>Year 5:</strong> $10,000 GIC @ 3.9% (matures 2029)</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Starting in 2025, you receive $10,000 + interest annually, which you can spend or reinvest in a new 5-year GIC.
              </p>
            </div>

            <h2>Step 1: Choose Your Ladder Strategy</h2>

            <h3>Bond vs. GIC Ladders</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold">Government Bonds</th>
                    <th className="px-4 py-3 text-left font-semibold">GICs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Security</td>
                    <td className="px-4 py-3">Government guaranteed</td>
                    <td className="px-4 py-3">CDIC/FDIC insured (up to limits)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Liquidity</td>
                    <td className="px-4 py-3">Can sell before maturity</td>
                    <td className="px-4 py-3">Usually locked until maturity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Rates</td>
                    <td className="px-4 py-3">Market-determined, fluctuate</td>
                    <td className="px-4 py-3">Often higher, promotional rates</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Minimum Investment</td>
                    <td className="px-4 py-3">$1,000-5,000 typically</td>
                    <td className="px-4 py-3">$500-1,000 typically</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Ladder Duration Options</h3>
            
            <ul>
              <li><strong>5-Year Ladder:</strong> Good for beginners, manageable complexity</li>
              <li><strong>10-Year Ladder:</strong> Better rate diversity, more reinvestment opportunities</li>
              <li><strong>20-Year Ladder:</strong> Maximum stability, requires larger initial investment</li>
            </ul>

            <h2>Step 2: Plan Your Ladder Structure</h2>

            <h3>Calculate Your Needs</h3>

            <ol>
              <li><strong>Determine annual income needed:</strong> How much do you need each year?</li>
              <li><strong>Choose ladder length:</strong> 5, 10, or 20 years based on your timeline</li>
              <li><strong>Calculate per-rung amount:</strong> Total investment ÷ number of rungs</li>
              <li><strong>Plan reinvestment strategy:</strong> Will you extend the ladder or spend principal?</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="font-semibold mb-2">Example Planning: $100,000 for 10-Year Ladder</h4>
              <ul className="space-y-1">
                <li>• $10,000 per rung (10 GICs of $10,000 each)</li>
                <li>• Maturities: 2025, 2026, 2027... 2034</li>
                <li>• Annual income: $10,000 + accumulated interest</li>
                <li>• Reinvestment: Each year, reinvest maturing principal in new 10-year GIC</li>
              </ul>
            </div>

            <h2>Step 3: Build Your Initial Ladder</h2>

            <h3>For Bond Ladders</h3>

            <ol>
              <li><strong>Choose bond types:</strong> Government bonds (safest) or high-grade corporate bonds</li>
              <li><strong>Select maturities:</strong> Space evenly (1, 2, 3, 4, 5 years for a 5-year ladder)</li>
              <li><strong>Purchase through:</strong> Your broker, government directly, or bond ETFs</li>
              <li><strong>Track details:</strong> Maturity dates, coupon rates, call provisions</li>
            </ol>

            <h3>For GIC Ladders</h3>

            <ol>
              <li><strong>Shop rates:</strong> Compare banks, credit unions, and online providers</li>
              <li><strong>Consider terms:</strong> Annual compound vs. simple interest, early redemption rules</li>
              <li><strong>Diversify institutions:</strong> Stay within CDIC/FDIC limits per institution</li>
              <li><strong>Stagger purchase dates:</strong> Avoid interest rate timing risk</li>
            </ol>

            <h2>Step 4: Manage Your Ladder</h2>

            <h3>Reinvestment Strategy</h3>

            <p>When each rung matures, you have several options:</p>

            <ul>
              <li><strong>Extend the ladder:</strong> Reinvest in a new bond/GIC with the longest term in your ladder</li>
              <li><strong>Take income:</strong> Use the principal for living expenses</li>
              <li><strong>Adjust duration:</strong> Shorten or lengthen based on rate environment</li>
              <li><strong>Hybrid approach:</strong> Reinvest part, spend part</li>
            </ul>

            <h3>Rate Environment Considerations</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Rising Rate Environment</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• Consider shorter initial ladder (3-5 years)</li>
                  <li>• Hold some cash for better opportunities</li>
                  <li>• Reinvest aggressively as rates rise</li>
                  <li>• Avoid locking in long terms at low rates</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Falling Rate Environment</h4>
                <ul className="text-orange-700 space-y-2">
                  <li>• Lock in longer terms while rates are high</li>
                  <li>• Consider 10+ year ladders</li>
                  <li>• Be selective with reinvestment</li>
                  <li>• May need to accept lower yields</li>
                </ul>
              </div>
            </div>

            <h2>Step 5: Advanced Ladder Strategies</h2>

            <h3>Barbell Strategy</h3>
            
            <p>Combine very short-term (1-2 years) and long-term (10+ years) bonds/GICs, avoiding intermediate terms. Provides both liquidity and higher yields from long-term securities.</p>

            <h3>Bullet Strategy</h3>
            
            <p>All securities mature around the same target date (e.g., when you plan to make a major purchase). Provides a large sum at a specific time.</p>

            <h3>Rolling Ladders</h3>
            
            <p>Instead of equal amounts, weight your ladder toward certain time periods based on your income needs or rate expectations.</p>

            <h2>Regional Considerations</h2>

            <h3>Canada</h3>
            <ul>
              <li><strong>GIC sources:</strong> Banks, credit unions, online providers like Tangerine</li>
              <li><strong>Tax treatment:</strong> Interest fully taxable at marginal rate</li>
              <li><strong>CDIC coverage:</strong> $100,000 per depositor per institution</li>
              <li><strong>Government bonds:</strong> Federal, provincial bonds available</li>
            </ul>

            <h3>United States</h3>
            <ul>
              <li><strong>CD sources:</strong> Banks, credit unions, brokerages</li>
              <li><strong>Treasury bonds:</strong> Available directly from TreasuryDirect.gov</li>
              <li><strong>FDIC coverage:</strong> $250,000 per depositor per institution</li>
              <li><strong>Tax considerations:</strong> Treasury bonds exempt from state taxes</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>

            <ul>
              <li><strong>Concentrating at one institution:</strong> Exceeds insurance limits</li>
              <li><strong>Ignoring call provisions:</strong> Bonds may be called early in falling rate environments</li>
              <li><strong>Poor record keeping:</strong> Track maturity dates and reinvestment decisions</li>
              <li><strong>Inflexible strategy:</strong> Be willing to adjust based on changing circumstances</li>
              <li><strong>Chasing rates:</strong> Focus on overall strategy, not maximizing each rung</li>
            </ul>

            <h2>Tax Optimization</h2>

            <ul>
              <li><strong>Hold in tax-advantaged accounts:</strong> RRSP, 401(k), IRA when possible</li>
              <li><strong>Consider tax timing:</strong> Realize gains/losses strategically</li>
              <li><strong>Municipal bonds (US):</strong> For high earners in taxable accounts</li>
              <li><strong>Corporate class funds:</strong> May provide tax advantages in Canada</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-semibold mb-2">⚠️ Important Reminders</h3>
              <ul className="space-y-2">
                <li>• Ladders provide stability but may underperform in strong bull markets</li>
                <li>• Keep detailed records of maturity dates and reinvestment decisions</li>
                <li>• Consider ladders as part of broader portfolio, not entire strategy</li>
                <li>• Review and adjust strategy annually based on changing needs</li>
              </ul>
            </div>

            <h2>Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Link href="/how-to/how-to-create-a-retirement-income-withdrawal-plan" 
                    className="block p-4 bg-teal-50 rounded-lg border border-teal-200 hover:border-teal-300 transition-colors">
                <h3 className="font-semibold text-teal-800">Create a Retirement Income Withdrawal Plan</h3>
                <p className="text-teal-600 text-sm mt-2">Learn systematic withdrawal strategies combining multiple income sources</p>
              </Link>
              <Link href="/how-to/how-to-avoid-sequence-of-returns-risk" 
                    className="block p-4 bg-teal-50 rounded-lg border border-teal-200 hover:border-teal-300 transition-colors">
                <h3 className="font-semibold text-teal-800">Avoid Sequence of Returns Risk</h3>
                <p className="text-teal-600 text-sm mt-2">Protect your retirement from early market downturns</p>
              </Link>
              <Link href="/how-to/how-to-invest-inside-a-tfsa-rrsp-401k-ira" 
                    className="block p-4 bg-teal-50 rounded-lg border border-teal-200 hover:border-teal-300 transition-colors">
                <h3 className="font-semibold text-teal-800">Invest Inside Tax-Advantaged Accounts</h3>
                <p className="text-teal-600 text-sm mt-2">Optimize your investment allocation across account types</p>
              </Link>
              <Link href="/how-to/how-to-calculate-your-retirement-number" 
                    className="block p-4 bg-teal-50 rounded-lg border border-teal-200 hover:border-teal-300 transition-colors">
                <h3 className="font-semibold text-teal-800">Calculate Your Retirement Number</h3>
                <p className="text-teal-600 text-sm mt-2">Determine how much you need for financial independence</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </article>
    </div>
  )
}