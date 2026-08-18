import React from 'react';
import { FeaturePlaceholder } from '@/components/app/shell/FeaturePlaceholder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progress & Compounding Ledger | Career OS',
  description: 'Evidence-backed career compounding and multi-year milestone progress.',
};

export default function ProgressPage() {
  return (
    <FeaturePlaceholder
      moduleName="Progress & Compounding Ledger"
      moduleCategory="EVOLVE"
      plannedPass="PASS 07 IN QUEUE"
      subtitle="Track your multi-year career compounding without synthetic readiness scores."
      description="The full Progress ledger will visualize milestone completions, credential accumulation, and capability deepening over time with mathematically sound metrics. Your active objective progress is visible on Today."
      connectedDataSummary={[
        {
          label: 'Progress Metric',
          value: 'Verifiable Count',
          description: 'Tracks actual milestone completion instead of fake percentages.',
        },
        {
          label: 'Capability Depth',
          value: 'Compounding',
          description: 'Measures evidence accumulation across multi-year horizons.',
        },
        {
          label: 'No Readiness Score',
          value: 'Zero Percentile Ranks',
          description: 'Career development is treated as multi-dimensional growth.',
        },
      ]}
      mentorPrompt="How can I evaluate my career growth over the past year?"
    />
  );
}
