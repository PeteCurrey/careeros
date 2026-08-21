import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { getActionCenterItems } from '@/lib/admin/metrics';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { AlertTriangle, CheckCircle2, ChevronRight, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function AdminActionCentrePage() {
  await requireAdminRole('read_only');
  const actionItems = await getActionCenterItems();

  const needsReview = actionItems.filter((i) => i.category === 'needs_review');
  const needsAttention = actionItems.filter((i) => i.category === 'needs_attention');
  const opportunities = actionItems.filter((i) => i.category === 'opportunity');

  return (
    <div className="space-y-8">
      <AdminSectionHeader
        category="Operations"
        title="Action Center"
        description="Unified operational triage queue aggregating moderation needs, system health alerts and real platform signals."
      />

      {actionItems.length === 0 ? (
        <AdminEmptyState
          icon={CheckCircle2}
          title="All Operational Queues are Clear"
          description="There are currently no items needing manual review, system intervention, or immediate attention."
        />
      ) : (
        <div className="space-y-8">
          {/* Needs Review Section */}
          {needsReview.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2F8FFF]" />
                <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Needs Review ({needsReview.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {needsReview.map((item) => (
                  <ActionCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* Needs Attention Section */}
          {needsAttention.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#F87171]" />
                <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Needs Attention ({needsAttention.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {needsAttention.map((item) => (
                  <ActionCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* Opportunities Section (Real data only) */}
          {opportunities.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#34D399]" />
                <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Growth Opportunities ({opportunities.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunities.map((item) => (
                  <ActionCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ActionCard({ item }: { item: ReturnType<typeof getActionCenterItems> extends Promise<infer T> ? T extends Array<infer U> ? U : never : never }) {
  return (
    <div
      className={cn(
        'p-5 rounded-md bg-[var(--color-surface-raised)] border flex flex-col justify-between space-y-4',
        item.urgency === 'high'
          ? 'border-[#F87171]/40'
          : 'border-[var(--color-border-default)]'
      )}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] font-medium">
            {item.sourceSystem}
          </span>
          <span
            className={cn(
              'text-[10px] font-mono uppercase font-bold',
              item.urgency === 'high' ? 'text-[#F87171]' : 'text-[#DDD36D]'
            )}
          >
            {item.urgency} priority
          </span>
        </div>

        <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{item.title}</h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
          {item.count ? `${item.count} items in queue` : 'Immediate action'}
        </span>
        <Link
          href={item.actionHref}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F8FFF] hover:underline"
        >
          <span>{item.actionLabel}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
