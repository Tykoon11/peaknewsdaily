import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { auth, signOut } from '@/lib/auth'

export default async function Nav() {
  const session = await auth()
  const role = (session?.user as any)?.role as string | undefined
  const isStaff = role === 'editor' || role === 'admin'

  async function doSignOut() {
    'use server'
    await signOut()
  }
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/search" className="hover:underline">Search</Link>
          <Link href="/submit" className="hover:underline">Submit</Link>
          {isStaff && <Link href="/admin" className="hover:underline">Admin</Link>}
          {!session?.user ? (
            <Link href="/api/auth/signin" className="hover:underline">Sign in</Link>
          ) : (
            <form action={doSignOut}>
              <button className="hover:underline" type="submit">Sign out</button>
            </form>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
