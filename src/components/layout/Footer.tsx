import React from 'react';
import Link from 'next/link';
import { footerNav } from '@/lib/navigation';
import { ROUTES } from '@/lib/routes';

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] border-t border-[var(--color-charcoal-border)] pt-20 pb-14 transition-colors">
      <div className="container-editorial">
        {/* Brand Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--color-border-charcoal)]">
          <div className="lg:col-span-4 space-y-4">
            <Link href={ROUTES.HOME} className="flex items-center gap-2.5 text-[var(--color-ivory-base)]">
              <span className="font-bold text-2xl tracking-tight">Career OS</span>
            </Link>
            <p className="text-sm text-[var(--color-text-inverse-muted)] leading-relaxed max-w-sm font-normal">
              The operating system for your working life. Free for individuals, built on verified evidence, privacy-first architecture, and explainable decision support.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs py-1 text-[var(--color-text-inverse-muted)] opacity-70">
                Universal Architecture &bull; Global Data Sovereignty
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {footerNav.slice(0, 5).map((group) => (
              <div key={group.label} className="space-y-3">
                <h4 className="section-label-light">
                  {group.label}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-xs text-[var(--color-text-inverse-muted)] hover:text-white transition-colors"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-12 border-b border-[var(--color-border-charcoal)]">
          {footerNav.slice(5).map((group) => (
            <div key={group.label} className="space-y-3">
              <h4 className="section-label-light">
                {group.label}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-[var(--color-text-inverse-muted)] hover:text-white transition-colors"
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
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[var(--color-text-inverse-muted)]/70 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Career OS Inc. All rights reserved. Built as universal career infrastructure.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={ROUTES.LEGAL_PRIVACY} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href={ROUTES.LEGAL_TERMS} className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href={ROUTES.TRUST_DATA_ETHICS} className="hover:text-white transition-colors">
              Data Ethics
            </Link>
            <Link href={ROUTES.TRUST_ACCESSIBILITY} className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

