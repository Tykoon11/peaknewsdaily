import { NextRequest, NextResponse } from 'next/server'

function redirectToContact(request: NextRequest) {
  return NextResponse.redirect(new URL('/contact', request.url), 308)
}

export function GET(request: NextRequest) {
  return redirectToContact(request)
}

export function POST(request: NextRequest) {
  return redirectToContact(request)
}
