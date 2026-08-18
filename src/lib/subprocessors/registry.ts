/**
 * Approved Infrastructure & AI Subprocessor Registry
 * 
 * Central data source for all verified technical processors handling data.
 * Publicly disclosed under /legal/subprocessors.
 */

export interface SubprocessorEntry {
  id: string;
  name: string;
  service: string;
  purpose: string;
  dataCategories: string[];
  processingLocation: string;
  contractualFramework: string;
  securityUrl: string;
  status: 'ACTIVE_APPROVED' | 'STAGING_ONLY' | 'PENDING_REVIEW';
  lastReviewed: string;
}

export const SUBPROCESSORS_REGISTRY: SubprocessorEntry[] = [
  {
    id: 'subproc-supabase',
    name: 'Supabase Inc.',
    service: 'Managed PostgreSQL Database & Authentication Engine',
    purpose: 'Core application database, user authentication credentials, session tokens, and encrypted Career Twin database storage.',
    dataCategories: ['Account Credentials', 'User Profiles', 'Career Twin Records', 'Passport Evidence Metadata', 'Audit Logs'],
    processingLocation: 'United States (AWS us-east-1)',
    contractualFramework: 'Standard Contractual Clauses & Data Processing Addendum (SOC 2 Type II Certified)',
    securityUrl: 'https://supabase.com/security',
    status: 'ACTIVE_APPROVED',
    lastReviewed: '2026-08-17',
  },
  {
    id: 'subproc-vercel',
    name: 'Vercel Inc.',
    service: 'Edge Compute & Web Application Hosting',
    purpose: 'Front-end web delivery, edge API caching, serverless execution, and static asset distribution.',
    dataCategories: ['Transient HTTP Request Data', 'IP Addresses for Rate Limiting', 'Telemetry & Error Diagnostics'],
    processingLocation: 'United States & Global Edge Network',
    contractualFramework: 'Enterprise Data Processing Addendum (SOC 2 Type II, ISO 27001 Certified)',
    securityUrl: 'https://vercel.com/security',
    status: 'ACTIVE_APPROVED',
    lastReviewed: '2026-08-17',
  },
  {
    id: 'subproc-google-cloud',
    name: 'Google Cloud Platform (Alphabet Inc.)',
    service: 'Cloud Storage & AI Infrastructure (Vertex AI / Gemini)',
    purpose: 'Model inference for AI Career Mentor dialogues, Career Graph embedding computation, and encrypted evidence document backups.',
    dataCategories: ['Anonymized Prompt Context', 'Career Twin Skill Vectors', 'Document Storage (Encrypted at Rest)'],
    processingLocation: 'United States (Iowa, Oregon, Virginia regions)',
    contractualFramework: 'Google Cloud Data Processing and Security Terms (ISO 27001, ISO 27701, SOC 2/3, FedRAMP High)',
    securityUrl: 'https://cloud.google.com/security',
    status: 'ACTIVE_APPROVED',
    lastReviewed: '2026-08-17',
  },
  {
    id: 'subproc-openai',
    name: 'OpenAI OpCo LLC',
    service: 'Enterprise AI Inference Engine',
    purpose: 'Specialized language reasoning for skills taxonomy normalization, career trajectory extraction, and prompt evaluations.',
    dataCategories: ['De-identified Career Scenario Prompts (Zero Data Retention / No Training Agreement)'],
    processingLocation: 'United States',
    contractualFramework: 'OpenAI Business BAA & Zero Data Retention (ZDR) Enterprise Agreement (SOC 2 Type II Certified)',
    securityUrl: 'https://openai.com/security',
    status: 'ACTIVE_APPROVED',
    lastReviewed: '2026-08-17',
  },
  {
    id: 'subproc-anthropic',
    name: 'Anthropic PBC',
    service: 'Claude AI Reasoning & Safeguarding Engine',
    purpose: 'Complex mentoring synthesis, youth safeguarding content evaluation, and anti-bias dialogue audit reasoning.',
    dataCategories: ['De-identified Career Guidance Prompts (Zero Data Retention Agreement)'],
    processingLocation: 'United States',
    contractualFramework: 'Anthropic Commercial Terms & Data Processing Agreement (SOC 2 Type II Certified)',
    securityUrl: 'https://www.anthropic.com/security',
    status: 'ACTIVE_APPROVED',
    lastReviewed: '2026-08-17',
  },
];
