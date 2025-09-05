import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rock-Solid Residential Lease: Clauses & Templates Guide',
  description: 'Essential lease clauses, addenda, and compliance tips to protect your property and reduce disputes with comprehensive lease agreements.',
  keywords: 'lease agreement, rental contract, lease clauses, landlord forms, rental terms, property management',
};

export default function WriteStrongLeaseAgreementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I use month-to-month or fixed-term leases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixed terms reduce turnover and provide income stability, while month-to-month gives flexibility for both parties. Consider your market conditions and tenant preferences when deciding."
        }
      },
      {
        "@type": "Question", 
        "name": "Are electronic signatures valid for lease agreements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, electronic signatures are valid in most places under e-signature laws. Use compliant e-sign tools like DocuSign, HelloSign, or similar services that provide audit trails."
        }
      },
      {
        "@type": "Question",
        "name": "What maintenance responsibilities should be included?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Clearly define landlord responsibilities (major systems, structural) versus tenant responsibilities (filters, bulbs, lawn care if applicable). Spell out specific maintenance tiers to avoid disputes."
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
          <span className="text-pink-600">Lease Agreement Guide</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Write a Rock-Solid Lease Agreement: Complete Template Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Create bulletproof lease agreements with essential clauses, legal addenda, and compliance strategies that protect your property investment and minimize disputes.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">📋 Legal Foundation</h2>
          <p className="text-blue-700">
            A well-written lease agreement is your primary legal protection as a landlord. It sets clear expectations, defines responsibilities, and provides enforcement mechanisms when issues arise.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Lease Sections</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Must-Have Components</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Basic Information</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Parties (landlord and tenant names)</li>
                  <li>• Premises (complete property address)</li>
                  <li>• Term and possession dates</li>
                  <li>• Rent amount and due date</li>
                  <li>• Security deposit amount</li>
                  <li>• Late fees and NSF charges</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Financial Terms</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Rent payment methods and location</li>
                  <li>• Grace periods and late fee structure</li>
                  <li>• Utilities responsibility and arrangements</li>
                  <li>• Security deposit permitted deductions</li>
                  <li>• Pet fees and deposits</li>
                  <li>• Returned check fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Property & Tenant Rules</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Maintenance responsibilities (landlord vs tenant)</li>
                  <li>• Right of entry procedures</li>
                  <li>• Occupancy limits and guest policies</li>
                  <li>• Smoking and pet restrictions</li>
                  <li>• Noise and nuisance provisions</li>
                  <li>• Assignment and subletting rules</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Legal Provisions</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Default and remedy procedures</li>
                  <li>• Renewal and notice requirements</li>
                  <li>• Governing law and jurisdiction</li>
                  <li>• Required legal disclosures</li>
                  <li>• Attorney fees and court costs</li>
                  <li>• Severability clause</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rent & Payment Provisions</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms That Protect You</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Rent Due Date & Time</h4>
                <p className="text-green-800 text-sm mb-2">
                  <strong>Sample clause:</strong> "Rent is due on the 1st day of each month by 5:00 PM. Rent received after the due date is late, regardless of postmark or delivery method."
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Specify exact due date and time</li>
                  <li>• Include grace period if offering one (typically 3-5 days)</li>
                  <li>• Clarify that postmark doesn't determine timeliness</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Late Fee Structure</h4>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Sample clause:</strong> "Late fee of $50 applies if rent is not received by 11:59 PM on the 5th day of the month. Additional $10 daily charge applies thereafter, up to maximum of $200."
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Must comply with local late fee limits</li>
                  <li>• Consider flat fee vs. percentage of rent</li>
                  <li>• Include daily charges if permitted</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Accepted Payment Methods</h4>
                <p className="text-yellow-800 text-sm mb-2">
                  <strong>Sample clause:</strong> "Rent must be paid by check, money order, or electronic transfer through approved payment portal. Cash payments not accepted unless specifically authorized in writing."
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Specify acceptable payment forms</li>
                  <li>• Include online payment portal information</li>
                  <li>• Address returned check fees ($25-50 typical)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance & Responsibility Clauses</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clear Maintenance Divisions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-900 mb-2">Landlord Responsibilities</h4>
                <ul className="text-pink-800 text-sm space-y-1">
                  <li>• Major system repairs (HVAC, plumbing, electrical)</li>
                  <li>• Structural issues and roof problems</li>
                  <li>• Appliance repairs (if provided)</li>
                  <li>• Exterior maintenance and landscaping</li>
                  <li>• Common area maintenance (if applicable)</li>
                  <li>• Code compliance and safety issues</li>
                  <li>• Pest control (initial and structural)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Tenant Responsibilities</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Regular cleaning and upkeep</li>
                  <li>• Light bulb and filter replacements</li>
                  <li>• Lawn care (if specified in lease)</li>
                  <li>• Minor repairs under $50 (if agreed)</li>
                  <li>• Preventing freeze damage</li>
                  <li>• Pest control (tenant-caused infestations)</li>
                  <li>• Damage beyond normal wear and tear</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-orange-900 mb-2">💡 Pro Tip: Maintenance Request Process</h4>
              <p className="text-orange-800 text-sm">
                Include specific procedures for maintenance requests: "All non-emergency repairs must be reported in writing through tenant portal or email. Emergency repairs (flooding, no heat, security issues) may be reported by phone 24/7."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Rules & Restrictions</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Property Guidelines</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Occupancy & Guest Policies</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Sample clause:</strong> "Maximum occupancy is 4 persons. Guests may stay no more than 14 consecutive days or 30 total days per year without landlord approval. Overnight guests must be registered."
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Pet Restrictions</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Sample clause:</strong> "No pets allowed without written permission. If approved, pet deposit of $300 and monthly pet rent of $25 required. Maximum 2 pets, under 50 lbs each. Breed restrictions apply."
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Smoking Policy</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Sample clause:</strong> "Smoking is prohibited inside the premises and within 25 feet of building. Violation results in $250 cleaning fee and potential lease termination."
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Noise & Nuisance</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Sample clause:</strong> "Tenant must not disturb neighbors or create nuisances. Quiet hours are 10 PM to 8 AM daily. Violations may result in lease termination."
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">🚫 Short-Term Rental Prohibition</h4>
                <p className="text-red-800 text-sm">
                  <strong>Essential clause:</strong> "Tenant may not use premises for short-term rentals, including but not limited to Airbnb, VRBO, or similar services. Violation constitutes material breach subject to immediate termination."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Legal Disclosures</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mandatory Disclosures by Category</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Federal Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Lead-based paint:</strong> Pre-1978 properties must include EPA disclosure</li>
                  <li>• <strong>Fair housing:</strong> Equal opportunity statement</li>
                  <li>• <strong>Security deposits:</strong> State-specific holding requirements</li>
                  <li>• <strong>Right of entry:</strong> Notice requirements (typically 24-48 hours)</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Safety Disclosures</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Smoke detectors:</strong> Location and testing responsibility</li>
                  <li>• <strong>Carbon monoxide:</strong> Detector requirements where applicable</li>
                  <li>• <strong>Mold:</strong> Known issues and prevention responsibilities</li>
                  <li>• <strong>Asbestos:</strong> In older properties if known</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Property-Specific</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Flooding history:</strong> If property has flooded</li>
                  <li>• <strong>Bedbugs:</strong> History in past year</li>
                  <li>• <strong>HOA rules:</strong> If applicable to tenant</li>
                  <li>• <strong>Utility arrangements:</strong> Which utilities tenant pays</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Insurance Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Renters insurance:</strong> Minimum liability amount</li>
                  <li>• <strong>Landlord coverage:</strong> What landlord insurance doesn't cover</li>
                  <li>• <strong>Additional insured:</strong> If landlord should be named</li>
                  <li>• <strong>Proof required:</strong> Timeline for providing proof</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lease Termination & Default</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clear Enforcement Procedures</h3>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Default Conditions</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Non-payment of rent or fees</li>
                  <li>• Violation of lease terms</li>
                  <li>• Illegal activities on premises</li>
                  <li>• Unauthorized occupants or pets</li>
                  <li>• Property damage beyond normal wear</li>
                  <li>• Failure to maintain required insurance</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Notice Requirements</h4>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Sample clause:</strong> "Landlord will provide [X] days written notice to cure defaults (per state law). Non-payment requires [X] days pay-or-quit notice. Some violations may result in immediate termination."
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Follow state-specific notice periods</li>
                  <li>• Different timeframes for different violations</li>
                  <li>• Specify delivery methods (certified mail, posting, etc.)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">End-of-Lease Procedures</h4>
                <p className="text-green-800 text-sm mb-2">
                  <strong>Sample clause:</strong> "Tenant must provide 30 days written notice to terminate month-to-month lease. Fixed-term leases require 60 days notice for non-renewal. Move-out inspection will be scheduled."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Addenda</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Additional Documents to Include</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Property-Specific Addenda</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>HOA addendum:</strong> Community rules and fees</li>
                  <li>• <strong>Parking addendum:</strong> Assigned spaces, guest parking</li>
                  <li>• <strong>Storage addendum:</strong> Use of basement, garage, etc.</li>
                  <li>• <strong>Utility addendum:</strong> Detailed utility arrangements</li>
                  <li>• <strong>Appliance addendum:</strong> Provided appliances and warranties</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Special Situations</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Pet addendum:</strong> Detailed pet rules and deposits</li>
                  <li>• <strong>Roommate addendum:</strong> Joint and several liability</li>
                  <li>• <strong>Military clause:</strong> Early termination for deployment</li>
                  <li>• <strong>Student addendum:</strong> Special terms for students</li>
                  <li>• <strong>Corporate housing:</strong> Business-specific terms</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Strong Leases</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">✅ Best Practices</h3>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• <strong>Use state-specific forms:</strong> Local real estate associations often provide templates</li>
                <li>• <strong>Plain English:</strong> Avoid legalese that confuses tenants</li>
                <li>• <strong>Specific numbers:</strong> Always include exact dollar amounts and dates</li>
                <li>• <strong>Regular updates:</strong> Review and update lease annually for law changes</li>
                <li>• <strong>Attorney review:</strong> Have lawyer review before first use</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Common Mistakes</h3>
              <ul className="text-yellow-700 space-y-2 text-sm">
                <li>• <strong>Vague language:</strong> "Reasonable" and "appropriate" create disputes</li>
                <li>• <strong>Contradictory clauses:</strong> Ensure all sections align</li>
                <li>• <strong>Missing signatures:</strong> All parties must sign and date</li>
                <li>• <strong>No renewal terms:</strong> Specify how lease continues or ends</li>
                <li>• <strong>Illegal clauses:</strong> Some terms may be unenforceable</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Electronic Signatures & Modern Tools</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Lease Management</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">E-Signature Platforms</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• DocuSign (industry standard)</li>
                  <li>• HelloSign (user-friendly)</li>
                  <li>• Adobe Sign (professional features)</li>
                  <li>• PandaDoc (document management)</li>
                  <li>• RentSpree (rental-specific)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Both parties must consent to e-signatures</li>
                  <li>• Audit trail must be maintained</li>
                  <li>• Identity verification required</li>
                  <li>• Copies provided to all parties</li>
                  <li>• Backup storage recommended</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Faster execution process</li>
                  <li>• Reduced paperwork and filing</li>
                  <li>• Better organization and storage</li>
                  <li>• Remote signing capability</li>
                  <li>• Automatic reminders</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I use month-to-month or fixed-term leases?</h3>
              <p className="text-gray-700">
                Fixed terms reduce turnover and provide income stability, while month-to-month gives flexibility for both parties. Consider your market conditions and tenant preferences when deciding.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Are electronic signatures valid for lease agreements?</h3>
              <p className="text-gray-700">
                Yes, electronic signatures are valid in most places under e-signature laws. Use compliant e-sign tools like DocuSign, HelloSign, or similar services that provide audit trails.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What maintenance responsibilities should be included?</h3>
              <p className="text-gray-700">
                Clearly define landlord responsibilities (major systems, structural) versus tenant responsibilities (filters, bulbs, lawn care if applicable). Spell out specific maintenance tiers to avoid disputes.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Include all required legal disclosures for your jurisdiction</li>
              <li>• Be specific with payment terms, dates, and fee structures</li>
              <li>• Clearly divide maintenance responsibilities between parties</li>
              <li>• Add protective clauses like short-term rental prohibitions</li>
              <li>• Use state-specific forms and get attorney review</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/legal-fair-tenant-screening" className="text-pink-600 hover:text-pink-700 underline">
            Legal Tenant Screening
          </Link>
          <Link href="/how-to/handle-security-deposits-correctly" className="text-pink-600 hover:text-pink-700 underline">
            Security Deposits Guide
          </Link>
          <Link href="/how-to/landlord-taxes-deductions-filing" className="text-pink-600 hover:text-pink-700 underline">
            Landlord Tax Deductions
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}