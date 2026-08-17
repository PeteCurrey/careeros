'use client';

import React, { useState } from 'react';
import {
  Lock,
  Eye,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export function CandidatePrivacyFlowVisual() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      stage: '01',
      name: 'Discovery View',
      badge: 'Protected Context',
      summary: 'Employers evaluate anonymised capability summaries and verified competencies without access to personal identity.',
      visible: [
        'Demonstrated electromechanical diagnostic capability',
        'Verified City & Guilds / NVQ Level 3 accreditation status',
        'Approximate travel distance / commuting radius',
        'Relevant project deliverables (redacted sensitive employer IP)',
      ],
      hidden: [
        'Personal name, contact info & exact address',
        'Private AI Career Mentor coaching conversations',
        'Internal Career Twin self-assessments & raw notes',
        'Unrelated compensation targets & life circumstances',
      ],
    },
    {
      stage: '02',
      name: 'Interest Expressed',
      badge: 'Candidate Consent Gate',
      summary: 'The employer expresses formal interest with a transparent role rationale. The candidate reviews the employer profile and decides whether to accept.',
      visible: [
        'Full employer identity, team structure & compensation band',
        'Exact role outcome brief and working shift pattern',
        'Why the candidate was matched and what bridge is expected',
        'Candidate one-click acceptance or decline control',
      ],
      hidden: [
        'Direct personal contact details (until candidate approves)',
        'Private employer hiring committee deliberation notes',
        'Any automated data extraction or background scraping',
      ],
    },
    {
      stage: '03',
      name: 'Direct Introduction',
      badge: 'Permitted Exchange',
      summary: 'Upon mutual confirmation, full verified credentials and candidate contact details are unlocked for human interview coordination.',
      visible: [
        'Full verified Career Passport credential ledger',
        'Candidate direct contact email and phone number',
        'Verified work experience references & institutional sign-offs',
        'Interview availability schedule',
      ],
      hidden: [
        'Private Career Twin reflections unrelated to the role',
        'Historical mentor guidance records and personal journaling',
      ],
    },
  ];

  return (
    <div className="w-full p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--color-border-default)]">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            Three-Stage Candidate Privacy Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
            Relevance First. Identity When Permitted.
          </h3>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10">
          Illustrative Privacy Workflow
        </span>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stages.map((s, idx) => (
          <button
            key={s.stage}
            onClick={() => setActiveStage(idx)}
            className={`p-4 rounded-[var(--radius-card)] text-left transition-all border ${
              activeStage === idx
                ? 'bg-white/10 border-[rgba(47,143,255,0.35)] shadow-md ring-1 ring-[rgba(47,143,255,0.25)] text-white'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between pb-1">
              <span className="text-[10px] font-mono font-bold text-[#2F8FFF]">
                STAGE {s.stage}
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[var(--color-taupe-300)]">
                {s.badge}
              </span>
            </div>
            <h4 className="font-bold text-sm text-white">{s.name}</h4>
          </button>
        ))}
      </div>

      {/* Active Stage Detail Panel */}
      {(() => {
        const currentStage = (stages[activeStage] ?? stages[0])!;
        return (
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#6BB8FF] font-semibold">
                Stage {currentStage.stage} Summary
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                {currentStage.name} &mdash; {currentStage.badge}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {currentStage.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Visible Context */}
              <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-emerald-500/20 space-y-2.5">
                <span className="font-bold text-emerald-400 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Visible / Disclosed Information
                </span>
                <ul className="space-y-1.5 text-[var(--color-text-secondary)]">
                  {currentStage.visible.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-white">
                      <span className="text-emerald-400 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protected / Hidden Context */}
              <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.18)] space-y-2.5">
                <span className="font-bold text-[#2F8FFF] font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> Strictly Protected / Hidden
                </span>
                <ul className="space-y-1.5 text-[var(--color-text-secondary)]">
                  {currentStage.hidden.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-white">
                      <span className="text-[#2F8FFF] font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Career OS ensures candidate records are never scraped, broadcast blindly, or exposed to recruiters without granular consent.
              </span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
