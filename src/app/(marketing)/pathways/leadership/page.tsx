import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Users, ShieldCheck, Building2, TrendingUp, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive & Organisational Leadership Pathways | Career OS",
  description: "Transition from individual contributor to team manager, director, vice president, and C-suite executive with verified leadership governance artifacts.",
  alternates: {
    canonical: "https://career-os.com/pathways/leadership",
  },
};

export default function LeadershipPathwayPage() {
  const leadershipTiers = [
    {
      tier: "Individual Contributor to Team Lead",
      desc: "Transition from direct execution to team mentorship, sprint velocity optimization, and project scoping deliverables.",
    },
    {
      tier: "Manager to Functional Director",
      desc: "Lead multiple cross-functional teams, allocate annual operational budgets, and build scalable talent hiring and retention systems.",
    },
    {
      tier: "Vice President to C-Suite Executive",
      desc: "Set multi-year enterprise strategy, manage board and investor communications, and oversee enterprise capital allocation.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--background-dark-deep)] py-20">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="section-label flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              Executive & Management Direction
            </span>
            <TechnicalBadge variant="lavender">STRATEGIC GOVERNANCE</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Cultivating executive judgment and{" "}
            <CareerGradientText variant="blue">
              organizational impact.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Leadership requires a fundamental shift from direct execution to organizational stewardship, strategic capital allocation, and talent development. Career OS tracks leadership milestones, governance credentials, and cross-functional business outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Explore Leadership Pathways Free
            </Button>
            <Button href={ROUTES.PATHWAYS_CAREER_PROGRESSION} variant="secondary" size="lg">
              View Progression Rubrics
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="space-y-4">
            <span className="section-label text-[#CDBBD2]">Leadership Continuum</span>
            <h2 className="text-display-section font-normal text-white">Three stages of executive escalation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTiers.map((t) => (
              <div key={t.tier} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{t.tier}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial bg-[var(--background-dark-deep)] text-center">
        <div className="container-editorial max-w-4xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Build your executive portfolio.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Log governance achievements, board memos, and organizational turnarounds into your Career Passport.
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
