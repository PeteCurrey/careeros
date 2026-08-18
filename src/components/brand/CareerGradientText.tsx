import React from 'react';
import { cn } from '@/lib/utils';

export type CareerGradientVariant = 'blue' | 'lilac' | 'gold';

interface CareerGradientTextProps {
  children: React.ReactNode;
  variant?: CareerGradientVariant;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  style?: React.CSSProperties;
}

const VARIANT_CLASSES: Record<CareerGradientVariant, string> = {
  blue: 'career-gradient-blue',
  lilac: 'career-gradient-lilac',
  gold: 'career-gradient-gold',
};

/**
 * CareerGradientText
 *
 * Renders a single continuous CareerOS gradient across an entire phrase or heading.
 * Adheres strictly to the CareerOS visual system rule:
 * - One continuous gradient spanning the entire highlighted element as a single graphical surface
 * - Never colors individual characters or resets gradients per-word
 * - Preserves responsive multi-line wrapping and high-contrast accessibility modes
 */
export function CareerGradientText({
  children,
  variant = 'blue',
  className,
  as: Component = 'span',
  style,
}: CareerGradientTextProps) {
  return (
    <Component
      className={cn(VARIANT_CLASSES[variant], className)}
      style={style}
    >
      {children}
    </Component>
  );
}
