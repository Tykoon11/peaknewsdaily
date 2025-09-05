import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security Deposit Management: Legal Compliance Guide',
  description: 'Handle security deposits correctly with legal requirements, proper documentation, fair deductions, and timely returns to avoid costly disputes and violations.',
  keywords: 'security deposits, landlord legal compliance, tenant deposits, property damage, deposit deductions, rental law, move-out inspections',
};

export default function SecurityDepositsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much can I charge for a security deposit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most states allow 1-2 months' rent as maximum security deposit. Some states have lower limits or additional restrictions for furnished units. Check your local and state laws for specific requirements."
        }
      },
      {
        "@type": "Question", 
        "name": "How long do I have to return security deposits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Return timeframes vary by state, typically 14-60 days after tenant moves out. You must provide itemized deductions and receipts. Late returns often result in penalties or forfeiture of deduction rights."
        }
      },
      {
        "@type": "Question",
        "name": "What deductions are legally allowed from security deposits?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Generally allowed: unpaid rent, cleaning beyond normal wear, repairs for tenant damage. NOT allowed: normal wear and tear, pre-existing damage, improvements/upgrades, or items prohibited by local law."
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
          <span className="text-pink-600">Security Deposit Management</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Handle Security Deposits Correctly: Legal Compliance Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master security deposit management with legal compliance, proper documentation, fair deductions, and timely returns. Avoid costly disputes and protect your rental business.
          </p>
        </header>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">⚖️ Legal Compliance Critical</h2>
          <p className="text-yellow-700">
            Security deposit laws vary significantly by state and local jurisdiction. Violations can result in penalties, attorney fees, and forfeiture of deduction rights. Know your local requirements.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Deposit Regulations by State</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key State Requirements Overview</h3>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">Common Limits</th>
                      <th className="px-4 py-2 text-left font-semibold">Amount</th>
                      <th className="px-4 py-2 text-left font-semibold">Return Timeframe</th>
                      <th className="px-4 py-2 text-left font-semibold">Interest Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">Most States</td>
                      <td className="px-4 py-2">1-2 months rent</td>
                      <td className="px-4 py-2">14-30 days</td>
                      <td className="px-4 py-2">No</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-medium">California</td>
                      <td className="px-4 py-2">2 months (unfurnished)<br />3 months (furnished)</td>
                      <td className="px-4 py-2">21 days</td>
                      <td className="px-4 py-2">No</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">New York</td>
                      <td className="px-4 py-2">1 month</td>
                      <td className="px-4 py-2">14 days</td>
                      <td className="px-4 py-2">Yes (if held >1 year)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-medium">Florida</td>
                      <td className="px-4 py-2">No statutory limit</td>
                      <td className="px-4 py-2">15-60 days</td>
                      <td className="px-4 py-2">Yes (if held >1 year)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Texas</td>
                      <td className="px-4 py-2">No statutory limit</td>
                      <td className="px-4 py-2">30 days</td>
                      <td className="px-4 py-2">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Always Verify Local Laws</h4>
                <p className="text-red-700 text-sm">
                  This table shows common patterns, but state and local laws vary significantly. Research your specific jurisdiction's requirements before implementing any deposit policies.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Move-In Documentation Process</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Move-In Checklist</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">Pre-Move-In Property Condition</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Documentation Requirements:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Timestamped photos of every room (20-50 photos)</li>
                      <li>• Written condition report with specific details</li>
                      <li>• Video walkthrough narrating condition</li>
                      <li>• Note all existing damage, wear, and defects</li>
                      <li>• Test all appliances and systems</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Critical Areas to Document:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Walls, ceilings, and paint condition</li>
                      <li>• Flooring, including carpet stains/wear</li>
                      <li>• Kitchen appliances and cabinet condition</li>
                      <li>• Bathroom fixtures, tile, and grout</li>
                      <li>• Windows, screens, and blinds</li>
                      <li>• Doors, hardware, and locks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-green-400 bg-green-50 p-4">
                <h4 className="text-xl font-semibold text-green-900 mb-2">Tenant Acknowledgment Process</h4>
                <div className="space-y-2">
                  <p className="text-green-800 text-sm">Ensure tenant reviews and signs off on property condition to avoid disputes later.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-1">Review Process:</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Joint walkthrough with tenant present</li>
                        <li>• Allow tenant to add items to condition report</li>
                        <li>• Give tenant 48-72 hours to review and sign</li>
                        <li>• Provide copies of all documentation</li>
                        <li>• Include condition report in lease addendum</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-1">Legal Protection:</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Tenant signature acknowledging accuracy</li>
                        <li>• Date and timestamp all documentation</li>
                        <li>• Store originals and digital copies securely</li>
                        <li>• Include in tenant file for easy access</li>
                        <li>• Reference in lease agreement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Allowable vs. Prohibited Deductions</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Deduction Boundaries</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">✅ Generally ALLOWED Deductions</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-green-700 text-sm">Unpaid Rent & Fees:</h5>
                      <ul className="text-green-600 text-sm space-y-1 ml-2">
                        <li>• Outstanding rent payments</li>
                        <li>• Late fees per lease agreement</li>
                        <li>• Utility bills if tenant responsibility</li>
                        <li>• NSF check fees</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-green-700 text-sm">Cleaning Beyond Normal:</h5>
                      <ul className="text-green-600 text-sm space-y-1 ml-2">
                        <li>• Excessive dirt, grime, or stains</li>
                        <li>• Carpet shampooing for pet odors</li>
                        <li>• Appliance deep cleaning</li>
                        <li>• Mold/mildew from poor ventilation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-green-700 text-sm">Repairs for Damage:</h5>
                      <ul className="text-green-600 text-sm space-y-1 ml-2">
                        <li>• Holes in walls (beyond picture hanging)</li>
                        <li>• Broken appliances or fixtures</li>
                        <li>• Damaged flooring from negligence</li>
                        <li>• Missing or broken keys/remotes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-3">🚫 Generally PROHIBITED Deductions</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-red-700 text-sm">Normal Wear & Tear:</h5>
                      <ul className="text-red-600 text-sm space-y-1 ml-2">
                        <li>• Paint fading or minor scuffs</li>
                        <li>• Carpet wear in traffic areas</li>
                        <li>• Small nail holes from pictures</li>
                        <li>• Hardware showing normal use</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-red-700 text-sm">Pre-Existing Issues:</h5>
                      <ul className="text-red-600 text-sm space-y-1 ml-2">
                        <li>• Damage noted on move-in report</li>
                        <li>• Items needing replacement due to age</li>
                        <li>• Defects present before tenancy</li>
                        <li>• Landlord maintenance negligence</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-red-700 text-sm">Improvements/Upgrades:</h5>
                      <ul className="text-red-600 text-sm space-y-1 ml-2">
                        <li>• Better quality replacement items</li>
                        <li>• Upgrades beyond original condition</li>
                        <li>• Improvements for next tenant</li>
                        <li>• Remodeling or modernization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Move-Out Inspection & Deduction Process</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Move-Out Procedure</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pre-Move-Out Communication</h4>
                  <p className="text-gray-700 mb-2">Set clear expectations and timeline for tenant departure and inspection.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Provide move-out checklist 30 days prior</li>
                    <li>• Schedule final inspection appointment</li>
                    <li>• Explain deposit return process and timeline</li>
                    <li>• Share cleaning standards and expectations</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Final Walkthrough Inspection</h4>
                  <p className="text-gray-700 mb-2">Thorough comparison against move-in condition documentation.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use move-in photos and checklist for reference</li>
                    <li>• Document new damage with timestamped photos</li>
                    <li>• Note areas needing cleaning or repair</li>
                    <li>• Invite tenant to participate if possible</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cost Estimation & Vendor Quotes</h4>
                  <p className="text-gray-700 mb-2">Obtain legitimate repair and cleaning estimates for documented damage.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Get written quotes from licensed contractors</li>
                    <li>• Use reasonable market rates for labor/materials</li>
                    <li>• Consider depreciation for items with useful life</li>
                    <li>• Separate actual costs from improvements</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Itemized Deduction Statement</h4>
                  <p className="text-gray-700 mb-2">Provide detailed breakdown of all deductions with supporting documentation.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• List each deduction with specific description</li>
                    <li>• Include before/after photos where applicable</li>
                    <li>• Attach receipts or vendor estimates</li>
                    <li>• Calculate remaining balance due to tenant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Deposit Return Timeline & Requirements</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Requirements</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Return Timeline Management</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-1">Critical Deadlines:</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Know exact timeframe for your jurisdiction</li>
                      <li>• Start from tenant's actual move-out date</li>
                      <li>• Factor in mail delivery time</li>
                      <li>• Set internal deadline 5-7 days early</li>
                      <li>• Use certified mail for proof of delivery</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-1">Late Return Penalties:</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Automatic forfeiture of all deduction rights</li>
                      <li>• Double or triple damage penalties</li>
                      <li>• Tenant attorney fee reimbursement</li>
                      <li>• Interest penalties on withheld amounts</li>
                      <li>• Possible bad faith damages</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Required Documentation</h4>
                <div className="space-y-2">
                  <p className="text-blue-800 text-sm">Most states require specific information in deposit return communications.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-1">Written Statement Must Include:</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Original deposit amount received</li>
                        <li>• Itemized list of all deductions</li>
                        <li>• Specific reason for each deduction</li>
                        <li>• Cost/estimate for each repair item</li>
                        <li>• Remaining balance being returned</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-1">Supporting Documents:</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Receipts for completed repairs</li>
                        <li>• Contractor estimates for future work</li>
                        <li>• Photos showing damage/condition</li>
                        <li>• Copy of move-in condition report</li>
                        <li>• Proof of mailing/delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Deposit Disputes & Avoidance</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Prevention Strategies</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">🚨 High-Risk Deduction Areas</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-700 mb-1">Carpet Issues:</h5>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Age of carpet affects deduction validity</li>
                      <li>• Normal wear vs. damage documentation crucial</li>
                      <li>• Professional cleaning vs. replacement costs</li>
                      <li>• Pet damage requires specific evidence</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-700 mb-1">Paint & Wall Damage:</h5>
                    <ul className="text-red-600 text-sm space-y-1">
                      <li>• Distinguish nail holes from larger damage</li>
                      <li>• Paint life expectancy (2-3 years typical)</li>
                      <li>• Color changes vs. damage repairs</li>
                      <li>• Scuff marks vs. structural damage</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Best Practices for Protection</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Document everything with photos and written reports</li>
                  <li>• Be conservative with deductions—err on tenant's side</li>
                  <li>• Provide educational materials about deposit policies</li>
                  <li>• Offer pre-move-out inspection opportunities</li>
                  <li>• Maintain consistent standards across all properties</li>
                  <li>• Consider mediation before litigation</li>
                  <li>• Keep detailed records for potential court proceedings</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much can I charge for a security deposit?</h3>
              <p className="text-gray-700">
                Most states allow 1-2 months' rent as maximum security deposit. Some states have lower limits or additional restrictions for furnished units. Check your local and state laws for specific requirements.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do I have to return security deposits?</h3>
              <p className="text-gray-700">
                Return timeframes vary by state, typically 14-60 days after tenant moves out. You must provide itemized deductions and receipts. Late returns often result in penalties or forfeiture of deduction rights.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What deductions are legally allowed from security deposits?</h3>
              <p className="text-gray-700">
                Generally allowed: unpaid rent, cleaning beyond normal wear, repairs for tenant damage. NOT allowed: normal wear and tear, pre-existing damage, improvements/upgrades, or items prohibited by local law.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Document property condition thoroughly at move-in and move-out</li>
              <li>• Understand your state/local deposit laws and return deadlines</li>
              <li>• Only deduct for damage beyond normal wear and tear</li>
              <li>• Provide itemized statements with supporting documentation</li>
              <li>• When in doubt, favor the tenant to avoid legal disputes</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-screen-tenants-legally-and-fairly" className="text-pink-600 hover:text-pink-700 underline">
            Legal Tenant Screening
          </Link>
          <Link href="/how-to/how-to-write-a-rock-solid-lease-agreement" className="text-pink-600 hover:text-pink-700 underline">
            Lease Agreement Guide
          </Link>
          <Link href="/how-to/how-to-prepare-for-landlord-taxes" className="text-pink-600 hover:text-pink-700 underline">
            Landlord Tax Preparation
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}