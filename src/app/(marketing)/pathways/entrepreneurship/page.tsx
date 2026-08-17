import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Entrepreneurship — Pathways | Career OS",
  description: "Career OS Pathways entrepreneurship. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/pathways/entrepreneurship",
  },
};

export default function EntrepreneurshipPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; VENTURE CREATION & FOUNDERSHIP"
      title="Entrepreneurship & Venture Pathways"
      description="Launch your own enterprise, assemble founding teams with verified complementary capabilities, and take intellectual property from concept to market."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'Entrepreneurship', href: ROUTES.PATHWAYS_ENTREPRENEURSHIP },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Building Enterprises on Demonstrated Capability</h2>
        <p>
          Founding a venture demands multidisciplinary versatility. Career OS helps entrepreneurs audit their own skill profile, identify complementary co-founders through verified evidence records, and track early product milestones.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Founder Support Pillars</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Founding Team Capability Matrix:</strong> Finding technical, commercial, or operational partners with verified track records.</li>
          <li><strong>IP & Milestone Portfolio:</strong> Cryptographically anchoring prototypes, patents, and early customer validation.</li>
          <li><strong>Venture Network Access:</strong> Connecting with launch accelerators and ethical seed capital networks.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
