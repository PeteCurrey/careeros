'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Users,
  Target,
  Lock,
  CheckCircle2,
  FileCheck,
  Eye,
  CalendarCheck,
  Zap,
} from 'lucide-react';

export default function EventPromoteLandingPage() {
  const organizerTypes = [
    {
      title: 'Employers & Enterprise',
      description: 'Host graduate recruitment days, engineering open houses, insight sessions, and hiring days.',
      icon: Building2,
    },
    {
      title: 'Universities & Colleges',
      description: 'Promote open days, faculty discovery fairs, postgraduate showcases, and academic panels.',
      icon: GraduationCap,
    },
    {
      title: 'Training & Apprenticeship Providers',
      description: 'Connect prospective apprentices and upskillers with paid training and degree apprenticeships.',
      icon: Users,
    },
    {
      title: 'Professional & Chartered Bodies',
      description: 'Run masterclasses, sector briefings, CPD workshops, and executive roundtables.',
      icon: ShieldCheck,
    },
    {
      title: 'Startup Incubators & VCs',
      description: 'Showcase demo days, pitch nights, co-founder mixers, and early-stage startup hiring nights.',
      icon: Sparkles,
    },
    {
      title: 'Public Sector & Government',
      description: 'Broaden access to regional employment fairs, public healthcare academies, and civil service tracks.',
      icon: FileCheck,
    },
  ];

  const promotionTiers = [
    {
      name: 'Standard Listing',
      badge: 'Organic Discovery',
      description: 'Core event listing across relevant categories, search, and location discovery pages.',
      features: [
        'Dedicated event detail page with Schema.org SEO indexing',
        'Inclusion in category, sector, and format filters',
        'AI Preparation checklist generated for attendees',
        'Direct registration link to your site or platform',
        'Basic interaction telemetry (page views & saves)',
      ],
      highlight: false,
      ctaText: 'Submit Free Listing',
      ctaHref: ROUTES.EVENTS_PROMOTE_CREATE,
    },
    {
      name: 'Featured Placement',
      badge: 'High Prominence',
      description: 'Enhanced prominence across discovery hubs, category headers, and weekly recommendation digests.',
      features: [
        'Everything in Standard Listing',
        'Flagship placement in Featured discovery rail',
        'Distinct "Featured" editorial badge',
        'Priority placement in search and filter results',
        'Weekly email summary inclusion to matched users',
        'Organizer verification badge included upon audit',
      ],
      highlight: true,
      ctaText: 'Promote as Featured',
      ctaHref: ROUTES.EVENTS_PROMOTE_CREATE,
    },
    {
      name: 'Sponsored Event',
      badge: 'Maximum Reach',
      description: 'Top-tier branded promotion with targeted audience alignment and employer profile integration.',
      features: [
        'Everything in Featured Placement',
        'Prominent blue architectural badge clearly labeled as "Sponsored"',
        'Integration with Employer Agent & Career Twin matching',
        'Detailed non-PII performance analytics report',
        'Direct connection to your CareerOS Employer profile',
        'Dedicated account onboarding & technical support',
      ],
      highlight: false,
      ctaText: 'Enquire for Sponsored',
      ctaHref: ROUTES.EVENTS_PROMOTE_CREATE,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-14 border-b border-[var(--color-border-default)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[rgba(47,143,255,0.06)] blur-3xl" />
        </div>

        <div className="container-editorial relative z-10 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_rgba(47,143,255,0.7)]" />
            <span className="section-label text-[var(--accent-blue)]">CareerOS Events Commercial Platform</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-display-hero text-[var(--color-text-primary)] leading-[1.04]">
              Put your event in front of people building their future.
            </h1>

            <p className="text-lead max-w-2xl">
              CareerOS connects approved employers, recruiters, universities, colleges, training providers and professional bodies with an audience actively investing in their skills, careers and education.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={ROUTES.EVENTS_PROMOTE_CREATE}
              className="px-6 py-3.5 bg-white text-zinc-900 text-sm font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-md inline-flex items-center gap-2"
            >
              <span>Promote Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#promotion-options"
              className="px-5 py-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-sm font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] hover:border-zinc-500 transition-colors"
            >
              View Promotion Options
            </a>
            <Link
              href={ROUTES.EVENTS_ORGANIZERS_DASHBOARD}
              className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--accent-blue)] transition-colors pl-2"
            >
              Already registered? Organizer Portal →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ────────────────────────────────────── */}
      <section className="py-14 border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="section-label text-[var(--color-taupe-300)]">Why CareerOS</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              An audience with genuine career intent.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Unlike generic social feeds or ticketers, CareerOS users come to plan their lifelong career trajectories, verify their competencies, and discover real career transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <Target className="w-6 h-6 text-[var(--accent-blue)]" />
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">High Signal, Zero Vanity</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Connect with candidates actively exploring your specific industry sectors, apprenticeships, graduate tracks, or masterclasses.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">Strict Quality &amp; Trust</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Every event undergoes human editorial review. Scam listings, MLM schemes, and misleading recruiters are barred, protecting our community and your brand.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <Lock className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">Privacy-First Architecture</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                CareerOS never sells user personal data to advertisers. Targeted promotion respects user privacy and safeguarding standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITABLE ORGANIZERS ──────────────────────────────────── */}
      <section className="py-14 border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="section-label">Organizer Profiles</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Who can promote on CareerOS?
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We welcome verified organizations delivering genuine career advancement, hiring opportunities, and educational value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {organizerTypes.map((org) => {
              const Icon = org.icon;
              return (
                <div
                  key={org.title}
                  className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2"
                >
                  <Icon className="w-5 h-5 text-[var(--accent-blue)]" />
                  <div className="text-sm font-bold text-[var(--color-text-primary)]">{org.title}</div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {org.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROMOTION TIERS & MONETISATION ARCHITECTURE ─────────── */}
      <section id="promotion-options" className="py-16 border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-label text-[var(--accent-blue)]">Commercial Placement Options</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Promotion that fits your scale.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Choose the level of prominence for your upcoming event. All placements require editorial approval prior to going live.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {promotionTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  'p-6 sm:p-8 rounded-[var(--radius-card)] border flex flex-col justify-between space-y-6 relative transition-all',
                  tier.highlight
                    ? 'bg-[var(--color-surface-raised)] border-[var(--accent-blue)] shadow-xl'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)]'
                )}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 bg-[var(--accent-blue)] text-white text-[10px] font-bold uppercase tracking-wider rounded-[var(--radius-tag)] shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                      {tier.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{tier.name}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-2.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                      What&apos;s Included:
                    </div>
                    <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                  <Link
                    href={tier.ctaHref}
                    className={cn(
                      'w-full py-3 rounded-[var(--radius-button)] text-xs font-bold text-center block transition-colors',
                      tier.highlight
                        ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                        : 'bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-zinc-500'
                    )}
                  >
                    {tier.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Separation Notice */}
          <div className="p-4 bg-[var(--color-surface-raised)] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-sm)] max-w-3xl mx-auto flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs font-bold text-[var(--color-text-primary)]">
                Editorial Independence Guarantee
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Payment never guarantees automatic publication. All event listings must pass CareerOS quality, safety, and child safeguarding standards before appearing publicly. If an event is rejected by editorial review, paid commercial fees are refunded in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ & BOTTOM CTA ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-editorial space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Everything you need to know about promoting.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-[var(--color-text-primary)]">How long does event moderation take?</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Most submissions are reviewed and verified within 1 business day. We will email you if changes or clarifying details are required.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-[var(--color-text-primary)]">Can we promote virtual and online webinars?</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. CareerOS supports In-Person, Online (Zoom, Teams, Hopin, YouTube Live), and Hybrid event configurations.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-[var(--color-text-primary)]">What safeguarding rules apply to under-18 events?</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Events targeted at high school students or minors must provide safeguarding disclosures, verified staff background checks, and clear entry guidelines.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-[var(--color-text-primary)]">Do you provide registration tracking analytics?</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Through the Organizer Portal, you can monitor page views, user saves, calendar exports, and outbound registration click-throughs in real time without compromising attendee PII.
              </p>
            </div>
          </div>

          {/* Final CTA Banner */}
          <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.2)] rounded-[var(--radius-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Ready to submit your first event?</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Our guided multi-step submission takes under 5 minutes.
              </p>
            </div>
            <Link
              href={ROUTES.EVENTS_PROMOTE_CREATE}
              className="px-6 py-3 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-sm inline-flex items-center gap-2 shrink-0"
            >
              <span>Start Submission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
