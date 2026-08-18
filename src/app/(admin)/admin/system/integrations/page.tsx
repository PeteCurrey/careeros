import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Settings, CheckCircle2, AlertCircle, Database, Shield, Cpu, Mail, Search, CreditCard } from 'lucide-react';

export default async function AdminIntegrationsPage() {
  await requireAdminRole('super_admin');
  const supabase = createAdminClient();

  const { data: integrations } = await supabase
    .from('integrations')
    .select('*')
    .order('category', { ascending: true });

  const categoryIcons: Record<string, React.ElementType> = {
    database: Database,
    auth: Shield,
    ai: Cpu,
    email: Mail,
    seo: Search,
    payments: CreditCard,
  };

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="System Operations"
        title="Integration Status & Gateways"
        description="Live connectivity states for core platform dependencies: database, auth, AI providers, search console, email delivery, and payment gateways."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations?.map((integ) => {
          const Icon = categoryIcons[integ.category] || Settings;
          const isConnected = integ.status === 'connected';

          return (
            <div
              key={integ.id}
              className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-sm bg-[var(--color-surface-interactive)] border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-text-secondary)]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                      isConnected
                        ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                        : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                    }`}
                  >
                    {integ.status.replace('_', ' ')}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {integ.display_name}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {integ.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-1 text-[10px] font-mono text-[var(--color-text-tertiary)]">
                <p>Category: {integ.category.toUpperCase()}</p>
                <p>Required Keys: {integ.env_keys?.join(', ')}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
