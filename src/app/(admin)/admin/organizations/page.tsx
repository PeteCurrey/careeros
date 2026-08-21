import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Building2, Plus, ShieldCheck } from 'lucide-react';

export default async function AdminOrganizationsPage() {
  await requireAdminRole('support');
  const supabase = createAdminClient();

  const { data: orgs } = await supabase
    .from('organisations')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Organizations"
        title="Organizations Directory"
        description="Unified management for Employers, High Schools, Colleges, Universities, Event Organizers and Educational Partners."
      />

      {!orgs || orgs.length === 0 ? (
        <AdminEmptyState
          icon={Building2}
          title="0 Organizations in Database"
          description="Organizational entities will appear here as schools and employers create enterprise workspaces or establish institutional partnerships."
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Organization Name</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Domain</th>
                  <th className="p-3">Verification</th>
                  <th className="p-3">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {orgs.map((org) => (
                  <tr key={org.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-semibold text-[var(--color-text-primary)]">
                      {org.name}
                    </td>
                    <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                      {org.type}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {org.domain || '—'}
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                        {org.verified_at ? 'Verified' : 'Pending'}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(org.created_at).toLocaleDateString()}
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
