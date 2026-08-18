import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Flag, Plus, ShieldCheck } from 'lucide-react';

export default async function AdminFeatureFlagsPage() {
  await requireAdminRole('super_admin');
  const supabase = createAdminClient();

  const { data: flags } = await supabase
    .from('feature_flags')
    .select('*')
    .order('name', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="System Operations"
        title="Platform Feature Flags"
        description="Database-backed feature flags controlling staged rollouts, experimental AI capabilities, authentication methods and institutional SSO."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Flag Key</th>
                <th className="p-3">Description</th>
                <th className="p-3">Global State</th>
                <th className="p-3">Rollout %</th>
                <th className="p-3">Audience Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {flags?.map((flag) => (
                <tr key={flag.id} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3 font-mono font-semibold text-[var(--color-text-primary)]">
                    {flag.name}
                  </td>
                  <td className="p-3 text-[var(--color-text-secondary)]">
                    {flag.description}
                  </td>
                  <td className="p-3">
                    <span
                      className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                        flag.enabled
                          ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                          : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                      }`}
                    >
                      {flag.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                    {flag.rollout_percentage}%
                  </td>
                  <td className="p-3 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {flag.workspace_types?.join(', ') || 'Global'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
