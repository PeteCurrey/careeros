import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Search,
  Plus,
  ArrowRight,
  Layers,
  Building2,
  DollarSign,
  Radio,
} from 'lucide-react';

export default async function AdminEventsOverviewPage() {
  await requireAdminRole('read_only');
  const supabase = createAdminClient();

  const [
    { count: totalLive },
    { count: totalSubmissions },
    { count: totalCandidates },
    { count: totalSources },
    { count: totalOrganisers },
    { data: recentLiveEvents },
  ] = await Promise.all([
    supabase.from('events').select('*', { count: 'exact', head: true }).in('moderation_status', ['approved', 'live']),
    supabase.from('event_submissions').select('*', { count: 'exact', head: true }).eq('status', 'submitted'),
    supabase.from('event_candidates').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
    supabase.from('event_sources').select('*', { count: 'exact', head: true }).eq('is_enabled', true),
    supabase.from('event_organisers').select('*', { count: 'exact', head: true }),
    supabase.from('events').select('id, title, category_slug, start_time, city, moderation_status, commercial_tier').order('created_at', { ascending: false }).limit(5),
  ]);

  return (
    <div className="space-y-8">
      <AdminSectionHeader
        category="Verticals"
        title="Events Platform Control"
        description="Comprehensive operations for live events, organiser submissions, automated discovery pipelines and commercial placements."
        actions={
          <Link
            href={ROUTES.ADMIN_EVENTS_SOURCES}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Event Source</span>
          </Link>
        }
      />

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Live Published</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {(totalLive || 0).toLocaleString()}
          </p>
          <Link href={ROUTES.ADMIN_EVENTS_PUBLISHED} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            View directory →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Submitted Queue</p>
          <p className="text-xl font-bold text-[#DDD36D] mt-1">
            {(totalSubmissions || 0).toLocaleString()}
          </p>
          <Link href={ROUTES.ADMIN_EVENTS_SUBMISSIONS} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Moderate submissions →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Discovery Queue</p>
          <p className="text-xl font-bold text-[#2F8FFF] mt-1">
            {(totalCandidates || 0).toLocaleString()}
          </p>
          <Link href={ROUTES.ADMIN_EVENTS_DISCOVERY} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Review candidates →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Active Sources</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {(totalSources || 0).toLocaleString()}
          </p>
          <Link href={ROUTES.ADMIN_EVENTS_SOURCES} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Configure connectors →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Organisers</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {(totalOrganisers || 0).toLocaleString()}
          </p>
          <Link href={ROUTES.ADMIN_EVENTS_ORGANISERS} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            View profiles →
          </Link>
        </div>
      </div>

      {/* Subsections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href={ROUTES.ADMIN_EVENTS_SUBMISSIONS}
          className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-2"
        >
          <div className="flex items-center justify-between">
            <Clock className="w-4 h-4 text-[#DDD36D]" />
            <span className="text-[10px] font-mono font-bold text-[#DDD36D]">
              {totalSubmissions || 0} AWAITING
            </span>
          </div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
            Submission Moderation
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Verify employer and university event submissions before public indexation.
          </p>
        </Link>

        <Link
          href={ROUTES.ADMIN_EVENTS_DISCOVERY}
          className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-2"
        >
          <div className="flex items-center justify-between">
            <Radio className="w-4 h-4 text-[#2F8FFF]" />
            <span className="text-[10px] font-mono font-bold text-[#2F8FFF]">
              {totalCandidates || 0} EXTRACTED
            </span>
          </div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
            Autonomous Discovery
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Review scraped and feed-ingested candidates from registered web sources.
          </p>
        </Link>

        <Link
          href={ROUTES.ADMIN_EVENTS_CATEGORIES}
          className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-2"
        >
          <div className="flex items-center justify-between">
            <Layers className="w-4 h-4 text-[#CDBBD2]" />
            <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">TAXONOMY</span>
          </div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
            Database Categories
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Manage category taxonomy, slugs, descriptions and navigation display order.
          </p>
        </Link>
      </div>

      {/* Recent Events Table Preview */}
      <div className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
            Recently Added Events
          </h2>
          <Link href={ROUTES.ADMIN_EVENTS_PUBLISHED} className="text-xs text-[#2F8FFF] hover:underline">
            View All →
          </Link>
        </div>

        {!recentLiveEvents || recentLiveEvents.length === 0 ? (
          <div className="p-6 text-center text-xs text-[var(--color-text-tertiary)]">
            No events found in database. Migrate seed events or trigger discovery to populate.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="pb-2">Title</th>
                  <th className="pb-2">Category</th>
                  <th className="pb-2">Location</th>
                  <th className="pb-2">Start Time</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {recentLiveEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="py-2.5 font-medium text-[var(--color-text-primary)] max-w-xs truncate">
                      {event.title}
                    </td>
                    <td className="py-2.5 font-mono text-[var(--color-text-secondary)]">
                      {event.category_slug}
                    </td>
                    <td className="py-2.5 text-[var(--color-text-secondary)]">
                      {event.city || 'Virtual'}
                    </td>
                    <td className="py-2.5 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(event.start_time).toLocaleDateString()}
                    </td>
                    <td className="py-2.5">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                        {event.moderation_status}
                      </span>
                    </td>
                    <td className="py-2.5 font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                      {event.commercial_tier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
