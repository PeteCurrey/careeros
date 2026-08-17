'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

interface Background {
  id: string;
  title: string;
  category: string;
  mayTransfer: string[];
  supportingEvidence: string[];
  possibleBridge: string[];
  mandatoryToCheck: string[];
  humanReviewQuestions: string[];
}

interface Role {
  id: string;
  title: string;
  backgrounds: Background[];
}

const ROLES: Role[] = [
  {
    id: 'field-service',
    title: 'Field Service Engineer',
    backgrounds: [
      {
        id: 'industrial-maintenance',
        title: 'Industrial Maintenance Technician',
        category: 'Industrial / Manufacturing',
        mayTransfer: [
          'Multi-system electro-mechanical fault isolation in operational environments',
          'Preventive and corrective maintenance planning and scheduling',
          'Plant safety protocols, permit-to-work and hazardous systems handling',
          'Technical documentation and defect reporting',
        ],
        supportingEvidence: [
          'CMMS/maintenance-system records of work orders completed',
          'Safety certification for relevant equipment categories',
          'Evidence of independent fault diagnosis and resolution',
        ],
        possibleBridge: [
          'Customer-facing service delivery in a commercial context',
          'Specific OEM system certification for the target product family',
        ],
        mandatoryToCheck: [
          'Any site-specific legal or regulatory qualifications for the role environment',
          'Driving licence / vehicle requirements if field-based',
        ],
        humanReviewQuestions: [
          'What was the operational environment — continuous process, discrete manufacturing or facilities?',
          'Has this person delivered maintenance in a solo or customer-facing field context?',
        ],
      },
      {
        id: 'automotive-diagnostics',
        title: 'Automotive Diagnostic Technician',
        category: 'Skilled Trades / Automotive',
        mayTransfer: [
          'Advanced electronic fault diagnosis using scan tools and telemetry',
          'Complex multi-system reasoning across CAN-bus, hydraulic and electrical circuits',
          'Customer-facing service delivery and professional technical communication',
          'Structured defect recording and warranty documentation',
        ],
        supportingEvidence: [
          'Manufacturer-level diagnostic certifications (e.g. Level 3 ATA/manufacturer equivalent)',
          'Evidence of diagnosing faults across diverse vehicle/system complexity',
          'Customer satisfaction records or feedback',
        ],
        possibleBridge: [
          'Industrial/commercial equipment systems versus automotive platforms',
          'Site-based safety requirements for field deployment',
        ],
        mandatoryToCheck: [
          'Relevant industry-specific qualifications for the target equipment category',
          'Any field-access safety requirements (e.g. working at height, confined space)',
        ],
        humanReviewQuestions: [
          'How complex and diverse are the systems this person has diagnosed?',
          'What experience does this person have working in isolation without workshop support?',
        ],
      },
      {
        id: 'military-technical',
        title: 'Military Technical Engineer',
        category: 'Defence / Armed Forces Transition',
        mayTransfer: [
          'Systematic fault isolation on complex multi-system platforms under operational pressure',
          'Structured technical documentation, maintenance records and serviceability reporting',
          'Disciplined safety and quality processes in high-stakes environments',
          'Independent problem-solving and self-sufficiency in remote or austere environments',
        ],
        supportingEvidence: [
          'Military trade qualifications (with civilian equivalent mapping where available)',
          'Documented maintenance records or technical role portfolios',
          'Supervisor reference or service record where appropriate and permitted',
        ],
        possibleBridge: [
          'Translation of military qualification structure to civilian certification framework',
          'Commercial customer-facing service environment versus military unit context',
        ],
        mandatoryToCheck: [
          'Civilian equivalence of military qualifications for this specific role',
          'Any regulated or licensed requirements that military qualifications do not automatically satisfy',
        ],
        humanReviewQuestions: [
          'What platform families was this person trained and experienced on?',
          'Does this candidate have experience interfacing with civilian commercial processes and customers?',
        ],
      },
    ],
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    backgrounds: [
      {
        id: 'military-logistics',
        title: 'Military Logistics Warrant Officer',
        category: 'Defence / Armed Forces Transition',
        mayTransfer: [
          'Multi-million-pound asset and supply chain coordination across complex logistics networks',
          'Leadership of 30–80 personnel including planning, performance and welfare',
          'Contingency scenario planning and execution under resource and time pressure',
          'Uncompromising accountability culture and operational audit readiness',
        ],
        supportingEvidence: [
          'Service record demonstrating leadership scope and operational responsibility',
          'Documentation of supply chain or logistics outcomes',
          'Any civilian operations or logistics qualifications (e.g. CIPS, Prince2)',
        ],
        possibleBridge: [
          'Commercial ERP and operational finance systems (SAP, Oracle, etc.)',
          'P&L accountability and commercial contract management in a civilian context',
        ],
        mandatoryToCheck: [
          'Right to work in civilian jurisdiction',
          'Any industry-specific regulatory requirements for the operations function',
        ],
        humanReviewQuestions: [
          'What was the scale of logistics/assets directly under this person\'s accountability?',
          'Has this person navigated commercial procurement processes or third-party supplier relationships?',
        ],
      },
      {
        id: 'shift-supervisor',
        title: 'Shift / Production Supervisor',
        category: 'Manufacturing / Operations',
        mayTransfer: [
          'Direct operational team leadership in time-pressured production environments',
          'Shift handover, capacity planning and headcount allocation',
          'Quality, safety and compliance oversight during live operations',
          'Escalation management and problem resolution without senior support',
        ],
        supportingEvidence: [
          'Team size and output metrics under direct supervision',
          'Safety record and incident-management experience',
          'Continuous improvement or lean manufacturing participation',
        ],
        possibleBridge: [
          'Full cross-functional P&L and budget accountability (vs. cost-centre control)',
          'Strategic supplier management and commercial negotiation',
        ],
        mandatoryToCheck: [
          'Industry-specific qualifications for the operations function (e.g. food safety, chemical handling)',
          'Management seniority level match for the specific role scope',
        ],
        humanReviewQuestions: [
          'What was the breadth of operational functions under this person\'s direct accountability?',
          'Has this candidate managed budgets, contractors, or multi-site functions independently?',
        ],
      },
      {
        id: 'project-manager',
        title: 'Infrastructure Project Manager',
        category: 'Engineering / Construction / Infrastructure',
        mayTransfer: [
          'Complex multi-workstream delivery coordination with competing stakeholder priorities',
          'Resource, schedule and budget management across long-duration programmes',
          'Contractor, supplier and subcontractor relationship management',
          'Risk identification, mitigation and change-control discipline',
        ],
        supportingEvidence: [
          'Projects delivered: scope, budget, timeline and stakeholder outcome',
          'Project management certification (PMP, PRINCE2, APM or equivalent)',
          'Examples of managing operational risk and escalation',
        ],
        possibleBridge: [
          'Ongoing steady-state operations management versus fixed-lifecycle project delivery',
          'People management of employed teams versus contractor workforces',
        ],
        mandatoryToCheck: [
          'Whether the role requires operational (day-to-day) versus programme leadership experience',
          'Industry-specific operational knowledge requirements',
        ],
        humanReviewQuestions: [
          'Does this person have experience managing operational functions beyond project delivery?',
          'Is the expected operational environment closer to BAU or ongoing large programme delivery?',
        ],
      },
    ],
  },
  {
    id: 'healthcare-ops',
    title: 'Healthcare Operations Lead',
    backgrounds: [
      {
        id: 'senior-nurse',
        title: 'Senior Clinical Nurse / Ward Manager',
        category: 'Healthcare / Clinical Practice',
        mayTransfer: [
          'Multi-disciplinary care pathway coordination and patient flow management',
          'Shift-level staffing, rota planning and escalation decision-making',
          'Direct accountability for safety, risk and clinical governance',
          'Interface between clinical, administrative, pharmacy and facilities teams',
        ],
        supportingEvidence: [
          'Ward management or charge-nurse responsibility with measurable outcomes',
          'Quality and safety improvement projects with documented results',
          'Leadership of multidisciplinary teams including less experienced staff',
        ],
        possibleBridge: [
          'Finance and budget accountability beyond clinical cost-centre awareness',
          'Commercial supplier management and procurement processes',
        ],
        mandatoryToCheck: [
          'Professional registration requirements for this specific operations role',
          'Any clinical governance requirements that mandate active registration',
        ],
        humanReviewQuestions: [
          'Does this role require a clinically registered practitioner or a commercially experienced operations leader?',
          'What is the budget accountability scope — directorate, department or whole-site?',
        ],
      },
      {
        id: 'paramedic',
        title: 'Paramedic / Emergency Medical Coordinator',
        category: 'Emergency Services / Pre-Hospital Care',
        mayTransfer: [
          'High-acuity triage, rapid patient assessment and dynamic resource allocation',
          'Multi-agency coordination under time-critical operational pressure',
          'Clinical quality, reporting and governance in regulated environments',
          'Frontline resilience, adaptability and independent decision-making',
        ],
        supportingEvidence: [
          'HCPC-registered Paramedic with evidence of operational seniority',
          'Any operational management, clinical audit or service improvement experience',
          'Leadership of clinical teams or specialty vehicles',
        ],
        possibleBridge: [
          'Large-scale organisational operations management beyond emergency response',
          'Planned elective and scheduled service delivery (versus emergency demand)',
        ],
        mandatoryToCheck: [
          'Whether HCPC or other clinical registration is required for this specific operations role',
          'Information governance and data processing requirements in the healthcare setting',
        ],
        humanReviewQuestions: [
          'Is the role primarily managing emergency/unplanned demand or planned elective pathways?',
          'Does this candidate have experience operating across multiple care settings?',
        ],
      },
    ],
  },
  {
    id: 'technical-trainer',
    title: 'Technical Trainer',
    backgrounds: [
      {
        id: 'field-engineer',
        title: 'Experienced Field Service Engineer',
        category: 'Technical / Engineering',
        mayTransfer: [
          'Deep authentic expertise on the equipment, systems or processes to be taught',
          'Practical understanding of how faults actually present in live operational conditions',
          'Credibility with technical trainee audiences through demonstrated operational background',
          'Problem-solving methodology that can be explained and replicated',
        ],
        supportingEvidence: [
          'Evidence of mentoring, coaching or formal knowledge transfer with junior technicians',
          'Any existing training delivery experience (internal, manufacturer, on-boarding)',
          'Technical certification at appropriate level for the content to be taught',
        ],
        possibleBridge: [
          'Formal instructional design and structured learning delivery methods',
          'Adult learning principles, assessment design and training evaluation frameworks',
        ],
        mandatoryToCheck: [
          'Any regulated or awarding-body requirements for the qualification being delivered',
          'Assessor or verifier qualifications if the training leads to formal accreditation',
        ],
        humanReviewQuestions: [
          'Has this person delivered structured training to groups, or only informal peer coaching?',
          'Is the training role primarily delivery, design, or assessment of formal qualifications?',
        ],
      },
      {
        id: 'armed-forces-instructor',
        title: 'Armed Forces Technical Instructor',
        category: 'Defence / Education & Training',
        mayTransfer: [
          'Structured technical instruction at accredited level with formal assessment',
          'Lesson planning, scheme-of-work design and progressive curriculum delivery',
          'Managing diverse learner cohorts including those struggling with technical content',
          'Assessment, feedback and progress-tracking under regulated frameworks',
        ],
        supportingEvidence: [
          'Military instructor qualification (e.g. Skill at Arms, DCTS, subject-specific trade instructor)',
          'Evidence of training delivery outcomes — pass rates, cohort progression, assessment records',
          'Any civilian teaching or training qualification (PTLLS, AET or equivalent)',
        ],
        possibleBridge: [
          'Civilian awarding body and Ofsted-regulated qualification frameworks',
          'Commercial learning management systems and civilian HR/L&D structures',
        ],
        mandatoryToCheck: [
          'Whether civilian teaching qualifications are required for the specific training role',
          'Safeguarding certification (DBS/Disclosure) if training involves young people or vulnerable adults',
        ],
        humanReviewQuestions: [
          'At what qualification level was the training delivered — foundation, intermediate, advanced?',
          'Does this candidate have experience training civilian rather than military-specific technical content?',
        ],
      },
    ],
  },
];

export function AdjacentTalentInteractive() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('field-service');
  const [selectedBgId, setSelectedBgId] = useState<string>('industrial-maintenance');

  const role = ROLES.find((r) => r.id === selectedRoleId) ?? ROLES[0]!;
  const background = role.backgrounds.find((b) => b.id === selectedBgId) ?? role.backgrounds[0]!;

  const handleRoleChange = (roleId: string) => {
    const newRole = ROLES.find((r) => r.id === roleId);
    setSelectedRoleId(roleId);
    setSelectedBgId(newRole?.backgrounds[0]?.id ?? '');
  };

  return (
    <div className="w-full space-y-6" id="adjacent-talent-interactive">
      {/* Role Selector */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-semibold">
          1. Select target role
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ROLES.map((r) => (
            <button
              key={r.id}
              onClick={() => handleRoleChange(r.id)}
              className={`p-3 rounded text-xs font-semibold text-left transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
                selectedRoleId === r.id
                  ? 'bg-white text-black border-transparent'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              }`}
              aria-pressed={selectedRoleId === r.id}
            >
              {r.title}
            </button>
          ))}
        </div>
      </div>

      {/* Background Selector */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-semibold">
          2. Explore a candidate background
        </span>
        <div className="flex flex-wrap gap-2">
          {role.backgrounds.map((bg) => (
            <button
              key={bg.id}
              onClick={() => setSelectedBgId(bg.id)}
              className={`px-4 py-2 rounded text-xs font-mono font-semibold transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
                selectedBgId === bg.id
                  ? 'bg-[var(--accent-blue-subtle)] border-[var(--accent-blue)] text-white'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              }`}
              aria-pressed={selectedBgId === bg.id}
            >
              {bg.title}
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Panel */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
              Background: {background.category}
            </span>
            <h4 className="text-lg font-serif text-white font-normal">
              {background.title} <span className="text-[var(--color-text-secondary)] text-base">→ {role.title}</span>
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] shrink-0">
            No match scores &bull; Illustrative
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* What May Transfer */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-emerald-500/20 space-y-3">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] uppercase font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> What May Transfer
            </div>
            <ul className="space-y-1.5 text-xs text-white">
              {background.mayTransfer.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0">&bull;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Possible Bridge */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--accent-blue-border)] space-y-3">
            <div className="flex items-center gap-1.5 text-[var(--accent-blue)] font-mono text-[11px] uppercase font-bold">
              <AlertCircle className="w-3.5 h-3.5" /> Possible Bridge Needed
            </div>
            <ul className="space-y-1.5 text-xs text-white">
              {background.possibleBridge.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[var(--accent-blue)] shrink-0">&bull;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting Evidence */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px] uppercase font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Supporting Evidence to Look For
            </div>
            <ul className="space-y-1.5 text-xs text-white">
              {background.supportingEvidence.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-400 shrink-0">&bull;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory & Human Review */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
            <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[11px] uppercase font-bold">
              <HelpCircle className="w-3.5 h-3.5" /> Questions for Human Review
            </div>
            <ul className="space-y-1.5 text-xs text-white">
              {background.humanReviewQuestions.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-purple-400 shrink-0">&bull;</span> {item}
                </li>
              ))}
            </ul>
            {background.mandatoryToCheck.length > 0 && (
              <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-red-300 font-bold">Mandatory to Check Separately</span>
                {background.mandatoryToCheck.map((item, i) => (
                  <p key={i} className="text-xs text-red-200 flex items-start gap-1.5">
                    <span className="shrink-0">&bull;</span> {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
          Illustrative adjacent talent analysis &bull; Career Graph widens the talent field without pretending every adjacent background is automatically qualified &bull; Human review is always required
        </p>
      </div>
    </div>
  );
}
