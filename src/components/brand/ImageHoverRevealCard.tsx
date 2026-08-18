'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type HoverRevealPattern = 'background' | 'side' | 'mask';

interface ImageHoverRevealCardProps {
  imageSrc: string;
  imageAlt: string;
  pattern?: HoverRevealPattern;
  className?: string;
  children: React.ReactNode;
  active?: boolean;
}

export function ImageHoverRevealCard({
  imageSrc,
  imageAlt,
  pattern = 'background',
  className,
  children,
  active = false,
}: ImageHoverRevealCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showImage = isHovered || active;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] transition-all duration-500 group select-none',
        showImage ? 'border-[#2F8FFF]/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : 'hover:border-[var(--color-border-strong)]',
        className
      )}
    >
      {/* PATTERN A: BACKGROUND REVEAL */}
      {pattern === 'background' && (
        <>
          <div
            className={cn(
              'absolute inset-0 z-0 transition-all duration-700 pointer-events-none',
              showImage ? 'opacity-35 scale-100' : 'opacity-0 scale-[1.03]'
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            {/* Dark gradient protective wash for typography legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-base)] via-[var(--color-surface-raised)]/80 to-[var(--color-surface-raised)]/60" />
          </div>
        </>
      )}

      {/* PATTERN B: SIDE REVEAL */}
      {pattern === 'side' && (
        <div
          className={cn(
            'hidden sm:block absolute top-0 right-0 bottom-0 z-0 transition-all duration-600 pointer-events-none overflow-hidden border-l border-[#2F8FFF]/20',
            showImage ? 'w-[32%] opacity-90' : 'w-0 opacity-0'
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="25vw"
              className="object-cover scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-raised)] to-transparent" />
          </div>
        </div>
      )}

      {/* PATTERN C: MASK REVEAL */}
      {pattern === 'mask' && (
        <div
          className={cn(
            'absolute top-4 right-4 z-0 transition-all duration-500 pointer-events-none overflow-hidden rounded-lg border border-[var(--color-border-subtle)]',
            showImage ? 'w-24 h-24 opacity-85 scale-100' : 'w-16 h-16 opacity-0 scale-95'
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="120px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(22,22,22,0.25)]" />
        </div>
      )}

      {/* Card Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
