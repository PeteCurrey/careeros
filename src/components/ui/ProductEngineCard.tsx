import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ProductEngineCardProps {
  title: string;
  description: string;
  href: string;
  status: 'available' | 'coming-soon' | 'future-vision';
  icon?: LucideIcon;
}

export function ProductEngineCard({
  title,
  description,
  href,
  status,
}: ProductEngineCardProps) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <div className="h-full flex flex-col justify-between p-7 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[var(--color-charcoal-base)] transition-all shadow-subtle">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="section-label text-[10px]">
              Subsystem
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-ivory-warm)] text-[var(--color-charcoal-deep)]">
              {status === 'available' ? 'Core Subsystem' : status === 'future-vision' ? 'Platform Vision' : 'Planned'}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors">
            {title}
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center text-xs font-semibold text-[var(--color-charcoal-deep)] pt-4 mt-6 border-t border-[var(--color-border-subtle)]">
          <span>Explore architecture</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

