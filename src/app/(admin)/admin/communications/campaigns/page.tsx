import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Send, Plus, ShieldCheck } from 'lucide-react';

export default async function AdminCampaignsPage() {
  await requireAdminRole('marketing');
  const supabase = createAdminClient();

  const { data: campaigns } = await supabase
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Communications"
        title="Broadcast Campaigns (Draft-First)"
        description="Targeted broadcasts, upcoming event roundups, and audience segment notifications. All campaigns default strictly to Draft status for manual preview."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Campaign Draft</span>
          </button>
        }
      />

      {!campaigns || campaigns.length === 0 ? (
        <AdminEmptyState
          icon={Send}
          title="0 Campaign Broadcasts in Database"
          description="Draft campaigns targeting specific geographic clusters or career stage cohorts will appear here for editorial review and approval."
          actionLabel="Draft First Broadcast"
          badge="Draft-First Safety Enforced"
        />
      ) : (
        <div className="space-y-2">
          {campaigns.map((camp) => (
            <div key={camp.id} className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{camp.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
