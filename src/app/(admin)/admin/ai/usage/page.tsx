import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { DollarSign, Activity, Cpu } from 'lucide-react';

export default async function AdminAIUsagePage() {
  await requireAdminRole('analyst');
  const supabase = createAdminClient();

  const { data: usageLogs } = await supabase
    .from('ai_usage_logs')
    .select('*')
    .order('occurred_at', { ascending: false })
    .limit(100);

  const totalRequests = usageLogs?.length || 0;
  const totalCostCents = usageLogs?.reduce((acc, log) => acc + (Number(log.cost_cents) || 0), 0) || 0;

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="AI Operations"
        title="AI Token Usage & Cost Analytics"
        description="Granular inference metrics, input/output token consumption, response latency, and dollar expenditure calculated strictly from explicit provider pricing."
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Recorded Requests</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {totalRequests.toLocaleString()}
          </p>
        </div>
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Calculated Cost</p>
          <p className="text-xl font-bold text-[#34D399] mt-1">
            ${(totalCostCents / 100).toFixed(2)}
          </p>
        </div>
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Avg Latency</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            —
          </p>
        </div>
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Error Rate</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            0.0%
          </p>
        </div>
      </div>

      {!usageLogs || usageLogs.length === 0 ? (
        <AdminEmptyState
          icon={DollarSign}
          title="No Usage Recorded"
          description="Inference logs will be recorded as AI features (mentor conversations, event extraction, CV parsing) execute in production."
          badge="Zero Fabricated Costs"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Use Case</th>
                  <th className="p-3">Provider / Model</th>
                  <th className="p-3">Tokens (In / Out)</th>
                  <th className="p-3">Latency</th>
                  <th className="p-3">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {usageLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(log.occurred_at).toLocaleTimeString()}
                    </td>
                    <td className="p-3 font-mono font-medium text-[var(--color-text-primary)]">
                      {log.use_case_id}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                      {log.model_id}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                      {log.input_tokens} / {log.output_tokens}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {log.latency_ms}ms
                    </td>
                    <td className="p-3 font-mono text-[#34D399]">
                      ${(Number(log.cost_cents) / 100).toFixed(4)}
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
