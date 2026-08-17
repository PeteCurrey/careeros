'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CareerEvent } from '@/types/events/platform';
import { formatEventDate, formatEventTime } from '@/lib/events/data';
import { isEventSaved, toggleSaveEvent } from '@/lib/events/store';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import {
  Calendar,
  Clock,
  MapPin,
  Globe,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: CareerEvent;
  priority?: boolean;
  compact?: boolean;
  className?: string;
}

export function EventCard({ event, priority = false, compact = false, className }: EventCardProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isEventSaved(event.id));

    const handleSaveChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ eventId: string; isSaved: boolean }>;
      if (customEvent.detail && customEvent.detail.eventId === event.id) {
        setSaved(customEvent.detail.isSaved);
      }
    };

    window.addEventListener('career_os_events_saved_change', handleSaveChange);
    return () => window.removeEventListener('career_os_events_saved_change', handleSaveChange);
  }, [event.id]);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleSaveEvent(event.id);
    setSaved(newState);
  };

  const isSponsored = event.commercialTier === 'sponsored';
  const isFeatured = event.commercialTier === 'featured';

  return (
    <article
      className={cn(
        'group relative flex flex-col bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden transition-all duration-200 hover:border-[rgba(47,143,255,0.3)] hover:shadow-lg',
        isSponsored && 'border-[rgba(47,143,255,0.25)] bg-gradient-to-b from-[var(--color-surface-raised)] to-[rgba(47,143,255,0.03)]',
        isFeatured && 'border-[rgba(255,255,255,0.18)]',
        className
      )}
    >
      {/* Visual Media Banner */}
      {!compact && (
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
          <img
            src={event.heroImageUrl}
            alt={event.coverImageAlt || event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading={priority ? 'eager' : 'lazy'}
          />

          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top Badges (Commercial status & Format) */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 pointer-events-auto">
              {isSponsored && (
                <span className="px-2 py-0.5 bg-[var(--accent-blue)] text-white text-[10px] font-bold uppercase tracking-wider rounded-[var(--radius-tag)] shadow-xs flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  Sponsored
                </span>
              )}
              {isFeatured && !isSponsored && (
                <span className="px-2 py-0.5 bg-white/90 text-zinc-900 text-[10px] font-bold uppercase tracking-wider rounded-[var(--radius-tag)] shadow-xs">
                  Featured
                </span>
              )}
              <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-zinc-200 text-[10px] font-medium rounded-[var(--radius-tag)] border border-white/10 uppercase tracking-wider">
                {event.format === 'in-person' ? 'In Person' : event.format === 'online' ? 'Online' : 'Hybrid'}
              </span>
            </div>

            {/* Bookmark Action */}
            <button
              type="button"
              onClick={handleSaveClick}
              aria-label={saved ? `Remove ${event.title} from saved events` : `Save ${event.title}`}
              className={cn(
                'pointer-events-auto w-8 h-8 rounded-full backdrop-blur-md border flex items-center justify-center transition-colors shadow-xs',
                saved
                  ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)] text-white'
                  : 'bg-black/60 border-white/15 text-zinc-300 hover:text-white hover:bg-black/80'
              )}
            >
              {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>

          {/* Bottom Banner Overlays (Price & Under 18 safety) */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none text-xs text-white">
            <span className="font-semibold px-2 py-0.5 bg-black/70 backdrop-blur-md rounded-[var(--radius-sm)] border border-white/10 text-[11px]">
              {event.costType === 'free' ? 'Free Event' : event.priceDisplay || 'Paid'}
            </span>

            {event.ageSuitability === 'suitable-for-under-18s' && (
              <span className="px-2 py-0.5 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[10px] font-medium rounded-[var(--radius-sm)] backdrop-blur-sm flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Under 18s
              </span>
            )}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Organiser line */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
            <div className="flex items-center gap-1.5 font-medium truncate max-w-[80%]">
              <span className="truncate">{event.organiser.name}</span>
              {event.organiser.verificationStatus !== 'unverified' && (
                <span
                  className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium"
                  title={`Verified ${event.organiser.type.replace('-', ' ')} on CareerOS`}
                >
                  <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Verified</span>
                </span>
              )}
            </div>
            <span className="text-[11px] text-[var(--color-taupe-300)] uppercase tracking-wider font-semibold shrink-0">
              {event.categorySlug.replace('-', ' ')}
            </span>
          </div>

          {/* Event Title */}
          <h3 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-white transition-colors leading-snug line-clamp-2 tracking-tight">
            <Link href={`/events/e/${event.slug}`} className="focus-visible:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {event.title}
            </Link>
          </h3>

          {/* Short description */}
          <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed pt-1">
            {event.shortSummary}
          </p>
        </div>

        {/* Date, Time & Venue Key Info */}
        <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0" />
            <span className="font-medium text-[var(--color-text-primary)]">
              {formatEventDate(event.startDate)}
            </span>
            <span className="text-[var(--color-text-tertiary)]">·</span>
            <span className="text-[var(--color-text-secondary)] text-[11px]">
              {event.startTime} {event.timezone.split('/')[1]?.replace('_', ' ') || event.timezone}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {event.format === 'online' ? (
              <>
                <Globe className="w-3.5 h-3.5 text-[var(--color-taupe-300)] shrink-0" />
                <span className="truncate text-[11px]">Online · {event.virtualAccess?.platformName || 'Virtual Broadcast'}</span>
              </>
            ) : (
              <>
                <MapPin className="w-3.5 h-3.5 text-[var(--color-taupe-300)] shrink-0" />
                <span className="truncate text-[11px]">
                  {event.venue ? `${event.venue.name}, ${event.venue.city}` : 'Location Confirmed Upon RSVP'}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Tags & Action Row */}
        <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-2">
          {/* Sector tags */}
          <div className="flex items-center gap-1.5 overflow-hidden">
            {event.sectors.slice(0, 2).map((sec) => (
              <span
                key={sec}
                className="px-2 py-0.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[10px] text-[var(--color-text-tertiary)] rounded-[var(--radius-tag)] truncate max-w-[130px]"
              >
                {sec}
              </span>
            ))}
          </div>

          {/* View CTA */}
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--accent-blue)] transition-colors shrink-0">
            <span>View Event</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>
    </article>
  );
}
