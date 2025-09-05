import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estimating Rehab Costs: A Practical Guide for Real Estate Investors',
  description: 'Scope, line-item budgeting, unit pricing, and contingency planning to get rehab costs right before you buy investment properties.',
  keywords: 'rehab estimate, renovation budget, contractor bids, construction costs, real estate renovation, investment property rehab',
};

export default function EstimateRehabRenovationCostsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I avoid scope creep in renovation projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lock specifications in writing, use detailed contracts with specific materials and finishes, and only allow changes through written change orders with agreed pricing before work begins."
        }
      },
      {
        "@type": "Question", 
        "name": "Should I DIY renovations or hire contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only DIY if you're licensed and experienced for trades that require permits. Electrical, plumbing, and structural work typically require professional contractors to ensure safety and code compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What contingency should I add to renovation budgets?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Add 10-20% contingency for renovation projects. Older properties and more complex renovations should use the higher end. This covers unexpected issues like hidden damage or code upgrades."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <span>→</span>
          <Link href="/category/how-to" className="hover:text-pink-600">How-To Guides</Link>
          <span>→</span>
          <span className="text-pink-600">Rehab Cost Estimation</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Estimate Rehab/Renovation Costs Accurately
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master the art of renovation budgeting with systematic scoping, unit pricing, and contingency planning. Get your rehab costs right before you buy.
          </p>
        </header>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">💰 Critical Investment Decision</h2>
          <p className="text-yellow-700">
            Accurate rehab estimates can make or break your investment returns. Underestimate by 20% and your profitable deal becomes a money pit. This systematic approach protects your margins.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Systematic Estimation Framework</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Scope by Systems</h4>
                  <p className="text-gray-700 mb-2">Break down the property into major components to ensure nothing is missed.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Roof and exterior envelope</li>
                    <li>• Structural, plumbing, electrical, HVAC</li>
                    <li>• Windows, doors, and insulation</li>
                    <li>• Kitchens, bathrooms, and interior finishes</li>
                    <li>• Flooring, paint, and landscaping</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Detailed Walkthrough</h4>
                  <p className="text-gray-700 mb-2">Document everything with photos, measurements, and condition assessments.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use walkthrough checklist with condition grades (1-5 scale)</li>
                    <li>• Take photos and video of all areas</li>
                    <li>• Measure rooms, windows, and key features</li>
                    <li>• Note code compliance issues</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Unit Pricing Application</h4>
                  <p className="text-gray-700 mb-2">Apply per-square-foot or per-unit costs based on local market rates.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Research local contractor rates and material costs</li>
                    <li>• Use reliable cost estimation resources</li>
                    <li>• Account for permit and inspection fees</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comprehensive Cost Build-Up</h4>
                  <p className="text-gray-700 mb-2">Include all project costs, not just materials and labor.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Labor + materials + permits</li>
                    <li>• Dumpsters, storage, and utilities during construction</li>
                    <li>• Professional fees (architects, engineers)</li>
                    <li>• Insurance and bonding costs</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Contingency & Buffer</h4>
                  <p className="text-gray-700 mb-2">Add appropriate contingency based on project complexity and property age.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10-15% for straightforward updates</li>
                    <li>• 15-20% for older properties (pre-1980)</li>
                    <li>• 20%+ for gut rehabs or structural work</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">6</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Validation</h4>
                  <p className="text-gray-700 mb-2">Get three comparable bids from licensed contractors.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Provide identical scope of work to all bidders</li>
                    <li>• Verify insurance, licensing, and references</li>
                    <li>• Compare line-item pricing, not just totals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Benchmark Pricing Guide</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Typical Cost Ranges (Adjust for Local Markets)</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3 bg-blue-50 p-2 rounded">Interior Finishes</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Paint (interior):</strong> $2–$4 per sqft</li>
                  <li>• <strong>LVP flooring:</strong> $3–$6 per sqft installed</li>
                  <li>• <strong>Carpet:</strong> $2–$5 per sqft installed</li>
                  <li>• <strong>Tile flooring:</strong> $4–$10 per sqft installed</li>
                  <li>• <strong>Hardwood refinishing:</strong> $3–$5 per sqft</li>
                  <li>• <strong>New hardwood:</strong> $6–$12 per sqft</li>
                </ul>
                
                <h4 className="font-semibold text-green-900 mb-3 mt-4 bg-green-50 p-2 rounded">Kitchen Renovations</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Budget kitchen:</strong> $8,000–$15,000</li>
                  <li>• <strong>Mid-grade kitchen:</strong> $15,000–$30,000</li>
                  <li>• <strong>High-end kitchen:</strong> $30,000–$60,000+</li>
                  <li>• <strong>Cabinet refacing:</strong> $4,000–$8,000</li>
                  <li>• <strong>Countertops:</strong> $25–$75 per sqft</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-900 mb-3 bg-purple-50 p-2 rounded">Bathroom Renovations</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Budget bathroom:</strong> $6,000–$12,000</li>
                  <li>• <strong>Mid-grade bathroom:</strong> $12,000–$25,000</li>
                  <li>• <strong>High-end bathroom:</strong> $25,000–$50,000+</li>
                  <li>• <strong>Shower/tub surround:</strong> $1,500–$4,000</li>
                  <li>• <strong>Vanity replacement:</strong> $500–$2,000</li>
                </ul>
                
                <h4 className="font-semibold text-orange-900 mb-3 mt-4 bg-orange-50 p-2 rounded">Major Systems</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Roof (asphalt):</strong> $4–$7 per sqft</li>
                  <li>• <strong>HVAC system:</strong> $3,000–$8,000</li>
                  <li>• <strong>Electrical panel:</strong> $1,200–$2,500</li>
                  <li>• <strong>Plumbing rough-in:</strong> $2,500–$4,000</li>
                  <li>• <strong>Windows:</strong> $300–$800 each</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important Pricing Notes</h4>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• These are rough benchmarks—always get local quotes</li>
                <li>• Labor costs vary significantly by region (can be 50-100% of material costs)</li>
                <li>• Quality levels dramatically affect pricing</li>
                <li>• Permits may add 3-10% to total project cost</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Scope Breakdown</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">System-by-System Analysis</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-red-900 mb-2">🏠 Roof & Exterior</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Roof condition and remaining life</li>
                    <li>• Gutters and downspouts</li>
                    <li>• Siding repair or replacement</li>
                    <li>• Foundation issues and grading</li>
                  </ul>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Exterior paint condition</li>
                    <li>• Deck/porch structural integrity</li>
                    <li>• Driveway and walkway condition</li>
                    <li>• Landscaping and yard work</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-900 mb-2">⚡ Major Systems</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Electrical panel capacity and wiring</li>
                    <li>• Plumbing condition and water pressure</li>
                    <li>• HVAC efficiency and ductwork</li>
                    <li>• Water heater age and capacity</li>
                  </ul>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Insulation levels throughout</li>
                    <li>• Windows energy efficiency</li>
                    <li>• Door condition and security</li>
                    <li>• Safety systems (smoke, CO detectors)</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-900 mb-2">🏠 Interior Spaces</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-gray-700 space-y-1">
                    <li>• Kitchen layout and appliances</li>
                    <li>• Bathroom fixtures and functionality</li>
                    <li>• Flooring condition throughout</li>
                    <li>• Wall and ceiling condition</li>
                  </ul>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Paint condition and color scheme</li>
                    <li>• Closet space and storage</li>
                    <li>• Light fixtures and electrical outlets</li>
                    <li>• Overall layout and flow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contractor Management</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Getting Accurate Bids</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✅ Bid Process Best Practices</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Provide identical, detailed scope of work to all bidders</li>
                  <li>• Specify materials, finishes, and quality levels</li>
                  <li>• Request line-item breakdowns, not lump-sum bids</li>
                  <li>• Set clear timeline expectations and milestones</li>
                  <li>• Verify licenses, insurance, and bonding</li>
                  <li>• Check references from recent similar projects</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">📋 Contractor Verification Checklist</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Valid business license for your area</li>
                  <li>• Current general liability insurance ($1M minimum)</li>
                  <li>• Workers' compensation coverage</li>
                  <li>• Better Business Bureau rating and reviews</li>
                  <li>• Local permit pulling authority</li>
                  <li>• Portfolio of similar completed projects</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Red Flags to Avoid</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Door-to-door solicitation or high-pressure tactics</li>
                  <li>• Demands for large upfront payments</li>
                  <li>• No physical business address or proper licensing</li>
                  <li>• Significantly lower bids without clear explanations</li>
                  <li>• Reluctance to provide references or insurance proof</li>
                  <li>• Verbal agreements without written contracts</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scope Creep Prevention</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 How to Avoid Budget Blowouts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Contract Protection</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Lock specifications in detailed written contracts</li>
                  <li>• Specify exact materials, brands, and quality levels</li>
                  <li>• Include detailed drawings and plans where needed</li>
                  <li>• Set clear project timeline and milestones</li>
                  <li>• Define change order process and pricing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Change Management</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• All changes must be approved in writing</li>
                  <li>• Price changes before work begins</li>
                  <li>• Document all upgrades and modifications</li>
                  <li>• Stick to original scope unless absolutely necessary</li>
                  <li>• Build change allowance into original budget</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY vs. Professional Decision Framework</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">When to DIY vs. Hire Professionals</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✅ Good DIY Projects</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Interior painting and basic prep work</li>
                  <li>• Flooring installation (laminate, vinyl)</li>
                  <li>• Basic landscaping and yard work</li>
                  <li>• Simple fixture replacement</li>
                  <li>• Demolition and cleanup</li>
                  <li>• Basic carpentry and shelving</li>
                </ul>
                <p className="text-green-700 text-xs mt-2">
                  <strong>Savings:</strong> Can reduce labor costs by 30-50%
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">❌ Hire Professionals For</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Electrical work requiring permits</li>
                  <li>• Plumbing modifications and gas lines</li>
                  <li>• Structural changes and load-bearing work</li>
                  <li>• Roofing and exterior work</li>
                  <li>• HVAC system installation</li>
                  <li>• Complex tile and hardwood installation</li>
                </ul>
                <p className="text-red-700 text-xs mt-2">
                  <strong>Risk:</strong> Code violations, safety issues, insurance claims
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Estimation Tools & Resources</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Estimation Resources</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost Databases</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• RSMeans Construction Data</li>
                  <li>• HomeAdvisor True Cost Guide</li>
                  <li>• Angi (formerly Angie's List) pricing</li>
                  <li>• Local contractor associations</li>
                  <li>• Building supply store estimates</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Software Tools</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• BiggerPockets calculators</li>
                  <li>• Rehab Calculator apps</li>
                  <li>• Excel/Google Sheets templates</li>
                  <li>• Contractor estimating software</li>
                  <li>• Property analysis platforms</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Local Resources</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Real estate investor groups</li>
                  <li>• Contractor networks and referrals</li>
                  <li>• Building supply stores</li>
                  <li>• Property management companies</li>
                  <li>• Local real estate agents</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I avoid scope creep in renovation projects?</h3>
              <p className="text-gray-700">
                Lock specifications in writing, use detailed contracts with specific materials and finishes, and only allow changes through written change orders with agreed pricing before work begins.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I DIY renovations or hire contractors?</h3>
              <p className="text-gray-700">
                Only DIY if you're licensed and experienced for trades that require permits. Electrical, plumbing, and structural work typically require professional contractors to ensure safety and code compliance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What contingency should I add to renovation budgets?</h3>
              <p className="text-gray-700">
                Add 10-20% contingency for renovation projects. Older properties and more complex renovations should use the higher end. This covers unexpected issues like hidden damage or code upgrades.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Break down projects by systems for comprehensive scoping</li>
              <li>• Always add 10-20% contingency for unexpected issues</li>
              <li>• Get three comparable bids from licensed, insured contractors</li>
              <li>• Lock specifications to prevent scope creep and budget overruns</li>
              <li>• Use local pricing data—national averages can be misleading</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/analyze-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/brrrr-method-guide" className="text-pink-600 hover:text-pink-700 underline">
            BRRRR Strategy Guide
          </Link>
          <Link href="/how-to/finance-investment-properties-dscr-hard-money" className="text-pink-600 hover:text-pink-700 underline">
            Investment Property Financing
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}