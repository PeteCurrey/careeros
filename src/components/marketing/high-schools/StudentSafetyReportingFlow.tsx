'use client';

import React, { useState } from 'react';
import {
  Flag,
  AlertTriangle,
  Building2,
  Sparkles,
  Lock,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  HelpCircle,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConcernCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  stakeholders: ('student' | 'educator' | 'guardian' | 'employer')[];
  initialAction: string;
  triageClassification: 'High / Safeguarding Priority' | 'Urgent Investigation' | 'Moderation Review' | 'Technical Governance';
  humanReviewPath: string;
  escalationTrigger: string;
  resolutionOutcome: string;
}

const CONCERN_CATEGORIES: ConcernCategory[] = [
  {
    id: 'inappropriate-opportunity',
    title: 'Inappropriate or Exploitative Opportunity',
    shortDesc: 'Work experience, internship, or apprenticeship listing that violates youth wage, safety, or suitability rules.',
    icon: AlertTriangle,
    stakeholders: ['student', 'educator', 'guardian', 'employer'],
    initialAction: 'Listing immediately quarantined from search and student feeds pending moderation review.',
    triageClassification: 'Moderation Review',
    humanReviewPath: 'Assigned to CareerOS Editorial Moderation & Standards Panel within 1 business day.',
    escalationTrigger: 'If financial demand, MLM structure, or unsafe physical labor is confirmed, listing is permanently deleted and employer account suspended.',
    resolutionOutcome: 'Notice issued to submitting employer; confirmation sent to reporting party with formal action logged to audit ledger.',
  },
  {
    id: 'employer-boundary-violation',
    title: 'Employer Unsolicited Contact / Boundary Breach',
    stakeholders: ['student', 'educator', 'guardian'],
    shortDesc: 'Recruiter attempting unsolicited direct messaging, cold outreach, or requesting private student PII.',
    icon: Building2,
    initialAction: 'Employer messaging privileges instantly frozen; communication channel locked and preserved for evidentiary review.',
    triageClassification: 'Urgent Investigation',
    humanReviewPath: 'Reviewed by Trust & Safety Lead and verified with student’s school safeguarding officer.',
    escalationTrigger: 'Direct cold-contact with minors without institutional authorization results in permanent employer termination from CareerOS.',
    resolutionOutcome: 'Employer banned; formal incident report provided to school district administrator and guardian.',
  },
  {
    id: 'ai-dialogue-anomaly',
    title: 'AI Career Mentor Out-of-Scope Response',
    shortDesc: 'Mentor strayed beyond career guidance into medical, legal, therapeutic, or concerning advice.',
    icon: Sparkles,
    stakeholders: ['student', 'educator', 'guardian'],
    initialAction: 'Dialogue session snapshot flagged for prompt safety evaluation; student guided back to career reflection boundaries.',
    triageClassification: 'Technical Governance',
    humanReviewPath: 'Reviewed by AI Ethics & Safety Engineering team alongside clinical and educational advisors.',
    escalationTrigger: 'Prompt injection or guardrail evasion patched; system prompt updated across affected domain mentors.',
    resolutionOutcome: 'User debriefed with human guidance recommendation; audit record updated with policy revision number.',
  },
  {
    id: 'privacy-unauthorised-access',
    title: 'Privacy Concern / Unauthorised Access',
    shortDesc: 'Suspected identity compromise, unauthorized staff visibility, or improper record disclosure.',
    icon: Lock,
    stakeholders: ['student', 'educator', 'guardian', 'employer'],
    initialAction: 'Affected session tokens invalidated; password reset trigger issued; access permissions locked.',
    triageClassification: 'Urgent Investigation',
    humanReviewPath: 'Investigated by Information Security & Data Protection Officer alongside school IT administration.',
    escalationTrigger: 'If institutional breach is identified, formal notification initiated under applicable statutory student privacy laws.',
    resolutionOutcome: 'Root cause analysis provided to district data protection team; security measures remediated.',
  },
  {
    id: 'student-welfare-disclosure',
    title: 'Immediate Student Welfare / Harm Concern',
    shortDesc: 'Conversation or interaction indicates acute danger, self-harm risk, domestic abuse, or exploitation.',
    icon: Flag,
    stakeholders: ['student', 'educator', 'guardian'],
    initialAction: 'System provides direct national emergency/helpline resources to the user; initiates high-priority safeguarding ticket.',
    triageClassification: 'High / Safeguarding Priority',
    humanReviewPath: 'Immediate escalation to designated school safeguarding lead (DSL) following institutional safeguarding protocols.',
    escalationTrigger: 'Career OS supports institutional referral to local child protection authorities where legally mandated under child protection frameworks.',
    resolutionOutcome: 'Institutional safeguarding team takes primacy over student welfare; Career OS preserves immutable audit record.',
  },
];

export function StudentSafetyReportingFlow() {
  const [selectedStakeholder, setSelectedStakeholder] = useState<'student' | 'educator' | 'guardian' | 'employer'>('student');
  const [selectedConcernId, setSelectedConcernId] = useState<string>('inappropriate-opportunity');

  const filteredConcerns = CONCERN_CATEGORIES.filter((c) => c.stakeholders.includes(selectedStakeholder));
  const activeConcern = CONCERN_CATEGORIES.find((c) => c.id === selectedConcernId) ?? filteredConcerns[0]!;

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="concern-reporting-architecture">
      
      {/* Header Context */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-7 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Escalation &amp; Concern Triage Workflow
            </span>
          </div>
          <h3 className="text-xl font-serif font-normal text-white">
            What Happens When a Concern Is Raised?
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Explore the multi-stakeholder reporting pathway, immediate protective measures, and human resolution lifecycle.
          </p>
        </div>

        <span className="text-[10px] font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto">
          Illustrative Escalation Lifecycle
        </span>
      </div>

      {/* Stakeholder Switcher */}
      <div className="px-5 sm:px-7 space-y-2">
        <span className="section-label block">Step 1: Select Your Perspective</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'student' as const, label: 'Student', icon: Sparkles },
            { id: 'educator' as const, label: 'Educator / Counselor', icon: UserCheck },
            { id: 'guardian' as const, label: 'Parent / Guardian', icon: Users },
            { id: 'employer' as const, label: 'Employer / Partner', icon: Building2 },
          ].map((s) => {
            const isSelected = selectedStakeholder === s.id;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSelectedStakeholder(s.id);
                  const validConcerns = CONCERN_CATEGORIES.filter((c) => c.stakeholders.includes(s.id));
                  if (!validConcerns.some((c) => c.id === selectedConcernId)) {
                    setSelectedConcernId(validConcerns[0]!.id);
                  }
                }}
                className={cn(
                  'p-3 rounded-[var(--radius-sm)] border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer',
                  isSelected
                    ? 'bg-white/15 border-white/40 text-white shadow-xs'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Concern Category Picker */}
      <div className="px-5 sm:px-7 space-y-2">
        <span className="section-label block">Step 2: Select the Type of Concern</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredConcerns.map((concern) => {
            const isSelected = concern.id === activeConcern.id;
            const Icon = concern.icon;
            return (
              <button
                key={concern.id}
                type="button"
                onClick={() => setSelectedConcernId(concern.id)}
                className={cn(
                  'p-3.5 rounded-[var(--radius-sm)] border text-left flex items-start gap-3 transition-all cursor-pointer',
                  isSelected
                    ? 'bg-[var(--color-surface-base)] border-[var(--accent-blue)] text-white shadow-sm'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-zinc-500'
                )}
              >
                <Icon className={cn('w-4 h-4 mt-0.5 shrink-0', isSelected ? 'text-[var(--accent-blue)]' : 'text-zinc-400')} />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold leading-snug">{concern.title}</div>
                  <div className="text-[10px] text-[var(--color-text-tertiary)] line-clamp-2">{concern.shortDesc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Structured Resolution Lifecycle Flow */}
      <div className="px-5 sm:px-7 pb-7 space-y-5">
        <div className="p-5 sm:p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase tracking-wider">
                Active Scenario Analysis
              </span>
              <h4 className="text-base font-serif font-medium text-white">
                {activeConcern.title}
              </h4>
            </div>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-semibold rounded self-start sm:self-auto">
              Triage Tier: {activeConcern.triageClassification}
            </span>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            
            {/* Step 1 */}
            <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[var(--color-taupe-300)] font-bold uppercase">
                  1. Report &amp; Ack
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] pt-1">
                  Report submitted via UI flag or API webhook; cryptographic receipt issued to reporter.
                </p>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> Instant Log
              </span>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.2)] rounded-[var(--radius-sm)] space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase">
                  2. Immediate Gate
                </div>
                <p className="text-[11px] text-[var(--color-text-primary)] font-medium pt-1">
                  {activeConcern.initialAction}
                </p>
              </div>
              <span className="text-[9px] font-mono text-[var(--accent-blue)]">
                Automated Containment
              </span>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[var(--color-taupe-300)] font-bold uppercase">
                  3. Human Review
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] pt-1">
                  {activeConcern.humanReviewPath}
                </p>
              </div>
              <span className="text-[9px] font-mono text-purple-300">
                Human Investigation
              </span>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[var(--color-taupe-300)] font-bold uppercase">
                  4. Escalation
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] pt-1">
                  {activeConcern.escalationTrigger}
                </p>
              </div>
              <span className="text-[9px] font-mono text-amber-400">
                Institutional Escalation
              </span>
            </div>

            {/* Step 5 */}
            <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[var(--color-taupe-300)] font-bold uppercase">
                  5. Resolution
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] pt-1">
                  {activeConcern.resolutionOutcome}
                </p>
              </div>
              <span className="text-[9px] font-mono text-emerald-400">
                Immutable Ledger Entry
              </span>
            </div>

          </div>

          {/* Important Limitation Notice */}
          <div className="p-3 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded text-[11px] text-[var(--color-text-tertiary)] flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Honest Operating Standard:</strong> Career OS does not claim statutory police or judicial powers. When severe safeguarding threats occur, Career OS assists institutional leaders in routing evidence to local child protection authorities and designated statutory bodies.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
