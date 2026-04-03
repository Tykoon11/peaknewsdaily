import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') || ''

  if (host === 'peaknewsdaily.com') {
    const url = request.nextUrl.clone()
    url.host = 'www.peaknewsdaily.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  // Hard-disable legacy auth/admin/submit surfaces on public site
  const blockedPrefixes = ['/admin', '/api/admin', '/api/auth', '/submit', '/submit-content']

  if (blockedPrefixes.some(prefix => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.redirect(new URL('/contact', request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
}
