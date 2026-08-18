import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Briefcase,
  Compass,
  CheckCircle2,
  TrendingUp,
  Shield,
  Layers,
  Award,
  GitBranch,
  LineChart,
  UserCheck,
  Building2,
  Globe2,
  Sparkles,
  Lock,
  Target,
  Clock,
  CompassIcon,
} from 'lucide-react';
import { ProfessionalMindsetInteractive } from '@/components/marketing/professionals/ProfessionalMindsetInteractive';
import { PromotionReadinessInteractive } from '@/components/marketing/professionals/PromotionReadinessInteractive';
import { CareerTransferExplorer } from '@/components/marketing/professionals/CareerTransferExplorer';
import { PrivacySimulator } from '@/components/marketing/professionals/PrivacySimulator';
import { ProfessionalFAQ } from '@/components/marketing/professionals/ProfessionalFAQ';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Development for Professionals: Progress, Change & Lead | Career OS',
  description:
    'Use Career OS to understand your professional strengths, build evidence, prepare for progression, explore career changes and plan what comes next throughout your working life.',
  alternates: {
    canonical: 'https://career-os.com/for/professionals',
  },
  openGraph: {
    title: 'Career Development for Professionals: Progress, Change & Lead | Career OS',
    description:
      'Use Career OS to understand your professional strengths, build evidence, prepare for progression, explore career changes and plan what comes next throughout your working life.',
    url: 'https://career-os.com/for/professionals',
    siteName: 'Career OS',
    type: 'website',
  },
};

export default function ForProfessionalsPage() {
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
        name: 'For Professionals',
        item: 'https://career-os.com/for/professionals',
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
        {/* Full-bleed Professional Intersection Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/professionals/professional_hero_intersection.jpg"
            alt="Experienced mid-career professional standing at a modern architectural intersection with emerging horizons for Executive Leadership, Precision Engineering, Global Operations, and Healthcare Strategy."
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

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs font-mono text-[var(--accent-blue)]">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>For Working Professionals &amp; Leaders</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={80}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
                    Don&apos;t wait until you need a new job to think about your career.
                    <CareerGradientText variant="blue" className="block font-sans text-2xl sm:text-3xl lg:text-4xl mt-2 font-normal">
                      Build the next move while you&apos;re still making this one count.
                    </CareerGradientText>
                  </h1>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={140}>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  Career OS gives you a Career Mentor, a growing professional context, an evidence record, and a clearer view of the paths available from where you are now.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="justify-center">
                    Start your Career OS <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="#career-drift" variant="secondary" size="lg" className="justify-center">
                    Explore the professional journey &darr;
                  </Button>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--color-text-tertiary)] font-mono">
                  <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free for individuals
                  </span>
                  <span className="text-[11px]">
                    Private context &bull; Independent of your employer&apos;s IT
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Card / Overview */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delayMs={120}>
                <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md shadow-2xl p-6 sm:p-7 space-y-4 border-beam-container border-beam-slow hover-lift card-interactive">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-semibold">
                      Your Current Role is One Point in a Larger Career
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Lifelong Career Compounding
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      Actively manage promotion milestones, lateral industry pivots, leadership development, or independent practice without starting over.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-[var(--color-surface-base)]/70 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                      <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Career Twin</span>
                      <p className="font-semibold text-white">Compound Context</p>
                    </div>
                    <div className="p-3 bg-[var(--color-surface-base)]/70 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                      <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Career Graph</span>
                      <p className="font-semibold text-white">Lateral Bridges</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: A CAREER CAN STALL QUIETLY ──────────────────── */}
      <section id="career-drift" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">Perspective</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Career drift rarely announces itself.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                You can spend years being productive, well-regarded, and reliable without necessarily building toward anything strategic. Responsibilities expand without titles changing, technical expertise compounds without capturing proof, and career reflection only happens when a reorganisation or crisis forces it.
              </p>
              <blockquote className="p-4 rounded bg-[var(--color-surface-base)] border-l-2 border-[var(--accent-blue)] text-sm italic text-[var(--color-text-primary)]">
                &ldquo;Being busy and progressing are not always the same thing.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)]">
                  Interactive Starting Point
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)]">
                  What are you trying to work out right now?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                  Select your primary career question to inspect how Career OS helps you evaluate it:
                </p>
              </div>

              <ProfessionalMindsetInteractive />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 03: KNOW WHERE YOU ACTUALLY STAND ───────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="section-label">Career Twin in Practice</span>
                  <h2 className="text-display-section text-[var(--color-text-primary)]">
                    Before deciding what comes next, understand what you&apos;ve already built.
                  </h2>
                  <p className="text-body-editorial text-[var(--color-text-secondary)]">
                    A professional career is vastly richer than a LinkedIn headline or a corporate job description. Career Twin deconstructs your actual responsibilities, delivered artifacts, client engagements, and team coordination to reveal your real underlying capability.
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

            {/* Context Deconstruction Visual */}
            <div className="lg:col-span-6">
              <ScrollReveal delayMs={100}>
                <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-5 hover-lift card-interactive">
                  <div className="space-y-1 pb-3 border-b border-[var(--color-border-default)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)]">Surface Label vs. True Context</span>
                    <h4 className="text-lg font-bold text-white">Job Title: Mechanical Engineer</h4>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      What Sits Underneath (Discovered by Career Twin):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                        <span className="font-semibold text-white block">Troubleshooting</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Root-cause fault isolation in 24/7 continuous operations</span>
                      </div>
                      <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                        <span className="font-semibold text-white block">Commercial Judgement</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Vendor warranty recovery and parts margin negotiations</span>
                      </div>
                      <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                        <span className="font-semibold text-white block">Project Ownership</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Led €1.2M plant line retrofit with zero safety incidents</span>
                      </div>
                      <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                        <span className="font-semibold text-white block">Mentoring &amp; Standards</span>
                        <span className="text-[11px] text-[var(--color-text-secondary)]">Onboarded and coached 4 junior technician apprentices</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs text-[var(--color-text-primary)]">
                    <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold block mb-1">Possible Future Value Unlocked:</span>
                    Senior Plant Operations Director &bull; Asset Reliability Consultant &bull; Field Operations VP
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: PROMOTION READINESS ─────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">Promotion Planning</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Promotion is often about the evidence you don&apos;t have yet.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Many professionals assume getting promoted requires another academic credential or waiting for annual appraisal cycles. In reality, leadership promotions stall because of missing operational evidence — such as documented delegation or direct budget accountability.
              </p>
            </div>
          </ScrollReveal>

          <PromotionReadinessInteractive />
        </div>
      </section>

      {/* ── SECTION 05: SPECIALIST OR MANAGER? ──────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Progression Architecture</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Progression doesn&apos;t have to mean managing people.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Too many organisations default to pushing top individual performers into people management. Career OS treats technical mastery, architectural oversight, and commercial ownership as equal, high-status progression tracks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              {
                track: 'Track 01',
                color: 'text-[var(--accent-blue)]',
                title: 'Deeper Specialism',
                desc: 'Principal contributor, technical fellow, subject-matter authority, or consulting specialist solving domain problems.',
              },
              {
                track: 'Track 02',
                color: 'text-emerald-400',
                title: 'People Leadership',
                desc: 'Team management, talent coaching, organizational culture, performance evaluation, and cross-functional leadership.',
              },
              {
                track: 'Track 03',
                color: 'text-purple-400',
                title: 'Commercial & Strategic',
                desc: 'Product leadership, revenue operations, business unit P&L ownership, and corporate strategic development.',
              },
              {
                track: 'Track 04',
                color: 'text-amber-400',
                title: 'Entrepreneurial',
                desc: 'Independent consulting practice, specialized agency, contracting enterprise, or launching an industry venture.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                  <span className={`font-mono text-[10px] uppercase font-bold ${item.color}`}>{item.track}</span>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: BUILD EVIDENCE WHILE YOU WORK ───────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="section-label">Career Passport</span>
                  <h2 className="text-display-section text-[var(--color-text-primary)]">
                    The strongest career record is built before you need to apply anywhere.
                  </h2>
                  <p className="text-body-editorial text-[var(--color-text-secondary)]">
                    Three years after delivering a major project, &ldquo;I think I worked on that&rdquo; is weak. Career Passport lets you log project ownership, delivered KPIs, regulatory audit approvals, and client testimonials in real time.
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

            {/* Evidence Timeline Visual */}
            <div className="lg:col-span-6">
              <ScrollReveal delayMs={100}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 hover-lift card-interactive">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
                    Evidence Compounding Over Time
                  </span>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border-l-2 border-emerald-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Year 1 &bull; Technical Delivery</span>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Artifact Logged</span>
                      </div>
                      <p className="text-[var(--color-text-secondary)]">Delivered automated testing suite reducing release regression by 34%.</p>
                    </div>

                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border-l-2 border-[var(--accent-blue)] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Year 2 &bull; Certification &amp; Governance</span>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Credential Verified</span>
                      </div>
                      <p className="text-[var(--color-text-secondary)]">Earned ISO Lead Auditor qualification; led facility compliance audit.</p>
                    </div>

                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border-l-2 border-purple-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Year 3 &bull; Mentorship &amp; People</span>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Endorsement Added</span>
                      </div>
                      <p className="text-[var(--color-text-secondary)]">Mentored 3 junior engineers to successful mid-level promotion.</p>
                    </div>

                    <div className="p-3 rounded bg-[var(--color-surface-raised)] border-l-2 border-amber-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Year 4 &bull; Commercial Impact</span>
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Outcome Recorded</span>
                      </div>
                      <p className="text-[var(--color-text-secondary)]">Renegotiated supplier contracts saving €180k annually.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: SALARY & NEGOTIATION ────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Compensation Strategy</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Salary conversations are easier when they&apos;re based on more than a feeling.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                The goal is not to promise arbitrary salary jumps, but to help you structure a rigorous, evidence-grounded review conversation anchored in delivered business outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              {
                num: '01. Expanded Scope',
                color: 'text-[var(--accent-blue)]',
                title: 'What Has Changed?',
                desc: 'Document how your direct responsibilities, headcount, or technical footprint have grown since your salary was set.',
              },
              {
                num: '02. Delivered Value',
                color: 'text-emerald-400',
                title: 'Demonstrable Proof',
                desc: 'Assemble delivered revenue, cost-avoidance, safety milestones, or team efficiency gains from your Career Passport.',
              },
              {
                num: '03. Market Context',
                color: 'text-purple-400',
                title: 'Realistic Benchmarks',
                desc: 'Evaluate external market dynamics and regional compensation trends without relying on unverified estimates.',
              },
              {
                num: '04. The Proposal',
                color: 'text-amber-400',
                title: 'Structured Ask',
                desc: 'Present a collaborative package covering base salary, development budget, equity, or title realignment.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                  <span className={`font-mono text-[10px] uppercase font-bold ${item.color}`}>{item.num}</span>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: CAREER CHANGE ───────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Career Change &amp; Pivots</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Changing direction doesn&apos;t mean discarding everything you&apos;ve built.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career Graph evaluates the core functional capabilities behind your work rather than matching surface job titles. Select a background below to inspect how underlying skills translate into adjacent industries:
              </p>
            </div>
          </ScrollReveal>

          <CareerTransferExplorer />
        </div>
      </section>

      {/* ── SECTION 09: PASSIVE OPPORTUNITY AWARENESS ────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Opportunity Intelligence</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                You can be happy where you are and still understand what else exists.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career awareness and active job hunting are entirely different postures. Career OS is being designed so you can maintain quiet market intelligence without broadcasting your intent to recruiters or your current employer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { title: 'Not Actively Looking', sub: 'Focus on current role' },
              { title: 'Open to Exceptional', sub: 'High-bar threshold only' },
              { title: 'Actively Exploring', sub: 'Targeted transition' },
              { title: 'Evaluating Ventures', sub: 'Independent practice' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 60}>
                <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover-lift card-interactive h-full">
                  <span className="text-xs font-semibold text-white block">{item.title}</span>
                  <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">{item.sub}</span>
                </div>
              </ScrollReveal>
            ))}
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

      {/* ── SECTION 10: LEADERSHIP DEVELOPMENT ──────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Leadership Architecture</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                The skills that made you excellent at the work may not be the skills you need to lead it.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Leadership is a distinct discipline requiring delegation, difficult conversations, team psychological safety, and executive influence. Career Mentor provides a safe, confidential environment to rehearse critical leadership moments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {[
              {
                num: 'Leadership Dimension 01',
                color: 'text-[var(--accent-blue)]',
                title: 'Delegation Without Abdication',
                desc: 'Learn to step back from tactical execution and establish clear decision-rights boundaries, feedback milestones, and quality guardrails.',
              },
              {
                num: 'Leadership Dimension 02',
                color: 'text-emerald-400',
                title: 'Navigating Underperformance',
                desc: 'Rehearse structuring candid, compassionate performance interventions with clear measurable milestones before formal HR escalation.',
              },
              {
                num: 'Leadership Dimension 03',
                color: 'text-purple-400',
                title: 'Executive Presence & Influence',
                desc: 'Translate technical department metrics into strategic enterprise risk and commercial ROI language suitable for executive boardrooms.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                  <span className={`text-[10px] font-mono uppercase font-bold ${item.color}`}>{item.num}</span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: REDUNDANCY & CAREER SHOCK ────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Resilience</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Sometimes the next move isn&apos;t your choice.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Corporate restructuring, industry contractions, or role eliminations happen. Maintaining Career OS throughout your career ensures you never have to reconstruct your professional story from scratch during moments of acute pressure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover-lift card-interactive">
              <div className="space-y-1 max-w-2xl">
                <h4 className="text-base font-semibold text-white">Your Pre-Assembled Professional Record</h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Because your Career Twin and Passport records reside in your personal account, your achievements, endorsements, and project briefs remain instantly accessible.
                </p>
              </div>
              <Link
                href={ROUTES.PATHWAYS_CAREER_CHANGE}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs font-mono text-white hover:border-white transition-colors shrink-0"
              >
                Career Transition Pathways &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 12: RETURNING AFTER A CAREER BREAK ───────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Career Returners</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Time away from work doesn&apos;t erase what came before it.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Whether stepping away for caregiving, health recovery, extended sabbatical, or military transition, Career OS treats your foundational expertise with dignity and helps you identify focused refresher bridges.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {[
              {
                title: 'Audit Accumulated Experience',
                desc: 'Re-evaluate multi-year pre-break projects and enduring domain capabilities.',
              },
              {
                title: 'Targeted Refresher Bridges',
                desc: 'Isolate newly introduced software standards or regulatory certifications needed.',
              },
              {
                title: 'Re-Entry Narrative',
                desc: 'Structure your re-entry pitch with confidence, framing your break accurately.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5 hover-lift card-interactive h-full">
                  <span className="font-bold text-white block">{item.title}</span>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: INTERNATIONAL CAREERS ───────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Global Mobility</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your next career move may not be in the same country.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS is developing global career intelligence to help professionals understand how their qualifications, licenses, and years of experience translate across international borders and regulatory jurisdictions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] space-y-2 hover-lift card-interactive">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Globe2 className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>International Intelligence Framework (In Development)</span>
              </div>
              <p>
                Career OS helps surface the questions that matter: professional licensing reciprocity, visa sponsorship qualification thresholds, and regional cost-of-living parity — without replacing formal legal or immigration advice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 14: ENTREPRENEURSHIP & INDEPENDENT PRACTICE ──────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Entrepreneurship</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your next career move might not be another employer.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Leaving employment to start an independent consulting firm, specialized trade contracting business, or industry venture is a natural career evolution.
              </p>
            </div>
          </ScrollReveal>

          {/* Employee to Founder Progression Visual */}
          <ScrollReveal delayMs={100}>
            <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6 hover-lift card-interactive">
              <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider block">
                The Employee-to-Founder Transition Framework
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
                <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-[var(--color-taupe-300)] block font-bold">01. EXPERIENCE</span>
                  <span className="text-[11px] text-white">Domain mastery</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-[var(--color-taupe-300)] block font-bold">02. PROBLEM</span>
                  <span className="text-[11px] text-white">Unsolved bottleneck</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-[var(--accent-blue)] block font-bold">03. COMMERCIAL</span>
                  <span className="text-[11px] text-white">Pricing &amp; offering</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-emerald-400 block font-bold">04. VALIDATION</span>
                  <span className="text-[11px] text-white">First client proof</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-purple-400 block font-bold">05. TRANSITION</span>
                  <span className="text-[11px] text-white">Independent launch</span>
                </div>
                <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                  <span className="font-mono text-[10px] text-amber-400 block font-bold">06. SCALE</span>
                  <span className="text-[11px] text-white">Sustainable business</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={ROUTES.PATHWAYS_ENTREPRENEURSHIP}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:underline"
                >
                  Explore Entrepreneurship Pathway &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 15: PRIVACY AT WORK ─────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">Workplace Privacy</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your private career plans should remain separate from your employer-facing profile.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Being employed by an organization does not make that organization the owner of your career thinking. Your compensation ambitions, exit timing, and Mentor discussions remain strictly sealed in your private account.
              </p>
            </div>
          </ScrollReveal>

          <PrivacySimulator />
        </div>
      </section>

      {/* ── SECTION 16: ONE CAREER OS ACROSS EMPLOYERS ──────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Lifelong Portability</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your career should not reset when your company email stops working.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Corporate HR systems and intranet profiles belong to employers. Career OS belongs to you. Your Career Twin, Passport evidence, and Mentor memory travel with you across every promotion, company switch, and chapter of your working life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-xs">
            {[
              { label: 'Employer A', title: 'First Role', color: 'text-[var(--color-taupe-300)]' },
              { label: 'Employer B', title: 'Specialist', color: 'text-[var(--accent-blue)]' },
              { label: 'Employer C', title: 'Senior Lead', color: 'text-emerald-400' },
              { label: 'Employer D', title: 'Director', color: 'text-purple-400' },
              { label: 'Venture', title: 'Founder', color: 'text-amber-400' },
              { label: 'Lifelong', title: 'Continuous', color: 'text-[var(--color-taupe-300)]' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 50}>
                <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover-lift card-interactive h-full">
                  <span className={`text-[10px] font-mono block ${item.color}`}>{item.label}</span>
                  <span className="font-semibold text-white">{item.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 17: PROFESSIONAL EXAMPLE JOURNEYS ───────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Career Journeys</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Different professionals. Deliberate trajectories.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Here is how four experienced professionals use Career OS to navigate complex career compounding:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] mb-8 hover-lift card-interactive">
              <Image
                src="/media/professionals/professional_pathways_collective.jpg"
                alt="Four distinct mid-career professionals: technical engineering specialist, healthcare operations leader, corporate risk director, and military logistics veteran in a modern architectural boardroom."
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Marcus',
                role: 'Technical Lead',
                color: 'text-amber-400',
                desc: 'Started in automotive diagnostic bays. Used Career Twin to highlight electrical telemetry mastery, transitioning into field engineering before launching an independent robotics maintenance firm.',
              },
              {
                name: 'Elena',
                role: 'Healthcare Operations',
                color: 'text-emerald-400',
                desc: 'Senior intensive care specialist nurse who transitioned into clinical operations director. Built evidence of ward flow optimization to lead digital health implementations.',
              },
              {
                name: 'David',
                role: 'Corporate Strategy',
                color: 'text-[var(--accent-blue)]',
                desc: 'Commercial litigation associate who leveraged analytical rigor and negotiation proof points to pivot into enterprise risk governance and executive board advisory.',
              },
              {
                name: 'James',
                role: 'Logistics Veteran',
                color: 'text-purple-400',
                desc: 'Military logistics warrant officer who translated theater supply chain and crisis routing credentials into global freight operations leadership across civilian ports.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{item.name}</span>
                    <span className={`text-[10px] font-mono ${item.color}`}>{item.role}</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            Illustrative professional journeys — demonstrating deliberate capability compounding.
          </p>
        </div>
      </section>

      {/* ── SECTION 18: FAQ ─────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Questions Answered</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Frequently Asked Questions
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Clear, transparent answers about how Career OS supports working professionals throughout their careers.
              </p>
            </div>
          </ScrollReveal>

          <ProfessionalFAQ />
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] relative overflow-hidden">
        <div className="container-editorial">
          <ScrollReveal direction="none">
            <div className="max-w-4xl mx-auto text-center space-y-8 py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-text-primary)] font-normal">
                Your career is already moving.
                <span className="block mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl text-[var(--color-text-secondary)]">
                  Make sure you&apos;re moving it deliberately.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Build the context, evidence, and direction behind your next stage — whether that means progressing where you are, changing course, or eventually building something of your own.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="w-full sm:w-auto px-8">
                  Start your Career OS — Free
                </Button>
                <Button href={ROUTES.PRODUCT_HOW_IT_WORKS} variant="secondary" size="lg" className="w-full sm:w-auto">
                  See how Career OS works &rarr;
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
