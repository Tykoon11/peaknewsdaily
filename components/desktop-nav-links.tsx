"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Category = { id: string; name: string; slug: string }

export default function DesktopNavLinks({ categories, isStaff, signedIn }: { categories: Category[]; isStaff: boolean; signedIn: boolean }) {
  const pathname = usePathname()
  const isActive = (href: string, type: 'exact' | 'startsWith' = 'startsWith') =>
    type === 'exact' ? pathname === href : pathname.startsWith(href)
  const primary = categories.slice(0, 6)
  const extra = categories.slice(6)
  return (
    <>
      <Link href="/" className="hover:underline nav-link" data-active={isActive('/', 'exact') || undefined}>Home</Link>
      {primary.map((c) => (
        <Link key={c.id} href={`/category/${c.slug}`} className="hover:underline nav-link" data-active={isActive(`/category/${c.slug}`) || undefined}>{c.name}</Link>
      ))}
      {extra.length > 0 && (
        <details className="relative group">
          <summary className="nav-link cursor-pointer list-none">More ▾</summary>
          <div className="more-menu">
            {extra.map((c) => (
              <Link key={c.id} href={`/category/${c.slug}`} className="more-item" data-active={isActive(`/category/${c.slug}`) || undefined}>{c.name}</Link>
            ))}
          </div>
        </details>
      )}
      <Link href="/submit" className="hover:underline nav-link" data-active={isActive('/submit', 'exact') || undefined}>Submit</Link>
      {isStaff && <Link href="/admin" className="hover:underline nav-link" data-active={isActive('/admin') || undefined}>Admin</Link>}
    </>
  )
}

