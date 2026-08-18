import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { GitBranch, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Change & Lateral Transition Pathways | Career OS",
  description: "Pivot into a new industry without starting over. Map transferable capability vectors, identify adjacent sectors, and build targeted bridge evidence.",
  alternates: {
    canonical: "https://career-os.com/pathways/career-change",
  },
};

import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";

export default function CareerChangePathwayPage() {
  const transitionPillars = [
    {
      title: "Transferable Capability Vectoring",
      desc: "The Career Graph maps high-overlap competencies between your past domain and target industry, ensuring you never start from zero.",
    },
    {
      title: "60–90 Day Bridge Evidence Sprints",
      desc: "Targeted project sprints designed to produce 2–3 demonstrable deliverables proving domain-specific capability in your new sector.",
    },
    {
      title: "Default-Private Exploration Mode",
      desc: "Explore new industries, assess salary expectations, and engage with domain mentors in total privacy without alerting current employers.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--background-dark-deep)] py-20">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <CareerAtmosphere className="absolute inset-0" intensity={0.4} animate={false} />
        </div>
        <CareerPathwayConnector variant="branching" className="opacity-15" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="section-label flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              Lateral Pivots & Reinvention
            </span>
            <TechnicalBadge variant="blue">ZERO RESTART PENALTY</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Career change without{" "}
            <CareerGradientText variant="blue">
              starting from scratch.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Changing careers does not mean discarding past accomplishments. Career OS analyzes your existing skills taxonomy and maps direct capability bridges into adjacent high-growth industries, preserving the equity you have built.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Map Your Transferable Skills Free
            </Button>
            <Button href={ROUTES.PATHWAYS} variant="secondary" size="lg">
              Explore All Pathways
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="space-y-4">
            <span className="section-label text-[#2F8FFF]">Reinvention Strategy</span>
            <h2 className="text-display-section font-normal text-white">How Career OS bridges you into new sectors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transitionPillars.map((p) => (
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
            Discover adjacent opportunities.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Input your background into the Career Twin and discover where your skills command the highest premium.
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
