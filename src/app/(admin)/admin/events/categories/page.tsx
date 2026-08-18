import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Layers, Plus, ExternalLink } from 'lucide-react';

export default async function AdminEventCategoriesPage() {
  await requireAdminRole('content_editor');
  const supabase = createAdminClient();

  const { data: categories } = await supabase
    .from('event_categories')
    .select('*')
    .order('display_order', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Events Platform"
        title="Event Taxonomy & Categories"
        description="Database-managed event categories, slugs, badge copy, group classifications, and public discovery navigation ordering."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Category</span>
          </button>
        }
      />

      {!categories || categories.length === 0 ? (
        <AdminEmptyState
          icon={Layers}
          title="0 Categories Found in Database"
          description="Categories are currently driven by static config. Run the taxonomy migration to seed database-managed category records."
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Category Name</th>
                  <th className="p-3">Slug</th>
                  <th className="p-3">Group</th>
                  <th className="p-3">Badge Label</th>
                  <th className="p-3">Order</th>
                  <th className="p-3">Active</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-semibold text-[var(--color-text-primary)]">
                      {cat.name}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                      /events/{cat.slug}
                    </td>
                    <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                      {cat.category_group}
                    </td>
                    <td className="p-3">
                      {cat.badge_text ? (
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#2F8FFF] border border-[var(--color-border-subtle)]">
                          {cat.badge_text}
                        </span>
                      ) : (
                        <span className="text-[var(--color-text-tertiary)]">—</span>
                      )}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {cat.display_order}
                    </td>
                    <td className="p-3">
                      <span
                        className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                          cat.is_active
                            ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                            : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                        }`}
                      >
                        {cat.is_active ? 'Active' : 'Disabled'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={`/events/${cat.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-[11px] text-[#2F8FFF] hover:underline"
                      >
                        <span>View Hub</span>
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
