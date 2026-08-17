'use client';

import React, { useState } from 'react';
import { STUDENT_PREP_SCENARIOS, StudentPrepScenario } from './educatorsData';
import { cn } from '@/lib/utils';
import {
  User,
  Bot,
  Compass,
  FileCheck,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export function CounsellorSessionPrep() {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('student-a');

  const activeStudent: StudentPrepScenario =
    STUDENT_PREP_SCENARIOS.find((s) => s.id === selectedStudentId) || STUDENT_PREP_SCENARIOS[0]!;

  return (
    <div
      id="session-prep-demo"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Counsellor Session Preparation Interactive Demonstration"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Interaction 01 &bull; 1:1 Guidance Session Prep
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            See how a 1:1 conversation begins differently.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Select an illustrative student scenario below to inspect the exploratory context available before the meeting.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Illustrative Workflow
        </span>
      </div>

      {/* Student Selector Segmented Pills */}
      <div className="p-4 sm:p-6 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)]">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3">
          Select Illustrative Student Scenario:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5" role="tablist" aria-label="Student Scenarios">
          {STUDENT_PREP_SCENARIOS.map((student) => {
            const isSelected = student.id === selectedStudentId;
            return (
              <button
                key={student.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStudentId(student.id)}
                className={cn(
                  'p-3.5 rounded-lg border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8FFF] flex flex-col justify-between space-y-2',
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-md ring-1 ring-white/20'
                    : 'bg-[var(--color-surface-raised)]/60 border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-[var(--color-taupe-300)] font-semibold">
                      {student.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                      {student.yearGroup.split('/')[0]}
                    </span>
                  </div>
                  <div className="font-semibold text-xs text-white leading-tight">
                    {student.headline}
                  </div>
                </div>
                <div className="text-[11px] text-[var(--color-text-tertiary)] flex items-center gap-1 truncate">
                  <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', isSelected ? 'bg-[#2F8FFF]' : 'bg-white/30')} />
                  <span>{student.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Detail Workspace: 2-Column Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border-default)]">
        
        {/* LEFT COLUMN (lg:col-span-6): Student Background & Exploration */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[var(--color-surface-base)]/40">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border-default)] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">{activeStudent.name}</span>
                <span className="text-xs font-mono text-[var(--color-text-tertiary)]">({activeStudent.yearGroup})</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {activeStudent.currentExploration.description}
              </p>
            </div>
            <span className={cn('text-[10px] font-mono px-2.5 py-1 rounded border font-semibold shrink-0', activeStudent.statusStyle)}>
              {activeStudent.statusBadge}
            </span>
          </div>

          {/* Pathways Explored */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#2F8FFF]" />
              Pathways Currently Explored
            </span>
            <div className="p-3.5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
              {activeStudent.currentExploration.pathways.map((pathway, idx) => (
                <div key={pathway} className="flex items-center gap-2 text-xs">
                  <span className="w-4 h-4 rounded-full bg-white/10 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-white font-medium">{pathway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence in Career Passport */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              Evidence Logged in Career Passport
            </span>
            <div className="space-y-1.5">
              {activeStudent.evidenceLogged.map((ev) => (
                <div
                  key={ev.item}
                  className="p-2.5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] flex items-center justify-between text-xs gap-2"
                >
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{ev.item}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-taupe-300)] shrink-0 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {ev.source}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stated Student Question & Uncertainties */}
          <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              Student Stated Question for Human Counsellor
            </span>
            <p className="text-xs sm:text-sm text-white font-medium italic leading-relaxed">
              &ldquo;{activeStudent.studentQuestion}&rdquo;
            </p>
            <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1 text-xs text-[var(--color-text-secondary)]">
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">Specific Uncertainties Raised:</span>
              {activeStudent.uncertainties.map((u) => (
                <div key={u} className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span>{u}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-[var(--color-text-tertiary)] flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>{activeStudent.privacyPreservation}</span>
          </div>

        </div>

        {/* RIGHT COLUMN (lg:col-span-6): Educator Preparation Brief & Discussion Prompts */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[var(--color-surface-base)]/75">
          
          <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                Counsellor Preparation Context
              </span>
              <h4 className="text-base font-serif font-medium text-white">
                Human Discussion Strategy
              </h4>
            </div>
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
              Ready for 1:1
            </span>
          </div>

          {/* Educator Summary Box */}
          <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
              Context Synopsis for Counsellor
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeStudent.educatorSummary}
            </p>
          </div>

          {/* High-Leverage Discussion Prompts */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
              Suggested Human Discussion Prompts
            </span>
            <div className="space-y-2">
              {activeStudent.suggestedPrompts.map((prompt, idx) => (
                <div
                  key={prompt}
                  className="p-3.5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-300 font-mono text-[10px] flex items-center justify-center font-bold shrink-0 border border-emerald-500/20">
                    {idx + 1}
                  </span>
                  <span className="text-white font-medium leading-relaxed">{prompt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Possible Next Actions */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold block">
              Possible Next Actions Following 1:1
            </span>
            <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2 text-xs">
              {activeStudent.possibleNextActions.map((act) => (
                <div key={act} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Human Agency Note */}
          <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Professional Agency:</strong> The counsellor selects discussion direction and next steps. AI never automates guidance advice.
            </span>
          </div>

        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="p-4 bg-black/30 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)] border-t border-[var(--color-border-default)]">
        <span className="italic">
          &ldquo;Don’t spend the first ten minutes asking what the student has already explored.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
          Pre-Session Synthesis &bull; Non-Deterministic &bull; Permission-Segregated
        </span>
      </div>
    </div>
  );
}
