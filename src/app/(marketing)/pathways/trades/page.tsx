import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Wrench, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skilled Trades & Craft Pathways | Career OS",
  description: "Master modern electrical systems, precision manufacturing, HVAC/R, plumbing, and industrial robotics with direct routes to contractor enterprise ownership.",
  alternates: {
    canonical: "https://career-os.com/pathways/trades",
  },
};

import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";

export default function TradesPathwayPage() {
  const tradeClusters = [
    {
      title: "Electrical & Green Power Infrastructure",
      desc: "Residential, commercial, and industrial electrical systems, solar microgrid installations, and municipal EV charging infrastructure.",
    },
    {
      title: "HVAC/R & Intelligent Building Systems",
      desc: "Heat pump technology, commercial refrigeration, industrial ventilation, and automated building management systems.",
    },
    {
      title: "Precision Machining & Mechatronics",
      desc: "CNC multi-axis milling, industrial robotics maintenance, aerospace component fabrication, and PLC automation programming.",
    },
    {
      title: "Plumbing, Piping & Hydraulic Systems",
      desc: "Commercial mechanical piping, water reclamation systems, medical gas piping, and high-pressure steam distribution.",
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
              Essential Infrastructure & Mastery
            </span>
            <TechnicalBadge variant="champagne">HIGH EARNING AUTONOMY</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Skilled trades as high-earning,{" "}
            <CareerGradientText variant="gold">
              essential infrastructure.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Skilled trades form the backbone of modern civilization. With increasing electrification, automation, and infrastructure renewal, certified master tradespeople command top-tier compensation, unparalleled job security, and rapid routes to independent business ownership.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Explore Trade Pathways Free
            </Button>
            <Button href={ROUTES.PATHWAYS_APPRENTICESHIPS} variant="secondary" size="lg">
              View Apprenticeship Tracks
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="space-y-4">
            <span className="section-label text-[#DDD36D]">High-Growth Sectors</span>
            <h2 className="text-display-section font-normal text-white">Modern technical trade clusters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeClusters.map((t) => (
              <div key={t.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial bg-[var(--background-dark-deep)] text-center">
        <div className="container-editorial max-w-4xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Log your trade certifications and field hours.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Store OSHA cards, state licenses, and completed commercial projects in your tamper-proof Career Passport.
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
