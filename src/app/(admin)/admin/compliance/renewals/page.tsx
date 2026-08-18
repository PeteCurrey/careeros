import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader } from '@/components/admin/AdminCommonUI';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default async function AdminComplianceRenewalsPage() {
  await requireAdminRole('read_only');

  const renewalItems = [
    { title: 'SOC 2 Type II Annual Examination', dueDate: '2026-02-15', owner: 'VP Information Security', status: 'scheduled' },
    { title: 'ISO/IEC 27001 ISMS Surveillance Audit', dueDate: '2025-11-15', owner: 'Lead Security Architect', status: 'scheduled' },
    { title: 'ISO/IEC 42001 AIMS Surveillance Audit', dueDate: '2026-01-15', owner: 'AI Governance Lead', status: 'scheduled' },
    { title: 'NYC Local Law 144 Annual Bias Audit', dueDate: '2025-12-15', owner: 'Chief Trust Officer', status: 'scheduled' },
    { title: 'Annual Penetration Testing Window', dueDate: '2025-10-15', owner: 'SecOps Team', status: 'scheduled' },
  ];

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="Compliance & Audit Renewal Calendar"
        description="Tracking annual audit windows, certificate expirations, algorithmic bias audit renewals, and third-party penetration testing."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
            <tr>
              <th className="p-3">Assurance Activity</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Assigned Owner</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {renewalItems.map((item) => (
              <tr key={item.title} className="hover:bg-[var(--color-surface-interactive)]">
                <td className="p-3 font-semibold text-white">{item.title}</td>
                <td className="p-3 font-mono text-[var(--color-text-secondary)]">{item.dueDate}</td>
                <td className="p-3 text-[var(--color-text-secondary)]">{item.owner}</td>
                <td className="p-3">
                  <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
