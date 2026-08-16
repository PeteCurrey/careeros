import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-surface-sunken)] flex flex-col">
      {/* Minimal auth header */}
      <header className="py-5 px-6 flex items-center justify-between border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2.5 font-bold text-base tracking-tight text-[var(--color-text-primary)]"
        >
          <div className="w-6 h-6 rounded-md bg-[var(--color-brand-600)] flex items-center justify-center text-white text-xs font-mono font-bold">
            OS
          </div>
          <span>Career OS</span>
        </Link>
        <Link
          href={ROUTES.HOME}
          className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          Back to homepage
        </Link>
      </header>

      {/* Auth form area */}
      <main id="main-content" tabIndex={-1} className="flex-1 flex items-center justify-center p-6 focus:outline-none">
        {children}
      </main>

      <footer className="py-4 px-6 text-center text-xs text-[var(--color-text-tertiary)]">
        <Link href={ROUTES.LEGAL_PRIVACY} className="hover:text-[var(--color-text-primary)] transition-colors mr-4">
          Privacy Policy
        </Link>
        <Link href={ROUTES.LEGAL_TERMS} className="hover:text-[var(--color-text-primary)] transition-colors">
          Terms of Service
        </Link>
      </footer>
    </div>
  );
}
