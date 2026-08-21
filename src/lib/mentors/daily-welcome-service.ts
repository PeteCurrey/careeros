import crypto from "crypto";
import { MENTOR_LIST, MentorPersona } from "@/content/mentors/mentorRegistry";
import { getMentorCanonicalEnvironment } from "./environments";
import {
  DailyMentorWelcome,
  DailyMentorWelcomeSchema,
  TimeOfDayPeriod,
} from "@/types/platform/mentor-welcome";
import { CareerTwin, CareerPassport } from "@/types/platform/intelligence";
import { CareerObjective } from "@/types/platform/mentors";

// In-memory cache for rapid access during active sessions (persisted per day)
const DAILY_WELCOME_CACHE = new Map<string, DailyMentorWelcome>();

interface CuratedMentorLine {
  line: string;
  nextMoveTitle: string;
  nextMoveAction: string;
  nextMoveType: "PASSPORT" | "OBJECTIVE" | "EXPLORE" | "GRAPH" | "SKILLS";
  contextReason: string;
}

const DEFAULT_CURATED_LINE: CuratedMentorLine = {
  line: "You already know the direction. Today is about turning your experience into verified evidence.",
  nextMoveTitle: "Document Systems Architecture Deliverable",
  nextMoveAction: "Log your recent RFC or technical design deliverable into Career Passport",
  nextMoveType: "PASSPORT",
  contextReason: "Technology domain focus on demonstrable technical leverage and system impact.",
};

/**
 * Curated domain editorial library for grounded fallback when user data is minimal.
 * Strict rules: 8–18 words, no exclamation marks, no quotes, no corporate clichés.
 */
const DOMAIN_EDITORIAL_LIBRARY: Record<string, CuratedMentorLine[]> = {
  "marcus-thorne": [
    DEFAULT_CURATED_LINE,
    {
      line: "Clarity comes from testing architecture decisions in practice, not staring at possibilities.",
      nextMoveTitle: "Review Engineering Milestones",
      nextMoveAction: "Assess key technical trade-offs against your active promotion rubric",
      nextMoveType: "OBJECTIVE",
      contextReason: "Senior engineering progression grounded in trade-off ownership.",
    },
    {
      line: "Momentum in engineering doesn't require a large pivot today. It requires the right single step.",
      nextMoveTitle: "Map Infrastructure Competencies",
      nextMoveAction: "Review your cloud and systems competencies in Career Graph",
      nextMoveType: "GRAPH",
      contextReason: "Steady compounding of technical capability vectors.",
    },
  ],
  "amara-osei": [
    {
      line: "Clinical competence compounds through documented practice. Today we structure the proof behind your expertise.",
      nextMoveTitle: "Record Clinical Quality Improvement Project",
      nextMoveAction: "Attach department audit or clinical protocol deliverable to Career Passport",
      nextMoveType: "PASSPORT",
      contextReason: "Healthcare progression emphasizes verified clinical audit metrics.",
    },
    {
      line: "Your clinical experience is foundational. Today we identify which leadership capabilities transfer with you.",
      nextMoveTitle: "Inspect Transferable Healthcare Bridges",
      nextMoveAction: "Review healthcare informatics and operations milestones in Career Graph",
      nextMoveType: "GRAPH",
      contextReason: "Lateral clinical transition grounded in domain depth.",
    },
  ],
  "callum-reid": [
    {
      line: "You have built the hands-on mastery. Today is about making your trade credentials and hours visible.",
      nextMoveTitle: "Log Verified Apprenticeship or Site Hours",
      nextMoveAction: "Record inspector sign-offs and regulatory trade credentials in Career Passport",
      nextMoveType: "PASSPORT",
      contextReason: "Trade and craft progression requires verified site hours and licensure proof.",
    },
    {
      line: "Real autonomy in the trades starts with commercial literacy alongside technical skill.",
      nextMoveTitle: "Explore Commercial Contracting Milestones",
      nextMoveAction: "Evaluate master licensing and commercial project estimating objectives",
      nextMoveType: "OBJECTIVE",
      contextReason: "Apprentice-to-master and trade contracting advancement.",
    },
  ],
  "priya-chakraborty": [
    {
      line: "Executive momentum is built by defending capital decisions with clear operational evidence.",
      nextMoveTitle: "Document Strategic Enterprise Deliverables",
      nextMoveAction: "Log financial modeling and strategic planning artifacts in Career Passport",
      nextMoveType: "PASSPORT",
      contextReason: "Finance and corporate strategy progression based upon capital allocation evidence.",
    },
    {
      line: "Today is not about evaluating every option. It is about recognizing the highest-leverage move.",
      nextMoveTitle: "Align Strategic Career Objective",
      nextMoveAction: "Review active milestones on your executive trajectory",
      nextMoveType: "OBJECTIVE",
      contextReason: "Focusing executive energy on high-leverage organizational impact.",
    },
  ],
  "isabelle-fontaine": [
    {
      line: "Sound career strategy resembles thorough legal analysis: ground every proposition in demonstrable facts.",
      nextMoveTitle: "Attach Regulatory and Policy Artifacts",
      nextMoveAction: "Record published policy briefs or compliance certifications in Career Passport",
      nextMoveType: "PASSPORT",
      contextReason: "Legal and policy progression grounded in verified institutional standing.",
    },
    {
      line: "You are not starting over. Today we identify the governance competencies that carry forward.",
      nextMoveTitle: "Review In-House Legal Trajectories",
      nextMoveAction: "Inspect product counsel and privacy governance bridges in Career Graph",
      nextMoveType: "GRAPH",
      contextReason: "Transferable analytical rigor applied to corporate and public sector roles.",
    },
  ],
  "jordan-park": [
    {
      line: "Taste is essential, but evidence of commercial impact is what elevates creative direction.",
      nextMoveTitle: "Structure Measurable Design Case Study",
      nextMoveAction: "Connect portfolio deliverables to measurable business conversion metrics",
      nextMoveType: "PASSPORT",
      contextReason: "Creative leadership grounded in measurable brand equity and design systems.",
    },
    {
      line: "Your aesthetic range is already evident. Today we focus on your strategic leadership proof.",
      nextMoveTitle: "Review Creative Direction Milestones",
      nextMoveAction: "Assess creative leadership and brand architecture objectives",
      nextMoveType: "OBJECTIVE",
      contextReason: "Creative progression from execution to executive strategy.",
    },
  ],
  "darnell-hayes": [
    {
      line: "Your operational discipline is an asset. Today we translate your command experience into corporate terms.",
      nextMoveTitle: "Translate Military and Logistics Scope",
      nextMoveAction: "Map equipment, headcount, and budget oversight in Career Passport",
      nextMoveType: "PASSPORT",
      contextReason: "Service leaver translation layer mapping operational responsibility to civilian benchmarks.",
    },
    {
      line: "Clear accountability and steady execution remain rare and valuable across every civilian sector.",
      nextMoveTitle: "Inspect Operations Leadership Trajectory",
      nextMoveAction: "Review supply chain and crisis management milestones in Career Graph",
      nextMoveType: "GRAPH",
      contextReason: "Leadership scope translated with dignity and clarity.",
    },
  ],
  "rosa-mbeki": [
    {
      line: "Sustainable ventures are built on customer proof points, not unvalidated enthusiasm.",
      nextMoveTitle: "Document Customer Discovery Deliverables",
      nextMoveAction: "Log pilot letters of intent or unit economics models in Career Passport",
      nextMoveType: "PASSPORT",
      contextReason: "Venture building grounded in measurable traction and commercial evidence.",
    },
    {
      line: "Focus on the single critical milestone that moves your venture from concept into revenue.",
      nextMoveTitle: "Review Commercial Milestone",
      nextMoveAction: "Inspect go-to-market and co-founder alignment milestones in Career Objective",
      nextMoveType: "OBJECTIVE",
      contextReason: "Bootstrapped and venture milestones prioritized for commercial execution.",
    },
  ],
};

export class DailyMentorWelcomeService {
  /**
   * Resolves appropriate time of day greeting string.
   */
  public static getTimeOfDayGreeting(userFirstName: string, hour: number): { greeting: string; period: TimeOfDayPeriod } {
    const cleanName = userFirstName.trim() || "there";
    let period: TimeOfDayPeriod = "morning";
    let salutation = "Good morning";

    if (hour >= 12 && hour < 17) {
      period = "afternoon";
      salutation = "Good afternoon";
    } else if (hour >= 17 || hour < 5) {
      period = "evening";
      salutation = "Good evening";
    }

    return {
      greeting: `${salutation}, ${cleanName}.`,
      period,
    };
  }

  /**
   * Builds or retrieves cached Daily Mentor Welcome.
   * Strictly grounded in user state. Generates once per local date.
   */
  public static buildDailyMentorWelcome(params: {
    userId: string;
    userFirstName?: string;
    mentorId?: string;
    localDate: string; // YYYY-MM-DD
    localHour?: number;
    careerTwin?: CareerTwin | null;
    careerObjective?: CareerObjective | null;
    careerPassport?: CareerPassport | null;
    isFirstEver?: boolean;
  }): DailyMentorWelcome {
    const {
      userId,
      userFirstName = "Pete",
      mentorId = "marcus-thorne",
      localDate,
      localHour = new Date().getHours(),
      careerTwin,
      careerObjective,
      careerPassport,
      isFirstEver = false,
    } = params;

    const cacheKey = `${userId}:${localDate}`;
    const cached = DAILY_WELCOME_CACHE.get(cacheKey);
    if (cached && !isFirstEver) {
      return cached;
    }

    // Resolve canonical mentor persona
    const cleanMentorSlug = mentorId.replace(/^mentor-/, "");
    const mentorPersona: MentorPersona =
      MENTOR_LIST.find((m) => m.slug === cleanMentorSlug) || (MENTOR_LIST[0] as MentorPersona);
    const environment = getMentorCanonicalEnvironment(mentorPersona.slug);

    const { greeting, period } = this.getTimeOfDayGreeting(userFirstName, localHour);

    let dailyLine = "";
    let nextMoveTitle = "";
    let nextMoveAction = "";
    let nextMoveType: DailyMentorWelcome["nextMoveType"] = "OBJECTIVE";
    let contextReason = "";
    let contextEntities: string[] = [];
    let generationSource: DailyMentorWelcome["generationSource"] = "EDITORIAL_CURATED_FALLBACK";

    // 1. First-ever activation immediately following onboarding
    if (isFirstEver) {
      generationSource = "CONTEXTUAL_TWIN";
      const goalSnippet = careerTwin?.insights?.find((i) => i.category === "STRENGTH")?.description || "your primary goals";
      dailyLine = `Your Career OS is initialized around ${goalSnippet.replace(/^Primary focus established on "/, "").replace(/"\.$/, "")}. Let's make your capability compound.`;
      nextMoveTitle = "Explore Your Grounded Career Twin";
      nextMoveAction = "Inspect your initial capability matrix and verified evidence baseline";
      nextMoveType = "EXPLORE";
      contextReason = "First-ever Career OS activation following onboarding completion.";
      contextEntities = [mentorPersona.name, "Career Twin Activation"];
    }
    // 2. User has an active uncompleted milestone in Career Objective
    else if (careerObjective && careerObjective.milestones && careerObjective.milestones.some((m) => !m.isCompleted)) {
      const activeMilestone = careerObjective.milestones.find((m) => !m.isCompleted)!;
      generationSource = "OBJECTIVE_GROUNDED";
      dailyLine = `Progress on your "${activeMilestone.title}" target turns intention into evidence today.`;
      nextMoveTitle = activeMilestone.title;
      nextMoveAction = activeMilestone.description || "Complete active milestone deliverables";
      nextMoveType = "OBJECTIVE";
      contextReason = `Active objective "${careerObjective.title}" milestone #${activeMilestone.order}.`;
      contextEntities = [careerObjective.title, activeMilestone.title];
    }
    // 3. User has unverified or declared entries in Career Passport
    else if (careerPassport && Array.isArray(careerPassport.entries) && careerPassport.entries.length > 0) {
      const firstEntry = careerPassport.entries[0];
      if (firstEntry) {
        generationSource = "PASSPORT_EVIDENCE";
        dailyLine = `You have built the background experience in ${firstEntry.title}. Today we make the evidence visible.`;
        nextMoveTitle = `Document Evidence: ${firstEntry.title}`;
        nextMoveAction = "Attach verified project deliverables or credential records in Career Passport";
        nextMoveType = "PASSPORT";
        contextReason = `Grounding in Career Passport entry "${firstEntry.title}".`;
        contextEntities = [firstEntry.title];
      }
    }
    // 4. Grounded Twin capability strength
    else if (careerTwin && Array.isArray(careerTwin.capabilities) && careerTwin.capabilities.length > 0 && careerTwin.capabilities[0]) {
      generationSource = "CONTEXTUAL_TWIN";
      const topCap = careerTwin.capabilities[0].name;
      dailyLine = `Clarity comes from compounding your strength in ${topCap}, not staring at unverified possibilities.`;
      nextMoveTitle = `Expand ${topCap} Evidence`;
      nextMoveAction = `Map demonstrated deliverables for ${topCap} into your Career Graph`;
      nextMoveType = "SKILLS";
      contextReason = `Grounded in top capability "${topCap}".`;
      contextEntities = [topCap];
    }
    // 5. Curated Editorial Fallback (strictly approved domain lines)
    if (!dailyLine) {
      generationSource = "EDITORIAL_CURATED_FALLBACK";
      const list = DOMAIN_EDITORIAL_LIBRARY[mentorPersona.slug] || DOMAIN_EDITORIAL_LIBRARY["marcus-thorne"] || [DEFAULT_CURATED_LINE];
      // Deterministic pick based on day of month to avoid random jitter
      const dayOfMonth = parseInt(localDate.split("-")[2] || "1", 10);
      const selected = list[dayOfMonth % list.length] || DEFAULT_CURATED_LINE;
      dailyLine = selected.line;
      nextMoveTitle = selected.nextMoveTitle;
      nextMoveAction = selected.nextMoveAction;
      nextMoveType = selected.nextMoveType;
      contextReason = selected.contextReason;
      contextEntities = [mentorPersona.domain];
    }

    const contextHash = crypto
      .createHash("sha256")
      .update(`${userId}:${localDate}:${dailyLine}`)
      .digest("hex")
      .substring(0, 16);

    const welcome: DailyMentorWelcome = {
      id: `dmw_${userId.substring(0, 8)}_${localDate.replace(/-/g, "")}_${contextHash.substring(0, 6)}`,
      userId,
      mentorId: mentorPersona.slug,
      mentorName: mentorPersona.name,
      mentorRoleTitle: mentorPersona.roleTitle,
      mentorDomain: mentorPersona.domainShort,
      portraitSrc: mentorPersona.portraitSrc,
      environment,
      localDate,
      localTimePeriod: period,
      greeting,
      dailyLine,
      nextMoveTitle,
      nextMoveAction,
      nextMoveType,
      contextReason,
      contextEntities,
      generationSource,
      isFirstEver,
      contextHash,
      generatedAt: new Date().toISOString(),
      version: "1.0.0",
    };

    // Validate with Zod
    DailyMentorWelcomeSchema.parse(welcome);

    // Cache for subsequent visits today
    DAILY_WELCOME_CACHE.set(cacheKey, welcome);

    return welcome;
  }

  /**
   * Marks a daily mentor welcome as played (completed cinematic playback).
   */
  public static markPlayed(userId: string, localDate: string): void {
    const cacheKey = `${userId}:${localDate}`;
    const entry = DAILY_WELCOME_CACHE.get(cacheKey);
    if (entry) {
      entry.playedAt = new Date().toISOString();
      DAILY_WELCOME_CACHE.set(cacheKey, entry);
    }
  }

  /**
   * Marks a daily mentor welcome as skipped.
   */
  public static markSkipped(userId: string, localDate: string): void {
    const cacheKey = `${userId}:${localDate}`;
    const entry = DAILY_WELCOME_CACHE.get(cacheKey);
    if (entry) {
      entry.skippedAt = new Date().toISOString();
      DAILY_WELCOME_CACHE.set(cacheKey, entry);
    }
  }

  /**
   * Checks whether the user has already viewed or skipped today's welcome.
   */
  public static hasPlayedToday(userId: string, localDate: string): boolean {
    const cacheKey = `${userId}:${localDate}`;
    const entry = DAILY_WELCOME_CACHE.get(cacheKey);
    return Boolean(entry?.playedAt || entry?.skippedAt);
  }
}
