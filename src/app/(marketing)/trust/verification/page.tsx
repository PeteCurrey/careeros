import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function TrustVerificationPage() {
  return (
    <EditorialSubpage
      badge="TRUST &bull; VERIFICATION"
      title="W3C Verifiable Credentials & Provenance"
      description="Cryptographic proof of degrees, trade licenses, apprenticeship hours, and capstone project artifacts that belong entirely to you."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Trust', href: ROUTES.TRUST },
        { label: 'Verification', href: ROUTES.TRUST_VERIFICATION },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Open Standards for Portable Credentialing</h2>
        <p>
          Career OS implements the W3C Verifiable Credentials open standard. This allows issuing institutions (schools, universities, employers, trade unions) to digitally sign credentials that candidates can store and verify independently of any proprietary platform.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Credential Verification Pillars</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Cryptographic Digital Signatures:</strong> Immediate public-key mathematical verification with zero credential vendor lock-in.</li>
          <li><strong>Zero-Knowledge Proofs:</strong> Prove you satisfy an age or certification threshold without revealing unrelated personal data.</li>
          <li><strong>Permanent Portability:</strong> Your Career Passport remains under your private key control for life.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
