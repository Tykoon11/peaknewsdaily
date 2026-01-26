import { TrendingUp, BookOpen, Shield, Target, DollarSign, BarChart3, Zap, Users, CheckCircle, Star, ChartColumn, Lightbulb, Award, Globe, Lock, TrendingDown, Calculator, MessageCircle, PieChart } from 'lucide-react'

interface InvestingGuideLayoutProps {
  title: string
  description?: string
  content: string
  categories: string[]
}

export default function InvestingGuideLayout({ title, description, content, categories }: InvestingGuideLayoutProps) {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-8">
            <PieChart className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          )}
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => {
              const categoryIcons: { [key: string]: any } = {
                'Modern Diversification': TrendingUp,
                'Asset Allocation': Target,
                'Risk Management': Shield,
                '2025 Strategies': Star
              };
              const Icon = categoryIcons[category] || BookOpen;
              const colors = [
                'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
                'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
                'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
                'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200'
              ];
              
              return (
                <span key={index} className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full ${colors[index % colors.length]}`}>
                  <Icon className="w-4 h-4 mr-2" />
                  {category}
                </span>
              );
            })}
          </div>
        </header>

        {/* What Makes This Guide Different */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Star className="h-8 w-8 mr-3 text-yellow-600" />
            What Makes This Guide Different
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Modern Diversification Strategies</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Advanced portfolio construction techniques that go beyond traditional 60/40 allocation models.</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Key Features:</h4>
                <ul className="space-y-1">
                  {[
                    "Multi-asset class integration for optimal risk-return",
                    "Alternative investment strategies and allocation models", 
                    "Dynamic rebalancing frameworks for changing markets",
                    "Factor-based investing and smart beta approaches",
                    "Geographic and currency diversification techniques"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">2025 Market Environment</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Strategies specifically designed for current market conditions and emerging opportunities.</p>
              
              <div className="space-y-1">
                {[
                  { name: "Interest Rate Environment", desc: "Optimized for current Federal Reserve policy and yield curves" },
                  { name: "Inflation Hedging", desc: "Real asset allocation and inflation-protected securities" },
                  { name: "Technology Integration", desc: "Digital assets, fintech, and AI-driven investment tools" },
                  { name: "ESG Implementation", desc: "Sustainable investing and impact measurement frameworks" },
                  { name: "Risk Management", desc: "Advanced volatility control and downside protection strategies" },
                  { name: "Tax Optimization", desc: "Updated tax strategies for current regulatory environment" }
                ].map((item, i) => (
                  <div key={i} className="text-slate-700 dark:text-slate-300 text-sm">
                    <span className="font-semibold">{item.name}:</span> {item.desc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Allocation Fundamentals */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Target className="h-8 w-8 mr-3 text-blue-600" />
            Portfolio Allocation Fundamentals
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Master the essential components of modern portfolio construction:</p>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Asset Class Selection</h3>
              <ul className="space-y-2">
                {[
                  "Equity allocation strategies across market capitalizations",
                  "Fixed income optimization and duration management",
                  "Real estate and REIT integration for inflation protection",
                  "Commodity exposure through ETFs and futures",
                  "Alternative investments and private market access",
                  "Cash management and high-yield savings optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">Geographic Diversification</h3>
              <ul className="space-y-2">
                {[
                  "Domestic vs international allocation frameworks",
                  "Developed market exposure across regions",
                  "Emerging market allocation and risk management",
                  "Currency hedging strategies and implementation",
                  "Frontier market opportunities and considerations",
                  "Global sector allocation and rotation strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">Risk Management Framework</h3>
              <ul className="space-y-2">
                {[
                  "Correlation analysis and portfolio construction",
                  "Volatility targeting and risk budgeting techniques",
                  "Downside protection and hedge strategies",
                  "Rebalancing triggers and systematic approaches",
                  "Black swan preparation and tail risk hedging"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Age-Based Allocation Strategies */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-green-600" />
            Age-Based Allocation Strategies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Optimize your portfolio based on your life stage and investment timeline:</p>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                stage: "Young Professionals (20s-30s)",
                timeHorizon: "30+ Years",
                color: "blue",
                allocation: {
                  stocks: "80-90%",
                  bonds: "5-15%",
                  alternatives: "5-10%"
                },
                focus: [
                  "Maximum growth potential through equity exposure",
                  "High-risk tolerance allows for volatility",
                  "International diversification for global exposure",
                  "Tax-advantaged account maximization",
                  "Dollar-cost averaging through market cycles"
                ]
              },
              {
                stage: "Mid-Career (40s-50s)",
                timeHorizon: "15-25 Years", 
                color: "green",
                allocation: {
                  stocks: "60-75%",
                  bonds: "20-30%",
                  alternatives: "5-15%"
                },
                focus: [
                  "Balance growth with stability preservation",
                  "Increased fixed income for volatility reduction",
                  "Real estate exposure for inflation protection",
                  "Tax optimization and estate planning",
                  "Systematic rebalancing and risk management"
                ]
              },
              {
                stage: "Pre-Retirement (55+)",
                timeHorizon: "5-15 Years",
                color: "purple",
                allocation: {
                  stocks: "40-60%",
                  bonds: "30-45%",
                  alternatives: "10-20%"
                },
                focus: [
                  "Capital preservation with moderate growth",
                  "Income generation and dividend focus",
                  "Reduced portfolio volatility",
                  "Liquidity planning for retirement needs",
                  "Healthcare and long-term care considerations"
                ]
              }
            ].map((stage, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">{stage.stage}</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">{stage.timeHorizon}</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded p-4 mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Target Allocation:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Stocks:</span>
                      <span className="font-semibold">{stage.allocation.stocks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonds:</span>
                      <span className="font-semibold">{stage.allocation.bonds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alternatives:</span>
                      <span className="font-semibold">{stage.allocation.alternatives}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {stage.focus.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Portfolio Strategies */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <BarChart3 className="h-8 w-8 mr-3 text-purple-600" />
            Advanced Portfolio Strategies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Sophisticated approaches for experienced investors:</p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Factor-Based Investing</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Systematic exposure to risk factors that drive returns:</p>
              <ul className="space-y-2">
                {[
                  "Value factor implementation through systematic screening",
                  "Growth factor targeting via momentum strategies", 
                  "Quality metrics and fundamental strength analysis",
                  "Low volatility factor for risk-adjusted returns",
                  "Size factor exposure through small-cap allocation",
                  "Profitability and investment quality factors"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4">Alternative Asset Integration</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Diversification beyond traditional stocks and bonds:</p>
              <ul className="space-y-2">
                {[
                  "Real estate investment trusts (REITs) allocation",
                  "Commodity exposure through ETFs and futures",
                  "Infrastructure investments for inflation protection",
                  "Private equity and venture capital access",
                  "Cryptocurrency and digital asset allocation",
                  "Hedge fund strategies through liquid alternatives"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-4">Dynamic Rebalancing Framework</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Calendar-Based:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Quarterly review and rebalancing</li>
                  <li>• Semi-annual comprehensive analysis</li>
                  <li>• Annual strategy optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Threshold-Based:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• 5% deviation monitoring</li>
                  <li>• 10% deviation action triggers</li>
                  <li>• 15% maximum allocation drift</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Volatility-Based:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Risk parity maintenance</li>
                  <li>• Correlation adjustment triggers</li>
                  <li>• Volatility regime recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation and Tools */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Calculator className="h-8 w-8 mr-3 text-gray-600" />
            Implementation and Tools
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Portfolio Construction Tools</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Essential resources for building and maintaining your portfolio:</p>
              <ul className="space-y-2">
                {[
                  "Low-cost index funds and ETF selection criteria",
                  "Robo-advisor platforms for automated rebalancing",
                  "Portfolio tracking and performance analysis tools",
                  "Tax-loss harvesting and optimization software",
                  "Asset allocation calculators and modeling tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-violet-200 dark:border-violet-800">
              <h3 className="text-xl font-semibold text-violet-900 dark:text-violet-100 mb-4">Ongoing Portfolio Management</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Best practices for long-term portfolio success:</p>
              <ul className="space-y-2">
                {[
                  "Regular performance review and benchmarking",
                  "Cost analysis and fee optimization strategies",
                  "Tax-efficient fund placement and harvesting",
                  "Behavioral discipline and emotional management",
                  "Professional guidance and fiduciary advice"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Investment Portfolio?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-3xl mx-auto">
            Explore more comprehensive investment guides and start building your wealth management expertise today. Join thousands of successful investors who have transformed their portfolios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/category/investing" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              More Investment Strategies
            </a>
            <a href="/post/etf-vs-mutual-funds-2025-complete-comparison-for-smart-investors" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-blue-700 transition-colors">
              ETF vs Mutual Funds Guide
            </a>
            <a href="/post/retirement-planning-2025-401k-ira-investment-strategies" className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              Retirement Planning Guide
            </a>
            <a href="/markets" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold border-2 border-blue-300 hover:bg-blue-800 transition-colors">
              Live Market Analysis
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}