"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type Category = { id: string; name: string; slug: string }

export default function MobileNav({
  categories,
  isStaff,
  signedIn
}: {
  categories: Category[]
  isStaff: boolean
  signedIn: boolean
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
  // Body scroll lock when menu open
  useEffect(() => {
    const original = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])
  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        className="nav-link"
        onClick={() => setOpen((v) => !v)}
      >
        {/* simple hamburger */}
        <span aria-hidden>☰</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/40 z-30" onClick={() => setOpen(false)} />
          <div className="mobile-panel z-40">
          <div className="mobile-panel-inner">
            <nav className="flex flex-col gap-3 text-sm" aria-label="Mobile">
              <Link href="/" className="mobile-link" onClick={() => setOpen(false)}>
                Home
              </Link>
              {categories.map((c) => (
                <Link key={c.id} href={`/category/${c.slug}`} className="mobile-link" data-active={pathname.startsWith(`/category/${c.slug}`) || undefined} onClick={() => setOpen(false)}>
                  {c.name}
                </Link>
              ))}
                <Link href="/submit" className="mobile-link" onClick={() => setOpen(false)}>
                  Submit
                </Link>
                {isStaff && (
                  <Link href="/admin" className="mobile-link" onClick={() => setOpen(false)}>
                    Admin
                  </Link>
                )}
                {!signedIn ? (
                  <Link href="/api/auth/signin" className="mobile-link" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                ) : (
                  <form action="/api/auth/signout" method="post">
                    <button className="mobile-link" type="submit" onClick={() => setOpen(false)}>
                      Sign out
                    </button>
                  </form>
                )}
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
