'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Lightbulb, FileText } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  description: string;
  items: { label: string; status: 'required' | 'evidence' | 'developmental' | 'note'; note?: string }[];
}

const ROLE = 'Maintenance & Reliability Manager';

const STEPS: Step[] = [
  {
    id: 'outcomes',
    label: '01. Role Outcomes',
    description: 'What must this person achieve in the role? Focus on measurable operational results, not activities.',
    items: [
      { label: 'Measurably improve plant or system reliability year-on-year', status: 'required' },
      { label: 'Reduce unplanned downtime through structured preventive maintenance', status: 'required' },
      { label: 'Lead, coordinate and develop the maintenance team', status: 'required' },
      { label: 'Own workplace safety, permit-to-work compliance and incident reporting', status: 'required' },
      { label: 'Manage maintenance budget and supplier/contractor relationships', status: 'required' },
      { label: 'Produce reliable operational data for engineering and senior leadership', status: 'required' },
    ],
  },
  {
    id: 'capabilities',
    label: '02. Core Capabilities',
    description: 'What does this person need to be genuinely able to do? Decouple from job titles — focus on functional ability.',
    items: [
      { label: 'Technical diagnostics: root-cause fault isolation across mechanical, electrical and control systems', status: 'required' },
      { label: 'Maintenance planning: CMMS, PPM scheduling and asset-criticality assessment', status: 'required' },
      { label: 'People leadership: direction, performance, feedback and team development', status: 'required' },
      { label: 'Problem solving: structured analysis (RCA/FMEA or equivalent) under operational pressure', status: 'required' },
      { label: 'Stakeholder communication: engaging engineering, operations and commercial teams clearly', status: 'required' },
      { label: 'Budget control: maintenance expenditure tracking, variance and cost optimisation', status: 'required' },
    ],
  },
  {
    id: 'evidence',
    label: '03. Relevant Evidence',
    description: 'What evidence would meaningfully support this application? Be specific — not a CV summary.',
    items: [
      { label: 'Demonstrated ownership of a plant/site maintenance function with measurable outcomes', status: 'evidence' },
      { label: 'Evidence of improving reliability KPIs: MTBF, MTTR, OEE or equivalent', status: 'evidence' },
      { label: 'Leadership of a maintenance team — directly, not simply as a senior technician', status: 'evidence' },
      { label: 'Technical project work: overhauls, shutdowns, retrofits or improvement programmes', status: 'evidence' },
      { label: 'Professional development: relevant certifications, qualifications or structured training', status: 'evidence' },
    ],
  },
  {
    id: 'mandatory',
    label: '04. Mandatory Requirements',
    description: 'What is genuinely non-negotiable for legal, safety or regulatory reasons? Exclude requirements that are merely traditional.',
    items: [
      { label: 'Eligibility to work in the jurisdiction of employment', status: 'required' },
      { label: 'Any statutory safety certifications legally required for the specific site/industry', status: 'required', note: 'Review by jurisdiction and industry — avoid over-specifying.' },
      { label: 'Physical capability requirements where genuinely relevant to role duties', status: 'required', note: 'Only where operationally essential and legally appropriate.' },
    ],
  },
  {
    id: 'developmental',
    label: '05. Developable Requirements',
    description: 'What could a strong candidate realistically develop into once in role? These should not be automatic exclusions.',
    items: [
      { label: 'Specific CMMS platform experience (e.g. SAP PM, Maximo) — transferable with reasonable onboarding', status: 'developmental' },
      { label: 'Industry-specific systems knowledge — transferable where core maintenance fundamentals are strong', status: 'developmental' },
      { label: 'Formal NEBOSH/IOSH or equivalent — learnable for candidates with demonstrated safety practice', status: 'developmental', note: 'Do not exclude candidates with equivalent safety record and training.' },
      { label: 'Degree-level qualification — may be unnecessary where operational evidence is strong', status: 'developmental', note: 'Separate academic credential from demonstrated capability.' },
    ],
  },
];

const STATUS_CONFIG = {
  required: { colour: 'text-[var(--color-text-primary)]', dot: 'bg-[var(--accent-blue)]', label: 'Outcome / Required' },
  evidence: { colour: 'text-emerald-300', dot: 'bg-emerald-400', label: 'Evidence Requested' },
  developmental: { colour: 'text-amber-300', dot: 'bg-amber-400', label: 'Developable' },
  note: { colour: 'text-[var(--color-text-secondary)]', dot: 'bg-[var(--color-taupe-300)]', label: 'Note' },
};

export function CapabilityBriefInteractive() {
  const [activeStep, setActiveStep] = useState<string>('outcomes');
  const step = STEPS.find((s) => s.id === activeStep) ?? STEPS[0]!;

  return (
    <div className="w-full space-y-6" id="capability-brief-interactive">
      {/* Step Navigator */}
      <div className="flex flex-col sm:flex-row gap-2">
        {STEPS.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(s.id)}
            className={`flex-1 px-3 py-2.5 rounded text-left transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              activeStep === s.id
                ? 'bg-[var(--color-text-primary)] text-[var(--color-surface-base)] border-transparent'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
            aria-pressed={activeStep === s.id}
          >
            <span className="text-[9px] font-mono uppercase tracking-widest block font-bold opacity-60">Step {idx + 1}</span>
            <span className="text-[11px] font-semibold block mt-0.5 leading-tight">{s.label.split('. ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Step Content */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-5 animate-in fade-in duration-200">
        <div className="pb-4 border-b border-[var(--color-border-default)] space-y-1">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--accent-blue)]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
              Role: {ROLE} &bull; {step.label}
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">{step.description}</p>
        </div>

        <ul className="space-y-2.5">
          {step.items.map((item, idx) => {
            const cfg = STATUS_CONFIG[item.status];
            return (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} shrink-0 mt-[6px]`} aria-hidden="true" />
                <div className="space-y-0.5">
                  <span className={`${cfg.colour} leading-relaxed`}>{item.label}</span>
                  {item.note && (
                    <p className="text-[11px] text-[var(--color-text-tertiary)] font-mono flex items-start gap-1">
                      <Lightbulb className="w-3 h-3 shrink-0 mt-0.5 text-amber-400" />
                      {item.note}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3 text-[10px] font-mono">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] inline-block" />Required / Outcome</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />Evidence requested</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />Developable</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">Illustrative capability brief workflow</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-between text-xs font-mono">
        <button
          onClick={() => {
            const idx = STEPS.findIndex((s) => s.id === activeStep);
            if (idx > 0) setActiveStep(STEPS[idx - 1]!.id);
          }}
          disabled={STEPS.findIndex((s) => s.id === activeStep) === 0}
          className="px-4 py-2 rounded border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white disabled:opacity-30 transition-colors"
        >
          &larr; Previous
        </button>
        <span className="text-[var(--color-text-tertiary)]">
          Step {STEPS.findIndex((s) => s.id === activeStep) + 1} of {STEPS.length}
        </span>
        <button
          onClick={() => {
            const idx = STEPS.findIndex((s) => s.id === activeStep);
            if (idx < STEPS.length - 1) setActiveStep(STEPS[idx + 1]!.id);
          }}
          disabled={STEPS.findIndex((s) => s.id === activeStep) === STEPS.length - 1}
          className="px-4 py-2 rounded border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white disabled:opacity-30 transition-colors"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
