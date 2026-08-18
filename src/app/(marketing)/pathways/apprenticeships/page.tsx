import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import {
  Wrench,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  FileCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apprenticeship Pathways | Career OS",
  description: "Combine paid full-time employment with structured technical learning. Earn accredited qualifications with zero student debt and direct seniority.",
  alternates: {
    canonical: "https://career-os.com/pathways/apprenticeships",
  },
};

import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";

export default function ApprenticeshipsPathwayPage() {
  const routes = [
    {
      title: "Degree & Corporate Apprenticeships",
      desc: "Earn a fully accredited bachelor&apos;s or master&apos;s degree paid by leading corporate employers in software engineering, cybersecurity, finance, and supply chain.",
    },
    {
      title: "Registered Vocational Apprenticeships",
      desc: "State and federally registered apprenticeship programs (RAPs) in electrical systems, precision manufacturing, industrial mechanics, and green energy infrastructure.",
    },
    {
      title: "Early Career Youth Apprenticeships",
      desc: "High school and college bridge programs combining dual-enrollment coursework with supervised paid work placements.",
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
              Earn While You Learn
            </span>
            <TechnicalBadge variant="blue">DEBT-FREE MASTERY</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            The premier route to{" "}
            <CareerGradientText variant="blue">
              debt-free professional mastery.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Apprenticeships are rapidly expanding across engineering, digital systems, healthcare, and advanced manufacturing. Career OS treats apprenticeship credentials with equal prestige to collegiate degrees, anchoring verified field deliverables in your Career Passport.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Explore Apprenticeship Pathways Free
            </Button>
            <Button href={ROUTES.PATHWAYS_TRADES} variant="secondary" size="lg">
              Explore Skilled Trades
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="section-label text-[#2F8FFF]">Candidate Profile</span>
              <h2 className="text-2xl font-bold text-white">Who apprenticeships are for</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Hands-on learners who thrive in applied workplace environments, career starters seeking immediate income without student loans, and career changers looking for structured on-the-job reskilling with guaranteed employer sponsorship.
              </p>
            </div>

            <div className="space-y-4">
              <span className="section-label text-[#DDD36D]">When It Makes Sense</span>
              <h2 className="text-2xl font-bold text-white">Why apprenticeships lead the market</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Apprentices graduate with 3–4 years of demonstrated workplace seniority while university peers are just entering entry-level applicant pools. Employers retain over 90% of completed apprentices.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[var(--color-border-default)]">
            <h3 className="text-lg font-bold text-white">Core Apprenticeship Models</h3>
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

      <section className="section-editorial bg-[var(--background-dark-deep)] text-center">
        <div className="container-editorial max-w-4xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Log your on-the-job hours and skills.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Career OS automatically logs your apprentice deliverables into a portable, verified Career Passport.
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
