import React from 'react';
import { HeroMentorSection } from '@/components/marketing/HeroMentorSection';
import { TheProblemSection } from '@/components/marketing/TheProblemSection';
import { HowCareerOSUnderstandsYou } from '@/components/marketing/HowCareerOSUnderstandsYou';
import { LifetimeJourneySection } from '@/components/marketing/LifetimeJourneySection';
import { MentorStorySection } from '@/components/marketing/MentorStorySection';
import { CareerTwinSection } from '@/components/marketing/CareerTwinSection';
import { CareerPassportSection } from '@/components/marketing/CareerPassportSection';
import { CareerGraphVisualSection } from '@/components/marketing/CareerGraphVisualSection';
import { OpportunityIntelligenceSection } from '@/components/marketing/OpportunityIntelligenceSection';
import { AudienceEditorialPanels } from '@/components/marketing/AudienceEditorialPanels';
import { PrivacyViewerSection } from '@/components/marketing/PrivacyViewerSection';
import { ComparisonTableSection } from '@/components/marketing/ComparisonTableSection';
import { MissionSection } from '@/components/marketing/MissionSection';
import { FinalCtaSection } from '@/components/marketing/FinalCtaSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career OS — The Operating System for Your Working Life",
  description: "Career OS platform. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[var(--color-surface-base)]">
      {/* 01. Hero — Multidisciplinary Mentor Team + Career Transition Panorama */}
      <HeroMentorSection />

      {/* 02. The Problem — Editorial Statement & Whitespace */}
      <div id="how-it-works">
        <TheProblemSection />
      </div>

      {/* 03. How Career OS Understands You — 6 Dimensions with Thin Rules */}
      <HowCareerOSUnderstandsYou />

      {/* 04. Lifetime Journey — Horizontal Timeline from Discover to Reinvent */}
      <LifetimeJourneySection />

      {/* 05. Your AI Career Mentor — Strong Dark Charcoal Section & Advisory */}
      <MentorStorySection />

      {/* 06. Career Twin — Dynamic Self-Model with Abstract Radial Graph */}
      <CareerTwinSection />

      {/* 07. Career Passport — Verifiable Evidence Vault & W3C Credentials */}
      <CareerPassportSection />

      {/* 08. Career Graph — Original Branching Topology (Tech & Skilled Trades) */}
      <CareerGraphVisualSection />

      {/* 09. Opportunity Intelligence — Autonomous Agent Discovery */}
      <OpportunityIntelligenceSection />

      {/* 10. Who Career OS is For — 4 Bespoke Editorial Compositions */}
      <AudienceEditorialPanels />

      {/* 11. Privacy & Trust — Interactive Permission & Redaction Simulator */}
      <PrivacyViewerSection />

      {/* 12. Comparison & Differentiation — Thin-Ruled Capability Matrix */}
      <ComparisonTableSection />

      {/* 13. Mission Manifesto — Centered Editorial Typography */}
      <MissionSection />

      {/* 14. Final CTA — Charcoal Conclusion with Institutional Invitations */}
      <FinalCtaSection />
    </div>
  );
}

