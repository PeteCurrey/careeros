import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { ROUTES } from '@/lib/routes';
import { Calendar, Search, Filter, ExternalLink, Plus } from 'lucide-react';

export default async function AdminPublishedEventsPage() {
  await requireAdminRole('read_only');
  const supabase = createAdminClient();

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('start_time', { ascending: true })
    .limit(50);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Events Platform"
        title="Published Events Directory"
        description="Live and scheduled events indexed in the CareerOS discovery engine."
        actions={
          <Link
            href={ROUTES.ADMIN_EVENTS_SUBMISSIONS}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)] transition-colors"
          >
            <span>Submissions Queue</span>
          </Link>
        }
      />

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md text-xs">
        <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
          <Search className="w-4 h-4 text-[var(--color-text-tertiary)]" />
          <input
            type="text"
            placeholder="Filter published events by title, organizer, city, or category..."
            className="w-full bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
            {events?.length || 0} events loaded
          </span>
        </div>
      </div>

      {!events || events.length === 0 ? (
        <AdminEmptyState
          icon={Calendar}
          title="No Published Events Found"
          description="There are currently no events published to the live directory in the database. Approve submissions or ingest via the discovery engine."
          actionHref={ROUTES.ADMIN_EVENTS_DISCOVERY}
          actionLabel="Open Discovery Queue"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Event Title</th>
                  <th className="p-3">Organizer</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Date & Time</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {events.map((event) => (
                  <tr key={event.id} className="hover:bg-[var(--color-surface-interactive)]">
                    <td className="p-3 font-semibold text-[var(--color-text-primary)] max-w-xs truncate">
                      {event.title}
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)] truncate max-w-[140px]">
                      {event.organiser_name}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                      {event.category_slug}
                    </td>
                    <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                      {new Date(event.start_time).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)]">
                      {event.city || 'Virtual'}
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                        {event.moderation_status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={`/events/e/${event.slug}`}
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
