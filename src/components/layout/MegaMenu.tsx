'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { MegaMenuSection } from '@/lib/navigation';
import { ArrowRight } from 'lucide-react';

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

  return (
    <div
      ref={menuRef}
      className="mega-menu animate-in fade-in slide-in-from-top-1 duration-150"
      role="region"
      aria-label={`${section.label} Submenu`}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6 border-b border-[var(--color-border-default)]">
          {section.groups.map((group, gIdx) => (
            <div
              key={group.label}
              className={`space-y-4 ${
                gIdx > 0 ? 'lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-8' : ''
              }`}
            >
              <h4 className="section-label pb-2 border-b border-[var(--color-border-default)]">
                {group.label}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group block p-2 -mx-2 hover:bg-[var(--color-surface-interactive)]/60 rounded-[var(--radius-sm)] transition-colors"
                    >
                      <div className="text-sm font-semibold text-[var(--color-charcoal-deep)] group-hover:text-[var(--color-charcoal-base)] transition-colors flex items-center justify-between">
                        <span>{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-[var(--color-taupe-600)]" />
                      </div>
                      {item.description && (
                        <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1 mt-0.5 font-normal">
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

        {section.cta && (
          <div className="pt-4 flex items-center justify-between text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Infrastructure designed for lifelong career mobility.
            </span>
            <Link
              href={section.cta.href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-charcoal-deep)] hover:text-black transition-colors"
            >
              <span>{section.cta.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

