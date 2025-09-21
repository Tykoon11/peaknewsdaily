import type { Metadata } from 'next'
import { Calculator, TrendingUp, PieChart, DollarSign, BarChart3, Activity, Target, Coins, Building2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Tools - PeakNewsDaily',
  description: 'Professional financial calculators, analysis tools, and investment utilities coming soon. Stay tuned for comprehensive trading and investment tools.',
  openGraph: {
    title: 'Financial Tools - PeakNewsDaily',
    description: 'Professional financial calculators, analysis tools, and investment utilities coming soon.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Tools - PeakNewsDaily',
    description: 'Professional financial calculators, analysis tools, and investment utilities coming soon.',
  }
}

const upcomingTools = [
  {
    icon: Calculator,
    title: 'Investment Calculator',
    description: 'Calculate compound interest, ROI, and investment growth projections',
    category: 'Calculators'
  },
  {
    icon: PieChart,
    title: 'Portfolio Analyzer',
    description: 'Analyze your investment portfolio allocation and risk metrics',
    category: 'Analysis'
  },
  {
    icon: TrendingUp,
    title: 'Stock Screener',
    description: 'Filter and discover stocks based on technical and fundamental criteria',
    category: 'Screening'
  },
  {
    icon: DollarSign,
    title: 'Dividend Tracker',
    description: 'Track dividend payments, yields, and dividend growth rates',
    category: 'Income'
  },
  {
    icon: BarChart3,
    title: 'Technical Analysis',
    description: 'Advanced charting tools with technical indicators and patterns',
    category: 'Analysis'
  },
  {
    icon: Activity,
    title: 'Risk Assessment',
    description: 'Evaluate portfolio risk, volatility, and correlation analysis',
    category: 'Risk Management'
  },
  {
    icon: Target,
    title: 'Goal Planner',
    description: 'Plan retirement, savings goals, and financial milestones',
    category: 'Planning'
  },
  {
    icon: Coins,
    title: 'Crypto Tools',
    description: 'DeFi calculators, staking rewards, and crypto portfolio tools',
    category: 'Cryptocurrency'
  },
  {
    icon: Building2,
    title: 'Real Estate Calculator',
    description: 'Mortgage calculators, cash flow analysis, and property valuation',
    category: 'Real Estate'
  }
]

const categories = [...new Set(upcomingTools.map(tool => tool.category))]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-2 xs:px-4 py-6 xs:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 xs:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl xs:rounded-2xl mb-4 xs:mb-6">
            <Zap className="h-6 w-6 xs:h-8 xs:w-8 text-white" />
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-4 xs:mb-6">
            Financial Tools
          </h1>
          
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 xs:mb-8 max-w-3xl mx-auto leading-relaxed px-2 xs:px-0">
            Professional-grade financial calculators, analysis tools, and investment utilities designed to empower your financial decisions
          </p>
          
          <div className="inline-flex items-center px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 border border-amber-200 dark:border-amber-700 rounded-full">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-800 dark:text-amber-200 font-medium text-sm xs:text-base">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl xs:rounded-2xl p-4 xs:p-6 lg:p-8 mb-8 xs:mb-12 text-center">
          <h2 className="text-lg xs:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-white mb-3 xs:mb-4">
            🚀 Advanced Financial Tools in Development
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm xs:text-base lg:text-lg">
            We're building a comprehensive suite of professional financial tools to enhance your investment research and portfolio management. 
            These tools will integrate seamlessly with our real-time market data to provide you with accurate, up-to-date calculations and analysis.
          </p>
        </div>

        {/* Upcoming Tools by Category */}
        <div className="space-y-8 xs:space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-4 xs:space-y-6">
              <h3 className="text-xl xs:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
                {upcomingTools
                  .filter(tool => tool.category === category)
                  .map((tool, index) => (
                    <div
                      key={index}
                      className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg xs:rounded-xl p-4 xs:p-6 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-3 xs:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg xs:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <tool.icon className="h-5 w-5 xs:h-6 xs:w-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-base xs:text-lg font-semibold text-slate-900 dark:text-white mb-1 xs:mb-2">
                            {tool.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 text-xs xs:text-sm leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-slate-100 dark:border-slate-700">
                        <span className="inline-flex items-center px-2 xs:px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                          In Development
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Be the first to know when our financial tools launch. We're working hard to bring you the most comprehensive toolkit for modern investors.
            </p>
            <p className="text-blue-200 text-sm">
              These tools will leverage our real-time market data to provide accurate calculations and analysis for stocks, cryptocurrencies, and traditional investments.
            </p>
          </div>
        </div>

        {/* Expected Features */}
        <div className="mt-12 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            What to Expect
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Real-Time Data</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                All tools powered by live market data
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Professional Grade</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Institutional-quality calculations and analysis
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">User Friendly</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Intuitive interfaces for all skill levels
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}