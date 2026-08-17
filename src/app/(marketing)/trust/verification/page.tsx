import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function VerificationPage() {
  const meta = GOVERNANCE_MANIFEST["verification"]!;
  const toc = [
    { id: "evidence-spectrum", title: "1. 9 Verification States Taxonomy" },
    { id: "issuer-provenance", title: "2. Issuer Provenance & Cryptographic Signatures" },
    { id: "disputes", title: "3. Credential Dispute & Revocation Rules" },
  ];

  const states = [
    { state: "SELF_DECLARED", desc: "Unverified claim entered directly by the user." },
    { state: "EVIDENCE_ATTACHED", desc: "User claim backed by attached work sample or repository link." },
    { state: "PLATFORM_ASSESSED", desc: "Capability evaluated via interactive platform assessment." },
    { state: "THIRD_PARTY_VERIFIED", desc: "Qualification confirmed by an accredited assessment partner." },
    { state: "ISSUER_VERIFIED", desc: "Credential directly issued or cryptographically signed by an institution." },
    { state: "EMPLOYER_VERIFIED", desc: "Experience record confirmed directly by a verified employer." },
    { state: "EXPIRED", desc: "Credential whose validity period has elapsed." },
    { state: "REVOKED", desc: "Credential formally withdrawn by the issuing authority." },
    { state: "DISPUTED", desc: "Claim under active review due to authenticity challenge." },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Defining the 9 evidence verification states governing claims on the Career Passport." toc={toc}>
      <section id="evidence-spectrum" className="space-y-4">
        <h2>1. 9 Verification States Taxonomy</h2>
        <p>
          Career OS never labels all user claims as &quot;verified.&quot; We enforce explicit verification states across all Passport evidence:
        </p>
        <div className="space-y-2 pt-2">
          {states.map((s) => (
            <div key={s.state} className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-xs space-y-1">
              <span className="font-mono font-bold text-[var(--color-text-primary)]">{s.state}</span>
              <p className="text-[var(--color-text-secondary)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="issuer-provenance" className="space-y-4">
        <h2>2. Issuer Provenance &amp; Cryptographic Signatures</h2>
        <p>
          Issuer-verified credentials link directly to verified institutional domain signatures or Open Badges 3.0 W3C verifiable credentials.
        </p>
      </section>

      <section id="disputes" className="space-y-4">
        <h2>3. Credential Dispute &amp; Revocation Rules</h2>
        <p>
          Credentials disputed by institutions or employers are flagged as <code className="font-mono text-xs">DISPUTED</code> and hidden from candidate matching until verified.
        </p>
      </section>
    </GovernancePageLayout>
  );
}