import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Backdoor Roth IRA: Step-by-Step Guide (Pro-Rata Explained)',
  description: 'Too high for direct Roth IRA? Use the backdoor Roth correctly, avoid the pro-rata trap, and file Form 8606 properly. US-only.',
}

export default function BackdoorRothStepByStepPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Execute Backdoor Roth</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">Backdoor Roth: step by step (US)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Too high for direct Roth IRA? Use the backdoor Roth correctly, avoid the pro-rata trap, and file Form 8606 properly. US-only.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Before you start: understand the pro-rata rule</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-4">The Pro-Rata Trap</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-800">What it means</p>
              <p className="text-red-700 text-sm">The IRS counts ALL your pre-tax IRA money when you convert to Roth</p>
            </div>
            <div>
              <p className="font-medium text-red-800">Example problem</p>
              <p className="text-red-700 text-sm">If you have $95,000 in pre-tax Traditional IRA + $5,000 non-deductible contribution, converting the $5,000 is 95% taxable</p>
            </div>
            <div>
              <p className="font-medium text-red-800">The solution</p>
              <p className="text-red-700 text-sm">Roll existing Traditional IRA funds into your 401(k) first to isolate the non-deductible basis</p>
            </div>
          </div>
        </div>

        <h2>Step-by-step process</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Check for existing Traditional IRA balances</p>
              <p className="text-gray-600 text-sm">Include SEP-IRAs and SIMPLE IRAs in this calculation</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Clear out pre-tax IRA money (if any)</p>
              <p className="text-gray-600 text-sm">Roll into your 401(k) if plan allows, or accept pro-rata tax consequences</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Make non-deductible Traditional IRA contribution</p>
              <p className="text-gray-600 text-sm">Up to annual limit ($7,000 in 2024, $8,000 if 50+)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Wait for funds to settle</p>
              <p className="text-gray-600 text-sm">Administrative requirement, most convert within days</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Convert Traditional IRA to Roth IRA</p>
              <p className="text-gray-600 text-sm">Pay taxes on any gains since contribution</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
            <div>
              <p className="text-gray-700 font-medium">File Form 8606</p>
              <p className="text-gray-600 text-sm">Document non-deductible basis and conversion for tax reporting</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
            <div>
              <p className="text-gray-700 font-medium">Invest the Roth IRA funds</p>
              <p className="text-gray-600 text-sm">Implement your long-term asset allocation strategy</p>
            </div>
          </div>
        </div>

        <h2>Income limits that trigger backdoor need</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Filing Status</th>
                <th className="border border-gray-300 px-3 py-2 text-left">2024 Phase-out Range</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Complete Phase-out</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Single</td>
                <td className="border border-gray-300 px-3 py-2">$138,000 - $153,000</td>
                <td className="border border-gray-300 px-3 py-2">$153,000+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Married Filing Jointly</td>
                <td className="border border-gray-300 px-3 py-2">$218,000 - $228,000</td>
                <td className="border border-gray-300 px-3 py-2">$228,000+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Married Filing Separately</td>
                <td className="border border-gray-300 px-3 py-2">$0 - $10,000</td>
                <td className="border border-gray-300 px-3 py-2">$10,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Form 8606 requirements</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-blue-900 mb-4">Critical Tax Reporting</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-blue-800">Part I: Non-deductible contributions</p>
              <p className="text-blue-700 text-sm">Report your non-deductible Traditional IRA contribution</p>
            </div>
            <div>
              <p className="font-medium text-blue-800">Part II: Roth conversions</p>
              <p className="text-blue-700 text-sm">Report the conversion and calculate taxable amount</p>
            </div>
            <div>
              <p className="font-medium text-blue-800">Keep detailed records</p>
              <p className="text-blue-700 text-sm">Save all forms, statements, and conversion documentation</p>
            </div>
          </div>
        </div>

        <h2>Common pitfalls</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Mistakes That Cost Money</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Having existing pre-tax IRA balances:</strong> Creates pro-rata taxation surprise</li>
            <li>• <strong>Forgetting Form 8606:</strong> IRS may double-tax your contribution</li>
            <li>• <strong>Large time gap before conversion:</strong> Creates unnecessary taxable gains</li>
            <li>• <strong>Not coordinating with spouse:</strong> Each spouse needs their own IRA and process</li>
            <li>• <strong>Assuming it's always worth it:</strong> Consider current vs future tax rates</li>
          </ul>
        </div>

        <h2>Mega backdoor Roth (advanced strategy)</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">Separate Workplace Strategy</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Requirements</p>
              <p className="text-green-700 text-sm">401(k) allows after-tax contributions AND in-service withdrawals or in-plan Roth conversions</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Massive contribution potential</p>
              <p className="text-green-700 text-sm">Total 401(k) limit is $69,000 (2024), minus employer match and regular contributions</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Process</p>
              <p className="text-green-700 text-sm">Contribute after-tax dollars to 401(k), immediately convert to Roth 401(k) or roll to Roth IRA</p>
            </div>
          </div>
        </div>

        <h2>Tax implications and timing</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">When to Execute</h4>
            <div className="space-y-2">
              <p className="text-yellow-700 text-sm">Early in the year to maximize growth time in Roth</p>
              <p className="text-yellow-700 text-sm">January 1st contribution for previous tax year if possible</p>
              <p className="text-yellow-700 text-sm">Convert quickly to minimize taxable gains</p>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Tax Planning Considerations</h4>
            <div className="space-y-2">
              <p className="text-cyan-700 text-sm">Conversion counts as income for the year</p>
              <p className="text-cyan-700 text-sm">May affect ACA premium tax credits if income is near thresholds</p>
              <p className="text-cyan-700 text-sm">Could push you into higher tax bracket if timing isn't managed</p>
            </div>
          </div>
        </div>

        <h2>Practical example</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Real-World Scenario</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-800">Situation</p>
              <p className="text-gray-700">High earner with $250,000 AGI, wants Roth IRA access</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">January Actions</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Contribute $7,000 to non-deductible Traditional IRA</li>
                <li>• Wait 2-3 days for settlement</li>
                <li>• Convert entire $7,000 to Roth IRA</li>
                <li>• Invest in target allocation</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800">Tax Season</p>
              <p className="text-gray-700">File Form 8606 showing $7,000 non-deductible basis, $0 taxable conversion (assuming no gains)</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Result</p>
              <p className="text-gray-700">$7,000 in Roth IRA growing tax-free, no additional taxes owed</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Automate the process:</strong> Set up annual contributions and conversions</li>
            <li>• <strong>Don't overthink timing:</strong> A few dollars of gains on conversion won't matter long-term</li>
            <li>• <strong>Consider tax software:</strong> Most platforms handle Form 8606 automatically</li>
            <li>• <strong>Both spouses can do this:</strong> Double your annual Roth IRA access</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a Canada equivalent to backdoor Roth?</h3>
              <p className="text-gray-700">
                No, Canada doesn't have income limits for TFSA contributions, so there's no need for a "backdoor" strategy. 
                The TFSA provides similar tax-free growth and withdrawal benefits without income restrictions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can married filing jointly spouses each do backdoor Roth?</h3>
              <p className="text-gray-700">
                Yes, each spouse can contribute and convert up to the annual limit ($7,000 each in 2024), effectively 
                doubling your household's Roth IRA access to $14,000 annually.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I already have Traditional IRA money?</h3>
              <p className="text-gray-700">
                You'll face pro-rata taxation unless you can roll the pre-tax IRA funds into a 401(k) first. 
                If your employer plan doesn't accept rollovers, you may need to accept the tax consequences or skip the backdoor Roth.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I do backdoor Roth every year?</h3>
              <p className="text-gray-700">
                If you're over the income limits and expect higher tax rates in retirement, yes. However, if you expect 
                lower retirement tax rates, traditional 401(k) contributions might provide better value than backdoor Roth.
              </p>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Execute a Backdoor Roth IRA",
        "description": "Step-by-step process for high earners to access Roth IRA benefits through backdoor conversion strategy",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check for existing Traditional IRA balances",
            "text": "Include SEP-IRAs and SIMPLE IRAs to understand pro-rata implications"
          },
          {
            "@type": "HowToStep", 
            "name": "Clear out pre-tax IRA money if possible",
            "text": "Roll existing Traditional IRA funds into 401(k) to isolate non-deductible basis"
          },
          {
            "@type": "HowToStep",
            "name": "Make non-deductible Traditional IRA contribution",
            "text": "Contribute up to annual limit ($7,000 in 2024, $8,000 if 50+)"
          },
          {
            "@type": "HowToStep",
            "name": "Convert Traditional IRA to Roth IRA", 
            "text": "Wait for funds to settle, then convert entire amount to Roth IRA"
          },
          {
            "@type": "HowToStep",
            "name": "File Form 8606",
            "text": "Document non-deductible basis and conversion for proper tax reporting"
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
              href="/how-to/how-to-coordinate-cpp-ssa-state-pensions-with-savings" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Coordinate Pensions →</h3>
              <p className="text-sm text-teal-700 mt-1">Time CPP/SS with your portfolio</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}