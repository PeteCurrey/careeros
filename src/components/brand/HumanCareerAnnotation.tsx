'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export interface CareerAnnotationPoint {
  label: string;
  value: string;
  detail?: string;
  category: 'experience' | 'skills' | 'evidence' | 'goals' | 'next_move';
  position: { top: string; left: string }; // e.g. { top: '20%', left: '15%' }
}

interface HumanCareerAnnotationProps {
  imageSrc: string;
  imageAlt: string;
  annotations: CareerAnnotationPoint[];
  className?: string;
  title?: string;
  roleBadge?: string;
}

export function HumanCareerAnnotation({
  imageSrc,
  imageAlt,
  annotations,
  className,
  title,
  roleBadge,
}: HumanCareerAnnotationProps) {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const getCategoryColor = (category: CareerAnnotationPoint['category']) => {
    switch (category) {
      case 'experience':
        return 'text-[#DDD36D] bg-[#DDD36D]/10 border-[#DDD36D]/30';
      case 'skills':
        return 'text-[#2F8FFF] bg-[#2F8FFF]/10 border-[#2F8FFF]/30';
      case 'evidence':
        return 'text-[#34D399] bg-[#34D399]/10 border-[#34D399]/30';
      case 'goals':
        return 'text-[#CDBBD2] bg-[#CDBBD2]/10 border-[#CDBBD2]/30';
      case 'next_move':
        return 'text-[#2F8FFF] bg-[#2F8FFF]/20 border-[#2F8FFF]/50';
      default:
        return 'text-[var(--color-text-primary)] bg-white/10 border-white/20';
    }
  };

  return (
    <div className={cn('relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] group shadow-subtle', className)}>
      {/* Background Photograph */}
      <div className="relative w-full aspect-16/10 sm:aspect-16/9 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
        />

        {/* Cinematic Vignette Wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(22,22,22,0.85) 0%, rgba(22,22,22,0.3) 50%, rgba(22,22,22,0.6) 100%)',
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          {roleBadge && (
            <TechnicalBadge variant="lavender" dot>
              {roleBadge}
            </TechnicalBadge>
          )}
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
            SYSTEM SYNTHESIS
          </span>
        </div>

        {/* Interactive Annotation Nodes across the Image */}
        {annotations.map((pt, idx) => {
          const isActive = activePoint === idx;
          const colorClass = getCategoryColor(pt.category);

          return (
            <div
              key={pt.label}
              style={{ top: pt.position.top, left: pt.position.left }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                type="button"
                onClick={() => setActivePoint(isActive ? null : idx)}
                onMouseEnter={() => setActivePoint(idx)}
                className={cn(
                  'px-2 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md border transition-all flex items-center gap-1.5 shadow-md cursor-pointer',
                  colorClass,
                  isActive ? 'scale-110 shadow-lg ring-1 ring-white/40' : 'hover:scale-105'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                <span>{pt.label}</span>
              </button>

              {/* Expanded Detail Tooltip Card on Hover / Tap */}
              {isActive && (
                <div className="absolute top-full left-0 mt-2 w-48 p-2.5 rounded-lg bg-[var(--color-surface-raised)]/95 backdrop-blur-md border border-[var(--color-border-strong)] text-[11px] font-sans shadow-xl z-30 space-y-1 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                    <span>{pt.category.replace('_', ' ')}</span>
                    <span className="text-[#34D399]">VERIFIED</span>
                  </div>
                  <div className="font-semibold text-[var(--color-text-primary)]">
                    {pt.value}
                  </div>
                  {pt.detail && (
                    <p className="text-[10px] text-[var(--color-text-secondary)] leading-relaxed font-normal">
                      {pt.detail}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom Title Bar */}
        {title && (
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-xs">
            <span className="font-semibold text-white/90 text-sm tracking-tight drop-shadow-sm">
              {title}
            </span>
            <span className="text-[10px] font-mono text-white/60">
              Tap nodes to explore evidence &rarr;
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
