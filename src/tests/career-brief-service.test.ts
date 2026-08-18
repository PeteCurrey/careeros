import { describe, it, expect } from "vitest";
import { CareerBriefService } from "@/lib/intelligence/career-brief-service";
import { CareerTwin, CareerPassport, CareerGraphSeed } from "@/types/platform/intelligence";
import { CareerObjective, MentorAssignment } from "@/types/platform/mentors";

describe("CareerBriefService Intelligence & Prioritization Engine", () => {
  const mockStudentTwin: CareerTwin = {
    id: "twin_student_123",
    userId: "user_student",
    version: 1,
    status: "ACTIVE",
    summary: "Secondary student interested in electrical systems, mechanical automation, and hands-on engineering.",
    careerStage: "SCHOOL_STUDENT",
    experienceThemes: ["Engineering Foundations", "Robotics Club", "Applied Physics"],
    capabilities: [
      { name: "Circuit Design", level: "FOUNDATIONAL", evidenceSource: "Physics coursework" },
      { name: "Telemetry Analysis", level: "EXPLORATORY", evidenceSource: "Robotics kit" },
      { name: "CAD Modeling", level: "INTERMEDIATE", evidenceSource: "Design project" },
    ],
    insights: [
      {
        category: "GROWTH_AREA",
        title: "Degree Apprenticeships vs Engineering Degree",
        description: "Compare hands-on telemetry apprenticeship routes against academic mechanical degrees.",
        sourceReferences: ["physics coursework"],
        confidence: "SOME_EVIDENCE",
      },
    ],
    generatedAt: new Date().toISOString(),
    inputHash: "hash_student_seed",
  };

  const mockExecutiveTwin: CareerTwin = {
    id: "twin_exec_456",
    userId: "user_exec",
    version: 2,
    status: "ACTIVE",
    summary: "Senior Engineering Director managing distributed systems and $4M technical budget.",
    careerStage: "LEADER_EXECUTIVE",
    experienceThemes: ["Systems Architecture", "Capital Stewardship", "Team Mentorship"],
    capabilities: [
      { name: "Distributed Consensus", level: "PRINCIPAL", evidenceSource: "Architecture RFC" },
      { name: "Executive P&L Ownership", level: "ADVANCED", evidenceSource: "Budget allocations" },
      { name: "Cross-Functional Governance", level: "ADVANCED", evidenceSource: "Steering committee" },
    ],
    insights: [
      {
        category: "STRENGTH",
        title: "Proven Capital Efficiency",
        description: "Delivered 30% cloud infrastructure cost reduction.",
        sourceReferences: ["vendor contracts"],
        confidence: "STRONG_EVIDENCE",
      },
    ],
    generatedAt: new Date().toISOString(),
    inputHash: "hash_exec_seed",
  };

  const mockObjective: CareerObjective = {
    id: "obj_789",
    userId: "user_123",
    title: "Transition to Principal Systems Architect",
    description: "Build demonstrable proof of enterprise multi-region architecture and formal RFC stewardship.",
    horizonDays: 90,
    status: "ACTIVE",
    milestones: [
      { id: "m1", title: "Document Multi-Region Resilience RFC", description: "Publish formal architecture decision record.", isCompleted: false, order: 1 },
      { id: "m2", title: "Conduct Failover Simulation", description: "Lead disaster recovery test with ops squad.", isCompleted: false, order: 2 },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const mockPassport: CareerPassport = {
    id: "pass_123",
    userId: "user_123",
    entries: [
      {
        id: "entry_1",
        userId: "user_123",
        category: "CREDENTIAL",
        title: "AWS Certified Solutions Architect Professional",
        issuerOrOrganization: "Amazon Web Services",
        status: "VERIFIED",
        provenance: {
          provenance: "USER_DECLARED",
          confidence: 0.95,
          extractionStatus: "USER_CONFIRMED",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    ],
    lastUpdated: new Date().toISOString(),
  };

  const mockMentorAssignment: MentorAssignment = {
    id: "assign_123",
    userId: "user_123",
    mentorId: "marcus-thorne",
    mentorName: "Marcus Thorne",
    mentorDomain: "Technology & Systems Architecture",
    portraitSrc: "/media/mentors/marcus_thorne.jpg",
    assignmentReason: "Aligned with systems architecture and technology progression.",
    domainMatches: ["Technology & Systems Architecture"],
    confidence: 0.95,
    status: "ACTIVE",
    assignedAt: new Date().toISOString(),
  };

  it("generates a deterministic Career Brief with top priority Next Best Move", () => {
    const brief = CareerBriefService.buildCareerBrief({
      userId: "user_123",
      userDisplayName: "Elena Vance",
      careerTwin: mockExecutiveTwin,
      careerObjective: mockObjective,
      careerPassport: mockPassport,
      mentorAssignment: mockMentorAssignment,
      localHour: 14,
    });

    expect(brief).toBeDefined();
    expect(brief.greeting.firstName).toBe("Elena");
    expect(brief.greeting.period).toBe("afternoon");
    expect(brief.nextBestMove).toBeDefined();
    // Milestone 1 is incomplete so Next Best Move should prioritize milestone completion
    expect(brief.nextBestMove.category).toBe("MILESTONE");
    expect(brief.nextBestMove.title).toBe("Document Multi-Region Resilience RFC");
    expect(brief.nextBestMove.priorityScore).toBeGreaterThanOrEqual(90);
  });

  it("limits Career Brief supporting items to at most 3 items", () => {
    const brief = CareerBriefService.buildCareerBrief({
      userId: "user_123",
      userDisplayName: "Elena Vance",
      careerTwin: mockExecutiveTwin,
      careerObjective: mockObjective,
      careerPassport: mockPassport,
      mentorAssignment: mockMentorAssignment,
    });

    expect(brief.briefItems.length).toBeLessThanOrEqual(3);
    expect(brief.briefItems.length).toBeGreaterThan(0);
  });

  it("adapts Next Best Move and Brief categories for Student user stage", () => {
    const studentObjective: CareerObjective = {
      id: "obj_student",
      userId: "user_student",
      title: "Evaluate Engineering Apprenticeship vs College Routes",
      description: "Compare mechanical telemetry degree apprenticeships with university courses.",
      horizonDays: 60,
      status: "ACTIVE",
      milestones: [
        { id: "sm1", title: "Compare 3 Local Degree Apprenticeship Providers", description: "Audit entry requirements and salary benefits.", isCompleted: true, order: 1 },
        { id: "sm2", title: "Build Coursework Portfolio in Career Passport", description: "Attach CAD drawings and robotics scripts.", isCompleted: false, order: 2 },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const brief = CareerBriefService.buildCareerBrief({
      userId: "user_student",
      userDisplayName: "Maya Lin",
      careerTwin: mockStudentTwin,
      careerObjective: studentObjective,
      careerPassport: { id: "p1", userId: "user_student", entries: [], lastUpdated: new Date().toISOString() },
      mentorAssignment: {
        ...mockMentorAssignment,
        mentorId: "callum-reid",
        mentorName: "Callum Reid",
        mentorDomain: "Engineering & Technical Trades",
      },
    });

    expect(brief.greeting.firstName).toBe("Maya");
    expect(brief.nextBestMove).toBeDefined();
    // Next best move is the incomplete milestone or evidence gap
    expect(["MILESTONE", "EVIDENCE", "DECISION"]).toContain(brief.nextBestMove.category);
    expect(brief.trajectory.currentStage).toBe("SCHOOL STUDENT");
  });

  it("produces grounded 'Why This?' explainability with real data inputs", () => {
    const brief = CareerBriefService.buildCareerBrief({
      userId: "user_123",
      userDisplayName: "David Chen",
      careerTwin: mockExecutiveTwin,
      careerObjective: mockObjective,
      careerPassport: mockPassport,
      mentorAssignment: mockMentorAssignment,
    });

    const whyThis = brief.nextBestMove.whyThis;
    expect(whyThis).toBeDefined();
    expect(whyThis.headline).toBeTruthy();
    expect(whyThis.reasons.length).toBeGreaterThan(0);
    expect(whyThis.dataInputs).toContain("Career Objectives Ledger");
  });

  it("builds structured Mentor Handoff context bundle without text concatenation", () => {
    const brief = CareerBriefService.buildCareerBrief({
      userId: "user_123",
      userDisplayName: "Marcus Wright",
      careerTwin: mockExecutiveTwin,
      careerObjective: mockObjective,
      careerPassport: mockPassport,
      mentorAssignment: mockMentorAssignment,
    });

    const mentorContext = brief.nextBestMove.mentorContext;
    expect(mentorContext).toBeDefined();
    expect(mentorContext.mentorId).toBe("marcus-thorne");
    expect(mentorContext.mentorName).toBe("Marcus Thorne");
    expect(mentorContext.suggestedQuestions.length).toBeGreaterThan(0);
    expect(mentorContext.relevantTwinAttributes.length).toBeGreaterThan(0);
  });

  it("returns cached brief when input hash is identical", () => {
    const params = {
      userId: "user_cache_test",
      userDisplayName: "Sam Taylor",
      careerTwin: mockExecutiveTwin,
      careerObjective: mockObjective,
      careerPassport: mockPassport,
      mentorAssignment: mockMentorAssignment,
      localHour: 10,
    };

    const brief1 = CareerBriefService.buildCareerBrief(params);
    const brief2 = CareerBriefService.buildCareerBrief(params);

    expect(brief1.inputHash).toBe(brief2.inputHash);
    expect(brief1.id).toBe(brief2.id);
  });

  it("generates honest trajectory without synthetic outcome percentages", () => {
    const brief = CareerBriefService.buildCareerBrief({
      userId: "user_123",
      userDisplayName: "Jordan Park",
      careerTwin: mockStudentTwin,
      careerObjective: mockObjective,
      careerPassport: mockPassport,
      mentorAssignment: mockMentorAssignment,
    });

    expect(brief.trajectory).toBeDefined();
    expect(brief.trajectory.currentStage).toBe("SCHOOL STUDENT");
    expect(brief.trajectory.workingToward).toBe("Transition to Principal Systems Architect");
    expect(brief.trajectory.supportingCapabilityCount).toBe(3);
    expect(brief.trajectory.verifiedEvidenceCount).toBe(1);
  });
});
