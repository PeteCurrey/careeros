'use client';

import React, { useState } from 'react';
import { PARTNERSHIP_FAQ } from './partnershipsData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PartnershipsFAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full space-y-4">
      <div className="divide-y divide-[var(--color-border-default)] border-y border-[var(--color-border-default)]">
        {PARTNERSHIP_FAQ.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div key={item.q} className="py-5">
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2F8FFF]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[11px] font-mono text-[var(--color-taupe-300)] mt-1 shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-normal text-white group-hover:text-[#6BB8FF] transition-colors leading-snug">
                    {item.q}
                  </h4>
                </div>
                <div className="p-1 rounded bg-white/5 border border-white/10 text-[var(--color-text-secondary)] group-hover:text-white shrink-0 mt-0.5">
                  <ChevronDown
                    className={cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180')}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="pt-3 pl-8 pr-4 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed animate-fadeIn">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
