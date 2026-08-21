import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import { HeroInstitutionalOutcomesView } from '@/components/marketing/high-schools/HeroInstitutionalOutcomesView';
import { PathwayExposureInteraction } from '@/components/marketing/high-schools/PathwayExposureInteraction';
import { OutcomesObjectiveBuilder } from '@/components/marketing/high-schools/OutcomesObjectiveBuilder';
import {
  Compass,
  Layers,
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Target,
  GraduationCap,
  Building2,
  FileText,
  Clock,
  ExternalLink,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Career Guidance Outcomes & School Program Intelligence | Career OS',
  description:
    'See how Career OS is designed to help schools understand student career exploration, pathway engagement, evidence building, and counseling activity without ranking student potential.',
  alternates: {
    canonical: 'https://career-os.com/schools/outcomes',
  },
};

export default function SchoolsOutcomesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      
      {/* ── BREADCRUMB ────────────────────────────────────────────── */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] py-3">
        <div className="container-editorial flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
          <Link href={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="hover:text-white transition-colors">Schools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)] font-semibold">Outcomes &amp; Program Intelligence</span>
        </div>
      </div>

      {/* ── SECTION 01: HERO ──────────────────────────────────────── */}
      <section className="relative pt-16 pb-14 border-b border-[var(--color-border-default)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[rgba(47,143,255,0.04)] blur-3xl" />
        </div>

        <div className="container-editorial relative z-10 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_rgba(47,143,255,0.7)]" />
              <span className="section-label text-[var(--accent-blue)]">
                School Authority Sprint 04 · Institutional Outcomes &amp; Program Intelligence
              </span>
            </div>

            <h1 className="text-display-hero text-[var(--color-text-primary)] leading-[1.04]">
              Career guidance should produce more than activity.<br />
              <span className="text-[var(--color-taupe-300)]">Schools should be able to understand what students are actually building.</span>
            </h1>

            <p className="text-lead max-w-2xl text-[var(--color-text-secondary)]">
              Career OS is being designed to help schools understand career exploration, pathway engagement, evidence-building activity, and human guidance demand — without reducing young people to a single readiness or potential score.
            </p>

            <div className="p-3.5 bg-[var(--background-dark-deep)] border border-[rgba(47,143,255,0.25)] rounded text-xs text-[var(--color-text-secondary)] max-w-2xl">
              <strong className="text-white">Core Principle: </strong>
              &ldquo;Measure development. Don&apos;t score human potential.&rdquo; We measure activity, participation, breadth, and evidence creation — never human worth or deterministic destiny.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#institutional-outcomes-hero"
              className="px-5 py-3 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Explore the Outcomes Model ↓</span>
            </a>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-4 py-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-zinc-500 text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Career OS for High Schools</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            </Link>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-4 py-3 bg-transparent text-[var(--color-text-secondary)] hover:text-white text-xs font-semibold rounded-[var(--radius-button)] transition-colors"
            >
              Become a Launch School →
            </Link>
          </div>

          {/* HERO OUTCOMES VIEW */}
          <div className="pt-6">
            <HeroInstitutionalOutcomesView />
          </div>

        </div>
      </section>

      <main className="container-editorial py-12 sm:py-16 space-y-16">

        {/* ── SECTION 02: WHAT SHOULD A SCHOOL MEASURE? ─────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 02 · Meaningful Institutional Questions</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Start with questions that lead to action.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              The purpose of measuring career education is to improve institutional provision, allocate guidance resources effectively, and identify curriculum gaps — not to categorize or label individual young people.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Reach',
                question: 'Are all students actively engaging with career exploration?',
                detail: 'Identifying whether guidance is reaching the entire cohort or remaining confined to self-selecting applicants.',
              },
              {
                title: 'Breadth',
                question: 'Are students comparing multiple pathways?',
                detail: 'Tracking whether young people evaluate apprenticeships, trades, and college routes alongside universities.',
              },
              {
                title: 'Depth',
                question: 'Are students moving from casual browsing into serious research?',
                detail: 'Monitoring detailed occupational comparisons, prerequisite reviews, and concrete goal setting.',
              },
              {
                title: 'Evidence',
                question: 'Are students documenting tangible capabilities?',
                detail: 'Tracking portfolio artifacts, work experience reflections, and verifiable skill credentials in Career Passport.',
              },
              {
                title: 'Support',
                question: 'Are students accessing human guidance when needed?',
                detail: 'Understanding counselor meeting demand, pre-appointment preparation, and completed action milestones.',
              },
              {
                title: 'Exposure',
                question: 'Are students seeing careers outside immediate social circles?',
                detail: 'Auditing sector and employer encounters to expand horizons beyond family or local default assumptions.',
              },
              {
                title: 'Transition',
                question: 'Are students moving toward next steps with verified contingencies?',
                detail: 'Supporting senior application cycles with realistic primary and backup destination plans.',
              },
              {
                title: 'Continuity',
                question: 'Can students carry their career assets forward after graduation?',
                detail: 'Ensuring evidence and credential records persist sovereignly with the individual into adulthood.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-[var(--accent-blue)] uppercase font-bold">
                    0{idx + 1} · {item.title}
                  </div>
                  <h3 className="text-xs font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
            <strong className="text-white">Guiding Principle: </strong>
            Career education outcomes are fundamentally broader than &ldquo;Did the student get a job?&rdquo; We measure exploration, readiness, evidence, and human support.
          </div>
        </section>

        {/* ── SECTION 03: ACTIVITY VS OUTCOME ──────────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 03 · Analytical Attribution</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Logging in is activity. Building career understanding is the outcome we&apos;re trying to support.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Platforms frequently confuse superficial software usage with genuine educational growth. Career OS distinguishes between platform actions, developmental milestones, institutional outcomes, and longitudinal trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 text-xs">
            
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
              <div className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase font-bold">Tier 1</div>
              <div className="text-xs font-bold text-white">Platform Activity</div>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                Logins, page views, search queries, and session durations. Useful operationally for IT and engagement tracking, but limited in educational meaning.
              </p>
              <span className="text-[9px] font-mono text-[var(--color-taupe-400)] block pt-1 border-t border-[var(--color-border-subtle)]">
                Operational Metric Only
              </span>
            </div>

            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
              <div className="text-[10px] font-mono text-[var(--accent-blue)] uppercase font-bold">Tier 2</div>
              <div className="text-xs font-bold text-white">Developmental Activity</div>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                Comparing entry requirements across routes, logging project evidence in Career Passport, and preparing structured questions for human counselors.
              </p>
              <span className="text-[9px] font-mono text-[var(--accent-blue)] block pt-1 border-t border-[var(--color-border-subtle)]">
                Student Learning Signal
              </span>
            </div>

            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
              <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Tier 3</div>
              <div className="text-xs font-bold text-white">Program Outcome</div>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                Broader multi-pathway awareness across cohorts, balanced event attendance across sectors, and well-informed post-16/post-18 transition planning.
              </p>
              <span className="text-[9px] font-mono text-emerald-400 block pt-1 border-t border-[var(--color-border-subtle)]">
                Institutional Quality Goal
              </span>
            </div>

            <div className="p-4 bg-[var(--color-surface-base)] border border-amber-500/30 rounded space-y-2">
              <div className="text-[10px] font-mono text-amber-300 uppercase font-bold">Tier 4</div>
              <div className="text-xs font-bold text-white">Longitudinal Trajectory</div>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                Post-secondary destination completion, apprenticeship progression, and long-term career satisfaction. Must be evaluated with rigorous attribution care.
              </p>
              <span className="text-[9px] font-mono text-amber-300 block pt-1 border-t border-[var(--color-border-subtle)]">
                Multi-Factor Attribution
              </span>
            </div>

          </div>

          <div className="p-3.5 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded text-xs font-serif italic text-[var(--color-taupe-300)]">
            &ldquo;The farther an outcome sits from the platform interaction, the more careful and honest attribution needs to become.&rdquo;
          </div>
        </section>

        {/* ── SECTION 04: PATHWAY EXPLORATION (INTERACTION 01) ──────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 04 · Multi-Pathway Exploration</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Are students seeing the full range of routes available to them?
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career guidance should break down default assumptions by placing degree apprenticeships, technical trades, vocational colleges, and university degrees on architectural parity. Explore cohort pathway distributions below.
            </p>
          </div>

          <PathwayExposureInteraction />
        </section>

        {/* ── SECTION 05: CAREER EXPLORATION DEPTH ─────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 05 · Progression Framework</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Clicking on a career once is different from seriously exploring it.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Meaningful career development is an iterative progression. We track developmental depth across 5 clear milestones — without converting these stages into a rigid student score.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            {[
              {
                step: '01',
                name: 'Discovered',
                desc: 'Student identifies a previously unfamiliar career role or emerging industry sector.',
              },
              {
                step: '02',
                name: 'Explored',
                desc: 'Student reviews daily responsibilities, salary ranges, work environments, and required skills.',
              },
              {
                step: '03',
                name: 'Compared',
                desc: 'Student compares alternative educational routes (e.g. 4-year degree vs Level 6 degree apprenticeship).',
              },
              {
                step: '04',
                name: 'Researched',
                desc: 'Student inspects prerequisite qualifications, entry assessments, and application timelines.',
              },
              {
                step: '05',
                name: 'Action Taken',
                desc: 'Student logs a work experience goal, books a counselor appointment, or registers for a sector event.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[var(--accent-blue)] font-bold">
                    Step {st.step}
                  </div>
                  <div className="text-xs font-bold text-white">{st.name}</div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-tertiary)]">
            <strong className="text-white">Note: </strong>
            These engagement stages describe depth of inquiry only. They do not evaluate or grade the student&apos;s individual worth or capability.
          </div>
        </section>

        {/* ── SECTION 06: EVIDENCE BUILDING ────────────────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 06 · Tangible Capability Documentation</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Career education should leave students with something they can carry forward.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career Passport enables students to capture verifiable evidence of capability — from coding capstones and engineering builds to part-time jobs and volunteering. Schools can track whether careers education results in tangible professional artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'Project Evidence', detail: 'Capstone projects, research papers, design portfolios, coding repositories' },
              { type: 'Work Experience', detail: 'Internship journals, employer placements, part-time jobs, shadowing reflections' },
              { type: 'Volunteering & Community', detail: 'Youth leadership roles, community initiatives, peer mentoring records' },
              { type: 'Verifiable Credentials', detail: 'Course certifications, first aid badges, technical training micro-credentials' },
            ].map((ev, idx) => (
              <div key={idx} className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
                <div className="text-xs font-bold text-white">{ev.type}</div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{ev.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
            <strong className="text-white">Evidence Principle: </strong>
            &ldquo;Evidence volume is not human value. Context matters.&rdquo; A student with two deeply documented project artifacts is not automatically &ldquo;behind&rdquo; a student with five superficial items.
          </div>
        </section>

        {/* ── SECTION 07: HUMAN SUPPORT AS AN OUTCOME ──────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 07 · Advising Impact</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Good outcomes include knowing when a student needs a person.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Career OS does not define success as &ldquo;the student never needed human advice.&rdquo; On the contrary, empowering a young person to formulate sharp questions and proactively request 1:1 time with a school counselor is one of the highest-value outcomes of our platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <strong className="text-white block">Pre-Meeting Briefs</strong>
              Counselors receive pre-synthesized topic briefs, eliminating routine discovery.
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <strong className="text-white block">Student-Led Inquiries</strong>
              Students flag specific dilemmas (e.g. balancing coursework vs apprenticeship applications).
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <strong className="text-white block">Action Accountability</strong>
              Agreed milestones from human appointments are tracked to completion.
            </div>
          </div>
          <div className="pt-2">
            <Link href={ROUTES.SCHOOLS_EDUCATORS} className="text-xs font-semibold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
              <span>Explore the Educator Advising Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ── SECTION 08: CAREER EVENTS & EMPLOYER EXPOSURE ────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 08 · Event Calendar Intelligence</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Career events matter more when you can see what they connect to.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Schools host dozens of career fairs, employer presentations, and alumni talks every year. Career OS helps institutions audit whether their event calendar provides balanced exposure across green energy, healthcare, trades, and computing — or disproportionately over-indexes on traditional corporate finance and law.
          </p>
          <div className="pt-1">
            <Link href={ROUTES.EVENTS} className="text-xs font-semibold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
              <span>View the Career OS Events Platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ── SECTION 09: EQUITY OF EXPOSURE WITHOUT PROFILING ─────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 09 · Ethical Equity</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Ask whether opportunity is visible — without deciding what a student should become.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Schools legitimately want to ensure that high-quality career guidance reaches every student regardless of background. However, Career OS strictly rejects algorithmic profiling: we never generate race-based career predictions, gendered recommendations, or demographic &ldquo;suitability scores&rdquo;.
          </p>
          <div className="p-3.5 bg-amber-950/30 border border-amber-600/30 rounded text-xs text-amber-300 leading-relaxed">
            <strong>Algorithmic Non-Discrimination:</strong> Protected characteristics must never be used to narrow career possibilities or predict student destinies. All demographic analysis requires separate institutional privacy and ethical AI review.
          </div>
        </section>

        {/* ── SECTION 10: POST-SCHOOL DESTINATIONS ─────────────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 10 · Longitudinal Transition</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            The transition out of school matters — but Career OS should not claim credit for everything that happens next.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Where legitimately and legally available, destination trends provide valuable context on program effectiveness. However, Career OS strictly separates destination data (what happened) from causal responsibility (why it happened), avoiding unsubstantiated commercial claims.
          </p>
        </section>

        {/* ── SECTION 11: LONGER-TERM CAREER CONTINUITY ────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 11 · Sovereign Learner Ownership</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            A school&apos;s outcomes window ends earlier than the student&apos;s career.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            When students graduate, their Career Passport evidence and verified achievements transition to their personal sovereign account. Schools retain archived records under institutional data policies, but do not maintain permanent surveillance over former students&apos; adult working lives.
          </p>
          <div className="p-3.5 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded text-xs font-serif italic text-[var(--color-taupe-300)]">
            &ldquo;Long-term career continuity belongs to the individual career relationship — not permanent institutional visibility.&rdquo;
          </div>
        </section>

        {/* ── SECTION 12: NO CAREER READINESS SCORE ────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-red-500/30 rounded-[var(--radius-card)] space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-red-400 uppercase font-bold tracking-wider">
              Section 12 · Architectural Rejection of Composite Scoring
            </span>
            <h2 className="text-headline-editorial text-white">
              Career readiness is too complex for one number.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS strictly prohibits the creation of single &ldquo;career-readiness scores&rdquo;, employability ratings, or predictive career destiny percentages. Collapsing human complexity into one number creates false scientific authority, reinforces bias, and disempowers students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-4 bg-[var(--color-surface-base)] border border-red-500/20 rounded space-y-1">
              <span className="text-red-400 font-bold block">✕ No Employability Scores</span>
              We reject scoring a teenager&apos;s future employment probability.
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-red-500/20 rounded space-y-1">
              <span className="text-red-400 font-bold block">✕ No Student Rankings</span>
              We do not rank students against peers or assign percentile tiers.
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-red-500/20 rounded space-y-1">
              <span className="text-red-400 font-bold block">✕ No Deficit Labeling</span>
              Changing career goals is treated as healthy development, not &ldquo;falling behind&rdquo;.
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-red-500/20 rounded space-y-1">
              <span className="text-red-400 font-bold block">✕ No School League Tables</span>
              We do not rank school districts or counselor productivity.
            </div>
          </div>

          <div className="p-4 bg-[var(--background-dark-deep)] border border-emerald-500/30 rounded space-y-2">
            <div className="text-xs font-bold text-emerald-400 uppercase font-mono">
              The Dimensional Alternative: Explainable Indicators
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Instead of one reductive number, Career OS shows distinct, transparent dimensions: Pathway Exploration Breadth, Evidence Logged, Advising Briefs Prepared, and Action Milestones Completed.
            </p>
          </div>
        </section>

        {/* ── SECTION 13: SCHOOL-DEFINED OBJECTIVES (INTERACTION 02) ── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 13 · Institutional Autonomy</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Different schools should be able to define different program goals.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS does not enforce a rigid, top-down definition of success. A comprehensive high school, a technical academy, and a selective sixth form will each have distinct institutional priorities. Explore how our objective framework adapts below.
            </p>
          </div>

          <OutcomesObjectiveBuilder />
        </section>

        {/* ── SECTION 14: PROGRAM REVIEW LIFECYCLE ───────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 14 · Continuous Improvement Flywheel</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Data is useful when it changes what you do next.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Institutional intelligence creates a continuous feedback loop: setting objectives, delivering guidance activities, observing aggregate trends, identifying curriculum gaps, and adapting provision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 text-xs">
            {[
              { step: '01', title: 'Define Goal', desc: 'Set institutional focus (e.g. apprenticeship reach)' },
              { step: '02', title: 'Deliver Activity', desc: 'Run careers events, lessons, and mentor tasks' },
              { step: '03', title: 'Observe Data', desc: 'Review aggregate exploration breadth across cohorts' },
              { step: '04', title: 'Educator Review', desc: 'Discuss trends in pastoral and counseling meetings' },
              { step: '05', title: 'Identify Gaps', desc: 'Notice under-explored sectors or late application timing' },
              { step: '06', title: 'Adapt Program', desc: 'Invite targeted employers and adjust advising slots' },
            ].map((f) => (
              <div key={f.step} className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1 flex flex-col justify-between">
                <div className="text-[10px] font-mono text-[var(--accent-blue)] font-bold">Phase {f.step}</div>
                <div className="text-xs font-bold text-white">{f.title}</div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 15: PRIVACY & OUTCOMES DATA ──────────────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 15 · Privacy-Preserving Analytics</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Institutional intelligence should use the least student data necessary.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Cohort analytics operate on aggregated, de-identified data. Private conversations with the AI Career Mentor and confidential personal reflections are strictly segregated and never exposed in institutional dashboards.
          </p>
          <div className="pt-1">
            <Link href={ROUTES.SCHOOLS_PRIVACY} className="text-xs font-semibold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
              <span>Review School Data Privacy Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ── SECTION 16: EXPORTING & REPORTING ─────────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 16 · Export &amp; Reporting</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Schools need to turn insight into reporting.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            We are designing straightforward export capabilities to support board presentations, governor reviews, and statutory careers framework audits (e.g. Gatsby Benchmarks in the UK or state accountability reports in the US) without administrative burden.
          </p>
        </section>

        {/* ── SECTION 17: WHAT CAREER OS SHOULD NOT CLAIM ─────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 17 · Honest Attribution Standard</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Measurement does not equal causation.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Career OS does not make manufactured marketing claims such as &ldquo;increased university admission by 35%&rdquo; or &ldquo;raised starting salaries by $12,000&rdquo;. A young person&apos;s life outcome is shaped by family, teachers, community, individual effort, and economic realities — not software alone.
          </p>
        </section>

        {/* ── SECTION 18: BUILDING THE EVIDENCE BASE ───────────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 18 · Research Roadmap</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Career OS should prove its own value over time.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            We intend to build an empirical evidence base through real school deployments, structured educator feedback, pre/post student exploration surveys, and independent academic evaluations — rather than manufacturing outcome claims before they exist.
          </p>
        </section>

        {/* ── SECTION 19: LAUNCH SCHOOL OUTCOMES PROGRAM ─────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.25)] rounded-[var(--radius-card)] space-y-5">
          <div className="space-y-2">
            <span className="section-label text-[var(--accent-blue)]">Section 19 · Early Adopter Collaboration</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Launch Schools can help define what meaningful outcomes should look like.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We invite forward-thinking school districts and academy trusts to partner with us as Launch Schools. Work directly with our product and data ethics teams to shape reporting standards that serve genuine educational needs.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-5 py-2.5 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Join the Launch School Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ── SECTION 20: COMPREHENSIVE FAQ ────────────────────────── */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 20 · Frequently Asked Questions</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Detailed answers for superintendents, careers leaders, and governors.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">1. What outcomes can Career OS reasonably measure?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS measures cohort exploration breadth, multi-pathway comparisons, Career Passport evidence items logged, counselor appointment preparation rates, and event sector exposure balance.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">2. Does Career OS assign students a career-readiness or employability score?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. We strictly reject composite employability ratings, student rankings, or automated readiness scores. We present separate, explainable developmental indicators instead.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">3. Does Career OS predict future salaries or career success?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Algorithmic predictions of future earnings or success probabilities create false scientific certainty and perpetuate historical biases.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">4. Can schools see which pathways students explore?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Schools can view anonymised, aggregated distributions showing how cohorts research university, degree apprenticeships, technical trades, and direct employment.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">5. How does Career OS define engagement depth?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Engagement depth tracks progression from discovery to detailed comparison, prerequisite analysis, and concrete action logging — distinguishing serious research from superficial clicks.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">6. Can counselors track student advising preparation?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Counselors receive structured briefs containing student-flagged discussion topics, enabling high-impact 1:1 meetings from the opening minute.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">7. Does Career OS rank schools or generate league tables?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. We do not compare or rank schools, districts, or counselor productivity. Institutional intelligence is private to each district.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">8. Does Career OS expose private student mentor chats in outcomes dashboards?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Private reflections and raw AI dialogues remain strictly segregated in the student&apos;s workspace and are never exposed to dashboards.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">9. Can schools create their own institutional objectives?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Our objective framework allows schools to configure priorities around pathway breadth, apprenticeship reach, evidence creation, or event balance.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">10. How are post-school destinations handled?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Destination trends are tracked at the cohort level where verified, while respecting attribution limits and avoiding unproven causal claims.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">11. What happens to student evidence when they leave school?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Passport artifacts persist seamlessly in the student&apos;s lifelong account, giving them portable proof of capability for university and work.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">12. How can our school get involved as an early launch partner?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Schools can apply through our Launch School Program to collaborate directly with our team on baseline configuration and reporting requirements.
              </p>
            </div>

          </div>
        </section>

        {/* ── CONCLUDING INSTITUTIONAL CTA ─────────────────────────── */}
        <section className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.25)] rounded-[var(--radius-card)] space-y-6 text-center max-w-3xl mx-auto">
          <div className="space-y-2">
            <span className="section-label text-[var(--accent-blue)]">Institutional Intelligence</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Measure whether career development is actually happening.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Career OS is designed to help schools understand exploration breadth, evidence creation, and human counseling engagement — while avoiding simplistic scores that pretend to predict a student&apos;s future.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-5 py-3 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-sm inline-flex items-center gap-1.5"
            >
              <span>Become a Launch School</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-5 py-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] hover:border-zinc-500 transition-colors"
            >
              Explore Career OS for High Schools →
            </Link>
            <Link
              href={ROUTES.SCHOOLS_PRIVACY}
              className="px-5 py-3 bg-transparent text-[var(--color-text-secondary)] hover:text-white text-xs font-semibold rounded-[var(--radius-button)] transition-colors"
            >
              Review School Privacy
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}
