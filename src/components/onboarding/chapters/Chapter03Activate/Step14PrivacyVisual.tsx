'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  ShieldCheck,
  Eye,
  EyeOff,
  ToggleLeft,
  ToggleRight,
  ArrowRight,
  ArrowLeft,
  Lock,
} from 'lucide-react';

interface Step14PrivacyVisualProps {
  employerDiscovery: 'OFF' | 'ANONYMOUS';
  opportunityRecs: boolean;
  marketingUpdates: boolean;
  isSavingPrivacy: boolean;
  privacySaveError: string | null;
  onToggleEmployerDiscovery: () => void;
  onToggleOpportunityRecs: () => void;
  onToggleMarketing: () => void;
  onSaveAndNext: () => void;
  onBack: () => void;
}

export function Step14PrivacyVisual({
  employerDiscovery,
  opportunityRecs,
  marketingUpdates,
  isSavingPrivacy,
  privacySaveError,
  onToggleEmployerDiscovery,
  onToggleOpportunityRecs,
  onToggleMarketing,
  onSaveAndNext,
  onBack,
}: Step14PrivacyVisualProps) {
  // Visual Concentric Privacy Model
  const concentricPrivacyVisual = (
    <div className="p-7 rounded-2xl bg-gradient-to-br from-[#090D14] to-[#121A2B] border border-emerald-950/40 shadow-2xl space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Concentric Privacy Shield
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-semibold">
          SELF-SOVEREIGN
        </span>
      </div>

      {/* Layer 1: Core Self */}
      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-0.5">
        <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold">
          Core Vault &bull; You Only
        </span>
        <p className="text-xs font-bold text-white">Career Twin &bull; Mentor Sounding Board &bull; Passport</p>
      </div>

      {/* Layer 2: Sealed Intermediary */}
      <div className="p-3.5 rounded-xl bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-center space-y-0.5">
        <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] font-bold">
          Bilateral Discovery &bull; Anonymous Matching
        </span>
        <p className="text-xs font-semibold text-white">Opportunity Recommendations Engine</p>
      </div>

      {/* Layer 3: External Perimeter */}
      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center space-y-0.5 opacity-80">
        <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-bold">
          External Perimeter &bull; No Access
        </span>
        <p className="text-xs text-zinc-400">Employers &bull; Search Engines &bull; Public Feeds</p>
      </div>
    </div>
  );

  return (
    <AdaptiveSplitLayout
      chapter="03_ACTIVATE"
      stepNumber="4"
      stepTotal="5"
      sectionLabel="Sovereignty &bull; Data Grants"
      headline="You're in control of who sees what."
      description="Career OS is private by default. Your Career Twin, mentor chats, and passport are never visible to employers without your explicit choice."
      visualContent={concentricPrivacyVisual}
    >
      <div className="space-y-6">
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Privacy &amp; Discovery Preferences
          </h3>

          {/* Employer Discovery Toggle */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <div className="space-y-0.5 max-w-sm">
              <div className="text-xs font-semibold text-white">Employer Discovery</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                Allow verified employers to discover your capability profile anonymously.
              </div>
            </div>
            <button
              type="button"
              onClick={onToggleEmployerDiscovery}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-zinc-300 hover:text-white transition-colors"
            >
              {employerDiscovery === 'OFF' ? (
                <>
                  <ToggleLeft className="w-4 h-4 text-zinc-500" />
                  <span>OFF (DEFAULT)</span>
                </>
              ) : (
                <>
                  <ToggleRight className="w-4 h-4 text-[#2F8FFF]" />
                  <span className="text-[#6BB8FF]">ANONYMOUS</span>
                </>
              )}
            </button>
          </div>

          {/* Opportunity Recommendations Toggle */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <div className="space-y-0.5 max-w-sm">
              <div className="text-xs font-semibold text-white">Opportunity Recommendations</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                Match adjacent pathways and capability briefs to your Career Twin.
              </div>
            </div>
            <button
              type="button"
              onClick={onToggleOpportunityRecs}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-zinc-300 hover:text-white transition-colors"
            >
              {opportunityRecs ? (
                <>
                  <ToggleRight className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">ENABLED</span>
                </>
              ) : (
                <>
                  <ToggleLeft className="w-4 h-4 text-zinc-500" />
                  <span>DISABLED</span>
                </>
              )}
            </button>
          </div>

          {/* Product Updates Toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 max-w-sm">
              <div className="text-xs font-semibold text-white">Product &amp; Intelligence Updates</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                Receive new feature releases and relevant career insight digests.
              </div>
            </div>
            <button
              type="button"
              onClick={onToggleMarketing}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-zinc-300 hover:text-white transition-colors"
            >
              {marketingUpdates ? (
                <>
                  <ToggleRight className="w-4 h-4 text-[#2F8FFF]" />
                  <span className="text-[#6BB8FF]">OPTED IN</span>
                </>
              ) : (
                <>
                  <ToggleLeft className="w-4 h-4 text-zinc-500" />
                  <span>OPTED OUT</span>
                </>
              )}
            </button>
          </div>
        </div>

        {privacySaveError && (
          <p className="text-xs text-red-400 p-3 rounded bg-red-950/20 border border-red-700/30">
            {privacySaveError}
          </p>
        )}

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-xs font-mono text-[var(--color-taupe-300)]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onSaveAndNext}
            disabled={isSavingPrivacy}
            className="text-xs font-mono"
          >
            <span>{isSavingPrivacy ? 'Saving preferences…' : 'Confirm Privacy & Activate'}</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
