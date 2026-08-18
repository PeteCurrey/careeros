import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Radio, CheckCircle2, ExternalLink, Sparkles, Filter, Check, X, Layers } from 'lucide-react';

export default async function AdminEventDiscoveryPage() {
  await requireAdminRole('events_moderator');
  const supabase = createAdminClient();

  const { data: candidates } = await supabase
    .from('event_candidates')
    .select(`
      *,
      event_sources (
        name,
        domain
      )
    `)
    .eq('status', 'pending')
    .order('discovered_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Discovery Engine"
        title="Autonomous Discovery Review Queue"
        description="Public events ingested across registered websites, feeds, and APIs. Review extracted structured JSON and approve for live catalog publication."
        actions={
          <Link
            href={ROUTES.ADMIN_EVENTS_SOURCES}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)] transition-colors"
          >
            <span>Configure Sources</span>
          </Link>
        }
      />

      {!candidates || candidates.length === 0 ? (
        <AdminEmptyState
          icon={Radio}
          title="No Event Candidates Awaiting Review"
          description="The autonomous discovery engine has processed all extracted candidates. When next scheduled crawl tasks execute, new discovered events will appear here for fast-triage review."
          actionHref={ROUTES.ADMIN_EVENTS_DISCOVERY_RUNS}
          actionLabel="View Discovery Runs"
          badge="Queue Ingested"
        />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)]">
            <span>{candidates.length} candidates pending review</span>
            <span>Fast Review Mode (Keyboard 1: Approve, 2: Reject)</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {candidates.map((cand) => {
              const extracted = (cand.extracted_data as Record<string, unknown>) || {};
              const sourceData = cand.event_sources as unknown as { name: string; domain: string } | null;
              return (
                <div
                  key={cand.id}
                  className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-[var(--color-surface-sunken)] text-[#2F8FFF] font-semibold border border-[var(--color-border-subtle)]">
                          {sourceData?.domain || 'Web Ingest'}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                          Confidence: {Math.round(Number(cand.confidence_score) * 100)}%
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                        {cand.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Source: {sourceData?.name || 'External Site'} • URL:{' '}
                        <a
                          href={cand.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2F8FFF] hover:underline"
                        >
                          {cand.source_url}
                        </a>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-sm bg-[#34D399] text-black font-semibold text-xs hover:bg-[#34D399]/90 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Approve & Publish</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] text-[var(--color-text-tertiary)] hover:text-[#F87171] hover:border-[#F87171]/40 font-medium text-xs transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>

                  {/* Extracted payload snippet */}
                  <div className="p-3 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] font-mono text-[11px] text-[var(--color-text-secondary)] space-y-1">
                    <p>
                      <span className="text-[var(--color-text-tertiary)]">Date:</span>{' '}
                      {(extracted.date as string) || (extracted.start_time as string) || 'Not provided'}
                    </p>
                    <p>
                      <span className="text-[var(--color-text-tertiary)]">Location:</span>{' '}
                      {(extracted.city as string) || (extracted.venue as string) || 'Virtual / Online'}
                    </p>
                    <p>
                      <span className="text-[var(--color-text-tertiary)]">Category:</span>{' '}
                      {(extracted.category as string) || 'General Career'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
