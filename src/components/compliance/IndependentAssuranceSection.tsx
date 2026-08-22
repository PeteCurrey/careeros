'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { FrameworkCard } from './FrameworkCard';
import { ShieldCheck, Award, FileCheck, ArrowRight, Bot, Lock, Server } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface IndependentAssuranceSectionProps {
  frameworks: ComplianceFramework[];
  onRequestAccess?: (framework: ComplianceFramework) => void;
}

export function IndependentAssuranceSection({
  frameworks,
  onRequestAccess,
}: IndependentAssuranceSectionProps) {
  const assuranceFrameworks = frameworks.filter(
    (f) =>
      f.id === 'soc2-type2' ||
      f.id === 'iso-27001' ||
      f.id === 'iso-27701' ||
      f.id === 'iso-42001'
  );

  return (
    <section id="independent-assurance" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
          <Award className="w-3.5 h-3.5" />
          <span>INDEPENDENT VERIFICATION & ACCREDITED REGISTRATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Independent assurance & recognized standards
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          CareerOS subjects its technical infrastructure, data privacy controls, and AI operational lifecycles to rigorous external examination. We maintain continuous controls aligned with international standards and provide verified evidence to institutional partners.
        </p>
      </div>

      {/* Narrative Deep Dive on 4 Core Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assuranceFrameworks.map((framework) => (
          <FrameworkCard
            key={framework.id}
            framework={framework}
            onRequestAccess={onRequestAccess}
          />
        ))}
      </div>

      {/* ISO 42001 Spotlight Callout Banner */}
      <div className="p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-blue)]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[var(--color-brand-300)]/10 border border-[var(--color-brand-300)]/30 flex items-center justify-center text-[var(--color-brand-300)] shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[var(--color-brand-300)] font-semibold tracking-wider">
                Enterprise AI Differentiator
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)]">
                ISO/IEC 42001:2023 — Artificial Intelligence Management System (AIMS)
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={ROUTES.TRUST_RESPONSIBLE_AI}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[var(--color-surface-raised)] text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <span>Responsible AI Architecture</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-4xl">
          While many platforms treat AI safety as an afterthought, CareerOS implements a formally auditable AI Management System under ISO/IEC 42001. This governs the complete lifecycle: pre-deployment impact assessments, transparent data provenance, continual bias and drift monitoring, human-in-the-loop escalation, and failover circuit breakers across our AI Mentors and Opportunity Matching engines.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-text-secondary)]">
          <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="hover:text-[var(--color-text-primary)] transition-colors">
            &rarr; Responsible AI Policy
          </Link>
          <Link href={ROUTES.TRUST_AI_TRANSPARENCY} className="hover:text-[var(--color-text-primary)] transition-colors">
            &rarr; AI Transparency Register
          </Link>
          <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="hover:text-[var(--color-text-primary)] transition-colors">
            &rarr; Human Oversight Matrix
          </Link>
          <Link href={ROUTES.TRUST_FAIRNESS_BIAS} className="hover:text-[var(--color-text-primary)] transition-colors">
            &rarr; Fairness & Bias Protocol
          </Link>
        </div>
      </div>
    </section>
  );
}
