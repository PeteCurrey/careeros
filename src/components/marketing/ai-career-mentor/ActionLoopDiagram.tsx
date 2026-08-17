'use client';

import React from 'react';
import { HelpCircle, Brain, Sparkles, CheckSquare, Award, RefreshCcw, Repeat } from 'lucide-react';

export function ActionLoopDiagram() {
  const steps = [
    { num: '01', title: 'ASK', icon: HelpCircle, desc: 'Bring a real career question, gap, or target milestone to your AI Mentor.' },
    { num: '02', title: 'UNDERSTAND', icon: Brain, desc: 'Career OS synthesizes relevant Career Twin context and available Passport evidence.' },
    { num: '03', title: 'RECOMMEND', icon: Sparkles, desc: 'Mentor surfaces a clear next move alongside decision factors and uncertainty notes.' },
    { num: '04', title: 'ACT', icon: CheckSquare, desc: 'You choose whether to accept, adjust, or challenge the proposed step.' },
    { num: '05', title: 'CAPTURE', icon: Award, desc: 'Completed learning, project artifacts, or leadership deliverables can be contributed to your Passport.' },
    { num: '06', title: 'UPDATE', icon: RefreshCcw, desc: 'Your Career Twin is designed to evolve as relevant career information and evidence are added or updated.' },
    { num: '07', title: 'REASSESS', icon: Repeat, desc: 'Future guidance starts from your newly strengthened baseline.' },
  ];

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
        <div>
          <span className="section-label">CONTINUOUS FEEDBACK MODEL</span>
          <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-1">
            From Conversation to Compounding Progress
          </h3>
        </div>
        <span className="font-mono text-xs text-[var(--color-text-secondary)] px-3 py-1 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded">
          Career OS Action Model
        </span>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 relative">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[var(--color-taupe-700)]">{s.num}</span>
                  <div className="w-6 h-6 rounded bg-white/10 text-[var(--color-text-primary)] flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-bold text-xs text-[var(--color-text-primary)] tracking-wider font-mono">
                  {s.title}
                </h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)] text-center">
        <span className="font-bold text-[var(--color-text-primary)]">Career OS Model:</span> Career OS is designed to move beyond conversation by turning useful guidance into actions that can contribute evidence and updated career context.
      </div>
    </div>
  );
}
