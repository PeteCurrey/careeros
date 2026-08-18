'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type TechnicalBadgeVariant = 'blue' | 'lavender' | 'champagne' | 'neutral' | 'success';

interface TechnicalBadgeProps {
  children: React.ReactNode;
  variant?: TechnicalBadgeVariant;
  className?: string;
  dot?: boolean;
}

export function TechnicalBadge({
  children,
  variant = 'neutral',
  className = '',
  dot = false,
}: TechnicalBadgeProps) {
  const variantStyles: Record<TechnicalBadgeVariant, string> = {
    blue: 'bg-[rgba(47,143,255,0.08)] text-[#2F8FFF] border-[rgba(47,143,255,0.22)]',
    lavender: 'bg-[rgba(205,187,210,0.10)] text-[#E8DFE9] border-[rgba(205,187,210,0.25)]',
    champagne: 'bg-[rgba(221,211,109,0.08)] text-[#EFE9B8] border-[rgba(221,211,109,0.22)]',
    neutral: 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)]',
    success: 'bg-[rgba(52,211,153,0.08)] text-[#34D399] border-[rgba(52,211,153,0.22)]',
  };

  const dotColors: Record<TechnicalBadgeVariant, string> = {
    blue: 'bg-[#2F8FFF] shadow-[0_0_6px_rgba(47,143,255,0.6)]',
    lavender: 'bg-[#CDBBD2] shadow-[0_0_6px_rgba(205,187,210,0.5)]',
    champagne: 'bg-[#DDD36D] shadow-[0_0_6px_rgba(221,211,109,0.5)]',
    neutral: 'bg-[var(--color-taupe-400)]',
    success: 'bg-[#34D399] shadow-[0_0_6px_rgba(52,211,153,0.6)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-medium rounded-[var(--radius-sm)] border',
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      <span>{children}</span>
    </span>
  );
}
