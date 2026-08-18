'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { ArrowRight, User } from 'lucide-react';

interface Step01NameProps {
  displayName: string;
  onChangeDisplayName: (name: string) => void;
  onNext: () => void;
}

export function Step01Name({
  displayName,
  onChangeDisplayName,
  onNext,
}: Step01NameProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (displayName.trim()) {
      onNext();
    }
  };

  return (
    <AdaptiveSplitLayout
      chapter="01_PROTECT"
      stepNumber="1"
      stepTotal="3"
      sectionLabel="Set up"
      headline="Let's get your Career OS ready."
      description="We'll ask a few questions so Career OS can understand where you are and what you want to work towards."
      imageSrc="/media/hero/city_horizon_hero.jpg"
      imageAlt="Career OS Horizon"
      bottomVisualQuote={{
        text: 'Career OS is built around what you can actually do and where you want to go.',
        author: 'Career OS',
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="user-name-input"
            className="text-sm font-semibold text-white block"
          >
            What should we call you?
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--color-taupe-300)]">
              <User className="w-4 h-4" />
            </div>
            <input
              id="user-name-input"
              type="text"
              required
              autoFocus
              value={displayName}
              onChange={(e) => onChangeDisplayName(e.target.value)}
              placeholder="e.g. Alex, Jordan, Sarah"
              className="w-full pl-10 pr-4 py-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-base text-white placeholder-zinc-500 focus:outline-none focus:border-[#2F8FFF] focus:ring-1 focus:ring-[#2F8FFF] transition-all"
            />
          </div>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Your preferred first name or nickname.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={!displayName.trim()}
            className="text-xs font-mono"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </form>
    </AdaptiveSplitLayout>
  );
}
