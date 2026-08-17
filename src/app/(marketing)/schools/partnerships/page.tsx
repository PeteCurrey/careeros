import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function SchoolsPartnershipsPage() {
  return (
    <EditorialSubpage
      badge="SCHOOLS &bull; LAUNCH PARTNERSHIPS"
      title="Launch School Partnership Program"
      description="Collaborate directly with our product and ethics teams to pioneer modern, equitable career infrastructure for your school or district."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Schools', href: ROUTES.SCHOOLS },
        { label: 'Partnerships', href: ROUTES.SCHOOLS_PARTNERSHIPS },
      ]}
      ctaText="Apply as a Launch School"
      ctaHref={ROUTES.COMPANY_CONTACT}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Shaping the Future of Career Technology</h2>
        <p>
          We are accepting a limited cohort of visionary school districts, vocational academies, and regional education authorities into the Career OS Launch School Program.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Program Benefits</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Zero Platform Licensing Fees:</strong> Free core platform access for your entire student cohort throughout the pilot period.</li>
          <li><strong>Direct Advisory Access:</strong> Dedicated engineering support and tailored integration with your student information system (SIS).</li>
          <li><strong>Ethics Board Seat:</strong> Opportunity to contribute to the Career OS Educational Safeguarding Advisory Council.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
