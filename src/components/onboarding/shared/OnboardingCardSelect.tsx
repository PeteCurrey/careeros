'use client';

import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface OnboardingCardSelectProps {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  isSelected: boolean;
  onSelect: (id: string) => void;
  className?: string;
}

export function OnboardingCardSelect({
  id,
  title,
  description,
  badge,
  icon: Icon,
  isSelected,
  onSelect,
  className = '',
}: OnboardingCardSelectProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onSelect(id);
        }
      }}
      className={`w-full p-4 sm:p-5 rounded-[var(--radius-card)] border text-left transition-all relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] ${
        isSelected
          ? 'bg-gradient-to-r from-[var(--accent-blue-subtle)] to-[var(--color-surface-raised)] border-[var(--accent-blue-border)] shadow-md text-white'
          : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] hover:border-zinc-500 text-[var(--color-text-secondary)] hover:text-white'
      } ${className}`}
    >
      {/* Background selection accent */}
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2F8FFF]" />
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          {Icon && (
            <div
              className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                isSelected
                  ? 'bg-[var(--accent-blue)] text-white'
                  : 'bg-[var(--color-surface-base)] text-[var(--color-taupe-300)] group-hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
          )}

          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-sm font-semibold leading-tight ${isSelected ? 'text-white font-bold' : 'text-zinc-200'}`}>
                {title}
              </span>
              {badge && (
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-[var(--accent-blue)]">
                  {badge}
                </span>
              )}
            </div>

            {description && (
              <p className={`text-xs leading-relaxed ${isSelected ? 'text-zinc-300' : 'text-[var(--color-text-secondary)]'}`}>
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Check Indicator */}
        <div className="mt-0.5 shrink-0 pl-2">
          {isSelected ? (
            <CheckCircle2 className="w-4 h-4 text-[#2F8FFF]" />
          ) : (
            <Circle className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" />
          )}
        </div>
      </div>
    </button>
  );
}
