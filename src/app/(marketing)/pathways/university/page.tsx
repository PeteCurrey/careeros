import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  FileCheck,
  Sparkles,
  BookOpen,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University & Degree Pathways | Career OS",
  description: "Maximize academic degree ROI. Connect research portfolios, dissertations, and campus internships directly into verified industry capabilities.",
  alternates: {
    canonical: "https://career-os.com/pathways/university",
  },
};

import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";

export default function UniversityPathwayPage() {
  const routes = [
    {
      title: "Undergraduate Major Specialization",
      desc: "Transform foundational academic coursework, laboratory research, and honors dissertations into verifiable competency records in your Career Passport.",
    },
    {
      title: "Integrated Co-Op & Summer Placements",
      desc: "Convert seasonal corporate internships and industrial placements into persistent evidence records before on-campus graduation recruiting begins.",
    },
    {
      title: "Postgraduate & Academic Research",
      desc: "Structure Master&apos;s and Doctoral research methodologies, peer-reviewed publications, and grant project management for academic and industry leadership.",
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
              Higher Education & Academia
            </span>
            <TechnicalBadge variant="lavender">RESEARCH & RIGOR</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Maximizing university value into{" "}
            <CareerGradientText variant="blue">
              market capability.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            A university degree provides foundational theory and analytical depth. Career OS bridges the gap between academic transcripts and real-world employment by transforming student projects, research publications, and internships into demonstrable evidence.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Explore University Pathways Free
            </Button>
            <Button href={ROUTES.PATHWAYS_COLLEGE} variant="secondary" size="lg">
              Compare with Community College
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="section-label text-[#2F8FFF]">Who It Is For</span>
              <h2 className="text-2xl font-bold text-white">Candidates pursuing university degrees</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Students enrolled in undergraduate, master&apos;s, or doctoral programs; academic researchers translating findings to industry; and professionals evaluating return on investment for graduate business, law, or medical degrees.
              </p>
            </div>

            <div className="space-y-4">
              <span className="section-label text-[#CDBBD2]">When It Makes Sense</span>
              <h2 className="text-2xl font-bold text-white">Strategic decision criteria</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                When target occupations (such as medicine, civil engineering, law, scientific research, or institutional finance) legally mandate bachelor&apos;s or advanced degrees, or when you are building deep interdisciplinary domain depth.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[var(--color-border-default)]">
            <h3 className="text-lg font-bold text-white">University Progression Dimensions</h3>
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
            Turn your degree into verified professional equity.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Build your Career Twin today and let your AI domain mentor map your coursework to real industry benchmarks.
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
