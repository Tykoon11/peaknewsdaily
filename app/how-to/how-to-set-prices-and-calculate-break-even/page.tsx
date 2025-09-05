import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Set Prices and Calculate Break-Even Point',
  description: 'Calculate break-even analysis, set profitable pricing, and understand unit economics. Learn fixed costs, variable costs, and contribution margin for business success.',
}

export default function HowToSetPricesAndCalculateBreakEven() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Set Prices and Calculate Break-Even</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            📊
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Set Prices and Calculate Break-Even Point
        </h1>
        <p className="text-xl text-gray-600">
          Calculate break-even analysis, set profitable pricing, and understand unit economics. Learn fixed costs, variable costs, and contribution margin for business success.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">⚖️ Break-Even Formula</h3>
          <p className="text-pink-700">
            Break-even point = Fixed Costs ÷ (Price per Unit - Variable Cost per Unit). This shows exactly how many units you need to sell to cover all costs. Price above this point generates profit, below creates losses.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Break-Even Analysis Drives Smart Business Decisions</h3>
          <p className="mb-4">
            Break-even analysis tells you the minimum sales needed to avoid losses, helps set profitable prices, and reveals how changes in costs or prices affect profitability. Without this analysis, you are pricing blind and risking business failure.
          </p>
          <p>
            This guide shows you how to calculate break-even points, set prices that ensure profitability, understand contribution margins, and use break-even analysis for strategic planning.
          </p>
        </div>

        <h2>Understanding Break-Even Components</h2>

        <p>Break-even analysis requires understanding the relationship between fixed costs, variable costs, and pricing.</p>

        <h3>Fixed Costs (Overhead)</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Monthly Fixed Costs</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Rent and utilities: $3,000</li>
              <li>• Insurance premiums: $500</li>
              <li>• Software subscriptions: $800</li>
              <li>• Salaries and benefits: $8,000</li>
              <li>• Loan payments: $1,200</li>
              <li>• Professional services: $600</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border">
              <p className="font-semibold text-red-800">Total Monthly Fixed Costs: $14,100</p>
            </div>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-3">Variable Costs per Unit</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Raw materials: $15</li>
              <li>• Direct labor: $25</li>
              <li>• Packaging: $3</li>
              <li>• Shipping: $7</li>
              <li>• Credit card fees: $2</li>
              <li>• Sales commissions: $8</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border">
              <p className="font-semibold text-orange-800">Total Variable Cost per Unit: $60</p>
            </div>
          </div>
        </div>

        <h3>Contribution Margin</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-4">Contribution Margin Calculation</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Price per Unit: $150</p>
              <p>Variable Cost per Unit: $60</p>
              <p className="font-semibold text-green-800">Contribution Margin per Unit: $90</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Contribution Margin Percentage:</p>
              <p>$90 ÷ $150 = 60%</p>
              <p className="text-sm text-gray-600">This means 60 cents of every dollar goes toward fixed costs and profit</p>
            </div>
          </div>
        </div>

        <h2>Break-Even Calculation Methods</h2>

        <p>Calculate break-even in units and dollars to understand your minimum performance requirements.</p>

        <h3>Break-Even in Units</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Calculation</th>
                <th className="px-4 py-3 text-left font-semibold">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Fixed Costs (Monthly)</td>
                <td className="px-4 py-3">$14,100</td>
                <td className="px-4 py-3">Given</td>
                <td className="px-4 py-3">$14,100</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Price per Unit</td>
                <td className="px-4 py-3">$150</td>
                <td className="px-4 py-3">Given</td>
                <td className="px-4 py-3">$150</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Variable Cost per Unit</td>
                <td className="px-4 py-3">$60</td>
                <td className="px-4 py-3">Given</td>
                <td className="px-4 py-3">$60</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Contribution Margin</td>
                <td className="px-4 py-3">$90</td>
                <td className="px-4 py-3">$150 - $60</td>
                <td className="px-4 py-3">$90</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="px-4 py-3 font-bold">Break-Even Units</td>
                <td className="px-4 py-3 font-bold">157 units</td>
                <td className="px-4 py-3">$14,100 ÷ $90</td>
                <td className="px-4 py-3 font-bold">157 units/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Break-Even in Sales Revenue</h3>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-yellow-800 mb-4">Revenue Break-Even Calculation</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Method 1: Units × Price</p>
              <p>157 units × $150 = $23,550 monthly revenue needed</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Method 2: Fixed Costs ÷ Contribution Margin %</p>
              <p>$14,100 ÷ 60% = $23,500 monthly revenue needed</p>
            </div>
          </div>
        </div>

        <h2>Pricing Strategies Based on Break-Even</h2>

        <p>Use break-even analysis to set prices that ensure profitability and business sustainability.</p>

        <h3>Cost-Plus Pricing with Break-Even</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Step 1: Calculate Full Cost per Unit</h4>
            <p className="text-gray-600 mb-2">Variable costs + allocated fixed costs per unit</p>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <p>Variable cost: $60</p>
              <p>Fixed cost per unit (at 200 units): $14,100 ÷ 200 = $70.50</p>
              <p><strong>Full cost per unit: $130.50</strong></p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Step 2: Add Profit Margin</h4>
            <p className="text-gray-600 mb-2">Full cost × (1 + desired profit margin)</p>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <p>Full cost: $130.50</p>
              <p>Desired margin: 25%</p>
              <p><strong>Selling price: $130.50 × 1.25 = $163.13</strong></p>
            </div>
          </div>
        </div>

        <h3>Break-Even Sensitivity Analysis</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Price Change</th>
                <th className="px-4 py-3 text-left font-semibold">New Price</th>
                <th className="px-4 py-3 text-left font-semibold">Contribution Margin</th>
                <th className="px-4 py-3 text-left font-semibold">Break-Even Units</th>
                <th className="px-4 py-3 text-left font-semibold">% Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">-10%</td>
                <td className="px-4 py-3">$135</td>
                <td className="px-4 py-3">$75</td>
                <td className="px-4 py-3 text-red-600">188 units</td>
                <td className="px-4 py-3 text-red-600">+20% more units needed</td>
              </tr>
              <tr>
                <td className="px-4 py-3">-5%</td>
                <td className="px-4 py-3">$142.50</td>
                <td className="px-4 py-3">$82.50</td>
                <td className="px-4 py-3 text-yellow-600">171 units</td>
                <td className="px-4 py-3 text-yellow-600">+9% more units needed</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 font-medium">Current</td>
                <td className="px-4 py-3 font-medium">$150</td>
                <td className="px-4 py-3 font-medium">$90</td>
                <td className="px-4 py-3 font-medium">157 units</td>
                <td className="px-4 py-3 font-medium">Baseline</td>
              </tr>
              <tr>
                <td className="px-4 py-3">+5%</td>
                <td className="px-4 py-3">$157.50</td>
                <td className="px-4 py-3">$97.50</td>
                <td className="px-4 py-3 text-green-600">145 units</td>
                <td className="px-4 py-3 text-green-600">-8% fewer units needed</td>
              </tr>
              <tr>
                <td className="px-4 py-3">+10%</td>
                <td className="px-4 py-3">$165</td>
                <td className="px-4 py-3">$105</td>
                <td className="px-4 py-3 text-green-600">134 units</td>
                <td className="px-4 py-3 text-green-600">-15% fewer units needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Using Break-Even for Business Planning</h2>

        <p>Break-even analysis informs strategic decisions beyond pricing.</p>

        <h3>Sales Target Setting</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📈 Monthly Sales Goals</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Break-even target: 157 units ($23,550 revenue)</li>
            <li>☐ Minimum profit target: 180 units ($27,000 revenue)</li>
            <li>☐ Growth target: 225 units ($33,750 revenue)</li>
            <li>☐ Stretch target: 275 units ($41,250 revenue)</li>
            <li>☐ Daily unit goal: 157 ÷ 22 working days = 7.1 units/day</li>
            <li>☐ Weekly unit goal: 157 ÷ 4.3 weeks = 36.5 units/week</li>
            <li>☐ Buffer for seasonality: +20% during slow periods</li>
            <li>☐ Team performance metrics aligned with targets</li>
          </ul>
        </div>

        <h3>Cost Management Strategies</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Reduce Fixed Costs</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Negotiate lower rent or move locations</li>
              <li>• Switch to variable-cost contractors</li>
              <li>• Eliminate unused subscriptions</li>
              <li>• Renegotiate insurance and service contracts</li>
              <li>• Impact: Lower break-even point</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-3">Reduce Variable Costs</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Negotiate better supplier pricing</li>
              <li>• Improve production efficiency</li>
              <li>• Reduce waste and defects</li>
              <li>• Optimize shipping and logistics</li>
              <li>• Impact: Higher contribution margin</li>
            </ul>
          </div>
        </div>

        <h2>Multi-Product Break-Even Analysis</h2>

        <p>Calculate break-even for businesses with multiple products or services.</p>

        <h3>Weighted Average Contribution Margin</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Product</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Variable Cost</th>
                <th className="px-4 py-3 text-left font-semibold">Contribution</th>
                <th className="px-4 py-3 text-left font-semibold">Sales Mix</th>
                <th className="px-4 py-3 text-left font-semibold">Weighted Contribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Product A</td>
                <td className="px-4 py-3">$150</td>
                <td className="px-4 py-3">$60</td>
                <td className="px-4 py-3">$90</td>
                <td className="px-4 py-3">60%</td>
                <td className="px-4 py-3">$54</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Product B</td>
                <td className="px-4 py-3">$100</td>
                <td className="px-4 py-3">$45</td>
                <td className="px-4 py-3">$55</td>
                <td className="px-4 py-3">30%</td>
                <td className="px-4 py-3">$16.50</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Product C</td>
                <td className="px-4 py-3">$80</td>
                <td className="px-4 py-3">$35</td>
                <td className="px-4 py-3">$45</td>
                <td className="px-4 py-3">10%</td>
                <td className="px-4 py-3">$4.50</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="px-4 py-3 font-bold">Total</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 font-bold">100%</td>
                <td className="px-4 py-3 font-bold">$75</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Multi-Product Break-Even Calculation</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-4">Break-Even with Product Mix</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Weighted Average Contribution Margin: $75</p>
              <p>Fixed Costs: $14,100</p>
              <p><strong>Break-Even in Total Units: $14,100 ÷ $75 = 188 units</strong></p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Break-Even by Product:</p>
              <p>Product A: 188 × 60% = 113 units</p>
              <p>Product B: 188 × 30% = 56 units</p>
              <p>Product C: 188 × 10% = 19 units</p>
            </div>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-price-your-services-profitably" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Price Services Profitably</h3>
            <p className="text-pink-600 text-sm mt-2">Advanced pricing strategies beyond break-even</p>
          </Link>
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Simple Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Budget planning uses break-even analysis</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Accurate cost tracking enables break-even analysis</p>
          </Link>
          <Link href="/how-to/how-to-manage-cash-flow-for-seasonal-businesses" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Manage Seasonal Cash Flow</h3>
            <p className="text-pink-600 text-sm mt-2">Break-even varies by season</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What if my fixed costs change during the year?</h3>
            <p className="text-gray-600">
              Recalculate break-even monthly or quarterly as costs change. Use average fixed costs if they fluctuate seasonally, and create separate break-even analyses for different cost periods.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I handle mixed fixed and variable costs?</h3>
            <p className="text-gray-600">
              Split mixed costs into fixed and variable components. For example, a phone bill with a base charge plus usage fees. Use historical data to determine the variable portion per unit sold.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I price above or at break-even?</h3>
            <p className="text-gray-600">
              Always price above break-even to generate profit and provide a safety margin. Break-even is your minimum viable price, but you need profit for growth, emergencies, and owner returns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should I recalculate break-even?</h3>
            <p className="text-gray-600">
              Review monthly and recalculate when costs or prices change significantly. Quarterly reviews work for stable businesses, but monthly is better for growing or changing businesses.
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
                  "name": "What if my fixed costs change during the year?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Recalculate break-even monthly or quarterly as costs change."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How do I handle mixed fixed and variable costs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Split mixed costs into fixed and variable components using historical data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I price above or at break-even?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Always price above break-even to generate profit and provide safety margin."
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