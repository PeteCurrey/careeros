'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { HumanCareerAnnotation, CareerAnnotationPoint } from '@/components/brand/HumanCareerAnnotation';

interface AudienceFeature {
  id: string;
  num: string;
  badge: string;
  headline: string;
  description: string;
  points: string[];
  href: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  annotations: CareerAnnotationPoint[];
}

const AUDIENCES: AudienceFeature[] = [
  {
    id: 'students',
    num: '01',
    badge: 'Students & Early Careers',
    headline: "You shouldn't have to know your whole future at 17.",
    description: 'Explore pathways across university, technical apprenticeships, trades, and emerging fields. Build a verifiable portfolio of hands-on project evidence and carry your Career OS into the workforce.',
    points: [
      'Authentic pathway discovery without institutional bias',
      'Equal visual weight and parity for technical apprenticeships and university degrees',
      'Direct connection to first launch opportunities based on capability',
      'Free for life &bull; You own and control your data sovereignly',
    ],
    href: ROUTES.FOR_STUDENTS,
    ctaText: 'Explore for Students',
    imageSrc: '/media/students/audience_students.jpg',
    imageAlt: 'Students collaborating on technical design prototype in modern learning lab',
    annotations: [
      {
        label: 'Discovery',
        value: 'Trades & University Parity',
        detail: 'Equal visibility for technical apprenticeships & college degrees',
        category: 'experience',
        position: { top: '30%', left: '30%' },
      },
      {
        label: 'Evidence',
        value: 'First Project Portfolio',
        detail: 'Verified deliverables anchored in the Career Passport',
        category: 'evidence',
        position: { top: '55%', left: '70%' },
      },
      {
        label: 'Next Move',
        value: 'Apprenticeship Launch',
        detail: 'Direct matching based on demonstrated hands-on skill',
        category: 'next_move',
        position: { top: '78%', left: '35%' },
      },
    ],
  },
  {
    id: 'professionals',
    num: '02',
    badge: 'Professionals & Leaders',
    headline: "The job you have now isn't the end of the story.",
    description: 'Continuously compound your capability, execute lateral industry pivots, benchmark market compensation horizons, or prepare for entrepreneurship and global mobility.',
    points: [
      'Strategic next-move advisory calibrated to your trajectory',
      'Capability gap closure and management benchmark guidance',
      'Autonomous & private opportunity matching without public job searching',
      'Preserve and carry your verified evidence across every employer',
    ],
    href: ROUTES.FOR_PROFESSIONALS,
    ctaText: 'Explore for Professionals',
    imageSrc: '/media/professionals/audience_professionals.jpg',
    imageAlt: 'Professional leader contemplating strategic career trajectory in contemporary workspace',
    annotations: [
      {
        label: 'Experience',
        value: 'Senior Systems Engineering',
        detail: '6 years compounding architecture & technical team leadership',
        category: 'experience',
        position: { top: '25%', left: '32%' },
      },
      {
        label: 'Skills',
        value: '4 Core Competencies',
        detail: 'Distributed systems, project leadership, security audit, AI workflows',
        category: 'skills',
        position: { top: '50%', left: '72%' },
      },
      {
        label: 'Goals',
        value: 'Director of Architecture',
        detail: 'Target horizon benchmarked with compensation calibrations',
        category: 'goals',
        position: { top: '78%', left: '40%' },
      },
    ],
  },
  {
    id: 'schools',
    num: '03',
    badge: 'High Schools & Districts',
    headline: "Personal career guidance shouldn't depend on how much time a counsellor has.",
    description: 'Equip counsellors with intelligent tools, support college and technical trade pathways equally, and protect minors under strict institutional data safeguarding with zero advertising.',
    points: [
      'Equitable parity across university, trades & apprenticeships',
      'Institutional safeguarding, zero commercial ads, and strict privacy',
      'Measurable longitudinal post-graduation outcome tracking',
      'Become a launch educational partner school or district',
    ],
    href: ROUTES.FOR_HIGH_SCHOOLS,
    ctaText: 'Explore for High Schools',
    imageSrc: '/media/schools/audience_schools.jpg',
    imageAlt: 'Educator mentoring high school students exploring diverse technical and academic pathways',
    annotations: [
      {
        label: 'Safeguarding',
        value: 'FERPA & COPPA Isolated',
        detail: 'Strict minor data boundaries with zero advertising or tracking',
        category: 'evidence',
        position: { top: '28%', left: '35%' },
      },
      {
        label: 'Guidance',
        value: '1:1 AI Mentor Copilot',
        detail: 'Scales counsellor capacity across entire student bodies',
        category: 'skills',
        position: { top: '58%', left: '68%' },
      },
      {
        label: 'Outcomes',
        value: 'Longitudinal Tracking',
        detail: 'Verifiable post-graduation employment & college progression',
        category: 'goals',
        position: { top: '80%', left: '35%' },
      },
    ],
  },
  {
    id: 'employers',
    num: '04',
    badge: 'Forward-Thinking Employers',
    headline: 'Find more than the right résumé.',
    description: 'Execute responsible candidate discovery based on demonstrated competence and mutual alignment, supported by explainable decision support with human oversight kept central.',
    points: [
      'Evidence-based candidate matching beyond static keyword filters',
      'Explainable recommendation factors with transparent criteria provenance',
      'Direct early-career and apprenticeship talent pipelines',
      'Become a founding launch employer partner',
    ],
    href: ROUTES.FOR_EMPLOYERS,
    ctaText: 'Explore for Employers',
    imageSrc: '/media/employers/audience_employers.jpg',
    imageAlt: 'Modern hiring team reviewing candidate project evidence and talent fit',
    annotations: [
      {
        label: 'Matching',
        value: 'Evidence Provenance Match',
        detail: 'Candidate discovery based on demonstrated project deliverables',
        category: 'experience',
        position: { top: '30%', left: '32%' },
      },
      {
        label: 'Governance',
        value: 'Explainable AI Criteria',
        detail: 'Transparent reasoning with mandatory human decision oversight',
        category: 'skills',
        position: { top: '55%', left: '72%' },
      },
      {
        label: 'Pipelines',
        value: 'Pre-Prepared Talent',
        detail: 'Candidates whose skills have been verified before application',
        category: 'next_move',
        position: { top: '80%', left: '42%' },
      },
    ],
  },
];

export function AudienceEditorialPanels() {
  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-24 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label">
                Ecosystem Audiences
              </span>
              <TechnicalBadge variant="blue">FOUR WORLDS</TechnicalBadge>
            </div>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Four career worlds. <span className="text-[#2F8FFF]">One operating system.</span>
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS bridges the divide between students discovering direction, professionals advancing, educators guiding, and employers hiring responsibly.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Varied Editorial Visual Sections with Annotated Photography */}
        <div className="space-y-24">
          {AUDIENCES.map((aud, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={aud.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 border-t border-[var(--color-border-default)]"
              >
                {/* Narrative Column */}
                <div className={`space-y-6 ${isReversed ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'}`}>
                  <ScrollReveal delayMs={100}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 font-mono">
                        <span className="text-sm font-semibold text-[var(--color-taupe-300)]">
                          {aud.num}
                        </span>
                        <span className="text-[var(--color-border-strong)]">/</span>
                        <TechnicalBadge variant={idx % 2 === 0 ? 'blue' : 'lavender'}>
                          {aud.badge}
                        </TechnicalBadge>
                      </div>

                      <h3 className="text-display-section text-[var(--color-text-primary)] text-2xl sm:text-3xl lg:text-4xl leading-tight">
                        {aud.headline}
                      </h3>

                      <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                        {aud.description}
                      </p>

                      <ul className="space-y-2.5 pt-2 text-xs text-[var(--color-text-primary)] font-medium">
                        {aud.points.map((p, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="text-[#2F8FFF] font-bold text-sm leading-none">&bull;</span>
                            <span dangerouslySetInnerHTML={{ __html: p }} />
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 font-mono">
                        <Link
                          href={aud.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4 group"
                        >
                          <span>{aud.ctaText}</span>
                          <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Annotated Documentary Photography Column */}
                <div className={`relative ${isReversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'}`}>
                  <ScrollReveal delayMs={200}>
                    <HumanCareerAnnotation
                      imageSrc={aud.imageSrc}
                      imageAlt={aud.imageAlt}
                      annotations={aud.annotations}
                      title={aud.badge}
                      roleBadge={`AUDIENCE ${aud.num}`}
                    />
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
