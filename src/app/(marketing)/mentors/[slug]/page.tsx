import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { getMentorBySlug, getAllMentorSlugs } from "@/content/mentors/mentorRegistry";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import {
  Bot,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Network,
  Sparkles,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

interface MentorProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMentorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MentorProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const mentor = getMentorBySlug(slug);
  if (!mentor) return { title: "Mentor Profile | Career OS" };

  return {
    title: `${mentor.name} — AI Career Mentor in ${mentor.domainShort} | Career OS`,
    description: `${mentor.profileDescription} System-assigned AI domain mentor persona.`,
    alternates: {
      canonical: `https://career-os.com/mentors/${mentor.slug}`,
    },
  };
}

export default async function MentorProfilePage({ params }: MentorProfilePageProps) {
  const { slug } = await params;
  const mentor = getMentorBySlug(slug);

  if (!mentor) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${mentor.name} (Career OS AI Career Mentor Persona)`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: mentor.profileDescription,
    url: `https://career-os.com/mentors/${mentor.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Career OS Inc.",
      url: "https://career-os.com",
    },
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 01. Profile Hero Section ── */}
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)] overflow-hidden">
        <div className="container-editorial space-y-8 max-w-6xl">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] font-mono">
              <Link href={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href={ROUTES.MENTORS} className="hover:text-white transition-colors">Mentors</Link>
              <span>/</span>
              <span className="text-[var(--color-text-primary)]">{mentor.name}</span>
            </nav>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold text-[var(--color-lavender-light)] bg-black/60 rounded border border-[var(--color-lavender-base)]/40">
                <Bot className="w-3.5 h-3.5 text-[var(--color-lavender-base)]" />
                <span>AI Career Mentor Persona</span>
              </span>
              <TechnicalBadge variant="blue">System-Assigned</TechnicalBadge>
            </div>
          </div>

          {/* Profile Split Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-base)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial relative aspect-[4/3] lg:aspect-auto lg:h-[460px]">
                <Image
                  src={mentor.portraitSrc}
                  alt={mentor.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-dark-deep)] via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-black/70 backdrop-blur-sm border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider">
                    Domain Specialization
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {mentor.roleTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2F8FFF] uppercase tracking-widest">
                  {mentor.domain}
                </span>
                <h1 className="text-display-section font-serif font-normal tracking-tight text-white">
                  {mentor.name}
                </h1>
                <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
                  {mentor.profileDescription}
                </p>
              </div>

              {/* Working Style Banner */}
              <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DDD36D]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Working Style & Advisory Approach
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {mentor.workingStyle}
                </p>
              </div>

              {/* Career Stages Supported */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
                  Career Stages Calibrated For:
                </span>
                <div className="flex flex-wrap gap-2">
                  {mentor.careerStages.map((stage) => (
                    <span
                      key={stage}
                      className="text-xs font-medium text-white bg-white/5 border border-white/10 px-3 py-1 rounded-[var(--radius-sm)]"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              {/* System Assignment Notice */}
              <div className="pt-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[var(--color-text-tertiary)] font-mono">
                  Career OS assigns mentors automatically based upon context.
                </div>
                <Button href={ROUTES.SIGNUP} variant="primary" size="md">
                  Start Your Career OS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. Specialist Areas & Typical Inquiries ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Specialist Focus Areas */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="section-label text-[#2F8FFF]">Domain Focus</span>
                <h2 className="text-2xl font-bold text-white">Core Specialist Capabilities</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Targeted reasoning models and career frameworks embedded in {mentor.name}&apos;s persona.
                </p>
              </div>

              <div className="space-y-3">
                {mentor.specialistAreas.map((area, idx) => (
                  <div
                    key={area}
                    className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-[#2F8FFF] mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{area}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Typical Questions Handled */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="section-label text-[#CDBBD2]">Advisory Scenarios</span>
                <h2 className="text-2xl font-bold text-white">Typical Inquiries & Strategy Sprints</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Real strategic trade-offs candidates address during consultation sessions.
                </p>
              </div>

              <div className="space-y-3">
                {mentor.typicalQuestions.map((q) => (
                  <div
                    key={q}
                    className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start gap-3"
                  >
                    <HelpCircle className="w-4 h-4 text-[#DDD36D] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed italic">
                      &ldquo;{q}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Sample Strategic Consultation ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-8 max-w-4xl">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="section-label text-[#2F8FFF]">Illustrative Advisory Flow</span>
            <h2 className="text-display-section font-normal text-white">
              How {mentor.name} analyzes evidence.
            </h2>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Real consultation example grounded in Career Passport records and Career Graph benchmarking.
            </p>
          </div>

          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6 shadow-editorial">
            {/* Step 1: User Dilemma */}
            <div className="p-5 rounded bg-white/5 border border-white/10 space-y-2 relative">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-bold">
                Candidate Query
              </div>
              <p className="text-sm text-[var(--color-text-primary)] italic">
                &ldquo;{mentor.sampleConsultation.userPrompt}&rdquo;
              </p>
            </div>

            {/* Step 2: Mentor Analysis */}
            <div className="space-y-3 pl-4 border-l-2 border-[#CDBBD2]">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#CDBBD2]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {mentor.name}&apos;s Diagnostic
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {mentor.sampleConsultation.mentorAnalysis}
              </p>
            </div>

            {/* Step 3: Recommended Move */}
            <div className="p-6 rounded bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.3)] space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2F8FFF]">
                  Recommended Next Action
                </span>
                <TechnicalBadge variant="champagne">High Strategic Value</TechnicalBadge>
              </div>
              <h3 className="text-base font-bold text-white">
                {mentor.sampleConsultation.recommendedMove}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] pt-1">
                {mentor.sampleConsultation.evidenceRationale}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. Career Passport & Career Graph Integration ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Passport Evidence Handled */}
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-[#34D399]" />
                <h3 className="text-base font-bold text-white">Career Passport Evidence Evaluated</h3>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                {mentor.passportEvidenceTypes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Graph Clusters */}
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
              <div className="flex items-center gap-2.5">
                <Network className="w-5 h-5 text-[#2F8FFF]" />
                <h3 className="text-base font-bold text-white">Career Graph Knowledge Clusters</h3>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                {mentor.careerGraphDomains.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Boundaries Box */}
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#DDD36D]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Persona Boundaries & Limitations
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
              {mentor.boundaries.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="text-[#DDD36D] font-mono">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 05. Related Pathways & Resources ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-8 max-w-6xl">
          <h2 className="text-xl font-bold text-white">Explore Connected Pathways & Intelligence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mentor.relatedPathways.concat(mentor.relatedResources).map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-[#2F8FFF]/40 transition-colors flex items-center justify-between text-xs font-semibold text-white group"
              >
                <span>{rel.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2F8FFF] transform transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. Bottom CTA ── */}
      <section className="section-editorial bg-[var(--color-surface-base)] text-center">
        <div className="container-editorial max-w-2xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Let Career OS assign the right mentor for your trajectory.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Create your account in 2 minutes. Career OS correlates your Career Twin and assigns your dedicated mentor persona automatically.
          </p>
          <div className="pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start Free — Create Your Career OS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
