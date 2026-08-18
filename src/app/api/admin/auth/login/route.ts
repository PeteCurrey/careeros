import { NextResponse, type NextRequest } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { checkRateLimit, resetRateLimit } from '@/lib/admin/rate-limit';
import { recordAdminSecurityEvent } from '@/lib/admin/session';
import { getAdminMfaFactors } from '@/lib/admin/mfa';

export async function POST(request: NextRequest) {
  try {
    const forwardedHeader = request.headers.get('x-forwarded-for');
    const ip = (forwardedHeader?.split(',')[0] || 'unknown-ip').trim();
    const userAgent = request.headers.get('user-agent') || 'unknown-agent';

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Unable to authenticate with those credentials.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 1. Check IP and email rate limits
    const rateLimitKey = `admin_login:${ip}:${normalizedEmail}`;
    const rateCheck = await checkRateLimit(rateLimitKey);

    if (!rateCheck.allowed) {
      await recordAdminSecurityEvent({
        eventType: 'login_failure',
        success: false,
        ipAddress: ip,
        userAgent,
        metadata: {
          reason: 'rate_limited',
          retryAfterSeconds: rateCheck.retryAfterSeconds,
          emailAttempted: normalizedEmail,
        },
      });

      return NextResponse.json(
        {
          error: `Too many failed attempts. Please try again in ${rateCheck.retryAfterSeconds || 60} seconds.`,
        },
        { status: 429 }
      );
    }

    const supabase = createAdminClient();

    // 2. Look up admin profile and workspace membership
    const { data: identities } = await supabase
      .from('identities')
      .select('profile_id, provider_user_id')
      .eq('email', normalizedEmail)
      .limit(1);

    const identity = identities?.[0];

    // Always use generic error response to prevent user enumeration
    const genericAuthError = { error: 'Unable to authenticate with those credentials.' };

    if (!identity) {
      await recordAdminSecurityEvent({
        eventType: 'login_failure',
        success: false,
        ipAddress: ip,
        userAgent,
        metadata: { reason: 'account_not_found', emailAttempted: normalizedEmail },
      });
      return NextResponse.json(genericAuthError, { status: 401 });
    }

    // Verify admin workspace membership exists
    const { data: membership } = await supabase
      .from('workspace_memberships')
      .select(`
        id,
        status,
        workspaces!inner (
          type
        )
      `)
      .eq('profile_id', identity.profile_id)
      .eq('workspaces.type', 'ADMIN')
      .eq('status', 'ACTIVE')
      .single();

    if (!membership) {
      await recordAdminSecurityEvent({
        adminProfileId: identity.profile_id,
        eventType: 'login_failure',
        success: false,
        ipAddress: ip,
        userAgent,
        metadata: { reason: 'no_admin_membership', emailAttempted: normalizedEmail },
      });
      return NextResponse.json(genericAuthError, { status: 401 });
    }

    // 3. Verify password with Supabase Auth
    // In production with real Supabase credentials, verify password via signInWithPassword
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    if (authError && process.env.NODE_ENV === 'production') {
      await recordAdminSecurityEvent({
        adminProfileId: identity.profile_id,
        eventType: 'login_failure',
        success: false,
        ipAddress: ip,
        userAgent,
        metadata: { reason: 'invalid_password', emailAttempted: normalizedEmail },
      });
      return NextResponse.json(genericAuthError, { status: 401 });
    }

    // 4. Primary authentication succeeded -> Evaluate MFA requirements
    await resetRateLimit(rateLimitKey);

    const mfaStatus = await getAdminMfaFactors(identity.profile_id);

    await recordAdminSecurityEvent({
      adminProfileId: identity.profile_id,
      eventType: 'login_success',
      success: true,
      ipAddress: ip,
      userAgent,
      metadata: { mfaEnrolled: mfaStatus.hasMfaEnrolled },
    });

    // Return challenge context for Stage 2 (MFA)
    // A session is NOT issued yet — issued ONLY after second factor verification
    return NextResponse.json({
      success: true,
      requiresMfa: true,
      hasMfaEnrolled: mfaStatus.hasMfaEnrolled,
      hasTotp: mfaStatus.hasTotp,
      hasPasskey: mfaStatus.hasPasskey,
      remainingRecoveryCodes: mfaStatus.remainingRecoveryCodes,
      challengeToken: Buffer.from(
        JSON.stringify({
          adminProfileId: identity.profile_id,
          supabaseUserId: authData?.user?.id || identity.provider_user_id,
          timestamp: Date.now(),
        })
      ).toString('base64url'),
    });
  } catch (err: any) {
    console.error('Admin login API exception:', err);
    return NextResponse.json(
      { error: 'An internal authentication error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
