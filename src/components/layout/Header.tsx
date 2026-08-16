'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { primaryNav, megaMenuContent } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [activeMenuKey, setActiveMenuKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenuKey(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleMenu = (key: string) => {
    setActiveMenuKey((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-surface-raised)]/95 backdrop-blur-md border-b border-[var(--color-border-default)] transition-colors">
      <div className="container-wide">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-3 font-bold text-lg tracking-tight text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-md px-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-600)] flex items-center justify-center text-white text-xs font-mono font-bold shadow-xs">
              OS
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold">Career OS</span>
              <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider hidden sm:block">
                Professional Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {primaryNav.map((item) => {
              const menuKey = item.label.toLowerCase().replace(/\s+/g, '-');
              const hasMega = megaMenuContent[menuKey] !== undefined;
              const isCurrent = activeMenuKey === menuKey;

              if (hasMega) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => toggleMenu(menuKey)}
                    aria-expanded={isCurrent}
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer',
                      isCurrent
                        ? 'bg-[var(--color-surface-warm)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-warm)]'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-150',
                        isCurrent && 'transform rotate-180 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]'
                      )}
                    />
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-warm)] rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area — Clean & Deliberate */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href={ROUTES.LOGIN} variant="ghost" size="sm" className="font-semibold text-xs">
              Log In
            </Button>
            <Button href={ROUTES.SIGNUP} variant="primary" size="sm" className="shadow-xs font-bold text-xs">
              Start Your Career
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close main menu' : 'Open main menu'}
            className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-warm)]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {activeMenuKey && megaMenuContent[activeMenuKey] && (
        <MegaMenu
          section={megaMenuContent[activeMenuKey]!}
          onClose={() => setActiveMenuKey(null)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-[var(--color-surface-base)] z-50 overflow-y-auto p-6 flex flex-col justify-between border-t border-[var(--color-border-default)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Audiences
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href={ROUTES.FOR_STUDENTS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl text-xs font-bold text-[var(--color-text-primary)]"
                >
                  For Students
                </Link>
                <Link
                  href={ROUTES.FOR_PROFESSIONALS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl text-xs font-bold text-[var(--color-text-primary)]"
                >
                  For Professionals
                </Link>
                <Link
                  href={ROUTES.FOR_HIGH_SCHOOLS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl text-xs font-bold text-[var(--color-text-primary)]"
                >
                  For High Schools
                </Link>
                <Link
                  href={ROUTES.FOR_EMPLOYERS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl text-xs font-bold text-[var(--color-text-primary)]"
                >
                  For Employers
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Core Systems
              </span>
              <ul className="space-y-1.5 pt-1 text-sm font-semibold">
                <li>
                  <Link href={ROUTES.PRODUCT_AI_CAREER_MENTOR} className="block py-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-brand-600)]">
                    AI Career Mentor
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_CAREER_TWIN} className="block py-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-brand-600)]">
                    Career Twin
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_CAREER_PASSPORT} className="block py-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-brand-600)]">
                    Career Passport
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_CAREER_GRAPH} className="block py-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-brand-600)]">
                    Career Graph
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_OPPORTUNITY_AGENT} className="block py-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-brand-600)]">
                    Opportunity Agent
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_EMPLOYER_AGENT} className="block py-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-brand-600)]">
                    Employer Agent
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-default)] space-y-2 text-sm font-semibold text-[var(--color-text-secondary)]">
              <Link href={ROUTES.TRUST} className="block py-1.5 hover:text-[var(--color-text-primary)]">
                Trust Centre & Responsible AI
              </Link>
              <Link href={ROUTES.PATHWAYS} className="block py-1.5 hover:text-[var(--color-text-primary)]">
                Pathways Directory
              </Link>
              <Link href={ROUTES.COMPANY_ABOUT} className="block py-1.5 hover:text-[var(--color-text-primary)]">
                About Career OS
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--color-border-default)] space-y-3 mt-6">
            <Button href={ROUTES.LOGIN} variant="secondary" size="md" className="w-full">
              Log In
            </Button>
            <Button href={ROUTES.SIGNUP} variant="primary" size="md" className="w-full">
              Start Your Career (Free)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
