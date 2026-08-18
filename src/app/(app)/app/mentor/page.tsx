import React from 'react';
import { FeaturePlaceholder } from '@/components/app/shell/FeaturePlaceholder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Career Mentor Workspace | Career OS',
  description: 'Confidential strategic advisory and contextual sounding board with your assigned AI Career Mentor.',
};

export default function MentorPage() {
  return (
    <FeaturePlaceholder
      moduleName="AI Career Mentor Workspace"
      moduleCategory="DECIDE & EVALUATE"
      plannedPass="PASS 02 IN QUEUE"
      subtitle="A private, continuous sounding board grounded in your Career Twin context and objective ledger."
      description="The full AI Career Mentor workspace will provide multi-turn strategic dialogues, trade-off evaluations, interview rehearsals, and milestone deconstructions. In this pass, context handoffs from Today are active."
      connectedDataSummary={[
        {
          label: 'Mentor Assignment',
          value: 'Active',
          description: 'Grounded in your onboarding domain match and progression goals.',
        },
        {
          label: 'Context Memory',
          value: 'Sealed',
          description: 'Zero exposure to external training runs or public LLMs.',
        },
        {
          label: 'Action Handoff',
          value: 'Connected',
          description: 'Accepts structured recommendation context directly from Today.',
        },
      ]}
      mentorPrompt="How should I think about my career priorities this month?"
    />
  );
}
