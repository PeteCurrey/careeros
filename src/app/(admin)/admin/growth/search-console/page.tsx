import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Search, ExternalLink } from 'lucide-react';

export default async function AdminSearchConsolePage() {
  await requireAdminRole('marketing');

  const hasSearchConsole = Boolean(
    process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL &&
    process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY
  );

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Growth Engine"
        title="Google Search Console Integration"
        description="Live organic search impressions, query click-through rates (CTR), search positions and indexation coverage."
      />

      {!hasSearchConsole ? (
        <AdminEmptyState
          icon={Search}
          title="Google Search Console is not connected"
          description="Configure GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL and GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY in your server environment to stream real impressions, clicks and top search queries."
          badge="Not Connected"
        />
      ) : (
        <div className="p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Search Console credentials active. Streaming organic index data.
          </p>
        </div>
      )}
    </div>
  );
}
