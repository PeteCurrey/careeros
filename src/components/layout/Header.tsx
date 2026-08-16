'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { primaryNav, megaMenuContent } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)] transition-colors">
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-md px-1"
          >
            <div className="w-7 h-7 rounded-md bg-[var(--color-brand-600)] flex items-center justify-center text-white text-xs font-mono font-bold">
              OS
            </div>
            <span>Career OS</span>
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
                      'inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer',
                      isCurrent
                        ? 'bg-[var(--color-surface-interactive)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)]'
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
                  className="px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)] rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] px-2 py-1 transition-colors"
            >
              For Schools
            </Link>
            <Link
              href={ROUTES.FOR_EMPLOYERS}
              className="text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] px-2 py-1 transition-colors"
            >
              For Employers
            </Link>
            <div className="h-4 w-px bg-[var(--color-border-default)]" />
            <Button href={ROUTES.LOGIN} variant="ghost" size="sm">
              Log In
            </Button>
            <Button href={ROUTES.SIGNUP} variant="primary" size="sm">
              Start Your Career
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close main menu' : 'Open main menu'}
            className="lg:hidden p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)]"
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
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[var(--color-surface-base)] z-50 overflow-y-auto p-6 flex flex-col justify-between border-t border-[var(--color-border-default)]">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Audiences
              </span>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href={ROUTES.FOR_STUDENTS}
                  className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-lg text-sm font-semibold"
                >
                  Students
                </Link>
                <Link
                  href={ROUTES.FOR_PROFESSIONALS}
                  className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-lg text-sm font-semibold"
                >
                  Professionals
                </Link>
                <Link
                  href={ROUTES.FOR_HIGH_SCHOOLS}
                  className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-lg text-sm font-semibold"
                >
                  High Schools
                </Link>
                <Link
                  href={ROUTES.FOR_EMPLOYERS}
                  className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-lg text-sm font-semibold"
                >
                  Employers
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Core Systems
              </span>
              <ul className="space-y-2 pt-2">
                <li>
                  <Link
                    href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                    className="block py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    AI Career Mentor
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PRODUCT_CAREER_TWIN}
                    className="block py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Career Twin
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PRODUCT_CAREER_PASSPORT}
                    className="block py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Career Passport
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PRODUCT_CAREER_GRAPH}
                    className="block py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Career Graph
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
                    className="block py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Opportunity Agent
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PRODUCT_EMPLOYER_AGENT}
                    className="block py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Employer Agent
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-default)] space-y-2">
              <Link
                href={ROUTES.TRUST}
                className="block py-1.5 text-sm font-medium text-[var(--color-text-secondary)]"
              >
                Trust Centre & Responsible AI
              </Link>
              <Link
                href={ROUTES.PATHWAYS}
                className="block py-1.5 text-sm font-medium text-[var(--color-text-secondary)]"
              >
                Pathways Directory
              </Link>
              <Link
                href={ROUTES.COMPANY_ABOUT}
                className="block py-1.5 text-sm font-medium text-[var(--color-text-secondary)]"
              >
                About Company
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
