
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ADMIN_LOGIN_PATH = '/admin/login';
const ADMIN_DASHBOARD_PATH = '/admin/dashboard';
const ADMIN_BASE_PATH = '/admin';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('admin-session-token');

  // Allow requests to the login page regardless of session
  if (pathname === ADMIN_LOGIN_PATH) {
    // If logged in and trying to access login page, redirect to dashboard
    if (sessionToken) {
      return NextResponse.redirect(new URL(ADMIN_DASHBOARD_PATH, request.url));
    }
    return NextResponse.next();
  }

  // Protect all other /admin routes
  if (pathname.startsWith(ADMIN_BASE_PATH)) {
    if (!sessionToken) {
      // Not logged in, redirect to login page
      return NextResponse.redirect(new URL(ADMIN_LOGIN_PATH, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to all routes under /admin
};
