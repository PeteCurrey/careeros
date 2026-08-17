import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "First Job — Pathways | Career OS",
  description: "Career OS Pathways first Job. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/pathways/first-job",
  },
};

export default function FirstJobPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; FIRST EMPLOYMENT"
      title="First Opportunities & Entry-Level Pathways"
      description="Land your first professional role through demonstrated project evidence, verified capability, and tailored entry-level opportunity matching."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'First Job', href: ROUTES.PATHWAYS_FIRST_JOB },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Overcoming the &ldquo;Experience Paradox&rdquo;</h2>
        <p>
          New graduates and career starters often face the paradox of needing experience to get a job, but needing a job to get experience. Career OS breaks this cycle by transforming capstone projects, open-source work, and vocational certifications into verified proof of readiness.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Action Plan for First-Time Candidates</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Demonstrate Hands-on Output:</strong> Curate 2–3 substantive projects in your Career Passport that reflect actual workplace deliverables.</li>
          <li><strong>Calibrate Suitability:</strong> Let your AI Career Mentor identify emerging entry-level roles aligned with your natural strengths.</li>
          <li><strong>Direct Employer Matching:</strong> Connect with launch employers committed to hiring for potential rather than tenure.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
