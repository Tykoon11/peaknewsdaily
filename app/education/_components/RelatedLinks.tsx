import Link from 'next/link';

export default function RelatedLinks({ links }: { links: Array<{ href: string; label: string }> }) {
  if (!links?.length) return null;
  return (
    <aside className="mt-6 xs:mt-8 lg:mt-10 border-t border-gray-200 dark:border-gray-700 pt-3 xs:pt-4">
      <h4 className="text-sm xs:text-base font-semibold mb-2 xs:mb-3 text-gray-900 dark:text-gray-100">Related reading</h4>
      <ul className="grid gap-2 xs:gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link className="hover:underline text-sm xs:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" href={l.href}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}