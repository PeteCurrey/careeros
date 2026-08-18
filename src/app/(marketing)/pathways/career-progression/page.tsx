import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { TrendingUp, GitBranch, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Progression & Promotion Pathways | Career OS",
  description: "Advance systematically from individual contributor to senior, staff, and principal leadership with evidence benchmarking and promotion rubrics.",
  alternates: {
    canonical: "https://career-os.com/pathways/career-progression",
  },
};

export default function CareerProgressionPathwayPage() {
  const pillars = [
    {
      title: "Capability Gap Auditing",
      desc: "Benchmark your accumulated Career Passport evidence against real-world promotion rubrics to identify precise missing milestones.",
    },
    {
      title: "Cross-Functional Strategic Impact",
      desc: "Structure high-leverage project deliverables, stakeholder consensus artifacts, and operational cost reductions before performance reviews.",
    },
    {
      title: "Regional Compensation Intelligence",
      desc: "Access verified market compensation benchmarks by percentile, role scope, and geographic tier to negotiate with complete market clarity.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--background-dark-deep)] py-20 lg:py-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <CareerAtmosphere className="absolute inset-0" intensity={0.4} animate={false} />
        </div>
        <CareerPathwayConnector variant="branching" className="opacity-15" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="section-label flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              Promotion & Advancement
            </span>
            <TechnicalBadge variant="champagne">SYSTEMATIC ADVANCEMENT</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Systematic career progression based on{" "}
            <CareerGradientText variant="blue">
              demonstrated impact.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Advancement should not be a guessing game. Career OS benchmarks your current evidence against actual industry promotion rubrics, identifying high-leverage milestones to target before your annual performance review.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Benchmark Your Trajectory Free
            </Button>
            <Button href={ROUTES.PATHWAYS_LEADERSHIP} variant="secondary" size="lg">
              Explore Leadership Pathways
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="space-y-4">
            <span className="section-label text-[#DDD36D]">Advancement Framework</span>
            <h2 className="text-display-section font-normal text-white">How Career OS drives promotion readiness</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial bg-[var(--background-dark-deep)] text-center">
        <div className="container-editorial max-w-4xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Build your promotion portfolio.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Log cross-functional deliverables, metrics moved, and leadership impact into your Career Passport.
          </p>
          <div className="pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start Free on Career OS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
