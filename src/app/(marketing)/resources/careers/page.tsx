import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function ResourcesCareersPage() {
  return (
    <EditorialSubpage
      badge="RESOURCES &bull; CAREER PROFILES"
      title="Career Taxonomy & Role Profiles"
      description="In-depth profiles of hundreds of modern career specializations across engineering, healthcare, trades, creative direction, and business leadership."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Resources', href: ROUTES.RESOURCES },
        { label: 'Careers', href: ROUTES.RESOURCES_CAREERS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Real Day-to-Day Roles, Verified Competencies</h2>
        <p>
          Career OS profiles are not generic job descriptions. Each role profile details required foundational capabilities, real-world project examples, average compensation trajectory, and adjacent lateral transition routes.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Featured Career Clusters</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Systems & Cloud Architecture:</strong> Distributed compute, site reliability, infrastructure engineering.</li>
          <li><strong>Advanced Manufacturing & Robotics:</strong> Industrial automation, mechatronics, precision tooling.</li>
          <li><strong>Clinical Informatics & Life Sciences:</strong> Health data ethics, clinical trial operations, biomedical engineering.</li>
          <li><strong>Renewable Infrastructure & Energy:</strong> Grid modernization, electrical engineering, green building systems.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
