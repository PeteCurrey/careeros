import React from "react";
import Link from "next/link";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";
import { FileCheck, Shield, Users, Briefcase, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Conduct Standards | Career OS",
  description: "Behavioral conduct standards, employer ethical hiring codes, mentor codes of ethics, and authentic opportunity benchmarks.",
  alternates: { canonical: "https://career-os.com/standards" },
};

export default function StandardsHubPage() {
  const meta = GOVERNANCE_MANIFEST["standards-hub"]!;

  const sections = [
    {
      title: "Participant Conduct & Community",
      desc: "Expectations of respect, honesty, identity integrity, and safety across all platform participants.",
      icon: Users,
      links: [
        { title: "Community Code of Conduct", href: "/standards/community-code", desc: "Core behavioral conduct expectations, anti-harassment, and safety rules." },
        { title: "AI & Human Mentor Code of Ethics", href: "/standards/mentor-code", desc: "Ethical boundaries for AI mentor personas and human guidance specialists." },
        { title: "Cross-Platform Safety Standard", href: "/standards/safety", desc: "Platform-wide safety rules across students, candidates, schools, and employers." },
      ],
    },
    {
      title: "Employer & Recruiter Standards",
      desc: "Major differentiator establishing mandatory employer verification, authentic job posts, and candidate privacy grants.",
      icon: Briefcase,
      links: [
        { title: "Employer Ethical Hiring Code", href: "/standards/employer-code", desc: "Verified corporate identity, real openings, compensation honesty, and EEOC compliance." },
        { title: "Authentic Opportunity Standards", href: "/standards/opportunity-standards", desc: "Prohibition of MLM, advance-fee scams, and deceptive compensation claims." },
        { title: "Anti-Discrimination Standard", href: "/standards/anti-discrimination", desc: "Civil rights protections against protected-characteristic and proxy targeting." },
      ],
    },
    {
      title: "Professional & Evidence Integrity",
      desc: "Preserving truth and evidence authenticity across qualifications, experience records, and references.",
      icon: Award,
      links: [
        { title: "Professional Conduct Standard", href: "/standards/professional-conduct", desc: "Evidence honesty, trade secret protection, and transparent AI-assisted job applications." },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)] text-[var(--color-charcoal-deep)]">
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="section-label">Platform Conduct Standards</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-success-light)] text-[var(--color-success)] text-[10px] uppercase font-bold tracking-wider border border-[var(--color-success)]/20">
              <CheckCircle2 className="w-3 h-3" /> Operative Standard
            </span>
          </div>

          <h1 className="text-display-section text-[var(--color-charcoal-deep)] font-serif font-normal tracking-tight">
            Career OS Behavioral Conduct Standards
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)]">
            While Legal Terms define contracts and Trust Principles describe architecture, Platform Standards establish the mandatory behavioral expectations of all candidates, students, employers, mentors, and institutions.
          </p>
        </div>
      </section>

      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-[var(--color-border-default)]">
                  <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--color-taupe-100)] flex items-center justify-center text-[var(--color-charcoal-deep)]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-serif text-[var(--color-charcoal-deep)]">{sec.title}</h2>
                    <p className="text-xs text-[var(--color-text-secondary)]">{sec.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sec.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[var(--color-charcoal-base)] transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <span className="font-semibold text-sm text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-[var(--color-taupe-600)]" />
                          {link.title}
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-semibold text-[var(--color-charcoal-deep)] group-hover:translate-x-0.5 transition-transform">
                        <span>View Standard</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}