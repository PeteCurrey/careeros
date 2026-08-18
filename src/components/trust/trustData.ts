export interface TrustPrincipleItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
}

export const TRUST_PRINCIPLES: TrustPrincipleItem[] = [
  {
    id: 'agency',
    title: 'Human Agency',
    shortDesc: 'Technology assists people rather than quietly controlling consequential choices.',
    fullDesc:
      'Every individual user retains ultimate sovereignty over their career choices. AI Mentor advice can be questioned, edited, or completely disregarded. Career OS never automates life choices on behalf of users.',
    iconName: 'UserCheck',
    badge: 'Core Foundation',
  },
  {
    id: 'transparency',
    title: 'Transparency',
    shortDesc: 'People should know when they are interacting with AI and understand its role.',
    fullDesc:
      'We clearly disclose every AI interaction, identify the underlying data categories influencing outputs, and explain the key decision factors behind every recommendation.',
    iconName: 'Eye',
    badge: 'Operational Rule',
  },
  {
    id: 'fairness',
    title: 'Fairness & Parity',
    shortDesc: 'Systems should be evaluated for unfair, discriminatory, or biased outcomes.',
    fullDesc:
      'We actively test algorithms for statistical parity, protect non-traditional backgrounds, and maintain equal dignity between university degrees, degree apprenticeships, and skilled trades.',
    iconName: 'Scale',
    badge: 'Continuous Testing',
  },
  {
    id: 'privacy',
    title: 'Architectural Privacy',
    shortDesc: 'Personal information should be handled deliberately and proportionately.',
    fullDesc:
      'Zero sale of personal data, zero candidate shadow dossiers, and strict purpose-bound access. Personal reflections and mentor conversations remain confidential to the learner.',
    iconName: 'Lock',
    badge: 'Default Private',
  },
  {
    id: 'safety',
    title: 'Safety & Safeguarding',
    shortDesc: 'AI systems require safeguards, monitoring, and immediate escalation paths.',
    fullDesc:
      'Non-therapeutic AI boundaries, strict age-banded controls for school-age minors, zero recruiter cold-sourcing of young people, and direct escalation to school safeguarding leads.',
    iconName: 'ShieldCheck',
    badge: 'Youth Sanctuary',
  },
  {
    id: 'oversight',
    title: 'Human Oversight',
    shortDesc: 'Important outcomes should retain meaningful human involvement.',
    fullDesc:
      'Consequential employment, grading, and admissions decisions remain strictly in human hands. Hiring managers and educators retain full authority and review capability.',
    iconName: 'Users',
    badge: 'Mandatory Human Gate',
  },
  {
    id: 'accountability',
    title: 'Accountability & Recourse',
    shortDesc: 'AI systems require owners, governance, review, and mechanisms for recourse.',
    fullDesc:
      'Every deployed AI capability has designated human owners, scheduled governance reviews, an audit trail, and an accessible appeal channel for users who believe an AI output was incorrect.',
    iconName: 'FileCheck',
    badge: 'Public Accountability',
  },
];

export interface CapabilityGovernanceItem {
  capability: string;
  description: string;
  aiRole: string;
  humanReview: string;
  personalizationLevel: string;
  consequentialImpact: 'LOW' | 'MODERATE' | 'HEIGHTENED';
  safeguards: string[];
}

export const CAPABILITY_GOVERNANCE_MATRIX: CapabilityGovernanceItem[] = [
  {
    capability: 'AI Career Mentor',
    description: '24/7 conversational career advisory, exploration, and self-reflection coaching.',
    aiRole: 'Generative conversation & pathway synthesis',
    humanReview: 'User self-curated; pre-session briefs for school counsellors upon request',
    personalizationLevel: 'High (Career Twin context)',
    consequentialImpact: 'MODERATE',
    safeguards: [
      'Non-therapeutic guardrails',
      'Factual labor data grounding',
      'Confidential student memory',
      'Escalation to school DSL',
    ],
  },
  {
    capability: 'Career Twin Model',
    description: 'Dynamic digital model of demonstrated skills, aspirations, and experience.',
    aiRole: 'Capability extraction & taxonomy mapping',
    humanReview: 'Full user editorial control & manual override',
    personalizationLevel: 'Comprehensive profile',
    consequentialImpact: 'LOW',
    safeguards: [
      'Zero third-party broker sharing',
      'User-owned data ledger',
      'Right to erase & export',
    ],
  },
  {
    capability: 'Career Graph Discovery',
    description: 'Topological cross-industry career pathways and progression trajectories.',
    aiRole: 'Graph analysis & pathway comparison',
    humanReview: 'Static curated occupational standards',
    personalizationLevel: 'Configurable exploration',
    consequentialImpact: 'LOW',
    safeguards: [
      'Multi-pathway parity (Univ vs Apprenticeship vs Trades)',
      'No sponsored career rankings',
    ],
  },
  {
    capability: 'Skill Gap Analysis',
    description: 'Identifies transferable skills and modular learning steps for role transitions.',
    aiRole: 'Taxonomy gap identification',
    humanReview: 'Self-guided; counsellor advisory integration',
    personalizationLevel: 'Role-specific',
    consequentialImpact: 'MODERATE',
    safeguards: [
      'Transparent requirement criteria',
      'Objective credential mapping',
      'Contestable skill tags',
    ],
  },
  {
    capability: 'CV & Portfolio Assistance',
    description: 'Helps articulate achievements, capstone projects, and vocational experiences.',
    aiRole: 'Drafting & phrasing assistance',
    humanReview: 'User reviews and approves every word before export',
    personalizationLevel: 'User-directed',
    consequentialImpact: 'LOW',
    safeguards: [
      'No automated resume submission without consent',
      'Accurate representation checks',
    ],
  },
  {
    capability: 'Interview Simulation',
    description: 'Role-specific practice questions, behavioral prompts, and feedback.',
    aiRole: 'Simulated interviewer & rubric feedback',
    humanReview: 'Practice only; zero automated grading shared with employers',
    personalizationLevel: 'Role-specific',
    consequentialImpact: 'LOW',
    safeguards: [
      'Zero storage of biometric/video surveillance',
      'Practice data strictly private',
    ],
  },
  {
    capability: 'Opportunity Agent (Learner)',
    description: 'Discovers verified apprenticeships, internships, and career events.',
    aiRole: 'Relevance matching & filtering',
    humanReview: 'User chooses whether to apply; school approval for under-16s',
    personalizationLevel: 'Preference & location-based',
    consequentialImpact: 'MODERATE',
    safeguards: [
      '5-stage opportunity governance gate',
      'Mandatory wage transparency',
      'Zero pay-to-recommend bias',
    ],
  },
  {
    capability: 'Employer Agent (Hiring Teams)',
    description: 'Helps corporate talent teams discover candidates based on verified capabilities.',
    aiRole: 'Capability matching & criteria deconstruction',
    humanReview: 'Mandatory human hiring manager decision; zero autonomous rejection',
    personalizationLevel: 'Candidate-consented portfolio data',
    consequentialImpact: 'HEIGHTENED',
    safeguards: [
      'Strict prohibition of minor cold-sourcing',
      'Audited against proxy variables',
      'Notice of AI assistance to applicants',
      'Human hiring decision primacy',
    ],
  },
  {
    capability: 'School Cohort Intelligence',
    description: 'Macro-level aggregated pathway exploration trends for school leadership.',
    aiRole: 'Aggregate statistical summarization',
    humanReview: 'School careers leader & leadership team',
    personalizationLevel: 'Zero individual identification (k-anonymity >= 10)',
    consequentialImpact: 'LOW',
    safeguards: [
      'Zero student ranking or league tables',
      'Zero employability composite scores',
    ],
  },
];

export interface AIUseCaseRecord {
  id: string;
  capability: string;
  purpose: string;
  aiRole: string;
  outputType: 'ADVISORY' | 'DRAFT' | 'MATCH_SIGNAL' | 'SYNTHESIS';
  humanInvolvement: 'DIRECT_USER_CONTROL' | 'MANDATORY_HUMAN_DECISION' | 'COUNSELLOR_PARTNERED';
  dataUsed: string[];
  limitations: string[];
  riskTier: 'LOW' | 'MODERATE' | 'HEIGHTENED';
  governanceStatus: 'VERIFIED_ACTIVE' | 'GOVERNED_PILOT' | 'PLANNED_ROADMAP';
  lastReviewed: string;
}

export const AI_USE_CASE_REGISTER: AIUseCaseRecord[] = [
  {
    id: 'ai-mentor',
    capability: 'AI Career Mentor',
    purpose: 'Deliver patient, personalized career guidance and reflective exploration.',
    aiRole: 'Generative dialogue, question formulation, pathway explanation',
    outputType: 'ADVISORY',
    humanInvolvement: 'DIRECT_USER_CONTROL',
    dataUsed: ['Career Twin profile', 'User conversation input', 'Labor market taxonomies'],
    limitations: [
      'Cannot guarantee job market vacancies',
      'Not a therapist, doctor, or legal advisor',
      'Subject to potential generalization',
    ],
    riskTier: 'MODERATE',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-15',
  },
  {
    id: 'twin-extractor',
    capability: 'Career Twin Capability Extraction',
    purpose: 'Deconstruct unstructured user experiences into structured skills and evidence nodes.',
    aiRole: 'Semantic entity extraction & taxonomy alignment',
    outputType: 'SYNTHESIS',
    humanInvolvement: 'DIRECT_USER_CONTROL',
    dataUsed: ['User-uploaded project descriptions', 'Self-declared milestones', 'Coursework tags'],
    limitations: [
      'Dependent on user-provided accuracy',
      'Self-declared items tagged as unverified until evidence attached',
    ],
    riskTier: 'LOW',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-10',
  },
  {
    id: 'skill-gap',
    capability: 'Skill Gap & Bridge Analysis',
    purpose: 'Compare user capabilities against target occupation requirements.',
    aiRole: 'Comparative capability vector difference analysis',
    outputType: 'ADVISORY',
    humanInvolvement: 'DIRECT_USER_CONTROL',
    dataUsed: ['Career Twin skill vectors', 'Target role capability frameworks'],
    limitations: [
      'Does not account for unrecorded informal skills',
      'Occupation requirements reflect standard industry frameworks',
    ],
    riskTier: 'MODERATE',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-12',
  },
  {
    id: 'cv-assist',
    capability: 'CV & Evidence Articulation',
    purpose: 'Assist users in drafting bullet points and structuring career portfolios.',
    aiRole: 'Text drafting, grammar enhancement, action-verb structuring',
    outputType: 'DRAFT',
    humanInvolvement: 'DIRECT_USER_CONTROL',
    dataUsed: ['User-selected Career Passport artifacts', 'Target role context'],
    limitations: ['May generate overly formal language', 'Requires user factual verification'],
    riskTier: 'LOW',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-01',
  },
  {
    id: 'interview-sim',
    capability: 'Interview Preparation Simulation',
    purpose: 'Simulate conversational technical and behavioral interview scenarios.',
    aiRole: 'Interactive roleplay prompt generation & rubrics feedback',
    outputType: 'ADVISORY',
    humanInvolvement: 'DIRECT_USER_CONTROL',
    dataUsed: ['Target role title', 'Practice question parameters'],
    limitations: [
      'Simulated feedback is formative, not predictive of actual hiring outcomes',
      'Zero storage of biometric audio/video',
    ],
    riskTier: 'LOW',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-05',
  },
  {
    id: 'opp-match',
    capability: 'Opportunity Matching & Filtering',
    purpose: 'Match verified vacancies, events, and apprenticeships to student preferences.',
    aiRole: 'Multi-criteria relevance scoring and filtering',
    outputType: 'MATCH_SIGNAL',
    humanInvolvement: 'DIRECT_USER_CONTROL',
    dataUsed: ['User pathway preferences', 'Verified opportunity metadata', 'Geographic transit radius'],
    limitations: [
      'Paid promotion increases discovery visibility but never alters algorithmic relevance',
      'Does not guarantee application acceptance',
    ],
    riskTier: 'MODERATE',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-14',
  },
  {
    id: 'employer-agent',
    capability: 'Employer Agent Candidate Discovery',
    purpose: 'Assist enterprise talent teams in discovering candidates with matching capabilities.',
    aiRole: 'Capability-to-role semantic alignment scoring',
    outputType: 'MATCH_SIGNAL',
    humanInvolvement: 'MANDATORY_HUMAN_DECISION',
    dataUsed: ['Candidate-consented Career Passport evidence', 'Employer role capability brief'],
    limitations: [
      'Prohibited on minor candidates (under 18)',
      'Zero automated candidate rejection or elimination',
      'Human hiring manager retains sole hiring authority',
    ],
    riskTier: 'HEIGHTENED',
    governanceStatus: 'VERIFIED_ACTIVE',
    lastReviewed: '2026-08-16',
  },
];

export interface ModelProviderRecord {
  provider: string;
  providerDisplayName: string;
  modelFamily: string;
  purpose: string;
  capabilitiesUsed: string[];
  piiHandling: string;
  processingRegion: string;
  limitations: string;
  lastReview: string;
  status: 'ACTIVE' | 'EVALUATION';
}

export const MODEL_PROVIDER_DISCLOSURES: ModelProviderRecord[] = [
  {
    provider: 'google',
    providerDisplayName: 'Google Cloud Platform (Vertex AI)',
    modelFamily: 'Gemini 1.5 Pro / Gemini 1.5 Flash',
    purpose: 'Core conversational AI Mentor, pathway synthesis, and structured taxonomy extraction.',
    capabilitiesUsed: ['Natural Language Dialogue', 'Document Extraction', 'Taxonomy Mapping'],
    piiHandling: 'Enterprise terms apply: zero training on customer PII or conversational prompts.',
    processingRegion: 'UK / EU / US Data Residency Supported',
    limitations: 'High context window; potential edge-case generalization in obscure vocational niches.',
    lastReview: '2026-08-10',
    status: 'ACTIVE',
  },
  {
    provider: 'anthropic',
    providerDisplayName: 'Anthropic (Claude Enterprise)',
    modelFamily: 'Claude 3.5 Sonnet',
    purpose: 'Deep structured analysis, nuanced skill gap evaluation, and safety guardrail auditing.',
    capabilitiesUsed: ['Complex Reasoning', 'Capability Gap Comparison', 'Red-Team Auditing'],
    piiHandling: 'Zero retention on inference; zero training on candidate portfolio data.',
    processingRegion: 'US / EU Multi-Region',
    limitations: 'Strict safety alignment; occasional over-refusal on legitimate military/trade duty terms.',
    lastReview: '2026-08-08',
    status: 'ACTIVE',
  },
  {
    provider: 'openai',
    providerDisplayName: 'OpenAI (Enterprise Azure / Direct)',
    modelFamily: 'GPT-4o / GPT-4o-mini',
    purpose: 'Secondary fallback model for semantic matching and opportunity text extraction.',
    capabilitiesUsed: ['Semantic Similarity', 'Text Extraction', 'High-Speed Summarization'],
    piiHandling: 'Zero data retention for training; encrypted in-transit (TLS 1.3) and at-rest (AES-256).',
    processingRegion: 'US / UK Data Centers',
    limitations: 'Fast latency; fallback tier only for primary conversation.',
    lastReview: '2026-08-05',
    status: 'ACTIVE',
  },
];

export interface AIChangeLogRecord {
  date: string;
  version: string;
  capability: string;
  change: string;
  reason: string;
  impactTier: 'LOW' | 'MODERATE' | 'HEIGHTENED';
  governanceReviewer: string;
}

export const AI_CHANGE_LOG: AIChangeLogRecord[] = [
  {
    date: '2026-08-16',
    version: 'v2.4.1',
    capability: 'AI Career Mentor',
    change: 'Enhanced non-therapeutic guardrails with explicit signposting to accredited school counseling services.',
    reason: 'Safeguarding compliance alignment for secondary school institutional rollouts.',
    impactTier: 'MODERATE',
    governanceReviewer: 'Trust & Safety Review Board',
  },
  {
    date: '2026-08-10',
    version: 'v2.4.0',
    capability: 'Opportunity Agent',
    change: 'Implemented 5-stage opportunity governance pipeline separating paid promotions from algorithmic recommendations.',
    reason: 'Anti-pay-to-influence policy enforcement across employer vacancy distribution.',
    impactTier: 'HEIGHTENED',
    governanceReviewer: 'AI Ethics & Legal Compliance Council',
  },
  {
    date: '2026-08-02',
    version: 'v2.3.8',
    capability: 'Career Twin Extraction',
    change: 'Added explicit provenance badges distinguishing self-declared skills from verified credential evidence.',
    reason: 'Preventing resume overstatement while preserving exploratory student reflection.',
    impactTier: 'LOW',
    governanceReviewer: 'Product Architecture Group',
  },
  {
    date: '2026-07-20',
    version: 'v2.3.0',
    capability: 'Employer Agent',
    change: 'Hard-coded database Row-Level Security rule strictly excluding users under 18 from employer talent searches.',
    reason: 'Statutory child protection & zero recruiter minor cold-sourcing standard.',
    impactTier: 'HEIGHTENED',
    governanceReviewer: 'Chief Information Security Officer & Legal',
  },
];

export interface RegulatoryReferenceItem {
  framework: string;
  authority: string;
  category: string;
  relevance: string;
  officialUrl: string;
  governanceAlignment: string;
}

export const REGULATORY_REFERENCES: RegulatoryReferenceItem[] = [
  {
    framework: 'NIST AI Risk Management Framework (AI RMF 1.0)',
    authority: 'National Institute of Standards and Technology (U.S. Dept of Commerce)',
    category: 'AI Governance & Risk Mapping',
    relevance: 'Provides core structure for our Govern, Map, Measure, and Manage lifecycle. (Voluntary framework; not a certification).',
    officialUrl: 'https://www.nist.gov/itl/ai-risk-management-framework',
    governanceAlignment: 'Informs our 12-stage AI governance lifecycle and risk categorization.',
  },
  {
    framework: 'EEOC Technical Assistance on AI & Title VII',
    authority: 'U.S. Equal Employment Opportunity Commission',
    category: 'Employment Non-Discrimination',
    relevance: 'Guidance concerning algorithmic selection procedures, adverse impact ratios, and proxy variable discrimination.',
    officialUrl: 'https://www.eeoc.gov/ai',
    governanceAlignment: 'Prohibits protected characteristic inputs in employer matching algorithms.',
  },
  {
    framework: 'FTC Guidance on AI Claims, Bias & Deception',
    authority: 'U.S. Federal Trade Commission',
    category: 'Consumer Protection & Truthfulness',
    relevance: 'Prohibits unsubstantiated AI claims, deceptive automation, and unlabelled sponsored recommendations.',
    officialUrl: 'https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check',
    governanceAlignment: 'Enforces explicit labeling of paid promotions and candid limitation disclosures.',
  },
  {
    framework: 'U.S. Department of Education AI Policy',
    authority: 'Office of Educational Technology (U.S. Dept of Education)',
    category: 'Educational AI & Student Safety',
    relevance: 'Emphasizes human-in-the-loop education, equitable access, and safeguarding student privacy.',
    officialUrl: 'https://tech.ed.gov/ai-policy/',
    governanceAlignment: 'Guarantees educator pastoral priority and student sovereign account models.',
  },
  {
    framework: 'NYC Local Law 144 (Automated Employment Decision Tools)',
    authority: 'New York City Department of Consumer and Worker Protection',
    category: 'Automated Hiring Governance',
    relevance: 'Requires independent bias audits, candidate notice, and alternative evaluation options for automated employment tools.',
    officialUrl: 'https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page',
    governanceAlignment: 'Maintains mandatory human hiring manager decisions and candidate notice architecture.',
  },
];
