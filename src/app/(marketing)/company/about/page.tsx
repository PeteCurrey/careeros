import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About — Company | Career OS",
  description: "Career OS Company about. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/company/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* Full Screen Hero */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial">
          <div className="max-w-4xl space-y-6">
            <span className="section-label">
              Company
            </span>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
              About Career OS
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career OS was founded on a single conviction: that every person deserves professional infrastructure of the same quality that was previously accessible only to privileged networks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-editorial">
        <div className="container-editorial space-y-16">

        <div className="max-w-3xl space-y-6 text-body text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            We built Career OS because the existing paradigm is broken. Job boards degrade candidates into keyword-filtered résumé applicants. Professional networks reward performative self-promotion over genuine demonstrated competence. Career coaching is financially inaccessible to most. AI assistants provide shallow, generic advice with no memory of who you actually are.
          </p>
          <p>
            Career OS takes a fundamentally different approach. We are building persistent career infrastructure that compounds in value over decades — not a transactional tool only used during sudden employment crises. A platform that understands your multi-dimensional professional identity, not just your last job title.
          </p>
          <p>
            We are equally committed to the breadth of human opportunity. University is not the only respectable path. Skilled trades, registered apprenticeships, community college, vocational certification, and direct workforce entry deserve the same quality of guidance, verification infrastructure, and professional network access.
          </p>
        </div>

        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Mission"
            heading="Universal access to serious career infrastructure."
            description="The operating system for your working life should not depend on whether you attended an elite university, live in a major city, or can afford expensive coaching. It should be available to everyone who wants to build a meaningful working life."
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href={ROUTES.COMPANY_MISSION} variant="secondary" size="md">
            Our Mission in Full
          </Button>
          <Button href={ROUTES.COMPANY_CONTACT} variant="ghost" size="md">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
