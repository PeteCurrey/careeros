import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import {
  COMPLIANCE_FRAMEWORKS_REGISTRY,
  AI_DECISION_SYSTEMS_REGISTRY,
  COMPLIANCE_DOCUMENTS_VAULT,
  COMPLIANCE_REGULATIONS_REGISTRY,
} from '@/lib/compliance/registry';
import {
  ShieldCheck,
  Award,
  Lock,
  Bot,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Plus,
  Search,
  Filter,
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export default async function AdminCompliancePage() {
  await requireAdminRole('read_only');
  const supabase = createAdminClient();

  // Try fetching dynamic requests and frameworks from Supabase
  const [{ data: dbFrameworks }, { data: dbRequests }, { data: dbRenewals }] = await Promise.all([
    supabase.from('compliance_frameworks').select('*').order('display_order', { ascending: true }),
    supabase.from('compliance_document_requests').select('*').order('created_at', { ascending: false }).limit(20),
    supabase.from('compliance_renewals').select('*').order('due_date', { ascending: true }),
  ]);

  const frameworks = dbFrameworks && dbFrameworks.length > 0 ? dbFrameworks : COMPLIANCE_FRAMEWORKS_REGISTRY;
  const requests = dbRequests || [];

  // Metrics aggregation
  const totalFrameworks = frameworks.length;
  const certifiedCount = frameworks.filter((f) => f.status === 'certified').length;
  const attestedCount = frameworks.filter((f) => f.status === 'attested').length;
  const compliantCount = frameworks.filter((f) => f.status === 'compliant').length;
  const alignedCount = frameworks.filter((f) => f.status === 'aligned').length;
  const inProgressCount = frameworks.filter((f) => f.status === 'in_progress').length;
  const pendingRequestsCount = requests.filter((r) => r.status === 'pending').length;

  return (
    <div className="space-y-8">
      <AdminSectionHeader
        category="Assurance & Governance"
        title="Compliance & Assurance Control Centre"
        description="Operational management of verified security certifications, AI decision governance, evidence vault dossiers, statutory renewal calendars, and institutional NDA access requests."
        actions={
          <div className="flex items-center gap-2">
            <Link
              href={ROUTES.TRUST_COMPLIANCE}
              target="_blank"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:bg-[var(--color-surface-interactive)] text-[var(--color-text-primary)] transition-colors"
            >
              <span>View Public Center</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        }
      />

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Total Frameworks</p>
          <p className="text-xl font-bold text-white mt-1">{totalFrameworks}</p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">Active Registry</p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Certified / Attested</p>
          <p className="text-xl font-bold text-[#34D399] mt-1">{certifiedCount + attestedCount}</p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">SOC 2 & ISO Standards</p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Compliant / Aligned</p>
          <p className="text-xl font-bold text-[#6BB8FF] mt-1">{compliantCount + alignedCount}</p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">FERPA, NIST & Privacy</p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">AI Systems Enrolled</p>
          <p className="text-xl font-bold text-white mt-1">{AI_DECISION_SYSTEMS_REGISTRY.length}</p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">ISO/IEC 42001 AIMS</p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Evidence Documents</p>
          <p className="text-xl font-bold text-white mt-1">{COMPLIANCE_DOCUMENTS_VAULT.length}</p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">Vault Inventory</p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Pending Requests</p>
          <p className={`text-xl font-bold mt-1 ${pendingRequestsCount > 0 ? 'text-[#FBBF24]' : 'text-white'}`}>
            {pendingRequestsCount}
          </p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">Institutional NDA</p>
        </div>
      </div>

      {/* Section 1: Framework Registry Table */}
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden space-y-0">
        <div className="p-4 border-b border-[var(--color-border-default)] flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Framework & Standard Registry ({frameworks.length})
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Accredited certifications, independent attestations, statutory education laws, and cybersecurity baselines.
            </p>
          </div>
          <span className="font-mono text-[10px] text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded border border-[#34D399]/30">
            Guarded Verification
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Standard / Framework</th>
                <th className="p-3">Category</th>
                <th className="p-3">Status</th>
                <th className="p-3">Version</th>
                <th className="p-3">Assurance Scope</th>
                <th className="p-3">Auditor / Body</th>
                <th className="p-3">Renewal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {frameworks.map((framework) => (
                <tr key={framework.id} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3">
                    <div className="font-bold text-white">{framework.name}</div>
                    <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">{framework.id}</div>
                  </td>
                  <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    {framework.category.replace('_', ' ')}
                  </td>
                  <td className="p-3">
                    <span
                      className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                        framework.status === 'certified' || framework.status === 'attested' || framework.status === 'compliant'
                          ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                          : framework.status === 'aligned'
                          ? 'bg-[#2F8FFF]/10 text-[#2F8FFF] border-[#2F8FFF]/30'
                          : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                      }`}
                    >
                      {framework.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[11px] text-[var(--color-text-secondary)]">
                    {framework.standardVersion || '—'}
                  </td>
                  <td className="p-3 font-mono text-[10px] text-[var(--color-text-tertiary)] max-w-xs truncate">
                    {framework.scope?.join(', ') || 'Global Platform'}
                  </td>
                  <td className="p-3 text-[11px] text-[var(--color-text-secondary)]">
                    {framework.auditorOrCertificationBody || 'Internal Controls'}
                  </td>
                  <td className="p-3 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {framework.renewalDate ? new Date(framework.renewalDate).toLocaleDateString() : 'Annual'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: AI Decision Governance Registry */}
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden space-y-0">
        <div className="p-4 border-b border-[var(--color-border-default)] flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              AI Decision Governance Registry (NYC LL144, Illinois AIVA, Colorado SB 24-205)
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Controlled catalog of deployed model pipelines, decision types, protected class risks, and human review gates.
            </p>
          </div>
          <span className="font-mono text-[10px] text-[#6BB8FF] bg-[#6BB8FF]/10 px-2 py-0.5 rounded border border-[#6BB8FF]/30">
            ISO/IEC 42001
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">System ID</th>
                <th className="p-3">System Name</th>
                <th className="p-3">Model & Provider</th>
                <th className="p-3">Classification</th>
                <th className="p-3">Protected Class Risk</th>
                <th className="p-3">Human Review</th>
                <th className="p-3">Bias Audit</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {AI_DECISION_SYSTEMS_REGISTRY.map((sys) => (
                <tr key={sys.id} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3 font-mono font-bold text-[#6BB8FF]">{sys.systemId}</td>
                  <td className="p-3 font-semibold text-white">{sys.systemName}</td>
                  <td className="p-3 text-[11px] text-[var(--color-text-secondary)]">
                    {sys.modelName} ({sys.modelProvider})
                  </td>
                  <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                    {sys.decisionType}
                  </td>
                  <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    {sys.protectedClassRisk}
                  </td>
                  <td className="p-3 font-mono text-[10px] text-[#34D399]">
                    {sys.humanReviewRequired ? 'Mandatory' : 'Optional'}
                  </td>
                  <td className="p-3 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {sys.biasAuditRequired ? 'Audited' : 'N/A'}
                  </td>
                  <td className="p-3">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                      {sys.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Evidence Vault & Regulatory Registers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regulatory Register */}
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="p-4 border-b border-[var(--color-border-default)]">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Regulatory Register ({COMPLIANCE_REGULATIONS_REGISTRY.length})
            </h3>
          </div>
          <div className="divide-y divide-[var(--color-border-subtle)] text-xs">
            {COMPLIANCE_REGULATIONS_REGISTRY.map((reg) => (
              <div key={reg.id} className="p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{reg.shortCode}</span>
                  <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                    {reg.implementationStatus}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[var(--color-text-tertiary)]">{reg.jurisdiction}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{reg.applicabilityTrigger}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Vault */}
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="p-4 border-b border-[var(--color-border-default)]">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Evidence Vault ({COMPLIANCE_DOCUMENTS_VAULT.length} Documents)
            </h3>
          </div>
          <div className="divide-y divide-[var(--color-border-subtle)] text-xs">
            {COMPLIANCE_DOCUMENTS_VAULT.map((doc) => (
              <div key={doc.id} className="p-4 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-white">{doc.title}</h4>
                  <p className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                    {doc.documentType} &bull; v{doc.version}
                  </p>
                </div>
                <span
                  className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded-xs border shrink-0 ${
                    doc.requiresNda
                      ? 'bg-[#FBBF24]/10 text-[#FBBF24] border-[#FBBF24]/30'
                      : 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                  }`}
                >
                  {doc.requiresNda ? 'NDA Required' : 'Public'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
