import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Cpu, ShieldCheck, DollarSign, Activity, AlertTriangle, ArrowRight, Layers, Key } from 'lucide-react';

export default async function AdminAIOverviewPage() {
  await requireAdminRole('read_only');
  const supabase = createAdminClient();

  const [
    { data: providers },
    { data: models },
    { data: useCases },
    { data: recentUsage },
  ] = await Promise.all([
    supabase.from('ai_providers').select('*'),
    supabase.from('ai_models').select('*'),
    supabase.from('ai_use_cases').select('*'),
    supabase.from('ai_usage_logs').select('*').order('occurred_at', { ascending: false }).limit(5),
  ]);

  return (
    <div className="space-y-8">
      <AdminSectionHeader
        category="Intelligence"
        title="AI Control Centre"
        description="Unified operations for LLM providers, model registries, use-case routing policies, versioned prompts, emergency kill switches, and token costs."
      />

      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Providers</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {providers?.length || 0}
          </p>
          <Link href={ROUTES.ADMIN_AI_PROVIDERS} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Inspect providers →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Registered Models</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {models?.length || 0}
          </p>
          <Link href={ROUTES.ADMIN_AI_MODELS} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            View registry →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Use-Case Routes</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {useCases?.length || 0}
          </p>
          <Link href={ROUTES.ADMIN_AI_ROUTING} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Routing matrix →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Usage & Costs</p>
          <p className="text-xl font-bold text-[#34D399] mt-1">
            $0.00
          </p>
          <Link href={ROUTES.ADMIN_AI_USAGE} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Cost analytics →
          </Link>
        </div>
      </div>

      {/* Subsections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href={ROUTES.ADMIN_AI_PROVIDERS}
          className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-2"
        >
          <Key className="w-4 h-4 text-[#2F8FFF]" />
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
            Provider Architecture
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Configure Google AI, Anthropic, and OpenAI API credentials securely via server secrets.
          </p>
        </Link>

        <Link
          href={ROUTES.ADMIN_AI_ROUTING}
          className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-2"
        >
          <Layers className="w-4 h-4 text-[#CDBBD2]" />
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
            Task-Based Routing
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Decouple applications: map Mentor, CV Analysis, and Event Discovery to different primary models.
          </p>
        </Link>

        <Link
          href={ROUTES.ADMIN_AI_PROMPTS}
          className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors group space-y-2"
        >
          <ShieldCheck className="w-4 h-4 text-[#34D399]" />
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors">
            Versioned System Prompts
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Manage versioned prompts, parameter schemas, and safety profiles without code deployments.
          </p>
        </Link>
      </div>

      {/* Provider Connectivity State */}
      <div className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
        <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
          Configured LLM Providers
        </h2>

        <div className="space-y-2">
          {[
            { id: 'google', name: 'Google AI (Gemini 1.5 Pro / Flash)', envKey: 'GOOGLE_AI_API_KEY' },
            { id: 'anthropic', name: 'Anthropic (Claude 3.5 Sonnet)', envKey: 'ANTHROPIC_API_KEY' },
            { id: 'openai', name: 'OpenAI (GPT-4o)', envKey: 'OPENAI_API_KEY' },
          ].map((prov) => {
            const hasEnv = Boolean(process.env[prov.envKey]);
            return (
              <div
                key={prov.id}
                className="p-3 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">{prov.name}</p>
                  <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    Env key: {prov.envKey}
                  </p>
                </div>
                <div>
                  <span
                    className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded border ${
                      hasEnv
                        ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                        : 'bg-[var(--color-surface-raised)] text-[var(--color-text-tertiary)] border-[var(--color-border-default)]'
                    }`}
                  >
                    {hasEnv ? 'Connected' : 'Configuration Required'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
