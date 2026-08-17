'use client';

import React from 'react';
import { PRODUCT_STATUS_LAYERS, ProductStatusLayer } from './howItWorksData';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, Sparkles, Layers } from 'lucide-react';

const TIER_ICONS: Record<string, React.ElementType> = {
  'AVAILABLE / CURRENT': CheckCircle2,
  'IN ACTIVE DEVELOPMENT': Clock,
  'PRODUCT DIRECTION': Sparkles,
};

export function ProductLayersSection() {
  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="Career OS is Being Built in Layers"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            Product Integrity &amp; Maturity
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Career OS is being built in layers.
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-1.5 rounded">
          Transparent Development Status
        </span>
      </div>

      {/* 3 Status Tiers Grid */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[var(--color-surface-base)]">
        {PRODUCT_STATUS_LAYERS.map((layer) => {
          const Icon = TIER_ICONS[layer.tier] || Sparkles;
          return (
            <div
              key={layer.tier}
              className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={cn('text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border', layer.badgeColor)}>
                    {layer.tier}
                  </span>
                  <Icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {layer.description}
                </p>

                <div className="space-y-3 pt-2 border-t border-[var(--color-border-default)]">
                  {layer.features.map((feat) => (
                    <div key={feat.name} className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-white">{feat.name}</span>
                        <span className="text-[9px] font-mono text-[var(--color-text-tertiary)]">
                          {feat.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--color-text-tertiary)] leading-snug">
                        {feat.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Statement */}
      <div className="p-4 sm:p-6 bg-black/40 border-t border-[var(--color-border-default)] text-center sm:text-left">
        <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
          <span className="font-semibold text-white">Trust Commitment: </span>
          We explicitly label interactive demos and future agent capabilities as illustrative direction so marketing claims never overstate current production features.
        </p>
      </div>
    </div>
  );
}
