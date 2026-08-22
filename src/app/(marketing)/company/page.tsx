import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { MEDIA_ASSETS } from "@/lib/media";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Building2,
  Users,
  Globe2,
  Newspaper,
  Briefcase,
  Mail,
  HeartHandshake,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Career OS Infrastructure",
  description: "Career OS is building persistent, universal career infrastructure for your entire working life. Learn about our mission, principles, governance, press, and ecosystem.",
  alternates: {
    canonical: "https://career-os.com/company",
  },
};

export default function CompanyHubPage() {
  const sections = [
    {
      title: "Mission & Philosophy",
      desc: "Our founding conviction: that everyone deserves institutional-grade career infrastructure that compounds over decades.",
      href: ROUTES.COMPANY_MISSION,
      icon: Compass,
      badge: "Founding Principles",
    },
    {
      title: "About Career OS",
      desc: "The story, team, and multi-decade vision behind the operating system for your working life.",
      href: ROUTES.COMPANY_ABOUT,
      icon: Building2,
      badge: "Company Overview",
    },
    {
      title: "Partnerships & Ecosystem",
      desc: "How Career OS connects schools, employers, workforce boards, and state agencies into an intelligent connective layer.",
      href: ROUTES.COMPANY_PARTNERS,
      icon: HeartHandshake,
      badge: "Ecosystem Network",
    },
    {
      title: "Press & Media Center",
      desc: "Official brand assets, company boilerplate, media contacts, and factual platform announcements.",
      href: ROUTES.COMPANY_PRESS,
      icon: Newspaper,
      badge: "Media Enquiries",
    },
    {
      title: "Careers at Career OS",
      desc: "Our engineering culture, remote-first talent philosophy, and current operational hiring status.",
      href: ROUTES.COMPANY_CAREERS,
      icon: Briefcase,
      badge: "Open Architecture",
    },
    {
      title: "Contact & Departmental Directory",
      desc: "Direct routing for general inquiries, schools, employers, press, security, and partnership discussions.",
      href: ROUTES.COMPANY_CONTACT,
      icon: Mail,
      badge: "Get in Touch",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Hero Section ── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/hero/city_horizon_hero.jpg"
            alt="Metropolitan city horizon representing global career infrastructure"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, var(--color-surface-base) 0%, color-mix(in srgb, var(--color-surface-base) 96%, transparent) 38%, color-mix(in srgb, var(--color-surface-base) 88%, transparent) 55%, color-mix(in srgb, var(--color-surface-base) 42%, transparent) 78%, color-mix(in srgb, var(--color-surface-base) 18%, transparent) 100%)",
            }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Company Overview
              </span>
              <TechnicalBadge variant="blue">ESTABLISHED 2026</TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.06]">
              Building universal infrastructure for{" "}
              <CareerGradientText variant="blue">
                lifelong human mobility.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career OS is not another job board or companion app. We build the underlying operating system that connects verified evidence, AI domain mentorship, and institutional opportunities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02. Directory Grid ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="section-label text-[#2F8FFF]">Company Directory</span>
            <h2 className="text-display-section font-normal text-white">
              Explore Career OS operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-[#2F8FFF]/40 transition-all duration-300 flex flex-col justify-between space-y-4 hover-lift group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Icon className="w-6 h-6 text-[#2F8FFF]" />
                      <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider">
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#6BB8FF] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-[#6BB8FF]">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
