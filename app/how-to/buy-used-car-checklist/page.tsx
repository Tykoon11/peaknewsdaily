import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Used Car Buying Checklist (Avoid Costly Mistakes)',
  description: 'Follow this 12-point used-car checklist: history reports, inspection, test-drive traps, financing, and paperwork to avoid surprise repairs and scams.',
}

export default function BuyUsedCarChecklistPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Used Car Buying Checklist</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            ✅
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">The no-regrets used car buying guide</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Follow this comprehensive checklist to avoid costly surprises and buy used cars with confidence.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Step 1: Run the VIN</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3">Critical VIN Checks Before Viewing</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>History report:</strong> CarFax, AutoCheck, or both (different databases)</p>
            <p><strong>Look for red flags:</strong> Accidents, flood damage, lemon buybacks, salvage/rebuilt titles</p>
            <p><strong>Check recalls:</strong> NHTSA.gov - verify all recalls were completed</p>
            <p><strong>Odometer verification:</strong> Confirm mileage matches title and service records</p>
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Title Brand Red Flags</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">🚨 Avoid These Titles</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Flood/Water damage</li>
                <li>• Salvage/Total loss</li>
                <li>• Lemon buyback</li>
                <li>• Fire damage</li>
                <li>• Hail damage (severe)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Proceed with Caution</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Rebuilt/Reconstructed</li>
                <li>• Prior taxi/rental</li>
                <li>• Multiple accidents</li>
                <li>• Theft recovery</li>
                <li>• Repossession history</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 2: Inspect in daylight</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Visual Inspection Checklist</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Exterior</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>□ Panel gaps uniform</li>
                <li>□ Paint color matches</li>
                <li>□ No rust or corrosion</li>
                <li>□ Tires wear evenly</li>
                <li>□ All lights work</li>
                <li>□ Glass has no cracks</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Interior</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>□ Seats show normal wear</li>
                <li>□ Electronics function</li>
                <li>□ AC/heat work</li>
                <li>□ No warning lights</li>
                <li>□ All buttons/switches work</li>
                <li>□ Clean, no odors</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Under Hood</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>□ Clean engine bay</li>
                <li>□ No oil leaks</li>
                <li>□ Belts/hoses intact</li>
                <li>□ Fluid levels good</li>
                <li>□ Battery terminals clean</li>
                <li>□ No unusual noises</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Cold Start Test</h3>
          <div className="text-green-700 space-y-2">
            <p><strong>Why it matters:</strong> Cold engines reveal problems that warm engines hide</p>
            <p><strong>Listen for:</strong> Knocking, irregular idle, excessive exhaust smoke</p>
            <p><strong>Watch for:</strong> Check engine light, rough idling, slow cranking</p>
            <p><strong>Timing:</strong> First visit should be when car hasn't run for 2+ hours</p>
          </div>
        </div>

        <h2>Step 3: Pre-purchase inspection (PPI)</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Why PPI is Non-Negotiable</h3>
          <div className="text-purple-700 space-y-3">
            <p><strong>Cost:</strong> $150-300 for comprehensive inspection</p>
            <p><strong>Savings:</strong> Often prevents $2,000-5,000+ in surprise repairs</p>
            <p><strong>Who:</strong> Independent mechanic familiar with the make/model</p>
            <p><strong>When:</strong> After initial inspection, before finalizing purchase</p>
            <p><strong>Red flag:</strong> If seller refuses PPI, walk away immediately</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">PPI Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Major Systems</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Engine compression test</li>
                <li>• Transmission fluid/operation</li>
                <li>• Brake pads, rotors, fluid</li>
                <li>• Suspension components</li>
                <li>• Exhaust system integrity</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Upcoming Maintenance</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Timing belt/chain condition</li>
                <li>• Coolant system</li>
                <li>• Air/cabin filters</li>
                <li>• Spark plugs/coils</li>
                <li>• Battery age/condition</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 4: Test drive route</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Comprehensive Test Drive Plan</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-orange-800">City Driving (15 minutes)</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Low-speed turns (listen for CV joint clicks)</li>
                <li>• Stop-and-go traffic (transmission shifts)</li>
                <li>• Parking lot maneuvers (power steering)</li>
                <li>• Hard braking from 30 mph (straight stop, no pulling)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-orange-800">Highway Driving (15 minutes)</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• 60+ mph sustained speed</li>
                <li>• Steering wheel vibration check</li>
                <li>• Lane changes (tracking, alignment)</li>
                <li>• Engine power under load (passing acceleration)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-orange-800">Parking Lot Tests (10 minutes)</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Tight turning radius</li>
                <li>• Reverse operation</li>
                <li>• Electronic systems (radio, GPS, etc.)</li>
                <li>• Final engine idle check</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 5: Price research and comps</h2>
        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Market Value Research</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Pricing Sources</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Kelley Blue Book (KBB)</li>
                <li>• Edmunds True Market Value</li>
                <li>• AutoTrader market listings</li>
                <li>• Cars.com price analysis</li>
                <li>• Carvana/CarMax quotes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Value Adjustments</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Mileage above/below average</li>
                <li>• Condition (excellent/good/fair)</li>
                <li>• Regional price differences</li>
                <li>• Seasonal demand fluctuations</li>
                <li>• Recent maintenance records</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Negotiation Starting Points</h3>
          <div className="text-yellow-700 space-y-2">
            <p><strong>Private party:</strong> Start 10-15% below asking price</p>
            <p><strong>Dealer:</strong> Research trade-in value, expect 15-25% markup</p>
            <p><strong>High-mileage vehicles:</strong> Bigger discount justified</p>
            <p><strong>Needed repairs:</strong> Subtract estimated repair costs from offer</p>
          </div>
        </div>

        <h2>Step 6: Paperwork essentials</h2>
        <div className="space-y-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Private Party Documents</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Required from Seller</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>□ Clear title (name matches ID)</li>
                  <li>□ Lien release (if applicable)</li>
                  <li>□ Maintenance records</li>
                  <li>□ Keys and manuals</li>
                  <li>□ Warranty info (if remaining)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Documents You Provide</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>□ Bill of sale (both copies)</li>
                  <li>□ Payment (cashier's check)</li>
                  <li>□ Insurance proof</li>
                  <li>□ Registration application</li>
                  <li>□ Driver's license copy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibond text-blue-800 mb-4">Dealer Purchase Verification</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Price confirmation:</strong> Final price matches negotiated amount</p>
              <p><strong>Fee transparency:</strong> All fees disclosed (doc, prep, advertising)</p>
              <p><strong>Add-on removal:</strong> Unwanted warranties/products removed</p>
              <p><strong>Financing terms:</strong> APR and payment match your pre-approval or their quote</p>
            </div>
          </div>
        </div>

        <h2>Common used car red flags</h2>
        <div className="space-y-4 my-8">
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Seller won't allow PPI or test drive</h3>
            <p className="text-red-700 text-sm">Any seller who refuses inspection or limits test drive is hiding problems. Walk away immediately.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">No maintenance records available</h3>
            <p className="text-red-700 text-sm">Cars without service history are risky bets. Assume major services are due and factor costs into your offer.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibond text-red-800">Price significantly below market</h3>
            <p className="text-red-700 text-sm">If it seems too good to be true, it probably is. Hidden damage, liens, or scams are common with underpriced cars.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Pressure to buy immediately</h3>
            <p className="text-red-700 text-sm">"Another buyer is coming" or "price expires today" are classic pressure tactics. Take your time to make the right decision.</p>
          </div>
        </div>

        <h2>Mileage and age guidelines</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">What's High Mileage in 2024?</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Vehicle Age</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Average Miles</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">High Mileage</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">1-2 years</td>
                  <td className="border border-gray-300 px-3 py-2">12,000-24,000</td>
                  <td className="border border-gray-300 px-3 py-2">30,000+</td>
                  <td className="border border-gray-300 px-3 py-2">Still under warranty</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">3-5 years</td>
                  <td className="border border-gray-300 px-3 py-2">36,000-60,000</td>
                  <td className="border border-gray-300 px-3 py-2">75,000+</td>
                  <td className="border border-gray-300 px-3 py-2">Major services due</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">6-8 years</td>
                  <td className="border border-gray-300 px-3 py-2">72,000-96,000</td>
                  <td className="border border-gray-300 px-3 py-2">120,000+</td>
                  <td className="border border-gray-300 px-3 py-2">Transmission, timing belt</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">9+ years</td>
                  <td className="border border-gray-300 px-3 py-2">108,000+</td>
                  <td className="border border-gray-300 px-3 py-2">150,000+</td>
                  <td className="border border-gray-300 px-3 py-2">Buy based on condition</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3">Modern cars can run 200,000+ miles with proper maintenance. Focus on service history over odometer reading.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a PPI worth it for cars under $10,000?</h3>
              <p className="text-gray-700">Yes, especially for older cars. A $200 inspection can reveal $3,000+ in hidden problems. The cheaper the car, the more important the inspection becomes.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What mileage is "too high" for modern cars?</h3>
              <p className="text-gray-700">There's no magic number. A well-maintained 150,000-mile car can be better than a neglected 80,000-mile car. Focus on service records and overall condition.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I spot a flood car?</h3>
              <p className="text-gray-700">Musty odors, water stains, rust in unusual places, and electrical issues are common signs. Always check the VIN for flood/water damage history.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I return a used car after purchase?</h3>
              <p className="text-gray-700">Usually no. Most used car sales are "as-is" with no return policy. This is why thorough inspection before purchase is critical—you can't undo the deal later.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/negotiate-car-price-scripts" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Car Negotiation Scripts</h3>
              <p className="text-sm text-indigo-700 mt-1">Get the best price possible</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/trade-in-negative-equity" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Negative Equity Solutions →</h3>
              <p className="text-sm text-green-700 mt-1">When you owe more than it's worth</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}