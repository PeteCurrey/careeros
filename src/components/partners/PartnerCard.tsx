'use client';

import React, { useState } from 'react';
import { PartnerEcosystemItem } from '@/types/partners';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface PartnerCardProps {
  partner: PartnerEcosystemItem;
  variant?: 'featured' | 'standard' | 'compact';
  isPreview?: boolean;
}

function PreviewBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-amber-500/10 text-amber-500 border border-amber-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 inline-block" />
      Intended — Not Yet Live
    </span>
  );
}

export function FeaturedPartnerCard({ partner, isPreview }: { partner: PartnerEcosystemItem; isPreview?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative p-8 lg:p-10 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm hover:border-[var(--color-border-interactive)] transition-all duration-300">
      {/* Category eyebrow */}
      <div className="flex items-center justify-between mb-6">
        <p className="section-label text-[var(--color-accent-primary)]">{partner.category}</p>
        {isPreview && <PreviewBadge />}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mb-2">
              {partner.name}
            </h3>
            <p className="text-base text-[var(--color-text-secondary)] font-medium leading-relaxed italic">
              "{partner.positioning}"
            </p>
          </div>

          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {partner.shortDescription}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] min-w-[120px] pt-0.5">
                Why this matters
              </span>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {partner.partnershipReason}
              </p>
            </div>
          </div>

          {/* Expandable capabilities */}
          <div className="pt-4 border-t border-[var(--color-border-subtle)]">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors group/btn"
              aria-expanded={expanded}
            >
              <span className="font-mono uppercase tracking-wider">
                {expanded ? 'Show less' : 'Capability detail'}
              </span>
              {expanded ? (
                <ChevronUp className="w-3 h-3 group-hover/btn:translate-y-[-1px] transition-transform" />
              ) : (
                <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-[1px] transition-transform" />
              )}
            </button>

            {expanded && (
              <div className="mt-4 space-y-4">
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {partner.capabilityProvided}
                </p>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                    Supported Audiences
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.audienceSupported.map((a) => (
                      <span
                        key={a}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          {/* Logo placeholder */}
          <div className="w-full h-24 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-sm flex items-center justify-center">
            <span className="text-xs font-bold text-[var(--color-text-tertiary)] tracking-wide">
              {partner.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${partner.publicDisplayApproved ? 'bg-[#34D399]' : 'bg-amber-400'}`} />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {partner.publicDisplayApproved ? 'Partnership Active' : 'Partnership Intended'}
              </span>
            </div>
            <a
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent-primary)] hover:underline font-medium"
            >
              Visit {partner.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function PartnerCard({ partner, isPreview }: PartnerCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm hover:border-[var(--color-border-interactive)] transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent-primary)]">
          {partner.category}
        </p>
        {isPreview && <PreviewBadge />}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-sm flex items-center justify-center shrink-0">
          <span className="text-[10px] font-bold text-[var(--color-text-tertiary)]">
            {partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        </div>
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] leading-tight">
          {partner.name}
        </h3>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
        {partner.shortDescription}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors"
        aria-expanded={expanded}
      >
        <span className="font-mono uppercase tracking-wider">
          {expanded ? 'Less' : 'Why this matters'}
        </span>
        {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            {partner.partnershipReason}
          </p>
          <a
            href={partner.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-primary)] hover:underline"
          >
            {partner.name} <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      )}
    </article>
  );
}
