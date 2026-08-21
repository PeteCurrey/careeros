import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Lock, FileText, CheckCircle2, Clock, Mail } from 'lucide-react';

export default async function AdminComplianceRequestsPage() {
  await requireAdminRole('read_only');
  const supabase = createAdminClient();

  const { data: requests } = await supabase
    .from('compliance_document_requests')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="Document Access & NDA Requests"
        description="Institutional evaluation requests for confidential SOC 2 reports, penetration test summaries, and compliance dossiers."
      />

      {!requests || requests.length === 0 ? (
        <AdminEmptyState
          icon={Lock}
          title="0 Document Access Requests in Queue"
          description="Institutional inquiries and NDA access requests submitted via /trust/compliance will appear here for review."
          badge="Queue Clear"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Requester</th>
                <th className="p-3">Organization & Type</th>
                <th className="p-3">Requested Document</th>
                <th className="p-3">NDA Status</th>
                <th className="p-3">Request State</th>
                <th className="p-3">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3">
                    <div className="font-bold text-white">{req.requester_name}</div>
                    <div className="text-[11px] font-mono text-[#6BB8FF]">{req.requester_email}</div>
                  </td>
                  <td className="p-3">
                    <div className="text-white font-medium">{req.requester_organisation}</div>
                    <div className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">
                      {req.organisation_type?.replace('_', ' ')}
                    </div>
                  </td>
                  <td className="p-3 text-[var(--color-text-secondary)]">
                    {req.requested_documents?.join(', ')}
                  </td>
                  <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    {req.nda_status}
                  </td>
                  <td className="p-3">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
                      {req.status}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {new Date(req.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
