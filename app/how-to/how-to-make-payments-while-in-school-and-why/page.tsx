import type { Metadata } from 'next'
import { GraduationCap, DollarSign, TrendingDown, CheckCircle, Calculator, AlertTriangle, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Make Student Loan Payments While in School - PeakNewsDaily',
  description: 'Learn smart strategies for making student loan payments during school to reduce total interest costs and build financial discipline.',
  keywords: 'student loan payments in school, reduce student debt, interest capitalization, student loan strategy',
  openGraph: {
    title: 'How to Make Student Loan Payments While in School',
    description: 'Smart strategies to reduce your student debt by making payments during college.',
    type: 'article',
  },
}

export default function StudentLoanPaymentsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            How to Make Student Loan Payments While in School (And Why)
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Smart strategies to reduce your total debt burden by making strategic payments during college.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
              <TrendingDown className="w-4 h-4 mr-1" />
              Reduce Interest
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
              <Target className="w-4 h-4 mr-1" />
              Build Discipline
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
              <Calculator className="w-4 h-4 mr-1" />
              Lower Total Cost
            </span>
          </div>
        </header>

        <div className="space-y-12">
          {/* Why Make Payments in School */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <DollarSign className="h-8 w-8 mr-3 text-green-600" />
              Why Make Payments While in School?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Prevent Interest Capitalization:</strong> Stop unpaid interest from being added to principal
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Lower Total Debt:</strong> Reduce the amount you'll owe after graduation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Build Good Habits:</strong> Start managing debt responsibly early
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Credit History:</strong> Begin building positive payment history
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Interest Capitalization Warning:
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm mb-3">
                  When you enter repayment, unpaid interest gets added to your principal balance. This means you'll pay interest on interest!
                </p>
                <div className="bg-amber-100 dark:bg-amber-800/30 p-3 rounded">
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    <strong>Example:</strong> $1,000 unpaid interest + $10,000 principal = $11,000 new principal balance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Strategies */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Target className="h-8 w-8 mr-3 text-purple-600" />
              Smart Payment Strategies
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  strategy: "Interest-Only Payments",
                  description: "Pay just the monthly interest to prevent capitalization",
                  pros: ["Lowest payment amount", "Prevents debt growth", "Manageable for most students"],
                  cons: ["Principal doesn't decrease", "Still substantial total interest"],
                  bestFor: "Students with tight budgets who want to prevent debt growth"
                },
                {
                  strategy: "Partial Principal Payments",
                  description: "Pay interest plus small amount toward principal",
                  pros: ["Reduces total debt", "Builds payment discipline", "Significant long-term savings"],
                  cons: ["Higher monthly payments", "May strain student budget"],
                  bestFor: "Students with part-time income or family support"
                },
                {
                  strategy: "Target High-Interest Loans",
                  description: "Focus payments on highest interest rate loans first",
                  pros: ["Maximum interest savings", "Strategic debt reduction", "Lower total cost"],
                  cons: ["Requires loan tracking", "More complex management"],
                  bestFor: "Students with multiple loans at different rates"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">{item.strategy}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Pros:</h4>
                      <ul className="text-sm space-y-1">
                        {item.pros.map((pro, i) => (
                          <li key={i} className="text-green-600 dark:text-green-400">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Cons:</h4>
                      <ul className="text-sm space-y-1">
                        {item.cons.map((con, i) => (
                          <li key={i} className="text-red-600 dark:text-red-400">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white/50 dark:bg-slate-800/50 rounded">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Best for:</strong> {item.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Implementation */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Calculator className="h-8 w-8 mr-3 text-green-600" />
              How to Calculate Your Payment
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Step-by-Step Calculation:</h3>
              
              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 1: Find Your Interest Rate</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Check your loan servicer website for current interest rates on each loan
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 2: Calculate Monthly Interest</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Principal Balance × (Annual Rate ÷ 12) = Monthly Interest
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Example: $10,000 × (5% ÷ 12) = $41.67/month
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 3: Set Your Payment Goal</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• <strong>Interest-only:</strong> Pay the monthly interest amount</li>
                    <li>• <strong>Principal reduction:</strong> Add $25-100+ to interest payment</li>
                    <li>• <strong>Aggressive:</strong> Pay what you can afford beyond interest</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Should I pay subsidized or unsubsidized loans first?",
                  answer: "Focus on unsubsidized loans first since they accrue interest while you're in school. Subsidized loans don't charge interest during enrollment."
                },
                {
                  question: "What if I can't afford the full interest payment?",
                  answer: "Pay what you can! Even partial payments reduce the amount that will capitalize. Every dollar helps reduce your future debt burden."
                },
                {
                  question: "Can I make payments if I'm still borrowing new loans?",
                  answer: "Yes! You can make payments on existing loans while taking new ones. Focus on loans that are already accruing interest."
                },
                {
                  question: "Should I use work-study money for loan payments?",
                  answer: "Consider your priorities: emergency fund first, then loan payments. Work-study income is often modest, so use it strategically."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Take Control of Your Student Debt</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Even small payments during school can save thousands in total interest. Start with what you can afford and build the habit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Calculate Loan Interest
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-blue-700 transition-colors">
                Track Your Progress
              </button>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}