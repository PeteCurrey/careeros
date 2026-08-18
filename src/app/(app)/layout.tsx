import React from 'react';
import { SkipLink } from '@/components/layout/SkipLink';
import { AppHeader } from '@/components/app/shell/AppHeader';
import { AppBottomNav } from '@/components/app/shell/AppBottomNav';
import { getApplicationAccessState } from '@/lib/auth/access-guard';
import { createAdminClient } from '@/lib/supabase/server';
import { MENTOR_LIST } from '@/content/mentors/mentorRegistry';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  let displayName = 'Pete Currey';
  let mentorName = 'Marcus Thorne';
  let mentorPortraitSrc = '/media/mentors/marcus_thorne.jpg';
  let mentorDomain = 'Technology & Systems Architecture';

  try {
    const accessState = await getApplicationAccessState();
    const userId = accessState.userId;

    if (userId) {
      const adminDb = createAdminClient();
      const { data: profile } = await adminDb
        .from('profiles')
        .select('display_name')
        .eq('auth_user_id', userId)
        .maybeSingle();

      if (profile?.display_name) {
        displayName = profile.display_name;
      }

      const { data: assignment } = await adminDb
        .from('mentor_assignments')
        .select('mentor_id')
        .eq('user_id', userId)
        .maybeSingle();

      const mentorId = assignment?.mentor_id || 'marcus-thorne';
      const persona = MENTOR_LIST.find((m) => m.slug === mentorId) || MENTOR_LIST[0];
      if (persona) {
        mentorName = persona.name;
        mentorPortraitSrc = persona.portraitSrc;
        mentorDomain = persona.domain;
      }
    }
  } catch {
    // Non-fatal fallback defaults used
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <SkipLink />

      {/* Desktop Top Header Navigation */}
      <AppHeader
        userDisplayName={displayName}
        mentorName={mentorName}
        mentorPortraitSrc={mentorPortraitSrc}
        mentorDomain={mentorDomain}
      />

      {/* Main Application Content Area */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none pb-20 lg:pb-10">
        {children}
      </main>

      {/* Mobile-First Bottom Navigation */}
      <AppBottomNav />
    </div>
  );
}
