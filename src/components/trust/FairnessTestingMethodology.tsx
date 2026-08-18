'use client';

import React from 'react';
import { 
  Search, 
  Database, 
  FlaskConical, 
  BarChart2, 
  ShieldCheck, 
  RefreshCw, 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  Scale
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FAIRNESS_TESTING_STEPS = [
  {
    step: '01',
    title: 'Define Fairness Dimensions',
    icon: Scale,
    desc: 'Identify the specific equality properties to test: demographic parity, equalized odds, calibration, and individual fairness.',
    ref: 'Protected characteristics defined per jurisdiction (UK EA 2010, EEOC Title VII)',
  },
  {
    step: '02',
    title: 'Assemble Test Datasets',
    icon: Database,
    desc: 'Build synthetic and pseudonymised evaluation datasets representing diverse backgrounds, school types, postcodes, and non-traditional career trajectories.',
    ref: 'Zero real PII used in testing; synthetic diversity population modeling',
  },
  {
    step: '03',
    title: 'Run Baseline Analysis',
    icon: BarChart2,
    desc: 'Establish pre-intervention disparity baselines across outcome metrics: recommendation rates, match confidence, and capability-to-role alignment scores.',
    ref: 'Adverse impact ratio methodology (4/5ths rule reference)',
  },
  {
    step: '04',
    title: 'Identify Proxy Variables',
    icon: Search,
    desc: 'Test whether facially neutral inputs—postcode, school name, grade attainment thresholds—function as discriminatory proxies for protected characteristics.',
    ref: 'Proxy discrimination doctrine (EEOC, ICO guidance)',
  },
  {
    step: '05',
    title: 'Apply Mitigations',
    icon: FlaskConical,
    desc: 'Remove or re-weight identified proxy variables, apply counterfactual fairness constraints, and rebuild candidate rankings using capability-first taxonomy matching.',
    ref: 'Counterfactual fairness & individual fairness literature',
  },
  {
    step: '06',
    title: 'Validate & Measure',
    icon: CheckCircle2,
    desc: 'Re-run evaluation dataset. Measure improvement across all protected dimensions. Document residual limitations honestly.',
    ref: 'Iterative bias-accuracy trade-off assessment',
  },
  {
    step: '07',
    title: 'Publish & Monitor',
    icon: RefreshCw,
    desc: 'Log testing outcomes in the AI change log, disclose material limitations, and schedule next evaluation cycle based on deployment drift indicators.',
    ref: 'Public transparency register & continuous monitoring cadence',
  },
];

const PROTECTED_CHARACTERISTICS = [
  { char: 'Age', uk: '✓ (UK EA 2010)', us: '✓ (ADEA)' },
  { char: 'Disability', uk: '✓ (UK EA 2010)', us: '✓ (ADA)' },
  { char: 'Gender Reassignment', uk: '✓ (UK EA 2010)', us: '~ (evolving)' },
  { char: 'Marriage & Civil Partnership', uk: '✓ (UK EA 2010)', us: '~ (some states)' },
  { char: 'Pregnancy & Maternity', uk: '✓ (UK EA 2010)', us: '✓ (PDA)' },
  { char: 'Race / Ethnicity', uk: '✓ (UK EA 2010)', us: '✓ (Title VII)' },
  { char: 'Religion or Belief', uk: '✓ (UK EA 2010)', us: '✓ (Title VII)' },
  { char: 'Sex', uk: '✓ (UK EA 2010)', us: '✓ (Title VII)' },
  { char: 'Sexual Orientation', uk: '✓ (UK EA 2010)', us: '✓ (Bostock v. Clayton)' },
];

export function FairnessTestingMethodology() {
  return (
    <div className="w-full space-y-8">
      {/* 7-Stage Testing Methodology */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-[#2F8FFF]" />
              Seven-Stage Fairness Testing Protocol
            </span>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Applied iteratively to every AI capability rated MODERATE or HEIGHTENED risk.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
            Industry Best Practice
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
          {FAIRNESS_TESTING_STEPS.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className={cn(
                  'p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3',
                  idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
                )}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#6BB8FF] px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      Step {st.step}
                    </span>
                    <Icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                  </div>
                  <h4 className="font-semibold text-white text-xs">{st.title}</h4>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-taupe-300)]">
                  <span className="italic">{st.ref}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Protected Characteristics Jurisdiction Table */}
      <div
        className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-xl"
        role="region"
        aria-label="Protected Characteristics Jurisdiction Reference Table"
      >
        <div className="p-5 sm:p-6 bg-black/30 border-b border-[var(--color-border-default)]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold block mb-1">
            Jurisdiction-Aware Protected Characteristics
          </span>
          <h4 className="text-base font-serif text-white font-normal">
            Characteristics Tested Across All Matching Algorithms
          </h4>
        </div>
        <div className="overflow-x-auto p-5 sm:p-6">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-border-default)] text-[10px] font-mono uppercase text-[var(--color-taupe-300)]">
                <th className="pb-3 text-left pr-4 font-semibold">Protected Characteristic</th>
                <th className="pb-3 text-center px-3 font-semibold text-white">UK (EA 2010)</th>
                <th className="pb-3 text-center pl-3 font-semibold text-[#6BB8FF]">US (Federal)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {PROTECTED_CHARACTERISTICS.map((pc) => (
                <tr key={pc.char} className="hover:bg-white/5 transition-colors">
                  <td className="py-2.5 pr-4 font-medium text-white">{pc.char}</td>
                  <td className={cn(
                    'py-2.5 px-3 text-center font-mono text-xs',
                    pc.uk.startsWith('✓') ? 'text-emerald-400' : 'text-amber-400'
                  )}>
                    {pc.uk}
                  </td>
                  <td className={cn(
                    'py-2.5 pl-3 text-center font-mono text-xs',
                    pc.us.startsWith('✓') ? 'text-emerald-400' : 'text-amber-400'
                  )}>
                    {pc.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-[11px] text-[var(--color-text-tertiary)] font-mono italic">
            ~ = evolving legal interpretation; subject to ongoing case law review. Career OS legal team monitors all jurisdictions.
          </p>
        </div>
      </div>
    </div>
  );
}
