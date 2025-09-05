import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home & Renters Insurance: What to Buy and How to Compare',
  description: 'Compare dwelling and personal property coverage, replacement cost vs ACV, deductibles, endorsements, and flood/sewer backup options.',
  keywords: 'how to shop homeowners insurance, renters insurance guide, replacement cost, endorsements',
  openGraph: {
    title: 'Home & Renters Insurance: What to Buy and How to Compare',
    description: 'Complete guide to shopping for home and renters insurance with coverage comparisons.',
    type: 'article',
  },
}

function createSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function ShopHomeAndRentersInsurance() {
  const faqs = [
    {
      question: "Is flood damage covered by homeowners insurance?",
      answer: "Usually not—flood coverage requires separate or add-on coverage depending on your location. Standard homeowners policies exclude flooding from external water sources like rivers, storm surge, or overflowing drains, but may cover internal water damage from burst pipes."
    },
    {
      question: "How much liability coverage should I carry?",
      answer: "Often $300,000–$1 million minimum; consider an umbrella policy if you have significant assets or high risk exposure. Liability claims can far exceed property damage, especially for injuries on your property or caused by your negligence."
    },
    {
      question: "What's the difference between replacement cost and actual cash value?",
      answer: "Replacement cost pays to buy new items at today's prices, while actual cash value deducts depreciation. A 5-year-old TV might cost $800 to replace but have an ACV of only $300. Always choose replacement cost for personal property when possible."
    },
    {
      question: "Do I need renters insurance if my landlord has insurance?",
      answer: "Yes, absolutely. Your landlord's policy only covers the building structure, not your personal belongings, liability, or additional living expenses if you're displaced. Renters insurance is typically very affordable at $15-30/month."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/category/how-to" className="hover:text-blue-600">How To</Link>
            <span className="mx-2">/</span>
            <span>How to Shop for Home and Renters Insurance</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
              🛡️
            </div>
            <div>
              <div className="text-sm text-cyan-600 font-medium">Insurance</div>
              <h1 className="text-3xl font-bold text-gray-900">Home & Renters Insurance: What to Buy and How to Compare</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Home and renters insurance protect your property and liability exposure, but coverage varies dramatically between policies. Compare dwelling and personal property coverage, replacement cost vs actual cash value, deductibles, endorsements, and flood/sewer backup options to find the right protection.
            </p>

            <h2>What to Buy (At a Glance)</h2>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Coverage Quick Reference</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cyan-800 mb-3">Homeowners (HO-3/Comprehensive)</h4>
                  <ul className="text-cyan-700 space-y-2">
                    <li>• <strong>Dwelling (Coverage A):</strong> Structure replacement</li>
                    <li>• <strong>Other Structures (B):</strong> Garage, shed, fence</li>
                    <li>• <strong>Personal Property (C):</strong> Belongings inside</li>
                    <li>• <strong>Loss of Use (D):</strong> Hotel/rental costs</li>
                    <li>• <strong>Liability (E):</strong> Injury/damage claims</li>
                    <li>• <strong>Medical Payments (F):</strong> Guest injuries</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-800 mb-3">Renters Insurance</h4>
                  <ul className="text-cyan-700 space-y-2">
                    <li>• <strong>Personal Property:</strong> Your belongings</li>
                    <li>• <strong>Loss of Use:</strong> Hotel/rental if displaced</li>
                    <li>• <strong>Liability:</strong> Injury/damage claims</li>
                    <li>• <strong>Medical Payments:</strong> Guest injuries</li>
                  </ul>
                  <p class="text-cyan-600 text-sm mt-3">
                    <strong>Note:</strong> Building structure covered by landlord's policy
                  </p>
                </div>
              </div>
            </div>

            <h2>Homeowners Insurance Coverage Breakdown</h2>

            <h3>Coverage A: Dwelling</h3>
            
            <p>This covers your home's structure—walls, roof, foundation, built-in appliances, and permanently attached fixtures.</p>

            <ul>
              <li><strong>Set amount to:</strong> Full replacement cost, not market value</li>
              <li><strong>Include:</strong> Demolition, debris removal, code upgrades</li>
              <li><strong>Consider:</strong> Extended replacement cost (120-125% coverage)</li>
              <li><strong>Update regularly:</strong> Construction costs change</li>
            </ul>

            <h3>Coverage B: Other Structures</h3>
            
            <p>Detached structures like garages, sheds, fences, and driveways. Typically 10% of dwelling coverage.</p>

            <h3>Coverage C: Personal Property</h3>
            
            <p>Your belongings inside the home. Usually 50-70% of dwelling coverage.</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Coverage Type</th>
                    <th className="px-4 py-3 text-left font-semibold">How It Pays</th>
                    <th className="px-4 py-3 text-left font-semibold">Cost</th>
                    <th className="px-4 py-3 text-left font-semibold">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Replacement Cost (RCV)</td>
                    <td className="px-4 py-3">Full cost of new equivalent item</td>
                    <td className="px-4 py-3">Higher premium</td>
                    <td className="px-4 py-3">Always choose this</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Actual Cash Value (ACV)</td>
                    <td className="px-4 py-3">Replacement cost minus depreciation</td>
                    <td className="px-4 py-3">Lower premium</td>
                    <td className="px-4 py-3">Avoid unless budget-constrained</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Coverage D: Loss of Use/Additional Living Expenses</h3>
            
            <p>Pays for hotels, meals, and other expenses if you can't live in your home due to covered damage. Typically 10-30% of dwelling coverage.</p>

            <h3>Coverage E: Personal Liability</h3>
            
            <p>Protects against lawsuits for injuries or property damage you cause. Standard limits start at $100,000, but consider $300,000-$1 million.</p>

            <h3>Coverage F: Medical Payments</h3>
            
            <p>Pays medical expenses for guests injured on your property, regardless of fault. Typical limits: $1,000-$10,000.</p>

            <h2>Renters Insurance Essentials</h2>

            <h3>Personal Property Coverage</h3>
            
            <p>Covers your belongings against theft, fire, vandalism, and other covered perils.</p>

            <ul>
              <li><strong>How much:</strong> Calculate replacement cost of all belongings</li>
              <li><strong>Typical amounts:</strong> $15,000-$75,000</li>
              <li><strong>Choose replacement cost</strong> over actual cash value</li>
              <li><strong>On/off premises:</strong> Covers items stolen from your car or elsewhere</li>
            </ul>

            <h3>Liability Coverage</h3>
            
            <p>Critical protection that many renters overlook. Covers:</p>

            <ul>
              <li>Guest injuries in your apartment</li>
              <li>Damage you cause to others' property</li>
              <li>Legal defense costs</li>
              <li>Dog bite claims (breed restrictions may apply)</li>
            </ul>

            <h2>Must-Ask Comparisons When Shopping</h2>

            <h3>Coverage Limits and Sub-limits</h3>
            
            <p>Standard policies have limits on specific categories:</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h4 className="font-semibold mb-2">Common Sub-limits to Check</h4>
              <ul className="space-y-2">
                <li>• <strong>Jewelry:</strong> Often limited to $1,000-2,500</li>
                <li>• <strong>Electronics:</strong> May have per-item limits</li>
                <li>• <strong>Bicycles:</strong> Typically $1,000-3,000</li>
                <li>• <strong>Business equipment:</strong> Usually very limited</li>
                <li>• <strong>Cash/securities:</strong> Often $200-500 maximum</li>
                <li>• <strong>Art/collectibles:</strong> May require appraisals</li>
              </ul>
            </div>

            <h3>Endorsements and Add-on Coverage</h3>

            <p>Essential add-ons to consider based on your location and needs:</p>

            <h4>Water-Related Coverage</h4>
            <ul>
              <li><strong>Sewer backup:</strong> Covers damage from sewer/drain overflows</li>
              <li><strong>Water backup:</strong> Broader coverage for water intrusion</li>
              <li><strong>Overland water/flood:</strong> Varies by region and insurer</li>
            </ul>

            <h4>High-Value Items</h4>
            <ul>
              <li><strong>Scheduled items:</strong> Individual coverage for jewelry, art, instruments</li>
              <li><strong>Increased limits:</strong> Raise sub-limits for categories you exceed</li>
            </ul>

            <h4>Additional Protection</h4>
            <ul>
              <li><strong>By-law/ordinance coverage:</strong> Upgrades to meet current building codes</li>
              <li><strong>Identity theft:</strong> Costs to restore identity</li>
              <li><strong>Home business:</strong> Coverage for business equipment/liability</li>
            </ul>

            <h2>Understanding Deductibles</h2>

            <h3>Standard Deductibles</h3>

            <ul>
              <li><strong>Fixed dollar:</strong> $500, $1,000, $2,500, etc.</li>
              <li><strong>Percentage:</strong> 1%, 2%, 5% of dwelling coverage</li>
            </ul>

            <h3>Special Deductibles</h3>

            <p>Some perils have separate deductibles:</p>

            <ul>
              <li><strong>Wind/hail:</strong> Often percentage-based in storm-prone areas</li>
              <li><strong>Hurricane:</strong> Separate percentage deductible near coasts</li>
              <li><strong>Earthquake:</strong> High percentage deductibles (10-25%)</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="font-semibold mb-2">Deductible Strategy</h4>
              <p>Choose the highest deductible you can afford to pay from your emergency fund. Higher deductibles mean lower premiums and fewer small claims on your record.</p>
            </div>

            <h2>Key Exclusions to Understand</h2>

            <h3>Common Exclusions in All Policies</h3>

            <ul>
              <li><strong>Flood:</strong> Rising water from external sources</li>
              <li><strong>Earthquake:</strong> Requires separate coverage</li>
              <li><strong>War/nuclear:</strong> Excluded from all insurance</li>
              <li><strong>Intentional damage:</strong> You can't damage your own property for coverage</li>
              <li><strong>Wear and tear:</strong> Normal aging and maintenance issues</li>
              <li><strong>Pest infestation:</strong> Termites, rodents, etc.</li>
            </ul>

            <h3>Homeowners-Specific Exclusions</h3>

            <ul>
              <li><strong>Earth movement:</strong> Landslides, sinkholes, settling</li>
              <li><strong>Ordinance and law:</strong> Code upgrade costs (unless endorsed)</li>
              <li><strong>Power failure:</strong> Off-premises power outages</li>
              <li><strong>Vacant property:</strong> Extended vacancy may void coverage</li>
            </ul>

            <h2>Shopping Strategy: 5 Steps</h2>

            <h3>Step 1: Calculate Your Coverage Needs</h3>

            <h4>For Homeowners:</h4>
            <ul>
              <li>Get replacement cost estimate for your home</li>
              <li>Inventory personal belongings</li>
              <li>Consider liability exposure based on assets</li>
            </ul>

            <h4>For Renters:</h4>
            <ul>
              <li>Estimate replacement cost of all belongings</li>
              <li>Don't forget items in storage or at work/school</li>
              <li>Consider liability needs (especially if you have savings/assets)</li>
            </ul>

            <h3>Step 2: Compare Quotes from Multiple Insurers</h3>

            <p>Get quotes from at least 3-5 companies, including:</p>

            <ul>
              <li><strong>National insurers:</strong> State Farm, Allstate, Farmers</li>
              <li><strong>Regional companies:</strong> Often competitive rates</li>
              <li><strong>Direct writers:</strong> GEICO, USAA (military)</li>
              <li><strong>Online platforms:</strong> Lemonade, Hippo</li>
            </ul>

            <h3>Step 3: Verify Coverage Details</h3>

            <p>Don't just compare prices—ensure you're comparing equivalent coverage:</p>

            <ul>
              <li>Same coverage limits and deductibles</li>
              <li>Replacement cost vs. actual cash value</li>
              <li>Included vs. optional endorsements</li>
              <li>Policy forms (HO-3 vs. HO-1 vs. HO-5)</li>
            </ul>

            <h3>Step 4: Check Financial Strength and Reviews</h3>

            <ul>
              <li><strong>A.M. Best rating:</strong> A- or better</li>
              <li><strong>J.D. Power rankings:</strong> Customer satisfaction</li>
              <li><strong>State complaints:</strong> Check your insurance department</li>
              <li><strong>Claims handling reputation:</strong> Fast, fair settlements?</li>
            </ul>

            <h3>Step 5: Look for Bundling Opportunities</h3>

            <p>Many insurers offer discounts for multiple policies:</p>

            <ul>
              <li><strong>Home + auto:</strong> 5-25% discount on both</li>
              <li><strong>Multiple properties:</strong> Second homes, rental properties</li>
              <li><strong>Umbrella policy:</strong> Extra liability coverage</li>
            </ul>

            <h2>Documentation: The Claims Game-Changer</h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-3">Home Inventory Best Practices</h3>
              <ul className="space-y-2">
                <li>• <strong>Photos/video:</strong> Document every room, including inside closets and drawers</li>
                <li>• <strong>Serial numbers:</strong> Record for electronics, appliances, tools</li>
                <li>• <strong>Receipts:</strong> Keep purchase receipts, especially for expensive items</li>
                <li>• <strong>Appraisals:</strong> For jewelry, art, collectibles</li>
                <li>• <strong>Cloud storage:</strong> Keep copies off-site (Google Drive, Dropbox)</li>
                <li>• <strong>Update regularly:</strong> After major purchases or renovations</li>
              </ul>
            </div>

            <h2>Regional Considerations</h2>

            <h3>United States</h3>

            <h4>High-Risk Areas</h4>
            <ul>
              <li><strong>Hurricane zones:</strong> Wind/storm surge endorsements</li>
              <li><strong>Earthquake regions:</strong> California, Pacific Northwest</li>
              <li><strong>Flood zones:</strong> NFIP flood insurance required</li>
              <li><strong>Wildfire areas:</strong> Defensible space requirements</li>
            </ul>

            <h4>State-Specific Rules</h4>
            <ul>
              <li><strong>Texas:</strong> Separate wind/hail coverage in some areas</li>
              <li><strong>Florida:</strong> Hurricane deductibles, sinkhole coverage</li>
              <li><strong>California:</strong> Earthquake insurance through CEA</li>
            </ul>

            <h3>Canada</h3>

            <ul>
              <li><strong>Overland water:</strong> Now available from most insurers</li>
              <li><strong>Sewer backup:</strong> Common endorsement</li>
              <li><strong>Ice damming:</strong> Important in northern climates</li>
              <li><strong>Provincial variations:</strong> Coverage requirements vary</li>
            </ul>

            <h2>Money-Saving Tips</h2>

            <h3>Discounts to Ask About</h3>

            <ul>
              <li><strong>Security systems:</strong> Monitored alarms, cameras</li>
              <li><strong>Fire safety:</strong> Smoke detectors, sprinkler systems</li>
              <li><strong>New home:</strong> Homes under 5-10 years old</li>
              <li><strong>Claims-free:</strong> No claims for several years</li>
              <li><strong>Professional groups:</strong> Teachers, engineers, military</li>
              <li><strong>Loyalty:</strong> Long-term customer discounts</li>
              <li><strong>Automatic payments:</strong> Electronic payment discounts</li>
            </ul>

            <h3>Ways to Reduce Premiums</h3>

            <ul>
              <li><strong>Raise deductibles:</strong> $500 to $1,000 can save 10-25%</li>
              <li><strong>Improve home security:</strong> Deadbolts, security systems</li>
              <li><strong>Update major systems:</strong> Roof, plumbing, electrical, HVAC</li>
              <li><strong>Remove coverage riders</strong> you no longer need</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>

            <ul>
              <li><strong>Underinsuring:</strong> Coverage limits too low for full replacement</li>
              <li><strong>Choosing ACV over RCV:</strong> Accepting depreciated payouts</li>
              <li><strong>Ignoring sub-limits:</strong> Not scheduling high-value items</li>
              <li><strong>Skipping flood coverage:</strong> Assuming it's covered</li>
              <li><strong>Not updating coverage:</strong> After renovations or major purchases</li>
              <li><strong>Price shopping only:</strong> Ignoring coverage quality and claims service</li>
            </ul>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
              <p>Document your home inventory (photos + serials) and store receipts in the cloud. It speeds up claims and maximizes payouts. Most people can't remember everything they owned without visual documentation.</p>
            </div>

            <h2>Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Link href="/how-to/how-to-lower-auto-insurance-premiums" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Lower Auto Insurance Premiums</h3>
                <p className="text-cyan-600 text-sm mt-2">17 proven ways to reduce your car insurance costs</p>
              </Link>
              <Link href="/how-to/how-to-file-an-insurance-claim-correctly" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">File an Insurance Claim Correctly</h3>
                <p className="text-cyan-600 text-sm mt-2">Step-by-step process for filing and documenting claims</p>
              </Link>
              <Link href="/how-to/how-to-bundle-policies-for-discounts" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Bundle Policies for Discounts</h3>
                <p className="text-cyan-600 text-sm mt-2">Maximize savings by combining insurance policies</p>
              </Link>
              <Link href="/how-to/how-to-avoid-denied-claims" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Avoid Denied Claims</h3>
                <p className="text-cyan-600 text-sm mt-2">Documentation tips that prevent claim denials</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </article>
    </div>
  )
}