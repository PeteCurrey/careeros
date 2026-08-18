import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Mail, Plus } from 'lucide-react';

export default async function AdminNewslettersPage() {
  await requireAdminRole('marketing');
  const supabase = createAdminClient();

  const { data: newsletters } = await supabase
    .from('newsletters')
    .select('*')
    .order('name', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Communications"
        title="Newsletters & Editorial Digests"
        description="Database-managed newsletter publications: CareerOS Weekly, Events Near You, Graduate Schemes, and School Careers Leader digests."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Publication</span>
          </button>
        }
      />

      {!newsletters || newsletters.length === 0 ? (
        <AdminEmptyState
          icon={Mail}
          title="0 Active Newsletter Publications"
          description="Register automated or curated weekly editions to broadcast upcoming events, apprenticeship highlights and career insights."
          actionLabel="Register Newsletter"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {newsletters.map((nl) => (
            <div key={nl.id} className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{nl.name}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{nl.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
