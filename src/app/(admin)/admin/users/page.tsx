import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Users, Search, Shield, Filter } from 'lucide-react';

export default async function AdminUsersDirectoryPage() {
  await requireAdminRole('support');
  const supabase = createAdminClient();

  const { data: users } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="User Management"
        title="Users & Identity Directory"
        description="Comprehensive user records, verification status, age gating classifications, guardian consent states and support tooling."
      />

      {!users || users.length === 0 ? (
        <AdminEmptyState
          icon={Users}
          title="0 User Profiles"
          description="User records created via the onboarding and registration flows will be manageable here with privacy-safe support controls."
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">User Profile</th>
                  <th className="p-3">Age Bracket</th>
                  <th className="p-3">Consent State</th>
                  <th className="p-3">Account Status</th>
                  <th className="p-3">Created</th>
                  <th className="p-3 text-right">Support Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3">
                      <div className="font-semibold text-[var(--color-text-primary)]">
                        {user.display_name || user.given_name || 'Individual Member'}
                      </div>
                      <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                        {user.id.slice(0, 8)}
                      </div>
                    </td>
                    <td className="p-3 font-mono text-[10px]">
                      {user.age_bracket || 'ADULT_18_PLUS'}
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]">
                        {user.consent_state || 'NOT_REQUIRED'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                        {user.status}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(user.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-right">
                      <span className="text-[11px] text-[#2F8FFF] cursor-pointer hover:underline font-medium">
                        Inspect Profile →
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
