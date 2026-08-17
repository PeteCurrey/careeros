# MEMORANDUM

**TO**: Outside Legal Counsel  
**FROM**: Career OS Product & Engineering Team  
**DATE**: August 17, 2026  
**SUBJECT**: Legal Review of Minors & Guardian Consent Architecture for US Commercial Launch  

---

## EXECUTIVE SUMMARY & PURPOSE

Career OS is preparing for a commercial launch in the United States, targeting working professionals first and high school students second. The marketing platform features dedicated entry points for high school students, schools, and districts.

Before opening user registration for under-18 users or deploying school-linked onboarding flows, we require outside legal counsel sign-off on five critical regulatory and consent determinations under federal law (**COPPA**, **FERPA**) and state minor privacy statutes (**Texas SCOPE Act**, **California CCPA/CPRA**, **California AADC**, **Illinois SOPPA**, **New York Ed Law 2-d**, and **Florida HB 3**).

This memorandum details our proposed technical architecture, data boundaries, and five specific legal questions requiring your review and written opinion. Attached as Appendix A is our technical decision log, student data inventory, consent flow state machine, and state compliance matrix.

---

## 1. SYSTEM OVERVIEW & DATA FLOW DESCRIPTION

Career OS is an AI-driven career operating system. The platform collects student academic credentials, skills evidence, career goals, and chat interactions with an AI Career Mentor.

### 1.1 Autonomous Matching Mechanics (Opportunity Agent)
The platform features an autonomous matching engine (**Opportunity Agent**). The Opportunity Agent evaluates student capabilities against employer requirements *inside Career OS*. 

* **Redaction Boundary**: Student identity (First Name, Last Name, Email Address, Phone Number, Physical Address, and Photo) is **100% redacted** from employers during evaluation and search. Employers only see an anonymized candidate hash (e.g. `Candidate #CAND-8891`) and capability vector fit.
* **Release Trigger**: Student contact information is released to an employer **only** when a match is made and the student (and/or guardian) explicitly accepts an introduction request.

### 1.2 Under-13 Proposed Business Policy (Hard Block Self-Serve)
To eliminate compliance exposure under federal COPPA and avoid expensive, high-friction Verifiable Parental Consent (VPC) mechanisms, Career OS proposes to **hard-block self-serve account creation for any child under 13 years of age**. Under-13 access will only be permitted through district-sponsored, school-issued accounts operating under an executed District Data Processing Agreement (DPA) relying on the FERPA "School Official" exception.

### 1.3 13–17 Proposed Business Policy (Default-Deny Opt-In)
For 13–17-year-old self-serve signups, the account is created in a `PENDING_GUARDIAN_CONSENT` state with restricted features (Opportunity Agent employer matching disabled, public credential sharing disabled). The account activates **only** upon affirmative guardian consent confirmation. Silence or non-response within the 30-day window results in automated account purging and data deletion.

---

## 2. SPECIFIC LEGAL QUESTIONS FOR OUTSIDE COUNSEL SIGN-OFF

We request outside legal counsel provide written guidance and sign-off on the following five questions:

### Question 1: COPPA Third-Party Disclosure Determination
Does our Opportunity Agent flow (where an anonymized match occurs internally, but leads to a potential employer introduction upon student acceptance) constitute a "third-party disclosure" of personal information under 16 CFR § 312.5?
* *Follow-up*: If yes, does this confirm that our proposed business decision to **hard-block self-serve under-13 signups** is the correct legal strategy to avoid full COPPA Verifiable Parental Consent (VPC) requirements?

### Question 2: 13–17 Self-Serve Guardian Consent Verification Strength (Texas & California)
Our current technical design requires a parent/guardian to affirmatively click a consent confirmation link to activate a 13–17 minor account (default-deny on no response). 
* *Question*: Does a single email-click confirmation satisfy the **Texas SCOPE Act (HB 18)** standard for "verifiable parental consent" and the **California CCPA/CPRA** "opt-in" consent requirement for processing/sharing known minor data — or do Texas and California residents specifically require a stronger verification mechanism (e.g., knowledge-based authentication, credit card check, or ID match) than the other Phase-1 launch states (NY, FL, IL)?

### Question 3: California AADC Age-Estimation Applicability
Following the Ninth Circuit ruling rendering California's Age-Appropriate Design Code (AADC) age-estimation provisions active/enforceable as of April 2026:
* *Question*: Given that Career OS explicitly markets to high school students, is Career OS considered a service "likely to be accessed by children" under the AADC — and if so, does a self-reported Date-of-Birth input field satisfy the active age-estimation requirement, or is additional age-assurance required?

### Question 4: FERPA School Official Exception & Model District DPA
Will our proposed District Data Processing Agreement (incorporating the Student Data Privacy Consortium / SDPC National DPA framework) adequately protect Career OS under the FERPA "School Official" exception (34 CFR § 99.31(a)(1)(i)(B)) across California, Texas, New York, Florida, and Illinois?

### Question 5: AI Mentor Dialogue Privacy & Educational Record Classification
Are student interactions and chat logs with the AI Career Mentor considered part of the "education record" under FERPA when originated via a school-linked account?
* *Follow-up*: Does FERPA give school/district administrators mandatory inspection rights over these AI mentor chat logs — even though Career OS product design intends to keep AI mentor conversations private to the student?

---

## APPENDIX A: REFERENCE DOCUMENTATION

*(Attached for legal counsel reference: Sections 1–4 from Career OS Minors & Guardian Consent Requirements v2)*

### A.1 Data Sharing Boundaries per Funnel Stage
1. **Signup & Onboarding**: Stored internally only. Zero third-party or public exposure.
2. **Career Twin & Skills Vault**: Internal AI processing. Redacted from search engines.
3. **Career Passport**: User controls sharing via explicit links or cryptographically signed credentials.
4. **Opportunity Agent (Employer Matching)**: Strict Anonymized Matching. Student identity (name, email, photo, location) is never disclosed to an employer until the student (and/or guardian) explicitly accepts an introduction.

### A.2 Student Data Inventory Matrix

| Stage | Data Field | Stored Internally? | Exposed to School/District? | Exposed to Employer? | Exposed to Public? | Legal Consent Requirement & Threshold |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Signup** | First & Last Name | Yes | Optional (If School SSO) | **Redacted** (Candidate ID) | No | COPPA / FERPA identifier. |
| | Email Address | Yes | Yes (If School Domain) | **Redacted** | No | Internal account credential. |
| | Date of Birth / Age | Yes | No | No | No | Age-gating branching calculation. |
| | Guardian Email (Minors) | Yes | No | No | No | Consent dispatch & notification. |
| **Onboarding** | School / District Name | Yes | Yes | Aggregated / Anonymized | No | School context mapping. |
| | Expected Grad Year | Yes | Yes | Yes (General Cohort) | No | Opportunity timeline fit. |
| | Career Interests / Goals | Yes | Yes (Counsellor View) | Anonymized Attribute Match | No | AI Career Mentor calibration. |
| **Career Twin** | Skill Competencies | Yes | Yes | Anonymized Vector Match | No | Proprietary capability graph. |
| | Coursework & Projects | Yes | Yes | Anonymized Artifact Proof | No | Verifiable project evidence. |
| | Chat Logs (AI Mentor) | Yes | **Intended: No (Pending Q5)** | **No** | No | Protected user dialogue. |
| **Passport** | Verified Credentials | Yes | Yes | On Explicit Share Only | Public Link (If Shared) | Student-controlled export. |
| | W3C Proof Hashes | Yes | Yes | Yes (If Shared) | Public Hash | Cryptographic anchor. |
| **Match Agent**| Compensation Floor | Yes | No | Evaluated Autonomously | No | Confidential parameter. |
| | Employer Introduction | Yes | No | **Full PII Exposed ONLY Upon Student Accept** | No | Third-Party Disclosure Threshold. |

### A.3 State Compliance Matrix

| State / Authority | Applicable Legislation | Status / Enforceability | Individual Minor Path Impact | School-Linked Path Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Federal** | **COPPA** (15 U.S.C. 6501) | Active / Enforced | Requires VPC if under 13; third-party disclosure rules apply. | Exemption applies when school contracts for educational use. |
| **Federal** | **FERPA** (20 U.S.C. 1232g) | Active / Enforced | N/A (Applies to educational institutions). | Mandates written DPA and "school official" contract clause. |
| **California** | **SOPIPA** (Bus. & Prof. Code § 22584) | Active / Enforced | Prohibits targeted ads & selling student data. | Strict prohibition on building student profiles for non-ed use. |
| **California** | **CCPA/CPRA minor provisions** | Active / Enforced | Requires **opt-in** consent (parent for 13–15, minor for 16–17) before selling/sharing data. | N/A (school path governed by FERPA/SOPIPA). |
| **California** | **AADC (Age-Appropriate Design Code)** | **Partially enforceable as of April 2026** | Age-estimation requirements active. | N/A |
| **Illinois** | **SOPPA** (105 ILCS 85/) | Active / Enforced | N/A | Mandates specific contractual DPA terms & public posting of vendor lists. |
| **New York** | **Ed Law 2-d** / Part 121 | Active / Enforced | N/A | Requires Parents' Bill of Rights attachment & NIST Cybersecurity Framework compliance. |
| **Texas** | **TDPSA** (Bus. & Com. Code § 541) | Active / Enforced | Requires opt-in consent for processing sensitive minor data. | Standard FERPA exemptions apply for K-12 operations. |
| **Texas** | **SCOPE Act (HB 18)** | Active / Enforced | Requires **verifiable** parental consent before collecting a known minor's data and restricts third-party disclosures. | FERPA exemptions apply to school operations. |
| **Florida** | **HB 3 (Online Protections for Minors)** | Active / Enforced | Applies to social media platforms with public feeds. Low current relevance to Career OS. | Low current relevance. |
