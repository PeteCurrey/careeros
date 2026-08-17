/**
 * How It Works Illustrative Data Models
 * Central data registry for /product/how-it-works
 * 
 * Defines structured illustrative datasets for:
 * - System Map Nodes (Twin, Mentor, Passport, Graph, Opportunity Agent, Employer Agent)
 * - 4 Starting Personas (Student, Professional, Career Changer, Founder)
 * - 5 Diverse Careers (Firefighter, Mechanic, Doctor, Lawyer, Logistics)
 * - Lifetime Career Milestones (Ages 16 to 50+)
 * - 8-Step "Career OS in Action" Guided Journey (Mechanical Technician)
 * - 3 Product Maturity Status Layers
 */

import { ROUTES } from '@/lib/routes';

// ─── 1. System Map Nodes ───────────────────────────────────────────────────────

export interface SystemNodeInfo {
  id: string;
  name: string;
  shortLabel: string;
  category: 'Core Context' | 'Guidance' | 'Evidence' | 'Possibility' | 'Discovery' | 'Employer Side';
  badge: string;
  headline: string;
  description: string;
  roleInSystem: string;
  href: string;
  isExternalToPrivateCore?: boolean;
}

export const SYSTEM_MAP_NODES: SystemNodeInfo[] = [
  {
    id: 'twin',
    name: 'Career Twin',
    shortLabel: 'Context Layer',
    category: 'Core Context',
    badge: 'Professional Context',
    headline: 'The structured professional context behind your career.',
    description: 'Brings together your experience, demonstrated capabilities, working preferences, constraints, and stated direction into an organized, private self-model.',
    roleInSystem: 'Serves as the foundation that informs the Mentor, anchors the Graph, and calibrates Opportunity Agent discovery.',
    href: ROUTES.PRODUCT_CAREER_TWIN,
  },
  {
    id: 'mentor',
    name: 'AI Career Mentor',
    shortLabel: 'Intelligent Guidance',
    category: 'Guidance',
    badge: 'Strategic Advisory',
    headline: 'Continuous, strategic guidance calibrated to your specific context.',
    description: 'Interprets your Career Twin context to turn complex career questions into concrete next steps, developmental actions, and interview preparation.',
    roleInSystem: 'Translates goals into high-impact developmental actions and helps navigate career decisions over years.',
    href: ROUTES.PRODUCT_AI_CAREER_MENTOR,
  },
  {
    id: 'passport',
    name: 'Career Passport',
    shortLabel: 'Evidence & Record',
    category: 'Evidence',
    badge: 'Verifiable Evidence',
    headline: 'A structured record of what you have demonstrated and achieved.',
    description: 'Carries your qualifications, project artifacts, verified credentials, and professional outcomes independently of any single employer.',
    roleInSystem: 'Turns developmental actions into tangible evidence that reinforces your Career Twin and backs opportunities.',
    href: ROUTES.PRODUCT_CAREER_PASSPORT,
  },
  {
    id: 'graph',
    name: 'Career Graph',
    shortLabel: 'Pathways & Mapping',
    category: 'Possibility',
    badge: 'Topology of Possibility',
    headline: 'Dynamic map of how skills, roles, and industries connect.',
    description: 'Maps transferable capability bridges and adjacent pathways across the economy, identifying non-obvious routes without title bias.',
    roleInSystem: 'Reveals where your capabilities can connect next and defines realistic bridge requirements.',
    href: ROUTES.PRODUCT_CAREER_GRAPH,
  },
  {
    id: 'opportunity',
    name: 'Opportunity Agent',
    shortLabel: 'Proactive Discovery',
    category: 'Discovery',
    badge: 'Future Product Direction',
    headline: 'Relevant opportunities discover you against your context and terms.',
    description: 'Designed to surface roles, internal moves, apprenticeships, secondments, and projects aligned with your Career Twin without requiring constant manual search.',
    roleInSystem: 'Brings relevant opportunities to your attention with clear explainable rationales while protecting identity.',
    href: ROUTES.PRODUCT_OPPORTUNITY_AGENT,
  },
  {
    id: 'employer',
    name: 'Employer Agent',
    shortLabel: 'Employer Side',
    category: 'Employer Side',
    badge: 'Two-Sided Architecture',
    headline: 'Helps organisations discover talent through capability and verified evidence.',
    description: 'Operates outside the individual’s private Career OS to match role requirements against authorised, permissioned candidate profiles.',
    roleInSystem: 'Facilitates evidence-based candidate introductions while preserving human decision authority on both sides.',
    href: ROUTES.PRODUCT_EMPLOYER_AGENT,
    isExternalToPrivateCore: true,
  },
];

// ─── 2. Four Starting Personas ────────────────────────────────────────────────

export interface StartingPersona {
  id: string;
  role: string;
  tagline: string;
  quote: string;
  startingChallenge: string;
  howCareerOSStarts: string[];
  initialOutcome: string;
}

export const STARTING_PERSONAS: StartingPersona[] = [
  {
    id: 'student',
    role: 'Student & Early Career',
    tagline: 'Finding early direction without resume anxiety',
    quote: '“I don’t know what I want to do yet — and I don’t have much experience to put on a CV.”',
    startingChallenge: 'Lacks formal work history, feels overwhelmed by generic job titles, and needs to understand how subjects connect to the real world.',
    howCareerOSStarts: [
      'Identifies natural interests, academic strengths, and practical project experiences.',
      'Maps non-linear educational tracks (University, Degree Apprenticeships, Technical College).',
      'Pairs with an AI Career Mentor calibrated for early career guidance and exploration.',
    ],
    initialOutcome: 'A foundational Career Twin that highlights emerging capability rather than an empty résumé.',
  },
  {
    id: 'professional',
    role: 'Established Professional',
    tagline: 'Breaking plateaus and unlocking next-level progression',
    quote: '“I’ve stopped progressing in my current role and need a structured plan for senior leadership.”',
    startingChallenge: 'Has deep domain experience but lacks clarity on how to bridge into executive responsibility or lateral strategic roles.',
    howCareerOSStarts: [
      'Ingests multi-year achievements and structures evidence of team impact in Career Passport.',
      'Evaluates leadership readiness through the Mentor and pinpoints specific capability bridges.',
      'Activates discrete opportunity posture to monitor executive pathways without alerting current employers.',
    ],
    initialOutcome: 'A strategic development roadmap focused on creating leadership evidence before chasing titles.',
  },
  {
    id: 'changer',
    role: 'Career Changer',
    tagline: 'Pivoting without starting from scratch',
    quote: '“I need something different, but I don’t want to throw away 8 years of hard work.”',
    startingChallenge: 'Trapped by narrow job title search keywords that dismiss transferable technical and managerial competencies.',
    howCareerOSStarts: [
      'Deconstructs rigid past job titles into underlying functional capability layers.',
      'Uses Career Graph topology to identify adjacent industries with strong transfer advantages.',
      'Identifies the exact bridge requirements (e.g. 1 certification vs 3-year degree) needed to transition.',
    ],
    initialOutcome: 'Clear visibility into high-overlap career pivots that honour prior seniority and skills.',
  },
  {
    id: 'founder',
    role: 'Future Founder',
    tagline: 'Turning technical mastery into a commercial venture',
    quote: '“I have deep domain expertise and think I could build something of my own.”',
    startingChallenge: 'Has outstanding technical execution skills but needs commercial grounding, co-founder alignment, and venture readiness.',
    howCareerOSStarts: [
      'Structures proprietary technical depth and domain IP inside the Career Passport.',
      'Uses the Mentor to pressure-test business models, commercial risks, and go-to-market milestones.',
      'Prepares context to connect with founder development programmes and early commercial accelerators.',
    ],
    initialOutcome: 'A dual-track strategy balancing current professional momentum with disciplined venture incubation.',
  },
];

// ─── 3. Five Diverse Careers ──────────────────────────────────────────────────

export interface DiverseCareer {
  id: string;
  title: string;
  sector: string;
  evidenceBase: string[];
  progressionPathways: string[];
  systemApplication: string;
}

export const DIVERSE_CAREERS: DiverseCareer[] = [
  {
    id: 'firefighter',
    title: 'Firefighter / Public Safety',
    sector: 'Public Safety & Emergency Services',
    evidenceBase: [
      'Incident Command System (ICS) certifications',
      'Dynamic risk assessment and hazard logging',
      'Multi-agency emergency response coordination',
      'Building safety and prevention inspection audits',
    ],
    progressionPathways: [
      'Station Command & Incident Commander',
      'Corporate Health, Safety & Environment (HSE) Director',
      'Civil Resilience & Emergency Planning Manager',
      'Critical Infrastructure Fire Risk Consultant',
    ],
    systemApplication: 'Deconstructs high-pressure operational leadership into commercial risk management and strategic safety competencies without losing public service value.',
  },
  {
    id: 'mechanic',
    title: 'Automotive & Mechanical Technician',
    sector: 'Skilled Trades & Electromechanical',
    evidenceBase: [
      'Complex electronic diagnostics and oscilloscope logs',
      'EV high-voltage battery system certifications',
      'Hydraulic and pneumatic mechanical servicing',
      'Workshop safety compliance and customer technical advisory',
    ],
    progressionPathways: [
      'Industrial Field Service Engineer',
      'EV Technical Fleet Trainer & Curriculum Specialist',
      'Robotics & PLC Automation Maintenance Specialist',
      'Independent Workshop Owner & Specialist',
    ],
    systemApplication: 'Converts practical hands-on diagnostic competence into industrial engineering, robotics, and training credentials.',
  },
  {
    id: 'doctor',
    title: 'Registered Physician / Doctor',
    sector: 'Healthcare & Clinical Practice',
    evidenceBase: [
      'Primary medical qualification & statutory licensing (GMC/State Board)',
      'Specialty training milestones & surgical logbooks',
      'Clinical audit leadership & patient safety improvements',
      'Peer-reviewed clinical research and clinical governance',
    ],
    progressionPathways: [
      'Hospital Consultant / Department Chief',
      'Clinical Director & Health System Executive',
      'HealthTech Medical Advisor / Clinical AI Evaluator',
      'Biomedical Innovation Clinical Investigator',
    ],
    systemApplication: 'Respects strict statutory regulatory boundaries while enabling doctors to structure clinical leadership and explore healthtech advisory paths.',
  },
  {
    id: 'lawyer',
    title: 'Commercial Legal Counsel',
    sector: 'Legal & Professional Services',
    evidenceBase: [
      'Juris Doctor / Solicitor qualifying credentials & bar admissions',
      'Cross-border commercial deal negotiation track record',
      'Regulatory compliance policies & risk frameworks drafted',
      'Executive board advisory & dispute resolution summaries',
    ],
    progressionPathways: [
      'In-House General Counsel & Corporate Secretary',
      'Chief Risk Officer (CRO) / Head of Regulatory Affairs',
      'Commercial Operations & Strategy Director',
      'LegalTech Venture Founder & Senior Policy Advisor',
    ],
    systemApplication: 'Structures contract negotiation, risk calibration, and governance experience into senior operational leadership profiles.',
  },
  {
    id: 'logistics',
    title: 'Military Logistics Specialist',
    sector: 'Defense & Global Supply Chain',
    evidenceBase: [
      'High-tempo theater supply chain distribution records',
      'Multimodal fleet asset management & material readiness',
      'Cross-functional team leadership under extreme constraints',
      'Operational contingency and crisis management frameworks',
    ],
    progressionPathways: [
      'Global Fulfillment & Supply Chain Operations Manager',
      'Disaster Relief & Humanitarian Logistics Lead',
      'Manufacturing Plant Operations Director',
      'Defense Sector Procurement & Programs Lead',
    ],
    systemApplication: 'Translates military operational discipline into enterprise supply chain, disaster response, and logistics leadership roles.',
  },
];

// ─── 4. Lifetime Career Milestones ─────────────────────────────────────────────

export interface LifetimeMilestone {
  age: string;
  lifePhase: string;
  centralQuestion: string;
  activeEngines: string[];
  systemRole: string;
}

export const LIFETIME_MILESTONES: LifetimeMilestone[] = [
  {
    age: '16',
    lifePhase: 'Early Exploration',
    centralQuestion: 'What subjects and career directions fit my natural strengths?',
    activeEngines: ['AI Career Mentor', 'Career Graph'],
    systemRole: 'Explores wide pathways without premature narrowing; maps educational tracks with zero resume anxiety.',
  },
  {
    age: '18',
    lifePhase: 'Educational Crossroads',
    centralQuestion: 'Should I pursue University, a Degree Apprenticeship, or direct employment?',
    activeEngines: ['AI Career Mentor', 'Career Graph', 'Career Twin'],
    systemRole: 'Compares debt, practical training, qualification paths, and industry access side-by-side.',
  },
  {
    age: '22',
    lifePhase: 'First Career Entry',
    centralQuestion: 'How do I translate my education and initial projects into real-world opportunities?',
    activeEngines: ['Career Passport', 'Career Twin', 'Opportunity Agent'],
    systemRole: 'Anchors applications with authentic project artifacts rather than superficial keyword resumes.',
  },
  {
    age: '27',
    lifePhase: 'Career Acceleration',
    centralQuestion: 'How do I accelerate my progression and earn senior technical or managerial scope?',
    activeEngines: ['Career Twin', 'AI Career Mentor', 'Career Passport'],
    systemRole: 'Helps identify specific leadership gaps and suggests stretch projects to build evidence before reviews.',
  },
  {
    age: '32',
    lifePhase: 'Strategic Pivot',
    centralQuestion: 'I want to change sectors — what transferable capabilities do I carry?',
    activeEngines: ['Career Graph', 'AI Career Mentor', 'Opportunity Agent'],
    systemRole: 'Deconstructs job title history into capability layers and highlights high-overlap transition bridges.',
  },
  {
    age: '37',
    lifePhase: 'Executive Leadership',
    centralQuestion: 'How do I prepare for departmental head, VP, or director-level responsibility?',
    activeEngines: ['AI Career Mentor', 'Career Twin', 'Career Passport'],
    systemRole: 'Prepares strategic frameworks, board-level communication, and executive governance evidence.',
  },
  {
    age: '43',
    lifePhase: 'Venture & Advisory',
    centralQuestion: 'Could I launch an independent business, advisory practice, or founder venture?',
    activeEngines: ['Career Passport', 'AI Career Mentor', 'Career Graph'],
    systemRole: 'Packages decades of verified domain authority into advisory assets and entrepreneurial blueprints.',
  },
  {
    age: '50+',
    lifePhase: 'Board, Legacy & Next Chapters',
    centralQuestion: 'How do I structure non-executive directorships, mentoring, or fractional leadership?',
    activeEngines: ['Career Passport', 'Career Twin', 'AI Career Mentor'],
    systemRole: 'Maintains an unshakeable lifelong record of verified career capital that compounds continuously.',
  },
];

// ─── 5. 8-Step "Career OS in Action" Case Study ───────────────────────────────

export interface JourneyStep {
  stepNumber: string;
  phaseTitle: string;
  engine: string;
  userContext: string;
  systemAction: string;
  visualArtifact: {
    type: 'profile' | 'twin' | 'mentor' | 'passport' | 'graph' | 'opportunity' | 'decision' | 'continuity';
    badge: string;
    title: string;
    details: string[];
    highlightQuote?: string;
  };
}

export const CAREER_OS_IN_ACTION_STEPS: JourneyStep[] = [
  {
    stepNumber: '01',
    phaseTitle: 'Current Position',
    engine: 'Starting Baseline',
    userContext: 'Automotive / Mechanical Technician with 5 years experience in workshop diagnostics, high-voltage EV battery maintenance, and customer communication.',
    systemAction: 'User creates a free personal account. Career OS does not ask for an uploaded generic CV to discard — it begins an initial context discovery dialog.',
    visualArtifact: {
      type: 'profile',
      badge: 'Initial Intake',
      title: 'Mechanical Technician Profile Baseline',
      details: [
        '5 Years Automotive Diagnostic Experience',
        'Certified Level 3 EV Powertrain & Battery Systems',
        'Daily customer technical translation & fault advisory',
        'Stated Goal: Transition to Industrial Engineering & Leadership',
      ],
      highlightQuote: '“I want to move beyond workshop servicing into broader technical engineering, but job boards only recommend garage mechanic jobs.”',
    },
  },
  {
    stepNumber: '02',
    phaseTitle: 'Career Twin Structures Context',
    engine: 'Career Twin',
    userContext: 'Career OS organizes raw work history into 5 structured capability layers rather than a flat chronological text list.',
    systemAction: 'Career Twin synthesizes diagnostic capabilities, electronic troubleshooting, workshop safety compliance, and customer advisory into a private personal context model.',
    visualArtifact: {
      type: 'twin',
      badge: 'Context Synthesis',
      title: 'Deconstructed Capability Model',
      details: [
        'Diagnostic Systems: Advanced CAN-bus & electronic oscilloscope analysis',
        'Electromechanical: High-voltage battery systems & precision mechanical tear-down',
        'Communication: Translating complex mechanical failures for non-technical clients',
        'Safety & Compliance: Workshop health, safety, and hazardous material protocols',
      ],
      highlightQuote: 'Career Twin is private. It is not an employer-facing resume, but the living intelligence model behind your career.',
    },
  },
  {
    stepNumber: '03',
    phaseTitle: 'AI Mentor Suggests Strategic Action',
    engine: 'AI Career Mentor',
    userContext: 'User asks the Mentor: “Should I take another technical certification, or how do I get into leadership?”',
    systemAction: 'Mentor analyzes Career Twin context. It notes technical capability is already top-tier, but leadership evidence is missing. It advises against redundant technical courses.',
    visualArtifact: {
      type: 'mentor',
      badge: 'Strategic Recommendation',
      title: 'Mentor Guidance Rationale',
      details: [
        'Observation: Technical diagnostic credibility is well-evidenced.',
        'Gap Identified: Zero documented project leadership or team coordination evidence.',
        'Actionable Recommendation: Lead a shop-floor diagnostic reliability audit project rather than spending £2,000 on another technical cert.',
      ],
      highlightQuote: '“Create leadership evidence inside your current environment before chasing another technical qualification.”',
    },
  },
  {
    stepNumber: '04',
    phaseTitle: 'Project Action Creates Evidence',
    engine: 'Career Passport',
    userContext: 'User volunteers to lead a 3-month shop reliability initiative, creating a standardized EV diagnostic triage protocol for 6 apprentices.',
    systemAction: 'Project is completed. User records the structured deliverable, training logs, and shop manager sign-off into their Career Passport.',
    visualArtifact: {
      type: 'passport',
      badge: 'Structured Evidence',
      title: 'Verified Artifact: Shop Triage Protocol',
      details: [
        'Artifact: Standardized EV High-Voltage Diagnostic Workflow',
        'Scope: Implemented across 12 workshop bays; trained 6 junior technicians',
        'Measured Outcome: 28% reduction in diagnostic turn-around time over 90 days',
        'Evidence State: Evidence Attached with employer milestone endorsement',
      ],
      highlightQuote: 'The résumé tells the story. The Career Passport carries the verifiable supporting record.',
    },
  },
  {
    stepNumber: '05',
    phaseTitle: 'Career Graph Maps Possibilities',
    engine: 'Career Graph',
    userContext: 'With new leadership and process evidence recorded, Career Graph recalculates adjacent industry connections.',
    systemAction: 'Graph topology highlights 4 adjacent directions that value both electromechanical troubleshooting and workflow leadership.',
    visualArtifact: {
      type: 'graph',
      badge: 'Topology Mapping',
      title: 'Adjacent Career Destinations Unlocked',
      details: [
        'Industrial Field Service Engineer (Strong Transfer — 85% overlap)',
        'EV Technical Fleet Trainer (Strong Transfer — Teaching bridge attached)',
        'Robotics & Automation Maintenance Specialist (Additional PLC training likely)',
        'Technical Services Supervisor (Direct Leadership Bridge met)',
      ],
      highlightQuote: 'Career Graph shows possibility — not algorithmic destiny. You choose which directions align with your life.',
    },
  },
  {
    stepNumber: '06',
    phaseTitle: 'Relevant Opportunity Surfaces',
    engine: 'Opportunity Agent',
    userContext: 'An illustrative Field Service Engineer position from an industrial systems manufacturer matches the updated context.',
    systemAction: 'Opportunity Agent surfaces the opportunity directly to the user with an explicit qualitative explanation of why it connected.',
    visualArtifact: {
      type: 'opportunity',
      badge: 'Explainable Match',
      title: 'Field Service Engineer — Northstar Systems',
      details: [
        'Why Surfaced: Advanced diagnostics + customer communication + demonstrated training leadership',
        'Transfer Advantage: Systematic troubleshooting methodology directly transfers',
        'Bridge Requirement: Industrial plant equipment familiarization (on-the-job module)',
        'Unknowns: Travel radius and on-call shift allowances need user verification',
      ],
      highlightQuote: 'No fake 94% fit scores. A transparent, plain-English breakdown of why this role aligns with your evidence.',
    },
  },
  {
    stepNumber: '07',
    phaseTitle: 'User Retains Absolute Control',
    engine: 'Privacy Boundary',
    userContext: 'The user reviews the explanation. Their identity has NOT been disclosed to Northstar Systems.',
    systemAction: 'The user has 4 discrete options: Ignore, Save for later, Explore pathway bridge, or Authorize targeted introduction.',
    visualArtifact: {
      type: 'decision',
      badge: 'Permission Gate',
      title: 'User-Governed Introduction Gate',
      details: [
        'Employer Sees: Anonymized competence summary and verified diagnostic artifacts',
        'Private Context Shielded: Private Mentor chats and salary history are completely protected',
        'Action: User clicks “Express Interest & Share EV Protocol Artifact”',
      ],
      highlightQuote: 'Relevance first. Identity and selective evidence only when you explicitly decide to share.',
    },
  },
  {
    stepNumber: '08',
    phaseTitle: 'The System Continues After the Job',
    engine: 'Continuous Compounding',
    userContext: 'User successfully secures the Field Service Engineer role. Career OS does not reset or say goodbye.',
    systemAction: 'Career Twin updates baseline. Mentor shifts focus to the first 90 days, industrial safety protocols, and 3-year path to Regional Operations Manager.',
    visualArtifact: {
      type: 'continuity',
      badge: 'Lifelong Compounding',
      title: 'Compounding Career Intelligence',
      details: [
        'Day 1-90 Guidance: Navigating industrial plant environments and client SLA management',
        'Career Twin Updated: Automotive baseline elevated to Enterprise Industrial Systems',
        'Passport Expanded: First industrial installation project logged as verified artifact',
        'Next Horizon: Operations Management pathway mapping initiated for 2028',
      ],
      highlightQuote: 'One action changed the evidence. The evidence changed the context. The context changed the possibilities.',
    },
  },
];

// ─── 6. Product Status Layers ──────────────────────────────────────────────────

export interface ProductStatusLayer {
  tier: 'AVAILABLE / CURRENT' | 'IN ACTIVE DEVELOPMENT' | 'PRODUCT DIRECTION';
  badgeColor: string;
  description: string;
  features: {
    name: string;
    status: string;
    details: string;
  }[];
}

export const PRODUCT_STATUS_LAYERS: ProductStatusLayer[] = [
  {
    tier: 'AVAILABLE / CURRENT',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    description: 'Features deployed and accessible today in the live Career OS platform environment.',
    features: [
      {
        name: 'Structured Profile & Goals Intake',
        status: 'Live',
        details: 'Multi-stage discovery intake capturing stage, education, skills, interests, and working constraints.',
      },
      {
        name: 'AI Career Mentor Conversational Guidance',
        status: 'Live',
        details: 'Interactive AI coaching dialogue addressing career questions, progression planning, and interview prep.',
      },
      {
        name: 'Career Passport Artifact Logging',
        status: 'Live',
        details: 'Structured recording of qualifications, project samples, self-declared skills, and outcome documentation.',
      },
      {
        name: 'Editorial Interactive Pathway Explorers',
        status: 'Live',
        details: 'Illustrative capability deconstruction, transfer tier models, and cross-industry connectivity demos.',
      },
    ],
  },
  {
    tier: 'IN ACTIVE DEVELOPMENT',
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    description: 'Approved architecture and platform components currently being built and tested in staging.',
    features: [
      {
        name: 'Dynamic Career Twin Multi-Year Persistence',
        status: 'Staging / QA',
        details: 'Long-term context memory preserving developmental history and evolving goals across multi-year sessions.',
      },
      {
        name: 'Cryptographic Credential Verification Protocol',
        status: 'Integration',
        details: 'Institutional and employer verification workflows for issuing tamper-evident Passport credentials.',
      },
      {
        name: 'Comprehensive Career Graph Ontology Engine',
        status: 'Data Engineering',
        details: 'Extensive labour market graph integrating thousands of role nodes, qualification bridges, and skill maps.',
      },
    ],
  },
  {
    tier: 'PRODUCT DIRECTION',
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    description: 'Strategic platform capabilities representing the long-term Career OS vision.',
    features: [
      {
        name: 'Autonomous Opportunity Agent Proactive Discovery',
        status: 'Architecture',
        details: 'Passive, privacy-preserving opportunity surfacing based on Career Twin context without manual search.',
      },
      {
        name: 'Employer Agent Two-Sided Sourcing Protocol',
        status: 'Architecture',
        details: 'Employer-side capability discovery matching verified evidence with human interview authority.',
      },
      {
        name: 'Global Cross-Border Licensing & Relocation Matching',
        status: 'Research',
        details: 'International regulatory qualification recognition mapping and visa eligibility verification.',
      },
    ],
  },
];
