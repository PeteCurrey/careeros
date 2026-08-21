'use client';

import React from 'react';
import { 
  Compass, 
  HelpCircle, 
  Layers, 
  FileCheck, 
  Send, 
  Wrench, 
  Award, 
  CheckCircle2, 
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Building2,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { cn } from '@/lib/utils';

const LIFECYCLE_STAGES = [
  { stage: '01', title: 'Discover', role: 'Career Graph', desc: 'Student explores vocational role families and levy-funded openings.' },
  { stage: '02', title: 'Understand', role: 'AI Mentor', desc: 'Demystifies apprentice wage scales, shift duties, and study ratios.' },
  { stage: '03', title: 'Compare', role: 'Parity Engine', desc: 'Balances Degree Apprenticeship vs full-time university loans.' },
  { stage: '04', title: 'Prepare', role: 'School Counselor', desc: 'Structures portfolio evidence and technical interview preparation.' },
  { stage: '05', title: 'Apply', role: 'Employer Partner', desc: 'Direct application into employer vacancy with verified criteria.' },
  { stage: '06', title: 'Work + Learn', role: 'Training Provider', desc: '4 days in commercial workplace + 1 day funded college/degree study.' },
  { stage: '07', title: 'Build Evidence', role: 'Career Passport', desc: 'Continuous logging of workplace logs, safety audits, and CAD projects.' },
  { stage: '08', title: 'Qualify', role: 'Credential Issuer', desc: 'End-Point Assessment (EPA) completion and Level 3–7 certification.' },
  { stage: '09', title: 'Progress', role: 'Career OS Continuum', desc: 'Lifelong career compounding toward chartered status and leadership.' },
];

export function ApprenticeshipLifecycleVisual() {
  return (
    <div className="w-full space-y-6">
      {/* 9-Stage Horizontal/Grid Lifecycle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5">
        {LIFECYCLE_STAGES.map((s, idx) => (
          <div
            key={s.stage}
            className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  Stage {s.stage}
                </span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
                  {s.role}
                </span>
              </div>
              <h4 className="font-serif text-base text-white font-normal">
                {s.title}
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {s.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)]">
              <span>Lifecycle Milestone</span>
              {idx < LIFECYCLE_STAGES.length - 1 ? (
                <ArrowRight className="w-3 h-3 text-white/30" />
              ) : (
                <RotateCcw className="w-3 h-3 text-emerald-400" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 5-Partner Role Summary Bar */}
      <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold">
          How Different Partners Contribute Across the Apprenticeship Journey
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-purple-300 font-semibold text-[11px]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>School</span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Awareness, options guidance &amp; basic readiness.</p>
          </div>

          <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-[11px]">
              <Wrench className="w-3.5 h-3.5" />
              <span>Provider</span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Framework delivery, off-the-job training &amp; EPA.</p>
          </div>

          <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-[#6BB8FF] font-semibold text-[11px]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Employer</span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Workplace placement, salary &amp; mentor supervision.</p>
          </div>

          <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-rose-300 font-semibold text-[11px]">
              <Award className="w-3.5 h-3.5" />
              <span>Awarding Body</span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Formal qualification &amp; occupational chartership.</p>
          </div>

          <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Career OS</span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Evidence continuity, portfolio &amp; future trajectory.</p>
          </div>
        </div>

        <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
          <span className="text-white font-medium italic">
            &ldquo;The apprenticeship ends. The career does not.&rdquo;
          </span>
          <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
            Lifelong Progression Model
          </span>
        </div>
      </div>
    </div>
  );
}
