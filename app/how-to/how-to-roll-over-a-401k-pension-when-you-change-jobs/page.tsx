import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '401(k) & Pension Rollovers When Changing Jobs (US & Canada Guide)',
  description: 'Avoid taxes and penalties when you move retirement accounts. Learn the steps for US 401(k)/IRA rollovers and Canada RRSP/LIRA/commuted value transfers.',
}

export default function RolloverJobChangePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Rollover When Changing Jobs</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">How to roll over retirement accounts when you change jobs</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Avoid taxes and penalties when you move retirement accounts. Learn the steps for US 401(k)/IRA rollovers and Canada RRSP/LIRA/commuted value transfers.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Your rollover options</h2>
        
        <p>When leaving your job, you have several options for your retirement accounts. Choose wisely to avoid taxes, penalties, and lost growth.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Option</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Pros</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cons</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Leave with old employer</td>
                <td className="border border-gray-300 px-3 py-2">No action needed, keep investments</td>
                <td className="border border-gray-300 px-3 py-2">Higher fees, limited control, complexity</td>
                <td className="border border-gray-300 px-3 py-2">Large balances, good plan features</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Roll to new employer</td>
                <td className="border border-gray-300 px-3 py-2">Consolidation, potential loan options</td>
                <td className="border border-gray-300 px-3 py-2">Limited to new plan's investments</td>
                <td className="border border-gray-300 px-3 py-2">Good new plan, want simplicity</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Roll to IRA</td>
                <td className="border border-gray-300 px-3 py-2">Maximum investment control, lower fees</td>
                <td className="border border-gray-300 px-3 py-2">No loan option, loss of creditor protection</td>
                <td className="border border-gray-300 px-3 py-2">Want control, lower fees important</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Cash out (avoid!)</td>
                <td className="border border-gray-300 px-3 py-2">Immediate access to money</td>
                <td className="border border-gray-300 px-3 py-2">Taxes, penalties, lost growth</td>
                <td className="border border-gray-300 px-3 py-2">Emergency only, very small balances</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>US rollover process (401k/403b → IRA/new plan)</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Choose your destination</p>
              <p className="text-gray-600 text-sm">New employer 401(k) for consolidation, or Rollover IRA for maximum control and investment options</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Open the receiving account</p>
              <p className="text-gray-600 text-sm">Set up IRA or enroll in new employer plan before initiating transfer</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Request direct rollover</p>
              <p className="text-gray-600 text-sm">Use trustee-to-trustee transfer to avoid taxes and 60-day deadline</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Handle Roth money separately</p>
              <p className="text-gray-600 text-sm">Roth 401(k) → Roth IRA; Traditional 401(k) → Traditional IRA</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Invest the funds promptly</p>
              <p className="text-gray-600 text-sm">Don't leave money sitting in cash; implement your target asset allocation</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-3">Avoid the 60-Day Rollover Trap</h3>
          <ul className="text-red-700 text-sm space-y-2">
            <li>• <strong>20% withholding:</strong> Indirect rollovers trigger automatic tax withholding</li>
            <li>• <strong>60-day deadline:</strong> Must complete rollover within 60 days or face taxes + penalties</li>
            <li>• <strong>Make up withholding:</strong> Must deposit 100% of original balance, including withheld amount</li>
            <li>• <strong>Solution:</strong> Always request direct trustee-to-trustee transfers</li>
          </ul>
        </div>

        <h2>Canada rollover process</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">RRSP/Group Plan Transfers</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Direct transfer (T2033 form)</p>
                <p className="text-purple-700 text-sm">Move funds directly between RRSP accounts without tax consequences</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Group RRSP → Personal RRSP</p>
                <p className="text-purple-700 text-sm">Keep contribution room, maintain tax-deferred status</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">DPSP (Deferred Profit Sharing Plan)</p>
                <p className="text-purple-700 text-sm">Can transfer to RRSP or take as taxable income</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Locked-In Pension Funds</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-orange-800">Pension → LIRA (Locked-In Retirement Account)</p>
                <p className="text-orange-700 text-sm">Locked-in funds preserve pension-like restrictions</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Eventually converts to LIF</p>
                <p className="text-orange-700 text-sm">Life Income Fund with minimum/maximum withdrawal rules</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Provincial differences</p>
                <p className="text-orange-700 text-sm">Unlock provisions vary by province and plan type</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Defined benefit pension decisions</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Keep the Pension</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Guaranteed income:</strong> Predictable monthly payments for life</li>
              <li>• <strong>Inflation protection:</strong> Many pensions include cost-of-living adjustments</li>
              <li>• <strong>Survivor benefits:</strong> Income continues for spouse</li>
              <li>• <strong>No market risk:</strong> Payments unaffected by market downturns</li>
              <li>• <strong>Creditor protection:</strong> Generally protected from creditors</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Take Commuted Value</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Investment control:</strong> Potentially higher returns if well-managed</li>
              <li>• <strong>Flexibility:</strong> Access to funds if needed</li>
              <li>• <strong>Estate benefits:</strong> Remaining funds pass to heirs</li>
              <li>• <strong>Portability:</strong> Money moves with you</li>
              <li>• <strong>Interest rate sensitivity:</strong> Higher rates = higher lump sum</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-4">Commuted Value Decision Factors</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-yellow-800">Interest rate environment</p>
              <p className="text-yellow-700 text-sm">High rates increase lump sum values; low rates favor keeping the pension</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Health and longevity</p>
              <p className="text-yellow-700 text-sm">Poor health may favor lump sum; excellent health favors keeping pension</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Other retirement income</p>
              <p className="text-yellow-700 text-sm">Significant other sources may make lump sum more attractive</p>
            </div>
          </div>
        </div>

        <h2>Common rollover mistakes</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Costly Pitfalls to Avoid</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Taking indirect rollovers:</strong> 20% withholding and tight 60-day deadline</li>
            <li>• <strong>Cashing out:</strong> Immediate taxes + 10% penalty + lost compounding</li>
            <li>• <strong>Missing the 60-day deadline:</strong> Entire amount becomes taxable</li>
            <li>• <strong>Mixing account types:</strong> Roth and traditional funds must stay separate</li>
            <li>• <strong>Forgetting about loans:</strong> Outstanding 401(k) loans may become due immediately</li>
            <li>• <strong>Losing creditor protection:</strong> IRAs have weaker protection than employer plans in some states</li>
          </ul>
        </div>

        <h2>Special situations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Company Stock (NUA Strategy)</h4>
            <div className="space-y-2">
              <p className="text-cyan-700 text-sm">Net Unrealized Appreciation: Pay ordinary income tax on cost basis only</p>
              <p className="text-cyan-700 text-sm">Future gains taxed as capital gains when sold</p>
              <p className="text-cyan-700 text-sm">Only beneficial for highly appreciated company stock</p>
              <p className="text-cyan-700 text-sm">Requires taking distribution, not rolling over the stock</p>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Outstanding 401(k) Loans</h4>
            <div className="space-y-2">
              <p className="text-teal-700 text-sm">Usually must be repaid immediately upon termination</p>
              <p className="text-teal-700 text-sm">Unpaid loans become taxable distributions</p>
              <p className="text-teal-700 text-sm">Some plans allow continued repayment after termination</p>
              <p className="text-teal-700 text-sm">Check plan documents and consider repaying before leaving</p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Multiple Employer Changes</h4>
            <div className="space-y-2">
              <p className="text-indigo-700 text-sm">Consider consolidating all old 401(k)s into one rollover IRA</p>
              <p className="text-indigo-700 text-sm">Simplifies management and reduces fees</p>
              <p className="text-indigo-700 text-sm">Easier to maintain target asset allocation</p>
              <p className="text-indigo-700 text-sm">Less paperwork and fewer statements to track</p>
            </div>
          </div>
        </div>

        <h2>Tax implications and timing</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Action</th>
                <th className="border border-gray-300 px-3 py-2 text-left">US Tax Consequences</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Canada Tax Consequences</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Direct rollover</td>
                <td className="border border-gray-300 px-3 py-2">No immediate tax</td>
                <td className="border border-gray-300 px-3 py-2">No immediate tax (direct transfer)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Indirect rollover (60-day)</td>
                <td className="border border-gray-300 px-3 py-2">20% withholding, must replace to avoid tax</td>
                <td className="border border-gray-300 px-3 py-2">N/A - use direct transfers</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Cash out</td>
                <td className="border border-gray-300 px-3 py-2">Income tax + 10% penalty (if under 59½)</td>
                <td className="border border-gray-300 px-3 py-2">Full amount added to taxable income</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Leave with employer</td>
                <td className="border border-gray-300 px-3 py-2">No immediate tax</td>
                <td className="border border-gray-300 px-3 py-2">No immediate tax</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Start early:</strong> Begin rollover process before your last day of work</li>
            <li>• <strong>Keep records:</strong> Save all rollover documentation for tax purposes</li>
            <li>• <strong>Compare fees:</strong> Employer plans sometimes have lower fees than IRAs</li>
            <li>• <strong>Consider timing:</strong> Market volatility may affect when you complete rollovers</li>
            <li>• <strong>Get help:</strong> Complex situations benefit from professional advice</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I roll my Roth 401(k) to a Roth IRA?</h3>
              <p className="text-gray-700">
                Yes, this is generally the best option. Roth 401(k)s have required minimum distributions, but Roth IRAs don't. 
                Rolling to a Roth IRA gives you more flexibility and eliminates RMDs during your lifetime.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my new employer's plan has lower fees?</h3>
              <p className="text-gray-700">
                Lower fees can make a significant difference over time. If your new employer's plan has institutional-class funds 
                with expense ratios significantly lower than what you can access in an IRA, rolling to the new plan may be worthwhile.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I owe taxes on a direct transfer in Canada?</h3>
              <p className="text-gray-700">
                No, direct transfers between registered accounts (RRSP to RRSP, pension to LIRA) don't create taxable events. 
                Always use the T2033 form for direct transfers to maintain tax-deferred status.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I take my pension as a lump sum?</h3>
              <p className="text-gray-700">
                This depends on interest rates, your health, other retirement income, and investment experience. 
                High interest rates increase lump sum values. Consider consulting an actuary or fee-only financial planner for complex pension decisions.
              </p>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Roll Over Retirement Accounts When Changing Jobs",
        "description": "Step-by-step guide for rolling over 401(k), pension, and other retirement accounts when changing jobs",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Choose your destination account",
            "text": "Decide between new employer 401(k) for consolidation or Rollover IRA for maximum investment control"
          },
          {
            "@type": "HowToStep", 
            "name": "Open the receiving account",
            "text": "Set up IRA or enroll in new employer plan before initiating the transfer"
          },
          {
            "@type": "HowToStep",
            "name": "Request direct rollover",
            "text": "Use trustee-to-trustee transfer to avoid taxes and the 60-day deadline"
          },
          {
            "@type": "HowToStep",
            "name": "Handle Roth money separately", 
            "text": "Keep Roth and Traditional funds in their respective account types"
          },
          {
            "@type": "HowToStep",
            "name": "Invest the funds promptly",
            "text": "Don't leave money in cash; implement your target asset allocation immediately"
          }
        ]
      })}
      </script>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-between-roth-vs-traditional-contributions" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Roth vs Traditional</h3>
              <p className="text-sm text-teal-700 mt-1">Choose the right account type</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-invest-inside-a-tfsa-rrsp-401k-ira" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Invest Inside Accounts →</h3>
              <p className="text-sm text-teal-700 mt-1">Build portfolios in tax-advantaged accounts</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}