import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function CookiePolicyPage() {
  const meta = GOVERNANCE_MANIFEST["cookies"]!;

  const toc = [
    { id: "overview", title: "1. Overview & Browser Storage Policy" },
    { id: "deployed-inventory", title: "2. Deployed Application Storage Inventory" },
    { id: "categories", title: "3. Storage Categories & Purposes" },
    { id: "no-ad-trackers", title: "4. Zero Advertising & Tracking Network Guarantee" },
    { id: "management", title: "5. How to Manage or Disable Storage" },
  ];

  const storageItems = [
    {
      name: "sb-auth-token / sb-<project>-auth-token",
      provider: "Career OS / Supabase Auth (First-Party)",
      purpose: "Encrypted authentication session token maintaining secure login state.",
      category: "Strictly Necessary",
      duration: "Session / 30 Days (Refreshable)",
      type: "First-Party Cookie & LocalStorage",
    },
    {
      name: "careeros_workspace_id",
      provider: "Career OS (First-Party)",
      purpose: "Stores your currently active multi-tenant workspace context (e.g. Individual, School, Employer).",
      category: "Preferences",
      duration: "Persistent (Local Device)",
      type: "LocalStorage",
    },
    {
      name: "careeros_locale",
      provider: "Career OS (First-Party)",
      purpose: "Remembers your language and regional preferences (e.g. en-US).",
      category: "Preferences",
      duration: "1 Year",
      type: "LocalStorage",
    },
    {
      name: "careeros_consent_state",
      provider: "Career OS (First-Party)",
      purpose: "Records your consent audit timestamp and policy acceptance state for legal compliance.",
      category: "Strictly Necessary",
      duration: "Persistent (Audit Bound)",
      type: "LocalStorage",
    },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Technical inventory of browser cookies, local storage, and session identifiers deployed across Career OS." toc={toc}>
      <section id="overview" className="space-y-4">
        <h2>1. Overview &amp; Browser Storage Policy</h2>
        <p>
          Career OS uses browser cookies, local storage, and session storage to provide a secure, authenticated, and responsive career operating system.
        </p>
        <p>
          We publish a precise inventory of the actual storage keys deployed on our application surfaces. We do not set hidden third-party advertising tracking pixels or retargeting scripts.
        </p>
      </section>

      <section id="deployed-inventory" className="space-y-4">
        <h2>2. Deployed Application Storage Inventory</h2>
        <p>
          The table below lists all cookies and web storage identifiers currently utilized by Career OS:
        </p>
        <div className="space-y-3 pt-2">
          {storageItems.map((item) => (
            <div key={item.name} className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-1.5">
                <span className="font-mono font-bold text-sm text-[var(--color-charcoal-deep)]">{item.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)]">
                  {item.category}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] pt-1">{item.purpose}</p>
              <div className="pt-1 text-[11px] text-[var(--color-text-tertiary)] grid grid-cols-1 sm:grid-cols-3 gap-1">
                <div><strong>Provider:</strong> {item.provider}</div>
                <div><strong>Type:</strong> {item.type}</div>
                <div><strong>Duration:</strong> {item.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="space-y-4">
        <h2>3. Storage Categories &amp; Purposes</h2>
        <ul>
          <li><strong>Strictly Necessary:</strong> Required for user authentication, multi-tenant isolation, CSRF protection, and consent ledger compliance. These cannot be disabled.</li>
          <li><strong>Preferences:</strong> Used to remember your active workspace context, theme settings, and locale preferences.</li>
          <li><strong>Analytics (Performance):</strong> Aggregated, privacy-preserving performance telemetry to monitor application speed and API errors.</li>
        </ul>
      </section>

      <section id="no-ad-trackers" className="space-y-4">
        <h2>4. Zero Advertising &amp; Tracking Network Guarantee</h2>
        <p>
          Career OS operates under an explicit data ethics guarantee: <strong>We do NOT deploy Meta Pixel, Google Ads remarketing tags, TikTok pixels, or data broker tracking scripts.</strong> Your career development activity is never monetized or transmitted to third-party ad networks.
        </p>
      </section>

      <section id="management" className="space-y-4">
        <h2>5. How to Manage or Disable Storage</h2>
        <p>
          You can manage or clear web storage through your web browser settings. Disabling strictly necessary authentication cookies will log you out of authenticated application surfaces.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
