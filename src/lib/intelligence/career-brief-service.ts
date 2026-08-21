import crypto from "crypto";
import {
  CareerBrief,
  CareerBriefItem,
  CareerSignal,
  TrajectorySummary,
  WhyThisExplanation,
  MentorHandoffContext,
} from "@/types/platform/career-brief";
import { CareerTwin, CareerPassport, CareerGraphSeed } from "@/types/platform/intelligence";
import { CareerObjective, MentorAssignment } from "@/types/platform/mentors";
import { ROUTES } from "@/lib/routes";

// In-memory cache for fast lookup during active sessions
const BRIEF_CACHE = new Map<string, CareerBrief>();

interface BuildBriefParams {
  userId: string;
  userDisplayName: string;
  careerTwin: CareerTwin | null;
  careerObjective: CareerObjective | null;
  careerPassport: CareerPassport | null;
  careerGraph?: CareerGraphSeed | null;
  mentorAssignment: MentorAssignment | null;
  recentActivity?: {
    lastMeaningfulAction?: string;
    hasUnfinishedAction?: boolean;
    resumeHref?: string;
  } | null;
  localHour?: number;
  forceRegenerate?: boolean;
}

export class CareerBriefService {
  /**
   * Generates or retrieves a deterministic Career Brief for the user.
   */
  public static buildCareerBrief(params: BuildBriefParams): CareerBrief {
    const {
      userId,
      userDisplayName,
      careerTwin,
      careerObjective,
      careerPassport,
      careerGraph,
      mentorAssignment,
      recentActivity,
      localHour = new Date().getHours(),
      forceRegenerate = false,
    } = params;

    const firstName = userDisplayName.trim().split(" ")[0] || "";

    // 1. Calculate Input Hash for Stale Detection & Caching
    const inputPayload = JSON.stringify({
      userId,
      stage: careerTwin?.careerStage || "EARLY_CAREER",
      twinVersion: careerTwin?.version || 1,
      twinSummary: careerTwin?.summary || "",
      objectiveId: careerObjective?.id || "",
      objectiveMilestonesCount: careerObjective?.milestones?.length || 0,
      objectiveMilestonesCompleted:
        careerObjective?.milestones?.filter((m) => m.isCompleted).length || 0,
      passportEntriesCount: careerPassport?.entries?.length || 0,
      mentorId: mentorAssignment?.mentorId || "marcus-thorne",
      dateDay: new Date().toISOString().split("T")[0],
    });

    const inputHash = crypto.createHash("sha256").update(inputPayload).digest("hex").substring(0, 16);
    const cacheKey = `brief_${userId}_${inputHash}`;

    if (!forceRegenerate && BRIEF_CACHE.has(cacheKey)) {
      const cached = BRIEF_CACHE.get(cacheKey)!;
      // If generated within 6 hours, return cached
      if (new Date(cached.expiresAt).getTime() > Date.now()) {
        return cached;
      }
    }

    // 2. Determine Time-of-Day Greeting
    let period: "morning" | "afternoon" | "evening" = "morning";
    if (localHour >= 12 && localHour < 17) {
      period = "afternoon";
    } else if (localHour >= 17 || localHour < 5) {
      period = "evening";
    }

    // 3. Assemble Mentor Profile Info
    const mentorId = mentorAssignment?.mentorId || "marcus-thorne";
    const mentorName = mentorAssignment?.mentorName || "Marcus Thorne";
    const mentorDomain = mentorAssignment?.mentorDomain || "Technology & Systems Architecture";
    const portraitSrc = mentorAssignment?.portraitSrc || "/media/mentors/mentor_marcus.jpg";

    // 4. Determine Contextual Statement based on actual user data
    let contextStatement = "I've structured your initial Career OS roadmap.";
    const completedMilestones = careerObjective?.milestones?.filter((m) => m.isCompleted) || [];
    const totalMilestones = careerObjective?.milestones?.length || 0;
    const stage = careerTwin?.careerStage || "EARLY_CAREER";

    if (totalMilestones > 0 && completedMilestones.length > 0) {
      contextStatement = `${completedMilestones.length} of ${totalMilestones} milestones complete on "${careerObjective?.title}". Here is the current priority.`;
    } else if (careerTwin?.summary) {
      contextStatement = `Your starting plan is grounded in your focus on ${careerTwin.experienceThemes[0] || "career development"}.`;
    }

    // 5. Candidate Action Pool Generation
    const candidateActions: CareerBriefItem[] = [];
    const nowIso = new Date().toISOString();

    // RULE A: Uncompleted Active Objective Milestones
    if (careerObjective && careerObjective.milestones && careerObjective.milestones.length > 0) {
      const incompleteMilestone = careerObjective.milestones.find((m) => !m.isCompleted);
      if (incompleteMilestone) {
        const whyThis: WhyThisExplanation = {
          headline: `Directly required for milestone: "${incompleteMilestone.title}"`,
          reasons: [
            `Active milestone #${incompleteMilestone.order} on your roadmap: "${careerObjective.title}".`,
            `Completing this step unlocks the next progression phase in your objective.`,
          ],
          groundedInGoal: careerObjective.title,
          groundedInCapabilities: careerTwin?.capabilities?.map((c) => c.name).slice(0, 3) || [],
          evidenceGapsOrProof: [incompleteMilestone.description],
          dataInputs: ["Career Objectives Ledger", "Milestone Tracking Engine"],
        };

        const mentorContext: MentorHandoffContext = {
          sourceScreen: "TODAY_NEXT_MOVE",
          recommendationId: `action_milestone_${incompleteMilestone.id}`,
          recommendationTitle: `Complete Milestone: ${incompleteMilestone.title}`,
          mentorId,
          mentorName,
          mentorDomain,
          portraitSrc,
          objectiveTitle: careerObjective.title,
          relevantTwinAttributes: careerTwin?.experienceThemes || [],
          relevantEvidence: [incompleteMilestone.title],
          suggestedQuestions: [
            `How should I structure deliverables for "${incompleteMilestone.title}"?`,
            `What potential blockers should I anticipate on this milestone?`,
            `How does this milestone connect to my longer-term trajectory?`,
          ],
        };

        candidateActions.push({
          id: `action_milestone_${incompleteMilestone.id}`,
          category: "MILESTONE",
          title: incompleteMilestone.title,
          whyItMatters: incompleteMilestone.description,
          sourceReason: `Active Milestone #${incompleteMilestone.order} on ${careerObjective.title}`,
          recommendedAction: `Focus your immediate working session on delivering ${incompleteMilestone.title}.`,
          priorityReason: `Sequential milestone progression for ${careerObjective.title}.`,
          priorityScore: 92,
          relatedObjectiveId: careerObjective.id,
          relatedObjectiveTitle: careerObjective.title,
          relatedEntity: {
            type: "OBJECTIVE",
            id: careerObjective.id,
            name: careerObjective.title,
          },
          suggestedDuration: "25–45 mins",
          primaryCTA: {
            label: "Open Milestone Workspace",
            href: ROUTES.PRODUCT_AI_CAREER_MENTOR,
            actionType: "OBJECTIVE_MILESTONE",
          },
          whyThis,
          mentorContext,
          freshnessTimestamp: nowIso,
        });
      }
    }

    // RULE B: Evidence Gap Identification (Capabilities with 0 Passport Entries)
    const passportEntries = careerPassport?.entries || [];
    const topCapabilities = careerTwin?.capabilities || [];
    const unevidencedCap = topCapabilities.find(
      (cap) =>
        !passportEntries.some(
          (entry) =>
            entry.title.toLowerCase().includes(cap.name.toLowerCase()) ||
            entry.description?.toLowerCase().includes(cap.name.toLowerCase())
        )
    );

    if (unevidencedCap) {
      const whyThis: WhyThisExplanation = {
        headline: `Strengthen verified proof for "${unevidencedCap.name}"`,
        reasons: [
          `Your Career Twin highlights "${unevidencedCap.name}" as an important capability vector.`,
          `No verified artifact, project deliverable, or credential is currently attached in your Career Passport.`,
          `Attaching evidence transforms self-declared claims into employer-verifiable provenance.`,
        ],
        groundedInGoal: careerObjective?.title,
        groundedInCapabilities: [unevidencedCap.name],
        evidenceGapsOrProof: [`Missing proof artifact for: ${unevidencedCap.name}`],
        dataInputs: ["Career Twin Capability Matrix", "Career Passport Vault"],
      };

      const mentorContext: MentorHandoffContext = {
        sourceScreen: "TODAY_EVIDENCE",
        recommendationId: `action_evidence_${unevidencedCap.name.replace(/\s+/g, "_").toLowerCase()}`,
        recommendationTitle: `Attach Proof for ${unevidencedCap.name}`,
        mentorId,
        mentorName,
        mentorDomain,
        portraitSrc,
        objectiveTitle: careerObjective?.title,
        relevantTwinAttributes: [unevidencedCap.name, unevidencedCap.level],
        relevantEvidence: [],
        suggestedQuestions: [
          `What type of project deliverable best proves "${unevidencedCap.name}" without leaking proprietary data?`,
          `How do employers evaluate evidence for ${unevidencedCap.name}?`,
        ],
      };

      candidateActions.push({
        id: `action_evidence_${unevidencedCap.name.replace(/\s+/g, "_").toLowerCase()}`,
        category: "EVIDENCE",
        title: `Attach evidence for "${unevidencedCap.name}"`,
        whyItMatters: `High-value capability inferred during onboarding without verified project deliverables attached.`,
        sourceReason: `Capability proof gap in Career Passport`,
        recommendedAction: `Log a project artifact, code repository link, design deliverable, or credential in Career Passport.`,
        priorityReason: `Grounds your Career Twin in tamper-evident proof.`,
        priorityScore: 88,
        relatedEntity: {
          type: "PASSPORT",
          name: "Career Passport Vault",
        },
        suggestedDuration: "10 mins",
        primaryCTA: {
          label: "Add Evidence to Passport",
          href: ROUTES.PRODUCT_CAREER_PASSPORT,
          actionType: "PASSPORT_ADD",
        },
        whyThis,
        mentorContext,
        freshnessTimestamp: nowIso,
      });
    }

    // RULE C: Career Stage Specific Guidance
    if (stage === "SCHOOL_STUDENT" || stage === "COLLEGE_UNIVERSITY" || stage === "EARLY_CAREER") {
      const whyThis: WhyThisExplanation = {
        headline: "Compare university, apprenticeship, and skilled technical pathways",
        reasons: [
          "Early career decisions benefit from evaluating multiple route structures side by side.",
          "Examines degree apprenticeships, university courses, and technical licensure without institutional bias.",
        ],
        groundedInGoal: careerObjective?.title || "Explore initial career pathways",
        groundedInCapabilities: careerTwin?.capabilities?.map((c) => c.name).slice(0, 2) || [],
        evidenceGapsOrProof: ["Multi-pathway comparison pending"],
        dataInputs: ["Career Stage Policy", "Career Graph Seed"],
      };

      const mentorContext: MentorHandoffContext = {
        sourceScreen: "TODAY_STAGE_GUIDANCE",
        recommendationId: "action_stage_student_pathways",
        recommendationTitle: "Evaluate Alternative Career Pathways",
        mentorId,
        mentorName,
        mentorDomain,
        portraitSrc,
        objectiveTitle: careerObjective?.title,
        relevantTwinAttributes: careerTwin?.experienceThemes || [],
        relevantEvidence: [],
        suggestedQuestions: [
          "How do degree apprenticeships compare to traditional degree outcomes in my domain?",
          "What foundational project evidence should I build during my studies?",
        ],
      };

      candidateActions.push({
        id: "action_stage_student_pathways",
        category: "DECISION",
        title: "Evaluate Alternative Career Pathways",
        whyItMatters: "Understand how degree apprenticeships, university routes, and technical entry compare for your target domain.",
        sourceReason: "Student Multi-Pathway Parity Framework",
        recommendedAction: "Review topological bridge requirements in Career Graph.",
        priorityReason: "Broadens directional awareness before locking into irreversible applications.",
        priorityScore: 82,
        relatedEntity: {
          type: "GRAPH",
          name: "Career Graph",
        },
        suggestedDuration: "15 mins",
        primaryCTA: {
          label: "Explore Career Graph",
          href: ROUTES.PRODUCT_CAREER_GRAPH,
          actionType: "GRAPH_EXPLORE",
        },
        whyThis,
        mentorContext,
        freshnessTimestamp: nowIso,
      });
    } else if (stage === "EXPERIENCED_PROFESSIONAL" || stage === "LEADER_EXECUTIVE") {
      const whyThis: WhyThisExplanation = {
        headline: "Structure promotion criteria and leadership evidence",
        reasons: [
          "Senior career progression depends on documented delegation, capital stewardship, and team influence.",
          "Identifies evidence gaps before annual review cycles.",
        ],
        groundedInGoal: careerObjective?.title || "Advance professional leadership",
        groundedInCapabilities: careerTwin?.capabilities?.map((c) => c.name).slice(0, 3) || [],
        evidenceGapsOrProof: ["Leadership scope documentation"],
        dataInputs: ["Professional Progression Track", "Career Twin Context"],
      };

      const mentorContext: MentorHandoffContext = {
        sourceScreen: "TODAY_STAGE_GUIDANCE",
        recommendationId: "action_stage_pro_leadership",
        recommendationTitle: "Review Leadership Evidence Scope",
        mentorId,
        mentorName,
        mentorDomain,
        portraitSrc,
        objectiveTitle: careerObjective?.title,
        relevantTwinAttributes: careerTwin?.experienceThemes || [],
        relevantEvidence: [],
        suggestedQuestions: [
          "How should I document cross-functional influence without formal authority?",
          "What operational metrics carry the most weight in promotion reviews?",
        ],
      };

      candidateActions.push({
        id: "action_stage_pro_leadership",
        category: "NEXT_MOVE",
        title: "Review Leadership & Scope Evidence",
        whyItMatters: "Ensure your delivered business outcomes, project stewardship, and cross-team leadership are captured.",
        sourceReason: "Executive & Professional Progression Framework",
        recommendedAction: "Audit your documented scope against target leadership tier criteria.",
        priorityReason: "Strengthens evidence-backed progression review posture.",
        priorityScore: 84,
        relatedEntity: {
          type: "TWIN",
          name: "Career Twin Intelligence",
        },
        suggestedDuration: "15 mins",
        primaryCTA: {
          label: "Inspect Career Twin",
          href: ROUTES.PRODUCT_CAREER_TWIN,
          actionType: "TWIN_INSPECT",
        },
        whyThis,
        mentorContext,
        freshnessTimestamp: nowIso,
      });
    } else if (stage === "ENTREPRENEUR") {
      const whyThis: WhyThisExplanation = {
        headline: "Assess commercial capability and client proof points",
        reasons: [
          "Transitioning from employment to independent practice requires pricing structure and initial validation proof.",
        ],
        groundedInGoal: careerObjective?.title || "Independent venture launch",
        groundedInCapabilities: careerTwin?.capabilities?.map((c) => c.name).slice(0, 2) || [],
        evidenceGapsOrProof: ["Commercial offering definition"],
        dataInputs: ["Employee-to-Founder Framework"],
      };

      const mentorContext: MentorHandoffContext = {
        sourceScreen: "TODAY_STAGE_GUIDANCE",
        recommendationId: "action_stage_founder_validation",
        recommendationTitle: "Assess Commercial Validation Milestones",
        mentorId,
        mentorName,
        mentorDomain,
        portraitSrc,
        objectiveTitle: careerObjective?.title,
        relevantTwinAttributes: careerTwin?.experienceThemes || [],
        relevantEvidence: [],
        suggestedQuestions: [
          "What is the leanest way to validate demand before leaving full-time employment?",
          "How should I structure my initial client pilot agreement?",
        ],
      };

      candidateActions.push({
        id: "action_stage_founder_validation",
        category: "DECISION",
        title: "Assess Commercial Offering & Validation",
        whyItMatters: "Define the core problem bottleneck and first client proof point for independent launch.",
        sourceReason: "Employee-to-Founder Transition Framework",
        recommendedAction: "Review commercial readiness milestones with your Mentor.",
        priorityReason: "De-risks venture launch by establishing early validation proof.",
        priorityScore: 86,
        relatedEntity: {
          type: "OBJECTIVE",
          name: "Venture Objective",
        },
        suggestedDuration: "20 mins",
        primaryCTA: {
          label: "Review Venture Milestones",
          href: ROUTES.PRODUCT_AI_CAREER_MENTOR,
          actionType: "MENTOR_CONSULT",
        },
        whyThis,
        mentorContext,
        freshnessTimestamp: nowIso,
      });
    }

    // RULE D: Mentor Consultation Follow-Up
    const mentorFollowUpAction: CareerBriefItem = {
      id: "action_mentor_orientation",
      category: "MENTOR_FOLLOWUP",
      title: `Discuss career direction with ${mentorName}`,
      whyItMatters: `${mentorName} has reviewed your Career Twin and starting objective.`,
      sourceReason: `Assigned AI Career Mentor in ${mentorDomain}`,
      recommendedAction: `Ask ${mentorName.split(" ")[0]} to evaluate potential blind spots or accelerate your first milestone.`,
      priorityReason: `Grounds your ongoing session in confidential expert sounding.`,
      priorityScore: 78,
      relatedEntity: {
        type: "MENTOR",
        id: mentorId,
        name: mentorName,
      },
      suggestedDuration: "10 mins",
      primaryCTA: {
        label: `Ask ${mentorName.split(" ")[0]}`,
        href: ROUTES.PRODUCT_AI_CAREER_MENTOR,
        actionType: "MENTOR_CONSULT",
      },
      whyThis: {
        headline: `Contextual sounding board with ${mentorName}`,
        reasons: [
          `${mentorName} brings specialized background in ${mentorDomain}.`,
          `Grounded in your private Career OS context with zero public data disclosure.`,
        ],
        groundedInGoal: careerObjective?.title,
        groundedInCapabilities: careerTwin?.capabilities?.map((c) => c.name).slice(0, 3) || [],
        evidenceGapsOrProof: ["Active mentor review ready"],
        dataInputs: ["Mentor Assignment Ledger", "Canonical Mentor Registry"],
      },
      mentorContext: {
        sourceScreen: "TODAY_MENTOR_BAR",
        recommendationId: "action_mentor_orientation",
        recommendationTitle: `Strategic Review with ${mentorName}`,
        mentorId,
        mentorName,
        mentorDomain,
        portraitSrc,
        objectiveTitle: careerObjective?.title,
        relevantTwinAttributes: careerTwin?.experienceThemes || [],
        relevantEvidence: [],
        suggestedQuestions: [
          `What is the most critical assumption in my current career plan?`,
          `Which of my capabilities should I focus on compounding this quarter?`,
          `How can I turn my recent project work into stronger Career Passport evidence?`,
        ],
      },
      freshnessTimestamp: nowIso,
    };

    candidateActions.push(mentorFollowUpAction);

    // 6. Sort by Priority Score
    candidateActions.sort((a, b) => b.priorityScore - a.priorityScore);

    // The single top action is the NEXT BEST MOVE
    const nextBestMove = candidateActions[0] || mentorFollowUpAction;

    // The remaining actions (max 3 items) form the CAREER BRIEF
    const briefItems = candidateActions.slice(1, 4);

    // 7. Assemble Grounded Signals (Meaningful changes only)
    const signals: CareerSignal[] = [];

    if (careerTwin) {
      signals.push({
        id: "sig_twin_active",
        type: "TWIN_EVOLVED",
        title: "Career Twin Initialized",
        description: `Grounded in ${careerTwin.capabilities?.length || 0} extracted capability vectors and ${careerTwin.experienceThemes?.length || 0} experience themes.`,
        timestamp: careerTwin.generatedAt || nowIso,
        actionHref: ROUTES.PRODUCT_CAREER_TWIN,
        actionLabel: "Inspect Twin",
        badge: "MODEL READY",
      });
    }

    if (mentorAssignment) {
      signals.push({
        id: "sig_mentor_assigned",
        type: "MENTOR_NOTE",
        title: `Assigned ${mentorName}`,
        description: `${mentorAssignment.assignmentReason}`,
        timestamp: mentorAssignment.assignedAt || nowIso,
        actionHref: ROUTES.PRODUCT_AI_CAREER_MENTOR,
        actionLabel: `Consult ${mentorName.split(" ")[0]}`,
        badge: mentorDomain,
      });
    }

    if (passportEntries.length > 0) {
      signals.push({
        id: "sig_passport_entries",
        type: "EVIDENCE_VERIFIED",
        title: "Career Passport Vault Active",
        description: `${passportEntries.length} evidence record${passportEntries.length > 1 ? "s" : ""} secured with provenance metadata.`,
        timestamp: careerPassport?.lastUpdated || nowIso,
        actionHref: ROUTES.PRODUCT_CAREER_PASSPORT,
        actionLabel: "View Vault",
        badge: "SECURED",
      });
    }

    if (careerObjective && totalMilestones > 0) {
      signals.push({
        id: "sig_objective_active",
        type: "MILESTONE_DUE",
        title: `Active Objective: ${careerObjective.title}`,
        description: `${completedMilestones.length} of ${totalMilestones} milestones completed (${careerObjective.horizonDays}-day horizon).`,
        timestamp: careerObjective.updatedAt || nowIso,
        actionHref: ROUTES.PRODUCT_AI_CAREER_MENTOR,
        actionLabel: "Review Milestones",
        badge: "ON TRACK",
      });
    }

    // 8. Assemble Trajectory Summary
    const trajectory: TrajectorySummary = {
      currentStage: stage.replace(/_/g, " "),
      workingToward: careerObjective?.title || "Establish foundational trajectory",
      possibleNextDirection:
        careerGraph?.nodes?.[0]?.roleTitle ||
        (careerTwin?.insights?.find((i) => i.category === "GROWTH_AREA")?.title ?? "Expanded Scope & Independence"),
      evidenceBasis: `Derived from ${topCapabilities.length} inferred capability vectors and ${passportEntries.length} verified evidence items.`,
      supportingCapabilityCount: topCapabilities.length,
      verifiedEvidenceCount: passportEntries.length,
    };

    // 9. Assemble Final Career Brief Object
    const expiresAt = new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(); // 6-hour cache lifetime

    const brief: CareerBrief = {
      id: `brief_${userId}_${Date.now()}`,
      userId,
      generatedAt: nowIso,
      expiresAt,
      inputHash,
      version: 1,
      greeting: {
        period,
        displayName: userDisplayName,
        firstName,
        contextStatement,
      },
      nextBestMove,
      briefItems,
      signals,
      trajectory,
      continuity: recentActivity?.hasUnfinishedAction
        ? {
            hasUnfinishedAction: true,
            lastMeaningfulAction: recentActivity.lastMeaningfulAction,
            resumeHref: recentActivity.resumeHref,
          }
        : undefined,
    };

    // Cache the result
    BRIEF_CACHE.set(cacheKey, brief);

    return brief;
  }

  /**
   * Helper to retrieve a single next best action cleanly for API endpoints.
   */
  public static getNextBestCareerAction(params: BuildBriefParams): CareerBriefItem {
    const brief = this.buildCareerBrief(params);
    return brief.nextBestMove;
  }
}
