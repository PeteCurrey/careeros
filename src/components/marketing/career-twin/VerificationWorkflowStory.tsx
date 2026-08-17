'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { CheckCircle2, ShieldCheck, Clock, ArrowRight, FileCheck, Building2 } from 'lucide-react';

export function VerificationWorkflowStory() {
  const steps = [
    {
      step: '01',
      title: 'Self-Declared',
      badge: 'State: User Claim',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description: 'User enters qualification title: "NVQ Level 3 Electrical Installation" and completion year.',
      provenance: 'User Data Entry',
    },
    {
      step: '02',
      title: 'Evidence Attached',
      badge: 'State: Evidenced',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      description: 'User uploads scanned diploma PDF, practical logbook, and apprenticeship completion certificate to Evidence Vault.',
      provenance: 'Passport Artifact Vault',
    },
    {
      step: '03',
      title: 'Platform Assessed',
      badge: 'State: Assessed',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
      description: 'Career OS parses document metadata, matches against City & Guilds qualification standards, and validates integrity.',
      provenance: 'Career OS System Check',
    },
    {
      step: '04',
      title: 'Issuer / Employer Verified',
      badge: 'State: Third-Party Verified',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      description: 'Official credential registry API or verified employer confirms valid registration & active status.',
      provenance: 'Issuer API / Employer Audit',
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(3);
  const activeStep = steps[activeStepIndex]!;

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 shadow-subtle">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
        <div className="space-y-1">
          <span className="section-label">PROVENANCE & TRUST &bull; ILLUSTRATIVE WORKFLOW</span>
          <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)]">
            How a Qualification Achieves Verified State
          </h3>
        </div>
        <Link
          href={ROUTES.TRUST_VERIFICATION}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-900 transition-colors shrink-0"
        >
          <span>How verification works</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Step Buttons Sequence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-[var(--radius-card)] text-left border transition-all space-y-2 ${
                isActive
                  ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-sm'
                  : 'bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-700)]'}`}>
                  STEP {item.step}
                </span>
                {idx <= activeStepIndex ? (
                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-emerald-600'}`} />
                ) : (
                  <Clock className="w-4 h-4 text-[var(--color-taupe-400)]" />
                )}
              </div>
              <h4 className="font-semibold text-xs leading-snug">{item.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Selected Step Display Panel */}
      <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${activeStep.badgeColor}`}>
              {activeStep.badge}
            </span>
            <span className="text-xs font-mono text-[var(--color-taupe-700)]">
              PROVENANCE: {activeStep.provenance}
            </span>
          </div>

          <h4 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
            Step {activeStep.step}: {activeStep.title}
          </h4>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            {activeStep.description}
          </p>
        </div>

        <div className="lg:col-span-4 p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
            VERIFICATION PARITY RECORD
          </span>
          <div className="space-y-1 font-mono text-[11px] text-[var(--color-text-primary)]">
            <p><strong>Item:</strong> NVQ L3 Electrical</p>
            <p><strong>Issuer:</strong> City & Guilds (#94821)</p>
            <p><strong>Integrity Hash:</strong> 0x8f4a...29c1</p>
            <p><strong>Status:</strong> {activeStepIndex === 3 ? '100% Issuer Verified' : 'In Verification Pipeline'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
