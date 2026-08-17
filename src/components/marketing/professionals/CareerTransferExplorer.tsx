'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

interface CareerTransferCase {
  id: string;
  originTitle: string;
  originCategory: string;
  targetDirection: string;
  transferable: string[];
  bridgeNeeded: string[];
  adjacentCareers: string[];
  whatWeExploreNext: string;
}

const CASES: CareerTransferCase[] = [
  {
    id: 'firefighter',
    originTitle: 'Firefighter / Crew Commander',
    originCategory: 'Emergency Services & Public Safety',
    targetDirection: 'Emergency Planning & Corporate Resilience Director',
    transferable: [
      'Dynamic incident command under extreme cognitive load',
      'Life-critical risk mitigation and occupational health protocols',
      'Multi-agency emergency coordination and public communication',
      'Team physical safety, readiness, and operational discipline',
    ],
    bridgeNeeded: [
      'Enterprise Business Continuity Management (ISO 22301) standards',
      'Corporate risk governance, ESG compliance, and board reporting',
      'Supply chain disaster recovery and IT failover architecture',
    ],
    adjacentCareers: [
      'Critical Infrastructure Safety Director',
      'Aviation Airside Operations Manager',
      'Industrial Hazardous Materials Specialist',
    ],
    whatWeExploreNext: 'Mapping your incident command certificates to corporate crisis management equivalents and targeting infrastructure operators.',
  },
  {
    id: 'mechanic',
    originTitle: 'Master Automotive / Heavy Vehicle Technician',
    originCategory: 'Skilled Trades & Diagnostics',
    targetDirection: 'Renewable Fleet Systems & Field Reliability Engineer',
    transferable: [
      'Advanced multi-system electro-mechanical fault isolation',
      'CAN-bus, sensor telemetry, and complex hydraulic diagnostics',
      'Customer service, warranty repair documentation, and parts logistics',
      'Strict adherence to high-voltage and workshop safety standards',
    ],
    bridgeNeeded: [
      'High-voltage DC battery pack energy storage architectures',
      'Industrial SCADA / PLC control interfaces and field telemetry software',
      'Preventative maintenance scheduling (MTBF / MTTR asset modeling)',
    ],
    adjacentCareers: [
      'Wind Turbine Maintenance Specialist',
      'Automated Warehouse Robotics Field Engineer',
      'Commercial Marine Power Technician',
    ],
    whatWeExploreNext: 'Documenting your high-voltage EV diagnostic hours in Career Passport to unlock offshore wind and robotics entry points.',
  },
  {
    id: 'nurse',
    originTitle: 'Senior Clinical / ICU Specialist Nurse',
    originCategory: 'Healthcare & Clinical Practice',
    targetDirection: 'Clinical Operations & HealthTech Product Specialist',
    transferable: [
      'Patient pathway workflow optimization and triage prioritization',
      'High-stakes clinical risk assessment and protocol adherence',
      'Cross-disciplinary physician, pharmacy, and family stakeholder alignment',
      'Direct operational empathy with frontline EHR software frustrations',
    ],
    bridgeNeeded: [
      'Digital health regulatory pathways (FDA 510(k), CE mark, HIPAA/GDPR)',
      'Clinical trial operations and health economics outcomes research (HEOR)',
      'Agile product backlog management and clinician user research',
    ],
    adjacentCareers: [
      'Hospital Patient Safety & Quality Director',
      'Medical Device Clinical Educator',
      'Health Insurance Case Management Lead',
    ],
    whatWeExploreNext: 'Translating your clinical ward governance achievements into SaaS workflow design credentials.',
  },
  {
    id: 'lawyer',
    originTitle: 'Commercial Litigation Associate',
    originCategory: 'Legal & Professional Services',
    targetDirection: 'Director of Strategic Risk & Regulatory Affairs',
    transferable: [
      'High-stakes analytical reasoning and rapid synthesis of ambiguous data',
      'Complex contract negotiation and counterparty dispute resolution',
      'Regulatory compliance interpretation and risk boundary enforcement',
      'High-pressure stakeholder management and executive briefing',
    ],
    bridgeNeeded: [
      'Commercial P&L impact modeling and business unit operating rhythms',
      'Enterprise risk framework execution (beyond legal risk mitigation)',
      'Cross-functional product and engineering delivery integration',
    ],
    adjacentCareers: [
      'Chief Ethics & Compliance Officer',
      'Corporate Development / M&A Lead',
      'Strategic Government Affairs Director',
    ],
    whatWeExploreNext: 'Deconstructing case victories into measurable commercial risk prevention metrics.',
  },
  {
    id: 'military-logistics',
    originTitle: 'Military Logistics Warrant Officer',
    originCategory: 'Defence & Armed Forces',
    targetDirection: 'Global Supply Chain & Freight Operations Lead',
    transferable: [
      'Contingency supply chain routing across disrupted geographic theaters',
      'Multi-million asset tracking, warehousing, and secure distribution',
      'Direct leadership of 40+ logistics and transport specialists',
      'Uncompromising operational accountability and readiness audit standards',
    ],
    bridgeNeeded: [
      'Commercial ERP software mastery (SAP S/4HANA, Oracle SCM)',
      'Commercial freight forwarder contract negotiation and incoterms',
      'Civilian warehouse labor relations and P&L margin management',
    ],
    adjacentCareers: [
      'Intermodal Freight Operations Manager',
      'Disaster Relief Logistics Coordinator',
      'Aerospace Spare Parts Distribution Director',
    ],
    whatWeExploreNext: 'Translating military command supply documentation into civilian supply chain certifications and executive terminology.',
  },
];

export function CareerTransferExplorer() {
  const [selectedId, setSelectedId] = useState<string>('firefighter');

  const selected = CASES.find((c) => c.id === selectedId) ?? CASES[0]!;

  return (
    <div className="w-full space-y-6" id="career-transfer-explorer">
      {/* Origin Selection Buttons */}
      <div className="flex flex-wrap gap-2">
        {CASES.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedId(c.id)}
            className={`px-4 py-2.5 rounded text-xs font-mono font-semibold uppercase tracking-wider transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              selectedId === c.id
                ? 'bg-white text-black border-transparent shadow-sm'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
            }`}
            aria-pressed={selectedId === c.id}
          >
            {c.originTitle.split('/')[0]}
          </button>
        ))}
      </div>

      {/* Main Transfer Analysis Box */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--color-border-default)]">
          <div>
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] tracking-widest block">
              Origin Background: {selected.originCategory}
            </span>
            <h4 className="text-xl font-serif text-white font-normal mt-0.5">
              {selected.originTitle}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] bg-[var(--accent-blue-subtle)] px-3 py-1.5 rounded border border-[var(--accent-blue-border)]">
            <span>Target Direction:</span>
            <span className="font-bold text-white">{selected.targetDirection}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: What You Carry (7 cols) */}
          <div className="lg:col-span-6 p-4 rounded bg-[var(--color-surface-base)] border border-emerald-500/20 space-y-3">
            <span className="font-mono text-[11px] uppercase font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> What You Already Carry (Transferable)
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              {selected.transferable.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-white">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: What Needs a Bridge (5 cols) */}
          <div className="lg:col-span-6 p-4 rounded bg-[var(--color-surface-base)] border border-[var(--accent-blue-border)] space-y-3">
            <span className="font-mono text-[11px] uppercase font-bold text-[var(--accent-blue)] flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" /> What Needs a Targeted Bridge
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              {selected.bridgeNeeded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-white">
                  <span className="text-[var(--accent-blue)] font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Adjacent Horizons & Next Steps */}
        <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-semibold">
              Adjacent Unlocked Horizons:
            </span>
            <div className="flex flex-wrap gap-2">
              {selected.adjacentCareers.map((adj) => (
                <span key={adj} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-white">
                  {adj}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
            <strong className="text-[var(--accent-blue)] font-mono uppercase text-[10px] block mb-0.5">How Career Mentor Guides This:</strong>
            {selected.whatWeExploreNext}
          </div>
        </div>

        <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
          Illustrative capability translation — Career Graph identifies semantic capability overlap without forcing a reset.
        </p>
      </div>
    </div>
  );
}
