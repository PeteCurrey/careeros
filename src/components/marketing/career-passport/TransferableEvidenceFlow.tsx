'use client';

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Compass, Sparkles } from 'lucide-react';

interface CareerPivot {
  id: string;
  sourceRole: string;
  sourceSector: string;
  evidence: string;
  capability: string;
  targetRole: string;
  targetSector: string;
}

export function TransferableEvidenceFlow() {
  const pivots: CareerPivot[] = [
    {
      id: 'military',
      sourceRole: 'Military Logistics NCO',
      sourceSector: 'Defense Operations',
      evidence: 'Regimental supply chain records, multimodal hazardous convoy command, and fuel logistics logs.',
      capability: 'High-stakes inventory management, crisis supply allocation, and cross-functional leadership.',
      targetRole: 'Director of Global Supply Chain Operations',
      targetSector: 'Commercial Logistics & Distribution',
    },
    {
      id: 'firefighter',
      sourceRole: 'Fire & Rescue Incident Commander',
      sourceSector: 'Emergency Services',
      evidence: 'Level 4 Tactical Decision-Making log, HAZMAT containment audits, and multi-agency briefings.',
      capability: 'Dynamic risk assessment, regulatory compliance under pressure, and operational command.',
      targetRole: 'Corporate Environmental Health & Safety (EHS) Lead',
      targetSector: 'Industrial Infrastructure & Energy',
    },
    {
      id: 'technician',
      sourceRole: 'Diagnostic Master Technician',
      sourceSector: 'Automotive Engineering',
      evidence: 'CAN-Bus oscilloscope signal captures, High-Voltage EV Level 3 certificates, hydraulic reports.',
      capability: 'Complex electronic fault diagnosis, automated telemetry reading, and pneumatic systems.',
      targetRole: 'Offshore Wind Turbine Field Engineer',
      targetSector: 'Renewable Power & Utilities',
    },
    {
      id: 'lawyer',
      sourceRole: 'Commercial Litigation Counsel',
      sourceSector: 'Legal Practice',
      evidence: 'Admitted State Bar credential, cross-border settlement briefs, and contract risk audits.',
      capability: 'Statutory interpretation, adversarial negotiation, and enterprise risk governance.',
      targetRole: 'Chief Regulatory Governance Officer',
      targetSector: 'Fintech & Digital Infrastructure',
    },
  ];

  const [activePivotId, setActivePivotId] = useState('military');
  const current = (pivots.find((p) => p.id === activePivotId) || pivots[0])!;

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
      {/* Pivot Selector Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-[var(--color-border-subtle)] pb-4">
        {pivots.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePivotId(p.id)}
            className={`px-4 py-2 rounded-[var(--radius-card)] text-xs font-mono font-semibold transition-all border ${
              p.id === activePivotId
                ? 'bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] border-[var(--color-charcoal-deep)]'
                : 'bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-charcoal-base)]'
            }`}
          >
            {p.sourceRole}
          </button>
        ))}
      </div>

      {/* 4-Step Linear Transfer Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        {/* Step 1: Past Role */}
        <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[var(--color-taupe-700)] uppercase block">
              01 &bull; PAST ROLE
            </span>
            <h4 className="font-serif font-bold text-sm text-[var(--color-charcoal-deep)]">
              {current.sourceRole}
            </h4>
          </div>
          <span className="text-[11px] font-mono text-[var(--color-taupe-700)] bg-[var(--color-surface-warm)] px-2 py-1 rounded">
            {current.sourceSector}
          </span>
        </div>

        {/* Step 2: Passport Evidence */}
        <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5" /> 02 &bull; PASSPORT EVIDENCE
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {current.evidence}
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 w-fit">
            Verified Artifacts
          </span>
        </div>

        {/* Step 3: Underlying Capability */}
        <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-purple-800 uppercase flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 03 &bull; TRANSFERABLE SKILL
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {current.capability}
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 w-fit">
            Twin Context Node
          </span>
        </div>

        {/* Step 4: New Target Direction */}
        <div className="p-5 bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] border border-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] space-y-2 flex flex-col justify-between shadow-subtle">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[var(--color-taupe-300)] uppercase block">
              04 &bull; NEW TARGET MOVE
            </span>
            <h4 className="font-serif font-bold text-sm text-[var(--color-ivory-base)]">
              {current.targetRole}
            </h4>
          </div>
          <span className="text-[11px] font-mono text-[var(--color-taupe-300)] bg-white/10 px-2 py-1 rounded">
            {current.targetSector}
          </span>
        </div>
      </div>
    </div>
  );
}
