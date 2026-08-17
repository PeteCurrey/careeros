'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { EventCard } from '@/components/events/EventCard';
import { EventFilters } from '@/components/events/EventFilters';
import { SEED_EVENTS, EVENT_CATEGORIES, filterEvents } from '@/lib/events/data';
import { EventFilterState, CareerEvent } from '@/types/events/platform';
import { ROUTES } from '@/lib/routes';
import { ArrowRight, Calendar, Sparkles, Building2, GraduationCap, Lightbulb, Users, Globe, ShieldCheck, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEFAULT_FILTERS: EventFilterState = {
  searchQuery: '',
  when: 'any',
  where: 'all',
  locationQuery: '',
  categorySlug: undefined,
  sectors: [],
  careerStages: [],
  experienceLevels: [],
  costTypes: [],
  organiserTypes: [],
  onlyFeatured: false,
  under18FriendlyOnly: false,
  sortBy: 'date-asc',
};

export default function EventsDiscoveryPage() {
  const [filters, setFilters] = useState<EventFilterState>(DEFAULT_FILTERS);
  const [isFiltering, setIsFiltering] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const isSearchActive = useMemo(() => {
    return (
      filters.searchQuery !== '' ||
      filters.when !== 'any' ||
      filters.where !== 'all' ||
      filters.locationQuery !== '' ||
      (filters.categorySlug !== undefined && filters.categorySlug !== 'all') ||
      filters.sectors.length > 0 ||
      filters.careerStages.length > 0 ||
      filters.costTypes.length > 0 ||
      filters.organiserTypes.length > 0 ||
      filters.onlyFeatured ||
      filters.under18FriendlyOnly
    );
  }, [filters]);

  // Live events only (moderation passed)
  const liveEvents = SEED_EVENTS.filter((e) => e.moderation.status === 'live');

  const filteredEvents = useMemo(() => {
    return filterEvents(liveEvents, filters);
  }, [filters]);

  const handleFilterChange = (updated: Partial<EventFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
    setIsFiltering(true);
    setTimeout(() => setIsFiltering(false), 300);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setShowAll(false);
  };

  // Section groupings for when no filters are active
  const featuredEvents = liveEvents.filter((e) => e.commercialTier === 'featured' || e.commercialTier === 'sponsored');
  const employerEvents = liveEvents.filter((e) =>
    ['meet-the-employer', 'employer-open-days', 'recruitment-events', 'hiring-days'].includes(e.categorySlug)
  );
  const careerFairs = liveEvents.filter((e) => e.categorySlug === 'career-fairs');
  const learningEvents = liveEvents.filter((e) =>
    ['workshops', 'masterclasses', 'webinars', 'skills-sessions', 'cv-interview-clinics'].includes(e.categorySlug)
  );
  const earlyCareerEvents = liveEvents.filter((e) =>
    e.careerStages.some((s) => ['high-school', 'college', 'university', 'graduate'].includes(s))
  );
  const entrepreneurshipEvents = liveEvents.filter((e) =>
    ['entrepreneurship', 'founder-events', 'startup-events'].includes(e.categorySlug)
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-10 border-b border-[var(--color-border-default)]">
        {/* Ambient atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[rgba(47,143,255,0.05)] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[rgba(47,143,255,0.04)] blur-3xl" />
        </div>

        <div className="container-editorial relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_rgba(47,143,255,0.7)]" />
              <span className="section-label text-[var(--accent-blue)]">CareerOS Events Platform</span>
            </div>

            <h1 className="text-display-section text-[var(--color-text-primary)] leading-[1.06]">
              Go where<br />opportunity happens.
            </h1>

            <p className="text-lead max-w-xl">
              CareerOS surfaces career fairs, employer events, recruitment days, workshops, networking sessions, and training events that can move your career meaningfully forward.
            </p>
          </div>

          {/* Dominant Discovery Filter Bar */}
          <div className="mt-8">
            <EventFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              activeResultCount={filteredEvents.length}
            />
          </div>
        </div>
      </section>

      <main id="main-content" className="container-editorial py-10 sm:py-14 space-y-14">

        {/* ── ACTIVE SEARCH RESULTS ──────────────────────────────── */}
        {isSearchActive && (
          <section aria-label="Search results">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h2 className="text-headline-editorial text-[var(--color-text-primary)] text-[1.4rem]">
                  {isFiltering ? 'Searching...' : `${filteredEvents.length} Event${filteredEvents.length !== 1 ? 's' : ''} Found`}
                </h2>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Showing results matching your current filters
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-[var(--color-text-secondary)] hover:text-white underline decoration-zinc-600"
              >
                Clear filters
              </button>
            </div>

            {filteredEvents.length > 0 ? (
              <div className={cn(
                'grid gap-5 transition-opacity duration-300',
                isFiltering && 'opacity-40',
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              )}>
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <EmptyStatePanel filters={filters} onFilterChange={handleFilterChange} onReset={handleResetFilters} />
            )}
          </section>
        )}

        {/* ── CURATED DISCOVERY SECTIONS (when not filtering) ───── */}
        {!isSearchActive && (
          <>
            {/* Featured & Sponsored Events */}
            {featuredEvents.length > 0 && (
              <DiscoverySection
                icon={<Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />}
                label="Featured Events"
                title="Highlighted opportunities from verified partners"
                events={featuredEvents}
                note="Featured and Sponsored placements are clearly labelled. CareerOS retains editorial authority over all listings regardless of commercial tier."
              />
            )}

            {/* This Week's Events */}
            <DiscoverySection
              icon={<Calendar className="w-4 h-4 text-[var(--accent-blue)]" />}
              label="Upcoming This Month"
              title="Events happening soon"
              events={liveEvents.slice(0, 3)}
              exploreHref={ROUTES.EVENTS_THIS_MONTH}
              exploreLabel="View all upcoming events"
            />

            {/* Meet Employers */}
            {employerEvents.length > 0 ? (
              <DiscoverySection
                icon={<Building2 className="w-4 h-4 text-[var(--accent-blue)]" />}
                label="Meet Employers"
                title="Open days, recruitment events & hiring days"
                events={employerEvents}
                exploreHref={ROUTES.EVENTS_MEET_THE_EMPLOYER}
                exploreLabel="Browse all employer events"
              />
            ) : (
              <SectionWithCTA
                icon={<Building2 className="w-4 h-4" />}
                title="Meet Employers"
                copy="Employer open days, recruitment events, and hiring days will appear here as they are verified and approved."
                ctaText="Are you an employer? List an event"
                ctaHref={ROUTES.EVENTS_PROMOTE}
              />
            )}

            {/* Career Fairs */}
            {careerFairs.length > 0 ? (
              <DiscoverySection
                icon={<Users className="w-4 h-4 text-[var(--accent-blue)]" />}
                label="Career Fairs"
                title="Multi-employer recruitment & discovery halls"
                events={careerFairs}
                exploreHref={ROUTES.EVENTS_CAREER_FAIRS}
                exploreLabel="All career fairs"
              />
            ) : null}

            {/* Apprenticeships */}
            <DiscoverySection
              icon={<GraduationCap className="w-4 h-4 text-[var(--accent-blue)]" />}
              label="Apprenticeships"
              title="Earn while you learn — debt-free career paths"
              events={liveEvents.filter((e) => e.categorySlug === 'apprenticeships')}
              exploreHref={ROUTES.EVENTS_APPRENTICESHIPS}
              exploreLabel="All apprenticeship events"
            />

            {/* Learn Something */}
            {learningEvents.length > 0 ? (
              <DiscoverySection
                icon={<Lightbulb className="w-4 h-4 text-[var(--accent-blue)]" />}
                label="Learn & Upskill"
                title="Workshops, masterclasses & skills sessions"
                events={learningEvents}
                exploreHref={ROUTES.EVENTS_WORKSHOPS}
                exploreLabel="All learning events"
              />
            ) : null}

            {/* Early Careers */}
            <DiscoverySection
              icon={<GraduationCap className="w-4 h-4 text-[var(--accent-blue)]" />}
              label="Early Careers"
              title="School, university, graduate & apprenticeship events"
              events={earlyCareerEvents.slice(0, 3)}
              exploreHref={ROUTES.EVENTS_GRADUATE}
              exploreLabel="All early career events"
            />

            {/* Entrepreneurship */}
            {entrepreneurshipEvents.length > 0 ? (
              <DiscoverySection
                icon={<Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />}
                label="Entrepreneurship"
                title="Founders, startups & venture events"
                events={entrepreneurshipEvents}
                exploreHref={ROUTES.EVENTS_ENTREPRENEURSHIP}
                exploreLabel="All founder events"
              />
            ) : null}

            {/* Online Events */}
            <DiscoverySection
              icon={<Globe className="w-4 h-4 text-[var(--accent-blue)]" />}
              label="Accessible Online"
              title="Virtual career events open everywhere"
              events={liveEvents.filter((e) => e.format === 'online' || e.format === 'hybrid').slice(0, 3)}
              exploreHref={ROUTES.EVENTS_ONLINE}
              exploreLabel="All online events"
            />

            {/* Age-Appropriate / Schools */}
            <DiscoverySection
              icon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}
              label="Safe for Under 18s"
              title="Age-appropriate career events with safeguarding"
              events={liveEvents.filter((e) => e.ageSuitability === 'suitable-for-under-18s')}
              exploreHref={ROUTES.EVENTS_SCHOOL_COLLEGE}
              exploreLabel="All school & college events"
            />

            {/* Category Quick Links */}
            <section className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="section-label">Browse by Category</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {EVENT_CATEGORIES.slice(0, 15).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/events/${cat.slug}`}
                    className="group p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[rgba(47,143,255,0.3)] hover:shadow-sm transition-all space-y-1"
                  >
                    {cat.badgeText && (
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                        {cat.badgeText}
                      </div>
                    )}
                    <div className="text-xs font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors leading-snug">
                      {cat.name}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Organiser CTA Banner */}
            <section className="relative overflow-hidden rounded-[var(--radius-card)] border border-[rgba(47,143,255,0.2)] bg-gradient-to-br from-[var(--color-surface-raised)] via-[var(--color-surface-base)] to-[rgba(47,143,255,0.04)]">
              <div className="p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="section-label text-[var(--accent-blue)]">For Event Organisers</span>
                  <h2 className="text-headline-editorial text-[var(--color-text-primary)] text-[1.6rem]">
                    Put your event in front of people building their future.
                  </h2>
                  <p className="text-body-editorial text-[var(--color-text-secondary)] text-sm">
                    CareerOS connects verified employers, universities, training providers, and professional bodies with an audience actively investing in their career, education, and professional growth.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link
                    href={ROUTES.EVENTS_PROMOTE}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-zinc-900 text-sm font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors"
                  >
                    <span>Promote Your Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={ROUTES.EVENTS_PROMOTE}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-white text-sm font-medium rounded-[var(--radius-button)] transition-colors"
                  >
                    View Promotion Options
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Discovery Section Sub-component
// ─────────────────────────────────────────────────────────────────

interface DiscoverySectionProps {
  icon?: React.ReactNode;
  label: string;
  title: string;
  events: CareerEvent[];
  note?: string;
  exploreHref?: string;
  exploreLabel?: string;
}

function DiscoverySection({ icon, label, title, events, note, exploreHref, exploreLabel }: DiscoverySectionProps) {
  if (events.length === 0) return null;

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {icon}
            <span className="section-label">{label}</span>
          </div>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)] text-[1.25rem] leading-tight">
            {title}
          </h2>
        </div>
        {exploreHref && exploreLabel && (
          <Link
            href={exploreHref}
            className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--accent-blue)] flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>{exploreLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.slice(0, 3).map((event, i) => (
          <EventCard key={event.id} event={event} priority={i === 0} />
        ))}
      </div>

      {note && (
        <div className="flex items-start gap-2 px-3 py-2 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)]">
          <Info className="w-3.5 h-3.5 text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />
          <p className="text-[11px] text-[var(--color-text-tertiary)]">{note}</p>
        </div>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// CTA section for empty category sections
// ─────────────────────────────────────────────────────────────────

interface SectionWithCTAProps {
  icon: React.ReactNode;
  title: string;
  copy: string;
  ctaText: string;
  ctaHref: string;
}

function SectionWithCTA({ icon, title, copy, ctaText, ctaHref }: SectionWithCTAProps) {
  return (
    <section className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-tertiary)] shrink-0">
          {icon}
        </div>
        <div className="space-y-0.5">
          <div className="text-sm font-bold text-[var(--color-text-primary)]">{title}</div>
          <div className="text-xs text-[var(--color-text-secondary)] max-w-md">{copy}</div>
        </div>
      </div>
      <Link
        href={ctaHref}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--accent-blue)] transition-colors shrink-0 underline decoration-zinc-600 underline-offset-2"
      >
        {ctaText}
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// Zero-Inventory Empty State
// ─────────────────────────────────────────────────────────────────

interface EmptyStatePanelProps {
  filters: EventFilterState;
  onFilterChange: (updated: Partial<EventFilterState>) => void;
  onReset: () => void;
}

function EmptyStatePanel({ filters, onFilterChange, onReset }: EmptyStatePanelProps) {
  return (
    <div className="py-16 px-8 text-center space-y-6 border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]">
      <div className="w-12 h-12 rounded-full bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center justify-center mx-auto">
        <Calendar className="w-6 h-6 text-[var(--color-text-tertiary)]" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
          No events match this search yet.
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
          CareerOS Events is growing. We only surface genuine, vetted opportunities — which means we will not fabricate results to fill the page.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 max-w-xs mx-auto text-xs">
        <span className="text-[var(--color-text-tertiary)] font-semibold uppercase tracking-wider">Try</span>
        <div className="flex flex-wrap justify-center gap-2">
          {filters.when !== 'any' && (
            <button
              type="button"
              onClick={() => onFilterChange({ when: 'any' })}
              className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] hover:border-zinc-500 text-[var(--color-text-secondary)] hover:text-white"
            >
              Expand date range
            </button>
          )}
          {filters.where !== 'all' && (
            <button
              type="button"
              onClick={() => onFilterChange({ where: 'all', locationQuery: '' })}
              className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] hover:border-zinc-500 text-[var(--color-text-secondary)] hover:text-white"
            >
              Include all locations
            </button>
          )}
          <button
            type="button"
            onClick={() => onFilterChange({ where: 'online' })}
            className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] hover:border-zinc-500 text-[var(--color-text-secondary)] hover:text-white"
          >
            Include online events
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-3 py-1.5 bg-white text-zinc-900 font-semibold rounded-[var(--radius-sm)] hover:bg-zinc-100"
          >
            Reset all filters
          </button>
        </div>
      </div>

      <div className="pt-4 border-t border-[var(--color-border-default)]">
        <p className="text-xs text-[var(--color-text-tertiary)]">
          Are you an organiser with a relevant event?{' '}
          <Link href={ROUTES.EVENTS_PROMOTE} className="text-[var(--accent-blue)] hover:underline">
            Apply to list it on CareerOS.
          </Link>
        </p>
      </div>
    </div>
  );
}
