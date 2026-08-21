'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Filter,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type SafeguardImplementationStatus =
  | 'IMPLEMENTED'
  | 'IN_PROGRESS'
  | 'PLANNED'
  | 'INDEPENDENTLY_VERIFIED'
  | 'NOT_APPLICABLE';

interface SafeguardControlItem {
  id: string;
  category: 'Access & Identity' | 'Employer Interaction' | 'AI & Content' | 'Governance & Auditing' | 'Safeguarding & Escalation';
  controlName: string;
  description: string;
  status: SafeguardImplementationStatus;
  technicalGrounding: string;
}

const SAFEGUARD_CONTROLS: SafeguardControlItem[] = [
  {
    id: 'ctrl-1',
    category: 'Access & Identity',
    controlName: 'Age-Banded Account Policy Enforcement',
    description: 'Enforcement of canonical eligibility: Under-13 institutional only, 13–15 school/guardian required, 16+ direct individual eligibility.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Enforced via client and API signup routers; rejects open consumer registration under age thresholds.',
  },
  {
    id: 'ctrl-2',
    category: 'Employer Interaction',
    controlName: 'Prohibition of Minor Candidate Browsing',
    description: 'Commercial recruiters and employers are barred from searching, indexing, or browsing minor student profiles.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Database row-level security and permission boundaries strictly exclude minor accounts from recruiter discovery queries.',
  },
  {
    id: 'ctrl-3',
    category: 'Employer Interaction',
    controlName: 'Zero Unsolicited Commercial Messaging',
    description: 'Recruiters cannot send unsolicited cold direct messages to minor accounts.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Messaging channels can only be instantiated following mutual institutional introduction or approved student application.',
  },
  {
    id: 'ctrl-4',
    category: 'Governance & Auditing',
    controlName: 'Purpose-Based Institutional Information Partitioning',
    description: 'Staff, counselors, guardians, and employers receive role-scoped summaries rather than universal raw conversation surveillance.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Multi-tenant database schema segments private reflections, exploratory briefs, and administrative directory records.',
  },
  {
    id: 'ctrl-5',
    category: 'AI & Content',
    controlName: 'AI Career Mentor Guidance Scope Boundaries',
    description: 'System prompts strictly constrain the AI to career discovery, occupational analysis, and evidence building, prohibiting medical/therapeutic advice.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'System prompt guardrails and output validation filters restrict advice to career development domains.',
  },
  {
    id: 'ctrl-6',
    category: 'Safeguarding & Escalation',
    controlName: 'Emergency Resource & Helpline Signposting',
    description: 'Immediate presentation of national emergency and youth support resources when conversations touch acute harm or distress.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Static safety signpost triggers provide direct phone and web helpline contacts across relevant regional deployments.',
  },
  {
    id: 'ctrl-7',
    category: 'Safeguarding & Escalation',
    controlName: 'Multi-Stakeholder Concern Flagging UI',
    description: 'UI mechanisms for students, educators, and guardians to report inappropriate opportunities, employer behavior, or platform concerns.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Client-side report modal and persistent state store route submissions into moderation and governance queues.',
  },
  {
    id: 'ctrl-8',
    category: 'AI & Content',
    controlName: 'Opportunity & Career Event Editorial Moderation',
    description: 'Human editorial review of job postings, degree apprenticeships, and career fairs to block predatory, unpaid, or unsafe listings.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Editorial moderation status lifecycle (`under-review` -> `live`) separates commercial payment from editorial approval.',
  },
  {
    id: 'ctrl-9',
    category: 'Access & Identity',
    controlName: 'Sovereign Credential Portability (Career Passport)',
    description: 'Verified student achievements and evidence artifacts remain with the student after graduation.',
    status: 'IMPLEMENTED',
    technicalGrounding: 'Cryptographic evidence model ties credentials to sovereign student identifier rather than school-bound mailbox.',
  },
  {
    id: 'ctrl-10',
    category: 'Access & Identity',
    controlName: 'Verified Institutional District Tenancy',
    description: 'Dedicated cryptographic tenancy boundaries for school districts, ensuring district records remain isolated.',
    status: 'IN_PROGRESS',
    technicalGrounding: 'Enterprise database partitioning and SSO integration via SAML 2.0 / Clever / ClassLink in active integration testing.',
  },
  {
    id: 'ctrl-11',
    category: 'Access & Identity',
    controlName: 'Guardian Identity Verification Integration',
    description: 'Automated cryptographic verification of legal guardian identity for direct under-16 family account setups.',
    status: 'IN_PROGRESS',
    technicalGrounding: 'Guardian consent verification workflow using secure magic links and school-linked confirmation tokens.',
  },
  {
    id: 'ctrl-12',
    category: 'Governance & Auditing',
    controlName: 'Immutable Safeguarding Audit Event Ledger',
    description: 'Cryptographic append-only logging of administrative access, moderation actions, and escalation events.',
    status: 'IN_PROGRESS',
    technicalGrounding: 'Audit schema logging administrative overrides, user reports, and data access events to persistent storage.',
  },
  {
    id: 'ctrl-13',
    category: 'Safeguarding & Escalation',
    controlName: 'Automated Youth Wellbeing Heuristic Classifier',
    description: 'Real-time classification models to detect severe welfare distress or exploitation in dialogue before human review.',
    status: 'PLANNED',
    technicalGrounding: 'Under architectural and privacy review; requires rigorous bias and safety evaluation before production deployment.',
  },
  {
    id: 'ctrl-14',
    category: 'Governance & Auditing',
    controlName: 'Independent Third-Party Safeguarding Audit',
    description: 'Formal external certification by recognized child protection and educational technology auditing bodies.',
    status: 'PLANNED',
    technicalGrounding: 'Scheduled for completion following launch cohort deployments; no premature certification claimed.',
  },
];

export function StudentSafetyStatusTable() {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredControls = SAFEGUARD_CONTROLS.filter((c) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'IMPLEMENTED') return c.status === 'IMPLEMENTED';
    if (selectedFilter === 'IN_PROGRESS') return c.status === 'IN_PROGRESS';
    if (selectedFilter === 'PLANNED') return c.status === 'PLANNED';
    return c.category === selectedFilter;
  });

  const renderStatusBadge = (status: SafeguardImplementationStatus) => {
    switch (status) {
      case 'IMPLEMENTED':
        return (
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            IMPLEMENTED
          </span>
        );
      case 'IN_PROGRESS':
        return (
          <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="w-3 h-3 text-amber-400" />
            IN PROGRESS
          </span>
        );
      case 'PLANNED':
      default:
        return (
          <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[10px] font-mono font-bold flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-purple-400" />
            PLANNED ROADMAP
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-5" id="safeguards-status-register">
      
      {/* Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-7 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Safeguarding Controls Register
            </span>
          </div>
          <h3 className="text-xl font-serif font-normal text-white">
            Current vs. Planned Safeguard Status
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            We distinguish active product protections from features currently in engineering or on the product roadmap.
          </p>
        </div>

        <span className="text-[10px] font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto">
          Audit Verified: August 2026
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="px-5 sm:px-7 flex flex-wrap gap-2">
        {[
          { id: 'ALL', label: 'All Controls (14)' },
          { id: 'IMPLEMENTED', label: 'Implemented (9)' },
          { id: 'IN_PROGRESS', label: 'In Progress (3)' },
          { id: 'PLANNED', label: 'Planned Roadmap (2)' },
        ].map((btn) => (
          <button
            key={btn.id}
            type="button"
            onClick={() => setSelectedFilter(btn.id)}
            className={cn(
              'px-3 py-1.5 rounded text-xs font-semibold border transition-colors cursor-pointer',
              selectedFilter === btn.id
                ? 'bg-white text-zinc-900 border-white shadow-xs'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
            )}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Controls Table */}
      <div className="px-5 sm:px-7 pb-7">
        <div className="space-y-3">
          {filteredControls.map((ctrl) => (
            <div
              key={ctrl.id}
              className="p-4 sm:p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase tracking-wider">
                    {ctrl.category}
                  </span>
                  <span className="text-[11px] text-[var(--color-border-strong)]">·</span>
                  <h4 className="text-xs font-bold text-white">
                    {ctrl.controlName}
                  </h4>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {ctrl.description}
                </p>

                <p className="text-[11px] text-[var(--color-taupe-300)] leading-relaxed pt-1 font-mono">
                  <strong className="text-[var(--color-text-tertiary)]">Technical Grounding: </strong>
                  {ctrl.technicalGrounding}
                </p>
              </div>

              <div className="shrink-0 self-start lg:self-center">
                {renderStatusBadge(ctrl.status)}
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-5 p-3.5 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded flex items-start gap-2.5 text-xs text-[var(--color-text-tertiary)]">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Audit Policy:</strong> Career OS never manufactures compliance seals or pre-dates roadmap capabilities. As new safeguarding tools transition from development to live production, this register is updated and version-stamped.
          </p>
        </div>
      </div>

    </div>
  );
}
