'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Wrench, 
  Building2, 
  Shield, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ArrowRight,
  Clock,
  Coins,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PathwayOption {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  duration: string;
  financialModel: string;
  learningStructure: string;
  evidenceBuilt: string[];
  destinations: string[];
  considerations: string[];
  regulatoryNote?: string;
}

const ENGINEERING_PATHWAYS: PathwayOption[] = [
  {
    id: 'university',
    title: 'University Engineering Degree (BSc / BEng)',
    category: 'Academic Higher Education',
    icon: GraduationCap,
    badge: 'Academic Deep Dive',
    duration: '3–4 Years full-time',
    financialModel: 'Tuition fees + student maintenance loans',
    learningStructure: 'Campus lecture halls, theoretical mathematics, laboratory coursework, research dissertation, semester exams.',
    evidenceBuilt: [
      'Accredited BEng degree transcript from recognized institution',
      'Final year capstone engineering research dissertation',
      'Laboratory instrumentation and mathematical modeling logs',
      'Student chapter engineering society projects',
    ],
    destinations: [
      'Graduate Engineering Development Schemes',
      'Chartered Engineer (CEng) academic foundation',
      'Specialist R&D, Simulation & Systems Design Roles',
      'Postgraduate Masters (MSc / PhD) Research',
    ],
    considerations: [
      'Requires substantial theoretical mathematics & physics aptitude at entry',
      'Deferred full-time salary earning until after graduation',
      'Less immediate hands-on industrial workshop machine experience in early semesters',
    ],
    regulatoryNote: 'Provides standard academic benchmark toward Chartered Engineer (CEng) registration through accredited professional bodies.',
  },
  {
    id: 'apprenticeship',
    title: 'Degree / Higher Engineering Apprenticeship',
    category: 'Work-Based Education',
    icon: Wrench,
    badge: 'Earn & Learn Parity',
    duration: '4–5 Years integrated',
    financialModel: 'Salaried employee from Day 1; 100% tuition funded by employer/levy',
    learningStructure: '4 days per week in manufacturing facility / design engineering plant; 1 day per week university / college study block.',
    evidenceBuilt: [
      '4 years of verified industrial maintenance & manufacturing logs',
      'Accredited BEng Honours degree with zero student debt',
      'Workplace Health & Safety compliance credentials (IOSH / NEBOSH foundation)',
      'Employer-verified performance and competency audits in Career Passport',
    ],
    destinations: [
      'Plant Maintenance & Reliability Engineer',
      'Manufacturing Operations Team Lead',
      'Control Systems & Automation Specialist',
      'Incorporated Engineer (IEng) to Chartered Engineer (CEng) pathway',
    ],
    considerations: [
      'High competition for limited regional employer apprenticeship slots',
      'Balancing full-time workplace responsibilities with rigorous academic study',
      'Fixed holiday allowance rather than multi-month academic breaks',
    ],
    regulatoryNote: 'Meets occupational apprenticeship standard and provides concurrent industrial work experience qualifying for professional registration.',
  },
  {
    id: 'technical-college',
    title: 'Technical College / Associate Degree / HNC-HND',
    category: 'Vocational Technical',
    icon: Building2,
    badge: 'Applied Practical',
    duration: '2 Years full-time or part-time',
    financialModel: 'Lower community/further education tuition; eligible for local grants',
    learningStructure: 'Practical workshop engineering, CAD drafting suites, electrical installation labs, modular coursework assessments.',
    evidenceBuilt: [
      'Higher National Certificate (HNC) or Diploma (HND) in Engineering',
      'Certified CAD/CAM technical drawings and practical machining pieces',
      'Programmable Logic Controller (PLC) diagnostic certificates',
      'Industry-standard workshop safety certifications',
    ],
    destinations: [
      'Field Service & Diagnostic Technician',
      'Industrial Controls Technician',
      'Engineering CAD Designer / Draftsperson',
      'Top-up 3rd year entry into full BEng university degree',
    ],
    considerations: [
      'May require an additional top-up year for roles that mandate a full Bachelor degree',
      'Strongly hands-on; ideal for students who thrive in applied laboratory settings',
      'Flexible progression options into immediate employment or higher study',
    ],
    regulatoryNote: 'Provides foundation technical qualification for Engineering Technician (EngTech) or Incorporated Engineer (IEng) progression.',
  },
  {
    id: 'military',
    title: 'Military Technical Corps (Navy, Army, Air Force)',
    category: 'Service Technical Pathway',
    icon: Shield,
    badge: 'High-Accountability',
    duration: '3–6 Years initial service contract',
    financialModel: 'Fully salaried from basic training; food/accommodation subsidized; funded credentials',
    learningStructure: 'Rigorous basic training followed by specialist technical school (avionics, marine engineering, communications) and operational deployments.',
    evidenceBuilt: [
      'Military engineering technical trade certifications (NVQ Level 3/4 equivalent)',
      'Security clearance and high-stakes emergency diagnostics experience',
      'Documented leadership, team supervision, and mission safety protocols',
      'Global operational engineering maintenance logs in Career Passport',
    ],
    destinations: [
      'Aviation Maintenance & Avionics Supervisor',
      'Maritime Propulsion & Systems Engineer',
      'Defence Logistics & Communications Specialist',
      'High-demand civilian aerospace/maritime engineering transition',
    ],
    considerations: [
      'Requires strict medical, fitness, and disciplinary entry standards',
      'Contractual service commitment with mandatory deployment requirements',
      'Unique operational lifestyle that requires careful family/personal alignment',
    ],
    regulatoryNote: 'Military technical trades map to civilian civilian standards and are recognized by engineering institutions via Armed Forces transition agreements.',
  },
  {
    id: 'direct-employment',
    title: 'Direct Technical Employment & Traineeship',
    category: 'Direct Industry Entry',
    icon: Briefcase,
    badge: 'Immediate Earning',
    duration: 'Ongoing career development',
    financialModel: 'Entry-level full-time wage with employer-sponsored continuous learning',
    learningStructure: 'On-the-job training alongside senior engineers, internal company training modules, gradual responsibility increase.',
    evidenceBuilt: [
      'Verified equipment operation and maintenance records',
      'Internal company technical competency passports',
      'Day-to-day production floor problem-solving artifacts',
      'Supervised shift handover and machine calibration sign-offs',
    ],
    destinations: [
      'Senior Production / Assembly Technician',
      'Shift Maintenance Coordinator',
      'Quality Assurance Inspector',
      'Sponsored part-time higher technical education',
    ],
    considerations: [
      'Progression speed depends on company training culture and personal initiative',
      'Some high-tier engineering titles may eventually require external qualification conversion',
      'Immediate financial independence straight from high school',
    ],
    regulatoryNote: 'Practical skills must be complemented with structured qualifications if targeting regulated statutory sign-off authority.',
  },
];

export function InteractiveSchoolPathwayExplorer() {
  const [selectedId, setSelectedId] = useState<string>('apprenticeship');
  const activePathway = ENGINEERING_PATHWAYS.find((p) => p.id === selectedId) ?? ENGINEERING_PATHWAYS[1]!;

  return (
    <div className="w-full space-y-6" id="pathway-comparison">
      
      {/* Subject Family Context Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-xs">
        <div className="flex items-center gap-2">
          <span className="accent-blue-dot" />
          <span className="font-mono text-[var(--color-text-secondary)] uppercase tracking-wider">
            Illustrative Subject Focus:
          </span>
          <span className="font-bold text-white font-serif text-sm">
            Engineering &amp; Technical Careers
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
          Equal Parity Comparison Framework
        </span>
      </div>

      {/* Pathway Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {ENGINEERING_PATHWAYS.map((pathway) => {
          const isSelected = pathway.id === selectedId;
          const Icon = pathway.icon;
          return (
            <button
              key={pathway.id}
              type="button"
              onClick={() => setSelectedId(pathway.id)}
              className={cn(
                'p-3.5 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5',
                isSelected
                  ? 'bg-white/15 border-white/40 text-white shadow-xs'
                  : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
              )}
            >
              <div className="flex items-center justify-between">
                <Icon className={cn('w-4 h-4', isSelected ? 'text-[#2F8FFF]' : 'text-[var(--color-taupe-300)]')} />
                <span className={cn('text-[10px] font-mono px-1.5 py-0.5 rounded', isSelected ? 'bg-white/20 text-white font-bold' : 'bg-white/5 text-[var(--color-taupe-400)]')}>
                  {pathway.duration.split(' ')[0]}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono block text-[#6BB8FF] truncate font-semibold">
                  {pathway.badge}
                </span>
                <h4 className="text-xs font-bold text-white line-clamp-2 mt-0.5">
                  {pathway.title.split('(')[0]}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Pathway Breakdown Stage */}
      <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8">
        
        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-semibold">
                {activePathway.category}
              </span>
              <span className="text-[var(--color-border-strong)]">&bull;</span>
              <span className="text-xs font-mono text-[var(--color-taupe-300)]">
                {activePathway.duration}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
              {activePathway.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
              {activePathway.learningStructure}
            </p>
          </div>

          <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1.5 shrink-0 lg:min-w-[260px]">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-text-tertiary)] uppercase">
              <Coins className="w-3.5 h-3.5 text-[var(--color-gold-base)]" />
              <span>Financial Model</span>
            </div>
            <p className="text-xs font-semibold text-white leading-tight">
              {activePathway.financialModel}
            </p>
          </div>
        </div>

        {/* 3-Column Comparative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Evidence Built */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Evidence Built in Passport
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              {activePathway.evidenceBuilt.map((item, i) => (
                <li key={i} className="p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] rounded flex items-start gap-2">
                  <span className="text-[#2F8FFF] font-bold mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Destinations */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold-base)] font-semibold flex items-center gap-1.5">
              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-gold-base)]" />
              Potential Horizons
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              {activePathway.destinations.map((item, i) => (
                <li key={i} className="p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] rounded flex items-start gap-2">
                  <span className="text-[var(--color-gold-base)] font-bold mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade-offs & Considerations */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
              Important Considerations
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              {activePathway.considerations.map((item, i) => (
                <li key={i} className="p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] rounded flex items-start gap-2">
                  <span className="text-[var(--color-taupe-400)] font-bold mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Regulatory Statutory Note */}
        {activePathway.regulatoryNote && (
          <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex items-start gap-3 text-xs">
            <Shield className="w-4 h-4 text-[#2F8FFF] shrink-0 mt-0.5" />
            <p className="text-[var(--color-text-secondary)]">
              <strong className="text-white">Professional &amp; Statutory Standard:</strong> {activePathway.regulatoryNote}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
