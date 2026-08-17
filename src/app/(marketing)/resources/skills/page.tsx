import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skills — Resources | Career OS",
  description: "Career OS Resources skills. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/resources/skills",
  },
};

export default function ResourcesSkillsPage() {
  return (
    <EditorialSubpage
      badge="RESOURCES &bull; COMPETENCY GRAPH"
      title="Skills Taxonomy & Competency Framework"
      description="Explore the interconnected taxonomy of thousands of technical, operational, analytical, and interpersonal skills mapped in the Career Graph."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Resources', href: ROUTES.RESOURCES },
        { label: 'Skills', href: ROUTES.RESOURCES_SKILLS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">The Career OS Multi-Tier Skill Graph</h2>
        <p>
          Skills do not exist in isolation. Our open ontology maps relationships, prerequisite dependencies, and transferable bridges between technical mastery and leadership effectiveness.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Ontology Layers</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Foundational Competencies:</strong> Core analytical thinking, quantitative fluency, technical documentation.</li>
          <li><strong>Domain Specializations:</strong> Specific frameworks, industrial certifications, compliance codes.</li>
          <li><strong>Applied Execution:</strong> Verified evidence of completing real projects under commercial or academic standards.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
