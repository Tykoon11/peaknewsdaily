// ingest/rss.ts
import Parser from 'rss-parser';
import { htmlToText } from 'html-to-text';
import type { FeedDef } from './sources';

const parser = new Parser();

export type IngestedItem = {
  sourceName: string;
  sourceUrl: string;
  publishedAt: Date;
  title: string;
  excerpt?: string;
  contentHtmlSummary: string;
  topic: string;
  citationsJson: { name: string; url: string }[];
};

function summarize(html: string, maxWords = 180): { excerpt?: string; summaryHtml: string } {
  const text = htmlToText(html || '', { 
    wordwrap: false, 
    selectors: [{ selector: 'a', options: { ignoreHref: true } }] 
  });
  
  const words = text.trim().split(/\s+/);
  const excerpt = words.slice(0, Math.min(words.length, maxWords)).join(' ') + (words.length > maxWords ? '…' : '');
  
  // Keep a short HTML summary (plaintext wrapped)
  const summaryHtml = `<p>${excerpt}</p>`;
  return { excerpt, summaryHtml };
}

export async function fetchFeed(def: FeedDef): Promise<IngestedItem[]> {
  try {
    const feed = await parser.parseURL(def.url);
    const items: IngestedItem[] = [];
    
    for (const it of feed.items || []) {
      const link = it.link || it.guid;
      if (!link) continue;
      
      const published = it.isoDate || it.pubDate || new Date().toISOString();
      const title = it.title?.trim() || '(Untitled)';
      const contentHtml = it['content:encoded'] || it.content || it.summary || '';
      const { excerpt, summaryHtml } = summarize(contentHtml);
      
      items.push({
        sourceName: def.name,
        sourceUrl: link,
        publishedAt: new Date(published),
        title,
        excerpt,
        contentHtmlSummary: summaryHtml,
        topic: def.topic,
        citationsJson: [{ name: def.name, url: link }],
      });
    }
    
    return items;
  } catch (error) {
    console.error(`Failed to fetch feed ${def.name}:`, error);
    return [];
  }
}