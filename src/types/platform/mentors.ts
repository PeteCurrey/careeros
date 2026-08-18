/**
 * Platform AI Career Mentor Assignment & Objective Types
 */

export interface MentorAssignment {
  id: string;
  userId: string;
  mentorId: string;
  mentorName: string;
  mentorDomain: string;
  portraitSrc: string;
  assignmentReason: string;
  domainMatches: string[];
  confidence: number;
  status: "ACTIVE" | "SUPERSEDED" | "REASSIGNED";
  assignedAt: string;
}

export interface ObjectiveMilestone {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  order: number;
}

export interface CareerObjective {
  id: string;
  userId: string;
  title: string;
  description: string;
  horizonDays: number;
  status: "ACTIVE" | "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
  milestones: ObjectiveMilestone[];
  createdAt: string;
  updatedAt: string;
}
