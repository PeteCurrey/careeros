import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { BookOpen, Compass, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Career Playbooks & Transition Guides | Career OS",
  description: "Step-by-step technical transition guides, promotion strategy rubrics, salary negotiation frameworks, and portfolio building playbooks.",
  alternates: {
    canonical: "https://career-os.com/resources/guides",
  },
};

export default function ResourcesGuidesPage() {
  const playbooks = [
    {
      title: "The Staff Engineering Promotion Blueprint",
      desc: "How to move from Senior Engineer to Staff Architect by leading multi-team technical specifications and documenting cross-functional risk reduction.",
    },
    {
      title: "The Military-to-Civilian MOS Translation Guide",
      desc: "A comprehensive playbook for converting tactical combat, logistics, and intelligence duties into corporate operations terminology.",
    },
    {
      title: "The Bedside-to-Informatics Healthcare Transition",
      desc: "Step-by-step roadmap for registered nurses transitioning into digital health, hospital quality improvement, and clinical operations.",
    },
    {
      title: "The Journeyman-to-Contractor Business Launch Playbook",
      desc: "How certified tradespeople estimate commercial bids, obtain bonding, manage cash flow, and launch independent contracting firms.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Strategic Playbooks</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Actionable playbooks for{" "}
            <CareerGradientText variant="blue">
              critical career moments.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Detailed, research-backed guides written by domain experts and career researchers to help you navigate high-stakes professional milestones.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {playbooks.map((p) => (
              <div key={p.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
