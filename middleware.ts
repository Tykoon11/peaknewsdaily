// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

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
    '/api/assets',
    '/api/auth'
  ]
  
  // Admin routes that require authentication and admin role
  const adminRoutes = ['/admin']
  
  // API routes that require authentication
  const protectedApiRoutes = ['/api/admin']
  
  // Check if the route is public
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }
  
  // Get session token for protected routes (Edge Runtime compatible)
  const token = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  })
  
  // Redirect to login for admin routes without authentication
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    
    // Allow any authenticated user access to admin routes (temporarily for Google Ads review)
    // Note: This will be restricted back to admin/editor roles later
  }
  
  // Handle protected API routes
  if (protectedApiRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    // Allow any authenticated user access to admin API routes (temporarily for Google Ads review)
    // Note: This will be restricted back to admin/editor roles later
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ]
}