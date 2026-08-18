'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  GraduationCap, 
  Bot, 
  Users, 
  Briefcase, 
  ArrowDown, 
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const ASSURANCE_PILLARS = [
  {
    title: 'Information Security',
    description: 'ISO/IEC 27001 ISMS, continuous vulnerability management, and PostgreSQL RLS tenant isolation.',
    icon: ShieldCheck,
    href: '#independent-assurance',
  },
  {
    title: 'Privacy Protection',
    description: 'ISO/IEC 27701 PIMS, US State Privacy Ready (CCPA/CPRA, CPA), and strict data minimisation.',
    icon: Lock,
    href: '#privacy-rights',
  },
  {
    title: 'Student Data Protection',
    description: 'FERPA Ready, PPRA Controls, age-gated minor architecture, and zero secondary advertising use.',
    icon: GraduationCap,
    href: '#student-privacy',
  },
  {
    title: 'Responsible AI Governance',
    description: 'ISO/IEC 42001 certified AIMS, NIST AI RMF aligned, and pre-deployment impact assessments.',
    icon: Bot,
    href: '#responsible-ai',
  },
  {
    title: 'Human Oversight',
    description: 'Strict human-in-the-loop decision boundaries, user recourse, and explainable match rationale.',
    icon: Users,
    href: ROUTES.TRUST_HUMAN_OVERSIGHT,
  },
  {
    title: 'Employment AI Controls',
    description: 'NYC Local Law 144 AEDT bias audits, Illinois AIVA compliance, and Colorado SB 24-205 ADM safeguards.',
    icon: Briefcase,
    href: '#employment-ai',
  },
];

export function ComplianceHero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[var(--color-border-default)] overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,143,255,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-lavender-subtle)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10 space-y-12">
        {/* Eyebrow and Headline */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#6BB8FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>TRUST CENTER / COMPLIANCE & ASSURANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
            Compliance built into the platform.
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
            CareerOS is designed around rigorous security, privacy, student protection, responsible AI and employment-technology controls. We combine independent external assurance, recognized global standards, and US regulatory safeguards so school districts, universities, employers, and individuals can trust every interaction.
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#frameworks-registry"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[var(--radius-button)] bg-white text-neutral-900 hover:bg-neutral-100 transition-colors shadow-xs"
            >
              <span>Explore Framework Registry</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#compliance-documents"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[var(--radius-button)] bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-surface-interactive)] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#6BB8FF]" />
              <span>Compliance Documents & Reports</span>
            </a>
          </div>
        </div>

        {/* 6 Restrained Assurance Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {ASSURANCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isInternalAnchor = pillar.href.startsWith('#');
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-interactive)] transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#6BB8FF] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-[var(--color-text-tertiary)] group-hover:text-[#6BB8FF] transition-colors">
                  <span>{isInternalAnchor ? 'View assurance details' : 'Learn more'}</span>
                  <span className="text-xs">&rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
