import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Building2, Plus, ExternalLink, ShieldCheck } from 'lucide-react';

export default async function AdminEventOrganizersPage() {
  await requireAdminRole('events_moderator');
  const supabase = createAdminClient();

  const { data: organizers } = await supabase
    .from('event_organisers')
    .select('*')
    .order('name', { ascending: true });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Events Platform"
        title="Event Organizers Directory"
        description="Profiles, institutional credentials, contact relationships and verification statuses for employer and educational event promoters."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Organizer</span>
          </button>
        }
      />

      {!organizers || organizers.length === 0 ? (
        <AdminEmptyState
          icon={Building2}
          title="0 Organizer Profiles Created"
          description="Organizer entities will be registered as employers submit events or when imported via discovery connectors."
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Organizer Name</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Verification</th>
                  <th className="p-3">Trust Level</th>
                  <th className="p-3 text-right">Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {organizers.map((org) => (
                  <tr key={org.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-semibold text-[var(--color-text-primary)]">
                      {org.name}
                    </td>
                    <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                      {org.organiser_type}
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)]">
                      {org.contact_email || '—'}
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                        {org.verification_status}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                      {org.trust_status}
                    </td>
                    <td className="p-3 text-right">
                      {org.website_url ? (
                        <a
                          href={org.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-[#2F8FFF] hover:underline"
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[var(--color-text-tertiary)]">—</span>
                      )}
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
