'use client';

import React from 'react';
import {
  ShieldAlert,
  Scale,
  Stethoscope,
  Zap,
  Truck,
  Flame,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export function RegulatedRolesVisual() {
  const regulatedExamples = [
    {
      profession: 'Regulated Healthcare (Doctor / Nurse)',
      icon: Stethoscope,
      capabilitySignal: 'Clinical triage, patient diagnosis, pharmacological knowledge',
      statutoryRequirement: 'Statutory Medical Board License (e.g. GMC, NMC, State Board)',
      rule: 'Transferable diagnostics cannot substitute for legal practice authority.',
    },
    {
      profession: 'Legal Practice (Advocate / Solicitor)',
      icon: Scale,
      capabilitySignal: 'Statutory interpretation, dispute mediation, contract drafting',
      statutoryRequirement: 'Jurisdiction Bar Admission (e.g. SRA, Bar Council, State Bar)',
      rule: 'Transferable legal acumen does not confer rights of audience without formal admission.',
    },
    {
      profession: 'Licensed Trades (Electrician / Gas Safe)',
      icon: Zap,
      capabilitySignal: 'Circuit diagnostics, load balancing, safety protocol isolation',
      statutoryRequirement: 'Mandatory Guild / Statutory Cert (e.g. Part P, NICEIC, Gas Safe)',
      rule: 'Automotive or industrial wiring experience requires formal statutory sign-off.',
    },
    {
      profession: 'Commercial Transport (Heavy Goods / Aviation)',
      icon: Truck,
      capabilitySignal: 'Defensive navigation, logistics compliance, route planning',
      statutoryRequirement: 'Mandatory Commercial License (e.g. HGV Class 1, ATPL)',
      rule: 'Aptitude cannot replace mandatory legal driving/flight certifications.',
    },
    {
      profession: 'Public Safety (Fire Command / Police)',
      icon: Flame,
      capabilitySignal: 'Crisis command, physical risk assessment, operational triage',
      statutoryRequirement: 'Vetted Civil Service / Police & Fire Service Standards',
      rule: 'Military or security experience requires jurisdictional service qualification.',
    },
  ];

  return (
    <div className="w-full p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5" />
          Statutory &amp; Regulatory Safeguards
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
          Capability Signals Cannot Replace Mandatory Licenses
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          In regulated fields, soft skill overlap is legally insufficient. Employer Agent explicitly separates functional capability indicators from non-negotiable statutory licenses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regulatedExamples.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.profession}
              className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">{item.profession}</h4>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="text-[11px] text-[var(--color-text-secondary)]">
                    <strong className="text-[#6BB8FF] font-mono">Capability:</strong> {item.capabilitySignal}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-secondary)]">
                    <strong className="text-amber-300 font-mono">Mandatory:</strong> {item.statutoryRequirement}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] text-amber-300/90 font-mono flex items-start gap-1">
                <span>&bull;</span>
                <span>{item.rule}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded bg-amber-500/5 border border-amber-500/20 text-xs text-[var(--color-text-secondary)]">
        <strong className="text-white">Product Standard:</strong> Employer Agent marks mandatory statutory qualifications as non-negotiable gates. Soft capability overlap is never silently converted into legal qualification.
      </div>
    </div>
  );
}
