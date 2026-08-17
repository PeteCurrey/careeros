'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Heart, Scale, Wrench } from 'lucide-react';

interface PivotExample {
  id: string;
  sourceRole: string;
  sourceCategory: string;
  icon: React.ElementType;
  targetRole: string;
  transferableCapabilities: string[];
  bridgeNeed: string;
  rationale: string;
}

export function TransferableSkillsGraph() {
  const pivots: PivotExample[] = [
    {
      id: 'military',
      sourceRole: 'Military Logistics NCO',
      sourceCategory: 'Defense & Service',
      icon: Shield,
      targetRole: 'Supply Chain & Operations Manager',
      transferableCapabilities: [
        'High-stakes inventory coordination',
        'Team leadership under pressure',
        'Risk mitigation & contingency planning',
        'Equipment maintenance logistics',
      ],
      bridgeNeed: 'Civilian ERP software micro-cert (SAP/Oracle) + Commercial procurement terminology.',
      rationale: 'Military NCOs manage complex logistics and personnel under extreme constraints. Their operational discipline transfers directly into enterprise supply chain roles.',
    },
    {
      id: 'mechanic',
      sourceRole: 'Automotive / Plant Mechanic',
      sourceCategory: 'Skilled Trade',
      icon: Wrench,
      targetRole: 'Technical Field Service Engineer',
      transferableCapabilities: [
        'Complex mechanical diagnostics',
        'Customer site communication',
        'Schematic diagram interpretation',
        'Physical systems troubleshooting',
      ],
      bridgeNeed: 'Field service software training + Digital sensor diagnostic tools.',
      rationale: 'Mechanics possess deep diagnostics skills. Shifting to field engineering leverages physical troubleshooting while increasing compensation and travel options.',
    },
    {
      id: 'nurse',
      sourceRole: 'Clinical Nurse Specialist',
      sourceCategory: 'Healthcare',
      icon: Heart,
      targetRole: 'Healthcare Operations Director',
      transferableCapabilities: [
        'Patient throughput optimization',
        'Regulatory compliance & safety audit',
        'Crisis prioritization & triage',
        'Interdisciplinary team communication',
      ],
      bridgeNeed: 'Healthcare financial modeling + Healthcare information systems management.',
      rationale: 'Clinical background provides authentic operational credibility that non-clinical hospital administrators lack.',
    },
    {
      id: 'lawyer',
      sourceRole: 'Corporate Associate Attorney',
      sourceCategory: 'Legal Profession',
      icon: Scale,
      targetRole: 'Commercial Strategy VP',
      transferableCapabilities: [
        'Rigorous risk analysis & negotiation',
        'Contractual structure design',
        'Regulatory compliance foresight',
        'Executive stakeholder alignment',
      ],
      bridgeNeed: 'Financial modeling (DCF/LBO) + Go-to-market strategy execution.',
      rationale: 'Legal rigor and negotiation mastery translate directly into senior M&A, corporate development, and strategic partnership roles.',
    },
  ];

  const [activePivotId, setActivePivotId] = useState('military');
  const activePivot = (pivots.find((p) => p.id === activePivotId) || pivots[0])!;

  return (
    <div className="space-y-6">
      {/* Horizontal Pivot Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-[var(--color-border-default)] scrollbar-none">
        {pivots.map((pivot) => {
          const Icon = pivot.icon;
          const isActive = pivot.id === activePivotId;
          return (
            <button
              key={pivot.id}
              onClick={() => setActivePivotId(pivot.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-card)] text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-sm'
                  : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-white/20 hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-600)]'}`} />
              <span>{pivot.sourceRole}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Pivot Graphic Flow */}
      <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
        {/* Flow Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4">
          <div className="space-y-1">
            <span className="section-label">CAREER OS GRAPH PARITY &bull; TRANSFERABLE PIPELINE</span>
            <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)]">
              {activePivot.sourceRole} &rarr; {activePivot.targetRole}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded text-[var(--color-taupe-700)]">
            Non-Linear Career Pivot Model
          </span>
        </div>

        {/* Visual Pipeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
          {/* Step 1: Past Experience */}
          <div className="p-5 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
              1. PAST EXPERIENCE
            </span>
            <h4 className="font-serif font-bold text-sm text-[var(--color-text-primary)]">
              {activePivot.sourceRole}
            </h4>
            <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono block">
              {activePivot.sourceCategory}
            </span>
          </div>

          {/* Step 2: Transferable Capability */}
          <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 md:col-span-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
              2. TRANSFERABLE CAPABILITIES (IN CAREER TWIN)
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-text-primary)] pt-1">
              {activePivot.transferableCapabilities.map((cap, idx) => (
                <li key={idx} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3: Target Destination */}
          <div className="p-5 bg-white/15 text-[var(--color-text-primary)] rounded-[var(--radius-card)] space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-300)] block">
              3. TARGET DESTINATION
            </span>
            <h4 className="font-serif font-bold text-sm text-[var(--color-text-primary)]">
              {activePivot.targetRole}
            </h4>
            <span className="text-[11px] text-[var(--color-taupe-300)] font-mono block">
              High Market Demand
            </span>
          </div>
        </div>

        {/* Bridge Need & Rationale Note */}
        <div className="p-5 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded-[var(--radius-card)] space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-[var(--color-taupe-700)]">
              FOCUSED BRIDGE REQUIREMENT:
            </span>
            <span className="font-mono text-[10px] font-bold text-emerald-700">
              Preserves 85%+ Compensation Baseline
            </span>
          </div>
          <p className="text-[var(--color-text-primary)] font-semibold font-mono text-[11px]">
            {activePivot.bridgeNeed}
          </p>
          <p className="text-[var(--color-text-secondary)] pt-1 border-t border-[var(--color-border-subtle)] leading-relaxed">
            {activePivot.rationale}
          </p>
        </div>
      </div>
    </div>
  );
}
