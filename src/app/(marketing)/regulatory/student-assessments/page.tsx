import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";

export default function StudentAssessmentsPage() {
  const meta = GOVERNANCE_MANIFEST["student-assessments"]!;
  const toc = [
    { id: "ppra-scope", title: "1. Protection of Pupil Rights Amendment (PPRA) Scope" },
    { id: "survey-prohibitions", title: "2. Prohibited Survey Categories & Career Exploration Boundaries" },
    { id: "parent-inspection", title: "3. Parent & Guardian Inspection Rights" },
    { id: "minimisation", title: "4. Psychometric & Interest Data Minimisation" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="PPRA statutory compliance analysis for school-administered career interest surveys, skill discovery, and student data minimisation."
      toc={toc}
    >
      <section id="ppra-scope" className="space-y-4">
        <h2>1. Protection of Pupil Rights Amendment (PPRA) Scope</h2>
        <p>
          The Protection of Pupil Rights Amendment (20 U.S.C. § 1232h; 34 CFR Part 98) affords parents and eligible students rights regarding certain federally funded surveys, analyses, and evaluations administered in elementary and secondary schools.
        </p>
        <p>
          Career OS operates strictly as career discovery and skills verification infrastructure. Our platform does not administer psychological, psychiatric, political, or personal family surveys that trigger PPRA protected category restrictions.
        </p>
      </section>

      <section id="survey-prohibitions" className="space-y-4">
        <h2>2. Prohibited Survey Categories & Career Exploration Boundaries</h2>
        <p>
          Career OS interest discovery tools are strictly limited to occupational preferences, self-declared technical strengths, and educational pathway exploration. Career OS explicitly prohibits asking or storing student data relating to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Political affiliations or beliefs of the student or student&apos;s parent.</li>
          <li>Mental or psychological problems of the student or student&apos;s family.</li>
          <li>Sex behavior or attitudes.</li>
          <li>Illegal, anti-social, self-incriminating, or demeaning behavior.</li>
          <li>Critical appraisals of other individuals with whom respondents have close family relationships.</li>
          <li>Legally recognized privileged relationships (such as lawyers, physicians, or ministers).</li>
          <li>Religious practices, affiliations, or beliefs of the student or student&apos;s parent.</li>
          <li>Income (other than required by law to determine eligibility for financial assistance).</li>
        </ul>
      </section>

      <section id="parent-inspection" className="space-y-4">
        <h2>3. Parent &amp; Guardian Inspection Rights</h2>
        <p>
          In full accordance with PPRA provisions, parents and legal guardians of minor students enrolled through a school district have the right to inspect any career exploration materials, questionnaires, and instructional modules prior to administration. School administrators can provide immediate access via the institutional preview console.
        </p>
      </section>

      <section id="minimisation" className="space-y-4">
        <h2>4. Psychometric &amp; Interest Data Minimisation</h2>
        <p>
          Career OS rejects invasive psychometric profiling. Interest exploration outputs are treated as temporary exploration states in the student&apos;s private Career Twin rather than permanent academic tracking labels.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
