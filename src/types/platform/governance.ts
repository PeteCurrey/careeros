/**
 * Career OS Governance Content Engine & Compliance Types
 */

export type GovernanceCategory = "LEGAL" | "TRUST" | "REGULATORY" | "STANDARDS";

export type GovernanceDocumentStatus =
  | "DRAFT"
  | "INTERNAL_REVIEW"
  | "LEGAL_REVIEW"
  | "ACTIVE"
  | "SUPERSEDED"
  | "ARCHIVED";

export type BindingStatus = "BINDING" | "INFORMATIONAL" | "POLICY";

/** Security Control Verification States (Requirement 14) */
export type SecurityControlState =
  | "IMPLEMENTED"
  | "IN_PROGRESS"
  | "PLANNED"
  | "INDEPENDENTLY_VERIFIED"
  | "NOT_APPLICABLE";

/** Employment AI Role Taxonomy (Requirement 16) */
export type EmploymentAIRole =
  | "DISCOVERY"
  | "MATCHING"
  | "RECOMMENDATION"
  | "RANKING"
  | "SCREENING"
  | "DECISION_SUPPORT"
  | "DECISION";

export interface GovernanceSource {
  title: string;
  citation: string;
  url?: string;
}

export interface GovernanceRelatedDoc {
  title: string;
  href: string;
}

export interface GovernanceDocumentMeta {
  id: string;
  title: string;
  slug: string;
  category: GovernanceCategory;
  documentType: string;
  version: string;
  status: GovernanceDocumentStatus;
  effectiveDate: string;
  publishedDate: string;
  lastReviewedDate: string;
  nextReviewDate: string;
  jurisdiction: string;
  owner: string;
  requiresLegalReview: boolean;
  bindingStatus: BindingStatus;
  relatedDocuments: GovernanceRelatedDoc[];
  sources: GovernanceSource[];
  changeSummary: string;
}

export interface SecurityControlItem {
  id: string;
  name: string;
  category: string;
  description: string;
  state: SecurityControlState;
  technicalMechanism: string;
  verificationEvidence: string;
}

export interface EmploymentAIFrameworkItem {
  role: EmploymentAIRole;
  inScopeForCareerOS: boolean;
  intendedFunctionality: string;
  humanOversightModel: string;
  biasAuditStatus: string;
}
