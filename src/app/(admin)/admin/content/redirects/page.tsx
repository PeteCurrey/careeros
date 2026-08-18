import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ArrowRightLeft, Plus } from 'lucide-react';

export default async function AdminRedirectsPage() {
  await requireAdminRole('content_editor');
  const supabase = createAdminClient();

  const { data: redirects } = await supabase
    .from('redirects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Content Management"
        title="URL Redirects Manager"
        description="Configure permanent (301) and temporary (302/307) HTTP redirects with loop validation and automated hit tracking."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Redirect</span>
          </button>
        }
      />

      {!redirects || redirects.length === 0 ? (
        <AdminEmptyState
          icon={ArrowRightLeft}
          title="0 Active URL Redirects"
          description="There are currently no custom URL rewrites or legacy route redirects configured in the database."
          actionLabel="Add Redirect Rule"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Source Path</th>
                  <th className="p-3">Target Destination</th>
                  <th className="p-3">Status Code</th>
                  <th className="p-3">Hit Count</th>
                  <th className="p-3">Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {redirects.map((red) => (
                  <tr key={red.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-mono text-[var(--color-text-primary)]">
                      {red.source_path}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                      {red.target_path}
                    </td>
                    <td className="p-3 font-mono text-[10px]">
                      {red.status_code}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {red.hit_count.toLocaleString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                          red.is_active
                            ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                            : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                        }`}
                      >
                        {red.is_active ? 'Active' : 'Disabled'}
                      </span>
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
