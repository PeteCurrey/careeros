'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllEvents } from '@/lib/events/store';
import { CareerEvent, ModerationStatus } from '@/types/events/platform';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { ROUTES } from '@/lib/routes';
import {
  Building2,
  Calendar,
  Eye,
  Bookmark,
  ExternalLink,
  Plus,
  Sparkles,
  ShieldCheck,
  Clock,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function OrganiserDashboardPage() {
  const [events, setEvents] = useState<CareerEvent[]>([]);
  const [activeTab, setActiveTab] = useState<'live' | 'under-review' | 'changes-requested' | 'draft' | 'all'>('live');

  useEffect(() => {
    setEvents(getAllEvents());

    const handleUpdate = () => {
      setEvents(getAllEvents());
    };

    window.addEventListener('career_os_moderation_updated', handleUpdate);
    return () => window.removeEventListener('career_os_moderation_updated', handleUpdate);
  }, []);

  const filteredEvents = events.filter((e) => {
    if (activeTab === 'all') return true;
    return e.moderation.status === activeTab;
  });

  const liveCount = events.filter((e) => e.moderation.status === 'live').length;
  const underReviewCount = events.filter((e) => e.moderation.status === 'under-review').length;
  const changesCount = events.filter((e) => e.moderation.status === 'changes-requested').length;

  const renderStatusBadge = (status: ModerationStatus) => {
    switch (status) {
      case 'live':
        return (
          <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-700 text-[10px] font-bold uppercase rounded-[var(--radius-tag)] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live &amp; Discoverable
          </span>
        );
      case 'under-review':
        return (
          <span className="px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-700 text-[10px] font-bold uppercase rounded-[var(--radius-tag)] flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Under Editorial Review
          </span>
        );
      case 'changes-requested':
        return (
          <span className="px-2 py-0.5 bg-purple-950 text-purple-300 border border-purple-700 text-[10px] font-bold uppercase rounded-[var(--radius-tag)] flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            Changes Requested
          </span>
        );
      case 'rejected':
      case 'suspended':
        return (
          <span className="px-2 py-0.5 bg-red-950 text-red-300 border border-red-700 text-[10px] font-bold uppercase rounded-[var(--radius-tag)] flex items-center gap-1">
            <XCircle className="w-3 h-3" />
            {status}
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 text-[10px] font-bold uppercase rounded-[var(--radius-tag)]">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      
      {/* ── HEADER ───────────────────────────────────────────────── */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] py-6">
        <div className="container-editorial flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="section-label text-[var(--accent-blue)]">Organiser Portal</span>
              <VerificationBadge state="EMPLOYER_VERIFIED" size="sm" />
            </div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              Event Management &amp; Engagement
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={ROUTES.EVENTS_ADMIN}
              className="px-3 py-2 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-zinc-500 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-white rounded-[var(--radius-button)]"
            >
              Moderation Console
            </Link>
            <Link
              href={ROUTES.EVENTS_PROMOTE_CREATE}
              className="px-4 py-2 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Event</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="container-editorial py-8 sm:py-12 space-y-8">

        {/* ── ANALYTICS METRICS BAR ────────────────────────────────── */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="section-label">Attendee Engagement Telemetry</span>
            <span className="text-[11px] text-[var(--color-text-tertiary)]">Zero PII · Privacy-First</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1">
              <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase font-semibold">Active Live Events</div>
              <div className="text-2xl font-bold text-[var(--color-text-primary)]">{liveCount}</div>
            </div>

            <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1">
              <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase font-semibold">Under Review</div>
              <div className="text-2xl font-bold text-amber-400">{underReviewCount}</div>
            </div>

            <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1">
              <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase font-semibold">Total Event Views</div>
              <div className="text-2xl font-bold text-[var(--color-text-primary)]">--</div>
              <div className="text-[10px] text-[var(--color-text-tertiary)]">Populates with real live traffic</div>
            </div>

            <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1">
              <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase font-semibold">Registration Clicks</div>
              <div className="text-2xl font-bold text-[var(--color-text-primary)]">--</div>
              <div className="text-[10px] text-[var(--color-text-tertiary)]">Outbound click-throughs</div>
            </div>
          </div>
        </section>

        {/* ── EVENT LISTINGS TABLE & TABS ─────────────────────────── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-3">
            <div className="flex items-center gap-2">
              {[
                { key: 'live', label: `Live (${liveCount})` },
                { key: 'under-review', label: `Under Review (${underReviewCount})` },
                { key: 'changes-requested', label: `Changes (${changesCount})` },
                { key: 'all', label: `All Events (${events.length})` },
              ].map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(t.key as any)}
                  className={cn(
                    'px-3 py-1.5 rounded-[var(--radius-button)] text-xs font-semibold transition-colors',
                    activeTab === t.key
                      ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-border-default)]'
                      : 'text-[var(--color-text-secondary)] hover:text-white'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="space-y-3">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-4 sm:p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      {renderStatusBadge(evt.moderation.status)}
                      <span className="text-[11px] text-[var(--color-taupe-300)] uppercase tracking-wider font-semibold">
                        {evt.categorySlug.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                      {evt.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-secondary)]">
                      <span>{evt.startDate} ({evt.startTime})</span>
                      <span>·</span>
                      <span>{evt.format === 'online' ? 'Online' : evt.venue?.city || 'In-Person'}</span>
                      <span>·</span>
                      <span className="capitalize">{evt.commercialTier} Tier</span>
                    </div>

                    {evt.moderation.reviewerNotes && (
                      <div className="p-2.5 bg-amber-950/30 border border-amber-600/30 rounded-[var(--radius-sm)] text-xs text-amber-300 mt-2">
                        <strong>Editorial Feedback: </strong>
                        {evt.moderation.reviewerNotes}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <Link
                      href={`/events/e/${evt.slug}`}
                      className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-zinc-500 text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Live URL</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 px-6 text-center border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] space-y-3">
              <Calendar className="w-8 h-8 text-[var(--color-text-tertiary)] mx-auto" />
              <div className="text-sm font-bold text-[var(--color-text-primary)]">No events in this view</div>
              <p className="text-xs text-[var(--color-text-secondary)] max-w-sm mx-auto">
                Events you submit will appear here with live moderation updates from the CareerOS editorial team.
              </p>
              <Link
                href={ROUTES.EVENTS_PROMOTE_CREATE}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] mt-2"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create an Event</span>
              </Link>
            </div>
          )}
        </section>

      </main>

    </div>
  );
}
