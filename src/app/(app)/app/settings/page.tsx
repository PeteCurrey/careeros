import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Badge } from '@/components/ui/Badge';
import { User, Lock, ChevronRight } from 'lucide-react';

export default function SettingsPage() {
  const sections = [
    { label: 'Account', description: 'Email, display name, and authentication methods', href: ROUTES.APP_SETTINGS_ACCOUNT, icon: User },
    { label: 'Privacy & Data', description: 'Visibility controls, access grants, and data export', href: ROUTES.APP_SETTINGS_PRIVACY, icon: Lock },
  ];

  return (
    <div className="section-padding">
      <div className="container-site max-w-2xl space-y-8">
        <div className="space-y-2">
          <Badge variant="default" size="sm">Settings</Badge>
          <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
            Account Settings
          </h1>
          <p className="text-body text-[var(--color-text-secondary)]">
            Manage your account, privacy, and platform preferences.
          </p>
        </div>

        <div className="space-y-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group flex items-center gap-4 p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl hover:border-[var(--color-brand-400)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-surface-interactive)] text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-600)] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[var(--color-text-primary)]">{section.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{section.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-brand-600)] group-hover:translate-x-0.5 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
