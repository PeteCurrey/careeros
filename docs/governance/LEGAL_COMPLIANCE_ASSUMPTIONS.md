# Career OS — Legal & Compliance Assumptions Register

> **Document Status**: Operational Governance Register & Audit Document
> **Target Market**: United States Launch
> **Owner**: General Counsel & Chief Privacy Officer

---

## Executive Overview
This Legal & Compliance Assumptions Register tracks all legal, regulatory, technical, and operational assumptions made across the Career OS platform. Unconfirmed business decisions or pending specialist legal reviews are explicitly cataloged to prevent compliance theatre and ensure strict internal consistency prior to commercial launch.

---

## 1. Corporate Identity & Legal Contracting
- **[REQUIRES_FOUNDER_CONFIRMATION] Corporate Entity Name**: Currently modeled as `Career OS, Inc.` in `src/lib/config/legal-config.ts`. Needs formal confirmation from founder once entity formation is filed.
- **[REQUIRES_FOUNDER_CONFIRMATION] Incorporation Jurisdiction**: Modeled as State of Delaware. Legal counsel review required for Delaware General Corporation Law (DGCL) compliance.
- **[REQUIRES_FOUNDER_CONFIRMATION] Registered Corporate Address**: Office address flagged internally as `REQUIRES_FOUNDER_CONFIRMATION`. Raw placeholders are suppressed on public legal pages.
- **[REQUIRES_FOUNDER_CONFIRMATION] Governing Law & Venue**: Modeled as State of Delaware and US Federal Courts. Mandatory arbitration clauses are NOT included unless explicitly confirmed by founder.

---

## 2. Age Model, Youth Safeguarding & Consent Architecture
- **Canonical Age Policy**: Locked threshold of Age 16+ for direct individual account eligibility.
- **Concept Isolation**: Age 16 direct eligibility is a product policy threshold and does not override jurisdictional contract capacity laws.
- **Verified Relationship (13–15)**: Self-service registration for ages 13–15 requires verified school arrangement or verified guardian consent. Method of guardian identity verification (credit card micro-charge vs. email authorization) remains pending legal counsel sign-off.
- **Under 13 Hard-Block**: Open consumer registration for children under 13 is hard-blocked under COPPA. Access is restricted solely to FERPA/COPPA school-official institutional arrangements.
- **State Youth Privacy Statutes**: Texas SCOPE Act (HB 18) and California CCPA minor opt-in rules require legal review regarding parental consent verification strength.

---

## 3. Data Protection, Storage & Subprocessors
- **Database Authorization**: PostgreSQL Row-Level Security (RLS) is classified as database query authorization, NOT cryptographic encryption.
- **Subprocessor Architecture**: Active sub-processors (Supabase, Vercel, GCP Gemini, OpenAI Enterprise, Anthropic) are bound by commercial enterprise agreements prohibiting LLM vendor model training on user PII.
- **Browser Storage Inventory**: Deployed application uses `sb-auth-token`, `careeros_workspace_id`, `careeros_locale`, and `careeros_consent_state`. Zero 3rd-party advertising tracking pixels (Meta Pixel, Google Ads tags) are deployed.
- **Data Retention Schedule**: User Twin assets retained for account lifecycle; unverified youth accounts purged after 30 days; AI chat logs anonymized after 1 year.

---

## 4. Employment AI, AEDT & FCRA Analysis
- **7-Role AI Employment Taxonomy**: `DISCOVERY`, `MATCHING`, `RECOMMENDATION`, `DECISION_SUPPORT` (in-scope advisory); `RANKING`, `SCREENING`, `DECISION` (strictly prohibited / out-of-scope).
- **Prohibition of Autonomous Hiring**: Corporate hiring managers retain 100% decision authority over candidate selection. Autonomous automated rejection is prohibited.
- **NYC Local Law 144 / EU AI Act Readiness**: Positioned as readiness frameworks; formal independent bias audits will be conducted prior to commercial enterprise deployment in regulated jurisdictions.
- **FCRA Non-Agency Status**: Career OS operates as a self-directed career twin and evidence ledger. Career OS is NOT a consumer reporting agency under 15 U.S.C. § 1681. Any future background screening integrations trigger mandatory `FCRA_SCOPE_REVIEW_REQUIRED`.

---

## 5. Educational Institutions & Student Privacy
- **FERPA School Official Exception**: Operating under 34 CFR § 99.31(a)(1)(i)(B) for district deployments.
- **FERPA Rights Transfer**: Rights regarding school records transfer to the student upon reaching age 18 OR attending a postsecondary institution at any age.
- **PPRA Assessment Compliance**: Career discovery surveys focus strictly on technical skills and workplace preferences, omitting PPRA-protected sensitive categories.
- **Model State DPAs**: Prepared standardized DPA exhibits for California (CSPA), New York (Ed Law § 2-d Exhibit E), Illinois (SDPC), and Texas (SCOPE Act).

---

## 6. International Launch Gate & Security Audits
- **US-First Strategy**: Launch gated to US jurisdictions. International expansion subject to 8-stage launch gate framework (UK, EU, CA, AU).
- **Security Attestation**: SOC 2 Type II and ISO 27001 formal audits are classified as `PLANNED` (post-launch milestone); not claimed as completed attestations on public trust pages.
- **Web Accessibility**: Target standard set to WCAG 2.2 Level AA conformance.
