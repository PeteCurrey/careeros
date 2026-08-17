'use client';

import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck, UserCheck, Bot, Building2, Globe, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

type ViewPerspective = 'MY_VIEW' | 'MENTOR_VIEW' | 'EMPLOYER_VIEW' | 'PUBLIC_VIEW';

interface ProfileField {
  label: string;
  value: string;
  category: string;
  visibleIn: ViewPerspective[];
  verified?: boolean;
}

const PROFILE_FIELDS: ProfileField[] = [
  {
    label: 'Verified Identity & Credentials',
    value: 'Alexander Chen &bull; BSc Computer Science (Verified)',
    category: 'Credentials',
    visibleIn: ['MY_VIEW', 'MENTOR_VIEW', 'EMPLOYER_VIEW', 'PUBLIC_VIEW'],
    verified: true,
  },
  {
    label: 'Demonstrated Skills & Projects',
    value: 'Distributed Architecture, Systems Diagnostics, Q2 Launch Spec',
    category: 'Capability',
    visibleIn: ['MY_VIEW', 'MENTOR_VIEW', 'EMPLOYER_VIEW', 'PUBLIC_VIEW'],
    verified: true,
  },
  {
    label: 'Target Capability Gaps & Goals',
    value: 'Management Exposure (28% gap), Cross-org Budgeting',
    category: 'Development',
    visibleIn: ['MY_VIEW', 'MENTOR_VIEW'],
  },
  {
    label: 'Private Work & Culture Preferences',
    value: 'High-trust autonomous culture, no micromanagement, async-first',
    category: 'Preferences',
    visibleIn: ['MY_VIEW', 'MENTOR_VIEW'],
  },
  {
    label: 'Target Compensation Band',
    value: 'Top 15% regional market tier ($185k - $210k)',
    category: 'Compensation',
    visibleIn: ['MY_VIEW'],
  },
  {
    label: 'Current Job Search / Opportunity Openness',
    value: 'Passively open to clean tech & systems architecture leads',
    category: 'Search Status',
    visibleIn: ['MY_VIEW'],
  },
];

export function PrivacyViewerSection() {
  const [perspective, setPerspective] = useState<ViewPerspective>('MY_VIEW');

  const getPerspectiveInfo = () => {
    switch (perspective) {
      case 'MY_VIEW':
        return {
          title: 'Your Complete Career Twin',
          desc: 'You have unrestricted access to your entire capability model, private goals, and market parameters.',
          icon: UserCheck,
        };
      case 'MENTOR_VIEW':
        return {
          title: 'Assigned AI Career Mentor View',
          desc: 'Your mentor accesses your capability gaps and development goals to provide strategic advice, but cannot see private salary targets.',
          icon: Bot,
        };
      case 'EMPLOYER_VIEW':
        return {
          title: 'Verified Employer View',
          desc: 'Employers only see explicitly granted verified evidence and capability fit. Private preferences and status remain invisible.',
          icon: Building2,
        };
      case 'PUBLIC_VIEW':
        return {
          title: 'Public Career Passport View',
          desc: 'The public only sees public credentials and project deliverables you have explicitly chosen to publish.',
          icon: Globe,
        };
    }
  };

  const info = getPerspectiveInfo();
  const PerspectiveIcon = info.icon;

  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-50)] text-xs font-mono font-bold text-[var(--color-brand-600)] uppercase">
            <Lock className="w-3.5 h-3.5" /> Granular Access Control Simulator
          </div>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Your career data should work for you.{' '}
            <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] block sm:inline">
              Not against you.
            </span>
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Toggle perspectives below to see how Career OS enforces field-level access control. An employer never automatically sees what is in your private Career Twin.
          </p>
        </div>

        {/* The Interactive Viewer Card */}
        <div className="p-8 sm:p-12 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-editorial space-y-8">
          
          {/* Viewer Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                SIMULATE ACCESS PERMISSION BASIS
              </span>
              <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-0.5">
                Select who is viewing the profile:
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'MY_VIEW', label: 'My Full View', icon: UserCheck },
                { id: 'MENTOR_VIEW', label: 'Mentor View', icon: Bot },
                { id: 'EMPLOYER_VIEW', label: 'Employer View', icon: Building2 },
                { id: 'PUBLIC_VIEW', label: 'Public View', icon: Globe },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = perspective === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setPerspective(tab.id as ViewPerspective)}
                    className={cn(
                      'px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2',
                      isSelected
                        ? 'bg-[var(--color-brand-600)] text-white shadow-xs'
                        : 'bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-interactive)] border border-[var(--color-border-default)]'
                    )}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Perspective Explanation Banner */}
          <div className="p-4 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] flex items-start gap-3">
            <PerspectiveIcon className="w-5 h-5 text-[var(--color-brand-600)] shrink-0 mt-0.5" />
            <div className="text-xs">
              <h4 className="font-bold text-[var(--color-text-primary)]">{info.title}</h4>
              <p className="text-[var(--color-text-secondary)]">{info.desc}</p>
            </div>
          </div>

          {/* Dynamic Field Matrix */}
          <div className="space-y-3">
            {PROFILE_FIELDS.map((field, idx) => {
              const isVisible = field.visibleIn.includes(perspective);
              return (
                <div
                  key={idx}
                  className={cn(
                    'p-4 sm:p-5 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4',
                    isVisible
                      ? 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] opacity-100'
                      : 'bg-[var(--color-surface-warm)] border-[var(--color-border-subtle)] opacity-40'
                  )}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-text-tertiary)]">
                        {field.category}
                      </span>
                      {field.verified && isVisible && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-verified-light)] text-[var(--color-verified)] font-bold">
                          VERIFIED
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">
                      {field.label}
                    </p>
                    <p
                      className={cn(
                        'text-xs font-mono',
                        isVisible ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-tertiary)] italic'
                      )}
                      dangerouslySetInnerHTML={{
                        __html: isVisible ? field.value : '&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; [Redacted by Field-Level Access Control Grant]',
                      }}
                    />
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono font-bold">
                    {isVisible ? (
                      <span className="text-[var(--color-verified)] flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> VISIBLE
                      </span>
                    ) : (
                      <span className="text-[var(--color-text-tertiary)] flex items-center gap-1">
                        <EyeOff className="w-3.5 h-3.5" /> REDACTED
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Trust Guarantee */}
          <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <span className="text-[var(--color-text-secondary)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-verified)]" />
              Zero third-party advertising sales &bull; Immutable consent audit ledger
            </span>
            <Link
              href={ROUTES.TRUST_DATA_ETHICS}
              className="font-semibold text-[var(--color-brand-600)] hover:underline inline-flex items-center gap-1"
            >
              Read Data Ethics Commitments &rarr;
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
