import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rehab Cost Estimation: Accurate Renovation Budget Guide',
  description: 'Master property rehab cost estimation with detailed breakdowns, contractor bids, and contingency planning to avoid budget overruns on investment properties.',
  keywords: 'rehab costs, renovation budget, property flipping, contractor estimates, construction costs, investment property renovation',
};

export default function EstimateRehabCostsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much should I budget for contingencies in rehab projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Budget 15-25% for contingencies on rehab projects. Older properties or extensive renovations may require up to 30% contingency due to hidden issues like electrical, plumbing, or structural problems."
        }
      },
      {
        "@type": "Question", 
        "name": "Should I get multiple contractor bids for accuracy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, get 3-5 detailed bids from licensed contractors. Compare line-item costs, timeline estimates, and material specifications. Avoid the lowest bid unless thoroughly vetted—quality matters for investment properties."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between cosmetic and structural rehab costs?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Cosmetic rehabs (paint, flooring, fixtures) typically cost $10-25/sq ft. Structural work (foundation, electrical, plumbing) can run $50-150/sq ft. Always inspect for structural issues before purchasing."
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
            How to Estimate Rehab Costs Accurately: Complete Renovation Budget Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master property rehab cost estimation with detailed breakdowns, contractor management, and contingency planning. Avoid budget overruns and maximize your investment property profits.
          </p>
        </header>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-2">💰 Budget Accuracy Critical</h2>
          <p className="text-orange-700">
            Accurate rehab cost estimation is the difference between profitable deals and financial disasters. Underestimating by even 20% can eliminate all profit margins and create negative cash flow.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Cost Categories</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Major Renovation Categories & Typical Costs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Structural Systems</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Foundation repairs: $3,000-15,000</li>
                  <li>• Roof replacement: $8,000-20,000</li>
                  <li>• Electrical upgrade: $5,000-12,000</li>
                  <li>• Plumbing overhaul: $4,000-10,000</li>
                  <li>• HVAC system: $4,000-12,000</li>
                  <li>• Windows replacement: $300-800/window</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Interior Finishes</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Kitchen renovation: $15,000-40,000</li>
                  <li>• Bathroom renovation: $8,000-20,000</li>
                  <li>• Flooring (laminate/LVP): $3-8/sq ft</li>
                  <li>• Paint (full house): $2,000-6,000</li>
                  <li>• Interior doors: $150-400/door</li>
                  <li>• Trim/baseboards: $2-6/linear ft</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Exterior Improvements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Siding replacement: $8-15/sq ft</li>
                  <li>• Exterior paint: $2,000-8,000</li>
                  <li>• Deck/patio: $15-35/sq ft</li>
                  <li>• Landscaping: $2,000-10,000</li>
                  <li>• Driveway repair: $3-10/sq ft</li>
                  <li>• Fence installation: $15-50/linear ft</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Miscellaneous Costs</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Permits & inspections: $500-3,000</li>
                  <li>• Dumpster rental: $300-800/month</li>
                  <li>• Temporary utilities: $200-500/month</li>
                  <li>• Insurance during rehab: $100-300/month</li>
                  <li>• Storage/security: $100-500/month</li>
                  <li>• Contingency fund: 15-25% of total</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Estimation Process</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Estimation Workflow</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Detailed Property Assessment</h4>
                  <p className="text-gray-700 mb-2">Conduct thorough inspection with qualified professionals to identify all needed repairs.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hire licensed home inspector ($400-800)</li>
                    <li>• Get specialized inspections (foundation, electrical, pest)</li>
                    <li>• Document all issues with photos and measurements</li>
                    <li>• Prioritize repairs by safety and impact</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Market Research & Material Costs</h4>
                  <p className="text-gray-700 mb-2">Research local material costs and labor rates for accurate baseline estimates.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Visit Home Depot, Lowe's for material pricing</li>
                    <li>• Check local contractor hourly rates ($40-120/hr)</li>
                    <li>• Factor in permit costs and timeline requirements</li>
                    <li>• Account for disposal fees and rental equipment</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Multiple Contractor Bids</h4>
                  <p className="text-gray-700 mb-2">Obtain detailed written estimates from multiple licensed contractors for major work.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Get 3-5 detailed bids with line-item breakdowns</li>
                    <li>• Verify licenses, insurance, and references</li>
                    <li>• Compare material specifications and timeline estimates</li>
                    <li>• Negotiate payment schedules tied to completion milestones</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Build Comprehensive Budget</h4>
                  <p className="text-gray-700 mb-2">Create detailed spreadsheet tracking all costs with contingencies and timeline considerations.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Organize by room/system with detailed line items</li>
                    <li>• Add 15-25% contingency for unexpected issues</li>
                    <li>• Include holding costs during renovation period</li>
                    <li>• Factor in financing costs if using loans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Calculation Formulas</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Estimation Formulas</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Cost Per Square Foot Method</h4>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Formula:</strong> Total Rehab Cost = Square Footage × Cost/Sq Ft
                </p>
                <div className="text-blue-700 text-sm">
                  <p><strong>Example:</strong></p>
                  <p>• Light rehab (cosmetic): $15-25/sq ft</p>
                  <p>• Medium rehab (kitchens, baths): $25-50/sq ft</p>
                  <p>• Heavy rehab (structural): $50-100+/sq ft</p>
                  <p>• 1,500 sq ft house × $35/sq ft = $52,500 rehab cost</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Room-by-Room Method</h4>
                <p className="text-green-800 text-sm mb-2">
                  <strong>Formula:</strong> Total Cost = Σ (Room Cost + Labor + Materials + Permits)
                </p>
                <div className="text-green-700 text-sm">
                  <p><strong>Example breakdown:</strong></p>
                  <p>• Kitchen renovation: $20,000</p>
                  <p>• 2 bathrooms @ $12,000 each: $24,000</p>
                  <p>• Flooring throughout: $8,000</p>
                  <p>• Paint and trim: $4,000</p>
                  <p>• Total: $56,000 + 20% contingency = $67,200</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Percentage of ARV Method</h4>
                <p className="text-yellow-800 text-sm mb-2">
                  <strong>Formula:</strong> Max Rehab Budget = (ARV × 0.70) - Purchase Price - Profit Goal
                </p>
                <div className="text-yellow-700 text-sm">
                  <p><strong>Example (70% rule):</strong></p>
                  <p>• ARV: $200,000</p>
                  <p>• 70% of ARV: $140,000</p>
                  <p>• Purchase price: $80,000</p>
                  <p>• Desired profit: $25,000</p>
                  <p>• Max rehab budget: $140,000 - $80,000 - $25,000 = $35,000</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Cost Overrun Pitfalls</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Avoid These Expensive Mistakes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Hidden Issues</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Electrical code violations requiring full rewire</li>
                  <li>• Plumbing behind walls needing extensive replacement</li>
                  <li>• Foundation settling causing structural damage</li>
                  <li>• Mold/asbestos requiring professional remediation</li>
                  <li>• Termite damage to framing and subfloors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Planning & Execution Errors</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Inadequate contingency budgeting (under 15%)</li>
                  <li>• Scope creep and upgrade temptations</li>
                  <li>• Unlicensed contractors doing poor work</li>
                  <li>• Change orders inflating original bids</li>
                  <li>• Extended timeline increasing holding costs</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much should I budget for contingencies in rehab projects?</h3>
              <p className="text-gray-700">
                Budget 15-25% for contingencies on rehab projects. Older properties or extensive renovations may require up to 30% contingency due to hidden issues like electrical, plumbing, or structural problems.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I get multiple contractor bids for accuracy?</h3>
              <p className="text-gray-700">
                Yes, get 3-5 detailed bids from licensed contractors. Compare line-item costs, timeline estimates, and material specifications. Avoid the lowest bid unless thoroughly vetted—quality matters for investment properties.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the difference between cosmetic and structural rehab costs?</h3>
              <p className="text-gray-700">
                Cosmetic rehabs (paint, flooring, fixtures) typically cost $10-25/sq ft. Structural work (foundation, electrical, plumbing) can run $50-150/sq ft. Always inspect for structural issues before purchasing.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Always add 15-25% contingency for unexpected issues</li>
              <li>• Get multiple detailed bids from licensed contractors</li>
              <li>• Use room-by-room method for most accurate estimates</li>
              <li>• Factor in timeline delays and holding costs</li>
              <li>• Inspect thoroughly before finalizing purchase decisions</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-analyze-a-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/how-to-use-brrrr-buy-rehab-rent-refinance-repeat" className="text-pink-600 hover:text-pink-700 underline">
            BRRRR Method Guide
          </Link>
          <Link href="/how-to/how-to-finance-investment-properties-dscr-hard-money" className="text-pink-600 hover:text-pink-700 underline">
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