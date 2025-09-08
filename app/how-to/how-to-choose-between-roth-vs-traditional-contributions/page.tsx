import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roth vs Traditional: Which Should You Choose? (Easy Decision Flow)',
  description: 'Decide between Roth and Traditional 401(k)/IRA or TFSA/RRSP equivalents using a simple tax-rate-now vs tax-rate-later framework, plus edge cases.',
}

export default function RothVsTraditionalPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Roth vs Traditional</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">Roth vs Traditional: how to choose</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Decide between Roth and Traditional 401(k)/IRA or TFSA/RRSP equivalents using a simple tax-rate-now vs tax-rate-later framework, plus edge cases.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Core decision framework</h2>
        
        <p>The fundamental question is simple: Will your marginal tax rate be higher now or in retirement?</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-blue-900 mb-4">The Tax Rate Test</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-blue-800">If your future tax rate will be HIGHER → Choose Roth</p>
              <p className="text-blue-700 text-sm">Pay taxes now at the lower rate, enjoy tax-free withdrawals later</p>
            </div>
            <div>
              <p className="font-medium text-blue-800">If your future tax rate will be LOWER → Choose Traditional</p>
              <p className="text-blue-700 text-sm">Get the deduction now at the higher rate, pay taxes later at the lower rate</p>
            </div>
            <div>
              <p className="font-medium text-blue-800">If rates will be SIMILAR → Consider other factors</p>
              <p className="text-blue-700 text-sm">Flexibility, required distributions, estate planning, tax diversification</p>
            </div>
          </div>
        </div>

        <h2>Account types by region</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Roth 401(k)/IRA</p>
                <p className="text-blue-700 text-sm">Pay taxes now, qualified withdrawals tax-free after age 59½ and 5-year rule</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Traditional 401(k)/IRA</p>
                <p className="text-blue-700 text-sm">Tax deduction now, withdrawals taxed as ordinary income, RMDs at 73</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Key consideration</p>
                <p className="text-blue-700 text-sm">Roth IRA has no RMDs during lifetime; Roth 401(k) does (unless rolled to Roth IRA)</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">TFSA (Tax-Free Savings Account)</p>
                <p className="text-purple-700 text-sm">No tax deduction for contributions, tax-free growth and withdrawals</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">RRSP (Registered Retirement Savings Plan)</p>
                <p className="text-purple-700 text-sm">Tax deduction now, taxable withdrawals, converts to RRIF with minimum withdrawals</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Unique features</p>
                <p className="text-purple-700 text-sm">TFSA withdrawals restore contribution room next year; RRSP affects income-tested benefits</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Decision flowchart</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Choose Roth/TFSA When:</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Currently in low tax bracket:</strong> 12% or less (US), 30% or less (Canada)</li>
              <li>• <strong>Young with decades of growth:</strong> More time for tax-free compounding</li>
              <li>• <strong>Expect higher future income:</strong> Career progression likely</li>
              <li>• <strong>Want tax diversification:</strong> Hedge against future tax rate increases</li>
              <li>• <strong>Estate planning goals:</strong> Tax-free inheritance for heirs</li>
              <li>• <strong>Flexibility needs:</strong> Access to contributions without penalties</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Choose Traditional/RRSP When:</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• <strong>Currently in high tax bracket:</strong> 22%+ (US), 40%+ (Canada)</li>
              <li>• <strong>Expect lower retirement income:</strong> Reduced spending, paid-off mortgage</li>
              <li>• <strong>Need immediate tax relief:</strong> High current tax burden</li>
              <li>• <strong>Maxing contribution limits:</strong> Can effectively save more with pre-tax dollars</li>
              <li>• <strong>Employer match considerations:</strong> Get deduction plus match</li>
              <li>• <strong>Geographic arbitrage:</strong> Retire to lower-tax jurisdiction</li>
            </ul>
          </div>
        </div>

        <h2>Age and income considerations</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Life Stage</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Tax Situation</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Recommended Approach</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Reasoning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Early career (20s-30s)</td>
                <td className="border border-gray-300 px-3 py-2">Low-moderate income</td>
                <td className="border border-gray-300 px-3 py-2">Favor Roth/TFSA</td>
                <td className="border border-gray-300 px-3 py-2">Low tax rates now, decades of growth</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Peak earning (40s-50s)</td>
                <td className="border border-gray-300 px-3 py-2">High income</td>
                <td className="border border-gray-300 px-3 py-2">Favor Traditional/RRSP</td>
                <td className="border border-gray-300 px-3 py-2">High tax rates, immediate deduction valuable</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Pre-retirement (55+)</td>
                <td className="border border-gray-300 px-3 py-2">Variable</td>
                <td className="border border-gray-300 px-3 py-2">Mix both</td>
                <td className="border border-gray-300 px-3 py-2">Tax diversification, withdrawal flexibility</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Students/Low income</td>
                <td className="border border-gray-300 px-3 py-2">Very low tax rates</td>
                <td className="border border-gray-300 px-3 py-2">Strongly favor Roth/TFSA</td>
                <td className="border border-gray-300 px-3 py-2">Little to no current tax benefit from deduction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Advanced strategies</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Hedge Your Bets: Split Contributions</h4>
            <div className="space-y-2">
              <p className="text-yellow-700 text-sm">If uncertain about future tax rates, split contributions between account types</p>
              <p className="text-yellow-700 text-sm">Example: 60% Traditional (immediate tax savings) + 40% Roth (tax diversification)</p>
              <p className="text-yellow-700 text-sm">Provides flexibility in retirement to manage tax brackets year by year</p>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Backdoor Roth Strategy (US)</h4>
            <div className="space-y-2">
              <p className="text-cyan-700 text-sm">High earners phased out of direct Roth IRA contributions</p>
              <p className="text-cyan-700 text-sm">Contribute to non-deductible Traditional IRA, then convert to Roth</p>
              <p className="text-cyan-700 text-sm">Watch for pro-rata rule if you have existing Traditional IRA balances</p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">RRSP vs TFSA Priority (Canada)</h4>
            <div className="space-y-2">
              <p className="text-indigo-700 text-sm">High income years: RRSP for immediate tax deduction</p>
              <p className="text-indigo-700 text-sm">Lower income years: TFSA to preserve government benefit eligibility</p>
              <p className="text-indigo-700 text-sm">RRSP withdrawals affect GIS, CCB, and OAS clawback calculations</p>
            </div>
          </div>
        </div>

        <h2>Special considerations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Required Minimum Distributions (RMDs)</h4>
            <div className="space-y-2">
              <p className="text-red-700 text-sm"><strong>US:</strong> Traditional 401(k)/IRA require RMDs at 73; Roth IRA does not</p>
              <p className="text-red-700 text-sm"><strong>Canada:</strong> RRSP converts to RRIF with mandatory withdrawals; TFSA never requires withdrawals</p>
              <p className="text-red-700 text-sm">RMDs can push retirees into higher tax brackets and affect Medicare premiums</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">State/Provincial Considerations</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Some US states don't tax retirement income (traditional account withdrawals)</p>
              <p className="text-green-700 text-sm">Moving from high-tax to low-tax jurisdiction in retirement favors Traditional</p>
              <p className="text-green-700 text-sm">Canada: Provincial tax rates vary, affecting the Traditional vs TFSA decision</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">⚠️ Common Misconceptions</h3>
          <ul className="text-orange-700 space-y-2">
            <li>• <strong>"Roth is always better for young people":</strong> Not if they're high earners who expect lower retirement income</li>
            <li>• <strong>"Traditional is better for high earners":</strong> Not if they expect high retirement income or tax rates to rise</li>
            <li>• <strong>"You can't contribute to both":</strong> Most people can split contributions between account types</li>
            <li>• <strong>"RMDs are terrible":</strong> They're predictable and can be managed with proper planning</li>
          </ul>
        </div>

        <h2>Real-world examples</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Example 1: New Graduate</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Situation:</strong> 25 years old, $45,000 salary, 12% tax bracket</p>
              <p><strong>Decision:</strong> 100% Roth/TFSA</p>
              <p><strong>Reasoning:</strong> Low current tax rate, 40+ years of tax-free growth, expects higher income later</p>
              <p><strong>Result:</strong> Tax-free withdrawals when likely in higher tax bracket</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Example 2: Peak Earner</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Situation:</strong> 45 years old, $120,000 salary, 24% tax bracket</p>
              <p><strong>Decision:</strong> 70% Traditional, 30% Roth</p>
              <p><strong>Reasoning:</strong> High current tax rate, expects lower retirement spending, but wants some tax diversification</p>
              <p><strong>Result:</strong> Immediate tax savings plus future flexibility</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Review annually:</strong> Your optimal strategy can change with income, tax laws, and life circumstances</li>
            <li>• <strong>Consider total tax burden:</strong> Include state/provincial taxes in your calculations</li>
            <li>• <strong>Factor in employer match:</strong> Always get the full match regardless of account type</li>
            <li>• <strong>Use tax software:</strong> Model both scenarios to see the long-term difference</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Roth always better for young people?</h3>
              <p className="text-gray-700">
                Often, but not always. Run the numbers based on current vs expected future tax rates. A young high earner 
                who expects lower retirement income might benefit more from Traditional accounts and the immediate tax deduction.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do RMDs apply to all account types?</h3>
              <p className="text-gray-700">
                US: Roth IRA has no RMDs during your lifetime; Roth 401(k) has RMDs unless rolled to Roth IRA. 
                Canada: TFSA never requires withdrawals; RRSP converts to RRIF with minimum withdrawal requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if tax laws change in the future?</h3>
              <p className="text-gray-700">
                This is exactly why tax diversification across account types makes sense. Having both Traditional and Roth 
                accounts gives you flexibility to manage your tax burden regardless of how laws change.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I contribute to both Traditional and Roth accounts?</h3>
              <p className="text-gray-700">
                Yes, in most cases. You can split contributions between account types, but total contributions cannot exceed 
                the annual limits. This "tax diversification" strategy hedges against uncertainty about future tax rates.
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
            "name": "Is Roth always better for young people?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often, but run the numbers; employer match and tax credits can change the calculus."
            }
          },
          {
            "@type": "Question", 
            "name": "Do RMDs apply to all retirement accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "US: Roth IRA—no RMDs; Roth 401(k)—RMDs unless rolled to Roth IRA. Canada: TFSA—no; RRSP converts to RRIF with minimum withdrawals."
            }
          },
          {
            "@type": "Question",
            "name": "What if tax law changes?", 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Diversify across account types for flexibility."
            }
          }
        ]
      })}
      </script>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-calculate-your-retirement-number" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Calculate Retirement Number</h3>
              <p className="text-sm text-teal-700 mt-1">Find out how much you need to retire</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-execute-a-backdoor-roth-step-by-step" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Backdoor Roth Strategy →</h3>
              <p className="text-sm text-teal-700 mt-1">High earners can still access Roth benefits</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}