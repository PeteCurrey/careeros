import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function EmployersTalentDiscoveryPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; TALENT DISCOVERY"
      title="Evidence-Based Talent Discovery"
      description="Access non-traditional, high-aptitude talent through verified project portfolios, capstone deliverables, and authentic credentials."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Talent Discovery', href: ROUTES.EMPLOYERS_TALENT_DISCOVERY },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Evaluating Real Capability Beyond Résumé Fluff</h2>
        <p>
          Discover candidates by the quality of what they have built. Career OS allows hiring teams to query verified skill graphs and explore project artifacts that demonstrate real problem-solving acumen.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Discovery Advantages</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Direct Artifact Inspection:</strong> Inspect source code, architectural schematics, laboratory logs, and design systems.</li>
          <li><strong>Institutional Endorsements:</strong> Verified sign-offs from vocational instructors and university faculty.</li>
          <li><strong>Cryptographic Tamper-Proofing:</strong> Confidence that candidate credentials have not been falsified.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
