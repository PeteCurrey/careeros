'use client';
import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';

interface PrivacyLayer {
  id: 'me' | 'mentor' | 'employer' | 'public';
  label: string;
  badge: string;
  description: string;
  fields: {
    name: string;
    value: string;
    visible: boolean;
    reason?: string;
  }[];
}

const LAYERS: PrivacyLayer[] = [
  {
    id: 'me',
    label: 'My Career OS (Full Account)',
    badge: 'Owner View',
    description: 'Everything in your personal ecosystem: candid thoughts, compensation goals, verified artifacts, and private reflections.',
    fields: [
      { name: 'Current Employer & Title', value: 'Senior Reliability Lead at Apex Energy', visible: true },
      { name: 'Private Career Intent', value: 'Exploring exit within 9 months; seeking €140k+ Director role', visible: true },
      { name: 'Mentor Dialogue History', value: 'Discussed handling uncooperative VP & negotiating equity grant', visible: true },
      { name: 'Verified Portfolio Records', value: '4 ISO audit certificates & offshore turbine project brief', visible: true },
      { name: 'Identified Skill Gaps', value: 'P&L forecasting & French language fluency still developing', visible: true },
      { name: 'Public Profile Visibility', value: 'Selective anonymized discovery enabled', visible: true },
    ],
  },
  {
    id: 'mentor',
    label: 'AI Career Mentor Space',
    badge: 'Confidential Sounding Board',
    description: 'Context available to your assigned AI Mentor to provide precise, personalized advice without corporate censorship.',
    fields: [
      { name: 'Current Employer & Title', value: 'Senior Reliability Lead at Apex Energy', visible: true },
      { name: 'Private Career Intent', value: 'Exploring exit within 9 months; seeking €140k+ Director role', visible: true },
      { name: 'Mentor Dialogue History', value: 'Full multi-session context retained for continuous guidance', visible: true },
      { name: 'Verified Portfolio Records', value: 'Accessible to analyze project depth and evidence strength', visible: true },
      { name: 'Identified Skill Gaps', value: 'Used to structure targeted developmental exercises', visible: true },
      { name: 'Public Profile Visibility', value: 'Not applicable (internal platform context only)', visible: true },
    ],
  },
  {
    id: 'employer',
    label: 'Employer-Facing Context',
    badge: 'Permitted Disclosure Only',
    description: 'What current employers or recruiters see when you share your Career Passport — strictly limited to what you authorize.',
    fields: [
      { name: 'Current Employer & Title', value: 'Senior Reliability Lead (Sector: Energy Infrastructure)', visible: true },
      { name: 'Private Career Intent', value: 'HIDDEN — Employer never sees exit timing or salary dissatisfaction', visible: false, reason: 'Protected Private Context' },
      { name: 'Mentor Dialogue History', value: 'HIDDEN — Conversations are strictly private and unshared', visible: false, reason: 'Protected Private Context' },
      { name: 'Verified Portfolio Records', value: 'Only certificates and projects explicitly marked for sharing', visible: true },
      { name: 'Identified Skill Gaps', value: 'HIDDEN — Only demonstrated competencies disclosed', visible: false, reason: 'Protected Private Context' },
      { name: 'Public Profile Visibility', value: 'Subject to your granular sharing permissions', visible: true },
    ],
  },
  {
    id: 'public',
    label: 'Public / External View',
    badge: 'Minimal Sanitized Footprint',
    description: 'The public web representation if you choose to publish a shareable Career Passport link.',
    fields: [
      { name: 'Current Employer & Title', value: 'Senior Reliability Specialist (Verified Professional)', visible: true },
      { name: 'Private Career Intent', value: 'HIDDEN', visible: false, reason: 'Strictly Confidential' },
      { name: 'Mentor Dialogue History', value: 'HIDDEN', visible: false, reason: 'Strictly Confidential' },
      { name: 'Verified Portfolio Records', value: 'Publicly approved credential badges only', visible: true },
      { name: 'Identified Skill Gaps', value: 'HIDDEN', visible: false, reason: 'Strictly Confidential' },
      { name: 'Public Profile Visibility', value: 'Read-only credential confirmation page', visible: true },
    ],
  },
];

export function PrivacySimulator() {
  const [activeLayerId, setActiveLayerId] = useState<'me' | 'mentor' | 'employer' | 'public'>('employer');

  const layer = LAYERS.find((l) => l.id === activeLayerId) ?? LAYERS[0]!;

  return (
    <div className="w-full space-y-6" id="privacy-simulator">
      {/* View Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {LAYERS.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveLayerId(l.id)}
            className={`p-3 rounded-[var(--radius-card)] text-left transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              activeLayerId === l.id
                ? 'bg-white/10 border-white text-white shadow-sm'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
            }`}
            aria-pressed={activeLayerId === l.id}
          >
            <span className={`text-[9px] font-mono uppercase block font-bold tracking-wider ${activeLayerId === l.id ? 'text-[var(--accent-blue)]' : 'text-[var(--color-taupe-300)]'}`}>
              {l.badge}
            </span>
            <span className="font-semibold text-xs block truncate text-white mt-1">
              {l.label.split('(')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Simulator Display Panel */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Simulated Perspective: {layer.label}
            </span>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              {layer.description}
            </p>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
            Granular Context Boundaries
          </span>
        </div>

        <div className="space-y-2.5">
          {layer.fields.map((f, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded flex items-center justify-between gap-4 text-xs transition-all border ${
                f.visible
                  ? 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-white'
                  : 'bg-red-500/5 border-red-500/20 text-red-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {f.visible ? (
                  <Eye className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <EyeOff className="w-4 h-4 text-red-400 shrink-0" />
                )}
                <div>
                  <span className="font-mono text-[11px] font-semibold block text-[var(--color-taupe-300)]">
                    {f.name}
                  </span>
                  <span className={f.visible ? 'text-white' : 'font-mono text-red-300 text-[11px]'}>
                    {f.value}
                  </span>
                </div>
              </div>

              {!f.visible && f.reason && (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-200 border border-red-500/30 uppercase shrink-0">
                  <Lock className="w-2.5 h-2.5 inline mr-1" /> {f.reason}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
          Illustrative privacy simulation — being employed by an organization never makes that organization the owner of your private career reflections.
        </p>
      </div>
    </div>
  );
}
