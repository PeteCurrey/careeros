import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Compass,
  Network,
  GitFork,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  UserCheck,
  MessageSquare,
  Target,
  Layers,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Briefcase,
  GraduationCap,
  Scale,
  Building,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

import { HeroCareerGraphInterface } from '@/components/marketing/career-graph/HeroCareerGraphInterface';
import { TitleVsCapabilityVisual } from '@/components/marketing/career-graph/TitleVsCapabilityVisual';
import { InteractiveCareerGraphExplorer } from '@/components/marketing/career-graph/InteractiveCareerGraphExplorer';
import { BridgeArchitectureVisual } from '@/components/marketing/career-graph/BridgeArchitectureVisual';
import { CareerChangeStories } from '@/components/marketing/career-graph/CareerChangeStories';
import { StudentPathwayGraph } from '@/components/marketing/career-graph/StudentPathwayGraph';
import { EcosystemIntegrationSection } from '@/components/marketing/career-graph/EcosystemIntegrationSection';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';

export const metadata: Metadata = {
  title: 'Career Graph for Career Change, Progression & Transferable Skills',
  description:
    'Explore Career Graph — a Career OS system designed to connect your skills, evidence and experience with adjacent career paths, transferable capabilities, and realistic bridge requirements.',
  alternates: {
    canonical: 'https://career-os.com/product/career-graph',
  },
};

import Image from 'next/image';
import { MEDIA_ASSETS } from '@/lib/media';

export default function CareerGraphPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--background-dark)] text-[var(--color-text-primary)] transition-colors">
      {/* ── SECTION 01: HERO ────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-24 relative overflow-hidden bg-[var(--background-dark-deep)]">
        {/* Multidimensional Topological City Grid Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.product.careerGraph.src}
            alt={MEDIA_ASSETS.product.careerGraph.alt}
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
              background: `linear-gradient(to right, #222222 0%, rgba(34, 34, 34, 0.96) 38%, rgba(34, 34, 34, 0.88) 55%, rgba(34, 34, 34, 0.42) 78%, rgba(34, 34, 34, 0.18) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #222222 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, #222222 0%, transparent 100%)`,
            }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10 space-y-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Core Subsystem &bull; Career Graph
              </span>
            </div>

            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
              Your next career may be{' '}
              <CareerGradientText variant="blue">
                closer to your current one than you think.
              </CareerGradientText>
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-3xl font-light">
              Careers don&apos;t move in straight lines. Traditional job platforms force your experience into narrow title boxes. <strong>Career Graph</strong> is being designed to map the deep connections between your capabilities, evidence, industries, and potential future directions&mdash;revealing opportunities a standard job-title search would never surface.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#interactive-graph" variant="primary" size="lg" className="shadow-lg">
                Explore an example Career Graph <ChevronRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href={ROUTES.SIGNUP} variant="secondary" size="lg">
                Start your Career OS
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-[var(--color-text-tertiary)] font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Individual core access is currently free
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Grounded in transferable capability
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                No algorithmic career assignment
              </span>
            </div>
          </div>

          {/* Hero Media: Interactive Topology Component */}
          <div className="pt-4">
            <HeroCareerGraphInterface />
          </div>
        </div>
      </section>

      {/* ── SECTION 02: JOB TITLES HIDE CAPABILITY ──────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              The Limits of the Job Title
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              A job title is only the label on top.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              When recruitment software looks at a person, it usually matches raw strings: <em>&ldquo;Firefighter seeks Firefighter role&rdquo;</em> or <em>&ldquo;Mechanical Technician seeks Mechanical Technician role.&rdquo;</em> This is a profound failure of information architecture.
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              Two people with the exact same title often possess radically different capabilities. Likewise, two completely different job titles often share deep underlying competence. Career Graph decomposes rigid job titles into functional capabilities, regulatory factors, and transferable experience, exposing lateral bridges that keyword search engines miss.
            </p>
          </div>

          <TitleVsCapabilityVisual />
        </div>
      </section>

      {/* ── SECTION 03: EXPLORE THE GRAPH (MAIN INTERACTIVE EXPLORER) ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Interactive Topology
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Start with a career. See where it can connect.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Explore how distinct professions&mdash;from emergency response and skilled mechanics to clinical healthcare, legal practice, defense logistics, and software development&mdash;connect to adjacent fields without starting your career from zero.
            </p>
          </div>

          <InteractiveCareerGraphExplorer />
        </div>
      </section>

      {/* ── SECTION 04: THE BRIDGE MATTERS ───────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Feasibility & Reality
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Transferable doesn&apos;t mean automatic.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career platforms often make irresponsible claims: <em>&ldquo;You have an 88% skill overlap, so you can do this job today!&rdquo;</em> Career OS rejects this fake precision. Having transferable skills does not mean you can legally, practically, or safely step into a new role on Monday morning.
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              A credible career progression model must always distinguish between <strong>Transferable Capability</strong> (the strengths you already demonstrate) and the <strong>Bridge Requirement</strong> (the specific certification, statutory licence, leadership track, or domain conversion you must complete).
            </p>
          </div>

          <BridgeArchitectureVisual />
        </div>
      </section>

      {/* ── SECTION 05: CAREER CHANGE WITHOUT ERASING YOUR HISTORY ──── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Real Transitions
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              A career change isn&apos;t always a restart.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Millions of professionals feel trapped in their existing field because they believe a career change requires erasing their entire working history and starting back at entry level.
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              When experience is mapped structurally, your past becomes an unfair advantage. Employers in adjacent industries frequently seek outsiders whose core operational instincts were forged in rigorous, high-accountability environments.
            </p>
          </div>

          <CareerChangeStories />
        </div>
      </section>

      {/* ── SECTION 06: GRAPH FOR STUDENTS & EARLY CAREERS ───────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Early Career & Education
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Career exploration shouldn&apos;t begin with one final answer.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Traditional career counseling often forces teenagers into high-stakes binary decisions: <em>&ldquo;Pick your college major, pick your final career.&rdquo;</em> This creates unnecessary anxiety and prematurely closes off viable futures.
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              For students and apprentices, Career Graph is designed to show how natural inclinations, school subjects, and early projects connect into multiple educational routes&mdash;vocational apprenticeships, technical diplomas, and university degrees alike&mdash;all branching into expansive occupational networks.
            </p>
          </div>

          <StudentPathwayGraph />
        </div>
      </section>

      {/* ── SECTIONS 07–09 & 12: ECOSYSTEM INTEGRATION ──────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Unified Career Architecture
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              The Graph shows possibility. Career OS makes it actionable.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Career Graph is not an isolated diagram or a standalone test. It is the connective tissue linking personal context (Career Twin), verified evidence (Career Passport), strategic reasoning (AI Career Mentor), and future market discovery (Opportunity Agent).
            </p>
          </div>

          <EcosystemIntegrationSection />
        </div>
      </section>

      {/* ── SECTION 10: LABOUR MARKET CONTEXT ────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Market Intelligence
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Career pathways exist in a real labour market.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              A theoretical pathway is only useful if it reflects real-world economic conditions. Career OS is being designed to connect Graph pathways with verified labour market intelligence as external data feeds and taxonomy integrations are deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-7 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-400 mb-2">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                Occupational & Credential Standards
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Designed to track statutory licensing bodies, apprenticeship standards, and regulated educational requirements across jurisdictions.
              </p>
            </Card>

            <Card className="p-7 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                Regional & Industry Trajectories
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Structured to evaluate how capability demand shifts across geographical hubs, emerging industrial clusters, and economic transitions.
              </p>
            </Card>

            <Card className="p-7 space-y-3 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400 mb-2">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                Responsible Market Benchmarking
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Designed to provide transparent, unhyped salary and progression benchmarking without manufacturing fake vacancy counts or artificial demand scores.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: NO SINGLE 'BEST CAREER' ─────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl p-8 sm:p-12 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Ethical Principle
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[var(--color-text-primary)]">
                A graph gives you possibilities. It shouldn&apos;t choose your life for you.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
              Career OS firmly rejects the premise that an artificial intelligence should assign you a single &ldquo;optimal career destiny.&rdquo; Career decisions are not mathematical optimization problems. They involve family responsibilities, physical geography, personal values, risk tolerance, economic necessities, and creative ambitions that no algorithm can quantify.
            </p>

            <p className="text-xs sm:text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              The Career Graph illuminates connections and clarifies the difficulty of bridges. <strong>You retain complete human agency</strong> over which pathways you choose to pursue.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: CONNECTIONS ARE NOT GUARANTEES ──────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Regulatory & Legal Reality
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[var(--color-text-primary)]">
              Connections are not guarantees.
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Career Graph identifies conceptual and capability relationships between disciplines. It does not constitute legal qualification, statutory licence equivalence, automated hiring approval, or an employment guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-lg bg-black/20 border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-[var(--color-text-primary)] block">Regulated Healthcare</span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                Clinical practice strictly requires recognized statutory licensing (e.g. NMC, GMC, state nursing boards).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-[var(--color-text-primary)] block">Legal Practice</span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                Legal representation requires jurisdiction-specific bar admissions and formal statutory credentials (e.g. SRA, Bar Standards).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-[var(--color-text-primary)] block">Licensed Trades</span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                Electrical, gas, and structural engineering work requires formal certification, safety guild registration, and statutory sign-off.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-[var(--color-border-default)] space-y-1.5">
              <span className="font-bold text-[var(--color-text-primary)] block">Public Safety</span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                Emergency response and incident command require vetted fitness examinations, physical standards, and service credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: SUBSTANTIVE FAQ ─────────────────────────────── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Questions & Governance
            </span>
            <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
              Clear, transparent answers on how Career Graph works, how it connects with your private data, and what is currently live versus designed direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                1. What is the Career Graph?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Graph is Career OS&apos;s topological model designed to connect roles, capabilities, verified evidence, industries, educational routes, and potential future career directions. It maps how experience in one field transfers into another beneath the surface of rigid job titles.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                2. How is Career Graph different from a traditional career test?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Traditional career tests ask a series of subjective multiple-choice questions and output a deterministic &ldquo;personality match.&rdquo; Career Graph is a structural map of real-world skills, bridge requirements, and industry relationships that works with your actual working evidence and Career Twin context.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                3. Does Career Graph tell me what job I should do?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. Career Graph is designed to illuminate possibilities and clarify what is required to reach them. It does not make automated decisions, dictate career paths, or rank your human suitability against a single algorithm.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                4. How does Career Graph identify transferable skills?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                By decomposing roles into underlying capabilities (e.g. diagnostic reasoning, risk evaluation, incident command, data modeling) and identifying where those exact capabilities are valued in other sectors.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                5. Does Career Graph understand career changes?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Career change is a primary design goal of Career Graph. It is specifically built to help professionals see how years of experience in one domain can give them an advantage in another, avoiding unnecessary restarts at entry level.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                6. Can it show pathways outside my current industry?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Because the Graph maps capabilities rather than industry silos, it actively highlights cross-industry pivots (such as military logistics into commercial supply chain, or automotive technicians into industrial automation).
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                7. Does it include apprenticeships, skilled trades, and vocational routes?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Absolutely. Career OS treats vocational apprenticeships, technical certifications, degree programs, and self-directed portfolios as equally valid nodes within the same unified graph ontology.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                8. Can high school and university students use Career Graph?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. For students, Career Graph is designed to explore how school subjects, early interests, and practical projects connect to diverse educational pathways and high-demand occupational clusters.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                9. How does Career Graph connect with my Career Twin?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Graph provides the broader structural map of possibilities. Your Career Twin injects personal context—such as your location constraints, target salary, family commitments, and working preferences—so only relevant directions surface.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                10. How does Career Passport evidence influence graph pathways?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                When you log confirmed credentials, verified project artifacts, and endorsements in your Career Passport, the Graph can highlight pathways where your existing evidence already satisfies major bridge criteria.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                11. Does Career Graph currently use live labour-market feeds?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Graph is being designed to incorporate verified labour-market intelligence, occupational taxonomies, and credential standards as external verified feeds are connected. We do not display manufactured vacancy counts or fake demand scores.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                12. Are the pathways shown on this page guaranteed?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No. The pathways demonstrated on this page are illustrative product concepts. Actual qualification requirements, statutory licensing, employer standards, and individual suitability vary by jurisdiction.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                13. How are heavily regulated professions handled?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Regulated roles (such as nursing, medicine, legal advocacy, and statutory gas fitting) always require formal statutory credentials. Career Graph explicitly marks these as &ldquo;Qualification Required&rdquo; and identifies the specific statutory bridge required.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                14. Can Career Graph assist with entrepreneurship and founding a business?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. For experienced technicians, engineers, and specialists, Career Graph highlights pathways into independent technical contracting, consultancy practices, and venture creation.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                15. How does Career Graph work alongside the AI Career Mentor?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Graph identifies structural possibilities; the AI Career Mentor acts as your coach and reasoning partner, helping you evaluate whether a specific transition matches your lifestyle, motivations, and timeline.
              </p>
            </Card>

            <Card className="p-6 sm:p-7 space-y-2 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                16. Is Career OS free for individual users?
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Yes. Individual core access to Career OS&mdash;including Career Twin creation, Career Passport evidence logging, and Graph exploration&mdash;is currently free for individual professionals, students, and career changers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: FINAL CTA BANNER ────────────────────────────── */}
      <section className="py-20 bg-[var(--background-dark-deep)] border-t border-[var(--color-border-default)] text-[var(--color-text-primary)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[var(--color-text-primary)]">
              Your experience may connect to more than one future.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
              Career OS is being built to help you see the capabilities you&apos;ve already developed, the bridges you may need, and the directions worth exploring next.
            </p>
            <div className="pt-2 text-xs font-mono text-[var(--color-taupe-300)]">
              Free for individuals &bull; Universal career infrastructure &bull; Privacy-first
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shadow-lg">
              Start your Career OS <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="lg">
              Meet your AI Mentor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
