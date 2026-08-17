'use client';

import React from 'react';
import { Shield, Wrench, Heart, Scale, ShieldAlert, Briefcase, CheckCircle2, FileCheck } from 'lucide-react';

export function CrossCareerEvidenceGrid() {
  const careers = [
    {
      role: 'Firefighter & Incident Commander',
      sector: 'Emergency Response & Public Safety',
      icon: ShieldAlert,
      evidenceItems: [
        'Level 4 Incident Command & Tactical Decision-Making Cert',
        'Emergency Medical Technician (EMT-B) Active Licence',
        'Breathing Apparatus & Hazardous Materials (HAZMAT) Log',
        'Post-Incident Review Safety Audit Documentation',
      ],
      trustNote: 'Operational command logs verified by Fire & Rescue Service training division.',
    },
    {
      role: 'Automotive & Plant Mechanic',
      sector: 'Skilled Trades & Mechanical Engineering',
      icon: Wrench,
      evidenceItems: [
        'NVQ Level 3 Light Vehicle Maintenance & Repair',
        'High-Voltage Hybrid & EV Safety Level 3 Accreditation',
        'CAN-Bus & Oscilloscope Electronic Diagnostic Logs',
        'Engine Overhaul & Hydraulic Cylinder Pressure Test Reports',
      ],
      trustNote: 'Trade qualifications verified via City & Guilds & IMI accredited registries.',
    },
    {
      role: 'Clinical Nurse Specialist',
      sector: 'Healthcare & Clinical Operations',
      icon: Heart,
      evidenceItems: [
        'Registered Nurse (NMC / State Board of Nursing Active Registration)',
        'Advanced Cardiac Life Support (ACLS) Certification',
        'Clinical Practice Mentorship & Student Preceptorship Records',
        'Ward Patient Throughput & Infection Control Audit Data',
      ],
      trustNote: 'Registration confirmed via statutory health professional register API.',
    },
    {
      role: 'Commercial Strategy Counsel',
      sector: 'Legal & Strategic Operations',
      icon: Scale,
      evidenceItems: [
        'Bar Admission / Law Society Practicing Certificate',
        'Cross-Border M&A Due Diligence Portfolio (Redacted)',
        'Enterprise IP & Commercial Contracting Frameworks',
        'Executive Negotiation & Regulatory Compliance Briefings',
      ],
      trustNote: 'Admission confirmed via official state bar roll; confidential work strictly redacted.',
    },
    {
      role: 'Military Logistics NCO',
      sector: 'Defense & Global Supply Chain',
      icon: Shield,
      evidenceItems: [
        'Regimental Supply Chain & Material Readiness Command Record',
        'Hazardous Cargo Transport & Airfield Logistics Certificate',
        'Personnel Leadership & Tactical Operational Evaluations',
        'Defense Equipment Maintenance & Inventory Audit Reports',
      ],
      trustNote: 'Military service training mapped to civilian logistics and leadership standards.',
    },
    {
      role: 'Operations & Plant Director',
      sector: 'Enterprise Manufacturing & Management',
      icon: Briefcase,
      evidenceItems: [
        'Six Sigma Black Belt Process Optimization Credential',
        '$12M Capital Expenditure & Plant Commissioning Review',
        'Multi-Shift Health, Safety & Environmental Audit Records',
        'Union Negotiation & Labor Agreement Leadership Evidence',
      ],
      trustNote: 'Commercial project milestones backed by verified executive sponsor sign-offs.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {careers.map((c, idx) => {
        const Icon = c.icon;
        return (
          <div
            key={idx}
            className="p-7 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 shadow-subtle flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-3">
                <div className="w-10 h-10 rounded bg-white/15 text-[var(--color-text-primary)] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[var(--color-text-primary)] leading-tight">
                    {c.role}
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--color-taupe-700)] block">
                    {c.sector}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
                  Typical Passport Evidence Artifacts:
                </span>
                <ul className="space-y-2 text-xs text-[var(--color-text-primary)] font-medium">
                  {c.evidenceItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--color-border-subtle)]">
              <p className="text-[11px] font-mono text-[var(--color-taupe-800)] bg-[var(--color-surface-warm)] p-2.5 rounded border border-[var(--color-border-subtle)]">
                <strong>Trust Basis:</strong> {c.trustNote}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
