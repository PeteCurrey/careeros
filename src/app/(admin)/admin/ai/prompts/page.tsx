import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ShieldCheck, Plus, Edit3 } from 'lucide-react';

export default async function AdminAIPromptsPage() {
  await requireAdminRole('super_admin');
  const supabase = createAdminClient();

  const { data: prompts } = await supabase
    .from('ai_prompts')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="AI Operations"
        title="Versioned Prompt Registry"
        description="Centralized prompt engineering repository. Manage system prompts, JSON output schemas, and version histories with automated rollback capability."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Prompt Version</span>
          </button>
        }
      />

      {!prompts || prompts.length === 0 ? (
        <AdminEmptyState
          icon={ShieldCheck}
          title="0 Database-Managed Prompts Configured"
          description="System prompts are currently held within TypeScript modules. Register versioned prompts in this database table to enable live editorial tuning without redeploying code."
          actionLabel="Create Version 1 Prompt"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Use Case ID</th>
                  <th className="p-3">Version</th>
                  <th className="p-3">System Prompt Excerpt</th>
                  <th className="p-3">Active</th>
                  <th className="p-3">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {prompts.map((p) => (
                  <tr key={p.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-mono font-semibold text-[var(--color-text-primary)]">
                      {p.use_case_id}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                      v{p.version}
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)] truncate max-w-md font-mono text-[11px]">
                      {p.system_prompt}
                    </td>
                    <td className="p-3">
                      <span
                        className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                          p.is_active
                            ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                            : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                        }`}
                      >
                        {p.is_active ? 'Active' : 'Archived'}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(p.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
