import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Layers, Plus, ShieldAlert, Cpu } from 'lucide-react';

export default async function AdminAIRoutingPage() {
  await requireAdminRole('super_admin');
  const supabase = createAdminClient();

  const { data: useCases } = await supabase
    .from('ai_use_cases')
    .select('*')
    .order('id', { ascending: true });

  const sampleUseCases = [
    {
      id: 'mentor_conversation',
      name: 'AI Career Mentor Dialogues',
      desc: 'Interactive guidance and conversational reflection with learners.',
      primaryModel: 'gemini-1.5-pro',
      fallbackModel: 'claude-3-5-sonnet',
      safety: 'ELEVATED',
    },
    {
      id: 'event_extraction',
      name: 'Autonomous Event Structured Extraction',
      desc: 'Ingesting unstructured university careers web pages into validated JSON schemas.',
      primaryModel: 'gemini-1.5-flash',
      fallbackModel: 'gpt-4o-mini',
      safety: 'STANDARD',
    },
    {
      id: 'cv_analysis',
      name: 'Career Twin & Resume Parsing',
      desc: 'Extracting skills, credentials and chronological employment milestones.',
      primaryModel: 'claude-3-5-sonnet',
      fallbackModel: 'gemini-1.5-pro',
      safety: 'STANDARD',
    },
    {
      id: 'job_matching',
      name: 'Opportunity & Pathway Alignment',
      desc: 'Multi-dimensional embedding and candidate relevance scoring.',
      primaryModel: 'text-embedding-3-large',
      fallbackModel: 'gemini-embedding-exp',
      safety: 'STANDARD',
    },
  ];

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="AI Operations"
        title="Use-Case Based AI Routing"
        description="Configure primary and fallback model routing independently per feature. Allows switching Mentor model without touching Event Extraction or Resume Parsing."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Use Case Name</th>
                <th className="p-3">Primary Model</th>
                <th className="p-3">Fallback Chain</th>
                <th className="p-3">Safety Profile</th>
                <th className="p-3">Emergency Kill Switch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {sampleUseCases.map((uc) => (
                <tr key={uc.id} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3">
                    <div className="font-semibold text-[var(--color-text-primary)]">
                      {uc.name}
                    </div>
                    <div className="text-[11px] text-[var(--color-text-tertiary)]">
                      {uc.desc}
                    </div>
                  </td>
                  <td className="p-3 font-mono text-[var(--color-text-primary)]">
                    <span className="px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#2F8FFF] border border-[var(--color-border-subtle)]">
                      {uc.primaryModel}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                    {uc.fallbackModel}
                  </td>
                  <td className="p-3">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                      {uc.safety}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]">
                      Operational
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
