'use client';

import React from 'react';
import { WhyThisExplanation } from '@/types/platform/career-brief';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Database,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface WhyThisDrawerProps {
  explanation: WhyThisExplanation | null;
  actionTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onAskMentor?: () => void;
  mentorFirstName?: string;
}

export function WhyThisDrawer({
  explanation,
  actionTitle,
  isOpen,
  onClose,
  onAskMentor,
  mentorFirstName = 'Mentor',
}: WhyThisDrawerProps) {
  if (!isOpen || !explanation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <Card className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
                Deterministic Audit Trail
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Grounded in your data
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif text-white font-normal">
              Why Career OS is recommending this
            </h3>
            <p className="text-xs text-[var(--color-taupe-300)] font-mono truncate">
              {actionTitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[var(--color-text-secondary)] hover:text-white transition-colors"
            aria-label="Close why this explanation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Headline & Reasons */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">
            {explanation.headline}
          </h4>
          <ul className="space-y-2">
            {explanation.reasons.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <span className="text-[#2F8FFF] mt-0.5">&bull;</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Grounded Dimensions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Active Goal */}
          {explanation.groundedInGoal && (
            <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block font-semibold">
                Active Objective Goal
              </span>
              <p className="text-xs font-semibold text-white">{explanation.groundedInGoal}</p>
            </div>
          )}

          {/* Capabilities */}
          {explanation.groundedInCapabilities.length > 0 && (
            <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] block font-semibold">
                Career Twin Capabilities
              </span>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {explanation.groundedInCapabilities.map((cap) => (
                  <span key={cap} className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-white">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Evidence Bases */}
          {explanation.evidenceGapsOrProof.length > 0 && (
            <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1 sm:col-span-2">
              <span className="text-[10px] font-mono uppercase text-emerald-400 block font-semibold">
                Evidence Ledger Inputs
              </span>
              <ul className="space-y-1 text-[11px] text-[var(--color-text-secondary)]">
                {explanation.evidenceGapsOrProof.map((ev, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Data Inputs & Provenance */}
        <div className="p-3 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px] font-mono text-[var(--color-text-tertiary)]">
          <div className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
            <span>Inputs: {explanation.dataInputs.join(' &bull; ')}</span>
          </div>
          <span>Zero Synthetic Bias</span>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[var(--color-border-default)]">
          <div className="text-[11px] text-[var(--color-text-tertiary)]">
            Disagree with this recommendation?
          </div>

          <div className="flex items-center gap-2">
            {onAskMentor && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  onClose();
                  onAskMentor();
                }}
                className="text-xs font-mono"
              >
                Discuss with {mentorFirstName} &rarr;
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="text-xs font-mono"
            >
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
