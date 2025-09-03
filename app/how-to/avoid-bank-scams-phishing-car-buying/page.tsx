import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bank Scams & Phishing: Protect Your Car Budget',
  description: 'Don\'t lose your down payment. Spot fake lender emails, wire fraud, check scams, and dealership phishing with this fast checklist and reporting steps.',
}

export default function AvoidBankScamsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Car Buying Scams</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            🛡️
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">Keep your car money safe: spot scams before they hit</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Protect your down payment, financing, and personal information from increasingly sophisticated scams.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Common attacks targeting car buyers</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3">Why Car Buyers Are Prime Targets</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>Large transactions:</strong> $20K+ purchases attract scammers</p>
            <p><strong>Time pressure:</strong> Buyers rush due to financing deadlines</p>
            <p><strong>Complex process:</strong> Multiple parties create confusion</p>
            <p><strong>Personal info:</strong> Credit apps expose SSN, income, address</p>
          </div>
        </div>

        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Fake Lender Email Scam</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>The setup:</strong> "Your loan is approved! Send $2,500 down payment to secure funding."</p>
              <p><strong>Red flags:</strong> Unsolicited approval, requests money upfront, poor grammar</p>
              <p><strong>Reality:</strong> Legitimate lenders never ask for money via email</p>
              <p><strong>Protection:</strong> Only work with lenders YOU contacted, verify by phone</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Overpayment Check Scam</h3>
            <div className="text-orange-700 space-y-2">
              <p><strong>The setup:</strong> "I'll pay $5K extra, please wire the difference to my shipper."</p>
              <p><strong>Red flags:</strong> Overpayment, urgency, overseas shipping, wire transfers</p>
              <p><strong>Reality:</strong> Check bounces after you've sent the "extra" money</p>
              <p><strong>Protection:</strong> Never accept overpayment, verified funds only</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Wire Fraud</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>The setup:</strong> "Last-minute change: wire your down payment to this new account."</p>
              <p><strong>Red flags:</strong> Changed wiring instructions, email requests, urgent timing</p>
              <p><strong>Reality:</strong> Criminals intercept emails and redirect payments</p>
              <p><strong>Protection:</strong> Verify ALL wire instructions by phone using known numbers</p>
            </div>
          </div>
        </div>

        <h2>Red flags: urgency, gift cards, URL lookalikes</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Universal Scam Warning Signs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">🚨 Immediate Red Flags</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Requests for gift cards or crypto</li>
                <li>• Pressure to "act now" or "limited time"</li>
                <li>• Unsolicited contact about loans/approvals</li>
                <li>• Grammar/spelling errors in professional emails</li>
                <li>• Requests to click links in emails</li>
                <li>• URLs that don't match the claimed company</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Proceed with Caution</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Unusually low APR offers via email</li>
                <li>• Requests for SSN over email or text</li>
                <li>• "Guarantee approval" promises</li>
                <li>• Dealer asking for remote access to computer</li>
                <li>• Email addresses that don't match domain</li>
                <li>• Phone numbers that go to voicemail only</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">URL Spoofing Examples</h3>
          <div className="text-indigo-700 space-y-3">
            <p><strong>Legitimate:</strong> chase.com, wellsfargo.com, bankofamerica.com</p>
            <p><strong>Fake:</strong> chase-bank.com, wellsfargo-auto.com, bankofamericaloans.com</p>
            <p><strong>Subtle fakes:</strong> chasė.com (foreign character), we11sfargo.com (1 instead of l)</p>
            <p><strong>Protection:</strong> Type URLs directly, bookmark legitimate sites, check for HTTPS</p>
          </div>
        </div>

        <h2>Verification drills</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">The Phone-Back Rule</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Never trust the number in suspicious emails/texts</strong></p>
            <p><strong>Look up the official number:</strong> Google the company, check your statements</p>
            <p><strong>Call and verify:</strong> "Did you just send me an email about [topic]?"</p>
            <p><strong>Ask for details:</strong> Legitimate companies can verify your account info</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Two-Factor Authentication Setup</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Enable 2FA on:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Bank accounts and credit cards</li>
                <li>• Email accounts (Gmail, Outlook)</li>
                <li>• Credit monitoring services</li>
                <li>• Loan servicer websites</li>
                <li>• Any account with financial data</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">2FA Options (Best to Worst):</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>1. Hardware keys (YubiKey)</li>
                <li>2. Authenticator apps (Google, Authy)</li>
                <li>3. SMS codes (better than nothing)</li>
                <li>4. Email codes (weakest option)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Safer payments</h2>
        <div className="bg-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">In-Branch Transaction Benefits</h3>
          <div className="text-purple-700 space-y-3">
            <p><strong>Security cameras:</strong> Physical evidence of legitimate transactions</p>
            <p><strong>ID verification:</strong> Tellers verify identity and funds in real-time</p>
            <p><strong>Paper trail:</strong> Official bank receipts and documentation</p>
            <p><strong>Immediate confirmation:</strong> No waiting to see if funds clear</p>
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Safe Payment Methods (Ranked)</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">✅ Safest Options</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Cash verified at bank branch</li>
                <li>• Cashier's check verified at issuing bank</li>
                <li>• Certified bank draft from buyer's bank</li>
                <li>• Wire transfer initiated from your bank</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Proceed with Caution</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Money orders (easily counterfeited)</li>
                <li>• Personal checks (can bounce)</li>
                <li>• Zelle/Venmo between strangers</li>
                <li>• Cryptocurrency (irreversible)</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-800 mb-2">❌ Never Accept</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Gift cards or prepaid cards</li>
                <li>• "Overpayment" with refund request</li>
                <li>• Payment methods you're unfamiliar with</li>
                <li>• Any payment contingent on you sending money first</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Escrow services for high-value deals</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">When to Use Escrow</h3>
          <div className="text-indigo-700 space-y-2">
            <p><strong>High-value cars:</strong> Transactions over $30,000</p>
            <p><strong>Out-of-state deals:</strong> Can't meet in person</p>
            <p><strong>Collector vehicles:</strong> Rare or specialty cars</p>
            <p><strong>Mutual protection:</strong> Both buyer and seller want security</p>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Legitimate Escrow Companies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Reputable Services</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Escrow.com (most popular)</li>
                <li>• Cars.com Escrow Service</li>
                <li>• Local title companies</li>
                <li>• Attorney escrow accounts</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Verification Steps</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Check Better Business Bureau rating</li>
                <li>• Verify state licensing</li>
                <li>• Read customer reviews</li>
                <li>• Confirm insurance coverage</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>If you slipped up: freeze, report, recover</h2>
        <div className="bg-red-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Immediate Action Checklist</h3>
          <div className="text-red-700 space-y-3">
            <p><strong>First 30 minutes:</strong></p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• Contact your bank/credit card company immediately</li>
              <li>• Change all online banking passwords</li>
              <li>• Enable account alerts and notifications</li>
              <li>• Document what happened (screenshots, emails)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Credit Protection Steps</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>Freeze your credit:</strong> Contact all three bureaus (Experian, Equifax, TransUnion)</p>
              <p><strong>Place fraud alerts:</strong> 90-day initial alert, 7-year extended alert available</p>
              <p><strong>Monitor accounts:</strong> Check statements daily for unauthorized activity</p>
              <p><strong>Review credit reports:</strong> Look for new accounts you didn't open</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Reporting Requirements</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Bank fraud department:</strong> Report within 2 business days for maximum protection</p>
              <p><strong>FTC (IdentityTheft.gov):</strong> Official government reporting site</p>
              <p><strong>FBI IC3.gov:</strong> For internet-related crimes</p>
              <p><strong>Local police:</strong> File report for insurance/employer documentation</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Recovery Process</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>Bank dispute process:</strong> Fill out affidavit, provide documentation</p>
              <p><strong>Federal protections:</strong> Regulation E limits liability for electronic transfers</p>
              <p><strong>Time limits:</strong> Report unauthorized transfers within 60 days</p>
              <p><strong>Keep records:</strong> Save all correspondence with banks and agencies</p>
            </div>
          </div>
        </div>

        <h2>Dealer-specific scams</h2>
        <div className="bg-orange-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Fake Finance Office Emails</h3>
          <div className="text-orange-700 space-y-3">
            <p><strong>The scam:</strong> Email claiming to be from dealer's finance office with "updated payment instructions"</p>
            <p><strong>Red flags:</strong> Different account numbers, urgent timing, external email addresses</p>
            <p><strong>Reality:</strong> Criminals intercept dealer communications</p>
            <p><strong>Protection:</strong> Call the finance manager directly using the number from your contract</p>
          </div>
        </div>

        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Verification Script for Changed Instructions</h3>
          <div className="bg-white p-4 rounded border text-gray-700">
            <p className="mb-3">"Hi, this is [your name]. I just received an email about changed payment instructions for my car purchase. Can you verify:</p>
            <ul className="mb-3 text-sm">
              <li>• Did your finance office send me an email today?</li>
              <li>• Are the payment instructions different from our original agreement?</li>
              <li>• What account should I actually send payment to?</li>
              <li>• Can you confirm these details match what's in my contract?</li>
            </ul>
            <p>I want to make sure this is legitimate before I send any money."</p>
          </div>
        </div>

        <h2>Technology safety tips</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Secure Browsing Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Safe Habits</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Type URLs directly into browser</li>
                <li>• Bookmark legitimate bank websites</li>
                <li>• Look for HTTPS (lock icon)</li>
                <li>• Log out of financial sites completely</li>
                <li>• Use private/incognito mode on shared computers</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Avoid These</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Clicking links in emails</li>
                <li>• Downloading attachments from unknown senders</li>
                <li>• Using public Wi-Fi for banking</li>
                <li>• Saving passwords in browsers</li>
                <li>• Accessing accounts on shared computers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are cashier's checks safe?</h3>
              <p className="text-gray-700">Only if verified at the issuing bank. Fake cashier's checks are common in car scams. Never accept one without going to the bank branch together to verify.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a safe escrow service?</h3>
              <p className="text-gray-700">Escrow.com is the most reputable for car transactions. Avoid any escrow service suggested by the other party—scammers often create fake escrow sites.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I verify wiring instructions?</h3>
              <p className="text-gray-700">Call the recipient using a phone number you independently verified (not from the email). Ask them to verbally confirm the routing and account numbers.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if a dealer emails me new payment info?</h3>
              <p className="text-gray-700">Never trust payment changes via email. Call the dealer's finance office using the number from your original contract to verify before sending any money.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/get-out-of-bad-car-loan" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Bad Car Loan Exit</h3>
              <p className="text-sm text-indigo-700 mt-1">Escape high payments safely</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/car-affordability-calculator-rules" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Car Affordability Rules →</h3>
              <p className="text-sm text-green-700 mt-1">How much car can you afford?</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}