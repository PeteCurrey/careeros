import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/routes';
import { UserCheck, Target, Settings, ShieldCheck, LogOut, ArrowRight, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You | Career OS',
  description: 'Your Career Twin, Progress ledger, security, and account settings.',
};

export default function YouPage() {
  return (
    <div className="py-8 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-white/5 text-[var(--accent-blue)] border border-white/10 font-bold">
            Personal Center
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif text-white font-normal">
          You &bull; Career OS
        </h1>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          Manage your Career Twin model, multi-year progress ledger, privacy grants, and account.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Career Twin */}
        <Link href="/app/twin" className="block group">
          <Card className="p-5 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] group-hover:border-[#2F8FFF]/40 transition-colors h-full">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-center text-[var(--accent-blue)]">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-white group-hover:text-[#6BB8FF] transition-colors">
                Career Twin Intelligence
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Inspect extracted capability vectors and strength confidence levels.
              </p>
            </div>
          </Card>
        </Link>

        {/* Progress Ledger */}
        <Link href="/app/progress" className="block group">
          <Card className="p-5 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] group-hover:border-purple-500/40 transition-colors h-full">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Target className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                Progress &amp; Compounding
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)]">
                View completed milestones and evidence accumulation over time.
              </p>
            </div>
          </Card>
        </Link>

        {/* Privacy & Access Grants */}
        <Link href={ROUTES.APP_SETTINGS_PRIVACY} className="block group">
          <Card className="p-5 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] group-hover:border-emerald-500/40 transition-colors h-full">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Privacy &amp; Data Grants
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Control who can view verified artifacts and manage export/deletion rights.
              </p>
            </div>
          </Card>
        </Link>

        {/* Account Settings */}
        <Link href={ROUTES.APP_SETTINGS_ACCOUNT} className="block group">
          <Card className="p-5 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] group-hover:border-white/40 transition-colors h-full">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Settings className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                Account Settings
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Manage profile display, email verification, and security credentials.
              </p>
            </div>
          </Card>
        </Link>
      </div>

      <div className="pt-4 border-t border-[var(--color-border-default)] flex items-center justify-between">
        <Link
          href={ROUTES.APP_DASHBOARD}
          className="text-xs font-mono text-[var(--color-taupe-300)] hover:text-white inline-flex items-center gap-1.5"
        >
          &larr; Return to Today
        </Link>

        <Link
          href={ROUTES.LOGIN}
          className="text-xs font-mono text-red-400 hover:underline inline-flex items-center gap-1"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
}
