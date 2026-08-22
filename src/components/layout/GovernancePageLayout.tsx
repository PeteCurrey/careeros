import React from "react";
import Link from "next/link";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";
import type { GovernanceDocumentMeta } from "@/types/platform/governance";
import { ArrowLeft, Shield, FileText, Scale, ExternalLink, Mail, CheckCircle2, Info } from "lucide-react";

export interface GovernancePageLayoutProps {
  meta: GovernanceDocumentMeta;
  subtitle?: string;
  toc?: { id: string; title: string }[];
  children: React.ReactNode;
}

export function GovernancePageLayout({
  meta,
  subtitle,
  toc,
  children,
}: GovernancePageLayoutProps) {
  const categoryLabels: Record<string, string> = {
    LEGAL: "Legal Center & Operative Policies",
    TRUST: "Trust, Ethics & Architecture Standards",
    REGULATORY: "Regulatory Alignment & Readiness Frameworks",
    STANDARDS: "Platform Standards & Conduct Codes",
  };

  const categoryHrefs: Record<string, string> = {
    LEGAL: "/legal",
    TRUST: "/trust",
    REGULATORY: "/regulatory",
    STANDARDS: "/standards",
  };

  return (
    <div className="register-document flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* Header & Metadata Banner */}
      <header className="relative overflow-hidden pt-16 pb-12 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        {/*
          No ambient atmosphere or pathway connector here. Both paint dark
          radial washes from hardcoded rgba values, which read as smudges on
          the document register's light ground -- and a governance document
          should look like a document, not a marketing surface.
        */}

        <div className="container-editorial relative z-10 space-y-6">
          
          {/* Category Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-taupe-300)]" aria-label="Breadcrumb">
            <Link href={categoryHrefs[meta.category] || "/legal"} className="hover:text-[var(--color-text-primary)] transition-colors">
              {categoryLabels[meta.category] || "Governance"}
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-primary)]">{meta.title}</span>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-4xl space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-success-light)] text-[var(--color-success)] text-xs font-semibold border border-[var(--color-success)]/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {meta.status}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] text-xs font-mono border border-[var(--color-border-default)]">
                Version {meta.version}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] text-xs font-mono border border-[var(--color-border-default)]">
                {meta.bindingStatus}
              </span>
            </div>

            <h1 className="text-display-section text-[var(--color-text-primary)] font-serif font-normal tracking-tight">
              {meta.title}
            </h1>

            {subtitle && (
              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Key Document Parameters Bar */}
          <div className="pt-4 border-t border-[var(--color-border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-taupe-300)] mb-0.5">Effective Date</span>
              <span className="font-mono text-xs text-[var(--color-text-primary)]">{meta.effectiveDate}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-taupe-300)] mb-0.5">Jurisdiction</span>
              <span className="text-xs text-[var(--color-text-primary)]">{meta.jurisdiction}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-taupe-300)] mb-0.5">Document Owner</span>
              <span className="text-xs text-[var(--color-text-primary)]">{meta.owner}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-taupe-300)] mb-0.5">Last Reviewed</span>
              <span className="font-mono text-xs text-[var(--color-text-primary)]">{meta.lastReviewedDate}</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <div className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Desktop Table of Contents (Sticky Sidebar) */}
            {toc && toc.length > 0 && (
              <aside className="lg:col-span-3 order-2 lg:order-1">
                <div className="sticky top-28 space-y-4 p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)]">
                  <h4 className="section-label pb-2 border-b border-[var(--color-border-default)]">
                    Document Sections
                  </h4>
                  <nav className="space-y-2 text-xs">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-xs text-[var(--color-text-secondary)] hover:text-[var(--accent-blue)] font-normal transition-colors line-clamp-2 py-0.5"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Substantive Document Reading Column (760-860px wide) */}
            <main className={toc && toc.length > 0 ? "lg:col-span-9 order-1 lg:order-2 max-w-4xl" : "lg:col-span-12 max-w-4xl mx-auto"}>
              <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 max-w-none text-[var(--color-text-secondary)] leading-relaxed font-sans text-base [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:text-[var(--color-text-primary)] [&_h2]:pt-6 [&_h2]:border-t [&_h2]:border-[var(--color-border-subtle)] [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:text-[var(--color-text-primary)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-[var(--color-text-primary)]">
                {children}
              </div>

              {/* Substantive Change Summary Banner */}
              {meta.changeSummary && (
                <div className="mt-8 p-5 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-xs text-[var(--color-text-secondary)] space-y-1">
                  <span className="font-semibold text-[var(--color-text-primary)] block">Revision Summary (Version {meta.version}):</span>
                  <p>{meta.changeSummary}</p>
                </div>
              )}
            </main>

          </div>
        </div>
      </div>

      {/* Governance Footer (Strictly NO Sales CTAs per Requirement 17) */}
      <footer className="py-12 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)]">
        <div className="container-editorial space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Related Documents */}
            {meta.relatedDocuments && meta.relatedDocuments.length > 0 && (
              <div className="space-y-3">
                <h4 className="section-label">Related Governance Documents</h4>
                <ul className="space-y-2">
                  {meta.relatedDocuments.map((doc) => (
                    <li key={doc.href}>
                      <Link href={doc.href} className="inline-flex items-center gap-1.5 text-[var(--color-text-primary)] font-medium hover:underline">
                        <FileText className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
                        <span>{doc.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Primary Sources & Citations */}
            {meta.sources && meta.sources.length > 0 && (
              <div className="space-y-3">
                <h4 className="section-label">Primary Legal &amp; Regulatory Sources</h4>
                <ul className="space-y-2">
                  {meta.sources.map((src, i) => (
                    <li key={i} className="space-y-0.5">
                      <span className="font-medium text-[var(--color-text-primary)] block">{src.title}</span>
                      <span className="font-mono text-[11px] text-[var(--color-text-tertiary)] block">{src.citation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Official Governance Contacts */}
            <div className="space-y-3">
              <h4 className="section-label">Governance &amp; Privacy Contacts</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
                  <span>Legal Enquiries:</span>
                  <a href={`mailto:${LEGAL_CONFIG.legalEmail}`} className="font-mono text-[var(--color-text-primary)] hover:underline">
                    {LEGAL_CONFIG.legalEmail}
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
                  <span>Privacy Officer:</span>
                  <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="font-mono text-[var(--color-text-primary)] hover:underline">
                    {LEGAL_CONFIG.privacyEmail}
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
                  <span>Youth Safeguarding:</span>
                  <a href={`mailto:${LEGAL_CONFIG.safeguardingEmail}`} className="font-mono text-[var(--color-text-primary)] hover:underline">
                    {LEGAL_CONFIG.safeguardingEmail}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Navigation Back & Versioning */}
          <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-4">
            <Link
              href={categoryHrefs[meta.category] || "/legal"}
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-text-primary)] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {categoryLabels[meta.category] || "Governance Center"}</span>
            </Link>

            <span className="text-[11px] text-[var(--color-text-tertiary)]">
              {LEGAL_CONFIG.legalEntityName} &bull; Operative Governance Document &bull; Version {meta.version}
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}
