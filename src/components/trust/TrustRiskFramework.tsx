'use client';

import React from 'react';
import { 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Lock,
  Eye,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function TrustRiskFramework() {
  const tiers = [
    {
      tier: 'Tier 01 &bull; Low Impact',
      title: 'Formative Assistance & Exploration',
      examples: 'Resume phrasing assistance, job title terminology lookups, drafting practice interview questions.',
      controls: 'Standard safety guardrails, prompt boundary checks, user editability before export.',
      badgeColor: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
      icon: Eye,
    },
    {
      tier: 'Tier 02 &bull; Moderate Impact',
      title: 'Pathway Guidance & Skill Gap Advisory',
      examples: 'AI Career Mentor dialogue, skill gap comparisons, vocational vs academic route comparisons.',
      controls: 'Surfaced decision factors, contestable skill vectors, labor market grounding, counsellor pre-session briefs.',
      badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
      icon: Sparkles,
    },
    {
      tier: 'Tier 03 &bull; Heightened Impact',
      title: 'Employment & Consequential Decision Support',
      examples: 'Employer Agent candidate discovery, apprentice application routing, employer matching.',
      controls: 'Mandatory human hiring manager decision, zero minor sourcing, proxy variable audits, candidate notice.',
      badgeColor: 'text-rose-300 bg-rose-950/40 border-rose-500/30',
      icon: Users,
    },
  ];

  const lifecycleStages = [
    { step: '01', title: 'Define Purpose', desc: 'Specify intended use & boundary limits' },
    { step: '02', title: 'Identify Users', desc: 'Map affected cohorts (minors vs adults)' },
    { step: '03', title: 'Assess Harms', desc: 'Identify foreseeable failure modes' },
    { step: '04', title: 'Review Data', desc: 'Audit training & inference dependencies' },
    { step: '05', title: 'Architecture', desc: 'Select model family & enterprise terms' },
    { step: '06', title: 'Test Behaviour', desc: 'Benchmark factual accuracy & prompt gates' },
    { step: '07', title: 'Test Edge Cases', desc: 'Red-team adversarial inputs & injections' },
    { step: '08', title: 'Fairness Testing', desc: 'Assess adverse impact across groups' },
    { step: '09', title: 'Deploy Controls', desc: 'Roll out with logging & circuit breakers' },
    { step: '10', title: 'Monitor System', desc: 'Continuous latency & drift telemetry' },
    { step: '11', title: 'Escalate Issues', desc: 'Human incident review & triage queue' },
    { step: '12', title: 'Iterative Review', desc: 'Scheduled governance board reviews' },
  ];

  return (
    <div className="w-full space-y-8">
      {/* 3-Tier Risk Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.title}
              className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold',
                      t.badgeColor
                    )}
                    dangerouslySetInnerHTML={{ __html: t.tier }}
                  />
                  <Icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                </div>
                <h4 className="text-base font-serif text-white font-normal">
                  {t.title}
                </h4>
                <div className="space-y-1 text-xs">
                  <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
                    Use Cases:
                  </span>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {t.examples}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-1 text-xs">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                  Mandatory Controls:
                </span>
                <p className="text-white font-medium leading-relaxed">
                  {t.controls}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 12-Stage AI Governance Lifecycle */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold">
              Iterative Operating Framework
            </span>
            <h3 className="text-lg sm:text-xl font-serif text-white font-normal">
              12-Stage AI Governance Lifecycle
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Responsible AI is treated as a continuous lifecycle rather than a one-time checklist.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto shrink-0">
            NIST AI RMF Aligned
          </span>
        </div>

        {/* 12 Stages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          {lifecycleStages.map((st, idx) => (
            <div
              key={st.step}
              className="p-3.5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)] mb-1">
                  <span className="font-bold text-[#6BB8FF]">Stage {st.step}</span>
                  {idx < 11 ? <ArrowRight className="w-3 h-3 text-white/20" /> : <RotateCcw className="w-3 h-3 text-emerald-400" />}
                </div>
                <h5 className="font-semibold text-white text-xs">{st.title}</h5>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-tight mt-0.5">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
