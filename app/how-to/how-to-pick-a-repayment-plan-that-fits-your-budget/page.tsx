import type { Metadata } from 'next'
import { Calculator, DollarSign, TrendingUp, CheckCircle, AlertTriangle, Target, CreditCard, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Pick a Student Loan Repayment Plan That Fits Your Budget - PeakNewsDaily',
  description: 'Compare federal student loan repayment options—Standard, Income-Driven, PAYE, IBR—to find the best plan for your financial situation.',
  keywords: 'student loan repayment plans, income driven repayment, PAYE, IBR, REPAYE, student loan budget',
  openGraph: {
    title: 'How to Pick the Right Student Loan Repayment Plan',
    description: 'Choose the best repayment strategy to fit your budget and financial goals.',
    type: 'article',
  },
}

export default function RepaymentPlanPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-900 dark:from-white dark:via-green-100 dark:to-emerald-100 bg-clip-text text-transparent mb-6">
            How to Pick a Repayment Plan That Fits Your Budget
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Compare federal student loan repayment options to find the best plan for your income and financial goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
              <Target className="w-4 h-4 mr-1" />
              Budget-Friendly
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
              <DollarSign className="w-4 h-4 mr-1" />
              Lower Payments
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
              <Calendar className="w-4 h-4 mr-1" />
              Flexible Terms
            </span>
          </div>
        </header>

        <div className="space-y-12">
          {/* Repayment Plan Comparison */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <CreditCard className="h-8 w-8 mr-3 text-green-600" />
              Federal Repayment Plan Comparison
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  plan: "Standard Repayment",
                  payment: "Fixed monthly payment",
                  term: "10 years",
                  pros: ["Lowest total interest", "Fastest payoff", "Predictable payments"],
                  cons: ["Highest monthly payment", "Less flexibility", "May strain budget"],
                  bestFor: "High earners who want to minimize total interest",
                  color: "blue"
                },
                {
                  plan: "Income-Driven Repayment (IDR)",
                  payment: "10-20% of discretionary income",
                  term: "20-25 years",
                  pros: ["Lower monthly payments", "Based on income", "Forgiveness after term"],
                  cons: ["Higher total interest", "Longer repayment", "Annual recertification"],
                  bestFor: "Lower incomes, unpredictable earnings, public service careers",
                  color: "green"
                },
                {
                  plan: "Graduated Repayment",
                  payment: "Starts low, increases every 2 years",
                  term: "10 years",
                  pros: ["Lower initial payments", "Matches income growth", "Same term as standard"],
                  cons: ["Higher total interest", "Payments increase significantly", "Less predictable"],
                  bestFor: "New graduates expecting significant salary increases",
                  color: "purple"
                },
                {
                  plan: "Extended Repayment",
                  payment: "Fixed or graduated",
                  term: "Up to 25 years",
                  pros: ["Lower monthly payments", "Longer term", "Fixed or graduated options"],
                  cons: ["Much higher total interest", "Requires $30k+ in loans", "Longer debt period"],
                  bestFor: "Very tight budgets, high debt balances",
                  color: "orange"
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-gradient-to-r from-${plan.color}-50 to-${plan.color}-100 dark:from-${plan.color}-900/20 dark:to-${plan.color}-800/20 rounded-lg p-6 border border-${plan.color}-200 dark:border-${plan.color}-800`}>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold text-${plan.color}-900 dark:text-${plan.color}-100 mb-2`}>{plan.plan}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>Payment:</strong> {plan.payment}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>Term:</strong> {plan.term}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Pros:</h4>
                      <ul className="text-sm space-y-1">
                        {plan.pros.map((pro, i) => (
                          <li key={i} className="text-green-600 dark:text-green-400">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Cons:</h4>
                      <ul className="text-sm space-y-1">
                        {plan.cons.map((con, i) => (
                          <li key={i} className="text-red-600 dark:text-red-400">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Best for:</strong> {plan.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Income-Driven Plan Details */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
              Income-Driven Repayment Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">PAYE (Pay As You Earn)</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 10% of discretionary income</li>
                    <li>• 20-year forgiveness</li>
                    <li>• Partial financial hardship required</li>
                    <li>• Payment cap at Standard plan amount</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">REPAYE</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 10% of discretionary income</li>
                    <li>• 20-25 year forgiveness</li>
                    <li>• No financial hardship requirement</li>
                    <li>• Interest subsidy benefits</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">IBR (Income-Based)</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 10-15% of discretionary income</li>
                    <li>• 20-25 year forgiveness</li>
                    <li>• Partial financial hardship required</li>
                    <li>• Payment cap available</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">ICR (Income-Contingent)</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 20% of discretionary income</li>
                    <li>• 25-year forgiveness</li>
                    <li>• Available for all federal loans</li>
                    <li>• Includes Parent PLUS loans</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Important Considerations:
              </h3>
              <ul className="text-amber-800 dark:text-amber-200 text-sm space-y-2">
                <li>• <strong>Tax implications:</strong> Forgiven amounts may be taxable income</li>
                <li>• <strong>Annual recertification:</strong> Must update income/family size yearly</li>
                <li>• <strong>Interest capitalization:</strong> Unpaid interest may be added to principal</li>
                <li>• <strong>Marriage impact:</strong> Spouse income may affect payments</li>
              </ul>
            </div>
          </section>

          {/* Decision Framework */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Target className="h-8 w-8 mr-3 text-purple-600" />
              How to Choose Your Plan
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Decision Questions:</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">1. What's your current financial situation?</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• <strong>Stable high income:</strong> Consider Standard repayment</li>
                      <li>• <strong>Low or variable income:</strong> Look at Income-Driven plans</li>
                      <li>• <strong>Tight budget:</strong> Extended or IDR plans may help</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">2. What are your career goals?</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• <strong>Public service:</strong> IDR plans qualify for PSLF</li>
                      <li>• <strong>Private sector:</strong> Consider total interest costs</li>
                      <li>• <strong>Uncertain path:</strong> IDR provides flexibility</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">3. How much debt do you have?</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• <strong>Low debt-to-income:</strong> Standard plan often best</li>
                      <li>• <strong>High debt-to-income:</strong> IDR plans provide relief</li>
                      <li>• <strong>Very high debt:</strong> Consider forgiveness options</li>
                    </ul>
                  </div>
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
                  question: "Can I change my repayment plan later?",
                  answer: "Yes! You can change federal loan repayment plans at any time by contacting your loan servicer. Some plans have eligibility requirements."
                },
                {
                  question: "What happens if I miss the annual IDR recertification?",
                  answer: "Your payment will revert to the Standard 10-year amount, which could significantly increase your monthly payment."
                },
                {
                  question: "Are private student loans eligible for these plans?",
                  answer: "No, these repayment options are only for federal student loans. Private loans have their own refinancing and modification options."
                },
                {
                  question: "Should I consolidate my loans before choosing a plan?",
                  answer: "Consolidation can simplify payments and make some plans available, but you may lose benefits like interest rate discounts or forgiveness progress."
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
          <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Find Your Perfect Repayment Plan</h2>
            <p className="text-green-100 mb-6 text-lg">
              The right repayment plan can save you money and reduce financial stress. Take time to compare your options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Use Federal Loan Simulator
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-green-700 transition-colors">
                Contact Loan Servicer
              </button>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}