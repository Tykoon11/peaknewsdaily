import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Insure a New Car for Less (Legally)',
  description: 'Cut your new-car insurance costs with coverage layering, telematics, and smart deductibles. See what to keep, what to skip, and how to bundle right.',
}

export default function InsureNewCarForLessPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Insure New Car for Less</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            🛡️
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">New car, lower premium: a practical playbook</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use smart coverage choices and proven discounts to slash your new car insurance costs.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Shop 3-5 carriers (same limits/deductibles)</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Insurance Shopping Strategy</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>Get identical quotes:</strong> Same coverage limits and deductibles for accurate comparison</p>
            <p><strong>Major carriers to try:</strong> GEICO, Progressive, State Farm, Allstate, USAA (military)</p>
            <p><strong>Direct vs agent:</strong> Online quotes are usually cheaper, but agents help with claims</p>
            <p><strong>Timing matters:</strong> Shop before you buy—rates vary dramatically by model</p>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Sample Quote Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-green-300">
              <thead className="bg-green-50">
                <tr>
                  <th className="border border-green-300 px-3 py-2 text-left">Carrier</th>
                  <th className="border border-green-300 px-3 py-2 text-left">6-Month Premium</th>
                  <th className="border border-green-300 px-3 py-2 text-left">Annual Cost</th>
                  <th className="border border-green-300 px-3 py-2 text-left">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-300 px-3 py-2">GEICO</td>
                  <td className="border border-green-300 px-3 py-2 text-green-600">$847</td>
                  <td className="border border-green-300 px-3 py-2 text-green-600">$1,694</td>
                  <td className="border border-green-300 px-3 py-2 font-medium">Best</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-300 px-3 py-2">Progressive</td>
                  <td className="border border-green-300 px-3 py-2">$923</td>
                  <td className="border border-green-300 px-3 py-2">$1,846</td>
                  <td className="border border-green-300 px-3 py-2">-$152</td>
                </tr>
                <tr>
                  <td className="border border-green-300 px-3 py-2">State Farm</td>
                  <td className="border border-green-300 px-3 py-2">$1,045</td>
                  <td className="border border-green-300 px-3 py-2">$2,090</td>
                  <td className="border border-green-300 px-3 py-2 text-red-600">-$396</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-300 px-3 py-2">Allstate</td>
                  <td className="border border-green-300 px-3 py-2">$1,187</td>
                  <td className="border border-green-300 px-3 py-2">$2,374</td>
                  <td className="border border-green-300 px-3 py-2 text-red-600">-$680</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-green-700 text-sm mt-3">Same driver, same 2024 Honda Civic, identical coverage. Switching saves $680/year.</p>
        </div>

        <h2>Choose limits first, then trim with deductibles</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Coverage Limits Priority Order</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-yellow-800">1. Liability Limits (Most Important)</h4>
              <ul className="text-yellow-700 text-sm space-y-1 mt-2">
                <li>• Minimum: 100/300/100 ($100K per person, $300K per accident, $100K property)</li>
                <li>• Better: 250/500/100 for higher net worth individuals</li>
                <li>• Best: 500/500/500 if you have significant assets to protect</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800">2. Uninsured/Underinsured Motorist</h4>
              <ul className="text-yellow-700 text-sm space-y-1 mt-2">
                <li>• Match your liability limits</li>
                <li>• Protects you from drivers with no/low insurance</li>
                <li>• Relatively cheap coverage for the protection</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800">3. Collision/Comprehensive Deductibles</h4>
              <ul className="text-yellow-700 text-sm space-y-1 mt-2">
                <li>• $500: Lower premium, manageable out-of-pocket</li>
                <li>• $1,000: Balance of premium savings vs. deductible risk</li>
                <li>• $2,500+: Only if you have large emergency fund</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Deductible Impact on Premiums</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Annual Premium by Deductible</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• $250 deductible: $2,400</li>
                <li>• $500 deductible: $2,100 (-$300)</li>
                <li>• $1,000 deductible: $1,850 (-$550)</li>
                <li>• $2,500 deductible: $1,600 (-$800)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Break-Even Analysis</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• $500 vs $250: Break even after 1.7 years</li>
                <li>• $1,000 vs $500: Break even after 1.8 years</li>
                <li>• Higher deductible pays off if no claims</li>
                <li>• Consider your claim history and risk tolerance</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Telematics & low-mileage discounts</h2>
        <div className="space-y-6 my-8">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Usage-Based Insurance Programs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-2">What They Track</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Miles driven per year</li>
                  <li>• Time of day driving</li>
                  <li>• Hard braking events</li>
                  <li>• Rapid acceleration</li>
                  <li>• Phone use while driving</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-indigo-800 mb-2">Potential Savings</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Low mileage: 10-30% discount</li>
                  <li>• Safe driving: 15-25% discount</li>
                  <li>• Off-peak driving: 5-15% discount</li>
                  <li>• Maximum total: Up to 50% discount</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Popular Telematics Programs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">GEICO DriveEasy</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Phone app or plug-in device</li>
                  <li>• Up to 25% discount</li>
                  <li>• No penalty for poor driving</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Progressive Snapshot</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• App-based monitoring</li>
                  <li>• Up to 30% discount</li>
                  <li>• Rates can increase for risky driving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>Bundle home/renters, add security devices</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Multi-Policy Bundling Benefits</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Typical savings:</strong> 10-25% discount on both policies</p>
            <p><strong>Convenience factor:</strong> One company, one bill, one phone number</p>
            <p><strong>Claims benefit:</strong> Easier coordination for covered incidents</p>
            <p><strong>Important:</strong> Compare bundled price vs. separate best rates for each policy</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Anti-Theft and Safety Discounts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Factory Safety Features</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Automatic emergency braking</li>
                <li>• Lane departure warning</li>
                <li>• Blind spot monitoring</li>
                <li>• Forward collision warning</li>
                <li>• Adaptive cruise control</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Add-On Security Devices</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Dash cameras (front/rear)</li>
                <li>• GPS tracking systems</li>
                <li>• Car alarms and immobilizers</li>
                <li>• Steering wheel locks</li>
                <li>• Garage parking discount</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Model-specific cost drivers</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Why Some Cars Cost More to Insure</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">High Insurance Cost Factors</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Expensive parts/repairs</li>
                <li>• High theft rates</li>
                <li>• Poor crash test scores</li>
                <li>• Sports car classification</li>
                <li>• Luxury vehicle features</li>
                <li>• Advanced driver assistance sensors</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Low Insurance Cost Factors</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• High safety ratings</li>
                <li>• Low theft target</li>
                <li>• Reliable model history</li>
                <li>• Common, affordable parts</li>
                <li>• Good crash avoidance features</li>
                <li>• Family-friendly image</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Insurance Cost by Vehicle Type</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Vehicle Category</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Example Models</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Avg Annual Premium</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-green-600">Economy Cars</td>
                  <td className="border border-gray-300 px-3 py-2">Honda Civic, Toyota Corolla</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">$1,400</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs">Safe, reliable, cheap parts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Midsize SUVs</td>
                  <td className="border border-gray-300 px-3 py-2">Honda Pilot, Toyota Highlander</td>
                  <td className="border border-gray-300 px-3 py-2">$1,650</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs">Family-oriented, safe</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Pickup Trucks</td>
                  <td className="border border-gray-300 px-3 py-2">F-150, Silverado, Ram 1500</td>
                  <td className="border border-gray-300 px-3 py-2">$1,850</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs">Higher damage potential</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium text-yellow-600">Sports Cars</td>
                  <td className="border border-gray-300 px-3 py-2">Mustang, Camaro, WRX</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">$2,400</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs">Speed, young drivers</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-red-600">Luxury/Performance</td>
                  <td className="border border-gray-300 px-3 py-2">BMW, Mercedes, Tesla</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">$3,200</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs">Expensive parts, theft target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Additional money-saving strategies</h2>
        <div className="space-y-6 my-8">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Annual vs. Monthly Payments</h4>
            <p className="text-purple-700 text-sm mb-2">Pay annually to avoid monthly processing fees</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Save $50-150/year by avoiding monthly fees and earning better payment discounts</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Defensive Driving Course</h4>
            <p className="text-yellow-700 text-sm mb-2">Complete approved online course for discount</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">5-10% discount for 3 years, course costs $20-50 online</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Good Student/Professional Discounts</h4>
            <p className="text-green-700 text-sm mb-2">Students (3.0+ GPA) and certain professions qualify</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Engineers, teachers, military get 5-15% discounts at many carriers</p>
            </div>
          </div>
        </div>

        <h2>What to avoid</h2>
        <div className="bg-red-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Insurance Mistakes That Cost Money</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">❌ Don't Do This</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Buy minimum liability limits</li>
                <li>• Skip uninsured motorist coverage</li>
                <li>• Choose very high deductibles you can't afford</li>
                <li>• Lie about mileage or garaging address</li>
                <li>• Add teenage drivers to sports cars</li>
                <li>• Cancel coverage to save money</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">✅ Do This Instead</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Buy adequate liability protection</li>
                <li>• Match UM/UIM to your liability limits</li>
                <li>• Balance deductibles with emergency fund</li>
                <li>• Be honest on applications</li>
                <li>• Put teens on safer, cheaper cars</li>
                <li>• Shop rates annually for better deals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is telematics worth it?</h3>
              <p className="text-gray-700">Yes, if you're a safe driver with low annual mileage. Potential savings of 20-40% outweigh privacy concerns for most drivers. You can usually opt out if rates increase.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does color affect rates?</h3>
              <p className="text-gray-700">No, car color doesn't affect insurance rates. Insurers care about make, model, engine size, safety features, and theft rates—not paint color.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should my deductible be?</h3>
              <p className="text-gray-700">Choose the highest deductible you can comfortably afford to pay out-of-pocket. $500-1,000 works for most people. Higher deductibles significantly reduce premiums.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is my model so expensive to insure?</h3>
              <p className="text-gray-700">High theft rates, expensive repairs, poor safety ratings, or sports car classification drive up rates. Research insurance costs before buying—they can vary 2-3x between similar models.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/trade-in-negative-equity" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Negative Equity Solutions</h3>
              <p className="text-sm text-indigo-700 mt-1">When you owe more than it's worth</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/sell-car-privately-top-dollar" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Sell Car Privately →</h3>
              <p className="text-sm text-green-700 mt-1">Get top dollar for your car</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}