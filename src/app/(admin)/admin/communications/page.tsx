import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Mail, Plus, Send, Users, ShieldAlert, Sparkles } from 'lucide-react';

export default async function AdminCommunicationsPage() {
  await requireAdminRole('marketing');
  const supabase = createAdminClient();

  const [
    { data: templates },
    { data: newsletters },
    { data: campaigns },
  ] = await Promise.all([
    supabase.from('email_templates').select('*'),
    supabase.from('newsletters').select('*'),
    supabase.from('campaigns').select('*'),
  ]);

  return (
    <div className="space-y-8">
      <AdminSectionHeader
        category="Outreach"
        title="Communications & Email Control"
        description="Editable email templates, database-managed newsletters, campaign dispatch engines and delivery audit logs."
        actions={
          <Link
            href={ROUTES.ADMIN_COMMS_CAMPAIGNS}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Draft Campaign</span>
          </Link>
        }
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Templates</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {templates?.length || 0}
          </p>
          <Link href={ROUTES.ADMIN_COMMS_TEMPLATES} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Manage templates →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Newsletters</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {newsletters?.length || 0}
          </p>
          <Link href={ROUTES.ADMIN_COMMS_NEWSLETTERS} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Editions →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Campaigns</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {campaigns?.length || 0}
          </p>
          <Link href={ROUTES.ADMIN_COMMS_CAMPAIGNS} className="text-[11px] text-[#2F8FFF] hover:underline mt-1 inline-block">
            Campaign list →
          </Link>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Email Provider</p>
          <p className="text-sm font-bold text-[var(--color-text-primary)] mt-1 truncate">
            {process.env.RESEND_API_KEY ? 'Resend' : 'Supabase Auth'}
          </p>
          <span className="text-[10px] font-mono text-[#34D399]">Connected</span>
        </div>
      </div>

      {/* Draft-first Rule callout */}
      <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-[#DDD36D] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-xs font-bold text-[var(--color-text-primary)] uppercase font-mono">
            Editorial Safety Policy (Spec §78)
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            AI-assisted newsletter introductions and campaigns default strictly to Draft status. Automated user correspondence is restricted to verified transactional events.
          </p>
        </div>
      </div>
    </div>
  );
}
