'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { ComplianceStatusBadge } from './ComplianceStatusBadge';
import { Bot, Scale, Eye, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface ResponsibleAIRiskSectionProps {
  framework?: ComplianceFramework;
}

const NIST_AI_FUNCTIONS = [
  {
    name: 'Govern',
    headline: 'Culture of AI Safety & Policy Boundaries',
    description:
      'Establishes organizational accountability, strict decision boundaries, human escalation policies, and public AI registers before any model is deployed.',
    appliedTo: 'Applied to all platform AI models and external LLM provider routing.',
  },
  {
    name: 'Map',
    headline: 'Contextual Risk & Failure-Mode Identification',
    description:
      'Identifies foreseeable socio-technical risks, minor guidance vulnerabilities, hallucinations, and candidate bias vectors across specific career domains.',
    appliedTo: 'AI Career Mentors, Career Twin skills extraction, and matching algorithms.',
  },
  {
    name: 'Measure',
    headline: 'Quantitative Benchmarks & Disparate Impact Audits',
    description:
      'Rigorous pre-deployment testing against diverse synthetic profiles, measuring response accuracy, fairness metrics (four-fifths rule), and safety compliance.',
    appliedTo: 'Annual independent bias audits for employer talent discovery pipelines.',
  },
  {
    name: 'Manage',
    headline: 'Continuous Telemetry & Circuit Breaker Containment',
    description:
      'Real-time output monitoring, automated heuristic circuit breakers, instant model rollback capability, and guaranteed human appeal pathways.',
    appliedTo: 'Live production dialogues, recommendation feeds, and candidate match scores.',
  },
];

export function ResponsibleAIRiskSection({ framework }: ResponsibleAIRiskSectionProps) {
  return (
    <section id="responsible-ai" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF]">
            <Bot className="w-3.5 h-3.5" />
            <span>RESPONSIBLE AI RISK MANAGEMENT (NIST AI RMF 1.0)</span>
          </div>
          {framework && <ComplianceStatusBadge framework={framework} />}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Responsible AI framework & risk controls
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          CareerOS manages artificial intelligence under the <span className="text-white font-semibold">NIST AI Risk Management Framework</span>. AI must open doors rather than quietly rank individuals or make consequential career choices on their behalf.
        </p>
      </div>

      {/* 4 Pillars: Govern, Map, Measure, Manage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {NIST_AI_FUNCTIONS.map((func) => (
          <div
            key={func.name}
            className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#6BB8FF] uppercase px-2 py-0.5 rounded-xs bg-white/5 border border-white/10">
                NIST AI &bull; {func.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">
                Continuous Governance
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                {func.headline}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
                {func.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-text-tertiary)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>{func.appliedTo}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cross Links to Trust Deep Dives */}
      <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-4 text-xs">
        <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
          Explore our complete AI governance architecture:
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="text-[#6BB8FF] hover:underline font-medium">
            Responsible AI &rarr;
          </Link>
          <Link href={ROUTES.TRUST_AI_TRANSPARENCY} className="text-[#6BB8FF] hover:underline font-medium">
            AI Transparency &rarr;
          </Link>
          <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="text-[#6BB8FF] hover:underline font-medium">
            Human Oversight &rarr;
          </Link>
          <Link href={ROUTES.TRUST_FAIRNESS_BIAS} className="text-[#6BB8FF] hover:underline font-medium">
            Fairness & Bias Testing &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
