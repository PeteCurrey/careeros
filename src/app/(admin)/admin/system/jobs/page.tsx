import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Clock, Play, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

export default async function AdminScheduledJobsPage() {
  await requireAdminRole('super_admin');
  const supabase = createAdminClient();

  const [{ data: jobs }, { data: recentRuns }] = await Promise.all([
    supabase.from('scheduled_jobs').select('*').order('id', { ascending: true }),
    supabase.from('job_runs').select('*').order('started_at', { ascending: false }).limit(20),
  ]);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="System Operations"
        title="Scheduled Background Workers"
        description="Cron-triggered background workers executing autonomous event discovery, expiration sweeps, SEO audits and source health monitoring."
      />

      {/* Active Jobs Table */}
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border-default)]">
          <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
            Registered Recurring Jobs ({jobs?.length || 0})
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Job Name</th>
                <th className="p-3">Cron Schedule</th>
                <th className="p-3">State</th>
                <th className="p-3">Last Run</th>
                <th className="p-3">Result</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {jobs?.map((job) => (
                <tr key={job.id} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3">
                    <div className="font-semibold text-[var(--color-text-primary)]">
                      {job.name}
                    </div>
                    <div className="text-[11px] text-[var(--color-text-tertiary)]">
                      {job.description}
                    </div>
                  </td>
                  <td className="p-3 font-mono text-[#2F8FFF]">
                    {job.cron_expression}
                  </td>
                  <td className="p-3">
                    <span
                      className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                        job.is_enabled
                          ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                          : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                      }`}
                    >
                      {job.is_enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                    {job.last_run_at ? new Date(job.last_run_at).toLocaleString() : 'Never'}
                  </td>
                  <td className="p-3">
                    <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                      {job.last_run_status || 'Pending initial run'}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-[11px] text-[#2F8FFF] hover:underline"
                    >
                      <Play className="w-3 h-3" />
                      <span>Trigger</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
