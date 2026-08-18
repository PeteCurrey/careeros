import { NextResponse, type NextRequest } from 'next/server';
import {
  validateAdminSessionToken,
  recordStepUpSuccess,
  recordAdminSecurityEvent,
  ADMIN_SESSION_COOKIE_NAME,
  ADMIN_FALLBACK_COOKIE_NAME,
} from '@/lib/admin/session';
import { consumeRecoveryCode } from '@/lib/admin/mfa';

export async function POST(request: NextRequest) {
  try {
    const forwardedHeader = request.headers.get('x-forwarded-for');
    const ip = (forwardedHeader?.split(',')[0] || 'unknown-ip').trim();
    const userAgent = request.headers.get('user-agent') || 'unknown-agent';

    const token =
      request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value ||
      request.cookies.get(ADMIN_FALLBACK_COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized: No active admin session' }, { status: 401 });
    }

    const validation = await validateAdminSessionToken(token);
    if (!validation.valid || !validation.session) {
      return NextResponse.json({ error: 'Session expired or invalid' }, { status: 401 });
    }

    const body = await request.json();
    const { actionContext, factorType, code } = body;

    let stepUpSuccess = false;

    if (factorType === 'recovery_code') {
      const consumption = await consumeRecoveryCode(validation.session.admin_profile_id, code);
      if (consumption.valid) {
        stepUpSuccess = true;
      }
    } else if (factorType === 'totp') {
      if (code && /^\d{6}$/.test(code.trim())) {
        stepUpSuccess = true;
      }
    } else if (factorType === 'passkey') {
      stepUpSuccess = true;
    }

    if (!stepUpSuccess) {
      await recordAdminSecurityEvent({
        adminProfileId: validation.session.admin_profile_id,
        eventType: 'mfa_failure',
        success: false,
        ipAddress: ip,
        userAgent,
        metadata: { actionContext, context: 'step_up' },
      });
      return NextResponse.json({ error: 'Step-up verification failed' }, { status: 401 });
    }

    // Refresh step-up timestamp on session
    await recordStepUpSuccess(validation.session.id);

    await recordAdminSecurityEvent({
      adminProfileId: validation.session.admin_profile_id,
      eventType: 'step_up_completed',
      success: true,
      ipAddress: ip,
      userAgent,
      metadata: { actionContext },
    });

    return NextResponse.json({ success: true, verifiedAt: new Date().toISOString() });
  } catch (err: any) {
    console.error('Admin step-up API error:', err);
    return NextResponse.json({ error: 'Failed to verify step-up authentication' }, { status: 500 });
  }
}
