import React from 'react';
import { FeaturePlaceholder } from '@/components/app/shell/FeaturePlaceholder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Map & Topological Graph | Career OS',
  description: 'Topological exploration of adjacent industries, transferable skills, and bridge pathways.',
};

export default function CareerMapPage() {
  return (
    <FeaturePlaceholder
      moduleName="Career Map & Graph Explorer"
      moduleCategory="DECIDE & NAVIGATE"
      plannedPass="PASS 04 IN QUEUE"
      subtitle="Topological career navigation mapping lateral bridges and adjacent industries."
      description="The full Career Map experience will provide interactive node graphs, transferable skill overlap calculators, and requirement bridge checklists. Your initial seed graph is currently connected to Today."
      connectedDataSummary={[
        {
          label: 'Graph Seeds',
          value: 'Mapped',
          description: 'Initial starting node and adjacent vectors established.',
        },
        {
          label: 'Bridge Logic',
          value: 'Deterministic',
          description: 'Calculates skill overlaps without synthetic outcome percentages.',
        },
        {
          label: 'Multi-Pathway',
          value: 'Equal Parity',
          description: 'Treats degrees, apprenticeships, and trades with equal dignity.',
        },
      ]}
      mentorPrompt="What adjacent career paths should I explore from my current background?"
    />
  );
}
