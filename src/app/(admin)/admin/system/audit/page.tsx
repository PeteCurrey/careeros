import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Shield, Search, Filter, Clock } from 'lucide-react';

export default async function AdminSystemAuditPage() {
  await requireAdminRole('read_only');
  const supabase = createAdminClient();

  const { data: auditEvents } = await supabase
    .from('audit_events')
    .select('*')
    .order('occurred_at', { ascending: false })
    .limit(100);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="System Operations"
        title="Admin Audit Trail"
        description="Immutable forensic ledger recording all administrative mutations: event approvals, model switching, role assignments and user account actions."
      />

      {!auditEvents || auditEvents.length === 0 ? (
        <AdminEmptyState
          icon={Shield}
          title="0 Audit Events Recorded"
          description="Administrative mutations (event publishing, role changes, feature flag toggles) are written directly to the immutable audit_events table and displayed here."
          badge="Forensic Ledger Active"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Event Type</th>
                  <th className="p-3">Actor Type</th>
                  <th className="p-3">Subject ID</th>
                  <th className="p-3">Payload Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {auditEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(evt.occurred_at).toLocaleString()}
                    </td>
                    <td className="p-3 font-mono font-semibold text-[#2F8FFF]">
                      {evt.event_type}
                    </td>
                    <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                      {evt.actor_type}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {evt.subject_id || '—'}
                    </td>
                    <td className="p-3 font-mono text-[11px] text-[var(--color-text-secondary)] truncate max-w-xs">
                      {JSON.stringify(evt.payload || {})}
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
