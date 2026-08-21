'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, ShieldCheck, Lock, AlertCircle, Info } from 'lucide-react';

type ViewerId = 'student' | 'mentor' | 'counselor' | 'admin' | 'guardian' | 'employer' | 'public';

interface FieldAccess {
  fieldName: string;
  category: string;
  sampleValue: string;
  status: 'VISIBLE' | 'NOT_VISIBLE' | 'PURPOSE_LIMITED' | 'REQUIRES_PERMISSION';
  explanation: string;
}

interface ViewerConfig {
  id: ViewerId;
  label: string;
  roleDescription: string;
  fields: FieldAccess[];
}

const VIEWERS: ViewerConfig[] = [
  {
    id: 'student',
    label: 'Student (Account Owner)',
    roleDescription: 'Full personal control over your own Career Twin, Mentor conversations, Passport artifacts, and privacy preferences.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'Alex Vance (Year 12 / Grade 11)', status: 'VISIBLE', explanation: 'Directly visible to you in your account profile.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: '“I want to drop Chemistry but my parents disagree.”', status: 'VISIBLE', explanation: 'Complete conversation history is accessible exclusively to you.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'Aerospace Engineering, Industrial Robotics, Commercial Law', status: 'VISIBLE', explanation: 'Your full exploratory search and interest history.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'AP Physics (Score 5), Algebra II (Grade A)', status: 'VISIBLE', explanation: 'Your self-custodied verified credential ledger.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'Autonomous Rover CAD & Python Control Script', status: 'VISIBLE', explanation: 'Uploaded coursework artifacts and project briefs.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'Booked 1:1 session for apprenticeship application review', status: 'VISIBLE', explanation: 'Your scheduled school career advisory appointments.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'Targeting $85k+ within 3 years; seeking high autonomy', status: 'VISIBLE', explanation: 'Your personal forward-looking career trajectory goals.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'Active application to Rolls-Royce Degree Apprenticeship', status: 'VISIBLE', explanation: 'Dossiers you have explicitly approved for employer disclosure.' },
    ],
  },
  {
    id: 'mentor',
    label: 'AI Career Mentor',
    roleDescription: 'Contextual AI reasoning space with strict purpose limitation — never shared with third parties or used for commercial profiling.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'Alex (First name & age tier only)', status: 'PURPOSE_LIMITED', explanation: 'Only pseudonymized first name and age tier passed for age-appropriate tone.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: '“I want to drop Chemistry but my parents disagree.”', status: 'VISIBLE', explanation: 'Multi-turn conversation history is maintained to provide coherent guidance.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'Aerospace Engineering, Industrial Robotics, Commercial Law', status: 'VISIBLE', explanation: 'Used to provide relevant lateral comparisons and subject advice.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'AP Physics (Score 5), Algebra II (Grade A)', status: 'VISIBLE', explanation: 'Used to evaluate eligibility for specific apprenticeships or degree courses.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'Autonomous Rover CAD & Python Control Script', status: 'PURPOSE_LIMITED', explanation: 'Summarized project skills referenced only when drafting CVs or personal statements.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'HIDDEN from AI reasoning context', status: 'NOT_VISIBLE', explanation: 'Internal institutional booking records are excluded from AI prompts.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'Targeting $85k+ within 3 years; seeking high autonomy', status: 'VISIBLE', explanation: 'Used to align recommendations with your personal lifestyle and earnings preferences.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'HIDDEN from AI reasoning context', status: 'NOT_VISIBLE', explanation: 'Live employer job application tracking is kept separate from general mentoring.' },
    ],
  },
  {
    id: 'counselor',
    label: 'School Career Counselor',
    roleDescription: 'Authorized guidance professional supporting student pathways under institutional school data sharing arrangements.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'Alex Vance (Student ID: 48829)', status: 'VISIBLE', explanation: 'Accessible for 1:1 in-school career appointments and progress tracking.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: 'HIDDEN — Confidential student reflection space', status: 'NOT_VISIBLE', explanation: 'Counselors cannot browse private AI Mentor chat transcripts.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'Aggregated pathway interest: STEM &amp; Engineering', status: 'PURPOSE_LIMITED', explanation: 'High-level interest categories visible to support advisory session planning.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'AP Physics (Score 5), Algebra II (Grade A)', status: 'VISIBLE', explanation: 'Academic profile visible to verify prerequisite course entry requirements.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'Autonomous Rover CAD & Python Control Script', status: 'VISIBLE', explanation: 'Accessible to assist student in compiling personal statements and portfolios.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'Booked 1:1 session for apprenticeship application review', status: 'VISIBLE', explanation: 'Directly managed by the school career guidance department.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'HIDDEN — Private personal context', status: 'NOT_VISIBLE', explanation: 'Private earnings aspirations are excluded from counselor views.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'Shared upon student request', status: 'REQUIRES_PERMISSION', explanation: 'Student can explicitly share their application dossier for counselor feedback.' },
    ],
  },
  {
    id: 'admin',
    label: 'School Administrator / IT Lead',
    roleDescription: 'Institutional administrator managing school workspace tenancy, safeguarding escalations, and cohort reporting.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'Alex Vance (Year 12 / Grade 11 &bull; Active)', status: 'VISIBLE', explanation: 'Used for account provisioning, SSO syncing, and enrollment roster management.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: 'HIDDEN — Sealed unless formal safeguarding escalation triggered', status: 'NOT_VISIBLE', explanation: 'Administrators have zero routine browsing access to student chat logs.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'Anonymized cohort metric: Engineering (+14%)', status: 'PURPOSE_LIMITED', explanation: 'Aggregated cohort trends only for Gatsby Benchmark / district reporting.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'School-issued credentials only', status: 'PURPOSE_LIMITED', explanation: 'School can verify credentials it issued; external certificates are private.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'HIDDEN from institutional admin dashboard', status: 'NOT_VISIBLE', explanation: 'Personal project uploads are not stored in school admin file drives.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'Aggregated department appointment metrics', status: 'PURPOSE_LIMITED', explanation: 'Department volume reporting without student-level notes.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'HIDDEN from institutional admin', status: 'NOT_VISIBLE', explanation: 'Excluded from institutional dashboards.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'HIDDEN from institutional admin', status: 'NOT_VISIBLE', explanation: 'Individual candidate employer interactions are not visible to IT admins.' },
    ],
  },
  {
    id: 'guardian',
    label: 'Parent / Guardian (Ages 13–15)',
    roleDescription: 'Verified parent or legal guardian providing oversight for younger secondary school students under applicable consent models.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'Alex Vance (Linked Dependent Account)', status: 'VISIBLE', explanation: 'Confirmation of verified parent-student account relationship.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: 'HIDDEN — Space for independent student inquiry', status: 'NOT_VISIBLE', explanation: 'Routine chat exploration remains private to foster honest student reflection.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'Broad career clusters: Engineering &amp; Technology', status: 'PURPOSE_LIMITED', explanation: 'Summary of career families explored to facilitate home conversations.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'AP Physics (Score 5), Algebra II (Grade A)', status: 'VISIBLE', explanation: 'Academic achievements and verified certificates viewable.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'Uploaded school coursework portfolio', status: 'VISIBLE', explanation: 'Viewable to encourage parental support of student achievements.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'Upcoming school career appointment confirmed', status: 'PURPOSE_LIMITED', explanation: 'Status of school advisory appointments.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Private reflections remain in student account.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'Parental notification &amp; approval required for under-16s', status: 'REQUIRES_PERMISSION', explanation: 'Explicit guardian approval required before under-16s share dossiers with employers.' },
    ],
  },
  {
    id: 'employer',
    label: 'Prospective Employer / Recruiter',
    roleDescription: 'Commercial or apprenticeship organization reviewing authorized candidate applications — strict data minimization.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'Alex Vance (Disclosed upon application consent)', status: 'REQUIRES_PERMISSION', explanation: 'Contact details only revealed when student explicitly applies.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: 'STRICTLY PROHIBITED &amp; SEALED', status: 'NOT_VISIBLE', explanation: 'Employers have zero access to candidate AI coaching sessions.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'HIDDEN — Employers cannot see past searches', status: 'NOT_VISIBLE', explanation: 'Exploratory queries are never shared with recruiters.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'AP Physics (5), Algebra II (A) [Issuer Verified]', status: 'VISIBLE', explanation: 'Verified educational credentials attached to the specific application.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'Autonomous Rover Project Brief &amp; GitHub Link', status: 'VISIBLE', explanation: 'Project artifacts explicitly selected by candidate for the role submission.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'STRICTLY PROHIBITED &amp; SEALED', status: 'NOT_VISIBLE', explanation: 'Internal school guidance is never disclosed to commercial entities.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'HIDDEN from employer view', status: 'NOT_VISIBLE', explanation: 'Private earnings targets remain confidential.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'Tailored candidate application dossier', status: 'VISIBLE', explanation: 'The bespoke application package curated by the candidate.' },
    ],
  },
  {
    id: 'public',
    label: 'Public Web / Internet',
    roleDescription: 'Unauthenticated visitors to the public internet — default zero indexation for minors and student accounts.',
    fields: [
      { fieldName: 'Real Identity & Contact', category: 'Identity', sampleValue: 'HIDDEN — Zero public student directory', status: 'NOT_VISIBLE', explanation: 'Career OS does not maintain an open searchable public student phonebook.' },
      { fieldName: 'Private Mentor Conversations', category: 'Mentor Context', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Never accessible on the public internet.' },
      { fieldName: 'Career Pathways Explored', category: 'Exploration', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Exploratory data is completely non-public.' },
      { fieldName: 'Career Passport Qualifications', category: 'Credentials', sampleValue: 'Optional read-only credential link if generated', status: 'REQUIRES_PERMISSION', explanation: 'Only visible if student explicitly creates and shares a public credential URL.' },
      { fieldName: 'School Project Evidence Artifacts', category: 'Evidence', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Non-public by default.' },
      { fieldName: 'Counselor Support Requests', category: 'School Guidance', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Strictly internal school operational context.' },
      { fieldName: 'Private Salary / Career Ambitions', category: 'Career Twin', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Never exposed publicly.' },
      { fieldName: 'Employer-Shared Application Dossier', category: 'Opportunity', sampleValue: 'HIDDEN', status: 'NOT_VISIBLE', explanation: 'Private 1:1 relationship between candidate and employer.' },
    ],
  },
];

const STATUS_BADGES = {
  VISIBLE: { label: 'Visible', dot: 'bg-emerald-400', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  NOT_VISIBLE: { label: 'Not Visible', dot: 'bg-red-400', text: 'text-red-300', border: 'border-red-500/20' },
  PURPOSE_LIMITED: { label: 'Purpose-Limited', dot: 'bg-amber-400', text: 'text-amber-300', border: 'border-amber-500/30' },
  REQUIRES_PERMISSION: { label: 'Requires Permission', dot: 'bg-[var(--accent-blue)]', text: 'text-[var(--accent-blue)]', border: 'border-[var(--accent-blue-border)]' },
};

export function SchoolPrivacyViewerInteractive() {
  const [activeViewerId, setActiveViewerId] = useState<ViewerId>('counselor');

  const activeViewer = VIEWERS.find((v) => v.id === activeViewerId) ?? VIEWERS[0]!;

  return (
    <div className="w-full space-y-6" id="school-privacy-viewer">
      {/* Viewer Tabs */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-semibold">
          Select Viewer Relationship:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
          {VIEWERS.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveViewerId(v.id)}
              className={`p-3 rounded text-left transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
                activeViewerId === v.id
                  ? 'bg-white text-black border-transparent shadow-sm'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              }`}
              aria-pressed={activeViewerId === v.id}
            >
              <span className="text-[9px] font-mono uppercase block font-bold tracking-wider opacity-60">
                {v.id}
              </span>
              <span className="text-xs font-semibold block truncate mt-0.5">
                {v.label.split('(')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Viewer Panel */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                Simulated Perspective: {activeViewer.label}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              {activeViewer.roleDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono shrink-0">
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Visible
            </span>
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Not Visible
            </span>
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Purpose-Limited
            </span>
          </div>
        </div>

        {/* Data Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {activeViewer.fields.map((f, idx) => {
            const badge = STATUS_BADGES[f.status];
            return (
              <div
                key={idx}
                className={`p-3.5 rounded bg-[var(--color-surface-base)] border ${badge.border} space-y-2`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
                      {f.category}
                    </span>
                    <span className="font-semibold text-white block">
                      {f.fieldName}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold flex items-center gap-1 shrink-0 ${badge.text} bg-white/5 border border-white/10`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} /> {badge.label}
                  </span>
                </div>

                <div className="p-2 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] font-mono text-[11px] text-[var(--color-text-secondary)] truncate">
                  {f.sampleValue}
                </div>

                <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                  {f.explanation}
                </p>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[var(--color-text-tertiary)]">
          <span>Illustrative privacy model &bull; Actual access depends on age, account type, role, purpose and applicable jurisdiction.</span>
          <span>Zero universal visibility</span>
        </div>
      </div>
    </div>
  );
}
