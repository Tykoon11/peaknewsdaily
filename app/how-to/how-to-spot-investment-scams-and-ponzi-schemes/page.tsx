import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Spot Investment Scams & Ponzi Schemes (Red Flags)',
  description: 'Learn the classic red flags of investment scams and Ponzi schemes, how to verify offers, and what to do if you\'ve been targeted.',
}

export default function SpotInvestmentScamsAndPonziSchemes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 text-sm font-medium">
          ← Back to How-To Guides
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Spot Investment Scams & Ponzi Schemes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn the classic red flags of investment scams and Ponzi schemes, how to verify offers, and what to do if you've been targeted.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Quick Warning Signs</h2>
            <p className="text-red-700 mb-0">
              Investment scams promise high returns with little risk, pressure you to act fast, and avoid independent verification. Always verify licensing, demand audited statements, and never invest money you can't independently validate.
            </p>
          </div>

          <h2>Red Flags You Shouldn't Ignore</h2>

          <h3>Guaranteed Returns / No Risk</h3>
          <p>
            <strong>All legitimate investments carry risk.</strong> When someone promises guaranteed returns or claims there's no risk, they're lying. Even government bonds have inflation and interest rate risk.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Common "Guarantee" Red Flags:</h4>
            <ul className="space-y-2">
              <li><strong>"Risk-free returns of 20%+ annually"</strong> - Impossible in legitimate markets</li>
              <li><strong>"Guaranteed profits in any market condition"</strong> - No strategy works 100% of the time</li>
              <li><strong>"Government-backed" without proper documentation</strong> - Verify with official sources</li>
              <li><strong>"Protected principal with unlimited upside"</strong> - Violates basic financial principles</li>
            </ul>
          </div>

          <h3>Pressure Tactics: "Limited Spots," "Act Today"</h3>
          <p>
            <strong>Legitimate investments don't disappear overnight.</strong> Scammers use artificial urgency to prevent you from doing proper research or consulting with others.
          </p>

          <h4>High-Pressure Warning Signs:</h4>
          <ul>
            <li><strong>"This offer expires tonight"</strong> - Real investments have proper offering periods</li>
            <li><strong>"Only accepting 10 more investors"</strong> - False scarcity tactics</li>
            <li><strong>"You must decide now or miss out forever"</strong> - Preventing due diligence</li>
            <li><strong>"Don't tell anyone about this opportunity"</strong> - Legitimate investments are openly marketed</li>
          </ul>

          <h3>Complex or Secret Strategies You're Not Allowed to Understand</h3>
          <p>
            <strong>If you can't understand the investment, don't invest.</strong> Scammers use complexity to hide the fact that there's no real investment strategy.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Strategy Red Flags:</h4>
            <ul className="text-yellow-700 space-y-2">
              <li><strong>"Proprietary algorithm"</strong> without explanation of basic principles</li>
              <li><strong>"Secret trading method"</strong> that can't be disclosed</li>
              <li><strong>"Government contracts"</strong> without verifiable documentation</li>
              <li><strong>"Crypto arbitrage"</strong> with vague explanations</li>
              <li><strong>"AI trading system"</strong> that's supposedly infallible</li>
            </ul>
          </div>

          <h3>Unregistered Sellers or Products</h3>
          <p>
            <strong>Always verify registration with your national securities regulator.</strong> In the US, check FINRA BrokerCheck and SEC records. In Canada, use CSA resources.
          </p>

          <h4>What to Verify:</h4>
          <ul>
            <li><strong>Advisor registration:</strong> Licensed to sell securities in your jurisdiction</li>
            <li><strong>Product registration:</strong> Investment product is properly filed</li>
            <li><strong>Company registration:</strong> Business is legally incorporated and compliant</li>
            <li><strong>Track record:</strong> Verified performance history (not testimonials)</li>
          </ul>

          <h3>No Third-Party Custodian (Money Goes Straight to Promoter)</h3>
          <p>
            <strong>Legitimate investments use independent custodians.</strong> Your money should never go directly to the person selling the investment.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Custody Red Flags:</h4>
            <ul className="text-blue-700 space-y-2">
              <li>Checks made out to the salesperson personally</li>
              <li>Wire transfers to personal bank accounts</li>
              <li>Cash or cryptocurrency payments only</li>
              <li>No independent statement provider</li>
              <li>Cannot verify holdings with third party</li>
            </ul>
          </div>

          <h3>Returns Are Unusually Smooth Month After Month</h3>
          <p>
            <strong>Real investments have volatility.</strong> Ponzi schemes often show impossibly consistent returns because they're not actually investing your money.
          </p>

          <h4>Suspicious Return Patterns:</h4>
          <ul>
            <li><strong>Exactly 1% every month</strong> regardless of market conditions</li>
            <li><strong>Never a down month</strong> over multiple years</li>
            <li><strong>Returns uncorrelated with claimed strategy</strong> (e.g., "stock trading" that never goes down)</li>
            <li><strong>Performance too good to be true</strong> compared to market benchmarks</li>
          </ul>

          <h3>Affinity Angle: Using Shared Community/Identity to Build Trust</h3>
          <p>
            <strong>Scammers exploit trust within communities.</strong> They target religious groups, ethnic communities, professional associations, or social clubs.
          </p>

          <h4>How Affinity Scams Work:</h4>
          <ul>
            <li><strong>Join respected community groups</strong> to build credibility</li>
            <li><strong>Use shared identity</strong> to lower skepticism</li>
            <li><strong>Recruit community leaders</strong> as unwitting promoters</li>
            <li><strong>Exploit trust networks</strong> for rapid expansion</li>
          </ul>

          <h2>How to Verify Before You Invest</h2>

          <h3>Check Registration: Look up the Advisor and Firm</h3>
          <p>
            <strong>Always verify credentials with your national securities regulator.</strong> This is your first and most important step.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-3">Verification Resources:</h4>
            
            <div className="space-y-4">
              <div>
                <strong className="text-green-800">United States:</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li>FINRA BrokerCheck (brokercheck.finra.org)</li>
                  <li>SEC Investment Adviser Search (adviserinfo.sec.gov)</li>
                  <li>State securities regulators (nasaa.org)</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-green-800">Canada:</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li>Canadian Securities Administrators (securities-administrators.ca)</li>
                  <li>IIROC Advisor Report (iiroc.ca)</li>
                  <li>Provincial securities commissions</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Validate Custody: Ensure Funds Sit with a Reputable, Third-Party Custodian</h3>
          <p>
            <strong>Your money should be held by an independent, regulated custodian.</strong> You should receive statements directly from the custodian, not just the investment adviser.
          </p>

          <h4>Reputable Custodians Include:</h4>
          <ul>
            <li><strong>Major banks:</strong> JPMorgan Chase, Bank of America, Wells Fargo</li>
            <li><strong>Specialist custodians:</strong> Charles Schwab, Fidelity, Vanguard</li>
            <li><strong>Prime brokers:</strong> Goldman Sachs, Morgan Stanley, UBS</li>
            <li><strong>Independent custodians:</strong> BNY Mellon, State Street, Northern Trust</li>
          </ul>

          <h3>Demand Documentation: Audited Financials, Prospectus/Offering Memorandum</h3>
          <p>
            <strong>Professional investments come with professional documentation.</strong> If they can't provide proper legal documents, walk away.
          </p>

          <h4>Required Documents:</h4>
          <ul>
            <li><strong>Audited financial statements</strong> by a recognized accounting firm</li>
            <li><strong>Prospectus or offering memorandum</strong> with complete risk disclosures</li>
            <li><strong>Legal opinions</strong> confirming structure and compliance</li>
            <li><strong>Performance track record</strong> verified by independent sources</li>
          </ul>

          <h3>Search Complaints/News: Look for Enforcement Actions or Investor Alerts</h3>
          <p>
            <strong>Research the people and companies involved.</strong> Check for regulatory actions, lawsuits, or negative news coverage.
          </p>

          <h4>What to Search For:</h4>
          <ul>
            <li><strong>SEC enforcement actions</strong> against the adviser or firm</li>
            <li><strong>FINRA disciplinary history</strong> and customer complaints</li>
            <li><strong>Court records</strong> for civil or criminal cases</li>
            <li><strong>News articles</strong> about the investment or promoters</li>
            <li><strong>Better Business Bureau complaints</strong> and ratings</li>
          </ul>

          <h3>Start Tiny: If You Proceed at All, Begin with Money You Can Afford to Lose</h3>
          <p>
            <strong>Even after due diligence, start small.</strong> Invest only what you can afford to lose completely, and never put all your money with one adviser.
          </p>

          <h3>Get a Second Opinion: Independent Advisor or Accountant</h3>
          <p>
            <strong>Consult with a fee-only financial planner or CPA.</strong> They can provide objective analysis without any sales motivation.
          </p>

          <h2>If You Think It's a Scam</h2>

          <h3>Stop Sending Money Immediately</h3>
          <p>
            <strong>Cut off all financial ties right away.</strong> Don't send another dollar, even if they claim you need to "complete the transaction" or "pay fees to withdraw."
          </p>

          <h3>Document Everything: Emails, Pitch Decks, Bank Transfers</h3>
          <p>
            <strong>Preserve all evidence for authorities and potential recovery.</strong> Save everything in multiple formats and locations.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Evidence to Collect:</h4>
            <ul className="space-y-2">
              <li><strong>All written communications</strong> (emails, texts, letters)</li>
              <li><strong>Marketing materials</strong> (brochures, presentations, websites)</li>
              <li><strong>Financial records</strong> (bank transfers, check copies, statements)</li>
              <li><strong>Audio recordings</strong> if legally allowed in your jurisdiction</li>
              <li><strong>Contact information</strong> for all involved parties</li>
            </ul>
          </div>

          <h3>Report to Your Securities Regulator and Local Law Enforcement</h3>
          <p>
            <strong>Report immediately to help stop the scam and potentially aid recovery.</strong> The sooner authorities are notified, the better chance of stopping the scheme.
          </p>

          <h4>Where to Report:</h4>
          <ul>
            <li><strong>SEC Office of Investor Education and Advocacy</strong> (investor.gov)</li>
            <li><strong>FINRA Investor Complaint Center</strong> (finra.org/investors)</li>
            <li><strong>FBI Internet Crime Complaint Center</strong> (ic3.gov)</li>
            <li><strong>State securities regulator</strong> in your state</li>
            <li><strong>Local police</strong> for criminal fraud reporting</li>
          </ul>

          <h3>Alert Your Bank to Try to Halt or Recall Transfers</h3>
          <p>
            <strong>Contact your bank immediately to report fraud.</strong> They may be able to stop pending transfers or help with recovery efforts.
          </p>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-red-800 mb-3">Important Recovery Notes:</h4>
            <ul className="text-red-700 space-y-2">
              <li><strong>Time is critical</strong> - report within hours if possible</li>
              <li><strong>Don't pay "recovery fees"</strong> - these are follow-up scams</li>
              <li><strong>Beware of fake lawyers</strong> offering to help recover funds</li>
              <li><strong>Recovery is often impossible</strong> - prevention is key</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Related Security Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to/how-to-report-fraud-to-your-bank-and-authorities" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Report Fraud to Your Bank and Authorities
            </Link>
            <Link href="/how-to/how-to-recover-from-identity-theft-step-by-step" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Recover from Identity Theft Step by Step
            </Link>
            <Link href="/how-to/how-to-verify-crypto-projects-and-smart-contracts" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Verify Crypto Projects and Smart Contracts
            </Link>
            <Link href="/how-to/how-to-create-a-financial-emergency-plan" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Create a Financial Emergency Plan
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Are guaranteed returns always a scam?</h3>
              <p className="text-gray-700">
                Essentially yes—legitimate investments carry risk. Even FDIC-insured bank accounts have inflation risk. Anyone promising guaranteed high returns is either lying or doesn't understand risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Is a celebrity endorsement proof of legitimacy?</h3>
              <p className="text-gray-700">
                No; endorsements are often paid and not due diligence. Celebrities are frequently victims of scams themselves or paid to promote investments they don't understand. Always verify independently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What about "exclusive pre-IPO deals"?</h3>
              <p className="text-gray-700">
                Treat with extreme caution; verify filings and custody. Real pre-IPO investments are heavily regulated, require accredited investor status, and use proper legal documentation. Most "pre-IPO" offers are scams.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibent mb-2">How can I tell if returns are too good to be true?</h3>
              <p className="text-gray-700">
                Compare to market benchmarks and consider risk. If someone claims to consistently beat the market with "low risk," be extremely skeptical. Even the best hedge funds have down years.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What should I do if a friend or family member is promoting an investment?</h3>
              <p className="text-gray-700">
                Verify independently regardless of who's promoting it. Affinity fraud is common—scammers specifically target trusted community members to spread their schemes. Your friend may be a victim too.
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
                    "name": "Are guaranteed returns always a scam?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Essentially yes—legitimate investments carry risk. Even FDIC-insured bank accounts have inflation risk. Anyone promising guaranteed high returns is either lying or doesn't understand risk."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is a celebrity endorsement proof of legitimacy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No; endorsements are often paid and not due diligence. Celebrities are frequently victims of scams themselves or paid to promote investments they don't understand. Always verify independently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What about exclusive pre-IPO deals?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Treat with extreme caution; verify filings and custody. Real pre-IPO investments are heavily regulated, require accredited investor status, and use proper legal documentation. Most 'pre-IPO' offers are scams."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I tell if returns are too good to be true?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Compare to market benchmarks and consider risk. If someone claims to consistently beat the market with 'low risk,' be extremely skeptical. Even the best hedge funds have down years."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What should I do if a friend or family member is promoting an investment?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Verify independently regardless of who's promoting it. Affinity fraud is common—scammers specifically target trusted community members to spread their schemes. Your friend may be a victim too."
                    }
                  }
                ]
              })
            }}
          />
        </section>
      </article>
    </div>
  )
}