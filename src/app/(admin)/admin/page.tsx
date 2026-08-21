import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { getCommandCentreMetrics, getActionCenterItems } from '@/lib/admin/metrics';
import { ROUTES } from '@/lib/routes';
import {
  Users,
  Calendar,
  Sparkles,
  Cpu,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Building2,
  Clock,
  ArrowRight,
  Shield,
  Activity,
  Layers,
  Search,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default async function AdminCommandCentrePage() {
  const adminUser = await requireAdminRole('read_only');
  const [metrics, actionItems] = await Promise.all([
    getCommandCentreMetrics(),
    getActionCenterItems(),
  ]);

  const needsReviewItems = actionItems.filter((i) => i.category === 'needs_review');
  const needsAttentionItems = actionItems.filter((i) => i.category === 'needs_attention');

  return (
    <div className="space-y-8">
      {/* Executive Command Center Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[var(--color-border-default)]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
            <span>CareerOS Operational Control Plane</span>
            <span>•</span>
            <span className="text-[#2F8FFF] font-semibold">Active Node</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Command Center
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            Real-time infrastructure, operations, discovery queues and platform integrity.
          </p>
        </div>

        {/* Quick Operational Status */}
        <div className="flex items-center gap-2 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-2 rounded-sm text-xs">
          <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span className="font-mono text-[11px] text-[var(--color-text-primary)]">
            Database Connected
          </span>
          <span className="text-[var(--color-text-tertiary)]">•</span>
          <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">
            {metrics.failedJobs24h === 0 ? '0 Job Failures' : `${metrics.failedJobs24h} Job Failures`}
          </span>
        </div>
      </div>

      {/* Admin Daily Brief (Spec §75) */}
      <div className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] relative overflow-hidden">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2F8FFF]" />
            <h2 className="text-xs font-mono uppercase font-bold text-[var(--color-text-primary)] tracking-wider">
              Operational Daily Brief
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            Computed {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 bg-[var(--color-surface-sunken)] rounded-sm border border-[var(--color-border-subtle)]">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Platform Users</p>
            <p className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">
              {metrics.totalUsers.toLocaleString()}
            </p>
            <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              {metrics.newUsers7d > 0 ? `+${metrics.newUsers7d} in 7d` : 'No new in 7d'}
            </p>
          </div>

          <div className="p-3 bg-[var(--color-surface-sunken)] rounded-sm border border-[var(--color-border-subtle)]">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Live Events</p>
            <p className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">
              {metrics.publishedEvents.toLocaleString()}
            </p>
            <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              {metrics.pendingEventReviews > 0 ? `${metrics.pendingEventReviews} review queue` : '0 in review queue'}
            </p>
          </div>

          <div className="p-3 bg-[var(--color-surface-sunken)] rounded-sm border border-[var(--color-border-subtle)]">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Discovered</p>
            <p className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">
              {metrics.discoveredCandidates.toLocaleString()}
            </p>
            <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              {metrics.discoveredCandidates > 0 ? 'Candidates pending' : 'Queue clear'}
            </p>
          </div>

          <div className="p-3 bg-[var(--color-surface-sunken)] rounded-sm border border-[var(--color-border-subtle)]">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Organizations</p>
            <p className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">
              {metrics.totalOrganizations.toLocaleString()}
            </p>
            <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              {metrics.totalEmployers} emp / {metrics.totalSchools} sch
            </p>
          </div>

          <div className="p-3 bg-[var(--color-surface-sunken)] rounded-sm border border-[var(--color-border-subtle)]">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">AI Requests Today</p>
            <p className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">
              {metrics.aiRequestsToday.toLocaleString()}
            </p>
            <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              {metrics.aiRequestsToday > 0 ? `$${metrics.aiCostTodayUsd.toFixed(2)} cost` : 'No usage today'}
            </p>
          </div>

          <div className="p-3 bg-[var(--color-surface-sunken)] rounded-sm border border-[var(--color-border-subtle)]">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Background Jobs</p>
            <p className={cn(
              'text-lg font-bold mt-0.5',
              metrics.failedJobs24h > 0 ? 'text-[#F87171]' : 'text-[#34D399]'
            )}>
              {metrics.failedJobs24h === 0 ? 'Healthy' : `${metrics.failedJobs24h} Failed`}
            </p>
            <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              Last 24h sweep
            </p>
          </div>
        </div>
      </div>

      {/* Action Center Section (Spec §7) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#DDD36D]" />
            <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
              Action Center
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)]">
              {actionItems.length} active {actionItems.length === 1 ? 'signal' : 'signals'}
            </span>
          </div>
          <Link
            href={ROUTES.ADMIN_ACTION_CENTER}
            className="text-xs text-[#2F8FFF] hover:underline flex items-center gap-1 font-medium"
          >
            <span>View All Operational Queues</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {actionItems.length === 0 ? (
          <div className="p-8 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#34D399] mx-auto" />
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
              All Operational Queues Clear
            </h3>
            <p className="text-xs text-[var(--color-text-tertiary)] max-w-md mx-auto">
              No event submissions, crawl failures or background job errors currently require administrative intervention.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actionItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  'p-4 rounded-md bg-[var(--color-surface-raised)] border flex flex-col justify-between transition-colors',
                  item.urgency === 'high'
                    ? 'border-[#F87171]/40 bg-[#F87171]/5'
                    : 'border-[var(--color-border-strong)]'
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] font-medium">
                      {item.sourceSystem}
                    </span>
                    <span className={cn(
                      'text-[10px] font-mono uppercase font-bold',
                      item.urgency === 'high' ? 'text-[#F87171]' : 'text-[#DDD36D]'
                    )}>
                      {item.urgency} priority
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    {item.count ? `${item.count} items` : 'Immediate action'}
                  </span>
                  <Link
                    href={item.actionHref}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F8FFF] hover:text-white transition-colors"
                  >
                    <span>{item.actionLabel}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Primary Module Hub Grid */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
          Control Plane Modules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Events Hub */}
          <Link
            href={ROUTES.ADMIN_EVENTS}
            className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-3"
          >
            <div className="w-8 h-8 rounded-sm bg-[#2F8FFF]/10 border border-[#2F8FFF]/30 flex items-center justify-center text-[#2F8FFF]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
                Events Platform
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                Manage {metrics.publishedEvents} live events, moderation queue & discovery runs.
              </p>
            </div>
          </Link>

          {/* AI Operations */}
          <Link
            href={ROUTES.ADMIN_AI}
            className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-3"
          >
            <div className="w-8 h-8 rounded-sm bg-[#CDBBD2]/10 border border-[#CDBBD2]/30 flex items-center justify-center text-[#CDBBD2]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#CDBBD2] transition-colors">
                AI Control Center
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                Model registry, prompt versions, routing policies & cost tracking.
              </p>
            </div>
          </Link>

          {/* CMS & Content */}
          <Link
            href={ROUTES.ADMIN_CONTENT_PAGES}
            className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-3"
          >
            <div className="w-8 h-8 rounded-sm bg-[#DDD36D]/10 border border-[#DDD36D]/30 flex items-center justify-center text-[#DDD36D]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#DDD36D] transition-colors">
                CMS & Content
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                Edit page sections, media library, redirects and internal SEO health.
              </p>
            </div>
          </Link>

          {/* System & Audit */}
          <Link
            href={ROUTES.ADMIN_SYSTEM_AUDIT}
            className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-3"
          >
            <div className="w-8 h-8 rounded-sm bg-[#34D399]/10 border border-[#34D399]/30 flex items-center justify-center text-[#34D399]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#34D399] transition-colors">
                Audit Trail & Security
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                Immutable operational logs, system jobs & integration status.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
