import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Sparkles,
  Compass,
  FileCheck2,
  GitBranch,
  Shield,
  Layers,
  GraduationCap,
  Briefcase,
  Wrench,
  Stethoscope,
  Building2,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { StudentMindsetInteractive } from '@/components/marketing/students/StudentMindsetInteractive';
import { StudentCareerExplorer } from '@/components/marketing/students/StudentCareerExplorer';
import { StudentPathwayComparison } from '@/components/marketing/students/StudentPathwayComparison';
import { StudentFAQ } from '@/components/marketing/students/StudentFAQ';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Guidance for Students: Explore Careers & Pathways | Career OS',
  description:
    'Explore careers, compare university, apprenticeships and other pathways, build evidence and get AI-powered career guidance with Career OS for students.',
  alternates: {
    canonical: 'https://career-os.com/for/students',
  },
  openGraph: {
    title: 'Career Guidance for Students: Explore Careers & Pathways | Career OS',
    description:
      'Explore careers, compare university, apprenticeships and other pathways, build evidence and get AI-powered career guidance with Career OS for students.',
    url: 'https://career-os.com/for/students',
    siteName: 'Career OS',
    type: 'website',
  },
};

export default function ForStudentsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://career-os.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'For Students',
        item: 'https://career-os.com/for/students',
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── SECTION 01: HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        {/* Full-bleed Student Futures Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/students/student_hero_futures.jpg"
            alt="Young student looking forward with diverse vocational pavilions behind: bioresearch, aerospace engineering, design studio, skilled electrical trades, and healthcare simulation."
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />

          {/* Editorial Scrim: Charcoal Wash on Left for Ultra-Crisp Legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #222222 0%, rgba(34, 34, 34, 0.96) 38%, rgba(34, 34, 34, 0.88) 55%, rgba(34, 34, 34, 0.42) 78%, rgba(34, 34, 34, 0.18) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #222222 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, #222222 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs font-mono text-[var(--accent-blue)]">
                <Compass className="w-3.5 h-3.5" />
                <span>For Students &amp; Young People</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
                  You don&apos;t need your whole career figured out.
                  <CareerGradientText variant="blue" className="block font-sans text-2xl sm:text-3xl lg:text-4xl mt-2 font-normal">
                    You just need a better way to explore it.
                  </CareerGradientText>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Career OS gives you an AI Career Mentor, a growing Career Twin, evidence you can carry forward, and a clearer way to explore careers, education, apprenticeships, and first opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="justify-center">
                  Start your career <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="#not-knowing" variant="secondary" size="lg" className="justify-center">
                  See the student journey &darr;
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--color-text-tertiary)] font-mono">
                <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free for individuals
                </span>
                <span className="text-[11px]">
                  Direct accounts at 16+ &bull; Parent or school-supported access at 13–15
                </span>
              </div>
            </div>

            {/* Right Card / Overview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md shadow-2xl p-6 sm:p-7 space-y-4 border-beam-container border-beam-slow">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-semibold">
                    One Starting Point &bull; Many Possible Futures
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Equal Multi-Pathway Exploration
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Compare university degrees, degree apprenticeships, technical trades, and direct career entry without bias or forced algorithmic outcomes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-[var(--color-surface-base)]/70 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">AI Career Mentor</span>
                    <p className="font-semibold text-white">Personalised Guidance</p>
                  </div>
                  <div className="p-3 bg-[var(--color-surface-base)]/70 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Career Passport</span>
                    <p className="font-semibold text-white">Compound Evidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: NOT KNOWING IS NORMAL ────────────────────────── */}
      <section id="not-knowing" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">Perspective</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                &ldquo;I don&apos;t know yet&rdquo; is a perfectly useful place to start.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Most career advice expects you to arrive with a grand five-year plan. Career OS does not. Career exploration should narrow possibilities gradually through genuine discovery — not force a permanent, irreversible answer at 16 or 18.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)]">
                  Interactive Exploration
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)]">
                  What&apos;s on your mind right now?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                  Select your current situation below to see how Career OS supports your specific starting point:
                </p>
              </div>

              <StudentMindsetInteractive />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 03: MEET YOUR CAREER MENTOR ─────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="section-label">AI Career Mentor</span>
                  <h2 className="text-display-section text-[var(--color-text-primary)]">
                    Ask the career questions you&apos;d rather not guess at.
                  </h2>
                  <p className="text-body-editorial text-[var(--color-text-secondary)]">
                    Career Mentor is an AI system grounded in your structured Career OS context. It gives you an unhurried, private sounding board to test ideas, investigate unfamiliar industries, and compare options without judgment or bias.
                  </p>

                  <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
                    <span className="text-[11px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider block font-semibold">
                      Common Student Questions Explored:
                    </span>
                    <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-blue)]">&bull;</span>
                        &ldquo;What careers use biology but aren&apos;t medicine?&rdquo;
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-blue)]">&bull;</span>
                        &ldquo;Would an apprenticeship suit me better than university?&rdquo;
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-blue)]">&bull;</span>
                        &ldquo;What could I do with maths and design?&rdquo;
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-blue)]">&bull;</span>
                        &ldquo;I&apos;m good academically but don&apos;t want an office career. What else exists?&rdquo;
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-blue)]">&bull;</span>
                        &ldquo;I think I&apos;ve chosen the wrong course. What now?&rdquo;
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] hover:underline"
                    >
                      Meet the AI Career Mentor &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Illustrative Mentor Session Panel */}
            <div className="lg:col-span-7">
              <ScrollReveal delayMs={100}>
                <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 hover-lift card-interactive">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-default)]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-center text-[var(--accent-blue)]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">AI Career Mentor</h4>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative Student Dialogue</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
                      Zero Match Scores
                    </span>
                  </div>

                  {/* Chat Dialogue */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 text-[10px] font-mono flex items-center justify-center text-white shrink-0 mt-0.5">
                        You
                      </div>
                      <div className="p-3.5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed max-w-xl">
                        &ldquo;I like problem-solving, practical work and technology, but I don&apos;t want to sit behind a desk all day. What should I be looking at?&rdquo;
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-[10px] font-mono flex items-center justify-center text-[var(--accent-blue)] shrink-0 mt-0.5">
                        AI
                      </div>
                      <div className="p-4 rounded-lg bg-[var(--color-surface-base)] border border-[var(--accent-blue-border)] text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed space-y-3 max-w-xl">
                        <p>
                          Before picking a single job title, let&apos;s look at career environments where those three strengths overlap:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1">
                            <span className="font-semibold text-[var(--color-text-primary)] block">Field &amp; Systems Engineering</span>
                            <span className="text-[11px] text-[var(--color-text-secondary)]">On-site infrastructure, robotics diagnostics, renewable power grids.</span>
                          </div>
                          <div className="p-2.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1">
                            <span className="font-semibold text-[var(--color-text-primary)] block">Precision Aerospace &amp; Marine</span>
                            <span className="text-[11px] text-[var(--color-text-secondary)]">Aircraft propulsion, advanced manufacturing, telemetry systems.</span>
                          </div>
                        </div>
                        <div className="space-y-1 text-xs text-[var(--color-text-secondary)] pt-1 border-t border-[var(--color-border-subtle)]">
                          <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-semibold block">What we explore next:</span>
                          <p>1. Compare Degree Apprenticeship vs. University BEng routes.</p>
                          <p>2. Review your current Maths and Physics / DT coursework projects.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] text-[var(--color-text-tertiary)] font-mono">
                    AI Mentor provides guidance and structured exploration. It is not human therapy, legal counsel, or a guarantee of employment.
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: CAREER GRAPH EXPLORER ───────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Career Graph</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Start with possibilities, not a shortlist somebody else gave you.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career Graph connects core interests, school subjects, and practical skills to hundreds of real-world career families. It is built to widen your horizon before narrowing your direction.
              </p>
            </div>
          </ScrollReveal>

          <StudentCareerExplorer />
        </div>
      </section>

      {/* ── SECTION 05: THERE IS MORE THAN ONE ROUTE ────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Pathway Dignity</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                University is a route. It isn&apos;t the route.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS treats degree education, degree apprenticeships, technical colleges, skilled trades, direct employment, and military service with equal respect. We help you compare routes based on where they actually lead — not rank them by social prestige.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScrollReveal delayMs={0}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">University &amp; College</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Crucial where formal academic degrees, professional credentials, or foundational research are statutory requirements.
                  </p>
                </div>
                <Link href={ROUTES.PATHWAYS_UNIVERSITY} className="text-xs font-mono text-[var(--accent-blue)] hover:underline inline-block pt-2">
                  Explore University Route &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Apprenticeships &amp; Degree Apprenticeships</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Earn a salary while completing accredited qualifications with zero tuition debt and deep practical workplace immersion.
                  </p>
                </div>
                <Link href={ROUTES.PATHWAYS_APPRENTICESHIPS} className="text-xs font-mono text-emerald-400 hover:underline inline-block pt-2">
                  Explore Apprenticeships &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Skilled Trades &amp; Technical</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Licensed electrical, mechanical, plumbing, and precision fabrication roles with strong early earnings and independent business pathways.
                  </p>
                </div>
                <Link href={ROUTES.PATHWAYS_TRADES} className="text-xs font-mono text-amber-400 hover:underline inline-block pt-2">
                  Explore Skilled Trades &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-4 pt-6">
            <ScrollReveal>
              <h3 className="text-xl font-serif text-[var(--color-text-primary)]">
                Compare Multiple Routes to the Same Career Family
              </h3>
            </ScrollReveal>
            <StudentPathwayComparison />
          </div>
        </div>
      </section>

      {/* ── SECTION 06: BUILD EXPERIENCE BEFORE "EXPERIENCE" ───────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Early Evidence</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your first evidence can start before your first career job.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                The biggest paradox for young people is being asked for experience before getting hired. Career OS helps you record and structure the genuine capability you already have.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delayMs={0}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 hover-lift card-interactive h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)]">
                    Evidence Source 01
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    School &amp; College Projects
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Design coursework, science experiments, coding scripts, presentations, and technical briefs demonstrate real applied methodology and technical reasoning.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[var(--color-taupe-300)] bg-[var(--color-surface-raised)] p-2.5 rounded border border-[var(--color-border-default)]">
                  Proves: Technical logic &bull; Delivery &bull; Research
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 hover-lift card-interactive h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    Evidence Source 02
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    Part-Time Jobs &amp; Volunteering
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Weekend retail, hospitality, tutoring, or community support prove punctuality, customer communication, conflict resolution, and working under pressure.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[var(--color-taupe-300)] bg-[var(--color-surface-raised)] p-2.5 rounded border border-[var(--color-border-default)]">
                  Proves: Reliability &bull; People skills &bull; Accountability
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 hover-lift card-interactive h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">
                    Evidence Source 03
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    Extracurriculars &amp; Competitions
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Sports team captaincy, hackathons, robotics clubs, Duke of Edinburgh, and creative portfolios demonstrate perseverance and self-directed drive.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[var(--color-taupe-300)] bg-[var(--color-surface-raised)] p-2.5 rounded border border-[var(--color-border-default)]">
                  Proves: Leadership &bull; Initiative &bull; Teamwork
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: START YOUR CAREER TWIN ──────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="section-label">Career Twin</span>
                  <h2 className="text-display-section text-[var(--color-text-primary)]">
                    Start with what you&apos;ve already built.
                  </h2>
                  <p className="text-body-editorial text-[var(--color-text-secondary)]">
                    Career Twin begins simply: your subjects, your interests, your projects, and your early work preferences. As you complete courses, earn qualifications, and gain experience, your Twin evolves automatically — becoming your personal career intelligence model.
                  </p>
                  <div className="pt-2">
                    <Link
                      href={ROUTES.PRODUCT_CAREER_TWIN}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] hover:underline"
                    >
                      Explore Career Twin Architecture &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Lifecycle Evolution Visual */}
            <div className="lg:col-span-6">
              <ScrollReveal delayMs={100}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4 hover-lift card-interactive">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] block font-semibold">
                    Evolution Across Your Working Life
                  </span>
                  <div className="space-y-3">
                    <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--accent-blue-border)] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-mono">Stage 1: Student (Ages 16–19)</span>
                        <span className="text-[10px] font-mono text-[var(--accent-blue)]">Current Starting Point</span>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Subjects &bull; Coursework projects &bull; Hobbies &bull; Part-time work &bull; Pathway exploration
                      </p>
                    </div>

                    <div className="flex justify-center text-[var(--color-taupe-300)]">&darr;</div>

                    <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1 opacity-80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-mono">Stage 2: Early Career (Ages 20–24)</span>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Future Growth</span>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Apprenticeship evidence &bull; Degree completion &bull; First workplace projects &bull; Technical certifications
                      </p>
                    </div>

                    <div className="flex justify-center text-[var(--color-taupe-300)]">&darr;</div>

                    <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1 opacity-60">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-mono">Stage 3: Professional &amp; Beyond</span>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Lifelong Continuity</span>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Leadership capability &bull; Career pivots &bull; Senior management &bull; Independent ventures
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: CAREER PASSPORT ─────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="section-label">Career Passport</span>
                  <h2 className="text-display-section text-[var(--color-text-primary)]">
                    Keep the evidence that would otherwise get forgotten.
                  </h2>
                  <p className="text-body-editorial text-[var(--color-text-secondary)]">
                    A Career Passport can start small. Its value compounds as your evidence grows. Rather than an empty one-page résumé, your Passport holds verified records, project links, certificates, and supervisor feedback you can carry anywhere.
                  </p>
                  <div className="pt-2">
                    <Link
                      href={ROUTES.PRODUCT_CAREER_PASSPORT}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:underline"
                    >
                      Explore Career Passport &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Illustrative Passport Record Card */}
            <div className="lg:col-span-6">
              <ScrollReveal delayMs={100}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 hover-lift card-interactive">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
                    <span className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-1.5 font-semibold">
                      <FileCheck2 className="w-4 h-4" /> Career Passport &bull; Student Record
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Self-Custodied
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-white block">GCSE / High School Diploma Courses</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Maths, English, Biology, Physics, Design Tech</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">Self-Recorded</span>
                    </div>

                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-white block">Renewable Energy Micro-Grid Prototype</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Regional Science &amp; Engineering Fair finalist</span>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--accent-blue)] font-semibold">Project Artifact</span>
                    </div>

                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-white block">Community Youth Group Volunteer Coordinator</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Organised weekly sessions for 30 junior members</span>
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 font-semibold">Experience Record</span>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
                    You own your Passport. You decide what to disclose to employers or educators when you apply.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: PREPARE FOR FIRST OPPORTUNITY ────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Application Readiness</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Knowing what you want is only half the job.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                When it is time to apply for an apprenticeship, college place, or first job, Career OS helps you translate your projects and experiences into clear evidence without needing to fabricate or exaggerate.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <ScrollReveal delayMs={0}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">01. Evidence Mapping</span>
                <h4 className="font-semibold text-white text-sm">Select Target Role Requirements</h4>
                <p className="text-[var(--color-text-secondary)]">Identify which of your coursework projects and experiences map to employer criteria.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">02. CV &amp; Bio Structuring</span>
                <h4 className="font-semibold text-white text-sm">Honest, Evidence-Backed CVs</h4>
                <p className="text-[var(--color-text-secondary)]">Highlight demonstrated accomplishments rather than generic buzzwords and filler text.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">03. Interview Rehearsal</span>
                <h4 className="font-semibold text-white text-sm">Practice Explaining Projects</h4>
                <p className="text-[var(--color-text-secondary)]">Rehearse articulating how you solved technical obstacles and worked in teams.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={240}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">04. Gap Identification</span>
                <h4 className="font-semibold text-white text-sm">Know What to Build Next</h4>
                <p className="text-[var(--color-text-secondary)]">Identify specific missing certifications or qualifications before sending applications.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: OPPORTUNITY DISCOVERY ───────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Opportunity Intelligence</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your first opportunity could take several forms.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS is being designed so opportunity discovery becomes a continuous part of your development — rather than a frantic search at the end of education.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <ScrollReveal delayMs={0}>
              <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover-lift card-interactive h-full">
                <span className="text-xs font-semibold text-white block">Apprenticeships</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Earn while learning</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover-lift card-interactive h-full">
                <span className="text-xs font-semibold text-white block">Internships</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Structured exposure</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={160}>
              <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover-lift card-interactive h-full">
                <span className="text-xs font-semibold text-white block">Work Experience</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Industry taster</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={240}>
              <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover-lift card-interactive h-full">
                <span className="text-xs font-semibold text-white block">Entry-Level Roles</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Direct career start</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="pt-2">
            <Link
              href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] hover:underline"
            >
              Explore Future Opportunity Agent Architecture &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: LIFETIME CONTINUITY ─────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Continuity</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Leave education. Keep building.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS is designed around the person — not the school or university you happen to attend today. When you graduate or change institutions, your account, evidence, and Mentor stay with you.
              </p>
            </div>
          </ScrollReveal>

          {/* Path Vector Lifecycle Visual */}
          <ScrollReveal delayMs={100}>
            <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 hover-lift card-interactive">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase text-[var(--accent-blue)] font-semibold">
                  Personal Lifelong Operating System
                </span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Continuous &bull; Not Tied to School IT</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-[var(--accent-blue)] block font-bold">01. EXPLORE</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Schools &amp; College</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-[var(--accent-blue)] block font-bold">02. CHOOSE</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Pathways</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-[var(--accent-blue)] block font-bold">03. PREPARE</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Applications</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-emerald-400 block font-bold">04. PROVE</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Evidence</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-emerald-400 block font-bold">05. START</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">First Job</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-purple-400 block font-bold">06. PROGRESS</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Promotion</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-amber-400 block font-bold">07. PIVOT</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Reinvent</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 12: PRIVACY & CONTROL ───────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Privacy by Design</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your career exploration shouldn&apos;t become public by default.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                When you tell your Mentor you are uncertain about a subject, dislike an industry, or are thinking of changing course, that private reflection is never shared with recruiters, employers, or scraped into ad profiles.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <ScrollReveal delayMs={0}>
              <div className="p-5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Private Mentor Space</span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Confidential thinking, career anxiety, and exploring alternate routes remain strictly in your private account context.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <div className="p-5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Controlled Evidence Sharing</span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  You explicitly choose which verified certificates or project artifacts are included when applying to an opportunity.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={160}>
              <div className="p-5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Zero Advertising Targeting</span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We never monetize your student exploration by selling behavioural data to predatory marketing or data brokers.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[var(--accent-blue)]">
            <Link href={ROUTES.LEGAL_STUDENT_TERMS} className="hover:underline">
              Student Terms &rarr;
            </Link>
            <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="hover:underline">
              Student Privacy Governance &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: AGE & SAFEGUARDING ──────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Account Eligibility</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Built differently for younger users.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS enforces clear access policies designed to safeguard minors and ensure compliant guardian or school involvement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delayMs={0}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-emerald-500/20 space-y-3 hover-lift card-interactive h-full">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Ages 16 and Over</span>
                <h3 className="text-base font-semibold text-white">Direct Individual Accounts</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Direct individual registration permitted under product policy. Users own and manage their Career Twin and Passport records.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-3 hover-lift card-interactive h-full">
                <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase font-bold">Ages 13 to 15</span>
                <h3 className="text-base font-semibold text-white">School or Guardian Supported</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Access enabled through an approved institutional arrangement (such as a partner high school) or verified parent/guardian arrangement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-purple-500/20 space-y-3 hover-lift card-interactive h-full">
                <span className="text-[10px] font-mono text-purple-400 uppercase font-bold">Under Age 13</span>
                <h3 className="text-base font-semibold text-white">Institutional Arrangements Only</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  No open consumer registration. Supported strictly through authorized educational institutional agreements compliant with applicable child privacy laws.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[var(--color-taupe-300)]">
            <Link href={ROUTES.TRUST_SAFEGUARDING} className="text-[var(--accent-blue)] hover:underline">
              Safeguarding Commitments &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_PARENT_GUARDIAN} className="text-[var(--accent-blue)] hover:underline">
              Parent &amp; Guardian Notice &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: ILLUSTRATIVE PATHWAY JOURNEYS ────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Pathway Journeys</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Different students. Different futures.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Real career journeys rarely look like straight lines. Here is how four students use Career OS to navigate their exploration:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] mb-8 hover-lift card-interactive">
              <Image
                src="/media/students/student_pathway_avatars.jpg"
                alt="Four distinct diverse students in medical clinical lab coat, technical engineering gear, architecture design studio, and creative programming."
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ScrollReveal delayMs={0}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Maya</span>
                  <span className="text-[10px] font-mono text-emerald-400">Healthcare</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Interested in biological sciences and patient care but unsure about medical school. Explores paramedicine, physiotherapy, and healthcare physiology before selecting a degree apprenticeship route.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Jordan</span>
                  <span className="text-[10px] font-mono text-amber-400">Technical Trades</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Strong mechanical problem-solving ability. Rules out 3-year academic university. Explores industrial automation and electrical trades, landing a sponsored electrical engineering apprenticeship.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Alex</span>
                  <span className="text-[10px] font-mono text-[var(--accent-blue)]">Professional</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  High academic scores but uncertain about target industry. Uses Career Mentor to compare commercial law, economic policy, and corporate strategy, completing internships to narrow direction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={240}>
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Sam</span>
                  <span className="text-[10px] font-mono text-purple-400">Tech &amp; Creative</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Self-taught coder and digital creator. Uses Career Passport to store personal GitHub repositories and freelance design projects, building direct portfolio evidence for entry-level tech roles.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            Illustrative student pathways — demonstrating real-world exploration patterns.
          </p>
        </div>
      </section>

      {/* ── SECTION 15: FAQ ─────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Questions Answered</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Frequently Asked Questions
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Clear, transparent answers about how Career OS works for students and young people.
              </p>
            </div>
          </ScrollReveal>

          <StudentFAQ />
        </div>
      </section>

      {/* ── SECTION 16: FINAL CTA ───────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] relative overflow-hidden">
        <div className="container-editorial">
          <ScrollReveal direction="none">
            <div className="max-w-4xl mx-auto text-center space-y-8 py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-text-primary)] font-normal">
                You don&apos;t need to choose your whole future today.
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Start by understanding what interests you, what you&apos;ve already built, and what might be worth exploring next.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="w-full sm:w-auto px-8">
                  Start your career — Free
                </Button>
                <Button href={ROUTES.PRODUCT_HOW_IT_WORKS} variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore how Career OS works &rarr;
                </Button>
              </div>

              <div className="pt-8 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)] flex flex-wrap items-center justify-center gap-4">
                <span>Using Career OS through your school?</span>
                <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="text-[var(--accent-blue)] hover:underline">
                  Learn about Career OS for High Schools &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
