import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Clock, CheckCircle2, XCircle, AlertCircle, Eye, ChevronRight } from 'lucide-react';

export default async function AdminEventSubmissionsPage() {
  await requireAdminRole('events_moderator');
  const supabase = createAdminClient();

  const { data: submissions } = await supabase
    .from('event_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  const pendingCount = submissions?.filter((s) => s.status === 'submitted').length || 0;

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Events Platform"
        title="Event Submissions Moderation"
        description="Review, verify, approve, or request changes on events submitted by employers, colleges, and independent organisers."
      />

      {!submissions || submissions.length === 0 ? (
        <AdminEmptyState
          icon={CheckCircle2}
          title="0 Awaiting Review"
          description="The user and organiser submission queue is currently clear. When organisers submit events through the public portal, they appear here for verification."
          badge="Queue Clear"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Event Title</th>
                  <th className="p-3">Submitter / Organisation</th>
                  <th className="p-3">Contact Email</th>
                  <th className="p-3">Submission Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Moderation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {submissions.map((sub) => {
                  const eventData = (sub.proposed_event_data as Record<string, unknown>) || {};
                  return (
                    <tr key={sub.id} className="hover:bg-[var(--color-surface-interactive)]">
                      <td className="p-3 font-semibold text-[var(--color-text-primary)] max-w-xs truncate">
                        {(eventData.title as string) || 'Untitled Event'}
                      </td>
                      <td className="p-3">
                        <div className="font-medium text-[var(--color-text-primary)]">
                          {sub.organisation_name}
                        </div>
                        <div className="text-[11px] text-[var(--color-text-tertiary)]">
                          {sub.submitter_name}
                        </div>
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                        {sub.submitter_email}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                        {new Date(sub.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-3">
                        <span
                          className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                            sub.status === 'submitted'
                              ? 'bg-[#DDD36D]/10 text-[#DDD36D] border-[#DDD36D]/30'
                              : sub.status === 'approved'
                              ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                              : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]'
                          }`}
                        >
                          {sub.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <span className="text-[11px] text-[#2F8FFF] font-medium cursor-pointer hover:underline">
                          Review Submission →
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
