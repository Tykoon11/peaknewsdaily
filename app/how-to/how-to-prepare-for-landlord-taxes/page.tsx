import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landlord Tax Preparation: Deductions & Record-Keeping Guide',
  description: 'Master rental property taxes with comprehensive deductions, depreciation strategies, record-keeping systems, and tax optimization for maximum savings.',
  keywords: 'landlord taxes, rental property deductions, depreciation, real estate taxes, tax preparation, rental income, property management expenses',
};

export default function LandlordTaxesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What rental property expenses are tax deductible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most operating expenses are deductible including mortgage interest, property taxes, repairs, maintenance, insurance, management fees, utilities, and travel costs. Capital improvements must be depreciated over time."
        }
      },
      {
        "@type": "Question", 
        "name": "How does rental property depreciation work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential rental properties are depreciated over 27.5 years using straight-line method. Only the building value (not land) can be depreciated. This creates paper losses that reduce taxable income."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to report all rental income?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes, all rental income must be reported including rent, late fees, pet deposits, and security deposit forfeiture. Income is reported when received, not when earned, for cash-basis taxpayers."
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
          <span className="text-pink-600">Landlord Tax Preparation</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Prepare for Landlord Taxes: Complete Deductions & Record-Keeping Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master rental property tax preparation with comprehensive deductions, depreciation strategies, record-keeping systems, and optimization techniques to minimize your tax liability legally.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">💰 Tax Benefits of Real Estate</h2>
          <p className="text-blue-700">
            Real estate offers unique tax advantages including depreciation, deductible expenses, and potential tax-deferred exchanges. Proper planning can significantly reduce your overall tax burden.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rental Property Tax Forms Overview</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Tax Forms for Landlords</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 bg-green-50 p-4">
                <h4 className="text-xl font-semibold text-green-900 mb-2">Schedule E (Form 1040) - Primary Form</h4>
                <p className="text-green-800 mb-3">Reports rental income and expenses for up to 3 properties per form.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Income Section:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Rents received during tax year</li>
                      <li>• Late fees and pet fees</li>
                      <li>• Security deposit forfeitures</li>
                      <li>• Other rental-related income</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Expense Categories:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Mortgage interest, taxes, insurance</li>
                      <li>• Repairs, maintenance, management</li>
                      <li>• Utilities, travel, professional services</li>
                      <li>• Depreciation (calculated separately)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">Form 4562 - Depreciation</h4>
                <p className="text-blue-800 mb-3">Required for claiming depreciation on rental properties and improvements.</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• First-year depreciation for new properties</li>
                  <li>• Continuing depreciation for existing properties</li>
                  <li>• Section 179 deduction for qualifying property</li>
                  <li>• Listed property information</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-400 bg-purple-50 p-4">
                <h4 className="text-xl font-semibold text-purple-900 mb-2">Additional Forms (When Applicable)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-1">Form 8825:</h5>
                    <p className="text-purple-700 text-sm">For partnerships, S-corps, LLCs with rental activity</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-1">Form 1099-MISC:</h5>
                    <p className="text-purple-700 text-sm">Issue to contractors paid $600+ annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Deductible Expenses</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Categories of Rental Property Deductions</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Property Operations</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Mortgage interest</strong> - Only on rental portion</li>
                    <li>• <strong>Property taxes</strong> - Real estate taxes paid</li>
                    <li>• <strong>Insurance premiums</strong> - Property, liability, loss of rents</li>
                    <li>• <strong>Utilities</strong> - If landlord pays (electric, gas, water, trash)</li>
                    <li>• <strong>HOA fees</strong> - Homeowners association dues</li>
                    <li>• <strong>Property management</strong> - Management company fees</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Maintenance & Repairs</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Routine maintenance</strong> - HVAC service, gutter cleaning</li>
                    <li>• <strong>Repairs</strong> - Fix existing systems/components</li>
                    <li>• <strong>Cleaning</strong> - Between tenants, deep cleaning</li>
                    <li>• <strong>Landscaping</strong> - Lawn care, snow removal</li>
                    <li>• <strong>Supplies</strong> - Tools, materials for maintenance</li>
                    <li>• <strong>Pest control</strong> - Regular treatment services</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Professional Services</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Legal fees</strong> - Evictions, contract review</li>
                    <li>• <strong>Accounting fees</strong> - Tax prep, bookkeeping</li>
                    <li>• <strong>Property inspections</strong> - Annual, pre-purchase</li>
                    <li>• <strong>Contractor services</strong> - Plumbing, electrical, HVAC</li>
                    <li>• <strong>Real estate commissions</strong> - Leasing, management</li>
                    <li>• <strong>Banking fees</strong> - Account maintenance, wire fees</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Business Operations</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• <strong>Advertising</strong> - Vacancy marketing, signage</li>
                    <li>• <strong>Travel expenses</strong> - Mileage, lodging for property visits</li>
                    <li>• <strong>Office expenses</strong> - Supplies, phone, internet (% used for rentals)</li>
                    <li>• <strong>Software subscriptions</strong> - Property management apps</li>
                    <li>• <strong>Education</strong> - Landlord courses, real estate seminars</li>
                    <li>• <strong>Publications</strong> - Industry magazines, legal updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Depreciation Strategy</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Rental Property Depreciation</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Basic Depreciation Rules</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-1">Residential Rental Property:</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• 27.5-year depreciation period</li>
                      <li>• Straight-line method (equal annual amounts)</li>
                      <li>• Only building value depreciates (not land)</li>
                      <li>• Must take depreciation or lose the benefit</li>
                      <li>• Depreciation recapture when sold</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-1">Calculation Example:</h5>
                    <div className="text-orange-700 text-sm space-y-1">
                      <div>Property purchase price: $275,000</div>
                      <div>Less: Land value: -$50,000</div>
                      <div>Depreciable basis: $225,000</div>
                      <div>Annual depreciation: $225,000 ÷ 27.5</div>
                      <div className="font-semibold">= $8,182/year deduction</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Capital Improvements vs. Repairs</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Repairs (Immediate Deduction):</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Fix broken window</li>
                      <li>• Patch roof leak</li>
                      <li>• Replace broken appliance with similar</li>
                      <li>• Touch-up painting</li>
                      <li>• Repair plumbing leak</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Capital Improvements (Depreciate):</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• New roof installation</li>
                      <li>• Kitchen renovation</li>
                      <li>• HVAC system replacement</li>
                      <li>• Flooring upgrade</li>
                      <li>• Addition or structural changes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Bonus Depreciation & Section 179</h4>
                <p className="text-blue-800 text-sm mb-2">Special depreciation rules for certain property types and situations.</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• <strong>Bonus depreciation:</strong> 100% first-year for qualifying improvements</li>
                  <li>• <strong>Section 179:</strong> Up to $1.08M immediate deduction for personal property</li>
                  <li>• <strong>QIP (Qualified Improvement Property):</strong> Interior non-structural improvements</li>
                  <li>• <strong>Cost segregation:</strong> Professional study to accelerate depreciation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Record-Keeping Systems</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Essential Documentation</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Income Documentation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Required Records:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Lease agreements and rent rolls</li>
                      <li>• Bank deposits and rent receipts</li>
                      <li>• Late fee and pet fee collections</li>
                      <li>• Security deposit forfeitures</li>
                      <li>• Insurance reimbursements</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Organization Tips:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Separate bank account for each property</li>
                      <li>• Monthly income reconciliation</li>
                      <li>• Digital copies of all documents</li>
                      <li>• Property management software integration</li>
                      <li>• Annual income summary reports</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Expense Documentation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-800 mb-1">Receipt Requirements:</h5>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Original receipts for all expenses</li>
                      <li>• Credit card statements with details</li>
                      <li>• Cancelled checks and bank statements</li>
                      <li>• Contractor invoices and work orders</li>
                      <li>• Mileage logs for travel expenses</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-800 mb-1">Digital Organization:</h5>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Scan all paper receipts immediately</li>
                      <li>• Cloud storage with backup</li>
                      <li>• Folder structure by property and year</li>
                      <li>• Monthly expense categorization</li>
                      <li>• Annual tax preparation folders</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Recommended Software Tools</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-1">Accounting:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>• QuickBooks (comprehensive)</li>
                      <li>• Xero (cloud-based)</li>
                      <li>• FreshBooks (simple)</li>
                      <li>• Wave (free option)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-1">Property Management:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Buildium (professional)</li>
                      <li>• Avail (DIY friendly)</li>
                      <li>• TenantCloud (mid-range)</li>
                      <li>• RentSpree (modern)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-1">Expense Tracking:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Expensify (receipt scanning)</li>
                      <li>• Shoeboxed (receipt management)</li>
                      <li>• MileIQ (mileage tracking)</li>
                      <li>• Evernote (document storage)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Planning Strategies</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Optimization Techniques</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Timing Strategies</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Income Deferral:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Delay December rent collection to January</li>
                      <li>• Structure lease renewals for tax planning</li>
                      <li>• Consider installment sales for property sales</li>
                      <li>• Time security deposit forfeitures</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Expense Acceleration:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Prepay property taxes in high-income years</li>
                      <li>• Accelerate repairs and maintenance</li>
                      <li>• Purchase equipment before year-end</li>
                      <li>• Pay professional services early</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Entity Structure Optimization</h4>
                <p className="text-green-800 text-sm mb-2">Consider different business structures for tax advantages and liability protection.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">LLC Benefits:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Pass-through taxation</li>
                      <li>• Liability protection</li>
                      <li>• Flexible ownership structure</li>
                      <li>• Professional management deduction</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">S-Corp Considerations:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Self-employment tax savings</li>
                      <li>• Reasonable salary requirements</li>
                      <li>• More complex administration</li>
                      <li>• Limited to 100 shareholders</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Advanced Strategies</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• <strong>1031 Exchange:</strong> Defer taxes on property sales by reinvesting</li>
                  <li>• <strong>Cost segregation:</strong> Accelerate depreciation on components</li>
                  <li>• <strong>Opportunity Zones:</strong> Tax-advantaged investing in qualified areas</li>
                  <li>• <strong>Short-term rental:</strong> Active vs. passive income treatment</li>
                  <li>• <strong>Real Estate Professional:</strong> Qualify for unlimited loss deductions</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What rental property expenses are tax deductible?</h3>
              <p className="text-gray-700">
                Most operating expenses are deductible including mortgage interest, property taxes, repairs, maintenance, insurance, management fees, utilities, and travel costs. Capital improvements must be depreciated over time.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How does rental property depreciation work?</h3>
              <p className="text-gray-700">
                Residential rental properties are depreciated over 27.5 years using straight-line method. Only the building value (not land) can be depreciated. This creates paper losses that reduce taxable income.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to report all rental income?</h3>
              <p className="text-gray-700">
                Yes, all rental income must be reported including rent, late fees, pet deposits, and security deposit forfeiture. Income is reported when received, not when earned, for cash-basis taxpayers.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Keep meticulous records of all income and expenses</li>
              <li>• Understand depreciation rules and capital improvement vs. repair distinctions</li>
              <li>• Use property management software for automated record-keeping</li>
              <li>• Consider advanced strategies like cost segregation and 1031 exchanges</li>
              <li>• Consult with tax professionals familiar with real estate investing</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-analyze-a-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/how-to-handle-security-deposits-correctly" className="text-pink-600 hover:text-pink-700 underline">
            Security Deposits Guide
          </Link>
          <Link href="/how-to/how-to-manage-rentals-remotely-systems-tools" className="text-pink-600 hover:text-pink-700 underline">
            Remote Management Tools
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}