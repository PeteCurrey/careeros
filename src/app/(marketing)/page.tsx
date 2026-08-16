import React from 'react';
import { HeroMentorSection } from '@/components/marketing/HeroMentorSection';
import { LifetimeJourneySection } from '@/components/marketing/LifetimeJourneySection';
import { IntegratedSystemSection } from '@/components/marketing/IntegratedSystemSection';
import { MentorStorySection } from '@/components/marketing/MentorStorySection';
import { CareerTwinSection } from '@/components/marketing/CareerTwinSection';
import { CareerPassportSection } from '@/components/marketing/CareerPassportSection';
import { OpportunityIntelligenceSection } from '@/components/marketing/OpportunityIntelligenceSection';
import { AudienceEditorialPanels } from '@/components/marketing/AudienceEditorialPanels';
import { PrivacyViewerSection } from '@/components/marketing/PrivacyViewerSection';
import { CareerStoriesSection } from '@/components/marketing/CareerStoriesSection';
import { MissionSection } from '@/components/marketing/MissionSection';
import { FinalCtaSection } from '@/components/marketing/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero — Multidisciplinary Mentor Team + Career Transition Panorama */}
      <HeroMentorSection />

      {/* 2. Lifetime Model — Discover to Reinvent */}
      <LifetimeJourneySection />

      {/* 3. Everything Working Together — Integrated Operating System */}
      <IntegratedSystemSection />

      {/* 4. Your AI Career Mentor — Human Storytelling & Strategic Advisory */}
      <MentorStorySection />

      {/* 5. Career Twin — Dynamic Self-Model vs Static Résumé */}
      <CareerTwinSection />

      {/* 6. Career Passport — Verifiable Evidence Vault */}
      <CareerPassportSection />

      {/* 7. Opportunity Intelligence — "Your career agent will find you" */}
      <OpportunityIntelligenceSection />

      {/* 8. Four Career Worlds — Students, Professionals, High Schools, Employers */}
      <AudienceEditorialPanels />

      {/* 9. Privacy & Trust — Interactive Access Control Viewer */}
      <PrivacyViewerSection />

      {/* 10. Example Career Transitions — Non-linear Pathway Graphs */}
      <CareerStoriesSection />

      {/* 11. Mission — Foundational Purpose */}
      <MissionSection />

      {/* 12. Final CTA — Start Your Career (Free) + Launch Partnerships */}
      <FinalCtaSection />
    </div>
  );
}
