import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "@/lib/routes";
import { ADMIN_SESSION_COOKIE_NAME, ADMIN_FALLBACK_COOKIE_NAME } from "@/lib/admin/session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Guard /admin routes
  if (pathname.startsWith("/admin")) {
    const isPublicAdminRoute =
      pathname === ROUTES.ADMIN_LOGIN ||
      pathname.startsWith("/admin/login") ||
      pathname.startsWith("/admin/accept-invitation");

    if (isPublicAdminRoute) {
      return NextResponse.next();
    }

    const adminToken =
      request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value ||
      request.cookies.get(ADMIN_FALLBACK_COOKIE_NAME)?.value;

    const isDev = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_APP_ENV === "development";
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    if (isDev && (!supabaseUrl || supabaseUrl === "")) {
      return NextResponse.next();
    }

    if (!adminToken) {
      const loginUrl = new URL(ROUTES.ADMIN_LOGIN, request.url);
      if (pathname !== ROUTES.ADMIN) {
        loginUrl.searchParams.set("redirectTo", pathname);
      }
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next({
      request: { headers: request.headers },
    });
  }

  // 2. Guard /app and /api/app routes
  if (pathname.startsWith("/app") || pathname.startsWith("/api/app")) {
    // Check for Supabase session cookie or token
    const hasAuthCookie = request.cookies.getAll().some((c) =>
      c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
    );

    const isDev = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_APP_ENV === "development";
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // If completely unauthenticated and not dev without creds
    if (!hasAuthCookie && !(isDev && (!supabaseUrl || supabaseUrl === ""))) {
      if (pathname.startsWith("/api/app")) {
        return NextResponse.json({ error: "Authentication required." }, { status: 401 });
      }
      const loginUrl = new URL(ROUTES.LOGIN, request.url);
      loginUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/app/:path*", "/api/app/:path*"],
};
