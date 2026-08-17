'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { MegaMenuSection } from '@/lib/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  section: MegaMenuSection;
  onClose: () => void;
}

export function MegaMenu({ section, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const groupCount = section.groups.length;
  const isLargeMenu = groupCount >= 4;

  return (
    <div
      ref={menuRef}
      className="mega-menu animate-in fade-in slide-in-from-top-1 duration-150 border-b border-[var(--color-border-default)] shadow-2xl bg-[var(--color-surface-base)]"
      role="region"
      aria-label={`${section.label} Submenu`}
    >
      <div className="container-editorial">
        {/* Main Grid */}
        <div
          className={cn(
            'grid gap-6 pb-6',
            isLargeMenu
              ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5'
              : groupCount === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-3xl'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {section.groups.map((group, gIdx) => (
            <div
              key={group.label}
              className={cn(
                'space-y-3',
                gIdx > 0 && !isLargeMenu ? 'lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-6' : '',
                gIdx > 0 && isLargeMenu ? 'lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-5' : ''
              )}
            >
              <h4 className="section-label pb-2 border-b border-[var(--color-border-default)] text-[10px] tracking-wider text-[var(--color-taupe-300)]">
                {group.label}
              </h4>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group block p-2 -mx-2 hover:bg-white/5 rounded-[var(--radius-sm)] transition-all"
                    >
                      <div className="text-xs font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors flex items-center justify-between">
                        <span>{item.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-[var(--accent-blue)]" />
                      </div>
                      {item.description && (
                        <p className="text-[11px] text-[var(--color-text-tertiary)] line-clamp-1 mt-0.5 font-normal leading-normal">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Promote Event Callout Card & Bottom Bar */}
        {section.promoteCard && (
          <div className="pt-4 border-t border-[var(--color-border-default)]">
            <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.22)] rounded-[var(--radius-sm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[rgba(47,143,255,0.12)] border border-[rgba(47,143,255,0.3)] flex items-center justify-center text-[var(--accent-blue)] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--color-text-primary)] tracking-tight">
                    {section.promoteCard.title}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-secondary)]">
                    {section.promoteCard.copy}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <Link
                  href={section.promoteCard.ctaHref}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-zinc-900 text-xs font-semibold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-xs"
                >
                  <span>{section.promoteCard.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {section.cta && !section.promoteCard && (
          <div className="pt-4 border-t border-[var(--color-border-default)] flex items-center justify-between text-xs">
            <span className="text-[var(--color-text-secondary)] text-[11px]">
              Infrastructure designed for lifelong career mobility.
            </span>
            <Link
              href={section.cta.href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-primary)] hover:text-white transition-colors"
            >
              <span>{section.cta.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
