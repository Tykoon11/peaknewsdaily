import { TrendingUp, BookOpen, Shield, Target, DollarSign, BarChart3, Zap, Users, CheckCircle, Star, ChartColumn, Lightbulb, Award, Globe, Lock, TrendingDown, Calculator, MessageCircle, PieChart, Percent, CreditCard, FileText } from 'lucide-react'

interface ETFMutualFundsLayoutProps {
  title: string
  description?: string
  content?: string
  categories: string[]
}

export default function ETFMutualFundsLayout({ title, description, content, categories }: ETFMutualFundsLayoutProps) {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-8">
            <BarChart3 className="h-10 w-10 text-white" />
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
                'ETF Analysis': BarChart3,
                'Investment Comparison': Target,
                'Cost Analysis': DollarSign,
                'Smart Investing': Lightbulb
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

        {/* Key Differences Overview */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Star className="h-8 w-8 mr-3 text-yellow-600" />
            ETF vs Mutual Funds: Key Differences
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Exchange-Traded Funds (ETFs)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Trade like stocks with intraday pricing and maximum flexibility for active investors.</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Key Advantages:</h4>
                <ul className="space-y-1">
                  {[
                    "Intraday trading flexibility and real-time pricing",
                    "Lower expense ratios (typically 0.03% - 0.75%)", 
                    "Superior tax efficiency through in-kind redemptions",
                    "No minimum investment requirements",
                    "Transparent daily holdings disclosure"
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
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Mutual Funds
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Professional management with automatic investing features for long-term wealth building.</p>
              
              <div className="space-y-1">
                {[
                  { feature: "Professional Management", desc: "Active portfolio management and research capabilities" },
                  { feature: "Automatic Features", desc: "Dollar-cost averaging and dividend reinvestment" },
                  { feature: "Fractional Shares", desc: "Invest exact dollar amounts without share calculations" },
                  { feature: "No Trading Fees", desc: "Direct purchases without brokerage commissions" },
                  { feature: "Fund Families", desc: "Easy switching between funds in same family" },
                  { feature: "End-of-Day Pricing", desc: "NAV-based pricing eliminates bid-ask spreads" }
                ].map((item, i) => (
                  <div key={i} className="text-slate-700 dark:text-slate-300 text-sm">
                    <span className="font-semibold">{item.feature}:</span> {item.desc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis Deep Dive */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <DollarSign className="h-8 w-8 mr-3 text-green-600" />
            Cost Analysis: Every Basis Point Matters
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Understanding the true cost of investment options and their long-term impact on returns:</p>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">Expense Ratios Comparison</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">ETF Expense Ratios:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Index ETFs: 0.03% - 0.20%</li>
                    <li>• Sector ETFs: 0.15% - 0.65%</li>
                    <li>• International ETFs: 0.05% - 0.75%</li>
                    <li>• Smart Beta ETFs: 0.15% - 0.85%</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Mutual Fund Expense Ratios:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Index Funds: 0.05% - 0.50%</li>
                    <li>• Active Funds: 0.50% - 2.00%</li>
                    <li>• International Funds: 0.75% - 1.50%</li>
                    <li>• Specialty Funds: 1.00% - 2.50%</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Trading Costs & Fees</h3>
              <ul className="space-y-2">
                {[
                  "ETF bid-ask spreads (typically 0.01% - 0.10%)",
                  "Mutual fund sales loads (0% - 5.75%)",
                  "Brokerage commissions on ETF trades",
                  "12b-1 marketing fees in mutual funds",
                  "Account maintenance and service fees",
                  "Early redemption fees for mutual funds"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">Long-Term Cost Impact</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded p-4">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">$100,000 Investment Over 30 Years:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>0.05% expense ratio:</strong> $486,000 final value</li>
                    <li><strong>0.50% expense ratio:</strong> $432,000 final value</li>
                    <li><strong>1.50% expense ratio:</strong> $332,000 final value</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">*Assumes 7% annual returns before fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Efficiency Analysis */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Percent className="h-8 w-8 mr-3 text-red-600" />
            Tax Efficiency: Maximizing After-Tax Returns
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Understanding tax implications for optimal portfolio placement and wealth preservation:</p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4">ETF Tax Advantages</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">In-Kind Redemption Process:</h4>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Authorized participants exchange shares for underlying securities</li>
                    <li>• ETF can dispose of low-basis shares without taxable events</li>
                    <li>• Results in significantly lower capital gains distributions</li>
                    <li>• Typical annual tax drag: 0.05% - 0.25%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Trading Control:</h4>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Investors control timing of taxable events</li>
                    <li>• Tax-loss harvesting opportunities</li>
                    <li>• No forced capital gains from other investors' redemptions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
              <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Mutual Fund Tax Considerations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Capital Gains Distributions:</h4>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Annual distributions from portfolio turnover</li>
                    <li>• Forced tax events from other investors' redemptions</li>
                    <li>• Typical annual tax drag: 0.50% - 2.00%</li>
                    <li>• Higher in actively managed funds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Tax Optimization Strategies:</h4>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Hold in tax-advantaged accounts when possible</li>
                    <li>• Choose tax-managed or index fund variants</li>
                    <li>• Consider municipal bond funds for high earners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Account Placement Strategy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Taxable Accounts:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Broad market ETFs</li>
                  <li>• Tax-managed mutual funds</li>
                  <li>• Municipal bonds (high earners)</li>
                  <li>• Individual dividend stocks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Traditional IRA/401k:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Active mutual funds</li>
                  <li>• REITs and high-dividend funds</li>
                  <li>• International funds</li>
                  <li>• Bond funds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Roth IRA:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• High-growth potential investments</li>
                  <li>• Small-cap and emerging market funds</li>
                  <li>• Alternative investments</li>
                  <li>• Tax-inefficient strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Strategy Frameworks */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Target className="h-8 w-8 mr-3 text-blue-600" />
            Investment Strategy Frameworks
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Choosing the right approach based on your investment goals and time horizon:</p>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                strategy: "Passive Index Investing",
                timeHorizon: "Long-term (10+ years)",
                bestFor: "ETFs",
                approach: [
                  "Broad market index exposure for core holdings",
                  "Low-cost ETFs with minimal tracking error",
                  "Tax-efficient in taxable accounts",
                  "Automatic diversification across markets",
                  "Dollar-cost averaging through regular purchases"
                ],
                examples: [
                  "VTI (Total Stock Market ETF)",
                  "VTIAX (Total International Stock Index Fund)",
                  "BND (Total Bond Market ETF)"
                ]
              },
              {
                strategy: "Active Management",
                timeHorizon: "Medium-term (5-15 years)", 
                bestFor: "Mutual Funds",
                approach: [
                  "Professional fund manager research and selection",
                  "Potential for outperformance in inefficient markets",
                  "Active risk management during market downturns",
                  "Sector rotation and tactical allocation",
                  "Best in retirement accounts for tax efficiency"
                ],
                examples: [
                  "FXNAX (Fidelity U.S. Large Cap Index)",
                  "DODGX (Dodge & Cox Stock Fund)", 
                  "VTMGX (Vanguard Developed Markets Index)"
                ]
              },
              {
                strategy: "Hybrid Approach",
                timeHorizon: "Variable",
                bestFor: "Both",
                approach: [
                  "Core holdings in low-cost index funds/ETFs",
                  "Satellite positions in active or thematic strategies",
                  "ETFs for tactical allocation and trading",
                  "Mutual funds for automatic investing features",
                  "Rebalancing between asset classes and strategies"
                ],
                examples: [
                  "Core: VTI + VTIAX (80% allocation)",
                  "Satellite: Sector ETFs (10% allocation)",
                  "Active: Small-cap mutual fund (10% allocation)"
                ]
              }
            ].map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">{framework.strategy}</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">{framework.timeHorizon}</p>
                  <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium mt-2">
                    Best For: {framework.bestFor}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Approach:</h4>
                    <ul className="space-y-1">
                      {framework.approach.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {framework.examples.map((example, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 text-sm">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decision Framework */}
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Calculator className="h-8 w-8 mr-3 text-purple-600" />
            Decision Framework: ETF or Mutual Fund?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Choose ETFs When:
              </h3>
              <ul className="space-y-2">
                {[
                  "You want maximum trading flexibility and control",
                  "Tax efficiency is a priority (taxable accounts)",
                  "You prefer lower expense ratios and transparent holdings",
                  "You're implementing tactical allocation strategies",
                  "You want intraday trading capabilities",
                  "You're using a robo-advisor or brokerage platform",
                  "You're building a core-satellite portfolio structure",
                  "You need specific sector or factor exposure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Choose Mutual Funds When:
              </h3>
              <ul className="space-y-2">
                {[
                  "You want automatic investing and dollar-cost averaging",
                  "You prefer professional active management",
                  "You're investing in retirement accounts (401k/IRA)",
                  "You want fractional share investing capabilities",
                  "You value fund family switching privileges",
                  "You're using employer retirement plan options",
                  "You want set-it-and-forget-it simplicity",
                  "You need specialized active strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Quick Decision Checklist</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { factor: "Account Type", etf: "Taxable", mf: "401k/IRA" },
                { factor: "Investment Amount", etf: "Any size", mf: "$1,000+ min" },
                { factor: "Trading Frequency", etf: "Active/Tactical", mf: "Buy & Hold" },
                { factor: "Tax Priority", etf: "High", mf: "Not applicable" },
                { factor: "Management Style", etf: "Passive/Index", mf: "Active/Managed" },
                { factor: "Automation Needs", etf: "Manual", mf: "Automatic" },
                { factor: "Cost Sensitivity", etf: "Ultra-low", mf: "Moderate" },
                { factor: "Complexity Tolerance", etf: "Higher", mf: "Lower" }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded p-3">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-1">{item.factor}:</h4>
                  <div className="space-y-1 text-xs">
                    <div><strong>ETF:</strong> {item.etf}</div>
                    <div><strong>MF:</strong> {item.mf}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Original Content */}
        {content && (
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-indigo-600" />
              Complete Investment Analysis
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose the Right Investment Vehicle?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-3xl mx-auto">
            Explore more investment guides and start building your optimized portfolio with the perfect combination of ETFs and mutual funds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/category/investing" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              More Investment Guides
            </a>
            <a href="/post/2025-portfolio-diversification-guide-modern-asset-allocation-strategies" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-blue-700 transition-colors">
              Portfolio Diversification
            </a>
            <a href="/post/s-p-500-index-investing-complete-2025-strategy-guide" className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              S&P 500 Investing Guide
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