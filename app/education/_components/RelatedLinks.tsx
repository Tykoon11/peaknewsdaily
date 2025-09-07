import Link from 'next/link';

export default function RelatedLinks({ links }: { links: Array<{ href: string; label: string }> }) {
  if (!links?.length) return null;
  return (
    <aside className="mt-10 border-t pt-4">
      <h4 className="text-sm font-semibold mb-2">Related reading</h4>
      <ul className="grid gap-2">
        {links.map((l) => (<li key={l.href}><Link className="hover:underline" href={l.href}>{l.label}</Link></li>))}
      </ul>
    </aside>
  );
}