import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Life Insurance Do You Need? Simple Formula & Examples',
  description: 'Use the DIME method and our quick calculator to estimate life insurance needs in minutes, plus common mistakes to avoid.',
  keywords: 'how much life insurance do I need, DIME method, life insurance calculator, income replacement formula',
  openGraph: {
    title: 'How Much Life Insurance Do You Need? Simple Formula & Examples',
    description: 'Calculate your exact life insurance needs with the DIME method and practical examples.',
    type: 'article',
  },
}

function createSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function HowMuchLifeInsuranceDoYouNeed() {
  const faqs = [
    {
      question: "Should I include daycare/elder care costs in my calculation?",
      answer: "Yes—add these to your income replacement years. If you currently pay $12,000/year for daycare, include this in your annual income needs until your children are school-age. Similarly, include elder care costs if you support aging parents."
    },
    {
      question: "What about stay-at-home parents - do they need life insurance?",
      answer: "Absolutely. Insure for replacement of unpaid labor like childcare, housekeeping, tutoring, and transportation. This can easily be worth $30,000-50,000 per year depending on your location and family size."
    },
    {
      question: "How often should I recalculate my life insurance needs?",
      answer: "Review annually and after major life events: marriage, divorce, new children, home purchase, job changes, or when debts are paid off. Your needs typically decrease over time as debts shrink and children become independent."
    },
    {
      question: "Should I count my spouse's income in the calculation?",
      answer: "Count what would realistically continue if you died. If your spouse would need to reduce work hours for childcare or might struggle to maintain their current income due to grief/logistics, be conservative in your assumptions."
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
            <span>How to Calculate How Much Life Insurance You Need</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
              🛡️
            </div>
            <div>
              <div className="text-sm text-cyan-600 font-medium">Insurance</div>
              <h1 className="text-3xl font-bold text-gray-900">How Much Life Insurance Do You Need?</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Aim to replace your income, clear debts, and fund future goals. A popular rule is 10–15× annual income, but a tailored estimate is better. Use DIME: Debt + Income replacement + Mortgage + Education − existing assets/coverage. Choose a term length that covers your biggest obligations.
            </p>

            <h2>Quick Formula (Plug-and-Play)</h2>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Life Insurance Coverage Formula</h3>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-center text-lg font-mono">
                  <strong>Coverage = </strong><br/>
                  (Debts excluding mortgage) +<br/>
                  (Annual income × Years to replace) +<br/>
                  (Mortgage balance) +<br/>
                  (Education fund per child × # children) −<br/>
                  (Liquid assets + existing life insurance)
                </p>
              </div>
            </div>

            <h2>The DIME Method Explained</h2>

            <p>DIME stands for Debt, Income, Mortgage, and Education. This comprehensive approach ensures you cover all major financial obligations your family would face if you died.</p>

            <h3>D - Debt (Excluding Mortgage)</h3>

            <p>Include all debts that would burden your survivors:</p>
            
            <ul>
              <li><strong>Credit cards:</strong> Outstanding balances</li>
              <li><strong>Personal loans:</strong> Auto loans, personal lines of credit</li>
              <li><strong>Student loans:</strong> Yours and any co-signed for children</li>
              <li><strong>Business debts:</strong> If you're personally liable</li>
              <li><strong>Final expenses:</strong> Funeral costs ($7,000-15,000 average)</li>
            </ul>

            <h3>I - Income Replacement</h3>

            <p>Multiply your annual income by the number of years your family would need support:</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Family Situation</th>
                    <th className="px-4 py-3 text-left font-semibold">Years to Replace</th>
                    <th className="px-4 py-3 text-left font-semibold">Reasoning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Young children (under 10)</td>
                    <td className="px-4 py-3">15-20 years</td>
                    <td className="px-4 py-3">Until children are financially independent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Teenagers</td>
                    <td className="px-4 py-3">10-15 years</td>
                    <td className="px-4 py-3">Through college and early career</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">No children</td>
                    <td className="px-4 py-3">5-10 years</td>
                    <td className="px-4 py-3">Spouse adjustment period</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Special needs dependent</td>
                    <td className="px-4 py-3">Lifetime</td>
                    <td className="px-4 py-3">Ongoing care requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>Important:</strong> Use 70-80% of your current income, not 100%. Your family's expenses will decrease without you (food, clothing, entertainment, life insurance premiums).</p>

            <h3>M - Mortgage</h3>

            <p>Include your current mortgage balance. Paying off the home removes your family's largest monthly expense and provides housing security.</p>

            <h3>E - Education</h3>

            <p>Estimate future education costs for your children:</p>

            <ul>
              <li><strong>Public college (in-state):</strong> $50,000-70,000 per child</li>
              <li><strong>Public college (out-of-state):</strong> $100,000-130,000 per child</li>
              <li><strong>Private college:</strong> $150,000-200,000 per child</li>
              <li><strong>Community college + transfer:</strong> $30,000-50,000 per child</li>
            </ul>

            <p>Adjust for inflation if your children are young. Education costs historically increase 3-5% annually.</p>

            <h2>Real-World Example</h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Sample Calculation: The Johnson Family</h3>
              
              <div className="space-y-3">
                <div><strong>Family:</strong> Two parents, ages 35 and 33, with children ages 8 and 5</div>
                <div><strong>Income earner salary:</strong> $80,000 annually</div>
                <div><strong>Debts (excluding mortgage):</strong> $15,000</div>
                <div><strong>Income replacement:</strong> $80,000 × 70% × 15 years = $840,000</div>
                <div><strong>Mortgage balance:</strong> $420,000</div>
                <div><strong>Education:</strong> $60,000 × 2 children = $120,000</div>
                <div><strong>Existing assets:</strong> $50,000 savings + $50,000 existing group life = $100,000</div>
              </div>
              
              <div className="mt-4 p-4 bg-white rounded border">
                <p className="font-semibold">Total Need Calculation:</p>
                <p>$15,000 + $840,000 + $420,000 + $120,000 - $100,000 = <span className="text-blue-700 font-bold">$1,295,000</span></p>
                <p className="text-sm text-gray-600 mt-2">Recommended coverage: $1.3 million</p>
              </div>
            </div>

            <h2>Alternative Methods</h2>

            <h3>Income Multiplier Method</h3>

            <p>Quick rule of thumb based on income multiples:</p>

            <ul>
              <li><strong>Ages 20-30:</strong> 10-15× annual income</li>
              <li><strong>Ages 30-40:</strong> 15-20× annual income</li>
              <li><strong>Ages 40-50:</strong> 10-15× annual income</li>
              <li><strong>Ages 50+:</strong> 5-10× annual income</li>
            </ul>

            <p>This method is fast but less precise than DIME since it doesn't account for individual circumstances.</p>

            <h3>Capital Needs Analysis</h3>

            <p>More sophisticated approach used by financial planners. Projects future cash flows and determines the lump sum needed to generate required income through investments.</p>

            <h2>Factors That Increase Your Needs</h2>

            <ul>
              <li><strong>Single income household:</strong> Higher dependency on your income</li>
              <li><strong>Young children:</strong> Longer time horizon for support</li>
              <li><strong>High mortgage balance:</strong> Larger debt to clear</li>
              <li><strong>Private school goals:</strong> Higher education costs</li>
              <li><strong>Special needs dependents:</strong> Lifetime care requirements</li>
              <li><strong>Business ownership:</strong> May need coverage for business debts/buyouts</li>
              <li><strong>Stay-at-home spouse:</strong> Would need to hire help or reduce work</li>
            </ul>

            <h2>Factors That Decrease Your Needs</h2>

            <ul>
              <li><strong>Substantial savings:</strong> Existing assets reduce insurance needs</li>
              <li><strong>Dual income household:</strong> Surviving spouse has income</li>
              <li><strong>Older children:</strong> Shorter dependency period</li>
              <li><strong>Low debt levels:</strong> Less to pay off</li>
              <li><strong>Pension benefits:</strong> Survivor benefits reduce needs</li>
              <li><strong>Social Security:</strong> Survivor benefits (varies by situation)</li>
            </ul>

            <h2>Laddering Strategy for Budget-Conscious Families</h2>

            <p>If the full amount seems unaffordable, consider laddering multiple policies:</p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-3">Example: Laddering Strategy</h3>
              <p className="mb-3">Instead of one $1.3M policy, consider:</p>
              <ul className="space-y-2">
                <li>• <strong>Policy 1:</strong> $800,000 for 20 years (until kids finish college)</li>
                <li>• <strong>Policy 2:</strong> $300,000 for 30 years (until mortgage paid off)</li>
                <li>• <strong>Policy 3:</strong> $200,000 for 10 years (highest-expense years)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                This provides maximum coverage when needed most, then reduces over time as your obligations decrease.
              </p>
            </div>

            <h2>Special Considerations</h2>

            <h3>Stay-at-Home Parents</h3>

            <p>Don't overlook the economic value of unpaid work:</p>

            <ul>
              <li><strong>Childcare:</strong> $15,000-30,000 per child annually</li>
              <li><strong>Housekeeping:</strong> $5,000-15,000 annually</li>
              <li><strong>Transportation:</strong> Time and logistics of shuttling kids</li>
              <li><strong>Tutoring/homework help:</strong> Educational support</li>
              <li><strong>Eldercare:</strong> If caring for aging parents</li>
            </ul>

            <p>A stay-at-home parent might need $250,000-500,000 in coverage depending on family size and local service costs.</p>

            <h3>Business Owners</h3>

            <p>Additional considerations for entrepreneurs:</p>

            <ul>
              <li><strong>Business debts:</strong> Personally guaranteed loans</li>
              <li><strong>Buy-sell agreements:</strong> Partner buyout obligations</li>
              <li><strong>Key person coverage:</strong> Business continuity</li>
              <li><strong>Income volatility:</strong> Use average of last 3-5 years</li>
            </ul>

            <h2>When to Recalculate Your Needs</h2>

            <p>Review your life insurance needs annually and after major life events:</p>

            <ul>
              <li><strong>Marriage or divorce</strong></li>
              <li><strong>Birth or adoption of children</strong></li>
              <li><strong>Home purchase or mortgage payoff</strong></li>
              <li><strong>Significant income changes</strong></li>
              <li><strong>Children finishing college</strong></li>
              <li><strong>Starting or selling a business</strong></li>
              <li><strong>Inheritance or major asset changes</strong></li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>

            <ul>
              <li><strong>Using outdated assumptions:</strong> Not accounting for inflation in education costs</li>
              <li><strong>Forgetting taxes:</strong> Life insurance benefits are generally tax-free</li>
              <li><strong>Over-insuring later in life:</strong> Not reducing coverage as needs decrease</li>
              <li><strong>Under-insuring early:</strong> When needs are highest but budgets are tight</li>
              <li><strong>Ignoring spouse's needs:</strong> Both partners usually need some coverage</li>
              <li><strong>Assuming kids don't need coverage:</strong> Consider final expenses and future insurability</li>
            </ul>

            <h2>Professional vs. DIY Calculations</h2>

            <h3>When DIY Works</h3>
            <ul>
              <li>Straightforward family situation</li>
              <li>Employee benefits as primary coverage</li>
              <li>Budget constraints require simple approach</li>
            </ul>

            <h3>When to Hire a Professional</h3>
            <ul>
              <li>Complex family structure (blended families, special needs)</li>
              <li>Business ownership complications</li>
              <li>Estate planning considerations</li>
              <li>Large insurance needs ($1M+)</li>
              <li>Want detailed cash flow projections</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
              <p>Start with the DIME method calculation, then buy coverage in phases if budget is tight. You can always add more coverage later, but you can't recover from being underinsured when tragedy strikes.</p>
            </div>

            <h2>Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Link href="/how-to/how-to-choose-the-right-life-insurance-term-vs-whole" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Choose the Right Life Insurance (Term vs Whole)</h3>
                <p className="text-cyan-600 text-sm mt-2">Decide between term and whole life insurance based on your needs</p>
              </Link>
              <Link href="/how-to/how-to-file-an-insurance-claim-correctly" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">File an Insurance Claim Correctly</h3>
                <p className="text-cyan-600 text-sm mt-2">Step-by-step process for filing and documenting claims</p>
              </Link>
              <Link href="/how-to/how-to-choose-disability-insurance-own-occ-vs-any-occ" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Choose Disability Insurance</h3>
                <p className="text-cyan-600 text-sm mt-2">Protect your income with the right disability coverage</p>
              </Link>
              <Link href="/how-to/how-to-bundle-policies-for-discounts" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Bundle Policies for Discounts</h3>
                <p className="text-cyan-600 text-sm mt-2">Save money by combining your insurance policies</p>
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