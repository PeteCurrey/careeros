import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Mail, Plus } from 'lucide-react';

export default async function AdminCommsTemplatesPage() {
  await requireAdminRole('marketing');
  const supabase = createAdminClient();

  const { data: templates } = await supabase
    .from('email_templates')
    .select('*')
    .order('template_key', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Communications"
        title="Email & Notification Templates"
        description="Database-managed transactional templates for onboarding, event approval notices, employer milestones and school invitations."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Template</span>
          </button>
        }
      />

      {!templates || templates.length === 0 ? (
        <AdminEmptyState
          icon={Mail}
          title="0 Managed Email Templates in Database"
          description="Create email templates with dynamic variable interpolation for automated event approvals, guardian consent alerts and employer messages."
          actionLabel="Create First Template"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((tpl) => (
            <div key={tpl.id} className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#2F8FFF]">{tpl.template_key}</span>
                <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">{tpl.category}</span>
              </div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{tpl.name}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{tpl.subject_template}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
