'use client';

import React, { useState } from 'react';
import {
  OPPORTUNITY_PROFILES,
  OpportunityProfile,
  IllustrativeOpportunity,
} from './opportunityAgentData';
import { cn } from '@/lib/utils';
import {
  ChevronRight,
  Shield,
  GitBranch,
  AlertCircle,
  HelpCircle,
  Bookmark,
  Eye,
  X,
  ArrowRight,
} from 'lucide-react';

// ─── Category badge color mapping ───────────────────────────────────────────
const RELEVANCE_STYLE: Record<string, string> = {
  'Strong existing overlap': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  'Adjacent career direction': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  'Leadership bridge': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  'Requires additional qualification': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  'Exploratory opportunity': 'bg-slate-500/10 text-slate-300 border-slate-500/30',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProfileTab({
  profile,
  isSelected,
  onClick,
}: {
  profile: OpportunityProfile;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      onClick={onClick}
      className={cn(
        'flex flex-col items-start gap-0.5 px-4 py-3 rounded border text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)]',
        isSelected
          ? 'bg-[var(--color-surface-raised)] border-[var(--color-border-strong)] text-[var(--color-text-primary)]'
          : 'border-transparent text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] hover:bg-white/5'
      )}
    >
      <span className="text-xs font-semibold leading-tight">{profile.shortTitle}</span>
      <span className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">
        {profile.sector}
      </span>
    </button>
  );
}

function OpportunityCard({
  opportunity,
  isSelected,
  onClick,
}: {
  opportunity: IllustrativeOpportunity;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="radio"
      aria-checked={isSelected}
      onClick={onClick}
      className={cn(
        'w-full text-left rounded border p-4 transition-all duration-150 space-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)]',
        isSelected
          ? 'border-[var(--color-brand-600)]/50 bg-[var(--color-brand-950)]/40'
          : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 hover:border-[var(--color-border-strong)]'
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-tight">
            {opportunity.title}
          </p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">
            {opportunity.organization} · Illustrative opportunity
          </p>
        </div>
        <ChevronRight
          className={cn(
            'w-4 h-4 flex-shrink-0 mt-0.5 transition-transform',
            isSelected ? 'rotate-90 text-[var(--color-brand-400)]' : 'text-[var(--color-text-tertiary)]'
          )}
        />
      </div>
      <span
        className={cn(
          'inline-block text-[10px] font-medium px-2 py-0.5 rounded border',
          RELEVANCE_STYLE[opportunity.relevance]
        )}
      >
        {opportunity.relevance}
      </span>
    </button>
  );
}

function ReasoningPanel({ opportunity }: { opportunity: IllustrativeOpportunity }) {
  return (
    <div className="space-y-5" aria-live="polite" aria-atomic="true">
      {/* Header */}
      <div className="space-y-1 pb-4 border-b border-[var(--color-border-default)]">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-brand-400)]">
          Why this surfaced
        </span>
        <h3 className="text-base font-bold text-[var(--color-text-primary)]">
          {opportunity.title}
        </h3>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          {opportunity.organization} · Illustrative opportunity
        </p>
        <span
          className={cn(
            'inline-block text-[10px] font-medium px-2 py-0.5 rounded border mt-1',
            RELEVANCE_STYLE[opportunity.relevance]
          )}
        >
          {opportunity.relevance}
        </span>
      </div>

      {/* Summary */}
      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
        {opportunity.summary}
      </p>

      {/* Why surfaced — existing context */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <GitBranch className="w-3.5 h-3.5 text-[var(--color-brand-400)]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
            What already connects
          </span>
        </div>
        <ul className="space-y-1">
          {opportunity.whySurfaced.existingContext.map((item) => (
            <li key={item} className="flex items-start gap-1.5">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-brand-400)] flex-shrink-0" />
              <span className="text-xs text-[var(--color-text-secondary)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Direction alignment */}
      <div className="space-y-1.5 rounded border border-[var(--color-border-default)] p-3 bg-[var(--color-surface-raised)]/40">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Direction alignment
        </span>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {opportunity.whySurfaced.careerDirection}
        </p>
      </div>

      {/* Bridge */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
            What may still be needed
          </span>
        </div>
        <ul className="space-y-1">
          {opportunity.whySurfaced.bridge.map((item) => (
            <li key={item} className="flex items-start gap-1.5">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="text-xs text-[var(--color-text-tertiary)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Unknowns */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[var(--color-text-tertiary)]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            What Career OS would want to know more about
          </span>
        </div>
        <ul className="space-y-1">
          {opportunity.whySurfaced.unknowns.map((item) => (
            <li key={item} className="flex items-start gap-1.5">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-text-tertiary)] flex-shrink-0" />
              <span className="text-xs text-[var(--color-text-tertiary)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* User controls — illustrative */}
      <div className="space-y-2 pt-2 border-t border-[var(--color-border-default)]">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[var(--color-brand-400)]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
            Your control
          </span>
        </div>
        <p className="text-[10px] text-[var(--color-text-tertiary)]">
          Illustrative future controls — not currently implemented.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: X, label: 'Ignore' },
            { icon: Bookmark, label: 'Save for later' },
            { icon: Eye, label: 'Explore pathway' },
            { icon: ArrowRight, label: 'Express interest' },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              disabled
              aria-disabled="true"
              className="flex items-center gap-1.5 px-3 py-2 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/40 text-[var(--color-text-tertiary)] text-[10px] font-medium cursor-default opacity-50"
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function InteractiveOpportunityDemo() {
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const currentProfile: OpportunityProfile =
    OPPORTUNITY_PROFILES[selectedProfileIndex] ?? OPPORTUNITY_PROFILES[0]!;
  const [selectedOppId, setSelectedOppId] = useState<string>(
    currentProfile.opportunities[0]!.id
  );

  const activeOpportunity: IllustrativeOpportunity =
    currentProfile.opportunities.find((o) => o.id === selectedOppId) ??
    currentProfile.opportunities[0]!;

  const handleProfileChange = (index: number) => {
    setSelectedProfileIndex(index);
    const p = OPPORTUNITY_PROFILES[index] ?? OPPORTUNITY_PROFILES[0]!;
    setSelectedOppId(p.opportunities[0]!.id);
  };

  return (
    <div
      id="opportunity-demo-interface"
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden"
    >
      {/* Top bar */}
      <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-brand-400)]">
            Interactive demonstration
          </span>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            See why an opportunity might surface
          </p>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] px-2.5 py-1 rounded">
          Illustrative · No live vacancies
        </span>
      </div>

      {/* Profile selector */}
      <div className="px-6 py-4 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <p className="text-[10px] text-[var(--color-text-tertiary)] mb-3 uppercase tracking-wider font-medium">
          Select an illustrative profile
        </p>
        <div
          role="tablist"
          aria-label="Illustrative professional profiles"
          className="flex flex-wrap gap-2"
        >
          {OPPORTUNITY_PROFILES.map((profile, i) => (
            <ProfileTab
              key={profile.id}
              profile={profile}
              isSelected={i === selectedProfileIndex}
              onClick={() => handleProfileChange(i)}
            />
          ))}
        </div>
      </div>

      {/* Profile context */}
      <div className="px-6 py-4 bg-[var(--color-surface-raised)]/40 border-b border-[var(--color-border-default)]">
        <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2 uppercase tracking-wider font-medium">
          Profile context
        </p>
        <div className="flex flex-wrap gap-1.5" aria-label={`Context for ${currentProfile.title}`}>
          {currentProfile.context.map((item) => (
            <span
              key={item}
              className="text-[10px] font-medium px-2.5 py-1 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 flex items-start gap-1.5">
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[var(--color-brand-400)]" />
          <span>
            <span className="font-medium text-[var(--color-text-secondary)]">Direction: </span>
            {currentProfile.direction}
          </span>
        </p>
      </div>

      {/* Main panel — two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
        {/* Opportunity list */}
        <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-border-default)] p-5 space-y-2">
          <p className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-3">
            Opportunities that may be relevant
          </p>
          <div role="radiogroup" aria-label="Illustrative opportunities" className="space-y-2">
            {currentProfile.opportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                isSelected={opp.id === selectedOppId}
                onClick={() => setSelectedOppId(opp.id)}
              />
            ))}
          </div>
        </div>

        {/* Reasoning panel */}
        <div className="p-6 lg:p-8 overflow-y-auto bg-[var(--color-surface-base)]">
          <ReasoningPanel opportunity={activeOpportunity} />
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="px-6 py-3 border-t border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <p className="text-[10px] text-[var(--color-text-tertiary)]">
          All profiles, organizations and opportunities shown are illustrative only.
          Career OS does not currently operate a live opportunity-matching engine or employer network.
          This demonstration shows the intended product direction.
        </p>
      </div>
    </div>
  );
}
