import { z } from "zod";

/**
 * Career Brief Item Categories
 */
export type CareerBriefCategory =
  | "NEXT_MOVE"
  | "OPPORTUNITY"
  | "EVIDENCE"
  | "DECISION"
  | "MILESTONE"
  | "CAREER_SIGNAL"
  | "MENTOR_FOLLOWUP"
  | "DEADLINE";

export const CareerBriefCategorySchema = z.enum([
  "NEXT_MOVE",
  "OPPORTUNITY",
  "EVIDENCE",
  "DECISION",
  "MILESTONE",
  "CAREER_SIGNAL",
  "MENTOR_FOLLOWUP",
  "DEADLINE",
]);

/**
 * Structured Context for Mentor Handoff
 */
export interface MentorHandoffContext {
  sourceScreen: string;
  recommendationId: string;
  recommendationTitle: string;
  mentorId: string;
  mentorName: string;
  mentorDomain: string;
  portraitSrc: string;
  objectiveTitle?: string;
  relevantTwinAttributes: string[];
  relevantEvidence: string[];
  suggestedQuestions: string[];
  userQuestionIntent?: string;
}

export const MentorHandoffContextSchema = z.object({
  sourceScreen: z.string(),
  recommendationId: z.string(),
  recommendationTitle: z.string(),
  mentorId: z.string(),
  mentorName: z.string(),
  mentorDomain: z.string(),
  portraitSrc: z.string(),
  objectiveTitle: z.string().optional(),
  relevantTwinAttributes: z.array(z.string()),
  relevantEvidence: z.array(z.string()),
  suggestedQuestions: z.array(z.string()),
  userQuestionIntent: z.string().optional(),
});

/**
 * Explainability ("Why This?") Structure
 */
export interface WhyThisExplanation {
  headline: string;
  reasons: string[];
  groundedInGoal?: string;
  groundedInCapabilities: string[];
  evidenceGapsOrProof: string[];
  dataInputs: string[];
}

export const WhyThisExplanationSchema = z.object({
  headline: z.string(),
  reasons: z.array(z.string()),
  groundedInGoal: z.string().optional(),
  groundedInCapabilities: z.array(z.string()),
  evidenceGapsOrProof: z.array(z.string()),
  dataInputs: z.array(z.string()),
});

/**
 * Individual Career Brief Item
 */
export interface CareerBriefItem {
  id: string;
  category: CareerBriefCategory;
  title: string;
  whyItMatters: string;
  sourceReason: string;
  recommendedAction: string;
  priorityReason: string;
  priorityScore: number;
  relatedObjectiveId?: string;
  relatedObjectiveTitle?: string;
  relatedEntity: {
    type: "TWIN" | "PASSPORT" | "GRAPH" | "OBJECTIVE" | "MENTOR" | "SIGNAL";
    id?: string;
    name: string;
  };
  suggestedDuration?: string;
  primaryCTA: {
    label: string;
    href: string;
    actionType?: string;
  };
  whyThis: WhyThisExplanation;
  mentorContext: MentorHandoffContext;
  freshnessTimestamp: string;
}

export const CareerBriefItemSchema = z.object({
  id: z.string(),
  category: CareerBriefCategorySchema,
  title: z.string(),
  whyItMatters: z.string(),
  sourceReason: z.string(),
  recommendedAction: z.string(),
  priorityReason: z.string(),
  priorityScore: z.number().min(0).max(100),
  relatedObjectiveId: z.string().optional(),
  relatedObjectiveTitle: z.string().optional(),
  relatedEntity: z.object({
    type: z.enum(["TWIN", "PASSPORT", "GRAPH", "OBJECTIVE", "MENTOR", "SIGNAL"]),
    id: z.string().optional(),
    name: z.string(),
  }),
  suggestedDuration: z.string().optional(),
  primaryCTA: z.object({
    label: z.string(),
    href: z.string(),
    actionType: z.string().optional(),
  }),
  whyThis: WhyThisExplanationSchema,
  mentorContext: MentorHandoffContextSchema,
  freshnessTimestamp: z.string(),
});

/**
 * Career Signal (Meaningful Model/Environment Events)
 */
export interface CareerSignal {
  id: string;
  type:
    | "TWIN_EVOLVED"
    | "EVIDENCE_VERIFIED"
    | "GRAPH_UPDATED"
    | "MILESTONE_DUE"
    | "MENTOR_NOTE"
    | "OPPORTUNITY_VECTOR";
  title: string;
  description: string;
  timestamp: string;
  actionHref?: string;
  actionLabel?: string;
  badge?: string;
}

export const CareerSignalSchema = z.object({
  id: z.string(),
  type: z.enum([
    "TWIN_EVOLVED",
    "EVIDENCE_VERIFIED",
    "GRAPH_UPDATED",
    "MILESTONE_DUE",
    "MENTOR_NOTE",
    "OPPORTUNITY_VECTOR",
  ]),
  title: z.string(),
  description: z.string(),
  timestamp: z.string(),
  actionHref: z.string().optional(),
  actionLabel: z.string().optional(),
  badge: z.string().optional(),
});

/**
 * Grounded Trajectory Summary
 */
export interface TrajectorySummary {
  currentStage: string;
  workingToward: string;
  possibleNextDirection: string;
  evidenceBasis: string;
  supportingCapabilityCount: number;
  verifiedEvidenceCount: number;
}

export const TrajectorySummarySchema = z.object({
  currentStage: z.string(),
  workingToward: z.string(),
  possibleNextDirection: z.string(),
  evidenceBasis: z.string(),
  supportingCapabilityCount: z.number(),
  verifiedEvidenceCount: z.number(),
});

/**
 * Complete Career Brief Model for "Today"
 */
export interface CareerBrief {
  id: string;
  userId: string;
  generatedAt: string;
  expiresAt: string;
  inputHash: string;
  version: number;
  greeting: {
    period: "morning" | "afternoon" | "evening";
    displayName: string;
    firstName: string;
    contextStatement: string;
  };
  nextBestMove: CareerBriefItem;
  briefItems: CareerBriefItem[]; // Maximum 3 items
  signals: CareerSignal[];
  trajectory: TrajectorySummary;
  continuity?: {
    hasUnfinishedAction: boolean;
    lastMeaningfulAction?: string;
    resumeHref?: string;
  };
}

export const CareerBriefSchema = z.object({
  id: z.string(),
  userId: z.string(),
  generatedAt: z.string(),
  expiresAt: z.string(),
  inputHash: z.string(),
  version: z.number(),
  greeting: z.object({
    period: z.enum(["morning", "afternoon", "evening"]),
    displayName: z.string(),
    firstName: z.string(),
    contextStatement: z.string(),
  }),
  nextBestMove: CareerBriefItemSchema,
  briefItems: z.array(CareerBriefItemSchema).max(3),
  signals: z.array(CareerSignalSchema),
  trajectory: TrajectorySummarySchema,
  continuity: z
    .object({
      hasUnfinishedAction: z.boolean(),
      lastMeaningfulAction: z.string().optional(),
      resumeHref: z.string().optional(),
    })
    .optional(),
});
