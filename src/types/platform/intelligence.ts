/**
 * Platform Career Intelligence, Passport & Graph Types
 * 
 * Defines the initial Career Twin, evidence-based Career Passport,
 * and Career Graph Seed trajectories.
 */

import { ProvenanceMetadata, CareerStage } from "./onboarding";

export type EvidenceConfidenceRating =
  | "STRONG_EVIDENCE"
  | "SOME_EVIDENCE"
  | "EARLY_HYPOTHESIS"
  | "NEEDS_MORE_INFO";

export interface CareerTwinInsight {
  category: "STRENGTH" | "TRANSFERABLE_CAPABILITY" | "GROWTH_AREA" | "UNCERTAINTY";
  title: string;
  description: string;
  sourceReferences: string[];
  confidence: EvidenceConfidenceRating;
}

export interface CareerTwin {
  id: string;
  userId: string;
  version: number;
  status: "ACTIVE" | "STALE" | "SUPERSEDED";
  summary: string;
  careerStage: CareerStage;
  experienceThemes: string[];
  capabilities: {
    name: string;
    level: string;
    evidenceSource: string;
  }[];
  insights: CareerTwinInsight[];
  generatedAt: string;
  inputHash: string;
}

export type PassportEntryStatus =
  | "DECLARED"
  | "EXTRACTED"
  | "CONFIRMED"
  | "VERIFICATION_PENDING"
  | "VERIFIED"
  | "DISPUTED";

export interface PassportEntry {
  id: string;
  userId: string;
  category:
    | "EMPLOYMENT"
    | "EDUCATION"
    | "PROJECT"
    | "CREDENTIAL"
    | "SKILL"
    | "ACHIEVEMENT"
    | "VOLUNTEERING"
    | "LEADERSHIP"
    | "TRAINING";
  title: string;
  issuerOrOrganization?: string;
  dateRange?: string;
  description?: string;
  status: PassportEntryStatus;
  provenance: ProvenanceMetadata;
}

export interface CareerPassport {
  id: string;
  userId: string;
  entries: PassportEntry[];
  lastUpdated: string;
}

export interface CareerTrajectoryNode {
  id: string;
  roleTitle: string;
  domain: string;
  trajectoryType: "STARTING_HYPOTHESIS" | "ADJACENT_POSSIBILITY" | "DEVELOPMENT_DIRECTION";
  confidence: EvidenceConfidenceRating;
  evidenceBasis: string;
  overlappingCapabilities: string[];
  keyBridgeRequirements: string[];
}

export interface CareerGraphSeed {
  id: string;
  userId: string;
  currentContextNode: string;
  nodes: CareerTrajectoryNode[];
  generatedAt: string;
}
