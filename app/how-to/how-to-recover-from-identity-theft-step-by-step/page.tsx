import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Identity Theft Recovery: A Step-by-Step Action Plan',
  description: 'Freeze your credit, close fraudulent accounts, file reports, and restore your identity with this clear recovery checklist.',
}

export default function RecoverFromIdentityTheftStepByStep() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Identity Theft Recovery Action Plan</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl">
            🔒
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Fraud, Security & Recovery</p>
            <h1 className="text-4xl font-bold text-gray-900">Identity Theft Recovery: A Step-by-Step Action Plan</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Freeze your credit, close fraudulent accounts, file reports, and restore your identity with this clear recovery checklist.
        </p>
      </header>

      <article>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Immediate Action Required</h2>
            <p className="text-red-700 mb-0">
              Immediately freeze your credit, alert your bank and card issuers, file a police/regulatory report, dispute fraudulent accounts, and monitor your credit until it's clean.
            </p>
          </div>

          <h2>First 24 Hours: Critical Actions</h2>

          <p>
            <strong>The first day is crucial for limiting damage.</strong> Quick action can prevent further fraud and start the recovery process. Don't wait – act immediately upon discovering identity theft.
          </p>

          <h3>Place Credit Freezes with All Bureaus; Add a Fraud Alert</h3>
          <p>
            <strong>Stop new accounts from being opened in your name immediately.</strong> A credit freeze prevents anyone from accessing your credit report to open new accounts.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Credit Freeze Instructions (United States):</h4>
            
            <div className="space-y-4 text-blue-700">
              <div>
                <strong>Experian:</strong>
                <p className="text-sm">Call 1-888-397-3742 or visit experian.com/freeze</p>
              </div>
              
              <div>
                <strong>Equifax:</strong>
                <p className="text-sm">Call 1-800-685-1111 or visit equifax.com/personal/credit-report-services</p>
              </div>
              
              <div>
                <strong>TransUnion:</strong>
                <p className="text-sm">Call 1-888-909-8872 or visit transunion.com/credit-freeze</p>
              </div>
              
              <div>
                <strong>Innovis:</strong>
                <p className="text-sm">Call 1-800-540-2505 or visit innovis.com</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Canada - Credit Freeze Instructions:</h4>
            
            <div className="space-y-4 text-yellow-700">
              <div>
                <strong>Equifax Canada:</strong>
                <p className="text-sm">Call 1-800-465-7166 or visit equifax.ca</p>
              </div>
              
              <div>
                <strong>TransUnion Canada:</strong>
                <p className="text-sm">Call 1-877-525-3823 or visit transunion.ca</p>
              </div>
            </div>
          </div>

          <h4>What You'll Need for Credit Freezes:</h4>
          <ul>
            <li><strong>Personal information:</strong> Full name, address, date of birth, Social Security/Social Insurance Number</li>
            <li><strong>Payment method:</strong> May require small fee (often waived for identity theft victims)</li>
            <li><strong>PIN creation:</strong> You'll receive a PIN to lift the freeze when needed</li>
          </ul>

          <h3>Call Banks/Card Issuers; Close or Reissue Affected Accounts</h3>
          <p>
            <strong>Contact every financial institution immediately.</strong> Call the fraud departments directly – don't use contact information from suspicious communications.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Financial Institution Actions:</h4>
            
            <div className="space-y-3">
              <div>
                <strong>For Compromised Accounts:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Close accounts immediately</li>
                  <li>Dispute all fraudulent charges</li>
                  <li>Request new account numbers</li>
                  <li>Change all online banking credentials</li>
                </ul>
              </div>
              
              <div>
                <strong>For Uncompromised Accounts:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Add fraud alerts to accounts</li>
                  <li>Change passwords and PINs</li>
                  <li>Increase monitoring frequency</li>
                  <li>Consider temporary card replacements</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Change Passwords + Enable MFA Everywhere—Email First</h3>
          <p>
            <strong>Start with your primary email account.</strong> If thieves control your email, they can reset passwords for other accounts and intercept recovery communications.
          </p>

          <h4>Password Change Priority Order:</h4>
          <ol className="space-y-2">
            <li><strong>Primary email account</strong> (Gmail, Outlook, etc.)</li>
            <li><strong>Banking and financial accounts</strong></li>
            <li><strong>Work-related accounts</strong></li>
            <li><strong>Social media accounts</strong></li>
            <li><strong>Shopping and subscription accounts</strong></li>
            <li><strong>All other online accounts</strong></li>
          </ol>

          <h3>Secure Your Devices (OS Updates, Anti-Malware Scan)</h3>
          <p>
            <strong>Ensure your devices aren't compromised.</strong> Identity theft sometimes starts with malware or compromised devices.
          </p>

          <h4>Device Security Checklist:</h4>
          <ul>
            <li><strong>Update operating systems</strong> on all devices</li>
            <li><strong>Run full anti-malware scans</strong></li>
            <li><strong>Check for suspicious software</strong> or browser extensions</li>
            <li><strong>Secure your home WiFi</strong> with WPA3 encryption</li>
            <li><strong>Log out of all devices</strong> from your online accounts</li>
          </ul>

          <h2>Within 48–72 Hours: Official Documentation</h2>

          <h3>File an Identity Theft Report with Your National Authority</h3>
          <p>
            <strong>Official reports provide legal standing for disputes.</strong> Many creditors and agencies require these reports to process identity theft claims.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-3">Where to File Reports:</h4>
            
            <div className="space-y-4">
              <div>
                <strong className="text-green-800">United States:</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li><strong>Federal Trade Commission:</strong> IdentityTheft.gov or 1-877-438-4338</li>
                  <li><strong>FBI Internet Crime Complaint Center:</strong> ic3.gov (for online crimes)</li>
                  <li><strong>Internal Revenue Service:</strong> For tax-related identity theft</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-green-800">Canada:</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li><strong>Canadian Anti-Fraud Centre:</strong> antifraudcentre-centreantifraude.ca or 1-888-495-8501</li>
                  <li><strong>Royal Canadian Mounted Police:</strong> For criminal complaints</li>
                  <li><strong>Canada Revenue Agency:</strong> For tax-related identity theft</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>File Local Police Report</h3>
          <p>
            <strong>Get an official police report number.</strong> Many organizations require this for processing identity theft claims, even if police can't actively investigate.
          </p>

          <h4>What to Bring to Police:</h4>
          <ul>
            <li><strong>Government-issued photo ID</strong></li>
            <li><strong>Proof of address</strong> (utility bill, lease, etc.)</li>
            <li><strong>Documentation of fraudulent activity</strong> (statements, letters, etc.)</li>
            <li><strong>List of compromised accounts</strong></li>
          </ul>

          <h3>Get Copies of Your Credit Reports; Note Fraudulent Items</h3>
          <p>
            <strong>Obtain free credit reports from all three bureaus.</strong> Identity theft victims are entitled to free reports regardless of timing.
          </p>

          <h4>How to Get Free Credit Reports:</h4>
          <ul>
            <li><strong>AnnualCreditReport.com</strong> (official US site) - all three bureaus</li>
            <li><strong>Call 1-877-322-8228</strong> (US) for phone requests</li>
            <li><strong>Request by mail</strong> if needed for documentation</li>
            <li><strong>Credit Karma or similar</strong> for ongoing monitoring</li>
          </ul>

          <h3>Dispute Charges/Accounts in Writing; Keep Certified-Mail Receipts</h3>
          <p>
            <strong>Written disputes create paper trails.</strong> While phone calls start the process, written disputes provide legal protection and documentation.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Dispute Letter Template:</h4>
            <div className="bg-white p-4 rounded border text-sm">
              <p><strong>Date: [Date]</strong></p>
              <p><strong>To: [Credit Bureau/Creditor Name]</strong></p>
              <p><strong>RE: Identity Theft Dispute</strong></p>
              <br/>
              <p>I am writing to dispute fraudulent information on my credit report as a result of identity theft.</p>
              <br/>
              <p><strong>Fraudulent accounts/charges:</strong></p>
              <ul>
                <li>[Account name, number, amount]</li>
                <li>[Account name, number, amount]</li>
              </ul>
              <br/>
              <p>I have enclosed copies of my identity theft report (#[report number]) and police report (#[report number]).</p>
              <br/>
              <p>Please remove these fraudulent items from my credit report immediately.</p>
              <br/>
              <p>Sincerely,<br/>[Your name and signature]</p>
            </div>
          </div>

          <h2>Ongoing Recovery (Weeks to Months)</h2>

          <h3>Replace IDs (Driver's License, Health Card, Passport if Needed)</h3>
          <p>
            <strong>Replace compromised identification documents.</strong> If thieves have access to your IDs, they can continue impersonating you.
          </p>

          <h4>ID Replacement Checklist:</h4>
          <ul>
            <li><strong>Driver's license:</strong> Visit DMV with identity theft report</li>
            <li><strong>Passport:</strong> Report stolen/compromised to State Department</li>
            <li><strong>Social Security card:</strong> Contact Social Security Administration</li>
            <li><strong>Health insurance cards:</strong> Contact insurance providers</li>
          </ul>

          <h3>Monitor Your Credit Monthly; Consider Credit Monitoring Services</h3>
          <p>
            <strong>Vigilant monitoring prevents re-victimization.</strong> Identity thieves often return to previously compromised identities.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Monitoring Options:</h4>
            
            <div className="space-y-4 text-blue-700">
              <div>
                <strong>Free Options:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Credit Karma (weekly updates)</li>
                  <li>Credit.com (monthly reports)</li>
                  <li>Bank/credit card monitoring</li>
                  <li>Annual free credit reports</li>
                </ul>
              </div>
              
              <div>
                <strong>Paid Options ($10-30/month):</strong>
                <ul className="mt-2 space-y-1">
                  <li>Experian IdentityWorks</li>
                  <li>LifeLock (Norton)</li>
                  <li>Identity Guard</li>
                  <li>ID Watchdog</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Tighten Privacy (Mail Forwarding, Shredder, Opt-outs from Data Brokers)</h3>
          <p>
            <strong>Reduce your exposure to prevent future incidents.</strong> The more personal information available publicly, the easier it is for thieves to target you.
          </p>

          <h4>Privacy Protection Steps:</h4>
          <ul>
            <li><strong>Secure mail delivery:</strong> PO Box or locking mailbox</li>
            <li><strong>Shred sensitive documents</strong> before disposal</li>
            <li><strong>Opt out of pre-approved credit offers</strong> (optoutprescreen.com)</li>
            <li><strong>Remove information from data brokers</strong> (Spokeo, WhitePages, etc.)</li>
            <li><strong>Limit social media sharing</strong> of personal information</li>
          </ul>

          <h2>Documentation to Keep</h2>

          <p>
            <strong>Maintain detailed records throughout the recovery process.</strong> Good documentation speeds recovery and provides legal protection.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Essential Documentation:</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-yellow-800">Reports & Numbers:</strong>
                <ul className="text-yellow-700 mt-2 space-y-1">
                  <li>Identity theft report numbers</li>
                  <li>Police report numbers</li>
                  <li>Credit bureau dispute numbers</li>
                  <li>Insurance claim numbers</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-yellow-800">Communications:</strong>
                <ul className="text-yellow-700 mt-2 space-y-1">
                  <li>All letters sent and received</li>
                  <li>Email confirmations</li>
                  <li>Phone call logs (date, time, person)</li>
                  <li>Certified mail receipts</li>
                </ul>
              </div>
            </div>
          </div>

          <h4>Create a Recovery Timeline:</h4>
          <ul>
            <li><strong>Date identity theft discovered</strong></li>
            <li><strong>Actions taken each day</strong></li>
            <li><strong>Expected resolution dates</strong> from creditors</li>
            <li><strong>Follow-up reminders</strong> for delayed responses</li>
          </ul>

          <h2>Special Considerations</h2>

          <h3>Tax Identity Theft</h3>
          <p>
            <strong>If thieves file tax returns in your name, act immediately.</strong> Contact the IRS or CRA as soon as you discover tax-related identity theft.
          </p>

          <h4>Tax ID Theft Actions:</h4>
          <ul>
            <li><strong>File Form 14039</strong> (US) or contact CRA (Canada)</li>
            <li><strong>Continue filing your legitimate return</strong> (paper filing required)</li>
            <li><strong>Request IP PIN</strong> for future year protection</li>
            <li><strong>Expect delays</strong> in tax refund processing</li>
          </ul>

          <h3>Medical Identity Theft</h3>
          <p>
            <strong>Check medical records and insurance claims carefully.</strong> Medical identity theft can affect your insurance coverage and medical treatment.
          </p>

          <h4>Medical ID Theft Actions:</h4>
          <ul>
            <li><strong>Contact insurance providers</strong> to review claims</li>
            <li><strong>Request copies of medical records</strong></li>
            <li><strong>Dispute fraudulent medical bills</strong></li>
            <li><strong>Inform healthcare providers</strong> of the theft</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Recovery Timeline Expectations</h3>
            <div className="space-y-3 text-green-700">
              <div><strong>Credit bureau disputes:</strong> 30-45 days for investigation</div>
              <div><strong>Bank account issues:</strong> 1-2 weeks for resolution</div>
              <div><strong>New ID documents:</strong> 2-4 weeks processing time</div>
              <div><strong>Credit score recovery:</strong> 3-12 months depending on damage</div>
              <div><strong>Complete recovery:</strong> 6 months to 2+ years for complex cases</div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Related Security Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to/how-to-report-fraud-to-your-bank-and-authorities" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Report Fraud to Your Bank and Authorities
            </Link>
            <Link href="/how-to/how-to-secure-your-accounts-with-password-managers" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Secure Your Accounts with Password Managers
            </Link>
            <Link href="/how-to/how-to-set-up-alerts-for-unusual-transactions" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Set Up Alerts for Unusual Transactions
            </Link>
            <Link href="/how-to/how-to-create-a-financial-emergency-plan" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Create a Financial Emergency Plan
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Freeze vs fraud alert—what's the difference?</h3>
              <p className="text-gray-700">
                Freeze blocks new credit entirely; fraud alerts only flag extra checks. A credit freeze is stronger protection—nobody can access your credit report to open new accounts. Fraud alerts just require creditors to verify your identity first.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Do I have to pay for fraud charges?</h3>
              <p className="text-gray-700">
                You're typically protected if reported promptly. For credit cards, your liability is limited to $50 (often $0). For debit cards, report within 2 days for $50 liability, within 60 days for $500 liability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How long should I monitor my credit?</h3>
              <p className="text-gray-700">
                At least 12 months; longer if high-risk data leaked. Identity thieves often return to previously compromised identities months or years later. Extended monitoring is wise after major data breaches.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can identity theft affect my job prospects?</h3>
              <p className="text-gray-700">
                Yes, if fraudulent activity appears on background checks. Maintain documentation proving identity theft and dispute any fraudulent items with background check companies. Some employers understand identity theft situations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I hire an identity theft recovery service?</h3>
              <p className="text-gray-700">
                Usually not necessary if you follow this guide systematically. Most recovery can be done yourself with patience and organization. Only consider paid services for extremely complex cases or if you lack time to handle it personally.
              </p>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Freeze vs fraud alert—what's the difference?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Freeze blocks new credit entirely; fraud alerts only flag extra checks. A credit freeze is stronger protection—nobody can access your credit report to open new accounts. Fraud alerts just require creditors to verify your identity first."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I have to pay for fraud charges?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You're typically protected if reported promptly. For credit cards, your liability is limited to $50 (often $0). For debit cards, report within 2 days for $50 liability, within 60 days for $500 liability."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long should I monitor my credit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "At least 12 months; longer if high-risk data leaked. Identity thieves often return to previously compromised identities months or years later. Extended monitoring is wise after major data breaches."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can identity theft affect my job prospects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, if fraudulent activity appears on background checks. Maintain documentation proving identity theft and dispute any fraudulent items with background check companies. Some employers understand identity theft situations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I hire an identity theft recovery service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Usually not necessary if you follow this guide systematically. Most recovery can be done yourself with patience and organization. Only consider paid services for extremely complex cases or if you lack time to handle it personally."
                    }
                  }
                ]
              })
            }}
          />
        </section>
      </article>
    </main>
  )
}