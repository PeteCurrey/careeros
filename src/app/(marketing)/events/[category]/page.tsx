'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EventCard } from '@/components/events/EventCard';
import { EventFilters } from '@/components/events/EventFilters';
import { SEED_EVENTS, EVENT_CATEGORIES, filterEvents, getCategoryBySlug } from '@/lib/events/data';
import { EventFilterState } from '@/types/events/platform';
import { ROUTES } from '@/lib/routes';
import { ArrowRight, ArrowLeft, Sparkles, Calendar, Info } from 'lucide-react';

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
  organizerTypes: [],
  onlyFeatured: false,
  under18FriendlyOnly: false,
  sortBy: 'date-asc',
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Determine if a slug is a category or an event slug
function isKnownCategory(slug: string): boolean {
  return EVENT_CATEGORIES.some((c) => c.slug === slug);
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [resolvedParams, setResolvedParams] = React.useState<{ category: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-base)] flex items-center justify-center">
        <div className="w-5 h-5 border border-zinc-600 border-t-zinc-300 rounded-full animate-spin" />
      </div>
    );
  }

  const { category: categorySlug } = resolvedParams;

  // Check if it's a known category
  if (!isKnownCategory(categorySlug)) {
    notFound();
  }

  return <CategoryContent categorySlug={categorySlug} />;
}

function CategoryContent({ categorySlug }: { categorySlug: string }) {
  const category = getCategoryBySlug(categorySlug);
  const [filters, setFilters] = useState<EventFilterState>({
    ...DEFAULT_FILTERS,
    categorySlug,
  });

  const liveEvents = SEED_EVENTS.filter((e) => e.moderation.status === 'live');
  const categoryEvents = liveEvents.filter((e) => e.categorySlug === categorySlug);

  const filteredEvents = useMemo(() => {
    return filterEvents(liveEvents, filters);
  }, [filters, liveEvents]);

  const handleFilterChange = (updated: Partial<EventFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleReset = () => {
    setFilters({ ...DEFAULT_FILTERS, categorySlug });
  };

  // Related categories from the same group
  const relatedCategories = category
    ? EVENT_CATEGORIES.filter(
        (c) => c.group === category.group && c.slug !== categorySlug
      ).slice(0, 6)
    : [];

  if (!category) return null;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      {/* ── CATEGORY HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-14 pb-10 border-b border-[var(--color-border-default)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[rgba(47,143,255,0.05)] blur-3xl" />
        </div>

        <div className="container-editorial relative z-10 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
            <Link href={ROUTES.EVENTS} className="hover:text-[var(--color-text-primary)] flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3 h-3" />
              <span>All Events</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)]">{category.name}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              {category.badgeText && (
                <span className="px-2 py-0.5 bg-[rgba(47,143,255,0.12)] border border-[rgba(47,143,255,0.25)] text-[10px] font-bold uppercase tracking-wider text-[var(--accent-blue)] rounded-[var(--radius-tag)]">
                  {category.badgeText}
                </span>
              )}
              <span className="section-label text-[var(--color-taupe-300)]">
                CareerOS Events
              </span>
            </div>

            <h1 className="text-display-section leading-[1.06]">
              {category.name}
            </h1>

            <p className="text-lead max-w-2xl">
              {category.shortDescription}
            </p>
          </div>

          {/* Filter bar pre-scoped to this category */}
          <div className="mt-4">
            <EventFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleReset}
            />
          </div>
        </div>
      </section>

      <main className="container-editorial py-10 sm:py-14 space-y-12">

        {/* ── EVENT LISTINGS ──────────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <span className="section-label">{category.name} Events</span>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {filteredEvents.length > 0
                  ? `${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''} found`
                  : 'No events currently match your filters'}
              </p>
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEvents.map((event, i) => (
                <EventCard key={event.id} event={event} priority={i < 3} />
              ))}
            </div>
          ) : (
            <CategoryEmptyState
              categoryName={category.name}
              onReset={handleReset}
              onFilterChange={handleFilterChange}
            />
          )}
        </section>

        {/* ── EDITORIAL DESCRIPTION ───────────────────────────────── */}
        <section className="max-w-2xl space-y-4 pt-4 border-t border-[var(--color-border-default)]">
          <h2 className="text-headline-editorial text-[var(--color-text-primary)] text-[1.2rem]">
            About {category.name} on CareerOS
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            {category.longDescription}
          </p>
          <div className="flex items-start gap-2 p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)]">
            <Info className="w-3.5 h-3.5 text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--color-text-tertiary)]">
              All events on CareerOS are independently reviewed by our editorial team before publication. Payment status does not influence editorial approval. If you believe an event does not meet our standards, you can report it directly from the event page.
            </p>
          </div>
        </section>

        {/* ── RELATED CATEGORIES ──────────────────────────────────── */}
        {relatedCategories.length > 0 && (
          <section className="space-y-4">
            <span className="section-label">Related Event Categories</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/events/${cat.slug}`}
                  className="group p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[rgba(47,143,255,0.3)] transition-all space-y-1"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                    {cat.badgeText || cat.group}
                  </div>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors leading-snug">
                    {cat.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── ORGANIZER CTA ────────────────────────────────────────── */}
        <section className="p-7 sm:p-10 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.18)] rounded-[var(--radius-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-[var(--accent-blue)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Organize a {category.name} Event?</span>
            </div>
            <h2 className="text-base font-bold text-[var(--color-text-primary)]">
              List your event on CareerOS and reach an audience actively building their careers.
            </h2>
            <p className="text-xs text-[var(--color-text-secondary)]">
              All submissions are reviewed by our editorial team. Approval is based on quality and alignment with CareerOS standards — not payment tier.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <Link
              href={ROUTES.EVENTS_PROMOTE_CREATE}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors"
            >
              <span>List an Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={ROUTES.EVENTS_PROMOTE}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-white text-xs font-medium rounded-[var(--radius-button)] transition-colors"
            >
              View Options
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}

function CategoryEmptyState({
  categoryName,
  onReset,
  onFilterChange,
}: {
  categoryName: string;
  onReset: () => void;
  onFilterChange: (updated: Partial<EventFilterState>) => void;
}) {
  return (
    <div className="py-14 px-8 text-center space-y-6 border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]">
      <div className="w-12 h-12 rounded-full bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center justify-center mx-auto">
        <Calendar className="w-6 h-6 text-[var(--color-text-tertiary)]" />
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-bold text-[var(--color-text-primary)]">
          No {categoryName} events match this search yet.
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto">
          CareerOS only shows verified, approved events — which means we never fabricate listings to populate the page.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 text-xs">
        <button
          type="button"
          onClick={() => onFilterChange({ when: 'any' })}
          className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] hover:border-zinc-500 text-[var(--color-text-secondary)] hover:text-white"
        >
          Expand date range
        </button>
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

      <p className="text-xs text-[var(--color-text-tertiary)]">
        Organizing a {categoryName} event?{' '}
        <Link href={ROUTES.EVENTS_PROMOTE_CREATE} className="text-[var(--accent-blue)] hover:underline">
          Apply to list it on CareerOS.
        </Link>
      </p>
    </div>
  );
}
