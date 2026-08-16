import React from 'react';
import { LegalPage } from '@/components/layout/LegalPage';

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The complete terms governing your use of Career OS across all account types and platform features."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. Introduction and Acceptance</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Career OS Inc. (&quot;Career OS&quot;, &quot;we&quot;, &quot;us&quot;) governing your access to and use of the Career OS platform, including all associated websites, applications, APIs, and services (collectively, the &quot;Platform&quot;).
        </p>
        <p className="mt-3">
          By creating an account, accessing the Platform, or clicking any acceptance button, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the Platform.
        </p>
      </section>

      <section>
        <h2>2. Platform Description and Purpose</h2>
        <p>
          Career OS provides career development infrastructure for individuals, students, educational institutions, employers, and partners. The Platform includes career exploration tools, evidence and credential management, AI-assisted career guidance, and professional network capabilities.
        </p>
        <p className="mt-3">
          Career OS does not guarantee employment outcomes, salary levels, admissions decisions, or any specific career results. AI-powered recommendations are provided as decision support for informational purposes. All significant career decisions remain the responsibility of the individual.
        </p>
      </section>

      <section>
        <h2>3. Account Types and Eligibility</h2>
        <h3>3.1 Individual Accounts</h3>
        <p>
          Individual accounts are available to persons 16 years of age or older without institutional sponsorship. Persons aged 13–15 may only access the Platform through a verified school or guardian consent arrangement.
        </p>
        <h3>3.2 Institutional Accounts</h3>
        <p>
          Schools, employers, and partner organisations must execute the applicable institutional agreement (School Agreement or Employer Agreement) in addition to these Terms. Institutional agreements take precedence over these Terms where they conflict.
        </p>
        <h3>3.3 Age Restrictions</h3>
        <p>
          We do not knowingly register children under 13 without a verified institutional arrangement under COPPA guidelines. If you discover that a child under 13 has created an account without proper consent, please contact us immediately.
        </p>
      </section>

      <section>
        <h2>4. Your Career Data and Ownership</h2>
        <p>
          You retain full ownership of all content you provide to the Platform, including your Career Twin data, Career Passport credentials, work samples, and personal information. By submitting content, you grant Career OS a limited, non-exclusive, revocable licence to process and store your data solely for the purpose of providing Platform services to you.
        </p>
        <p className="mt-3">
          Career OS does not claim ownership over your professional content. You may export your data or delete your account at any time.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Submit false, misleading, or fabricated credentials or professional claims</li>
          <li>Attempt to impersonate another person or create fake employer or school profiles</li>
          <li>Use automated scraping, harvesting, or bulk extraction tools against the Platform</li>
          <li>Attempt to circumvent privacy controls or access another user&apos;s data without authorisation</li>
          <li>Post content that violates applicable law, discriminates against protected characteristics, or harasses others</li>
          <li>Use employer workspace access to screen candidates using prohibited discriminatory criteria</li>
        </ul>
      </section>

      <section>
        <h2>6. AI-Powered Features</h2>
        <p>
          The AI Career Mentor, Opportunity Agent, Employer Agent, and related AI features are provided as decision support tools. They are not human professionals, do not constitute regulated advice (legal, financial, medical, or otherwise), and should not be relied upon as the sole basis for significant career decisions.
        </p>
        <p className="mt-3">
          All AI recommendations surface decision factors and provenance to enable your informed evaluation. You may override, modify, or dismiss any AI recommendation at any time.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          Either party may terminate your account at any time. We may suspend or terminate accounts that materially breach these Terms, particularly for fraudulent credential submission or misuse of employer features. Upon termination, your data handling is governed by our Privacy Policy and applicable retention schedules.
        </p>
      </section>

      <section>
        <h2>8. Governing Law and Disputes</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved through binding arbitration under the American Arbitration Association rules, except for claims eligible for small claims court.
        </p>
      </section>

      <section>
        <h2>9. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes via email and in-platform notice at least 30 days before they take effect. Continued use of the Platform after the effective date constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these Terms should be directed to: legal@career-os.com or Career OS Inc., Legal Department, [Address on file].
        </p>
      </section>
    </LegalPage>
  );
}
