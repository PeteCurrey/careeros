import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Sparkles, Building2, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venture Creation & Founder Intelligence | Career OS Resources",
  description: "Guides on customer discovery, co-founder equity alignment, unit economic modeling, and launching sustainable enterprises.",
  alternates: {
    canonical: "https://career-os.com/resources/entrepreneurship",
  },
};

export default function ResourcesEntrepreneurshipPage() {
  const founderGuides = [
    {
      title: "Pre-Launch Customer Discovery & LOI Frameworks",
      desc: "How to conduct 20+ unbiased problem discovery interviews and secure commercial Letters of Intent before writing code or raising capital.",
    },
    {
      title: "Co-Founder Capability Matrices & Vesting",
      desc: "Structuring founding team equity, dynamic vesting schedules, and complementary skill distribution between technical and commercial leaders.",
    },
    {
      title: "Bootstrapping vs Institutional Venture Capital",
      desc: "Evaluating the financial trade-offs, governance consequences, and dilution differences between customer-funded revenue and VC funding.",
    },
    {
      title: "Intellectual Property & Prototype Anchoring",
      desc: "Protecting early trade secrets, code repositories, and patent applications using cryptographic evidence verification in your Career Passport.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Founder Intelligence</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Practical intelligence for{" "}
            <CareerGradientText variant="blue">
              venture builders.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Everything you need to de-risk a new business idea, structure founding agreements, and build sustainable enterprise value.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founderGuides.map((g) => (
              <div key={g.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{g.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
