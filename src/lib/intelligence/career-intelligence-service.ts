import crypto from "crypto";
import { CareerContext, CareerExperience, CareerSkill, CareerEducation } from "@/types/platform/onboarding";
import { CareerTwin, CareerPassport, CareerGraphSeed, CareerTrajectoryNode, EvidenceConfidenceRating } from "@/types/platform/intelligence";

export class CareerIntelligenceService {
  /**
   * Generates a deterministic starting Career Twin grounded strictly in user evidence.
   * Never invents unstated credentials or hallucinates fit percentages.
   */
  public static generateInitialCareerTwin(params: {
    userId: string;
    context: CareerContext;
    experiences?: CareerExperience[];
    skills?: CareerSkill[];
    education?: CareerEducation[];
  }): CareerTwin {
    const { userId, context, experiences = [], skills = [], education = [] } = params;

    const inputDataStr = JSON.stringify({
      stage: context.careerStage,
      goal: context.primaryGoal,
      branch: context.branchData,
      skills: skills.map((s) => s.skillName),
      experiences: experiences.map((e) => e.roleTitle),
    });
    const inputHash = crypto.createHash("sha256").update(inputDataStr).digest("hex").substring(0, 16);

    // Build grounded summary based upon career stage and goals
    let summary = "";
    const stage = context.careerStage;
    const goal = context.primaryGoal;

    if (stage === "SCHOOL_STUDENT") {
      summary = `High school student exploring foundational academic strengths and career pathways, focused on: ${goal}.`;
    } else if (stage === "COLLEGE_UNIVERSITY") {
      summary = `Higher education student developing structured domain knowledge, seeking to: ${goal}.`;
    } else if (stage === "APPRENTICE_TRADE") {
      summary = `Skilled technical craft specialist with applied hands-on problem-solving experience, aiming to: ${goal}.`;
    } else if (stage === "EARLY_CAREER") {
      summary = `Early career professional building practical workplace deliverables, looking to: ${goal}.`;
    } else if (stage === "EXPERIENCED_PROFESSIONAL") {
      summary = `Experienced domain practitioner with demonstrated functional scope, focused on: ${goal}.`;
    } else if (stage === "LEADER_EXECUTIVE") {
      summary = `Organizational leader with strategic governance and team management experience, aiming to: ${goal}.`;
    } else if (stage === "CAREER_CHANGER") {
      summary = `Transitioning professional with transferable domain capabilities, strategically evaluating lateral bridges to: ${goal}.`;
    } else if (stage === "RETURNER") {
      summary = `Returning professional re-engaging the workforce with established background competencies, seeking to: ${goal}.`;
    } else if (stage === "ENTREPRENEUR") {
      summary = `Venture founder / builder focused on independent commercial execution and enterprise value creation to: ${goal}.`;
    } else {
      summary = `Active candidate exploring capability alignment across multiple potential career vectors.`;
    }

    const capabilities = skills.map((s) => ({
      name: s.skillName,
      level: s.proficiencyHint || "Demonstrated",
      evidenceSource: s.provenance.provenance === "RESUME_EXTRACTED" ? "Resume Record" : "User Declared",
    }));

    const twin: CareerTwin = {
      id: `twin_${userId.substring(0, 8)}_${Date.now()}`,
      userId,
      version: 1,
      status: "ACTIVE",
      summary,
      careerStage: stage,
      experienceThemes: experiences.map((e) => e.roleTitle).slice(0, 4),
      capabilities,
      insights: [
        {
          category: "STRENGTH",
          title: "Clear Directional Motivation",
          description: `Primary focus established on "${goal}".`,
          sourceReferences: ["Onboarding Intake § Goals"],
          confidence: "STRONG_EVIDENCE",
        },
        {
          category: "TRANSFERABLE_CAPABILITY",
          title: "Foundational Competency Base",
          description: capabilities.length > 0
            ? `Demonstrated strengths across ${capabilities.map((c) => c.name).slice(0, 3).join(", ")}.`
            : "Core skills being mapped across initial projects.",
          sourceReferences: ["Skills Vault"],
          confidence: capabilities.length > 0 ? "STRONG_EVIDENCE" : "SOME_EVIDENCE",
        },
      ],
      generatedAt: new Date().toISOString(),
      inputHash,
    };

    return twin;
  }

  /**
   * Generates private Career Passport seed from confirmed onboarding items.
   */
  public static generatePassportSeed(params: {
    userId: string;
    experiences?: CareerExperience[];
    skills?: CareerSkill[];
    education?: CareerEducation[];
  }): CareerPassport {
    const { userId, experiences = [], skills = [], education = [] } = params;
    const entries: CareerPassport["entries"] = [];

    experiences.forEach((exp) => {
      entries.push({
        id: exp.id || `pass_exp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        userId,
        category: "EMPLOYMENT",
        title: exp.roleTitle,
        issuerOrOrganization: exp.organization,
        dateRange: exp.startDate ? `${exp.startDate} – ${exp.isCurrent ? "Present" : exp.endDate || ""}` : undefined,
        description: exp.responsibilities?.join(". "),
        status: exp.provenance.provenance === "RESUME_EXTRACTED" ? "EXTRACTED" : "DECLARED",
        provenance: exp.provenance,
      });
    });

    education.forEach((edu) => {
      entries.push({
        id: edu.id || `pass_edu_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        userId,
        category: "EDUCATION",
        title: edu.degreeOrCertificate || edu.fieldOfStudy || "Academic Study",
        issuerOrOrganization: edu.institution,
        status: "DECLARED",
        provenance: edu.provenance,
      });
    });

    skills.forEach((sk) => {
      entries.push({
        id: sk.id || `pass_sk_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        userId,
        category: "SKILL",
        title: sk.skillName,
        status: sk.provenance.provenance === "RESUME_EXTRACTED" ? "EXTRACTED" : "DECLARED",
        provenance: sk.provenance,
      });
    });

    return {
      id: `passport_${userId.substring(0, 8)}`,
      userId,
      entries,
      lastUpdated: new Date().toISOString(),
    };
  }

  /**
   * Generates grounded Career Graph Seed trajectories with explainable evidence basis.
   */
  public static generateCareerGraphSeed(twin: CareerTwin): CareerGraphSeed {
    const nodes: CareerTrajectoryNode[] = [];
    const stage = twin.careerStage;

    if (stage === "APPRENTICE_TRADE" || stage === "EARLY_CAREER") {
      nodes.push({
        id: "node_1",
        roleTitle: "Senior Systems / Field Specialist",
        domain: "Engineering & Technical Operations",
        trajectoryType: "STARTING_HYPOTHESIS",
        confidence: "STRONG_EVIDENCE",
        evidenceBasis: "Appeared because your technical background and direct problem-solving deliverables indicate high readiness for specialist autonomy.",
        overlappingCapabilities: twin.capabilities.map((c) => c.name).slice(0, 2),
        keyBridgeRequirements: ["Advanced System Certification", "Project Lead Exposure"],
      });
      nodes.push({
        id: "node_2",
        roleTitle: "Technical Project Lead / Supervisor",
        domain: "Operational Leadership",
        trajectoryType: "ADJACENT_POSSIBILITY",
        confidence: "SOME_EVIDENCE",
        evidenceBasis: "Appeared as an adjacent possibility where applied technical execution bridges into cross-team project coordination.",
        overlappingCapabilities: ["Problem Solving", "Domain Analysis"],
        keyBridgeRequirements: ["Budget Oversight", "Stakeholder Communication"],
      });
    } else if (stage === "LEADER_EXECUTIVE" || stage === "EXPERIENCED_PROFESSIONAL") {
      nodes.push({
        id: "node_1",
        roleTitle: "Director / Functional Practice Lead",
        domain: "Strategic Management",
        trajectoryType: "STARTING_HYPOTHESIS",
        confidence: "STRONG_EVIDENCE",
        evidenceBasis: "Appeared because your accumulated domain tenure and scope align with multi-team organizational leadership.",
        overlappingCapabilities: twin.capabilities.map((c) => c.name).slice(0, 3),
        keyBridgeRequirements: ["Multi-Year Strategic P&L", "Executive Consensus"],
      });
      nodes.push({
        id: "node_2",
        roleTitle: "Venture / Advisory Partner",
        domain: "Enterprise Leadership",
        trajectoryType: "DEVELOPMENT_DIRECTION",
        confidence: "SOME_EVIDENCE",
        evidenceBasis: "Appeared based upon strategic experience themes indicating high potential for fractional or advisory impact.",
        overlappingCapabilities: ["Strategic Governance", "Capital Allocation"],
        keyBridgeRequirements: ["Board Governance Credentials"],
      });
    } else {
      nodes.push({
        id: "node_1",
        roleTitle: "Specialist Associate",
        domain: "Domain Practice",
        trajectoryType: "STARTING_HYPOTHESIS",
        confidence: "SOME_EVIDENCE",
        evidenceBasis: "Appeared as your primary entry-level benchmark based on stated learning interests and foundational skills.",
        overlappingCapabilities: twin.capabilities.map((c) => c.name).slice(0, 2),
        keyBridgeRequirements: ["Capstone Evidence Portfolio", "Industry Micro-Credential"],
      });
      nodes.push({
        id: "node_2",
        roleTitle: "Applied Technical Analyst",
        domain: "Applied Analytics & Operations",
        trajectoryType: "ADJACENT_POSSIBILITY",
        confidence: "EARLY_HYPOTHESIS",
        evidenceBasis: "Appeared as an adjacent possibility leveraging analytical strengths across operational workflows.",
        overlappingCapabilities: ["Analytical Reasoning"],
        keyBridgeRequirements: ["Structured Data Literacy"],
      });
    }

    return {
      id: `graph_${twin.userId.substring(0, 8)}`,
      userId: twin.userId,
      currentContextNode: twin.summary,
      nodes,
      generatedAt: new Date().toISOString(),
    };
  }
}
