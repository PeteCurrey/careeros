'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { primaryNav, megaMenuContent } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [activeMenuKey, setActiveMenuKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenuKey(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (key: string) => {
    setActiveMenuKey((prev) => (prev === key ? null : key));
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        scrolled
          ? 'bg-[var(--color-ivory-base)]/95 backdrop-blur-sm border-b border-[var(--color-border-default)] shadow-subtle'
          : 'bg-[var(--color-ivory-base)] border-b border-[var(--color-border-subtle)]'
      )}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark (Editorial & Dignified) */}
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2.5 text-[var(--color-charcoal-deep)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-focus)] px-1"
          >
            <span className="text-xl font-bold tracking-tight">
              Career OS
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[var(--color-taupe-600)] font-medium pl-2 border-l border-[var(--color-border-default)]">
              Platform
            </span>
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
                      'inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-[var(--radius-button)]',
                      isCurrent
                        ? 'text-[var(--color-charcoal-deep)] bg-[var(--color-surface-interactive)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal-deep)] hover:bg-[var(--color-surface-interactive)]/60'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-150 opacity-60',
                        isCurrent && 'transform rotate-180 opacity-100'
                      )}
                    />
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal-deep)] hover:bg-[var(--color-surface-interactive)]/60 rounded-[var(--radius-button)] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={ROUTES.LOGIN}
              className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal-deep)] transition-colors px-2 py-1"
            >
              Log In
            </Link>
            <Button href={ROUTES.SIGNUP} variant="primary" size="sm">
              Start your career
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close main menu' : 'Open main menu'}
            className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal-deep)] rounded-[var(--radius-button)]"
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
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[var(--color-ivory-base)] z-50 overflow-y-auto p-6 flex flex-col justify-between border-t border-[var(--color-border-default)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="section-label">
                Who Career OS is For
              </span>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href={ROUTES.FOR_STUDENTS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-charcoal-deep)] rounded-[var(--radius-sm)]"
                >
                  Students
                </Link>
                <Link
                  href={ROUTES.FOR_PROFESSIONALS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-charcoal-deep)] rounded-[var(--radius-sm)]"
                >
                  Professionals
                </Link>
                <Link
                  href={ROUTES.FOR_HIGH_SCHOOLS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-charcoal-deep)] rounded-[var(--radius-sm)]"
                >
                  High Schools
                </Link>
                <Link
                  href={ROUTES.FOR_EMPLOYERS}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-charcoal-deep)] rounded-[var(--radius-sm)]"
                >
                  Employers
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[var(--color-border-default)]">
              <span className="section-label">
                Platform Foundations
              </span>
              <ul className="space-y-2 pt-1 text-sm font-medium">
                <li>
                  <Link href={ROUTES.PRODUCT_AI_CAREER_MENTOR} className="block py-1 text-[var(--color-charcoal-deep)] hover:text-[var(--color-mauve-base)]">
                    AI Career Mentor
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_CAREER_TWIN} className="block py-1 text-[var(--color-charcoal-deep)] hover:text-[var(--color-mauve-base)]">
                    Career Twin
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_CAREER_PASSPORT} className="block py-1 text-[var(--color-charcoal-deep)] hover:text-[var(--color-mauve-base)]">
                    Career Passport
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_CAREER_GRAPH} className="block py-1 text-[var(--color-charcoal-deep)] hover:text-[var(--color-mauve-base)]">
                    Career Graph
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.PRODUCT_OPPORTUNITY_AGENT} className="block py-1 text-[var(--color-charcoal-deep)] hover:text-[var(--color-mauve-base)]">
                    Opportunity Agent
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-default)] space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
              <Link href={ROUTES.TRUST} className="block py-1 hover:text-[var(--color-charcoal-deep)]">
                Trust Centre & Responsible AI
              </Link>
              <Link href={ROUTES.PATHWAYS} className="block py-1 hover:text-[var(--color-charcoal-deep)]">
                Pathways Directory
              </Link>
              <Link href={ROUTES.COMPANY_ABOUT} className="block py-1 hover:text-[var(--color-charcoal-deep)]">
                About Career OS
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--color-border-default)] space-y-3 mt-6">
            <Button href={ROUTES.LOGIN} variant="secondary" size="md" className="w-full">
              Log In
            </Button>
            <Button href={ROUTES.SIGNUP} variant="primary" size="md" className="w-full">
              Start your career — Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

