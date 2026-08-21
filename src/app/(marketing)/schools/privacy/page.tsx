import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  UserCheck,
  GraduationCap,
  Building2,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Layers,
  FileText,
  Clock,
  Scale,
  RefreshCw,
  FolderLock,
  Globe2,
  Workflow,
} from 'lucide-react';
import { SchoolPrivacyViewerInteractive } from '@/components/marketing/schools/SchoolPrivacyViewerInteractive';
import { LifeStagePrivacyInteractive } from '@/components/marketing/schools/LifeStagePrivacyInteractive';
import { SchoolPrivacyFaq } from '@/components/marketing/schools/SchoolPrivacyFaq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Data Privacy & School Access | Career OS',
  description:
    'Understand how Career OS separates private student career context from school, guardian, employer and public access through age-aware permissions, role-based controls and purpose-limited sharing.',
  alternates: {
    canonical: 'https://career-os.com/schools/privacy',
  },
  openGraph: {
    title: 'Student Data Privacy & School Access | Career OS',
    description:
      'Understand how Career OS separates private student career context from school, guardian, employer and public access through age-aware permissions, role-based controls and purpose-limited sharing.',
    url: 'https://career-os.com/schools/privacy',
    siteName: 'Career OS',
    type: 'website',
  },
};

export default function SchoolsPrivacyPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://career-os.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Schools',
        item: 'https://career-os.com/schools',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Privacy',
        item: 'https://career-os.com/schools/privacy',
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── SECTION 01: HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-[var(--color-border-default)] pt-20 pb-16 lg:py-24 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[var(--accent-blue-glow)] rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs font-mono text-[var(--accent-blue)]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>School &amp; Student Privacy Center</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
                  Privacy isn&apos;t one switch.
                  <span className="block text-[var(--color-text-secondary)] font-sans text-2xl sm:text-3xl lg:text-4xl mt-2 font-normal">
                    It depends on who is asking, why, and what information they actually need.
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Career OS is designed to separate private career context from institutional, employer and public access — using account relationships, permissions, roles and purpose rather than assuming everyone connected to a student should see everything.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button href="#privacy-viewer" variant="primary" size="lg" className="justify-center">
                  Explore who can see what &darr;
                </Button>
                <Button href={ROUTES.LEGAL_PRIVACY} variant="secondary" size="lg" className="justify-center">
                  Read the Privacy Policy &rarr;
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--color-text-tertiary)] font-mono">
                <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                  <Lock className="w-4 h-4 text-emerald-400" /> Purpose-Based Access Boundaries
                </span>
                <Link href={ROUTES.SCHOOLS_STUDENT_SAFETY} className="text-[var(--accent-blue)] hover:underline">
                  Review Student Safety &amp; Safeguarding &rarr;
                </Link>
              </div>
            </div>

            {/* Hero Media Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md shadow-2xl group">
                <Image
                  src="/media/schools/school_privacy_architecture_hero.jpg"
                  alt="Education technology governance briefing with school data protection officers examining structured data boundaries between Student, AI Mentor, Counselor, Administrator, Guardian, and Employer layers."
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-dark-deep)]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[var(--color-surface-base)]/75 backdrop-blur-md border border-[var(--color-border-default)] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-semibold">
                      Multi-Layer Access Governance Architecture
                    </span>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Student Self &bull; AI Mentor &bull; Counselor &bull; Admin &bull; Guardian &bull; Employer
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: THE MOST IMPORTANT PRIVACY DISTINCTION ──────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Core Architectural Principle</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              What Career OS knows and what another person can see are different things.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              A student may tell their AI Career Mentor: <em>&ldquo;I think I want to leave the course I&apos;m currently on.&rdquo;</em> Career OS processes that context to provide thoughtful, non-judgmental guidance. That does NOT automatically mean their employer, classroom teachers, school administrators, or the public internet can view it.
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border-l-2 border-[var(--accent-blue)] text-sm text-white max-w-3xl italic">
            &ldquo;Career context can be deeply useful without becoming universally visible.&rdquo;
          </div>
        </div>
      </section>

      {/* ── SECTION 03: WHAT TYPES OF INFORMATION EXIST? ────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Information Taxonomy</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Not all Career OS information has the same purpose.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS separates data into distinct functional categories, ensuring each is governed by specific retention, encryption, and disclosure rules:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Category 01</span>
              <h4 className="font-semibold text-white text-sm">Identity &amp; Account Context</h4>
              <p className="text-[var(--color-text-secondary)]">Name, verified age tier, institutional school affiliation, and parent linkage where required by age policies.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Category 02</span>
              <h4 className="font-semibold text-white text-sm">Career Twin Exploration</h4>
              <p className="text-[var(--color-text-secondary)]">Explored industries, interests, subjects, self-assessed capabilities, and long-term career aspirations.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Category 03</span>
              <h4 className="font-semibold text-white text-sm">AI Career Mentor Context</h4>
              <p className="text-[var(--color-text-secondary)]">Confidential advisory dialogue, exploratory reasoning prompts, and developmental guidance reflections.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">Category 04</span>
              <h4 className="font-semibold text-white text-sm">Career Passport Evidence</h4>
              <p className="text-[var(--color-text-secondary)]">Verified qualifications, coursework deliverables, competition certificates, and project artifacts.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-blue-400 uppercase font-bold">Category 05</span>
              <h4 className="font-semibold text-white text-sm">School Program Activity</h4>
              <p className="text-[var(--color-text-secondary)]">Classroom career modules, guidance appointment bookings, and agreed school advisory action plans.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-300 uppercase font-bold">Category 06</span>
              <h4 className="font-semibold text-white text-sm">Technical &amp; Security Audits</h4>
              <p className="text-[var(--color-text-secondary)]">Immutable consent timestamp logs, access grant records, session security, and policy version receipts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: PRIMARY INTERACTIVE: WHO CAN SEE WHAT? ──────── */}
      <section id="privacy-viewer" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Interactive Access Simulator</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Change the viewer. Watch the information change.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Inspect how the exact same student profile is rendered differently depending on the relationship, role, and authorized purpose of the viewer:
            </p>
          </div>

          <SchoolPrivacyViewerInteractive />
        </div>
      </section>

      {/* ── SECTION 05: SCHOOL ACCESS & ROLE DIFFERENCES ────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Role-Based Access Control</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Attending a school does not mean the school sees everything.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Institutional access follows strict role boundaries. A classroom teacher, a licensed careers adviser, a safeguarding lead, and an IT administrator each receive different, purpose-limited views.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Career Counselor</span>
              <h4 className="font-semibold text-white text-sm">Guidance &amp; Action Plans</h4>
              <p className="text-[var(--color-text-secondary)]">Views agreed career pathways, verified academic entry grades, and guidance appointment notes to assist student planning.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Classroom Teacher</span>
              <h4 className="font-semibold text-white text-sm">Module Completion</h4>
              <p className="text-[var(--color-text-secondary)]">Views classroom workshop progress and coursework module deliverables without access to individual private career reflections.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Safeguarding Lead</span>
              <h4 className="font-semibold text-white text-sm">Emergency Escalation Only</h4>
              <p className="text-[var(--color-text-secondary)]">Receives purpose-limited alerts solely when emergency safety filters identify severe harm risks, with complete audit logging.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">IT Administrator</span>
              <h4 className="font-semibold text-white text-sm">Tenancy &amp; Roster Sync</h4>
              <p className="text-[var(--color-text-secondary)]">Manages district SSO integrations and user provisioning with zero access to student guidance logs or career dossiers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: STUDENT PRIVACY VS SAFEGUARDING ─────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Safety &amp; Privacy Balance</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Privacy does not mean the platform ignores genuine safety concerns.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS does not conduct routine surveillance on students. However, if automated safety filters identify an imminent risk of severe harm, violence, or abuse, a purpose-limited escalation alert is delivered to the designated safeguarding officer.
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-emerald-500/30 space-y-3 text-xs">
            <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold block">
              Safeguarding Governance Principles
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white">
              <div>&bull; <strong>Minimum Disclosure:</strong> Only context necessary to address the safety risk is transferred.</div>
              <div>&bull; <strong>Human Review:</strong> Escalations are reviewed by trained designated safeguarding leads.</div>
              <div>&bull; <strong>Audit Logging:</strong> Every emergency escalation produces an immutable compliance log.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: GUARDIANS & PARENTS ─────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Family Engagement</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Guardian involvement depends on the relationship, age and context.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We do not claim parents see everything, nor that parents see nothing. For students aged 13–15, linked guardian accounts provide authorization and high-level progress tracking while preserving a confidential student reflection space.
            </p>
          </div>

          <div className="pt-2">
            <Link href={ROUTES.LEGAL_PARENT_GUARDIAN} className="text-xs font-mono text-[var(--accent-blue)] hover:underline">
              Review Parent &amp; Guardian Notice &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: EMPLOYERS & RECRUITERS ───────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Employer Boundary</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Employer access should begin with professional relevance — not private student context.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Employers never receive open access to student directories, Mentor chat logs, or exploratory history. When an eligible student applies to an apprenticeship or internship, they explicitly approve the tailored evidence dossier disclosed.
            </p>
          </div>

          <blockquote className="p-4 rounded bg-[var(--color-surface-base)] border-l-2 border-emerald-400 text-xs italic text-white max-w-2xl">
            &ldquo;Career discovery does not require turning students into an open employer database.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── SECTION 09: CAREER PASSPORT VS EDUCATION RECORDS ─────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Record Custody Distinction</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              A student-created professional record and a school-controlled education record have different rules.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We distinguish personal, student-created Career Passport artifacts from official school district records. School attendance, disciplinary files, and state transcripts remain governed by educational privacy statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Personal Career Passport</span>
              <p className="text-[var(--color-text-secondary)]">Student-custodied project portfolios, awarded skill certificates, and extracurricular accomplishments portable across a lifetime.</p>
            </div>
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase font-bold">School Institutional Records</span>
              <p className="text-[var(--color-text-secondary)]">District-held official transcripts, special education IEP files, and attendance rosters governed by statutory school retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: AGE TRANSITIONS & LIFE-STAGE PRIVACY ─────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Life-Stage Legal Transitions</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Privacy relationships change as a young person gets older.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Explore how direct account eligibility, guardian involvement, legal majority, and FERPA transfer rights transition across distinct life stages:
            </p>
          </div>

          <LifeStagePrivacyInteractive />
        </div>
      </section>

      {/* ── SECTION 11: LEAVING SCHOOL & CONTINUITY ──────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Alumni &amp; Graduation Continuity</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Graduation should change the institution relationship — not erase the person&apos;s career history.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              When a student graduates or moves districts, their personal Career Twin and Career Passport continue seamlessly, while institutional school records remain archived under district retention policies.
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] space-y-2">
            <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold block">
              Continuous Individual Ownership
            </span>
            <p className="leading-relaxed">
              Your Career OS account is registered to your personal identity. You carry your verified qualifications, project evidence, and AI Mentor context into higher education, apprenticeships, and your first professional roles.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: DATA MINIMISATION ───────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Data Restraint</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Career OS should not collect information simply because it might someday be useful.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We practice strict data minimization. Career OS never collects political opinions, religious beliefs, biometric profiles, medical records, or precise GPS telemetry.
            </p>
          </div>

          <blockquote className="p-4 rounded bg-[var(--color-surface-base)] border-l-2 border-purple-400 text-xs italic text-white max-w-2xl">
            &ldquo;More personal data is not automatically better personalization.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── SECTION 13: AI & STUDENT DATA ────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">AI Data Isolation</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Using AI does not remove the need for data boundaries.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Prompt context sent to AI models is strictly minimized for the specific inquiry. AI provider agreements enforce zero-training and confidential isolation, preventing student prompts from training public foundation models.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[var(--accent-blue)]">
            <Link href={ROUTES.LEGAL_AI_TERMS} className="hover:underline">
              AI Terms of Service &rarr;
            </Link>
            <Link href={ROUTES.TRUST_AI_TRANSPARENCY} className="hover:underline">
              AI Transparency Governance &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: CONSENT & AUTHORIZATION ──────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Consent Architecture</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Consent is not a checkbox that lasts forever.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS records consent as an immutable, timestamped event linked to explicit purposes, policy versions, and authorized individuals — allowing modification or withdrawal at any time.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: RETENTION & DELETION ─────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Retention Lifecycle</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Different records require different retention rules.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              User-created Career Twins remain active for lifelong use, while unverified or inactive trial accounts are purged on a structured schedule. Statutory institutional school records remain archived as required by district contracts.
            </p>
          </div>

          <div className="pt-2">
            <Link href={ROUTES.LEGAL_DATA_RETENTION} className="text-xs font-mono text-[var(--accent-blue)] hover:underline">
              Review Data Retention Schedule &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: CORRECTION & CHALLENGE ───────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Student Rights</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Students should be able to challenge incorrect career information.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Students have the right to edit self-declared profile attributes, dispute incorrect credential verifications, and request correction of inaccurate institutional data.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 17: AUDITABILITY ─────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Compliance Ledger</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Important access and privacy actions should leave a record.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Access grants, consent events, credential verifications, and safeguarding escalations generate tamper-evident audit logs to support institutional compliance reviews.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 18: DATA LOCATION & PROCUREMENT ─────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Procurement &amp; Security</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Schools should be able to understand where data goes.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              District procurement and IT security teams can inspect our full Data Processing Addenda (DPA), subprocessor registers, and infrastructure controls in our Trust Center.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <Link href={ROUTES.TRUST_SECURITY} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Security Whitepaper</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Encryption &amp; tenancy</span>
            </Link>
            <Link href={ROUTES.LEGAL_DATA_PROCESSING} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Data Processing (DPA)</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Institutional terms</span>
            </Link>
            <Link href={ROUTES.LEGAL_SUBPROCESSORS} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Subprocessor List</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Infrastructure partners</span>
            </Link>
            <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Regulatory Alignment</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">FERPA / COPPA / GDPR</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 19: CURRENT VS PLANNED PRIVACY CONTROLS ─────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Product Status</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Privacy promises should reflect the product that actually exists.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We transparently distinguish implemented architectural controls from in-progress governance capabilities:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-emerald-500/30 space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Implemented</span>
              <h4 className="font-semibold text-white text-sm">Core Privacy Boundaries</h4>
              <ul className="space-y-1 text-[var(--color-text-secondary)]">
                <li>&bull; Strict age gating (16+ direct, 13–15 supported)</li>
                <li>&bull; Private AI Career Mentor reflection space</li>
                <li>&bull; Zero employer access to exploratory history</li>
                <li>&bull; Inactivity account purge automation</li>
              </ul>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">In Progress</span>
              <h4 className="font-semibold text-white text-sm">Enhanced School Portals</h4>
              <ul className="space-y-1 text-[var(--color-text-secondary)]">
                <li>&bull; Counselor cohort appointment dashboard</li>
                <li>&bull; Dynamic consent history audit ledger</li>
                <li>&bull; School-to-alumni graduation transition flow</li>
              </ul>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-purple-500/30 space-y-2">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Planned Roadmap</span>
              <h4 className="font-semibold text-white text-sm">Advanced Verification</h4>
              <ul className="space-y-1 text-[var(--color-text-secondary)]">
                <li>&bull; Decentralized verifiable credential standard</li>
                <li>&bull; Automated multi-district DPA compliance API</li>
                <li>&bull; Advanced cross-border data residency routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 20: INSTITUTIONAL PRIVACY REVIEW CHECKLIST ──────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">DPO Review Pack</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Give your privacy team a clear review path.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Key governance questions answered for Data Protection Officers and school district review boards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">Data Controller / Processor Roles</span>
              <p className="text-[var(--color-text-secondary)]">School district acts as Data Controller for institutional records; Career OS acts as Data Processor.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">AI Provider Contracts</span>
              <p className="text-[var(--color-text-secondary)]">Enterprise zero-training terms with SOC 2 Type II certified cloud AI infrastructure providers.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">FERPA &amp; COPPA Alignment</span>
              <p className="text-[var(--color-text-secondary)]">Operates under FERPA school-official exemption with zero commercial profiling of minors.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">Safeguarding Incident Protocol</span>
              <p className="text-[var(--color-text-secondary)]">Documented emergency escalation path directly to the school&apos;s Designated Safeguarding Lead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 21: COMPREHENSIVE FAQ ───────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Questions Answered</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Frequently Asked Questions
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Detailed answers on student privacy, role-based access, guardian oversight, and AI data boundaries.
            </p>
          </div>

          <SchoolPrivacyFaq />
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] relative overflow-hidden">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center space-y-8 py-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-text-primary)] font-normal">
              Privacy should be understandable before a school deploys the platform.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Career OS is designed so institutions, students, and families can clearly understand what information exists, why it is used, and which relationships can access it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href={ROUTES.LEGAL_PRIVACY} variant="primary" size="lg" className="w-full sm:w-auto px-8">
                Read the Privacy Policy &rarr;
              </Button>
              <Button href={ROUTES.FOR_HIGH_SCHOOLS} variant="secondary" size="lg" className="w-full sm:w-auto">
                Become a Partner School
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
