import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retirement Income Plan: Guardrails, Buckets & Tax-Smart Withdrawals',
  description: 'Turn your savings into paycheques. Learn guardrail withdrawals, the 3-bucket method, and tax-efficient account sequencing in the US & Canada.',
}

export default function RetirementIncomeWithdrawalPlanPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Retirement Income Withdrawal Plan</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">How to build a retirement income withdrawal plan</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Turn your savings into paycheques. Learn guardrail withdrawals, the 3-bucket method, and tax-efficient account sequencing in the US & Canada.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Three frameworks to combine</h2>
        
        <p>Successful retirement income plans integrate multiple strategies to provide steady cash flow while preserving wealth.</p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">🪣 Bucket Strategy</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Bucket 1: Cash (1-2 years)</li>
              <li>• Bucket 2: Bonds (3-7 years)</li>
              <li>• Bucket 3: Stocks (long-term)</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">🛡️ Guardrails</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Start ~3.5-4.0% withdrawal</li>
              <li>• Adjust ±10-20% based on performance</li>
              <li>• Protect against sequence risk</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">🎯 Tax-Smart Sequencing</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• Optimize withdrawal order</li>
              <li>• Manage tax brackets</li>
              <li>• Coordinate with pensions</li>
            </ul>
          </div>
        </div>

        <h2>The bucket system</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Bucket 1: Cash & Short-Term (1-2 Years)</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Purpose</p>
                <p className="text-blue-700 text-sm">Immediate spending needs, market volatility buffer</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Holdings</p>
                <p className="text-blue-700 text-sm">High-yield savings, money market, short-term CDs/GICs</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Target amount</p>
                <p className="text-blue-700 text-sm">12-24 months of expenses</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Bucket 2: Conservative Growth (3-7 Years)</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Purpose</p>
                <p className="text-green-700 text-sm">Medium-term stability, refill cash bucket</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Holdings</p>
                <p className="text-green-700 text-sm">Bond funds, bond ladder, balanced funds, dividend stocks</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Target amount</p>
                <p className="text-green-700 text-sm">5-7 years of expenses</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Bucket 3: Growth (Long-Term)</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-orange-800">Purpose</p>
                <p className="text-orange-700 text-sm">Wealth preservation, inflation protection, legacy</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Holdings</p>
                <p className="text-orange-700 text-sm">Broad stock index funds, international equity, growth assets</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Target amount</p>
                <p className="text-orange-700 text-sm">Remainder of portfolio (typically 50-70%)</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Dynamic withdrawal guardrails</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-4">How Guardrails Work</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-yellow-800">Step 1: Set initial withdrawal rate</p>
              <p className="text-yellow-700 text-sm">Start with 3.5-4.0% of portfolio value</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Step 2: Define guardrails</p>
              <p className="text-yellow-700 text-sm">If portfolio drops 10% below target → reduce spending 10%</p>
              <p className="text-yellow-700 text-sm">If portfolio rises 20% above target → increase spending 10%</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Step 3: Review annually</p>
              <p className="text-yellow-700 text-sm">Adjust next year's spending based on portfolio performance</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Portfolio Value</th>
                <th className="border border-gray-300 px-3 py-2 text-left">vs Target</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Action</th>
                <th className="border border-gray-300 px-3 py-2 text-left">New Spending</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2">$900,000</td>
                <td className="border border-gray-300 px-3 py-2">-10% from $1M target</td>
                <td className="border border-gray-300 px-3 py-2">Reduce spending 10%</td>
                <td className="border border-gray-300 px-3 py-2">$36,000 (from $40,000)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">$1,000,000</td>
                <td className="border border-gray-300 px-3 py-2">At target</td>
                <td className="border border-gray-300 px-3 py-2">No change</td>
                <td className="border border-gray-300 px-3 py-2">$40,000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2">$1,200,000</td>
                <td className="border border-gray-300 px-3 py-2">+20% above target</td>
                <td className="border border-gray-300 px-3 py-2">Increase spending 10%</td>
                <td className="border border-gray-300 px-3 py-2">$44,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Tax-efficient withdrawal sequencing</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States Strategy</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">1. Fill lower tax brackets from taxable accounts</p>
                <p className="text-blue-700 text-sm">Capital gains and qualified dividends at preferential rates</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">2. Traditional 401(k)/IRA to stay in bracket</p>
                <p className="text-blue-700 text-sm">Fill remaining space in 12%, 22% brackets</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">3. Use Roth for bracket management</p>
                <p className="text-blue-700 text-sm">Tax-free withdrawals to avoid IRMAA cliffs, higher brackets</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">4. Coordinate with Social Security</p>
                <p className="text-blue-700 text-sm">Manage income to minimize SS taxation</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada Strategy</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">1. Non-registered accounts first</p>
                <p className="text-purple-700 text-sm">Capital gains at 50% inclusion rate</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">2. RRSP/RRIF withdrawals to manage brackets</p>
                <p className="text-purple-700 text-sm">Balance with OAS clawback threshold</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">3. TFSA last for tax-free growth</p>
                <p className="text-purple-700 text-sm">Preserve for late retirement, estate planning</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">4. Consider pension splitting</p>
                <p className="text-purple-700 text-sm">Split eligible pension income with spouse</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Implementation process</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Calculate annual "paycheque"</p>
              <p className="text-gray-600 text-sm">Determine after-tax spending needs, translate to gross withdrawals</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Fill buckets from appropriate sources</p>
              <p className="text-gray-600 text-sm">Replenish cash from bonds/dividends, bonds from stocks after good years</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Optimize tax management</p>
              <p className="text-gray-600 text-sm">Roth conversions in low-income years, tax-loss harvesting</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Integrate pension timing</p>
              <p className="text-gray-600 text-sm">Coordinate CPP/SS start dates to reduce portfolio strain</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Review and adjust annually</p>
              <p className="text-gray-600 text-sm">Update spending based on portfolio performance and life changes</p>
            </div>
          </div>
        </div>

        <h2>Sample withdrawal plan</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Example: $1M Portfolio, $40K Annual Need</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-800">Portfolio Allocation</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Bucket 1 (Cash): $80,000 (2 years expenses)</li>
                <li>• Bucket 2 (Bonds): $220,000 (5.5 years expenses)</li>
                <li>• Bucket 3 (Stocks): $700,000 (growth engine)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800">Monthly Process</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Withdraw $3,333 from cash bucket</li>
                <li>• Collect dividends/interest to replenish cash</li>
                <li>• Quarterly: Rebalance and refill buckets as needed</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800">Annual Review</p>
              <p className="text-gray-700">If portfolio grows to $1.1M → Increase spending to $42K</p>
              <p className="text-gray-700">If portfolio falls to $900K → Reduce spending to $36K</p>
            </div>
          </div>
        </div>

        <h2>Special considerations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Required Minimum Distributions</h4>
            <div className="space-y-2">
              <p className="text-red-700 text-sm"><strong>US:</strong> Traditional 401(k)/IRA RMDs start at 73</p>
              <p className="text-red-700 text-sm"><strong>Canada:</strong> RRSP converts to RRIF, mandates minimum withdrawals</p>
              <p className="text-red-700 text-sm">Plan withdrawal strategy around RMD requirements</p>
              <p className="text-red-700 text-sm">Consider Roth conversions before RMDs begin</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Healthcare Costs</h4>
            <div className="space-y-2">
              <p className="text-orange-700 text-sm">Plan for increasing medical expenses with age</p>
              <p className="text-orange-700 text-sm">Long-term care costs can be substantial</p>
              <p className="text-orange-700 text-sm">Consider separate healthcare bucket or insurance</p>
              <p className="text-orange-700 text-sm">HSA withdrawals for medical expenses are tax-free</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Withdrawal Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Fixed 4% forever:</strong> Ignoring market performance and portfolio value changes</li>
            <li>• <strong>No spending flexibility:</strong> Unable to reduce expenses during bear markets</li>
            <li>• <strong>Poor tax planning:</strong> Missing opportunities for Roth conversions, tax-loss harvesting</li>
            <li>• <strong>Sequence of returns neglect:</strong> Not protecting against poor early returns</li>
            <li>• <strong>Pension timing errors:</strong> Taking SS/CPP too early or late for situation</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Automate the system:</strong> Set up automatic transfers between buckets</li>
            <li>• <strong>Plan for inflation:</strong> Review spending needs annually for cost increases</li>
            <li>• <strong>Keep it flexible:</strong> Adjust guardrails and buckets as life changes</li>
            <li>• <strong>Monitor tax efficiency:</strong> Annual tax planning can save thousands</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I use fixed 4% or flexible guardrails?</h3>
              <p className="text-gray-700">
                Flexible guardrails improve portfolio durability by adjusting spending based on performance. 
                Fixed percentages work if you have significant spending flexibility or other income sources.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much cash is enough in Bucket 1?</h3>
              <p className="text-gray-700">
                12-24 months of expenses is common. More conservative retirees may hold 3 years. 
                The key is avoiding stock sales during market downturns while not holding excessive cash long-term.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about annuities for guaranteed income?</h3>
              <p className="text-gray-700">
                Annuities can provide a longevity floor, but compare costs versus delaying CPP/Social Security. 
                Immediate annuities might make sense for a portion of your portfolio if you value guaranteed income.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I coordinate this with my pension?</h3>
              <p className="text-gray-700">
                Integrate pension payments into your withdrawal plan. Delay pensions to increase monthly payments 
                and reduce portfolio withdrawal pressure. Use the bucket strategy to bridge until pension payments begin.
              </p>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a Retirement Income Withdrawal Plan",
        "description": "Build a systematic plan to turn retirement savings into steady income using buckets, guardrails, and tax-efficient sequencing",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Set up the bucket system",
            "text": "Allocate portfolio into cash (1-2 years), bonds (3-7 years), and stocks (long-term growth)"
          },
          {
            "@type": "HowToStep", 
            "name": "Establish guardrail withdrawal rates",
            "text": "Start with 3.5-4% withdrawal rate, adjust ±10-20% based on portfolio performance"
          },
          {
            "@type": "HowToStep",
            "name": "Plan tax-efficient sequencing",
            "text": "Optimize withdrawal order from different account types to minimize taxes"
          },
          {
            "@type": "HowToStep",
            "name": "Integrate pension timing", 
            "text": "Coordinate Social Security/CPP start dates with portfolio withdrawals"
          },
          {
            "@type": "HowToStep",
            "name": "Review and adjust annually",
            "text": "Update spending based on portfolio performance, market conditions, and life changes"
          }
        ]
      })}
      </script>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-invest-inside-a-tfsa-rrsp-401k-ira" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Invest Inside Accounts</h3>
              <p className="text-sm text-teal-700 mt-1">Build portfolios in tax-advantaged accounts</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-avoid-sequence-of-returns-risk" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Avoid Sequence Risk →</h3>
              <p className="text-sm text-teal-700 mt-1">Protect against poor early returns</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}