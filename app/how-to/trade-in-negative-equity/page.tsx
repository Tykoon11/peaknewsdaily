import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trading In a Car with Negative Equity (Your Options)',
  description: 'Owe more than your car is worth? Learn safe ways to handle negative equity—refinance, cash bridge, or sell private—without digging a deeper hole.',
}

export default function TradeInNegativeEquityPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Negative Equity Solutions</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📉
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">Upside-down on your car? Do this next.</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Smart strategies to handle negative equity without making your financial situation worse.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Confirm how negative you are</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Calculate Your True Position</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>Loan payoff amount:</strong> Call your lender for 10-day payoff quote</p>
            <p><strong>Trade-in value:</strong> Get quotes from CarMax, Carvana, local dealers</p>
            <p><strong>Private party value:</strong> Check KBB, Edmunds, recent sales</p>
            <p><strong>Negative equity:</strong> Payoff amount minus current market value</p>
          </div>
        </div>

        <div className="bg-red-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Negative Equity Example</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Your Current Situation</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Loan payoff: $18,500</li>
                <li>• Trade-in value: $15,000</li>
                <li>• Private party value: $17,000</li>
                <li>• <strong>Negative equity: $3,500 (trade-in)</strong></li>
                <li>• <strong>Negative equity: $1,500 (private party)</strong></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Why This Happens</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Rapid early depreciation</li>
                <li>• Long loan terms (72+ months)</li>
                <li>• Little/no down payment</li>
                <li>• High interest rates</li>
                <li>• Market value decline</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Why rolling over hurts (and when it's unavoidable)</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">The Rollover Trap</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>What happens:</strong> Negative equity gets added to your new car loan</p>
            <p><strong>The problem:</strong> You start the new loan even more underwater</p>
            <p><strong>Compounding effect:</strong> Higher loan amount = higher payments + more interest</p>
            <p><strong>Future impact:</strong> Makes it harder to get out of negative equity later</p>
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Rollover Math Example</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-orange-300">
              <thead class="bg-orange-50">
                <tr>
                  <th class="border border-orange-300 px-3 py-2 text-left">Scenario</th>
                  <th class="border border-orange-300 px-3 py-2 text-left">New Car Price</th>
                  <th class="border border-orange-300 px-3 py-2 text-left">Negative Equity</th>
                  <th class="border border-orange-300 px-3 py-2 text-left">Total Loan</th>
                  <th class="border border-orange-300 px-3 py-2 text-left">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-orange-300 px-3 py-2">No rollover</td>
                  <td class="border border-orange-300 px-3 py-2">$25,000</td>
                  <td class="border border-orange-300 px-3 py-2">$0</td>
                  <td class="border border-orange-300 px-3 py-2">$25,000</td>
                  <td class="border border-orange-300 px-3 py-2 text-green-600">$467</td>
                </tr>
                <tr class="bg-orange-50">
                  <td class="border border-orange-300 px-3 py-2">With rollover</td>
                  <td class="border border-orange-300 px-3 py-2">$25,000</td>
                  <td class="border border-orange-300 px-3 py-2">$3,500</td>
                  <td class="border border-orange-300 px-3 py-2">$28,500</td>
                  <td class="border border-orange-300 px-3 py-2 text-red-600">$532</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-orange-700 text-sm mt-3">60-month loan at 7% APR. Rolling over negative equity costs $65/month more and $3,900 total extra interest.</p>
        </div>

        <h2>Safer paths: cash bridge, cheaper car, refinance</h2>
        <div class="space-y-6 my-8">
          <div class="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-green-800 mb-4">Option 1: Cash Bridge</h3>
            <div class="text-green-700 space-y-2">
              <p><strong>How it works:</strong> Pay the negative equity in cash at trade-in</p>
              <p><strong>Example:</strong> Owe $18,500, trade value $15,000 → bring $3,500 cash</p>
              <p><strong>Benefit:</strong> Start new loan with normal LTV, avoid compounding debt</p>
              <p><strong>Best for:</strong> Small negative equity ($1,000-3,000) with available savings</p>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-blue-800 mb-4">Option 2: Buy a Cheaper Car</h3>
            <div class="text-blue-700 space-y-2">
              <p><strong>Strategy:</strong> Reduce new car price to minimize loan-to-value ratio</p>
              <p><strong>Example:</strong> Instead of $30K car, buy $20K car + $3.5K rollover = $23.5K total</p>
              <p><strong>Benefit:</strong> Lower total debt burden, easier to get approved</p>
              <p><strong>Downside:</strong> May not get the car you really want</p>
            </div>
          </div>

          <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-4">Option 3: Refinance Current Loan</h3>
            <div class="text-purple-700 space-y-2">
              <p><strong>When it works:</strong> Credit improved since original loan, rates dropped</p>
              <p><strong>Benefit:</strong> Lower payment buys time to pay down principal</p>
              <p><strong>Strategy:</strong> Keep car longer, make extra payments toward principal</p>
              <p><strong>Timeline:</strong> May take 1-2 years to reach positive equity</p>
            </div>
          </div>
        </div>

        <h2>Private-party sale math</h2>
        <div class="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-indigo-800 mb-4">Why Private Party Often Beats Trade-In</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-indigo-800 mb-2">Trade-In Scenario</h4>
              <ul class="text-indigo-700 text-sm space-y-1">
                <li>• Loan payoff: $18,500</li>
                <li>• Trade-in value: $15,000</li>
                <li>• Cash needed: $3,500</li>
                <li>• Plus new car down payment</li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold text-indigo-800 mb-2">Private Sale Scenario</h4>
              <ul class="text-indigo-700 text-sm space-y-1">
                <li>• Loan payoff: $18,500</li>
                <li>• Private sale price: $17,000</li>
                <li>• Cash needed: $1,500</li>
                <li>• Savings: $2,000 vs trade-in</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-yellow-800 mb-4">Private Sale Process</h3>
          <div class="text-yellow-700 space-y-2">
            <p><strong>Step 1:</strong> Get payoff quote from lender (10-day quote)</p>
            <p><strong>Step 2:</strong> List car for private sale</p>
            <p><strong>Step 3:</strong> Meet buyer at lender's office or bank</p>
            <p><strong>Step 4:</strong> Buyer pays lender directly, you pay difference</p>
            <p><strong>Title transfer:</strong> Lender releases title to buyer once loan is satisfied</p>
          </div>
        </div>

        <h2>Steps to keep insurance & GAP aligned</h2>
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-red-800 mb-4">GAP Insurance Reality Check</h3>
          <div class="text-red-700 space-y-3">
            <p><strong>What GAP covers:</strong> Difference between loan balance and insurance payout after total loss</p>
            <p><strong>What GAP doesn't cover:</strong> Negative equity in a voluntary trade-in</p>
            <p><strong>Trade-in limitation:</strong> You still owe the negative equity even with GAP</p>
            <p><strong>When GAP helps:</strong> If car is totaled/stolen, GAP pays off loan completely</p>
          </div>
        </div>

        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">Insurance Considerations</h3>
          <div class="text-orange-700 space-y-2">
            <p><strong>Maintain full coverage:</strong> Liability, collision, comprehensive until loan is paid</p>
            <p><strong>GAP coverage review:</strong> Cancel when you reach positive equity</p>
            <p><strong>New car GAP:</strong> Consider GAP on new loan if rolling over negative equity</p>
            <p><strong>Deductible strategy:</strong> Higher deductible = lower premium, but more out-of-pocket risk</p>
          </div>
        </div>

        <h2>When rolling over is unavoidable</h2>
        <div class="bg-gray-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Minimize the Damage</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-2">✓ Smart Rollover Moves</h4>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Put down as much cash as possible</li>
                <li>• Choose shorter loan term (48-60 months)</li>
                <li>• Buy reliable used car (2-3 years old)</li>
                <li>• Shop rates aggressively</li>
                <li>• Make extra principal payments</li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold text-gray-800 mb-2">✗ Avoid These Mistakes</h4>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• 72+ month loan terms</li>
                <li>• Expensive new car purchases</li>
                <li>• Zero down payment</li>
                <li>• Adding extended warranties</li>
                <li>• Trading up in car price/features</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Alternatives to trading in</h2>
        <div class="space-y-6 my-8">
          <div class="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 class="font-semibold text-green-800 mb-3">Keep the Car Longer</h4>
            <p class="text-green-700 text-sm mb-2">Drive it until positive equity or loan payoff</p>
            <div class="bg-white rounded p-3">
              <p class="text-xs text-gray-700">Benefits: No rollover debt, time for value to catch up with loan balance</p>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 class="font-semibold text-blue-800 mb-3">Lease Swap (if applicable)</h4>
            <p class="text-blue-700 text-sm mb-2">Transfer lease to someone else (if you're leasing)</p>
            <div class="bg-white rounded p-3">
              <p class="text-xs text-gray-700">Websites: SwapALease, LeaseTrader — may involve transfer fees</p>
            </div>
          </div>

          <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 class="font-semibold text-purple-800 mb-3">Personal Loan for Gap</h4>
            <p class="text-purple-700 text-sm mb-2">Take unsecured loan to pay negative equity</p>
            <div class="bg-white rounded p-3">
              <p class="text-xs text-gray-700">Higher interest rate, but keeps new car loan clean and separate</p>
            </div>
          </div>
        </div>

        <h2>Credit score impact</h2>
        <div class="bg-yellow-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-yellow-800 mb-4">How Negative Equity Affects Credit</h3>
          <div class="text-yellow-700 space-y-3">
            <p><strong>Making payments:</strong> No direct impact as long as you pay on time</p>
            <p><strong>High utilization:</strong> Loan balance much higher than asset value (similar to maxed credit cards)</p>
            <p><strong>New loan applications:</strong> High LTV may affect approval for future loans</p>
            <p><strong>Refinancing difficulty:</strong> Lenders reluctant to refi underwater loans</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Can I trade in with negative equity?</h3>
              <p class="text-gray-700">Yes, but you'll need to pay the difference in cash or roll it into your new loan. Rolling over negative equity compounds your debt and monthly payments.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Does GAP cover negative equity?</h3>
              <p class="text-gray-700">Only in total loss situations (accident, theft). GAP doesn't help with voluntary trade-ins—you still owe the negative equity amount even with GAP coverage.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Is a lease swap better?</h3>
              <p class="text-gray-700">Only applies if you're currently leasing. Lease swaps can help exit early but often involve fees and transfer restrictions. Check your lease contract for details.</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Will rolling over hurt my credit?</h3>
              <p class="text-gray-700">Not directly, but the higher loan amount increases your debt-to-income ratio and may make future credit approvals more difficult. High LTV ratios also concern lenders.</p>
            </div>
          </div>
        </div>
      </article>

      <nav class="mt-16 pt-8 border-t border-gray-200">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/buy-used-car-checklist" 
              class="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 class="font-semibold text-indigo-900">← Used Car Buying Guide</h3>
              <p class="text-sm text-indigo-700 mt-1">Avoid costly mistakes</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/insure-new-car-for-less" 
              class="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 class="font-semibold text-green-900">Insure New Car for Less →</h3>
              <p class="text-sm text-green-700 mt-1">Cut insurance costs legally</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}