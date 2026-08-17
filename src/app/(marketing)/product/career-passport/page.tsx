import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { VerificationBadge, VerificationState } from '@/components/ui/VerificationBadge';
import { Award, Shield, FileCheck, Share2, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Passport — Product | Career OS",
  description: "Career OS Product career Passport. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product/career-passport",
  },
};

export default function CareerPassportPage() {
  const verificationStates: VerificationState[] = [
    'SELF_DECLARED',
    'EVIDENCE_ATTACHED',
    'PLATFORM_ASSESSED',
    'THIRD_PARTY_VERIFIED',
    'ISSUER_VERIFIED',
    'EMPLOYER_VERIFIED',
  ];

  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Core Subsystem
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Career Passport: A portable, verifiable professional record.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            A portable professional record capable of containing verified qualifications, skills, evidence, achievements, and experience. Designed to complement — not simply recreate — a static résumé.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Start Free Passport
            </Button>
            <Button href={ROUTES.TRUST_VERIFICATION} variant="secondary" size="md">
              Verification Standards
            </Button>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Evidence-Based Credentials
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Move beyond self-reported bullet points. Attach authentic project repositories, capstone deliverables, published research, and accredited certificates directly to skill nodes.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Honest Verification States
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We never falsely label unverified claims. Every item clearly distinguishes between self-declared interests, attached work samples, platform assessments, and direct issuer confirmations.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Tamper-Evident Portability
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Share specific credential subsets via secure cryptographic links with prospective employers, admissions boards, or licensing bodies without exposing your entire profile.
            </p>
          </Card>
        </div>

        {/* Verification Spectrum */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Trust Spectrum"
            heading="Transparent Verification Levels"
            description="Our verification taxonomy makes the pedigree of every claim immediately clear to reviewers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {verificationStates.map((state) => (
              <Card key={state} className="p-4 flex items-center justify-between">
                <VerificationBadge state={state} />
                <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                  Level {verificationStates.indexOf(state) + 1}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Build your Career Passport
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              A portable record that stays with you forever. Free for individuals.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Create Free Passport <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
