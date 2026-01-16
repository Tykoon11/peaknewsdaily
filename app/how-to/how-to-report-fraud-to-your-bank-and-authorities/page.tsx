import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Report Fraud Fast (Bank, Police & Regulators)',
  description: 'Learn exactly who to contact, what to say, and which documents to gather when reporting financial fraud.',
}

export default function ReportFraudToBankAndAuthorities() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Report Fraud Fast</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl">
            🔒
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Fraud, Security & Recovery</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Report Fraud Fast (Bank, Police & Regulators)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn exactly who to contact, what to say, and which documents to gather when reporting financial fraud.
        </p>
      </header>

      <article>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Time is Critical</h2>
            <p className="text-red-700 mb-0">
              Contact your bank's fraud team immediately, freeze cards, file official reports (police/regulator), document everything, and follow up in writing.
            </p>
          </div>

          <h2>Immediate Actions: First Hour</h2>

          <p>
            <strong>The first hour determines how much money you might lose.</strong> Financial institutions have better recovery options when fraud is reported immediately, and some protections are time-sensitive.
          </p>

          <h3>Call Your Bank's Fraud Line: Lock Cards, Freeze Online Access, Request New Numbers</h3>
          <p>
            <strong>Start with your bank's dedicated fraud department.</strong> Don't use general customer service – fraud teams have special tools and authority to act quickly.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Major Bank Fraud Numbers (Available 24/7):</h4>
            
            <div className="grid md:grid-cols-2 gap-4 text-blue-700">
              <div>
                <strong>United States:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Chase: 1-866-564-2262</li>
                  <li>Bank of America: 1-800-432-1000</li>
                  <li>Wells Fargo: 1-800-869-3557</li>
                  <li>Citibank: 1-800-285-3866</li>
                  <li>Capital One: 1-800-227-4825</li>
                </ul>
              </div>
              
              <div>
                <strong>Canada:</strong>
                <ul className="mt-2 space-y-1">
                  <li>RBC: 1-800-769-2511</li>
                  <li>TD Bank: 1-866-222-3456</li>
                  <li>Scotiabank: 1-800-472-6842</li>
                  <li>BMO: 1-877-225-5266</li>
                  <li>CIBC: 1-800-465-4653</li>
                </ul>
              </div>
            </div>
          </div>

          <h4>What to Tell Your Bank:</h4>
          <ul>
            <li><strong>Type of fraud:</strong> Unauthorized charges, stolen card, account takeover</li>
            <li><strong>Timeline:</strong> When you discovered it and when it likely occurred</li>
            <li><strong>Amount involved:</strong> Total dollar amount of fraudulent activity</li>
            <li><strong>Specific transactions:</strong> Dates, amounts, merchants for each fraudulent charge</li>
            <li><strong>How it happened:</strong> What you know about how your information was compromised</li>
          </ul>

          <h4>What Your Bank Will Do Immediately:</h4>
          <ul>
            <li><strong>Block compromised cards</strong> to prevent further unauthorized use</li>
            <li><strong>Freeze online access</strong> if accounts are compromised</li>
            <li><strong>Place fraud alerts</strong> on your accounts</li>
            <li><strong>Initiate disputes</strong> for unauthorized transactions</li>
            <li><strong>Rush replacement cards</strong> (usually 1-2 business days)</li>
          </ul>

          <h3>Change Passwords/MFA for Email and Banking Apps</h3>
          <p>
            <strong>Secure your digital access points immediately.</strong> If fraudsters have your passwords, they can continue accessing accounts even after cards are replaced.
          </p>

          <h4>Password Change Priority:</h4>
          <ol className="space-y-2">
            <li><strong>Primary email account</strong> (used for password resets)</li>
            <li><strong>Online banking passwords</strong></li>
            <li><strong>Mobile banking app PINs</strong></li>
            <li><strong>Payment app passwords</strong> (PayPal, Venmo, etc.)</li>
            <li><strong>Stored payment methods</strong> on shopping sites</li>
          </ol>

          <h3>Note Transaction IDs, Timestamps, and Merchant Names</h3>
          <p>
            <strong>Documentation is crucial for successful fraud claims.</strong> Record everything while the information is fresh in your memory.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Information to Document:</h4>
            
            <div className="space-y-3">
              <div>
                <strong>For Each Fraudulent Transaction:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Date and time of transaction</li>
                  <li>Merchant name and location</li>
                  <li>Transaction amount</li>
                  <li>Reference/confirmation number</li>
                  <li>Method (card, online, phone)</li>
                </ul>
              </div>
              
              <div>
                <strong>Discovery Information:</strong>
                <ul className="mt-2 space-y-1">
                  <li>When you first noticed the fraud</li>
                  <li>How you discovered it (statement, alert, etc.)</li>
                  <li>Last time you used the card legitimately</li>
                  <li>Where you might have been compromised</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Build Your Case File</h2>

          <p>
            <strong>Organize evidence systematically for better outcomes.</strong> Well-documented cases get resolved faster and with better results.
          </p>

          <h3>Government ID, Proof of Address</h3>
          <p>
            <strong>Gather identity verification documents.</strong> You'll need these for multiple agencies and to prove you are the legitimate account holder.
          </p>

          <h4>Required Identity Documents:</h4>
          <ul>
            <li><strong>Government-issued photo ID:</strong> Driver's license, passport, or state ID</li>
            <li><strong>Proof of current address:</strong> Utility bill, lease agreement, or bank statement (within 30 days)</li>
            <li><strong>Social Security/SIN card</strong> or official document with your number</li>
            <li><strong>Additional ID:</strong> Birth certificate, employment ID, or other official documents</li>
          </ul>

          <h3>Screenshots of Messages/Emails</h3>
          <p>
            <strong>Preserve digital evidence before it disappears.</strong> Screenshots provide time-stamped proof of communications and fraud attempts.
          </p>

          <h4>What to Screenshot:</h4>
          <ul>
            <li><strong>Phishing emails or texts</strong> that may have led to compromise</li>
            <li><strong>Suspicious account notifications</strong></li>
            <li><strong>Unauthorized account activity</strong> in apps or online</li>
            <li><strong>Error messages</strong> when trying to access accounts</li>
            <li><strong>Communications with fraudsters</strong> (if any)</li>
          </ul>

          <h3>Bank Statements and Charge Details</h3>
          <p>
            <strong>Collect comprehensive financial records.</strong> Complete statements help identify all fraudulent activity and establish patterns.
          </p>

          <h4>Financial Documentation Checklist:</h4>
          <ul>
            <li><strong>Bank statements:</strong> 3-6 months before fraud occurred</li>
            <li><strong>Credit card statements</strong> showing fraudulent charges</li>
            <li><strong>Transaction histories</strong> from online banking</li>
            <li><strong>ATM receipts</strong> from legitimate transactions</li>
            <li><strong>Merchant receipts</strong> for transactions you did make</li>
          </ul>

          <h3>Police/Regulatory Report Numbers</h3>
          <p>
            <strong>Official report numbers validate your fraud claims.</strong> Many financial institutions require these for processing disputes and insurance claims.
          </p>

          <h2>Submit Formal Reports</h2>

          <h3>Bank Dispute (Chargeback or EFT Dispute)</h3>
          <p>
            <strong>Formal disputes trigger legal protections and investigation processes.</strong> This is separate from the initial fraud report and requires written submission.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-3">Dispute Process Timeline:</h4>
            <div className="space-y-3 text-green-700">
              <div><strong>Immediate:</strong> Provisional credit for disputed amount (usually within 1-2 business days)</div>
              <div><strong>10 days:</strong> Bank must explain delay if provisional credit not issued</div>
              <div><strong>45-90 days:</strong> Investigation period (varies by transaction type and complexity)</div>
              <div><strong>Final decision:</strong> Permanent credit or charge restored based on investigation</div>
            </div>
          </div>

          <h4>Information Needed for Disputes:</h4>
          <ul>
            <li><strong>Dispute reason:</strong> Unauthorized transaction, fraud, billing error</li>
            <li><strong>Transaction details:</strong> Date, amount, merchant, description</li>
            <li><strong>Explanation:</strong> Why you believe the charge is fraudulent</li>
            <li><strong>Supporting evidence:</strong> Police reports, communications, receipts</li>
          </ul>

          <h3>Police Report (for Case Number)</h3>
          <p>
            <strong>File a police report even if they can't actively investigate.</strong> The report number provides legal standing and is often required by banks and insurance companies.
          </p>

          <h4>What to Tell Police:</h4>
          <ul>
            <li><strong>Type of fraud:</strong> Credit card fraud, identity theft, wire fraud, etc.</li>
            <li><strong>Financial impact:</strong> Total amount lost or at risk</li>
            <li><strong>Timeline of events:</strong> When fraud occurred and was discovered</li>
            <li><strong>Suspected method:</strong> How your information may have been compromised</li>
            <li><strong>Evidence:</strong> Documentation you've gathered</li>
          </ul>

          <h3>Regulatory Complaint (Financial Regulator/Anti-Fraud Centre)</h3>
          <p>
            <strong>Report to relevant regulatory authorities.</strong> These agencies track fraud patterns and can take enforcement action against bad actors.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Where to File Regulatory Complaints:</h4>
            
            <div className="space-y-4 text-yellow-700">
              <div>
                <strong>United States:</strong>
                <ul className="mt-2 space-y-1">
                  <li><strong>Federal Trade Commission:</strong> reportfraud.ftc.gov</li>
                  <li><strong>FBI Internet Crime Complaint Center:</strong> ic3.gov</li>
                  <li><strong>Consumer Financial Protection Bureau:</strong> consumerfinance.gov/complaint</li>
                  <li><strong>Federal Communications Commission:</strong> For phone/SMS fraud</li>
                </ul>
              </div>
              
              <div>
                <strong>Canada:</strong>
                <ul className="mt-2 space-y-1">
                  <li><strong>Canadian Anti-Fraud Centre:</strong> antifraudcentre-centreantifraude.ca</li>
                  <li><strong>Financial Consumer Agency of Canada:</strong> fcac-acfc.gc.ca</li>
                  <li><strong>Competition Bureau Canada:</strong> competitionbureau.gc.ca</li>
                  <li><strong>Canadian Radio-television and Telecommunications Commission:</strong> For telecom fraud</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Platform Report (Marketplace, Wallet, Payment App)</h3>
          <p>
            <strong>Report fraud to relevant platforms and apps.</strong> This helps protect other users and may aid in your case resolution.
          </p>

          <h4>Common Platforms to Report:</h4>
          <ul>
            <li><strong>PayPal:</strong> Resolution Center for transaction disputes</li>
            <li><strong>Venmo/Zelle:</strong> Report unauthorized transactions</li>
            <li><strong>Amazon/eBay:</strong> Report fraudulent sellers or transactions</li>
            <li><strong>Apple Pay/Google Pay:</strong> Report unauthorized wallet activity</li>
            <li><strong>Cryptocurrency exchanges:</strong> Report unauthorized account access</li>
          </ul>

          <h2>Follow-Up</h2>

          <h3>Get Confirmation Numbers in Writing</h3>
          <p>
            <strong>Document every interaction with confirmation numbers.</strong> These numbers are your proof that reports were filed and investigations initiated.
          </p>

          <h4>Numbers to Collect:</h4>
          <ul>
            <li><strong>Bank dispute reference numbers</strong></li>
            <li><strong>Police report case numbers</strong></li>
            <li><strong>Regulatory complaint numbers</strong></li>
            <li><strong>New account/card numbers</strong></li>
            <li><strong>Customer service case numbers</strong></li>
          </ul>

          <h3>Diary Dates for Response SLAs</h3>
          <p>
            <strong>Track deadlines and follow up proactively.</strong> Many fraud cases get delayed simply because no one follows up on missed deadlines.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Typical Response Timelines:</h4>
            
            <div className="space-y-3 text-blue-700">
              <div><strong>Bank provisional credit:</strong> 1-2 business days</div>
              <div><strong>Bank dispute investigation:</strong> 45-90 days</div>
              <div><strong>Credit bureau dispute:</strong> 30 days</div>
              <div><strong>Regulatory response:</strong> 15-30 days acknowledgment</div>
              <div><strong>Police report:</strong> Immediate case number, ongoing investigation varies</div>
            </div>
          </div>

          <h4>Follow-Up Checklist:</h4>
          <ul>
            <li><strong>Calendar reminders</strong> for expected response dates</li>
            <li><strong>Weekly check-ins</strong> during investigation periods</li>
            <li><strong>Document all communications</strong> (date, time, person, outcome)</li>
            <li><strong>Escalate</strong> if deadlines are missed</li>
          </ul>

          <h3>Escalate to Ombudsman if Deadlines Pass</h3>
          <p>
            <strong>Use regulatory escalation when institutions don't respond.</strong> Ombudsmen have authority to compel responses and can resolve disputes faster than legal action.
          </p>

          <h4>When to Escalate:</h4>
          <ul>
            <li><strong>Missed response deadlines</strong> without explanation</li>
            <li><strong>Unsatisfactory investigation outcomes</strong></li>
            <li><strong>Poor customer service</strong> or unresponsive institutions</li>
            <li><strong>Disputes over liability</strong> for fraudulent charges</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Ombudsman Contacts:</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>United States:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Consumer Financial Protection Bureau</li>
                  <li>Federal banking regulators (OCC, FDIC, Fed)</li>
                  <li>State banking commissioners</li>
                  <li>Credit union regulators (NCUA)</li>
                </ul>
              </div>
              
              <div>
                <strong>Canada:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Ombudsman for Banking Services and Investments</li>
                  <li>Financial Consumer Agency of Canada</li>
                  <li>Provincial financial services tribunals</li>
                  <li>Credit union deposit insurers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-red-800 mb-3">Time-Sensitive Protections:</h4>
            <ul className="text-red-700 space-y-2">
              <li><strong>Credit cards:</strong> Report within 60 days of statement for full protection</li>
              <li><strong>Debit cards:</strong> Report within 2 days for $50 liability limit</li>
              <li><strong>Electronic transfers:</strong> Report within 60 days of statement</li>
              <li><strong>Wire transfers:</strong> Very limited recourse - act within hours</li>
              <li><strong>Cryptocurrency:</strong> Usually no recourse - prevention is key</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Related Security Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to/how-to-recover-from-identity-theft-step-by-step" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Recover from Identity Theft Step by Step
            </Link>
            <Link href="/how-to/how-to-set-up-alerts-for-unusual-transactions" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Set Up Alerts for Unusual Transactions
            </Link>
            <Link href="/how-to/how-to-spot-investment-scams-and-ponzi-schemes" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Spot Investment Scams and Ponzi Schemes
            </Link>
            <Link href="/how-to/how-to-detect-skimmers-and-card-cloning" className="text-red-600 hover:text-red-700 hover:underline">
              → How to Detect Skimmers and Card Cloning
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How fast should I report fraud?</h3>
              <p className="text-gray-700">
                Immediately; many protections are time-limited. Credit card fraud should be reported within 60 days, debit card fraud within 2 days for full protection. The sooner you report, the better your chances of recovery.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Will I get my money back?</h3>
              <p className="text-gray-700">
                Depends on method, timing, and bank policy. Credit cards offer the strongest protection. Debit cards have time limits. Wire transfers and cryptocurrency have very limited recourse. Bank policies may provide additional protections.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I contact the merchant directly?</h3>
              <p className="text-gray-700">
                Yes, but do not delay bank disputes. Sometimes merchants can resolve issues quickly, but don't let this delay your formal fraud report. You can pursue both approaches simultaneously.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibent mb-2">What if my bank doesn't believe the charges are fraudulent?</h3>
              <p className="text-gray-700">
                Provide detailed documentation and escalate if necessary. Banks sometimes deny legitimate fraud claims. Gather evidence, get police reports, and escalate to regulators or ombudsmen if your bank is unresponsive.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I be held responsible for fraud on my accounts?</h3>
              <p className="text-gray-700">
                Generally no, if reported promptly and you weren't negligent. However, delayed reporting, sharing PINs, or gross negligence can affect your liability. Banks may investigate your role in the compromise.
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
                    "name": "How fast should I report fraud?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Immediately; many protections are time-limited. Credit card fraud should be reported within 60 days, debit card fraud within 2 days for full protection. The sooner you report, the better your chances of recovery."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will I get my money back?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Depends on method, timing, and bank policy. Credit cards offer the strongest protection. Debit cards have time limits. Wire transfers and cryptocurrency have very limited recourse. Bank policies may provide additional protections."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I contact the merchant directly?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, but do not delay bank disputes. Sometimes merchants can resolve issues quickly, but don't let this delay your formal fraud report. You can pursue both approaches simultaneously."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if my bank doesn't believe the charges are fraudulent?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Provide detailed documentation and escalate if necessary. Banks sometimes deny legitimate fraud claims. Gather evidence, get police reports, and escalate to regulators or ombudsmen if your bank is unresponsive."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I be held responsible for fraud on my accounts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Generally no, if reported promptly and you weren't negligent. However, delayed reporting, sharing PINs, or gross negligence can affect your liability. Banks may investigate your role in the compromise."
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