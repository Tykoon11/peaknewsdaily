import Link from 'next/link';

export default function Breadcrumbs({ trail }: { trail: Array<{ href: string; label: string }> }) {
  return (
    <nav className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 mb-3 xs:mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1">
        {trail.map((t, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-1 xs:mx-2">›</span>}
            <Link href={t.href} className="hover:underline truncate max-w-[120px] xs:max-w-none">{t.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}