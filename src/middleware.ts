import { NextResponse, type NextRequest } from 'next/server';
import { ROUTES } from '@/lib/routes';
import { ADMIN_SESSION_COOKIE_NAME, ADMIN_FALLBACK_COOKIE_NAME } from '@/lib/admin/session';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only guard /admin routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Public admin routes that do not require an active admin session
  const isPublicAdminRoute =
    pathname === ROUTES.ADMIN_LOGIN ||
    pathname.startsWith('/admin/login') ||
    pathname.startsWith('/admin/accept-invitation');

  if (isPublicAdminRoute) {
    return NextResponse.next();
  }

  // Check for dedicated Admin Session Cookie
  const adminToken =
    request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value ||
    request.cookies.get(ADMIN_FALLBACK_COOKIE_NAME)?.value;

  const isDev = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_APP_ENV === 'development';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  // In local development with unconfigured credentials, allow mock console access
  if (isDev && (!supabaseUrl || supabaseUrl === '')) {
    return NextResponse.next();
  }

  // If no dedicated admin session cookie exists, redirect strictly to /admin/login (NOT consumer /login)
  if (!adminToken) {
    const loginUrl = new URL(ROUTES.ADMIN_LOGIN, request.url);
    if (pathname !== ROUTES.ADMIN) {
      loginUrl.searchParams.set('redirectTo', pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  // Pass request through — deep cryptographic and DB validation happens in Server Component / Action layer
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ['/admin/:path*'],
};
