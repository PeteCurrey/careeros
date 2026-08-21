/**
 * Opportunity Agent Illustrative Demo Data
 *
 * Contains illustrative professional profiles and example opportunity connections
 * to demonstrate the Opportunity Agent product concept.
 *
 * IMPORTANT: All organizations named are fictional. All opportunities are illustrative.
 * This data does not represent live vacancies, a production matching engine,
 * or a real employer network. No real employer brands are used.
 *
 * Claim status: ILLUSTRATIVE / DESIGNED_DIRECTION
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type OpportunityCategory =
  | 'Employment'
  | 'Internal Move'
  | 'Training & Qualification'
  | 'Apprenticeship'
  | 'Internship'
  | 'Mentorship'
  | 'Leadership'
  | 'Project'
  | 'Secondment'
  | 'Entrepreneurship'
  | 'International';

export type OpportunityRelevance =
  | 'Strong existing overlap'
  | 'Adjacent career direction'
  | 'Leadership bridge'
  | 'Requires additional qualification'
  | 'Exploratory opportunity';

export interface OpportunityWhySurfaced {
  existingContext: string[];        // what from their background connects
  careerDirection: string;          // stated direction alignment
  bridge: string[];                 // what may still be required
  unknowns: string[];               // what Career OS doesn't know yet
}

export interface IllustrativeOpportunity {
  id: string;
  title: string;
  organization: string;            // fictional
  category: OpportunityCategory;
  relevance: OpportunityRelevance;
  summary: string;
  whySurfaced: OpportunityWhySurfaced;
  userControls: string[];          // illustrative only — not implemented
}

export interface OpportunityProfile {
  id: string;
  title: string;
  shortTitle: string;
  sector: string;
  context: string[];               // existing capabilities/experience
  direction: string;               // stated career direction
  posture: string;                 // opportunity posture
  opportunities: IllustrativeOpportunity[];
}

// ─── Profiles ─────────────────────────────────────────────────────────────────

export const OPPORTUNITY_PROFILES: OpportunityProfile[] = [
  // ── Profile 1: Automotive Technician ──────────────────────────────────────
  {
    id: 'automotive-technician',
    title: 'Automotive / Mechanical Technician',
    shortTitle: 'Auto Technician',
    sector: 'Skilled Trades',
    context: [
      'Vehicle diagnostics & fault analysis',
      'Electrical & electronic systems',
      'Customer communication & technical explanation',
      'EV charging & battery systems training',
      'Workshop safety & compliance',
      'Technical documentation',
    ],
    direction: 'Move toward broader technical engineering outside the workshop environment.',
    posture: 'Open to exceptional opportunities',
    opportunities: [
      {
        id: 'field-service-engineer',
        title: 'Field Service Engineer',
        organization: 'Northstar Industrial Systems',
        category: 'Employment',
        relevance: 'Strong existing overlap',
        summary:
          'Technical site-based role supporting industrial equipment installation, fault diagnosis, and customer maintenance programs.',
        whySurfaced: {
          existingContext: [
            'Diagnostics and fault-finding background',
            'Electromechanical system experience',
            'Customer-facing technical communication',
            'Systematic approach to equipment failure',
          ],
          careerDirection:
            'Directly aligns with stated interest in field-based technical work outside the workshop.',
          bridge: [
            'Industrial equipment exposure (commercial vs automotive) may still be required',
            'Health & safety certification for industrial site entry',
          ],
          unknowns: [
            'Specific equipment types used by this organization',
            'Travel requirements and territory coverage',
            'Whether automotive-to-industrial transition is considered for this role',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'ev-technical-trainer',
        title: 'EV Technical Trainer',
        organization: 'Meridian Technical Education',
        category: 'Employment',
        relevance: 'Adjacent career direction',
        summary:
          'Deliver EV and hybrid vehicle training to technicians, apprentices, and fleet operatives across automotive and transport sectors.',
        whySurfaced: {
          existingContext: [
            'EV charging and battery systems training completed',
            'Strong practical technical knowledge',
            'Experience explaining technical concepts to customers',
            'Workshop-level competence transferable to practical delivery',
          ],
          careerDirection:
            'Moves out of workshop environment while building on existing EV expertise.',
          bridge: [
            'Formal training or teaching qualification (e.g. PTLLS/AET) may be required',
            'Structured curriculum design experience likely needed',
            'Evidence of formal knowledge transfer to others would strengthen application',
          ],
          unknowns: [
            'Whether prior teaching qualification is essential or preferred',
            'Level of EV certification expected',
            'Whether part-time/contract arrangements are available',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'maintenance-technician-industrial',
        title: 'Maintenance Technician',
        organization: 'Civic Infrastructure Group',
        category: 'Employment',
        relevance: 'Adjacent career direction',
        summary:
          'Planned and reactive maintenance of mechanical and electrical systems within public infrastructure and facilities.',
        whySurfaced: {
          existingContext: [
            'Mechanical systems maintenance background',
            'Fault-finding and repair methodology',
            'Electrical and electronic systems competence',
            'Safety-conscious working practice',
          ],
          careerDirection:
            'Broadens technical scope beyond automotive while retaining hands-on engineering work.',
          bridge: [
            'Industrial maintenance systems (HVAC, pumps, plant) differ from vehicle systems',
            'Facilities management context is distinct from workshop environment',
            'Relevant maintenance certification (e.g. IOSH, NEBOSH) may be expected',
          ],
          unknowns: [
            'Specific systems covered in this role',
            'Whether automotive-sector candidates have been considered previously',
            'Shift pattern and site requirements',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
    ],
  },

  // ── Profile 2: Registered Nurse ───────────────────────────────────────────
  {
    id: 'registered-nurse',
    title: 'Registered Nurse',
    shortTitle: 'Reg. Nurse',
    sector: 'Healthcare',
    context: [
      'Clinical assessment & patient care',
      'Medication management & administration',
      'Multi-disciplinary team coordination',
      'Ward leadership (Band 6 equivalent)',
      'Clinical risk documentation',
      'Patient & family communication',
    ],
    direction: 'Move into healthcare leadership and operational management.',
    posture: 'Exploring',
    opportunities: [
      {
        id: 'clinical-services-manager',
        title: 'Clinical Services Manager',
        organization: 'Harbour Health Group',
        category: 'Leadership',
        relevance: 'Leadership bridge',
        summary:
          'Operational management of clinical services across a multi-site healthcare provider, including staffing, governance, and quality.',
        whySurfaced: {
          existingContext: [
            'Ward leadership experience at senior clinical level',
            'Clinical governance and risk documentation background',
            'Multi-disciplinary team coordination',
            'Deep understanding of clinical environment and patient safety',
          ],
          careerDirection:
            'Directly aligns with stated direction toward healthcare leadership and operations.',
          bridge: [
            'Formal management qualification (e.g. Level 5 CMI, NHS Leadership Academy) may be required',
            'Budget and financial oversight experience often expected',
            'Moving from clinical to operational management is a recognized bridge step',
          ],
          unknowns: [
            'Whether clinical registration is required in this role',
            "Organization's expectations around management vs clinical mix",
            'Whether internal or external candidates are preferred',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'healthcare-quality-lead',
        title: 'Healthcare Quality & Safety Lead',
        organization: 'Meridian Health Systems',
        category: 'Employment',
        relevance: 'Strong existing overlap',
        summary:
          'Lead quality improvement, clinical audit, and patient safety programs across a healthcare network.',
        whySurfaced: {
          existingContext: [
            'Clinical risk awareness and documentation practice',
            'Patient safety culture embedded through clinical background',
            'Experience with clinical governance processes',
            'Understanding of regulatory standards in healthcare',
          ],
          careerDirection:
            'Moves toward strategic quality function while retaining clinical credibility.',
          bridge: [
            'Formal quality improvement methodology training (e.g. IHI, LEAN) likely beneficial',
            'Audit design and data analysis skills may need development',
            'Broader organizational scope than ward/department level',
          ],
          unknowns: [
            'Whether this role requires active clinical registration',
            'Scope of audit responsibility (local vs system-wide)',
            'Reporting structure and seniority level',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'health-operations-coordinator',
        title: 'Health Operations Coordinator',
        organization: 'Civic Resilience Partnership',
        category: 'Employment',
        relevance: 'Adjacent career direction',
        summary:
          'Coordinate health service delivery and emergency preparedness across a regional public health partnership.',
        whySurfaced: {
          existingContext: [
            'Operational coordination in clinical settings',
            'Multi-agency awareness through NHS environment',
            'Patient flow and capacity management experience',
            'Communication across teams and organizations',
          ],
          careerDirection: 'Broadens into public sector operations while leveraging clinical background.',
          bridge: [
            'Broader public sector / non-clinical operational exposure may be expected',
            'Emergency planning awareness may require formal training',
            'Relationship management at a strategic rather than clinical level',
          ],
          unknowns: [
            'Whether clinical background is advantageous or less relevant',
            'Whether part-time or flexible working is available',
            'Specific emergency planning scope of this role',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
    ],
  },

  // ── Profile 3: Military Logistics Specialist ──────────────────────────────
  {
    id: 'military-logistics',
    title: 'Military Logistics Specialist',
    shortTitle: 'Military Logistics',
    sector: 'Defense & Logistics',
    context: [
      'End-to-end supply chain coordination',
      'Resource planning under operational pressure',
      'Team leadership & personnel management',
      'International logistics operations',
      'Risk and contingency planning',
      'Cross-functional stakeholder management',
    ],
    direction: 'Transition into commercial operations and supply chain leadership.',
    posture: 'Actively looking',
    opportunities: [
      {
        id: 'operations-manager-industrial',
        title: 'Operations Manager',
        organization: 'Northstar Industrial Systems',
        category: 'Employment',
        relevance: 'Strong existing overlap',
        summary:
          'Lead operational delivery across manufacturing and logistics functions, including team performance, process efficiency, and supply coordination.',
        whySurfaced: {
          existingContext: [
            'Resource coordination and logistics management at scale',
            'Team leadership under pressure conditions',
            'Planning and contingency thinking',
            'Cross-functional stakeholder coordination',
          ],
          careerDirection:
            'Directly targets commercial operations leadership — a common and well-evidenced military transition pathway.',
          bridge: [
            'Commercial operations environment differs from military logistics context',
            'P&L and budget management experience typically expected',
            'Familiarity with manufacturing or industrial sector processes',
          ],
          unknowns: [
            'Specific sector knowledge required for this operations environment',
            'Whether prior commercial experience is required alongside military background',
            'Team size and scope of this role',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'supply-chain-coordinator',
        title: 'Supply Chain Coordinator',
        organization: 'Meridian Global Logistics',
        category: 'Employment',
        relevance: 'Strong existing overlap',
        summary:
          'Manage end-to-end supply chain processes across international distribution networks, ensuring efficiency and continuity.',
        whySurfaced: {
          existingContext: [
            'End-to-end logistics coordination in complex operational environments',
            'International supply chain awareness',
            'Process planning and resource allocation',
            'Operational documentation and compliance',
          ],
          careerDirection: 'Core commercial equivalent of existing military logistics function.',
          bridge: [
            'Commercial procurement and supplier relationship management',
            'ERP/supply chain software proficiency may be required',
            'Commercial negotiation and contract awareness',
          ],
          unknowns: [
            'Software platform used (SAP, Oracle, etc.)',
            'Whether CILT qualification is preferred',
            'International travel expectations',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'emergency-planning-advisor',
        title: 'Emergency Planning Advisor',
        organization: 'Civic Resilience Partnership',
        category: 'Employment',
        relevance: 'Adjacent career direction',
        summary:
          'Develop, test, and advise on emergency response plans for public sector organizations and critical infrastructure.',
        whySurfaced: {
          existingContext: [
            'Operational coordination during complex and high-pressure events',
            'Crisis management and contingency planning experience',
            'Multi-agency working and communication',
            'Risk identification and mitigation planning',
          ],
          careerDirection:
            'Applies military risk and planning capability within a public-sector context.',
          bridge: [
            'Formal emergency planning qualification (e.g. NEBOSH, EPD CertEP) may be required',
            'Civil resilience framework familiarity (Civil Contingencies Act) likely expected',
            'Public sector and local authority working environment differs from military',
          ],
          unknowns: [
            'Whether security clearance background is advantageous or a barrier',
            'Qualification requirements vs experience-based entry',
            'Whether this role includes senior advisory or junior analyst pathway',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
    ],
  },

  // ── Profile 4: Commercial Lawyer ──────────────────────────────────────────
  {
    id: 'commercial-lawyer',
    title: 'Commercial Lawyer',
    shortTitle: 'Commercial Lawyer',
    sector: 'Legal & Professional Services',
    context: [
      'Contract negotiation and drafting',
      'Commercial risk analysis and mitigation',
      'Regulatory compliance and governance',
      'Stakeholder and board-level communication',
      'Cross-border commercial transactions',
      'Legal team coordination and client management',
    ],
    direction: 'Move into in-house strategy or commercial leadership roles.',
    posture: 'Open to exceptional opportunities',
    opportunities: [
      {
        id: 'head-of-legal-risk',
        title: 'Head of Legal & Risk',
        organization: 'Northstar Industrial Systems',
        category: 'Employment',
        relevance: 'Strong existing overlap',
        summary:
          'Lead in-house legal and risk function for a mid-market industrial business, covering contracts, compliance, disputes, and strategic risk governance.',
        whySurfaced: {
          existingContext: [
            'Commercial contract expertise directly applicable',
            'Risk analysis embedded in legal advisory practice',
            'Regulatory compliance and governance background',
            'Board and stakeholder communication experience',
          ],
          careerDirection:
            'In-house general counsel / legal leadership role is the most common next step for senior commercial lawyers seeking operational influence.',
          bridge: [
            'Sector-specific regulation (industrial, manufacturing, environmental) may require familiarisation',
            'In-house environment differs from private practice in scope and pace',
            'Board-level risk governance may exceed prior experience depending on seniority',
          ],
          unknowns: [
            'Sector compliance knowledge required (industrial/environmental regulation)',
            'Whether this is a standalone role or leads a team',
            'Reporting structure (CFO/CEO direct report or board-level)',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'commercial-director-strategy',
        title: 'Commercial Director',
        organization: 'Meridian Operations',
        category: 'Employment',
        relevance: 'Leadership bridge',
        summary:
          'Lead commercial strategy, partnerships, and revenue operations for a growing services business.',
        whySurfaced: {
          existingContext: [
            'Commercial negotiation and deal-making background',
            'Risk identification in commercial context',
            'Client and stakeholder relationship management',
            'Strategic commercial advice to senior leadership',
          ],
          careerDirection:
            'Directly targets strategy and commercial leadership — an increasingly common destination for senior commercial lawyers.',
          bridge: [
            'P&L ownership and financial management experience typically required',
            'Moving from legal to commercial leadership is a recognized but significant bridge',
            'Sales, partnerships, and revenue operations are distinct from legal advisory',
          ],
          unknowns: [
            'Revenue / team scale of this role',
            'Whether legal background is advantageous or seen as insufficiently commercial',
            'Whether an MBA or equivalent is preferred',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
      {
        id: 'compliance-ethics-lead',
        title: 'Compliance & Ethics Lead',
        organization: 'Civic Standards Institute',
        category: 'Employment',
        relevance: 'Strong existing overlap',
        summary:
          'Design and operate compliance and ethics programs for a public interest standards body, covering governance, policy, and professional conduct.',
        whySurfaced: {
          existingContext: [
            'Regulatory compliance and governance practice',
            'Legal interpretation and policy application',
            'Professional conduct frameworks awareness',
            'Stakeholder communication across complex organizations',
          ],
          careerDirection: 'Moves legal expertise into an operational compliance leadership context.',
          bridge: [
            'Operational compliance program management (vs legal advisory) is a distinct practice',
            'Public interest and standards body environment differs from commercial context',
            'ICA or equivalent compliance qualification may be beneficial',
          ],
          unknowns: [
            'Whether practising certificate/regulated status is required',
            'Scope of ethics vs compliance in this particular role',
            'Whether this is a policy advisory or operational delivery function',
          ],
        },
        userControls: ['Ignore', 'Save for later', 'Explore pathway', 'Express interest'],
      },
    ],
  },
];

// ─── Opportunity Type Categories (Section 05) ─────────────────────────────────

export interface OpportunityTypeItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  track: 'core' | 'development' | 'alternative';
}

export const OPPORTUNITY_TYPES: OpportunityTypeItem[] = [
  { id: 'employment', label: 'Employment', description: 'Full-time, part-time or contract roles matching your capabilities and direction.', icon: '💼', track: 'core' },
  { id: 'internal-move', label: 'Internal Move', description: 'Lateral or upward opportunities within your current organization.', icon: '🔄', track: 'core' },
  { id: 'secondment', label: 'Secondment', description: 'Temporary placement to build evidence in a target area.', icon: '📌', track: 'development' },
  { id: 'leadership', label: 'Leadership', description: 'Stretch responsibility, step-up roles, or senior development tracks.', icon: '📈', track: 'development' },
  { id: 'apprenticeship', label: 'Apprenticeship', description: 'Formal training with employment in a new sector or discipline.', icon: '🎓', track: 'alternative' },
  { id: 'internship', label: 'Internship', description: 'Structured early-career experience building foundational evidence.', icon: '🌱', track: 'alternative' },
  { id: 'training', label: 'Training & Qualification', description: 'A qualification or certification that unlocks a bridge requirement.', icon: '📚', track: 'development' },
  { id: 'mentorship', label: 'Mentorship', description: 'Development opportunity with an experienced professional in a target area.', icon: '🤝', track: 'development' },
  { id: 'project', label: 'Project', description: 'A specific piece of work that builds missing evidence.', icon: '⚡', track: 'development' },
  { id: 'entrepreneurship', label: 'Entrepreneurship', description: 'Founder programs, accelerators, or commercial learning pathways.', icon: '🚀', track: 'alternative' },
  { id: 'international', label: 'International', description: 'Roles or opportunities in other jurisdictions where eligibility is understood.', icon: '🌍', track: 'alternative' },
];
