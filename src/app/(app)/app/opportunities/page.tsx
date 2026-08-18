import React from 'react';
import { FeaturePlaceholder } from '@/components/app/shell/FeaturePlaceholder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opportunity Agent | Career OS',
  description: 'Bilateral discovery agent matching you against verified organizational requirements without spam.',
};

export default function OpportunitiesPage() {
  return (
    <FeaturePlaceholder
      moduleName="Opportunity Agent"
      moduleCategory="ACT & DISCOVER"
      plannedPass="PASS 05 IN QUEUE"
      subtitle="Privacy-preserving bilateral opportunity discovery acting strictly on your behalf."
      description="The Opportunity Agent will continuously monitor matching organizational capability briefs without public resume broadcasts. In this foundational pass, zero fake job listings or fabricated salaries are shown."
      connectedDataSummary={[
        {
          label: 'Discovery Posture',
          value: 'Passive & Private',
          description: 'Never submits applications without your explicit review and consent.',
        },
        {
          label: 'Opportunity Feeds',
          value: 'Zero Synthetic Feeds',
          description: 'Will only connect to verified partner employer capability briefs.',
        },
        {
          label: 'Data Shield',
          value: 'Air-Gapped',
          description: 'Current employers cannot detect your exploration activity.',
        },
      ]}
      mentorPrompt="What type of opportunity would be the highest leverage for me right now?"
    />
  );
}
