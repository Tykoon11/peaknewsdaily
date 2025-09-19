// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/news',
    '/markets',
    '/education',
    '/category',
    '/how-to',
    '/tools',
    '/api/quotes',
    '/api/prices',
    '/api/stream',
    '/api/economic-calendar',
    '/api/assets'
  ]
  
  // Admin routes that require authentication and admin role
  const adminRoutes = ['/admin']
  
  // API routes that require authentication
  const protectedApiRoutes = ['/api/admin']
  
  // Check if the route is public
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }
  
  // Get session for protected routes
  const session = await auth()
  
  // Redirect to login for admin routes without authentication
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    
    // Check admin role for admin routes
    if (session.user.role !== 'admin' && session.user.role !== 'editor') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  
  // Handle protected API routes
  if (protectedApiRoutes.some(route => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    if (session.user.role !== 'admin' && session.user.role !== 'editor') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}