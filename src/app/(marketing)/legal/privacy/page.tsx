import React from 'react';
import { LegalPage } from '@/components/layout/LegalPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy — Legal | Career OS",
  description: "Career OS Legal privacy. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How Career OS collects, processes, stores, and protects your personal and career information across all platform contexts."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. Overview and Privacy Principles</h2>
        <p>
          Career OS is designed around the principle that your career data is a consequential personal asset that deserves strong protection. Our core privacy commitments are:
        </p>
        <ul>
          <li>Private Career Twin information and student records will not be sold to advertisers</li>
          <li>Private career information will not be disclosed to employers without an explicit user, institutional, or legal permission basis</li>
          <li>You maintain granular, field-level control over who can access specific parts of your professional profile</li>
          <li>AI recommendations are powered by your data to serve you, not to profile you for third-party advertising</li>
        </ul>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <h3>2.1 Account Information</h3>
        <p>
          Name, email address, and authentication credentials provided during registration. For institutional accounts, additional organisational details may be required.
        </p>
        <h3>2.2 Career Profile Information</h3>
        <p>
          Skills, qualifications, work experience, educational credentials, project evidence, career preferences, and goals you voluntarily add to your Career Twin and Career Passport. This is your data, under your control.
        </p>
        <h3>2.3 Usage Information</h3>
        <p>
          Interaction patterns with Platform features used to improve recommendation quality and platform performance. This data is processed in aggregated, anonymised form where possible.
        </p>
        <h3>2.4 Technical Information</h3>
        <p>
          IP addresses (stored as hashed values, not raw IPs), browser type, device information, and session data required for security and fraud prevention.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Providing and improving core platform features</li>
          <li>Generating AI Career Mentor recommendations with your explicit consent</li>
          <li>Processing employer matching requests you initiate or approve</li>
          <li>Sending essential service communications (security alerts, policy updates)</li>
          <li>Detecting fraud, abuse, and security threats</li>
          <li>Complying with legal obligations</li>
        </ul>
        <p className="mt-3">
          We do not use your career data for behavioural advertising. We do not build advertising profiles. We do not sell data to data brokers.
        </p>
      </section>

      <section>
        <h2>4. Data Sharing</h2>
        <h3>4.1 With Other Users</h3>
        <p>
          Only information you explicitly choose to share via your privacy settings or Data Access Grants is visible to other platform users. Employers never receive access to your Career Twin without a specific grant.
        </p>
        <h3>4.2 With Service Providers</h3>
        <p>
          We engage vetted third-party service providers for infrastructure, AI model access, and security operations. All service providers are bound by data processing agreements restricting them from using your data for their own purposes.
        </p>
        <h3>4.3 Legal Requirements</h3>
        <p>
          We may disclose information when legally required by valid court order, law enforcement request, or regulatory obligation. We will notify you of any such disclosure where legally permitted.
        </p>
      </section>

      <section>
        <h2>5. Student Privacy (FERPA and COPPA)</h2>
        <p>
          For students in educational institutions, we operate as a school official under FERPA and maintain strict protections consistent with COPPA for users under 13 who access the platform through verified institutional arrangements.
        </p>
        <p className="mt-3">
          Student records shared with Career OS through institutional agreements are used only for the educational purpose for which they were shared and are never sold or used for advertising.
        </p>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          Active account data is retained for the duration of your account. Certain consent records and audit logs are retained for longer periods to satisfy legal and regulatory obligations. You may request deletion of your career data at any time through your account settings.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have rights to:</p>
        <ul>
          <li>Access and receive a copy of your personal data</li>
          <li>Correct inaccurate personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to processing or request restriction</li>
          <li>Data portability in machine-readable format</li>
          <li>Withdraw consent at any time for consent-based processing</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact: privacy@career-os.com
        </p>
      </section>

      <section>
        <h2>8. International Transfers</h2>
        <p>
          Career OS operates from the United States. If you access our Platform from outside the US, your data may be transferred to and processed in the United States. We implement appropriate safeguards for such transfers in accordance with applicable data protection laws.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          Privacy questions or requests: privacy@career-os.com
        </p>
      </section>
    </LegalPage>
  );
}
