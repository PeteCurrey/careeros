import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { LEGAL_CONFIG } from '@/lib/config/legal-config';
import { ROUTES } from '@/lib/routes';
import { TrustSubnav } from '@/components/trust/TrustSubnav';
import { TrustHero } from '@/components/trust/TrustHero';
import { FairnessTestingMethodology } from '@/components/trust/FairnessTestingMethodology';
import {
  Scale,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Wrench,
  Mail,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fairness & Bias | Fairness isn\'t a claim. It\'s something you have to keep testing. | Career OS',
  description:
    'Career OS Fairness & Bias: systemic bias architecture, 7-stage fairness testing methodology, protected characteristics, capability-first matching, non-traditional backgrounds, and bias reporting.',
  alternates: { canonical: 'https://career-os.com/trust/fairness-and-bias' },
};

const SYSTEMIC_BIAS_FACTORS = [
  {
    factor: 'Training Data Representation Gaps',
    desc: 'Foundation models trained on internet text may underrepresent vocational, trade, and non-degree career pathways relative to their real-world prevalence.',
    mitigation: 'Supplementary O*NET, Apprenticeship Standards, and curated trade occupational frameworks are injected as grounding context.',
    icon: BookOpen,
  },
  {
    factor: 'Historical Labor Market Encoding',
    desc: 'Labor market data reflects historical hiring patterns, which embed past discriminatory practices. Statistical "success" signals for some roles may encode past exclusion.',
    mitigation: 'Algorithmic debiasing and capability-first matching that decouples recommendation from historical demographic profiles.',
    icon: Building2,
  },
  {
    factor: 'Proxy Variable Discrimination',
    desc: 'Facially neutral inputs — postcode, school type, attendance at a selective institution — can function as proxies for protected characteristics.',
    mitigation: 'Systematic proxy variable testing across all matching algorithms. Identified proxies are re-weighted or removed.',
    icon: ShieldCheck,
  },
  {
    factor: 'Prestige Bias in Pathway Recommendations',
    desc: 'Without active intervention, AI systems trained on general data tend to over-recommend degree pathways relative to equally valid trades and apprenticeships.',
    mitigation: 'Explicit pathway parity rules enforce equal representation across degree, degree apprenticeship, technical, trade, and vocational outcomes.',
    icon: GraduationCap,
  },
  {
    factor: 'Non-Traditional Background Undervaluation',
    desc: 'Candidates who took non-linear routes — career changes, self-teaching, caring responsibilities, prison-leavers, military transitions — may have valid capabilities inadequately represented in standard academic taxonomies.',
    mitigation: 'Capability-first taxonomy matching evaluates demonstrated skills and evidence directly, decoupled from credential type or pathway linearity.',
    icon: Briefcase,
  },
  {
    factor: 'Language & Expression Normalisation',
    desc: 'AI language models may assign lower confidence to non-standard English expressions, dialectal variation, or internationally structured descriptions of experience.',
    mitigation: 'Semantic capability extraction normalises expression variation to occupational taxonomy nodes before scoring. Expression style does not reduce match confidence.',
    icon: Wrench,
  },
];

const CAPABILITY_FIRST_EXAMPLES = [
  {
    scenario: 'Prison-Leaver Returning to Work',
    traditional: 'Employment history gap + non-degree credential = low recommendation confidence.',
    capabilityFirst: 'Demonstrated construction, logistics, or manufacturing skills mapped to verified apprenticeship and technical role requirements — regardless of gap or credential type.',
  },
  {
    scenario: 'Military Veteran Transitioning to Civilian Work',
    traditional: 'Military rank + service record with unfamiliar titles = poor occupation alignment.',
    capabilityFirst: 'Military competency framework mapped to civilian occupational taxonomy — engineering, logistics, leadership, risk management, and medical roles extracted from service record context.',
  },
  {
    scenario: 'Self-Taught Developer Without Degree',
    traditional: 'No UCAS tariff, no CS degree = downgraded in traditional screeners.',
    capabilityFirst: 'Portfolio projects, open-source contributions, and demonstrated technical skills evaluated directly against role capability requirements.',
  },
  {
    scenario: 'Career Changer from Healthcare to Technology',
    traditional: 'Mismatched job title history = low relevance score.',
    capabilityFirst: 'Transferable skills — data analysis, documentation standards, cross-team coordination, regulated environment compliance — extracted and mapped to technology pathway requirements.',
  },
];

const EMPLOYMENT_AI_REGULATIONS = [
  {
    jurisdiction: 'United States — Federal',
    framework: 'EEOC Guidance on AI & Selection Procedures',
    requirement: 'Adverse impact testing when AI tools are used as selection procedures. Four-fifths rule for disparate impact analysis.',
    careerOSStance: 'Career OS Employer Agent is advisory only. Mandatory human hiring manager decision for all outcomes.',
  },
  {
    jurisdiction: 'New York City — Local Law 144',
    framework: 'Automated Employment Decision Tool (AEDT) Ordinance',
    requirement: 'Independent bias audit, candidate notice of AI use, alternative evaluation pathway.',
    careerOSStance: 'Candidate notice of AI assistance is standard. Human hiring manager review is mandatory. NYC candidates can request human-only review process.',
  },
  {
    jurisdiction: 'United Kingdom — ICO',
    framework: 'ICO Guidance on AI and Data Protection',
    requirement: 'Lawful basis for automated processing, right to human review, meaningful information on logic.',
    careerOSStance: 'UK users retain right to human review for employer matching outcomes under UK GDPR Article 22. Decision factors surfaced in candidate-facing interface.',
  },
  {
    jurisdiction: 'European Union — EU AI Act',
    framework: 'EU AI Act (High-Risk AI System Classification)',
    requirement: 'Employment, recruitment and worker management AI classified as high-risk; requires conformity assessment, risk management, and transparency obligations.',
    careerOSStance: 'Employer Agent evaluated against EU AI Act high-risk standards. Conformity assessment programme in progress for EU expansion.',
  },
];

export default function FairnessAndBiasPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <TrustSubnav />

      {/* Hero */}
      <TrustHero
        eyebrow="FAIRNESS & BIAS"
        headline={
          <>
            Fairness isn&apos;t a claim.
            <br className="hidden sm:block" />
            <span className="text-[#6BB8FF]"> It&apos;s something you have to keep testing.</span>
          </>
        }
        lead="Career OS does not claim to be bias-free. No AI system can make that claim credibly. What we commit to is a rigorous, documented testing methodology applied continuously — with honest disclosure of residual limitations. Fairness in career technology requires active architectural choices, not passive good intentions."
        lastReviewed="2026-08-16"
        version="v2.4.1"
        secondaryCta={{ label: 'Human Oversight', href: ROUTES.TRUST_HUMAN_OVERSIGHT }}
        tertiaryCta={{ label: 'Responsible AI →', href: ROUTES.TRUST_RESPONSIBLE_AI }}
      />

      {/* Honest Framing Statement */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial max-w-4xl space-y-6">
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/80 backdrop-blur-md border border-[var(--color-border-default)] space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-3">
                <h3 className="font-semibold text-white text-base font-serif font-normal">What We Will Not Claim</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: '"Bias-Free"', reason: 'No AI system operating at scale on real-world data can substantiate this claim.' },
                    { label: '"100% Fair"', reason: 'Fairness is multi-dimensional and context-dependent. Optimising one fairness metric can worsen another.' },
                    { label: '"Completely Safe"', reason: 'AI systems have foreseeable failure modes. Our commitment is to test for and mitigate them — not to deny they exist.' },
                  ].map((c) => (
                    <div key={c.label} className="p-3 rounded bg-rose-950/20 border border-rose-500/20 space-y-1">
                      <span className="font-mono font-bold text-rose-300 text-[11px]">{c.label}</span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-[11px]">{c.reason}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed pt-2">
                  Instead we commit to:{' '}
                  <strong className="text-white">Designed for responsible use. Tested for foreseeable risks. Transparent about limitations. Accountable when things go wrong.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systemic Bias Architecture */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">WHERE BIAS ENTERS</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Understanding Where AI Bias in Career Technology Comes From
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Algorithmic bias in career systems is not a bug that can be patched once. It enters through multiple channels and requires continuous counter-pressure across all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SYSTEMIC_BIAS_FACTORS.map((factor) => {
              const Icon = factor.icon;
              return (
                <div
                  key={factor.factor}
                  className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 text-xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-amber-400" />
                      <h4 className="font-semibold text-white text-sm leading-snug">{factor.factor}</h4>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{factor.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                      Career OS Mitigation:
                    </span>
                    <p className="text-white font-medium leading-relaxed">{factor.mitigation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7-Stage Testing Methodology & Protected Characteristics */}
      <section id="fairness-testing" className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">TESTING METHODOLOGY</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              How We Test for Fairness
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              A seven-stage protocol applied iteratively to every AI capability rated MODERATE or HEIGHTENED risk — covering synthetic dataset construction, proxy variable testing, mitigation, and transparent outcome reporting.
            </p>
          </div>
          <FairnessTestingMethodology />
        </div>
      </section>

      {/* Capability-First Matching */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">CAPABILITY-FIRST MATCHING</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Non-Traditional Backgrounds Deserve First-Class Career Technology
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS matching decouples capability from credential type, career linearity, and institutional prestige. A demonstrated skill is evaluated on its merit — not on which institution or pathway it came through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CAPABILITY_FIRST_EXAMPLES.map((ex) => (
              <div
                key={ex.scenario}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-4 text-xs"
              >
                <h4 className="font-semibold text-white text-sm">{ex.scenario}</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded bg-rose-950/20 border border-rose-500/20 space-y-1">
                    <span className="text-[10px] font-mono text-rose-300 font-bold uppercase block">Traditional Approach:</span>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{ex.traditional}</p>
                  </div>
                  <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Career OS Capability-First:</span>
                    <p className="text-white font-medium leading-relaxed">{ex.capabilityFirst}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment AI Regulatory Readiness */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">REGULATORY READINESS</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Employment AI Regulatory Readiness
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              The regulatory landscape for automated employment decision tools is evolving rapidly across multiple jurisdictions. Career OS tracks and prepares for each.
            </p>
          </div>

          <div className="space-y-3">
            {EMPLOYMENT_AI_REGULATIONS.map((reg) => (
              <div
                key={reg.jurisdiction}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] grid grid-cols-1 md:grid-cols-4 gap-4 text-xs items-start"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">Jurisdiction:</span>
                  <span className="font-semibold text-white text-sm">{reg.jurisdiction}</span>
                  <p className="text-[11px] font-mono text-[#6BB8FF]">{reg.framework}</p>
                </div>
                <div className="md:col-span-2 space-y-0.5">
                  <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">Requirement:</span>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{reg.requirement}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block">Career OS Position:</span>
                  <p className="text-white font-medium leading-relaxed">{reg.careerOSStance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bias Report Mechanism */}
      <section id="bias-reporting" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial max-w-4xl space-y-8">
          <div className="space-y-2">
            <span className="section-label">BIAS REPORTING</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Report a Bias Concern
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              If you believe a Career OS recommendation, matching result, or AI output reflects unfair bias — whether based on a protected characteristic or any other structural inequity — we want to know. Every report is reviewed by a human, logged, and incorporated into our testing cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <Scale className="w-5 h-5 text-[#6BB8FF]" />
              <h4 className="font-semibold text-white text-sm">What to Include</h4>
              <ul className="list-disc pl-4 space-y-1 text-[var(--color-text-secondary)]">
                <li>Which capability produced the concern</li>
                <li>A description of the output you believe is biased</li>
                <li>The protected characteristic or background factor you believe was disadvantaged</li>
                <li>Any relevant Career Twin context (optional)</li>
              </ul>
            </div>

            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="font-semibold text-white text-sm">What Happens Next</h4>
              <ul className="list-disc pl-4 space-y-1 text-[var(--color-text-secondary)]">
                <li>Human review within 5 working days</li>
                <li>Report logged in internal bias register</li>
                <li>Incorporated into next fairness testing cycle</li>
                <li>Material findings disclosed in public AI change log</li>
              </ul>
            </div>

            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <h4 className="font-semibold text-white text-sm">Submit a Report</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Email the Trust & Safety team directly:
              </p>
              <a
                href="mailto:trust@career-os.com"
                className="inline-flex items-center gap-1.5 font-mono text-[#6BB8FF] hover:text-white transition-colors text-[11px]"
              >
                <Mail className="w-3 h-3" />
                trust@career-os.com
              </a>
              <p className="text-[var(--color-text-tertiary)] leading-relaxed text-[10px] font-mono pt-1">
                Anonymous reports accepted. You do not need to identify yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <div className="py-8 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--color-text-tertiary)]">
          <span>{LEGAL_CONFIG.legalEntityName} &bull; Fairness & Bias Framework &bull; v2.4.1</span>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="hover:text-white transition-colors">← Human Oversight</Link>
            <Link href={ROUTES.TRUST} className="hover:text-white transition-colors flex items-center gap-1">
              Trust Overview <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}