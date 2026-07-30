import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('accessToken')?.value;

  // Protect Admin Portal
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Protect Agent Portal
  if (pathname.startsWith('/agent') && !pathname.startsWith('/agent/login')) {
    if (!token) {
      return NextResponse.redirect(new URL('/agent/login', request.url));
    }
  }

  // Protect Customer Portal
  if (pathname.startsWith('/portal')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/agent/:path*', '/portal/:path*'],
};
