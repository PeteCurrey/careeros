import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader } from '@/components/admin/AdminCommonUI';
import { AI_DECISION_SYSTEMS_REGISTRY } from '@/lib/compliance/registry';

export default async function AdminComplianceAIGovernancePage() {
  await requireAdminRole('read_only');

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="AI Decision Governance Registry"
        description="Controlled register of machine learning models, decision classifications, protected class risks, bias audit schedules, and candidate notice templates."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
            <tr>
              <th className="p-3">System ID</th>
              <th className="p-3">System Name</th>
              <th className="p-3">Model</th>
              <th className="p-3">Classification</th>
              <th className="p-3">Role</th>
              <th className="p-3">Human Review</th>
              <th className="p-3">Owner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {AI_DECISION_SYSTEMS_REGISTRY.map((sys) => (
              <tr key={sys.id} className="hover:bg-[var(--color-surface-interactive)]">
                <td className="p-3 font-mono font-bold text-[#6BB8FF]">{sys.systemId}</td>
                <td className="p-3 font-semibold text-white">{sys.systemName}</td>
                <td className="p-3 text-[var(--color-text-secondary)]">{sys.modelName}</td>
                <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">{sys.decisionType}</td>
                <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">{sys.developerOrDeployerRole}</td>
                <td className="p-3 font-mono text-[10px] text-[#34D399]">{sys.humanReviewRequired ? 'Mandatory' : 'Optional'}</td>
                <td className="p-3 text-[var(--color-text-tertiary)]">{sys.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
