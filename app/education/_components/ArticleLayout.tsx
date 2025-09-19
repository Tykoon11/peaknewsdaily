import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { ARTICLES, PILLARS } from '../_data/articles'
import Breadcrumbs from './Breadcrumbs'
import RelatedLinks from './RelatedLinks'
import Link from 'next/link'
import 'highlight.js/styles/github.css'

interface ArticleLayoutProps {
  article: (typeof ARTICLES)[number]
  content?: string
  customTitle?: string
  customSummary?: string
}

export default function ArticleLayout({ 
  article, 
  content, 
  customTitle,
  customSummary 
}: ArticleLayoutProps) {
  const pillar = PILLARS.find(p => p.id === article.pillar)!
  const title = customTitle || article.title
  const summary = customSummary || article.summary

  // Get related articles
  const siblingLinks = ARTICLES
    .filter(x => x.pillar === article.pillar && x.slug !== article.slug)
    .slice(0, 3)
    .map(x => ({ href: x.slug, label: x.title }))

  const crossLinks = [
    { href: '/education/stop-loss-fixed-vs-trailing', label: 'Stop-Loss Mastery' },
    { href: '/education/liquidity-spread-slippage', label: 'Liquidity, Spread & Slippage' },
    { href: '/education/risk-reward-expectancy', label: 'Risk-Reward Ratios' },
    { href: '/education/trading-psychology-discipline', label: 'Trading Psychology' },
  ].filter(link => link.href !== article.slug)

  const defaultContent = `# ${title}

## Overview

${summary || `This comprehensive guide covers essential concepts for ${pillar.title.toLowerCase()}. Whether you're a beginner or experienced trader, this article will help you understand the key principles and practical applications.`}

## Key Concepts

### 1. Foundation Knowledge

Understanding the basics is crucial for building a solid trading foundation. This section covers:

- **Core principles and definitions**: Essential terminology and concepts you need to know
- **Market context**: How these concepts apply in different market conditions  
- **Risk considerations**: Important safety and risk management factors
- **Best practices**: Proven approaches from experienced traders

### 2. Practical Implementation

Learn how to apply these concepts in real trading scenarios:

#### Step-by-Step Process

1. **Preparation Phase**
   - Set up your trading environment
   - Define your risk parameters
   - Identify market opportunities

2. **Execution Phase**
   - Implement your strategy systematically
   - Monitor key performance indicators
   - Adjust based on market feedback

3. **Review Phase**
   - Analyze your results objectively
   - Document lessons learned
   - Refine your approach for improvement

#### Tools and Resources

- **Platform features**: Essential tools built into your trading platform
- **Third-party software**: Additional analysis and automation tools
- **Mobile apps**: Managing trades and monitoring markets on the go
- **Educational resources**: Books, courses, and ongoing learning materials

### 3. Advanced Techniques

For experienced traders looking to refine their approach:

- **Professional strategies**: Sophisticated approaches used by institutional traders
- **Advanced analysis methods**: Complex technical and fundamental analysis techniques
- **Market psychology factors**: Understanding crowd behavior and market sentiment
- **Performance optimization**: Fine-tuning your approach for maximum efficiency

## Real-World Examples

### Example 1: Basic Application

Here's a practical example of how to implement these concepts:

\`\`\`
Example Calculation:
Account Balance: $10,000
Risk Per Trade: 2%
Risk Amount = $10,000 × 0.02 = $200

If Stop Loss Distance = $2 per share
Position Size = $200 ÷ $2 = 100 shares
\`\`\`

**Key Points:**
- Always calculate position size based on risk amount
- Consider transaction costs in your calculations
- Adjust for market volatility and liquidity

### Example 2: Advanced Strategy

A more sophisticated approach for experienced traders:

- **Multi-timeframe analysis**: Aligning short and long-term perspectives
- **Correlation considerations**: Understanding how different assets move together
- **Risk-adjusted returns**: Optimizing for risk-adjusted rather than absolute returns
- **Portfolio impact**: How individual trades affect overall portfolio performance

## Common Mistakes to Avoid

### 1. Risk Management Errors
- **Over-leveraging**: Using too much leverage relative to account size
- **Inadequate stop losses**: Not setting proper exit points before entering trades
- **Position sizing mistakes**: Risking too much or too little on individual trades
- **Ignoring correlation**: Taking multiple highly correlated positions

### 2. Psychological Pitfalls
- **Emotional decision making**: Letting fear and greed override logical analysis
- **Revenge trading**: Trying to quickly recover from losses with bigger risks
- **Overconfidence**: Taking excessive risks after a winning streak
- **Analysis paralysis**: Over-analyzing instead of taking action

### 3. Execution Issues
- **Poor timing**: Entering or exiting trades at suboptimal times
- **Platform problems**: Not understanding your trading platform fully
- **Slippage ignorance**: Not accounting for execution costs and slippage
- **Record keeping**: Failing to maintain detailed trading records

## Risk Management Guidelines

### Position Sizing Rules
- Never risk more than 1-2% of your account on a single trade
- Consider reducing position size during periods of high volatility
- Scale position size based on confidence level and market conditions
- Account for correlation when taking multiple positions

### Stop Loss Strategy
- Always define your exit point before entering a trade
- Use appropriate stop loss techniques for different market conditions
- Consider using trailing stops to protect profits
- Don't move stops against your position

### Portfolio Protection
- Maintain diversification across different assets and strategies
- Monitor overall portfolio risk, not just individual trade risk
- Keep cash reserves for opportunities and emergencies
- Regular portfolio review and rebalancing

## Tools & Resources

### Recommended Trading Platforms
- **Professional platforms**: Advanced features for serious traders
- **Beginner-friendly options**: User-friendly interfaces for new traders
- **Mobile trading apps**: Full-featured mobile trading capabilities
- **Demo accounts**: Risk-free practice environments

### Analysis Tools
- **Charting software**: Advanced technical analysis capabilities
- **Screening tools**: Finding opportunities that match your criteria
- **News and data feeds**: Real-time market information and analysis
- **Backtesting platforms**: Testing strategies on historical data

### Educational Resources
- **Online courses**: Structured learning programs
- **Trading books**: Classic and contemporary trading literature
- **Webinars and seminars**: Live learning opportunities
- **Trading communities**: Forums and groups for sharing knowledge

## Performance Tracking

### Key Metrics to Monitor
- **Win rate**: Percentage of profitable trades
- **Average win vs average loss**: Risk-reward profile
- **Maximum drawdown**: Largest peak-to-trough decline
- **Sharpe ratio**: Risk-adjusted return measurement

### Record Keeping
- Trade entry and exit points with reasoning
- Market conditions and relevant news
- Emotional state and decision-making process  
- Lessons learned and areas for improvement

## Advanced Considerations

### Market Microstructure
- Understanding bid-ask spreads and market depth
- Impact of order types on execution quality
- Market maker vs ECN execution differences
- Time of day effects on liquidity and volatility

### Regulatory Environment
- Understanding relevant regulations for your jurisdiction
- Tax implications of different trading strategies
- Reporting requirements for active traders
- Compliance with pattern day trader rules

## Key Takeaways

- **Risk first**: Always prioritize risk management over profit potential
- **Systematic approach**: Develop and follow consistent processes
- **Continuous learning**: Markets evolve, so must your knowledge and skills
- **Emotional control**: Maintain discipline and objectivity in decision making
- **Record everything**: Detailed records are essential for improvement
- **Start small**: Begin with smaller positions while developing skills
- **Practice patience**: Good opportunities require waiting for the right setup

## Frequently Asked Questions

**Q: How much should I risk on each trade?**
A: Most professional traders risk between 0.5-2% of their account on any single trade. Start with smaller amounts (0.5-1%) while developing your skills.

**Q: What's the most important skill for successful trading?**
A: Risk management is the most crucial skill. You can be wrong about market direction frequently and still be profitable with proper risk management.

**Q: How long does it take to become consistently profitable?**
A: This varies greatly, but most successful traders spend 1-3 years developing their skills before achieving consistent profitability. The learning curve is steep and requires dedication.

**Q: Should I focus on fundamental or technical analysis?**
A: Both approaches can be effective. Many successful traders use a combination. Start with one approach that resonates with you, then expand your toolkit over time.

**Q: What's the best way to learn trading?**
A: Combine theoretical study with practical application using demo accounts. Focus on developing a systematic approach rather than looking for quick profits.

## Related Topics

Explore these related articles to deepen your understanding:

- **Risk Management Fundamentals**: Core principles for protecting your capital
- **Position Sizing Strategies**: Advanced techniques for optimal trade sizing  
- **Market Psychology**: Understanding emotional factors in trading
- **Technical Analysis Basics**: Chart reading and indicator interpretation

## Conclusion

${pillar.title} represents a fundamental aspect of successful trading. By understanding and systematically applying these principles, you'll be better equipped to navigate the markets effectively and build long-term trading success.

Remember that trading is a skill that develops over time. Focus on:

- **Consistent application** of proven principles
- **Continuous learning** and adaptation
- **Disciplined risk management** in all market conditions
- **Patient capital preservation** over aggressive profit seeking

The markets will always present opportunities for those who are prepared, disciplined, and patient. Use this knowledge as a foundation for your continued development as a trader.

---

*For more comprehensive coverage of ${pillar.title.toLowerCase()}, explore our complete collection of articles in this section. Each article builds upon these foundational concepts with specific, actionable guidance for real-world application.*`

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <Breadcrumbs trail={[
        { href: '/education', label: 'Education' },
        { href: pillar.slug, label: pillar.title },
        { href: article.slug, label: title },
      ]} />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium">
            {pillar.title}
          </span>
          {article.status === 'published' && (
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-3 py-1 rounded-full font-medium">
              Published
            </span>
          )}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {title}
        </h1>
        
        {summary && (
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {summary}
          </p>
        )}
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Estimated reading time: 8-12 minutes</span>
          <span className="mx-2">•</span>
          <span>Skill level: All levels</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            h1: ({children}) => <h1 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">{children}</h1>,
            h2: ({children}) => <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">{children}</h2>, 
            h3: ({children}) => <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">{children}</h3>,
            p: ({children}) => <p className="mb-4 leading-7 text-gray-700 dark:text-gray-300">{children}</p>,
            ul: ({children}) => <ul className="mb-4 pl-6 space-y-2">{children}</ul>,
            ol: ({children}) => <ol className="mb-4 pl-6 space-y-2">{children}</ol>,
            li: ({children}) => <li className="text-gray-700 dark:text-gray-300">{children}</li>,
            blockquote: ({children}) => (
              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 pl-6 py-4 my-6 italic">
                {children}
              </blockquote>
            ),
            code: ({children, className}) => {
              const isBlock = className?.includes('language-')
              return isBlock ? (
                <code className={`${className} block bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto`}>
                  {children}
                </code>
              ) : (
                <code className="bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 px-1 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              )
            }
          }}
        >
          {content || defaultContent}
        </ReactMarkdown>
      </div>

      <RelatedLinks links={[...siblingLinks, ...crossLinks.slice(0, 3)]} />

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <Link 
            href="/education" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Trading Education
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Part of {pillar.title}
          </div>
        </div>
      </div>
    </article>
  )
}