import { ARTICLES, PILLARS } from '../_data/articles';
import { ArticleCard } from '../_components/ArticleCard';
import Breadcrumbs from '../_components/Breadcrumbs';

export default function PillarTemplate({ pillarId }: { pillarId: (typeof PILLARS)[number]['id'] }) {
  const pillar = PILLARS.find(p => p.id === pillarId)!;
  const items = ARTICLES.filter(a => a.pillar === pillarId);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <Breadcrumbs trail={[{href:'/education', label:'Education'}, {href:pillar.slug, label:pillar.title}]} />
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{pillar.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{pillar.intro}</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(a => (
          <ArticleCard key={a.slug} title={a.title} href={a.slug} />
        ))}
      </div>
    </section>
  );
}