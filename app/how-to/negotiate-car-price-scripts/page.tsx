import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Price Negotiation Scripts That Work',
  description: 'Copy-paste scripts to negotiate a car price like a pro. Use out-the-door quotes, walk-away power, and lender pre-approvals to get the lowest number.',
}

export default function NegotiateCarPricePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Car Negotiation Scripts</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            💬
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">Dealer-tested scripts to win the price you want</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Copy these proven negotiation scripts to secure the lowest possible car price from any dealer.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Get out-the-door quotes by email/text</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Remote Shopping Email Template</h3>
          <div className="bg-white p-4 rounded border text-gray-700">
            <p className="mb-3"><strong>Subject:</strong> Ready to Buy This Week - [Year Make Model]</p>
            <p className="mb-3"><strong>Body:</strong></p>
            <p className="mb-3">Hi [Salesperson Name],</p>
            <p className="mb-3">I'm ready to purchase this week and looking for your best out-the-door price on stock #[VIN/Stock Number]:</p>
            <ul className="mb-3">
              <li>• [Year Make Model Trim]</li>
              <li>• [Color preference if any]</li>
              <li>• Include ALL fees, taxes, and doc fees</li>
            </ul>
            <p className="mb-3">I'm getting quotes from 3 dealers and will purchase from whoever offers the best OTD price. I have financing pre-approved and don't need any add-on products.</p>
            <p className="mb-3">Please reply with your total out-the-door price. I can put a deposit down today if the number works.</p>
            <p>Thank you,<br/>[Your name]<br/>[Phone number]</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Why This Email Works</h3>
          <div className="text-blue-700 space-y-2">
            <p><strong>Creates urgency:</strong> "Ready to buy this week" gets immediate attention</p>
            <p><strong>Shows you're serious:</strong> Specific stock number proves you've done research</p>
            <p><strong>Mentions competition:</strong> "Getting quotes from 3 dealers" encourages their best offer</p>
            <p><strong>Removes objections:</strong> Pre-approved financing and no add-ons simplifies the deal</p>
            <p><strong>Requests action:</strong> Clear ask for OTD price with ability to move forward quickly</p>
          </div>
        </div>

        <h2>Separate the deal: price, trade-in, financing</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Never Mix These Three Elements</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Purchase Price</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Negotiate this FIRST</li>
                <li>• Get OTD written quote</li>
                <li>• Don't discuss monthly payments</li>
                <li>• Focus on total cash price</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Trade-in Value</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Separate negotiation</li>
                <li>• Get written appraisal</li>
                <li>• Compare to Carmax/Carvana</li>
                <li>• Don't mention until price set</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Financing</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Bring pre-approval</li>
                <li>• Let dealer try to beat it</li>
                <li>• Compare APR, not payments</li>
                <li>• Final step only</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Script: Keeping Deals Separate</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>When they ask about payments:</strong><br/>
            "Let's finalize the out-the-door price first. I'll handle financing separately. What's your best cash price for this vehicle?"</p>
            
            <p><strong>When they ask about trade-in early:</strong><br/>
            "I might have a trade, but let's agree on the purchase price first. We can evaluate my trade after we settle on your vehicle's price."</p>
            
            <p><strong>When they combine everything:</strong><br/>
            "I prefer to handle each piece separately so we're both clear on the numbers. Can you break down the vehicle price, trade value, and financing terms individually?"</p>
          </div>
        </div>

        <h2>The "beat my pre-approval" script</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Financing Negotiation Template</h3>
          <div className="bg-white p-4 rounded border text-gray-700">
            <p className="mb-3"><strong>Opening:</strong></p>
            <p className="mb-3">"I have a pre-approval from [Bank/Credit Union] at [X.X]% APR for 60 months. If you can beat that rate without adding any products or fees, I'm happy to finance through you. Otherwise, I'll use my existing approval."</p>
            
            <p class="mb-3"><strong>If they counter with a lower rate:</strong></p>
            <p class="mb-3">"Great! Please put that [X.X]% rate in writing and show me the monthly payment calculation. I want to make sure we're comparing the same terms."</p>
            
            <p class="mb-3"><strong>If they try to add products:</strong></p>
            <p class="mb-3">"Remove all optional products from the quote. I only want to compare the base loan terms. If your rate is better without add-ons, we have a deal."</p>
          </div>
        </div>

        <div class="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-indigo-800 mb-4">Competing Quote Script</h3>
          <div class="text-indigo-700 space-y-3">
            <p><strong>When you have multiple quotes:</strong><br/>
            "I have quotes from [Dealer A] at $[X] and [Dealer B] at $[Y]. If you can beat [lower amount] by at least $[Z], I'll buy today and put down a deposit right now."</p>
            
            <p><strong>Creating urgency:</strong><br/>
            "I'm making my decision by [specific day]. Your best price gets my business, but I need to know where you stand by [time/date]."</p>
            
            <p><strong>Price matching request:</strong><br/>
            "This dealer quoted me $[X] out-the-door. Can you match or beat that price? I'd prefer to buy locally if the numbers work."</p>
          </div>
        </div>

        <h2>Add-on refusal & OTD reconfirmation</h2>
        <div class="bg-gray-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Finance Office Scripts</h3>
          <div class="space-y-4">
            <div class="bg-red-50 p-4 rounded">
              <h4 class="font-semibold text-red-800 mb-2">Extended Warranty Refusal</h4>
              <p class="text-red-700 text-sm">"I appreciate the offer, but I'm not interested in the extended warranty. Please remove it and show me the revised payment without any optional products."</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded">
              <h4 class="font-semibold text-red-800 mb-2">GAP Insurance Refusal</h4>
              <p class="text-red-700 text-sm">"I'll get GAP coverage through my insurance company for less. Remove it from the contract and stick to our agreed price."</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded">
              <h4 class="font-semibold text-red-800 mb-2">Paint/Interior Protection</h4>
              <p class="text-red-700 text-sm">"No paint protection, window tinting, or interior protection. These weren't part of our agreed deal. Show me the contract without any add-ons."</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded">
              <h4 class="font-semibold text-red-800 mb-2">Final Confirmation</h4>
              <p class="text-red-700 text-sm">"Before I sign, let me confirm: This is the $[X] out-the-door price we agreed on, with $[Y] down payment, financed at [Z]% APR for [W] months, correct? No other fees or products added?"</p>
            </div>
          </div>
        </div>

        <h2>Walk-away psychology</h2>
        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">The Power of Walking Away</h3>
          <div class="text-orange-700 space-y-3">
            <p><strong>When to walk:</strong> They won't meet your researched fair price, keep adding fees, or pressure you into unwanted products.</p>
            <p><strong>How to walk:</strong> "I appreciate your time, but this isn't the deal I'm looking for. I'll think it over and get back to you."</p>
            <p><strong>What happens:</strong> Often they'll call you back within hours with a better offer.</p>
            <p><strong>Stay strong:</strong> Don't accept the first callback offer—they likely have more room to negotiate.</p>
          </div>
        </div>

        <div class="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Professional Walk-Away Scripts</h3>
          <div class="text-green-700 space-y-3">
            <p><strong>Price too high:</strong><br/>
            "I understand that's your best price, but it's outside my budget. If anything changes, please call me. I'll continue looking elsewhere."</p>
            
            <p><strong>Too much pressure:</strong><br/>
            "I need some time to think this through. I don't make financial decisions under pressure. I'll be in touch if I decide to move forward."</p>
            
            <p><strong>Add-ons pushed:</strong><br/>
            "We agreed on $[X] out-the-door. If that's not possible without add-ons, I'll look elsewhere. Thanks for your time."</p>
          </div>
        </div>

        <h2>Advanced negotiation tactics</h2>
        <div class="space-y-6 my-8">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 class="font-semibold text-blue-800 mb-3">End-of-Month/Quarter Timing</h4>
            <p class="text-blue-700 text-sm mb-2">Visit the last few days of the month when salespeople need to hit quotas</p>
            <div class="bg-white rounded p-3">
              <p class="text-xs text-gray-700">"I know it's the end of the month. What can you do to make this deal work for both of us today?"</p>
            </div>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 class="font-semibold text-yellow-800 mb-3">Volume Buying Power</h4>
            <p class="text-yellow-700 text-sm mb-2">Reference other family members or friends who might buy</p>
            <div class="bg-white rounded p-3">
              <p class="text-xs text-gray-700">"If this goes well, my [spouse/parent/friend] is also looking for a car. Take care of me and you'll likely get more business."</p>
            </div>
          </div>

          <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 class="font-semibold text-purple-800 mb-3">Cash vs Finance Leverage</h4>
            <p class="text-purple-700 text-sm mb-2">Sometimes dealers prefer financing (they get kickbacks), sometimes cash</p>
            <div class="bg-white rounded p-3">
              <p class="text-xs text-gray-700">"What's better for you—if I pay cash or finance through you? I'm flexible if it helps with the price."</p>
            </div>
          </div>
        </div>

        <h2>What not to say</h2>
        <div class="bg-red-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-red-800 mb-4">Phrases That Kill Your Negotiating Power</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-red-800 mb-2">❌ Never Say</h4>
              <ul class="text-red-700 text-sm space-y-1">
                <li>• "I love this car!"</li>
                <li>• "What's your best price?" (too vague)</li>
                <li>• "I need a payment under $X"</li>
                <li>• "I have to buy today"</li>
                <li>• "Money is no object"</li>
                <li>• "I'm not good at negotiating"</li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold text-green-800 mb-2">✅ Say Instead</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li>• "This car meets my needs"</li>
                <li>• "What's your out-the-door price?"</li>
                <li>• "I have a specific budget in mind"</li>
                <li>• "I'm looking to buy this week"</li>
                <li>• "I'm price-conscious"</li>
                <li>• "I've done my research"</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Closing the deal</h2>
        <div class="bg-green-100 p-6 rounded-lg my-8">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Final Agreement Script</h3>
          <div class="text-green-700 space-y-3">
            <p><strong>Before signing anything:</strong><br/>
            "Let me review these numbers one more time. We agreed on $[X] out-the-door, minus my trade worth $[Y], for a net price of $[Z]. Financing is [APR]% for [term] months at $[payment] per month. No additional fees or products. Is this correct?"</p>
            
            <p><strong>Document everything:</strong><br/>
            "Please put all our agreements in writing before we proceed. I want to make sure we're both clear on every detail."</p>
            
            <p><strong>Final confirmation:</strong><br/>
            "This price is firm, right? No additional fees or surprise charges when I come in to complete the paperwork?"</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">What's the difference between MSRP, invoice, OTD?</h3>
              <p class="text-gray-700">MSRP is the sticker price, invoice is what the dealer paid (roughly), and OTD (out-the-door) is your total cost including all taxes, fees, and add-ons. Always negotiate OTD price.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Should I negotiate by monthly payment?</h3>
              <p class="text-gray-700">No, never. Dealers can manipulate monthly payments by extending the loan term or adding fees. Always focus on the total out-the-door price first, then work out financing separately.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">How do I use competing quotes?</h3>
              <p class="text-gray-700">Get written out-the-door quotes from multiple dealers, then use the lowest to negotiate with others. "Dealer X quoted $28,500 OTD. Can you beat that?" Creates real competition.</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Can dealers refuse to give OTD by email?</h3>
              <p class="text-gray-700">Some will resist to get you in person, but many will provide quotes remotely to compete for your business. Try multiple dealers—someone will usually respond with numbers.</p>
            </div>
          </div>
        </div>
      </article>

      <nav class="mt-16 pt-8 border-t border-gray-200">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/refinance-car-loan-lower-payment" 
              class="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 class="font-semibold text-indigo-900">← Refinance Car Loan</h3>
              <p class="text-sm text-indigo-700 mt-1">Lower your monthly payment</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/buy-used-car-checklist" 
              class="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 class="font-semibold text-green-900">Used Car Buying Guide →</h3>
              <p class="text-sm text-green-700 mt-1">Avoid costly mistakes</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}