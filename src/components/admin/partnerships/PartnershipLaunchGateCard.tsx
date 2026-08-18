'use client';

import React, { useState } from 'react';
import { PartnerCompliance, PartnerComplianceStatus } from '@/types/admin/partnerships';
import { evaluateLaunchGate } from '@/lib/admin/partnerships';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, Lock, FileText } from 'lucide-react';

interface Props {
  compliance: PartnerCompliance | null;
  partnerName: string;
  onUpdateStatus?: (field: keyof PartnerCompliance, value: unknown) => void;
  onApplyOverride?: (reason: string) => void;
}

export function PartnershipLaunchGateCard({ compliance, partnerName, onUpdateStatus, onApplyOverride }: Props) {
  const [overrideReason, setOverrideReason] = useState('');
  const [showOverrideInput, setShowOverrideInput] = useState(false);

  const evaluation = evaluateLaunchGate(compliance);

  const renderStatusBadge = (status: PartnerComplianceStatus | undefined) => {
    switch (status) {
      case 'passed':
        return <Badge variant="success" size="sm" className="font-mono">PASSED</Badge>;
      case 'blocked':
        return <Badge variant="danger" size="sm" className="font-mono">BLOCKED</Badge>;
      case 'not_required':
        return <Badge variant="default" size="sm" className="font-mono text-xs">N/A</Badge>;
      case 'pending':
      default:
        return <Badge variant="warning" size="sm" className="font-mono">PENDING</Badge>;
    }
  };

  const gateItems: { key: keyof PartnerCompliance; label: string; desc: string; type: 'status' | 'boolean' }[] = [
    { key: 'contract_status', label: 'Commercial Agreement / MOU', desc: 'Executed contract or signed institutional agreement', type: 'status' },
    { key: 'dpa_status', label: 'Data Processing Agreement (DPA)', desc: 'Standard data protection addendum with boundary terms', type: 'status' },
    { key: 'security_review_status', label: 'Security Architecture Review', desc: 'Authentication, API secrets, and encryption assessment', type: 'status' },
    { key: 'privacy_review_status', label: 'Privacy & Data Minimization', desc: 'Zero unredacted data exposure, consent boundaries', type: 'status' },
    { key: 'minors_review_status', label: 'Youth & Minor Safeguarding Review', desc: 'COPPA / FERPA compliance; default private for under-18s', type: 'status' },
    { key: 'data_flows_documented', label: 'Data Flow Mapping Documented', desc: 'Complete architecture diagram of inbound/outbound payloads', type: 'boolean' },
    { key: 'ai_governance_status', label: 'AI Governance & Training Bounds', desc: 'Partner terms forbid using CareerOS data for model training', type: 'status' },
    { key: 'trademark_permission_status', label: 'Trademark & Brand Usage Rights', desc: 'Explicit scope for partner brand/trademark representation', type: 'status' },
    { key: 'logo_permission_status', label: 'Logo Display Approval', desc: 'Written permission for partner logo on CareerOS site', type: 'status' },
    { key: 'public_reference_permission', label: 'Public Announcement Permission', desc: 'Mutual agreement on press release and public relations', type: 'status' },
    { key: 'technical_qa_status', label: 'Technical Integration QA', desc: 'Successful sandbox test payloads and error handling', type: 'status' },
    { key: 'support_escalation_agreed', label: 'Support & Incident Escalation SLA', desc: 'Agreed escalation contacts for technical outages', type: 'boolean' },
  ];

  return (
    <Card className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2F8FFF]" />
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Partnership Launch Gate &amp; Compliance Audit
            </h2>
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            Mandatory 12-point legal, privacy, security, and child-safeguarding gate required before moving to LIVE.
          </p>
        </div>

        <div>
          {evaluation.canLaunch ? (
            <div className="px-3 py-1.5 rounded-lg bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] text-[#34D399] font-mono font-bold text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>LAUNCH APPROVED</span>
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-lg bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.3)] text-[#F87171] font-mono font-bold text-xs flex items-center gap-1.5">
              <Lock className="w-4 h-4" />
              <span>LAUNCH BLOCKED ({evaluation.blockers.length} ITEMS)</span>
            </div>
          )}
        </div>
      </div>

      {/* Override Notice if present */}
      {compliance?.override_reason && (
        <div className="p-3 bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.3)] rounded-lg text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-[#FBBF24]">
            <AlertTriangle className="w-4 h-4" />
            <span>Executive Launch Gate Override Active</span>
          </div>
          <p className="text-[var(--color-text-secondary)]">
            <strong>Reason:</strong> {compliance.override_reason}
          </p>
        </div>
      )}

      {/* Checklist Table */}
      <div className="space-y-3">
        {gateItems.map((item) => {
          const rawVal = compliance ? compliance[item.key] : undefined;
          const isBool = item.type === 'boolean';

          return (
            <div
              key={item.key}
              className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg flex items-center justify-between text-xs"
            >
              <div className="space-y-0.5 max-w-lg">
                <span className="font-semibold text-[var(--color-text-primary)]">{item.label}</span>
                <p className="text-[11px] text-[var(--color-text-tertiary)]">{item.desc}</p>
              </div>

              <div>
                {isBool ? (
                  rawVal ? (
                    <Badge variant="success" size="sm" className="font-mono">YES</Badge>
                  ) : (
                    <Badge variant="danger" size="sm" className="font-mono">NO</Badge>
                  )
                ) : (
                  renderStatusBadge(rawVal as PartnerComplianceStatus)
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Executive Override Button & Input */}
      {!evaluation.canLaunch && (
        <div className="pt-2 border-t border-[var(--color-border-default)]">
          {showOverrideInput ? (
            <div className="space-y-3 p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg">
              <label htmlFor="override-reason" className="text-xs font-bold text-[var(--color-text-primary)]">
                Executive Override Justification (Logged to Immutable Audit Trail)
              </label>
              <textarea
                id="override-reason"
                rows={2}
                value={overrideReason}
                onChange={(e) => setOverrideReason(e.target.value)}
                placeholder="Provide executive business and risk justification for launching prior to standard gate completion…"
                className="w-full px-3 py-2 text-xs rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowOverrideInput(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  disabled={!overrideReason.trim()}
                  onClick={() => {
                    if (onApplyOverride && overrideReason.trim()) {
                      onApplyOverride(overrideReason);
                      setShowOverrideInput(false);
                    }
                  }}
                >
                  Confirm Executive Override
                </Button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowOverrideInput(true)}
              className="text-xs text-[var(--color-text-tertiary)] hover:text-[#FBBF24] font-mono underline"
            >
              Request authorized executive launch override &rarr;
            </button>
          )}
        </div>
      )}
    </Card>
  );
}
