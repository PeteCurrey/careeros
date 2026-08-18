import React from 'react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { Compass, Sparkles, Network, RefreshCw, CheckCircle2 } from 'lucide-react';

export function MentorAssignmentFlow() {
  const steps = [
    {
      num: '01',
      title: 'Context Ingestion',
      icon: Compass,
      desc: 'Career Twin aggregates your self-declared aspirations, target industries, and available Career Passport credentials.',
    },
    {
      num: '02',
      title: 'Domain Mapping',
      icon: Network,
      desc: 'Career OS correlates your trajectory against 8 occupational domain matrices and Career Graph capability pathways.',
    },
    {
      num: '03',
      title: 'Mentor Assignment',
      icon: Sparkles,
      desc: 'The platform assigns the domain AI mentor persona best equipped with domain-specific trade-offs and benchmarking logic.',
    },
    {
      num: '04',
      title: 'Continuous Recalibration',
      icon: RefreshCw,
      desc: 'As your career evolves across industries, promotions, or venture pivots, mentor expertise adapts dynamically.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((s, idx) => {
        const Icon = s.icon;
        return (
          <ScrollReveal key={s.num} delayMs={idx * 100}>
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4 relative h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2F8FFF] bg-[#2F8FFF]/10 border border-[#2F8FFF]/20 px-2 py-0.5 rounded-[var(--radius-sm)]">
                    STEP {s.num}
                  </span>
                  <Icon className="w-5 h-5 text-[var(--color-taupe-300)]" />
                </div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-text-tertiary)]">
                <CheckCircle2 className="w-3 h-3 text-[#34D399]" />
                <span>Zero Chatbot Shopping</span>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
