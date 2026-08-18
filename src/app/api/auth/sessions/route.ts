import { NextResponse, type NextRequest } from 'next/server';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const adminDb = createAdminClient();
    const { data: profile } = await adminDb
      .from('profiles')
      .select('id')
      .eq('auth_user_id', user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found.' }, { status: 404 });
    }

    const { data: sessions, error } = await adminDb
      .from('user_active_sessions')
      .select('*')
      .eq('profile_id', profile.id)
      .is('revoked_at', null)
      .order('last_active_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, sessions: sessions || [] });
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return NextResponse.json({ error: 'Failed to load sessions.' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json();
    const { sessionId, revokeAllOthers } = body;

    const adminDb = createAdminClient();
    const { data: profile } = await adminDb
      .from('profiles')
      .select('id')
      .eq('auth_user_id', user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found.' }, { status: 404 });
    }

    if (revokeAllOthers) {
      await adminDb
        .from('user_active_sessions')
        .update({ revoked_at: new Date().toISOString() })
        .eq('profile_id', profile.id)
        .is('revoked_at', null);

      await recordUserSecurityEvent({
        profileId: profile.id,
        eventType: 'session_revoked',
        metadata: { scope: 'all_other_sessions' },
      });

      return NextResponse.json({ success: true, message: 'All other sessions revoked.' });
    }

    if (sessionId) {
      await adminDb
        .from('user_active_sessions')
        .update({ revoked_at: new Date().toISOString() })
        .eq('id', sessionId)
        .eq('profile_id', profile.id);

      await recordUserSecurityEvent({
        profileId: profile.id,
        eventType: 'session_revoked',
        metadata: { sessionId },
      });

      return NextResponse.json({ success: true, message: 'Session revoked.' });
    }

    return NextResponse.json({ error: 'Session ID required.' }, { status: 400 });
  } catch (error) {
    console.error('Error revoking session:', error);
    return NextResponse.json({ error: 'Failed to revoke session.' }, { status: 500 });
  }
}
