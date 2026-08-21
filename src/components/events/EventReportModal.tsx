'use client';

import React, { useState } from 'react';
import { submitEventReport } from '@/lib/events/store';
import { X, AlertTriangle, Flag, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventReportModalProps {
  eventId: string;
  eventTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const REPORT_REASONS = [
  {
    value: 'misleading-recruitment-claim',
    label: 'Misleading Recruitment Claims',
    description: 'Roles, salaries, or opportunities misrepresented.',
  },
  {
    value: 'pyramid-scheme-financial-scam',
    label: 'Pyramid Scheme / Financial Scam',
    description: 'MLM, upfront investment required, or fraudulent activity.',
  },
  {
    value: 'discriminatory-unsafe',
    label: 'Discriminatory or Unsafe',
    description: 'Exclusionary content, hate speech, or physical safety concerns.',
  },
  {
    value: 'inaccurate-employer-representation',
    label: 'Inaccurate Employer Representation',
    description: 'Organization misrepresenting itself, impersonating another employer.',
  },
  {
    value: 'inappropriate-for-minors',
    label: 'Inappropriate for Minors',
    description: 'Unsuitable content for the stated age group or safeguarding concerns.',
  },
  {
    value: 'spam-or-duplicate',
    label: 'Spam or Duplicate Listing',
    description: 'Repeated, irrelevant, or off-topic event listing.',
  },
  {
    value: 'broken-link-or-expired',
    label: 'Broken Link / Event Expired',
    description: 'Registration URL not working or event has passed.',
  },
  {
    value: 'other',
    label: 'Other Concern',
    description: 'Describe an issue not listed above.',
  },
] as const;

export function EventReportModal({ eventId, eventTitle, isOpen, onClose }: EventReportModalProps) {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [details, setDetails] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedReason) return;

    setSubmitting(true);

    submitEventReport({
      eventId,
      eventTitle,
      reason: selectedReason as any,
      details,
      reporterEmail: reporterEmail || undefined,
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full sm:max-w-lg max-h-[90dvh] bg-[var(--color-surface-base)] border border-[var(--color-border-strong)] rounded-t-xl sm:rounded-[var(--radius-card)] shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="p-5 border-b border-[var(--color-border-default)] flex items-start justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-amber-400">
            <Flag className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Report This Event</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Close report modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                  Report Submitted
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] max-w-xs">
                  Thank you for helping maintain the safety and quality of CareerOS Events. Our editorial team reviews all reports within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  What is the issue with this listing?
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  CareerOS takes all safety and quality concerns seriously. Reports are reviewed by a human moderator and never automated.
                </p>
              </div>

              {/* Reason Selection */}
              <div className="space-y-2">
                {REPORT_REASONS.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setSelectedReason(r.value)}
                    className={cn(
                      'w-full p-3 rounded-[var(--radius-sm)] border text-left transition-all',
                      selectedReason === r.value
                        ? 'bg-amber-950/40 border-amber-600/50 text-[var(--color-text-primary)]'
                        : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-zinc-500 hover:text-white'
                    )}
                  >
                    <div className="text-xs font-semibold">{r.label}</div>
                    <div className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">{r.description}</div>
                  </button>
                ))}
              </div>

              {/* Additional Details */}
              <div className="space-y-1.5">
                <label htmlFor="report-details" className="text-[11px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Additional Details (Optional)
                </label>
                <textarea
                  id="report-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  placeholder="Describe the specific issue in detail..."
                  className="w-full p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] placeholder-zinc-600 focus:border-zinc-400 focus:outline-none resize-none"
                />
              </div>

              {/* Reporter Email (optional) */}
              <div className="space-y-1.5">
                <label htmlFor="report-email" className="text-[11px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Your Email (Optional — for follow-up)
                </label>
                <input
                  id="report-email"
                  type="email"
                  value={reporterEmail}
                  onChange={(e) => setReporterEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-2.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] placeholder-zinc-600 focus:border-zinc-400 focus:outline-none"
                />
              </div>

              <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)]">
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  Reports are reviewed by CareerOS editorial staff. We do not expose reporter identity to event organizers. Events that violate our standards are suspended pending investigation regardless of payment status.
                </p>
              </div>

              <button
                type="submit"
                disabled={!selectedReason || submitting}
                className={cn(
                  'w-full py-2.5 text-xs font-bold rounded-[var(--radius-button)] transition-all flex items-center justify-center gap-2',
                  selectedReason && !submitting
                    ? 'bg-amber-600 text-white hover:bg-amber-500 cursor-pointer'
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                )}
              >
                {submitting ? (
                  <>
                    <span className="w-3 h-3 border border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Submitting Report...</span>
                  </>
                ) : (
                  <>
                    <Flag className="w-3.5 h-3.5" />
                    <span>Submit Report to CareerOS</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
