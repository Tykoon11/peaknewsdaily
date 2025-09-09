import Link from 'next/link';

export function ArticleCard({ title, href, summary }: { title: string; href: string; summary?: string }) {
  return (
    <Link href={href} className="block rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:shadow-md dark:hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      {summary && <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{summary}</p>}
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">Read →</div>
    </Link>
  );
}