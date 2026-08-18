import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader } from '@/components/admin/AdminCommonUI';
import { COMPLIANCE_DOCUMENTS_VAULT } from '@/lib/compliance/registry';
import { FileText, Lock } from 'lucide-react';

export default async function AdminComplianceEvidencePage() {
  await requireAdminRole('read_only');

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="Evidence Vault & Audit Reports"
        description="Encrypted metadata storage for third-party examination reports, accredited ISO certificates, and institutional Data Processing Agreements."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMPLIANCE_DOCUMENTS_VAULT.map((doc) => (
          <div key={doc.id} className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-[#6BB8FF]">{doc.documentType}</span>
              <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-[var(--color-text-secondary)]">
                v{doc.version}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">{doc.title}</h4>
            <p className="text-xs text-[var(--color-text-secondary)]">{doc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
