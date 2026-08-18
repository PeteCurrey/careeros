import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Compass, Network, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Taxonomy & Role Profiles | Career OS Resources",
  description: "Comprehensive profiles across hundreds of modern occupations with real-world project deliverables, verified competency maps, and salary benchmarks.",
  alternates: {
    canonical: "https://career-os.com/resources/careers",
  },
};

export default function ResourcesCareersPage() {
  const clusters = [
    {
      title: "Systems Software & Cloud Infrastructure",
      roles: ["Staff Distributed Systems Engineer", "Site Reliability Architect", "AI Infrastructure Specialist"],
      desc: "Distributed compute, container orchestration, asynchronous event streaming, and cloud resilience.",
    },
    {
      title: "Clinical Healthcare & Biomedical Informatics",
      roles: ["Clinical Quality Director", "Health Informatics Specialist", "Clinical Trial Operations Manager"],
      desc: "EHR data architecture, clinical governance, patient safety audits, and biomedical compliance.",
    },
    {
      title: "Essential Skilled Trades & Automation",
      roles: ["Master Industrial Electrician", "Robotics Mechatronics Technician", "HVAC/R Commercial Contractor"],
      desc: "High-voltage distribution, green grid microgrids, CNC precision tooling, and building automation.",
    },
    {
      title: "Corporate Strategy, Finance & Operations",
      roles: ["Corporate Development Lead", "Divisional Finance Director", "Supply Chain Command Specialist"],
      desc: "Capital allocation models, M&A due diligence, operational resilience, and executive governance.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Occupational Intelligence</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Day-to-day realities,{" "}
            <CareerGradientText variant="blue">
              verified competencies.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Career OS profiles are not generic job descriptions. Each role profile details required foundational capabilities, real-world project examples, average compensation trajectory, and adjacent lateral transition routes.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clusters.map((c) => (
              <div key={c.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{c.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">{c.desc}</p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-subtle)]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">Sample Benchmarked Roles:</span>
                  <ul className="text-xs text-white space-y-1">
                    {c.roles.map((r) => (
                      <li key={r} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#2F8FFF]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
