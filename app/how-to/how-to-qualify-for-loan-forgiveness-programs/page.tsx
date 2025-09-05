import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Qualify for Student Loan Forgiveness—Complete Guide',
  description: 'See eligibility pillars for loan forgiveness—employment type, qualifying loans, repayment plans, and certified payment counts.',
}
const createSlug = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function HowToQualifyForLoanForgivenessPrograms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-green-100 mb-6">
              <a href="/category/how-to" className="hover:text-white transition-colors">How-To Guides</a>
              <span>/</span>
              <span className="text-white">Qualify for Loan Forgiveness Programs</span>
            </nav>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mr-4">
                🎯
              </div>
              <div>
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Student Loans & Education
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Qualify for Student Loan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Forgiveness Programs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-3xl">
              Navigate the complex requirements for PSLF, teacher forgiveness, and other debt relief programs to eliminate your student loans.
            </p>
            
            {/* Key Stats */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300">120</div>
                <div className="text-sm text-green-100">PSLF Qualifying Payments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-300">5 Years</div>
                <div className="text-sm text-green-100">Teacher Forgiveness Req.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-green-300">100%</div>
                <div className="text-sm text-green-100">Debt Forgiveness Possible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-violet-50 border-l-4 border-violet-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-violet-800 mb-2">🎯 Four Pillars of Forgiveness</h3>
          <p className="text-violet-700">
            Forgiveness programs share four critical pillars: eligible loans, qualifying repayment plans, qualifying employment, and verified payment counts. Success requires meticulous documentation and annual certifications.
          </p>
        </div>
            <h2>The Four Pillars of Loan Forgiveness</h2>
            <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Universal Requirements for Federal Forgiveness Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-violet-800 mb-3">Loan & Payment Requirements</h4>
                  <ol className="text-violet-700 space-y-2">
                    <li>1. <strong>Eligible loan types</strong> (usually Direct Loans)</li>
                    <li>2. <strong>Qualifying repayment plan</strong> (often IDR)</li>
                    <li>3. <strong>Required number of payments</strong></li>
                    <li>4. <strong>Payments made on time and in full</strong></li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold text-violet-800 mb-3">Employment & Documentation</h4>
                  <ol className="text-violet-700 space-y-2">
                    <li>1. <strong>Qualifying employment</strong> type/employer</li>
                    <li>2. <strong>Employment certification</strong> forms</li>
                    <li>3. <strong>Annual documentation</strong> updates</li>
                    <li>4. <strong>Complete application</strong> process</li>
                  </ol>
                </div>
              </div>
            </div>
            <h2>Public Service Loan Forgiveness (PSLF)</h2>
            <h3>PSLF Eligibility Requirements</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                    <th className="px-4 py-3 text-left font-semibold">PSLF Specifications</th>
                    <th className="px-4 py-3 text-left font-semibold">Key Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Loan Types</td>
                    <td className="px-4 py-3">Direct Loans only</td>
                    <td className="px-4 py-3">FFEL, Perkins need consolidation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Employment</td>
                    <td className="px-4 py-3">Full-time public service</td>
                    <td className="px-4 py-3">Government, 501(c)(3) nonprofits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Repayment Plan</td>
                    <td className="px-4 py-3">Income-driven plans</td>
                    <td className="px-4 py-3">IDR, not Standard 10-year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Payments Required</td>
                    <td className="px-4 py-3">120 qualifying payments</td>
                    <td className="px-4 py-3">10 years of eligible employment</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Payment Timing</td>
                    <td className="px-4 py-3">On time and in full</td>
                    <td className="px-4 py-3">After October 1, 2007</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Qualifying PSLF Employers</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">✅ Qualifying Employers</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• Federal, state, local, tribal government</li>
                  <li>• 501(c)(3) nonprofit organizations</li>
                  <li>• AmeriCorps, Peace Corps</li>
                  <li>• Public schools and universities</li>
                  <li>• Public hospitals and health systems</li>
                  <li>• Public law enforcement/fire departments</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">❌ Non-Qualifying Employers</h4>
                <ul className="text-red-700 space-y-2">
                  <li>• For-profit companies</li>
                  <li>• Private practice medicine/law</li>
                  <li>• Religious organizations (for religious activities)</li>
                  <li>• Partisan political organizations</li>
                  <li>• Labor unions</li>
                  <li>• Most private hospitals</li>
                </ul>
              </div>
            </div>
            {/* PSLF Action Plan */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">PSLF Action Plan</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
                    <span className="font-bold text-blue-800 text-sm">Verify Employer</span>
                  </div>
                  <p className="text-blue-700 text-xs">Use Federal Student Aid's employer search tool</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
                    <span className="font-bold text-green-800 text-sm">Consolidate Loans</span>
                  </div>
                  <p className="text-green-700 text-xs">FFEL/Perkins loans need Direct Consolidation</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
                    <span className="font-bold text-purple-800 text-sm">Choose IDR Plan</span>
                  </div>
                  <p className="text-purple-700 text-xs">Income-Based, Pay As You Earn, or REPAYE</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">4</span>
                    <span className="font-bold text-orange-800 text-sm">Employment Certification</span>
                  </div>
                  <p className="text-orange-700 text-xs">Submit annually to track qualifying payments</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">5</span>
                    <span className="font-bold text-red-800 text-sm">120 Payments</span>
                  </div>
                  <p className="text-red-700 text-xs">Full-time employment required throughout</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">6</span>
                    <span className="font-bold text-teal-800 text-sm">Apply for Forgiveness</span>
                  </div>
                  <p className="text-teal-700 text-xs">Submit application after 120th payment</p>
                </div>
              </div>
            </div>
            {/* Teacher Loan Forgiveness */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Teacher Loan Forgiveness</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-6 text-center">Teacher Forgiveness Requirements</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">💵 Loan Types</h4>
                    <p className="text-green-700 text-sm">Direct Loans, FFEL (Stafford/Consolidation)</p>
                  </div>
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">🗺️ Teaching Requirement</h4>
                    <p className="text-green-700 text-sm">5 consecutive years full-time</p>
                  </div>
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">🏫 School Requirement</h4>
                    <p className="text-green-700 text-sm">Low-income schools (Title I)</p>
                  </div>
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">📊 Subject Areas</h4>
                    <p className="text-green-700 text-sm">Higher forgiveness for math, science, special education</p>
                  </div>
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">🏆 Certification</h4>
                    <p className="text-green-700 text-sm">Highly qualified teacher status</p>
                  </div>
                </div>
              </div>
            </div>
            <h3>Forgiveness Amounts</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Teaching Subject</th>
                    <th className="px-4 py-3 text-left font-semibold">School Level</th>
                    <th className="px-4 py-3 text-left font-semibold">Forgiveness Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Mathematics, Science, Special Education</td>
                    <td className="px-4 py-3">Secondary/Elementary</td>
                    <td className="px-4 py-3">Up to $17,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Other subjects</td>
                    <td className="px-4 py-3">Elementary/Secondary</td>
                    <td className="px-4 py-3">Up to $5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Teacher vs PSLF Strategy */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Teacher vs PSLF Strategy</h3>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-amber-800 font-medium mb-4 text-center">
                  You cannot receive both Teacher Loan Forgiveness and PSLF for the same period of service, but you can:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">🏫 Use Teacher Forgiveness First</h4>
                    <p className="text-amber-700 text-sm">Get $5,000-$17,500 after 5 years</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">→ Continue Toward PSLF</h4>
                    <p className="text-amber-700 text-sm">Remaining balance eligible after 5 more years</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">⏰ Total Timeline</h4>
                    <p className="text-amber-700 text-sm">10 years for both programs combined</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">📈 Compare Options</h4>
                    <p className="text-amber-700 text-sm">PSLF may forgive more if balance is high</p>
                  </div>
                </div>
              </div>
            </div>
            <h2>Income-Driven Repayment (IDR) Forgiveness</h2>
            <h3>IDR Forgiveness Timeline</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">IDR Plan</th>
                    <th className="px-4 py-3 text-left font-semibold">Undergraduate Loans</th>
                    <th className="px-4 py-3 text-left font-semibold">Graduate Loans</th>
                    <th className="px-4 py-3 text-left font-semibold">Payment Calculation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Income-Based (IBR)</td>
                    <td className="px-4 py-3">20 years</td>
                    <td className="px-4 py-3">25 years</td>
                    <td className="px-4 py-3">15% of discretionary income</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Pay As You Earn (PAYE)</td>
                    <td className="px-4 py-3">20 years</td>
                    <td className="px-4 py-3">20 years</td>
                    <td className="px-4 py-3">10% of discretionary income</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">REPAYE</td>
                    <td className="px-4 py-3">20 years</td>
                    <td className="px-4 py-3">25 years</td>
                    <td className="px-4 py-3">10% of discretionary income</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Income Contingent (ICR)</td>
                    <td className="px-4 py-3">25 years</td>
                    <td className="px-4 py-3">25 years</td>
                    <td className="px-4 py-3">20% of discretionary income</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>IDR Forgiveness Tax Implications</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h4 className="font-semibold mb-2">⚠️ Important Tax Consideration</h4>
              <p>IDR forgiveness is generally taxable income, unlike PSLF which is tax-free. The forgiven amount gets added to your taxable income for that year, potentially creating a large tax bill. Plan ahead by:</p>
              <ul className="mt-2 space-y-1">
                <li>• Estimating your potential tax liability</li>
                <li>• Saving money each year for the "tax bomb"</li>
                <li>• Considering insolvency rules if applicable</li>
                <li>• Consulting a tax professional as forgiveness approaches</li>
              </ul>
            </div>
            <h2>Specialized Forgiveness Programs</h2>
            <h3>Health Professions Programs</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">NHSC Loan Repayment</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• National Health Service Corps</li>
                  <li>• Primary care in underserved areas</li>
                  <li>• Up to $50,000 initial award</li>
                  <li>• 2-year service commitment</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-3">Military Service</h4>
                <ul className="text-teal-700 space-y-2">
                  <li>• Various military loan repayment programs</li>
                  <li>• Branch-specific requirements</li>
                  <li>• Service commitment required</li>
                  <li>• May be taxable income</li>
                </ul>
              </div>
            </div>
            {/* State-Specific Programs */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">State-Specific Programs</h3>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <p className="text-indigo-800 font-medium mb-4 text-center">
                  Many states offer loan repayment for specific professions:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-100 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-800 mb-2">🏭 Healthcare Workers</h4>
                    <p className="text-indigo-700 text-sm">Doctors, nurses, dentists in underserved areas</p>
                  </div>
                  <div className="bg-indigo-100 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-800 mb-2">⚖️ Legal Professionals</h4>
                    <p className="text-indigo-700 text-sm">Public defenders, prosecutors</p>
                  </div>
                  <div className="bg-indigo-100 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-800 mb-2">👩‍🏫 Teachers</h4>
                    <p className="text-indigo-700 text-sm">State-specific teacher loan forgiveness</p>
                  </div>
                  <div className="bg-indigo-100 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-800 mb-2">🔬 STEM Fields</h4>
                    <p className="text-indigo-700 text-sm">Engineers, scientists in state agencies</p>
                  </div>
                </div>
              </div>
            </div>
            <h2>Documentation and Record-Keeping</h2>
            <h3>Essential Documents to Maintain</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h4 className="font-semibold text-green-800 mb-3">Your Forgiveness File Should Include:</h4>
              <ul className="text-green-700 space-y-2">
                <li>• <strong>Employment Certification Forms:</strong> Submitted annually</li>
                <li>• <strong>Payment history:</strong> Screenshots or statements from servicer</li>
                <li>• <strong>Employment verification:</strong> Pay stubs, HR letters, tax documents</li>
                <li>• <strong>Loan servicer correspondence:</strong> All emails and letters</li>
                <li>• <strong>Plan enrollment confirmations:</strong> IDR plan selections</li>
                <li>• <strong>Qualifying payment counts:</strong> Regular servicer confirmations</li>
              </ul>
            </div>
            {/* Annual Maintenance Checklist */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Annual Maintenance Checklist</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
                    <span className="font-bold text-purple-800 text-sm">Employment Certification</span>
                  </div>
                  <p className="text-purple-700 text-xs">Submit by October each year</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
                    <span className="font-bold text-blue-800 text-sm">Renew IDR Plan</span>
                  </div>
                  <p className="text-blue-700 text-xs">Annual income recertification</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
                    <span className="font-bold text-green-800 text-sm">Verify Payment Count</span>
                  </div>
                  <p className="text-green-700 text-xs">Track progress toward forgiveness</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">4</span>
                    <span className="font-bold text-orange-800 text-sm">Update Contact Info</span>
                  </div>
                  <p className="text-orange-700 text-xs">Address, phone, email</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">5</span>
                    <span className="font-bold text-red-800 text-sm">Review Servicer Changes</span>
                  </div>
                  <p className="text-red-700 text-xs">Ensure continuity of records</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">6</span>
                    <span className="font-bold text-teal-800 text-sm">Screenshot Progress</span>
                  </div>
                  <p className="text-teal-700 text-xs">Keep visual records of your account</p>
                </div>
              </div>
            </div>
            {/* Common Forgiveness Pitfalls */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Common Forgiveness Pitfalls</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-6 text-center">PSLF-Specific Mistakes</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">⚠️ Wrong Loan Type</h4>
                    <p className="text-red-700 text-sm">FFEL loans don't qualify without consolidation</p>
                  </div>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">📄 Wrong Repayment Plan</h4>
                    <p className="text-red-700 text-sm">Standard 10-year plan doesn't count</p>
                  </div>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">⏰ Part-time Employment</h4>
                    <p className="text-red-700 text-sm">Must be full-time (30+ hours or employer definition)</p>
                  </div>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">📅 Late Payments</h4>
                    <p className="text-red-700 text-sm">Even one day late disqualifies that payment</p>
                  </div>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">🏛️ Employer Changes</h4>
                    <p className="text-red-700 text-sm">Some nonprofits lose 501(c)(3) status</p>
                  </div>
                </div>
              </div>
            </div>
              {/* IDR Forgiveness Mistakes */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-yellow-800 mb-6 text-center">IDR Forgiveness Mistakes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">⚠️ Missing Recertification</h4>
                    <p className="text-yellow-700 text-sm">Late income updates can reset clock</p>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">🔄 Plan Switching</h4>
                    <p className="text-yellow-700 text-sm">Some switches restart forgiveness timeline</p>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">⏰ Consolidation Timing</h4>
                    <p className="text-yellow-700 text-sm">Can reset payment counts</p>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">💰 Tax Planning</h4>
                    <p className="text-yellow-700 text-sm">Not preparing for forgiveness tax liability</p>
                  </div>
                </div>
              </div>
              {/* General Documentation Errors */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-6 text-center">General Documentation Errors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-800 mb-2">📄 Incomplete Forms</h4>
                    <p className="text-orange-700 text-sm">Missing signatures or information</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-800 mb-2">🏭 Outdated Employment Info</h4>
                    <p className="text-orange-700 text-sm">Job changes not certified promptly</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-800 mb-2">⏰ Missing Deadlines</h4>
                    <p className="text-orange-700 text-sm">Late submissions disqualifying periods</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-800 mb-2">📁 Poor Record Keeping</h4>
                    <p className="text-orange-700 text-sm">Unable to prove qualifying payments</p>
                  </div>
                </div>
              </div>
            {/* Forgiveness Application Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Forgiveness Application Process</h2>
              
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-6 text-center">When to Apply</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4 text-center">
                    <div className="bg-emerald-500 text-white rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      🏆
                    </div>
                    <h4 className="font-bold text-emerald-800 mb-2">PSLF</h4>
                    <p className="text-emerald-700 text-sm">After making 120th qualifying payment</p>
                  </div>
                  <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4 text-center">
                    <div className="bg-emerald-500 text-white rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      👩‍🏫
                    </div>
                    <h4 className="font-bold text-emerald-800 mb-2">Teacher Forgiveness</h4>
                    <p className="text-emerald-700 text-sm">At end of 5th consecutive year</p>
                  </div>
                  <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4 text-center">
                    <div className="bg-emerald-500 text-white rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      ⚙️
                    </div>
                    <h4 className="font-bold text-emerald-800 mb-2">IDR Forgiveness</h4>
                    <p className="text-emerald-700 text-sm">Automatic review by servicer at appropriate time</p>
                  </div>
                </div>
              </div>
            </div>
            <h3>Application Steps</h3>
            <ol>
              <li><strong>Confirm eligibility:</strong> Verify all requirements met</li>
              <li><strong>Gather documentation:</strong> Employment history, payment records</li>
              <li><strong>Complete application:</strong> Use official federal forms</li>
              <li><strong>Submit to servicer:</strong> Follow specific submission instructions</li>
              <li><strong>Follow up regularly:</strong> Check application status</li>
              <li><strong>Respond to requests:</strong> Provide additional documentation if needed</li>
            </ol>
            <h2>Backup Strategies</h2>
            <h3>If Forgiveness Doesn't Work Out</h3>
            <ul>
              <li><strong>Refinancing options:</strong> Private refinancing for better rates</li>
              <li><strong>Aggressive payoff:</strong> Attack principal with extra payments</li>
              <li><strong>Employer assistance:</strong> Some employers offer loan repayment benefits</li>
              <li><strong>Tax strategies:</strong> Maximize deductions and credits</li>
            </ul>
            <h3>Plan B Considerations</h3>
            <ul>
              <li><strong>Keep federal protections:</strong> Don't refinance until certain about forgiveness</li>
              <li><strong>Build emergency fund:</strong> IDR forgiveness tax liability preparation</li>
              <li><strong>Career flexibility:</strong> Maintain qualifying employment options</li>
              <li><strong>Regular reassessment:</strong> Evaluate forgiveness vs. payoff annually</li>
            </ul>
            <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8">
              <h3 className="font-semibold mb-2">💡 Pro Success Strategy</h3>
              <p><strong>The Annual Forgiveness Audit:</strong> Every October, review your loan types, payment counts, employment status, and required documentation. Set calendar reminders to submit forms on time and track your progress systematically. Forgiveness requires perfect execution over many years—make it routine.</p>
            </div>
        </article>
        
        {/* Related Guides */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/how-to/how-to-choose-federal-vs-private-student-loans" 
                  className="group block p-6 bg-green-50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  🎯
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800 mb-2 group-hover:text-green-900">Choose Federal vs Private Student Loans</h3>
                  <p className="text-green-600 text-sm">Only federal loans qualify for government forgiveness programs</p>
                </div>
              </div>
            </Link>
            <Link href="/how-to/how-to-pick-a-repayment-plan-that-fits-your-budget" 
                  className="group block p-6 bg-emerald-50 rounded-xl border border-emerald-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  💰
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-emerald-800 mb-2 group-hover:text-emerald-900">Pick a Repayment Plan That Fits Your Budget</h3>
                  <p className="text-emerald-600 text-sm">Choose the right IDR plan to qualify for forgiveness programs</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      {/* FAQ Section */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do private student loans qualify for forgiveness programs?</h3>
            <p className="text-gray-600">
              Generally no. Federal forgiveness programs only apply to federal student loans. Private loans have no government-backed forgiveness programs, though some employers offer private loan repayment assistance as a benefit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I switch employers and still qualify for PSLF?</h3>
            <p className="text-gray-600">
              Yes, but only qualifying employment with eligible employers counts toward your 120 payments. You can work for different qualifying employers, but gaps in qualifying employment don't count toward the payment total.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I paused payments during COVID—do those count?</h3>
            <p className="text-gray-600">
              The COVID-19 payment pause months counted toward PSLF for borrowers who were already on track, even though no payments were required. Check with your servicer to confirm how the pause affected your specific payment count.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get forgiveness if I consolidated my loans?</h3>
            <p className="text-gray-600">
              Yes, but consolidation typically resets your payment count to zero. However, some recent rule changes may give credit for previous payments under certain circumstances. Always verify before consolidating.
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
                  "name": "Do private student loans qualify for forgiveness programs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally no. Federal forgiveness programs only apply to federal student loans. Private loans have no government-backed forgiveness programs."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I switch employers and still qualify for PSLF?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but only qualifying employment with eligible employers counts toward your 120 payments. Gaps in qualifying employment don't count."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I paused payments during COVID—do those count?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "The COVID-19 payment pause months counted toward PSLF for borrowers who were already on track, even though no payments were required."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I get forgiveness if I consolidated my loans?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but consolidation typically resets your payment count to zero. Recent rule changes may give credit for previous payments in certain circumstances."
                  }
                }
              ]
            })
          }}
        />
      </section>
      </div>
    </div>
  )
}
