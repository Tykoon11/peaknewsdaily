import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Hard-disable legacy auth/admin/submit surfaces on public site
  const blockedPrefixes = ['/admin', '/api/admin', '/api/auth', '/submit', '/submit-content']

  if (blockedPrefixes.some(prefix => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.redirect(new URL('/contact', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
}
