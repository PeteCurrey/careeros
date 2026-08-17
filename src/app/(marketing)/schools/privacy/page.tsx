import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function SchoolsPrivacyPage() {
  return (
    <EditorialSubpage
      badge="SCHOOLS &bull; DATA GOVERNANCE"
      title="Institutional Data Privacy Architecture"
      description="School districts maintain complete governance over institutional records with cryptographic audit trails and row-level database tenancy."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Schools', href: ROUTES.SCHOOLS },
        { label: 'Privacy', href: ROUTES.SCHOOLS_PRIVACY },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Isolated Institutional Tenancy</h2>
        <p>
          Each school district operates within its own cryptographic tenancy boundary. Student education records are partitioned, and staff access is governed by strict, time-bound role-based access control.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Data Governance Standards</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Granular Role Delegation:</strong> Counsellor, Administrator, and Instructor permissions strictly segmented.</li>
          <li><strong>Immutable Audit Logging:</strong> Every record access, export, or consent modification is appended to a tamper-evident audit ledger.</li>
          <li><strong>Seamless Alumni Handoff:</strong> When students graduate, their verified credentials transfer to their personal wallet while school institutional records remain archived.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
