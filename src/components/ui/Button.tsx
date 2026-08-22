import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost' | 'outline' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] hover:opacity-95 active:opacity-90 border border-transparent shadow-xs font-semibold hover:shadow-[0_0_14px_color-mix(in_srgb,var(--color-text-primary)_12%,transparent)]',
  secondary:
    'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--overlay-lift-strong)] active:bg-[var(--overlay-lift-strong)] border border-[var(--color-border-strong)] hover:border-[rgba(47,143,255,0.35)] hover:shadow-[0_0_12px_rgba(47,143,255,0.06)] font-medium',
  dark:
    'bg-[var(--color-surface-sunken)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] active:bg-[var(--color-surface-interactive)] border border-[var(--color-border-default)] shadow-xs font-semibold',
  ghost:
    'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--overlay-lift)] border border-transparent',
  outline:
    'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--overlay-lift)] border border-[var(--color-border-strong)] hover:border-[rgba(47,143,255,0.35)] hover:shadow-[0_0_12px_rgba(47,143,255,0.06)]',
  destructive:
    'bg-[var(--color-danger)] text-[var(--color-text-inverse)] hover:opacity-90 border border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-[var(--radius-button)] gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-[var(--radius-button)] gap-2',
  lg: 'px-7 py-3.5 text-base font-semibold rounded-[var(--radius-button)] gap-2.5',
};

// Shared visual base classes
const baseClass = (variant: ButtonVariant, size: ButtonSize, extra?: string) =>
  cn(
    'inline-flex items-center justify-center transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] cursor-pointer tracking-tight font-sans',
    variantStyles[variant],
    sizeStyles[size],
    extra,
  );

// --- Link variant (renders as <a> via Next.js Link) ---
interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

function LinkButton({ href, variant = 'primary', size = 'md', className, children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={baseClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

// --- Button variant (renders as <button>) ---
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

function ActionButton({ variant = 'primary', size = 'md', className, children, disabled, ...rest }: ActionButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(baseClass(variant, size, className), disabled && 'opacity-50 pointer-events-none')}
      {...rest}
    >
      {children}
    </button>
  );
}

// --- Unified export ---
export type ButtonProps =
  | ({ href: string } & LinkButtonProps)
  | ({ href?: undefined } & ActionButtonProps);

export function Button(props: ButtonProps) {
  if (props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    return <LinkButton href={href} {...rest} />;
  }
  const { ...rest } = props as ActionButtonProps;
  return <ActionButton {...rest} />;
}

