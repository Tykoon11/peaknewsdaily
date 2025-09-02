// ingest/sources.ts
export type FeedDef = {
  name: string;
  url: string;
  topic: 'investing' | 'trading' | 'crypto' | 'news';
};

// All free/public feeds for trading & investing content
export const FEEDS: FeedDef[] = [
  // Finance/Markets (general) - Working feeds
  { name: 'CNBC Markets', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', topic: 'news' },
  { name: 'Yahoo Finance Top', url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=^GSPC&region=US&lang=en-US', topic: 'news' },
  { name: 'MarketWatch', url: 'https://feeds.content.dowjones.io/public/rss/mw_topstories', topic: 'trading' },
  
  // Alternative financial news sources
  { name: 'Invezz Markets', url: 'https://invezz.com/feed/', topic: 'news' },
  { name: 'Investing.com News', url: 'https://www.investing.com/rss/news.rss', topic: 'trading' },
  { name: 'Financial Times Markets', url: 'https://www.ft.com/markets?format=rss', topic: 'trading' },
  
  // Canadian Regulatory (Fixed URLs)
  { name: 'OSC Headlines', url: 'https://feeds.feedburner.com/rss_osc_headlines_en', topic: 'investing' },
  { name: 'Bank of Canada', url: 'https://www.bankofcanada.ca/content_type/press-releases/feed/', topic: 'investing' },
  
  // Crypto (working feeds)
  { name: 'CoinDesk', url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', topic: 'crypto' },
  { name: 'Cointelegraph', url: 'https://cointelegraph.com/rss', topic: 'crypto' },
  { name: 'Ethereum Foundation Blog', url: 'https://blog.ethereum.org/feed.xml', topic: 'crypto' },
  { name: 'Kraken Blog', url: 'https://blog.kraken.com/feed', topic: 'crypto' },
  
  // Additional crypto sources
  { name: 'Decrypt', url: 'https://decrypt.co/feed', topic: 'crypto' },
  { name: 'The Block', url: 'https://www.theblock.co/rss.xml', topic: 'crypto' },
  
  // Professional trading sources
  { name: 'Nasdaq News', url: 'https://www.nasdaq.com/feed/nasdaq-original/rss.xml', topic: 'trading' },
  { name: 'Benzinga', url: 'https://www.benzinga.com/feed', topic: 'trading' },
];