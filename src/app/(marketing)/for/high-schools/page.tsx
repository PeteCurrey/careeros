import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
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
  Briefcase
} from 'lucide-react';

import { HeroSchoolExperience } from '@/components/marketing/high-schools/HeroSchoolExperience';
import { CounselorAugmentationWorkflow } from '@/components/marketing/high-schools/CounselorAugmentationWorkflow';
import { InteractiveSchoolPathwayExplorer } from '@/components/marketing/high-schools/InteractiveSchoolPathwayExplorer';
import { StudentPassportPreview } from '@/components/marketing/high-schools/StudentPassportPreview';
import { InteractiveEducatorView } from '@/components/marketing/high-schools/InteractiveEducatorView';
import { InteractivePrivacyAccessViewer } from '@/components/marketing/high-schools/InteractivePrivacyAccessViewer';
import { SafeguardingArchitectureVisual } from '@/components/marketing/high-schools/SafeguardingArchitectureVisual';
import { SchoolOutcomesAggregateVisual } from '@/components/marketing/high-schools/SchoolOutcomesAggregateVisual';
import { SchoolImplementationRoadmap } from '@/components/marketing/high-schools/SchoolImplementationRoadmap';
import { SchoolLifetimeTransitionVisual } from '@/components/marketing/high-schools/SchoolLifetimeTransitionVisual';
import { LaunchSchoolForm } from '@/components/marketing/high-schools/LaunchSchoolForm';
import { HighSchoolsFAQ } from '@/components/marketing/high-schools/HighSchoolsFAQ';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';

export const metadata: Metadata = {
  title: 'Career Guidance for High Schools & Students | Career OS',
  description:
    'Career OS helps high schools expand student career exploration across university, apprenticeships, trades and employment while supporting educators, privacy and safeguarding.',
  alternates: {
    canonical: 'https://career-os.com/for/high-schools',
  },
  openGraph: {
    title: 'Career Guidance for High Schools & Students | Career OS',
    description:
      'Extend counseling capacity with individual student career mentors, multi-pathway parity, early evidence compounding, and strict institutional safeguarding.',
    url: 'https://career-os.com/for/high-schools',
    type: 'website',
  },
};

export default function HighSchoolsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Career OS for High Schools & Districts',
    description:
      'Institutional career guidance infrastructure providing AI Career Mentors, multi-pathway parity, student evidence records, and counselor workflow augmentation.',
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
          Every student deserves more than one career conversation.
          ============================================================ */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-24">
        {/* Scholastic Guidance Academy Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.audiences.schools.src}
            alt={MEDIA_ASSETS.audiences.schools.alt}
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
              background: `linear-gradient(to right, var(--color-surface-base) 0%, color-mix(in srgb, var(--color-surface-base) 96%, transparent) 38%, color-mix(in srgb, var(--color-surface-base) 88%, transparent) 55%, color-mix(in srgb, var(--color-surface-base) 42%, transparent) 78%, color-mix(in srgb, var(--color-surface-base) 18%, transparent) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, var(--color-surface-base) 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, var(--color-surface-base) 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="container-editorial relative z-10 space-y-16">
          <div className="max-w-4xl space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                <span className="section-label">
                  High Schools, Academy Trusts &amp; School Districts
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <h1 className="text-display-hero text-white">
                Every student deserves{' '}
                <CareerGradientText variant="blue">
                  more than one career conversation.
                </CareerGradientText>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={140}>
              <p className="text-headline-editorial text-[var(--color-text-secondary)] font-normal">
                Give your team the capacity to make career guidance continuous.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <p className="text-lead text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
                Career OS is being built to give students an individual Career Mentor, structured multi-pathway exploration, and an evidence record that develops over time—while helping schools support guidance, safeguarding, and student progression at institutional scale.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={260}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Button href="#launch-school-form" variant="primary" size="lg">
                  Become a Launch School <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  See how it works ↓
                </Button>
                <Button href={ROUTES.FOR_STUDENTS} variant="ghost" size="lg">
                  Career OS for Students →
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[var(--color-text-tertiary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Augments Counselors (Not Replaces)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F8FFF]" /> Equal Multi-Pathway Parity
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[var(--color-gold-base)]" /> Zero Commercial Minor Sourcing
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Dual-Perspective Product Stage */}
          <div className="pt-4">
            <HeroSchoolExperience />
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 02: THE CHALLENGE
          The number of pathways has grown. The school day hasn't.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                The Institutional Challenge
              </span>
              <h2 className="text-display-section text-white">
                The number of pathways has grown. The school day hasn&apos;t.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Secondary schools are being asked to prepare students for an economy transforming faster than the curriculum. At the same time, career teams work with strictly finite hours.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delayMs={0}>
              <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between hover-lift card-interactive h-full">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-[#6BB8FF] font-bold">
                    Challenge 01
                  </span>
                  <h3 className="text-lg font-serif font-medium text-white">
                    Exponential Pathway Complexity
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Students must navigate 4-year universities, community colleges, degree apprenticeships, vocational trades, emerging technical specialisms, and direct employment routes. No single counselor can manually track every changing entry requirement and regional employer opening in real time.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-border-subtle)] text-[11px] text-[var(--color-taupe-300)] font-mono">
                  Multi-pathway mapping required
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between hover-lift card-interactive h-full">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-[#2F8FFF] font-bold">
                    Challenge 02
                  </span>
                  <h3 className="text-lg font-serif font-medium text-white">
                    The Once-a-Year Advising Bottleneck
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Because counselor time is constrained, many students receive only 15–30 minutes of dedicated 1:1 career advising per academic year. Students often arrive unprepared, spending valuable time answering basic background questions rather than evaluating strategic decisions.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-border-subtle)] text-[11px] text-[var(--color-taupe-300)] font-mono">
                  Continuous exploration between sessions
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between hover-lift card-interactive h-full">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-[var(--color-gold-base)] font-bold">
                    Challenge 03
                  </span>
                  <h3 className="text-lg font-serif font-medium text-white">
                    Perception &amp; Status Silos
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Academic university routes have traditionally enjoyed structured marketing and systemic visibility, while high-value apprenticeships and technical trade careers remain opaque to families. Students frequently overlook high-paying technical options simply because they cannot easily compare them.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-border-subtle)] text-[11px] text-[var(--color-taupe-300)] font-mono">
                  Equal editorial parity standard
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delayMs={100}>
            <div className="p-6 bg-[var(--background-dark-deep)] border border-[rgba(47,143,255,0.22)] rounded-[var(--radius-card)] text-center max-w-3xl mx-auto space-y-2 hover-lift card-interactive">
              <p className="text-sm font-serif italic text-white leading-relaxed">
                &ldquo;The objective of Career OS is not fewer human conversations. It is better-prepared human conversations.&rdquo;
              </p>
              <span className="text-[11px] font-mono text-[#6BB8FF] uppercase tracking-wider block">
                Core Career OS Educational Proposition
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ============================================================
          SECTION 03: COUNSELOR AUGMENTATION WORKFLOW
          Give counselors more context before the conversation starts.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]" id="how-it-works">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                The Operating Model
              </span>
              <h2 className="text-display-section text-white">
                Give counselors more context before the conversation starts.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                AI helps prepare the context. Educators provide the human judgment, empathy, pastoral care, and understanding that technology cannot replace.
              </p>
            </div>
          </ScrollReveal>

          <CounselorAugmentationWorkflow />
        </div>
      </section>


      {/* ============================================================
          SECTION 04: THE STUDENT EXPERIENCE
          Give every student somewhere useful to start.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-[var(--color-border-default)]">
              <div className="max-w-3xl space-y-4">
                <span className="section-label">
                  Student Agency &amp; Discovery
                </span>
                <h2 className="text-display-section text-white">
                  Give every student somewhere useful to start.
                </h2>
                <p className="text-lead text-[var(--color-text-secondary)]">
                  Whether a student enters with clear ambitions or zero idea what they want to do, Career OS offers a calm, structured progression from initial curiosities to tangible capability evidence.
                </p>
              </div>
              <Button href={ROUTES.FOR_STUDENTS} variant="secondary" size="md">
                Full Student Experience Walkthrough →
              </Button>
            </div>
          </ScrollReveal>

          {/* 6-Stage Student Progression Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Explore',
                desc: 'Students converse naturally with their AI Career Mentor to explore curiosities, test work environments, and deconstruct unfamiliar disciplines.',
              },
              {
                step: '02',
                title: 'Understand',
                desc: 'The Career Graph maps required capabilities, day-to-day realities, entry pathways, and long-term horizons for thousands of modern roles.',
              },
              {
                step: '03',
                title: 'Compare',
                desc: 'Transparently evaluate universities, degree apprenticeships, technical colleges, and direct employment with side-by-side trade-off clarity.',
              },
              {
                step: '04',
                title: 'Develop',
                desc: 'Identify meaningful bridge milestones, curriculum choices, and extracurricular projects that prepare the student for their chosen route.',
              },
              {
                step: '05',
                title: 'Prove',
                desc: 'Capture verified project artifacts, competition entries, work placements, and academic credentials in a portable Career Passport.',
              },
              {
                step: '06',
                title: 'Prepare',
                desc: 'Enter human counseling sessions and post-school applications with grounded confidence, formed questions, and structured evidence.',
              },
            ].map((st, i) => (
              <ScrollReveal key={i} delayMs={i * 60}>
                <div
                  className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2.5 flex flex-col justify-between hover-lift card-interactive h-full"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#2F8FFF]">
                      Step {st.step}
                    </span>
                    <h4 className="text-base font-serif font-medium text-white">
                      {st.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 05: MULTI-PATHWAY EQUAL PARITY
          Career guidance should not quietly rank one route above another.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Equal Pathway Parity
              </span>
              <h2 className="text-display-section text-white">
                Career guidance should not quietly rank one route above another.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                The right pathway is the one that fits the student&apos;s direction—not the one with the highest perceived social prestige. Career OS displays academic, vocational, and service pathways with equal editorial dignity.
              </p>
            </div>
          </ScrollReveal>

          <InteractiveSchoolPathwayExplorer />
        </div>
      </section>


      {/* ============================================================
          SECTION 06: EARLY EVIDENCE COMPOUNDING
          A student career record doesn't have to begin with their first full-time job.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Career Passport in High School
              </span>
              <h2 className="text-display-section text-white">
                A student career record doesn&apos;t have to begin with their first full-time job.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                A young person may leave secondary education with limited traditional employment history, but still possess meaningful evidence of capability, problem-solving, and dedication.
              </p>
            </div>
          </ScrollReveal>

          <StudentPassportPreview />
        </div>
      </section>


      {/* ============================================================
          SECTION 07: EDUCATOR INSTITUTIONAL EXPERIENCE
          See where your attention may matter most.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Educator &amp; Counselor Experience
              </span>
              <h2 className="text-display-section text-white">
                See where your attention may matter most.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Career OS provides structured cohort context, advising queues, and student questions without producing invasive behavioral tracking, hidden risk scores, or automated employability rankings.
              </p>
            </div>
          </ScrollReveal>

          <InteractiveEducatorView />
        </div>
      </section>


      {/* ============================================================
          SECTION 08: WHAT EDUCATORS SHOULD NOT SEE (PRIVACY)
          More context does not mean unlimited access.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Information Boundaries
              </span>
              <h2 className="text-display-section text-white">
                More context does not mean unlimited access.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                High-leverage career support requires context. It does not require eliminating student privacy. Career OS enforces purpose-based, role-governed data segregation at every layer.
              </p>
            </div>
          </ScrollReveal>

          <InteractivePrivacyAccessViewer />
        </div>
      </section>


      {/* ============================================================
          SECTION 09: SAFEGUARDING & AGE-APPROPRIATE ARCHITECTURE
          Younger users need a different product architecture.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Youth Safeguarding Framework
              </span>
              <h2 className="text-display-section text-white">
                Younger users need a different product architecture.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Career OS applies distinct product safeguards across three developmental age tiers, ensuring minors explore careers in an educational sanctuary protected from commercial solicitation.
              </p>
            </div>
          </ScrollReveal>

          <SafeguardingArchitectureVisual />
        </div>
      </section>


      {/* ============================================================
          SECTION 10: PARENT & GUARDIAN PARTNERSHIP
          Give families confidence without turning exploration into surveillance.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="section-label">
                    Family Partnership
                  </span>
                  <h2 className="text-display-section text-white">
                    Give families confidence without turning exploration into surveillance.
                  </h2>
                  <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
                    Parents and guardians want clarity on how their children are being guided, how AI is applied, and how data is protected. Career OS provides transparent family visibility while preserving the student&apos;s safe exploratory space.
                  </p>
                  <div className="space-y-3 text-xs text-[var(--color-text-secondary)]">
                    <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-sans">Transparent Multi-Pathway Overview</strong>
                        <span>Families can review pathway comparisons together, bridging gaps between academic and vocational route understandings.</span>
                      </div>
                    </div>

                    <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-sans">Clear AI &amp; Privacy Disclosures</strong>
                        <span>Transparent notices detailing that Career OS never sells student career data or uses private student conversations for advertising targeting.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={ROUTES.LEGAL_PARENT_GUARDIAN}
                      className="text-xs font-semibold text-white hover:text-[#6BB8FF] underline underline-offset-4 inline-flex items-center gap-1.5"
                    >
                      Read Parent &amp; Guardian Information Notice <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delayMs={100}>
                <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5 hover-lift card-interactive">
                  <span className="text-xs font-mono uppercase text-[#2F8FFF] font-bold block">
                    Family Alignment Standard
                  </span>
                  <h3 className="text-xl font-serif text-white">
                    Supporting Informed Family Conversations
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Career choices often create family tension when parents are unfamiliar with modern degree apprenticeships or technical salaries. Career OS provides grounded, factual labor market context so families can discuss options based on real data rather than outdated generational stereotypes.
                  </p>
                  <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-tertiary)] italic">
                    &ldquo;Parental oversight is aligned with student age thresholds and statutory requirements—fostering confidence without over-monitoring early career curiosities.&rdquo;
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 11: HONEST OUTCOMES MEASUREMENT
          Measure whether career education is happening.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Institutional Outcomes
              </span>
              <h2 className="text-display-section text-white">
                Measure whether career education is happening—not whether every student chose the same route.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Career OS tracks meaningful engagement signals: pathway exploration breadth, pre-conversation advising completion, and evidence logging. We do not invent premature employment outcomes or reductive employability scores.
              </p>
            </div>
          </ScrollReveal>

          <SchoolOutcomesAggregateVisual />
        </div>
      </section>


      {/* ============================================================
          SECTION 12: IMPLEMENTATION ROADMAP
          Start without rebuilding your entire school technology stack.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Deployment &amp; Rollout
              </span>
              <h2 className="text-display-section text-white">
                Start without rebuilding your entire school technology stack.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                A pragmatic 6-phase institutional rollout designed for seamless adoption by school leadership, careers departments, and students.
              </p>
            </div>
          </ScrollReveal>

          <SchoolImplementationRoadmap />
        </div>
      </section>


      {/* ============================================================
          SECTION 13: DATA, PRIVACY & PROCUREMENT
          Your privacy and technology teams should be able to ask difficult questions.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Procurement &amp; Governance
              </span>
              <h2 className="text-display-section text-white">
                Your privacy and technology teams should be able to ask difficult questions.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                We welcome rigorous institutional scrutiny from district data protection officers, IT administrators, and safeguarding leaders.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Student Privacy Statement',
                href: ROUTES.REGULATORY_STUDENT_PRIVACY,
                desc: 'Comprehensive review of student data roles, zero third-party commercial sales, and institutional privacy architecture.',
              },
              {
                title: 'Institutional School Terms',
                href: ROUTES.LEGAL_SCHOOL_TERMS,
                desc: 'Contractual terms governing school workspace provisioning, administrative roles, and institutional responsibilities.',
              },
              {
                title: 'Student Safeguarding Standards',
                href: ROUTES.TRUST_SAFEGUARDING,
                desc: 'Content moderation guardrails, human escalation protocols, and youth protection standards.',
              },
              {
                title: 'Responsible AI Framework',
                href: ROUTES.TRUST_RESPONSIBLE_AI,
                desc: '8-pillar AI ethics model: explainability, human oversight, non-discrimination, and auditability.',
              },
              {
                title: 'Data Processing Agreement (DPA)',
                href: ROUTES.LEGAL_DPA,
                desc: 'Standard contractual clauses and data processing terms for institutional education customers.',
              },
              {
                title: 'Accessibility Conformance (WCAG 2.2)',
                href: ROUTES.TRUST_ACCESSIBILITY,
                desc: 'Targeted WCAG 2.2 AA standards, keyboard navigation, screen reader compatibility, and plain language.',
              },
            ].map((p, i) => (
              <ScrollReveal key={i} delayMs={i * 60}>
                <Link
                  href={p.href}
                  className="group p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[rgba(47,143,255,0.35)] hover:shadow-[0_0_16px_rgba(47,143,255,0.06)] transition-all flex flex-col justify-between space-y-4 hover-lift card-interactive h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white group-hover:text-[#6BB8FF] transition-colors">
                        {p.title}
                      </h4>
                      <ArrowRight className="w-4 h-4 text-[var(--color-taupe-400)] group-hover:text-[#2F8FFF] transform group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
                    Review Official Document →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 14: AFTER GRADUATION CONTINUITY
          Career support shouldn't expire when a student leaves school.
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Lifelong Architecture
              </span>
              <h2 className="text-display-section text-white">
                Career support shouldn&apos;t expire when a student leaves school.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                The student&apos;s institutional relationship with the school reaches its planned conclusion. Their working life is only beginning. Career OS provides the unbroken thread that accompanies them forward.
              </p>
            </div>
          </ScrollReveal>

          <SchoolLifetimeTransitionVisual />
        </div>
      </section>


      {/* ============================================================
          SECTION 15: ILLUSTRATIVE LAUNCH SCHOOL SCENARIO
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Implementation Scenario
              </span>
              <h2 className="text-display-section text-white">
                Illustrative Launch School Scenario
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                How a comprehensive secondary school with 1,200 students deploys Career OS to expand guidance capacity across Year 11 and Year 12 cohorts.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <ScrollReveal delayMs={0}>
                <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between hover-lift card-interactive h-full">
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase text-[#2F8FFF] font-bold">
                      School Profile
                    </span>
                    <h3 className="text-xl font-serif text-white">
                      Oakridge Comprehensive High School
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      1,200 students (Ages 14–18). Team: 2 full-time certified career counselors supported by form tutors.
                    </p>
                    <div className="space-y-1.5 pt-2 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                      <div>&bull; Cohort: 280 Year 11 students</div>
                      <div>&bull; Challenge: Finite 1:1 advising time</div>
                      <div>&bull; Goal: Increase apprenticeship parity</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-emerald-400">
                    Illustrative deployment scenario
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal delayMs={100}>
                <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 hover-lift card-interactive">
                  <div className="space-y-1 border-b border-[var(--color-border-default)] pb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold">
                      Deployment Impact &amp; Workflow
                    </span>
                    <h4 className="text-lg font-serif font-medium text-white">
                      From Rushed 15-Minute Meetings to High-Leverage Advising
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
                      <span className="font-bold text-white block">Student Exploration Rhythm</span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        Students explore 3.5x more pathway combinations using Career Mentor during weekly advisory blocks, logging early project artifacts in their Career Passport.
                      </p>
                    </div>

                    <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
                      <span className="font-bold text-white block">Counselor Efficiency</span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        Advisors review 1-page pre-conversation briefs ahead of appointments, diving straight into critical decisions rather than initial discovery.
                      </p>
                    </div>

                    <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
                      <span className="font-bold text-white block">Equitable Pathway Access</span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        Apprenticeship and technical trade exploration increases by 40% across students who previously only considered traditional 4-year degrees.
                      </p>
                    </div>

                    <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
                      <span className="font-bold text-white block">Zero Administrative Burden</span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        Milestone tracking and follow-up reminders are automated within the student Career Twin with zero manual spreadsheet logging for teachers.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 16: LAUNCH SCHOOL PROGRAM & FORM
          Help shape Career OS with us.
          ============================================================ */}
      <section className="section-editorial-lg bg-[var(--background-dark-deep)] border-b border-[var(--color-border-default)]" id="launch-school-section">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="section-label flex items-center justify-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Launch School Early Adopter Program
              </span>
              <h2 className="text-display-section text-white">
                Help shape Career OS with us.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Partner with Career OS to bring continuous, equitable career guidance, apprenticeship discovery, and early evidence building to your students with absolute data integrity.
              </p>
            </div>
          </ScrollReveal>

          <LaunchSchoolForm />
        </div>
      </section>


      {/* ============================================================
          SECTION 17: INSTITUTIONAL FAQ
          ============================================================ */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">
                Frequently Asked Questions
              </span>
              <h2 className="text-display-section text-white">
                Institutional Governance, Privacy &amp; Deployment FAQ
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Detailed answers for school principals, district superintendents, careers leads, and data privacy officers.
              </p>
            </div>
          </ScrollReveal>

          <HighSchoolsFAQ />
        </div>
      </section>


      {/* ============================================================
          SECTION 18: FINAL CALL TO ACTION
          Give every student more room to explore their future.
          ============================================================ */}
      <section className="section-editorial-lg bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 z-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(47, 143, 255, 0.04) 0%, transparent 60%)',
          }}
        />

        <div className="container-editorial relative z-10 space-y-12 max-w-4xl mx-auto text-center">
          <ScrollReveal direction="none">
            <div className="space-y-6">
              <span className="section-label flex items-center justify-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                The Future of Institutional Career Guidance
              </span>

              <h2 className="text-display-hero text-white">
                Give every student more room to explore their future.
              </h2>

              <p className="text-lead text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Career OS is being built to extend the reach of school career teams, strengthen student exploration, and create a compound capability foundation that continues long after graduation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button href="#launch-school-form" variant="primary" size="lg">
                Become a Launch School <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href={ROUTES.FOR_STUDENTS} variant="secondary" size="lg">
                Explore Career OS for Students →
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-tertiary)] pt-8">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Dedicated Institutional Pilot Support
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F8FFF]" /> Zero Student Commercial Advertising
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[var(--color-gold-base)]" /> Purpose-Based Role Governance
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
