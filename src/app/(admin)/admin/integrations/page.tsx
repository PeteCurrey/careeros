'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AdminIntegrationRecord, PROVIDER_TYPE_LABELS, LIFECYCLE_STATUS_LABELS, CATEGORY_LABELS, DATA_DIRECTION_LABELS } from '@/types/integrations';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Database, Shield, CheckCircle2, AlertTriangle, XCircle, Eye, EyeOff,
  RefreshCw, ExternalLink, Filter, Search, Plus, ArrowUpDown,
  ChevronDown, ChevronUp, Lock, Globe, Clock, FileText
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

// ─── Helpers ───────────────────────────────────────────────────────────────

function LifecycleBadge({ status }: { status: AdminIntegrationRecord['lifecycleStatus'] }) {
  const variants: Record<string, 'success' | 'warning' | 'danger' | 'default' | 'info'> = {
    production: 'success',
    testing: 'info',
    development: 'info',
    planned: 'warning',
    researching: 'default',
    degraded: 'danger',
    paused: 'warning',
    retired: 'default',
  };
  return <Badge variant={variants[status] ?? 'default'}>{LIFECYCLE_STATUS_LABELS[status]}</Badge>;
}

function ReviewGateRow({
  label,
  passed,
  required = true,
}: {
  label: string;
  passed: boolean;
  required?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-[var(--admin-border)] last:border-0">
      <span className="text-xs text-[var(--admin-text-secondary)]">{label}</span>
      {passed ? (
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
      ) : required ? (
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
      ) : (
        <XCircle className="w-3.5 h-3.5 text-[var(--admin-text-muted)]" />
      )}
    </div>
  );
}

function IntegrationRow({
  record,
  onToggleExpand,
  expanded,
}: {
  record: AdminIntegrationRecord;
  onToggleExpand: () => void;
  expanded: boolean;
}) {
  const allReviewsPassed =
    record.technicalReviewed &&
    record.privacyReviewed &&
    record.securityReviewed &&
    record.legalReviewed &&
    record.publicDisclosureReviewed;

  const readyToPublish = allReviewsPassed && !record.publicDisclosureApproved;

  return (
    <div className="border border-[var(--admin-border)] rounded bg-[var(--admin-surface)] overflow-hidden">
      {/* Main row */}
      <div className="grid grid-cols-12 gap-4 p-4 items-center">
        {/* Provider info */}
        <div className="col-span-12 sm:col-span-4">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded bg-[var(--admin-surface-raised)] border border-[var(--admin-border)] flex items-center justify-center shrink-0">
              <span className="text-[9px] font-mono font-bold text-[var(--admin-text-muted)]">
                {record.providerName.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--admin-text-primary)] leading-tight">
                {record.providerName}
              </p>
              <p className="text-[10px] font-mono text-[var(--admin-text-muted)] mt-0.5">
                {CATEGORY_LABELS[record.category] ?? record.category}
              </p>
            </div>
          </div>
        </div>

        {/* Status + direction */}
        <div className="col-span-6 sm:col-span-2 space-y-1.5">
          <LifecycleBadge status={record.lifecycleStatus} />
          <p className="text-[10px] font-mono text-[var(--admin-text-muted)]">
            {record.dataDirection === 'inbound' ? '↓ Inbound' : record.dataDirection === 'outbound' ? '↑ Outbound' : record.dataDirection === 'bidirectional' ? '↕ Bidirectional' : 'No exchange'}
          </p>
        </div>

        {/* Personal data */}
        <div className="col-span-6 sm:col-span-2">
          {record.personalDataInvolved ? (
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-mono text-amber-600">Personal data</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span className="text-[10px] font-mono text-emerald-600">No personal data</span>
            </div>
          )}
          {record.minorsDataPossible && (
            <p className="text-[9px] font-mono text-amber-500 mt-0.5">Minors possible</p>
          )}
        </div>

        {/* Review gate summary */}
        <div className="col-span-6 sm:col-span-2">
          {allReviewsPassed ? (
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span className="text-[10px] font-mono text-emerald-600">All gates passed</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-mono text-amber-600">Reviews pending</span>
            </div>
          )}
          {record.publicDisclosureApproved ? (
            <div className="flex items-center gap-1 mt-1">
              <Globe className="w-2.5 h-2.5 text-emerald-500" />
              <span className="text-[9px] font-mono text-emerald-600">Public</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 mt-1">
              <Lock className="w-2.5 h-2.5 text-[var(--admin-text-muted)]" />
              <span className="text-[9px] font-mono text-[var(--admin-text-muted)]">Not public</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="col-span-6 sm:col-span-2 flex items-center justify-end gap-2">
          {readyToPublish && (
            <span className="text-[9px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Ready to publish
            </span>
          )}
          <button
            onClick={onToggleExpand}
            className="p-1.5 rounded hover:bg-[var(--admin-surface-raised)] transition-colors"
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse details' : 'Expand details'}
          >
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-[var(--admin-text-secondary)]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[var(--admin-text-secondary)]" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-[var(--admin-border)] p-4 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[var(--admin-surface-raised)]">
          {/* Description */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-muted)]">Description</p>
            <p className="text-xs text-[var(--admin-text-secondary)] leading-relaxed">{record.description || record.publicDescription || '—'}</p>
            {record.internalNotes && (
              <div className="p-2 bg-amber-500/5 border border-amber-500/15 rounded">
                <p className="text-[10px] font-mono uppercase text-amber-600 mb-1">Internal notes</p>
                <p className="text-xs text-[var(--admin-text-secondary)] leading-relaxed">{record.internalNotes}</p>
              </div>
            )}
            {record.termsChanged && (
              <div className="p-2 bg-red-500/5 border border-red-500/20 rounded flex items-start gap-2">
                <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 shrink-0" />
                <p className="text-xs text-red-600">Terms have changed — re-review required.</p>
              </div>
            )}
            <div className="flex flex-col gap-1.5 pt-2">
              {record.websiteUrl && (
                <a href={record.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--admin-accent)] hover:underline">
                  Website <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
              {record.termsUrl && (
                <a href={record.termsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--admin-text-secondary)] hover:underline">
                  Terms <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
              {record.documentationUrl && (
                <a href={record.documentationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--admin-text-secondary)] hover:underline">
                  Documentation <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </div>
          </div>

          {/* Data detail */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-muted)]">Data detail</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[var(--admin-text-muted)]">Provider type</span>
                <span className="font-mono text-[var(--admin-text-secondary)]">{PROVIDER_TYPE_LABELS[record.providerType]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--admin-text-muted)]">Refresh frequency</span>
                <span className="font-mono text-[var(--admin-text-secondary)]">{record.refreshFrequency ?? '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--admin-text-muted)]">Processing</span>
                <span className="font-mono text-[var(--admin-text-secondary)]">{record.careeroosProcessing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--admin-text-muted)]">Transformation</span>
                <span className="font-mono text-[var(--admin-text-secondary)]">{record.transformationApplied ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--admin-text-muted)]">Cached</span>
                <span className="font-mono text-[var(--admin-text-secondary)]">{record.cached ? `Yes (${record.expectedDelayHours}h delay)` : 'No'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--admin-text-muted)]">Attribution required</span>
                <span className={`font-mono ${record.attributionRequired ? 'text-amber-600' : 'text-[var(--admin-text-secondary)]'}`}>{record.attributionRequired ? 'Yes' : 'No'}</span>
              </div>
            </div>
            {record.authoritative_source && (
              <div>
                <p className="text-[10px] font-mono text-[var(--admin-text-muted)] mb-1">Authoritative source</p>
                <p className="text-xs text-[var(--admin-text-secondary)]">{record.authoritative_source}</p>
              </div>
            )}
          </div>

          {/* Review gates */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-muted)]">Review gates</p>
            <div>
              <ReviewGateRow label="Technical review" passed={record.technicalReviewed} />
              <ReviewGateRow label="Privacy review" passed={record.privacyReviewed} />
              <ReviewGateRow label="Security review" passed={record.securityReviewed} />
              <ReviewGateRow label="Legal review" passed={record.legalReviewed} />
              <ReviewGateRow label="Public disclosure review" passed={record.publicDisclosureReviewed} />
              <ReviewGateRow label="Approved for public display" passed={record.publicDisclosureApproved} />
            </div>
            {record.nextReviewAt && (
              <div className="flex items-center gap-1.5 mt-2">
                <Clock className="w-3 h-3 text-[var(--admin-text-muted)]" />
                <p className="text-[10px] font-mono text-[var(--admin-text-muted)]">
                  Next review: {new Date(record.nextReviewAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
            )}
            {record.reviewOwner && (
              <p className="text-[10px] font-mono text-[var(--admin-text-muted)]">
                Owner: {record.reviewOwner}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────

type FilterStatus = 'all' | 'production' | 'planned' | 'not_public' | 'personal_data' | 'needs_review';

export default function AdminIntegrationsPage() {
  const [records, setRecords] = useState<AdminIntegrationRecord[]>([]);
  const [filtered, setFiltered] = useState<AdminIntegrationRecord[]>([]);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { getAdminIntegrationRegistryClient } = await import('@/lib/integrations/registry-client');
        const data = await getAdminIntegrationRegistryClient();
        setRecords(data);
        setFiltered(data);
      } catch {
        setRecords([]);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    let result = [...records];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r =>
        r.providerName.toLowerCase().includes(q) ||
        r.serviceName.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        (r.description?.toLowerCase().includes(q))
      );
    }

    if (filterStatus === 'production') {
      result = result.filter(r => r.lifecycleStatus === 'production');
    } else if (filterStatus === 'planned') {
      result = result.filter(r => r.lifecycleStatus !== 'production' && r.lifecycleStatus !== 'retired');
    } else if (filterStatus === 'not_public') {
      result = result.filter(r => !r.publicDisclosureApproved);
    } else if (filterStatus === 'personal_data') {
      result = result.filter(r => r.personalDataInvolved);
    } else if (filterStatus === 'needs_review') {
      result = result.filter(r =>
        !r.technicalReviewed || !r.privacyReviewed || !r.securityReviewed || !r.legalReviewed || r.termsChanged
      );
    }

    setFiltered(result);
  }, [records, searchQuery, filterStatus]);

  // Stats
  const totalProduction = records.filter(r => r.lifecycleStatus === 'production').length;
  const totalPublic = records.filter(r => r.publicDisclosureApproved).length;
  const totalPersonalData = records.filter(r => r.personalDataInvolved).length;
  const needsReview = records.filter(r => !r.technicalReviewed || !r.privacyReviewed || !r.legalReviewed || r.termsChanged).length;

  const FILTER_OPTIONS: { value: FilterStatus; label: string }[] = [
    { value: 'all', label: `All (${records.length})` },
    { value: 'production', label: `Production (${totalProduction})` },
    { value: 'planned', label: 'Planned / Development' },
    { value: 'not_public', label: `Not public (${records.length - totalPublic})` },
    { value: 'personal_data', label: `Personal data (${totalPersonalData})` },
    { value: 'needs_review', label: `Needs review (${needsReview})` },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">
            Data Sources & Integrations
          </h1>
          <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
            Manage the integration registry and public disclosure approvals.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={ROUTES.LEGAL_DATA_SOURCES}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--admin-text-secondary)] border border-[var(--admin-border)] rounded hover:border-[var(--admin-border-interactive)] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            View public page
          </Link>
          <Button size="sm" className="inline-flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5" />
            Add integration
          </Button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: Database, label: 'Total in registry', value: records.length, color: 'text-[var(--admin-accent)]' },
          { icon: Globe, label: 'Public on register', value: totalPublic, color: 'text-emerald-500' },
          { icon: Shield, label: 'Involve personal data', value: totalPersonalData, color: 'text-amber-500' },
          { icon: AlertTriangle, label: 'Need review action', value: needsReview, color: 'text-red-500' },
        ].map(({ icon: Icon, label, value, color }) => (
          <Card key={label} className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-xs text-[var(--admin-text-muted)]">{label}</span>
            </div>
            <p className="text-2xl font-bold font-mono text-[var(--admin-text-primary)]">{value}</p>
          </Card>
        ))}
      </div>

      {/* Needs review alert */}
      {needsReview > 0 && (
        <div className="flex items-start gap-3 p-4 bg-amber-500/5 border border-amber-500/20 rounded">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[var(--admin-text-primary)]">
              {needsReview} integration{needsReview !== 1 ? 's' : ''} require review action
            </p>
            <p className="text-xs text-[var(--admin-text-secondary)] mt-0.5">
              Review gates incomplete or terms have changed. These must not be approved for public display until all gates are passed.
            </p>
          </div>
        </div>
      )}

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--admin-text-muted)]" />
          <input
            type="search"
            placeholder="Search integrations..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--admin-surface)] border border-[var(--admin-border)] rounded focus:outline-none focus:border-[var(--admin-border-interactive)] text-[var(--admin-text-primary)] placeholder:text-[var(--admin-text-muted)]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {FILTER_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilterStatus(opt.value)}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap ${
                filterStatus === opt.value
                  ? 'bg-[var(--admin-accent)] text-white border-[var(--admin-accent)]'
                  : 'text-[var(--admin-text-secondary)] border-[var(--admin-border)] hover:border-[var(--admin-border-interactive)]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Registry table */}
      {isLoading ? (
        <Card className="p-8 text-center">
          <RefreshCw className="w-5 h-5 animate-spin text-[var(--admin-text-muted)] mx-auto mb-2" />
          <p className="text-sm text-[var(--admin-text-muted)]">Loading integration registry…</p>
        </Card>
      ) : filtered.length === 0 ? (
        <Card className="p-8 text-center">
          <Database className="w-5 h-5 text-[var(--admin-text-muted)] mx-auto mb-2" />
          <p className="text-sm text-[var(--admin-text-muted)]">No integrations match the current filter.</p>
        </Card>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 px-4">
            <p className="text-xs font-mono text-[var(--admin-text-muted)]">
              Showing {filtered.length} of {records.length} integrations
            </p>
          </div>
          {filtered.map((record) => (
            <IntegrationRow
              key={record.id}
              record={record}
              expanded={expandedId === record.id}
              onToggleExpand={() => setExpandedId(expandedId === record.id ? null : record.id)}
            />
          ))}
        </div>
      )}

      {/* Governance footer */}
      <Card className="p-5">
        <div className="flex items-start gap-3">
          <FileText className="w-4 h-4 text-[var(--admin-accent)] shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[var(--admin-text-primary)]">
              Public disclosure governance
            </p>
            <p className="text-xs text-[var(--admin-text-secondary)] leading-relaxed">
              No integration is displayed on the public register unless all five review gates are passed AND <code className="text-[10px] font-mono bg-[var(--admin-surface-raised)] px-1 py-0.5 rounded">public_display_approved = true</code> is set in this admin. Minor-data-possible integrations require additional safeguarding review. Attribution notices are legally mandatory where <code className="text-[10px] font-mono bg-[var(--admin-surface-raised)] px-1 py-0.5 rounded">attribution_required = true</code>.
            </p>
            <Link href={ROUTES.LEGAL_DATA_SOURCES} target="_blank" className="inline-flex items-center gap-1 text-xs text-[var(--admin-accent)] hover:underline">
              View public register <ExternalLink className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
