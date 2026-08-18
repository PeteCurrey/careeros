import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

export default async function AdminTrafficPage() {
  await requireAdminRole('analyst');

  const hasVercelAnalytics = Boolean(process.env.VERCEL_ANALYTICS_ID);
  const hasGoogleAnalytics = Boolean(process.env.NEXT_PUBLIC_GA_ID);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Growth Engine"
        title="Traffic & Conversion Analytics"
        description="Organic visitors, referrers, landing page engagement, and multi-stage CareerOS activation funnels."
      />

      {!hasVercelAnalytics && !hasGoogleAnalytics ? (
        <AdminEmptyState
          icon={BarChart2}
          title="Product Analytics Not Connected"
          description="Connect Vercel Analytics or Google Analytics via environment variables to view real website sessions, bounce rates and conversion funnels."
          badge="Integration Required"
        />
      ) : (
        <div className="p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Analytics connected and aggregating.
          </p>
        </div>
      )}
    </div>
  );
}
