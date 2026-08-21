'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  FileText,
  UserCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkflowStep {
  stepNum: string;
  title: string;
  subtitle: string;
  actor: string;
  icon: React.ComponentType<{ className?: string }>;
  studentAction: string;
  systemAction: string;
  educatorAction: string;
  privacyBoundary: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNum: '01',
    title: 'Student Explores Continuously',
    subtitle: 'Between scheduled school advising sessions',
    actor: 'Student & Career Mentor',
    icon: Compass,
    studentAction: 'Student explores industries, compares university vs apprenticeship pathways, tests assumptions, and logs early evidence.',
    systemAction: 'Career Mentor provides structured explanations, asks clarifying questions, and identifies areas where human advising would add the most clarity.',
    educatorAction: 'No active time required during initial exploration; students arrive with formed questions rather than a blank page.',
    privacyBoundary: 'Personal uncertainties, exploratory questions, and developmental reflections remain confidential to the student.',
  },
  {
    stepNum: '02',
    title: 'Context Structured Into Advising Brief',
    subtitle: 'Transforming exploration into actionable preparation',
    actor: 'Career OS System',
    icon: Cpu,
    studentAction: 'Student flags topics or questions they want to discuss with their school counselor (e.g. course requirements, financial aid, apprenticeship availability).',
    systemAction: 'Synthesizes permitted exploratory highlights into a concise 1-page pre-conversation brief for the educator.',
    educatorAction: 'Receives the structured context ahead of the appointment instead of spending the first 15 minutes asking basic background questions.',
    privacyBoundary: 'Raw conversational transcripts are never copied wholesale; only student-permissioned goals and questions are transferred.',
  },
  {
    stepNum: '03',
    title: 'Educator Reviews Permissioned Context',
    subtitle: 'Understanding the student before entering the room',
    actor: 'School Counselor / Advisor',
    icon: UserCheck,
    studentAction: 'Student knows their counselor is prepared and that their time together will focus on substantive decisions.',
    systemAction: 'Surfaces relevant local labor market trends, entry criteria, and institution-specific deadlines matching the student’s interest.',
    educatorAction: 'Counselor reviews stated interests, pathways explored, and student questions in 90 seconds before the meeting.',
    privacyBoundary: 'Educator sees role-based context scoped strictly to educational and career planning duties.',
  },
  {
    stepNum: '04',
    title: 'High-Leverage Human Conversation',
    subtitle: 'Where empathy, judgment, and local knowledge matter most',
    actor: 'Student & Educator (Together)',
    icon: Users,
    studentAction: 'Engages in an honest, grounded dialogue about realistic choices, family considerations, and emotional readiness.',
    systemAction: 'Steps into the background. Technology does not participate in or record the human counseling session.',
    educatorAction: 'Delivers mentorship, personal encouragement, reality checks, pastoral care, and nuanced institutional guidance.',
    privacyBoundary: 'The physical advising conversation is a human relationship governed by school safeguarding and ethics policies.',
  },
  {
    stepNum: '05',
    title: 'Agreed Action Plan & Follow-up',
    subtitle: 'Clarity and continuity compounding over time',
    actor: 'Student, Educator & Career OS',
    icon: CheckCircle2,
    studentAction: 'Receives concrete next milestones (e.g. attend open day, build portfolio artifact, submit apprenticeship application).',
    systemAction: 'Updates the student Career Twin with confirmed milestones and provides reminders/resources tailored to the plan.',
    educatorAction: 'Logs advising completion and next scheduled check-in with zero cumbersome administrative paperwork.',
    privacyBoundary: 'Action milestones are stored in the student sovereign record and accessible across academic years.',
  },
];

export function CounselorAugmentationWorkflow() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const currentStep = WORKFLOW_STEPS[activeStepIdx] ?? WORKFLOW_STEPS[0]!;

  return (
    <div className="w-full space-y-8" id="counselor-workflow">
      
      {/* 5-Step Horizontal Indicator */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {WORKFLOW_STEPS.map((s, idx) => {
          const isCurrent = idx === activeStepIdx;
          const Icon = s.icon;
          return (
            <button
              key={s.stepNum}
              type="button"
              onClick={() => setActiveStepIdx(idx)}
              className={cn(
                'p-4 rounded-[var(--radius-card)] border text-left transition-all cursor-pointer flex flex-col justify-between gap-3',
                isCurrent
                  ? 'bg-white/10 border-white/30 text-white shadow-xs'
                  : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn('text-xs font-mono font-bold', isCurrent ? 'text-[#2F8FFF]' : 'text-[var(--color-text-tertiary)]')}>
                  Phase {s.stepNum}
                </span>
                <Icon className={cn('w-4 h-4', isCurrent ? 'text-[#2F8FFF]' : 'text-[var(--color-taupe-300)]')} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white line-clamp-1">
                  {s.title}
                </h4>
                <p className="text-[11px] text-[var(--color-text-tertiary)] line-clamp-1 mt-0.5 font-normal">
                  {s.actor}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Detail Stage */}
      <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
        
        {/* Phase Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Phase {currentStep.stepNum} Detail &bull; {currentStep.actor}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
              {currentStep.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              {currentStep.subtitle}
            </p>
          </div>
          <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] shrink-0">
            Augmentation Operating Model
          </span>
        </div>

        {/* 3-Column Role Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Student Role */}
          <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2.5">
            <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-bold block">
              What the Student Does
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {currentStep.studentAction}
            </p>
          </div>

          {/* Career OS Role */}
          <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2.5">
            <span className="text-[10px] font-mono uppercase text-[#2F8FFF] font-bold block">
              What Career OS Facilitates
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {currentStep.systemAction}
            </p>
          </div>

          {/* Educator Role */}
          <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2.5">
            <span className="text-[10px] font-mono uppercase text-[var(--color-gold-base)] font-bold block">
              What the Educator Delivers
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {currentStep.educatorAction}
            </p>
          </div>

        </div>

        {/* Privacy & Trust Safeguard Bar */}
        <div className="p-4 bg-[var(--color-surface-warm)] border border-[rgba(47,143,255,0.18)] rounded-[var(--radius-sm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong className="text-white">Privacy Guardrail:</strong> {currentStep.privacyBoundary}</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--color-taupe-400)] shrink-0">
            Governed by School Agreement
          </span>
        </div>

      </div>

    </div>
  );
}
