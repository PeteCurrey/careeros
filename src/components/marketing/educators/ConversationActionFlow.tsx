'use client';

import React from 'react';
import { 
  Compass, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  FileCheck, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FLOW_STAGES = [
  {
    step: '01',
    title: 'Student Context',
    icon: Compass,
    color: 'text-purple-400',
    badge: 'Pre-Meeting',
    badgeColor: 'border-purple-500/30 bg-purple-950/40 text-purple-300',
    description: 'Student undertakes exploratory inquiries, compares pathways, and logs evidence in Career Passport.',
  },
  {
    step: '02',
    title: 'Human Guidance',
    icon: MessageSquare,
    color: 'text-emerald-400',
    badge: '1:1 Session',
    badgeColor: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
    description: 'Educator and student hold a focused conversation centered on values, trade-offs, and critical decisions.',
  },
  {
    step: '03',
    title: 'Agreed Next Action',
    icon: CheckCircle2,
    color: 'text-[#6BB8FF]',
    badge: 'Clear Milestone',
    badgeColor: 'border-blue-500/30 bg-blue-950/40 text-blue-300',
    description: 'Specific exploratory commitment set (e.g. attend local employer open day, draft technical portfolio).',
  },
  {
    step: '04',
    title: 'Independent Activity',
    icon: Zap,
    color: 'text-amber-400',
    badge: 'Between Sessions',
    badgeColor: 'border-amber-500/30 bg-amber-950/40 text-amber-300',
    description: 'Student undertakes the practical task with continuous drafting and reflection support from their AI Mentor.',
  },
  {
    step: '05',
    title: 'New Evidence Logged',
    icon: FileCheck,
    color: 'text-cyan-400',
    badge: 'Capability Growth',
    badgeColor: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300',
    description: 'Completed project, work experience journal, or credential added to the student’s verifiable Career Passport.',
  },
  {
    step: '06',
    title: 'Prepared Follow-Up',
    icon: RotateCcw,
    color: 'text-rose-400',
    badge: 'Continuous Cycle',
    badgeColor: 'border-rose-500/30 bg-rose-950/40 text-rose-300',
    description: 'Student returns for next guidance appointment with sharper questions and demonstrable progression.',
  },
];

export function ConversationActionFlow() {
  return (
    <div className="w-full space-y-6">
      {/* 6-Stage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FLOW_STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.step}
              className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className={cn('text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold', stage.badgeColor)}>
                    Stage {stage.step}
                  </span>
                  <div className={cn('w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center', stage.color)}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="text-base font-serif text-white font-normal">
                  {stage.title}
                </h4>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--color-taupe-300)]">
                <span>{stage.badge}</span>
                {idx < FLOW_STAGES.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-white/30" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Continuity Banner */}
      <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-secondary)]">
        <span className="text-white font-medium">
          Outcome: Every appointment finishes with structured direction rather than vague encouragement.
        </span>
        <span className="font-mono text-[10px] text-[var(--color-taupe-300)] shrink-0">
          Accountable Guidance Flow
        </span>
      </div>
    </div>
  );
}
