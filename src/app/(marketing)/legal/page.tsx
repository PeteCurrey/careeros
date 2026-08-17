import React from "react";
import Link from "next/link";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { FileText, Shield, User, GraduationCap, Briefcase, Server, ArrowRight, Lock, CheckCircle2, AlertCircle } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Governance Centre | Career OS",
  description: "Official operative legal agreements, privacy notices, school terms, employer codes, and AI system usage terms for Career OS.",
  alternates: {
    canonical: "https://career-os.com/legal",
  },
};

export default function LegalHubPage() {
  const meta = GOVERNANCE_MANIFEST["legal-hub"]!;

  const sections = [
    {
      title: "Individual & General Terms",
      description: "Operative terms governing direct individual accounts, privacy rights, AI mentor usage, and acceptable platform behavior.",
      icon: User,
      docs: [
        { title: "General Terms of Service", href: "/legal/terms", badge: "Operative Contract", desc: "Core binding terms for individual accounts (Age 16+ direct eligibility)." },
        { title: "Privacy Policy", href: "/legal/privacy", badge: "Operative Notice", desc: "Comprehensive privacy practices, data categories, and user data rights." },
        { title: "AI System Usage Terms", href: "/legal/ai-terms", badge: "Operative Terms", desc: "Non-human AI mentor terms, system-assigned identities, and recommendation disclaimers." },
        { title: "Acceptable Use Policy", href: "/legal/acceptable-use", badge: "Policy", desc: "Prohibited conduct, anti-scraping, anti-forgery, and enforcement procedures." },
      ],
    },
    {
      title: "Schools & Families",
      description: "Terms governing school district deployments, youth privacy, guardian notices, and student FERPA rights transfer.",
      icon: GraduationCap,
      docs: [
        { title: "School & Institutional Terms", href: "/legal/school-terms", badge: "B2B Contract", desc: "Terms for school districts, MATs, and educational institutions." },
        { title: "Student & Youth Terms of Service", href: "/legal/student-terms", badge: "Student Contract", desc: "Youth terms aligned with canonical age model (16+ direct, 13–15 consent, <13 school)." },
        { title: "Parent & Guardian Privacy Notice", href: "/legal/parent-guardian-notice", badge: "Family Notice", desc: "High-trust plain English notice for parents and legal guardians." },
        { title: "Data Processing Addendum (DPA)", href: "/legal/data-processing", badge: "Institutional DPA", desc: "Standardized FERPA/COPPA data processing addendum for schools." },
      ],
    },
    {
      title: "Employers & Candidates",
      description: "Recruiter terms, ethical hiring standards, candidate privacy, and AEDT automated hiring readiness.",
      icon: Briefcase,
      docs: [
        { title: "Employer & Recruiter Terms", href: "/legal/employer-terms", badge: "Recruiter Contract", desc: "Verified employer identity, real job posts, candidate access grant rules, and minor safeguards." },
        { title: "Candidate Privacy Notice", href: "/legal/candidate-privacy", badge: "Candidate Notice", desc: "Profile discovery controls, Candidate Hash IDs, matching rationale, and visibility grants." },
        { title: "Institutional DPA Guide", href: "/legal/dpa", badge: "Execution Guide", desc: "District DPA execution guide (CA CSPA, NY Ed Law § 2-d, IL SDPC)." },
      ],
    },
    {
      title: "Platform Architecture & Compliance",
      description: "Technical security, browser storage inventory, subprocessor registry, accessibility, and version archives.",
      icon: Server,
      docs: [
        { title: "Cookie & Storage Policy", href: "/legal/cookies", badge: "Technical Notice", desc: "Inventory of deployed application storage (Supabase JWTs, workspace state); zero 3rd-party ad pixels." },
        { title: "Approved Subprocessor List", href: "/legal/subprocessors", badge: "Vendor Registry", desc: "Active list of verified infrastructure processors (Supabase, Vercel, Google Cloud, OpenAI, Anthropic)." },
        { title: "Data Retention Schedule", href: "/legal/data-retention", badge: "Data Policy", desc: "Retention schedules across identity, Career Twin assets, AI chat logs, and backup purges." },
        { title: "Copyright & IP Policy", href: "/legal/copyright", badge: "IP Policy", desc: "DMCA takedown notice procedure, counter-notices, and user evidence IP rights." },
        { title: "Web Accessibility Statement", href: "/legal/accessibility", badge: "WCAG 2.2 AA", desc: "Target WCAG 2.2 Level AA conformance, screen reader testing, and remediation reporting." },
        { title: "Version History & Archive", href: "/legal/version-history", badge: "Archive", desc: "Registry of active and superseded governance document versions." },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)] text-[var(--color-charcoal-deep)]">
      {/* Editorial Header */}
      <section className="pt-16 pb-12 border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="section-label">Legal &amp; Compliance Hub</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-success-light)] text-[var(--color-success)] text-[10px] uppercase font-bold tracking-wider border border-[var(--color-success)]/20">
              <CheckCircle2 className="w-3 h-3" /> Active Pre-Launch Corpus
            </span>
          </div>

          <h1 className="text-display-section text-[var(--color-charcoal-deep)] font-serif font-normal tracking-tight">
            Career OS Legal &amp; Compliance Centre
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)]">
            Operative legal contracts, privacy notices, school terms, employer codes, and compliance frameworks governing the Career OS platform across individuals, families, educational institutions, and enterprise employers.
          </p>

          <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-xs text-[var(--color-text-secondary)] space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-[var(--color-charcoal-deep)]">
              <Shield className="w-4 h-4 text-[var(--color-taupe-600)]" />
              <span>Contractual Precision &amp; Document Versioning:</span>
            </div>
            <p>
              All documents in this Centre are active pre-launch governance specifications. Changes are tracked with semantic versioning and published to the <Link href="/legal/version-history" className="text-[var(--color-charcoal-deep)] font-semibold underline">Version History Archive</Link>. Superseded versions remain permanently accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Document Directory Grid */}
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-16">
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
                    <p className="text-xs text-[var(--color-text-secondary)]">{sec.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sec.docs.map((doc) => (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      className="group p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[var(--color-charcoal-base)] transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[var(--color-taupe-600)]" />
                            {doc.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]">
                            {doc.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {doc.desc}
                        </p>
                      </div>

                      <div className="flex items-center text-xs font-semibold text-[var(--color-charcoal-deep)] group-hover:translate-x-0.5 transition-transform">
                        <span>View Document</span>
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

      {/* Official Governance Contacts Footer (No Sales CTAs) */}
      <footer className="py-12 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)]">
        <div className="container-editorial space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="section-label block mb-2">Legal Enquiries</span>
              <p>Contractual terms, governance, and institutional agreement queries:</p>
              <a href={`mailto:${LEGAL_CONFIG.legalEmail}`} className="font-mono text-[var(--color-charcoal-deep)] font-semibold hover:underline block mt-1">
                {LEGAL_CONFIG.legalEmail}
              </a>
            </div>
            <div>
              <span className="section-label block mb-2">Privacy &amp; Data Rights</span>
              <p>Data protection, COPPA/FERPA questions, and data subject requests:</p>
              <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="font-mono text-[var(--color-charcoal-deep)] font-semibold hover:underline block mt-1">
                {LEGAL_CONFIG.privacyEmail}
              </a>
            </div>
            <div>
              <span className="section-label block mb-2">Youth Safeguarding</span>
              <p>Minor candidate protection and safety concern escalation:</p>
              <a href={`mailto:${LEGAL_CONFIG.safeguardingEmail}`} className="font-mono text-[var(--color-charcoal-deep)] font-semibold hover:underline block mt-1">
                {LEGAL_CONFIG.safeguardingEmail}
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[var(--color-text-tertiary)]">
            <span>{LEGAL_CONFIG.legalEntityName} &bull; Operative Governance Hub &bull; Version {meta.version}</span>
            <span>Launch Jurisdiction: {LEGAL_CONFIG.launchJurisdictions.join(", ")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
