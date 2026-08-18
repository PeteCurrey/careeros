import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { LEGAL_CONFIG } from '@/lib/config/legal-config';
import { ROUTES } from '@/lib/routes';
import { TrustSubnav } from '@/components/trust/TrustSubnav';
import { TrustHero } from '@/components/trust/TrustHero';
import { AIUseCaseRegister } from '@/components/trust/AIUseCaseRegister';
import { ModelProviderDisclosures } from '@/components/trust/ModelProviderDisclosures';
import { AIRecommendationFlow } from '@/components/trust/AIRecommendationFlow';
import { AIChangeLog } from '@/components/trust/AIChangeLog';
import {
  Eye,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Database,
  Bot,
  ShieldAlert,
  BadgeInfo,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Transparency | You should know when AI is involved. And what it is doing. | Career OS',
  description:
    'Career OS AI Transparency: public AI use-case register, foundation model disclosures, how recommendations are generated, known limitations, and a versioned public AI change log.',
  alternates: { canonical: 'https://career-os.com/trust/ai-transparency' },
};

const AI_LIMITATIONS = [
  {
    title: 'AI cannot access external live vacancy feeds in real time.',
    detail: 'Opportunity matching relies on verified, periodically updated databases. Vacancy availability is not guaranteed at the moment of recommendation.',
  },
  {
    title: 'AI cannot verify self-declared user experience or skills.',
    detail: 'Items self-declared without attached evidence are explicitly tagged as "Unverified — Self-Declared" in the Career Twin and Career Passport.',
  },
  {
    title: 'AI cannot guarantee salary outcomes, promotion likelihood, or job success.',
    detail: 'Labor market data provides statistical context. Individual outcomes depend on factors outside Career OS knowledge: company culture, manager relationships, economic cycles.',
  },
  {
    title: 'AI synthesis may reflect gaps in training data for rare or regional occupations.',
    detail: 'Vocational niches, indigenous trade practices, and highly regional pathways may be underrepresented in foundation model training. Where detected, we supplement with curated occupational standards data.',
  },
  {
    title: 'AI recommendations are probabilistic, not deterministic.',
    detail: 'A recommendation to explore a field is a reasoned suggestion based on stated context — not a prediction, a guarantee, or a decision about suitability.',
  },
  {
    title: 'AI does not have access to private employer preferences or internal hiring criteria.',
    detail: 'Employer matching is based on stated role requirements. Unstated selection criteria, internal culture fit assessments, or undisclosed screening filters are outside Career OS visibility.',
  },
];

const AI_DISCLOSURE_LABELS = [
  { label: 'AI-Assisted', desc: 'Output generated or materially influenced by an AI model.', color: 'text-[#6BB8FF] bg-blue-950/40 border-blue-500/30' },
  { label: 'AI-Drafted', desc: 'Text, bullets, or structure produced by AI for user review and editing.', color: 'text-purple-300 bg-purple-950/40 border-purple-500/30' },
  { label: 'AI-Matched', desc: 'Opportunity or candidate surfaced via algorithmic relevance scoring.', color: 'text-amber-300 bg-amber-950/40 border-amber-500/30' },
  { label: 'AI-Synthesised', desc: 'Cross-dataset analysis or multi-source summary produced by AI.', color: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30' },
  { label: 'Human Curated', desc: 'Content reviewed, edited, or produced by Career OS staff.', color: 'text-white bg-white/10 border-white/20' },
  { label: 'Verified Source', desc: 'Data sourced from statutory or officially published records (e.g. O*NET, UCAS).', color: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30' },
];

export default function AITransparencyPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <TrustSubnav />

      {/* Hero */}
      <TrustHero
        eyebrow="AI TRANSPARENCY"
        headline={
          <>
            You should know when AI
            <br className="hidden sm:block" />
            <span className="text-[#6BB8FF]"> is involved. And what it is doing.</span>
          </>
        }
        lead="Career OS believes that meaningful transparency is not a badge. It is a system design requirement. This page publishes every active AI use case, the foundation models powering them, how recommendations are generated, what AI cannot know, and a versioned record of every AI capability change."
        lastReviewed="2026-08-16"
        version="v2.4.1"
        secondaryCta={{ label: 'Responsible AI', href: ROUTES.TRUST_RESPONSIBLE_AI }}
        tertiaryCta={{ label: 'Human Oversight →', href: ROUTES.TRUST_HUMAN_OVERSIGHT }}
      />

      {/* When AI Is Being Used — Disclosure Labels */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">DISCLOSURE STANDARD</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              When AI Is Being Used, We Always Tell You
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Every AI interaction on Career OS carries an explicit disclosure label. You will never encounter an AI-generated output that is presented as human advice, editorial content, or verified fact without clear attribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_DISCLOSURE_LABELS.map((dl) => (
              <div
                key={dl.label}
                className="p-4 rounded-lg bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-2 text-xs"
              >
                <span className={`inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold border ${dl.color}`}>
                  {dl.label}
                </span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{dl.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs flex items-start gap-3">
            <BadgeInfo className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-white">Paid promotions:</strong> Employers can purchase enhanced visibility for verified opportunities. When this applies, the opportunity card is explicitly labelled{' '}
              <span className="font-mono text-amber-300">Promoted Opportunity</span>. Paid promotion does not alter the underlying AI relevance score for a candidate — it increases discovery frequency, not match accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Public AI Use-Case Register */}
      <section id="use-case-register" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">PUBLIC AI REGISTER</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Every Active AI Capability — Publicly Disclosed
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Review the complete register of AI use cases active across Career OS, including their purpose, data inputs, human involvement requirements, and material limitations.
            </p>
          </div>
          <AIUseCaseRegister />
        </div>
      </section>

      {/* How Recommendations Are Generated */}
      <section id="recommendation-flow" className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">HOW RECOMMENDATIONS WORK</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Recommendation ≠ Decision
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Every Career OS recommendation is a probabilistic advisory output — not a verdict on suitability, a guarantee of outcome, or a binding direction. This is how each recommendation is generated.
            </p>
          </div>
          <AIRecommendationFlow />
        </div>
      </section>

      {/* Foundation Model Disclosures */}
      <section id="model-disclosures" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">MODEL INFRASTRUCTURE</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Foundation Model &amp; Provider Disclosures
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS uses enterprise-contracted foundation models from leading AI providers. Enterprise terms guarantee that vendor models do not train on Career OS user data or conversation content.
            </p>
          </div>
          <ModelProviderDisclosures />
        </div>
      </section>

      {/* What AI Cannot Know */}
      <section className="section-editorial bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">MATERIAL LIMITATIONS</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              What AI Cannot Know: Documented Limitations
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Transparency requires honesty about what AI cannot do. These are known, documented limitations — not marketing disclaimers buried in terms and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AI_LIMITATIONS.map((lim, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-2 text-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <h4 className="font-semibold text-white leading-snug">{lim.title}</h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed pl-6">{lim.detail}</p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)] pl-6">
                  Documented in Public Register &bull; Updated on Material Change
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public AI Change Log */}
      <section id="change-log" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="section-label">AUDITABILITY</span>
            <h2 className="text-display-section font-serif font-normal text-white">
              Public AI Change Log
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Every material change to an AI capability — new guardrails, safety updates, model upgrades, governance board decisions — is logged publicly with date, rationale, and governance reviewer.
            </p>
          </div>
          <AIChangeLog />
        </div>
      </section>

      {/* Footer Bar */}
      <div className="py-8 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--color-text-tertiary)]">
          <span>{LEGAL_CONFIG.legalEntityName} &bull; AI Transparency Register &bull; v2.4.1</span>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="hover:text-white transition-colors">← Responsible AI</Link>
            <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="hover:text-white transition-colors flex items-center gap-1">
              Human Oversight <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}