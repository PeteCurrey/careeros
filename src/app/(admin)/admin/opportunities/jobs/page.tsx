import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Briefcase } from 'lucide-react';

export default async function AdminOpportunitiesJobsPage() {
  await requireAdminRole('read_only');

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Opportunities"
        title="Jobs & Vacancies Operations"
        description="Search, filter, status management, and employer provenance for live career listings."
      />

      <AdminEmptyState
        icon={Briefcase}
        title="0 Live Job Listings in Database"
        description="Employment listings will appear here when verified employers submit vacancies or via connected jobs integrations."
        badge="Zero Fabricated Vacancies"
      />
    </div>
  );
}
