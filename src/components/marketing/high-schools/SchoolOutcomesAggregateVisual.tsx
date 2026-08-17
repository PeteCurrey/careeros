'use client';

import React from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  TrendingUp,
  BookOpen
} from 'lucide-react';

export function SchoolOutcomesAggregateVisual() {
  const pathwayDistribution = [
    { name: 'University & Higher Ed', pct: 42, color: 'bg-[#F4F3EF]', label: '42% Exploring Academic Degrees' },
    { name: 'Degree & Higher Apprenticeships', pct: 33, color: 'bg-[#2F8FFF]', label: '33% Exploring Earn-and-Learn' },
    { name: 'Vocational & Technical Trades', pct: 15, color: 'bg-[#DDD36D]', label: '15% Exploring Technical Trades' },
    { name: 'Direct Industry & Public Service', pct: 10, color: 'bg-[#CDBBD2]', label: '10% Exploring Direct Employment' },
  ];

  const engagementSignals = [
    {
      metric: '3.8 Pathways',
      title: 'Average Pathways Explored per Student',
      subtitle: 'Moving beyond single-track assumption to informed comparison',
      detail: 'Students actively evaluate both academic and work-based alternatives before key decision milestones.',
    },
    {
      metric: '88% Prepared',
      title: 'Pre-Conversation Brief Completion',
      subtitle: 'Students arriving to human advising sessions with structured questions',
      detail: 'Replaces introductory fact-finding with substantive guidance on course selection, entry tests, and applications.',
    },
    {
      metric: '4.2 Artifacts',
      title: 'Evidence Items Logged per Passport',
      subtitle: 'Early documentation of capstone projects, volunteering, and skills',
      detail: 'Students build tangible evidence of capability before applying to universities or apprenticeship employers.',
    },
    {
      metric: '100% Agency',
      title: 'Zero Automated Student Sorting',
      subtitle: 'No algorithmic ranking, employability scoring, or path-limiting',
      detail: 'Career OS broadens horizons rather than narrowing choices through black-box predictive algorithms.',
    },
  ];

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="institutional-outcomes">
      
      {/* Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-6 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="accent-blue-dot" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
              Institutional Progress Dashboard &bull; Aggregate Signals
            </span>
          </div>
          <h3 className="text-lg font-serif font-normal text-white">
            Measuring Career Education Engagement (Without Fabricated Outcomes)
          </h3>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
          Illustrative Cohort Reporting
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Pathway Exploration Breadth Bar */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="font-bold text-white font-serif text-sm">
              Pathway Exploration Distribution Across Active Cohort (Grade 11–12)
            </span>
            <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
              Multi-pathway engagement &bull; 100% Anonymised
            </span>
          </div>

          {/* Stacked Progress Bar */}
          <div className="h-4 w-full bg-[var(--color-surface-base)] rounded-[var(--radius-sm)] overflow-hidden flex border border-[var(--color-border-default)]">
            {pathwayDistribution.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${item.pct}%` }}
                className={`${item.color} h-full transition-all`}
                title={item.label}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {pathwayDistribution.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <span className={`w-3 h-3 rounded-xs ${item.color} shrink-0`} />
                <span className="text-[var(--color-text-secondary)] font-medium">
                  {item.name} <strong className="text-white font-mono">({item.pct}%)</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Engagement Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {engagementSignals.map((signal, idx) => (
            <div
              key={idx}
              className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-2xl font-serif font-bold text-white block">
                  {signal.metric}
                </span>
                <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                  {signal.title}
                </h4>
                <p className="text-[11px] text-[var(--color-text-tertiary)] leading-normal pt-1">
                  {signal.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Measurement Standard Banner */}
        <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)] flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Responsible Measurement Principle:</strong> Career OS measures whether structured career education, exploration breadth, and evidence logging are taking place. We do not invent premature employment outcomes, fabricated college acceptance improvements, or single career-readiness scores that oversimplify student potential.
          </p>
        </div>

      </div>

    </div>
  );
}
