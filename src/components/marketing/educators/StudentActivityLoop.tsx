'use client';

import React from 'react';
import { 
  Compass, 
  HelpCircle, 
  Layers, 
  Award, 
  Zap, 
  RotateCcw,
  ArrowRight,
  Bot,
  UserCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoopStep {
  number: string;
  title: string;
  icon: React.ElementType;
  color: string;
  badgeColor: string;
  studentAction: string;
  mentorSupport: string;
  educatorTouchpoint: string;
}

const LOOP_STEPS: LoopStep[] = [
  {
    number: '01',
    title: 'Explore Pathways',
    icon: Compass,
    color: 'text-purple-400',
    badgeColor: 'border-purple-500/30 bg-purple-950/40 text-purple-300',
    studentAction: 'Researches sectors, roles, daily duties, and emerging industries beyond standard classroom awareness.',
    mentorSupport: 'Surfaces adjacent disciplines in Career Graph and explains day-to-day vocational realities without bias.',
    educatorTouchpoint: 'Broad sector exploration aggregates into cohort-level intelligence for careers curriculum planning.',
  },
  {
    number: '02',
    title: 'Ask & Clarify',
    icon: HelpCircle,
    color: 'text-[#6BB8FF]',
    badgeColor: 'border-blue-500/30 bg-blue-950/40 text-blue-300',
    studentAction: 'Asks unlimited clarifying questions about prerequisites, workload, shifts, salaries, and lifestyle factors.',
    mentorSupport: 'Provides patient, neutral, evidence-grounded answers without judgement or algorithmic pressure.',
    educatorTouchpoint: 'Saves counsellors from answering repetitive basic factual questions repeatedly.',
  },
  {
    number: '03',
    title: 'Compare Routes',
    icon: Layers,
    color: 'text-emerald-400',
    badgeColor: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
    studentAction: 'Evaluates university, degree apprenticeships, technical colleges, and skilled trade routes side-by-side.',
    mentorSupport: 'Architecturally balances all pathways with equal dignity, showing costs, timelines, and credentials.',
    educatorTouchpoint: 'Ensures student understands non-university options before 1:1 option meetings.',
  },
  {
    number: '04',
    title: 'Build Evidence',
    icon: Award,
    color: 'text-amber-400',
    badgeColor: 'border-amber-500/30 bg-amber-950/40 text-amber-300',
    studentAction: 'Logs school projects, extracurricular clubs, volunteering, part-time jobs, and work experience.',
    mentorSupport: 'Helps student articulate transferable capabilities and link achievements to Career Passport.',
    educatorTouchpoint: 'Gives counsellors rich, multi-dimensional student evidence beyond academic grades alone.',
  },
  {
    number: '05',
    title: 'Take Action',
    icon: Zap,
    color: 'text-cyan-400',
    badgeColor: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300',
    studentAction: 'Attends school career fair, contacts employers for work shadowing, or prepares UCAS/apprenticeship portfolios.',
    mentorSupport: 'Assists with draft application preparation, interview question practice, and deadline reminders.',
    educatorTouchpoint: 'Action items agreeably set during 1:1 sessions are tracked and supported.',
  },
  {
    number: '06',
    title: 'Return with Better Questions',
    icon: RotateCcw,
    color: 'text-rose-400',
    badgeColor: 'border-rose-500/30 bg-rose-950/40 text-rose-300',
    studentAction: 'Requests next 1:1 guidance appointment with concrete questions, refined preferences, and portfolio items.',
    mentorSupport: 'Synthesises student exploration into a clear session brief for the human counsellor.',
    educatorTouchpoint: 'Human counsellor enters the meeting with full context, focusing entirely on high-judgement guidance.',
  },
];

export function StudentActivityLoop() {
  return (
    <div className="w-full space-y-8">
      {/* 6-Step Loop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {LOOP_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={cn('text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded border font-semibold', step.badgeColor)}>
                    Step {step.number}
                  </span>
                  <div className={cn('w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center', step.color)}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-serif text-white font-normal">
                  {step.title}
                </h4>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  <strong className="text-white block mb-1">Student Activity:</strong>
                  {step.studentAction}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-2 text-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-purple-300 uppercase flex items-center gap-1 font-semibold">
                    <Bot className="w-3 h-3 text-purple-400" /> Between-Meeting Support
                  </span>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                    {step.mentorSupport}
                  </p>
                </div>

                <div className="space-y-0.5 pt-1">
                  <span className="text-[10px] font-mono text-emerald-300 uppercase flex items-center gap-1 font-semibold">
                    <UserCheck className="w-3 h-3 text-emerald-400" /> Educator Impact
                  </span>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                    {step.educatorTouchpoint}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flywheel Banner */}
      <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <RotateCcw className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Continuous Guidance Flywheel</span>
            <span className="text-[var(--color-text-secondary)] text-[11px]">
              Every exploratory cycle compounds student confidence and produces sharper questions for educator review.
            </span>
          </div>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] shrink-0 px-3 py-1.5 rounded bg-white/5 border border-white/10">
          Compounding Context
        </span>
      </div>
    </div>
  );
}
