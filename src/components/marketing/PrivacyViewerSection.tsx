'use client';

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

type ViewMode = "MY_VIEW" | "MENTOR_VIEW" | "EMPLOYER_VIEW" | "PUBLIC_VIEW";

interface PrivacyField {
  label: string;
  category: string;
  visibility: {
    MY_VIEW: { state: string; note: string; visible: boolean };
    MENTOR_VIEW: { state: string; note: string; visible: boolean };
    EMPLOYER_VIEW: { state: string; note: string; visible: boolean };
    PUBLIC_VIEW: { state: string; note: string; visible: boolean };
  };
}

const PRIVACY_FIELDS: PrivacyField[] = [
  {
    label: "Real Name & Identity Provenance",
    category: "Identity",
    visibility: {
      MY_VIEW: { state: "Alexander Chen", note: "Full access", visible: true },
      MENTOR_VIEW: { state: "Alexander Chen", note: "Explicitly shared", visible: true },
      EMPLOYER_VIEW: { state: "[REDACTED: Candidate #8891]", note: "Zero identification until accepted", visible: false },
      PUBLIC_VIEW: { state: "[REDACTED]", note: "Hidden from public", visible: false },
    },
  },
  {
    label: "Current Employer & Team",
    category: "Employment",
    visibility: {
      MY_VIEW: { state: "Global Logistics Infrastructure Ltd", note: "Full access", visible: true },
      MENTOR_VIEW: { state: "Global Logistics Infrastructure Ltd", note: "Contextual advisory context", visible: true },
      EMPLOYER_VIEW: { state: "[REDACTED: Leading Logistics Enterprise]", note: "Protected from current employer", visible: false },
      PUBLIC_VIEW: { state: "[REDACTED]", note: "Hidden from public", visible: false },
    },
  },
  {
    label: "Target Compensation Expectation",
    category: "Parameters",
    visibility: {
      MY_VIEW: { state: "$180,000 – $200,000 + Equity", note: "Full access", visible: true },
      MENTOR_VIEW: { state: "$180,000 – $200,000 (Calibrated)", note: "Benchmarked for negotiation", visible: true },
      EMPLOYER_VIEW: { state: "Matched against Budget Floor", note: "Evaluated autonomously without disclosure", visible: false },
      PUBLIC_VIEW: { state: "[REDACTED]", note: "Strictly confidential", visible: false },
    },
  },
  {
    label: "Verified Technical & Project Artifacts",
    category: "Credentials",
    visibility: {
      MY_VIEW: { state: "4 Cryptographic Proofs & Code Vault", note: "Full access", visible: true },
      MENTOR_VIEW: { state: "4 Cryptographic Proofs & Code Vault", note: "Used for capability evaluation", visible: true },
      EMPLOYER_VIEW: { state: "Verified Architecture Spec (Anonymized)", note: "Proof of capability provided", visible: true },
      PUBLIC_VIEW: { state: "Verified Credential Hashes (W3C)", note: "Publicly verifiable anchor", visible: true },
    },
  },
];

export function PrivacyViewerSection() {
  const [activeView, setActiveView] = useState<ViewMode>("MY_VIEW");

  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* ── Architectural Vault & Safeguarding Structured Light Backdrop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-15 lg:opacity-20">
          <Image
            src="/media/schools/school_privacy_architecture_hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Deep radial vignette and top/bottom seam fades */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--color-surface-base) 72%, transparent) 0%, color-mix(in srgb, var(--color-surface-sunken) 92%, transparent) 75%, var(--color-surface-warm) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-20"
          style={{ background: 'linear-gradient(to bottom, var(--color-surface-warm) 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{ background: 'linear-gradient(to top, var(--color-surface-warm) 0%, transparent 100%)' }}
        />
        {/* Subtle ambient lighting */}
        <div className="ambient-glow-blue absolute inset-0 pointer-events-none opacity-40" />
      </div>

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label">
                Granular Access & Consent Architecture
              </span>
              <TechnicalBadge variant="blue">ZERO-TRUST SOVEREIGNTY</TechnicalBadge>
            </div>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Your career data belongs in your hands.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Career OS is built on a zero-trust, user-sovereign permission matrix. You choose exactly what your mentor, potential employers, and the public can view.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Permission Matrix */}
        <ScrollReveal delayMs={100}>
          <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 shadow-subtle hover-lift">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="section-label">
                    Interactive Permission Simulator
                  </span>
                  <Lock className="w-3.5 h-3.5 text-[#2F8FFF]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Select a perspective to verify real-time redaction:
                </h3>
              </div>

              {/* View Mode Buttons (Flat Squared Tabs) */}
              <div className="flex flex-wrap gap-2 font-mono">
                {[
                  { key: "MY_VIEW" as ViewMode, label: "My Sovereign View" },
                  { key: "MENTOR_VIEW" as ViewMode, label: "Mentor View" },
                  { key: "EMPLOYER_VIEW" as ViewMode, label: "Employer View" },
                  { key: "PUBLIC_VIEW" as ViewMode, label: "Public View" },
                ].map((tab) => {
                  const isSelected = activeView === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveView(tab.key)}
                      className={cn(
                        "px-3.5 py-2 text-xs font-semibold rounded-[var(--radius-sm)] border transition-all cursor-pointer",
                        isSelected
                          ? "bg-[#F4F3EF] text-[#202020] border-[#F4F3EF] shadow-sm"
                          : "bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:bg-white/10"
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Matrix Field Rows */}
            <div className="divide-y divide-[var(--color-border-default)] border-y border-[var(--color-border-default)]">
              {PRIVACY_FIELDS.map((field) => {
                const current = field.visibility[activeView];
                return (
                  <div
                    key={field.label}
                    className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                  >
                    <div className="md:col-span-4 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-taupe-300)] font-mono">
                        {field.category}
                      </span>
                      <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {field.label}
                      </h4>
                    </div>

                    <div className="md:col-span-5">
                      <span
                        className={cn(
                          "text-xs sm:text-sm font-medium",
                          current.visible ? "text-[var(--color-text-primary)]" : "text-[#F87171] font-mono"
                        )}
                      >
                        {current.state}
                      </span>
                    </div>

                    <div className="md:col-span-3 flex md:justify-end font-mono">
                      <span
                        className={cn(
                          "text-[11px] px-2.5 py-1 rounded-[var(--radius-sm)] font-medium border",
                          current.visible
                            ? "bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border-[var(--color-border-default)]"
                            : "bg-[rgba(248,113,113,0.1)] text-[#F87171] border-[rgba(248,113,113,0.25)]"
                        )}
                      >
                        {current.note}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verification Guarantee Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--color-text-secondary)] pt-2 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Cryptographic enforcement: No database operator or automated scraper can bypass these policies.</span>
              </div>
              <Link
                href={ROUTES.TRUST_DATA_ETHICS}
                className="font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 shrink-0 group"
              >
                <span>Data Ethics Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
