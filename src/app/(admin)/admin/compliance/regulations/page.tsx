import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader } from '@/components/admin/AdminCommonUI';
import { COMPLIANCE_REGULATIONS_REGISTRY } from '@/lib/compliance/registry';

export default async function AdminComplianceRegulationsPage() {
  await requireAdminRole('read_only');

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="Regulatory Compliance Register"
        description="Statutory mapping of jurisdiction-specific AI laws, student privacy legislation, and automated employment decision tool rules."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
            <tr>
              <th className="p-3">Regulation Code</th>
              <th className="p-3">Jurisdiction</th>
              <th className="p-3">Applicability Trigger</th>
              <th className="p-3">Implementation</th>
              <th className="p-3">Owner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {COMPLIANCE_REGULATIONS_REGISTRY.map((reg) => (
              <tr key={reg.id} className="hover:bg-[var(--color-surface-interactive)]">
                <td className="p-3">
                  <div className="font-bold text-white">{reg.shortCode}</div>
                  <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">{reg.regulationName}</div>
                </td>
                <td className="p-3 font-mono text-[11px] text-[var(--color-text-secondary)]">{reg.jurisdiction}</td>
                <td className="p-3 text-[var(--color-text-secondary)] max-w-sm leading-relaxed">{reg.applicabilityTrigger}</td>
                <td className="p-3">
                  <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                    {reg.implementationStatus}
                  </span>
                </td>
                <td className="p-3 text-[var(--color-text-tertiary)]">{reg.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
