import React from 'react';
import { FeaturePlaceholder } from '@/components/app/shell/FeaturePlaceholder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Twin Intelligence | Career OS',
  description: 'Your private, continuously evolving capability model and career context.',
};

export default function CareerTwinPage() {
  return (
    <FeaturePlaceholder
      moduleName="Career Twin Intelligence"
      moduleCategory="UNDERSTAND"
      plannedPass="PASS 03 IN QUEUE"
      subtitle="A private capability model deconstructing what you can actually do beneath surface job titles."
      description="The full Career Twin explorer will allow granular inspection of extracted capability vectors, experience themes, and strength confidence ratings. Your twin is actively powering Today recommendations."
      connectedDataSummary={[
        {
          label: 'Capability Model',
          value: 'Initialized',
          description: 'Constructed from your verified onboarding submissions.',
        },
        {
          label: 'Dynamic Evolution',
          value: 'Active',
          description: 'Updates deterministically as you log new achievements.',
        },
        {
          label: 'Data Sovereignty',
          value: 'Self-Sovereign',
          description: 'Stored in your personal vault independent of employer IT.',
        },
      ]}
      mentorPrompt="Can you walk me through the key strengths in my Career Twin?"
    />
  );
}
