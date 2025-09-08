import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sell Your Car Privately for Top Dollar (Checklist)',
  description: 'Max out your sale price with prep, photos, pricing strategy, safe meetups, and paperwork. Use our listing template and negotiation scripts to close fast.',
}

export default function SellCarPrivatelyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Sell Car Privately</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">The private-sale playbook (from prep to payment)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Maximize your car's sale price with proven preparation, marketing, and closing tactics.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Step 1: Prep for maximum value</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Professional Detailing ROI</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Investment:</strong> $150-250 for full detail (wash, wax, interior, engine bay)</p>
            <p><strong>Return:</strong> $500-1,500 higher sale price for clean, well-maintained appearance</p>
            <p><strong>DIY alternative:</strong> Spend a weekend doing it yourself for $50 in supplies</p>
            <p><strong>Focus areas:</strong> Interior stains, exterior scratches, engine bay cleanliness</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Fixes That Pay Off</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Under $100 Fixes</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Replace burned-out bulbs</li>
                <li>• New windshield wipers</li>
                <li>• Touch-up paint for small scratches</li>
                <li>• Clean/replace air filter</li>
                <li>• Fresh oil change (keep receipt)</li>
                <li>• Fix minor interior tears</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">$100-300 Fixes</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• New tires if current ones are worn</li>
                <li>• Replace cracked windshield</li>
                <li>• Fix check engine light issues</li>
                <li>• Repair broken door handles/locks</li>
                <li>• Address squealing brakes</li>
                <li>• Fix AC if not working</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Service Records = Higher Price</h3>
          <div className="text-orange-700 space-y-2">
            <p><strong>Organize documentation:</strong> Maintenance records, receipts, warranty info</p>
            <p><strong>Recent services:</strong> Oil changes, tune-ups, major repairs (last 2 years)</p>
            <p><strong>Missing records:</strong> Contact your regular mechanic for copies</p>
            <p><strong>Value boost:</strong> Well-documented maintenance can add $1,000+ to sale price</p>
          </div>
        </div>

        <h2>Step 2: Photography that sells</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Essential Photo Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Exterior Shots (12-15 photos)</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>□ Front 3/4 angle (main listing photo)</li>
                <li>□ Rear 3/4 angle</li>
                <li>□ Both side profiles</li>
                <li>□ Front and rear straight-on</li>
                <li>□ All 4 tires and wheels</li>
                <li>□ Engine bay (clean and well-lit)</li>
                <li>□ Any damage or wear spots</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Interior Shots (8-10 photos)</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>□ Dashboard and steering wheel</li>
                <li>□ Front seats from driver's door</li>
                <li>□ Rear seats and legroom</li>
                <li>□ Trunk/cargo area</li>
                <li>□ Odometer reading</li>
                <li>□ Center console and controls</li>
                <li>□ Any wear or damage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Pro Photography Tips</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>Golden hour lighting:</strong> Shoot during sunrise/sunset for warm, appealing light</p>
            <p><strong>Clean background:</strong> Avoid cluttered driveways, park in empty lot or street</p>
            <p><strong>Phone camera quality:</strong> Modern smartphones take excellent car photos</p>
            <p><strong>Video walkabout:</strong> 60-second video showing exterior, interior, and startup</p>
            <p><strong>Angles matter:</strong> Shoot from slightly below car level to make it look more impressive</p>
          </div>
        </div>

        <h2>Step 3: Price strategy that works</h2>
        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Market Research Process</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Online Valuations</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• KBB Private Party Value</li>
                <li>• Edmunds TMV (True Market)</li>
                <li>• NADA Clean Retail</li>
                <li>• CarGurus Market Analysis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Local Comps</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• AutoTrader similar listings</li>
                <li>• Cars.com local inventory</li>
                <li>• Facebook Marketplace</li>
                <li>• Craigslist (adjust for condition)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-800 mb-2">Instant Offers</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• CarMax appraisal (floor price)</li>
                <li>• Carvana instant offer</li>
                <li>• Vroom online quote</li>
                <li>• Local dealer trade value</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Pricing Psychology</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Start high strategy:</strong> List 10-15% above your target price to leave negotiation room</p>
            <p><strong>"OBO" language:</strong> "Priced at $18,500 OBO" signals flexibility</p>
            <p><strong>Round number effect:</strong> $18,000 feels more negotiable than $17,995</p>
            <p><strong>Justification ready:</strong> Have reasons for your price (recent maintenance, low miles, etc.)</p>
          </div>
        </div>

        <h2>Step 4: Safe screening and meetups</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Buyer Screening Checklist</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>Phone conversation first:</strong> Gauge seriousness, explain condition/price</p>
            <p><strong>Ask qualifying questions:</strong> "Do you have financing arranged?" "When are you looking to buy?"</p>
            <p><strong>Red flags to avoid:</strong> Overpayment scams, international buyers, "buying for my son overseas"</p>
            <p><strong>Serious buyer signs:</strong> Asks specific questions, has financing ready, wants to see in person</p>
          </div>
        </div>

        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Safe Meeting Protocol</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Location Safety</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Public places: bank parking lot, shopping center</li>
                  <li>• Daylight hours preferred</li>
                  <li>• Well-lit areas with security cameras</li>
                  <li>• Avoid your home address initially</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Personal Safety</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Bring a friend/family member</li>
                  <li>• Tell someone your meeting details</li>
                  <li>• Keep keys in your possession</li>
                  <li>• Trust your instincts—walk away if uncomfortable</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Test Drive Ground Rules</h3>
            <div className="text-orange-700 space-y-2">
              <p><strong>License check:</strong> Photo their driver's license before test drive</p>
              <p><strong>Insurance verification:</strong> Confirm they have current auto insurance</p>
              <p><strong>Set route:</strong> Short, predetermined loop (15-20 minutes max)</p>
              <p><strong>Ride along:</strong> You or your friend goes with them</p>
              <p><strong>No solo drives:</strong> Never let stranger drive away alone</p>
            </div>
          </div>
        </div>

        <h2>Step 5: Payment and paperwork</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Safe Payment Methods</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">✓ Safe Payment Options</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Cash (meet at bank to verify large amounts)</li>
                <li>• Cashier's check verified at issuing bank</li>
                <li>• Bank wire transfer (wait for confirmation)</li>
                <li>• Certified funds from buyer's bank</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-800 mb-2">✗ Never Accept These</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Personal checks (can bounce later)</li>
                <li>• Money orders (easily counterfeited)</li>
                <li>• PayPal/Venmo (can be reversed)</li>
                <li>• "I'll pay extra, ship the difference"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Bank Verification Process</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>For cashier's checks:</strong> Go to the issuing bank branch together to verify</p>
            <p><strong>Large cash deals:</strong> Meet at buyer's bank to verify funds and complete transaction</p>
            <p><strong>Instant verification:</strong> Bank tellers can immediately confirm authenticity</p>
            <p><strong>Safety bonus:</strong> Bank locations have security cameras and personnel</p>
          </div>
        </div>

        <h2>Required paperwork</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Essential Documents Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">You Must Provide</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>□ Clear title (signed and notarized)</li>
                <li>□ Bill of sale (both parties sign)</li>
                <li>□ Maintenance records</li>
                <li>□ Owner's manual and spare keys</li>
                <li>□ Lien release (if loan was paid off)</li>
                <li>□ Emissions/safety inspection (if required)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Buyer Should Provide</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>□ Driver's license copy</li>
                <li>□ Proof of insurance</li>
                <li>□ Payment in approved form</li>
                <li>□ Title transfer application</li>
                <li>□ Registration forms (varies by state)</li>
                <li>□ Sales tax payment (varies by state)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Lien Payoff Process</h3>
          <div className="text-indigo-700 space-y-3">
            <p><strong>If you owe money:</strong> Coordinate 3-way transaction with buyer and lender</p>
            <p><strong>Meeting location:</strong> At your lender's office when possible</p>
            <p><strong>Payment flow:</strong> Buyer pays lender directly, you pay any difference</p>
            <p><strong>Title release:</strong> Lender sends title to buyer after loan satisfaction</p>
            <p><strong>Timeline:</strong> Allow 5-10 business days for title processing</p>
          </div>
        </div>

        <h2>Negotiation scripts</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Common Buyer Responses & Scripts</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-800">"Your price is too high"</h4>
              <p className="text-green-700 text-sm">"I've priced it based on current market value and condition. Here's my research [show comps]. What did you have in mind?"</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800">"I found similar cars for less"</h4>
              <p className="text-green-700 text-sm">"Those might have higher mileage or different conditions. This one has [recent maintenance/low miles/clean history]. I'm firm at [price] for the quality."</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800">"I need to think about it"</h4>
              <p className="text-green-700 text-sm">"I understand. I have other people interested, so I can't hold it. If you're serious, a small deposit would secure it while you decide."</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800">"Will you take [lowball offer]?"</h4>
              <p className="text-green-700 text-sm">"That's quite a bit below my asking price. I could consider [counter-offer], but that's as low as I can go given the condition and market value."</p>
            </div>
          </div>
        </div>

        <h2>Avoiding common scams</h2>
        <div className="bg-red-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Red Flag Warning Signs</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800">Overpayment scam</h4>
              <p className="text-red-700 text-sm">"I'll pay extra, please send the difference to my shipper." Always a scam—walk away immediately.</p>
            </div>
            
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800">Fake payment methods</h4>
              <p className="text-red-700 text-sm">Counterfeit cashier's checks and money orders look real. Always verify at the issuing bank.</p>
            </div>
            
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800">Pressure tactics</h4>
              <p className="text-red-700 text-sm">"I'm leaving town tomorrow" or "I have the cash right now." Legitimate buyers don't create artificial urgency.</p>
            </div>
            
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-red-800">Title fraud</h4>
              <p className="text-red-700 text-sm">"Can you sign the title and I'll fill in the details later?" Never sign a blank title—complete all fields together.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is CarFax worth attaching?</h3>
              <p className="text-gray-700">Yes, if the report is clean. A good CarFax report builds buyer confidence and can justify your asking price. If the report shows issues, address them upfront in your listing.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I accept payment safely?</h3>
              <p className="text-gray-700">Cash verified at a bank, or cashier's check verified at the issuing bank are safest. For amounts over $10,000, meet at the buyer's bank to complete the transaction.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if a buyer wants to take the car to a mechanic?</h3>
              <p className="text-gray-700">That's reasonable for expensive cars, but ensure you go together. Get a written agreement that they're liable for any damage, and verify their insurance covers test drives.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I sell with an active lien?</h3>
              <p className="text-gray-700">Yes, but coordinate with your lender. Meet at the bank, buyer pays lender directly for the payoff amount, and you pay any difference. The lender releases the title to the buyer.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/insure-new-car-for-less" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Insure New Car for Less</h3>
              <p className="text-sm text-indigo-700 mt-1">Cut insurance costs legally</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/get-out-of-bad-car-loan" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Bad Car Loan Exit →</h3>
              <p className="text-sm text-green-700 mt-1">Escape high payments safely</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}