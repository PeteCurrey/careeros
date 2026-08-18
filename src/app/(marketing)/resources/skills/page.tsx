import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Network, FileCheck2, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills Ontologies & Modular Competencies | Career OS Resources",
  description: "Explore our mapping of over 12,000 discrete technical, trade, and human capabilities cross-referenced with O*NET and global standards.",
  alternates: {
    canonical: "https://career-os.com/resources/skills",
  },
};

export default function ResourcesSkillsPage() {
  const skillDomains = [
    {
      title: "Applied Technical & Software Skills",
      desc: "Distributed systems, cloud networking, database indexing, API contract design, infrastructure as code, and security audits.",
    },
    {
      title: "Skilled Trade & Craft Capabilities",
      desc: "National Electrical Code (NEC) interpretation, schematic diagnosis, multi-axis CNC programming, hydraulic piping, and high-pressure welding.",
    },
    {
      title: "Clinical & Life Science Competencies",
      desc: "Electronic Health Record (EHR) data governance, clinical trial protocol design, Good Clinical Practice (GCP), and patient triage.",
    },
    {
      title: "Strategic Executive & Leadership Strengths",
      desc: "Capital allocation modeling, cross-team conflict resolution, multi-tier budget forecasting, talent development, and board reporting.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <Network className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Skills Architecture</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Modular competency mapping for{" "}
            <CareerGradientText variant="blue">
              every discipline.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Skills are the atomic units of modern careers. Career OS maps capabilities into structured, portable graphs rather than static resume bullets.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillDomains.map((s) => (
              <div key={s.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
