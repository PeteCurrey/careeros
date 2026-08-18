'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Shield, Info, ExternalLink, RefreshCw, X, Database, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export type ProvenanceStatus =
  | 'live'
  | 'periodically_updated'
  | 'cached'
  | 'reference_dataset'
  | 'temporarily_unavailable';

export type ProvenanceProcessing =
  | 'none'
  | 'normalised'
  | 'enriched'
  | 'derived';

export type ProvenanceConfidence =
  | 'authoritative'
  | 'primary'
  | 'verified'
  | 'secondary'
  | 'partner_supplied'
  | 'employer_supplied'
  | 'user_supplied'
  | 'inferred'
  | 'careeros_derived';

export interface DataProvenanceProps {
  sourceName: string;
  datasetName?: string;
  sourceVersion?: string;
  retrievedAt?: string;
  status?: ProvenanceStatus;
  processing?: ProvenanceProcessing;
  processingDescription?: string;
  methodologyUrl?: string;
  attributionText?: string;
  originalSourceUrl?: string;
  confidence?: ProvenanceConfidence;
  variant?: 'inline' | 'compact' | 'badge' | 'card';
  showDrawerOnDemand?: boolean;
  className?: string;
}

const STATUS_LABELS: Record<ProvenanceStatus, { label: string; color: string; desc: string }> = {
  live: {
    label: 'Live Data',
    color: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    desc: 'Retrieved directly or updated continuously from the source.',
  },
  periodically_updated: {
    label: 'Periodically Updated',
    color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    desc: 'Synchronised at scheduled recurring intervals.',
  },
  cached: {
    label: 'Cached Copy',
    color: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
    desc: 'A recent copy is displayed while preserving freshness timestamps.',
  },
  reference_dataset: {
    label: 'Reference Dataset',
    color: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
    desc: 'An authoritative published dataset used in CareerOS benchmark models.',
  },
  temporarily_unavailable: {
    label: 'Unavailable',
    color: 'text-red-600 bg-red-500/10 border-red-500/20',
    desc: 'External upstream service is temporarily unreachable.',
  },
};

const PROCESSING_LABELS: Record<ProvenanceProcessing, { label: string; desc: string }> = {
  none: {
    label: 'Unmodified',
    desc: 'Displayed directly as provided by the original source.',
  },
  normalised: {
    label: 'Normalised',
    desc: 'Standardised to CareerOS taxonomy structure without altering factual values.',
  },
  enriched: {
    label: 'Enriched',
    desc: 'Augmented with complementary labour-market or contextual signals.',
  },
  derived: {
    label: 'CareerOS Derived',
    desc: 'Calculated by CareerOS analytical models using this dataset as an input.',
  },
};

const CONFIDENCE_LABELS: Record<ProvenanceConfidence, string> = {
  authoritative: 'Authoritative Official Source',
  primary: 'Primary Source',
  verified: 'Independently Verified',
  secondary: 'Secondary Provider',
  partner_supplied: 'Partner Supplied',
  employer_supplied: 'Employer Direct',
  user_supplied: 'User Voluntary Submission',
  inferred: 'Inferred by Models',
  careeros_derived: 'CareerOS Derived Conclusion',
};

export function DataProvenance({
  sourceName,
  datasetName,
  sourceVersion,
  retrievedAt,
  status = 'reference_dataset',
  processing = 'none',
  processingDescription,
  methodologyUrl,
  attributionText,
  originalSourceUrl,
  confidence = 'authoritative',
  variant = 'compact',
  showDrawerOnDemand = true,
  className = '',
}: DataProvenanceProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const statusMeta = STATUS_LABELS[status] || STATUS_LABELS.reference_dataset;
  const processingMeta = PROCESSING_LABELS[processing] || PROCESSING_LABELS.none;

  if (variant === 'badge') {
    return (
      <>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded border transition-colors ${statusMeta.color} hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)] ${className}`}
          title={`Data source: ${sourceName}. Click for provenance details.`}
          aria-haspopup="dialog"
          aria-expanded={drawerOpen}
        >
          <Database className="w-2.5 h-2.5" />
          <span>Source: {sourceName}</span>
        </button>
        {renderDrawer()}
      </>
    );
  }

  if (variant === 'inline') {
    return (
      <>
        <div className={`inline-flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] ${className}`}>
          <span className="font-mono text-[10px] uppercase tracking-wider">Source:</span>
          <span className="font-medium text-[var(--color-text-secondary)]">{sourceName}</span>
          {retrievedAt && <span className="text-[10px] font-mono">· {retrievedAt}</span>}
          {showDrawerOnDemand && (
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="text-[10px] font-mono text-[var(--color-accent-primary)] hover:underline inline-flex items-center gap-0.5"
            >
              About this data <Info className="w-2.5 h-2.5" />
            </button>
          )}
        </div>
        {renderDrawer()}
      </>
    );
  }

  if (variant === 'card') {
    return (
      <>
        <div className={`p-3 rounded border border-[var(--color-border-subtle)] bg-[var(--color-surface-sunken)] space-y-2 ${className}`}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[var(--color-accent-primary)]" />
              <span className="text-xs font-semibold text-[var(--color-text-primary)]">{sourceName}</span>
            </div>
            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${statusMeta.color}`}>
              {statusMeta.label}
            </span>
          </div>

          {datasetName && (
            <p className="text-xs text-[var(--color-text-secondary)]">{datasetName}</p>
          )}

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-[var(--color-text-tertiary)] pt-1 border-t border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[9px] uppercase tracking-widest block">Processing</span>
              <span className="text-[var(--color-text-secondary)]">{processingMeta.label}</span>
            </div>
            {retrievedAt && (
              <div>
                <span className="text-[9px] uppercase tracking-widest block">Updated</span>
                <span className="text-[var(--color-text-secondary)]">{retrievedAt}</span>
              </div>
            )}
          </div>

          {attributionText && (
            <p className="text-[10px] text-[var(--color-text-tertiary)] italic leading-relaxed pt-1">
              {attributionText}
            </p>
          )}

          {showDrawerOnDemand && (
            <div className="pt-1 flex justify-end">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="text-[10px] font-mono text-[var(--color-accent-primary)] hover:underline inline-flex items-center gap-1"
              >
                Full provenance breakdown <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
        </div>
        {renderDrawer()}
      </>
    );
  }

  // Default 'compact' variant
  return (
    <>
      <div className={`inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] ${className}`}>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
          Source:
        </span>
        <span className="font-medium text-[var(--color-text-primary)]">{sourceName}</span>
        {sourceVersion && (
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">({sourceVersion})</span>
        )}
        {showDrawerOnDemand && (
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="ml-1 text-[11px] text-[var(--color-accent-primary)] hover:underline inline-flex items-center gap-0.5"
            aria-label={`About data from ${sourceName}`}
          >
            About this data
          </button>
        )}
      </div>
      {renderDrawer()}
    </>
  );

  function renderDrawer() {
    if (!drawerOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm transition-opacity"
        role="dialog"
        aria-modal="true"
        aria-labelledby="provenance-drawer-title"
      >
        <div
          className="relative w-full max-w-md bg-[var(--color-background)] border-l border-[var(--color-border-default)] shadow-2xl h-full overflow-y-auto p-6 space-y-6 flex flex-col justify-between"
          tabIndex={-1}
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
              <div>
                <p className="section-label text-[var(--color-accent-primary)] mb-1">DATA PROVENANCE</p>
                <h3 id="provenance-drawer-title" className="text-lg font-bold text-[var(--color-text-primary)]">
                  About this data
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Source info */}
            <div className="space-y-3">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block mb-1">
                  Originating Source
                </span>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{sourceName}</p>
                {datasetName && <p className="text-xs text-[var(--color-text-secondary)]">{datasetName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-2.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block">
                    Source Status
                  </span>
                  <span className="text-xs font-medium text-[var(--color-text-primary)]">{statusMeta.label}</span>
                  <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight mt-0.5">{statusMeta.desc}</p>
                </div>

                <div className="p-2.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block">
                    Confidence Tier
                  </span>
                  <span className="text-xs font-medium text-[var(--color-text-primary)]">{CONFIDENCE_LABELS[confidence]}</span>
                </div>
              </div>
            </div>

            {/* Processing Breakdown */}
            <div className="space-y-2 p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-accent-primary)] block">
                CareerOS Processing & Normalisation
              </span>
              <p className="text-xs font-semibold text-[var(--color-text-primary)]">{processingMeta.label}</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {processingDescription || processingMeta.desc}
              </p>
            </div>

            {/* Technical Metadata */}
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3">
              {sourceVersion && (
                <div className="flex justify-between py-1 border-b border-[var(--color-border-subtle)]">
                  <span className="text-[var(--color-text-tertiary)] font-mono text-[10px]">Dataset Version</span>
                  <span className="text-[var(--color-text-secondary)] font-mono text-[10px]">{sourceVersion}</span>
                </div>
              )}
              {retrievedAt && (
                <div className="flex justify-between py-1 border-b border-[var(--color-border-subtle)]">
                  <span className="text-[var(--color-text-tertiary)] font-mono text-[10px]">Last Sync / Retrieval</span>
                  <span className="text-[var(--color-text-secondary)] font-mono text-[10px]">{retrievedAt}</span>
                </div>
              )}
            </div>

            {/* Attribution Notice */}
            {attributionText && (
              <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block">
                  Attribution & Open Data Notice
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{attributionText}</p>
              </div>
            )}
          </div>

          {/* Footer & Links */}
          <div className="pt-4 border-t border-[var(--color-border-default)] space-y-3">
            {originalSourceUrl && (
              <a
                href={originalSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-[var(--color-accent-primary)] hover:underline"
              >
                <span>Visit original source website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {methodologyUrl && (
              <a
                href={methodologyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] hover:underline"
              >
                <span>Read CareerOS analysis methodology</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href={ROUTES.LEGAL_DATA_SOURCES}
              onClick={() => setDrawerOpen(false)}
              className="block text-center py-2 px-3 text-xs font-mono text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded hover:border-[var(--color-border-interactive)] transition-colors"
            >
              View Full Data Sources & Integrations Register →
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
