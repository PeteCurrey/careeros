'use client';

import React, { useState } from 'react';
import { PARTNER_TYPES, PartnerTypeContribution } from './partnershipsData';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  GraduationCap, 
  Wrench, 
  Award, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  HeartHandshake,
  Bot,
  Compass,
  AlertCircle
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  schools: GraduationCap,
  employers: Building2,
  'colleges-unis': GraduationCap,
  apprenticeships: Wrench,
  training: Award,
  credentials: ShieldCheck,
  'professional-bodies': Compass,
  'public-workforce': Users,
  nonprofits: HeartHandshake,
  events: Calendar,
};

export function PartnerEcosystemExplorer() {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>('employers');

  const activePartner: PartnerTypeContribution =
    PARTNER_TYPES.find((p) => p.id === selectedPartnerId) || PARTNER_TYPES[1]!;
  const ActiveIcon = CATEGORY_ICONS[activePartner.id] || Building2;

  return (
    <div
      id="ecosystem-explorer"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Partner Ecosystem Contribution Explorer"
    >
      {/* Top Header Bar */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Interaction 01 &bull; Partnership Contribution Matrix
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            How do you want to contribute to the student journey?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Select your organization type below to inspect your specific role, the Career OS platform contribution, and data boundaries.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Interactive Explorer
        </span>
      </div>

      {/* Partner Type Selector Grid */}
      <div className="p-4 sm:p-6 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)]">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3">
          Select Organization Category:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5" role="tablist" aria-label="Partner Categories">
          {PARTNER_TYPES.map((partner) => {
            const isSelected = partner.id === selectedPartnerId;
            const Icon = CATEGORY_ICONS[partner.id] || Building2;
            return (
              <button
                key={partner.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedPartnerId(partner.id)}
                className={cn(
                  'p-3 rounded-lg border text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8FFF] flex flex-col justify-between space-y-2',
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-md ring-1 ring-white/20'
                    : 'bg-[var(--color-surface-raised)]/60 border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon className={cn('w-4 h-4', isSelected ? 'text-white' : 'text-[var(--color-text-tertiary)]')} />
                  <span className={cn('text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border font-semibold', partner.badgeColor)}>
                    {partner.badge.split(' ')[0]}
                  </span>
                </div>
                <div className="font-semibold text-xs text-white leading-tight">
                  {partner.category}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Partner Inspection Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border-default)]">
        
        {/* LEFT COLUMN (lg:col-span-6): What You & Career OS Contribute */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[var(--color-surface-base)]/40">
          
          <div className="flex items-center gap-3 border-b border-[var(--color-border-default)] pb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <span className={cn('text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold', activePartner.badgeColor)}>
                {activePartner.badge}
              </span>
              <h4 className="text-lg font-serif text-white font-normal mt-1">
                {activePartner.title}
              </h4>
            </div>
          </div>

          {/* What You Contribute */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
              What Your Organization Contributes
            </span>
            <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2 text-xs">
              {activePartner.contributes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-white">
                  <span className="text-[#2F8FFF] font-bold">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Career OS Contributes */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              What Career OS Contributes in Return
            </span>
            <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2 text-xs">
              {activePartner.careerOSContributes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                  <span className="text-purple-400 font-bold">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (lg:col-span-6): Student Benefit, Strict Privacy Boundary & Next Steps */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[var(--color-surface-base)]/75">
          
          {/* How Students Benefit */}
          <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              How the Individual Student Benefits
            </span>
            <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
              {activePartner.studentBenefit}
            </p>
          </div>

          {/* Strict Privacy Boundary: What You DO NOT Access */}
          <div className="p-5 rounded-lg bg-rose-950/20 border border-rose-500/30 space-y-3">
            <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs">
              <Lock className="w-4 h-4 text-rose-400 shrink-0" />
              <span>What Partnership Status Does NOT Grant Access To</span>
            </div>
            <ul className="space-y-1.5 text-xs text-rose-200/80">
              {activePartner.whatYouDoNotAccess.map((restriction) => (
                <li key={restriction} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>{restriction}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-[11px] font-mono text-[var(--color-taupe-300)] italic">
              * Partnership status is not a data-access permission.
            </div>
          </div>

          {/* Recommended Next Step */}
          <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] space-y-2 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold block">
              Recommended Partnership Next Step
            </span>
            <p className="text-white font-medium">
              {activePartner.nextStep}
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-tertiary)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="italic">
          &ldquo;Commercial participation must not purchase career relevance.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
          Partner Perimeter &bull; Ethical Safeguarding Standard
        </span>
      </div>
    </div>
  );
}
