'use client';

import React, { useState } from 'react';
import {
  PublicIntegrationRecord,
  PROVIDER_TYPE_LABELS,
  DATA_DIRECTION_LABELS,
  LIFECYCLE_STATUS_LABELS,
  REFRESH_FREQUENCY_LABELS,
  PROCESSING_LABELS,
} from '@/types/integrations';
import { ChevronDown, ChevronUp, ExternalLink, Shield, RefreshCw, ArrowUpDown, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface IntegrationCardProps {
  integration: PublicIntegrationRecord;
}

function StatusPill({ status }: { status: PublicIntegrationRecord['lifecycleStatus'] }) {
  const styles: Record<string, string> = {
    production: 'bg-[var(--color-success-light)] text-[var(--color-success)] border-[var(--color-success)]/25',
    planned: 'bg-[var(--color-warning-light)] text-[var(--color-warning)] border-[var(--color-warning)]/25',
    development: 'bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border-[var(--accent-blue-border)]',
    testing: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    paused: 'bg-[var(--color-border-default)] text-[var(--color-text-tertiary)] border-[var(--color-border-default)]',
    degraded: 'bg-[var(--color-danger-light)] text-[var(--color-danger)] border-[var(--color-danger)]/25',
    retired: 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]',
    researching: 'bg-[var(--color-surface-raised)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm border ${styles[status] ?? styles.researching}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'production' ? 'bg-[var(--color-success)]' : status === 'planned' ? 'bg-[var(--color-warning)]' : 'bg-[var(--color-border-default)]'}`} />
      {LIFECYCLE_STATUS_LABELS[status]}
    </span>
  );
}

function PersonalDataBadge({ involved, sensitive }: { involved: boolean; sensitive: boolean }) {
  if (!involved) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-success)]/8 text-[var(--color-success)] border border-emerald-500/15">
        <CheckCircle2 className="w-3 h-3" />
        No personal data
      </span>
    );
  }
  if (sensitive) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-danger)]/8 text-[var(--color-danger)] border border-red-500/15">
        <AlertTriangle className="w-3 h-3" />
        Sensitive personal data
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-warning)]/8 text-[var(--color-warning)] border border-[var(--color-warning)]/25">
      <Shield className="w-3 h-3" />
      Personal data involved
    </span>
  );
}

export function IntegrationCard({ integration: i }: IntegrationCardProps) {
  const [expanded, setExpanded] = useState(false);

  const isPlanned = i.lifecycleStatus === 'planned' || i.lifecycleStatus === 'development' || i.lifecycleStatus === 'testing' || i.lifecycleStatus === 'researching';

  return (
    <article className="border border-[var(--color-border-default)] rounded-sm bg-[var(--color-surface-raised)] overflow-hidden">
      {/* Header row */}
      <div className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                {i.publicDisplayName ?? i.providerName}
              </h3>
              {isPlanned && (
                <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-sm bg-[var(--color-warning)]/8 text-[var(--color-warning)] border border-[var(--color-warning)]/25">
                  Intended — Not Live
                </span>
              )}
            </div>
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
              {PROVIDER_TYPE_LABELS[i.providerType]}
              {i.serviceName && i.serviceName !== i.providerName && (
                <span className="ml-2 text-[var(--color-text-tertiary)]">·</span>
              )}
              {i.serviceName && i.serviceName !== i.providerName && (
                <span className="ml-2">{i.serviceName}</span>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-start">
            <StatusPill status={i.lifecycleStatus} />
            <PersonalDataBadge involved={i.personalDataInvolved} sensitive={i.sensitiveDataInvolved} />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {i.publicDescription}
        </p>

        {/* Quick-summary row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Data direction */}
          <div className="space-y-0.5">
            <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Data flow</p>
            <div className="flex items-center gap-1">
              <ArrowUpDown className="w-2.5 h-2.5 text-[var(--color-accent-primary)]" />
              <p className="text-[10px] font-mono text-[var(--color-text-secondary)]">
                {i.dataDirection === 'inbound' ? 'Inbound' : i.dataDirection === 'outbound' ? 'Outbound' : i.dataDirection === 'bidirectional' ? 'Bidirectional' : 'No exchange'}
              </p>
            </div>
          </div>

          {/* Refresh */}
          {i.refreshFrequency && (
            <div className="space-y-0.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Refresh</p>
              <div className="flex items-center gap-1">
                <RefreshCw className="w-2.5 h-2.5 text-[var(--color-accent-primary)]" />
                <p className="text-[10px] font-mono text-[var(--color-text-secondary)] capitalize">
                  {REFRESH_FREQUENCY_LABELS[i.refreshFrequency] ?? i.refreshFrequency}
                </p>
              </div>
            </div>
          )}

          {/* Processing */}
          <div className="space-y-0.5">
            <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Processing</p>
            <p className="text-[10px] font-mono text-[var(--color-text-secondary)] capitalize">
              {i.careeroosProcessing === 'none' ? 'Unmodified' : i.careeroosProcessing}
            </p>
          </div>

          {/* Minors */}
          {i.minorsDataPossible && (
            <div className="space-y-0.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Minors</p>
              <p className="text-[10px] font-mono text-[var(--color-warning)]">Data possible</p>
            </div>
          )}
        </div>

        {/* Expand/collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors"
          aria-expanded={expanded}
          aria-controls={`integration-detail-${i.id}`}
        >
          {expanded ? (
            <>Full detail <ChevronUp className="w-3 h-3" /></>
          ) : (
            <>Full detail <ChevronDown className="w-3 h-3" /></>
          )}
        </button>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div id={`integration-detail-${i.id}`} className="px-5 pb-5 pt-0 space-y-5 border-t border-[var(--color-border-subtle)]">
          {/* Information categories */}
          {i.informationCategories.length > 0 && (
            <div className="pt-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-2">Information exchanged</p>
              <div className="flex flex-wrap gap-1.5">
                {i.informationCategories.map((cat) => (
                  <span key={cat} className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Personal data categories */}
          {i.personalDataInvolved && i.personalDataCategories.length > 0 && (
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-2">Personal data categories</p>
              <div className="flex flex-wrap gap-1.5">
                {i.personalDataCategories.map((cat) => (
                  <span key={cat} className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-warning)]/5 text-[var(--color-warning)] border border-[var(--color-warning)]/25">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Transformation */}
          {i.transformationApplied && i.transformationDescription && (
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-1">How CareerOS processes this data</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{i.transformationDescription}</p>
            </div>
          )}

          {/* Attribution */}
          {i.attributionRequired && i.attributionText && (
            <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-sm">
              <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-1.5">Attribution notice</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{i.attributionText}</p>
            </div>
          )}

          {/* Non-endorsement */}
          {i.nonEndorsementRequired && i.nonEndorsementText && (
            <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-sm">
              <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-1.5">Endorsement notice</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{i.nonEndorsementText}</p>
            </div>
          )}

          {/* Data retention */}
          {i.dataRetentionSummary && (
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-1">Data retention</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{i.dataRetentionSummary}</p>
            </div>
          )}

          {/* Source */}
          {i.authoritative_source && (
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-1">Authoritative source</p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {i.authoritative_source}
                {i.sourceVersion && <span className="ml-1 text-[var(--color-text-tertiary)]">· {i.sourceVersion}</span>}
              </p>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-1 border-t border-[var(--color-border-subtle)]">
            {i.websiteUrl && (
              <a href={i.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-primary)] hover:underline">
                Website <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {i.termsUrl && (
              <a href={i.termsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]">
                Terms <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {i.privacyUrl && (
              <a href={i.privacyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]">
                Privacy <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {i.sourceUrl && (
              <a href={i.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]">
                Source data <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
