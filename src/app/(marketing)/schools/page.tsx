import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { ImageHoverRevealCard } from "@/components/brand/ImageHoverRevealCard";
import { GraduationCap, ShieldCheck, Users, School, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School & District Institutional Hub | Career OS",
  description: "Institutional career readiness infrastructure for school districts. FERPA-compliant student safeguarding, counselor capacity scaling, and verified progression.",
  alternates: {
    canonical: "https://career-os.com/schools",
  },
};

export default function SchoolsHubPage() {
  const schoolSubpages = [
    {
      title: "Educator & Counselor Workflows",
      href: "/schools/educators",
      desc: "Multiply counselor impact with structured cohort tracking, student interest discovery summaries, and automated graduation pathway audits.",
      imageSrc: "/media/schools/audience_schools.jpg",
      imageAlt: "School educators and counselors collaborating on student career pathways",
    },
    {
      title: "Minor Safeguarding & Youth Safety",
      href: "/schools/student-safety",
      desc: "Default-private student profiles, strict recruiter messaging hard-blocks for minors, and emergency welfare escalation protocols.",
      imageSrc: "/media/schools/school_privacy_architecture_hero.jpg",
      imageAlt: "Student safeguarding and secure privacy architecture for minors",
    },
    {
      title: "FERPA & COPPA Privacy Architecture",
      href: "/schools/privacy",
      desc: "Institutional data processing addenda (DPA), zero student data commercialization guarantees, and annual data destruction workflows.",
      imageSrc: "/media/product/career_passport_hero.jpg",
      imageAlt: "Encrypted FERPA and COPPA student credential security vault",
    },
    {
      title: "Measurable Institutional Outcomes",
      href: "/schools/outcomes",
      desc: "Track post-graduation placement across 4-year universities, community colleges, registered apprenticeships, and direct technical careers.",
      imageSrc: "/media/students/student_hero_futures.jpg",
      imageAlt: "High school graduate exploring diverse post-secondary career outcomes",
    },
    {
      title: "District Implementation & Partnerships",
      href: "/schools/partnerships",
      desc: "Turnkey Clever and ClassLink SIS roster integration, professional development for guidance staff, and district onboarding plans.",
      imageSrc: "/media/students/audience_students.jpg",
      imageAlt: "District leaders and students in modern learning environment",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--background-dark-deep)] py-20">
        <div className="container-editorial space-y-6 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Institutional Education Infrastructure
              </span>
              <TechnicalBadge variant="blue">FERPA / COPPA COMPLIANT</TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
              Serious career readiness for{" "}
              <CareerGradientText variant="blue">
                modern school districts.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={160}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career OS is not another student app. We deliver enterprise-grade institutional infrastructure that expands counselor capacity, guarantees student privacy, and tracks verified post-secondary outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/schools/educators" variant="primary" size="lg">
                Explore Educator Workflows
              </Button>
              <Button href={ROUTES.FOR_HIGH_SCHOOLS} variant="secondary" size="lg">
                High School Proposition
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <ScrollReveal>
            <div className="space-y-3">
              <span className="section-label text-[#2F8FFF]">Institutional Estate</span>
              <h2 className="text-display-section font-normal text-white">District Solutions & Governance</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolSubpages.map((s, idx) => (
              <ScrollReveal key={s.href} delayMs={idx * 80}>
                <Link href={s.href} className="block h-full">
                  <ImageHoverRevealCard
                    imageSrc={s.imageSrc}
                    imageAlt={s.imageAlt}
                    pattern="background"
                    className="p-6 h-full flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-[#6BB8FF] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-[#6BB8FF]">
                      <span>Explore solution</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </ImageHoverRevealCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
