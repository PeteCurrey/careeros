import { NextResponse, type NextRequest } from 'next/server';
import {
  validateAdminSessionToken,
  recordAdminSecurityEvent,
  ADMIN_SESSION_COOKIE_NAME,
  ADMIN_FALLBACK_COOKIE_NAME,
} from '@/lib/admin/session';
import { generateRecoveryCodes, storeRecoveryCodes } from '@/lib/admin/mfa';
import { createAdminClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const forwardedHeader = request.headers.get('x-forwarded-for');
    const ip = (forwardedHeader?.split(',')[0] || 'unknown-ip').trim();
    const userAgent = request.headers.get('user-agent') || 'unknown-agent';

    const token =
      request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value ||
      request.cookies.get(ADMIN_FALLBACK_COOKIE_NAME)?.value;

    const body = await request.json();
    const { challengeToken, factorType, factorLabel, verificationCode } = body;

    let adminProfileId = '';

    if (token) {
      const validation = await validateAdminSessionToken(token);
      if (validation.valid && validation.session) {
        adminProfileId = validation.session.admin_profile_id;
      }
    } else if (challengeToken) {
      try {
        const payload = JSON.parse(Buffer.from(challengeToken, 'base64url').toString('utf8'));
        adminProfileId = payload.adminProfileId;
      } catch {
        return NextResponse.json({ error: 'Invalid challenge token' }, { status: 400 });
      }
    }

    if (!adminProfileId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = createAdminClient();

    // 1. Enroll Factor
    if (factorType === 'totp') {
      if (!verificationCode || !/^\d{6}$/.test(verificationCode.trim())) {
        return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 });
      }

      await supabase.from('admin_mfa_factors').insert({
        admin_profile_id: adminProfileId,
        factor_type: 'totp',
        factor_label: factorLabel || 'Authenticator App',
        enrolled_at: new Date().toISOString(),
      });

      await recordAdminSecurityEvent({
        adminProfileId,
        eventType: 'mfa_totp_enrolled',
        success: true,
        ipAddress: ip,
        userAgent,
      });
    } else if (factorType === 'passkey') {
      await supabase.from('admin_mfa_factors').insert({
        admin_profile_id: adminProfileId,
        factor_type: 'webauthn_passkey',
        factor_label: factorLabel || 'Security Key / Passkey',
        enrolled_at: new Date().toISOString(),
      });

      await recordAdminSecurityEvent({
        adminProfileId,
        eventType: 'mfa_passkey_enrolled',
        success: true,
        ipAddress: ip,
        userAgent,
      });
    }

    // 2. Generate 10 single-use recovery codes
    const { plaintextCodes, hashedCodes } = generateRecoveryCodes(10);
    await storeRecoveryCodes(adminProfileId, hashedCodes);

    await recordAdminSecurityEvent({
      adminProfileId,
      eventType: 'recovery_codes_regenerated',
      success: true,
      ipAddress: ip,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      recoveryCodes: plaintextCodes, // Displayed once to administrator
    });
  } catch (err: any) {
    console.error('MFA enrollment error:', err);
    return NextResponse.json({ error: 'Failed to enroll MFA factor' }, { status: 500 });
  }
}
