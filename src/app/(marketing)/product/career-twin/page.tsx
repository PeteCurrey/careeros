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
  ArrowRight,
  Shield,
  Lock,
  Cpu,
  Layers,
  FileCheck,
  Compass,
  Sparkles,
  Network,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  UserCheck,
  RefreshCw,
  Award,
  Sliders,
  Share2,
} from 'lucide-react';

import { HeroTwinInterface } from '@/components/marketing/career-twin/HeroTwinInterface';
import { ResumeVsTwinComparison } from '@/components/marketing/career-twin/ResumeVsTwinComparison';
import { TwinLayersGraphic } from '@/components/marketing/career-twin/TwinLayersGraphic';
import { VerificationWorkflowStory } from '@/components/marketing/career-twin/VerificationWorkflowStory';
import { TechnicianScenarioInteractive } from '@/components/marketing/career-twin/TechnicianScenarioInteractive';
import { TransferableSkillsGraph } from '@/components/marketing/career-twin/TransferableSkillsGraph';
import { TwinPrivacySimulator } from '@/components/marketing/career-twin/TwinPrivacySimulator';

export const metadata: Metadata = {
  title: 'Career Twin: Build an Evolving Professional Profile | Career OS',
  description:
    'Discover Career Twin — a structured Career OS profile designed to connect your skills, experience, evidence, goals and possible career directions as your working life evolves.',
  alternates: {
    canonical: 'https://career-os.com/product/career-twin',
  },
  openGraph: {
    title: 'Career Twin: Build an Evolving Professional Profile | Career OS',
    description:
      'Discover Career Twin — a structured Career OS profile designed to connect your skills, experience, evidence, goals and possible career directions as your working life evolves.',
    url: 'https://career-os.com/product/career-twin',
    siteName: 'Career OS',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CareerTwinPage() {
  const faqs = [
    {
      q: 'What is a Career Twin?',
      a: 'A Career Twin is a living, structured representation of your professional context within Career OS. Unlike a flat two-page résumé, it brings together your skills, verified evidence, learning goals, work preferences, and long-term career directions so Career OS can help you make better decisions over time.',
    },
    {
      q: 'Is a Career Twin the same as a résumé?',
      a: 'No. A résumé is a short, static historical document designed for a specific job application. A Career Twin is a multi-dimensional, evolving model designed for lifelong career guidance, evidence accumulation, and trajectory exploration.',
    },
    {
      q: 'What information goes into a Career Twin?',
      a: 'Your Twin can hold historical experience, current capabilities, project evidence, formal qualifications, active learning goals, professional interests, work preferences (such as location or shift requirements), and target career directions.',
    },
    {
      q: 'Do I have to fill everything in at once?',
      a: 'No. You start with what you choose to share today. Your Career Twin is designed to compound gradually as you complete projects, earn credentials, or update your career goals.',
    },
    {
      q: 'Does Career OS verify everything in my Career Twin?',
      a: 'No. Career OS explicitly distinguishes between self-declared information, user-attached evidence, platform-assessed capabilities, and third-party or issuer-verified credentials.',
    },
    {
      q: 'What is the difference between evidence and verification?',
      a: 'Evidence is the supporting material you attach (such as a project report, code repository, or diploma PDF). Verification occurs when an independent third party, issuer, or employer confirms the authenticity of that item.',
    },
    {
      q: 'Can my current employer see my Career Twin?',
      a: 'No. Career OS is designed with strict field-level privacy controls. Your employer never automatically receives your private Career Twin context, salary targets, or exploratory career-change goals.',
    },
    {
      q: 'Can my school or university see my Career Twin?',
      a: 'Educational institutions only have access to institutionally authorized records or specific project evaluations under FERPA/school agreements. Your personal Career Twin context remains under your private control.',
    },
    {
      q: 'Can I make specific information private?',
      a: 'Yes. You control field-level permissions for every item. You can set fields to be visible only to you, visible to your AI Career Mentor, visible to verified employers, or public.',
    },
    {
      q: 'Can I correct or edit information in my Twin?',
      a: 'Yes. You can edit user-provided details, challenge inaccurate inferences, update stale preferences, or archive outdated achievements at any time.',
    },
    {
      q: 'Does Career OS infer things about me?',
      a: 'Career OS may generate derived insights (such as recommending adjacent skill paths based on your evidence). Derived context is always clearly labeled as an inference and can be reviewed or overridden by you.',
    },
    {
      q: 'Can I delete my Career Twin information?',
      a: 'Yes. You can remove user-provided data and request profile deletion, subject only to applicable legal or transactional audit retention requirements.',
    },
    {
      q: 'What happens when I change jobs?',
      a: 'Your Career Twin is user-owned and persistent. When you switch employers, your verified skills, project evidence, and lifelong learning context remain intact so you never start from zero.',
    },
    {
      q: 'What happens when I graduate from school or university?',
      a: 'Your personal Career OS record seamlessly transitions into your independent professional life, preserving your academic capstones and project evidence.',
    },
    {
      q: 'Can a Career Twin help me change careers entirely?',
      a: 'Yes. By mapping your underlying capabilities rather than just past job titles, your Career Twin identifies transferable strengths and pinpoints the exact bridge skills needed to enter an adjacent industry without starting over.',
    },
    {
      q: 'How does the Twin work with the AI Career Mentor?',
      a: 'The Career Twin holds your structured context. The AI Career Mentor reads that context to provide tailored advice, spot capability gaps, and suggest high-leverage next actions.',
    },
    {
      q: 'Is Career OS free for individuals?',
      a: 'Yes. Career OS is free for individuals to build their Career Twin, store verified evidence, and receive personal career guidance.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)] text-[var(--color-charcoal-deep)]">
      {/* =================================================================== */}
      {/* SECTION 01 — HERO WITH BREATHTAKING CITY HORIZON                    */}
      {/* =================================================================== */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-ivory-base)] py-16 lg:py-24">
        {/* Breathtaking City & Horizon Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.hero.cityHorizon.src}
            alt={MEDIA_ASSETS.hero.cityHorizon.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Editorial Scrim: Ivory Wash on Left for Ultra-Crisp Legibility + Open View of Horizon on Right */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #F7F5EC 0%, rgba(247, 245, 236, 0.96) 38%, rgba(247, 245, 236, 0.88) 55%, rgba(247, 245, 236, 0.42) 78%, rgba(247, 245, 236, 0.18) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #F7F5EC 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, #F7F5EC 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="container-editorial relative z-10 space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="section-label">CORE SUBSYSTEM &bull; CAREER TWIN</span>

            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-charcoal-deep)]">
              Your résumé shows where you’ve been.{' '}
              <span className="italic font-normal block sm:inline">
                Your Career Twin helps reveal where you could go.
              </span>
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career Twin brings together the professional context you choose to build—skills,
              experience, evidence, goals, qualifications and direction—so Career OS can help you make
              better decisions over time.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start building your Career OS
              </Button>
              <a
                href="#career-twin-visual"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-charcoal-deep)] hover:text-[var(--color-taupe-700)] transition-colors px-4 py-3 border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-white/70 backdrop-blur-xs"
              >
                <span>See a Career Twin in action</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-taupe-700)] pt-2">
              <span>&bull; Free for individuals</span>
              <span>&bull; User-controlled privacy</span>
              <span>&bull; Compounding lifetime context</span>
            </div>
          </div>

          {/* Signature Visual Asset */}
          <div id="career-twin-visual" className="pt-6">
            <HeroTwinInterface />
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 02 — RÉSUMÉ VS CAREER TWIN                                 */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="FORMAT PARADIGM SHIFT"
            heading="A résumé was designed for an application. Your career is bigger than an application."
            description="A traditional résumé summarizes selected historical facts for paper-era recruitment. A Career Twin creates living, structured context for ongoing professional growth."
          />

          <ResumeVsTwinComparison />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 03 — WHAT CAN A CAREER TWIN UNDERSTAND?                    */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="10 CONCEPTUAL DIMENSIONS"
            heading="Careers are made from more than job titles."
            description="Explore the multi-dimensional facets that make up a person’s complete professional context in Career OS."
          />

          <TwinLayersGraphic />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 04 — WHERE THE INFORMATION COMES FROM                      */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="PROVENANCE & DATA SOURCES"
            heading="Context is useful only if you know where it came from."
            description="Career OS clearly categorizes data sources so recommendations and evidence remain fully transparent and trustworthy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider block">
                01 &bull; YOU PROVIDE
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Self-Declared Context
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Information provided directly by you—including career goals, personal work preferences, intrinsic interests, work history entries, and self-described skills.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-blue-800 uppercase tracking-wider block">
                02 &bull; EVIDENCE YOU ADD
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Project Vault Artifacts
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Tangible work products attached to your Passport—such as code repositories, CAD designs, SOP documentation, audited capstones, and project write-ups.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                03 &bull; VERIFIED SOURCES
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Independent Third Parties
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Confirmed data from official credential registries, education providers, trade licensing boards, or verified employer integrations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-mono text-xs font-bold text-purple-800 uppercase tracking-wider block">
                04 &bull; DERIVED INSIGHTS
              </span>
              <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                Career OS Derived Context
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Inferred skill relationships or market recommendations generated by Career OS algorithms. Always clearly distinguished from verified facts and editable by you.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider block">
                05 &bull; CONNECTED SERVICES
              </span>
              <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                Authorized Platform Integrations
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Future third-party integrations explicitly authorized by you. Career OS never accesses external accounts without your explicit permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 05 — CLAIMED, EVIDENCED AND VERIFIED                      */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="VERIFICATION PARITY MODEL"
            heading="Not every career claim means the same thing."
            description="Career OS uses explicit verification states so employers and verifiers understand the exact level of proof behind every item."
          />

          <VerificationWorkflowStory />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 06 — CAREER TWIN IN ACTION (MECHANICAL TECHNICIAN WORKED EXAMPLE) */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="PRACTICAL WORKED SCENARIO"
            heading="What changes when Career OS can see the bigger picture?"
            description="See how Alex—a Mechanical Maintenance Technician—uses a single Career Twin to model 4 distinct future directions."
          />

          <TechnicianScenarioInteractive />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 07 — THE TWIN CHANGES AS YOUR CAREER CHANGES               */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="LIFETIME CONTINUITY"
            heading="Your career isn’t static. Your Career Twin shouldn’t be either."
            description="Your professional context evolves through milestones, promotions, training, and career pivots without resetting your history."
          />

          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
              ILLUSTRATIVE CAREER TIMELINE EVOLUTION
            </span>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-xs relative">
              <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-amber-800">AGE 17</span>
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">Student</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)]">STEM subjects & micro-projects logged.</p>
              </div>

              <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-blue-800">AGE 19</span>
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">Apprentice</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Trade coursework & logbook evidence.</p>
              </div>

              <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-emerald-800">AGE 23</span>
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">Technician</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)]">NVQ Level 3 verified; plant shut-downs.</p>
              </div>

              <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-purple-800">AGE 28</span>
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">Supervisor</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Crew leadership & safety audit proof.</p>
              </div>

              <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-indigo-800">AGE 34</span>
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">Manager</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)]">OPEX budget & reliability engineering.</p>
              </div>

              <div className="p-4 bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-amber-300">AGE 41</span>
                <h4 className="font-bold text-xs text-[var(--color-ivory-base)]">Founder</h4>
                <p className="text-[11px] text-[var(--color-taupe-300)]">Engineering services firm launched.</p>
              </div>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] italic border-t border-[var(--color-border-subtle)] pt-4">
              Illustrative sequence—one of many possible career timelines. Career OS supports linear progression, rapid pivots, re-entry after career breaks, and entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 08 — CAREER CHANGE WITHOUT STARTING FROM ZERO             */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="TRANSFERABLE CAPABILITY PIPELINE"
            heading="Changing careers doesn’t erase everything you’ve already built."
            description="When you switch industries or roles, your underlying competencies carry forward. Career OS identifies transferable strengths so you don’t have to start at entry level."
          />

          <TransferableSkillsGraph />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 09 — CAREER TWIN + CAREER MENTOR                           */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-label">SYSTEM SYNERGY</span>
              <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
                The Twin holds context. The Mentor helps you use it.
              </h2>
              <p className="text-body text-[var(--color-text-secondary)] leading-relaxed">
                Your Career Twin acts as the persistent memory layer behind Career OS. When you speak
                with your AI Career Mentor, it doesn’t ask basic background questions over again—it
                reads your verified evidence, active learning goals, and physical constraints to deliver
                actionable guidance immediately.
              </p>
              <div className="pt-2">
                <Link
                  href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-charcoal-deep)] hover:text-[var(--color-taupe-700)] transition-colors underline underline-offset-4"
                >
                  <span>Meet the AI Career Mentor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 shadow-subtle">
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                <span className="font-mono text-xs font-bold text-purple-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  MENTOR RECOMMENDATION RATIONALE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-50 text-purple-800 rounded border border-purple-200">
                  Twin-Informed Output
                </span>
              </div>
              <p className="text-xs text-[var(--color-charcoal-deep)] leading-relaxed font-serif font-bold text-sm">
                “Based on your Career Twin, you already have 5 years of diagnostics proof. You don’t need another technical certificate first. The larger gap for senior roles is leadership evidence.”
              </p>
              <p className="text-[11px] text-[var(--color-text-secondary)] font-mono">
                Source Context: 18 Skills in Twin &bull; 14 Passport Artifacts &bull; Goal: Automation Leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 10 — CAREER TWIN + PASSPORT + GRAPH MAP                    */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="PLATFORM INTEGRATION MAP"
            heading="One professional context. Different jobs to do."
            description="Understand how the core subsystems of Career OS work together to support your career lifetime."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[var(--color-surface-raised)] border-2 border-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold text-purple-800 uppercase tracking-wider block">
                UNDERSTANDING
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Career Twin
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Holds your living professional context, capabilities, proof, and private direction.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--color-surface-warm)] text-[var(--color-taupe-800)] flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                EVIDENCE & PORTABILITY
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Career Passport
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Stores your verified artifacts and portable credentials for sharing.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--color-surface-warm)] text-[var(--color-taupe-800)] flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                POSSIBILITY
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Career Graph
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Maps regional market demand, skill relationships, and adjacent career routes.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--color-surface-warm)] text-[var(--color-taupe-800)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <span className="font-mono text-[10px] font-bold text-blue-800 uppercase tracking-wider block">
                ACTION
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                AI Career Mentor
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Interprets your context and helps you take the next high-leverage move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 11 — PRIVACY: ONE TWIN, DIFFERENT VIEWS                   */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="GRANULAR FIELD-LEVEL PRIVACY"
            heading="What Career OS knows does not need to become what everyone sees."
            description="Your Twin holds private ambitions and self-assessments that remain completely hidden from employers until you choose to share."
          />

          <TwinPrivacySimulator />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 12 — STUDENT TO PROFESSIONAL CONTINUITY                    */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="section-label">LIFELONG PORTABILITY</span>
              <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
                Your professional record shouldn’t disappear at graduation.
              </h2>
              <p className="text-body text-[var(--color-text-secondary)] leading-relaxed">
                When students graduate or leave an educational institution, their school-issued email
                often expires—wiping out years of project records. Career OS is designed so that
                user-created Career Twin context and verified Passport evidence transition into an
                independent, personal account seamlessly.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono">
                <Link
                  href={ROUTES.REGULATORY_STUDENT_PRIVACY}
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Student Privacy Policy &rarr;
                </Link>
                <Link
                  href={ROUTES.PRODUCT_CAREER_PASSPORT}
                  className="text-[var(--color-charcoal-deep)] font-bold hover:underline"
                >
                  Explore Career Passport &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider block">
                INSTITUTIONAL RECORD SEPARATION
              </span>
              <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                User-Owned Material vs School Records
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Official school records (such as transcripts) remain governed by institutional FERPA agreements, while user-created capstones and personal Twin profiles remain under user ownership and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 13 — USER CONTROL & CORRECTIONS                             */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="TRANSPARENCY & CONTROL"
            heading="Your Career Twin should be correctable."
            description="Free for individuals. Built around user control, privacy and portability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                Edit & Update
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Update work preferences, salary expectations, or new skill achievements whenever your circumstances change.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                Challenge Inferences
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Derived insights or algorithmic recommendations can be reviewed, edited, or dismissed directly by you.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                Revoke & Delete
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Revoke employer access instantly and request profile data deletion subject only to statutory retention laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 14 — WHAT THE CAREER TWIN IS NOT                            */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="OPERATIONAL BOUNDARIES"
            heading="A Career Twin has boundaries."
            description="To maintain trust and ethics, Career OS enforces strict product boundaries around what a Career Twin is not."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Not Your Entire Identity',
                desc: 'It is a model of your professional skills and goals—not a measurement of your human worth.',
              },
              {
                title: 'Not a Psychological Replica',
                desc: 'We do not build personality profiles, emotional models, or psychological predictions.',
              },
              {
                title: 'Not Employer Surveillance',
                desc: 'Employers cannot monitor your ongoing development or private mentor conversations.',
              },
              {
                title: 'Not an Automatic Hiring Score',
                desc: 'It is not a single black-box credit score for employment suitability.',
              },
              {
                title: 'Not a Fixed Label',
                desc: 'Your profile is dynamic and evolves as you learn—it never locks you into past job titles.',
              },
              {
                title: 'Not a Guarantee of Outcomes',
                desc: 'Career Twin provides structured clarity; it does not guarantee job placement or promotion.',
              },
              {
                title: 'Not a Permanent Judgement',
                desc: 'Past skill gaps can be closed with new evidence; old data does not permanently penalize you.',
              },
              {
                title: 'Not Automatically Public',
                desc: 'Your Twin is private by default. Nothing is broadcast publicly without your permission.',
              },
              {
                title: 'Not Sold to Advertisers',
                desc: 'Your professional data is never monetized or sold to third-party advertising networks.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 15 — SUBSTANTIVE PRODUCT FAQ                                */}
      {/* =================================================================== */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-editorial space-y-12">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            heading="Understanding the Career Twin."
            description="Clear, substantive answers to common questions about Career Twin architecture, privacy, and utility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3"
              >
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--color-taupe-700)] shrink-0 mt-0.5" />
                  <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FINAL CALL TO ACTION                                               */}
      {/* =================================================================== */}
      <section className="section-editorial py-20 bg-[var(--color-surface-raised)]">
        <div className="container-editorial text-center space-y-8 max-w-3xl">
          <span className="section-label">BUILD YOUR CONTEXT</span>

          <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)]">
            Build the context behind your next move.
          </h2>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Start with where you are today. Career OS is designed to grow with the evidence,
            experience and direction you build next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start your career
            </Button>
            <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="lg">
              Meet your AI Career Mentor &rarr;
            </Button>
          </div>

          <p className="text-xs font-mono text-[var(--color-taupe-700)]">
            Free for individuals. Built around user control, privacy and portability.
          </p>
        </div>
      </section>
    </div>
  );
}
