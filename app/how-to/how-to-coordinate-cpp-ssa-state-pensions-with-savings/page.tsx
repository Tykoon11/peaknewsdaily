import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When to Take CPP or Social Security (Coordinate with Your Portfolio)',
  description: 'Maximize lifetime income by timing CPP/SS with your withdrawals. Learn deferral boosts, breakeven logic, taxes, and survivor considerations.',
}

export default function CoordinatePensionsWithSavingsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Coordinate CPP/SSA with Savings</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏖️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Retirement & Pensions</p>
            <h1 className="text-4xl font-bold text-gray-900">Coordinating CPP/SSA/State pensions with savings</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Maximize lifetime income by timing CPP/SS with your withdrawals. Learn deferral boosts, breakeven logic, taxes, and survivor considerations.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Key timing levers</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">🇺🇸 Social Security</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Early:</strong> Age 62 (75% of full benefit)</li>
              <li>• <strong>Full retirement:</strong> Age 67 (100% of benefit)</li>
              <li>• <strong>Delayed:</strong> Age 70 (132% of benefit)</li>
              <li>• <strong>Annual increase:</strong> ~8% per year of delay</li>
              <li>• <strong>Inflation protection:</strong> Cost-of-living adjustments</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">🇨🇦 Canada Pension Plan</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>Early:</strong> Age 60 (64% of full benefit)</li>
              <li>• <strong>Standard:</strong> Age 65 (100% of benefit)</li>
              <li>• <strong>Delayed:</strong> Age 70 (142% of benefit)</li>
              <li>• <strong>Annual increase:</strong> 7.2% per year of delay</li>
              <li>• <strong>Plus OAS:</strong> Starts at 65, can defer to 70</li>
            </ul>
          </div>
        </div>

        <h2>Bridge strategy: spend portfolio early, delay pensions</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-4">Why This Works</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Reduces sequence of returns risk</p>
              <p className="text-green-700 text-sm">Less portfolio pressure during vulnerable early retirement years</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Locks in higher lifetime income</p>
              <p className="text-green-700 text-sm">Guaranteed 7-8% annual increases beat most investment returns</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Provides longevity insurance</p>
              <p className="text-green-700 text-sm">Higher monthly payments for life, especially valuable if you live long</p>
            </div>
          </div>
        </div>

        <h2>Breakeven analysis</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Country</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Early vs Normal</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Normal vs Delayed</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Breakeven Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">US Social Security</td>
                <td className="border border-gray-300 px-3 py-2">62 vs 67</td>
                <td className="border border-gray-300 px-3 py-2">67 vs 70</td>
                <td className="border border-gray-300 px-3 py-2">~78-82 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Canada CPP</td>
                <td className="border border-gray-300 px-3 py-2">60 vs 65</td>
                <td className="border border-gray-300 px-3 py-2">65 vs 70</td>
                <td className="border border-gray-300 px-3 py-2">~74-79 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-4">Breakeven Considerations</h3>
          <div className="space-y-2">
            <p className="text-yellow-700 text-sm"><strong>If you expect average longevity:</strong> Delaying often wins financially</p>
            <p className="text-yellow-700 text-sm"><strong>If you have serious health issues:</strong> Taking benefits early may be better</p>
            <p className="text-yellow-700 text-sm"><strong>Don't forget inflation protection:</strong> Government pensions include cost-of-living adjustments</p>
            <p className="text-yellow-700 text-sm"><strong>Consider opportunity cost:</strong> What could you earn investing early benefits?</p>
          </div>
        </div>

        <h2>Tax implications and benefits coordination</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Social Security taxation</p>
                <p className="text-blue-700 text-sm">Up to 85% taxable depending on total income</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">IRMAA thresholds</p>
                <p className="text-blue-700 text-sm">Medicare premium surcharges start at $103,000 income (single)</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Roth withdrawals coordination</p>
                <p className="text-blue-700 text-sm">Use tax-free Roth funds to stay under income thresholds</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">CPP is fully taxable</p>
                <p className="text-purple-700 text-sm">Included in taxable income at marginal rate</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">OAS clawback</p>
                <p className="text-purple-700 text-sm">Reduces at incomes over $86,912 (2024), eliminated at $142,609</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">GIS eligibility</p>
                <p className="text-purple-700 text-sm">Income-tested benefit affected by all pension income</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Coordination strategies</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Strategy 1: Full Deferral</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Delay CPP/SS to age 70 for maximum benefits</p>
              <p className="text-green-700 text-sm">Use portfolio withdrawals and cash to bridge gap</p>
              <p className="text-green-700 text-sm">Best for: Good health, adequate savings, longevity in family</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Strategy 2: Partial Bridge</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">Take pensions at full retirement age (65-67)</p>
              <p className="text-blue-700 text-sm">Reduces portfolio withdrawal pressure moderately</p>
              <p className="text-blue-700 text-sm">Best for: Average health, moderate savings, balanced approach</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Strategy 3: Early Claiming</h4>
            <div className="space-y-2">
              <p className="text-orange-700 text-sm">Take benefits early (60-62) despite reduced payments</p>
              <p className="text-orange-700 text-sm">Preserves portfolio for later years or legacy</p>
              <p className="text-orange-700 text-sm">Best for: Health concerns, large portfolio, prefer certainty</p>
            </div>
          </div>
        </div>

        <h2>Survivor benefit considerations</h2>
        
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-cyan-900 mb-4">Protecting the Surviving Spouse</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-cyan-800">Higher earner delays</p>
              <p className="text-cyan-700 text-sm">Surviving spouse gets the higher of the two Social Security benefits</p>
            </div>
            <div>
              <p className="font-medium text-cyan-800">Lower earner starts early</p>
              <p className="text-cyan-700 text-sm">Provides some income while higher earner's benefit grows</p>
            </div>
            <div>
              <p className="font-medium text-cyan-800">CPP survivor benefits</p>
              <p className="text-cyan-700 text-sm">Surviving spouse gets combination of their CPP plus survivor portion</p>
            </div>
          </div>
        </div>

        <h2>Sample coordination plan</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Example: $1M Portfolio, Retire at 62</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-800">Ages 62-67: Bridge Phase</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Withdraw $50,000/year from portfolio (5% initially)</li>
                <li>• Portfolio balance: $1M → ~$850K (withdrawals + modest growth)</li>
                <li>• No Social Security/CPP yet</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800">Ages 67-70: Transition Phase</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Continue delaying Social Security for 8%/year growth</li>
                <li>• Withdraw $40,000/year from portfolio</li>
                <li>• Portfolio balance: ~$750K</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800">Age 70+: Optimized Phase</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Start maximized Social Security: ~$45,000/year</li>
                <li>• Reduce portfolio withdrawals to $20,000/year</li>
                <li>• Total income: $65,000 with lower sequence risk</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>When NOT to delay pensions</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Consider Taking Benefits Early When:</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Serious health issues:</strong> Life expectancy significantly below average</li>
            <li>• <strong>Immediate cash needs:</strong> Portfolio insufficient to bridge to delayed benefits</li>
            <li>• <strong>Very large portfolio:</strong> Don't need optimization, prefer certainty of early benefits</li>
            <li>• <strong>High current tax rates:</strong> Better to realize pension income in low-tax years</li>
            <li>• <strong>Extreme market valuations:</strong> Bear market may make bridging strategy risky</li>
          </ul>
        </div>

        <h2>Action planning</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Calculate benefits at different ages</p>
              <p className="text-gray-600 text-sm">Use government calculators to model 62/65/70 claiming scenarios</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Simulate tax implications</p>
              <p className="text-gray-600 text-sm">Model how pension income affects overall tax burden and benefit eligibility</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Stress-test portfolio withdrawal plan</p>
              <p className="text-gray-600 text-sm">Ensure portfolio can sustain bridging strategy through bear markets</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Consider partial annuitization</p>
              <p className="text-gray-600 text-sm">Compare delayed pensions vs immediate annuities for guaranteed income</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Review annually</p>
              <p className="text-gray-600 text-sm">Health changes, market performance, and laws evolve—stay flexible</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Spousal coordination:</strong> Different strategies for each spouse based on earnings history</li>
            <li>• <strong>File and suspend ended:</strong> US no longer allows this strategy as of 2016</li>
            <li>• <strong>Earnings test:</strong> Working while collecting early SS reduces benefits temporarily</li>
            <li>• <strong>Tax withholding:</strong> Consider voluntary withholding on pension benefits</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is delaying pensions always the best strategy?</h3>
              <p className="text-gray-700">
                Not always. Health, immediate cash needs, tax considerations, and portfolio size all matter. 
                The 7-8% annual increases are excellent, but only valuable if you live long enough to benefit.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I work while claiming Social Security/CPP?</h3>
              <p className="text-gray-700">
                In the US, working while collecting early SS (before full retirement age) reduces benefits temporarily via earnings test. 
                In Canada, you can work and collect CPP without penalty, and it may increase future benefits through additional contributions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if markets crash during my bridging strategy?</h3>
              <p className="text-gray-700">
                This is exactly why delaying pensions can be valuable—it provides a stabilizer. You can reduce portfolio withdrawals 
                and let the delayed pension credits continue growing while markets recover.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I coordinate this with RMDs?</h3>
              <p className="text-gray-700">
                Plan for required minimum distributions starting at age 73 (US). The combination of RMDs plus pension income 
                may push you into higher tax brackets, making Roth conversions valuable in your 60s.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-execute-a-backdoor-roth-step-by-step" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">← Execute Backdoor Roth</h3>
              <p className="text-sm text-teal-700 mt-1">High earners can access Roth benefits</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-ladder-bonds-or-gics-for-steady-income" 
              className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <h3 className="font-semibold text-teal-900">Bond/GIC Ladders →</h3>
              <p className="text-sm text-teal-700 mt-1">Build reliable income streams</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}