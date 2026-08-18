import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { LEGAL_CONFIG } from '@/lib/config/legal-config';
import { ROUTES } from '@/lib/routes';
import { TrustSubnav } from '@/components/trust/TrustSubnav';
import { TrustHero } from '@/components/trust/TrustHero';
import { TrustRiskFramework } from '@/components/trust/TrustRiskFramework';
import { RegulatoryReferencesPanel } from '@/components/trust/RegulatoryReferencesPanel';
import {
  Bot,
  Ban,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  AlertCircle,
  ArrowRight,
  Gavel,
  BarChart2,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Responsible AI | Powerful enough to help. Governed enough to trust. | Career OS',
  description:
    'Career OS Responsible AI: 8 core principles, boundaries of what we will not build, 3-tier risk governance, 12-stage AI lifecycle, and official standards references.',
  alternates: { canonical: 'https://career-os.com/trust/responsible-ai' },
};

const RESPONSIBLE_AI_PRINCIPLES = [
  {
    id: 'human-agency',
    number: '01',
    title: 'Human Agency',
    desc: 'Career choices belong to the individual. AI provides synthesis, comparison, and exploration. Every output is advisable, contestable, and overridable by the user.',
  },
  {
    id: 'purpose-limitation',
    number: '02',
    title: 'Purpose Limitation',
    desc: 'AI is deployed exclusively for career guidance, pathway exploration, skill development, and talent matching. No AI capability is repurposed for unrelated uses.',
  },
  {
    id: 'proportionality',
    number: '03',
    title: 'Proportionality',
    desc: 'AI scope is calibrated to the consequential impact of the use case. Higher-stakes capabilities require stricter controls, mandatory human review, and narrower output authority.',
  },
  {
    id: 'safety-non-harm',
    number: '04',
    title: 'Safety & Non-Harm',
    desc: 'AI mentor interactions are guarded against hazardous, discriminatory, or therapeutically inappropriate outputs. Non-therapeutic boundary guardrails are mandatory on all conversational AI.',
  },
  {
    id: 'fairness-parity',
    number: '05',
    title: 'Fairness & Pathway Parity',
    desc: 'AI recommendations maintain equal dignity across degree, degree apprenticeship, technical, trade, and vocational pathways. No algorithmically embedded prestige bias.',
  },
  {
    id: 'privacy-by-design',
    number: '06',
    title: 'Privacy by Design',
    desc: 'Zero vendor training on user PII. Zero candidate data sold to third parties. Student minor data strictly confined to school-consented, age-bounded perimeters.',
  },
  {
    id: 'transparency',
    number: '07',
    title: 'Transparency',
    desc: 'Every AI interaction is explicitly disclosed. Decision factors are surfaced. Material limitations are documented in a public register. Model providers are identified.',
  },
  {
    id: 'accountability',
    number: '08',
    title: 'Accountability & Recourse',
    desc: 'Every deployed AI capability has a named human owner, governance review schedule, incident escalation path, and accessible user appeal channel.',
  },
];

const WHAT_WE_WILL_NOT_BUILD = [
  'An AI that makes autonomous hiring, admissions, or grading decisions without human authority',
  'A "predictive" AI that silently ranks learner potential or future earnings without transparency',
  'An AI that cold-contacts minor students on behalf of recruiters or commercial entities',
  'A psychological profiling or personality inference tool used to gatekeep career access',
  'An AI that sells, brokers, or discloses student career data to advertising or insurance markets',
  'An AI therapist, crisis counsellor, or mental health intervention tool without qualified oversight',
  'A biometric surveillance, voice analysis, or facial recognition capability for any purpose',
  'An AI recommendation system that accepts payment to alter algorithmic relevance rankings',
];

export default function ResponsibleAIPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <TrustSubnav />

      {/* Hero */}
      <TrustHero
        eyebrow="RESPONSIBLE AI"
        headline={
          <>
            Powerful enough to help.
            <br className="hidden sm:block" />
            <span className="text-[#6BB8FF]"> Governed enough to trust.</span>
          </>
        }
        lead="Career OS applies a comprehensive responsible AI framework to every AI system we operate. This is not a compliance exercise. It is the operational architecture that determines what AI we build, how we govern it, and what we explicitly refuse to create."
        lastReviewed="2026-08-16"
        version="v2.4.1"
        secondaryCta={{ label: 'View Trust Overview', href: ROUTES.TRUST }}
        tertiaryCta={{ label: 'Read AI Transparency →', href: ROUTES.TRUST_AI_TRANSPARENCY }}
      />

      {/* 8 Principles */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">GOVERNING PRINCIPLES</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Eight Principles. Each With an Architectural Enforcement Rule.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              These are not mission statements. Each principle corresponds to a built-in system boundary, a governance control, or a mandatory operational rule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESPONSIBLE_AI_PRINCIPLES.map((principle) => (
              <div
                key={principle.id}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#6BB8FF] px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {principle.number}
                  </span>
                  <h3 className="font-semibold text-white text-sm leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Enforced Operationally
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Will NOT Build */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">EXPLICIT LIMITATIONS</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              What Career OS Will Not Build or Enable
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Responsible AI is partly defined by what a system refuses to become. These are firm categorical boundaries, not product roadmap deferrals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHAT_WE_WILL_NOT_BUILD.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] flex items-start gap-3 text-xs"
              >
                <div className="w-6 h-6 rounded flex items-center justify-center bg-rose-950/40 border border-rose-500/20 text-rose-300 shrink-0 mt-0.5">
                  <Ban className="w-3.5 h-3.5" />
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-white">A note on honesty:</strong> We do not claim Career OS is{' '}
                <em>bias-free</em>, <em>completely safe</em>, or <em>100% fair</em>. These claims are impossible to substantiate for any AI system. We commit instead to designing for responsible use, testing for foreseeable risks, being transparent about limitations, and being accountable when things go wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Tier Risk Framework & 12-Stage Lifecycle */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">RISK-BASED GOVERNANCE</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Three Tiers of Risk. One Iterative Governance Lifecycle.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              AI capabilities are categorised by the consequential impact of their outputs. Every capability travels through a 12-stage governance lifecycle — from purpose definition through deployment, monitoring, and continuous review.
            </p>
          </div>
          <TrustRiskFramework />
        </div>
      </section>

      {/* Regulatory References */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">OFFICIAL STANDARDS</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Voluntary Frameworks &amp; Regulatory Guidance Referenced
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS governance is informed by official frameworks, regulatory guidance, and emerging AI law. References do not imply formal certification unless separately verified.
            </p>
          </div>
          <RegulatoryReferencesPanel />
        </div>
      </section>

      {/* Footer Bar */}
      <div className="py-8 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--color-text-tertiary)]">
          <span>{LEGAL_CONFIG.legalEntityName} &bull; Responsible AI Framework &bull; v2.4.1</span>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.TRUST} className="hover:text-white transition-colors">← Trust Overview</Link>
            <Link href={ROUTES.TRUST_AI_TRANSPARENCY} className="hover:text-white transition-colors flex items-center gap-1">
              AI Transparency <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}