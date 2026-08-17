'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllEvents, updateEventModerationStatus, getEventReports } from '@/lib/events/store';
import { CareerEvent, ModerationStatus, EventReportSubmission } from '@/types/events/platform';
import { ROUTES } from '@/lib/routes';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Eye,
  Flag,
  FileText,
  Lock,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function EventAdminModerationPage() {
  const [events, setEvents] = useState<CareerEvent[]>([]);
  const [reports, setReports] = useState<EventReportSubmission[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [adminName, setAdminName] = useState('Senior Editorial Lead');
  const [editorialApproved, setEditorialApproved] = useState(true);
  const [commercialApproved, setCommercialApproved] = useState(true);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  useEffect(() => {
    setEvents(getAllEvents());
    setReports(getEventReports());

    const handleUpdate = () => {
      setEvents(getAllEvents());
      setReports(getEventReports());
    };

    window.addEventListener('career_os_moderation_updated', handleUpdate);
    return () => window.removeEventListener('career_os_moderation_updated', handleUpdate);
  }, []);

  const selectedEvent = events.find((e) => e.id === selectedEventId) || events[0];

  const handleSetStatus = (newStatus: ModerationStatus) => {
    if (!selectedEvent) return;

    updateEventModerationStatus(
      selectedEvent.id,
      newStatus,
      notes || `Status set to ${newStatus} by ${adminName}`,
      adminName,
      editorialApproved,
      commercialApproved
    );

    setActionSuccess(`Event status successfully updated to "${newStatus}".`);
    setNotes('');
    setTimeout(() => setActionSuccess(null), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      
      {/* ── HEADER ───────────────────────────────────────────────── */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] py-6">
        <div className="container-editorial flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="section-label text-emerald-400">CareerOS Governance &amp; Moderation</span>
            </div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              Event Moderation &amp; Editorial Console
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={ROUTES.EVENTS_ORGANISERS_DASHBOARD}
              className="text-xs text-[var(--color-text-secondary)] hover:text-white"
            >
              Organiser Dashboard
            </Link>
            <Link
              href={ROUTES.EVENTS}
              className="px-3 py-1.5 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)]"
            >
              Public Hub
            </Link>
          </div>
        </div>
      </div>

      <main className="container-editorial py-8 sm:py-12 space-y-8">
        
        {/* Editorial Separation Callout */}
        <div className="p-4 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.25)] rounded-[var(--radius-card)] flex items-start gap-3">
          <Lock className="w-5 h-5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-bold text-[var(--color-text-primary)]">
              Editorial Approval Principle: Independence from Commercial Placement
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Advertisers and employers who purchase Featured or Sponsored placements MUST pass editorial safety, anti-exploitation, and child safeguarding checks. Paid placement status does not grant exemption from moderation.
            </p>
          </div>
        </div>

        {actionSuccess && (
          <div className="p-3 bg-emerald-950 text-emerald-300 border border-emerald-700 rounded-[var(--radius-sm)] text-xs font-semibold animate-in fade-in">
            {actionSuccess}
          </div>
        )}

        {/* ── QUEUE & DETAIL SPLIT PANE ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Submissions Queue (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="section-label">Submissions Review Queue ({events.length})</span>
            </div>

            <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
              {events.map((evt) => {
                const isSelected = selectedEvent?.id === evt.id;
                return (
                  <button
                    key={evt.id}
                    type="button"
                    onClick={() => {
                      setSelectedEventId(evt.id);
                      setEditorialApproved(evt.moderation.editorialApproved);
                      setCommercialApproved(evt.moderation.commercialApproved);
                    }}
                    className={cn(
                      'w-full p-4 rounded-[var(--radius-card)] border text-left space-y-2 transition-all cursor-pointer',
                      isSelected
                        ? 'bg-[var(--color-surface-raised)] border-[var(--accent-blue)] shadow-md'
                        : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] hover:border-zinc-500'
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)] truncate">
                        {evt.organiser.name}
                      </span>
                      <span
                        className={cn(
                          'px-2 py-0.5 text-[9px] font-bold uppercase rounded-[var(--radius-tag)]',
                          evt.moderation.status === 'live'
                            ? 'bg-emerald-950 text-emerald-300'
                            : evt.moderation.status === 'under-review'
                            ? 'bg-amber-950 text-amber-300'
                            : 'bg-zinc-800 text-zinc-300'
                        )}
                      >
                        {evt.moderation.status}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[var(--color-text-primary)] line-clamp-2 leading-snug">
                      {evt.title}
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-[var(--color-text-tertiary)]">
                      <span>{evt.categorySlug}</span>
                      <span>·</span>
                      <span className="capitalize">{evt.commercialTier} tier</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reports Queue */}
            {reports.length > 0 && (
              <div className="pt-6 border-t border-[var(--color-border-default)] space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <Flag className="w-4 h-4" />
                  <span className="section-label text-amber-400">Flagged User Reports ({reports.length})</span>
                </div>

                <div className="space-y-2">
                  {reports.map((rep) => (
                    <div
                      key={rep.id}
                      className="p-3 bg-amber-950/20 border border-amber-600/30 rounded-[var(--radius-sm)] space-y-1 text-xs"
                    >
                      <div className="font-bold text-amber-300 capitalize">{rep.reason.replace(/-/g, ' ')}</div>
                      <div className="text-[11px] text-[var(--color-text-primary)]">{rep.eventTitle}</div>
                      {rep.details && (
                        <div className="text-[11px] text-[var(--color-text-secondary)] italic">
                          &ldquo;{rep.details}&rdquo;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Review Decision Workspace (7 cols) */}
          {selectedEvent && (
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
              
              <div className="space-y-2 border-b border-[var(--color-border-default)] pb-4">
                <div className="flex items-center justify-between">
                  <span className="section-label">Inspection &amp; Verification</span>
                  <Link
                    href={`/events/e/${selectedEvent.slug}`}
                    target="_blank"
                    className="text-xs text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Preview Page</span>
                    <Eye className="w-3 h-3" />
                  </Link>
                </div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  {selectedEvent.title}
                </h2>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  Organiser: {selectedEvent.organiser.name} ({selectedEvent.organiser.website})
                </div>
              </div>

              {/* Safety & Safeguarding Checklist */}
              <div className="space-y-3">
                <span className="section-label">Mandatory Moderation Verification Checks</span>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[var(--color-text-primary)]">Legitimate Employer / Provider</div>
                      <div className="text-[11px] text-[var(--color-text-tertiary)]">Domain and registration verified against commercial registry.</div>
                    </div>
                  </div>

                  <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[var(--color-text-primary)]">No Misleading Claims or MLM / Pyramid Schemes</div>
                      <div className="text-[11px] text-[var(--color-text-tertiary)]">Zero fee-for-employment schemes or unaccredited claims.</div>
                    </div>
                  </div>

                  <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[var(--color-text-primary)]">Child Safeguarding &amp; Age Suitability</div>
                      <div className="text-[11px] text-[var(--color-text-tertiary)]">
                        Stated suitability: {selectedEvent.ageSuitability.replace(/-/g, ' ')}.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial / Commercial Independence Toggle */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--color-border-subtle)]">
                <label className="flex items-center gap-2 text-xs text-[var(--color-text-primary)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editorialApproved}
                    onChange={(e) => setEditorialApproved(e.target.checked)}
                    className="rounded"
                  />
                  <span>Editorial Integrity Passed</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-[var(--color-text-primary)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={commercialApproved}
                    onChange={(e) => setCommercialApproved(e.target.checked)}
                    className="rounded"
                  />
                  <span>Commercial Fee Reconciled</span>
                </label>
              </div>

              {/* Moderation Notes Input */}
              <div className="space-y-1.5 pt-2">
                <label className="section-label">Reviewer Feedback &amp; Audit Trail Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="State reason for approval, required revisions, or rejection rationale..."
                  className="w-full p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] placeholder-zinc-600 focus:border-[var(--accent-blue)] focus:outline-none resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[var(--color-border-default)] flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => handleSetStatus('live')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-[var(--radius-button)] inline-flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Approve &amp; Set Live</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSetStatus('changes-requested')}
                  className="px-4 py-2 bg-purple-900/60 border border-purple-600/50 hover:bg-purple-800 text-purple-200 text-xs font-bold rounded-[var(--radius-button)] inline-flex items-center gap-1.5"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Request Changes</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSetStatus('suspended')}
                  className="px-4 py-2 bg-red-900/40 border border-red-700/50 hover:bg-red-800 text-red-300 text-xs font-bold rounded-[var(--radius-button)] inline-flex items-center gap-1.5"
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Suspend Listing</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </main>

    </div>
  );
}
