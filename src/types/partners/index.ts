export type PartnerRelationshipType =
  | 'strategic_partner'
  | 'wellbeing_partner'
  | 'workforce_partner'
  | 'education_partner'
  | 'credential_partner'
  | 'employment_partner'
  | 'community_partner'
  | 'data_provider'
  | 'public_workforce_resource'
  | 'technology_partner';

export type PartnerRelationshipStatus =
  | 'target'
  | 'outreach'
  | 'discussion'
  | 'negotiating'
  | 'contracted'
  | 'integration'
  | 'live';

export type PartnerCategory =
  | 'Workforce & Opportunity'
  | 'Wellbeing & Human Support'
  | 'Early Careers & Opportunity'
  | 'Learning & Skills'
  | 'Workforce Intelligence'
  | 'Credentials & Evidence'
  | 'Youth & Career Readiness'
  | 'Specialist Career Pathways'
  | 'Whole-Person Support'
  | 'Workforce Innovation'
  | 'Official Workforce Resources'
  | 'Technology & Infrastructure';

export interface PartnerEcosystemItem {
  id: string;
  name: string;
  slug: string;
  organizationType: 'enterprise' | 'nonprofit' | 'government' | 'education' | 'startup';
  relationshipType: PartnerRelationshipType;
  category: PartnerCategory;
  positioning: string;
  shortDescription: string;
  partnershipReason: string;
  capabilityProvided: string;
  audienceSupported: string[];
  websiteUrl: string;
  logoUrl?: string;
  logoDarkUrl?: string;
  featured: boolean;
  sortOrder: number;
  relationshipStatus: PartnerRelationshipStatus;
  publicDisplayApproved: boolean;
  logoUseApproved: boolean;
  attributionRequired: boolean;
  attributionCopy?: string | null;
  legalNotes?: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  lastVerifiedAt?: string;
}

export interface PublicWorkforceResource {
  id: string;
  name: string;
  slug: string;
  purpose: string[];
  description: string;
  shortDescription?: string;
  howCareerOSUsesIt?: string;
  dataCategory?: string;
  officialSponsor: string;
  websiteUrl: string;
  url?: string;
  attributionText: string;
  trademarkNotice?: string;
  isFederalResource: boolean;
}

export interface PartnershipInquiry {
  id?: string;
  name: string;
  workEmail: string;
  organisation: string;
  website?: string;
  organisationType:
    | 'employer'
    | 'school_college'
    | 'workforce_org'
    | 'training_provider'
    | 'nonprofit'
    | 'technology_data'
    | 'other';
  partnershipType:
    | 'strategic_alliance'
    | 'wellbeing'
    | 'workforce'
    | 'education'
    | 'credentials'
    | 'technology'
    | 'other';
  approximateReach?: string;
  message: string;
  privacyConsent: boolean;
  status?: 'new' | 'in_review' | 'contacted' | 'qualified' | 'declined' | 'archived';
  createdAt?: string;
}

export interface PartnershipPrinciple {
  id: string;
  number: string;
  title: string;
  statement: string;
  description: string;
}

export interface EcosystemProgressionStep {
  stepNumber: number;
  stage: string;
  title: string;
  entityName: string;
  entityRole: string;
  description: string;
  dataOutput: string;
}

export interface SpecialistPathway {
  id: string;
  audience: string;
  subtitle: string;
  partnerName: string;
  category: string;
  challenge: string;
  solution: string;
  keyCapabilities: string[];
}
