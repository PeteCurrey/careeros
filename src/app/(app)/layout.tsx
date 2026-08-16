import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { SkipLink } from '@/components/layout/SkipLink';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface-base)]">
      <SkipLink />

      {/* App Shell Header */}
      <header className="sticky top-0 z-40 h-14 flex items-center justify-between px-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <Link
          href={ROUTES.APP_DASHBOARD}
          className="flex items-center gap-2 font-bold text-sm tracking-tight text-[var(--color-text-primary)]"
        >
          <div className="w-6 h-6 rounded-md bg-[var(--color-brand-600)] flex items-center justify-center text-white text-xs font-mono font-bold">
            OS
          </div>
          <span>Career OS</span>
        </Link>

        <nav className="flex items-center gap-2" aria-label="Application navigation">
          <Link
            href={ROUTES.APP_SETTINGS}
            className="text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] px-2 py-1 rounded transition-colors"
          >
            Settings
          </Link>
          <Link
            href={ROUTES.LOGIN}
            className="text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] px-2 py-1 rounded transition-colors"
          >
            Log out
          </Link>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
    </div>
  );
}
