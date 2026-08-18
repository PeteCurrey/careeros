import { NextResponse, type NextRequest } from 'next/server';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json();
    const { password } = body;

    if (!password || password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long.' },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();

    // Update user password via Supabase Admin API
    const { error: updateAuthError } = await adminDb.auth.admin.updateUserById(
      user.id,
      { password }
    );

    if (updateAuthError) {
      console.error('Error updating password:', updateAuthError);
      return NextResponse.json(
        { error: 'Failed to configure password.' },
        { status: 500 }
      );
    }

    // Look up profile
    const { data: profile } = await adminDb
      .from('profiles')
      .select('id, security_assurance')
      .eq('auth_user_id', user.id)
      .single();

    if (profile) {
      // Promote security assurance to SECURED
      await adminDb
        .from('profiles')
        .update({
          security_assurance: 'SECURED',
          updated_at: new Date().toISOString(),
        })
        .eq('id', profile.id);

      // Record security event
      await recordUserSecurityEvent({
        profileId: profile.id,
        eventType: 'password_set',
        success: true,
      });
    }

    return NextResponse.json({
      success: true,
      securityAssurance: 'SECURED',
      message: 'Password configured successfully. CareerOS account secured.',
    });
  } catch (error) {
    console.error('Error in /api/auth/password/setup:', error);
    return NextResponse.json(
      { error: 'Password configuration failed.' },
      { status: 500 }
    );
  }
}
