import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { LEGAL_CONFIG } from '@/lib/config/legal-config';
import { ROUTES } from '@/lib/routes';
import { TrustSubnav } from '@/components/trust/TrustSubnav';
import { TrustHero } from '@/components/trust/TrustHero';
import { HumanOversightRoles } from '@/components/trust/HumanOversightRoles';
import { DecisionBoundariesTable } from '@/components/trust/DecisionBoundariesTable';
import { EscalationWorkflowVisual } from '@/components/trust/EscalationWorkflowVisual';
import {
  Users,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Mail,
  Lock,
  HeartHandshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Human Oversight | AI can recommend. Humans remain accountable. | Career OS',
  description:
    'Career OS Human Oversight: meaningful human involvement, stakeholder responsibilities, where AI stops, escalation framework, youth safeguarding rules, and user recourse mechanisms.',
  alternates: { canonical: 'https://career-os.com/trust/human-oversight' },
};

const YOUTH_SAFEGUARDING_RULES = [
  {
    rule: 'No direct employer contact with students under 16 via Career OS.',
    detail: 'Employers cannot message, reach out to, or view the full profile of any registered user under 16 — regardless of opportunity type or consent.',
    severity: 'ABSOLUTE',
  },
  {
    rule: 'Under-18 profiles are default-private from employer talent searches.',
    detail: 'Minor users aged 16–17 can consent to be discoverable by verified employers for specific apprenticeship and work experience listings. Default is private.',
    severity: 'DEFAULT',
  },
  {
    rule: 'AI Career Mentor applies non-therapeutic boundary guardrails with minors.',
    detail: 'The AI mentor cannot act as a therapist, crisis counsellor, or mental health advisor. Distress signals trigger human escalation to school Designated Safeguarding Leads (DSL).',
    severity: 'ABSOLUTE',
  },
  {
    rule: 'School counsellors retain pastoral authority; AI briefs are advisory only.',
    detail: 'Pre-session synthesis briefs provided to school staff are advisory context — not diagnostic assessments, psychological profiles, or recommendatory endorsements.',
    severity: 'POLICY',
  },
  {
    rule: 'Career events attended by under-16s require school-verified operator.',
    detail: 'Any Career OS event in the Opportunities catalogue attended by school students requires verification of the operating organisation and duty-of-care arrangements.',
    severity: 'VERIFIED',
  },
  {
    rule: 'Zero collection of biometric, voice, or sensitive personal data from minors.',
    detail: 'Interview simulation features for school users use text-only prompts and text-only responses. No audio, video, or facial analysis is permitted on minor accounts.',
    severity: 'ABSOLUTE',
  },
];

const SEVERITY_STYLES: Record<string, string> = {
  ABSOLUTE: 'text-rose-300 bg-rose-950/40 border-rose-500/30',
  DEFAULT: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
  POLICY: 'text-[#6BB8FF] bg-blue-950/40 border-blue-500/30',
  VERIFIED: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
};

const RECOURSE_OPTIONS = [
  {
    title: 'Dispute an AI Recommendation',
    desc: 'If you believe a career pathway suggestion, skill gap assessment, or opportunity match is incorrect, you can immediately edit your Career Twin, dismiss the recommendation, or submit a formal dispute through your account settings.',
    icon: MessageSquare,
    cta: 'Account Settings',
  },
  {
    title: 'Report an AI Output Concern',
    desc: 'If an AI response was inappropriate, biased, inaccurate, or unsafe, submit a report to our Trust & Safety team. All reports trigger human investigation and contribute to our public AI change log.',
    icon: AlertCircle,
    cta: 'trust@career-os.com',
    href: `mailto:trust@career-os.com`,
  },
  {
    title: 'Request Data Access or Erasure',
    desc: 'Under GDPR, UK GDPR, CCPA, and FERPA, you have rights to access, correct, port, and erase your personal data. Submit a formal data subject request to our privacy team.',
    icon: Lock,
    cta: 'privacy@career-os.com',
    href: `mailto:${LEGAL_CONFIG.privacyEmail}`,
  },
  {
    title: 'School Safeguarding Escalation',
    desc: 'Schools can escalate welfare concerns related to student Career OS interactions directly to our safeguarding team. Escalations are reviewed by qualified human staff within one working day.',
    icon: HeartHandshake,
    cta: 'safeguarding@career-os.com',
    href: `mailto:${LEGAL_CONFIG.safeguardingEmail}`,
  },
];

export default function HumanOversightPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <TrustSubnav />

      {/* Hero */}
      <TrustHero
        eyebrow="HUMAN OVERSIGHT"
        headline={
          <>
            AI can recommend.
            <br className="hidden sm:block" />
            <span className="text-[#6BB8FF]"> Humans remain accountable.</span>
          </>
        }
        lead="Career OS is designed on the principle that meaningful human oversight is not a compliance footnote — it is an architectural guarantee. No AI on Career OS makes consequential career, employment, admissions, or welfare decisions. People do. This page explains exactly where AI stops and human authority begins."
        lastReviewed="2026-08-16"
        version="v2.4.1"
        secondaryCta={{ label: 'AI Transparency', href: ROUTES.TRUST_AI_TRANSPARENCY }}
        tertiaryCta={{ label: 'Fairness & Bias →', href: ROUTES.TRUST_FAIRNESS_BIAS }}
      />

      {/* What Meaningful Oversight Actually Means */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8 max-w-4xl">
          <div className="space-y-2">
            <span className="section-label">DEFINING MEANINGFUL OVERSIGHT</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              What &ldquo;Human Oversight&rdquo; Actually Requires
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Not every system claiming &ldquo;human in the loop&rdquo; delivers meaningful oversight. Meaningful oversight requires that the human has genuine authority, adequate information, sufficient time to review, and the practical ability to reject or override the AI output. Career OS is designed around all four.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {[
              { title: 'Genuine Authority', desc: 'The human decision-maker has final binding authority — not rubber-stamp authority over AI outputs they cannot realistically override.', icon: Users },
              { title: 'Adequate Information', desc: 'The human sees the AI decision factors, data inputs, and material limitations — not just the recommendation headline.', icon: CheckCircle2 },
              { title: 'Sufficient Review Time', desc: 'No artificial time pressure that makes human review notional. School counsellors and hiring managers are not required to approve AI outputs within seconds.', icon: ShieldCheck },
              { title: 'Practical Override Ability', desc: 'The human can reject, modify, or escalate any AI output without workflow friction, platform penalty, or loss of access to the AI tool.', icon: Lock },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-2.5 flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#6BB8FF] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stakeholder Roles */}
      <section id="stakeholder-roles" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">OVERSIGHT ARCHITECTURE</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Who Is Responsible for What
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Human oversight is distributed across four stakeholder groups — each with defined responsibilities, explicit permissions, and hard governance perimeters.
            </p>
          </div>
          <HumanOversightRoles />
        </div>
      </section>

      {/* Decision Boundaries */}
      <section id="decision-boundaries" className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">DECISION BOUNDARIES</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Where AI Stops
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              AI capabilities are categorised by the consequential impact of their scope. As stakes increase, human authority becomes mandatory and AI authority is architecturally constrained.
            </p>
          </div>
          <DecisionBoundariesTable />
        </div>
      </section>

      {/* Escalation Framework */}
      <section id="escalation-framework" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">INCIDENT RESPONSE</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Escalation &amp; Incident Response Framework
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              When an AI output triggers a concern — whether a user report, automated guardrail breach, or school escalation — a defined five-stage human investigation and recalibration process activates immediately.
            </p>
          </div>
          <EscalationWorkflowVisual />
        </div>
      </section>

      {/* Youth Safeguarding Rules */}
      <section id="youth-safeguarding" className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">MINOR PROTECTION</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              School-Age Safeguarding Rules
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS is used by students as young as 13 in institutional settings. Every design, AI, and data decision is stress-tested against child safety standards. These rules are non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {YOUTH_SAFEGUARDING_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3 text-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${SEVERITY_STYLES[rule.severity]}`}>
                      {rule.severity}
                    </span>
                    <GraduationCap className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                  </div>
                  <h4 className="font-semibold text-white leading-snug">{rule.rule}</h4>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{rule.detail}</p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  Enforced via system architecture &bull; Not user-configurable
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              For statutory safeguarding enquiries, to report a concern about a student&apos;s welfare related to Career OS, or to request expedited account suspension, contact{' '}
              <a href={`mailto:${LEGAL_CONFIG.safeguardingEmail}`} className="font-mono text-white underline hover:text-[#6BB8FF] transition-colors">
                {LEGAL_CONFIG.safeguardingEmail}
              </a>
              . School DSLs are responded to as a priority.
            </p>
          </div>
        </div>
      </section>

      {/* User Recourse Mechanisms */}
      <section id="recourse" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">YOUR RIGHTS &amp; RECOURSE</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Think the AI Got It Wrong? Here&apos;s What You Can Do.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Every person who interacts with a Career OS AI capability has four practical recourse mechanisms available — with no friction, no penalty, and no requirement to justify their concern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECOURSE_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 text-xs"
                >
                  <div className="space-y-2.5">
                    <Icon className="w-5 h-5 text-[#6BB8FF]" />
                    <h4 className="font-semibold text-white text-base font-serif font-normal">{option.title}</h4>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{option.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                    {option.href ? (
                      <a
                        href={option.href}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#6BB8FF] hover:text-white transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        {option.cta}
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">{option.cta}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <div className="py-8 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--color-text-tertiary)]">
          <span>{LEGAL_CONFIG.legalEntityName} &bull; Human Oversight Framework &bull; v2.4.1</span>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.TRUST_AI_TRANSPARENCY} className="hover:text-white transition-colors">← AI Transparency</Link>
            <Link href={ROUTES.TRUST_FAIRNESS_BIAS} className="hover:text-white transition-colors flex items-center gap-1">
              Fairness &amp; Bias <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}