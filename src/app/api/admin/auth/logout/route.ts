import { NextResponse, type NextRequest } from 'next/server';
import {
  validateAdminSessionToken,
  revokeAdminSession,
  ADMIN_SESSION_COOKIE_NAME,
  ADMIN_FALLBACK_COOKIE_NAME,
} from '@/lib/admin/session';

export async function POST(request: NextRequest) {
  try {
    const token =
      request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value ||
      request.cookies.get(ADMIN_FALLBACK_COOKIE_NAME)?.value;

    if (token) {
      const validation = await validateAdminSessionToken(token);
      if (validation.valid && validation.session) {
        await revokeAdminSession(validation.session.id, 'admin_sign_out');
      }
    }

    const response = NextResponse.json({ success: true });

    // Clear admin session cookies
    response.cookies.delete(ADMIN_SESSION_COOKIE_NAME);
    response.cookies.delete(ADMIN_FALLBACK_COOKIE_NAME);

    return response;
  } catch (err: any) {
    console.error('Admin logout API error:', err);
    return NextResponse.json({ error: 'Failed to complete logout' }, { status: 500 });
  }
}
