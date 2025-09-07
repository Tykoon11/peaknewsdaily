import Link from 'next/link';

export function ArticleCard({ title, href, summary }: { title: string; href: string; summary?: string }) {
  return (
    <Link href={href} className="block rounded-2xl border p-4 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      {summary && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{summary}</p>}
      <div className="mt-3 text-xs text-muted-foreground">Read →</div>
    </Link>
  );
}