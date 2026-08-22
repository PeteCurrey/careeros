import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  FileCheck,
  ShieldCheck,
  Award,
  ArrowRight,
  ChevronDown,
  Lock,
  Share2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Briefcase,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

import { HeroPassportInterface } from '@/components/marketing/career-passport/HeroPassportInterface';
import { ResumeVsPassportComparison } from '@/components/marketing/career-passport/ResumeVsPassportComparison';
import { PassportRecordExplorer } from '@/components/marketing/career-passport/PassportRecordExplorer';
import { VerificationJourneyInteractive } from '@/components/marketing/career-passport/VerificationJourneyInteractive';
import { CrossCareerEvidenceGrid } from '@/components/marketing/career-passport/CrossCareerEvidenceGrid';
import { SelectiveSharingSimulator } from '@/components/marketing/career-passport/SelectiveSharingSimulator';
import { MayaTechnicianPassportView } from '@/components/marketing/career-passport/MayaTechnicianPassportView';
import { TransferableEvidenceFlow } from '@/components/marketing/career-passport/TransferableEvidenceFlow';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';

export const metadata: Metadata = {
  title: 'Career Passport for Skills, Credentials & Professional Evidence | Career OS',
  description:
    'Build a Career Passport designed to bring together qualifications, skills, credentials and professional evidence with clear verification states and selective sharing.',
  alternates: {
    canonical: 'https://career-os.com/product/career-passport',
  },
  openGraph: {
    title: 'Career Passport for Skills, Credentials & Professional Evidence | Career OS',
    description:
      'Build a Career Passport designed to bring together qualifications, skills, credentials and professional evidence with clear verification states and selective sharing.',
    url: 'https://career-os.com/product/career-passport',
    siteName: 'Career OS',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CareerPassportPage() {
  const faqs = [
    {
      q: 'What is a Career Passport?',
      a: 'A Career Passport is a portable, user-owned professional record inside Career OS designed to bring together qualifications, skills, project artifacts, work experience, and achievements alongside clear indicators of what is self-declared, evidenced, or independently verified.',
    },
    {
      q: 'Is Career Passport the same as my résumé?',
      a: 'No. A résumé is an intentionally concise summary created for quick screening during job applications. A Career Passport is the comprehensive, verifiable supporting record behind your career that holds actual certificates, project deliverables, and provenance.',
    },
    {
      q: 'What can I put in my Career Passport?',
      a: 'You can store formal qualifications, professional licenses, technical certifications, project documentation, verified employment records, continuing professional development (CPD) logs, work samples, awards, and assessment results.',
    },
    {
      q: 'Is everything in a Career Passport independently verified?',
      a: 'No. Career OS explicitly avoids false certainty. Every item in your Passport displays its exact verification state—clearly distinguishing between self-declared entries, user-attached evidence, platform assessments, and direct issuer or employer confirmations.',
    },
    {
      q: 'What does "Self-Declared" mean?',
      a: 'Self-declared means the user entered the information themselves without attaching third-party documentation. It allows you to track all relevant experience while transparently communicating to reviewers that the item is an unverified candidate claim.',
    },
    {
      q: 'What counts as valid evidence?',
      a: 'Evidence can include scanned credential certificates, official transcripts, technical commissioning reports, design schematics, published research, code repositories, or letters of client commendation.',
    },
    {
      q: 'Who can verify a credential?',
      a: 'Credentials can be verified by accredited issuing bodies (such as universities, exam boards, or trade bodies), authorized third-party credential registries, or direct employer confirmation.',
    },
    {
      q: 'Can an employer verify work experience?',
      a: 'Yes. When an employer has an authorized organizational relationship with Career OS, they can verify role titles, dates of employment, and specific project delivery milestones for former or current team members.',
    },
    {
      q: 'What happens when a qualification or license expires?',
      a: 'Career OS automatically flags time-bounded credentials as "Expired" or "Renewal Due" once their validity period ends. The historical achievement remains on your record, but reviewers can see that active accreditation is no longer current.',
    },
    {
      q: 'Can verified information be revoked?',
      a: 'Yes. If an issuing body or licensing board revokes a credential (or if an employer withdraws a verification), the status is updated in the audit ledger, maintaining the integrity of the platform.',
    },
    {
      q: 'Can I dispute incorrect information?',
      a: 'Yes. If a credential status or institutional record is marked incorrectly, you can initiate a formal dispute workflow to provide corrective documentation.',
    },
    {
      q: 'Can employers see my entire Career Passport automatically?',
      a: 'No. Career OS uses strict, user-controlled selective sharing. You choose exactly which credentials, projects, and employment history items are packaged and shared for each specific job application.',
    },
    {
      q: 'Can I keep private notes and exploratory goals separate?',
      a: 'Yes. Private Career Twin context, compensation minimums, and AI Mentor conversations are kept strictly separated from your shared Passport packages.',
    },
    {
      q: 'What happens when I change jobs or employers?',
      a: 'Your Career Passport belongs to you, not your employer. When you change jobs, your verified credentials, historical artifacts, and lifelong learning records stay with you.',
    },
    {
      q: 'What happens when I graduate from school or university?',
      a: 'Your student portfolio, capstones, and qualifications transition seamlessly into your independent personal Career OS account so you never lose academic evidence.',
    },
    {
      q: 'Can I export my Career Passport?',
      a: 'Yes. You can export structured summaries and evidence packages in standard formats (such as PDF portfolios or structured data files) for external sharing.',
    },
    {
      q: 'How does Career Passport help when changing careers?',
      a: 'By documenting underlying project deliverables and technical competencies rather than just job titles, your Passport helps prove transferable capabilities to hiring managers in adjacent industries.',
    },
    {
      q: 'How does Career Passport work with Career Twin?',
      a: 'The Career Passport holds your verified evidence and artifacts. The Career Twin interprets that evidence to understand your overall capabilities and power AI Career Mentor recommendations.',
    },
    {
      q: 'Is Career OS free for individuals?',
      a: 'Yes. Creating and managing your personal Career Passport, storing evidence, and receiving career guidance is free for individuals.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* =================================================================== */}
      {/* SECTION 01 — HERO WITH BREATHTAKING CITY HORIZON                    */}
      {/* =================================================================== */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-16 lg:py-24">
        {/* Physical-Digital Credential Vault Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.product.careerPassport.src}
            alt={MEDIA_ASSETS.product.careerPassport.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />

          {/* Editorial Scrim: Charcoal Wash on Left for Ultra-Crisp Legibility + Open View of Horizon on Right */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, var(--color-surface-base) 0%, color-mix(in srgb, var(--color-surface-base) 96%, transparent) 38%, color-mix(in srgb, var(--color-surface-base) 88%, transparent) 55%, color-mix(in srgb, var(--color-surface-base) 42%, transparent) 78%, color-mix(in srgb, var(--color-surface-base) 18%, transparent) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, var(--color-surface-base) 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, var(--color-surface-base) 0%, transparent 100%)`,
            }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10 space-y-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Core Subsystem &bull; Career Passport
              </span>
            </div>

            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
              Don’t just say what you can do.{' '}
              <CareerGradientText variant="gold" className="italic font-normal block sm:inline">
                Carry the evidence.
              </CareerGradientText>
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career Passport is designed to bring qualifications, skills, projects, experience and
              supporting evidence into one professional record &mdash; with clear visibility into what is
              claimed, evidenced or independently verified.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start your Career OS
              </Button>
              <a
                href="#career-passport-visual"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-text-primary)] hover:text-white transition-colors px-4 py-3 border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-white/10 backdrop-blur-xs"
              >
                <span>See an example Passport</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-taupe-300)] pt-2">
              <span>&bull; Free for individuals</span>
              <span>&bull; User-controlled selective sharing</span>
              <span>&bull; Portable across employers</span>
            </div>
          </div>

          {/* Signature Visual Asset */}
          <div id="career-passport-visual" className="pt-6">
            <HeroPassportInterface />
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 02 — WHY A RÉSUMÉ ISN'T ENOUGH                              */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">THE EVIDENCE GAP</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              A résumé compresses your career. Evidence adds the detail back.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              A traditional résumé is intentionally concise—designed to be scanned in seconds by a recruiter.
              However, modern professional careers generate authentic evidence: certifications, technical project
              sign-offs, reports, code samples, and licenses that cannot fit onto two static pages.
            </p>
          </div>

          <ResumeVsPassportComparison />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 03 — WHAT COULD LIVE IN A CAREER PASSPORT?                  */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">EVIDENCE CATEGORIES</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Your career produces more evidence than fits on two pages.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Explore the 9 structured categories designed to store authentic proof across vocational,
              technical, academic, and professional careers.
            </p>
          </div>

          <PassportRecordExplorer />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 04 — CLAIMED IS NOT THE SAME AS VERIFIED                    */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">VERIFICATION TRANSPARENCY</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Evidence has a status.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Not every career claim means the same thing. Career OS implements explicit verification states
              so candidates and reviewers always know whether an item is self-declared, evidenced by uploaded
              artifacts, assessed, or verified by an issuing body or employer.
            </p>
          </div>

          <VerificationJourneyInteractive />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1 text-xs">
              <strong className="text-[var(--color-text-primary)] block">Self-Declared</strong>
              <span className="text-[var(--color-text-secondary)]">User provided data; transparently marked as an unverified candidate statement.</span>
            </div>
            <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1 text-xs">
              <strong className="text-[var(--color-text-primary)] block">Evidence Attached</strong>
              <span className="text-[var(--color-text-secondary)]">Supporting artifact attached (PDF, report, repo); viewable by authorized reviewers.</span>
            </div>
            <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1 text-xs">
              <strong className="text-[var(--color-text-primary)] block">Issuer Verified</strong>
              <span className="text-[var(--color-text-secondary)]">Confirmed directly by the issuing educational board, university, or trade body.</span>
            </div>
            <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1 text-xs">
              <strong className="text-[var(--color-text-primary)] block">Expired / Revoked</strong>
              <span className="text-[var(--color-text-secondary)]">Time-bounded licenses automatically update when renewal windows expire.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 05 — REAL EXAMPLES ACROSS DIFFERENT CAREERS                 */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">MULTIDISCIPLINARY REPRESENTATION</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Professional evidence looks different in different careers.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is built for the entire spectrum of work &mdash; from emergency services and skilled
              trades to healthcare, legal counsel, military logistics, and executive operations.
            </p>
          </div>

          <CrossCareerEvidenceGrid />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 06 — EVIDENCE WITHOUT EXPOSING EVERYTHING (SELECTIVE SHARING)*/}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">USER-CONTROLLED PRIVACY</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Proof doesn&apos;t mean publishing your whole career.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Having a rich Career Passport does not mean making everything public. With Career OS selective sharing,
              you choose exactly which credentials and project artifacts are packaged for a prospective employer while
              keeping private notes, exploratory goals, and compensation targets completely protected.
            </p>
          </div>

          <SelectiveSharingSimulator />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 07 — CAREER PASSPORT IN ACTION (MAYA CHEN)                  */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">PRACTICAL WORKED EXAMPLE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              What would this look like in the real world?
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              See how Maya Chen &mdash; an Automotive Diagnostics Specialist &mdash; uses her Career Passport to
              structure trade credentials, technical oscilloscope logs, and verified employer experience to target a Master
              EV Diagnostic role.
            </p>
          </div>

          <MayaTechnicianPassportView />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 08 — PASSPORT + CAREER TWIN SYNERGY                         */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">PLATFORM SYNERGY</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              The Passport shows the evidence. The Twin provides the context.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Your Career Passport stores the verified artifacts and credentials you carry. Your{' '}
              <Link href="/product/career-twin" className="text-emerald-400 font-semibold hover:underline">
                Career Twin
              </Link>{' '}
              interprets that evidence to understand your overall capability profile, allowing your{' '}
              <Link href="/product/ai-career-mentor" className="text-emerald-400 font-semibold hover:underline">
                AI Career Mentor
              </Link>{' '}
              to recommend high-leverage next moves.
            </p>
          </div>

          {/* Integrated Subsystem Architecture Flow */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch shadow-subtle text-xs">
            <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase block">
                01 &bull; CAREER PASSPORT
              </span>
              <strong className="font-serif font-bold text-sm text-[var(--color-text-primary)] block">
                Evidence &amp; Proof
              </strong>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Holds verified credentials, project artifacts, and employment confirmations.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-mono text-[10px] font-bold text-purple-400 uppercase block">
                02 &bull; CAREER TWIN
              </span>
              <strong className="font-serif font-bold text-sm text-[var(--color-text-primary)] block">
                Professional Context
              </strong>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Synthesizes underlying capability, active goals, and work preferences.
              </p>
            </div>

            <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-mono text-[10px] font-bold text-blue-400 uppercase block">
                03 &bull; AI CAREER MENTOR
              </span>
              <strong className="font-serif font-bold text-sm text-[var(--color-text-primary)] block">
                Actionable Guidance
              </strong>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Delivers persistent, evidence-backed advice on career next steps.
              </p>
            </div>

            <div className="p-5 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-300)] uppercase block">
                04 &bull; CAREER GRAPH
              </span>
              <strong className="font-serif font-bold text-sm text-white block">
                Market Possibility
              </strong>
              <p className="text-[11px] text-[var(--color-taupe-300)]">
                Maps emerging pathways where your verified evidence unlocks new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 09 — WHAT HAPPENS WHEN YOU MOVE? (PORTABILITY)              */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">PORTABILITY &amp; INDEPENDENCE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Your professional record shouldn&apos;t belong to one employer.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              When you change jobs, complete an apprenticeship, graduate from university, or relocate to a new city,
              your career history should stay with you. Career Passport is designed as a user-owned professional record
              independent of any single corporate HR system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                Job Transitions
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Leaving an employer does not erase your project deliverables, certifications, or verified achievements.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                Apprenticeships &amp; Trades
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Carry your vocational qualifications and workshop logs directly into journeyman and supervisor roles.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                Lifelong Learning
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Compound CPD courses, safety certificates, and new technical micro-credentials over decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 10 — FROM STUDENT TO PROFESSIONAL                           */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">LIFETIME EVOLUTION</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Start with what you&apos;ve built so far.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Your Career Passport starts with school projects, competitions, and early work experience &mdash;
              growing into formal qualifications, specialized certifications, and executive project evidence as your
              working life unfolds.
            </p>
          </div>

          {/* Illustrative Lifetime Evolution Timeline */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-300)] block">
              ILLUSTRATIVE PASSPORT TIMELINE &bull; CAREER PROGRESSION OVER TIME
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
                <span className="font-mono font-bold text-xs text-[var(--color-taupe-300)] block">AGE 16</span>
                <strong className="text-[var(--color-text-primary)] block">School STEM Project</strong>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Robotics capstone report attached.</p>
              </div>

              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
                <span className="font-mono font-bold text-xs text-[var(--color-taupe-300)] block">AGE 18</span>
                <strong className="text-[var(--color-text-primary)] block">Apprenticeship Log</strong>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Workshop practical hours confirmed.</p>
              </div>

              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
                <span className="font-mono font-bold text-xs text-emerald-400 block">AGE 21</span>
                <strong className="text-[var(--color-text-primary)] block">NVQ Level 3 Cert</strong>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Issuer verified credential token.</p>
              </div>

              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
                <span className="font-mono font-bold text-xs text-blue-400 block">AGE 24</span>
                <strong className="text-[var(--color-text-primary)] block">High-Voltage EV License</strong>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Specialist certification added.</p>
              </div>

              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
                <span className="font-mono font-bold text-xs text-purple-400 block">AGE 29</span>
                <strong className="text-[var(--color-text-primary)] block">Plant Retrofit Lead</strong>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Employer verified project sign-off.</p>
              </div>

              <div className="p-4 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs shadow-subtle">
                <span className="font-mono font-bold text-xs text-[var(--color-taupe-300)] block">AGE 35</span>
                <strong className="text-white block">Operations Director</strong>
                <p className="text-[11px] text-[var(--color-taupe-300)]">Executive leadership evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 11 — CAREER CHANGE (TRANSFERABLE EVIDENCE)                  */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">TRANSFERABLE PROOF</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Your old career may contain evidence for your next one.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              When pivoting to a new industry, résumés often struggle because past job titles look unrelated.
              Career Passport helps extract the underlying technical reports, leadership logs, and verified problem-solving
              records to prove transferable capabilities.
            </p>
          </div>

          <TransferableEvidenceFlow />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 12 — WHAT EMPLOYERS SEE                                     */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">EMPLOYER PERSPECTIVE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Better evidence. Still under your control.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Recruiters and hiring managers receive structured, verified evidence packages that accelerate screening
              and reduce qualification fraud &mdash; without invading your private career deliberations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                  What Employers Receive
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                <li>&bull; Verified credentials with direct issuing body confirmations.</li>
                <li>&bull; Attached work samples and technical project documentation.</li>
                <li>&bull; Verified employment dates and role responsibilities.</li>
              </ul>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                  What Remains Private
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                <li>&bull; Private AI Career Mentor coaching discussions and advice logs.</li>
                <li>&bull; Exploratory career change notes and target compensation minimums.</li>
                <li>&bull; Unrelated personal information or non-shared credentials.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 13 — WHAT VERIFICATION DOES NOT MEAN                        */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">REALISTIC BOUNDARIES</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Verified doesn&apos;t mean guaranteed.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS avoids turning verification into a false certainty engine. A verified credential confirms that
              a qualification was authentically issued to you &mdash; it does not replace the hiring interview or guarantee
              future job performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
              <strong className="text-[var(--color-text-primary)] block text-sm font-serif">
                Authenticity &ne; Suitability
              </strong>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                A verified degree or trade certificate proves historical completion, not necessarily cultural or team fit.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
              <strong className="text-[var(--color-text-primary)] block text-sm font-serif">
                Experience &ne; Future Success
              </strong>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Employer-verified role history confirms past employment milestones, but does not guarantee performance in a new context.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
              <strong className="text-[var(--color-text-primary)] block text-sm font-serif">
                No Automated Hiring
              </strong>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Career OS never uses automated bots to hire or reject candidates based solely on Passport scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 14 — PORTABILITY & OPEN STANDARDS DIRECTION                 */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">STANDARDS &amp; ARCHITECTURE</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Built with portability in mind.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS avoids locking your professional evidence into a proprietary silo. We are actively evaluating
              interoperable open credential standards (such as W3C Verifiable Credentials and Open Badges) as part of
              our long-term portability roadmap.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 text-xs">
            <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-300)] uppercase block">
              PORTABILITY PRINCIPLES
            </span>
            <p className="text-[var(--color-text-primary)] leading-relaxed">
              You retain the right to export your structured records, download your uploaded project artifacts, and
              share your verified credentials with any third party at any time.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 15 — SECURITY & INTEGRITY                                   */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">SECURITY &amp; AUDIT</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Professional evidence only works if people can trust the record.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS maintains strict cryptographic data encryption, rigorous Row-Level Security, and transparent
              audit trails so your evidence remains tamper-evident and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
              <strong className="text-[var(--color-text-primary)] block font-serif text-sm">
                Encrypted Vault Storage
              </strong>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                All uploaded diplomas, schematics, and work samples are encrypted in transit and at rest.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
              <strong className="text-[var(--color-text-primary)] block font-serif text-sm">
                Immutable Audit Trail
              </strong>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Verification status changes, expiry events, and access logs are recorded in a permanent audit ledger.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
              <strong className="text-[var(--color-text-primary)] block font-serif text-sm">
                Granular Access Grants
              </strong>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Revoke employer access to specific sharing packages at any time with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 16 — SUBSTANTIVE PRODUCT FAQ                                */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Questions about Career Passport.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Everything you need to know about credentials, evidence artifacts, verification states, and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 shadow-xs"
              >
                <h3 className="font-serif font-bold text-base text-[var(--color-text-primary)] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--color-taupe-300)] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FINAL CALL TO ACTION                                                */}
      {/* =================================================================== */}
      <section className="section-editorial bg-[var(--color-surface-raised)]">
        <div className="container-editorial">
          <div className="p-10 lg:p-16 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 shadow-editorial">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[var(--color-taupe-300)] uppercase tracking-wider block">
                CAREER OS &bull; CAREER PASSPORT
              </span>
              <h2 className="text-display-section font-serif font-normal text-white tracking-tight">
                Your career is more than a list of claims.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
                Build a professional record that can grow with your qualifications, experience, evidence and achievements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start your Career OS
              </Button>
              <Button href="/product/career-twin" variant="secondary" size="lg">
                Explore Career Twin &rarr;
              </Button>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-[var(--color-taupe-300)]">
              <span>&bull; Free for individuals</span>
              <span>&bull; User-controlled selective sharing</span>
              <span>&bull; Portable across employers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
