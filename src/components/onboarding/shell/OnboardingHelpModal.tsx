'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { X, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

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
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
              Help &amp; Privacy
            </span>
          </div>
          <h2 id="onboarding-help-title" className="text-xl font-serif text-white font-normal">
            How Career OS works
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Here is what you need to know about your setup and privacy.
          </p>
        </div>

        {/* Key Guarantees */}
        <div className="space-y-3.5 text-xs text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Private by default</p>
              <p className="text-[11px] leading-snug">
                Your Career Twin, notes, and mentor chats are completely private to you. They are never shared with employers unless you choose to share them.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
            <Sparkles className="w-4 h-4 text-[#2F8FFF] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Personalized for you</p>
              <p className="text-[11px] leading-snug">
                Your answers help Career OS build your Career Twin, connect you with the right Mentor, and suggest real next steps.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
            <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Saved as you go</p>
              <p className="text-[11px] leading-snug">
                Your progress is automatically saved. You can exit anytime and come back whenever you like.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button variant="primary" size="md" onClick={onClose} className="w-full justify-center text-xs font-mono">
            Got it &bull; Continue
          </Button>
        </div>
      </Card>
    </div>
  );
}
