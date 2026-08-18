import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft, Lock } from 'lucide-react';

export default function PrivacySettingsPage() {
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
            Privacy & Data
          </h1>
          <p className="text-body text-[var(--color-text-secondary)]">
            Control who can see your professional profile and how your career data is used.
          </p>
        </div>

        <div className="space-y-4">
          {/* Core Privacy Principle */}
          <div className="p-4 rounded-lg bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)] flex items-start gap-3">
            <Lock className="w-4 h-4 text-[var(--color-brand-600)] mt-0.5" />
            <p className="text-xs text-[var(--color-brand-700)] dark:text-[var(--color-brand-300)] leading-relaxed">
              <strong>Career OS Privacy Principle:</strong> Your career information will never be disclosed to employers without your explicit permission. Default visibility is Private.
            </p>
          </div>

          <Card className="p-6 space-y-5">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Profile Visibility
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Default profile visibility', current: 'PRIVATE', options: ['PRIVATE', 'CONNECTIONS', 'NETWORK', 'PUBLIC'] },
              ].map((s) => (
                <div key={s.label} className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-primary)]">{s.label}</label>
                  <div className="flex flex-wrap gap-2">
                    {s.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                          opt === s.current
                            ? 'bg-[var(--color-brand-600)] text-white border-transparent'
                            : 'bg-[var(--color-surface-interactive)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-5">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Discovery Permissions
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Allow employer discovery', description: 'Enables Employer Agents to find your profile when you match their criteria.', value: false },
                { label: 'Allow mentor access', description: 'Allows your AI Career Mentor to access relevant Career Twin dimensions.', value: true },
                { label: 'Allow network visibility', description: 'Makes your profile visible to verified Career Network connections.', value: false },
              ].map((toggle) => (
                <div key={toggle.label} className="flex items-start justify-between gap-4 py-3 border-b border-[var(--color-border-default)] last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{toggle.label}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{toggle.description}</p>
                  </div>
                  <Badge variant={toggle.value ? 'success' : 'default'} size="sm">
                    {toggle.value ? 'ON' : 'OFF'}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-5">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Daily Mentor Startup Experience
            </h2>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Daily Welcome Mode
                </label>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Configure how your assigned AI Career Mentor greets you on your first entry into Career OS each local day.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { key: 'CINEMATIC', label: 'Cinematic (Default)', desc: 'Full-screen authentic environment, mentor greeting and daily line' },
                    { key: 'SUBTLE', label: 'Subtle', desc: 'Embedded mentor greeting banner without fullscreen transition' },
                    { key: 'OFF', label: 'Off', desc: 'Open directly into Today dashboard without daily sequence' },
                  ].map((mode) => (
                    <button
                      key={mode.key}
                      type="button"
                      className={`px-3 py-2 text-xs font-medium rounded-md border text-left transition-colors ${
                        mode.key === 'CINEMATIC'
                          ? 'bg-[#2F8FFF]/15 text-white border-[#2F8FFF]'
                          : 'bg-[var(--color-surface-interactive)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]'
                      }`}
                    >
                      <span className="font-semibold block">{mode.label}</span>
                      <span className="text-[10px] text-[var(--color-text-tertiary)] block mt-0.5">{mode.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Data Export
            </h2>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              Download a complete copy of your Career OS data including your Career Twin profile, Career Passport records, consent history, and account information.
            </p>
            <Button variant="secondary" size="sm">
              Request Data Export
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
