import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'default'
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'verified'
  | 'outline';

export type BadgeSize = 'sm' | 'md';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-surface-interactive)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)]',
  brand:
    'bg-[var(--color-brand-50)] text-[var(--color-brand-700)] dark:bg-[var(--color-brand-950)] dark:text-[var(--color-brand-300)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)]',
  success:
    'bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/20',
  verified:
    'bg-[var(--color-verified-light)] text-[var(--color-verified)] border border-[var(--color-verified)]/30 font-semibold',
  warning:
    'bg-[var(--color-warning-light)] text-[var(--color-warning)] border border-[var(--color-warning)]/30',
  danger:
    'bg-[var(--color-danger-light)] text-[var(--color-danger)] border border-[var(--color-danger)]/30',
  info:
    'bg-[var(--color-info-light)] text-[var(--color-info)] border border-[var(--color-info)]/30',
  outline:
    'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border-strong)]',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide',
  md: 'px-2.5 py-1 text-xs font-medium',
};

export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
