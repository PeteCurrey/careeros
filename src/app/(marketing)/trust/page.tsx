import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { LEGAL_CONFIG } from '@/lib/config/legal-config';
import { ROUTES } from '@/lib/routes';
import { TrustSubnav } from '@/components/trust/TrustSubnav';
import { TrustHero } from '@/components/trust/TrustHero';
import { TrustSystemDiagram } from '@/components/trust/TrustSystemDiagram';
import { TrustCapabilityMatrix } from '@/components/trust/TrustCapabilityMatrix';
import { TRUST_PRINCIPLES } from '@/components/trust/trustData';
import {
  UserCheck,
  Eye,
  Scale,
  Lock,
  ShieldCheck,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Bot,
} from 'lucide-react';
import { CareerGradientText } from '@/components/brand/CareerGradientText';

export const metadata: Metadata = {
  title: 'Trust Center | AI should open doors. Not decide who gets through them. | Career OS',
  description:
    'Career OS Trust Center: seven trust principles, AI governance architecture, capability matrix, and the full Trust Journey — designed for responsible use, transparent about limitations.',
  alternates: { canonical: 'https://career-os.com/trust' },
};

const TRUST_JOURNEY_STAGES = [
  { step: '01', title: 'Govern', desc: 'Define purpose, risk boundaries, and accountability structures before any AI is deployed.' },
  { step: '02', title: 'Understand', desc: 'Identify which users are affected, what data is used, and what failure modes are possible.' },
  { step: '03', title: 'Test', desc: 'Benchmark for accuracy, fairness, and safety against diverse synthetic populations.' },
  { step: '04', title: 'Deploy', desc: 'Release with explicit logging, circuit breakers, and proportional access controls.' },
  { step: '05', title: 'Monitor', desc: 'Track drift, latency, error rates, and adverse impact signals continuously.' },
  { step: '06', title: 'Escalate', desc: 'Human investigation and containment for all flagged incidents, with user recourse.' },
  { step: '07', title: 'Improve', desc: 'Iterate on safeguards, update the public change log, and schedule next governance review.' },
];

const TRUST_DIRECTORY = [
  {
    cluster: 'AI Governance',
    items: [
      { title: 'Responsible AI', desc: '8 principles, risk tiers, 12-stage governance lifecycle, and official standards alignment.', href: ROUTES.TRUST_RESPONSIBLE_AI, icon: Bot },
      { title: 'AI Transparency', desc: 'Public use-case register, model disclosures, recommendation flow, and public change log.', href: ROUTES.TRUST_AI_TRANSPARENCY, icon: Eye },
      { title: 'Human Oversight', desc: 'Decision boundaries, stakeholder roles, escalation framework, and recourse mechanism.', href: ROUTES.TRUST_HUMAN_OVERSIGHT, icon: Users },
      { title: 'Fairness & Bias', desc: '7-stage testing protocol, protected characteristics, capability-first matching, and bias reporting.', href: ROUTES.TRUST_FAIRNESS_BIAS, icon: Scale },
    ],
  },
  {
    cluster: 'Privacy & Safeguarding',
    items: [
      { title: 'Minor Safeguarding', desc: 'Age-banded access controls, employer cold-contact hard-block, and DSL escalation channels.', href: ROUTES.TRUST_SAFEGUARDING, icon: ShieldCheck },
      { title: 'Data Ethics', desc: 'No shadow dossiers, no ad sales, zero student data monetisation, purpose-bound processing.', href: ROUTES.TRUST_DATA_ETHICS, icon: Lock },
    ],
  },
  {
    cluster: 'Infrastructure & Standards',
    items: [
      { title: 'Security Controls', desc: 'PostgreSQL RLS, TLS 1.3 encryption, zero-trust architecture, and incident response.', href: ROUTES.TRUST_SECURITY, icon: ShieldCheck },
      { title: 'Accessibility Standards', desc: 'WCAG 2.2 Level AA commitment across all product surfaces and AI interfaces.', href: ROUTES.TRUST_ACCESSIBILITY, icon: CheckCircle2 },
      { title: 'Evidence Verification', desc: '9-state verification spectrum from self-declared to issuer-verified credentials.', href: ROUTES.TRUST_VERIFICATION, icon: FileCheck },
    ],
  },
];

const ICON_MAP: Record<string, React.ElementType> = {
  agency: UserCheck,
  transparency: Eye,
  fairness: Scale,
  privacy: Lock,
  safety: ShieldCheck,
  oversight: Users,
  accountability: FileCheck,
};

export default function TrustCenterPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <TrustSubnav />

      {/* Hero */}
      <TrustHero
        eyebrow="TRUST AT CAREEROS"
        headline={
          <>
            AI should open doors.
            <br className="hidden sm:block" />
            <CareerGradientText variant="blue"> Not decide who gets through them.</CareerGradientText>
          </>
        }
        lead="Career OS is built on a simple premise: technology should expand human opportunity. Not quietly rank it, gate it, or make consequential choices on people's behalf. Every AI capability we deploy is governed by seven principles, tested for foreseeable risks, and made accountable through public registers."
        lastReviewed="2026-08-16"
        version="v2.4.1"
      >
        {/* Trust Architecture Diagram */}
        <TrustSystemDiagram />
      </TrustHero>

      {/* Core Positioning Statement */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial max-w-4xl space-y-4">
          <span className="section-label">THE GOVERNING STANDARD</span>
          <blockquote className="text-2xl sm:text-3xl font-serif font-normal text-white leading-relaxed border-l-4 border-[#2F8FFF] pl-6">
            Designed for responsible use. Tested for foreseeable risks. Transparent about limitations. Accountable when things go wrong.
          </blockquote>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            {[
              { label: 'Zero Fake Claims', desc: 'We never claim to be bias-free or 100% safe.' },
              { label: 'Zero Vendor Training', desc: 'Foundation models do not train on user PII.' },
              { label: 'Zero Student Data Sales', desc: 'No advertising targeting or data brokering.' },
              { label: 'Zero Autonomous Consequential Decisions', desc: 'Humans decide careers. Not algorithms.' },
            ].map((stat) => (
              <div key={stat.label} className="p-3.5 rounded-lg bg-[var(--color-surface-raised)]/75 backdrop-blur-sm border border-[var(--color-border-default)] space-y-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <h4 className="font-semibold text-white text-xs leading-snug">{stat.label}</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Trust Principles */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2">
            <span className="section-label">TRUST PRINCIPLES</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Seven Principles That Govern Every AI Decision
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] max-w-2xl">
              Not aspirational values. Operating rules with architectural enforcement boundaries built into the system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_PRINCIPLES.map((principle, idx) => {
              const Icon = ICON_MAP[principle.id] || ShieldCheck;
              return (
                <div
                  key={principle.id}
                  className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
                        {principle.badge}
                      </span>
                      <Icon className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[#6BB8FF] transition-colors" />
                    </div>
                    <h3 className="font-semibold text-white text-base group-hover:text-white transition-colors">
                      {idx + 1}. {principle.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {principle.shortDesc}
                    </p>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border-subtle)]">
                    {principle.fullDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability Governance Matrix */}
      <section id="governance-matrix" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">HOW GOVERNANCE APPLIES</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Proportional Oversight Across Every Career OS Capability
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Not every AI capability carries the same risk. We apply governance proportionally — more oversight where consequential impact is higher.
            </p>
          </div>
          <TrustCapabilityMatrix />
        </div>
      </section>

      {/* 7-Stage Trust Journey */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">TRUST JOURNEY</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Responsible AI Is a Cycle, Not a Checkbox
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Every AI capability at Career OS travels through seven stages, continuously — from governance design through deployment, monitoring, escalation, and iterative improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
            {TRUST_JOURNEY_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold text-[#6BB8FF] px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      Stage {stage.step}
                    </span>
                    {idx === 6 && <ArrowRight className="w-3 h-3 text-emerald-400 rotate-180" />}
                  </div>
                  <h3 className="font-semibold text-white text-sm">{stage.title}</h3>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{stage.desc}</p>
                </div>
                {idx < 6 && (
                  <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    <span>Lifecycle Gate</span>
                    <ArrowRight className="w-3 h-3 text-white/20 hidden lg:inline" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Directory */}
      <section className="section-editorial bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">TRUST DIRECTORY</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Explore the Full Trust &amp; Governance Architecture
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Each area is a substantive institutional resource — not a short policy page. Use these to evaluate Career OS for school procurement, employer adoption, or institutional research.
            </p>
          </div>

          <div className="space-y-10">
            {TRUST_DIRECTORY.map((cluster) => (
              <div key={cluster.cluster} className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] pb-2 border-b border-[var(--color-border-default)]">
                  {cluster.cluster}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cluster.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Icon className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[#6BB8FF] transition-colors" />
                          </div>
                          <h4 className="font-semibold text-white text-sm group-hover:text-[#6BB8FF] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-[var(--color-text-secondary)] group-hover:text-white transition-colors group-hover:translate-x-0.5 transform">
                          <span>Read Standard</span>
                          <ArrowRight className="w-3 h-3 text-[#2F8FFF]" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <div className="py-8 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--color-text-tertiary)]">
          <span>{LEGAL_CONFIG.legalEntityName} &bull; Trust Center &bull; Architecture v2.4.1</span>
          <span>
            Governance Lead:{' '}
            <a href={`mailto:${LEGAL_CONFIG.legalEmail}`} className="underline hover:text-white transition-colors">
              {LEGAL_CONFIG.legalEmail}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}