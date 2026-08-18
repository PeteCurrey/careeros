import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader } from '@/components/admin/AdminCommonUI';
import { COMPLIANCE_FRAMEWORKS_REGISTRY } from '@/lib/compliance/registry';

export default async function AdminComplianceRegistryPage() {
  await requireAdminRole('read_only');

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="Compliance Frameworks Registry"
        description="Formal directory of all security certifications, privacy management systems, statutory student education acts, and operational baselines."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
            <tr>
              <th className="p-3">Framework Key</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Auditor / Body</th>
              <th className="p-3">Certificate Ref</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {COMPLIANCE_FRAMEWORKS_REGISTRY.map((f) => (
              <tr key={f.id} className="hover:bg-[var(--color-surface-interactive)]">
                <td className="p-3">
                  <div className="font-bold text-white">{f.name}</div>
                  <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">{f.id}</div>
                </td>
                <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                  {f.category}
                </td>
                <td className="p-3">
                  <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                    {f.status}
                  </span>
                </td>
                <td className="p-3 text-[var(--color-text-secondary)]">
                  {f.auditorOrCertificationBody || '—'}
                </td>
                <td className="p-3 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                  {f.certificateReference || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
