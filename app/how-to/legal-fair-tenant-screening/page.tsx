import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Tenant Screening: Fair & Effective Process Guide',
  description: 'Build a compliant tenant screening workflow—criteria, disclosures, checks, and decision rules to reduce risk and avoid discrimination.',
  keywords: 'tenant screening, fair housing, rental application, background check, landlord compliance, rental criteria',
};

export default function LegalFairTenantScreeningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I prefer tenants without children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No—familial status is a protected class under fair housing laws in many jurisdictions. You cannot discriminate based on whether applicants have children or plan to have children."
        }
      },
      {
        "@type": "Question", 
        "name": "How much income is enough for rental qualification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Commonly, tenants should earn 3x the monthly rent in gross income. Adjust this ratio based on local cost of living and whether utilities are included in rent."
        }
      },
      {
        "@type": "Question",
        "name": "What background checks are legally allowed?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Credit, eviction history, employment verification, and landlord references are generally permitted. Criminal background checks may be restricted in some locations—check local laws for limitations."
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
          <span className="text-pink-600">Legal Tenant Screening</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Screen Tenants Legally and Fairly: Complete Compliance Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Build a bulletproof tenant screening process that protects your property while complying with fair housing laws. Learn criteria setting, application processing, and decision documentation.
          </p>
        </header>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">⚖️ Legal Compliance Critical</h2>
          <p className="text-red-700">
            Discriminatory tenant screening can result in expensive lawsuits and fair housing violations. Follow consistent, objective criteria to protect yourself legally while finding quality tenants.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">End-to-End Screening Process</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Workflow</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Publish Written Criteria</h4>
                  <p className="text-gray-700 mb-2">Create objective, measurable standards that apply to all applicants consistently.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Income multiple requirement (e.g., 3x monthly rent)</li>
                    <li>• Credit score minimum and history requirements</li>
                    <li>• Eviction and criminal history policy</li>
                    <li>• Pet and smoking policies</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pre-Screen Via Form</h4>
                  <p className="text-gray-700 mb-2">Collect basic information to qualify prospects before showings.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Desired move-in date and lease term</li>
                    <li>• Number of occupants and relationship</li>
                    <li>• Gross monthly income amount</li>
                    <li>• Pet information and smoking status</li>
                    <li>• Reason for moving</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Application & Disclosures</h4>
                  <p className="text-gray-700 mb-2">Obtain written consent and provide required legal notices.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Complete rental application</li>
                    <li>• Consent for credit/background checks</li>
                    <li>• Privacy notice and data handling</li>
                    <li>• Application fee disclosure</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verification Process</h4>
                  <p className="text-gray-700 mb-2">Independently verify all information provided by applicants.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Photo ID and Social Security verification</li>
                    <li>• Income documentation (3 recent paystubs or tax returns)</li>
                    <li>• Employment verification letter</li>
                    <li>• Previous landlord references (2-3 years)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Background Reports</h4>
                  <p className="text-gray-700 mb-2">Order comprehensive reports following local legal requirements.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Credit report with score and payment history</li>
                    <li>• Eviction history search</li>
                    <li>• Criminal background (where legally permitted)</li>
                    <li>• Sex offender registry check</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">6</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Adjudication & Documentation</h4>
                  <p className="text-gray-700 mb-2">Apply criteria uniformly and document your decision process.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Score against published criteria</li>
                    <li>• Document reasons for acceptance/denial</li>
                    <li>• Keep all records for fair housing compliance</li>
                    <li>• Apply first-qualified, first-served principle</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">7</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Decision Communication</h4>
                  <p className="text-gray-700 mb-2">Provide proper legal notices for approvals and denials.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Approval: Move to deposit and lease signing</li>
                    <li>• Denial: Send adverse action notice with specific reasons</li>
                    <li>• Include applicant rights to dispute reports</li>
                    <li>• Return deposits as required by local law</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Compliance Must-Knows</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fair Housing Compliance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">🚫 Protected Classes (Cannot Discriminate)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Race, color, national origin</li>
                  <li>• Religion and creed</li>
                  <li>• Sex, gender identity, sexual orientation</li>
                  <li>• Familial status (children, pregnancy)</li>
                  <li>• Disability and handicap status</li>
                  <li>• Age (in some jurisdictions)</li>
                  <li>• Source of income (in some areas)</li>
                  <li>• Military/veteran status</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✅ Objective Criteria (Legally Acceptable)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Verifiable income requirements</li>
                  <li>• Credit score and payment history</li>
                  <li>• Employment stability</li>
                  <li>• Rental history and references</li>
                  <li>• Criminal convictions (with restrictions)</li>
                  <li>• Pet policies and deposits</li>
                  <li>• Smoking restrictions</li>
                  <li>• Occupancy limits (reasonable)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Key Compliance Requirements</h4>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Use objective income multiples (e.g., 3x rent) instead of arbitrary judgment</li>
                <li>• Apply all criteria consistently to every applicant</li>
                <li>• If using AI/third-party screeners, ensure consent and accuracy dispute processes</li>
                <li>• Follow federal, state, and local fair housing/human rights rules</li>
                <li>• Provide reasonable accommodations for disabilities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rental Criteria Framework</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sample Objective Criteria</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Income Requirements</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• <strong>Minimum:</strong> Gross monthly income ≥ 3x monthly rent</li>
                  <li>• <strong>Documentation:</strong> 3 most recent paystubs OR tax returns</li>
                  <li>• <strong>Self-employed:</strong> 2 years tax returns + 3 months bank statements</li>
                  <li>• <strong>Multiple income sources:</strong> All sources combined must meet minimum</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Credit Standards</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• <strong>Minimum score:</strong> 620 (adjust for local market)</li>
                  <li>• <strong>Payment history:</strong> No more than 2 late payments (&gt;30 days) in past 24 months</li>
                  <li>• <strong>Collections/charge-offs:</strong> Must be resolved or on payment plan</li>
                  <li>• <strong>Bankruptcies:</strong> Discharged &gt;2 years with credit rehabilitation</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Rental History</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• <strong>Landlord references:</strong> Positive references from last 2 years</li>
                  <li>• <strong>Evictions:</strong> No eviction filings in past 3 years</li>
                  <li>• <strong>Lease violations:</strong> No major violations (property damage, illegal activities)</li>
                  <li>• <strong>Notice compliance:</strong> Proper notice given for previous moves</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Employment/Stability</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• <strong>Employment length:</strong> Current job ≥ 3 months (or offer letter)</li>
                  <li>• <strong>Employment type:</strong> Full-time, part-time, self-employed accepted with proper documentation</li>
                  <li>• <strong>Job changes:</strong> Reasonable explanation for frequent changes</li>
                  <li>• <strong>Benefits/retirement:</strong> Accepted with proper verification</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Red Flags</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚩 Warning Signs to Investigate</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Documentation Issues</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Unverifiable income or employer information</li>
                  <li>• Paystubs that don't match tax withholding</li>
                  <li>• Employer phone numbers go to voicemail only</li>
                  <li>• Bank statements with unusual deposit patterns</li>
                  <li>• Previous landlord won't confirm tenancy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Behavioral Concerns</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Pressure to skip background checks</li>
                  <li>• Offers to pay large amounts upfront to avoid screening</li>
                  <li>• Inconsistent information between application and conversation</li>
                  <li>• Reluctance to provide previous landlord contacts</li>
                  <li>• Hostile or aggressive behavior during process</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Background Check Best Practices</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Screening Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommended Services</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• TransUnion SmartMove</li>
                  <li>• RentSpree</li>
                  <li>• Apartments.com</li>
                  <li>• Zillow Rental Applications</li>
                  <li>• Local credit reporting agencies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Reports to Order</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Credit report with score</li>
                  <li>• Eviction history search</li>
                  <li>• Criminal background check</li>
                  <li>• Identity verification</li>
                  <li>• Income verification (if available)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Written consent from applicant</li>
                  <li>• FCRA-compliant reporting</li>
                  <li>• Adverse action notices if denied</li>
                  <li>• Secure data handling</li>
                  <li>• Proper disposal of reports</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Decision Documentation</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Record Keeping for Legal Protection</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">📝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Document Every Decision</h4>
                  <p className="text-gray-700 text-sm">Keep written records of why each applicant was approved or denied, based on your published criteria.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">⏱️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Retention Requirements</h4>
                  <p className="text-gray-700 text-sm">Keep all screening records for at least 3 years (longer in some jurisdictions) for fair housing compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">🔒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Secure Storage</h4>
                  <p className="text-gray-700 text-sm">Store applicant information securely with limited access. Dispose of reports properly when retention period expires.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Sample Decision Documentation</h4>
              <div className="text-sm text-gray-700">
                <p><strong>Approved:</strong> "Applicant meets all criteria: income 3.2x rent, credit score 680, positive landlord reference, 2-year employment history."</p>
                <p className="mt-2"><strong>Denied:</strong> "Applicant does not meet income requirement (2.1x rent vs. 3x required), per published criteria dated [date]."</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling Special Situations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Co-signers & Guarantors</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Screen both applicant and co-signer</li>
                <li>• Co-signer must meet income/credit requirements</li>
                <li>• Use proper co-signer agreements</li>
                <li>• Verify co-signer relationship and willingness</li>
                <li>• Check local laws on co-signer requirements</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & New Graduates</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Accept offer letters with start dates</li>
                <li>• Consider financial aid as income</li>
                <li>• Require parental co-signers if needed</li>
                <li>• Verify school enrollment status</li>
                <li>• Higher security deposits may be appropriate</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Employed Applicants</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Require 2 years of tax returns</li>
                <li>• Bank statements for 3-6 months</li>
                <li>• Profit & loss statements</li>
                <li>• Business license verification</li>
                <li>• May require higher income multiple</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Applicants</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Alternative credit history (ITIN, etc.)</li>
                <li>• Employment authorization verification</li>
                <li>• Bank statements from home country</li>
                <li>• Larger security deposits allowed</li>
                <li>• Consider embassy/consulate references</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I prefer tenants without children?</h3>
              <p className="text-gray-700">
                No—familial status is a protected class under fair housing laws in many jurisdictions. You cannot discriminate based on whether applicants have children or plan to have children.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much income is enough for rental qualification?</h3>
              <p className="text-gray-700">
                Commonly, tenants should earn 3x the monthly rent in gross income. Adjust this ratio based on local cost of living and whether utilities are included in rent.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What background checks are legally allowed?</h3>
              <p className="text-gray-700">
                Credit, eviction history, employment verification, and landlord references are generally permitted. Criminal background checks may be restricted in some locations—check local laws for limitations.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Use consistent, objective criteria for all applicants</li>
              <li>• Document every decision thoroughly for legal protection</li>
              <li>• Follow fair housing laws—never discriminate on protected classes</li>
              <li>• Verify all information independently with proper documentation</li>
              <li>• Apply first-qualified, first-served principle to avoid bias</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/write-strong-lease-agreement" className="text-pink-600 hover:text-pink-700 underline">
            Lease Agreement Guide
          </Link>
          <Link href="/how-to/handle-security-deposits-correctly" className="text-pink-600 hover:text-pink-700 underline">
            Security Deposits Management
          </Link>
          <Link href="/how-to/reduce-vacancy-and-tenant-turnover" className="text-pink-600 hover:text-pink-700 underline">
            Reduce Vacancy & Turnover
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}