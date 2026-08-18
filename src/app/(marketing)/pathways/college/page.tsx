import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  FileCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Technical College Pathways | Career OS",
  description: "Leverage 2-year associate degrees, credit transfer articulation, and technical certificates to enter high-demand careers with zero excess debt.",
  alternates: {
    canonical: "https://career-os.com/pathways/college",
  },
};

export default function CollegePathwayPage() {
  const routes = [
    {
      title: "2+2 University Transfer Articulation",
      desc: "Complete general education and major prerequisites at community college, then transfer seamlessly into a 4-year bachelor program with verified credit mapping.",
    },
    {
      title: "Applied Associate Degrees (AAS)",
      desc: "Direct-to-workforce 2-year programs in clinical nursing support, cyber defense, mechatronics, and biotechnology manufacturing.",
    },
    {
      title: "Targeted Technical Micro-Credentials",
      desc: "Accelerated 16–24 week certificate sequences aligned directly with regional employer hiring clusters.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Hero Section ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--background-dark-deep)] py-20">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="section-label flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              Higher Education Pathways
            </span>
            <TechnicalBadge variant="blue">APPLIED & TRANSFERABLE</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Community & technical college as a{" "}
            <CareerGradientText variant="blue">
              strategic launchpad.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Community and technical colleges provide high-quality, cost-effective education. Career OS maps credit articulation agreements, certificate-to-degree bridges, and employer hiring pipelines to ensure your coursework compounds into demonstrable professional equity.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Explore College Pathways Free
            </Button>
            <Button href={ROUTES.PATHWAYS_UNIVERSITY} variant="secondary" size="lg">
              Compare with 4-Year University
            </Button>
          </div>
        </div>
      </section>

      {/* ── 02. Who It Is For & When It Makes Sense ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="section-label text-[#2F8FFF]">Candidate Profile</span>
              <h2 className="text-2xl font-bold text-white">Who this pathway is for</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Students and professionals seeking debt-conscious higher education, adults balancing work and study, candidates aiming to rebuild academic GPA for competitive transfers, and technical learners seeking applied hands-on laboratory experience.
              </p>
            </div>

            <div className="space-y-4">
              <span className="section-label text-[#CDBBD2]">Strategic Timing</span>
              <h2 className="text-2xl font-bold text-white">When community college makes sense</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                When you want to graduate with minimal or zero debt, when local regional employers have direct hiring agreements with campus labs, or when you are exploring multiple academic disciplines before committing to a 4-year major.
              </p>
            </div>
          </div>

          {/* 3 Core Routes */}
          <div className="space-y-4 pt-6 border-t border-[var(--color-border-default)]">
            <h3 className="text-lg font-bold text-white">Strategic Progression Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {routes.map((r) => (
                <div key={r.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                  <h4 className="text-sm font-bold text-white">{r.title}</h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. How Career OS Powers This Pathway ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-10 max-w-5xl">
          <div className="space-y-2">
            <span className="section-label text-[#2F8FFF]">System Architecture</span>
            <h2 className="text-display-section font-normal text-white">How Career OS transforms college outcomes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <FileCheck className="w-6 h-6 text-[#34D399]" />
              <h3 className="text-sm font-bold text-white">Career Passport Evidence</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Log laboratory coursework, capstone design projects, and industry certifications as verified credentials rather than passive transcript lines.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <GitBranch className="w-6 h-6 text-[#2F8FFF]" />
              <h3 className="text-sm font-bold text-white">Career Graph Transfer Bridges</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Map transfer prerequisites directly into accredited university bachelor programs with verified credit articulation alignment.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3">
              <Sparkles className="w-6 h-6 text-[#DDD36D]" />
              <h3 className="text-sm font-bold text-white">Assigned Domain Mentor</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Receive continuous trade-off guidance on transferring vs entering the workforce directly with an applied associate degree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. Bottom Navigation & CTA ── */}
      <section className="section-editorial bg-[var(--color-surface-base)]">
        <div className="container-editorial max-w-4xl space-y-8 text-center">
          <h2 className="text-display-section font-normal text-white">
            Explore All Higher Education & Technical Pathways
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={ROUTES.PATHWAYS_APPRENTICESHIPS} className="text-xs font-semibold text-[#6BB8FF] hover:underline p-2">
              &larr; Apprenticeship Pathways
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href={ROUTES.PATHWAYS_UNIVERSITY} className="text-xs font-semibold text-[#6BB8FF] hover:underline p-2">
              University Pathways &rarr;
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href={ROUTES.PATHWAYS_TRADES} className="text-xs font-semibold text-[#6BB8FF] hover:underline p-2">
              Skilled Trades &rarr;
            </Link>
          </div>
          <div className="pt-4">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start Free on Career OS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
