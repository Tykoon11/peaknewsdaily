import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Calculate Your Retirement Number (Formula + Example)',
  description: 'Learn the simple formula to find your retirement number, how much you need to retire, and how to adjust for CPP/SSA, taxes, inflation, and longevity risk.',
}

export default function CalculateRetirementNumberPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Calculate Retirement Number</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">How to calculate your retirement number</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn the simple formula to find your retirement number, how much you need to retire, and how to adjust for CPP/SSA, taxes, inflation, and longevity risk.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Start from spending, not salary</h2>
        
        <p>Your retirement number should be based on what you'll actually spend, not a percentage of your working income. Many expenses disappear in retirement while others may increase.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Expenses That Often Decrease</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Mortgage payments (if paid off)</li>
              <li>• Commuting and work-related costs</li>
              <li>• Retirement account contributions</li>
              <li>• Life insurance premiums (term policies)</li>
              <li>• Professional clothing and dry cleaning</li>
              <li>• Children's expenses (if independent)</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Expenses That May Increase</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Healthcare and long-term care</li>
              <li>• Travel and leisure activities</li>
              <li>• Home maintenance (more time at home)</li>
              <li>• Prescription medications</li>
              <li>• Property taxes and inflation</li>
              <li>• Utilities (home more often)</li>
            </ul>
          </div>
        </div>

        <h2>The retirement number formula</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-blue-900 mb-4">Simple Formula</h3>
          <div className="text-center text-xl font-semibold text-blue-800 mb-4">
            Retirement Number = (Annual Spending − Guaranteed Income) ÷ Safe Withdrawal Rate
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-blue-800">Step 1: Annual Spending</p>
              <p className="text-blue-700 text-sm">Calculate your expected after-tax spending in today's dollars</p>
            </div>
            <div>
              <p className="font-medium text-blue-800">Step 2: Guaranteed Income</p>
              <p className="text-blue-700 text-sm">Subtract CPP/Social Security and any pension income</p>
            </div>
            <div>
              <p className="font-medium text-blue-800">Step 3: Apply Safe Withdrawal Rate</p>
              <p className="text-blue-700 text-sm">Divide the gap by 3.5-4.0% to find your portfolio needs</p>
            </div>
          </div>
        </div>

        <h2>Worked example</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Real-World Calculation</h3>
          <div className="space-y-3 text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-800">Current Expenses</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Housing: $2,500/month</li>
                  <li>• Food & dining: $800/month</li>
                  <li>• Transportation: $600/month</li>
                  <li>• Healthcare: $400/month</li>
                  <li>• Entertainment: $500/month</li>
                  <li>• Other: $700/month</li>
                </ul>
                <p className="font-semibold mt-2">Total: $5,500/month = $66,000/year</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Retirement Adjustments</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Mortgage eliminated: -$1,800</li>
                  <li>• Reduced transportation: -$300</li>
                  <li>• Increased healthcare: +$200</li>
                  <li>• Increased travel: +$400</li>
                  <li>• Property taxes/maintenance: +$300</li>
                </ul>
                <p className="font-semibold mt-2">Adjusted: $4,300/month = $51,600/year</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p><strong>Annual Spending Need:</strong> $90,000 (includes taxes, rounded up for safety)</p>
              <p><strong>Guaranteed Income:</strong> CPP $15,000 + OAS $7,000 + Company Pension $13,000 = $35,000</p>
              <p><strong>Portfolio Gap:</strong> $90,000 - $35,000 = $55,000</p>
              <p><strong>Safe Withdrawal Rate:</strong> 3.75%</p>
              <p className="text-lg font-semibold text-teal-700 mt-2">
                <strong>Retirement Number:</strong> $55,000 ÷ 0.0375 = $1,467,000
              </p>
            </div>
          </div>
        </div>

        <h2>Safe withdrawal rates explained</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Withdrawal Rate</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Historical Success</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">3.25%</td>
                <td className="border border-gray-300 px-3 py-2">~100% (30 years)</td>
                <td className="border border-gray-300 px-3 py-2">Very conservative, early retirement</td>
                <td className="border border-gray-300 px-3 py-2">Very Low</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">3.5%</td>
                <td className="border border-gray-300 px-3 py-2">~98% (30 years)</td>
                <td className="border border-gray-300 px-3 py-2">Conservative, flexible spending</td>
                <td className="border border-gray-300 px-3 py-2">Low</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">4.0%</td>
                <td className="border border-gray-300 px-3 py-2">~95% (30 years)</td>
                <td className="border border-gray-300 px-3 py-2">Traditional rule, balanced approach</td>
                <td className="border border-gray-300 px-3 py-2">Moderate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">4.5%</td>
                <td className="border border-gray-300 px-3 py-2">~85% (30 years)</td>
                <td className="border border-gray-300 px-3 py-2">Higher income needs, some risk</td>
                <td className="border border-gray-300 px-3 py-2">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Regional income sources</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Social Security</p>
                <p className="text-blue-700 text-sm">Average $1,800/month, maximum ~$4,200/month at full retirement age</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Medicare considerations</p>
                <p className="text-blue-700 text-sm">Part B premiums, Medigap, out-of-pocket costs can be $3,000-8,000/year</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Tax implications</p>
                <p className="text-blue-700 text-sm">Up to 85% of Social Security taxable depending on total income</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">CPP (Canada Pension Plan)</p>
                <p className="text-purple-700 text-sm">Maximum ~$1,300/month at age 65, can start as early as 60</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">OAS (Old Age Security)</p>
                <p className="text-purple-700 text-sm">~$700/month, claws back at higher incomes ($86,912+ in 2024)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">GIS (Guaranteed Income Supplement)</p>
                <p className="text-purple-700 text-sm">Low-income seniors, income-tested, up to ~$1,000/month</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Stress-testing your number</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Model different withdrawal rates</p>
              <p className="text-gray-600 text-sm">Test 3.25%, 3.5%, 3.75%, and 4.0% to see the range of outcomes</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Add longevity buffer</p>
              <p className="text-gray-600 text-sm">Plan for 90-95 years old, not just life expectancy (80-85)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Factor in major one-time expenses</p>
              <p className="text-gray-600 text-sm">New roof, car replacement, children's weddings, long-term care</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Consider sequence of returns risk</p>
              <p className="text-gray-600 text-sm">Bad markets in early retirement can permanently impair your plan</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Using salary replacement ratios:</strong> "80% of income" ignores actual spending needs</li>
            <li>• <strong>Ignoring taxes on withdrawals:</strong> Traditional accounts create taxable income</li>
            <li>• <strong>Forgetting inflation:</strong> $50,000 today ≠ $50,000 in 20 years</li>
            <li>• <strong>Not updating annually:</strong> Life changes, markets move, plans need adjustment</li>
            <li>• <strong>Including home equity unrealistically:</strong> Only count it if you'll downsize or borrow</li>
          </ul>
        </div>

        <h2>Dynamic withdrawal strategies</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">Guardrails Method</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Start with base rate</p>
              <p className="text-green-700 text-sm">Begin with 3.5-4.0% withdrawal rate</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Set guardrails</p>
              <p className="text-green-700 text-sm">If portfolio drops 10% below target: reduce spending 10%</p>
              <p className="text-green-700 text-sm">If portfolio rises 20% above target: increase spending 10%</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Review annually</p>
              <p className="text-green-700 text-sm">Adjust withdrawal amounts based on portfolio performance</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Delay CPP/Social Security:</strong> Each year of delay increases monthly benefits</li>
            <li>• <strong>Model multiple scenarios:</strong> Best case, worst case, and most likely</li>
            <li>• <strong>Consider part-time work:</strong> Even small income reduces portfolio pressure</li>
            <li>• <strong>Build in flexibility:</strong> Can you reduce spending 20% if needed?</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I include my home in my retirement number?</h3>
              <p className="text-gray-700">
                Only if you plan to downsize or use a reverse mortgage. Otherwise, treat your home as consumption, 
                not an investment asset. Your retirement number should cover all non-housing expenses.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about TFSAs/Roth accounts in the calculation?</h3>
              <p className="text-gray-700">
                Include them in your total retirement assets. They reduce future tax obligations since withdrawals 
                are tax-free, but they still count toward your portfolio total for the withdrawal rate calculation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I recalculate my retirement number?</h3>
              <p className="text-gray-700">
                Review annually, or when major life changes occur (job loss, inheritance, health issues, divorce). 
                Market volatility alone shouldn't trigger constant recalculations, but significant changes in expenses or income should.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a 4% withdrawal rate still safe?</h3>
              <p className="text-gray-700">
                The traditional 4% rule assumes a 30-year retirement with 50/50 stocks/bonds. Current low bond yields 
                suggest 3.5-3.75% may be safer, especially for early retirees or those with inflexible spending needs.
              </p>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should I update my retirement number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Review annually or after major changes in spending, income, or markets."
            }
          },
          {
            "@type": "Question", 
            "name": "What safe withdrawal rate should I use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Test a range (3.25%–4.0%) and consider a dynamic guardrails method instead of a fixed rate."
            }
          },
          {
            "@type": "Question",
            "name": "Should I delay CPP/Social Security?", 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you expect average or longer longevity and can bridge with savings, delaying often increases lifetime, inflation-linked income."
            }
          }
        ]
      })}
      </script>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-create-a-retirement-income-withdrawal-plan" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Create Withdrawal Plan</h3>
              <p className="text-sm text-teal-700 mt-1">Turn your number into steady income</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-choose-between-roth-vs-traditional-contributions" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Roth vs Traditional →</h3>
              <p className="text-sm text-teal-700 mt-1">Choose the right account type</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}