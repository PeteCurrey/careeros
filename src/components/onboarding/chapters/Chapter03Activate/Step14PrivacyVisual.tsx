'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  ToggleLeft,
  ToggleRight,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
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
  // Simple, readable privacy visual
  const privacyVisual = (
    <div className="p-7 rounded-2xl bg-gradient-to-br from-[#090D14] to-[#121A2B] border border-emerald-950/40 shadow-2xl space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Private by default
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-semibold">
          YOUR CHOICE
        </span>
      </div>

      {/* Layer 1: Core Self */}
      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
        <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold block">
          PRIVATE TO YOU
        </span>
        <p className="text-xs font-semibold text-white">Career Twin &bull; Mentor conversations &bull; Career Passport</p>
      </div>

      {/* Layer 2: Optional Matching */}
      <div className="p-3.5 rounded-xl bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] space-y-1">
        <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] font-bold block">
          ONLY IF YOU CHOOSE
        </span>
        <p className="text-xs text-white">Employer matching without revealing your name</p>
      </div>

      {/* Layer 3: Public */}
      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1 opacity-80">
        <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-bold block">
          NEVER SHARED PUBLICLY BY DEFAULT
        </span>
        <p className="text-xs text-zinc-400">Search engines &bull; Public internet</p>
      </div>
    </div>
  );

  return (
    <AdaptiveSplitLayout
      chapter="03_ACTIVATE"
      stepNumber="4"
      stepTotal="5"
      sectionLabel="Privacy"
      headline="You're in control of who sees what."
      description="Your Career Twin, Mentor conversations and Career Passport are private unless you choose to share something."
      visualContent={privacyVisual}
    >
      <div className="space-y-6">
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Privacy &amp; Sharing Settings
          </h3>

          {/* Employer Discovery Toggle */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <div className="space-y-0.5 max-w-sm">
              <div className="text-xs font-semibold text-white">Let employers find me privately</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                Career OS can match you with employers without showing them your name or private information.
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
                  <span>OFF</span>
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
              <div className="text-xs font-semibold text-white">Show me relevant opportunities</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                We'll suggest jobs, training and other opportunities that match your goals.
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
              <div className="text-xs font-semibold text-white">Email me useful Career OS updates</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                Occasional product news and career insights.
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
          <div className="p-3.5 rounded-lg bg-red-950/30 border border-red-700/40 text-xs text-red-300 flex items-center justify-between gap-3">
            <span>{privacySaveError}</span>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onSaveAndNext}
              className="text-xs font-mono shrink-0"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              <span>Try again</span>
            </Button>
          </div>
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
            <span>{isSavingPrivacy ? 'Saving your privacy settings…' : 'Save and continue'}</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
