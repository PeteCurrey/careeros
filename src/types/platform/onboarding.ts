/**
 * Platform Onboarding & Career Intake Types
 * 
 * Persistent, server-authoritative onboarding state machine,
 * 10 adaptive intake branches, domain separation, and provenance models.
 */

export type OnboardingState =
  | "ACCOUNT_CREATED"
  | "EMAIL_VERIFIED"
  | "GUARDIAN_PENDING"
  | "SECURITY_REQUIRED"
  | "ONBOARDING_STARTED"
  | "CAREER_CONTEXT_CAPTURED"
  | "CAREER_DIRECTION_CAPTURED"
  | "CAREER_EVIDENCE_CAPTURED"
  | "CAREER_TWIN_INITIALIZED"
  | "MENTOR_ASSIGNED"
  | "OBJECTIVE_CREATED"
  | "PRIVACY_CONFIRMED"
  | "ONBOARDING_COMPLETE";

export type OnboardingChapter = "01_PROTECT" | "02_UNDERSTAND" | "03_ACTIVATE";

export type AccountOrigin =
  | "DIRECT_INDIVIDUAL"
  | "SCHOOL_OR_INSTITUTION"
  | "GUARDIAN_AUTHORISED";

export type CareerStage =
  | "SCHOOL_STUDENT"
  | "COLLEGE_UNIVERSITY"
  | "APPRENTICE_TRADE"
  | "EARLY_CAREER"
  | "EXPERIENCED_PROFESSIONAL"
  | "LEADER_EXECUTIVE"
  | "CAREER_CHANGER"
  | "RETURNER"
  | "ENTREPRENEUR"
  | "EXPLORING";

export type ProvenanceType =
  | "USER_DECLARED"
  | "RESUME_EXTRACTED"
  | "INSTITUTION_VERIFIED"
  | "EMPLOYER_VERIFIED"
  | "CAREER_OS_INFERRED"
  | "SYSTEM_DERIVED";

export type ExtractionStatus =
  | "EXTRACTED"
  | "USER_CONFIRMED"
  | "USER_CORRECTED"
  | "UNCERTAIN";

export interface ProvenanceMetadata {
  provenance: ProvenanceType;
  confidence: number; // 0.0 to 1.0
  sourceId?: string;
  extractionStatus?: ExtractionStatus;
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string | null;
}

export interface OnboardingSession {
  id: string;
  userId: string;
  state: OnboardingState;
  currentChapter: OnboardingChapter;
  currentSection: string;
  accountOrigin: AccountOrigin;
  careerStage?: CareerStage | null;
  version: number;
  startedAt: string;
  updatedAt: string;
  completedAt?: string | null;
  lastActivityAt: string;
}

export interface CareerContext {
  id: string;
  userId: string;
  displayName: string;
  city: string;
  state: string;
  zipCode?: string;
  careerStage: CareerStage;
  primaryGoal: string;
  secondaryGoals: string[];
  branchData: Record<string, unknown>;
  provenance: ProvenanceMetadata;
}

export interface CareerExperience {
  id: string;
  userId: string;
  roleTitle: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  responsibilities: string[];
  achievements: string[];
  provenance: ProvenanceMetadata;
}

export interface CareerEducation {
  id: string;
  userId: string;
  institution: string;
  institutionType?: string;
  fieldOfStudy?: string;
  degreeOrCertificate?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  modulesOrCourses: string[];
  provenance: ProvenanceMetadata;
}

export interface CareerSkill {
  id: string;
  userId: string;
  skillName: string;
  category: "TECHNICAL" | "TRADE" | "CLINICAL" | "LEADERSHIP" | "COMMUNICATION" | "DOMAIN";
  proficiencyHint?: string;
  provenance: ProvenanceMetadata;
}

export interface CareerPreference {
  id: string;
  userId: string;
  workStyles: ("REMOTE" | "HYBRID" | "ON_SITE")[];
  willingnessToRelocate: boolean;
  commuteRadiusMiles?: number;
  targetSalaryRange?: {
    min?: number;
    max?: number;
    currency: string;
  };
  industryInterests: string[];
  industriesToAvoid: string[];
  scheduleRequirements?: string;
  provenance: ProvenanceMetadata;
}

export interface ExtractedResumeData {
  roleTitle?: string;
  organization?: string;
  experienceYears?: number;
  extractedSkills: string[];
  extractedEducation?: string;
  extractedCertifications: string[];
  extractedAchievements: string[];
  extractionStatus: ExtractionStatus;
  confidence: number;
}
