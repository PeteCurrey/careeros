import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  as: HeadingTag = 'h2',
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto items-center',
    right: 'text-right ml-auto items-end',
  }[align];

  const headingSizeClass = {
    h1: 'text-display',
    h2: 'text-headline',
    h3: 'text-title',
  }[HeadingTag];

  return (
    <div className={cn('flex flex-col max-w-3xl space-y-3 mb-10', alignClass, className)}>
      {eyebrow && (
        <span className="text-eyebrow font-mono tracking-widest uppercase text-xs">
          {eyebrow}
        </span>
      )}
      <HeadingTag className={cn(headingSizeClass, 'font-bold tracking-tight text-[var(--color-text-primary)]')}>
        {heading}
      </HeadingTag>
      {description && (
        <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
