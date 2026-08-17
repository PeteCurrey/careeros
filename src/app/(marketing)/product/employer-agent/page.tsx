import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  Lock,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  ChevronRight,
  ArrowRight,
  GitBranch,
  FileCheck,
  Award,
  Users,
  Compass,
  Cpu,
  Eye,
  Scale,
} from 'lucide-react';

import { HeroEmployerAgentInterface } from '@/components/marketing/employer-agent/HeroEmployerAgentInterface';
import { TitleVsCapabilityVisual } from '@/components/marketing/employer-agent/TitleVsCapabilityVisual';
import { InteractiveRoleDefinitionDemo } from '@/components/marketing/employer-agent/InteractiveRoleDefinitionDemo';
import { EvidenceSpectrumVisual } from '@/components/marketing/employer-agent/EvidenceSpectrumVisual';
import { TalentGraphVisual } from '@/components/marketing/employer-agent/TalentGraphVisual';
import { AgentCoordinationVisual } from '@/components/marketing/employer-agent/AgentCoordinationVisual';
import { CandidatePrivacyFlowVisual } from '@/components/marketing/employer-agent/CandidatePrivacyFlowVisual';
import { RegulatedRolesVisual } from '@/components/marketing/employer-agent/RegulatedRolesVisual';
import { EmployerAgentFaq } from '@/components/marketing/employer-agent/EmployerAgentFaq';

export const metadata: Metadata = {
  title: 'Employer Agent for Skills-Based Talent Discovery | Career OS',
  description:
    'Explore Employer Agent from Career OS — a product direction designed to help employers define roles around capability and evidence, discover adjacent talent, and keep people in control of hiring decisions.',
  alternates: {
    canonical: 'https://career-os.com/product/employer-agent',
  },
};

export default function EmployerAgentProductPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--background-dark)] text-[var(--color-text-primary)] transition-colors">
      {/* ── SECTION 01: HERO ────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-24 relative overflow-hidden bg-[var(--background-dark-deep)]">
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 80%)',
          }}
        />

        <div className="container-editorial relative z-10 space-y-12">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[var(--color-taupe-300)]">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
              <span>Career OS Architecture &bull; Employer Agent</span>
              <span className="text-[10px] text-purple-300 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 ml-1">
                Product Direction
              </span>
            </div>

            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
              Hire for what the work actually requires.{' '}
              <span className="block text-[var(--color-text-secondary)] font-light">
                Not just the title somebody already has.
              </span>
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-3xl font-light">
              <strong>Employer Agent</strong> is the Career OS direction for translating roles into functional capabilities, verified evidence, and non-negotiable criteria&mdash;helping employers discover people whose demonstrated competence connects to the work, without turning artificial intelligence into an autonomous hiring authority.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#role-definition-demo" variant="primary" size="lg" className="shadow-lg">
                See Employer Agent in action &darr;
              </Button>
              <Button href={ROUTES.FOR_EMPLOYERS} variant="secondary" size="lg">
                For employers &rarr;
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-[var(--color-text-tertiary)] font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Discovery &bull; Matching &bull; Decision Support
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                No Autonomous Hiring Authority
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Preserves Candidate Privacy
              </span>
            </div>
          </div>

          {/* Hero Media Component: Capability-First Role & Converging Pathways */}
          <div className="pt-4">
            <HeroEmployerAgentInterface />
          </div>
        </div>
      </section>

      {/* ── SECTION 02: RECRUITMENT STARTS WITH THE WRONG QUESTION ───── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">The Conventional Keyword Trap</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              &ldquo;Who has this job title already?&rdquo; is not always the best place to start.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              When recruitment begins by querying exact job titles, applicant tracking systems filter for people who have already done the exact same role in the exact same industry. This creates artificial talent shortages while overlooking millions of capable practitioners.
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              Titles and CVs remain useful, but two people with the same title often possess radically different competencies. Career OS is designed to illuminate the layer beneath: <strong>what capability and verified evidence actually exist.</strong>
            </p>
          </div>

          <TitleVsCapabilityVisual />
        </div>
      </section>

      {/* ── SECTION 03: DEFINE THE WORK FIRST (INTERACTIVE DEMO) ──────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Structured Role Definition</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Start with the role, not the candidate database.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Rather than pasting generic job specs, Employer Agent guides hiring teams through a 4-step capability brief. The role is defined around operational outcomes, required competencies, verifiable artifacts, and statutory boundaries.
            </p>
          </div>

          {/* Combined Interactive Role Definition & Candidate Reasoning Explorer */}
          <InteractiveRoleDefinitionDemo />
        </div>
      </section>

      {/* ── SECTION 06: EVIDENCE, NOT JUST CLAIMS ────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Evidence Provenance</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              A CV claim and a verified credential are not the same thing.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Traditional recruitment software flattens all profile text into identical keyword matches. Career OS connects Employer Agent to the <strong>Career Passport</strong> evidence spectrum, allowing hiring teams to distinguish between unverified claims, work products, and issuer-certified credentials.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <Link
                href={ROUTES.PRODUCT_CAREER_PASSPORT}
                className="text-purple-300 hover:text-purple-200 underline flex items-center gap-1"
              >
                Explore Career Passport <ChevronRight className="w-3 h-3" />
              </Link>
              <Link
                href={ROUTES.TRUST_VERIFICATION}
                className="text-[var(--color-taupe-300)] hover:text-white underline flex items-center gap-1"
              >
                See how verification works <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <EvidenceSpectrumVisual />
        </div>
      </section>

      {/* ── SECTION 07: CAREER GRAPH EXPANDS THE TALENT POOL ─────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Adjacent Talent Discovery</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Relevant talent may be sitting under a completely different title.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              When an employer searches for specialized capability, Career Graph maps cross-sector competencies to discover practitioners from military avionics, automotive diagnostics, or high-voltage facilities who possess the core problem-solving instinct required.
            </p>
            <div className="pt-2">
              <Link
                href={ROUTES.PRODUCT_CAREER_GRAPH}
                className="text-purple-300 hover:text-purple-200 font-mono text-xs underline inline-flex items-center gap-1"
              >
                Explore Career Graph <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <TalentGraphVisual />
        </div>
      </section>

      {/* ── SECTION 08: OPPORTUNITY AGENT + EMPLOYER AGENT ───────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Bilateral Intelligence</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Discovery can work from both directions.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career OS connects two dedicated agents: <strong>Opportunity Agent</strong>, which protects and advocates for the candidate, and <strong>Employer Agent</strong>, which assists the hiring organisation in scoping the role.
            </p>
            <div className="pt-2">
              <Link
                href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
                className="text-purple-300 hover:text-purple-200 font-mono text-xs underline inline-flex items-center gap-1"
              >
                Explore Opportunity Agent <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <AgentCoordinationVisual />
        </div>
      </section>

      {/* ── SECTION 09: PRIVACY BEFORE RECRUITMENT ───────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Architectural Candidate Privacy</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Talent discovery should not require exposing someone&apos;s entire career record.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Employer Agent is architecturally separated from a user&apos;s internal Career OS context. Employers never receive private Career Twin reflections, mentor guidance chats, salary histories, or personal circumstances without explicit candidate permission.
            </p>
            <div className="pt-2">
              <Link
                href={ROUTES.LEGAL_CANDIDATE_PRIVACY}
                className="text-purple-300 hover:text-purple-200 font-mono text-xs underline inline-flex items-center gap-1"
              >
                Read Candidate Privacy Notice <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <CandidatePrivacyFlowVisual />
        </div>
      </section>

      {/* ── SECTION 10: HUMAN DECISIONS ──────────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="max-w-4xl p-8 sm:p-12 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                Human Decision Principle
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Employer Agent supports decisions. It should not quietly make them.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
              Career OS strictly classifies Employer Agent under <strong>Discovery, Matching, Recommendation, and Decision Support</strong>. We reject the premise that an algorithmic system should possess autonomous hiring, rejection, promotion, or dismissal authority.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
                <span className="font-bold text-white block">What Employer Agent Provides:</span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Transparent decision factors, evidence provenance, highlighted missing context, uncertainty indicators, and capability bridges.
                </p>
              </div>
              <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
                <span className="font-bold text-white block">What Remains with Humans:</span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Evaluating interpersonal fit, conducting authentic dialogue, weighing risk, validating statutory credentials, and making all final employment offers.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={ROUTES.TRUST_HUMAN_OVERSIGHT}
                className="text-purple-300 hover:text-purple-200 font-mono text-xs underline inline-flex items-center gap-1"
              >
                Read Human Oversight Standard <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: RESPONSIBLE AI IN EMPLOYMENT ─────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Ethical Architecture</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Hiring technology needs a higher bar.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Employment decisions directly impact human livelihoods. Career OS enforces 8 foundational ethical pillars across every discovery model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: '1. Explainability',
                desc: 'Every candidate surface event provides clear, human-readable rationale detailing why alignment occurred.',
              },
              {
                title: '2. Human Oversight',
                desc: 'Consequential employment decisions remain with authorized, accountable human decision-makers.',
              },
              {
                title: '3. Evidence Provenance',
                desc: 'Employers always know whether a qualification is self-declared, artifact-backed, or issuer-verified.',
              },
              {
                title: '4. Non-Discrimination',
                desc: 'Protected demographic characteristics are never used as suitability criteria or algorithmic proxies.',
              },
              {
                title: '5. Data Minimisation',
                desc: 'Only role-relevant and candidate-permitted details are processed during discovery.',
              },
              {
                title: '6. Auditability',
                desc: 'Recommendation events generate immutable audit records capturing decision factors and provenance.',
              },
              {
                title: '7. Challenge & Correction',
                desc: 'Candidates can contest outdated records or correct context without systemic penalty.',
              },
              {
                title: '8. Explicit Uncertainty',
                desc: 'The system highlights what is missing or unclear rather than presenting probabilistic guesses as fact.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2"
              >
                <h4 className="font-bold text-sm text-white">{pillar.title}</h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-purple-300 pt-2">
            <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="hover:underline">
              Responsible AI Framework &rarr;
            </Link>
            <Link href={ROUTES.TRUST_FAIRNESS_BIAS} className="hover:underline">
              Fairness &amp; Bias Mitigation &rarr;
            </Link>
            <Link href={ROUTES.STANDARDS_EMPLOYER_CODE} className="hover:underline">
              Employer Code of Conduct &rarr;
            </Link>
            <Link href={ROUTES.REGULATORY} className="hover:underline">
              Regulatory Alignment &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: REGULATED ROLES NEED HARD REQUIREMENTS ────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Statutory Compliance</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Transferable skills cannot replace a required licence.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              In heavily regulated sectors&mdash;healthcare, law, electrical installations, transport, and public safety&mdash;functional competence is only one half of the equation. Employer Agent enforces statutory credentials as strict non-negotiable gates.
            </p>
          </div>

          <RegulatedRolesVisual />
        </div>
      </section>

      {/* ── SECTION 13: NONTRADITIONAL TALENT ────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Wider Talent Pools</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              The strongest candidate may not have taken the obvious route.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              By evaluating demonstrated evidence rather than narrow pedigree, Employer Agent helps organisations discover high-aptitude talent overlooked by traditional keyword filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-xs font-mono uppercase text-purple-400 font-bold">
                Military Veterans &amp; Service Leavers
              </span>
              <h3 className="text-base font-bold text-white">High-Accountability Instincts</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Defence engineers and logistics specialists bring disciplined incident command, meticulous maintenance logging, and calm decision-making under severe operational pressure.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                Skilled Trades &amp; Apprentices
              </span>
              <h3 className="text-base font-bold text-white">Practical Systems Mastery</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Apprenticeship graduates and licensed tradespeople possess deep electro-mechanical problem-solving capabilities that transfer directly into industrial automation and technical operations.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
              <span className="text-xs font-mono uppercase text-blue-400 font-bold">
                Career Changers &amp; Returners
              </span>
              <h3 className="text-base font-bold text-white">Cross-Disciplinary Perspective</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Experienced professionals pivoting laterally bring valuable domain insights from prior careers, closing capability gaps rapidly without restarting from entry level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: EARLY CAREERS & SAFEGUARDING ─────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Early-Career Protection</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Early-career talent has less work history. That makes evidence even more important.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Graduates and school leavers rarely have extensive résumés. Employer Agent evaluates practical project deliverables, verified coursework, technical challenges, and apprenticeship portfolios.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-purple-500/5 border border-purple-500/20 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              <h3 className="text-base font-bold text-white">
                Strict Minor Safeguarding Architecture
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Under-18 candidate profiles are protected by strict institutional controls. Unrestricted recruiter access and cold commercial solicitation of minor profiles are strictly prohibited. All early-career discovery operates within verified school district, academy, and guardian consent frameworks.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-purple-300">
              <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="hover:underline">
                Student Data Privacy Protections &rarr;
              </Link>
              <Link href={ROUTES.TRUST_SAFEGUARDING} className="hover:underline">
                Minor Safeguarding Framework &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: INTERNAL TALENT ──────────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Internal Mobility Direction</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Sometimes the right candidate already works for you.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Employer Agent is being designed not only for external hiring, but for discovering latent capabilities across existing teams&mdash;supporting succession planning, stretch assignments, and cross-departmental project staffing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-bold text-white block">Project Staffing</span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Assemble high-performing tiger teams based on proven technical artifacts across distributed divisions.
              </p>
            </div>
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-bold text-white block">Succession Planning</span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Identify emerging technical leaders and define concrete bridge milestones before executive vacancies arise.
              </p>
            </div>
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-bold text-white block">Retention via Growth</span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Provide employees with transparent internal pathway visibility so they don&apos;t need to leave to advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: WHAT EMPLOYER AGENT WILL NOT DO ──────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">System Boundaries</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Better discovery needs boundaries.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Ethical employment technology is defined by what it refuses to do. Career OS establishes firm architectural limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              'Will NOT make autonomous final hiring or rejection decisions.',
              'Will NOT generate artificial match percentages (e.g. 96% fit).',
              'Will NOT rank candidates in competitive leaderboard tables.',
              'Will NOT expose private AI Career Mentor coaching chats to employers.',
              'Will NOT expose a candidate’s private Career Twin reflections without consent.',
              'Will NOT convert soft capability signals into statutory licences.',
              'Will NOT permit unrestricted cold recruiter solicitation of minors.',
              'Will NOT use protected demographic characteristics as suitability criteria.',
              'Will NOT claim unverified CV bullet points are confirmed credentials.',
              'Will NOT guarantee employment outcomes or candidate performance.',
            ].map((boundary, idx) => (
              <div
                key={idx}
                className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-[var(--color-text-secondary)] font-medium leading-relaxed">
                  {boundary}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 17: SUBSTANTIVE FAQ ──────────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Governance &amp; Product Details</span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Clear, transparent answers on how Employer Agent works, how candidate privacy is enforced, and how human decision authority is preserved.
            </p>
          </div>

          <EmployerAgentFaq />
        </div>
      </section>

      {/* ── SECTION 18: FINAL CTA BANNER ─────────────────────────────── */}
      <section className="py-20 bg-[var(--background-dark-deep)] border-t border-[var(--color-border-default)] text-[var(--color-text-primary)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-white">
              See the person behind the job title.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
              Employer Agent is being designed to help organisations understand roles through capability and evidence&mdash;and discover relevant people without turning AI into the final hiring authority.
            </p>
            <div className="pt-2 text-xs font-mono text-[var(--color-taupe-300)]">
              Decision Support &bull; Evidence Provenance &bull; Privacy-First Architecture
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button href={ROUTES.FOR_EMPLOYERS} variant="primary" size="lg" className="shadow-lg">
              Explore Career OS for Employers <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href={ROUTES.PRODUCT_OPPORTUNITY_AGENT} variant="secondary" size="lg">
              See Opportunity Agent &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
