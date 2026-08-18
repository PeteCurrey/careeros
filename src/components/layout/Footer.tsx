import React from 'react';
import Link from 'next/link';
import { footerNav } from '@/lib/navigation';
import { ROUTES } from '@/lib/routes';
import { FooterTrustStrip } from '@/components/compliance/FooterTrustStrip';

export function Footer() {
  return (
    <footer className="bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)] pt-20 pb-14 transition-colors">
      <div className="container-editorial">
        {/* Brand Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--color-border-default)]">
          <div className="lg:col-span-4 space-y-4">
            <Link href={ROUTES.HOME} className="flex items-center gap-2.5 text-[var(--color-text-primary)]">
              <span className="font-bold text-2xl tracking-tight">Career OS</span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm font-normal">
              The operating system for your working life. Built around career context, evidence, user control, and responsible decision support.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs py-1 text-[var(--color-text-tertiary)]">
                Universal Career Infrastructure &bull; User-Controlled Privacy
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
                        className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-12 border-b border-[var(--color-border-default)]">
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
                      className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust & Compliance Assurance Strip */}
        <FooterTrustStrip />

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[var(--color-text-tertiary)] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Career OS Inc. All rights reserved. Built as universal career infrastructure.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={ROUTES.TRUST_COMPLIANCE} className="hover:text-[var(--color-text-primary)] transition-colors">
              Compliance & Assurance
            </Link>
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

