import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { StudentSafetyAccessMatrix } from '@/components/marketing/high-schools/StudentSafetyAccessMatrix';
import { StudentSafetyReportingFlow } from '@/components/marketing/high-schools/StudentSafetyReportingFlow';
import { StudentSafetyStatusTable } from '@/components/marketing/high-schools/StudentSafetyStatusTable';
import {
  ShieldCheck,
  Lock,
  Sparkles,
  UserCheck,
  Building2,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  HelpCircle,
  Users,
  Eye,
  EyeOff,
  Clock,
  ShieldAlert,
  GraduationCap,
  ExternalLink,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Student Safety & Safeguarding in Career OS for Schools | Career OS',
  description:
    'See how Career OS approaches student safeguarding through age-banded access, privacy boundaries, controlled employer interaction, human escalation, and transparent AI limits.',
  alternates: {
    canonical: 'https://career-os.com/schools/student-safety',
  },
};

export default function SchoolsStudentSafetyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      
      {/* ── BREADCRUMB ────────────────────────────────────────────── */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] py-3">
        <div className="container-editorial flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
          <Link href={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="hover:text-white transition-colors">Schools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)] font-semibold">Student Safety &amp; Safeguarding</span>
        </div>
      </div>

      {/* ── SECTION 01: HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.audiences.schoolPrivacy.src}
            alt={MEDIA_ASSETS.audiences.schoolPrivacy.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          {/* Left charcoal dissolve */}
          <div aria-hidden="true" className="absolute inset-0" style={{ background: `linear-gradient(to right, var(--color-surface-base) 0%, color-mix(in srgb, var(--color-surface-base) 96%, transparent) 38%, color-mix(in srgb, var(--color-surface-base) 88%, transparent) 55%, color-mix(in srgb, var(--color-surface-base) 42%, transparent) 78%, color-mix(in srgb, var(--color-surface-base) 18%, transparent) 100%)` }} />
          {/* Top dissolve */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 pointer-events-none" style={{ background: `linear-gradient(to bottom, var(--color-surface-base) 0%, transparent 100%)` }} />
          {/* Bottom dissolve */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" style={{ background: `linear-gradient(to top, var(--color-surface-base) 0%, transparent 100%)` }} />
        </div>

        <div className="container-editorial relative z-10 space-y-8 py-20 lg:py-0">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              <span className="section-label text-emerald-400">
                School Authority Sprint 02 · Institutional Safeguarding Center
              </span>
            </div>

            <h1 className="text-display-hero text-[var(--color-text-primary)] leading-[1.04]">
              Young people need more than an adult product with parental controls added later.
            </h1>

            <p className="text-lead max-w-2xl text-[var(--color-text-secondary)]">
              Career OS uses age-banded account models, controlled opportunity access, permission boundaries, and human safeguarding processes to create an entirely different architecture for younger users.
            </p>

            <p className="text-xs text-[var(--color-text-tertiary)] max-w-2xl leading-relaxed font-mono">
              This page explains the Career OS safeguarding model in detail and distinguishes active, deployed product controls from planned and future roadmap capabilities for institutional reviewers.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#safeguarding-architecture"
              className="px-5 py-3 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Explore the Safeguarding Model ↓</span>
            </a>
            <Link
              href={ROUTES.REGULATORY_STUDENT_PRIVACY}
              className="px-4 py-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-zinc-500 text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Review Student Privacy</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            </Link>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-4 py-3 bg-transparent text-[var(--color-text-secondary)] hover:text-white text-xs font-semibold rounded-[var(--radius-button)] transition-colors"
            >
              Become a Launch School →
            </Link>
          </div>

          {/* HERO ARCHITECTURE MEDIA DIAGRAM */}
          <div id="safeguarding-architecture" className="pt-6">
            <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                <div className="space-y-0.5">
                  <span className="section-label text-[var(--accent-blue)]">
                    System Architecture Visualization
                  </span>
                  <h2 className="text-sm font-bold text-white">
                    Multi-Stakeholder Relationship &amp; Permission Boundary
                  </h2>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto">
                  Illustrative access architecture
                </span>
              </div>

              {/* Central Architecture Map */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Left Stakeholders: School & Guardian */}
                <div className="md:col-span-3 space-y-3">
                  <div className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <GraduationCap className="w-4 h-4 text-[var(--accent-blue)]" />
                      <span>School &amp; Counselor</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-tertiary)]">
                      Advising briefs &amp; cohort trends. No raw chat surveillance.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>Parent / Guardian</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-tertiary)]">
                      Consent holder (age-based), achievements &amp; safety notices.
                    </p>
                  </div>
                </div>

                {/* Central Permission Gate */}
                <div className="md:col-span-6 p-5 bg-[var(--background-dark-deep)] border-2 border-[rgba(47,143,255,0.35)] rounded-[var(--radius-card)] text-center space-y-3 relative shadow-lg">
                  <div className="inline-block px-3 py-1 rounded-full bg-[rgba(47,143,255,0.12)] border border-[rgba(47,143,255,0.3)] text-[10px] font-mono font-bold text-[var(--accent-blue)] uppercase tracking-wider">
                    Private Career OS Core
                  </div>

                  <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                    <div className="text-sm font-bold text-white">STUDENT USER</div>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Career Twin · AI Mentor Dialogue · Career Passport · Private Goals
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-taupe-300)] flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">AGE</span>
                    <span>+</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">RELATIONSHIP</span>
                    <span>+</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">ROLE</span>
                    <span>+</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PERMISSION</span>
                    <span>+</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PURPOSE</span>
                  </div>
                </div>

                {/* Right Stakeholders: Opportunity & Employer */}
                <div className="md:col-span-3 space-y-3">
                  <div className="p-3.5 bg-[var(--color-surface-base)] border border-red-500/30 rounded-[var(--radius-sm)] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                      <Building2 className="w-4 h-4" />
                      <span>Commercial Recruiter</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-tertiary)]">
                      Blocked from candidate directory browsing &amp; unsolicited cold outreach.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Vetted Opportunity</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-tertiary)]">
                      Editorial review gate prior to student visibility.
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
                <strong className="text-white">Architecture Standard:</strong> No single external party has unrestricted access to a student&apos;s private career space. Every data interaction is constrained by verified role, explicit purpose, and strict age-banded product boundaries.
              </div>

            </div>
          </div>

        </div>
      </section>

      <main className="container-editorial py-12 sm:py-16 space-y-16">

        {/* ── SECTION 02: AGE-BANDED ACCESS ───────────────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 02 · Account Eligibility</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Different ages require different account relationships.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS applies distinct account-eligibility models based on developmental stage and legal frameworks. Turning 16 unlocks direct account eligibility under platform policy, but does not mean a 16-year-old is treated as an unrestricted legal adult.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Age 16+ */}
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2.5">
                  <span className="font-mono text-sm font-bold text-white">Age 16+</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                    Direct Account Permitted
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Direct Individual Access</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Users aged 16 and over are eligible to register an individual Career OS account. They retain sovereign control over their Career Passport credentials and Career Twin reflections.
                </p>
                <div className="p-3 bg-[var(--color-surface-base)] border border-amber-500/30 rounded text-[11px] text-amber-300 leading-snug">
                  <strong>Important Distinction:</strong> This is a platform account-eligibility threshold. It does not mean a 16-year-old is legally an adult. Minor protections and employer contact barriers continue to apply.
                </div>
              </div>
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
                Jurisdiction-specific youth labor and privacy rules remain applicable.
              </div>
            </div>

            {/* Age 13–15 */}
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2.5">
                  <span className="font-mono text-sm font-bold text-white">Age 13–15</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-[#6BB8FF] border border-blue-500/30 font-semibold">
                    Institutional / Guardian
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Approved School or Guardian Arrangement</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Access requires either an approved school/institutional partnership or a verified parent/guardian arrangement.
                </p>
                <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[var(--accent-blue)] font-bold">·</span>
                    <span>Zero recruiter visibility or candidate listing</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[var(--accent-blue)] font-bold">·</span>
                    <span>Heightened AI exploratory guardrails</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[var(--accent-blue)] font-bold">·</span>
                    <span>Curriculum-focused career exploration</span>
                  </li>
                </ul>
              </div>
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
                Requires verified school roster onboarding or parent verification.
              </div>
            </div>

            {/* Under 13 */}
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2.5">
                  <span className="font-mono text-sm font-bold text-white">Under 13</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
                    No Consumer Signup
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Institutional Authorization Only</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Career OS does not provide open consumer registration to under-13 users. Any use must be through an approved institutional arrangement where authorized under educational privacy laws.
                </p>
                <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-[11px] text-[var(--color-text-secondary)] leading-snug">
                  School authorization does not remove Career OS data minimisation duties. Strict zero-tracking and educational-only processing apply.
                </div>
              </div>
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
                Aligned with US COPPA, UK Age-Appropriate Design Code, and EU minor privacy standards.
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 03: CONTEXT CONTROLS ─────────────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 03 · Beyond Age Gates</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            A date of birth should not determine the entire safeguarding model.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Age is a vital threshold, but safety in career guidance requires multi-factor context. A student account should not transform into an unrestricted adult consumer account simply because a chronological birthday passes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { label: 'Institutional Context', desc: 'School partnership vs direct account status' },
              { label: 'Workspace Role', desc: 'Student, Counselor, Administrator, Guardian' },
              { label: 'Opportunity Type', desc: 'Educational fair vs statutory degree apprenticeship' },
              { label: 'Interaction Purpose', desc: 'Exploration vs formal consented application' },
            ].map((ctx) => (
              <div key={ctx.label} className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <div className="text-xs font-bold text-white">{ctx.label}</div>
                <div className="text-[11px] text-[var(--color-text-tertiary)]">{ctx.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 04: AI CAREER MENTOR BOUNDARIES ──────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 04 · AI Guidance Scope</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              The Career Mentor supports career development. It is not a substitute for the adults responsible for a young person.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              The AI Career Mentor is engineered with strict domain guardrails. It deconstructs occupations, maps educational pathways, and prepares students for interviews — but it is explicitly barred from acting as a counselor, therapist, or medical advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Permitted Scope */}
            <div className="p-6 bg-[var(--color-surface-raised)] border border-emerald-500/30 rounded-[var(--radius-card)] space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Permitted Mentorship Scope</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Explaining occupational pathways, apprenticeships, and university requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Deconstructing transferable capabilities from school projects and hobbies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Conducting mock interview preparation and structured application clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Structuring questions for students to take into human counseling meetings</span>
                </li>
              </ul>
            </div>

            {/* Prohibited Roles */}
            <div className="p-6 bg-[var(--color-surface-raised)] border border-red-500/30 rounded-[var(--radius-card)] space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider font-mono">
                <AlertTriangle className="w-4 h-4" />
                <span>Strictly Prohibited Roles</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Mental health counseling, psychological therapy, or clinical diagnoses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Legal advice, statutory immigration counsel, or binding contract guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Emergency response, suicide intervention, or crisis management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Parental replacement, disciplinary arbitrating, or teacher substitution</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="p-4 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Learn more about our algorithmic safety boundaries in our AI governance documentation.
            </span>
            <div className="flex items-center gap-3 shrink-0">
              <Link href={ROUTES.PRODUCT_AI_CAREER_MENTOR} className="text-white hover:text-[var(--accent-blue)] underline">
                AI Career Mentor Overview
              </Link>
              <Link href={ROUTES.LEGAL_AI_TERMS} className="text-[var(--color-text-secondary)] hover:text-white underline">
                AI Terms of Service
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 05: WHEN A HUMAN NEEDS TO BE INVOLVED ───────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5">
          <span className="section-label">Section 05 · Escalation Principle</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Some situations should leave the AI workflow.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            When a young person faces acute distress, exploitation, or safeguarding risks, conversational AI must yield immediately to responsible human adults. Technology can support workflow; safeguarding decisions remain human responsibilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
              <div className="font-bold text-white">Abuse &amp; Welfare Disclosures</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                The platform immediately surfaces certified national helpline resources and alerts the designated school safeguarding lead (DSL).
              </p>
            </div>

            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
              <div className="font-bold text-white">Exploitative Employer Contact</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Unsolicited messaging or requests for private PII trigger an immediate recruiter freeze and human Trust &amp; Safety review.
              </p>
            </div>

            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5">
              <div className="font-bold text-white">Harmful Opportunity Listings</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Unpaid labor masquerading as training or fee-charging schemes are quarantined from all student interfaces.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-amber-950/30 border border-amber-600/30 rounded text-xs text-amber-300">
            <strong>Honest Capability Notice:</strong> Career OS does not claim omniscient automated danger detection. We do not run intrusive behavioral surveillance on students. Safeguarding relies on clear reporting channels, structured boundaries, and human intervention.
          </div>
        </section>

        {/* ── SECTION 06: INTERACTIVE REPORTING WORKFLOW ───────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 06 · Multi-Stakeholder Reporting</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Make it obvious how to ask for help.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Students, teachers, counselors, and parents require distinct, unambiguous reporting mechanisms to raise concerns. Explore how reports are acknowledged, quarantined, investigated, and escalated below.
            </p>
          </div>

          <StudentSafetyReportingFlow />
        </section>

        {/* ── SECTION 07: EMPLOYERS & MINORS ───────────────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 07 · Commercial Recruiter Boundaries</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Career opportunity should never mean unrestricted recruiter access to children.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS is not a searchable resume database or open recruiter marketplace for minors. Commercial employers cannot search, browse, or cold-contact minor students. Opportunity access for minors is controlled, purposeful, and age-appropriate.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-card)] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              
              <div className="p-4 bg-[var(--color-surface-base)] border border-emerald-500/30 rounded space-y-1">
                <div className="text-xs font-bold text-emerald-300 uppercase font-mono">1. Minor Student Core</div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Private Career Twin reflections, mentor chats, and exploration notes remain strictly inside the student boundary.
                </p>
              </div>

              <div className="p-4 bg-[var(--background-dark-deep)] border-2 border-[var(--accent-blue)] rounded text-center space-y-1 shadow-md">
                <div className="text-xs font-bold text-[var(--accent-blue)] uppercase font-mono">2. Safeguarding Barrier</div>
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  Institutional authorization &amp; explicit student application required before any data transmission.
                </p>
              </div>

              <div className="p-4 bg-[var(--color-surface-base)] border border-amber-500/30 rounded space-y-1">
                <div className="text-xs font-bold text-amber-300 uppercase font-mono">3. Approved Opportunity</div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Employers only receive verified application artifacts submitted voluntarily for an approved vacancy or apprenticeship.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-[var(--color-text-secondary)]">
              <div className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-bold text-white block">No Recruiter Search Index</span>
                Employers have zero ability to run search queries filtering minor candidates by location, school, gender, or age.
              </div>
              <div className="p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-bold text-white block">No Unsolicited InMails</span>
                Commercial messaging channels cannot be initiated by recruiters without student-initiated application.
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 08: OPPORTUNITY STANDARDS ────────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 08 · Opportunity Vetting</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Not every opportunity belongs in front of a student.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            All career opportunities presented to students — including degree apprenticeships, internships, and work experience — are evaluated against rigorous quality and child safeguarding standards.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <div className="font-bold text-white">Wage &amp; Fair Compensation</div>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Zero tolerance for unpaid commercial labor disguised as &ldquo;experience&rdquo;. Statutory minimum wage compliance enforced.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <div className="font-bold text-white">Legitimate Employer Verification</div>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Organizers and corporate domains verified against official business registers to prevent ghost jobs or scam operations.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <div className="font-bold text-white">Youth Safeguarding Disclosures</div>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Clear age suitability, background-checked supervision requirements, and parent/guardian attendance permissions.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link href={ROUTES.STANDARDS_OPPORTUNITY_STANDARDS} className="text-xs font-semibold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
              <span>Read Full Opportunity Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ── SECTION 09: EVENTS & PHYSICAL SAFEGUARDING ───────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 09 · Event Safeguarding</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Career events need the same safeguarding standards as digital opportunities.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Career OS actively connects young people with career fairs, university open days, and employer recruitment sessions. Every event listing is vetted for organizer identity, age appropriateness, and venue accessibility.
          </p>
          <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded text-xs text-[var(--color-text-secondary)] space-y-2">
            <p>
              <strong className="text-white">Venue &amp; Physical Safety Notice:</strong> Career OS listing reviews ensure event legitimacy and accurate representations. However, Career OS review does not replace an organizer&apos;s own statutory safeguarding, licensing, physical security, or venue health and safety duties.
            </p>
            <div className="pt-1">
              <Link href={ROUTES.EVENTS} className="text-xs text-[var(--accent-blue)] hover:underline">
                Explore the CareerOS Events Platform →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: INTERACTIVE ACCESS MATRIX ────────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 10 · Information Governance</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Protecting a student does not require removing all privacy.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Safeguarding requires appropriate human access when risks arise, but giving every adult unrestricted visibility into every student conversation destroys psychological safety. Career OS uses purpose-based, role-delimited information access.
            </p>
          </div>

          <StudentSafetyAccessMatrix />
        </section>

        {/* ── SECTION 11: SCHOOL ACCESS BOUNDARIES ─────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 11 · Institutional Access Bounds</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            A school relationship does not mean &ldquo;the school can see everything.&rdquo;
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Educators receive structured pathway summaries, aggregate cohort readiness indicators, and student-permissioned advising questions. Raw, unfiltered conversation transcripts are isolated in the student’s sovereign workspace to encourage genuine, candid reflection.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="text-white hover:text-[var(--accent-blue)] underline">
              High School Partnership Model
            </Link>
            <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="text-[var(--color-text-secondary)] hover:text-white underline">
              Student Privacy Architecture
            </Link>
          </div>
        </section>

        {/* ── SECTION 12: PARENTS & GUARDIANS ──────────────────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 12 · Family Partnership</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Guardian involvement should be age-appropriate and transparent.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Guardians serve a vital role in consent, support, and privacy oversight for younger users. However, parents do not receive an omniscient surveillance feed over every developmental thought. As students mature from 13 through 17, platform autonomy transitions gradually toward personal independence.
          </p>
          <div className="pt-1">
            <Link href={ROUTES.LEGAL_PARENT_GUARDIAN} className="text-xs font-semibold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
              <span>Read Parent &amp; Guardian Notice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ── SECTION 13: SENSITIVE INFORMATION ────────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 13 · Data Minimisation</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Career guidance can sometimes touch sensitive parts of a young person&apos;s life.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Students may mention family responsibilities, financial hardships, disability accommodations, or personal health circumstances. Career OS strictly adheres to data minimisation: we do not harvest or retain sensitive personal data for profiling or commercial targeting.
          </p>
          <div className="p-4 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded text-xs font-serif italic text-[var(--color-taupe-300)]">
            &ldquo;More data does not automatically mean better career guidance. Context should be purposeful, voluntary, and ephemeral.&rdquo;
          </div>
        </section>

        {/* ── SECTION 14: AI LIMITATIONS ───────────────────────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 14 · Model Fallibility</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            The Career Mentor can be useful and still be wrong.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Generative AI models can misunderstand nuance, reflect outdated requirements, or fail to account for unique personal circumstances. Career OS communicates model uncertainty, cites qualification requirements, and encourages students to verify consequential decisions with school counselors.
          </p>
        </section>

        {/* ── SECTION 15: REGULATED & SAFETY-CRITICAL CAREERS ──────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 15 · Statutory Gates</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Some careers have requirements that advice alone cannot satisfy.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            In regulated professions — such as medicine, law, aviation, commercial maritime, and licensed electrical trades — skill overlap does not equal legal eligibility. Career OS clearly distinguishes transferable interest from statutory licensing, age minimums, and mandatory criminal background checks.
          </p>
        </section>

        {/* ── SECTION 16: IDENTITY & IMPERSONATION ─────────────────── */}
        <section className="space-y-4">
          <span className="section-label">Section 16 · Identity Integrity</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Real opportunities require trustworthy identities.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            To prevent employer impersonation, fake credentialing, and predatory contact, Career OS uses verified institutional accounts. However, verified identity does not mean exposing a student’s personal address or contact information publicly.
          </p>
        </section>

        {/* ── SECTION 17: AUDITABILITY ─────────────────────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 17 · Audit Ledger</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            Important safeguarding actions should leave a record.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Every safety report, access grant, employer interaction, and moderation override is committed to an immutable administrative audit ledger. This ensures complete accountability during school district compliance audits or safeguarding reviews.
          </p>
        </section>

        {/* ── SECTION 18: SAFEGUARDING STATUS (CURRENT VS PLANNED) ─── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 18 · Roadmap Transparency</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              We distinguish safeguards that exist from safeguards we are still building.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Trust with educational institutions requires radical transparency. Below is our formal control register categorized by implementation status.
            </p>
          </div>

          <StudentSafetyStatusTable />
        </section>

        {/* ── SECTION 19: RESPONSIBILITY FRAMEWORK ─────────────────── */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 19 · Mutual Governance</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Safeguarding works only when responsibilities are clear.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Safeguarding is a collaborative ecosystem. Each participant in the Career OS network operates under defined, non-overlapping responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-[var(--accent-blue)] uppercase font-mono">Career OS Platform</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Platform architecture, access boundaries, AI guardrails, employer vetting, concern reporting systems, and cryptographic data security.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-white uppercase font-mono">School &amp; District</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Institutional safeguarding policy, staff access administration, pastoral care, 1:1 counseling, and local child protection referrals.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase font-mono">Parent / Guardian</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Family guidance, account authorization (for under-16s), career discussion alignment, and raising concerns directly with the school or platform.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase font-mono">Employer / Organizer</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Truthful opportunity representations, fair labor compliance, workplace safety, background-checked staff, and zero unsolicited minor outreach.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 sm:col-span-2">
              <div className="text-xs font-bold text-purple-400 uppercase font-mono">Student User</div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Active ownership of career goals, voluntary participation, asking questions, setting sharing permissions, and reporting inappropriate content.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 20: INCIDENT RESPONSE LIFECYCLE ─────────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <span className="section-label">Section 20 · Incident Response</span>
          <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
            What happens when something goes wrong matters as much as prevention.
          </h2>
          <p className="text-body-editorial text-[var(--color-text-secondary)]">
            Our incident response lifecycle moves rapidly from user flag to immediate containment, human investigation, institutional notification, and logged resolution.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded">
              <strong className="text-white block">1. Instant Containment</strong>
              Listing or channel frozen immediately.
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded">
              <strong className="text-white block">2. Human Review</strong>
              Investigated by Trust &amp; Safety within 1 business day.
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded">
              <strong className="text-white block">3. Institutional Notice</strong>
              School safeguarding lead notified with evidence logs.
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded">
              <strong className="text-white block">4. Audit &amp; Remediate</strong>
              Permanent action logged to immutable audit ledger.
            </div>
          </div>
        </section>

        {/* ── SECTION 21: SCHOOL SAFEGUARDING REVIEW PACK ──────────── */}
        <section className="p-8 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.25)] rounded-[var(--radius-card)] space-y-6">
          <div className="space-y-2">
            <span className="section-label text-[var(--accent-blue)]">Section 21 · Governance Documentation</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Give your safeguarding and compliance team something concrete to review.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Access the complete suite of institutional documentation, privacy whitepapers, and ethical AI standards governing the Career OS platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {[
              { label: 'Student Privacy Framework', href: ROUTES.REGULATORY_STUDENT_PRIVACY },
              { label: 'Parent & Guardian Notice', href: ROUTES.LEGAL_PARENT_GUARDIAN },
              { label: 'School Terms of Service', href: ROUTES.LEGAL_SCHOOL_TERMS },
              { label: 'Data Processing Agreement', href: ROUTES.LEGAL_DATA_PROCESSING },
              { label: 'Responsible AI Framework', href: ROUTES.TRUST_RESPONSIBLE_AI },
              { label: 'Human Oversight Policy', href: ROUTES.TRUST_HUMAN_OVERSIGHT },
              { label: 'Opportunity Standards', href: ROUTES.STANDARDS_OPPORTUNITY_STANDARDS },
              { label: 'Employer Code of Conduct', href: ROUTES.STANDARDS_EMPLOYER_CODE },
              { label: 'Security & Infrastructure', href: ROUTES.TRUST_SECURITY },
              { label: 'Accessibility Statement (WCAG 2.2)', href: ROUTES.TRUST_ACCESSIBILITY },
              { label: 'Regulatory Alignment Hub', href: ROUTES.REGULATORY },
              { label: 'Career OS Events Center', href: ROUTES.EVENTS },
            ].map((doc) => (
              <Link
                key={doc.label}
                href={doc.href}
                className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded hover:border-[var(--accent-blue)] text-[var(--color-text-secondary)] hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{doc.label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── SECTION 22: COMPREHENSIVE FAQ ────────────────────────── */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="section-label">Section 22 · Frequently Asked Questions</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Detailed answers for school leadership, safeguarding officers, and parents.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">1. Is Career OS safe for students?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS is designed around strict age-banded boundaries, isolated student workspaces, purpose-based staff access, and complete prohibition of commercial recruiter browsing over minor profiles.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">2. Does Career OS guarantee that harmful content can never appear?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No technological platform can offer an absolute zero-risk guarantee. Instead, we provide strict system guardrails, human editorial moderation on all listings, and rapid containment workflows when issues are flagged.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">3. What ages can use Career OS?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Direct individual registration is available to users aged 16+. Users aged 13–15 require an approved school partnership or verified guardian arrangement. Under-13 use is restricted exclusively to authorized institutional deployments.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">4. Does turning 16 mean Career OS treats a student as an adult?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Age 16 is a platform account-eligibility threshold. It does not confer legal adulthood. Minor protections — such as recruiter contact restrictions and youth labor compliance — remain active for 16 and 17-year-olds.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">5. What does the AI Career Mentor do?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The Career Mentor deconstructs career pathways, explains degree and apprenticeship requirements, conducts interview practice, and helps students articulate transferable skills. It is prohibited from offering medical, legal, or therapeutic advice.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">6. Can teachers read all student Mentor conversations?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Teachers and counselors receive structured advising summaries and topics flagged by the student. Raw exploratory transcripts are kept private to provide a psychologically safe environment for candid reflection.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">7. Can safeguarding staff access more information during an emergency?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Designated Safeguarding Leads (DSLs) have audited escalation access to investigate severe wellbeing triggers or reported exploitation, subject to strict cryptographic audit logging.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">8. Can commercial employers search or browse minor student profiles?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Commercial recruiters are strictly barred from searching or indexing minor profiles. Employers only see application materials that a student explicitly and voluntarily submits for an approved opportunity.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">9. How are job and apprenticeship listings vetted?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Every opportunity submitted to Career OS undergoes editorial moderation to verify wage legality, legitimate employer registration, safe working conditions, and absence of deceptive financial demands.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">10. Does Career OS replace school safeguarding procedures?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Career OS provides technological controls and incident reporting pathways, but the legal and operational responsibility for student welfare remains with the school&apos;s designated safeguarding team.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">11. Does Career OS score student potential or calculate career destiny?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Career OS rejects deterministic &ldquo;career fit scores&rdquo; or automated tracking algorithms. Our tools support open-ended human agency and exploration.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h3 className="text-sm font-bold text-white">12. What happens to a student&apos;s data when they graduate?</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Verified achievements and credentials in the student&apos;s Career Passport transfer seamlessly to their lifelong sovereign account, while school district administrative records remain archived under district data retention policies.
              </p>
            </div>

          </div>
        </section>

        {/* ── CONCLUDING INSTITUTIONAL CTA ─────────────────────────── */}
        <section className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.25)] rounded-[var(--radius-card)] space-y-6 text-center max-w-3xl mx-auto">
          <div className="space-y-2">
            <span className="section-label text-[var(--accent-blue)]">Built-In Safeguarding</span>
            <h2 className="text-headline-editorial text-[var(--color-text-primary)]">
              Safeguarding should be part of the product architecture — not a page added at the end.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Career OS is built to combine meaningful career guidance with age-appropriate access, controlled opportunity interaction, strict privacy boundaries, and clear routes back to human responsibility.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href={ROUTES.REGULATORY_STUDENT_PRIVACY}
              className="px-5 py-3 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors shadow-sm inline-flex items-center gap-1.5"
            >
              <span>Review Student Privacy →</span>
            </Link>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="px-5 py-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] hover:border-zinc-500 transition-colors"
            >
              Explore Career OS for High Schools
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}
