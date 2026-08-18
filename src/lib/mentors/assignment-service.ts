import { MENTOR_LIST } from "@/content/mentors/mentorRegistry";
import { CareerTwin, CareerGraphSeed } from "@/types/platform/intelligence";
import { MentorAssignment } from "@/types/platform/mentors";

interface ScoreEntry {
  score: number;
  matches: string[];
}

export class MentorAssignmentService {
  public static assignCareerMentor(params: {
    userId: string;
    careerTwin: CareerTwin;
    careerGraph?: CareerGraphSeed;
    primaryGoal?: string;
  }): MentorAssignment {
    const { userId, careerTwin, primaryGoal = "" } = params;
    const stage = careerTwin.careerStage;
    const contextText = `${stage} ${primaryGoal} ${careerTwin.summary} ${careerTwin.experienceThemes.join(" ")} ${careerTwin.capabilities.map((c) => c.name).join(" ")}`.toLowerCase();

    const mentorIds = [
      "marcus-thorne", "amara-osei", "callum-reid", "priya-chakraborty",
      "isabelle-fontaine", "jordan-park", "darnell-hayes", "rosa-mbeki",
    ] as const;

    const scores: Record<string, ScoreEntry> = {};
    for (const id of mentorIds) {
      scores[id] = { score: 0, matches: [] };
    }

    const getScore = (id: string): ScoreEntry => {
      let entry = scores[id];
      if (!entry) {
        entry = { score: 0, matches: [] };
        scores[id] = entry;
      }
      return entry;
    };

    if (stage === "APPRENTICE_TRADE") {
      getScore("callum-reid").score += 15;
      getScore("callum-reid").matches.push("Skilled Trades & Craft Stage");
    } else if (stage === "ENTREPRENEUR") {
      getScore("rosa-mbeki").score += 15;
      getScore("rosa-mbeki").matches.push("Entrepreneurship & Venture Stage");
    } else if (stage === "LEADER_EXECUTIVE") {
      getScore("priya-chakraborty").score += 10;
      getScore("priya-chakraborty").matches.push("Executive Leadership Stage");
    }

    const keywordMap: Record<string, { id: string; domain: string }> = {
      software: { id: "marcus-thorne", domain: "Technology & Software" },
      engineering: { id: "marcus-thorne", domain: "Engineering Systems" },
      developer: { id: "marcus-thorne", domain: "Code & Architecture" },
      cloud: { id: "marcus-thorne", domain: "Cloud Infrastructure" },
      health: { id: "amara-osei", domain: "Healthcare Systems" },
      clinical: { id: "amara-osei", domain: "Clinical Practice" },
      medical: { id: "amara-osei", domain: "Life Sciences" },
      trade: { id: "callum-reid", domain: "Vocational Craft" },
      electric: { id: "callum-reid", domain: "Electrical Systems" },
      hvac: { id: "callum-reid", domain: "HVAC & Mechanicals" },
      machin: { id: "callum-reid", domain: "Precision Machining" },
      finance: { id: "priya-chakraborty", domain: "Corporate Finance" },
      strategy: { id: "priya-chakraborty", domain: "Strategic Leadership" },
      law: { id: "isabelle-fontaine", domain: "Legal & Regulatory Policy" },
      policy: { id: "isabelle-fontaine", domain: "Public Policy" },
      design: { id: "jordan-park", domain: "Creative Direction" },
      media: { id: "jordan-park", domain: "Digital Media" },
      military: { id: "darnell-hayes", domain: "Military Transition" },
      service: { id: "darnell-hayes", domain: "Operations & Service" },
      business: { id: "rosa-mbeki", domain: "Small Business & Venture" },
      startup: { id: "rosa-mbeki", domain: "Venture Building" },
    };

    Object.entries(keywordMap).forEach(([keyword, target]) => {
      if (contextText.includes(keyword)) {
        const entry = getScore(target.id);
        entry.score += 5;
        if (!entry.matches.includes(target.domain)) {
          entry.matches.push(target.domain);
        }
      }
    });

    let bestMentorId = "marcus-thorne";
    let highestScore = -1;

    Object.entries(scores).forEach(([id, data]) => {
      if (data.score > highestScore) {
        highestScore = data.score;
        bestMentorId = id;
      }
    });

    const mentorPersona = MENTOR_LIST.find((m) => m.slug === bestMentorId) ?? MENTOR_LIST[0];
    if (!mentorPersona) {
      throw new Error("Mentor registry is empty.");
    }

    const bestEntry = getScore(bestMentorId);
    const matches = bestEntry.matches.length > 0 ? bestEntry.matches : [mentorPersona.domain];
    const assignmentReason = `${mentorPersona.name} has been system-assigned because your career context, current goals, and emerging Career Graph align with expertise in ${matches.join(", ")}.`;

    return {
      id: `assign_${userId.substring(0, 8)}_${Date.now()}`,
      userId,
      mentorId: mentorPersona.slug,
      mentorName: mentorPersona.name,
      mentorDomain: mentorPersona.domain,
      portraitSrc: mentorPersona.portraitSrc,
      assignmentReason,
      domainMatches: matches,
      confidence: highestScore > 10 ? 0.95 : 0.8,
      status: "ACTIVE",
      assignedAt: new Date().toISOString(),
    };
  }
}
