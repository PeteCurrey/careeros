import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

export default function AccountSettingsPage() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-xl space-y-8">
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.APP_SETTINGS}
            className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Settings
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
            Account
          </h1>
          <p className="text-body text-[var(--color-text-secondary)]">
            Manage your identity, email address, and authentication methods.
          </p>
        </div>

        <div className="space-y-4">
          <Card className="p-6 space-y-5">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Profile
            </h2>
            <div className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="account-display-name" className="text-xs font-semibold text-[var(--color-text-primary)]">Display Name</label>
                <input
                  id="account-display-name"
                  type="text"
                  placeholder="Your display name"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="account-email" className="text-xs font-semibold text-[var(--color-text-primary)]">Email Address</label>
                <input
                  id="account-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
                />
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Changing your email requires verification.
                </p>
              </div>
            </div>
            <Button variant="secondary" size="sm">
              Save Profile Changes
            </Button>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Authentication Methods
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)]">
                <span className="text-sm text-[var(--color-text-primary)]">Email / Password</span>
                <Badge variant="success" size="sm">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)]">
                <span className="text-sm text-[var(--color-text-secondary)]">Passkey (WebAuthn)</span>
                <Badge variant="default" size="sm">Not configured</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)]">
                <span className="text-sm text-[var(--color-text-secondary)]">Two-Factor Authentication</span>
                <Badge variant="default" size="sm">Disabled</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 border-[var(--color-danger)]/20">
            <h2 className="text-sm font-bold text-[var(--color-danger)] uppercase tracking-wide font-mono">
              Danger Zone
            </h2>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              Deleting your account will permanently remove your Career OS profile, Career Twin data, and Career Passport. This action cannot be undone.
            </p>
            <Button variant="destructive" size="sm">
              Request Account Deletion
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
