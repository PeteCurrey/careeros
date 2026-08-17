'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { CheckCircle2, ShieldCheck, Clock, ArrowRight, AlertTriangle, FileText, Check } from 'lucide-react';

export function VerificationJourneyInteractive() {
  const lifecycleStages = [
    {
      id: 'self-declared',
      stepNum: '01',
      title: 'Self-Declared',
      badge: 'SELF_DECLARED',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description: 'Candidate logs qualification title: "Advanced Hybrid & EV Diagnostics Certificate" with issue date and training provider.',
      provenance: 'User Data Entry',
      auditNote: 'Displayed with yellow indicator. Reviewers see it as an unverified candidate claim.',
    },
    {
      id: 'evidence-attached',
      stepNum: '02',
      title: 'Evidence Attached',
      badge: 'EVIDENCE_ATTACHED',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      description: 'Candidate uploads official diploma scan, workshop practical assessment score sheet, and certificate serial number.',
      provenance: 'Passport Evidence Vault',
      auditNote: 'Evidence artifact is attached and viewable by authorized employers, but authenticity is not yet independently verified.',
    },
    {
      id: 'issuer-verified',
      stepNum: '03',
      title: 'Issuer Verified',
      badge: 'ISSUER_VERIFIED',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      description: 'Accredited training board registry validates certificate ID (#EV-9402) and confirms active holder registration.',
      provenance: 'Direct Issuer API / Certified Registry',
      auditNote: 'Integrity hash registered. Credential receives green Issuer Verified badge with verifiable timestamp.',
    },
    {
      id: 'expired',
      stepNum: '04',
      title: 'Expired / Renewal Due',
      badge: 'EXPIRED',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      description: '3-year recertification window closes without refresher training log. System flags status transparently.',
      provenance: 'Automated Lifecycle Watcher',
      auditNote: 'Status updates to Expired. Past achievement remains on historical record, but active validity is transparently flagged.',
    },
  ];

  const [activeStageIndex, setActiveStageIndex] = useState(2);
  const activeStage = lifecycleStages[activeStageIndex]!;

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 shadow-subtle">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
        <div className="space-y-1">
          <span className="section-label">CREDENTIAL LIFECYCLE &bull; ILLUSTRATIVE WORKFLOW</span>
          <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)]">
            How a Credential Evolves Through Verification States
          </h3>
        </div>
        <Link
          href={ROUTES.TRUST_VERIFICATION}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-900 transition-colors shrink-0"
        >
          <span>How Career OS verification works</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stage Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {lifecycleStages.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-4 rounded-[var(--radius-card)] text-left border transition-all space-y-2 ${
                isActive
                  ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-sm'
                  : 'bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-700)]'}`}>
                  STAGE {stage.stepNum}
                </span>
                {idx === 2 ? (
                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-emerald-600'}`} />
                ) : idx === 3 ? (
                  <AlertTriangle className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                ) : (
                  <Clock className={`w-4 h-4 ${isActive ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-400)]'}`} />
                )}
              </div>
              <h4 className="font-bold text-xs leading-snug">{stage.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Panel */}
      <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${activeStage.badgeColor}`}>
              {activeStage.badge}
            </span>
            <span className="text-xs font-mono text-[var(--color-taupe-700)]">
              PROVENANCE: {activeStage.provenance}
            </span>
          </div>

          <h4 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
            Stage {activeStage.stepNum}: {activeStage.title}
          </h4>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            {activeStage.description}
          </p>

          <p className="text-[11px] text-[var(--color-text-primary)] font-medium pt-1 border-t border-[var(--color-border-subtle)]">
            <strong>System Audit Note:</strong> {activeStage.auditNote}
          </p>
        </div>

        <div className="lg:col-span-4 p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs font-mono">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
            LIFECYCLE LEDGER RECORD
          </span>
          <div className="space-y-1 text-[11px] text-[var(--color-text-primary)]">
            <p><strong>Item:</strong> Hybrid Diagnostics Cert</p>
            <p><strong>Issuer:</strong> IMI Automotive (#EV-9402)</p>
            <p><strong>Current Status:</strong> {activeStage.title}</p>
            <p><strong>Audit Trail:</strong> Block Hash Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
