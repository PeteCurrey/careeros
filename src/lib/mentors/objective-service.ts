import { CareerStage } from "@/types/platform/onboarding";
import { CareerTwin } from "@/types/platform/intelligence";
import { CareerObjective } from "@/types/platform/mentors";

export class CareerObjectiveService {
  public static getContextualMentorQuestion(stage: CareerStage): string {
    switch (stage) {
      case "SCHOOL_STUDENT":
        return "What would you like to feel clearer about before you make your next education decision?";
      case "COLLEGE_UNIVERSITY":
        return "If you could translate your coursework into one standout industry deliverable this term, what would it be?";
      case "APPRENTICE_TRADE":
        return "What milestone or certification would make the biggest difference to your earning autonomy over the next 6 months?";
      case "EARLY_CAREER":
        return "What kind of projects or responsibilities do you want to be given that you aren't currently trusted with?";
      case "EXPERIENCED_PROFESSIONAL":
        return "What does meaningful career progress look like for you beyond simply getting another title?";
      case "LEADER_EXECUTIVE":
        return "What organizational transformation or strategic impact do you want to be remembered for driving?";
      case "CAREER_CHANGER":
        return "What needs to be fundamentally different about your next career for the transition to feel entirely worth it?";
      case "RETURNER":
        return "What kind of schedule autonomy and supportive environment will best set you up for long-term momentum?";
      case "ENTREPRENEUR":
        return "What proof of customer demand would make you 100% confident to commit your full energy to this venture?";
      default:
        return "If we looked back six months from now and Career OS had worked brilliantly for you, what would have changed?";
    }
  }

  public static generateInitialObjective(params: {
    userId: string;
    careerTwin: CareerTwin;
    primaryGoal?: string;
    mentorResponse?: string;
  }): CareerObjective {
    const { userId, careerTwin, primaryGoal = "Career Progression" } = params;
    const stage = careerTwin.careerStage;

    let title = `Advance toward primary goal: ${primaryGoal}`;
    let description = `Strategic objective grounded in your current ${stage.replace(/_/g, " ").toLowerCase()} context.`;
    let horizonDays = 90;

    if (stage === "SCHOOL_STUDENT") {
      title = "Explore Pathway Options & Build 1st Evidence Project";
      description = "Identify 2-3 target educational routes and complete an initial capstone project for your Career Passport.";
      horizonDays = 60;
    } else if (stage === "APPRENTICE_TRADE") {
      title = "Document Field Deliverables & Advance Licensure Hours";
      description = "Log practical on-the-job hours, tool competencies, and target senior trade certification.";
      horizonDays = 90;
    } else if (stage === "CAREER_CHANGER") {
      title = "Map Transferable Strengths & Execute 60-Day Bridge Sprint";
      description = "Leverage past domain accomplishments to build 2 target deliverables in your new sector.";
      horizonDays = 60;
    }

    const milestones = [
      {
        id: "ms_1",
        title: "Audit Transferable Capability & Evidence",
        description: "Benchmark current skills and identify highest-value portfolio items.",
        isCompleted: true,
        order: 1,
      },
      {
        id: "ms_2",
        title: "Target 2 Strategic Opportunity Vectors",
        description: "Review adjacent Career Graph nodes and establish direct criteria.",
        isCompleted: false,
        order: 2,
      },
      {
        id: "ms_3",
        title: "Close Highest-Priority Capability Gap",
        description: "Complete targeted sprint or micro-credential to demonstrate readiness.",
        isCompleted: false,
        order: 3,
      },
      {
        id: "ms_4",
        title: "Engage Verified Institutional Pipelines",
        description: "Share verified Career Passport with aligned employers or programs.",
        isCompleted: false,
        order: 4,
      },
    ];

    return {
      id: `obj_${userId.substring(0, 8)}_${Date.now()}`,
      userId,
      title,
      description,
      horizonDays,
      status: "ACTIVE",
      milestones,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
