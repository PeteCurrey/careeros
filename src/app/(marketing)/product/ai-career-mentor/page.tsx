import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Cpu, ShieldCheck, Eye, History, Sparkles, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ai Career Mentor — Product | Career OS",
  description: "Career OS Product ai Career Mentor. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product/ai-career-mentor",
  },
};

export default function AICareerMentorPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Core Subsystem
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            AI Career Mentor: Context-aware, persistent, and explainable.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            A system-assigned professional mentor designed to understand your goals, skills, history, and developmental milestones over years — not a generic chatbot or celebrity persona.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Start Free with AI Mentor
            </Button>
            <Button href={ROUTES.TRUST_RESPONSIBLE_AI} variant="secondary" size="md">
              Recommendation Provenance
            </Button>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <History className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Continuous Developmental Context
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Unlike transactional chat interfaces that reset each session, the AI Career Mentor builds structured context over time, remembering your past challenges, coursework, verified achievements, and evolving ambitions.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Decision Factors & Rationale
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Every recommendation surfaces the specific decision factors, input provenance, and developmental rationale behind it. We never treat AI output as an unexaminable black box.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Human Agency & No False Personas
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We never pretend the AI Mentor is human or fabricate celebrity companion avatars. It is professional intelligence engineered to assist your decision-making while keeping you in full command.
            </p>
          </Card>
        </div>

        {/* Audit & Provenance Architecture */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Accountability"
            heading="Recommendation Provenance Structure"
            description="Our underlying architecture records complete audit metadata for every AI execution to ensure transparency and accountability."
          />

          <Card className="p-6 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] font-mono text-xs text-[var(--color-text-secondary)] overflow-x-auto">
            <div className="space-y-1">
              <p className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-bold">
                // Conceptual AI Execution Record (Structured Provenance)
              </p>
              <p>ai_execution_id: &quot;8f4d92a1-3c5e-4b2a-9e1f-7a8b9c0d1e2f&quot;</p>
              <p>provider: &quot;google&quot; | model: &quot;gemini-pro&quot; | model_version: &quot;1.5&quot;</p>
              <p>policy_version: &quot;2026.08-safety-standard&quot;</p>
              <p>input_sources: [&quot;career_twin.skills&quot;, &quot;career_passport.credentials&quot;]</p>
              <p>user_facing_rationale: &quot;Recommended advanced cloud architecture certification based on verified Kubernetes evidence and target systems-engineering pathway.&quot;</p>
              <p>key_factors: [&quot;Strong systems programming foundation&quot;, &quot;Expressed interest in distributed systems&quot;, &quot;Regional market demand in US-National&quot;]</p>
              <p>confidence_or_uncertainty: &#123; level: &quot;HIGH&quot;, explanation: &quot;High overlap with 3 completed capstone projects&quot; &#125;</p>
              <p>human_action: &#123; action_type: &quot;ACCEPTED&quot;, acted_at: &quot;2026-08-16T22:30:00Z&quot; &#125;</p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Experience the AI Career Mentor
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Included free with every Career OS account.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
