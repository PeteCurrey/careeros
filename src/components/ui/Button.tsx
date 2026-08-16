import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] active:bg-[var(--color-brand-800)] border border-transparent shadow-sm',
  secondary:
    'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]',
  ghost:
    'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)] border border-transparent',
  outline:
    'bg-transparent text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:bg-[var(--color-brand-50)] dark:hover:bg-[var(--color-brand-950)] border border-[var(--color-border-brand)]',
  destructive:
    'bg-[var(--color-danger)] text-white hover:opacity-90 border border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs font-medium rounded-md gap-1.5',
  md: 'px-4 py-2 text-sm font-semibold rounded-md gap-2',
  lg: 'px-6 py-3 text-base font-semibold rounded-lg gap-2.5',
};

// Shared visual base classes
const baseClass = (variant: ButtonVariant, size: ButtonSize, extra?: string) =>
  cn(
    'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] cursor-pointer',
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
