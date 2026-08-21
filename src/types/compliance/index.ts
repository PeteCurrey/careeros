/**
 * CareerOS Compliance & Assurance Type Contracts
 * Enterprise Trust, Independent Assurance, AI Decision Governance, and Regulatory Control Plane
 */

export type ComplianceStatus =
  | 'certified'
  | 'attested'
  | 'verified'
  | 'compliant'
  | 'aligned'
  | 'in_progress'
  | 'planned'
  | 'not_applicable';

export type ComplianceCategory =
  | 'independent_assurance'
  | 'information_security'
  | 'privacy'
  | 'responsible_ai'
  | 'student_privacy'
  | 'cybersecurity'
  | 'accessibility'
  | 'payments';

export interface ComplianceFramework {
  id: string;
  name: string;
  shortName: string;
  category: ComplianceCategory;
  description: string;
  status: ComplianceStatus;
  scope: string[];
  standardVersion?: string;
  effectiveDate?: string;
  verifiedDate?: string;
  renewalDate?: string;
  auditorOrCertificationBody?: string;
  certificateReference?: string;
  publicEvidenceUrl?: string;
  privateEvidenceReference?: string;
  publiclyVisible: boolean;
  footerVisible: boolean;
  displayOrder: number;
  lastReviewedAt: string;
  notes?: string;
}

export type DecisionType = 'advisory' | 'recommendation' | 'matching' | 'consequential' | 'automated';
export type DeveloperOrDeployerRole = 'developer' | 'deployer' | 'dual';
export type ProtectedClassRisk = 'low' | 'medium' | 'high' | 'isolated';
export type DecisionInfluenceLevel = 'informational' | 'collaborative' | 'substantive' | 'sole_basis';
export type AISystemStatus = 'production' | 'evaluation' | 'restricted' | 'deprecated';

export interface AIDecisionSystem {
  id: string;
  systemId: string;
  systemName: string;
  modelProvider: string;
  modelName: string;
  modelVersion: string;
  systemVersion: string;
  purpose: string;
  decisionType: DecisionType;
  jurisdictions: string[];
  developerOrDeployerRole: DeveloperOrDeployerRole;
  personalDataCategories: string[];
  inputCategories: string[];
  outputCategories: string[];
  protectedClassRisk: ProtectedClassRisk;
  decisionInfluenceLevel: DecisionInfluenceLevel;
  humanReviewRequired: boolean;
  appealAvailable: boolean;
  impactAssessmentRequired: boolean;
  impactAssessmentDate?: string;
  biasAuditRequired: boolean;
  biasAuditDate?: string;
  biasAuditProvider?: string;
  biasAuditPublicUrl?: string;
  candidateNoticeRequired: boolean;
  noticeTemplate?: string;
  dataRetentionRule: string;
  knownLimitations: string[];
  monitoringMetrics?: Record<string, unknown>;
  incidentCount: number;
  lastReviewedAt: string;
  owner: string;
  status: AISystemStatus;
}

export type DocumentType =
  | 'audit_report'
  | 'certificate'
  | 'attestation'
  | 'legal_opinion'
  | 'pentest_summary'
  | 'policy'
  | 'dpa'
  | 'vendor_assessment'
  | 'insurance';

export interface EvidenceDocument {
  id: string;
  frameworkId: string;
  title: string;
  documentType: DocumentType;
  isPublic: boolean;
  requiresNda: boolean;
  fileUrl?: string;
  storagePath?: string;
  version: string;
  effectiveDate?: string;
  validUntil?: string;
  description: string;
  fileSizeBytes?: number;
}

export interface ComplianceDocumentRequest {
  id: string;
  requesterName: string;
  requesterEmail: string;
  requesterOrganization: string;
  requesterRole?: string;
  organizationType: 'school_district' | 'university' | 'enterprise_employer' | 'government' | 'auditor' | 'other';
  requestedDocuments: string[];
  useCaseReason: string;
  ndaStatus: 'pending' | 'signed' | 'waived' | 'rejected';
  status: 'pending' | 'approved' | 'rejected' | 'fulfilled';
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
  createdAt: string;
}

export interface ComplianceRenewal {
  id: string;
  frameworkId: string;
  frameworkName?: string;
  activityType: 'external_audit' | 'certificate_renewal' | 'penetration_test' | 'bias_audit' | 'policy_review' | 'vendor_review' | 'dpa_review';
  dueDate: string;
  assignedOwner: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'overdue';
  notes?: string;
}

export interface ComplianceRegulation {
  id: string;
  jurisdiction: string;
  regulationName: string;
  shortCode: string;
  applicabilityTrigger: string;
  systemsAffected: string[];
  effectiveDate: string;
  requiredControls: string[];
  implementationStatus: 'compliant' | 'aligned' | 'in_progress' | 'monitoring';
  owner: string;
  lastReviewedAt: string;
  notes?: string;
}

export interface OperatingControlPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: {
    name: string;
    description: string;
    evidence: string;
    verified: boolean;
  }[];
}

/**
 * Enterprise Production Guardrail:
 * Prevents UI from rendering verified certification badges without explicit verification evidence.
 */
export function getSafeStatusDisplay(framework: ComplianceFramework): {
  badgeLabel: string;
  isVerifiedClaim: boolean;
  tooltipText: string;
} {
  const isFormallyVerified =
    (framework.status === 'certified' || framework.status === 'attested' || framework.status === 'verified') &&
    (Boolean(framework.certificateReference) || Boolean(framework.auditorOrCertificationBody) || Boolean(framework.publicEvidenceUrl));

  switch (framework.status) {
    case 'certified':
      return {
        badgeLabel: isFormallyVerified ? 'Certified' : 'In Progress',
        isVerifiedClaim: isFormallyVerified,
        tooltipText: isFormallyVerified
          ? `Independently certified by ${framework.auditorOrCertificationBody || 'Accredited Registrar'}`
          : 'Certification audit in progress; formal credential pending publication',
      };
    case 'attested':
      return {
        badgeLabel: isFormallyVerified ? 'Attested' : 'In Progress',
        isVerifiedClaim: isFormallyVerified,
        tooltipText: isFormallyVerified
          ? `Independent SOC Attestation Report issued by ${framework.auditorOrCertificationBody || 'Independent CPA firm'}`
          : 'Independent SOC examination period in progress',
      };
    case 'compliant':
      return {
        badgeLabel: 'Compliant',
        isVerifiedClaim: true,
        tooltipText: 'Engineered and operated to satisfy regulatory controls',
      };
    case 'aligned':
      return {
        badgeLabel: 'Aligned',
        isVerifiedClaim: true,
        tooltipText: 'Architected around recognized standard control practices',
      };
    case 'in_progress':
      return {
        badgeLabel: 'In Progress',
        isVerifiedClaim: false,
        tooltipText: 'Governance and control implementation actively underway',
      };
    case 'planned':
      return {
        badgeLabel: 'Planned',
        isVerifiedClaim: false,
        tooltipText: 'Scheduled on the enterprise compliance roadmap',
      };
    case 'not_applicable':
      return {
        badgeLabel: 'Not Applicable',
        isVerifiedClaim: true,
        tooltipText: 'Isolated from current operating scope',
      };
    default:
      return {
        badgeLabel: 'Aligned',
        isVerifiedClaim: false,
        tooltipText: 'Platform control baseline',
      };
  }
}
