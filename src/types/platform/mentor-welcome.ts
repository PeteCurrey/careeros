import { z } from "zod";

export type DailyMentorWelcomeMode = "CINEMATIC" | "SUBTLE" | "OFF";

export type TimeOfDayPeriod = "morning" | "afternoon" | "evening";

export interface MentorCanonicalEnvironment {
  id: string;
  mentorId: string;
  name: string;
  domain: string;
  backgroundSrc: string;
  ambientDescription: string;
  lightingTone: string;
  accentColor: string;
}

export interface DailyMentorWelcome {
  id: string;
  userId: string;
  mentorId: string;
  mentorName: string;
  mentorRoleTitle: string;
  mentorDomain: string;
  portraitSrc: string;
  environment: MentorCanonicalEnvironment;
  localDate: string; // YYYY-MM-DD
  localTimePeriod: TimeOfDayPeriod;
  greeting: string;
  dailyLine: string;
  nextMoveTitle: string;
  nextMoveAction: string;
  nextMoveType: "PASSPORT" | "OBJECTIVE" | "EXPLORE" | "GRAPH" | "SKILLS";
  contextReason: string;
  contextEntities: string[];
  generationSource: "CONTEXTUAL_TWIN" | "OBJECTIVE_GROUNDED" | "PASSPORT_EVIDENCE" | "EDITORIAL_CURATED_FALLBACK";
  isFirstEver: boolean;
  contextHash: string;
  generatedAt: string;
  playedAt?: string;
  skippedAt?: string;
  version: string;
}

export const DailyMentorWelcomeSchema = z.object({
  id: z.string(),
  userId: z.string(),
  mentorId: z.string(),
  mentorName: z.string(),
  mentorRoleTitle: z.string(),
  mentorDomain: z.string(),
  portraitSrc: z.string(),
  environment: z.object({
    id: z.string(),
    mentorId: z.string(),
    name: z.string(),
    domain: z.string(),
    backgroundSrc: z.string(),
    ambientDescription: z.string(),
    lightingTone: z.string(),
    accentColor: z.string(),
  }),
  localDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  localTimePeriod: z.enum(["morning", "afternoon", "evening"]),
  greeting: z.string(),
  dailyLine: z.string().min(4),
  nextMoveTitle: z.string(),
  nextMoveAction: z.string(),
  nextMoveType: z.enum(["PASSPORT", "OBJECTIVE", "EXPLORE", "GRAPH", "SKILLS"]),
  contextReason: z.string(),
  contextEntities: z.array(z.string()),
  generationSource: z.enum([
    "CONTEXTUAL_TWIN",
    "OBJECTIVE_GROUNDED",
    "PASSPORT_EVIDENCE",
    "EDITORIAL_CURATED_FALLBACK",
  ]),
  isFirstEver: z.boolean(),
  contextHash: z.string(),
  generatedAt: z.string(),
  playedAt: z.string().optional(),
  skippedAt: z.string().optional(),
  version: z.string(),
});
