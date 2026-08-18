import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Activity, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default async function AdminEventDiscoveryRunsPage() {
  await requireAdminRole('events_moderator');
  const supabase = createAdminClient();

  const { data: runs } = await supabase
    .from('event_discovery_runs')
    .select(`
      *,
      event_sources (
        name,
        domain
      )
    `)
    .order('started_at', { ascending: false })
    .limit(50);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Discovery Engine"
        title="Discovery Execution Runs"
        description="Historical logs of scheduled and manual discovery runs, URLs fetched, candidate extraction counts and execution durations."
      />

      {!runs || runs.length === 0 ? (
        <AdminEmptyState
          icon={Activity}
          title="0 Discovery Runs Recorded"
          description="No automated discovery sweeps have executed yet. Trigger a manual run or await the next scheduled background cron execution."
          actionHref={ROUTES.ADMIN_EVENTS_SOURCES}
          actionLabel="View Sources"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Run ID / Source</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Started At</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">URLs Fetched</th>
                  <th className="p-3">Candidates</th>
                  <th className="p-3">Errors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {runs.map((run) => {
                  const source = run.event_sources as unknown as { name: string; domain: string } | null;
                  return (
                    <tr key={run.id} className="hover:bg-[var(--color-surface-interactive)]">
                      <td className="p-3">
                        <div className="font-semibold text-[var(--color-text-primary)]">
                          {source?.name || 'Multi-source Run'}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                          {run.id.slice(0, 8)}
                        </div>
                      </td>
                      <td className="p-3">
                        <span
                          className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                            run.status === 'completed'
                              ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                              : run.status === 'failed'
                              ? 'bg-[#F87171]/10 text-[#F87171] border-[#F87171]/30'
                              : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                          }`}
                        >
                          {run.status}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                        {new Date(run.started_at).toLocaleString()}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                        {run.duration_ms ? `${(run.duration_ms / 1000).toFixed(1)}s` : '—'}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-primary)]">
                        {run.urls_fetched}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-primary)] font-bold text-[#2F8FFF]">
                        {run.candidates_found}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-primary)]">
                        {run.errors_encountered}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
