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

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs font-mono text-[var(--accent-blue)]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial Talent &amp; Workforce Architecture</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={80}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
                    Hire for the capability you need.
                    <CareerGradientText variant="blue" className="block font-sans text-2xl sm:text-3xl lg:text-4xl mt-2 font-normal">
                      Not only the title somebody already has.
                    </CareerGradientText>
                  </h1>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={140}>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  Career OS is designed to help organizations understand roles through capability and evidence, discover people from a broader range of career backgrounds and build stronger connections between hiring and long-term development.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Button href="#founding-employer" variant="primary" size="lg" className="justify-center">
                    Become a Founding Employer <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="#start-with-work" variant="secondary" size="lg" className="justify-center">
                    See the employer journey &darr;
                  </Button>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--color-text-tertiary)] font-mono">
                  <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Human in the Loop &bull; Zero Match Scores
                  </span>
                  <Link href={ROUTES.PRODUCT_EMPLOYER_AGENT} className="text-[var(--accent-blue)] hover:underline">
                    Explore Employer Agent &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Card / Overview */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delayMs={120}>
                <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md shadow-2xl p-6 sm:p-7 space-y-4 border-beam-container border-beam-slow hover-lift card-interactive">
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
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: START WITH THE WORK ─────────────────────────── */}
      <section id="start-with-work" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">Role Architecture</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Better talent discovery starts with a better definition of the role.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Most job descriptions simply copy the previous employee&apos;s résumé. Career OS helps employers separate what is genuinely required from what has merely become traditional — defining roles around measurable outcomes, required capabilities, and verifiable evidence.
              </p>
            </div>
          </ScrollReveal>

          <CapabilityBriefInteractive />
        </div>
      </section>

      {/* ── SECTION 03: DISCOVER PEOPLE OUTSIDE THE OBVIOUS TITLE ────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Adjacent Talent Discovery</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Talent can look different before you look underneath the title.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career Graph is designed to widen the talent field without pretending every adjacent background is automatically qualified. Select a role and background below to inspect transferable capabilities, potential bridges, and human review questions:
              </p>
            </div>
          </ScrollReveal>

          <AdjacentTalentInteractive />
        </div>
      </section>

      {/* ── SECTION 04: CAREER CHANGERS ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Cross-Industry Mobility</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Experience should not become invisible because somebody changes industry.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                When a recruiter screens only for previous identical titles, exceptional talent is routinely discarded. Career OS evaluates the transferable mechanics of work to help employers hire high-caliber career changers with confidence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              {
                track: 'Firefighter → Safety / Risk',
                color: 'text-amber-400',
                title: 'Dynamic Incident Command',
                desc: 'Life-critical risk mitigation, multi-agency coordination, and occupational safety leadership translate directly into industrial plant safety directors.',
              },
              {
                track: 'Military Logistics → Supply Chain',
                color: 'text-emerald-400',
                title: 'Theater Asset Distribution',
                desc: 'Managing multi-million-pound supply chains under contingency conditions provides unmatched resilience in commercial freight and port operations.',
              },
              {
                track: 'Mechanic → Field Reliability',
                color: 'text-[var(--accent-blue)]',
                title: 'Advanced System Diagnostics',
                desc: 'CAN-bus, sensor telemetry, and complex electro-mechanical fault-finding translate smoothly into offshore wind turbine and robotics maintenance.',
              },
              {
                track: 'Litigator → Strategic Risk',
                color: 'text-purple-400',
                title: 'Contract Dispute & Strategy',
                desc: 'Analytical synthesis of ambiguous regulatory data and high-stakes negotiation translate into corporate development and regulatory risk leadership.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                  <span className={`font-mono text-[10px] uppercase font-bold ${item.color}`}>{item.track}</span>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: EVIDENCE BEHIND THE PROFILE ──────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
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
              </ScrollReveal>
            </div>

            {/* Evidence Spectrum Panel */}
            <div className="lg:col-span-6">
              <ScrollReveal delayMs={100}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 text-xs hover-lift card-interactive">
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
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: EARLY CAREERS ────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Early Careers</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Early-career talent has less employment history. Look harder at what they have actually built.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Instead of screening junior candidates solely on university pedigree or keyword-stuffed CVs, Career OS surfaces authentic project artifacts, design coursework, competitions, and vocational achievements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {[
              {
                track: 'Applied Technical Proof',
                color: 'text-[var(--accent-blue)]',
                title: 'Coursework & Robotics Projects',
                desc: 'Design engineering prototypes, coding repositories, and science research briefs demonstrate real applied methodology and perseverance.',
              },
              {
                track: 'Accountability & People',
                color: 'text-emerald-400',
                title: 'Part-Time Work & Volunteering',
                desc: 'Weekend retail, shift customer service, and community group coordination prove reliability, interpersonal resilience, and punctuality.',
              },
              {
                track: 'Initiative & Drive',
                color: 'text-purple-400',
                title: 'Competitions & Hackathons',
                desc: 'Participation in regional engineering fairs, open-source sprints, or team competitions shows self-motivated curiosity and collaborative grit.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 hover-lift card-interactive h-full">
                  <span className={`font-mono text-[10px] uppercase font-bold ${item.color}`}>{item.track}</span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: APPRENTICESHIPS ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Capability-Building Lifecycle</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Apprenticeships are not simply a recruitment channel. They are a capability-building system.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS supports the full lifecycle of skills-based hiring — from school outreach and candidate discovery to workplace evidence logging, qualification achievement, and long-term retention.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
            {[
              { step: '01. DISCOVER', title: 'Targeted outreach', border: 'border-[var(--color-border-default)]', color: 'text-[var(--color-taupe-300)]' },
              { step: '02. APPLY', title: 'Evidence-backed', border: 'border-[var(--color-border-default)]', color: 'text-[var(--color-taupe-300)]' },
              { step: '03. LEARN', title: 'Classroom & lab', border: 'border-[var(--accent-blue-border)]', color: 'text-[var(--accent-blue)]' },
              { step: '04. WORK', title: 'Live site practice', border: 'border-emerald-500/30', color: 'text-emerald-400' },
              { step: '05. LOG PROOF', title: 'Career Passport', border: 'border-purple-500/30', color: 'text-purple-400' },
              { step: '06. QUALIFY', title: 'Accredited status', border: 'border-amber-500/30', color: 'text-amber-400' },
              { step: '07. RETAIN', title: 'Internal progress', border: 'border-[var(--color-border-default)]', color: 'text-[var(--color-taupe-300)]' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 50}>
                <div className={`p-3.5 rounded bg-[var(--color-surface-raised)] border ${item.border} hover-lift card-interactive h-full`}>
                  <span className={`font-mono text-[10px] block font-bold ${item.color}`}>{item.step}</span>
                  <span className="text-[11px] text-white">{item.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: VETERANS / SERVICE LEAVERS ──────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Defense Transition</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Translate experience before you discount it.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Civilian role titles and military trade specialisms rarely match word-for-word. Career Graph translates military operational discipline, complex weapon and vehicle engineering, and leadership under pressure into civilian corporate equivalents.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs hover-lift card-interactive">
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
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 09: RETURNERS & NONLINEAR CAREERS ────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Returner Talent</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                A career gap is context, not an automatic capability judgment.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Whether stepping away for caregiving, health recovery, extended study, or relocation, Career OS helps employers distinguish time since last role from evidence of current capability — preventing unconscious bias.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {[
              {
                title: 'Audit Foundational Mastery',
                desc: 'Evaluate decades of proven domain execution rather than discarding CVs based on arbitrary date gaps.',
              },
              {
                title: 'Structured Refresher Bridges',
                desc: 'Identify focused software updates or short regulatory refresher modules needed for immediate productivity.',
              },
              {
                title: 'Supported Onboarding',
                desc: 'Provide structured milestone reviews during the first 90 days to support sustainable talent re-integration.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1.5 hover-lift card-interactive h-full">
                  <span className="font-bold text-white block">{item.title}</span>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CANDIDATE PRIVACY ───────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Trust &amp; Privacy Boundary</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Better matching does not require access to everything a person has told Career OS.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Employers never receive candidates&apos; private AI Mentor conversations, personal career uncertainty, or unpermissioned data. Discovery operates through structured, role-relevant capability sharing only.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 text-xs hover-lift card-interactive">
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
          </ScrollReveal>

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
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Agent Coordination</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Talent discovery can eventually work from both directions.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Instead of candidates submitting hundreds of blind applications into ATS black holes, Employer Agent and Opportunity Agent coordinate contextually. The individual decides whether to engage. The employer decides whether to progress.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <ScrollReveal delayMs={0}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-3 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold">Employer Side</span>
                <h3 className="text-base font-semibold text-white">Employer Agent</h3>
                <ul className="space-y-1.5 text-[var(--color-text-secondary)]">
                  <li>&bull; Converts job descriptions into structured capability briefs</li>
                  <li>&bull; Identifies adjacent career talent in Career Graph</li>
                  <li>&bull; Surfaces candidate project evidence and verified credentials</li>
                  <li>&bull; Provides explainable interview briefing notes for hiring managers</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-emerald-500/30 space-y-3 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Candidate Side</span>
                <h3 className="text-base font-semibold text-white">Opportunity Agent</h3>
                <ul className="space-y-1.5 text-[var(--color-text-secondary)]">
                  <li>&bull; Evaluates opportunities against candidate Career Twin preferences</li>
                  <li>&bull; Protects candidate anonymity until explicit consent is given</li>
                  <li>&bull; Prepares tailored evidence packages from Career Passport</li>
                  <li>&bull; Never automatically submits applications without candidate direction</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: RESPONSIBLE AI ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">AI Ethics &amp; Governance</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Employment AI needs more than a clever matching algorithm.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS is engineered around human agency, explainability, and algorithmic fairness. We do not use black-box neural ranking or automated rejection bots.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {[
              { title: 'Explainability', desc: 'Every surfaced profile includes transparent reasoning on why capability overlaps.' },
              { title: 'Human Oversight', desc: 'Final candidate selection and progression decisions remain strictly human.' },
              { title: 'Fairness & Bias Audits', desc: 'Continuous demographic and algorithmic parity auditing across talent graphs.' },
              { title: 'Data Minimization', desc: 'Only role-relevant capability and credential data is processed for discovery.' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5 hover-lift card-interactive h-full">
                  <span className="font-bold text-white block">{item.title}</span>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
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
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Licensing Rigor</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Skills can transfer. Licenses usually cannot.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS strictly distinguishes transferable functional capability from mandatory regulatory licensure in healthcare, law, aviation, and statutory electrical trades.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <ScrollReveal delayMs={0}>
              <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-emerald-500/20 space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">Transferable Capability</span>
                <p className="text-[var(--color-text-secondary)]">High-pressure crisis management, clinical protocol design, and multi-system diagnostics can be recognized and valued across industries.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-red-500/20 space-y-2 hover-lift card-interactive h-full">
                <span className="font-mono text-[10px] text-red-300 uppercase font-bold">Mandatory Statutory Licensure</span>
                <p className="text-[var(--color-text-secondary)]">GMC/NMC registration, Gas Safe accreditation, or Bar certification remain non-negotiable statutory gates verified independently.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: INTERNAL MOBILITY ────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Internal Mobility</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your next strong candidate may already work for you.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career Graph can help organizations uncover latent capability across existing business units — identifying technicians ready for project engineering or customer specialists suited for product operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {[
              { title: 'Uncover Latent Talent', desc: 'Discover employees whose actual skills exceed their current department job title.' },
              { title: 'Project & Squad Staffing', desc: 'Match specialized capability to temporary agile initiatives and plant expansions.' },
              { title: 'Retention Through Growth', desc: 'Retain top performers by offering clear lateral career pathways before they look externally.' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1 hover-lift card-interactive h-full">
                  <span className="font-bold text-white block">{item.title}</span>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 15: WORKFORCE DEVELOPMENT ────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Workforce Planning</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Hiring solves today&apos;s gap. Development helps prevent tomorrow&apos;s.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS connects capability demand forecasting with structured employee learning pathways — ensuring training budgets build demonstrable proof rather than unmeasured course completions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] space-y-2 hover-lift card-interactive">
              <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold block">Development Architecture</span>
              <p className="leading-relaxed">
                When employees log new project deliverables and credentials in their Career Passport, organizational capability maps update automatically — providing executive leadership with accurate workforce readiness data.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 16: EMPLOYEE CAREER OWNERSHIP ────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Individual Agency</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Supporting someone&apos;s career should not mean owning it.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Employees trust Career OS because their Career Twin belongs to them. Progressive employers recognize that empowering employee career agency drives authentic engagement and sustainable retention.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <blockquote className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border-l-2 border-[var(--accent-blue)] text-sm italic text-white max-w-3xl hover-lift card-interactive">
              &ldquo;Career OS makes organizations better places to develop talent without turning the employee&apos;s career into company property.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 17: IMPLEMENTATION ──────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Staged Rollout</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Add Career OS alongside the systems you already use.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Career OS does not require replacing your ATS or HRIS on day one. We deploy through targeted, measurable pilots focused on specific hiring bottlenecks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {[
              { phase: 'Phase 01 • Define Use Case', color: 'text-[var(--accent-blue)]', title: 'Target Hard-to-Fill Roles', desc: 'Select a specific technical, early-career, or apprenticeship cohort with high recruiting friction.' },
              { phase: 'Phase 02 • Governance & Trust', color: 'text-emerald-400', title: 'Security & Privacy Review', desc: 'Align legal, compliance, and talent leadership on human oversight and candidate privacy parameters.' },
              { phase: 'Phase 03 • Staged Pilot', color: 'text-purple-400', title: 'Launch Capability Briefs', desc: 'Deploy Employer Agent to discover adjacent talent and evaluate evidence-based candidate dossiers.' },
              { phase: 'Phase 04 • ATS Integration', color: 'text-amber-400', title: 'Sync with Workflows', desc: 'Connect qualified candidates directly into your existing enterprise ATS and HRIS via secure APIs.' },
              { phase: 'Phase 05 • Outcome Review', color: 'text-blue-400', title: 'Measure Quality & Conversion', desc: 'Review candidate experience, hiring manager feedback, and time-to-productivity metrics.' },
              { phase: 'Phase 06 • Enterprise Scale', color: 'text-emerald-300', title: 'Expand to Internal Mobility', desc: 'Scale capability mapping across company-wide succession planning and apprenticeship schemes.' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                  <span className={`font-mono text-[10px] uppercase font-bold ${item.color}`}>{item.phase}</span>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 18: PROCUREMENT & TRUST ──────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Enterprise Governance</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your legal, privacy and security teams should be able to inspect the system properly.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                For employment technology, governance is part of the product. Career OS provides comprehensive documentation for enterprise procurement and compliance audits.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              { href: ROUTES.TRUST_SECURITY, title: 'Security Overview', desc: 'Data isolation & encryption' },
              { href: ROUTES.LEGAL_PRIVACY, title: 'Privacy Architecture', desc: 'Candidate data boundaries' },
              { href: ROUTES.LEGAL_EMPLOYER_TERMS, title: 'Employer Terms', desc: 'Commercial agreements' },
              { href: ROUTES.STANDARDS_EMPLOYER_CODE, title: 'Employer Code', desc: 'Responsible hiring standards' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 60}>
                <Link href={item.href} className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-white transition-colors block space-y-1 hover-lift card-interactive h-full">
                  <span className="font-semibold text-white block">{item.title}</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">{item.desc}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 19: COMMERCIAL VALUE WITHOUT FAKE ROI ───────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Business Value</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                The business case should be measurable.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                We do not invent synthetic &ldquo;50% faster hiring&rdquo; marketing claims. Instead, we establish concrete operational metrics evaluated during live pilots:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              { tag: '01. Talent Field Width', color: 'text-[var(--accent-blue)]', title: 'Surfacing Adjacent Profiles', desc: 'Measure the volume of qualified candidates discovered who would have been filtered out by standard keyword searches.' },
              { tag: '02. Explanation Quality', color: 'text-emerald-400', title: 'Hiring Manager Alignment', desc: 'Evaluate whether hiring managers clearly understand candidate capability transfer before conducting interviews.' },
              { tag: '03. Candidate Conversion', color: 'text-purple-400', title: 'Engagement & Offer Acceptance', desc: 'Track candidate response rates when approached through tailored, evidence-backed capability briefs.' },
              { tag: '04. Internal Mobility', color: 'text-amber-400', title: 'Internal Fill Rate', desc: 'Measure the percentage of open vacancies filled by developing and promoting existing cross-functional employees.' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="p-5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 hover-lift card-interactive h-full">
                  <span className={`font-mono text-[10px] uppercase font-bold ${item.color}`}>{item.tag}</span>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 20: FOUNDING EMPLOYER PROGRAM ─────────────────── */}
      <section id="founding-employer" className="section-editorial bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="section-label">Founding Employer Program</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Help build the next model of career discovery.
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Founding Employers gain early access to Employer Agent, structured role-definition pilots, adjacent talent discovery, and direct influence over our product roadmap.
              </p>
            </div>
          </ScrollReveal>

          <FoundingEmployerForm />
        </div>
      </section>

      {/* ── SECTION 21: FAQ ─────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">Questions Answered</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Frequently Asked Questions
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Clear, transparent answers about how Career OS works with employers, ATS systems, and governance teams.
              </p>
            </div>
          </ScrollReveal>

          <EmployerConversionFaq />
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="section-editorial bg-[var(--color-surface-raised)] relative overflow-hidden">
        <div className="container-editorial">
          <ScrollReveal direction="none">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
