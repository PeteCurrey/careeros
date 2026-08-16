import React from 'react';
import Link from 'next/link';
import { footerNav } from '@/lib/navigation';
import { ROUTES } from '@/lib/routes';

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)] pt-16 pb-12 transition-colors">
      <div className="container-site">
        {/* Brand Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[var(--color-border-default)]">
          <div className="lg:col-span-4 space-y-4">
            <Link href={ROUTES.HOME} className="flex items-center gap-2.5 font-bold text-lg text-[var(--color-text-primary)]">
              <div className="w-7 h-7 rounded-md bg-[var(--color-brand-600)] flex items-center justify-center text-white text-xs font-mono font-bold">
                OS
              </div>
              <span>Career OS</span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
              The operating system for your working life. Free for individuals, built on verified evidence, privacy-first architecture, and explainable decision support.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[var(--color-text-tertiary)] font-mono">
                Jurisdiction: United States (Launch Architecture)
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {footerNav.slice(0, 5).map((group) => (
              <div key={group.label} className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  {group.label}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row of Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-10 border-b border-[var(--color-border-default)]">
          {footerNav.slice(5).map((group) => (
            <div key={group.label} className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                {group.label}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--color-text-tertiary)] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Career OS Inc. All rights reserved. Platform architecture designed for global portability.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={ROUTES.LEGAL_PRIVACY} className="hover:text-[var(--color-text-primary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href={ROUTES.LEGAL_TERMS} className="hover:text-[var(--color-text-primary)] transition-colors">
              Terms of Service
            </Link>
            <Link href={ROUTES.TRUST_DATA_ETHICS} className="hover:text-[var(--color-text-primary)] transition-colors">
              Data Ethics
            </Link>
            <Link href={ROUTES.TRUST_ACCESSIBILITY} className="hover:text-[var(--color-text-primary)] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
