import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { GraduationCap, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education, Credentials & Accreditation Guides | Career OS",
  description: "Understand credential validity, accreditation bodies, degree ROI calculations, and verified certificate standards across higher education.",
  alternates: {
    canonical: "https://career-os.com/resources/education",
  },
};

export default function ResourcesEducationPage() {
  const topics = [
    {
      title: "Regional vs National Accreditation",
      desc: "How accreditation bodies impact credit transferability, employer recognition, and graduate school admissions in the United States.",
    },
    {
      title: "Credential Validity & Stackable Sequences",
      desc: "How micro-credentials and industry certificates stack into full associate or bachelor degree programs with verified credit mapping.",
    },
    {
      title: "Higher Education Return on Investment (ROI)",
      desc: "Empirical analysis of degree costs, debt-to-income ratios, and earning trajectories across major collegiate disciplines.",
    },
    {
      title: "Tamper-Proof Credential Vaulting",
      desc: "How Career OS uses cryptographic hashes to anchor verifiable diplomas, transcripts, and certificates directly into candidate passports.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Academic & Credential Standards</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Accreditation, credentials &{" "}
            <CareerGradientText variant="blue">
              learning return on investment.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Make informed higher education decisions with transparent guidance on accreditation, credit portability, and degree economics.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{t.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
