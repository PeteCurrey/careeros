'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug, formatEventDate, formatEventTime, SEED_EVENTS } from '@/lib/events/data';
import { isEventSaved, toggleSaveEvent, getAttendanceIntent, setAttendanceIntent, AttendanceIntent } from '@/lib/events/store';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { PersonalizedEventMatch } from '@/components/events/PersonalizedEventMatch';
import { EventPreparationModal } from '@/components/events/EventPreparationModal';
import { EventReportModal } from '@/components/events/EventReportModal';
import { EventStructuredData } from '@/components/events/EventStructuredData';
import { EventCard } from '@/components/events/EventCard';
import { ROUTES } from '@/lib/routes';
import {
  Calendar,
  Clock,
  MapPin,
  Globe,
  Bookmark,
  BookmarkCheck,
  Share2,
  CalendarPlus,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  Flag,
  ArrowLeft,
  ChevronRight,
  Accessibility,
  ExternalLink,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-base)] flex items-center justify-center">
        <div className="w-5 h-5 border border-zinc-600 border-t-zinc-300 rounded-full animate-spin" />
      </div>
    );
  }

  const event = getEventBySlug(resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return <EventDetailContent event={event} />;
}

function EventDetailContent({ event }: { event: ReturnType<typeof getEventBySlug> & object }) {
  const [saved, setSaved] = useState(false);
  const [attendance, setAttendance] = useState<AttendanceIntent>(null);
  const [prepModalOpen, setPrepModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [simulateLoggedIn, setSimulateLoggedIn] = useState(true);

  useEffect(() => {
    setSaved(isEventSaved(event.id));
    setAttendance(getAttendanceIntent(event.id));

    const handleSaveChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ eventId: string; isSaved: boolean }>;
      if (customEvent.detail && customEvent.detail.eventId === event.id) {
        setSaved(customEvent.detail.isSaved);
      }
    };

    window.addEventListener('career_os_events_saved_change', handleSaveChange);
    return () => window.removeEventListener('career_os_events_saved_change', handleSaveChange);
  }, [event.id]);

  const handleSaveToggle = () => {
    const next = toggleSaveEvent(event.id);
    setSaved(next);
  };

  const handleAttendanceChange = (newIntent: AttendanceIntent) => {
    const updated = attendance === newIntent ? null : newIntent;
    setAttendance(updated);
    setAttendanceIntent(event.id, updated);
  };

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${event.title} — CareerOS Events`,
          text: event.shortSummary,
          url,
        });
      } catch {}
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2500);
    }
  };

  const handleDownloadIcs = () => {
    const startIso = `${event.startDate.replace(/-/g, '')}T${event.startTime.replace(':', '')}00Z`;
    const endIso = `${event.endDate.replace(/-/g, '')}T${event.endTime.replace(':', '')}00Z`;
    const location = event.venue
      ? `${event.venue.name}, ${event.venue.addressLine1}, ${event.venue.city} ${event.venue.postalCode}`
      : `Online via ${event.virtualAccess?.platformName || 'Virtual Link'}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//CareerOS//Events Platform//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.shortSummary}\\n\\nRegistration: ${event.registrationUrl}`,
      `LOCATION:${location}`,
      `DTSTART:${startIso}`,
      `DTEND:${endIso}`,
      `URL:${event.registrationUrl}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.slug}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Find similar events (same category or shared sector, excluding this one)
  const similarEvents = SEED_EVENTS.filter(
    (e) => e.id !== event.id && (e.categorySlug === event.categorySlug || e.sectors.some((s) => event.sectors.includes(s)))
  ).slice(0, 3);

  const isSponsored = event.commercialTier === 'sponsored';
  const isFeatured = event.commercialTier === 'featured';

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      <EventStructuredData event={event} />

      {/* ── BREADCRUMBS & TOP BAR ──────────────────────────────── */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] py-3">
        <div className="container-editorial flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] overflow-hidden">
            <Link href={ROUTES.EVENTS} className="hover:text-white flex items-center gap-1 shrink-0 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Events Hub</span>
            </Link>
            <span>/</span>
            <Link href={`/events/${event.categorySlug}`} className="hover:text-white shrink-0 capitalize transition-colors">
              {event.categorySlug.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)] truncate">{event.title}</span>
          </div>

          {/* Test simulation toggle for Career Twin personalized match */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-[var(--color-text-tertiary)]">Personalization Preview:</span>
            <button
              type="button"
              onClick={() => setSimulateLoggedIn(!simulateLoggedIn)}
              className={cn(
                'px-2 py-0.5 text-[10px] font-semibold rounded-[var(--radius-tag)] border transition-colors',
                simulateLoggedIn
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                  : 'bg-zinc-800 text-zinc-400 border-zinc-700'
              )}
            >
              {simulateLoggedIn ? 'Career Twin: Connected' : 'Guest: Logged Out'}
            </button>
          </div>
        </div>
      </div>

      {/* ── EVENT HERO ─────────────────────────────────────────── */}
      <section className="relative border-b border-[var(--color-border-default)] overflow-hidden">
        <div className="container-editorial py-8 sm:py-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Metadata & Headline */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                {isSponsored && (
                  <span className="px-2.5 py-0.5 bg-[var(--accent-blue)] text-white text-[10px] font-bold uppercase tracking-wider rounded-[var(--radius-tag)] shadow-xs flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Sponsored Opportunity
                  </span>
                )}
                {isFeatured && !isSponsored && (
                  <span className="px-2.5 py-0.5 bg-white text-zinc-900 text-[10px] font-bold uppercase tracking-wider rounded-[var(--radius-tag)] shadow-xs">
                    Featured Event
                  </span>
                )}
                <span className="px-2.5 py-0.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] rounded-[var(--radius-tag)]">
                  {event.format === 'in-person' ? 'In Person' : event.format === 'online' ? 'Online Virtual' : 'Hybrid Event'}
                </span>
                <span className="px-2.5 py-0.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[10px] font-semibold uppercase tracking-wider text-[var(--color-taupe-300)] rounded-[var(--radius-tag)]">
                  {event.costType === 'free' ? 'Free Event' : event.priceDisplay || 'Paid'}
                </span>
                {event.ageSuitability === 'suitable-for-under-18s' && (
                  <span className="px-2.5 py-0.5 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold uppercase tracking-wider rounded-[var(--radius-tag)] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Suitable for Under 18s
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-display-section text-[var(--color-text-primary)] leading-[1.08] tracking-tight">
                {event.title}
              </h1>

              {/* Organizer Profile Link */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-9 h-9 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-primary)] font-bold text-xs">
                  {event.organizer.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">{event.organizer.name}</span>
                    {event.organizer.verificationStatus !== 'unverified' && (
                      <span
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium"
                        title={`Verified ${event.organizer.type.replace('-', ' ')} on CareerOS`}
                      >
                        <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-tertiary)] capitalize">
                    {event.organizer.type.replace('-', ' ')} · {event.organizer.headquartersCity || 'Verified Organizer'}
                  </div>
                </div>
              </div>

              {/* Date & Location Callout Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                
                {/* Date & Time */}
                <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                    <span>When</span>
                  </div>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                    {formatEventDate(event.startDate)}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-secondary)]">
                    {formatEventTime(event.startTime, event.endTime, event.timezone)}
                  </div>
                </div>

                {/* Where */}
                <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                    <span>Where</span>
                  </div>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)] truncate">
                    {event.format === 'online'
                      ? 'Online Virtual Stage'
                      : event.venue?.name || 'In-Person Venue'}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-secondary)] truncate">
                    {event.format === 'online'
                      ? event.virtualAccess?.platformName || 'Interactive livestream link'
                      : `${event.venue?.city}, ${event.venue?.postalCode}`}
                  </div>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <span>Register on Organizer Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* AI Event Prep Launcher */}
                <button
                  type="button"
                  onClick={() => setPrepModalOpen(true)}
                  className="px-4 py-3 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.3)] hover:border-[var(--accent-blue)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] transition-colors inline-flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  <span>Prepare for this Event</span>
                </button>

                {/* Save Toggle */}
                <button
                  type="button"
                  onClick={handleSaveToggle}
                  aria-label="Save this event"
                  className={cn(
                    'p-3 rounded-[var(--radius-button)] border text-xs font-semibold flex items-center gap-1.5 transition-colors',
                    saved
                      ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)] text-white'
                      : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                  )}
                >
                  {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
                </button>

                {/* Calendar Export */}
                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  title="Add to Calendar (.ics download)"
                  className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-zinc-500 rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:text-white transition-colors"
                >
                  <CalendarPlus className="w-4 h-4" />
                </button>

                {/* Share */}
                <button
                  type="button"
                  onClick={handleShare}
                  title="Share Event"
                  className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-zinc-500 rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:text-white transition-colors relative"
                >
                  <Share2 className="w-4 h-4" />
                  {shareSuccess && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-900 text-white text-[10px] rounded whitespace-nowrap border border-zinc-700 shadow-md">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>

              {/* Attendance Intent Badges */}
              <div className="pt-2 flex items-center gap-3 text-xs">
                <span className="text-[11px] text-[var(--color-taupe-300)] uppercase tracking-wider font-semibold">
                  Your Status:
                </span>
                <button
                  type="button"
                  onClick={() => handleAttendanceChange('interested')}
                  className={cn(
                    'px-2.5 py-1 rounded-[var(--radius-tag)] border text-[11px] font-medium transition-colors cursor-pointer',
                    attendance === 'interested'
                      ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)] text-white'
                      : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                  )}
                >
                  Interested
                </button>
                <button
                  type="button"
                  onClick={() => handleAttendanceChange('attending')}
                  className={cn(
                    'px-2.5 py-1 rounded-[var(--radius-tag)] border text-[11px] font-medium transition-colors cursor-pointer',
                    attendance === 'attending'
                      ? 'bg-emerald-700 border-emerald-500 text-white'
                      : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                  )}
                >
                  Attending
                </button>
              </div>

            </div>

            {/* Right: Event Banner Image & Quick Personalized Match */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-video w-full rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] shadow-lg bg-zinc-900">
                <img
                  src={event.heroImageUrl}
                  alt={event.coverImageAlt || event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Personalized Match Card */}
              <PersonalizedEventMatch
                event={event}
                isLoggedIn={simulateLoggedIn}
              />
            </div>

          </div>

        </div>
      </section>

      {/* ── EVENT BODY CONTENT ─────────────────────────────────── */}
      <main className="container-editorial py-10 sm:py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1. Overview */}
            <section className="space-y-3">
              <span className="section-label">Event Overview</span>
              <div className="prose prose-invert max-w-none text-body-editorial text-[var(--color-text-secondary)] space-y-4">
                {event.fullDescription.split('\n\n').map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* 2. What You'll Get */}
            {event.keyOutcomes.length > 0 && (
              <section className="space-y-3">
                <span className="section-label">What You&apos;ll Get Out of This Event</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.keyOutcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-[var(--color-text-primary)] leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. Structured Agenda / Timeline */}
            {event.agenda.length > 0 && (
              <section className="space-y-4">
                <span className="section-label">Schedule &amp; Agenda</span>
                <div className="space-y-3">
                  {event.agenda.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-4"
                    >
                      <span className="font-mono text-xs text-[var(--accent-blue)] font-bold shrink-0 w-16">
                        {item.time}
                      </span>
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-[var(--color-text-primary)]">{item.title}</div>
                        {item.description && (
                          <div className="text-[11px] text-[var(--color-text-secondary)]">{item.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Participating Organizations / Employers */}
            {event.participatingOrganizations.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="section-label">Participating Employers &amp; Organizations</span>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{event.participatingOrganizations.length} organizations</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.participatingOrganizations.map((org) => (
                    <div
                      key={org.id}
                      className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[var(--accent-blue)]" />
                          <span className="text-xs font-bold text-[var(--color-text-primary)]">{org.name}</span>
                        </div>
                        {org.verified && (
                          <span
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium"
                            title="Verified by CareerOS"
                          >
                            <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>

                      {org.hiringRoles && org.hiringRoles.length > 0 && (
                        <div className="space-y-1 pt-1 border-t border-[var(--color-border-subtle)]">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                            Active Hiring Roles:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {org.hiringRoles.map((r) => (
                              <span
                                key={r}
                                className="px-2 py-0.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[10px] text-[var(--color-text-secondary)] rounded-[var(--radius-tag)]"
                              >
                                {r}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Speakers */}
            {event.speakers.length > 0 && (
              <section className="space-y-4">
                <span className="section-label">Featured Speakers</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.speakers.map((spk) => (
                    <div
                      key={spk.id}
                      className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center justify-center font-bold text-xs text-[var(--accent-blue)] shrink-0">
                        {spk.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-[var(--color-text-primary)]">{spk.name}</div>
                        <div className="text-[11px] text-[var(--color-text-tertiary)] font-medium">
                          {spk.role} · {spk.organization}
                        </div>
                        {spk.bio && (
                          <div className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pt-1">
                            {spk.bio}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. Venue & Transit or Virtual Access */}
            <section className="space-y-3">
              <span className="section-label">
                {event.format === 'online' ? 'Virtual Access Details' : 'Venue &amp; Getting There'}
              </span>
              
              {event.format === 'online' ? (
                <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-primary)]">
                    <Globe className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>{event.virtualAccess?.platformName || 'CareerOS Virtual Stage'}</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {event.virtualAccess?.instructions}
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">
                      {event.venue?.name}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      {event.venue?.addressLine1}, {event.venue?.city}, {event.venue?.postalCode}, {event.venue?.country}
                    </div>
                  </div>

                  {event.venue?.transitInstructions && (
                    <div className="pt-2 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)]">
                      <strong className="text-[var(--color-text-secondary)]">Public Transit: </strong>
                      {event.venue.transitInstructions}
                    </div>
                  )}

                  {event.venue?.parkingInfo && (
                    <div className="text-xs text-[var(--color-text-tertiary)]">
                      <strong className="text-[var(--color-text-secondary)]">Parking: </strong>
                      {event.venue.parkingInfo}
                    </div>
                  )}
                </div>
              )}
            </section>

          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Who It's For & Eligibility */}
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="section-label">Who It&apos;s For</span>

              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                  Recommended Career Stages:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {event.careerStages.map((st) => (
                    <span
                      key={st}
                      className="px-2 py-0.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[11px] text-[var(--color-text-primary)] rounded-[var(--radius-tag)] capitalize"
                    >
                      {st.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {event.entryRequirements && event.entryRequirements.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-subtle)]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                    Entry &amp; Attendance Requirements:
                  </div>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    {event.entryRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[var(--accent-blue)]">·</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.dressCode && (
                <div className="text-xs text-[var(--color-text-secondary)] pt-2 border-t border-[var(--color-border-subtle)]">
                  <strong className="text-[var(--color-text-primary)]">Dress Code: </strong>
                  {event.dressCode}
                </div>
              )}
            </div>

            {/* Accessibility Features */}
            {event.accessibilityFeatures.length > 0 && (
              <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span className="section-label">Accessibility</span>
                </div>
                <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                  {event.accessibilityFeatures.map((acc) => (
                    <li key={acc.id} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{acc.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* About the Organizer */}
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="section-label">About the Organizer</span>
              
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-[var(--color-text-primary)]">{event.organizer.name}</div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {event.organizer.about}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-tertiary)]">
                  Verified since {event.organizer.verifiedAt?.split('-')[0] || '2025'}
                </span>
                <a
                  href={event.organizer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Safety & Report Listing */}
            <div className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-[11px] text-[var(--color-text-tertiary)]">
                CareerOS enforces strict editorial and safety standards on all events.
              </div>
              <button
                type="button"
                onClick={() => setReportModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Report this listing</span>
              </button>
            </div>

          </div>

        </div>

        {/* ── SIMILAR EVENTS DISCOVERY RAIL ──────────────────────── */}
        {similarEvents.length > 0 && (
          <section className="space-y-5 pt-8 border-t border-[var(--color-border-default)]">
            <div className="flex items-center justify-between">
              <span className="section-label">Similar Upcoming Opportunities</span>
              <Link href={ROUTES.EVENTS} className="text-xs text-[var(--accent-blue)] hover:underline flex items-center gap-1">
                <span>View all events</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* AI Preparation Modal */}
      <EventPreparationModal
        event={event}
        isOpen={prepModalOpen}
        onClose={() => setPrepModalOpen(false)}
      />

      {/* Report Event Modal */}
      <EventReportModal
        eventId={event.id}
        eventTitle={event.title}
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  );
}
