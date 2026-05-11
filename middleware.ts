import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (request.nextUrl.pathname === '/dashboard') {
    const url = request.nextUrl.clone()
    url.pathname = '/contact'
    return NextResponse.redirect(url, 308)
  }

  if (host === 'peaknewsdaily.com') {
    const url = request.nextUrl.clone()
    url.host = 'www.peaknewsdaily.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
}
