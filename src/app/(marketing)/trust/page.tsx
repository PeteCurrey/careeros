import React from "react";
import Link from "next/link";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";
import { Shield, Lock, Eye, Users, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust, Security & Ethics Hub | Career OS",
  description: "Career OS trust principles, security controls, responsible AI framework, youth safeguarding, and evidence verification standards.",
  alternates: { canonical: "https://career-os.com/trust" },
};

export default function TrustHubPage() {
  const meta = GOVERNANCE_MANIFEST["trust-hub"]!;

  const trustSections = [
    {
      title: "AI Ethics & Transparency",
      desc: "Responsible AI framework, non-human disclosures, decision provenance, and human oversight boundaries.",
      icon: Eye,
      links: [
        { title: "Responsible AI Framework", href: "/trust/responsible-ai", desc: "14 principles and AI System Register architecture." },
        { title: "AI Transparency & Decision Factors", href: "/trust/ai-transparency", desc: "Recommendation provenance and model input disclosures." },
        { title: "Human Oversight Boundaries", href: "/trust/human-oversight", desc: "Human decision-maker accountability for consequential choices." },
        { title: "Fairness & Bias Mitigation", href: "/trust/fairness-and-bias", desc: "Algorithmic parity testing across university and trade pathways." },
      ],
    },
    {
      title: "Data Privacy & Youth Safeguarding",
      desc: "Architectural privacy, candidate access controls, and age-banded youth protection rules.",
      icon: Users,
      links: [
        { title: "Minor Safeguarding Framework", href: "/trust/safeguarding", desc: "Default-private minor profiles and employer contact hard-blocks." },
        { title: "Data Ethics & Minimisation", href: "/trust/data-ethics", desc: "Prohibition of shadow dossiers and third-party ad sales." },
        { title: "Corporate Transparency & Roadmap", href: "/trust/transparency", desc: "Distinguishing deployed capabilities from planned features." },
      ],
    },
    {
      title: "Infrastructure & Quality Assurance",
      desc: "Verified technical security controls, WCAG accessibility, and credential evidence spectrum.",
      icon: Shield,
      links: [
        { title: "Security Architecture & Controls", href: "/trust/security", desc: "PostgreSQL Row-Level Security and 5-state security control matrix." },
        { title: "Evidence Verification Spectrum", href: "/trust/verification", desc: "9 verification states from self-declared to issuer-verified." },
        { title: "Product Accessibility Standards", href: "/trust/accessibility", desc: "WCAG 2.2 Level AA target commitment and design features." },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="section-label">Trust &amp; Governance Centre</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-success-light)] text-[var(--color-success)] text-[10px] uppercase font-bold tracking-wider border border-[var(--color-success)]/20">
              <CheckCircle2 className="w-3 h-3" /> Active Verification
            </span>
          </div>

          <h1 className="text-display-section text-[var(--color-text-primary)] font-serif font-normal tracking-tight">
            Career OS Trust &amp; Ethics Centre
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)]">
            Our operational commitment to human agency, architectural privacy, responsible AI, youth safeguarding, and evidence integrity across all Career OS platform surfaces.
          </p>

          {/* Control Status Taxonomy Bar */}
          <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 text-xs">
            <div className="font-semibold text-[var(--color-text-primary)] flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[var(--color-taupe-600)]" />
              <span>Control Implementation Taxonomy:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2 py-0.5 bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/30 rounded font-bold">LIVE / IMPLEMENTED</span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded font-bold">IN_PROGRESS</span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 rounded font-bold">PLANNED</span>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-700 border border-gray-300 rounded font-bold">NOT_YET_AVAILABLE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          {trustSections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-[var(--color-border-default)]">
                  <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-white/8 flex items-center justify-center text-[var(--color-text-secondary)]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-serif text-[var(--color-text-primary)]">{sec.title}</h2>
                    <p className="text-xs text-[var(--color-text-secondary)]">{sec.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sec.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <span className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-white transition-colors flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-[var(--color-taupe-600)]" />
                          {link.title}
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-semibold text-[var(--color-text-primary)] group-hover:translate-x-0.5 transition-transform">
                        <span>Read Standard</span>
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

      <footer className="py-12 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)]">
        <div className="container-editorial space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-[var(--color-text-tertiary)]">
            <span>{LEGAL_CONFIG.legalEntityName} &bull; Trust &amp; Governance Architecture</span>
            <span>Governance Lead Contact: <a href={`mailto:${LEGAL_CONFIG.legalEmail}`} className="underline font-mono">{LEGAL_CONFIG.legalEmail}</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}