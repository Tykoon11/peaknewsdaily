import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Student Loans—Without Overborrowing',
  description: 'Learn how to apply for student loans the smart way—calculate need, compare aid, and borrow only what\'s necessary to graduate debt-light.',
}

export default function HowToApplyForStudentLoansWithoutOverborrowing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-violet-100 mb-6">
              <a href="/category/how-to" className="hover:text-white transition-colors">How-To Guides</a>
              <span>/</span>
              <span className="text-white">Student Loans Without Overborrowing</span>
            </nav>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mr-4">
                🎓
              </div>
              <div>
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Student Loans & Education
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Apply for Student Loans
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Without Overborrowing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-violet-100 leading-relaxed max-w-3xl">
              Master the art of smart borrowing—calculate your true need, compare aid options, and borrow only what's necessary to graduate debt-light and career-ready.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300">$37K</div>
                <div className="text-sm text-violet-100">Average Student Debt</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-green-300">8-10%</div>
                <div className="text-sm text-violet-100">Max Payment % of Income</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-300">$3K+</div>
                <div className="text-sm text-violet-100">Potential Interest Savings</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
      </div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Key Insight */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-3xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h2 className="text-2xl font-bold">The Smart Borrowing Framework</h2>
            </div>
            <p className="text-xl text-violet-100 leading-relaxed">
              Before touching any loan application, calculate your true financial need and borrow strategically. Smart borrowing means borrowing only what's necessary to graduate debt-light—not maxing out available credit "just in case."
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <article className="space-y-10">
              {/* Step-by-Step Process */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Calculate Your True Cost</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Don't rely on your school's estimated cost—create your own realistic budget based on your actual lifestyle and smart choices.
                </p>
                
                {/* Cost Formula Card */}
                <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-violet-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">🧮</span>
                    True Cost Formula
                  </h3>
                  <div className="bg-white rounded-xl p-6 border border-violet-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">Your Loan Need =</div>
                      <div className="text-lg text-gray-600 space-y-1">
                        <div>(Tuition + Fees + Books + Housing + Transport + Personal)</div>
                        <div className="text-3xl font-bold text-red-500">−</div>
                        <div>(Scholarships + Grants + Work-Study + Family Help + Savings)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cost Categories Table */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-800">Expense</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-800">School Estimate</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-800">Your Reality</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-800">Money-Saving Tips</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">Housing</td>
                        <td className="px-6 py-4 text-gray-600">On-campus dorms</td>
                        <td className="px-6 py-4 text-gray-600">Compare off-campus</td>
                        <td className="px-6 py-4 text-green-600">Shared apartments, longer commutes</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">Meals</td>
                        <td className="px-6 py-4 text-gray-600">Full dining plan</td>
                        <td className="px-6 py-4 text-gray-600">Minimal plan + cooking</td>
                        <td className="px-6 py-4 text-green-600">Cook most meals, strategic dining</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">Books</td>
                        <td className="px-6 py-4 text-gray-600">New from bookstore</td>
                        <td className="px-6 py-4 text-gray-600">Used, rental, digital</td>
                        <td className="px-6 py-4 text-green-600">Library reserves, sharing</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">Transport</td>
                        <td className="px-6 py-4 text-gray-600">Car on campus</td>
                        <td className="px-6 py-4 text-gray-600">Bus, bike, walking</td>
                        <td className="px-6 py-4 text-green-600">Public transit, ride-sharing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Federal vs Private */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Federal First Strategy</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                      <span className="mr-3 text-2xl">✅</span>
                      Federal Loan Advantages
                    </h3>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Fixed interest rates
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Income-driven repayment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Loan forgiveness programs
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        No credit check required
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Death/disability discharge
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                    <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                      <span className="mr-3 text-2xl">⚠️</span>
                      Private Loan Risks
                    </h3>
                    <ul className="space-y-3 text-red-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Variable rates can increase
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Credit-based approval
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Limited repayment flexibility
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        No federal forgiveness
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Fewer consumer protections
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Repayment Preview */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Reality Check Your Future</h2>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
                    Repayment Preview Example
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6 border border-blue-100">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4">Loan Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total borrowed:</span>
                          <span className="font-semibold text-gray-800">$30,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Average rate:</span>
                          <span className="font-semibold text-gray-800">5.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Repayment term:</span>
                          <span className="font-semibold text-gray-800">10 years</span>
                        </div>
                        <div className="flex justify-between border-t border-blue-100 pt-3">
                          <span className="text-gray-600">Monthly payment:</span>
                          <span className="text-2xl font-bold text-blue-600">~$325</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-blue-100">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4">Income Reality Check</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Starting salary:</span>
                          <span className="font-semibold text-gray-800">$45,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Take-home:</span>
                          <span className="font-semibold text-gray-800">~$3,000/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment ratio:</span>
                          <span className="font-semibold text-gray-800">10.8%</span>
                        </div>
                        <div className="flex justify-between border-t border-blue-100 pt-3">
                          <span className="text-gray-600">Status:</span>
                          <span className="text-2xl font-bold text-green-600">Manageable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-100 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800 text-center font-medium">
                      <span className="font-bold">Rule of thumb:</span> Monthly payment should not exceed 8-10% of take-home income
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Action Card */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3 text-2xl">⚡</span>
                  Quick Start Checklist
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    Complete FAFSA early (Oct 1st)
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    Calculate true cost
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                    Max out free money first
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                    Federal loans before private
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</span>
                    Preview future payments
                  </li>
                </ul>
              </div>
              
              {/* Related Articles */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-3 text-2xl">📚</span>
                  Related Guides
                </h3>
                <div className="space-y-4">
                  <a href="/how-to/how-to-choose-federal-vs-private-student-loans" className="block group">
                    <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200 group-hover:shadow-md transition-all duration-200">
                      <h4 className="font-semibold text-violet-700 group-hover:text-violet-800 mb-2">Federal vs Private Loans</h4>
                      <p className="text-sm text-gray-600">Compare loan types and understand when each makes sense.</p>
                    </div>
                  </a>
                  <a href="/how-to/how-to-use-scholarships-and-grants-strategically" className="block group">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 group-hover:shadow-md transition-all duration-200">
                      <h4 className="font-semibold text-green-700 group-hover:text-green-800 mb-2">Scholarships & Grants Strategy</h4>
                      <p className="text-sm text-gray-600">Maximize free money to minimize borrowing needs.</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Warning Card */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <span className="mr-3 text-xl">🚨</span>
                  Common Overborrowing Traps
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Taking the full amount offered</li>
                  <li>• Using refund checks as spending money</li>
                  <li>• Not returning unused loan funds</li>
                  <li>• Borrowing for lifestyle upgrades</li>
                  <li>• Ignoring future payment reality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100 mt-12">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">❓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-6 border border-violet-200">
              <h3 className="text-xl font-semibold text-violet-800 mb-3">How much should I borrow for student loans?</h3>
              <p className="text-gray-700 leading-relaxed">
                Only the gap after scholarships, grants, work-study, and family contributions. Aim to keep total debt at or below your expected first-year salary after graduation. This ensures manageable monthly payments of 8-10% of take-home income.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Is a refund check 'extra money' I can spend freely?</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-red-600">No</span>—it's loan money that must be repaid with interest. Return what you don't need within your school's refund window (usually 120 days). Keeping unnecessary refunds is one of the fastest ways to overborrow.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Should I accept all financial aid offered to me?</h3>
              <p className="text-gray-700 leading-relaxed">
                Never automatically accept all aid. Decline or reduce loans when the offer exceeds your calculated need. Accept grants and scholarships first, then work-study, then federal loans only for the remaining gap.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">What if my parents can't help pay for college?</h3>
              <p className="text-gray-700 leading-relaxed">
                You'll likely qualify for more need-based aid. Complete the FAFSA accurately, consider becoming an independent student if eligible, and maximize federal loan limits before considering private options.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Borrow Smart?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Use these strategies to minimize debt and maximize your future success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/how-to/how-to-choose-federal-vs-private-student-loans" className="bg-white text-violet-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Compare Loan Types →
            </a>
            <a href="/how-to/how-to-use-scholarships-and-grants-strategically" className="bg-violet-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-800 transition-colors border border-violet-500">
              Find Free Money →
            </a>
          </div>
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
                "name": "How much should I borrow for student loans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Only the gap after scholarships, grants, work-study, and family contributions. Aim to keep total debt at or below your expected first-year salary after graduation."
                }
              },
              {
                "@type": "Question", 
                "name": "Is a refund check 'extra money' I can spend freely?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No—it's loan money that must be repaid with interest. Return what you don't need within your school's refund window (usually 120 days)."
                }
              },
              {
                "@type": "Question",
                "name": "Should I accept all financial aid offered to me?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Never automatically accept all aid. Decline or reduce loans when the offer exceeds your calculated need. Accept grants and scholarships first."
                }
              },
              {
                "@type": "Question",
                "name": "What if my parents can't help pay for college?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll likely qualify for more need-based aid. Complete the FAFSA accurately and maximize federal loan limits before considering private options."
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
