import { notFound } from 'next/navigation';
import { ARTICLES } from '../_data/articles';
import ArticleLayout from '../_components/ArticleLayout';
import { getArticleContent } from '../_utils/markdown';

export function generateStaticParams() {
  return ARTICLES.map(a => ({ article: a.slug.replace('/education/','') }));
}

export const dynamicParams = false;

export function generateMetadata({ params }:{ params:{ article:string }}) {
  const a = ARTICLES.find(x => x.slug === `/education/${params.article}`);
  return { 
    title: a ? `${a.title} | PeakNewsDaily` : 'Article | PeakNewsDaily',
    description: a?.summary || `Learn essential ${a?.pillar} concepts for successful trading.`
  };
}

export default function Page({ params }:{ params:{ article:string }}) {
  const article = ARTICLES.find(x => x.slug === `/education/${params.article}`);
  if (!article) return notFound();

  // Try to get custom content, fall back to template
  const articleContent = getArticleContent(article.slug);

  return (
    <ArticleLayout 
      article={article}
      content={articleContent.hasCustomContent ? articleContent.content : undefined}
      customTitle={articleContent.hasCustomContent ? articleContent.title : undefined}
      customSummary={articleContent.hasCustomContent ? articleContent.summary : undefined}
    />
  );
}