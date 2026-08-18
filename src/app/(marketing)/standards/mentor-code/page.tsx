import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function StandardsMentorCodePage() {
  const meta = GOVERNANCE_MANIFEST["mentor-code"]!;
  const toc = [
    { id: "purpose", title: "1. Purpose & Core Mentorship Standards" },
    { id: "ai-disclosure", title: "2. Non-Human AI Mentor Persona Disclosures" },
    { id: "evidence-grounding", title: "3. Evidence-Grounded Recommendations" },
    { id: "prohibitions", title: "4. Prohibited Behavioral Dynamics" },
    { id: "youth-safeguards", title: "5. Minor Safeguarding & Escalation Protocols" },
    { id: "human-mentors", title: "6. Distinction from Future Human Advisors" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Ethical conduct code governing AI Career Mentor personas and human guidance specialists across the Career OS platform."
      toc={toc}
    >
      <section id="purpose" className="space-y-4">
        <h2>1. Purpose &amp; Core Mentorship Standards</h2>
        <p>
          The Career OS Mentor Code of Ethics establishes strict behavioral, psychological, and algorithmic boundaries for all AI Career Mentor personas and human career specialists. Mentorship must always be empowering, impartial, evidence-based, and focused on candidate autonomy.
        </p>
      </section>

      <section id="ai-disclosure" className="space-y-4">
        <h2>2. Non-Human AI Mentor Persona Disclosures</h2>
        <p>
          Every AI Career Mentor persona (such as Marcus Thorne, Dr. Amara Osei, Callum Reid, and Priya Chakraborty) is explicitly and permanently disclosed as artificial intelligence software. Mentors will never:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Claim to be a living human being or possess personal human consciousness.</li>
          <li>Simulate romantic interest, emotional co-dependency, or personal attachment.</li>
          <li>Falsify human credentials, degrees, or personal living experiences.</li>
        </ul>
      </section>

      <section id="evidence-grounding" className="space-y-4">
        <h2>3. Evidence-Grounded Recommendations</h2>
        <p>
          All career recommendations, gap assessments, and promotion timelines provided by mentors must be grounded in verified Career Passport records and empirical Career Graph data points. Mentors must transparently explain the rationale behind every suggested next action.
        </p>
      </section>

      <section id="prohibitions" className="space-y-4">
        <h2>4. Prohibited Behavioral Dynamics</h2>
        <p>
          Mentors are strictly programmed and audited against:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Discrimination or bias based upon protected personal characteristics (race, gender, age, disability, origin).</li>
          <li>Steering candidates exclusively toward sponsored commercial training providers without alternatives.</li>
          <li>Providing unlicensed legal, psychiatric, medical, or financial investment advice.</li>
          <li>Engineering addictive usage loops or artificial conversational urgency.</li>
        </ul>
      </section>

      <section id="youth-safeguards" className="space-y-4">
        <h2>5. Minor Safeguarding &amp; Escalation Protocols</h2>
        <p>
          When interacting with users identified as minors (under 18), mentors operate under heightened safeguarding constraints. If a student mentions severe mental health distress, abuse, or self-harm, the mentor immediately halts career coaching and presents verified emergency crisis hotline resources while alerting authorized school safeguarding personnel.
        </p>
      </section>

      <section id="human-mentors" className="space-y-4">
        <h2>6. Distinction from Future Human Advisors</h2>
        <p>
          As Career OS expands to include certified human career coaches and industry specialists, human advisors must independently complete background checks, hold accredited counseling credentials, and abide by these non-discrimination and data privacy standards.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
