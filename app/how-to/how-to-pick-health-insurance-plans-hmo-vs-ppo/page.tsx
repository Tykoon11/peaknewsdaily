import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HMO vs PPO: How to Pick the Right Health Insurance Plan',
  description: 'Compare HMO vs PPO vs EPO/HDHP plans, premiums vs out-of-pocket costs, network rules, and when HSAs make sense.',
  keywords: 'HMO vs PPO, EPO vs PPO, HDHP HSA, health insurance deductible',
  openGraph: {
    title: 'HMO vs PPO: How to Pick the Right Health Insurance Plan',
    description: 'Complete guide to choosing between HMO, PPO, EPO, and HDHP health insurance plans.',
    type: 'article',
  },
}

function createSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function HMOvsPPOHealthInsurance() {
  const faqs = [
    {
      question: "Can I use HSA funds for dental and vision expenses?",
      answer: "Yes, for qualified dental and vision expenses (U.S.). HSAs can be used for routine dental cleanings, eye exams, prescription glasses, contact lenses, and many dental and vision treatments not covered by your health plan."
    },
    {
      question: "Are out-of-network emergency visits covered at in-network rates?",
      answer: "Yes, typically at in-network rates (U.S.), but confirm with your plan. Federal law requires insurance companies to cover emergency services without requiring prior authorization, regardless of whether the hospital is in your network."
    },
    {
      question: "What happens if my doctor leaves my HMO network?",
      answer: "You'll need to choose a new PCP within the network or pay out-of-network costs. Some plans offer a grace period for ongoing treatments, but you should switch to an in-network provider as soon as reasonably possible."
    },
    {
      question: "How do I know if my medications are covered?",
      answer: "Check your plan's formulary (drug list) before enrolling. Formularies are organized into tiers with different copay levels. Generic drugs are typically tier 1 (lowest cost), while specialty drugs may be tier 4 or 5 (highest cost)."
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
            <span>How to Pick Health Insurance Plans (HMO vs PPO)</span>
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
              <h1 className="text-3xl font-bold text-gray-900">HMO vs PPO: How to Pick the Right Health Insurance Plan</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Choosing the right health insurance plan depends on your healthcare needs, budget, and preferences for provider flexibility. Compare HMO vs PPO vs EPO/HDHP plans by looking at total costs, network rules, and features like HSAs to find the best fit.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-3">Region Note: U.S. Context</h3>
              <p>This guide focuses on U.S. health insurance. In Canada, provincial health plans cover medical essentials. Canadians should evaluate supplemental benefits (dental, drugs, vision, paramedical) via employer or individual plans.</p>
            </div>

            <h2>Compare the Big 4: Health Plan Types</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Plan Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Network Rules</th>
                    <th className="px-4 py-3 text-left font-semibold">Referrals</th>
                    <th className="px-4 py-3 text-left font-semibold">Premiums</th>
                    <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">HMO</td>
                    <td className="px-4 py-3">In-network only</td>
                    <td className="px-4 py-3">PCP referrals needed</td>
                    <td className="px-4 py-3">Lowest</td>
                    <td className="px-4 py-3">Budget-conscious, routine care</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">PPO</td>
                    <td className="px-4 py-3">In + out-of-network</td>
                    <td className="px-4 py-3">No referrals</td>
                    <td className="px-4 py-3">Highest</td>
                    <td className="px-4 py-3">Flexibility, specialist access</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">EPO</td>
                    <td className="px-4 py-3">In-network only*</td>
                    <td className="px-4 py-3">No referrals</td>
                    <td className="px-4 py-3">Medium</td>
                    <td className="px-4 py-3">Specialist access, cost control</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">HDHP + HSA</td>
                    <td className="px-4 py-3">Varies by plan</td>
                    <td className="px-4 py-3">Varies by plan</td>
                    <td className="px-4 py-3">Lowest</td>
                    <td className="px-4 py-3">Healthy individuals, tax savings</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600">*EPO covers out-of-network emergencies</p>
            </div>

            <h2>HMO (Health Maintenance Organization)</h2>

            <h3>How HMOs Work</h3>
            
            <ul>
              <li><strong>Primary Care Physician (PCP):</strong> Your healthcare "gatekeeper"</li>
              <li><strong>Referrals required:</strong> PCP must refer you to specialists</li>
              <li><strong>Network restrictions:</strong> Must use in-network providers</li>
              <li><strong>Lower costs:</strong> Lowest premiums and out-of-pocket costs</li>
            </ul>

            <h3>HMO Advantages</h3>

            <ul>
              <li><strong>Predictable costs:</strong> Low copays, minimal surprise bills</li>
              <li><strong>Coordinated care:</strong> PCP manages your overall health</li>
              <li><strong>Preventive focus:</strong> Emphasis on wellness and early intervention</li>
              <li><strong>No claim forms:</strong> Direct provider billing</li>
            </ul>

            <h3>HMO Disadvantages</h3>

            <ul>
              <li><strong>Limited provider choice:</strong> Must use network doctors</li>
              <li><strong>Referral requirements:</strong> Can delay specialist access</li>
              <li><strong>Geographic restrictions:</strong> Coverage limited to service area</li>
              <li><strong>PCP dependency:</strong> Poor PCP choice affects entire experience</li>
            </ul>

            <h2>PPO (Preferred Provider Organization)</h2>

            <h3>How PPOs Work</h3>
            
            <ul>
              <li><strong>Provider flexibility:</strong> Choose any doctor, in or out-of-network</li>
              <li><strong>No referrals:</strong> Direct access to specialists</li>
              <li><strong>Two-tier pricing:</strong> Lower costs for in-network providers</li>
              <li><strong>Self-directed care:</strong> You coordinate your healthcare</li>
            </ul>

            <h3>PPO Advantages</h3>

            <ul>
              <li><strong>Maximum flexibility:</strong> See any provider without referrals</li>
              <li><strong>Out-of-network coverage:</strong> Partial coverage for out-of-network care</li>
              <li><strong>Specialist access:</strong> No PCP gatekeeping</li>
              <li><strong>Travel coverage:</strong> Can see providers nationwide</li>
            </ul>

            <h3>PPO Disadvantages</h3>

            <ul>
              <li><strong>Higher costs:</strong> Highest premiums and deductibles</li>
              <li><strong>Complex billing:</strong> May involve claim forms and reimbursement</li>
              <li><strong>Coordination burden:</strong> You manage care coordination</li>
              <li><strong>Surprise billing risk:</strong> Out-of-network providers may balance bill</li>
            </ul>

            <h2>EPO (Exclusive Provider Organization)</h2>

            <h3>How EPOs Work</h3>
            
            <p>EPOs combine elements of HMOs and PPOs:</p>

            <ul>
              <li><strong>Network-only coverage:</strong> Like HMO, but no PCP required</li>
              <li><strong>No referrals needed:</strong> Direct specialist access like PPO</li>
              <li><strong>Emergency exception:</strong> Out-of-network emergencies covered</li>
              <li><strong>Moderate pricing:</strong> Between HMO and PPO costs</li>
            </ul>

            <h3>EPO Best For</h3>

            <ul>
              <li>Want specialist access without referrals</li>
              <li>Comfortable staying in-network</li>
              <li>Seeking cost savings versus PPO</li>
              <li>Don't travel frequently for healthcare</li>
            </ul>

            <h2>HDHP + HSA (High Deductible Health Plan + Health Savings Account)</h2>

            <h3>How HDHPs Work</h3>
            
            <ul>
              <li><strong>High deductibles:</strong> $1,600+ individual, $3,200+ family (2024)</li>
              <li><strong>Lower premiums:</strong> Significant savings on monthly costs</li>
              <li><strong>HSA eligible:</strong> Triple tax advantage savings account</li>
              <li><strong>Catastrophic coverage:</strong> Protects against major medical expenses</li>
            </ul>

            <h3>HSA Triple Tax Advantage</h3>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h4 className="font-semibold text-green-800 mb-3">HSA Tax Benefits</h4>
              <ul className="text-green-700 space-y-2">
                <li>• <strong>Tax-deductible contributions:</strong> Reduce current year taxes</li>
                <li>• <strong>Tax-free growth:</strong> Earnings grow without taxation</li>
                <li>• <strong>Tax-free withdrawals:</strong> For qualified medical expenses</li>
                <li>• <strong>Retirement account:</strong> After age 65, use for any purpose</li>
              </ul>
              <p className="text-green-600 text-sm mt-3">
                2024 HSA limits: $4,300 individual, $8,550 family (+$1,000 catch-up if 55+)
              </p>
            </div>

            <h2>Decision Drivers: How to Choose</h2>

            <h3>Calculate Total Annual Cost</h3>

            <p>Don't just compare premiums—estimate your total healthcare spending:</p>

            <div class="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <h4 className="font-semibold mb-2">Total Cost Formula</h4>
              <p className="font-mono text-center">
                <strong>Annual Cost = </strong><br/>
                Premiums + Expected Deductible + Copays/Coinsurance + Prescription Costs
              </p>
            </div>

            <h3>Scenario Planning</h3>

            <p>Run calculations for different usage scenarios:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Low Usage Year</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• Annual physical</li>
                  <li>• Preventive screenings</li>
                  <li>• Routine prescriptions</li>
                  <li>• Maybe 1-2 urgent care visits</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">High Usage Year</h4>
                <ul className="text-orange-700 space-y-2">
                  <li>• Surgery or hospitalization</li>
                  <li>• Chronic condition management</li>
                  <li>• Multiple specialist visits</li>
                  <li>• Expensive medications</li>
                </ul>
              </div>
            </div>

            <h3>Provider Network Considerations</h3>

            <ul>
              <li><strong>Current doctors:</strong> Are they in the plan's network?</li>
              <li><strong>Preferred hospitals:</strong> Major medical centers included?</li>
              <li><strong>Specialist availability:</strong> Easy access to needed specialists?</li>
              <li><strong>Geographic coverage:</strong> Network size in your area?</li>
            </ul>

            <h3>Prescription Drug Coverage</h3>

            <ul>
              <li><strong>Formulary check:</strong> Are your medications covered?</li>
              <li><strong>Tier structure:</strong> What will you pay for each drug?</li>
              <li><strong>Prior authorization:</strong> Any medications require approval?</li>
              <li><strong>Specialty drugs:</strong> Coverage for expensive treatments?</li>
            </ul>

            <h2>Special Considerations</h2>

            <h3>Chronic Conditions</h3>

            <p>If you have ongoing health issues:</p>

            <ul>
              <li><strong>PPO might be best:</strong> Easier specialist access</li>
              <li><strong>Check medication coverage:</strong> Ensure drugs are on formulary</li>
              <li><strong>Calculate high-usage costs:</strong> You'll likely hit deductibles</li>
              <li><strong>Consider provider stability:</strong> Can you keep your current team?</li>
            </ul>

            <h3>Family Planning</h3>

            <ul>
              <li><strong>Maternity coverage:</strong> All ACA plans cover pregnancy</li>
              <li><strong>Pediatric networks:</strong> Good children's hospital access?</li>
              <li><strong>Family deductibles:</strong> How quickly will you meet them?</li>
            </ul>

            <h3>Frequent Travelers</h3>

            <ul>
              <li><strong>PPO preferred:</strong> Best out-of-area coverage</li>
              <li><strong>National networks:</strong> Large insurer advantage</li>
              <li><strong>Emergency coverage:</strong> All plans cover true emergencies</li>
            </ul>

            <h2>HSA Strategy for HDHP Plans</h2>

            <h3>Maximizing HSA Benefits</h3>

            <ul>
              <li><strong>Contribute maximum:</strong> Use it or lose it doesn't apply</li>
              <li><strong>Invest long-term:</strong> HSAs can be retirement accounts</li>
              <li><strong>Pay out-of-pocket when possible:</strong> Let HSA grow</li>
              <li><strong>Keep receipts:</strong> Reimburse yourself later tax-free</li>
            </ul>

            <h3>HSA Investment Options</h3>

            <ul>
              <li><strong>Cash savings:</strong> For immediate medical needs</li>
              <li><strong>Conservative investments:</strong> CDs, money market for medium-term</li>
              <li><strong>Stock/bond funds:</strong> Long-term growth potential</li>
            </ul>

            <h2>Enrollment Timing and Changes</h2>

            <h3>Open Enrollment</h3>

            <ul>
              <li><strong>Annual period:</strong> Usually November-December</li>
              <li><strong>Review annually:</strong> Plans and needs change</li>
              <li><strong>Compare total costs:</strong> Don't just roll over existing plan</li>
            </ul>

            <h3>Qualifying Life Events</h3>

            <p>You can change plans mid-year for:</p>

            <ul>
              <li>Marriage, divorce, or legal separation</li>
              <li>Birth or adoption of a child</li>
              <li>Loss of other coverage</li>
              <li>Significant income changes</li>
              <li>Moving to a new area</li>
            </ul>

            <h2>Red Flags to Avoid</h2>

            <ul>
              <li><strong>Choosing by premium only:</strong> Ignoring deductibles and networks</li>
              <li><strong>Not checking drug coverage:</strong> Expensive surprise at pharmacy</li>
              <li><strong>Assuming coverage:</strong> Verify your doctors are in-network</li>
              <li><strong>Ignoring out-of-pocket maximums:</strong> Your true worst-case cost</li>
              <li><strong>Not understanding referral rules:</strong> Unexpected denials</li>
            </ul>

            <h2>Canadian Health Insurance Considerations</h2>

            <p>For Canadian readers, focus on supplemental coverage:</p>

            <h3>Common Supplemental Benefits</h3>

            <ul>
              <li><strong>Dental:</strong> Cleanings, procedures, orthodontics</li>
              <li><strong>Vision:</strong> Eye exams, glasses, contact lenses</li>
              <li><strong>Prescription drugs:</strong> Coverage varies by province</li>
              <li><strong>Paramedical:</strong> Physiotherapy, chiropractic, massage</li>
              <li><strong>Mental health:</strong> Counseling, therapy services</li>
            </ul>

            <h3>Coverage Sources</h3>

            <ul>
              <li><strong>Employer plans:</strong> Most common and comprehensive</li>
              <li><strong>Individual plans:</strong> For self-employed or uncovered workers</li>
              <li><strong>Association plans:</strong> Through professional organizations</li>
              <li><strong>Travel insurance:</strong> For international coverage</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
              <p>Do a scenario test: routine year vs high-usage year. Pick the plan with the best worst-case total cost, not just the lowest premium. Healthcare costs are unpredictable, so protect against catastrophic expenses.</p>
            </div>

            <h2>Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Link href="/how-to/how-to-file-an-insurance-claim-correctly" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">File an Insurance Claim Correctly</h3>
                <p className="text-cyan-600 text-sm mt-2">Step-by-step process for health insurance claims</p>
              </Link>
              <Link href="/how-to/how-to-avoid-denied-claims" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Avoid Denied Claims</h3>
                <p className="text-cyan-600 text-sm mt-2">Documentation tips for health insurance claims</p>
              </Link>
              <Link href="/how-to/how-to-choose-disability-insurance-own-occ-vs-any-occ" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Choose Disability Insurance</h3>
                <p className="text-cyan-600 text-sm mt-2">Protect your income with the right disability coverage</p>
              </Link>
              <Link href="/how-to/how-to-bundle-policies-for-discounts" 
                    className="block p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-cyan-800">Bundle Policies for Discounts</h3>
                <p className="text-cyan-600 text-sm mt-2">Save money by combining your insurance policies</p>
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