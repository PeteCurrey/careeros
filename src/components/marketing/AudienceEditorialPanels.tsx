import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight, GraduationCap, Briefcase, School, Building2 } from 'lucide-react';

interface AudiencePanel {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  icon: React.ElementType;
}

const PANELS: AudiencePanel[] = [
  {
    id: 'students',
    badge: 'STUDENTS & EARLY CAREERS',
    title: 'For Students',
    headline: 'Work out where you&apos;re going — and what it takes to get there.',
    description: 'Explore pathways across university, college, apprenticeships, and trades. Build a verifiable portfolio of project evidence and carry your Career OS into the workforce.',
    bullets: [
      'Authentic pathway discovery without bias',
      'Verifiable skills records from real projects',
      'Direct connection to first opportunities',
      'Free for life &bull; You own your data',
    ],
    href: ROUTES.FOR_STUDENTS,
    cta: 'Explore for Students',
    image: MEDIA_ASSETS.audiences.students,
    icon: GraduationCap,
  },
  {
    id: 'professionals',
    badge: 'PROFESSIONALS & LEADERS',
    title: 'For Professionals',
    headline: 'Your next role is only one part of your career.',
    description: 'Continuously compound your capability, execute lateral industry pivots, benchmark market compensation, or prepare for entrepreneurship and global mobility.',
    bullets: [
      'Strategic next move advisory',
      'Capability gap closure guidance',
      'Autonomous & private opportunity agent',
      'Preserve and carry your lifelong evidence',
    ],
    href: ROUTES.FOR_PROFESSIONALS,
    cta: 'Explore for Professionals',
    image: MEDIA_ASSETS.audiences.professionals,
    icon: Briefcase,
  },
  {
    id: 'schools',
    badge: 'HIGH SCHOOLS & DISTRICTS',
    title: 'For High Schools',
    headline: 'Personalised career development for every student.',
    description: 'Equip counsellors with intelligent tools, support college, technical trade, and apprenticeship pathways equally, and protect minors under strict FERPA/COPPA safeguarding.',
    bullets: [
      'Equitable parity across university, trades & apprenticeships',
      'Institutional safeguarding & zero advertising',
      'Measurable post-graduation outcome tracking',
      'Become a launch education partner',
    ],
    href: ROUTES.FOR_HIGH_SCHOOLS,
    cta: 'Explore for High Schools',
    image: MEDIA_ASSETS.audiences.schools,
    icon: School,
  },
  {
    id: 'employers',
    badge: 'EMPLOYERS & HIRING TEAMS',
    title: 'For Employers',
    headline: 'Find people by potential, evidence and fit — not just keywords on a résumé.',
    description: 'Execute responsible candidate discovery based on demonstrated competence and mutual alignment, supported by explainable Employer Agent decision support with full human oversight.',
    bullets: [
      'Evidence-based talent matching',
      'Explainable recommendation factors',
      'Early-career and apprenticeship pipelines',
      'Become a launch employer partner',
    ],
    href: ROUTES.FOR_EMPLOYERS,
    cta: 'Explore for Employers',
    image: MEDIA_ASSETS.audiences.employers,
    icon: Building2,
  },
];

export function AudienceEditorialPanels() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            Ecosystem Audiences
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Four career worlds. One operating system.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Career OS bridges the divide between students discovering direction, professionals advancing, educators guiding, and employers hiring responsibly.
          </p>
        </div>

        {/* 4 Large Editorial Panels */}
        <div className="space-y-16">
          {PANELS.map((panel, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = panel.icon;
            return (
              <div
                key={panel.id}
                className="p-8 sm:p-12 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content */}
                <div className={`space-y-6 ${isReversed ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-mono font-bold text-[var(--color-brand-600)]">
                    <Icon className="w-3.5 h-3.5" /> {panel.badge}
                  </div>

                  <h3 className="text-headline-editorial text-[var(--color-text-primary)]" dangerouslySetInnerHTML={{ __html: panel.headline }} />

                  <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                    {panel.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {panel.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs font-medium text-[var(--color-text-primary)] flex items-start gap-2">
                        <span className="text-[var(--color-brand-600)] font-bold text-sm leading-none">&bull;</span>
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button href={panel.href} variant="secondary" size="md" className="shadow-xs font-semibold">
                      {panel.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Photography Asset */}
                <div className={`relative ${isReversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'}`}>
                  <div className="rounded-2xl overflow-hidden border border-[var(--color-border-default)] shadow-card aspect-16/10 relative group">
                    <Image
                      src={panel.image.src}
                      alt={panel.image.alt}
                      width={panel.image.width}
                      height={panel.image.height}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
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
