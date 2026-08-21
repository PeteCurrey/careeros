/**
 * Central Data Retention Schedule
 * 
 * Defines transparent retention periods, legal justifications,
 * and automated purge rules across all platform data categories.
 * Disclosed under /legal/data-retention.
 */

export interface RetentionRule {
  category: string;
  dataTypes: string[];
  userRelationship: string;
  retentionPeriod: string;
  legalBasis: string;
  deletionMechanism: string;
  exceptions: string;
}

export const DATA_RETENTION_SCHEDULE: RetentionRule[] = [
  {
    category: 'Identity & Authentication Credentials',
    dataTypes: ['Email address', 'Password hashes (Argon2id/Bcrypt)', 'Multi-Factor Auth tokens', 'User UUID'],
    userRelationship: 'Active Registered Account (Student, Professional, Educator, Employer)',
    retentionPeriod: 'Duration of active account + 30 days post-account closure',
    legalBasis: 'Contract performance (Terms of Service § 3); Account security',
    deletionMechanism: 'Automated cryptographic purge cascading across PostgreSQL relations upon account deletion confirmation.',
    exceptions: 'Security audit logs retained up to 12 months for fraud prevention.',
  },
  {
    category: 'Private Career Twin Context',
    dataTypes: ['Stated career aspirations', 'Skill self-assessments', 'Workplace preference vectors', 'Timeline calibrations'],
    userRelationship: 'Individual Candidate (Default Private)',
    retentionPeriod: 'Duration of account; immediate deletion upon user profile reset or account closure',
    legalBasis: 'User consent & contract performance; Data minimisation principle',
    deletionMechanism: 'Immediate soft-delete with hard deletion executed during daily automated maintenance job.',
    exceptions: 'None; user holds unilateral right to wipe or export Career Twin context at any time.',
  },
  {
    category: 'Career Passport Evidence & Credentials',
    dataTypes: ['Uploaded project PDFs/images', 'Verified credential hashes', 'Issuer signatures', 'Licensure metadata'],
    userRelationship: 'Credential Holder',
    retentionPeriod: 'Maintained for lifetime of user portfolio until deleted or revoked by user',
    legalBasis: 'User-directed credential vaulting (Candidate Data Sovereignty)',
    deletionMechanism: 'User-initiated deletion purged from cloud storage blobs within 72 hours; cryptographic tombstone left on verification index.',
    exceptions: 'Third-party verified credentials retain revocation hash on public verification registry.',
  },
  {
    category: 'AI Career Mentor Consultations',
    dataTypes: ['Chat session transcripts', 'Mentor recommendation summaries', 'Action step milestones'],
    userRelationship: 'Mentorship Participant',
    retentionPeriod: 'Active session context: 90 days rolling; Session synthesis summaries: duration of account (or until user clears history)',
    legalBasis: 'Developmental guidance continuity; User consent',
    deletionMechanism: 'One-click "Clear Mentor History" removes all raw conversational context immediately.',
    exceptions: 'Safeguarding escalations involving minor welfare retained for 3 years under child protection compliance rules.',
  },
  {
    category: 'Institutional School Roster Data',
    dataTypes: ['Student school email', 'Grade level', 'District SIS identifier', 'Counselor cohort tags'],
    userRelationship: 'Enrolled K-12 Student via District Agreement',
    retentionPeriod: 'Duration of school academic year + 60 days post-contract termination (or graduation transition to personal 16+ account)',
    legalBasis: 'FERPA School Official Exception (34 CFR § 99.31(a)(1)(i)(B)); State Student Privacy DPAs',
    deletionMechanism: 'Bulk roster purge upon district DPA termination or upon student graduation where personal account transition is declined.',
    exceptions: 'Students turning 16 may choose to port their accumulated Career Passport to an independent personal account.',
  },
  {
    category: 'Employer Recruitment Access Grants',
    dataTypes: ['Candidate Hash IDs', 'Shared application portfolios', 'Employer review timestamps', 'Recruiter interview notes'],
    userRelationship: 'Candidate & Verified Employer Match',
    retentionPeriod: '24 months from grant issuance (in alignment with federal EEOC applicant recordkeeping requirements, 29 CFR § 1602.14)',
    legalBasis: 'EEOC compliance; Candidate explicit access grant',
    deletionMechanism: 'Access grant expires automatically after 24 months unless renewed by candidate.',
    exceptions: 'Active litigation holds or EEOC charge inquiries suspend automated purging.',
  },
  {
    category: 'System Logs & Security Audit Records',
    dataTypes: ['IP addresses', 'User-agent headers', 'Authentication timestamps', 'RLS permission failure events'],
    userRelationship: 'All Platform Visitors & Authenticated Users',
    retentionPeriod: 'Rolling 365 days',
    legalBasis: 'Legitimate interest; Security monitoring (SOC 2 CC7.2 / ISO 27001 A.12.4)',
    deletionMechanism: 'Automated partition rotation in PostgreSQL audit log tables at midnight UTC.',
    exceptions: 'Active security incident investigations retain relevant segment until inquiry resolution.',
  },
];
