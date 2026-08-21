import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { TrendingUp, Network, Globe2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Outlook & Labor Market Intelligence | Career OS",
  description: "Sector-by-sector labor market research, automation risk index, emerging skill demands, and regional wage benchmarks across the United States.",
  alternates: {
    canonical: "https://career-os.com/resources/industries",
  },
};

export default function ResourcesIndustriesPage() {
  const industries = [
    {
      title: "Clean Energy & Grid Modernization",
      signal: "HIGH DEMAND GROWTH",
      desc: "Surging demand for master electricians, solar/wind technicians, substation engineers, and battery storage specialists driven by federal infrastructure investment.",
    },
    {
      title: "Healthcare Informatics & Clinical Operations",
      signal: "CRITICAL CAPACITY",
      desc: "Expanding need for clinicians with structured data literacy who can implement AI workflow tools and streamline patient records without increasing burnout.",
    },
    {
      title: "Applied AI Platform & Data Infrastructure",
      signal: "EVOLVING TAXONOMY",
      desc: "Transition from pure model development to reliable production deployment, evaluation auditing, privacy guardrails, and latency optimization.",
    },
    {
      title: "Advanced Precision Manufacturing",
      signal: "RESILIENT INDUSTRIAL",
      desc: "Domestic supply chain reshoring driving multi-year hiring across precision CNC machinists, robotics maintenance technicians, and quality engineers.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Macro Labor Intelligence</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Sector trajectories &{" "}
            <CareerGradientText variant="blue">
              labor market demand.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Real-time intelligence on macro industry shifts, technology adoption cycles, regional demand variations, and long-term automation risk.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">{ind.title}</h3>
                  <TechnicalBadge variant="champagne">{ind.signal}</TechnicalBadge>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
