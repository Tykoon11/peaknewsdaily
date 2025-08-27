import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-6 text-sm text-gray-600 flex flex-wrap gap-4">
        <span>© {new Date().getFullYear()} PeakNewsDaily</span>
        <Link href="/legal/community-guidelines" className="hover:underline">Guidelines</Link>
        <Link href="/legal/terms" className="hover:underline">Terms</Link>
        <Link href="/legal/privacy" className="hover:underline">Privacy</Link>
        <Link href="/legal/dmca" className="hover:underline">DMCA</Link>
      </div>
    </footer>
  )
}

