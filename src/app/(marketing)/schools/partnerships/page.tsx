import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  GraduationCap, 
  Wrench, 
  Building2, 
  Users, 
  UserCheck, 
  Sparkles, 
  Lock, 
  FileCheck, 
  Layers, 
  Shield, 
  HelpCircle,
  Clock,
  Eye,
  FileText,
  Building,
  Briefcase,
  Bot,
  Zap,
  RotateCcw,
  HeartHandshake,
  Award,
  Calendar,
  AlertCircle
} from 'lucide-react';

import { HeroEcosystemVisual } from '@/components/marketing/partnerships/HeroEcosystemVisual';
import { PartnerEcosystemExplorer } from '@/components/marketing/partnerships/PartnerEcosystemExplorer';
import { LocalEcosystemMap } from '@/components/marketing/partnerships/LocalEcosystemMap';
import { ApprenticeshipLifecycleVisual } from '@/components/marketing/partnerships/ApprenticeshipLifecycleVisual';
import { OpportunityGovernanceFlow } from '@/components/marketing/partnerships/OpportunityGovernanceFlow';
import { PartnerAccessMatrix } from '@/components/marketing/partnerships/PartnerAccessMatrix';
import { PartnerEnquiryForm } from '@/components/marketing/partnerships/PartnerEnquiryForm';
import { PartnershipsFAQ } from '@/components/marketing/partnerships/PartnershipsFAQ';

export const metadata: Metadata = {
  title: 'Career Education Partnerships for Schools & Employers | Career OS',
  description:
    'See how Career OS connects schools with employers, apprenticeship providers, education organisations, training providers and other trusted partners around the student career journey.',
  alternates: {
    canonical: 'https://career-os.com/schools/partnerships',
  },
  openGraph: {
    title: 'Career Education Partnerships for Schools & Employers | Career OS',
    description:
      'Careers are built across organisations. Career guidance should connect them. Discover the Career OS collaborative partner ecosystem.',
    url: 'https://career-os.com/schools/partnerships',
    type: 'website',
  },
};

export default function SchoolsPartnershipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Career OS Collaborative Career Education Partnerships',
    description:
      'Multi-stakeholder career ecosystem connecting secondary schools with employers, apprenticeship training providers, universities, credential issuers, and community organisations.',
    provider: {
      '@type': 'Organization',
      name: 'Career OS',
      url: 'https://career-os.com',
    },
    educationalProgramMode: 'Blended',
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          SECTION 01: HERO
          Careers are built across organisations. Career guidance should connect them.
          ============================================================ */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-24">
        {/* Full-bleed background image with editorial scrim */}
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
          {/* Mobile contrast scrim + Left charcoal wash */}
          <div aria-hidden="true" className="absolute inset-0 bg-[#1c1c1c]/90 sm:bg-transparent z-[1]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2]"
            style={{
              background:
                'linear-gradient(to right, #222222 0%, rgba(34, 34, 34, 0.96) 38%, rgba(34, 34, 34, 0.88) 55%, rgba(34, 34, 34, 0.42) 78%, rgba(34, 34, 34, 0.18) 100%)',
            }}
          />
          {/* Top dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none z-[3]"
            style={{ background: 'linear-gradient(to bottom, #222222 0%, transparent 100%)' }}
          />
          {/* Bottom dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-[3]"
            style={{ background: 'linear-gradient(to top, #222222 0%, transparent 100%)' }}
          />
        </div>

        <div className="container-editorial relative z-10 space-y-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              <span className="section-label">
                Schools, Employers, Higher Education &amp; Training Providers
              </span>
            </div>

            <h1 className="text-display-hero text-white">
              Careers are built across organisations.
              <br />
              <span className="text-[var(--color-text-secondary)] font-serif font-normal">
                Career guidance should connect them.
              </span>
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
              Career OS is being designed to connect schools with employers, education providers, apprenticeship programmes, training organisations and other trusted partners — while keeping the student’s career journey at the centre.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button href="#ecosystem-explorer" variant="primary" size="lg">
                Explore the partner ecosystem ↓
              </Button>
              <Button href="#partner-enquiry-form" variant="secondary" size="lg">
                Become a Career OS Partner
              </Button>
              <Link
                href={ROUTES.FOR_HIGH_SCHOOLS}
                className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-white transition-colors inline-flex items-center gap-1.5 px-3 py-2 self-center"
              >
                <span>Career OS for High Schools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero Media Stage */}
          <HeroEcosystemVisual />
        </div>
      </section>

      {/* ============================================================
          SECTION 02: WHY PARTNERSHIPS MATTER
          No single organisation can show a student the whole world of work.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Connected Ecosystem Philosophy</span>
            <h2 className="text-headline-editorial text-white">
              No single organisation can show a student the whole world of work.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Schools know their students and communities. Employers understand real workplace demands. Colleges and universities understand academic disciplines. Apprenticeship providers master work-based learning. Professional bodies define statutory standards. Career OS connects these vital contributions without expecting any single entity to bear the entire burden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold block">
                Educational Grounding
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                Schools &amp; Pastoral Care
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Provide individual human mentoring, emotional reassurance, option choices guidance, and statutory safeguarding oversight for young people.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
                Workplace Authenticity
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                Employers &amp; Apprenticeships
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Contribute authentic job briefs, work shadowing placements, degree apprenticeship openings, and transparent wage expectations.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
                Standards &amp; Verification
              </span>
              <h4 className="text-lg font-serif text-white font-normal">
                Credentials &amp; Institutes
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Supply occupational competency frameworks, chartership roadmaps, and verifiable qualifications that persist in Career Passport.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] text-center max-w-3xl mx-auto space-y-2">
            <p className="text-lg sm:text-xl font-serif text-white italic">
              &ldquo;The value is not having more organisations around the student. It is making each contribution more useful.&rdquo;
            </p>
            <span className="text-[11px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider block">
              Core Partnership Architectural Principle
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 03 & INTERACTION 01: EXPLORE THE ECOSYSTEM
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Interactive Experience 01</span>
            <h2 className="text-headline-editorial text-white">
              A career ecosystem needs different kinds of partners.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Explore the 10 partner categories below. Select your organisation type to see what you contribute, what Career OS contributes in return, how learners benefit, and our strict boundaries regarding student data access.
            </p>
          </div>

          <PartnerEcosystemExplorer />
        </div>
      </section>

      {/* ============================================================
          SECTION 04: BUILDING A LOCAL CAREER ECOSYSTEM
          A school should be able to build an ecosystem around its own students.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Local Economy &bull; School Network Builder</span>
            <h2 className="text-headline-editorial text-white">
              A school should be able to build an ecosystem around its own students.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Every school operates within a unique local economy. A rural school may need strong connections to agriculture, renewable energy, and emergency services; an urban academy may require pathways into fintech, life sciences, and civil engineering. Career OS enables schools to configure a balanced local network across 5 key economic sectors.
            </p>
          </div>

          <LocalEcosystemMap />
        </div>
      </section>

      {/* ============================================================
          SECTION 05: EMPLOYERS AS CONTRIBUTORS, NOT ADVERTISERS
          Employer participation should add career value before it adds commercial value.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Ethical Employer Engagement</span>
            <h2 className="text-headline-editorial text-white">
              Employer participation should add career value before it adds commercial value.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              We reject the model of youth career platforms that sell student attention to corporate recruiters. In Career OS, employers participate as authentic career educators—contributing role capability profiles, work experience days, and levy-funded apprenticeship openings under strict ethical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4">
              <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                How Employers Contribute Value
              </span>
              <h3 className="text-lg font-serif text-white font-normal">
                Authentic Workplace Grounding
              </h3>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Capability-First Role Briefs:</strong> Describing real day-to-day duties and problem-solving over resume jargon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Degree &amp; Advanced Apprenticeships:</strong> Offering debt-free qualification routes with living wages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">School Insight Sessions:</strong> Participating in structured career fairs, panel talks, and factory site tours.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-[var(--radius-card)] bg-rose-950/20 border border-rose-500/30 space-y-4">
              <span className="text-[10px] font-mono uppercase text-rose-300 font-semibold block">
                Prohibited Commercial Practices
              </span>
              <h3 className="text-lg font-serif text-white font-normal">
                Strict Commercial Boundaries
              </h3>
              <ul className="space-y-2.5 text-xs text-rose-200/80">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>No cold-sourcing or unsolicited direct messaging to minor students.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>No buying recommendation priority in AI Career Mentor dialogues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&times;</span>
                  <span>No disguised native advertising or unlabelled sponsored career rankings.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] text-center text-xs text-[var(--color-text-secondary)]">
            <strong className="text-white">Core Ethical Rule:</strong> Commercial participation must never purchase career relevance. Every opportunity is evaluated on factual suitability alone.
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 06: APPRENTICESHIP ECOSYSTEM
          Apprenticeships connect education, work and evidence.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Apprenticeship Parity &bull; 9-Stage Lifecycle</span>
            <h2 className="text-headline-editorial text-white">
              Apprenticeships connect education, work and evidence in a way Career OS supports naturally.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Apprenticeships are a cornerstone of modern career mobility. Career OS supports the entire apprenticeship journey—from early discovery and wage transparency, through training provider delivery and workplace evidence logging, to chartered professional status.
            </p>
          </div>

          <ApprenticeshipLifecycleVisual />

          <div className="flex items-center justify-between text-xs pt-4 border-t border-[var(--color-border-default)]">
            <span className="text-[var(--color-text-secondary)]">
              Explore our dedicated architectural guide to apprenticeship parity and wage transparency.
            </span>
            <Link
              href={ROUTES.PATHWAYS_APPRENTICESHIPS}
              className="text-[#6BB8FF] font-semibold hover:text-white transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore Apprenticeship Pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 07: HIGHER & FURTHER EDUCATION PARTNERS
          Education providers should help students understand where courses lead.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Higher &amp; Technical Education</span>
            <h2 className="text-headline-editorial text-white">
              Education providers should help students understand where courses can lead — not simply market courses.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Colleges and universities contribute vital academic degree and technical HND curricula. In Career OS, education programmes are presented with transparent entry criteria and objective graduate trajectories—evaluated alongside apprenticeships rather than presented as the only path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold block">
                Objective Course Maps
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Prerequisite Transparency
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Clearly state subject requirements (e.g. A-Level Maths for Engineering) so students make informed secondary option choices early.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
                Open Day Discovery
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Campus &amp; Taster Sessions
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Connect university masterclasses, lab taster days, and campus tours directly to students exploring related academic disciplines.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
                Zero Paid League Tables
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Unbiased Evaluation
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No university can pay to be ranked as the &ldquo;preferred&rdquo; or &ldquo;top match&rdquo; for a student. Recommendations remain neutral and student-centred.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link
              href={ROUTES.PATHWAYS_UNIVERSITY}
              className="text-[var(--color-text-secondary)] hover:text-white transition-colors underline underline-offset-4"
            >
              University Pathways Guide →
            </Link>
            <Link
              href={ROUTES.PATHWAYS_COLLEGE}
              className="text-[var(--color-text-secondary)] hover:text-white transition-colors underline underline-offset-4"
            >
              Community &amp; Technical College Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 08: CREDENTIAL & EVIDENCE PARTNERS
          Evidence becomes more useful when its source is clear.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Credential Provenance &bull; Career Passport</span>
            <h2 className="text-headline-editorial text-white">
              Evidence becomes more useful when its source is clear.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              We reject binary verification models that flatten all student achievements into an unverified list. Career Passport operates across a rigorous 9-state evidence spectrum—distinguishing self-declared projects from school assessments and issuer-verified credentials.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold">
              The Career OS 9-State Evidence Spectrum
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase block">Tier 01 &bull; Exploratory</span>
                <span className="font-semibold text-white block">SELF_DECLARED</span>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Student self-reported interests, personal goals, and work shadowing notes.</p>
              </div>

              <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                <span className="font-mono text-[10px] text-purple-300 uppercase block">Tier 02 &bull; Contextual</span>
                <span className="font-semibold text-white block">EVIDENCE_ATTACHED</span>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Coursework code, CAD models, lab notebooks, or art portfolios attached.</p>
              </div>

              <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                <span className="font-mono text-[10px] text-emerald-400 uppercase block">Tier 03 &bull; Verified</span>
                <span className="font-semibold text-white block">ISSUER_VERIFIED</span>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Cryptographically or authoritatively confirmed by awarding body / registrar.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[var(--color-text-secondary)]">
                Credential issuers can establish automated verification registries with Career Passport.
              </span>
              <Link
                href={ROUTES.PRODUCT_CAREER_PASSPORT}
                className="font-semibold text-emerald-400 hover:text-white transition-colors inline-flex items-center gap-1 shrink-0"
              >
                <span>Explore Career Passport</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 09 & INTERACTION 02: OPPORTUNITIES & GOVERNANCE
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Interactive Experience 02</span>
            <h2 className="text-headline-editorial text-white">
              Partners can contribute opportunities. They do not own the student&apos;s direction.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Every job, degree apprenticeship, work experience placement, and career event submitted by a partner passes through our 5-stage editorial and safeguarding pipeline before reaching student discovery feeds.
            </p>
          </div>

          <OpportunityGovernanceFlow />
        </div>
      </section>

      {/* ============================================================
          SECTION 10: PARTNER ACCESS & STUDENT PRIVACY
          Being a partner does not make an organisation part of a student's private Career OS.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Purpose-Based Access Architecture</span>
            <h2 className="text-headline-editorial text-white">
              Being a partner does not make an organisation part of a student’s private Career OS.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              This distinction is non-negotiable. Joining the Career OS partner ecosystem gives an organisation the ability to contribute opportunities—it does not grant access to student profiles, conversational transcripts, or private reflections.
            </p>
          </div>

          <PartnerAccessMatrix />
        </div>
      </section>

      {/* ============================================================
          SECTION 11: MINORS & PARTNER SAFEGUARDING
          Partner access to young people requires higher safeguards.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Youth Sanctuary &bull; Safeguarding Primacy</span>
            <h2 className="text-headline-editorial text-white">
              Partner access to young people requires higher safeguards.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is not a youth lead-generation platform. We enforce strict age-appropriate gates (16+ direct accounts, 13–15 institutional/guardian framework, &lt;13 strict institutional authorization only), prohibit unmoderated youth chat, and maintain immediate escalation to school safeguarding leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-rose-400 font-semibold block">
                01 &bull; Prohibited Contact
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                No Recruiter Sourcing
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Commercial recruiters cannot browse minor candidate directories or cold-contact students under 18.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                02 &bull; Institutional Routing
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                School Facilitation
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Work experience, employer visits, and school career fairs operate under school approval and visitor safeguarding protocols.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-[10px] font-mono uppercase text-purple-400 font-semibold block">
                03 &bull; Immediate Escalation
              </span>
              <h4 className="text-base font-serif text-white font-medium">
                Human DSL Primacy
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                If safety concerns arise, the system immediately pauses and provides direct contact to designated school safeguarding leads.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Read our comprehensive student safety architecture and statutory safeguarding controls register.
            </span>
            <Link
              href={ROUTES.SCHOOLS_STUDENT_SAFETY}
              className="font-semibold text-emerald-400 hover:text-white transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Student Safety &amp; Safeguarding</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12: PARTNER STANDARDS & QUALITY GOVERNANCE
          Access to the Career OS ecosystem should come with standards.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Ecosystem Code of Conduct</span>
            <h2 className="text-headline-editorial text-white">
              Access to the Career OS ecosystem should come with standards.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Every participating organisation agrees to abide by our 8-pillar partnership standard. Failure to maintain these standards results in immediate opportunity retraction and partner suspension.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono text-[#6BB8FF] uppercase font-bold block">01 &bull; Accuracy</span>
              <h4 className="font-semibold text-white">Truthful Information</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">Accurate job duties, realistic wage scales, and verified course prerequisites.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">02 &bull; Legality</span>
              <h4 className="font-semibold text-white">Lawful Operations</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">Compliance with employment standards, national minimum wage, and youth labour laws.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block">03 &bull; Non-Discrimination</span>
              <h4 className="font-semibold text-white">Equitable Access</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">Strict adherence to equal opportunity standards and barrier-free exploration.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">04 &bull; Transparency</span>
              <h4 className="font-semibold text-white">Clear Promotion</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">Paid event listings explicitly marked as sponsored; zero native deception.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13: 4 ILLUSTRATIVE PARTNERSHIP SCENARIOS
          What a partnership looks like in practice.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Applied Partnership Scenarios</span>
            <h2 className="text-headline-editorial text-white">
              What a Career OS partnership looks like in practice.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Examine 4 representative partnership models illustrating how diverse organisations contribute authentic value without compromising student autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold">Scenario 01 &bull; Local Employer</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative</span>
              </div>
              <h4 className="text-base font-serif text-white font-medium">Advanced Manufacturing Facility</h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Contributes Level 6 Degree Apprenticeship openings, hosts annual school factory tours, and provides CAD design workshop challenges. Students explore technical pathways with real salary data without commercial recruiter cold-calls.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold">Scenario 02 &bull; Community College</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative</span>
              </div>
              <h4 className="text-base font-serif text-white font-medium">Regional Vocational College</h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Integrates BTEC Higher National Diploma curricula and hands-on diagnostic workshop schedules. Career OS helps students compare vocational HNDs with 3-year university degrees side-by-side.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold">Scenario 03 &bull; Professional Body</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative</span>
              </div>
              <h4 className="text-base font-serif text-white font-medium">Chartered Engineering Institute</h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Supplies occupational competence standards and chartered registration progression roadmaps (CEng/IEng), demystifying long-term accreditation for aspiring engineers.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-amber-300 font-semibold">Scenario 04 &bull; Community Charity</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative</span>
              </div>
              <h4 className="text-base font-serif text-white font-medium">Social Mobility Foundation</h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Connects first-generation students to specialist bursaries and professional mentors, using Career Passport to verify community leadership achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14: 7-STEP PARTNERSHIP JOURNEY
          A serious partnership begins with fit, not a logo exchange.
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Structured Onboarding</span>
            <h2 className="text-headline-editorial text-white">
              A serious partnership begins with fit, not a logo exchange.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              We do not believe in superficial badge exchanges. Our 7-phase onboarding framework ensures every partnership delivers verifiable educational value and strictly adheres to youth safeguarding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-mono text-[#6BB8FF] font-bold block">01 &bull; Apply</span>
              <h4 className="font-semibold text-white">Enquiry Submission</h4>
              <p className="text-[var(--color-text-secondary)]">Organisation submits proposed contribution and entity credentials.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-mono text-purple-400 font-bold block">02 &bull; Understand</span>
              <h4 className="font-semibold text-white">Ethical Review</h4>
              <p className="text-[var(--color-text-secondary)]">Career OS audits purpose, audience, and youth safeguarding alignment.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-mono text-emerald-400 font-bold block">03 &bull; Standards</span>
              <h4 className="font-semibold text-white">Code Acceptance</h4>
              <p className="text-[var(--color-text-secondary)]">Formal agreement on data segregation and wage transparency.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-mono text-amber-400 font-bold block">04 &bull; Pilot &amp; Scale</span>
              <h4 className="font-semibold text-white">Controlled Rollout</h4>
              <p className="text-[var(--color-text-secondary)]">Targeted deployment across participating school cohorts before expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 15: PARTNER ENQUIRY FORM
          ============================================================ */}
      <section id="partner-enquiry-form" className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Partner Application</span>
            <h2 className="text-headline-editorial text-white">
              Apply to join the Career OS Partner Ecosystem.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Complete the application below to initiate partner review. Our team will evaluate your organisation&apos;s proposed contribution and schedule an exploratory briefing.
            </p>
          </div>

          <PartnerEnquiryForm />
        </div>
      </section>

      {/* ============================================================
          SECTION 16: FAQ
          28 Substantial Partner Questions
          ============================================================ */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Questions &amp; Answers</span>
            <h2 className="text-headline-editorial text-white">
              Frequently Asked Questions About Career OS Partnerships
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Detailed answers on partner eligibility, data boundaries, minor safeguarding, commercial promotion, and the application process.
            </p>
          </div>

          <PartnershipsFAQ />
        </div>
      </section>

      {/* ============================================================
          SECTION 17: FINAL CTA
          ============================================================ */}
      <section className="section-editorial">
        <div className="container-editorial space-y-16">
          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <span className="section-label">Connective Career Infrastructure</span>
            <h2 className="text-display-hero text-white">
              Build a bigger world of opportunity around every student.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is being designed to connect trusted education, employment, training and career organisations around the individual — while keeping privacy, safeguarding and career relevance separate from commercial influence.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#partner-enquiry-form" variant="primary" size="lg">
                Become a Career OS Partner
              </Button>
              <Button href={ROUTES.FOR_HIGH_SCHOOLS} variant="secondary" size="lg">
                Career OS for High Schools →
              </Button>
            </div>
          </div>

          {/* Institutional Navigation Links */}
          <div className="pt-12 border-t border-[var(--color-border-default)] flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-tertiary)]">
            <Link href={ROUTES.SCHOOLS_EDUCATORS} className="hover:text-white transition-colors">
              Counsellor &amp; Educator Tools →
            </Link>
            <Link href={ROUTES.SCHOOLS_OUTCOMES} className="hover:text-white transition-colors">
              School Outcomes &amp; Benchmark Alignment →
            </Link>
            <Link href={ROUTES.SCHOOLS_STUDENT_SAFETY} className="hover:text-white transition-colors">
              Student Safety &amp; Safeguarding →
            </Link>
            <Link href={ROUTES.SCHOOLS_PRIVACY} className="hover:text-white transition-colors">
              School Privacy Policy →
            </Link>
            <Link href={ROUTES.EVENTS} className="hover:text-white transition-colors">
              Career OS Events Platform →
            </Link>
            <Link href={ROUTES.STANDARDS_OPPORTUNITY_STANDARDS} className="hover:text-white transition-colors">
              Opportunity Standards →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
