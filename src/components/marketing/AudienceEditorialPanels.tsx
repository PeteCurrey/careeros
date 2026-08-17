'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight } from 'lucide-react';

interface AudienceFeature {
  id: string;
  num: string;
  badge: string;
  headline: string;
  description: string;
  points: string[];
  href: string;
  ctaText: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const AUDIENCES: AudienceFeature[] = [
  {
    id: 'students',
    num: '01',
    badge: 'Students & Early Careers',
    headline: 'You shouldn\x27t have to know your whole future at 17.',
    description: 'Explore pathways across university, technical apprenticeships, trades, and emerging fields. Build a verifiable portfolio of hands-on project evidence and carry your Career OS into the workforce.',
    points: [
      'Authentic pathway discovery without institutional bias',
      'Equal visual weight and parity for technical apprenticeships and university degrees',
      'Direct connection to first launch opportunities based on capability',
      'Free for life &bull; You own and control your data sovereignly',
    ],
    href: ROUTES.FOR_STUDENTS,
    ctaText: 'Explore for Students',
    image: MEDIA_ASSETS.audiences.students,
  },
  {
    id: 'professionals',
    num: '02',
    badge: 'Professionals & Leaders',
    headline: 'The job you have now isn\x27t the end of the story.',
    description: 'Continuously compound your capability, execute lateral industry pivots, benchmark market compensation horizons, or prepare for entrepreneurship and global mobility.',
    points: [
      'Strategic next-move advisory calibrated to your trajectory',
      'Capability gap closure and management benchmark guidance',
      'Autonomous & private opportunity matching without public job searching',
      'Preserve and carry your verified evidence across every employer',
    ],
    href: ROUTES.FOR_PROFESSIONALS,
    ctaText: 'Explore for Professionals',
    image: MEDIA_ASSETS.audiences.professionals,
  },
  {
    id: 'schools',
    num: '03',
    badge: 'High Schools & Districts',
    headline: 'Personal career guidance shouldn\x27t depend on how much time a counsellor has.',
    description: 'Equip counsellors with intelligent tools, support college and technical trade pathways equally, and protect minors under strict institutional data safeguarding with zero advertising.',
    points: [
      'Equitable parity across university, trades & apprenticeships',
      'Institutional safeguarding, zero commercial ads, and strict privacy',
      'Measurable longitudinal post-graduation outcome tracking',
      'Become a launch educational partner school or district',
    ],
    href: ROUTES.FOR_HIGH_SCHOOLS,
    ctaText: 'Explore for High Schools',
    image: MEDIA_ASSETS.audiences.schools,
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
    image: MEDIA_ASSETS.audiences.employers,
  },
];

export function AudienceEditorialPanels() {
  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-24">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">
            Ecosystem Audiences
          </span>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Four career worlds. One operating system.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Career OS bridges the divide between students discovering direction, professionals advancing, educators guiding, and employers hiring responsibly.
          </p>
        </div>

        {/* 4 Varied Editorial Visual Sections */}
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
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[var(--color-taupe-300)]">
                      {aud.num}
                    </span>
                    <span className="text-[var(--color-border-strong)]">/</span>
                    <span className="section-label">
                      {aud.badge}
                    </span>
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
                        <span className="text-[var(--color-taupe-300)] font-bold text-sm leading-none">&bull;</span>
                        <span dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href={aud.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] hover:text-white underline underline-offset-4"
                    >
                      <span>{aud.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Documentary Photography Column */}
                <div className={`relative ${isReversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'}`}>
                  <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle aspect-16/10 relative group">
                    <Image
                      src={aud.image.src}
                      alt={aud.image.alt}
                      width={aud.image.width}
                      height={aud.image.height}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

