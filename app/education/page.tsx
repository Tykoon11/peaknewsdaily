import Link from 'next/link';
import { PILLARS, ARTICLES } from './_data/articles';
import { ArticleCard } from './_components/ArticleCard';

export const metadata = {
  title: 'Trading Education Hub | PeakNewsDaily',
  description: 'Complete trading education covering risk management, strategy development, execution, psychology, and more. Learn to trade with confidence.',
  keywords: 'trading education, risk management, trading strategies, position sizing, trading psychology, market analysis'
};

export default function TradingEducationHub() {
  // Get featured articles from each pillar
  const featuredArticles = PILLARS.map(pillar => {
    const pillarArticles = ARTICLES.filter(a => a.pillar === pillar.id);
    return {
      pillar,
      articles: pillarArticles.slice(0, 2) // Show 2 articles per pillar
    };
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Trading Education Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master trading with comprehensive guides covering risk management, strategy development, 
          execution tactics, and trader psychology. From beginner basics to advanced techniques.
        </p>
      </header>

      {/* Learning Paths Overview */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Learning Paths</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {PILLARS.map((pillar, index) => {
            const articleCount = ARTICLES.filter(a => a.pillar === pillar.id).length;
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500', 
              'from-green-500 to-emerald-500',
              'from-orange-500 to-red-500',
              'from-indigo-500 to-purple-500',
              'from-pink-500 to-rose-500',
              'from-teal-500 to-green-500',
              'from-amber-500 to-orange-500'
            ];
            
            return (
              <Link
                key={pillar.id}
                href={pillar.slug}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${gradients[index]} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {pillar.intro}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{articleCount} guides</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 font-medium">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Content by Pillar */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Featured Guides</h2>
        </div>

        {featuredArticles.map(({ pillar, articles }) => (
          <div key={pillar.id} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{pillar.intro}</p>
              </div>
              <Link 
                href={pillar.slug}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium text-sm"
              >
                View all →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard 
                  key={article.slug}
                  title={article.title}
                  href={article.slug}
                  summary={article.summary || `Essential ${pillar.title.toLowerCase()} concepts for traders.`}
                />
              ))}
              
              {/* Show "View More" card if there are more articles */}
              {ARTICLES.filter(a => a.pillar === pillar.id).length > 2 && (
                <Link
                  href={pillar.slug}
                  className="flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 p-6 transition-all duration-200 group"
                >
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      +{ARTICLES.filter(a => a.pillar === pillar.id).length - 2} more guides
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Getting Started Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">New to Trading?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Start with the fundamentals. Our beginner-friendly guides will help you build a solid foundation 
            before diving into advanced strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/education/position-sizing-101"
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-semibold hover:shadow-lg dark:hover:bg-gray-700 transition-all"
            >
              Position Sizing Basics
            </Link>
            <Link
              href="/education/risk-reward-expectancy"
              className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-xl font-semibold hover:shadow-lg dark:hover:bg-gray-700 transition-all"
            >
              Risk-Reward Ratios
            </Link>
            <Link
              href="/education/trading-psychology-discipline"
              className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-6 py-3 rounded-xl font-semibold hover:shadow-lg dark:hover:bg-gray-700 transition-all"
            >
              Trading Psychology
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{ARTICLES.length}+</div>
            <div className="text-gray-600 dark:text-gray-300">Expert Guides</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{PILLARS.length}</div>
            <div className="text-gray-600 dark:text-gray-300">Learning Paths</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Free Content</div>
          </div>
        </div>
      </section>
    </main>
  );
}