import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { ImageHoverRevealCard } from "@/components/brand/ImageHoverRevealCard";
import { Building2, Users, ShieldCheck, Search, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employer Institutional Hub | Career OS",
  description: "Evidence-based talent discovery, early career pipelines, and ethical candidate matching without keyword filters or algorithmic bias.",
  alternates: {
    canonical: "https://career-os.com/employers",
  },
};

export default function EmployersHubPage() {
  const subpages = [
    {
      title: "Employer Agent Implementation",
      href: "/employers/employer-agent",
      desc: "Deploy the Career OS Employer Agent to match vacancies against verified capability vectors and cross-team requirements.",
      imageSrc: "/media/product/employer_agent_hero.jpg",
      imageAlt: "Employer Agent interface showing capability definition and evidence-based talent search",
    },
    {
      title: "Evidence-Based Talent Discovery",
      href: "/employers/talent-discovery",
      desc: "Discover candidate portfolios based upon demonstrated deliverables, code repositories, and trade certifications rather than pedigree.",
      imageSrc: "/media/employers/employer_hero_capability.jpg",
      imageAlt: "Talent discovery system reviewing verified deliverables and capability portfolios",
    },
    {
      title: "Early Careers & Graduate Pipelines",
      href: "/employers/early-careers",
      desc: "Build sustainable campus and early-talent pipelines with verified capstone deliverables from participating high schools and colleges.",
      imageSrc: "/media/employers/audience_employers.jpg",
      imageAlt: "Enterprise employers collaborating on early careers programs",
    },
    {
      title: "Internships & Structured Experience",
      href: "/employers/internships",
      desc: "Manage high-impact seasonal internships and co-op placements with transparent learning objectives and performance sign-offs.",
      imageSrc: "/media/students/student_hero_futures.jpg",
      imageAlt: "Student completing structured internship project milestone",
    },
    {
      title: "Corporate Apprenticeship Programs",
      desc: "Launch debt-free degree and technical apprenticeship programs with registered curriculum standards and on-the-job hour tracking.",
      href: "/employers/apprenticeships",
      imageSrc: "/media/professionals/professional_hero_intersection.jpg",
      imageAlt: "Apprentice engineer mastering precision telemetry systems",
    },
    {
      title: "Responsible Hiring & Anti-Bias Audits",
      desc: "Ensure complete compliance with NYC Local Law 144, EEOC guidelines, and independent algorithmic fairness audits.",
      href: "/employers/responsible-hiring",
      imageSrc: "/media/product/career_passport_hero.jpg",
      imageAlt: "Algorithmic audit dashboard demonstrating compliance with NYC Local Law 144 and EEOC",
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
                Institutional Employer Ecosystem
              </span>
              <TechnicalBadge variant="blue">CAPABILITY-DEFINED HIRING</TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
              Evidence-grounded hiring for{" "}
              <CareerGradientText variant="blue">
                forward-looking organizations.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={160}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Move beyond static PDF resumes and arbitrary keyword screening. Career OS connects employers with candidates through verified project evidence, demonstrated competencies, and explainable capability matching.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/employers/talent-discovery" variant="primary" size="lg">
                Explore Talent Discovery
              </Button>
              <Button href={ROUTES.FOR_EMPLOYERS} variant="secondary" size="lg">
                Employer Value Proposition
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <ScrollReveal>
            <div className="space-y-3">
              <span className="section-label text-[#2F8FFF]">Employer Ecosystem</span>
              <h2 className="text-display-section font-normal text-white">Dedicated Employer Solutions</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subpages.map((s, idx) => (
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
                      <span>Explore route</span>
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
