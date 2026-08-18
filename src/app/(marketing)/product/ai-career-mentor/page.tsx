import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroMentorInterface } from '@/components/marketing/ai-career-mentor/HeroMentorInterface';
import { InteractiveMentorDemo } from '@/components/marketing/ai-career-mentor/InteractiveMentorDemo';
import { ProductBridgeSection } from '@/components/marketing/ai-career-mentor/ProductBridgeSection';
import { ChatbotComparisonSection } from '@/components/marketing/ai-career-mentor/ChatbotComparisonSection';
import { ContextSystemDiagram } from '@/components/marketing/ai-career-mentor/ContextSystemDiagram';
import { LifetimeTimelineInteractive } from '@/components/marketing/ai-career-mentor/LifetimeTimelineInteractive';
import { QuestionSelectorInteractive } from '@/components/marketing/ai-career-mentor/QuestionSelectorInteractive';
import { ActionLoopDiagram } from '@/components/marketing/ai-career-mentor/ActionLoopDiagram';
import { PrivacySimulatorInteractive } from '@/components/marketing/ai-career-mentor/PrivacySimulatorInteractive';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lock,
  Cpu,
  History,
  Info,
  HelpCircle,
  FileText,
  ShieldAlert,
  ChevronDown,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Career Mentor for Career Planning & Progression",
  description: "Meet the Career OS AI Career Mentor — career guidance designed around your goals, evidence, skills and progress from education through advancement and career change.",
  alternates: {
    canonical: "https://career-os.com/product/ai-career-mentor",
  },
  openGraph: {
    title: "AI Career Mentor | Career OS",
    description: "Context-aware career guidance designed around your goals, evidence records, and pathway intelligence.",
    url: "https://career-os.com/product/ai-career-mentor",
  },
};

export default function AICareerMentorPage() {
  const faqList = [
    {
      q: "What is an AI Career Mentor?",
      a: "An AI Career Mentor is a system-assigned guidance layer inside Career OS. It is designed to interpret structured Career Twin context—including your goals, skills, and available Career Passport records—to provide personalized, evidence-grounded career guidance and next steps.",
    },
    {
      q: "Is the Career Mentor a real person?",
      a: "No. The AI Career Mentor is an artificial intelligence system built into Career OS with specific product logic and policy controls. It is always clearly identified as AI and never pretends to be human.",
    },
    {
      q: "Do I choose my Mentor?",
      a: "The product model uses system-assigned Mentors rather than celebrity or personality selection. Assignment logic will use relevant career context as the Mentor system develops, focusing on objective, evidence-grounded guidance.",
    },
    {
      q: "What does the Mentor know about me?",
      a: "Your Mentor is designed to access only the structured context in your private Career Twin—such as expressed career goals, Career Passport credentials, skill history, and work preferences that you choose to include under data minimisation principles.",
    },
    {
      q: "How is this different from a generic AI chatbot?",
      a: "General-purpose AI assists across many domains, but career context depends on manual prompting or specific account tools. The Career OS Mentor is purpose-built to connect structured Career Twin context, available evidence records in Career Passport, and occupational pathways in Career Graph.",
    },
    {
      q: "Does it remember previous conversations?",
      a: "Career OS is being designed to maintain relevant developmental context across sessions rather than treating career guidance as isolated conversations.",
    },
    {
      q: "Can my employer see what I tell my Mentor?",
      a: "Private Mentor conversation content is not intended to become employer-visible profile information merely because it exists in Career OS. Any sharing follows explicit permissions, applicable account relationships, and our Candidate Privacy Policy.",
    },
    {
      q: "Can the Mentor help me change careers?",
      a: "That is a core Career OS use case. The Mentor is designed to use transferable skills, available evidence, and Career Graph context to support career-change planning.",
    },
    {
      q: "Can it help with promotions and leadership?",
      a: "Yes. By comparing your current evidence profile against role expectations in Career Graph, the Mentor is designed to identify high-impact projects or leadership milestones needed to demonstrate readiness for promotion.",
    },
    {
      q: "Can it help me start a business?",
      a: "Entrepreneurship is part of Career OS's long-term career model. Founder-specific mentoring and capability resources are planned as the platform expands.",
    },
    {
      q: "Can students use the AI Career Mentor?",
      a: "Yes. Students aged 16+ can register for direct individual accounts. Users aged 13–15 access the platform under approved school or guardian arrangements. Direct consumer registration under 13 is not offered; institutional use requires approved institutional agreements.",
    },
    {
      q: "Does it write CVs and applications?",
      a: "Career OS is intended to support CV and application preparation using information you have provided and evidence available in your Career OS record, while prohibiting fabricated experience or credentials.",
    },
    {
      q: "How does it decide what to recommend?",
      a: "Career OS's recommendation architecture is being designed to combine relevant user context, evidence, selected career directions, and appropriate external labour-market intelligence, surfacing transparent decision factors where appropriate.",
    },
    {
      q: "Can the Mentor be wrong?",
      a: "Better recommendations depend on better context. AI systems infer, estimate, and can make errors. Career OS is designed to make relevant inputs, factors, and uncertainty visible so you can accept, challenge, or correct any advice.",
    },
    {
      q: "Can I correct inaccurate information?",
      a: "Yes. You retain full control over your Career Twin data. Corrections feed into future guidance once the relevant Career OS context has been updated.",
    },
    {
      q: "What happens to my data?",
      a: "Career OS is being built around controlled access, data minimisation, and permissioned sharing. Database row-level access controls protect private data tables, and our policy is not to sell private Career Twin or Mentor content to advertisers.",
    },
    {
      q: "Is Career OS free for individuals?",
      a: "Individual core access is currently free.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── SECTION 01: FULL-SCREEN HERO WITH BREATHTAKING CITY HORIZON ──────────────── */}
      <section
        aria-labelledby="hero-title"
        className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0"
      >
        {/* Breathtaking City & Horizon Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.hero.cityHorizon.src}
            alt={MEDIA_ASSETS.hero.cityHorizon.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Editorial Scrim: Charcoal Wash on Left for Ultra-Crisp Legibility + Open View of Horizon on Right */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #393939 0%, rgba(57, 57, 57, 0.96) 38%, rgba(57, 57, 57, 0.88) 55%, rgba(57, 57, 57, 0.42) 78%, rgba(57, 57, 57, 0.18) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #393939 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, #393939 0%, transparent 100%)`,
            }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        {/* Content Container */}
        <div className="container-editorial relative z-10 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Editorial Hero Content */}
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <div className="space-y-2">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot accent-blue-dot-pulse" />
                  Core Subsystem &bull; AI Career Mentor
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-surface-raised)]/85 backdrop-blur-sm border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] font-mono shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AI-powered. System-assigned. Always clearly identified as AI.</span>
                </div>
              </div>

              <h1
                id="hero-title"
                className="text-display-hero font-serif font-normal text-[var(--color-text-primary)] tracking-tight"
              >
                A career mentor that learns{' '}
                <CareerGradientText variant="lilac" className="font-serif">
                  where you&apos;re trying to go.
                </CareerGradientText>
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
                Your Career Mentor works with your Career Twin, goals, evidence and progress to help you understand what to do next &mdash; and why.
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                    Start your career
                  </Button>
                  <a
                    href="#not-another-chatbot"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-primary)] hover:text-white hover:underline underline-offset-4 bg-white/10 backdrop-blur-xs px-3 py-2 rounded"
                  >
                    <span>See the Mentor in action</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Individual core access is currently free.&ensp;&middot;&ensp;Grounded in your private context.
                </p>
              </div>
            </div>

            {/* Right: High-Fidelity Interactive Hero Mentor Preview */}
            <div className="lg:col-span-6">
              <div className="shadow-editorial rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-raised)]/95 backdrop-blur-md border border-[var(--color-border-default)]">
                <HeroMentorInterface />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: INTERACTIVE MENTOR DEMONSTRATION ───────────────── */}
      <InteractiveMentorDemo />

      {/* ── SECTION 02B: PRODUCT BRIDGE (TWIN, PASSPORT, GRAPH) ────────── */}
      <ProductBridgeSection />

      {/* ── SECTION 02C: WHY THIS IS DIFFERENT FROM A BLANK CHATBOT ───── */}
      <ChatbotComparisonSection />

      {/* ── SECTION 03: WHAT YOUR MENTOR UNDERSTANDS ────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">CONTEXT ENGINE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Better advice starts with better context.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Better advice starts with better context. Career OS is designed to bring together multiple types of professional context structured within your Career Twin to deliver tailored, relevant guidance.
            </p>
          </div>

          <ContextSystemDiagram />
        </div>
      </section>

      {/* ── SECTION 04: DIFFERENT STAGES OF YOUR CAREER ─────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">LIFETIME CONTINUITY</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              The question changes. Your Career OS stays.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS is being built around continuity across education, employment, advancement, career change, and business founding &mdash; providing continuous intelligence as your career develops.
            </p>
          </div>

          <LifetimeTimelineInteractive />
        </div>
      </section>

      {/* ── SECTION 05: WHAT CAN I ACTUALLY ASK IT? ─────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">PRACTICAL GUIDANCE EXAMPLES</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Start with the question that&apos;s actually on your mind.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Explore illustrative questions across discovery, skill progression, compensation, transition, and entrepreneurship to see how your Mentor is designed to respond.
            </p>
          </div>

          <QuestionSelectorInteractive />
        </div>
      </section>

      {/* ── SECTION 06: FROM CONVERSATION TO ACTION ─────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">ACTION &amp; EVIDENCE ENGINE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Advice is useful. Progress is better.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              The Mentor does not exist merely for chat volume. Career OS is designed to move beyond conversation by turning useful guidance into actions that can contribute evidence and updated career context.
            </p>
          </div>

          <ActionLoopDiagram />
        </div>
      </section>

      {/* ── SECTION 07: HOW A RECOMMENDATION IS BUILT ──────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">TRANSPARENCY &amp; PROVENANCE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              You should be able to understand why something was recommended.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              We never treat AI recommendations as unexaminable black boxes. Career OS is designed to make meaningful recommendations accompanied by useful rationale, relevant factors, source context, and uncertainty where appropriate.
            </p>
          </div>

          {/* Human-Readable Recommendation Breakdown */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border-default)] pb-4">
              <span className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
                Illustrative Recommendation Breakdown
              </span>
              <span className="font-mono text-xs px-2.5 py-1 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded text-[var(--color-text-secondary)]">
                Example Scenario
              </span>
            </div>

            <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
              <span className="text-xs font-mono font-bold text-[var(--color-taupe-300)] uppercase tracking-wider block">
                PROPOSED NEXT STEP
              </span>
              <p className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
                &quot;Seek project leadership responsibility before applying for Engineering Manager roles.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-text-primary)] block">1. Relevant Factors</span>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>&bull; Strong technical evidence</li>
                  <li>&bull; Limited team lead evidence</li>
                  <li>&bull; Target roles require team lead</li>
                </ul>
              </div>

              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-text-primary)] block">2. Input Sources</span>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>&bull; Career Twin profile</li>
                  <li>&bull; Passport credentials</li>
                  <li>&bull; Selected target path</li>
                </ul>
              </div>

              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-text-primary)] block">3. Uncertainty</span>
                <p className="text-[var(--color-text-secondary)]">
                  Career OS cannot know internal hiring requirements for every specific employer.
                </p>
              </div>

              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-text-primary)] block">4. Your Control</span>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>&bull; Accept suggestion</li>
                  <li>&bull; Challenge / Ignore</li>
                  <li>&bull; Correct context data</li>
                </ul>
              </div>
            </div>

            {/* Expandable Technical Provenance Drawer */}
            <details className="group pt-4 border-t border-[var(--color-border-default)]">
              <summary className="cursor-pointer font-mono text-xs font-bold text-[var(--color-text-primary)] flex items-center justify-between p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded hover:bg-white/5 transition-colors">
                <span>// FOR DEVELOPERS &amp; PROCUREMENT: VIEW TECHNICAL EXECUTION RECORD</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 p-5 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded font-mono text-xs text-[var(--color-text-secondary)] overflow-x-auto space-y-1">
                <p className="text-emerald-400 font-bold">// Illustrative Provenance Structure — Not a Live Execution Record</p>
                <p>ai_execution_id: &quot;[execution_identifier]&quot;</p>
                <p>provider_class: &quot;approved_ai_provider&quot; | model_id: &quot;recorded_at_execution&quot;</p>
                <p>policy_version: &quot;[recorded_policy_version]&quot;</p>
                <p>input_sources: [&quot;career_twin.skills&quot;, &quot;career_passport.credentials&quot;, &quot;career_graph.market_data&quot;]</p>
                <p>user_facing_rationale: &quot;Illustrative recommendation rationale based on technical evidence and target pathway.&quot;</p>
                <p>key_factors: [&quot;Technical capability foundation&quot;, &quot;Target role milestones&quot;, &quot;Pathway context&quot;]</p>
                <p>confidence_or_uncertainty: &#123; level: &quot;ILLUSTRATIVE&quot;, explanation: &quot;Contextual factor evaluation&quot; &#125;</p>
                <p>human_action: &#123; action_type: &quot;[accepted | modified | ignored | challenged]&quot;, acted_at: &quot;[timestamp]&quot; &#125;</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: CAREER MENTOR + CAREER TWIN ─────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">ECOSYSTEM INTEGRATION</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Your Mentor and Career Twin work together.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              The AI Mentor is not an isolated feature &mdash; it is the intelligence layer designed to work with your Career Twin, Passport evidence, and Graph pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href={ROUTES.PRODUCT_CAREER_TWIN}
              className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 hover:border-[var(--color-border-strong)] transition-all group"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                CONTEXT REPRESENTATION
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)] group-hover:text-white transition-colors flex items-center justify-between">
                <span>Career Twin</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                What Career OS understands about your skills, experience, goals, and working preferences.
              </p>
            </Link>

            <Link
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 hover:border-[var(--color-border-strong)] transition-all group"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                EVIDENCE &amp; CREDENTIALS
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)] group-hover:text-white transition-colors flex items-center justify-between">
                <span>Career Passport</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your portable credential record containing project artifacts, degrees, and confirmed credentials.
              </p>
            </Link>

            <Link
              href={ROUTES.PRODUCT_CAREER_GRAPH}
              className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 hover:border-[var(--color-border-strong)] transition-all group"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                CAREER GRAPH PATHWAYS
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)] group-hover:text-white transition-colors flex items-center justify-between">
                <span>Career Graph</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Graph is being designed to connect roles, capabilities, pathways, and relevant labour-market information.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: PRIVACY & CONTROL ───────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">DATA PRIVACY BOUNDARIES</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Your Mentor can know more than an employer ever needs to.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              You can discuss private career uncertainty, salary ambitions, or skill weaknesses with your Mentor in confidence. Career OS is designed to keep private Mentor context separate from employer-facing candidate views.
            </p>
          </div>

          <PrivacySimulatorInteractive />

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
            <Link href={ROUTES.TRUST_DATA_ETHICS} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              How Career OS Privacy Works &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_CANDIDATE_PRIVACY} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Candidate Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: STUDENTS & YOUNG PEOPLE ────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">YOUTH SAFEGUARDING &bull; AGE MODEL</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Career guidance should grow with you.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS&apos;s youth product architecture is designed around age-appropriate safeguards aligned with our canonical US age model. Young people receive guidance without exposure to commercial risks or un-vetted contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-taupe-300)]">AGE 16+ DIRECT ACCESS</span>
              <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">Direct Individual Accounts</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Direct consumer signup permitted at age 16 with minor safeguards active for ages 16&ndash;17, including default-private profiles.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-taupe-300)]">AGES 13–15 VERIFIED</span>
              <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">Verified Relationships</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Access for ages 13&ndash;15 requires a verified K-12 school arrangement or verified parent/guardian consent.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-taupe-300)]">UNDER 13 — INSTITUTIONAL ONLY</span>
              <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">School Institutional Only</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS does not offer open under-13 consumer registration. Any under-13 deployment requires an approved institutional arrangement and applicable notices and safeguards.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs pt-2">
            <Link href={ROUTES.LEGAL_STUDENT_TERMS} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Student Terms &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_PARENT_GUARDIAN} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Parent &amp; Guardian Notice &rarr;
            </Link>
            <Link href={ROUTES.TRUST_SAFEGUARDING} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Youth Safeguarding &rarr;
            </Link>
            <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Student Privacy Alignment &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: WHAT THE MENTOR WILL NOT DO ────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">SYSTEM BOUNDARIES &amp; TRUST</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Good guidance includes knowing the limits.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Building genuine trust requires absolute clarity about what the AI Career Mentor does not do. We never make false promises or replace essential human judgements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                No Guaranteed Hiring or Salary Promises
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor provides guidance on development pathways, but cannot guarantee job offers, interview invites, or specific compensation outcomes.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                No Autonomous Hiring Decisions
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Career OS&apos;s Employer Agent product direction is decision-support oriented. Career OS does not intend the Mentor itself to make final candidate-selection or rejection decisions on behalf of employers.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                No Replacement for Legal or Medical Advice
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Career Mentor guidance focuses strictly on professional skills and career development, and does not replace licensed legal, medical, or financial counsel.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                No Evidence Fabrication
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor will never generate fake work history, fabricate project achievements, or invent credentials to bypass employer criteria.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                No Pretense of Human Identity
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor is transparently disclosed as AI intelligence and will never attempt to pass as a human mentor or conceal its automated nature.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                No Private Data Selling
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Private Mentor conversation content is not intended to become employer-visible profile information merely because it exists in Career OS. Career OS&apos;s current policy is not to sell private Career Twin or Mentor content to advertisers.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs pt-2">
            <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Responsible AI Framework &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_AI_TERMS} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              AI Terms of Use &rarr;
            </Link>
            <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4">
              Human Oversight Policy &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: SUBSTANTIVE FAQ ─────────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Everything you need to know about the AI Career Mentor.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Detailed answers regarding architecture, data privacy, recommendations, and platform capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2"
              >
                <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--color-taupe-300)] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FINAL CTA ───────────────────────────────────── */}
      <section className="py-20 bg-[var(--color-surface-base)]">
        <div className="container-editorial text-center space-y-8 max-w-3xl">
          <span className="section-label">BEGIN YOUR CAREER COMPOUNDING</span>
          <h2 className="text-display-hero font-serif font-normal text-[var(--color-text-primary)]">
            Your next career question is probably already in your head.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Career OS is being built to help you turn that question into a direction, an action, and eventually evidence of progress.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start your career
            </Button>
            <Link
              href={ROUTES.PRODUCT_CAREER_TWIN}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4"
            >
              <span>Explore Career Twin</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-[var(--color-text-tertiary)] pt-2">
            Individual core access is currently free.&ensp;&middot;&ensp;Grounded in your private context.
          </p>
        </div>
      </section>
    </div>
  );
}
