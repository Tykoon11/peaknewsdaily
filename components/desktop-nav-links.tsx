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
      <Link href="/" className="nav-link group relative overflow-hidden rounded-lg px-2 xl:px-3 py-1.5 transition-all duration-200 hover:bg-white/10 flex-shrink-0" data-active={isActive('/', 'exact') || undefined}>
        <span className="relative z-10 text-sm">Home</span>
      </Link>
      {primary.map((c) => (
        <Link key={c.id} href={`/category/${c.slug}`} className="nav-link group relative overflow-hidden rounded-lg px-2 xl:px-3 py-1.5 transition-all duration-200 hover:bg-white/10 flex-shrink-0" data-active={isActive(`/category/${c.slug}`) || undefined}>
          <span className="relative z-10 text-sm truncate max-w-20 xl:max-w-none">{c.name}</span>
        </Link>
      ))}
      {extra.length > 0 && (
        <details className="relative group flex-shrink-0">
          <summary className="nav-link cursor-pointer list-none relative overflow-hidden rounded-lg px-2 xl:px-3 py-1.5 transition-all duration-200 hover:bg-white/10 flex items-center gap-1">
            <span className="text-sm">More</span>
            <svg className="w-3 h-3 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="more-menu">
            {extra.map((c) => (
              <Link key={c.id} href={`/category/${c.slug}`} className="more-item" data-active={isActive(`/category/${c.slug}`) || undefined}>{c.name}</Link>
            ))}
          </div>
        </details>
      )}
      <Link href="/submit" className="nav-link group relative overflow-hidden rounded-lg px-2 xl:px-3 py-1.5 transition-all duration-200 hover:bg-white/10 flex-shrink-0" data-active={isActive('/submit', 'exact') || undefined}>
        <span className="relative z-10 text-sm">Submit</span>
      </Link>
      {isStaff && (
        <Link href="/admin" className="nav-link group relative overflow-hidden rounded-lg px-2 xl:px-3 py-1.5 transition-all duration-200 hover:bg-white/10 flex-shrink-0" data-active={isActive('/admin') || undefined}>
          <span className="relative z-10 flex items-center gap-1 text-sm">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="hidden xl:inline">Admin</span>
          </span>
        </Link>
      )}
    </>
  )
}

