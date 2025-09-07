import Link from 'next/link';

export default function Breadcrumbs({ trail }: { trail: Array<{ href: string; label: string }> }) {
  return (
    <nav className="text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1">
        {trail.map((t, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-2">›</span>}
            <Link href={t.href} className="hover:underline">{t.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}