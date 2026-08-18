import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { FileText, Plus, ExternalLink, Edit3 } from 'lucide-react';

export default async function AdminContentPagesPage() {
  await requireAdminRole('content_editor');
  const supabase = createAdminClient();

  const { data: pages } = await supabase
    .from('cms_pages')
    .select('*')
    .order('route', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Content Management"
        title="CMS Pages Inventory"
        description="Database-managed page headers, metadata, robots directives, OpenGraph cards and structured content blocks."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Page Entity</span>
          </button>
        }
      />

      {!pages || pages.length === 0 ? (
        <AdminEmptyState
          icon={FileText}
          title="0 Managed CMS Pages in Database"
          description="Static React routes are currently serving all public marketing URLs. Create database-backed CMS page entries to manage dynamic copy, meta tags and editable regions."
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Route Path</th>
                  <th className="p-3">Page Title</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Robots Directive</th>
                  <th className="p-3">Last Updated</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-mono font-semibold text-[var(--color-text-primary)]">
                      {page.route}
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)] truncate max-w-xs">
                      {page.title}
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                        {page.status}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                      {page.robots_directive}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(page.updated_at).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <Link
                        href={page.route}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-[11px] text-[#2F8FFF] hover:underline"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
