'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface Route {
  name: string;
  badge: string;
  duration: string;
  earningWhileStudying: boolean;
  debtRisk: 'Low' | 'Medium' | 'High';
  qualificationLevel: string;
  typicalOutcome: string;
  requires: string[];
  note?: string;
}

interface Destination {
  id: string;
  label: string;
  routes: Route[];
}

const DESTINATIONS: Destination[] = [
  {
    id: 'electrical',
    label: 'Electrical Career Family',
    routes: [
      {
        name: 'Electrical Apprenticeship',
        badge: 'EARN WHILE LEARNING',
        duration: '3–4 years',
        earningWhileStudying: true,
        debtRisk: 'Low',
        qualificationLevel: 'Level 3 / Electrician qualification',
        typicalOutcome: 'Qualified electrician — employed or self-employed',
        requires: ['Application to employer', 'High school diploma or GED', 'Physical capability'],
        note: 'Direct entry to licensed trade. Strong earning potential.',
      },
      {
        name: 'Electrical Engineering (University)',
        badge: 'DEGREE ROUTE',
        duration: '3–4 years',
        earningWhileStudying: false,
        debtRisk: 'High',
        qualificationLevel: 'BEng / MEng',
        typicalOutcome: 'Electrical design engineer, power systems, renewables',
        requires: ['High school diploma incl. Algebra II & Physics', 'College application'],
        note: 'Leads to engineering rather than trade roles. Different career family.',
      },
      {
        name: 'Technical College (Electrical)',
        badge: 'VOCATIONAL ROUTE',
        duration: '1–2 years',
        earningWhileStudying: false,
        debtRisk: 'Low',
        qualificationLevel: 'City & Guilds / BTEC / NVQ',
        typicalOutcome: 'Entry into electrical trade, further apprenticeship',
        requires: ['College application', 'Math & English'],
        note: 'Can be a stepping stone to apprenticeship or employment.',
      },
      {
        name: 'Military Technical Route',
        badge: 'MILITARY SERVICE',
        duration: '4+ years service',
        earningWhileStudying: true,
        debtRisk: 'Low',
        qualificationLevel: 'Military trade qualifications + transferable civilian certifications',
        typicalOutcome: 'Qualified military technician, strong transition to civilian roles',
        requires: ['Enlistment / officer selection', 'Medical & fitness assessment'],
        note: 'Provides structured career, training and broader service experience.',
      },
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare Career Family',
    routes: [
      {
        name: 'Nursing (University Degree)',
        badge: 'DEGREE ROUTE',
        duration: '3 years',
        earningWhileStudying: false,
        debtRisk: 'High',
        qualificationLevel: 'BSc Nursing (NMC registered)',
        typicalOutcome: 'Registered Nurse — NHS, private, international',
        requires: ['High school diploma or equivalent', 'College application', 'Interview'],
        note: 'Regulated profession requiring NMC registration.',
      },
      {
        name: 'Nursing Degree Apprenticeship',
        badge: 'EARN WHILE LEARNING',
        duration: '3–4 years',
        earningWhileStudying: true,
        debtRisk: 'Low',
        qualificationLevel: 'BSc Nursing (NMC registered)',
        typicalOutcome: 'Registered Nurse — typically with NHS employer sponsor',
        requires: ['Employer sponsorship (hospital system)', 'Degree-entry standard'],
        note: 'Same qualification as university route, earned while employed.',
      },
      {
        name: 'Healthcare Support Worker',
        badge: 'DIRECT EMPLOYMENT',
        duration: 'Immediate entry',
        earningWhileStudying: true,
        debtRisk: 'Low',
        qualificationLevel: 'On-the-job training + NVQ/apprenticeship progression',
        typicalOutcome: 'Healthcare assistant — pathway to further qualifications',
        requires: ['Application to a hospital or care provider', 'Background check'],
        note: 'Entry-level employment with strong internal progression routes.',
      },
      {
        name: 'Paramedicine (University)',
        badge: 'DEGREE ROUTE',
        duration: '3 years',
        earningWhileStudying: false,
        debtRisk: 'High',
        qualificationLevel: 'BSc Paramedic Science (HCPC registered)',
        typicalOutcome: 'Paramedic — ambulance service or critical care',
        requires: ['High school diploma or equivalent', 'College application', 'Fitness & health standards'],
        note: 'Regulated profession. Practice experience required during degree.',
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology Career Family',
    routes: [
      {
        name: 'Software Engineering (University)',
        badge: 'DEGREE ROUTE',
        duration: '3–4 years',
        earningWhileStudying: false,
        debtRisk: 'High',
        qualificationLevel: 'BSc / MEng Computer Science',
        typicalOutcome: 'Software engineer, product engineer, technical roles',
        requires: ['High school diploma including Algebra II', 'College application'],
      },
      {
        name: 'Software Developer Degree Apprenticeship',
        badge: 'EARN WHILE LEARNING',
        duration: '3–4 years',
        earningWhileStudying: true,
        debtRisk: 'Low',
        qualificationLevel: 'BSc Computer Science (employer-sponsored)',
        typicalOutcome: 'Software developer at sponsoring employer',
        requires: ['Employer application', 'High school Algebra II typically required'],
        note: 'Highly competitive — strong employer demand.',
      },
      {
        name: 'Bootcamp / Self-directed',
        badge: 'ALTERNATIVE ROUTE',
        duration: '3–12 months intensive',
        earningWhileStudying: false,
        debtRisk: 'Medium',
        qualificationLevel: 'Portfolio + certificates (no regulated degree)',
        typicalOutcome: 'Junior developer — quality varies significantly',
        requires: ['Self-motivation', 'Portfolio evidence', 'Bootcamp fees or self-study'],
        note: 'Outcomes vary widely. Portfolio quality matters more than course.',
      },
      {
        name: 'IT Technician Apprenticeship',
        badge: 'EARN WHILE LEARNING',
        duration: '12–18 months',
        earningWhileStudying: true,
        debtRisk: 'Low',
        qualificationLevel: 'Level 3 IT qualification',
        typicalOutcome: 'IT support, systems technician — pathway to further roles',
        requires: ['Employer application', 'High school diploma or GED'],
        note: 'Strong entry point into technology — progression to higher-level roles.',
      },
    ],
  },
];

const DEBT_COLOUR: Record<Route['debtRisk'], string> = {
  Low: 'text-emerald-400',
  Medium: 'text-amber-400',
  High: 'text-red-400',
};

export function StudentPathwayComparison() {
  const [selectedId, setSelectedId] = useState<string>('electrical');

  const selected = DESTINATIONS.find((d) => d.id === selectedId) ?? DESTINATIONS[0]!;

  return (
    <div className="w-full space-y-6" id="student-pathway-comparison">
      {/* Destination Selector */}
      <div className="flex flex-wrap gap-2">
        {DESTINATIONS.map((dest) => (
          <button
            key={dest.id}
            onClick={() => setSelectedId(dest.id)}
            className={`px-4 py-2 rounded text-xs font-mono font-semibold uppercase tracking-widest transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              selectedId === dest.id
                ? 'bg-[var(--color-text-primary)] text-[var(--color-surface-base)] border-transparent'
                : 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
            }`}
            aria-pressed={selectedId === dest.id}
          >
            {dest.label}
          </button>
        ))}
      </div>

      {/* Route Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selected.routes.map((route) => (
          <div
            key={route.name}
            className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
                  {route.badge}
                </span>
                <h4 className="font-semibold text-sm text-[var(--color-text-primary)] leading-snug">
                  {route.name}
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[var(--color-taupe-300)] shrink-0">
                {route.duration}
              </span>
            </div>

            <dl className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-[var(--color-border-subtle)]">
                <dt className="text-[var(--color-text-tertiary)]">Earn while studying</dt>
                <dd className={route.earningWhileStudying ? 'text-emerald-400 font-semibold flex items-center gap-1' : 'text-[var(--color-text-tertiary)]'}>
                  {route.earningWhileStudying ? (
                    <><CheckCircle2 className="w-3.5 h-3.5" /> Yes</>
                  ) : 'No'}
                </dd>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[var(--color-border-subtle)]">
                <dt className="text-[var(--color-text-tertiary)]">Debt risk</dt>
                <dd className={`font-semibold ${DEBT_COLOUR[route.debtRisk]}`}>{route.debtRisk}</dd>
              </div>
              <div className="py-1.5 border-b border-[var(--color-border-subtle)]">
                <dt className="text-[var(--color-text-tertiary)] mb-1">Qualification</dt>
                <dd className="text-[var(--color-text-secondary)]">{route.qualificationLevel}</dd>
              </div>
              <div className="py-1.5 border-b border-[var(--color-border-subtle)]">
                <dt className="text-[var(--color-text-tertiary)] mb-1">Typical outcome</dt>
                <dd className="text-[var(--color-text-secondary)]">{route.typicalOutcome}</dd>
              </div>
              <div className="py-1.5">
                <dt className="text-[var(--color-text-tertiary)] mb-1">Typically requires</dt>
                <dd>
                  <ul className="space-y-0.5">
                    {route.requires.map((r) => (
                      <li key={r} className="text-[var(--color-text-secondary)] flex items-start gap-1.5">
                        <span className="text-[var(--color-taupe-300)] shrink-0 mt-0.5">—</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            {route.note && (
              <div className="flex items-start gap-2 p-3 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)]">
                <AlertCircle className="w-3.5 h-3.5 text-[var(--color-taupe-300)] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                  {route.note}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono">
        Routes shown are illustrative. Requirements vary by institution, employer, country and year. Verify with official sources before applying.
      </p>
    </div>
  );
}
