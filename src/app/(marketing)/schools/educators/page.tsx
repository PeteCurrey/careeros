import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  GraduationCap, 
  Wrench, 
  Building2, 
  Users, 
  UserCheck, 
  Sparkles, 
  Lock, 
  FileCheck, 
  Layers, 
  Shield, 
  HelpCircle,
  Clock,
  Eye,
  FileText,
  Building,
  Briefcase,
  Bot,
  Zap,
  RotateCcw,
  HeartHandshake,
  AlertCircle
} from 'lucide-react';

import { HeroEducatorComposition } from '@/components/marketing/educators/HeroEducatorComposition';
import { CounselorSessionPrep } from '@/components/marketing/educators/CounselorSessionPrep';
import { StudentActivityLoop } from '@/components/marketing/educators/StudentActivityLoop';
import { MultiPathwayComparison } from '@/components/marketing/educators/MultiPathwayComparison';
import { EducatorWorkspaceTabs } from '@/components/marketing/educators/EducatorWorkspaceTabs';
import { CohortIntelligenceView } from '@/components/marketing/educators/CohortIntelligenceView';
import { PrivacyAccessDiagram } from '@/components/marketing/educators/PrivacyAccessDiagram';
import { ConversationActionFlow } from '@/components/marketing/educators/ConversationActionFlow';
import { EducatorsFAQ } from '@/components/marketing/educators/EducatorsFAQ';
import { LaunchSchoolForm } from '@/components/marketing/high-schools/LaunchSchoolForm';
import { IMPLEMENTATION_STEPS } from '@/components/marketing/educators/educatorsData';

export const metadata: Metadata = {
  title: 'Career Guidance Tools for Educators & School Counselors | Career OS',
  description:
    'See how Career OS is designed to help school counselors and educators support student career exploration, pathways, evidence and follow-up without replacing human guidance.',
  alternates: {
    canonical: 'https://career-os.com/schools/educators',
  },
  openGraph: {
    title: 'Career Guidance Tools for Educators & School Counselors | Career OS',
    description:
      'More context before the conversation. More time for the part only a human can do. Discover Career OS for school careers teams.',
    url: 'https://career-os.com/schools/educators',
    type: 'website',
  },
};

export default function SchoolsEducatorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Career OS for Educators & School Counselors',
    description:
      'Career guidance infrastructure designed to augment school counselors, career leaders, and teachers with pre-session exploration synthesis, multi-pathway parity, and structured student evidence.',
    provider: {
      '@type': 'Organization',
      name: 'Career OS',
      url: 'https://career-os.com',
    },
    educationalProgramMode: 'Blended',
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          SECTION 01: HERO
          More context before the conversation.
          More time for the part only a human can do.
          ============================================================ */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.audiences.schoolPrivacy.src}
            alt={MEDIA_ASSETS.audiences.schoolPrivacy.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          {/* Left charcoal dissolve */}
          <div aria-hidden="true" className="absolute inset-0" style={{ background: `linear-gradient(to right, #222222 0%, rgba(34, 34, 34,0.96) 38%, rgba(34, 34, 34,0.88) 55%, rgba(34, 34, 34,0.42) 78%, rgba(34, 34, 34,0.18) 100%)` }} />
          {/* Top dissolve */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 pointer-events-none" style={{ background: `linear-gradient(to bottom, #222222 0%, transparent 100%)` }} />
          {/* Bottom dissolve */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" style={{ background: `linear-gradient(to top, #222222 0%, transparent 100%)` }} />
        </div>

        <div className="container-editorial relative z-10 space-y-16 py-20 lg:py-0">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              <span className="section-label">
                Career Counselors, Advisers &amp; School Careers Teams
              </span>
            </div>

            <h1 className="text-display-hero text-white">
              More context before the conversation.
              <br />
              <span className="text-[var(--color-text-secondary)] font-serif font-normal">
                More time for the part only a human can do.
              </span>
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
              Career OS is being built to help students explore careers continuously while giving educators appropriate context, structured follow-up, and clearer pathways for high-judgment human guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button href="#session-prep-demo" variant="primary" size="lg">
                See the educator workflow ↓
              </Button>
              <Button href="#launch-school-form" variant="secondary" size="lg">
                Become a Launch School
              </Button>
              <Link
                href={ROUTES.FOR_HIGH_SCHOOLS}
                className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-white transition-colors inline-flex items-center gap-1.5 px-3 py-2 self-center"
              >
                <span>Career OS for High Schools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero Media Stage */}
          <HeroEducatorComposition />
        </div>
      </section>

      {/* ============================================================
          SECTION 02: PREPARED CONVERSATIONS
          Don't spend the first ten minutes asking what the student has already explored.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Guidance Efficiency &bull; Purpose-Built Support</span>
            <h2 className="text-headline-editorial text-white">
              Don’t spend the first ten minutes asking what the student has already explored.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              A careers adviser may have thirty minutes with a young person. In traditional setups, more than a third of that precious appointment is consumed establishing basic facts: what subjects they enjoy, what websites they looked at, and whether they understand what an apprenticeship is.
            </p>
          </div>

          {/* Before vs After Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Without Structured Context */}
            <div className="p-7 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6">
              <div className="space-y-1.5 border-b border-[var(--color-border-subtle)] pb-4">
                <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                  Conventional Career Advisory
                </span>
                <h3 className="text-xl font-serif text-white font-normal">
                  Without Structured Context
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <p className="font-semibold text-white">
                  The educator must spend valuable time establishing:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-[var(--color-text-tertiary)]">
                  <li>&ldquo;What sectors or careers have you thought about since we last spoke?&rdquo;</li>
                  <li>&ldquo;Do you know the difference between university and an apprenticeship?&rdquo;</li>
                  <li>&ldquo;What grades or subjects are you most confident in?&rdquo;</li>
                  <li>&ldquo;Have you logged any work experience or extracurricular projects?&rdquo;</li>
                  <li>&ldquo;Are you actually unsure, or just feeling pressured by family?&rdquo;</li>
                </ul>
              </div>

              <div className="p-3.5 rounded bg-white/5 border border-white/10 text-xs text-[var(--color-text-tertiary)] italic">
                Result: The session ends just as the conversation reaches meaningful depth.
              </div>
            </div>

            {/* With Career OS Support */}
            <div className="p-7 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.25)] space-y-6 relative overflow-hidden shadow-subtle">
              <div className="space-y-1.5 border-b border-[var(--color-border-subtle)] pb-4">
                <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                  Career OS Augmented Guidance
                </span>
                <h3 className="text-xl font-serif text-white font-normal">
                  With Pre-Session Synthesis
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <p className="font-semibold text-white">
                  Where appropriately permissioned, the educator enters already knowing:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-[var(--color-text-secondary)]">
                  <li><strong className="text-white">Career Families Explored:</strong> Specific modules and industries reviewed.</li>
                  <li><strong className="text-white">Pathways Compared:</strong> Direct trade-offs between degree and vocational routes.</li>
                  <li><strong className="text-white">Student-Stated Question:</strong> The exact dilemma the young person asked to discuss.</li>
                  <li><strong className="text-white">Relevant Evidence:</strong> Coursework, workshop projects, or volunteering logged.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded bg-[rgba(47,143,255,0.08)] border border-[rgba(47,143,255,0.2)] text-xs text-[#6BB8FF] font-medium">
                Result: 100% of the meeting is spent on high-judgment mentoring, realistic challenge, and actionable next steps.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] text-center max-w-3xl mx-auto space-y-2">
            <p className="text-lg sm:text-xl font-serif text-white italic">
              &ldquo;Career OS should prepare the conversation, not replace it.&rdquo;
            </p>
            <span className="text-[11px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider block">
              Core Institutional Product Principle
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 03: INTERACTION 01 — COUNSELOR SESSION PREP
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Interactive Experience 01</span>
            <h2 className="text-headline-editorial text-white">
              See how a 1:1 conversation could begin differently.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Explore four realistic student scenarios below. Notice how each profile provides structured context, highlights specific uncertainties, and suggests nuanced discussion prompts—while strictly segregating private reflections and avoiding deficit labels.
            </p>
          </div>

          <CounselorSessionPrep />
        </div>
      </section>

      {/* ============================================================
          SECTION 04: AI PREPARATION / HUMAN JUDGMENT
          Career guidance is not just an information problem.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Complementary Capabilities &bull; Distinct Roles</span>
            <h2 className="text-headline-editorial text-white">
              Career guidance is not just an information problem.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              We reject the simplistic EdTech view that career guidance is merely matching keywords to vacancies. Young people face complex family expectations, personal insecurities, local economic realities, and emotional transitions. Technology handles informational synthesis so humans can provide wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What AI can potentially help with */}
            <div className="p-7 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold block">
                    Computational Synthesis Layer
                  </span>
                  <h3 className="text-xl font-serif text-white font-normal">
                    What Career OS Can Support
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Multi-Pathway Explanation:</strong> Mapping entry criteria, apprenticeship wage scales, and university prerequisites objectively.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Cross-Sector Topology:</strong> Illuminating adjacent disciplines and non-obvious career possibilities in the Career Graph.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Evidence Articulation:</strong> Helping students translate coursework, part-time jobs, and volunteering into structured capability records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Pre-Session Synthesis:</strong> Organizing student exploration history into clear, concise briefs for counselor review.</span>
                </li>
              </ul>
            </div>

            {/* What educators uniquely contribute */}
            <div className="p-7 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                    Human Wisdom &amp; Advisory
                  </span>
                  <h3 className="text-xl font-serif text-white font-normal">
                    What Educators Uniquely Provide
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Holistic Individual Understanding:</strong> Knowing a student’s resilience, family context, and personal temperament.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Sensitively Challenging Assumptions:</strong> Helping students and families navigate entrenched biases about trades vs university.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Professional Career Judgment:</strong> Knowing when a student needs encouragement, when they need realistic boundary setting, and when to escalate safeguarding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Institutional Advocacy:</strong> Unlocking local employer connections, bursaries, and bespoke school accommodations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 05: STUDENT WORK BETWEEN MEETINGS
          Career development shouldn't stop when the appointment ends.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Continuous Exploration Flywheel</span>
            <h2 className="text-headline-editorial text-white">
              Career development shouldn’t stop when the appointment ends.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career decision-making is not a single annual transaction. Inside Career OS, students follow an active exploratory loop between guidance sessions—researching, comparing, building evidence, and returning to their counselor with sharper, more mature questions.
            </p>
          </div>

          <StudentActivityLoop />
        </div>
      </section>

      {/* ============================================================
          SECTION 06: MORE THAN UNIVERSITY APPLICATIONS
          A careers team needs visibility across the whole world of work.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Parity of Esteem &bull; Broad Horizons</span>
            <h2 className="text-headline-editorial text-white">
              A careers team needs visibility across the whole world of work.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Many legacy platforms were designed exclusively around 4-year university admissions pipelines. Career OS treats university degrees, degree apprenticeships, technical community colleges, skilled trades, and public service with identical dignity and depth.
            </p>
          </div>

          <MultiPathwayComparison />
        </div>
      </section>

      {/* ============================================================
          SECTION 07: HELP STUDENTS RECOGNIZE EVIDENCE
          Students often have more evidence than they realize.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Transferable Evidence &bull; Career Passport</span>
            <h2 className="text-headline-editorial text-white">
              Students often have more evidence than they realize.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Young people frequently assume they have &ldquo;no experience&rdquo; because they have not held a full-time corporate job. Educators play a vital role in helping students recognize the rigorous, transferable capability demonstrated through school projects, part-time jobs, and volunteering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold block">
                Academic Coursework &amp; Projects
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                School Assessed Projects
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Extended essays, robotics team entries, scientific lab investigations, and design portfolios demonstrate project planning, critical reasoning, and technical methodology.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                &bull; Demonstrates Method &amp; Collaboration
              </div>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
                Part-Time Jobs &amp; Family Business
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                Commercial Experience
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Weekend retail, cafe service, agriculture, and childcare establish punctuality, customer dispute resolution, financial responsibility, and real-world reliability.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                &bull; Demonstrates Responsibility &amp; Communication
              </div>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold block">
                Volunteering &amp; Community Service
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                Civic &amp; Team Initiatives
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                St John Ambulance cadet training, sports coaching, charity fundraising, and scouting show sustained personal initiative, leadership under pressure, and empathy.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                &bull; Demonstrates Empathy &amp; Initiative
              </div>
            </div>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-white block">
                Preserving Verifiable Provenance Across Education &amp; Work
              </span>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Career Passport clearly distinguishes between self-reported exploratory context and verified institutional credentials.
              </p>
            </div>
            <Link
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              className="text-xs font-semibold text-[#6BB8FF] hover:text-white transition-colors inline-flex items-center gap-1.5 shrink-0 px-4 py-2 rounded bg-white/5 border border-white/10"
            >
              <span>Explore Career Passport</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 08: THE EDUCATOR WORKSPACE (INTERACTION 02)
          Give educators a working view, not a surveillance console.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Interactive Experience 02</span>
            <h2 className="text-headline-editorial text-white">
              Give educators a working view, not a surveillance console.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Educators need functional tooling to manage caseloads, prep sessions, and coordinate careers events. They do not need invasive surveillance software that turns young people into algorithmic risk scores.
            </p>
          </div>

          <EducatorWorkspaceTabs />
        </div>
      </section>

      {/* ============================================================
          SECTION 09: WHO NEEDS HUMAN ATTENTION?
          Prioritize requests, not people.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Ethical Workflow Prioritization</span>
            <h2 className="text-headline-editorial text-white">
              Prioritize requests, not people.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              This distinction is foundational to our philosophy. Career OS must never assign algorithmic &ldquo;worth&rdquo; scores to students or rank who is &ldquo;most deserving&rdquo; of human counselor time. Workflow queues are strictly organized by transparent event milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4">
              <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                Valid Event-Based Triggers
              </span>
              <h3 className="text-lg font-serif text-white font-normal">
                How Requests are Prioritized
              </h3>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Student Meeting Request:</strong> A young person explicitly asks for advice on a specific question.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Agreed Follow-Up Date:</strong> An agreed milestone date set by the counselor during a prior 1:1 session.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Application Deadlines:</strong> Common App and rolling deadlines, apprenticeship intakes, or dual-enrollment confirmation dates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Evidence Review:</strong> Student requests teacher/counselor verification of a completed work placement.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-[var(--radius-card)] bg-rose-950/20 border border-rose-500/30 space-y-4">
              <span className="text-[10px] font-mono uppercase text-rose-300 font-semibold block">
                Prohibited Algorithmic Practices
              </span>
              <h3 className="text-lg font-serif text-white font-normal">
                What Career OS Will Never Do
              </h3>
              <ul className="space-y-2.5 text-xs text-rose-200/80">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>Calculate &ldquo;Employability Scores&rdquo; or &ldquo;Career Readiness Percentages&rdquo;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>Assign Red/Amber/Green risk badges indicating a student is &ldquo;behind&rdquo;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>Create comparative leaderboards ranking students against peers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>Attempt to predict a student’s future earning potential or failure probability.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] text-center text-xs text-[var(--color-text-secondary)]">
            <strong className="text-white">Core Ethical Rule:</strong> Workflow prioritization is about managing logistics and calendar commitments—never evaluating the human worth or potential of children.
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: COHORT INTELLIGENCE WITHOUT INDIVIDUAL RANKING
          Understand what students are exploring without turning them into a leaderboard.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Institutional Planning &bull; Cohort Trends</span>
            <h2 className="text-headline-editorial text-white">
              Understand what students are exploring without turning them into a leaderboard.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              School leaders and careers directors need macro-level intelligence to arrange relevant guest speakers, negotiate college and employer partnerships, and schedule visits. Career OS provides aggregate trend distribution without tracking individuals.
            </p>
          </div>

          <CohortIntelligenceView />
        </div>
      </section>

      {/* ============================================================
          SECTION 11: PRIVACY BOUNDARIES
          Useful context is not the same as unlimited access.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Purpose-Based Data Governance</span>
            <h2 className="text-headline-editorial text-white">
              Useful context is not the same as unlimited access.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Students will only explore candidly if they know their private hesitations, self-doubts, and exploratory queries are not broadcast across the staff room. The educator experience is designed to be purpose-based, not omniscient.
            </p>
          </div>

          <PrivacyAccessDiagram />
        </div>
      </section>

      {/* ============================================================
          SECTION 12: SAFEGUARDING & ESCALATION
          Technology should know when the next step needs to be human.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Child Safety &bull; Designated Safeguarding</span>
            <h2 className="text-headline-editorial text-white">
              Technology should know when the next step needs to be human.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              We do not claim that AI can autonomously diagnose safeguarding or mental health emergencies. Instead, the platform is engineered with clear age-appropriate boundaries, explicit safety guardrails, and immediate escalation pathways to trained human school professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                01 &bull; Explicit Boundaries
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Transparent AI Identification
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Students are always reminded that the Career Mentor is an automated software tool, not a therapist, clinical counselor, or legal guardian.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                02 &bull; Direct Escalation
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Human Signposting
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                If sensitive distress or welfare topics are mentioned, the system immediately pauses career suggestions and displays clear contact details for school safeguarding leads and accredited youth helplines.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold block">
                03 &bull; Policy Alignment
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                School Safeguarding Protocols
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS operates within your school’s established statutory safeguarding policy (such as Keeping Children Safe in Education in the UK or state child protection mandates in the US).
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Learn more about our institutional youth protection architecture and student data safeguards.
            </span>
            <Link
              href={ROUTES.SCHOOLS_STUDENT_SAFETY}
              className="font-semibold text-emerald-400 hover:text-white transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Student Safety &amp; Safeguarding</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13: PARENTS & GUARDIANS
          Better student guidance can also create better family conversations.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Family Engagement &bull; Objective Data</span>
            <h2 className="text-headline-editorial text-white">
              Better student guidance can also create better family conversations.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Many difficult career guidance dilemmas arise when a student’s emerging interests conflict with family expectations. Educators spend significant energy bridging these gaps. Career OS provides objective, neutral labor market data that students and families can review together constructively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4">
              <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                Neutral Evidence for Family Consultation
              </span>
              <h3 className="text-lg font-serif text-white font-normal">
                De-Escalating Pathway Friction
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                When a student considers an apprenticeship or technical trade instead of university, parents often worry about long-term earning ceilings. Career OS equips students with factual wage data, chartership progression roadmaps, and employer sponsorship details to discuss at home with dignity.
              </p>
            </div>

            <div className="p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4">
              <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                Guardian Governance Boundaries
              </span>
              <h3 className="text-lg font-serif text-white font-normal">
                Age-Appropriate Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                While parents receive clear disclosures and account management options in accordance with age frameworks (13–15 vs 16+), private exploratory mentor logs are not treated as open surveillance feeds, preserving student psychological safety.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link
              href={ROUTES.LEGAL_PARENT_GUARDIAN}
              className="text-[var(--color-text-secondary)] hover:text-white transition-colors underline underline-offset-4"
            >
              Parent &amp; Guardian Notice →
            </Link>
            <Link
              href={ROUTES.SCHOOLS_PRIVACY}
              className="text-[var(--color-text-secondary)] hover:text-white transition-colors underline underline-offset-4"
            >
              School Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14: CAREER EVENTS & EMPLOYER ENGAGEMENT
          Turn career events into part of the journey, not isolated calendar entries.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Career Events &bull; Employer Encounters</span>
            <h2 className="text-headline-editorial text-white">
              Turn career events into part of the journey, not isolated calendar entries.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              School career fairs and employer visits often suffer from poor preparation: students wander past booths aimlessly and collect leaflets they never read. In future releases, Career OS connects career events directly into the student exploration journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold block">
                Pre-Event Synthesis
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Personalized Fair Briefings
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Before attending an event, students receive a curated briefing of attending employers aligned with their Career Passport interests and 3 suggested questions to ask booth representatives.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                Safeguarded Discovery
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                No Unsolicited Recruiter Outreach
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                External employers cannot cold-message minor students. Event engagement is strictly school-facilitated and governed by institutional safeguarding standards.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                Post-Event Reflection
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Evidence Capture in Passport
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Conversations held during employer events can be logged into Career Passport, automatically updating the student’s exploration context for their next educator meeting.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Explore the dedicated Career OS Events platform covering career fairs, workshops, and employer spotlights.
            </span>
            <Link
              href={ROUTES.EVENTS}
              className="font-semibold text-[#6BB8FF] hover:text-white transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore Career OS Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 15: AFTER THE CONVERSATION
          A good meeting should produce a next step.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Accountable Momentum &bull; Structured Action</span>
            <h2 className="text-headline-editorial text-white">
              A good meeting should produce a next step.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              The goal of guidance is not pleasant conversation in a vacuum. Every 1:1 session should culminate in a concrete, achievable exploratory commitment that maintains student momentum until the next check-in.
            </p>
          </div>

          <ConversationActionFlow />
        </div>
      </section>

      {/* ============================================================
          SECTION 16: STUDENT TRANSITION OUT OF SCHOOL
          Your support has an endpoint. Their career does not.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Lifelong Continuity &bull; Post-Secondary Transition</span>
            <h2 className="text-headline-editorial text-white">
              Your support has an endpoint. Their career does not.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Educators shepherd students across vital educational transitions—from Year 11 options to post-18 destinations. Career OS is designed so that while school administrative authority transitions upon graduation, the individual’s verified evidence and career context continue for a lifetime.
            </p>
          </div>

          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono text-[#6BB8FF] uppercase font-bold block">Stage 01</span>
                <h4 className="font-semibold text-white text-sm">School Exploration</h4>
                <p className="text-[var(--color-text-secondary)]">Counselor guidance, multi-pathway research, school project verification.</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">Stage 02</span>
                <h4 className="font-semibold text-white text-sm">Destination Transition</h4>
                <p className="text-[var(--color-text-secondary)]">University enrollment, apprenticeship start, or direct skilled entry.</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block">Stage 03</span>
                <h4 className="font-semibold text-white text-sm">Early Career Development</h4>
                <p className="text-[var(--color-text-secondary)]">Professional evidence compounding, mentor coaching, licensing exams.</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">Stage 04</span>
                <h4 className="font-semibold text-white text-sm">Lifelong Progression</h4>
                <p className="text-[var(--color-text-secondary)]">Lateral pivots, senior leadership, business founding, continuous adaptation.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-white font-medium italic">
                &ldquo;The institution changes. The individual’s career continues.&rdquo;
              </span>
              <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
                Separation of School Records &amp; Lifelong Passport
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 17: IMPLEMENTING CAREER OS WITH EDUCATORS
          Introduce the platform with educators, not around them.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Institutional Rollout &bull; Change Management</span>
            <h2 className="text-headline-editorial text-white">
              Introduce the platform with educators, not around them.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Technology imposed without educator buy-in becomes shelfware. We work directly with careers leaders and guidance teams through a deliberate, seven-phase implementation framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {IMPLEMENTATION_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#6BB8FF] font-bold block">
                    {step.number}
                  </span>
                  <h4 className="text-base font-serif text-white font-normal">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 18: WHAT CAREER OS SHOULD NEVER ASK EDUCATORS TO DO
          Technology should reduce ambiguity, not add another administrative burden.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">User Experience Principles &bull; Educator Workload</span>
            <h2 className="text-headline-editorial text-white">
              Technology should reduce ambiguity, not add another administrative burden.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              School counselors are already overburdened with paperwork. Career OS is explicitly engineered around what we refuse to ask educators to do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-xs font-mono text-rose-400 font-bold block">We will never ask you to:</span>
              <h4 className="text-base font-serif text-white font-normal">
                Re-enter Student Data Repeatedly
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No manual transcription of student names, subject grades, or basic survey responses between disjointed spreadsheets.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-xs font-mono text-rose-400 font-bold block">We will never ask you to:</span>
              <h4 className="text-base font-serif text-white font-normal">
                Audit Every Mentor Dialogue
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                You do not need to read through thousands of routine exploratory queries. The system surfaces synthesized session briefs.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-xs font-mono text-rose-400 font-bold block">We will never ask you to:</span>
              <h4 className="text-base font-serif text-white font-normal">
                Score or Rank Young People
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No assigning arbitrary employability grades or deficit ratings to children during developmental exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 19: FAQ
          24 Substantial Educator Questions
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Questions &amp; Answers</span>
            <h2 className="text-headline-editorial text-white">
              Frequently Asked Questions by Careers Leaders &amp; Counselors
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Detailed explanations of how Career OS supports guidance teams, protects student privacy, maintains pathway parity, and coordinates with existing school policies.
            </p>
          </div>

          <EducatorsFAQ />
        </div>
      </section>

      {/* ============================================================
          SECTION 20: LAUNCH SCHOOL APPLICATION & FINAL CTA
          ============================================================ */}
      <section id="launch-school-form" className="section-editorial">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <span className="section-label">Become a Founding Partner School</span>
            <h2 className="text-display-hero text-white">
              Give educators more context—not more administration.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is partnering with high schools, academy trusts, and school districts to build the future of continuous, dignified career guidance. Apply below to join the Launch School program.
            </p>
          </div>

          {/* Launch School Form Component */}
          <div className="max-w-4xl mx-auto">
            <LaunchSchoolForm />
          </div>

          {/* Institutional Navigation Links */}
          <div className="pt-12 border-t border-[var(--color-border-default)] flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-tertiary)]">
            <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="hover:text-white transition-colors">
              Career OS for High Schools →
            </Link>
            <Link href={ROUTES.SCHOOLS_STUDENT_SAFETY} className="hover:text-white transition-colors">
              Student Safety &amp; Safeguarding →
            </Link>
            <Link href={ROUTES.SCHOOLS_PRIVACY} className="hover:text-white transition-colors">
              School Privacy Policy →
            </Link>
            <Link href={ROUTES.SCHOOLS_OUTCOMES} className="hover:text-white transition-colors">
              School Outcomes &amp; Benchmark Alignment →
            </Link>
            <Link href={ROUTES.SCHOOLS_PARTNERSHIPS} className="hover:text-white transition-colors">
              Institutional Partnerships →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
