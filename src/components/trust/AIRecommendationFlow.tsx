'use client';

import React from 'react';
import { 
  User, 
  Database, 
  Compass, 
  Bot, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FLOW_STEPS = [
  { step: '01', title: 'Your Context', icon: User, desc: 'Your self-curated Career Twin, stated aspirations, and learning background.' },
  { step: '02', title: 'Labor Market Data', icon: Database, desc: 'Factual occupation frameworks, statutory wage scales, and course prerequisites.' },
  { step: '03', title: 'CareerOS Logic', icon: Compass, desc: 'Topological cross-industry mapping and multi-pathway parity engine.' },
  { step: '04', title: 'AI Processing', icon: Bot, desc: 'Enterprise model synthesis with strict zero-training terms.' },
  { step: '05', title: 'Safety Layer', icon: ShieldCheck, desc: 'Non-therapeutic guardrails, youth checks, and boundary filters.' },
  { step: '06', title: 'Recommendation', icon: Sparkles, desc: 'Advisory suggestion with explicit surfaced rationale.' },
  { step: '07', title: 'Human Decision', icon: UserCheck, desc: 'The user and hiring managers retain 100% final decision authority.' },
];

export function AIRecommendationFlow() {
  return (
    <div className="w-full space-y-6">
      {/* 7-Step Grid Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 text-xs">
        {FLOW_STEPS.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={st.step}
              className={cn(
                'p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border transition-all flex flex-col justify-between space-y-2.5',
                idx === 6 ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-[var(--color-border-default)]'
              )}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#6BB8FF]">
                    Step {st.step}
                  </span>
                  <Icon className={cn('w-4 h-4', idx === 6 ? 'text-emerald-400' : 'text-[var(--color-text-tertiary)]')} />
                </div>
                <h4 className="font-semibold text-white text-xs">
                  {st.title}
                </h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)] flex items-center justify-between">
                <span>{idx === 6 ? 'Final Authority' : 'Flow Gate'}</span>
                {idx < 6 && <ArrowRight className="w-3 h-3 text-white/20 hidden lg:inline" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Axiom Banner */}
      <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/80 backdrop-blur-md border border-[var(--color-border-default)] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
        <div className="space-y-1 max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold block">
            Core Distinction &bull; Recommendation &ne; Decision
          </span>
          <h4 className="text-base font-serif text-white font-normal">
            Career OS provides evidence, comparisons, and suggestions. Humans make decisions.
          </h4>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            An AI recommendation is not objective truth. It is a probabilistic synthesis designed to widen exploration. Consequential choices—such as selecting a course, hiring a candidate, or admitting a student—remain human responsibilities.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center font-mono text-xs text-white shrink-0 self-start md:self-auto">
          <span className="block text-[10px] text-[var(--color-taupe-300)] uppercase">Sovereignty Standard</span>
          <span className="font-bold text-emerald-400">100% Contestable Advice</span>
        </div>
      </div>
    </div>
  );
}
