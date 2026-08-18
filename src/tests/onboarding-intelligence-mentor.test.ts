import { describe, it, expect } from "vitest";
import { CareerIntelligenceService } from "@/lib/intelligence/career-intelligence-service";
import { MentorAssignmentService } from "@/lib/mentors/assignment-service";
import { CareerObjectiveService } from "@/lib/mentors/objective-service";
import { extractStructuredResumeText } from "@/lib/onboarding/resume-parser";
import { CareerContext } from "@/types/platform/onboarding";

describe("Pre-Dashboard Intelligence & Mentorship (Passes 03, 04, 05)", () => {
  const dummyContext: CareerContext = {
    id: "ctx_1",
    userId: "usr_1",
    displayName: "Jordan",
    city: "Chicago",
    state: "IL",
    careerStage: "APPRENTICE_TRADE",
    primaryGoal: "Find an apprenticeship",
    secondaryGoals: [],
    branchData: { trade: "Electrical" },
    provenance: {
      provenance: "USER_DECLARED",
      confidence: 1.0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  };

  it("synthesizes grounded Career Twin without hallucination", () => {
    const twin = CareerIntelligenceService.generateInitialCareerTwin({
      userId: "usr_1",
      context: dummyContext,
      skills: [
        {
          id: "s1",
          userId: "usr_1",
          skillName: "Electrical Wiring",
          category: "TRADE",
          provenance: { provenance: "USER_DECLARED", confidence: 1.0, createdAt: "", updatedAt: "" },
        },
      ],
    });

    expect(twin.careerStage).toBe("APPRENTICE_TRADE");
    expect(twin.capabilities).toHaveLength(1);
    expect(twin.capabilities[0]?.name).toBe("Electrical Wiring");
  });

  it("generates explainable Career Graph seed nodes", () => {
    const twin = CareerIntelligenceService.generateInitialCareerTwin({
      userId: "usr_1",
      context: dummyContext,
    });
    const graph = CareerIntelligenceService.generateCareerGraphSeed(twin);

    expect(graph.nodes.length).toBeGreaterThanOrEqual(2);
    expect(graph.nodes[0]?.evidenceBasis).toContain("Appeared because your technical background");
  });

  it("assigns Callum Reid to trade/electrical apprentices deterministically", () => {
    const twin = CareerIntelligenceService.generateInitialCareerTwin({
      userId: "usr_1",
      context: dummyContext,
    });
    const assignment = MentorAssignmentService.assignCareerMentor({
      userId: "usr_1",
      careerTwin: twin,
      primaryGoal: "Find an apprenticeship",
    });

    expect(assignment.mentorId).toBe("callum-reid");
    expect(assignment.mentorName).toBe("Callum Reid");
    expect(assignment.domainMatches).toContain("Skilled Trades & Craft Stage");
  });

  it("extracts structured resume skills with RESUME_EXTRACTED provenance", () => {
    const sampleResume = "Senior Software Engineer with experience in TypeScript, React, Next.js, and AWS.";
    const extracted = extractStructuredResumeText(sampleResume);

    expect(extracted.extractedSkills).toContain("TypeScript");
    expect(extracted.extractedSkills).toContain("React");
    expect(extracted.extractedSkills).toContain("Next.js");
    expect(extracted.extractedSkills).toContain("AWS");
  });

  it("formulates realistic non-guaranteed career objective", () => {
    const twin = CareerIntelligenceService.generateInitialCareerTwin({
      userId: "usr_1",
      context: dummyContext,
    });
    const obj = CareerObjectiveService.generateInitialObjective({
      userId: "usr_1",
      careerTwin: twin,
      primaryGoal: "Find an apprenticeship",
    });

    expect(obj.milestones.length).toBe(4);
    expect(obj.horizonDays).toBe(90);
  });
});
