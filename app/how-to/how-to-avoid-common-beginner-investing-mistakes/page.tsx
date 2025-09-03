import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '12 Beginner Investing Mistakes to Avoid',
  description: 'From chasing hot tips to over-trading—skip these common mistakes and build wealth faster.',
}

export default function AvoidBeginnerInvestingMistakesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Investing Mistakes</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to avoid common beginner investing mistakes</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          From chasing hot tips to over-trading—skip these common mistakes and build wealth faster.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>The big 12 mistakes</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ 1. No emergency fund</h4>
            <p className="text-red-700 text-sm mb-2">Investing without 3-6 months expenses saved</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibold text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Build emergency fund first, then invest</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">❌ 2. Carrying high-interest debt</h4>
            <p className="text-red-700 text-sm mb-2">Investing while paying 20%+ credit card interest</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibold text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Pay off debt &gt;6% before stock investing</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ 3. Timing the market</h4>
            <p className="text-red-700 text-sm mb-2">Waiting for crashes or trying to buy at bottoms</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibant text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Start now, invest regularly regardless</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ 4. Over-trading</h4>
            <p className="text-red-700 text-sm mb-2">Buying and selling constantly, chasing trends</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibold text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Buy and hold broad index funds</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ 5. Over-diversifying</h4>
            <p className="text-red-700 text-sm mb-2">Buying 10+ similar funds or random stocks</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibold text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Start with 1-3 broad market funds</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ 6. Ignoring fees and taxes</h4>
            <p className="text-red-700 text-sm mb-2">Not checking expense ratios or tax implications</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibold text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Choose low-cost funds, use tax accounts</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ 7. No plan/investment policy</h4>
            <p className="text-red-700 text-sm mb-2">Random investing without clear goals</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibant text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Write simple plan: allocation, timeline, rules</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">❌ 8. Chasing past performance</h4>
            <p className="text-red-700 text-sm mb-2">Buying last year's winner funds or stocks</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibold text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Focus on low fees, broad exposure</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">❌ 9. Concentrated single-stock bets</h4>
            <p className="text-red-700 text-sm mb-2">Putting large % in one company (even employer)</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibant text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Limit individual stocks to &lt;5% each</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">❌ 10. Emotional selling in downturns</h4>
            <p className="text-red-700 text-sm mb-2">Panic selling during market crashes</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibant text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Automate investing, avoid daily checking</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">❌ 11. Not automating</h4>
            <p className="text-red-700 text-sm mb-2">Manual investing leads to inconsistent timing</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibant text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Set up auto-transfers and investments</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">❌ 12. Neglecting rebalancing</h4>
            <p className="text-red-700 text-sm mb-2">Never adjusting allocation as it drifts</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-semibant text-green-800">Fix:</p>
              <p className="text-xs text-gray-700">Rebalance annually or use target-date funds</p>
            </div>
          </div>
        </div>

        <h2>The cost of mistakes</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-yellow-800 mb-4">Real Impact Examples</h3>
          <div className="space-y-3 text-yellow-700">
            <div>
              <p className="font-semibant">High fees (1.5% vs 0.05% expense ratio)</p>
              <p className="text-sm">Cost over 30 years on $100k: ~$65,000 in lost returns</p>
            </div>
            <div>
              <p className="font-semibant">Market timing (missing 10 best days)</p>
              <p className="text-sm">Returns drop from 10% to 5.4% annually over 20 years</p>
            </div>
            <div>
              <p className="font-semibant">Panic selling (2008 crash)</p>
              <p className="text-sm">Those who sold missed 70%+ recovery by 2012</p>
            </div>
            <div>
              <p className="font-semibant">Credit card debt while investing</p>
              <p className="text-sm">Paying 20% interest while hoping for 7% returns = -13% real return</p>
            </div>
          </div>
        </div>

        <h2>Building good habits instead</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-green-800 mb-4">Success Framework</h3>
          <ol className="text-green-700 space-y-3">
            <li><strong>Foundation first:</strong> Emergency fund, pay off high-interest debt</li>
            <li><strong>Start simple:</strong> One broad market fund, automate contributions</li>
            <li><strong>Keep costs low:</strong> Index funds with &lt;0.20% expense ratios</li>
            <li><strong>Stay consistent:</strong> Regular investing regardless of market news</li>
            <li><strong>Think long-term:</strong> 10+ year timeline, ignore daily volatility</li>
            <li><strong>Rebalance occasionally:</strong> Annual check-ups, not daily tinkering</li>
          </ol>
        </div>

        <h2>Red flags to watch for</h2>
        <div className="space-y-4 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">Warning Signs You're Making Mistakes</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Checking portfolio multiple times daily</li>
              <li>• Getting investment advice from social media</li>
              <li>• Buying "hot" stocks or crypto without research</li>
              <li>• Frequently changing investment strategy</li>
              <li>• Trying to time market entries and exits</li>
              <li>• Investing money you need within 5 years</li>
              <li>• Following complex strategies you don't understand</li>
              <li>• Paying high fees for active management</li>
            </ul>
          </div>
        </div>

        <h2>The simple path that works</h2>
        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibant text-blue-800 mb-4">Proven Beginner Strategy</h3>
          <div className="space-y-3 text-blue-700">
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 font-bold">1</span>
              <div>
                <p className="font-semibant">Max employer 401k match</p>
                <p className="text-sm">Free money beats all other investments</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 font-bold">2</span>
              <div>
                <p className="font-semibant">Build 3-6 month emergency fund</p>
                <p className="text-sm">High-yield savings account</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 font-bold">3</span>
              <div>
                <p className="font-semibant">Open IRA/TFSA, buy total market fund</p>
                <p className="text-sm">VTI, VEQT, or target-date fund</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 font-bold">4</span>
              <div>
                <p className="font-semibant">Automate monthly contributions</p>
                <p className="text-sm">Set and forget, increase annually</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 font-bold">5</span>
              <div>
                <p className="font-semibant">Stay the course for decades</p>
                <p className="text-sm">Ignore news, check annually</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">What fixes most investing mistakes?</h3>
              <p className="text-gray-700">A simple plan + automation. Write down your strategy and automate everything so emotions can't derail you.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Should I buy individual stocks as a beginner?</h3>
              <p className="text-gray-700">Only as a small "play money" slice (&lt;5%) after your core index funds are established. Most professionals can't beat the market consistently.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">How do I stop checking my portfolio daily?</h3>
              <p className="text-gray-700">Remove apps from your phone, set up automatic investing, and focus on increasing your income/savings rate instead.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">What if I've already made these mistakes?</h3>
              <p className="text-gray-700">Stop, simplify, and restart with a basic strategy. The best time to fix investing mistakes is now—the second best time was yesterday.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-rebalance-your-portfolio-automatically" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibant text-blue-900">← Auto-Rebalance Portfolio</h3>
              <p className="text-sm text-blue-700 mt-1">Keep allocation on target</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-read-an-expense-ratio-and-why-fees-kill-returns" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibant text-green-900">Understand Expense Ratios →</h3>
              <p className="text-sm text-green-700 mt-1">Why fees matter so much</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}