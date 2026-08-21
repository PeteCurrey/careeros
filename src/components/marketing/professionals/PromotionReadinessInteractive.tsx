'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

interface TargetRole {
  id: string;
  title: string;
  roleType: string;
  description: string;
  present: string[];
  toStrengthen: string[];
  contextNeeded: string[];
}

const TARGET_ROLES: TargetRole[] = [
  {
    id: 'specialist',
    title: 'Principal / Technical Fellow',
    roleType: 'Specialist Authority Path',
    description: 'Deep technical mastery, architectural oversight, and solving non-standard domain problems.',
    present: [
      'Advanced hands-on technical diagnostic and delivery excellence',
      'System-level domain mastery and troubleshooting history',
      'Proven execution of complex standalone assignments',
    ],
    toStrengthen: [
      'Cross-team technical standard-setting and architectural reviews',
      'Publishing technical whitepapers or industry patent contributions',
      'Mentoring mid-level specialists into senior contributors',
    ],
    contextNeeded: [
      'Does your organization recognize a formal technical ladder equivalent to management?',
      'Have you led technical strategy on multi-quarter initiatives?',
    ],
  },
  {
    id: 'manager',
    title: 'Operations / Engineering Manager',
    roleType: 'People Leadership Path',
    description: 'Managing multi-disciplinary teams, resource allocation, and team psychological safety.',
    present: [
      'Peer-level technical credibility and respect',
      'Deep familiarity with day-to-day workflow bottlenecks',
      'Reliable personal task planning and deadline discipline',
    ],
    toStrengthen: [
      'Documented delegation and formal performance evaluation cycles',
      'Managing interpersonal conflict and difficult feedback conversations',
      'Translating high-level executive OKRs into weekly team sprint targets',
    ],
    contextNeeded: [
      'Have you held formal budget or headcount sign-off responsibility?',
      'Have you led a project where you did zero individual execution?',
    ],
  },
  {
    id: 'senior-leader',
    title: 'Director / VP of Function',
    roleType: 'Executive Strategy Path',
    description: 'P&L accountability, organizational design, cross-functional alliance, and executive presence.',
    present: [
      'Consistent multi-year track record of department delivery',
      'Clear cross-functional communication and executive reporting',
      'Strong talent acquisition and team retention history',
    ],
    toStrengthen: [
      'Direct P&L ownership and commercial risk forecasting',
      'Enterprise-wide organizational redesign and change management',
      'Managing external regulatory, board, and investor relations',
    ],
    contextNeeded: [
      'Can you articulate how your department strategy directly expands corporate EBITDA or margins?',
      'Have you successfully navigated a corporate reorganization?',
    ],
  },
  {
    id: 'different-function',
    title: 'Commercial / Product Lead',
    roleType: 'Lateral Functional Pivot',
    description: 'Transitioning from delivery into customer discovery, market strategy, and revenue operations.',
    present: [
      'Deep domain empathy and understanding of real user pain points',
      'Analytical rigor and evidence-based problem formulation',
      'Strong ability to interface with engineering and technical teams',
    ],
    toStrengthen: [
      'Customer acquisition economics (CAC/LTV) and commercial positioning',
      'Go-to-market lifecycle ownership and pricing experimentation',
      'Direct customer discovery interviews and contract negotiation',
    ],
    contextNeeded: [
      'Have you spent direct time in sales calls or customer discovery briefings?',
      'Are you prepared to own revenue outcomes rather than delivery timelines?',
    ],
  },
];

export function PromotionReadinessInteractive() {
  const [selectedId, setSelectedId] = useState<string>('manager');

  const role = TARGET_ROLES.find((r) => r.id === selectedId) ?? TARGET_ROLES[0]!;

  return (
    <div className="w-full space-y-6" id="promotion-readiness-interactive">
      {/* Target Role Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {TARGET_ROLES.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelectedId(r.id)}
            className={`p-3.5 rounded-[var(--radius-card)] text-left transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              selectedId === r.id
                ? 'bg-[var(--color-surface-raised)] border-[var(--accent-blue)] text-white shadow-sm'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
            }`}
            aria-pressed={selectedId === r.id}
          >
            <span className={`text-[9px] font-mono uppercase block font-bold tracking-wider ${selectedId === r.id ? 'text-[var(--accent-blue)]' : 'text-[var(--color-taupe-300)]'}`}>
              {r.roleType}
            </span>
            <span className="font-semibold text-xs sm:text-sm block truncate text-white mt-1">
              {r.title}
            </span>
          </button>
        ))}
      </div>

      {/* Target Breakdown Panel */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
              Target Evaluation Archetype
            </span>
            <h4 className="text-xl font-serif text-white font-normal">
              {role.title} &mdash; <span className="text-[var(--color-text-secondary)] font-sans text-sm">{role.roleType}</span>
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)]">
              {role.description}
            </p>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shrink-0">
            Explainable Evidence &bull; Zero Match Scores
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Column 1: Evidence Present */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-emerald-500/20 space-y-3">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] uppercase font-bold tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Evidence Likely Present</span>
            </div>
            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              {role.present.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-white leading-relaxed">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Evidence to Strengthen */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-amber-500/20 space-y-3">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px] uppercase font-bold tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Evidence to Strengthen</span>
            </div>
            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              {role.toStrengthen.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-white leading-relaxed">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Context Needed */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--accent-blue-border)] space-y-3">
            <div className="flex items-center gap-1.5 text-[var(--accent-blue)] font-mono text-[11px] uppercase font-bold tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Context Still Needed</span>
            </div>
            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              {role.contextNeeded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-white leading-relaxed">
                  <span className="text-[var(--accent-blue)] font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
          <span>Career OS distinguishes &ldquo;another course&rdquo; from the actual missing professional evidence.</span>
          <span className="font-mono text-[10px]">Illustrative Diagnostic Framework</span>
        </div>
      </div>
    </div>
  );
}
