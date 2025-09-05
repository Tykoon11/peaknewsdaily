import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Price Freelance Services: Hourly, Fixed, or Value-Based',
  description: 'Learn formulas to set your floor rate, when to use hourly vs fixed pricing, and how to quote value-based projects with confidence.',
}

export default function HowToPriceFreelanceServices() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Price Freelance Services</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💰
          </div>
          <span className="text-pink-600 font-medium">Side Hustles & Income</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Price Freelance Services: Hourly, Fixed, or Value-Based
        </h1>
        <p className="text-xl text-gray-600">
          Learn formulas to set your floor rate, when to use hourly vs fixed pricing, and how to quote value-based projects with confidence.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">⚖️ Pricing Strategy Formula</h3>
          <p className="text-pink-700">
            Set your floor rate based on target income + costs + taxes ÷ billable hours. Use hourly for unclear scope, fixed for defined deliverables, value-based for measurable business outcomes. Price on value, not time.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Pricing Determines Your Success and Lifestyle</h3>
          <p className="mb-4">
            Underpricing traps you in endless work cycles with difficult clients. Overpricing with poor value communication kills sales. The right pricing strategy maximizes both income and client satisfaction while building a sustainable business.
          </p>
          <p>
            This guide teaches you to calculate your true costs, choose the right pricing model for each situation, and present prices that clients accept confidently.
          </p>
        </div>

        <h2>Set Your Floor Rate (Never Go Below This)</h2>

        <p>Your floor rate is the absolute minimum you can charge and still maintain your target lifestyle and business sustainability.</p>

        <h3>Floor Rate Calculation Formula</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-4">Floor Rate = (Target Annual Pay + Annual Business Costs + Taxes) ÷ Billable Hours</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Example Calculation:</p>
              <p>Target annual pay: $75,000</p>
              <p>Business costs: $15,000 (software, equipment, marketing)</p>
              <p>Taxes (25-35%): $22,500</p>
              <p>Total needed: $112,500</p>
              <p>Billable hours: 1,200 (25 hrs/week × 48 weeks)</p>
              <p className="font-semibold text-green-800"><strong>Floor rate: $94/hour</strong></p>
            </div>
          </div>
        </div>

        <h3>Realistic Billable Hours Estimation</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-3">Time Breakdown (40hr/week)</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• Billable client work: 20-25 hours</li>
              <li>• Business development: 8-10 hours</li>
              <li>• Administration: 5-7 hours</li>
              <li>• Learning/professional development: 3-5 hours</li>
              <li>• Buffer for vacation/sick time</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Common Estimation Mistakes</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Assuming 40 billable hours per week</li>
              <li>• Not accounting for business development time</li>
              <li>• Forgetting about vacation and sick days</li>
              <li>• Underestimating administrative tasks</li>
              <li>• Not planning for slow periods</li>
            </ul>
          </div>
        </div>

        <h2>When to Use Each Pricing Model</h2>

        <p>Different projects and client situations call for different pricing approaches.</p>

        <h3>Hourly Pricing</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-semibold mb-2">Best For:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Unclear or evolving scope</li>
              <li>• Ongoing support and maintenance</li>
              <li>• Consulting calls and strategy sessions</li>
              <li>• Discovery phases and research projects</li>
              <li>• When client prefers hourly billing</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
            <h4 className="font-semibold mb-2">Challenges:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Clients fear unlimited costs</li>
              <li>• No incentive for efficiency</li>
              <li>• Difficult for client budgeting</li>
              <li>• Time tracking overhead</li>
              <li>• Revenue capped by available hours</li>
            </ul>
          </div>
        </div>

        <h3>Fixed/Project-Based Pricing</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Situation</th>
                <th className="px-4 py-3 text-left font-semibold">Best Pricing Model</th>
                <th className="px-4 py-3 text-left font-semibold">Why</th>
                <th className="px-4 py-3 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Defined deliverables</td>
                <td className="px-4 py-3">Fixed project fee</td>
                <td className="px-4 py-3">Clear scope, predictable work</td>
                <td className="px-4 py-3">Website redesign: $5,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Repeatable service</td>
                <td className="px-4 py-3">Package pricing</td>
                <td className="px-4 py-3">Standardized process</td>
                <td className="px-4 py-3">Monthly content pack: $1,200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Measurable outcome</td>
                <td className="px-4 py-3">Value-based</td>
                <td className="px-4 py-3">ROI justifies premium</td>
                <td className="px-4 py-3">Conversion optimization: $3,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Uncertain scope</td>
                <td className="px-4 py-3">Hourly with cap</td>
                <td className="px-4 py-3">Protects both parties</td>
                <td className="px-4 py-3">Research project: $150/hr, 20hr max</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Value-Based Pricing Strategy</h2>

        <p>Price based on the value you create, not the time you spend—the highest-earning freelancers use this approach.</p>

        <h3>Value-Based Pricing Framework</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-4">Value Pricing Process</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Step 1: Quantify Client Value</p>
              <p className="text-sm text-gray-600">Revenue increase, cost savings, time savings, risk reduction</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Step 2: Calculate Your Contribution</p>
              <p className="text-sm text-gray-600">What percentage of the value is directly due to your work?</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Step 3: Set Price at 10-30% of Value</p>
              <p className="text-sm text-gray-600">Client gets majority of benefit, you get premium for results</p>
            </div>
          </div>
        </div>

        <h3>Value-Based Pricing Examples</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Email Marketing Campaign</h4>
            <p className="text-gray-700 mb-2"><strong>Value:</strong> Campaign generates $50,000 in additional revenue</p>
            <p className="text-gray-600 text-sm"><strong>Your price:</strong> $7,500 (15% of value) vs. $2,400 (hourly)</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Process Automation</h4>
            <p className="text-gray-700 mb-2"><strong>Value:</strong> Saves client 20 hours/month × $50/hour = $12,000/year</p>
            <p className="text-gray-600 text-sm"><strong>Your price:</strong> $3,000 (25% of annual savings) vs. $1,200 (hourly)</p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-semibold text-purple-800 mb-2">Conversion Rate Optimization</h4>
            <p className="text-gray-700 mb-2"><strong>Value:</strong> 2% conversion increase = $100,000 additional annual revenue</p>
            <p className="text-gray-600 text-sm"><strong>Your price:</strong> $15,000 (15% of value) vs. $4,800 (hourly)</p>
          </div>
        </div>

        <h2>Quote Structure That Converts</h2>

        <p>How you present your pricing affects client perception and acceptance rates.</p>

        <h3>Three-Option Pricing Strategy</h3>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-center">Good</h4>
            <p className="text-2xl font-bold text-center mb-3">$2,500</p>
            <ul className="text-sm space-y-2">
              <li>• Core service delivery</li>
              <li>• Standard timeline (2 weeks)</li>
              <li>• Email support</li>
              <li>• 1 revision round</li>
              <li>• Basic reporting</li>
            </ul>
          </div>
          
          <div className="border-2 border-pink-600 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-3 text-center text-pink-800">Better</h4>
            <p className="text-2xl font-bold text-center mb-3 text-pink-800">$3,750</p>
            <ul className="text-sm space-y-2">
              <li>• Everything in Good</li>
              <li>• Priority timeline (1 week)</li>
              <li>• Phone/video support</li>
              <li>• 3 revision rounds</li>
              <li>• Detailed analytics</li>
              <li>• 30-day follow-up</li>
            </ul>
            <p className="text-center mt-3 text-sm font-semibold text-pink-800">MOST POPULAR</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-center">Best</h4>
            <p className="text-2xl font-bold text-center mb-3">$5,500</p>
            <ul className="text-sm space-y-2">
              <li>• Everything in Better</li>
              <li>• Rush delivery (3 days)</li>
              <li>• Dedicated project manager</li>
              <li>• Unlimited revisions</li>
              <li>• Custom integration</li>
              <li>• 90-day support</li>
            </ul>
          </div>
        </div>

        <h3>Quote Components</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Winning Quote Structure</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Project overview and objectives</li>
            <li>☐ Clear deliverables and specifications</li>
            <li>☐ Timeline with key milestones</li>
            <li>☐ Success metrics and outcomes</li>
            <li>☐ Three pricing options (Good/Better/Best)</li>
            <li>☐ Payment terms (50% upfront, 50% on delivery)</li>
            <li>☐ Limited-time validity (7-14 days)</li>
            <li>☐ Next steps and approval process</li>
          </ul>
        </div>

        <h2>Common Pricing Mistakes to Avoid</h2>

        <p>Learn from common freelancer pricing errors that limit income and attract difficult clients.</p>

        <h3>Pricing Psychology Mistakes</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Don't Do This</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Competing on price alone</li>
              <li>• Showing hourly rates in proposals</li>
              <li>• Accepting "What's your best price?"</li>
              <li>• Discounting without reducing scope</li>
              <li>• Pricing based on client size</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Do This Instead</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Compete on value and outcomes</li>
              <li>• Focus on project benefits and ROI</li>
              <li>• Stand firm on your pricing</li>
              <li>• Reduce scope, not price</li>
              <li>• Price based on value delivered</li>
            </ul>
          </div>
        </div>

        <h2>When and How to Raise Your Rates</h2>

        <p>Strategic rate increases are essential for business growth and maintaining profitability.</p>

        <h3>Rate Increase Timing</h3>

        <ul>
          <li><strong>Every 6-12 months:</strong> Regular increases keep pace with experience and market rates</li>
          <li><strong>After 3 successful projects:</strong> Build confidence and testimonials first</li>
          <li><strong>When demand exceeds capacity:</strong> Use pricing to manage demand</li>
          <li><strong>New skills or certifications:</strong> Justify increases with added value</li>
          <li><strong>Market rate research:</strong> When you discover you're underpricing</li>
        </ul>

        <h3>Client Communication Script</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-4">Rate Increase Announcement</h4>
          <div className="bg-white p-4 rounded border text-sm">
            <p className="mb-2">"Hi [Name],</p>
            <p className="mb-2">I wanted to give you advance notice that I'll be updating my rates effective [date] to reflect my expanded expertise and the results I'm delivering for clients.</p>
            <p className="mb-2">Current projects will complete at existing rates. New projects starting after [date] will be priced according to my updated rate card.</p>
            <p className="mb-2">I appreciate our working relationship and look forward to continuing to deliver excellent results.</p>
            <p>Best regards, [Your name]"</p>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/start-a-profitable-side-hustle-with-0" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Start Side Hustle With $0</h3>
            <p className="text-pink-600 text-sm mt-2">Launch your freelance business without upfront costs</p>
          </Link>
          <Link href="/how-to/how-to-send-invoices-that-get-paid-fast" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Send Invoices That Get Paid</h3>
            <p className="text-pink-600 text-sm mt-2">Convert your pricing into actual payments</p>
          </Link>
          <Link href="/how-to/how-to-find-clients-without-paid-ads" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Find Clients Without Ads</h3>
            <p className="text-pink-600 text-sm mt-2">Higher rates require better client acquisition</p>
          </Link>
          <Link href="/how-to/how-to-scale-side-hustle-into-business" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Scale Side Hustle Into Business</h3>
            <p className="text-pink-600 text-sm mt-2">Value-based pricing enables business scaling</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I price hourly or value-based?</h3>
            <p className="text-gray-600">
              Use hourly for unclear scope, fixed fees for defined deliverables, and value-based pricing when you can quantify a business outcome. Value-based pricing typically generates 2-3x more revenue than hourly.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I justify high prices to clients?</h3>
            <p className="text-gray-600">
              Focus on ROI and outcomes rather than time spent. Present case studies showing results, calculate the cost of inaction, and frame your service as an investment with measurable returns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What if clients say I'm too expensive?</h3>
            <p className="text-gray-600">
              Reduce scope instead of price. Offer a smaller version of your service that fits their budget while maintaining your hourly value. Ask what specific outcomes matter most to them.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should I raise my rates?</h3>
            <p className="text-gray-600">
              Review rates every 6 months and increase after every 3 successful projects or when demand exceeds capacity. Aim for 10-20% increases annually as you gain experience and results.
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
                  "name": "Should I price hourly or value-based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use hourly for unclear scope, fixed fees for defined deliverables, and value-based pricing when you can quantify business outcomes."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How do I justify high prices to clients?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on ROI and outcomes rather than time spent. Present case studies and frame your service as an investment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I raise my rates?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Review every 6 months and increase after 3 successful projects. Aim for 10-20% increases annually."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </div>
  )
}