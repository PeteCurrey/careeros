'use client';

import React, { useState } from 'react';
import { Award, ShieldCheck, FolderGit2, Wrench, Briefcase, BookOpen, FileCode, Trophy, CheckSquare, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  count: string;
  icon: React.ElementType;
  description: string;
  sampleItems: { name: string; verification: string; verificationClass: string; detail: string }[];
  storageType: string;
}

export function PassportRecordExplorer() {
  const categories: CategoryItem[] = [
    {
      id: 'qualifications',
      title: 'Qualifications',
      count: '3 Credentials',
      icon: Award,
      description: 'Formal degrees, diplomas, vocational credentials, trade certifications, and apprenticeship completions.',
      sampleItems: [
        { name: 'BSc Fire Safety Engineering (Honors)', verification: 'Issuer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'University Registry confirmation (#FSE-2021)' },
        { name: 'NVQ Level 3 Electrical Installation', verification: 'Issuer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'City & Guilds verification token linked' },
      ],
      storageType: 'Structured Credential Node',
    },
    {
      id: 'licenses',
      title: 'Licenses & Certifications',
      count: '4 Accreditations',
      icon: ShieldCheck,
      description: 'Professional operating licenses, safety passports, and mandatory industry regulatory accreditations.',
      sampleItems: [
        { name: 'IFE Registered Fire Risk Assessor (Tier 3)', verification: 'Issuer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'Institution of Fire Engineers Active Roll' },
        { name: 'OSHA 30-Hour Construction Safety', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: 'Scanned credential card in Vault' },
      ],
      storageType: 'Time-Bounded License with Expiry Watch',
    },
    {
      id: 'projects',
      title: 'Projects Delivered',
      count: '8 Key Milestones',
      icon: FolderGit2,
      description: 'Major technical initiatives you helped deliver—including roles, technical responsibilities, and quantified outcomes.',
      sampleItems: [
        { name: 'Hospital Wing Smoke Extraction Overhaul', verification: 'Employer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'Apex Engineering project director sign-off' },
        { name: 'High-Rise Fire Alarm System Integration', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: 'Commissioning schematic & zone chart' },
      ],
      storageType: 'Project Record with Deliverables',
    },
    {
      id: 'skills',
      title: 'Skills Evidence',
      count: '16 Competencies',
      icon: Wrench,
      description: 'Direct proof attached to claimed technical abilities—demonstrating practical application rather than self-rating.',
      sampleItems: [
        { name: 'Hydraulic Flow Rate Calculation', verification: 'Platform Assessed', verificationClass: 'bg-purple-100 text-purple-900 border-purple-300', detail: 'Calculations audit verified via simulation module' },
        { name: 'Fire Strategy Plan Drafting (CAD)', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: '2 sample building fire strategy drawings' },
      ],
      storageType: 'Competency-Linked Evidence',
    },
    {
      id: 'experience',
      title: 'Employment Experience',
      count: '6 Years Track Record',
      icon: Briefcase,
      description: 'Historical roles and operational duties, with employer confirmation where verified partnerships exist.',
      sampleItems: [
        { name: 'Lead Fire Safety Consultant (2022–Present)', verification: 'Self-Declared', verificationClass: 'bg-amber-100 text-amber-900 border-amber-300', detail: 'Current active role at Metro Safety Group' },
        { name: 'Senior Maintenance Technician (2019–2022)', verification: 'Employer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'Confirmed by Apex Engineering HR record' },
      ],
      storageType: 'Employment Chronology Node',
    },
    {
      id: 'training',
      title: 'Training & CPD',
      count: '120 CPD Hours',
      icon: BookOpen,
      description: 'Continuing professional development courses, technical manufacturer workshops, and regulatory refresher modules.',
      sampleItems: [
        { name: 'Building Safety Act 2022 Compliance Masterclass', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: '16 CPD Hours Certificate of Attendance' },
        { name: 'Advanced Smoke Control Design Workshop', verification: 'Issuer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'CIBSE Accredited Course Provider' },
      ],
      storageType: 'CPD Log & Course Certificates',
    },
    {
      id: 'samples',
      title: 'Work Samples & Reports',
      count: '5 Artifacts',
      icon: FileCode,
      description: 'Redacted reports, design documents, research papers, and technical specifications created by you.',
      sampleItems: [
        { name: 'Industrial Warehouse Fire Risk Assessment (Redacted)', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: '42-page technical risk assessment report' },
        { name: 'Emergency Evacuation Phasing Plan', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: 'Vector evacuation layout for commercial mall' },
      ],
      storageType: 'Encrypted Document Vault',
    },
    {
      id: 'achievements',
      title: 'Achievements & Awards',
      count: '2 Industry Recognitions',
      icon: Trophy,
      description: 'Industry awards, client commendations, academic honors, and notable safety performance records.',
      sampleItems: [
        { name: 'Young Engineer of the Year Finalist (2023)', verification: 'Evidence Attached', verificationClass: 'bg-blue-100 text-blue-900 border-blue-300', detail: 'National Safety Council Certificate' },
        { name: 'Zero-Harm Site Leadership Commendation', verification: 'Employer Verified', verificationClass: 'bg-emerald-100 text-emerald-900 border-emerald-300', detail: 'Client site audit commendation letter' },
      ],
      storageType: 'Recognition & Endorsement Log',
    },
    {
      id: 'assessments',
      title: 'Technical Assessments',
      count: '2 Benchmarks',
      icon: CheckSquare,
      description: 'Independent diagnostic evaluations and methodology benchmarks where supported.',
      sampleItems: [
        { name: 'UK Building Regs Part B Diagnostic', verification: 'Platform Assessed', verificationClass: 'bg-purple-100 text-purple-900 border-purple-300', detail: '92% competence score on regulatory standards' },
      ],
      storageType: 'Structured Assessment Result',
    },
  ];

  const [selectedId, setSelectedId] = useState('qualifications');
  const activeCat = (categories.find((c) => c.id === selectedId) || categories[0])!;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 9 Categories List */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = cat.id === selectedId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`p-4 rounded-[var(--radius-card)] border text-left transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-subtle'
                    : 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-white/20'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-600)]'}`} />
                    <span className="font-bold text-xs">{cat.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono block ${isSelected ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-700)]'}`}>
                    {cat.count}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? 'translate-x-0.5 text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-400)]'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Category Inspector Panel */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5 shadow-subtle">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <div className="flex items-center gap-2">
                <activeCat.icon className="w-5 h-5 text-[var(--color-text-primary)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  {activeCat.title}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-warm)] text-[var(--color-taupe-700)] border border-[var(--color-border-default)]">
                {activeCat.count}
              </span>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeCat.description}
            </p>

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
                Sample Passport Vault Entries:
              </span>
              {activeCat.sampleItems.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="font-bold text-[var(--color-text-primary)] leading-tight">{item.name}</h5>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${item.verificationClass}`}>
                      {item.verification}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] font-mono">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--color-taupe-700)]">
              <span>Vault Type: {activeCat.storageType}</span>
              <span className="text-emerald-700 font-semibold">User Controlled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
