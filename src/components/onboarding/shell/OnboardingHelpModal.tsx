'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { X, ShieldCheck, Lock, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';

interface OnboardingHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnboardingHelpModal({ isOpen, onClose }: OnboardingHelpModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-help-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <Card className="max-w-md w-full p-6 sm:p-7 space-y-6 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close help"
          className="absolute top-4 right-4 text-[var(--color-taupe-300)] hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title & Introduction */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
              Support &amp; Guidance
            </span>
          </div>
          <h2 id="onboarding-help-title" className="text-xl font-serif text-white font-normal">
            Building your Career OS
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Here is how your setup works and how your privacy is protected.
          </p>
        </div>

        {/* Key Guarantees */}
        <div className="space-y-3.5 text-xs text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Private &amp; Self-Sovereign</p>
              <p className="text-[11px] leading-snug">
                Your Career Twin, notes, and mentor conversations are private to you. They are never sold, published, or exposed to employers without your explicit choice.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
            <Sparkles className="w-4 h-4 text-[#2F8FFF] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Progressive Payoff</p>
              <p className="text-[11px] leading-snug">
                Every answer helps Career OS calibrate your capability model, assign your domain mentor, and generate your first strategic career objective.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
            <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Automatic Progress Saving</p>
              <p className="text-[11px] leading-snug">
                Your progress is securely saved at each step. You can exit anytime and resume right where you left off.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button variant="primary" size="md" onClick={onClose} className="w-full justify-center text-xs font-mono">
            Got it &bull; Continue Setup
          </Button>
        </div>
      </Card>
    </div>
  );
}
