import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { auth, signOut } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function Nav() {
  const session = await auth()
  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } })
  const role = (session?.user as any)?.role as string | undefined
  const isStaff = role === 'editor' || role === 'admin'

  async function doSignOut() {
    'use server'
    await signOut()
  }
  return (
    <header className="border-b site-header">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold site-title">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</Link>
        <nav className="flex items-center gap-4 text-sm site-nav">
          {categories.map((c) => (
            <Link key={c.id} href={`/category/${c.slug}`} className="hover:underline nav-link">{c.name}</Link>
          ))}
          <Link href="/search" className="hover:underline nav-link">Search</Link>
          <Link href="/submit" className="hover:underline nav-link">Submit</Link>
          {isStaff && <Link href="/admin" className="hover:underline nav-link">Admin</Link>}
          {!session?.user ? (
            <Link href="/api/auth/signin" className="hover:underline nav-link">Sign in</Link>
          ) : (
            <form action={doSignOut}>
              <button className="hover:underline nav-link" type="submit">Sign out</button>
            </form>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
