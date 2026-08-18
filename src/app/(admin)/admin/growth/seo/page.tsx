import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Search, Play, CheckCircle2, AlertTriangle, XCircle, RefreshCw } from 'lucide-react';

export default async function AdminSEOControlPage() {
  await requireAdminRole('marketing');
  const supabase = createAdminClient();

  const [{ data: latestScan }, { data: issues }] = await Promise.all([
    supabase.from('seo_scans').select('*').order('started_at', { ascending: false }).limit(1).single(),
    supabase.from('seo_issues').select('*').order('created_at', { ascending: false }).limit(20),
  ]);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Growth & Organic Search"
        title="SEO Control Centre & Health Scanner"
        description="Internal live crawler auditing meta titles, missing descriptions, canonical headers, OpenGraph cards and broken internal URLs."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Run Full SEO Scan</span>
          </button>
        }
      />

      {/* Scanner Summary Card */}
      {!latestScan ? (
        <AdminEmptyState
          icon={Search}
          title="No Internal SEO Scans Performed"
          description="CareerOS includes an automated internal SEO engine that crawls live Next.js routes to verify meta tags, canonical links and OpenGraph compliance."
          actionLabel="Execute Initial Scan"
        />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Routes Audited</p>
              <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
                {latestScan.routes_scanned}
              </p>
            </div>
            <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Passed Checks</p>
              <p className="text-xl font-bold text-[#34D399] mt-1">
                {latestScan.passed_checks}
              </p>
            </div>
            <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Warnings</p>
              <p className="text-xl font-bold text-[#DDD36D] mt-1">
                {latestScan.warnings_found}
              </p>
            </div>
            <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Errors</p>
              <p className="text-xl font-bold text-[#F87171] mt-1">
                {latestScan.errors_found}
              </p>
            </div>
          </div>

          {/* Issues list */}
          <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden p-4 space-y-3">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
              Audited Findings ({issues?.length || 0})
            </h2>
            {!issues || issues.length === 0 ? (
              <p className="text-xs text-[var(--color-text-tertiary)]">
                All audited application routes passed meta tag and canonical validation.
              </p>
            ) : (
              <div className="space-y-2">
                {issues.map((issue) => (
                  <div
                    key={issue.id}
                    className="p-3 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-start justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-semibold text-[#2F8FFF]">
                          {issue.route}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">
                          {issue.issue_type}
                        </span>
                      </div>
                      <p className="text-[var(--color-text-secondary)]">{issue.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
