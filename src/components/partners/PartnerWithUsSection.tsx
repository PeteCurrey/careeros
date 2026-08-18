import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { MessageSquare, Building2, GraduationCap, Briefcase, Globe } from 'lucide-react';

const PARTNER_TRACKS = [
  {
    id: 'employer',
    icon: Building2,
    title: 'Employer Partnership',
    description: 'Connect your organisation with motivated, career-ready candidates. Engage talent before it reaches traditional job boards.',
    audience: 'Private, public and social-sector employers',
    examples: 'Early careers programmes, internship pipelines, talent community access',
    link: ROUTES.FOR_EMPLOYERS,
  },
  {
    id: 'school',
    icon: GraduationCap,
    title: 'School & College Integration',
    description: 'Equip your students with structured career planning from day one, aligned with your existing counselling and advising infrastructure.',
    audience: 'US high schools, community colleges, universities',
    examples: 'Student accounts, counsellor dashboards, outcome reporting, FERPA-compliant data handling',
    link: ROUTES.FOR_HIGH_SCHOOLS,
  },
  {
    id: 'workforce',
    icon: Briefcase,
    title: 'Workforce Development',
    description: 'Extend your services digitally. Connect job-seekers, training programmes and local employers through CareerOS infrastructure.',
    audience: 'Workforce development boards, nonprofits, government programmes',
    examples: 'Case worker tools, participant tracking, training referrals, employer matching',
    link: ROUTES.SCHOOLS_PARTNERSHIPS,
  },
  {
    id: 'strategic',
    icon: Globe,
    title: 'Strategic Partnership',
    description: 'For organisations whose services are foundational to career development and who want to build alongside CareerOS at the ecosystem level.',
    audience: 'Learning providers, credentialing bodies, platform partners',
    examples: 'API integration, data exchange, co-branded programmes',
    link: ROUTES.CONTACT_PARTNERSHIPS,
  },
];

export function PartnerWithUsSection() {
  return (
    <section id="partner-with-us" className="py-28 bg-[var(--color-background)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-5">
            <p className="section-label text-[var(--color-accent-primary)]">WORK WITH US</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Partner with CareerOS.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              We work with employers, schools, colleges, workforce organisations, training providers and ecosystem-level partners who share our commitment to building careers that are evidence-based, transparent and human-centred.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              All partnerships are subject to our partnership principles and reviewed against our selection standards. We are currently accepting enquiries for a limited number of early partnership relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href={ROUTES.CONTACT_PARTNERSHIPS}
                className="btn-primary px-6 py-3 text-sm font-semibold rounded-sm text-center"
              >
                Start a partnership conversation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PARTNER_TRACKS.map((track) => {
                const Icon = track.icon;
                return (
                  <article
                    key={track.id}
                    className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm hover:border-[var(--color-border-interactive)] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-sm bg-[var(--color-accent-primary)]/5 border border-[var(--color-accent-primary)]/15 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-[var(--color-accent-primary)]" />
                    </div>
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                      {track.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">
                      {track.description}
                    </p>
                    <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-2">
                      <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] leading-relaxed">
                        <strong className="text-[var(--color-text-secondary)]">For: </strong>{track.audience}
                      </p>
                      <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] leading-relaxed">
                        <strong className="text-[var(--color-text-secondary)]">Includes: </strong>{track.examples}
                      </p>
                    </div>
                    <Link
                      href={track.link}
                      className="inline-flex items-center gap-1 mt-4 text-xs text-[var(--color-accent-primary)] hover:underline"
                    >
                      Learn more →
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Not yet partner notice */}
        <div className="flex items-start gap-4 p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm max-w-3xl">
          <MessageSquare className="w-5 h-5 text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">
              We are not yet live.
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              CareerOS is in pre-launch development. Early partner relationships are being established ahead of launch. Now is a good time to start the conversation — before the platform is public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
