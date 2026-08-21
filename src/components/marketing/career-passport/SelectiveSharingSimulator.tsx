'use client';

import React, { useState } from 'react';
import { Check, X, Shield, Lock, Share2, Eye, FileCheck, Building2 } from 'lucide-react';

interface ShareableItem {
  id: string;
  name: string;
  category: string;
  defaultShared: boolean;
  isPrivateByNature: boolean;
  value: string;
}

export function SelectiveSharingSimulator() {
  const initialItems: ShareableItem[] = [
    { id: 'qual', name: 'NVQ Level 3 Electrical Installation', category: 'Qualification', defaultShared: true, isPrivateByNature: false, value: 'Issuer Verified (City & Guilds #9402)' },
    { id: 'evid', name: 'Conveyor Line Retrofit Commissioning Report', category: 'Work Evidence', defaultShared: true, isPrivateByNature: false, value: 'Technical PDF + Schematics Attached' },
    { id: 'safety', name: 'OSHA 30-Hour General Industry Card', category: 'License & Safety', defaultShared: true, isPrivateByNature: false, value: 'Active through 2027' },
    { id: 'exp', name: '4 Years Verified Maintenance Experience', category: 'Employment History', defaultShared: true, isPrivateByNature: false, value: 'Apex Manufacturing LLC Confirmation' },
    { id: 'salary', name: 'Minimum Compensation Target Floor', category: 'Private Compensation', defaultShared: false, isPrivateByNature: true, value: '$95,000 / year base salary target' },
    { id: 'pivot', name: 'Career Change Interest in Wind Turbines', category: 'Private Ambition', defaultShared: false, isPrivateByNature: true, value: 'Exploring shift to renewable energy sector' },
    { id: 'mentor', name: 'Private AI Mentor Action Log', category: 'Internal Guidance', defaultShared: false, isPrivateByNature: true, value: 'Notes on closing senior leadership gap' },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialItems.filter((item) => item.defaultShared).map((item) => item.id)
  );

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5">
        <div className="space-y-1">
          <span className="section-label">INTERACTIVE SELECTIVE SHARING DEMO</span>
          <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)]">
            Tailor Your Shared Passport Package
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-3 py-1 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded text-[var(--color-taupe-700)]">
            Target Role: Senior Maintenance Engineer
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Item Selection Checkboxes */}
        <div className="lg:col-span-6 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block mb-1">
            Toggle Items to Include in Shared Package:
          </span>
          {initialItems.map((item) => {
            const isChecked = selectedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-[var(--radius-card)] border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  isChecked
                    ? 'bg-[var(--color-surface-base)] border-white/15 shadow-xs'
                    : 'bg-[var(--color-surface-warm)] border-[var(--color-border-default)] opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${
                      isChecked
                        ? 'bg-white/15 text-[var(--color-text-primary)]'
                        : 'border border-[var(--color-border-default)] bg-white text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-700)] block">
                      {item.category}
                    </span>
                    <h5 className="font-bold text-xs text-[var(--color-text-primary)] leading-tight">
                      {item.name}
                    </h5>
                  </div>
                </div>

                {item.isPrivateByNature && (
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 font-semibold shrink-0">
                    Private by default
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Employer Live View Preview */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="p-6 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[var(--color-text-primary)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Employer Recipient View
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                {selectedIds.length} Verified Items Shared
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {initialItems.map((item) => {
                const isShared = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded flex items-center justify-between gap-3 text-xs"
                  >
                    <span className="font-medium text-[var(--color-text-primary)]">{item.name}</span>
                    {isShared ? (
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        Visible &amp; Verified
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1 shrink-0 italic">
                        <Lock className="w-3 h-3 text-slate-400" /> Redacted / Hidden
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-[var(--color-text-secondary)] italic border-t border-[var(--color-border-subtle)] pt-3">
              Employers never receive private notes, salary floors, or exploratory intentions unless explicitly included in your custom sharing grant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
