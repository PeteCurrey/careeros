import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { MentorCouncilGrid } from '@/components/marketing/mentors/MentorCouncilGrid';
import { MentorAssignmentFlow } from '@/components/marketing/mentors/MentorAssignmentFlow';
import { MentorTransitionExamples } from '@/components/marketing/mentors/MentorTransitionExamples';
import { MentorBoundariesBlock } from '@/components/marketing/mentors/MentorBoundariesBlock';
import { MentorFAQ } from '@/components/marketing/mentors/MentorFAQ';
import { ArrowRight, Bot, Compass, ShieldCheck, Sparkles, Network, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Career Mentor Council | Career OS',
  description: 'Different careers need different expertise. Meet the 8 domain AI mentor personas system-assigned by Career OS based upon your Career Twin context.',
  alternates: {
    canonical: 'https://career-os.com/mentors',
  },
};

export default function MentorsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Career OS AI Mentor Council',
    description: 'Directory of system-assigned AI domain mentor personas across technology, healthcare, trades, finance, law, media, military transition, and entrepreneurship.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Marcus Thorne — Technology & Engineering' },
      { '@type': 'ListItem', position: 2, name: 'Dr. Amara Osei — Healthcare & Life Sciences' },
      { '@type': 'ListItem', position: 3, name: 'Callum Reid — Skilled Trades & Manufacturing' },
      { '@type': 'ListItem', position: 4, name: 'Priya Chakraborty — Finance & Strategic Leadership' },
      { '@type': 'ListItem', position: 5, name: 'Isabelle Fontaine — Law & Public Policy' },
      { '@type': 'ListItem', position: 6, name: 'Jordan Park — Creative Direction & Digital Media' },
      { '@type': 'ListItem', position: 7, name: 'Darnell Hayes — Military & Service Transition' },
      { '@type': 'ListItem', position: 8, name: 'Rosa Mbeki — Venture & Small Business' },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 01. Hero Section ── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/hero/mentor_team_hero.jpg"
            alt="Career OS Multidisciplinary AI Mentor Council"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, var(--color-surface-base) 0%, color-mix(in srgb, var(--color-surface-base) 96%, transparent) 38%, color-mix(in srgb, var(--color-surface-base) 88%, transparent) 55%, color-mix(in srgb, var(--color-surface-base) 42%, transparent) 78%, color-mix(in srgb, var(--color-surface-base) 18%, transparent) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, var(--color-surface-base) 0%, transparent 100%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{ background: 'linear-gradient(to top, var(--color-surface-base) 0%, transparent 100%)' }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Intelligent Domain Advisory
              </span>
              <TechnicalBadge variant="lavender" dot>
                SYSTEM-ASSIGNED PERSONAS
              </TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.06]">
              Different careers need{' '}
              <CareerGradientText variant="blue">
                different expertise.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career OS assigns the mentor best equipped to understand where you are going. Not a chatbot marketplace. An intelligent system layer calibrated around your goals, skills, and evidence records.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#mentor-council" variant="primary" size="lg">
                Explore Mentor Council <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="lg">
                Mentor Architecture
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02. Why Domain Mentors ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label text-[#2F8FFF]">Domain Depth vs Generic AI</span>
              <h2 className="text-display-section font-normal text-white">
                Why a single generic chatbot cannot advise an electrician, a nurse, and an engineer.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                General-purpose AI treats career advice as text generation. Career OS connects domain mentors directly to structured Career Graph nodes, trade licensing rules, clinical credential sequences, and Staff+ engineering promotion rubrics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delayMs={0}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <Bot className="w-6 h-6 text-[#2F8FFF]" />
                <h3 className="text-base font-bold text-white">Persistent Domain Memory</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Remembers developmental milestones and career trajectory across years, avoiding repetitive prompt engineering.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <Network className="w-6 h-6 text-[#CDBBD2]" />
                <h3 className="text-base font-bold text-white">Passport Evidence Grounding</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Evaluates demonstrated deliverables, certifications, and project artifacts rather than unverified self-descriptions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                <ShieldCheck className="w-6 h-6 text-[#DDD36D]" />
                <h3 className="text-base font-bold text-white">Explicit Decision Boundaries</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Never simulates human companionship, never provides unlicensed legal/medical advice, and never hallucinates credential requirements.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 03. Meet the Mentor Council Grid ── */}
      <section id="mentor-council" className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <span className="section-label text-[#2F8FFF]">Representative Council</span>
                <h2 className="text-display-section font-normal text-white">
                  Meet the Career OS domain mentors.
                </h2>
                <p className="text-body text-[var(--color-text-secondary)]">
                  These 8 representative personas embody the specialized logic deployed across major occupational clusters. Career OS assigns your mentor automatically.
                </p>
              </div>
              <TechnicalBadge variant="blue">8 ACTIVE DOMAIN PERSONAS</TechnicalBadge>
            </div>
          </ScrollReveal>

          <MentorCouncilGrid />
        </div>
      </section>

      {/* ── 04. How Your Mentor Is Assigned ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <span className="section-label text-[#2F8FFF]">Assignment Architecture</span>
              <h2 className="text-display-section font-normal text-white">
                How Career OS determines your mentor.
              </h2>
              <p className="text-body text-[var(--color-text-secondary)]">
                You never have to browse profiles or pick a character. Career OS evaluates your Career Twin to assign the mentor with the deepest relevant domain context.
              </p>
            </div>
          </ScrollReveal>

          <MentorAssignmentFlow />
        </div>
      </section>

      {/* ── 05. Your Career Can Change ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <span className="section-label text-[#2F8FFF]">Dynamic Evolution</span>
              <h2 className="text-display-section font-normal text-white">
                Your career evolves. Your mentor adapts.
              </h2>
              <p className="text-body text-[var(--color-text-secondary)]">
                When you pivot into a new industry, transition from technical execution into management, or launch a venture, your mentor context shifts seamlessly.
              </p>
            </div>
          </ScrollReveal>

          <MentorTransitionExamples />
        </div>
      </section>

      {/* ── 06. Student Mentoring Guardrails ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-8 max-w-4xl">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#2F8FFF]" />
                <span className="section-label text-white">Youth & Secondary Education</span>
              </div>

              <h2 className="text-display-section font-normal text-white">
                Age-appropriate career guidance for younger learners.
              </h2>

              <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                For students in high schools and colleges, Career OS mentors focus on pathway discovery, subject choice implications, apprenticeship options, and introductory evidence collection. We never gamify career choices or create artificial juvenile avatars. Mentoring remains professional, encouraging, and subject to strict school district safeguarding agreements.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="text-xs font-semibold text-[#6BB8FF] hover:underline inline-flex items-center gap-1">
                  <span>Explore High School Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href={ROUTES.TRUST_SAFEGUARDING} className="text-xs font-semibold text-[var(--color-text-secondary)] hover:underline inline-flex items-center gap-1">
                  <span>Minor Safeguarding Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 07. Boundaries & Ethics ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial">
          <ScrollReveal>
            <MentorBoundariesBlock />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 08. FAQ ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <span className="section-label text-[#2F8FFF]">Common Questions</span>
              <h2 className="text-display-section font-normal text-white">
                Frequently asked questions about AI mentors.
              </h2>
            </div>
          </ScrollReveal>

          <MentorFAQ />
        </div>
      </section>

      {/* ── 09. Final CTA ── */}
      <section className="section-editorial bg-[var(--color-surface-base)] text-center">
        <div className="container-editorial max-w-3xl space-y-6 mx-auto">
          <ScrollReveal direction="none">
            <div className="space-y-6">
              <h2 className="text-display-section font-normal text-white">
                Ready for guidance that compounds over your entire working life?
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
                Build your private Career Twin today and let Career OS assign your dedicated domain mentor.
              </p>
              <div className="pt-4">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                  Start Free — Create Your Career OS
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
