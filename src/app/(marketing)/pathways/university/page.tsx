import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "University — Pathways | Career OS",
  description: "Career OS Pathways university. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/pathways/university",
  },
};

export default function UniversityPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; ACADEMIA & RESEARCH"
      title="University & Degree Pathways"
      description="Connect academic study, undergraduate research, and interdisciplinary degrees to global career opportunities and post-graduate progression."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'University', href: ROUTES.PATHWAYS_UNIVERSITY },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Maximizing Academic Value into Market Capability</h2>
        <p>
          A university degree provides foundational knowledge and critical analytical rigor. Career OS enhances your university experience by helping you translate academic achievements, research papers, and capstone dissertations into verifiable competency records.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Strategic Focus Areas</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Interdisciplinary Research Translation:</strong> Documenting methodologies, peer reviews, and laboratory findings in your Career Passport.</li>
          <li><strong>Internship & Placement Integration:</strong> Bridging seasonal internships into persistent evidence records.</li>
          <li><strong>Postgraduate & Fellowship Alignment:</strong> Mapping PhD, Master&apos;s, and academic fellowship opportunities via the Career Graph.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
