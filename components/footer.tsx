import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-12 site-footer">
      <div className="container py-6 text-sm text-gray-600 flex flex-wrap gap-4 footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} PeakNewsDaily</span>
        <Link href="/legal/community-guidelines" className="hover:underline footer-link">Guidelines</Link>
        <Link href="/legal/terms" className="hover:underline footer-link">Terms</Link>
        <Link href="/legal/privacy" className="hover:underline footer-link">Privacy</Link>
        <Link href="/legal/dmca" className="hover:underline footer-link">DMCA</Link>
      </div>
    </footer>
  )
}
