import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function ResourcesEducationPage() {
  return (
    <EditorialSubpage
      badge="RESOURCES &bull; ACCREDITATION"
      title="Educational Pathways & Accreditation Index"
      description="Compare accredited degrees, vocational credentials, national trade apprenticeships, and technical bootcamps by real career return on investment."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Resources', href: ROUTES.RESOURCES },
        { label: 'Education', href: ROUTES.RESOURCES_EDUCATION },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Evaluating Real Education ROI</h2>
        <p>
          Not all educational investments yield equal market outcomes. Career OS aggregates verified graduate earnings, placement timelines, and debt-to-income metrics across collegiate and vocational programs.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Education Categories Compared</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Four-Year Universities:</strong> Tuition vs median 5-year and 10-year career progression.</li>
          <li><strong>Community & Technical Colleges:</strong> Two-year technical associate programs and articulated transfer routes.</li>
          <li><strong>Registered Apprenticeships:</strong> Direct zero-debt entry into union and non-union advanced trades.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
