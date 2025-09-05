import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to File an Insurance Claim (Step-by-Step)',
  description: 'Exact steps to file auto, home, health, or life insurance claims. Documentation checklist and timeline tips to avoid delays.',
  keywords: 'how to file an insurance claim, insurance claim process, claim documentation, adjuster tips',
  openGraph: {
    title: 'How to File an Insurance Claim (Step-by-Step)',
    description: 'Complete guide to filing insurance claims with documentation checklist and timeline tips.',
    type: 'article',
  },
}

function createSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function HowToFileInsuranceClaim() {
  const faqs = [
    {
      question: "Will filing a claim increase my insurance rates?",
      answer: "It depends on the type of claim, your fault level, and your claims history. Comprehensive claims (theft, vandalism, weather) typically have less impact than at-fault collisions. Many insurers offer accident forgiveness for your first claim, but multiple claims usually increase premiums at renewal."
    },
    {
      question: "What's the deadline to file an insurance claim?",
      answer: "It varies by policy and claim type—file ASAP and confirm deadlines in writing. Most policies require 'prompt' notice (within days), while others specify 30-90 days. Late filing is a common reason for claim denials, so don't delay."
    },
    {
      question: "Should I accept the first settlement offer?",
      answer: "Not necessarily. Review the offer carefully, ensure all damage is included, and negotiate if needed. You can request a detailed breakdown of the settlement calculation and provide additional evidence if you believe the offer is too low."
    },
    {
      question: "What if my claim is denied?",
      answer: "Request the denial reason in writing, gather additional evidence, and file an internal appeal. If that fails, contact your state insurance department or consider hiring a public adjuster or attorney for complex claims."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/category/how-to" className="hover:text-blue-600">How To</Link>
            <span className="mx-2">/</span>
            <span>How to File an Insurance Claim Correctly</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
              🛡️
            </div>
            <div>
              <div className="text-sm text-cyan-600 font-medium">Insurance</div>
              <h1 className="text-3xl font-bold text-gray-900">How to File an Insurance Claim Correctly</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Filing an insurance claim properly can mean the difference between quick payment and denial. Follow these exact steps for auto, home, health, or life insurance claims, with documentation checklists and timeline tips to avoid delays and maximize your settlement.
            </p>

            <h2>Step-by-Step Claim Filing Process</h2>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Universal Claims Process (All Insurance Types)</h3>
              <ol className="space-y-2">
                <li>1. <strong>Secure safety & mitigate further damage</strong> (keep receipts)</li>
                <li>2. <strong>Review your policy:</strong> coverages, deductibles, time limits, exclusions</li>
                <li>3. <strong>Notify insurer promptly</strong> (many policies require immediate notice)</li>
                <li>4. <strong>Document everything:</strong> photos/video, police reports, itemized losses</li>
                <li>5. <strong>Provide clear statement of events:</strong> who/what/when/where</li>
                <li>6. <strong>Meet the adjuster;</strong> walk through damage and discuss scope</li>
                <li>7. <strong>Track all communications</strong> in writing; save claim number</li>
                <li>8. <strong>Approve settlement</strong> only after confirming scope; negotiate if needed</li>
                <li>9. <strong>Complete repairs/replacement</strong> and submit final invoices</li>
              </ol>
            </div>

            <h2>Step 1: Immediate Actions (First 24-48 Hours)</h2>

            <h3>Ensure Safety First</h3>

            <ul>
              <li><strong>Auto accidents:</strong> Move to safety, check for injuries, call 911 if needed</li>
              <li><strong>Home damage:</strong> Evacuate if unsafe, shut off utilities if necessary</li>
              <li><strong>Health emergencies:</strong> Get medical attention first, insurance second</li>
              <li><strong>Theft:</strong> File police report immediately</li>
            </ul>

            <h3>Mitigate Further Damage</h3>

            <p>Your policy requires you to prevent additional damage when reasonably possible:</p>

            <ul>
              <li><strong>Cover broken windows</strong> with plywood or tarps</li>
              <li><strong>Shut off water</strong> for plumbing leaks</li>
              <li><strong>Remove water</strong> to prevent mold</li>
              <li><strong>Secure the property</strong> against further theft</li>
              <li><strong>Keep receipts</strong> for emergency repairs and mitigation costs</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h4 className="font-semibold mb-2">⚠️ Important: Keep Mitigation Receipts</h4>
              <p>Most policies cover reasonable costs to prevent further damage. Save receipts for tarps, plywood, water removal, temporary repairs, and additional security measures.</p>
            </div>

            <h2>Step 2: Review Your Policy</h2>

            <p>Before calling your insurer, understand your coverage:</p>

            <h3>Key Policy Information to Find</h3>

            <ul>
              <li><strong>Coverage limits:</strong> What's the maximum payout?</li>
              <li><strong>Deductibles:</strong> What will you pay out-of-pocket?</li>
              <li><strong>Covered perils:</strong> Is this type of damage included?</li>
              <li><strong>Exclusions:</strong> What's specifically not covered?</li>
              <li><strong>Time limits:</strong> How long do you have to file?</li>
              <li><strong>Special requirements:</strong> Police reports, appraisals, etc.</li>
            </ul>

            <h2>Step 3: Contact Your Insurance Company</h2>

            <h3>When to Call</h3>

            <ul>
              <li><strong>Immediately:</strong> For major losses, injuries, or theft</li>
              <li><strong>Within 24-48 hours:</strong> For property damage</li>
              <li><strong>Before any repairs:</strong> Unless emergency mitigation</li>
            </ul>

            <h3>Information to Have Ready</h3>

            <ul>
              <li>Policy number and effective dates</li>
              <li>Date, time, and location of incident</li>
              <li>Brief description of what happened</li>
              <li>Police report number (if applicable)</li>
              <li>Contact information for other parties involved</li>
              <li>Estimated damage or loss amount</li>
            </ul>

            <h3>What the Insurer Will Tell You</h3>

            <ul>
              <li><strong>Claim number:</strong> Write this down and reference in all communications</li>
              <li><strong>Adjuster assignment:</strong> Who will handle your claim</li>
              <li><strong>Next steps:</strong> Documentation needed, inspection scheduling</li>
              <li><strong>Rental car info:</strong> For auto claims with coverage</li>
              <li><strong>Preferred repair shops:</strong> In-network options</li>
            </ul>

            <h2>Step 4: Document Everything</h2>

            <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-3">Documentation Checklist</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Visual Evidence</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Multiple angles of damage</li>
                    <li>• Close-up and wide shots</li>
                    <li>• Before damage (if available)</li>
                    <li>• Video walkthrough</li>
                    <li>• Serial numbers/model info</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Written Documentation</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Police or fire reports</li>
                    <li>• Medical records/bills</li>
                    <li>• Repair estimates</li>
                    <li>• Original receipts</li>
                    <li>• Witness statements</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>Specific Documentation by Claim Type</h3>

            <h4>Auto Accident Claims</h4>
            <ul>
              <li>Photos of all vehicles, damage, accident scene</li>
              <li>Police report number</li>
              <li>Other driver's insurance information</li>
              <li>Witness contact information</li>
              <li>Medical treatment records</li>
            </ul>

            <h4>Home Insurance Claims</h4>
            <ul>
              <li>Photos/video of damage from multiple angles</li>
              <li>Home inventory with serial numbers</li>
              <li>Purchase receipts for damaged items</li>
              <li>Contractor repair estimates</li>
              <li>Hotel receipts if displaced</li>
            </ul>

            <h4>Health Insurance Claims</h4>
            <ul>
              <li>Medical bills and treatment records</li>
              <li>Prescription receipts</li>
              <li>Explanation of Benefits (EOB) forms</li>
              <li>Provider network verification</li>
              <li>Pre-authorization documentation</li>
            </ul>

            <h2>Step 5: Working with Adjusters</h2>

            <h3>Types of Adjusters</h3>

            <ul>
              <li><strong>Staff adjusters:</strong> Employees of insurance company</li>
              <li><strong>Independent adjusters:</strong> Contractors hired by insurer</li>
              <li><strong>Public adjusters:</strong> Hired by you to represent your interests</li>
            </ul>

            <h3>The Adjuster Meeting</h3>

            <p>When the adjuster inspects your damage:</p>

            <ul>
              <li><strong>Be present:</strong> Point out all damage</li>
              <li><strong>Take notes:</strong> Record what the adjuster says and does</li>
              <li><strong>Ask questions:</strong> About coverage, process, timeline</li>
              <li><strong>Provide documentation:</strong> Give copies, keep originals</li>
              <li><strong>Don't sign anything</strong> without reading and understanding</li>
            </ul>

            <h3>What Adjusters Look For</h3>

            <ul>
              <li><strong>Cause of damage:</strong> Is it covered under your policy?</li>
              <li><strong>Extent of damage:</strong> What needs repair or replacement?</li>
              <li><strong>Pre-existing damage:</strong> What was damaged before this incident?</li>
              <li><strong>Mitigation efforts:</strong> Did you prevent further damage?</li>
              <li><strong>Policy compliance:</strong> Did you meet all requirements?</li>
            </ul>

            <h2>Step 6: Track All Communications</h2>

            <h3>Communication Log</h3>

            <p>Keep detailed records of every interaction:</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Date/Time</th>
                    <th className="px-4 py-3 text-left font-semibold">Person/Department</th>
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-left font-semibold">Summary</th>
                    <th className="px-4 py-3 text-left font-semibold">Next Steps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Jan 15, 2:30 PM</td>
                    <td className="px-4 py-3">Claims Dept</td>
                    <td className="px-4 py-3">Phone</td>
                    <td className="px-4 py-3">Filed claim #ABC123</td>
                    <td className="px-4 py-3">Adjuster will call within 48 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Written Confirmation</h3>

            <p>Follow up important phone conversations with email:</p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
              "Per our phone conversation today at 2:30 PM, I understand that my claim #ABC123 will be assigned to an adjuster within 48 hours. Please confirm if this timeline is accurate."
            </blockquote>

            <h2>Step 7: Settlement and Payment</h2>

            <h3>Understanding Settlement Offers</h3>

            <p>Your insurer will provide a settlement breakdown showing:</p>

            <ul>
              <li><strong>Actual Cash Value (ACV)</strong> or replacement cost</li>
              <li><strong>Less deductible</strong></li>
              <li><strong>Less depreciation</strong> (if ACV policy)</li>
              <li><strong>Less prior payments</strong> (rental car, etc.)</li>
            </ul>

            <h3>Replacement Cost Claims Process</h3>

            <p>For replacement cost policies, you typically receive payment in two stages:</p>

            <ol>
              <li><strong>Initial payment:</strong> Actual cash value minus deductible</li>
              <li><strong>Final payment:</strong> Remaining replacement cost after you complete repairs</li>
            </ol>

            <h3>When to Negotiate</h3>

            <p>Consider negotiating if:</p>

            <ul>
              <li>Settlement seems low compared to repair estimates</li>
              <li>Adjuster missed damage during inspection</li>
              <li>You have evidence of higher values</li>
              <li>Comparable sales/replacements cost more</li>
            </ul>

            <h2>Claim-Specific Tips</h2>

            <h3>Auto Insurance Claims</h3>

            <ul>
              <li><strong>Don't admit fault</strong> at the scene or to adjusters</li>
              <li><strong>Get multiple repair estimates</strong> if using your own shop</li>
              <li><strong>Understand total loss calculations</strong> (ACV vs. amount owed)</li>
              <li><strong>Review rental car coverage limits</strong> and time restrictions</li>
            </ul>

            <h3>Home Insurance Claims</h3>

            <ul>
              <li><strong>Don't throw away damaged items</strong> until adjuster sees them</li>
              <li><strong>Get detailed contractor estimates</strong> including labor and materials</li>
              <li><strong>Understand code upgrade coverage</strong> (ordinance and law)</li>
              <li><strong>Document additional living expenses</strong> if displaced</li>
            </ul>

            <h3>Health Insurance Claims</h3>

            <ul>
              <li><strong>Verify network providers</strong> before treatment when possible</li>
              <li><strong>Get prior authorization</strong> for expensive procedures</li>
              <li><strong>Keep copies of all bills</strong> and explanation of benefits</li>
              <li><strong>Appeal denied claims</strong> with additional medical records</li>
            </ul>

            <h2>Common Mistakes That Hurt Claims</h2>

            <ul>
              <li><strong>Late notification:</strong> Waiting too long to file</li>
              <li><strong>Inadequate documentation:</strong> Poor photos, missing receipts</li>
              <li><strong>Admitting fault:</strong> Especially in auto accidents</li>
              <li><strong>Not mitigating damage:</strong> Allowing preventable additional damage</li>
              <li><strong>Accepting first offer:</strong> Without reviewing thoroughly</li>
              <li><strong>Making unauthorized repairs:</strong> Before adjuster inspection</li>
              <li><strong>Providing recorded statements</strong> without preparation</li>
              <li><strong>Not reading settlement documents</strong> before signing</li>
            </ul>

            <h2>When to Get Professional Help</h2>

            <h3>Consider a Public Adjuster When:</h3>

            <ul>
              <li>Claim is large ($50,000+)</li>
              <li>Damage assessment seems too low</li>
              <li>Claim is complex (business interruption, etc.)</li>
              <li>You're overwhelmed by the process</li>
              <li>Initial claim was denied</li>
            </ul>

            <h3>Consider an Attorney When:</h3>

            <ul>
              <li>Claim involves serious injuries</li>
              <li>Bad faith claim handling</li>
              <li>Significant disputes over coverage</li>
              <li>Multiple denied appeals</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="font-semibold mb-2">⚠️ Beware of Claims Scams</h3>
              <ul className="space-y-2">
                <li>• Storm chasers offering "free" roof inspections</li>
                <li>• Contractors demanding full payment upfront</li>
                <li>• Public adjusters promising unrealistic settlements</li>
                <li>• Anyone asking you to file false claims</li>
                <li>• Pressure to sign contracts immediately</li>
              </ul>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
              <p>For home claims, get two contractor estimates and compare with the adjuster's scope. Ask about depreciation holdback (recoverable replacement cost value). The more documentation you provide upfront, the smoother your claim process will be.</p>
            </div>

            <h2>Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Link href="/how-to/how-to-avoid-denied-claims" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Avoid Denied Claims</h3>
                <p className="text-cyan-600 text-sm mt-2">Documentation tips that prevent insurance claim denials</p>
              </Link>
              <Link href="/how-to/how-to-shop-for-home-and-renters-insurance" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Shop for Home & Renters Insurance</h3>
                <p className="text-cyan-600 text-sm mt-2">Compare coverage options and find the right policy</p>
              </Link>
              <Link href="/how-to/how-to-lower-auto-insurance-premiums" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Lower Auto Insurance Premiums</h3>
                <p className="text-cyan-600 text-sm mt-2">17 proven ways to reduce your car insurance costs</p>
              </Link>
              <Link href="/how-to/how-to-pick-health-insurance-plans-hmo-vs-ppo" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Pick Health Insurance Plans</h3>
                <p className="text-cyan-600 text-sm mt-2">Compare HMO vs PPO vs EPO/HDHP plans</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </article>
    </div>
  )
}