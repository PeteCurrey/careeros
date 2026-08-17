import React from 'react';
import { LegalPage } from '@/components/layout/LegalPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookies — Legal | Career OS",
  description: "Career OS Legal cookies. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="Which cookies Career OS sets, why we set them, and how you can manage or disable them."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device by your browser when you visit a website. Career OS uses cookies and similar tracking technologies (local storage, session storage) to operate the Platform securely and effectively.
        </p>
      </section>
      <section>
        <h2>2. Essential Cookies</h2>
        <p>
          These cookies are strictly necessary for the Platform to function and cannot be disabled. They include authentication session tokens, CSRF protection tokens, and workspace context identifiers.
        </p>
      </section>
      <section>
        <h2>3. Analytics Cookies</h2>
        <p>
          We use privacy-respecting analytics (without cross-site tracking or fingerprinting) to understand how users navigate the Platform and identify technical issues. Analytics data is aggregated and not sold to third parties.
        </p>
      </section>
      <section>
        <h2>4. No Advertising Cookies</h2>
        <p>
          Career OS does not set advertising cookies, retargeting pixels, or third-party behavioural tracking cookies. We do not participate in advertising networks that monetise career data.
        </p>
      </section>
      <section>
        <h2>5. Managing Cookies</h2>
        <p>
          You can manage cookie preferences through your browser settings. Disabling essential cookies will impair or prevent Platform functionality. Cookie preferences can also be managed through your Career OS account privacy settings.
        </p>
      </section>
      <section>
        <h2>6. Contact</h2>
        <p>Cookie questions: privacy@career-os.com</p>
      </section>
    </LegalPage>
  );
}
