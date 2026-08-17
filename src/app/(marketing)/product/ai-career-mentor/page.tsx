import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroMentorInterface } from '@/components/marketing/ai-career-mentor/HeroMentorInterface';
import { ContextSystemDiagram } from '@/components/marketing/ai-career-mentor/ContextSystemDiagram';
import { LifetimeTimelineInteractive } from '@/components/marketing/ai-career-mentor/LifetimeTimelineInteractive';
import { QuestionSelectorInteractive } from '@/components/marketing/ai-career-mentor/QuestionSelectorInteractive';
import { ActionLoopDiagram } from '@/components/marketing/ai-career-mentor/ActionLoopDiagram';
import { PrivacySimulatorInteractive } from '@/components/marketing/ai-career-mentor/PrivacySimulatorInteractive';
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
  title: "AI Career Mentor for Career Planning & Progression | Career OS",
  description: "Meet the Career OS AI Career Mentor — career guidance designed around your goals, evidence, skills and progress from education through advancement and career change.",
  alternates: {
    canonical: "https://career-os.com/product/ai-career-mentor",
  },
  openGraph: {
    title: "AI Career Mentor | Career OS",
    description: "Persistent, context-aware career guidance grounded in your goals, verified evidence, and market intelligence.",
    url: "https://career-os.com/product/ai-career-mentor",
  },
};

export default function AICareerMentorPage() {
  const faqList = [
    {
      q: "What is an AI Career Mentor?",
      a: "An AI Career Mentor is a system-assigned guidance layer inside Career OS. It analyzes your structured Career Twin context—including your goals, verified Passport evidence, and skills—to provide personalized, evidence-backed career guidance and next steps over years.",
    },
    {
      q: "Is the Career Mentor a real person?",
      a: "No. The AI Career Mentor is an advanced artificial intelligence system built on enterprise-grade large language models and proprietary Career OS domain logic. It is always clearly identified as AI and never pretends to be human.",
    },
    {
      q: "Do I choose my Mentor?",
      a: "No. Mentors are system-assigned based on your selected domain focus and career goals. We intentionally do not offer 'celebrity' personality avatars or gimmicky chatbot choices, focusing strictly on objective, evidence-grounded career intelligence.",
    },
    {
      q: "What does the Mentor know about me?",
      a: "Your Mentor accesses only the structured context in your private Career Twin—such as expressed career goals, verified Passport credentials, skill history, and work preferences. It accesses what you choose to share and operates under strict data minimisation.",
    },
    {
      q: "How is this different from a generic AI chatbot?",
      a: "Generic AI chatbots operate transactionally—they forget your history when you close the browser and give generic advice disconnected from your actual credentials. The Career OS Mentor maintains persistent multi-year context, references verified project evidence, and maps actions to real market pathways in Career Graph.",
    },
    {
      q: "Does it remember previous conversations?",
      a: "Yes. Within Career OS, developmental context persists across sessions. Your goals, milestone progress, and previous guidance outputs build a continuous thread of professional growth.",
    },
    {
      q: "Can my employer see what I tell my Mentor?",
      a: "No. Conversations with your AI Mentor and your private career uncertainties (e.g., job search intent, salary targets) are strictly confidential and stored in your private Career Twin. Employers only see information you explicitly grant permission to share on job applications.",
    },
    {
      q: "Can the Mentor help me change careers?",
      a: "Yes. The Mentor analyzes your existing verified evidence in your Career Passport to identify transferable skill overlaps in target industries, helping you pivot without starting your career from scratch.",
    },
    {
      q: "Can it help with promotions and leadership?",
      a: "Yes. By benchmarking your current evidence against senior role requirements in Career Graph, the Mentor identifies specific high-impact projects or leadership milestones needed to demonstrate readiness for promotion.",
    },
    {
      q: "Can it help me start a business?",
      a: "Yes. The Mentor supports entrepreneurial pathways by evaluating venture readiness, identifying co-founder skill gaps, and mapping operational learning steps.",
    },
    {
      q: "Can students use the AI Career Mentor?",
      a: "Yes. Students aged 16+ can register directly. Users aged 13–15 access the platform under approved school or guardian consent arrangements. All minor accounts feature default-private profiles and hard-blocks on direct employer outreach.",
    },
    {
      q: "Does it write CVs and applications?",
      a: "The Mentor assists you in structuring and tailoring resume content based on your verified Career Passport evidence. However, it will never fabricate experiences or generate false statements.",
    },
    {
      q: "How does it decide what to recommend?",
      a: "Recommendations are formulated by matching your Career Twin profile against real-world labor market data in Career Graph and verified evidence thresholds in your Passport, surfacing transparent decision factors for every suggestion.",
    },
    {
      q: "Can the Mentor be wrong?",
      a: "Yes. AI models can misinterpret nuance or rely on incomplete data. That is why every recommendation surfaces explicit decision factors and uncertainty notes, giving you full control to accept, challenge, or correct any advice.",
    },
    {
      q: "Can I correct inaccurate information?",
      a: "Absolutely. You retain full control over your Career Twin data. You can edit, update, or remove any context item at any time, and future recommendations will immediately reflect your updates.",
    },
    {
      q: "What happens to my data?",
      a: "Your data is stored securely in encrypted databases under strict Row-Level Security. We enforce zero model training agreements with our AI LLM providers, ensuring your private career information is never used to train foundation models.",
    },
    {
      q: "Is Career OS free for individuals?",
      a: "Yes. Individual core accounts—including the AI Career Mentor, Career Twin, and Career Passport—are free for individuals.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)] text-[var(--color-charcoal-deep)]">
      {/* ── SECTION 01: SUBSTANTIAL HERO ─────────────────────────────── */}
      <section aria-labelledby="hero-title" className="pt-16 pb-20 border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Editorial Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="section-label">THE CAREER OPERATING SYSTEM</span>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>AI-powered. System-assigned. Always clearly identified as AI.</span>
                </div>
              </div>

              <h1
                id="hero-title"
                className="text-display-hero font-serif font-normal text-[var(--color-charcoal-deep)] tracking-tight"
              >
                A career mentor that learns where you&apos;re trying to go.
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-charcoal-deep)] hover:underline underline-offset-4"
                  >
                    <span>See the Mentor in action</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Free for individual core accounts.&ensp;&middot;&ensp;Grounded in your private evidence.
                </p>
              </div>
            </div>

            {/* Right: High-Fidelity Interactive Hero Mentor Preview */}
            <div className="lg:col-span-6">
              <HeroMentorInterface />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: NOT ANOTHER CHATBOT ────────────────────────── */}
      <section id="not-another-chatbot" className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">PERSISTENT SYSTEM vs TRANSACTIONAL CHAT</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Career advice shouldn&apos;t reset every time you open a chat.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Generic AI chatbots treat every visit as a isolated interaction. Career OS is designed as a persistent professional guidance system that remembers your history, references your evidence, and tracks your multi-year trajectory.
            </p>
          </div>

          {/* Editorial Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Generic AI Chatbot */}
            <div className="p-8 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Generic AI Chatbots
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-red-50 text-red-800 border border-red-200 font-bold">
                  TRANSACTIONAL
                </span>
              </div>

              <ul className="space-y-4 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Starts from scratch every time you open a session.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Zero knowledge of your past verified skills or achievements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Recommendations are disconnected from real evidence and job markets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No persistent Career Passport or structured skill record.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Can hallucinate advice without surfacing decision factors.</span>
                </li>
              </ul>
            </div>

            {/* Career OS AI Mentor */}
            <div className="p-8 bg-[var(--color-surface-warm)] border-2 border-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Career OS AI Mentor
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                  PERSISTENT &amp; GROUNDED
                </span>
              </div>

              <ul className="space-y-4 text-xs text-[var(--color-charcoal-deep)]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Maintains continuous multi-year developmental context in your Career Twin.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Grounds every recommendation in your verified Passport evidence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Connects actions directly to live market pathways in Career Graph.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Updates recommendations dynamically as you log new achievements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surfaces explicit decision rationale and uncertainty for full transparency.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: WHAT YOUR MENTOR UNDERSTANDS ────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">CONTEXT ENGINE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Better advice starts with better context.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Your AI Mentor does not guess. It interprets 10 core categories of professional context structured within your Career Twin to deliver tailored, highly relevant guidance.
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              The question changes. Your Career OS stays.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              From high school pathway discovery through entry-level employment, advancement, career change, and business founding &mdash; your Mentor provides continuous intelligence across every career phase.
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Start with the question that&apos;s actually on your mind.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Explore real-world questions across discovery, skill progression, compensation, transition, and entrepreneurship to see how your Mentor responds.
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Advice is useful. Progress is better.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              The Mentor does not exist merely for chat volume. Every interaction feeds into a continuous 7-step action loop that builds verified evidence in your Passport.
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              You should be able to understand why something was recommended.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              We never treat AI recommendations as unexaminable black boxes. Every suggestion breaks down the contributing factors, source data, uncertainty notes, and user control options.
            </p>
          </div>

          {/* Human-Readable Recommendation Breakdown */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border-default)] pb-4">
              <span className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Illustrative Recommendation Breakdown
              </span>
              <span className="font-mono text-xs px-2.5 py-1 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded">
                Example Scenario
              </span>
            </div>

            <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded space-y-2">
              <span className="text-xs font-mono font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                PROPOSED NEXT STEP
              </span>
              <p className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                &quot;Seek project leadership responsibility before applying for Engineering Manager roles.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-charcoal-deep)] block">1. Relevant Factors</span>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>&bull; Strong technical evidence</li>
                  <li>&bull; Limited team lead evidence</li>
                  <li>&bull; Target roles require team lead</li>
                </ul>
              </div>

              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-charcoal-deep)] block">2. Input Sources</span>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>&bull; Career Twin profile</li>
                  <li>&bull; Passport credentials</li>
                  <li>&bull; Selected target path</li>
                </ul>
              </div>

              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-charcoal-deep)] block">3. Uncertainty</span>
                <p className="text-[var(--color-text-secondary)]">
                  Career OS cannot know internal hiring requirements for every specific employer.
                </p>
              </div>

              <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-2">
                <span className="font-bold text-[var(--color-charcoal-deep)] block">4. Your Control</span>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>&bull; Accept suggestion</li>
                  <li>&bull; Challenge / Ignore</li>
                  <li>&bull; Correct context data</li>
                </ul>
              </div>
            </div>

            {/* Expandable Technical Provenance Drawer */}
            <details className="group pt-4 border-t border-[var(--color-border-default)]">
              <summary className="cursor-pointer font-mono text-xs font-bold text-[var(--color-charcoal-deep)] flex items-center justify-between p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded hover:bg-[var(--color-taupe-100)] transition-colors">
                <span>// FOR DEVELOPERS &amp; PROCUREMENT: VIEW TECHNICAL EXECUTION RECORD</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 p-5 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded font-mono text-xs text-[var(--color-text-secondary)] overflow-x-auto space-y-1">
                <p className="text-emerald-700 font-bold">// Conceptual AI Execution Record (Structured Provenance)</p>
                <p>ai_execution_id: &quot;8f4d92a1-3c5e-4b2a-9e1f-7a8b9c0d1e2f&quot;</p>
                <p>provider: &quot;google&quot; | model: &quot;gemini-pro&quot; | model_version: &quot;1.5&quot;</p>
                <p>policy_version: &quot;2026.08-responsible-ai-standard&quot;</p>
                <p>input_sources: [&quot;career_twin.skills&quot;, &quot;career_passport.credentials&quot;, &quot;career_graph.market_data&quot;]</p>
                <p>user_facing_rationale: &quot;Recommended project leadership step based on verified Kubernetes evidence and targeted engineering management pathway.&quot;</p>
                <p>key_factors: [&quot;Strong technical programming foundation&quot;, &quot;Expressed interest in team management&quot;, &quot;Regional market demand&quot;]</p>
                <p>confidence_or_uncertainty: &#123; level: &quot;HIGH&quot;, explanation: &quot;High overlap with 3 completed capstone projects&quot; &#125;</p>
                <p>human_action: &#123; action_type: &quot;ACCEPTED&quot;, acted_at: &quot;2026-08-17T21:00:00Z&quot; &#125;</p>
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Your Mentor and Career Twin work together.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              The AI Mentor is not a isolated feature &mdash; it is the intelligence layer operating on top of your Career Twin, Passport evidence, and Graph market data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href={ROUTES.PRODUCT_CAREER_TWIN}
              className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 hover:border-[var(--color-charcoal-base)] transition-all group"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)]">
                CONTEXT REPRESENTATION
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors flex items-center justify-between">
                <span>Career Twin</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                What Career OS understands about your skills, experience, goals, and working preferences.
              </p>
            </Link>

            <Link
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 hover:border-[var(--color-charcoal-base)] transition-all group"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)]">
                VERIFIED EVIDENCE LEDGER
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors flex items-center justify-between">
                <span>Career Passport</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your portable credential record containing verified project artifacts, degrees, and certifications.
              </p>
            </Link>

            <Link
              href={ROUTES.PRODUCT_CAREER_GRAPH}
              className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 hover:border-[var(--color-charcoal-base)] transition-all group"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)]">
                LABOR MARKET MAP
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors flex items-center justify-between">
                <span>Career Graph</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Real-world labor market intelligence mapping skill demand, role requirements, and transition routes.
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Your Mentor can know more than an employer ever needs to.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              You can discuss private career uncertainty, salary ambitions, or skill weaknesses with your Mentor without fear. Career OS strictly segregates private mentor context from employer-visible candidate profile views.
            </p>
          </div>

          <PrivacySimulatorInteractive />

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
            <Link href={ROUTES.TRUST_DATA_ETHICS} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
              How Career OS Privacy Works &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_CANDIDATE_PRIVACY} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Career guidance should grow with you.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              The AI Mentor enforces age-appropriate safeguards aligned with our canonical US age model. Young people receive guidance without exposure to commercial risks or un-vetted contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-taupe-700)]">AGE 16+ DIRECT ACCESS</span>
              <h3 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">Direct Individual Accounts</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Direct consumer signup permitted at age 16 with minor safeguards active for ages 16&ndash;17, including default-private profiles.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-taupe-700)]">AGES 13–15 VERIFIED</span>
              <h3 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">Verified Relationships</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Access for ages 13&ndash;15 requires a verified K-12 school arrangement or verified parent/guardian consent.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-taupe-700)]">UNDER 13 HARD-BLOCK</span>
              <h3 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">School Official Only</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Direct registration under 13 is hard-blocked. Access operates solely via FERPA/COPPA school institutional consent.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs pt-2">
            <Link href={ROUTES.LEGAL_STUDENT_TERMS} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
              Student Terms &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_PARENT_GUARDIAN} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
              Parent &amp; Guardian Notice &rarr;
            </Link>
            <Link href={ROUTES.TRUST_SAFEGUARDING} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
              Youth Safeguarding &rarr;
            </Link>
            <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
              Good guidance includes knowing the limits.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Building genuine trust requires absolute clarity about what the AI Career Mentor does not do. We never make false promises or replace essential human judgements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                No Guaranteed Hiring or Salary Promises
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor provides evidence-based trajectory guidance, but cannot guarantee job offers, interview invites, or specific compensation outcomes.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                No Autonomous Hiring Decisions
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor never makes automated candidate selection or rejection decisions for corporate employers. Human hiring managers retain 100% decision authority.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                No Replacement for Legal or Medical Advice
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Career Mentor guidance focuses strictly on professional skills and career development, and does not replace licensed legal, medical, or financial counsel.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                No Evidence Fabrication
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor will never generate fake work history, fabricate project achievements, or invent credentials to bypass employer criteria.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                No Pretense of Human Identity
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Mentor is transparently disclosed as AI intelligence and will never attempt to pass as a human mentor or conceal its automated nature.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-bold text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                No Private Data Leakage to Employers
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Your private career uncertainties and mentor prompt histories are strictly confidential and never shared with employers or 3rd-party ad networks.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs pt-2">
            <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
              Responsible AI Framework &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_AI_TERMS} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
              AI Terms of Use &rarr;
            </Link>
            <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="font-semibold text-[var(--color-charcoal-deep)] underline underline-offset-4">
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
            <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
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
                className="p-6 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2"
              >
                <h3 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--color-taupe-600)] shrink-0 mt-1" />
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
      <section className="py-20 bg-[var(--color-ivory-base)]">
        <div className="container-editorial text-center space-y-8 max-w-3xl">
          <span className="section-label">BEGIN YOUR CAREER COMPOUNDING</span>
          <h2 className="text-display-hero font-serif font-normal text-[var(--color-charcoal-deep)]">
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
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-charcoal-deep)] hover:underline underline-offset-4"
            >
              <span>Explore Career Twin</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-[var(--color-text-tertiary)] pt-2">
            Free for individual core accounts.&ensp;&middot;&ensp;Grounded in your private evidence.
          </p>
        </div>
      </section>
    </div>
  );
}
