import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { getCommandCentreMetrics, getActionCenterItems } from '@/lib/admin/metrics';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTopBar } from '@/components/admin/AdminTopBar';

export const metadata = {
  title: 'CareerOS Control Plane',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side authorization check (redirects if not authorized)
  const adminUser = await requireAdminRole('read_only');

  // Fetch real counts for badges and top bar alerts
  const [metrics, actionItems] = await Promise.all([
    getCommandCentreMetrics(),
    getActionCenterItems(),
  ]);

  const urgentCount = actionItems.filter((i) => i.urgency === 'high').length;

  return (
    <div className="min-h-screen bg-[var(--color-surface-base)] text-[var(--color-text-primary)] flex antialiased">
      {/* Persistent Admin Sidebar */}
      <AdminSidebar
        userRole={adminUser.role}
        userEmail={adminUser.email}
        counts={{
          pendingReviews: metrics.pendingEventReviews,
          discoveryCandidates: metrics.discoveredCandidates,
          failedJobs: metrics.failedJobs24h,
        }}
      />

      {/* Main Admin Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopBar
          userRole={adminUser.role}
          userEmail={adminUser.email}
          userName={adminUser.display_name}
          urgentItemsCount={urgentCount}
        />

        <main id="admin-main" className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}
