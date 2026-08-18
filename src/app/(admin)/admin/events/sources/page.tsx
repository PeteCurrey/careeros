import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Radio, Plus, CheckCircle2, AlertTriangle, Play, RefreshCw } from 'lucide-react';

export default async function AdminEventSourcesPage() {
  await requireAdminRole('events_moderator');
  const supabase = createAdminClient();

  const { data: sources } = await supabase
    .from('event_sources')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Discovery Engine"
        title="Event Source Registry"
        description="Public websites, RSS/Atom feeds, iCalendar endpoints, and structured data sources crawled by the automated discovery engine."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Ingest Source</span>
          </button>
        }
      />

      {!sources || sources.length === 0 ? (
        <AdminEmptyState
          icon={Radio}
          title="0 Ingest Sources Configured"
          description="Register university careers pages, employer open-day feeds, chamber of commerce listings, or iCal URLs to begin automated career event discovery."
          actionLabel="Register First Source"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Source Name / Domain</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Health Status</th>
                  <th className="p-3">Discovered</th>
                  <th className="p-3">Approved</th>
                  <th className="p-3">Last Checked</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {sources.map((src) => (
                  <tr key={src.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3">
                      <div className="font-semibold text-[var(--color-text-primary)]">
                        {src.name}
                      </div>
                      <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                        {src.domain}
                      </div>
                    </td>
                    <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                      {src.source_type}
                    </td>
                    <td className="p-3">
                      <span
                        className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                          src.health_status === 'healthy'
                            ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                            : 'bg-[#F87171]/10 text-[#F87171] border-[#F87171]/30'
                        }`}
                      >
                        {src.health_status}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-primary)]">
                      {src.total_discovered}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-primary)]">
                      {src.total_approved}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {src.last_checked_at
                        ? new Date(src.last_checked_at).toLocaleDateString()
                        : 'Never'}
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-[11px] text-[#2F8FFF] hover:underline"
                      >
                        <Play className="w-3 h-3" />
                        <span>Run Now</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
