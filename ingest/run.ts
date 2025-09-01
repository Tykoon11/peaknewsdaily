// ingest/run.ts
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import crypto from 'crypto';
import { FEEDS } from './sources';
import { fetchFeed } from './rss';

const prisma = new PrismaClient();

function slugFrom(title: string) {
  const s = slugify(title, { lower: true, strict: true, trim: true });
  const short = s.slice(0, 72);
  return short || 'news-item';
}

export async function runIngest() {
  const results = { fetched: 0, newItems: 0, deduped: 0, published: 0 };
  
  // Ensure Topics exist
  const topics = ['investing', 'trading', 'crypto', 'brokers-exchanges', 'how-to', 'tools', 'news', 'security'];
  for (const t of topics) {
    await prisma.topic.upsert({
      where: { slug: t },
      update: {},
      create: { 
        slug: t, 
        title: t.charAt(0).toUpperCase() + t.slice(1).replace('-', ' & '),
        description: `Professional ${t} news and insights`
      },
    });
  }

  for (const def of FEEDS) {
    console.log(`Fetching feed: ${def.name}`);
    const items = await fetchFeed(def);
    results.fetched += items.length;

    for (const it of items) {
      // Write to IngestItem (dedupe by sourceUrl)
      const exists = await prisma.ingestItem.findUnique({ where: { sourceUrl: it.sourceUrl } });
      if (exists) { 
        results.deduped++; 
        continue; 
      }

      await prisma.ingestItem.create({
        data: {
          sourceName: it.sourceName,
          sourceUrl: it.sourceUrl,
          publishedAt: it.publishedAt,
          title: it.title,
          excerpt: it.excerpt,
          contentHtmlSummary: it.contentHtmlSummary,
          topic: it.topic,
          citationsJson: it.citationsJson,
        },
      });
      results.newItems++;

      // Optional direct publish to NewsItem (for live site)
      if (process.env.NEWS_DIRECT_PUBLISH === 'true' || process.env.NEWS_DIRECT_PUBLISH === 'TRUE') {
        const slug = `${slugFrom(it.title)}-${crypto.createHash('md5').update(it.sourceUrl).digest('hex').slice(0, 6)}`;
        
        try {
          await prisma.newsItem.create({
            data: {
              slug,
              title: it.title,
              excerpt: it.excerpt,
              contentHtml: it.contentHtmlSummary,
              topicSlug: it.topic,
              sourceName: it.sourceName,
              sourceUrl: it.sourceUrl,
              publishedAt: it.publishedAt,
            },
          });
          results.published++;
        } catch (error) {
          // Skip duplicate slugs
          console.warn(`Skipped duplicate slug: ${slug}`);
        }
      }
    }
  }
  
  console.log('Ingest completed:', results);
  return results;
}