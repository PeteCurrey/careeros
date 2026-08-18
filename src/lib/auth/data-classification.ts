import { DataClassificationLevel, SecurityAssuranceLevel } from '@/types/platform/identity';

/**
 * CareerOS Data Classification Framework
 * 
 * Defines the sensitivity tiers across CareerOS personal and operational data.
 * Governs when stronger authentication assurance is required before collecting,
 * storing, or exposing user records.
 */

export interface DataClassificationDefinition {
  level: DataClassificationLevel;
  name: string;
  description: string;
  requiredAssurance: SecurityAssuranceLevel;
  requiresExplicitConsent: boolean;
  examples: string[];
}

export const DATA_CLASSIFICATIONS: Record<DataClassificationLevel, DataClassificationDefinition> = {
  CLASS_0_PUBLIC: {
    level: 'CLASS_0_PUBLIC',
    name: 'Class 0 — Public / Anonymous',
    description: 'Freely accessible career guides, public taxonomy, and platform metadata.',
    requiredAssurance: 'EMAIL_VERIFIED',
    requiresExplicitConsent: false,
    examples: ['Pathway explorer', 'Events directory', 'Public articles', 'System status'],
  },
  CLASS_1_BASIC: {
    level: 'CLASS_1_BASIC',
    name: 'Class 1 — Basic Account & Discovery',
    description: 'Initial account identifier and broad career interest discovery.',
    requiredAssurance: 'EMAIL_VERIFIED',
    requiresExplicitConsent: true,
    examples: ['Email address', 'Account display name', 'Broad career stage', 'Broad industry interests'],
  },
  CLASS_2_PERSONAL_CAREER: {
    level: 'CLASS_2_PERSONAL_CAREER',
    name: 'Class 2 — Personal Career Records',
    description: 'Detailed work history, CV documents, qualifications, and active job applications.',
    requiredAssurance: 'SECURED',
    requiresExplicitConsent: true,
    examples: ['CV/Resume uploads', 'Employment history', 'Education transcripts', 'Target job applications'],
  },
  CLASS_3_SENSITIVE_CAREEROS: {
    level: 'CLASS_3_SENSITIVE_CAREEROS',
    name: 'Class 3 — Sensitive Career Intelligence',
    description: 'Private AI mentor consultations, detailed assessments, compensation targets, and behavioural observations.',
    requiredAssurance: 'SECURED',
    requiresExplicitConsent: true,
    examples: ['AI Mentor chat transcripts', 'Diagnostic assessments', 'Compensation benchmarks', 'Career Twin private parameters'],
  },
  CLASS_4_HIGH_SENSITIVITY_MEDIA: {
    level: 'CLASS_4_HIGH_SENSITIVITY_MEDIA',
    name: 'Class 4 — High-Sensitivity Rich Media',
    description: 'Voice recordings, mock interview video feeds, audio snippets, and biometric artifacts.',
    requiredAssurance: 'SECURED',
    requiresExplicitConsent: true,
    examples: ['Mock interview video recordings', 'Voice coaching audio files', 'Interview evaluation transcripts'],
  },
};

/**
 * Returns whether a given security assurance level satisfies the requirement
 * for a specific data classification tier.
 */
export function isAssuranceSufficientForDataClass(
  userAssurance: SecurityAssuranceLevel,
  targetClass: DataClassificationLevel
): boolean {
  const targetRequirement = DATA_CLASSIFICATIONS[targetClass].requiredAssurance;

  if (targetRequirement === 'EMAIL_VERIFIED') {
    return true; // Any verified account can access Class 0 and Class 1
  }

  if (targetRequirement === 'SECURED') {
    return userAssurance === 'SECURED' || userAssurance === 'STEPPED_UP';
  }

  if (targetRequirement === 'STEPPED_UP') {
    return userAssurance === 'STEPPED_UP';
  }

  return false;
}
