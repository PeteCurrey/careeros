import React from 'react';
import { FeaturePlaceholder } from '@/components/app/shell/FeaturePlaceholder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Passport Vault | Career OS',
  description: 'Self-sovereign credential vault storing verified evidence, deliverables, and endorsements.',
};

export default function PassportPage() {
  return (
    <FeaturePlaceholder
      moduleName="Career Passport Vault"
      moduleCategory="PROVE"
      plannedPass="PASS 06 IN QUEUE"
      subtitle="Your portable, self-sovereign evidence vault carrying proof across your working life."
      description="The full Career Passport interface will provide granular artifact uploads, cryptographic provenance verification, and selective sharing controls. Your current evidence entries are actively monitored by Today."
      connectedDataSummary={[
        {
          label: 'Evidence Provenance',
          value: 'Granular',
          description: 'Tracks verification on specific claims rather than scoring people.',
        },
        {
          label: 'Portability',
          value: 'Lifelong Asset',
          description: 'Remains yours when leaving schools or changing employers.',
        },
        {
          label: 'Selective Disclosure',
          value: 'User-Controlled',
          description: 'You select exactly which artifacts to include in applications.',
        },
      ]}
      mentorPrompt="Which accomplishments from my recent work should I add to Career Passport?"
    />
  );
}
