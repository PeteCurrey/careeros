/**
 * Career OS Central Legal & Corporate Configuration
 * 
 * Single source of truth for corporate entity details, legal contacts,
 * governing law, dispute venues, and core legal policies.
 * 
 * Unconfirmed corporate details are flagged internally as REQUIRES_FOUNDER_CONFIRMATION
 * to ensure public documents maintain legal precision without displaying incomplete placeholders.
 */

export const LEGAL_CONFIG = {
  legalEntityName: "Career OS Inc.",
  tradingName: "Career OS",
  entityType: "Corporation",
  entityTypeStatus: "REQUIRES_FOUNDER_CONFIRMATION",
  
  incorporationJurisdiction: "State of Delaware, United States",
  incorporationJurisdictionStatus: "REQUIRES_FOUNDER_CONFIRMATION",
  
  companyNumber: null, // REQUIRES_FOUNDER_CONFIRMATION
  registeredAddress: null, // REQUIRES_FOUNDER_CONFIRMATION
  principalAddress: null, // REQUIRES_FOUNDER_CONFIRMATION
  
  // Official Corporate Governance Emails
  legalEmail: "legal@career-os.com",
  privacyEmail: "privacy@career-os.com",
  securityEmail: "security@career-os.com",
  safeguardingEmail: "safeguarding@career-os.com",
  
  // Legal Jurisdiction & Dispute Terms
  governingLaw: "State of Delaware and Federal Laws of the United States",
  disputeVenue: "State or Federal Courts located in Delaware, United States",
  arbitrationPolicy: "Individual binding arbitration with specific exceptions for minor safeguarding, student privacy, and intellectual property enforcement.",
  
  // Product Launch Parameters
  launchJurisdictions: ["United States (US-National)"],
  directAccountMinimumAge: 16,
  under13Policy: "School / Institutional Enrollment Only under FERPA / COPPA School Official Exception",
} as const;

export type LegalConfig = typeof LEGAL_CONFIG;
