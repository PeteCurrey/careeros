import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  GitBranch,
  Layers,
  Sparkles,
  Users,
  Compass,
  Award,
  RefreshCw,
  Lock,
  Eye,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  FileText,
  Workflow,
  Globe2,
} from 'lucide-react';
import { CapabilityBriefInteractive } from '@/components/marketing/employers/CapabilityBriefInteractive';
import { AdjacentTalentInteractive } from '@/components/marketing/employers/AdjacentTalentInteractive';
import { FoundingEmployerForm } from '@/components/marketing/employers/FoundingEmployerForm';
import { EmployerConversionFaq } from '@/components/marketing/employers/EmployerConversionFaq';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills-Based Hiring & Talent Discovery for Employers | Career OS',
  description:
    'Career OS helps employers define roles around capability and evidence, discover non-obvious talent, support early careers and build a more transparent approach to talent development.',
  alternates: {
    canonical: 'https://career-os.com/for/employers',
  },
  openGraph: {
    title: 'Skills-Based Hiring & Talent Discovery for Employers | Career OS',
    description:
      'Career OS helps employers define roles around capability and evidence, discover non-obvious talent, support early careers and build a more transparent approach to talent development.',
    url: 'https://career-os.com/for/employers',
    siteName: 'Career OS',
    type: 'website',
  },
};

export default function ForEmployersPage() {
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
        name: 'For Employers',
        item: 'https://career-os.com/for/employers',
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
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        {/* Full-bleed Employer Capability Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/employers/employer_hero_capability.jpg"
            alt="Executive hiring and engineering leadership examining structured capability briefs and verified project evidence on transparent glass telemetry displays."
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />

          {/* Editorial Scrim: Charcoal Wash on Left for Ultra-Crisp Legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #393939 0%, rgba(57, 57, 57, 0.96) 38%, rgba(57, 57, 57, 0.88) 55%, rgba(57, 57, 57, 0.42) 78%, rgba(57, 57, 57, 0.18) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #393939 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, #393939 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs font-mono text-[var(--accent-blue)]">
                <Building2 className="w-3.5 h-3.5" />
                <span>Commercial Talent &amp; Workforce Architecture</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
                  Hire for the capability you need.
                  <CareerGradientText variant="blue" className="block font-sans text-2xl sm:text-3xl lg:text-4xl mt-2 font-normal">
                    Not only the title somebody already has.
                  </CareerGradientText>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Career OS is designed to help organisations understand roles through capability and evidence, discover people from a broader range of career backgrounds and build stronger connections between hiring and long-term development.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button href="#founding-employer" variant="primary" size="lg" className="justify-center">
                  Become a Founding Employer <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="#start-with-work" variant="secondary" size="lg" className="justify-center">
                  See the employer journey &darr;
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--color-text-tertiary)] font-mono">
                <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Human in the Loop &bull; Zero Match Scores
                </span>
                <Link href={ROUTES.PRODUCT_EMPLOYER_AGENT} className="text-[var(--accent-blue)] hover:underline">
                  Explore Employer Agent &rarr;
                </Link>
              </div>
            </div>

            {/* Right Card / Overview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md shadow-2xl p-6 sm:p-7 space-y-4 border-beam-container border-beam-slow">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-semibold">
                    Role Deconstruction &bull; Direct Capability
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Evidence-Based Discovery
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Translate roles into verified capabilities, assess transferable evidence, and engage qualified candidates without keyword proxies.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-[var(--color-surface-base)]/70 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Employer Agent</span>
                    <p className="font-semibold text-white">Capability Briefs</p>
                  </div>
                  <div className="p-3 bg-[var(--color-surface-base)]/70 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1">
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Talent Graph</span>
                    <p className="font-semibold text-white">Adjacent Discovery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: START WITH THE WORK ─────────────────────────── */}
      <section id="start-with-work" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Role Architecture</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Better talent discovery starts with a better definition of the role.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Most job descriptions simply copy the previous employee&apos;s résumé. Career OS helps employers separate what is genuinely required from what has merely become traditional — defining roles around measurable outcomes, required capabilities, and verifiable evidence.
            </p>
          </div>

          <CapabilityBriefInteractive />
        </div>
      </section>

      {/* ── SECTION 03: DISCOVER PEOPLE OUTSIDE THE OBVIOUS TITLE ────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Adjacent Talent Discovery</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Talent can look different before you look underneath the title.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career Graph is designed to widen the talent field without pretending every adjacent background is automatically qualified. Select a role and background below to inspect transferable capabilities, potential bridges, and human review questions:
            </p>
          </div>

          <AdjacentTalentInteractive />
        </div>
      </section>

      {/* ── SECTION 04: CAREER CHANGERS ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Cross-Industry Mobility</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Experience should not become invisible because somebody changes industry.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              When a recruiter screens only for previous identical titles, exceptional talent is routinely discarded. Career OS evaluates the transferable mechanics of work to help employers hire high-calibre career changers with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">Firefighter &rarr; Safety / Risk</span>
              <h4 className="font-semibold text-white text-sm">Dynamic Incident Command</h4>
              <p className="text-[var(--color-text-secondary)]">Life-critical risk mitigation, multi-agency coordination, and occupational safety leadership translate directly into industrial plant safety directors.</p>
            </div>

            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Military Logistics &rarr; Supply Chain</span>
              <h4 className="font-semibold text-white text-sm">Theater Asset Distribution</h4>
              <p className="text-[var(--color-text-secondary)]">Managing multi-million-pound supply chains under contingency conditions provides unmatched resilience in commercial freight and port operations.</p>
            </div>

            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Mechanic &rarr; Field Reliability</span>
              <h4 className="font-semibold text-white text-sm">Advanced System Diagnostics</h4>
              <p className="text-[var(--color-text-secondary)]">CAN-bus, sensor telemetry, and complex electro-mechanical fault-finding translate smoothly into offshore wind turbine and robotics maintenance.</p>
            </div>

            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Litigator &rarr; Strategic Risk</span>
              <h4 className="font-semibold text-white text-sm">Contract Dispute &amp; Strategy</h4>
              <p className="text-[var(--color-text-secondary)]">Analytical synthesis of ambiguous regulatory data and high-stakes negotiation translate into corporate development and regulatory risk leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: EVIDENCE BEHIND THE PROFILE ──────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="section-label">Career Passport</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                A candidate should be more than a collection of claims.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career Passport lets candidates share verified evidence behind their credentials. The verification status describes the specific evidence item — not labeling an entire person as &ldquo;verified.&rdquo;
              </p>
              <div className="pt-2">
                <Link
                  href={ROUTES.PRODUCT_CAREER_PASSPORT}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:underline"
                >
                  Explore Career Passport Architecture &rarr;
                </Link>
              </div>
            </div>

            {/* Evidence Spectrum Panel */}
            <div className="lg:col-span-6 p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 text-xs">
              <div className="space-y-1 pb-3 border-b border-[var(--color-border-default)]">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                  Granular Evidence Provenance Spectrum
                </span>
                <span className="text-white font-semibold block">Transparent Provenance on Every Claim</span>
              </div>

              <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">18th Edition Electrical Wiring Regs</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">City &amp; Guilds Awarding Body Registry</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Issuer Verified
                </span>
              </div>

              <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--accent-blue-border)] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Plant Telemetry SCADA Line Retrofit</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Delivered project schematic and supervisor sign-off</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)]">
                  Evidence Attached
                </span>
              </div>

              <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-purple-500/30 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Senior Technician Shift Leadership</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Verified by Apex Manufacturing HR Registry</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Employer Confirmed
                </span>
              </div>

              <div className="p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center justify-between opacity-80">
                <div>
                  <span className="font-semibold text-white block">Spanish Language Working Proficiency</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Candidate personal statement</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10">
                  Self-Declared
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: EARLY CAREERS ────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Early Careers</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Early-career talent has less employment history. Look harder at what they have actually built.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Instead of screening junior candidates solely on university pedigree or keyword-stuffed CVs, Career OS surfaces authentic project artifacts, design coursework, competitions, and vocational achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Applied Technical Proof</span>
              <h3 className="text-sm font-semibold text-white">Coursework &amp; Robotics Projects</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Design engineering prototypes, coding repositories, and science research briefs demonstrate real applied methodology and perseverance.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Accountability &amp; People</span>
              <h3 className="text-sm font-semibold text-white">Part-Time Work &amp; Volunteering</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Weekend retail, shift customer service, and community group coordination prove reliability, interpersonal resilience, and punctuality.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Initiative &amp; Drive</span>
              <h3 className="text-sm font-semibold text-white">Competitions &amp; Hackathons</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Participation in regional engineering fairs, open-source sprints, or team competitions shows self-motivated curiosity and collaborative grit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: APPRENTICESHIPS ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Capability-Building Lifecycle</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Apprenticeships are not simply a recruitment channel. They are a capability-building system.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS supports the full lifecycle of skills-based hiring — from school outreach and candidate discovery to workplace evidence logging, qualification achievement, and long-term retention.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <span className="font-mono text-[10px] text-[var(--color-taupe-300)] block font-bold">01. DISCOVER</span>
              <span className="text-[11px] text-white">Targeted outreach</span>
            </div>
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <span className="font-mono text-[10px] text-[var(--color-taupe-300)] block font-bold">02. APPLY</span>
              <span className="text-[11px] text-white">Evidence-backed</span>
            </div>
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)]">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] block font-bold">03. LEARN</span>
              <span className="text-[11px] text-white">Classroom &amp; lab</span>
            </div>
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-emerald-500/30">
              <span className="font-mono text-[10px] text-emerald-400 block font-bold">04. WORK</span>
              <span className="text-[11px] text-white">Live site practice</span>
            </div>
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-purple-500/30">
              <span className="font-mono text-[10px] text-purple-400 block font-bold">05. LOG PROOF</span>
              <span className="text-[11px] text-white">Career Passport</span>
            </div>
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-amber-500/30">
              <span className="font-mono text-[10px] text-amber-400 block font-bold">06. QUALIFY</span>
              <span className="text-[11px] text-white">Accredited status</span>
            </div>
            <div className="p-3.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
              <span className="font-mono text-[10px] text-[var(--color-taupe-300)] block font-bold">07. RETAIN</span>
              <span className="text-[11px] text-white">Internal progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: VETERANS / SERVICE LEAVERS ──────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Defence Transition</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Translate experience before you discount it.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Civilian role titles and military trade specialisms rarely match word-for-word. Career Graph translates military operational discipline, complex weapon and vehicle engineering, and leadership under pressure into civilian corporate equivalents.
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
            <div className="space-y-1 max-w-2xl">
              <h4 className="text-sm font-semibold text-white">Preserving Service Evidence with Dignity</h4>
              <p className="text-[var(--color-text-secondary)]">
                Career OS helps service leavers map command qualifications, logistics certifications, and telemetry hours into commercial frameworks without compromising classified information.
              </p>
            </div>
            <span className="px-3 py-1.5 rounded bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs font-mono text-[var(--accent-blue)] shrink-0">
              Military Capability Translation Layer
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: RETURNERS & NONLINEAR CAREERS ────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Returner Talent</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              A career gap is context, not an automatic capability judgement.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Whether stepping away for caregiving, health recovery, extended study, or relocation, Career OS helps employers distinguish time since last role from evidence of current capability — preventing unconscious bias.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Audit Foundational Mastery</span>
              <p className="text-[var(--color-text-secondary)]">Evaluate decades of proven domain execution rather than discarding CVs based on arbitrary date gaps.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Structured Refresher Bridges</span>
              <p className="text-[var(--color-text-secondary)]">Identify focused software updates or short regulatory refresher modules needed for immediate productivity.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Supported Onboarding</span>
              <p className="text-[var(--color-text-secondary)]">Provide structured milestone reviews during the first 90 days to support sustainable talent re-integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CANDIDATE PRIVACY ───────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Trust &amp; Privacy Boundary</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Better matching does not require access to everything a person has told Career OS.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Employers never receive candidates&apos; private AI Mentor conversations, personal career uncertainty, or unpermissioned data. Discovery operates through structured, role-relevant capability sharing only.
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 text-xs">
            <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold block">
              Illustrative Privacy-Preserving Matching Flow
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
              <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                <span className="font-mono text-[9px] text-[var(--color-taupe-300)] block">01. DEFINE</span>
                <span className="font-semibold text-white">Employer Role Brief</span>
              </div>
              <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                <span className="font-mono text-[9px] text-[var(--accent-blue)] block">02. DISCOVER</span>
                <span className="font-semibold text-white">Anonymized Signals</span>
              </div>
              <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-emerald-500/30">
                <span className="font-mono text-[9px] text-emerald-400 block">03. CONSENT</span>
                <span className="font-semibold text-white">Candidate Approves</span>
              </div>
              <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-purple-500/30">
                <span className="font-mono text-[9px] text-purple-400 block">04. SHARE</span>
                <span className="font-semibold text-white">Evidence Disclosed</span>
              </div>
              <div className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
                <span className="font-mono text-[9px] text-[var(--color-taupe-300)] block">05. CONVERSE</span>
                <span className="font-semibold text-white">Human Interview</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link href={ROUTES.LEGAL_CANDIDATE_PRIVACY} className="text-xs font-mono text-[var(--accent-blue)] hover:underline">
              Review Candidate Privacy Architecture &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: OPPORTUNITY AGENT + EMPLOYER AGENT ──────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Agent Coordination</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Talent discovery can eventually work from both directions.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Instead of candidates submitting hundreds of blind applications into ATS black holes, Employer Agent and Opportunity Agent coordinate contextually. The individual decides whether to engage. The employer decides whether to progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-3">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Employer Side</span>
              <h3 className="text-base font-semibold text-white">Employer Agent</h3>
              <ul className="space-y-1.5 text-[var(--color-text-secondary)]">
                <li>&bull; Converts job descriptions into structured capability briefs</li>
                <li>&bull; Identifies adjacent career talent in Career Graph</li>
                <li>&bull; Surfaces candidate project evidence and verified credentials</li>
                <li>&bull; Provides explainable interview briefing notes for hiring managers</li>
              </ul>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-emerald-500/30 space-y-3">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Candidate Side</span>
              <h3 className="text-base font-semibold text-white">Opportunity Agent</h3>
              <ul className="space-y-1.5 text-[var(--color-text-secondary)]">
                <li>&bull; Evaluates opportunities against candidate Career Twin preferences</li>
                <li>&bull; Protects candidate anonymity until explicit consent is given</li>
                <li>&bull; Prepares tailored evidence packages from Career Passport</li>
                <li>&bull; Never automatically submits applications without candidate direction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: RESPONSIBLE AI ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">AI Ethics &amp; Governance</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Employment AI needs more than a clever matching algorithm.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS is engineered around human agency, explainability, and algorithmic fairness. We do not use black-box neural ranking or automated rejection bots.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Explainability</span>
              <p className="text-[var(--color-text-secondary)]">Every surfaced profile includes transparent reasoning on why capability overlaps.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Human Oversight</span>
              <p className="text-[var(--color-text-secondary)]">Final candidate selection and progression decisions remain strictly human.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Fairness &amp; Bias Audits</span>
              <p className="text-[var(--color-text-secondary)]">Continuous demographic and algorithmic parity auditing across talent graphs.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-white block">Data Minimization</span>
              <p className="text-[var(--color-text-secondary)]">Only role-relevant capability and credential data is processed for discovery.</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[var(--accent-blue)]">
            <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="hover:underline">
              Responsible AI Principles &rarr;
            </Link>
            <Link href={ROUTES.TRUST_FAIRNESS_BIAS} className="hover:underline">
              Fairness &amp; Bias Governance &rarr;
            </Link>
            <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="hover:underline">
              Human Oversight Policy &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: REGULATED ROLES ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Licensing Rigor</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Skills can transfer. Licences usually cannot.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS strictly distinguishes transferable functional capability from mandatory regulatory licensure in healthcare, law, aviation, and statutory electrical trades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-emerald-500/20 space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Transferable Capability</span>
              <p className="text-[var(--color-text-secondary)]">High-pressure crisis management, clinical protocol design, and multi-system diagnostics can be recognized and valued across industries.</p>
            </div>
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-red-500/20 space-y-2">
              <span className="font-mono text-[10px] text-red-300 uppercase font-bold">Mandatory Statutory Licensure</span>
              <p className="text-[var(--color-text-secondary)]">GMC/NMC registration, Gas Safe accreditation, or Bar certification remain non-negotiable statutory gates verified independently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: INTERNAL MOBILITY ────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Internal Mobility</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Your next strong candidate may already work for you.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career Graph can help organizations uncover latent capability across existing business units — identifying technicians ready for project engineering or customer specialists suited for product operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">Uncover Latent Talent</span>
              <p className="text-[var(--color-text-secondary)]">Discover employees whose actual skills exceed their current department job title.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">Project &amp; Squad Staffing</span>
              <p className="text-[var(--color-text-secondary)]">Match specialized capability to temporary agile initiatives and plant expansions.</p>
            </div>
            <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
              <span className="font-bold text-white block">Retention Through Growth</span>
              <p className="text-[var(--color-text-secondary)]">Retain top performers by offering clear lateral career pathways before they look externally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: WORKFORCE DEVELOPMENT ────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Workforce Planning</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Hiring solves today&apos;s gap. Development helps prevent tomorrow&apos;s.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS connects capability demand forecasting with structured employee learning pathways — ensuring training budgets build demonstrable proof rather than unmeasured course completions.
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] space-y-2">
            <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold block">Development Architecture</span>
            <p className="leading-relaxed">
              When employees log new project deliverables and credentials in their Career Passport, organizational capability maps update automatically — providing executive leadership with accurate workforce readiness data.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: EMPLOYEE CAREER OWNERSHIP ────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Individual Agency</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Supporting someone&apos;s career should not mean owning it.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Employees trust Career OS because their Career Twin belongs to them. Progressive employers recognize that empowering employee career agency drives authentic engagement and sustainable retention.
            </p>
          </div>

          <blockquote className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border-l-2 border-[var(--accent-blue)] text-sm italic text-white max-w-3xl">
            &ldquo;Career OS makes organisations better places to develop talent without turning the employee&apos;s career into company property.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── SECTION 17: IMPLEMENTATION ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Staged Rollout</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Add Career OS alongside the systems you already use.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS does not require replacing your ATS or HRIS on day one. We deploy through targeted, measurable pilots focused on specific hiring bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Phase 01 &bull; Define Use Case</span>
              <h4 className="font-semibold text-white text-sm">Target Hard-to-Fill Roles</h4>
              <p className="text-[var(--color-text-secondary)]">Select a specific technical, early-career, or apprenticeship cohort with high recruiting friction.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Phase 02 &bull; Governance &amp; Trust</span>
              <h4 className="font-semibold text-white text-sm">Security &amp; Privacy Review</h4>
              <p className="text-[var(--color-text-secondary)]">Align legal, compliance, and talent leadership on human oversight and candidate privacy parameters.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">Phase 03 &bull; Staged Pilot</span>
              <h4 className="font-semibold text-white text-sm">Launch Capability Briefs</h4>
              <p className="text-[var(--color-text-secondary)]">Deploy Employer Agent to discover adjacent talent and evaluate evidence-based candidate dossiers.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">Phase 04 &bull; ATS Integration</span>
              <h4 className="font-semibold text-white text-sm">Sync with Workflows</h4>
              <p className="text-[var(--color-text-secondary)]">Connect qualified candidates directly into your existing enterprise ATS and HRIS via secure APIs.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-blue-400 uppercase font-bold">Phase 05 &bull; Outcome Review</span>
              <h4 className="font-semibold text-white text-sm">Measure Quality &amp; Conversion</h4>
              <p className="text-[var(--color-text-secondary)]">Review candidate experience, hiring manager feedback, and time-to-productivity metrics.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-300 uppercase font-bold">Phase 06 &bull; Enterprise Scale</span>
              <h4 className="font-semibold text-white text-sm">Expand to Internal Mobility</h4>
              <p className="text-[var(--color-text-secondary)]">Scale capability mapping across company-wide succession planning and apprenticeship schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 18: PROCUREMENT & TRUST ──────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Enterprise Governance</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Your legal, privacy and security teams should be able to inspect the system properly.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              For employment technology, governance is part of the product. Career OS provides comprehensive documentation for enterprise procurement and compliance audits.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <Link href={ROUTES.TRUST_SECURITY} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Security Overview</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Data isolation &amp; encryption</span>
            </Link>
            <Link href={ROUTES.LEGAL_PRIVACY} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Privacy Architecture</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Candidate data boundaries</span>
            </Link>
            <Link href={ROUTES.LEGAL_EMPLOYER_TERMS} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Employer Terms</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Commercial agreements</span>
            </Link>
            <Link href={ROUTES.STANDARDS_EMPLOYER_CODE} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1">
              <span className="font-semibold text-white block">Employer Code</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Responsible hiring standards</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 19: COMMERCIAL VALUE WITHOUT FAKE ROI ───────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Business Value</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              The business case should be measurable.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              We do not invent synthetic &ldquo;50% faster hiring&rdquo; marketing claims. Instead, we establish concrete operational metrics evaluated during live pilots:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">01. Talent Field Width</span>
              <h4 className="font-semibold text-white text-sm">Surfacing Adjacent Profiles</h4>
              <p className="text-[var(--color-text-secondary)]">Measure the volume of qualified candidates discovered who would have been filtered out by standard keyword searches.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">02. Explanation Quality</span>
              <h4 className="font-semibold text-white text-sm">Hiring Manager Alignment</h4>
              <p className="text-[var(--color-text-secondary)]">Evaluate whether hiring managers clearly understand candidate capability transfer before conducting interviews.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-purple-400 uppercase font-bold">03. Candidate Conversion</span>
              <h4 className="font-semibold text-white text-sm">Engagement &amp; Offer Acceptance</h4>
              <p className="text-[var(--color-text-secondary)]">Track candidate response rates when approached through tailored, evidence-backed capability briefs.</p>
            </div>

            <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">04. Internal Mobility</span>
              <h4 className="font-semibold text-white text-sm">Internal Fill Rate</h4>
              <p className="text-[var(--color-text-secondary)]">Measure the percentage of open vacancies filled by developing and promoting existing cross-functional employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 20: FOUNDING EMPLOYER PROGRAMME ─────────────────── */}
      <section id="founding-employer" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Founding Employer Programme</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Help build the next model of career discovery.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Founding Employers gain early access to Employer Agent, structured role-definition pilots, adjacent talent discovery, and direct influence over our product roadmap.
            </p>
          </div>

          <FoundingEmployerForm />
        </div>
      </section>

      {/* ── SECTION 21: FAQ ─────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">Questions Answered</span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Frequently Asked Questions
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Clear, transparent answers about how Career OS works with employers, ATS systems, and governance teams.
            </p>
          </div>

          <EmployerConversionFaq />
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] relative overflow-hidden">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center space-y-8 py-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-text-primary)] font-normal">
              Find capability that a job-title search can miss.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Join Career OS as a Founding Employer and help shape a more evidence-led, transparent and human model of talent discovery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href="#founding-employer" variant="primary" size="lg" className="w-full sm:w-auto px-8">
                Become a Founding Employer
              </Button>
              <Button href={ROUTES.PRODUCT_EMPLOYER_AGENT} variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Employer Agent &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
