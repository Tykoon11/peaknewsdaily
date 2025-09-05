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
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">🚫 Short-Term Rental Prohibition</h4>
                <p className="text-red-800 text-sm">
                  <strong>Essential clause:</strong> "Tenant may not use premises for short-term rentals, including but not limited to Airbnb, VRBO, or similar services. Violation constitutes material breach subject to immediate termination."
                </p>
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
          <Link href="/how-to/how-to-screen-tenants-legally-and-fairly" className="text-pink-600 hover:text-pink-700 underline">
            Legal Tenant Screening
          </Link>
          <Link href="/how-to/how-to-handle-security-deposits-correctly" className="text-pink-600 hover:text-pink-700 underline">
            Security Deposits Guide
          </Link>
          <Link href="/how-to/how-to-prepare-for-landlord-taxes" className="text-pink-600 hover:text-pink-700 underline">
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