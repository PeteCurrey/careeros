'use client';

import React from 'react';
import {
  Compass,
  Layers,
  Users,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export function HeroInstitutionalOutcomesView() {
  const pathwayDistribution = [
    { name: 'University & Higher Ed', pct: 38, color: 'bg-[#F4F3EF]', count: '285 students' },
    { name: 'Degree & Higher Apprenticeships', pct: 32, color: 'bg-[#2F8FFF]', count: '240 students' },
    { name: 'Technical & Skilled Trades', pct: 18, color: 'bg-[#DDD36D]', count: '135 students' },
    { name: 'Direct Industry & Public Service', pct: 12, color: 'bg-[#CDBBD2]', count: '90 students' },
  ];

  const developmentMetrics = [
    {
      category: 'Pathway Reach & Breadth',
      metric: '3.6 Routes',
      subtext: 'Average pathways compared per student before post-16 decision milestones',
      icon: Compass,
      status: 'Multi-pathway active',
    },
    {
      category: 'Evidence Building',
      metric: '4.4 Items',
      subtext: 'Verified projects, work experience, and certifications logged in Career Passport',
      icon: Layers,
      status: 'Tangible artifacts',
    },
    {
      category: 'Human Guidance Direct',
      metric: '92% Prepared',
      subtext: 'Students arriving to 1:1 counsellor appointments with structured briefs and questions',
      icon: Users,
      status: 'High-impact 1:1 sessions',
    },
    {
      category: 'Employer Encounter Breadth',
      metric: '7 Sectors',
      subtext: 'Distinct industry families explored through verified events and panels this term',
      icon: Calendar,
      status: 'Balanced exposure',
    },
  ];

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="institutional-outcomes-hero">
      
      {/* Header Context Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-7 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-blue)] font-bold">
              Institutional Intelligence View · Cohort Aggregate
            </span>
          </div>
          <h3 className="text-xl font-serif font-normal text-white">
            Measuring Development &amp; Engagement (Without Scoring Human Potential)
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Explore aggregate pathway reach, evidence creation, and human guidance demand across an active high school cohort.
          </p>
        </div>

        <span className="text-[10px] font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto">
          Illustrative data — not live school data
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Pathway Distribution Multi-Bar */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-white font-serif text-sm">
                Pathway Exploration Breadth (Cohort Grades 10–12 / Years 11–13)
              </span>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Shows where students are directing research and comparing requirements across academic, vocational, and earn-while-learning tracks.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)] shrink-0">
              100% Anonymised Aggregate
            </span>
          </div>

          {/* Stacked Progress Bar */}
          <div className="h-4 w-full bg-[var(--color-surface-base)] rounded-[var(--radius-sm)] overflow-hidden flex border border-[var(--color-border-default)]">
            {pathwayDistribution.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${item.pct}%` }}
                className={`${item.color} h-full transition-all`}
                title={`${item.name}: ${item.pct}% (${item.count})`}
              />
            ))}
          </div>

          {/* Legend Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {pathwayDistribution.map((item, idx) => (
              <div key={idx} className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-xs ${item.color} shrink-0`} />
                  <span className="text-xs font-bold text-white font-mono">{item.pct}%</span>
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)] font-medium leading-tight">
                  {item.name}
                </div>
                <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Developmental Indicators */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="section-label">
              Four Dimensions of Programme Health
            </span>
            <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
              Activity &amp; Evidence Indicators
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {developmentMetrics.map((dm, idx) => {
              const Icon = dm.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase font-bold">
                        {dm.category}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                    </div>

                    <div className="text-2xl font-serif font-bold text-white">
                      {dm.metric}
                    </div>

                    <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                      {dm.subtext}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{dm.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Integrity Notice */}
        <div className="p-4 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded flex items-start gap-3 text-xs text-[var(--color-text-secondary)]">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Measurement Standard:</strong> Career OS helps schools understand exploration activity, pathway breadth, and evidence creation across cohorts. We deliberately do not assign employability ratings, future earnings predictions, or composite &ldquo;career-readiness scores&rdquo; that oversimplify human potential.
          </p>
        </div>

      </div>

    </div>
  );
}
