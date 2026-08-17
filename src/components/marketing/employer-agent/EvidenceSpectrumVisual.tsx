'use client';

import React from 'react';
import {
  FileCheck,
  ShieldCheck,
  Building2,
  Award,
  Clock,
  AlertTriangle,
  XCircle,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';

export function EvidenceSpectrumVisual() {
  const states = [
    {
      state: 'SELF_DECLARED',
      label: 'Self-Declared',
      type: 'Claim',
      desc: 'Candidate asserts experience or skills on their record without attaching external artifacts.',
      statusColor: 'text-zinc-400 bg-white/5 border-white/10',
    },
    {
      state: 'EVIDENCE_ATTACHED',
      label: 'Evidence Attached',
      type: 'Artifact',
      desc: 'Work products, technical diagrams, code repositories, or logbooks attached to substantiate the claim.',
      statusColor: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
    },
    {
      state: 'PLATFORM_ASSESSED',
      label: 'Platform Assessed',
      type: 'Evaluation',
      desc: 'Demonstrated through structured platform benchmarking or standardized technical simulation.',
      statusColor: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
    },
    {
      state: 'THIRD_PARTY_VERIFIED',
      label: 'Third-Party Verified',
      type: 'Verification',
      desc: 'Corroborated by an accredited external assessment body, professional guild, or regulator.',
      statusColor: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      state: 'ISSUER_VERIFIED',
      label: 'Issuer Verified',
      type: 'Cryptographic',
      desc: 'Cryptographically signed or directly confirmed by the issuing university, college, or awarding body.',
      statusColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      state: 'EMPLOYER_VERIFIED',
      label: 'Employer Verified',
      type: 'Institutional',
      desc: 'Formally attested by a past verified corporate employer, apprenticeship sponsor, or direct supervisor.',
      statusColor: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
    },
    {
      state: 'EXPIRED',
      label: 'Expired',
      type: 'Temporal',
      desc: 'Credential was valid but has passed its statutory expiry date (e.g. 3-year first-aid or safety ticket).',
      statusColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    },
    {
      state: 'REVOKED',
      label: 'Revoked',
      type: 'Statutory',
      desc: 'Issuing authority formally retracted certification due to regulatory finding or lapse.',
      statusColor: 'text-red-300 bg-red-500/10 border-red-500/20',
    },
    {
      state: 'DISPUTED',
      label: 'Disputed',
      type: 'Audit',
      desc: 'Claim under active review or challenged during human audit verification workflow.',
      statusColor: 'text-orange-300 bg-orange-500/10 border-orange-500/20',
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {states.map((s) => (
          <div
            key={s.state}
            className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold border ${s.statusColor}`}>
                  {s.label}
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  {s.type}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {s.desc}
              </p>
            </div>
            <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)]">
              State: {s.state}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-[var(--radius-card)] bg-purple-500/5 border border-purple-500/20 text-center space-y-2">
        <p className="text-base sm:text-lg font-serif italic text-white">
          &ldquo;Verification should describe the evidence, not certify the entire person.&rdquo;
        </p>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Career OS enables employers to inspect the exact provenance and verification state of every specific claim.
        </p>
      </div>
    </div>
  );
}
