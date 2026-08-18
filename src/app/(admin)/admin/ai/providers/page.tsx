import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Key, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default async function AdminAIProvidersPage() {
  await requireAdminRole('super_admin');
  const supabase = createAdminClient();

  const { data: providers } = await supabase
    .from('ai_providers')
    .select('*')
    .order('id', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="AI Operations"
        title="AI Providers Registry"
        description="LLM engine integrations, API connectivity checks, and environment variable bindings. API keys remain protected in server secrets."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            id: 'google',
            name: 'Google AI (Gemini)',
            models: 'Gemini 1.5 Pro, Flash',
            envKey: 'GOOGLE_AI_API_KEY',
            desc: 'Default multimodal provider for reasoning, event extraction and mentorship.',
          },
          {
            id: 'anthropic',
            name: 'Anthropic (Claude)',
            models: 'Claude 3.5 Sonnet, Haiku',
            envKey: 'ANTHROPIC_API_KEY',
            desc: 'Secondary reasoning provider for long-context career documents and code evaluation.',
          },
          {
            id: 'openai',
            name: 'OpenAI',
            models: 'GPT-4o, text-embedding-3',
            envKey: 'OPENAI_API_KEY',
            desc: 'Alternative provider for vector embeddings and conversational benchmarks.',
          },
        ].map((prov) => {
          const isConfigured = Boolean(process.env[prov.envKey]);
          return (
            <div
              key={prov.id}
              className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#2F8FFF] font-semibold">
                    {prov.id}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                      isConfigured
                        ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                        : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                    }`}
                  >
                    {isConfigured ? 'Configured' : 'Not Configured'}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {prov.name}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {prov.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-1 text-[11px] font-mono">
                <p className="text-[var(--color-text-tertiary)]">
                  Secret binding: <span className="text-[var(--color-text-secondary)]">{prov.envKey}</span>
                </p>
                <p className="text-[var(--color-text-tertiary)]">
                  Models: <span className="text-[var(--color-text-secondary)]">{prov.models}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
