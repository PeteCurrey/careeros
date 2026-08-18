import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { FileText } from 'lucide-react';

export default async function AdminContentArticlesPage() {
  await requireAdminRole('content_editor');

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Content Management"
        title="Editorial Articles & Resource Guides"
        description="Manage career advice articles, pathway breakdowns, apprenticeship guides, and educational resource documents."
      />
      <AdminEmptyState
        icon={FileText}
        title="0 Articles in Database"
        description="Career guide publications and pathway articles will be managed here with rich text and schema markup."
      />
    </div>
  );
}
