'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export type HoverCardPattern = 'background' | 'side' | 'mask' | 'context';

export interface HoverImageCardProps {
  imageSrc?: string;
  imageAlt?: string;
  pattern?: HoverCardPattern;
  badge?: string;
  badgeVariant?: 'blue' | 'lilac' | 'gold' | 'default';
  title: string;
  description: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  pathwaySignals?: string[];
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function HoverImageCard({
  imageSrc,
  imageAlt = '',
  pattern = 'background',
  badge,
  badgeVariant = 'blue',
  title,
  description,
  tagline,
  ctaText,
  pathwaySignals,
  active = false,
  className,
  children,
  onClick,
}: HoverImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isInteracting = isHovered || active;

  const badgeStyles = {
    blue: 'text-[#2F8FFF] bg-[#2F8FFF]/10 border-[#2F8FFF]/30',
    lilac: 'text-[#CDBBD2] bg-[#CDBBD2]/10 border-[#CDBBD2]/30',
    gold: 'text-[#DDD36D] bg-[#DDD36D]/10 border-[#DDD36D]/30',
    default: 'text-[var(--color-text-tertiary)] bg-white/5 border-white/10',
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] transition-all duration-500 flex flex-col justify-between p-6 select-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]',
        isInteracting
          ? 'border-[#2F8FFF]/40 shadow-[0_8px_32px_rgba(0,0,0,0.45)] -translate-y-0.5'
          : 'hover:border-[var(--color-border-strong)]',
        className
      )}
    >
      {/* ── 1. PATTERN: BACKGROUND REVEAL ── */}
      {pattern === 'background' && imageSrc && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 z-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isInteracting ? 'opacity-30 scale-100' : 'opacity-0 scale-[1.03]'
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-base)] via-[var(--color-surface-raised)]/80 to-[var(--color-surface-raised)]/60" />
        </div>
      )}

      {/* ── 2. PATTERN: SIDE PANEL REVEAL ── */}
      {pattern === 'side' && imageSrc && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute top-0 right-0 bottom-0 w-1/3 z-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden',
            isInteracting ? 'opacity-35 translate-x-0' : 'opacity-0 translate-x-4'
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="33vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-raised)] via-transparent to-transparent" />
        </div>
      )}

      {/* ── 3. PATTERN: MASK REVEAL ── */}
      {pattern === 'mask' && imageSrc && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 z-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isInteracting
              ? 'opacity-25 [clip-path:inset(0%_0%_0%_0%)]'
              : 'opacity-0 [clip-path:inset(15%_15%_15%_15%)]'
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-surface-raised)]/70 backdrop-blur-[1px]" />
        </div>
      )}

      {/* ── CONTENT CONTAINER ── */}
      <div className="relative z-10 space-y-4">
        {/* Header: Badge & Tagline */}
        <div className="flex items-center justify-between gap-2">
          {badge ? (
            <span
              className={cn(
                'inline-flex items-center font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-xs border',
                badgeStyles[badgeVariant]
              )}
            >
              {badge}
            </span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]/60" />
          )}

          {tagline && (
            <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
              {tagline}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Dynamic Pathway Signals (Context Pattern) */}
        {pathwaySignals && pathwaySignals.length > 0 && (
          <div
            className={cn(
              'pt-2 flex flex-wrap items-center gap-1.5 transition-all duration-500',
              isInteracting ? 'opacity-100 translate-y-0' : 'opacity-70'
            )}
          >
            {pathwaySignals.map((signal, idx) => (
              <span
                key={signal}
                className="inline-flex items-center text-[10px] font-mono text-[#6BB8FF] bg-[#2F8FFF]/10 border border-[#2F8FFF]/20 px-2 py-0.5 rounded-xs"
              >
                {signal}
                {idx < pathwaySignals.length - 1 && (
                  <span className="ml-1.5 text-white/20">→</span>
                )}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>

      {/* Footer: Action Indicator */}
      {ctaText && (
        <div className="relative z-10 pt-4 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
          <span className="text-xs font-medium text-[var(--color-text-secondary)] group-hover:text-[#6BB8FF] transition-colors">
            {ctaText}
          </span>
          <ArrowRight
            className={cn(
              'w-3.5 h-3.5 text-[#2F8FFF] transition-transform duration-300',
              isInteracting ? 'translate-x-1' : ''
            )}
          />
        </div>
      )}
    </div>
  );
}
