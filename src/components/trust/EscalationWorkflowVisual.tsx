'use client';

import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  UserCheck, 
  FileText, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ESCALATION_STEPS = [
  { step: '01', title: 'Concern Flagged', icon: ShieldAlert, desc: 'User report, automated guardrail breach, or school counselor escalation.', badge: 'Triage Trigger' },
  { step: '02', title: 'Containment', icon: Search, desc: 'Temporary output retraction or kill-switch activation on affected pathway vector.', badge: 'Immediate' },
  { step: '03', title: 'Human Investigation', icon: UserCheck, desc: 'Trust & Safety Review Board examines prompt logs, context, and potential bias.', badge: 'Human Review' },
  { step: '04', title: 'Action & Redress', icon: FileText, desc: 'System recalibration, direct communication to affected user, and policy update.', badge: 'Recourse' },
  { step: '05', title: 'System Hardening', icon: RotateCcw, desc: 'Updated regression tests, guardrail patches, and public AI change log disclosure.', badge: 'Continuous Improvement' },
];

export function EscalationWorkflowVisual() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs">
        {ESCALATION_STEPS.map((es, idx) => {
          const Icon = es.icon;
          return (
            <div
              key={es.step}
              className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#6BB8FF] px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    Step {es.step}
                  </span>
                  <span className="text-[9px] font-mono text-[var(--color-taupe-300)]">
                    {es.badge}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-xs">
                  {es.title}
                </h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  {es.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)] flex items-center justify-between">
                <span>Escalation Gate</span>
                {idx < 4 ? <ArrowRight className="w-3 h-3 text-white/20 hidden lg:inline" /> : <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
