/**
 * Career Graph Illustrative Demo Data
 * Contains representative career pathways, core capabilities, bridge requirements,
 * and transferable advantages across diverse disciplines.
 * 
 * Note: These are illustrative models demonstrating product concepts and
 * do not represent a production labor-market database or definitive ontology.
 */

export interface GraphCapability {
  id: string;
  name: string;
  category: string;
  description: string;
}

export type TransferTier =
  | 'Strong Transfer'
  | 'Additional Training Likely'
  | 'Leadership Bridge'
  | 'Qualification Required';

export interface GraphDestination {
  id: string;
  title: string;
  industry: string;
  transferTier: TransferTier;
  transferAdvantage: string;
  bridgeRequirements: string[];
  whyItConnects: string;
  typicalTimeframe: string;
  keyConsiderations: string;
}

export interface ProfessionGraph {
  id: string;
  title: string;
  shortTitle: string;
  domain: string;
  category: 'Public Safety' | 'Skilled Trades' | 'Healthcare' | 'Legal & Compliance' | 'Defense & Logistics' | 'Engineering & Tech';
  description: string;
  startingContext: string;
  capabilities: GraphCapability[];
  destinations: GraphDestination[];
}

export const CAREER_GRAPH_PROFESSIONS: ProfessionGraph[] = [
  {
    id: 'firefighter',
    title: 'Firefighter / Emergency Services',
    shortTitle: 'Firefighter',
    domain: 'Public Safety & Emergency Services',
    category: 'Public Safety',
    description: 'Frontline emergency responder trained in dynamic incident management, high-risk decision making, operational safety, and community risk mitigation.',
    startingContext: 'Deep practical background in rapid risk evaluation, command structures, physical operations, and team coordination under extreme pressure.',
    capabilities: [
      {
        id: 'incident-command',
        name: 'Incident Command & Coordination',
        category: 'Operations',
        description: 'Managing complex high-stakes events, assigning multi-agency resources, and coordinating tactical response teams.',
      },
      {
        id: 'dynamic-risk',
        name: 'Dynamic Risk Assessment',
        category: 'Safety',
        description: 'Real-time hazard identification, atmospheric risk evaluation, structural safety monitoring, and mitigation planning.',
      },
      {
        id: 'crisis-comms',
        name: 'Crisis & Multi-Agency Communication',
        category: 'Communication',
        description: 'Communicating critical instructions across emergency services, local authorities, public stakeholders, and victims.',
      },
      {
        id: 'preventative-safety',
        name: 'Fire Prevention & Safety Auditing',
        category: 'Compliance',
        description: 'Inspecting commercial and residential premises, reviewing building egress compliance, and identifying hazard violations.',
      },
      {
        id: 'team-leadership',
        name: 'Team Leadership & Resilience',
        category: 'Leadership',
        description: 'Leading tactical crew units, mentoring recruits, and maintaining psychological resilience during prolonged crisis operations.',
      },
    ],
    destinations: [
      {
        id: 'fire-safety-inspector',
        title: 'Fire Safety Inspector / Consultant',
        industry: 'Built Environment & Compliance',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Direct knowledge of fire dynamics, structural containment, alarm systems, and practical building safety codes.',
        bridgeRequirements: [
          'Formal certification in Fire Risk Assessment (e.g. IFE / NEBOSH Fire Certificate)',
          'Commercial building code and legal liability documentation experience',
        ],
        whyItConnects: 'Transitions frontline suppression knowledge into proactive commercial architecture, property risk management, and compliance auditing.',
        typicalTimeframe: '3–6 months certification',
        keyConsiderations: 'Moves from shift-based physical response to regular commercial consulting and structured inspections.',
      },
      {
        id: 'emergency-planning-mgr',
        title: 'Emergency Planning & Resilience Manager',
        industry: 'Local Government & Critical Infrastructure',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Incident command experience, multi-agency operational familiarity, and disaster mitigation expertise.',
        bridgeRequirements: [
          'Civil contingencies framework knowledge (e.g. ISO 22301 or local statutory frameworks)',
          'Strategic municipal budgeting and long-term disaster simulation planning',
        ],
        whyItConnects: 'Expands tactical field command into organizational continuity, municipal flood/crisis defense, and multi-agency resilience strategy.',
        typicalTimeframe: '6–12 months transition',
        keyConsiderations: 'Highly valued in transport authorities, airports, utility providers, and municipal emergency management departments.',
      },
      {
        id: 'health-safety-lead',
        title: 'Corporate Health & Safety Manager',
        industry: 'Construction, Energy & Manufacturing',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Uncompromising safety mindset, incident investigation expertise, and risk assessment rigor.',
        bridgeRequirements: [
          'Recognized occupational health & safety diploma (e.g. NEBOSH Diploma / CSP certification)',
          'Corporate environmental management and statutory reporting systems exposure',
        ],
        whyItConnects: 'Industrial employers prioritize candidates with real-world hazard experience who can build a genuine culture of safety rather than just paper compliance.',
        typicalTimeframe: '6–12 months study & transition',
        keyConsiderations: 'High commercial demand across heavy engineering, renewable energy, and major logistics hubs.',
      },
      {
        id: 'operations-director',
        title: 'High-Reliability Operations Manager',
        industry: 'Logistics, Aviation & Critical Utilities',
        transferTier: 'Leadership Bridge',
        transferAdvantage: 'Team leadership under pressure, 24/7 rota coordination, and crisis problem-solving.',
        bridgeRequirements: [
          'Commercial operational KPI management and financial budget ownership',
          'Supply chain workflow or enterprise operations management methodologies',
        ],
        whyItConnects: 'Critical infrastructure operators value leaders trained in high-reliability organizations where operational failure is not an option.',
        typicalTimeframe: '12–18 months progressive milestone',
        keyConsiderations: 'Requires demonstrating commercial revenue/cost ownership alongside operational command.',
      },
      {
        id: 'technical-training-officer',
        title: 'Emergency Response Training Specialist',
        industry: 'Industrial Safety & Defense Contracting',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Direct instructional experience, drill coordination, and practical tactical mastery.',
        bridgeRequirements: [
          'Adult learning and vocational instructional qualifications',
          'Simulator software and modern blended training design exposure',
        ],
        whyItConnects: 'Commercial training academies, offshore oil platforms, and airport authorities require master practitioners to train emergency squads.',
        typicalTimeframe: '3–6 months onboarding',
        keyConsiderations: 'Excellent route for experienced officers seeking predictable daytime schedules and consulting rates.',
      },
      {
        id: 'disaster-consultant',
        title: 'Disaster Recovery & Risk Consultant',
        industry: 'Insurance & Risk Advisory',
        transferTier: 'Qualification Required',
        transferAdvantage: 'Post-incident forensic insight, cause analysis, and catastrophic loss mitigation.',
        bridgeRequirements: [
          'Chartered Insurance Institute / Risk Management qualifications',
          'Corporate actuarial or commercial asset risk assessment training',
        ],
        whyItConnects: 'Underwriters and reinsurance firms rely on practical emergency specialists to evaluate catastrophic risk exposures on multi-million dollar assets.',
        typicalTimeframe: '12–24 months transition',
        keyConsiderations: 'High earning potential in global commercial insurance and engineering advisory firms.',
      },
    ],
  },
  {
    id: 'mechanic',
    title: 'Automotive / Mechanical Technician',
    shortTitle: 'Mechanical Tech',
    domain: 'Skilled Trades & Applied Engineering',
    category: 'Skilled Trades',
    description: 'Hands-on technical specialist adept in complex diagnostic fault-finding, mechanical, hydraulic, pneumatic, and electromechanical systems maintenance.',
    startingContext: 'Deep applied mastery of mechanical component diagnosis, sensory fault isolation, schematics interpretation, and precision repair.',
    capabilities: [
      {
        id: 'diagnostic-fault',
        name: 'Complex Diagnostic & Fault-Finding',
        category: 'Diagnostics',
        description: 'Using specialized telemetry tools, oscilloscopes, and systematic logic to isolate root-cause electromechanical faults.',
      },
      {
        id: 'electromechanical',
        name: 'Electromechanical Systems Repair',
        category: 'Engineering',
        description: 'Maintaining powertrains, hydraulic actuators, pneumatic valves, sensor arrays, and high-voltage wiring.',
      },
      {
        id: 'schematics',
        name: 'Technical Schematics & CAD Reading',
        category: 'Technical',
        description: 'Interpreting complex wiring diagrams, hydraulic circuits, and manufacturer component tolerances.',
      },
      {
        id: 'tooling-fabrication',
        name: 'Tooling, Calibration & Safety',
        category: 'Operations',
        description: 'Operating precision measurement equipment, torque instruments, welding gear, and workshop safety protocols.',
      },
      {
        id: 'customer-service',
        name: 'Technical Customer Communication',
        category: 'Service',
        description: 'Explaining complex technical failure modes clearly to non-technical customers and detailing repair estimates.',
      },
    ],
    destinations: [
      {
        id: 'ev-specialist',
        title: 'High-Voltage / EV Powertrain Specialist',
        industry: 'Clean Mobility & Automotive Tech',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Foundation in automotive chassis, braking, thermal management, and digital diagnostics.',
        bridgeRequirements: [
          'High-voltage safety certification (e.g. IMI Level 3/4 EV or NFPA 70E electrical safety)',
          'Battery management system (BMS) software telemetry and inverter diagnostics',
        ],
        whyItConnects: 'Builds directly on mechanical foundation while upgrading the technician to the fastest growing segment in mobility.',
        typicalTimeframe: '3–6 months specialized training',
        keyConsiderations: 'Commands significant hourly wage premium as EV adoption outpaces certified technician supply.',
      },
      {
        id: 'controls-tech',
        title: 'Industrial Controls & Automation Technician',
        industry: 'Advanced Manufacturing & Robotics',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Diagnostic mindset, sensor familiarity, wiring harness expertise, and hydraulic/pneumatic fluency.',
        bridgeRequirements: [
          'Programmable Logic Controller (PLC) programming (e.g. Siemens TIA Portal or Allen-Bradley)',
          'Industrial robotics and automated conveyor system safety standards',
        ],
        whyItConnects: 'Automated fulfillment centers and smart factories need technicians who can physically fix actuators while diagnosing software signals.',
        typicalTimeframe: '6–9 months conversion training',
        keyConsiderations: 'Positions the technician inside modern logistics giants (Amazon, DHL) and automated factories.',
      },
      {
        id: 'field-service-eng',
        title: 'Field Service Engineer (Capital Equipment)',
        industry: 'Renewable Energy, Medical & Heavy Industrial',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Independent troubleshooting, customer interface, electrical and mechanical fault finding on site.',
        bridgeRequirements: [
          'Manufacturer-specific equipment certification (e.g. wind turbines, MRI chillers, generator sets)',
          'Field service management software and autonomous travel planning',
        ],
        whyItConnects: 'Capital equipment manufacturers value autonomous problem-solvers who can represent the brand at customer facilities.',
        typicalTimeframe: '3–6 months manufacturer training',
        keyConsiderations: 'Includes travel allowances, company vehicle, and substantial base compensation increase.',
      },
      {
        id: 'maintenance-supervisor',
        title: 'Plant Maintenance Supervisor',
        industry: 'Food Production & Process Industries',
        transferTier: 'Leadership Bridge',
        transferAdvantage: 'Preventative maintenance planning, workshop tooling management, and equipment breakdown triage.',
        bridgeRequirements: [
          'Computerized Maintenance Management System (CMMS) leadership',
          'Team supervision, shift rostering, and spare parts procurement management',
        ],
        whyItConnects: 'Takes hands-on mechanical fluency and steps into operational management of plant uptime and multi-shift crews.',
        typicalTimeframe: '9–12 months leadership milestone',
        keyConsiderations: 'Moves away from constant heavy physical wrenching toward strategic asset reliability.',
      },
      {
        id: 'technical-trainer-trades',
        title: 'Vocational Technical Instructor',
        industry: 'Vocational Education & Apprenticeships',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Years of real-world trade credibility, diagnostic mastery, and workshop safety standards.',
        bridgeRequirements: [
          'Vocational assessor or adult teaching certificate (e.g. CAVA / PTLLS / AET)',
          'Curriculum delivery and apprentice milestone assessment methods',
        ],
        whyItConnects: 'Colleges and corporate academies actively compete for certified master technicians with patient communication skills.',
        typicalTimeframe: '6 months dual-teaching qualification',
        keyConsiderations: 'Provides predictable daytime educational hours, pension benefits, and high job security.',
      },
      {
        id: 'technical-services-founder',
        title: 'Independent Technical Services Founder',
        industry: 'Specialist Mobile Services & Fleet Support',
        transferTier: 'Leadership Bridge',
        transferAdvantage: 'Deep technical capabilities, customer trust, and practical equipment ownership.',
        bridgeRequirements: [
          'Commercial bookkeeping, tax planning, and fleet service contract negotiation',
          'Marketing, client acquisition, and diagnostic software licensing management',
        ],
        whyItConnects: 'Technicians who combine diagnostic excellence with commercial discipline can build high-margin independent fleets or workshops.',
        typicalTimeframe: '6–12 months staged venture transition',
        keyConsiderations: 'Maximum autonomy and equity growth, balanced by direct business operational responsibility.',
      },
    ],
  },
  {
    id: 'nurse',
    title: 'Registered Nurse / Clinical Healthcare',
    shortTitle: 'Registered Nurse',
    domain: 'Healthcare & Clinical Operations',
    category: 'Healthcare',
    description: 'Licensed clinical practitioner skilled in patient assessment, complex care coordination, clinical risk management, multidisciplinary teamwork, and clinical documentation.',
    startingContext: 'Extensive high-empathy, high-stakes clinical decision-making, patient advocacy, protocol adherence, and multidisciplinary coordination.',
    capabilities: [
      {
        id: 'clinical-assessment',
        name: 'Comprehensive Clinical Assessment',
        category: 'Clinical',
        description: 'Systematic physiological and psychological triage, monitoring acute vital trends, and identifying deteriorating conditions.',
      },
      {
        id: 'care-coordination',
        name: 'Complex Care Coordination',
        category: 'Operations',
        description: 'Managing holistic treatment plans across surgeons, physicians, pharmacists, allied health staff, and families.',
      },
      {
        id: 'clinical-governance',
        name: 'Clinical Governance & Risk Protocol',
        category: 'Compliance',
        description: 'Enforcing strict infection control, medication safety audits, incident reporting, and statutory healthcare regulations.',
      },
      {
        id: 'patient-communication',
        name: 'Empathetic Crisis Communication',
        category: 'Communication',
        description: 'Translating complex medical prognoses into compassionate, understandable guidance for anxious patients and families.',
      },
      {
        id: 'ehr-documentation',
        name: 'Digital EHR Systems & Documentation',
        category: 'Data & Tech',
        description: 'Accurate, legally defensible real-time clinical charting, care auditing, and digital health records management.',
      },
    ],
    destinations: [
      {
        id: 'clinical-operations-mgr',
        title: 'Healthcare Operations Manager',
        industry: 'Hospital Systems & Outpatient Networks',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Firsthand knowledge of ward flow, patient throughput bottlenecks, clinical staffing ratios, and supply logistics.',
        bridgeRequirements: [
          'Healthcare management qualification or operational finance training',
          'Capacity planning, lean healthcare workflows, and bed-allocation management',
        ],
        whyItConnects: 'Hospitals perform better when operational directors understand the frontline reality of clinical delivery.',
        typicalTimeframe: '6–12 months progressive step',
        keyConsiderations: 'Significantly reduces bedside physical strain while retaining vital influence over care quality.',
      },
      {
        id: 'healthtech-clinical-lead',
        title: 'HealthTech Clinical Product Specialist',
        industry: 'Digital Health & Medical Software',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Deep understanding of Electronic Health Record (EHR) workflows, clinical usability pain points, and clinician adoption barriers.',
        bridgeRequirements: [
          'Software development lifecycle (SDLC) and Agile product discovery methodologies',
          'User experience (UX) testing and clinical safety standard certification (e.g. DCB0129 / HIPAA)',
        ],
        whyItConnects: 'Digital health startups struggle with clinician adoption unless guided by practitioners who have actually used the systems during night shifts.',
        typicalTimeframe: '6–9 months product transition',
        keyConsiderations: 'Offers remote/hybrid flexibility, competitive tech compensation, and global product impact.',
      },
      {
        id: 'clinical-research-coord',
        title: 'Clinical Trials / Research Coordinator',
        industry: 'Pharmaceuticals & Biotechnology',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Medication administration protocols, patient consent procedures, and precision clinical documentation.',
        bridgeRequirements: [
          'Good Clinical Practice (GCP) certification and regulatory trial submission frameworks',
          'Investigational medicinal product (IMP) tracking and research ethics compliance',
        ],
        whyItConnects: 'Pharma research sites require clinical coordinators who can maintain rigorous scientific compliance while keeping patient safety paramount.',
        typicalTimeframe: '3–6 months certification',
        keyConsiderations: 'Standard daytime hours with strong progression routes into global clinical trial management.',
      },
      {
        id: 'quality-patient-safety',
        title: 'Quality & Patient Safety Lead',
        industry: 'Healthcare Governance & Insurance',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Incident investigation insight, clinical audit expertise, and deep understanding of human factors in medical errors.',
        bridgeRequirements: [
          'Healthcare quality improvement methodologies (e.g. Six Sigma, IHI Open School)',
          'Root Cause Analysis (RCA) and clinical risk litigation defense exposure',
        ],
        whyItConnects: 'Regulatory bodies and hospital trusts need experienced clinicians to lead systematic safety overhauls following adverse events.',
        typicalTimeframe: '6–12 months development',
        keyConsiderations: 'High prestige and policy influence across healthcare groups and statutory inspectorates.',
      },
      {
        id: 'occupational-health-advisor',
        title: 'Occupational Health Nurse Specialist',
        industry: 'Corporate Enterprise & Manufacturing',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Health surveillance, workplace ergonomics, rehabilitation, and preventive health expertise.',
        bridgeRequirements: [
          'Occupational health diploma or specialist community public health nursing qualification',
          'Workplace disability legislation (e.g. ADA, Equality Act) and ergonomic hazard assessment',
        ],
        whyItConnects: 'Major corporations employ dedicated health advisors to prevent workplace illness, manage return-to-work plans, and boost employee wellbeing.',
        typicalTimeframe: '6–12 months specialist training',
        keyConsiderations: 'Highly stable corporate hours without night shifts or weekend rotas.',
      },
      {
        id: 'public-health-specialist',
        title: 'Public Health Program Lead',
        industry: 'Government & Non-Governmental Agencies',
        transferTier: 'Qualification Required',
        transferAdvantage: 'Epidemiological observation, immunization campaigns, and community health education.',
        bridgeRequirements: [
          'Master of Public Health (MPH) or formal epidemiology credential',
          'Population-level statistical modeling and health policy drafting',
        ],
        whyItConnects: 'Transitions individual patient care into population-level disease prevention, vaccination campaigns, and public health equity.',
        typicalTimeframe: '12–24 months postgraduate pathway',
        keyConsiderations: 'Broad international impact with agencies like WHO, CDC, or national public health bodies.',
      },
    ],
  },
  {
    id: 'lawyer',
    title: 'Legal Counsel / Solicitor / Attorney',
    shortTitle: 'Legal Counsel',
    domain: 'Legal, Governance & Professional Services',
    category: 'Legal & Compliance',
    description: 'Qualified legal professional experienced in rigorous statutory analysis, complex negotiation, risk management, contractual architecture, and stakeholder advocacy.',
    startingContext: 'Elite analytical reading, cross-examination logic, multi-party commercial negotiation, and regulatory liability assessment.',
    capabilities: [
      {
        id: 'statutory-analysis',
        name: 'Statutory Analysis & Interpretation',
        category: 'Analysis',
        description: 'Dissecting complex legislation, case precedent, and regulatory codes to identify organizational rights, duties, and exposures.',
      },
      {
        id: 'commercial-negotiation',
        name: 'High-Stakes Commercial Negotiation',
        category: 'Negotiation',
        description: 'Structuring multi-party deals, protecting key commercial leverage, and resolving disputes with opposing counsel.',
      },
      {
        id: 'risk-due-diligence',
        name: 'Risk Management & Due Diligence',
        category: 'Risk',
        description: 'Evaluating transactional liabilities, regulatory compliance gaps, intellectual property risks, and operational exposures.',
      },
      {
        id: 'stakeholder-advocacy',
        name: 'Executive & Stakeholder Advocacy',
        category: 'Communication',
        description: 'Presenting complex legal arguments persuasively to boards of directors, regulators, and judicial authorities.',
      },
      {
        id: 'contract-architecture',
        name: 'Complex Contract Architecture',
        category: 'Drafting',
        description: 'Drafting precise, enforceable agreements governing intellectual property, employment, cross-border trade, and partnerships.',
      },
    ],
    destinations: [
      {
        id: 'chief-compliance-officer',
        title: 'Head of Compliance & Regulatory Affairs',
        industry: 'FinTech, Banking & AI Technology',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Direct mastery of statutory interpretation, anti-financial crime rules, data protection, and regulatory engagement.',
        bridgeRequirements: [
          'Compliance management frameworks (e.g. ICA / ACAMS / CIPP/E data privacy certification)',
          'FinTech / AI regulatory lifecycle and operational audit integration',
        ],
        whyItConnects: 'Fast-moving tech and financial sectors actively recruit lawyers to lead compliance because they understand regulatory ambiguity.',
        typicalTimeframe: '3–6 months industry conversion',
        keyConsiderations: 'Highly lucrative executive pathway with direct board access.',
      },
      {
        id: 'corporate-strategy-director',
        title: 'Corporate Development & M&A Lead',
        industry: 'Private Equity & Enterprise Strategy',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Due diligence rigor, deal structuring experience, and transactional risk analysis.',
        bridgeRequirements: [
          'Financial modeling, discounted cash flow (DCF), and valuation methodologies',
          'Commercial post-merger integration and strategic portfolio synergy planning',
        ],
        whyItConnects: 'Corporate dealmakers need leaders who understand both commercial strategic thesis and transaction execution risks.',
        typicalTimeframe: '6–12 months financial upskilling',
        keyConsiderations: 'Transitions lawyer from legal advisory cost center to strategic value generator.',
      },
      {
        id: 'legal-tech-product-mgr',
        title: 'LegalTech & AI Product Director',
        industry: 'Enterprise SaaS & Legal Technology',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Deep understanding of legal workflow inefficiencies, document discovery bottlenecks, and contracting pain points.',
        bridgeRequirements: [
          'Agile product management and software roadmap prioritization',
          'Large Language Model (LLM) legal prompting frameworks and data security guardrails',
        ],
        whyItConnects: 'Legal tech ventures require product leaders who have practiced law and can translate domain nuance into software features.',
        typicalTimeframe: '6–9 months product transition',
        keyConsiderations: 'High-equity startup opportunities and flexible hybrid tech culture.',
      },
      {
        id: 'public-policy-director',
        title: 'Government Affairs & Public Policy Director',
        industry: 'Global Tech, Energy & Transport',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Legislative drafting analysis, persuasive advocacy, and regulatory stakeholder management.',
        bridgeRequirements: [
          'Political campaign strategy and legislative lobbying statutory disclosure rules',
          'Media communication and trade association coalition building',
        ],
        whyItConnects: 'Global enterprises need legal minds to help shape incoming regulation on artificial intelligence, energy transition, and privacy.',
        typicalTimeframe: '6–12 months transition',
        keyConsiderations: 'High visibility with parliamentary committees, ministerial bodies, and industry groups.',
      },
      {
        id: 'esg-sustainability-lead',
        title: 'ESG & Corporate Governance Director',
        industry: 'Asset Management & Public Corporations',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Fiduciary duty jurisprudence, statutory ESG disclosure mandates (CSRD, SEC), and board governance.',
        bridgeRequirements: [
          'Sustainability reporting frameworks (e.g. GRI, SASB, TCFD standards)',
          'Carbon accounting principles and supply chain human rights audit methods',
        ],
        whyItConnects: 'ESG is shifting from PR to hard statutory compliance with legal liability for greenwashing, placing lawyers at the center.',
        typicalTimeframe: '3–6 months ESG framework training',
        keyConsiderations: 'Rapidly growing corporate domain with significant board-level compensation.',
      },
      {
        id: 'dispute-resolution-founder',
        title: 'Commercial Arbitrator / Dispute Specialist',
        industry: 'International Arbitration & Alternative Dispute Resolution',
        transferTier: 'Qualification Required',
        transferAdvantage: 'Evidentiary analysis, judicial impartiality, and commercial contract interpretation.',
        bridgeRequirements: [
          'Fellowship of the Chartered Institute of Arbitrators (FCIArb)',
          'Accreditation with major arbitral panels (ICC, LCIA, AAA)',
        ],
        whyItConnects: 'Allows senior lawyers to build high-margin independent adjudication practices resolving cross-border commercial disputes.',
        typicalTimeframe: '12–18 months panel accreditation',
        keyConsiderations: 'Prestigious independent practice with high hourly billing flexibility.',
      },
    ],
  },
  {
    id: 'military-logistics',
    title: 'Military Logistics / Supply Chain Specialist',
    shortTitle: 'Military Logistics',
    domain: 'Defense, Logistics & Operations',
    category: 'Defense & Logistics',
    description: 'Operations and supply chain leader experienced in moving personnel, material, fuel, and precision equipment across austere and contested environments.',
    startingContext: 'Unmatched experience in complex supply lines, contingency planning, cold-chain transport, asset accountability, and cross-functional leadership.',
    capabilities: [
      {
        id: 'austere-supply-chain',
        name: 'End-to-End Supply Chain Management',
        category: 'Logistics',
        description: 'Coordinating multimodal transport (air, sea, rail, road), warehouse staging, and inventory tracking under tight constraints.',
      },
      {
        id: 'contingency-planning',
        name: 'Contingency & Disruption Planning',
        category: 'Strategy',
        description: 'Designing resilient fallback supply routes, secondary sourcing, and rapid response to catastrophic logistical failure.',
      },
      {
        id: 'personnel-leadership',
        name: 'High-Accountability Team Leadership',
        category: 'Leadership',
        description: 'Leading large, diverse teams with strict standards of personal accountability, welfare, and operational readiness.',
      },
      {
        id: 'asset-governance',
        name: 'High-Value Asset Governance',
        category: 'Compliance',
        description: 'Managing tens of millions in critical equipment with zero-loss audit rigor, security protocols, and preventative maintenance.',
      },
      {
        id: 'crisis-operations',
        name: 'Crisis Logistics & Rapid Deployment',
        category: 'Operations',
        description: 'Deploying operational bases, medical supply caches, and communications infrastructure from zero within hours.',
      },
    ],
    destinations: [
      {
        id: 'global-supply-chain-mgr',
        title: 'Global Supply Chain & Logistics Director',
        industry: 'E-Commerce, Manufacturing & Retail',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'End-to-end multimodal transport expertise, inventory tracking rigor, and proven supply resilience.',
        bridgeRequirements: [
          'Commercial Enterprise Resource Planning (ERP) systems (e.g. SAP S/4HANA Supply Chain)',
          'Commercial procurement contracting, supplier negotiation, and tariff optimization',
        ],
        whyItConnects: 'Global retailers and manufacturers value military logisticians because they understand supply chain physics and panic-free crisis recovery.',
        typicalTimeframe: '3–6 months commercial ERP onboarding',
        keyConsiderations: 'High demand in FMCG, aerospace parts distribution, and global retail fulfillment.',
      },
      {
        id: 'disaster-humanitarian-logistics',
        title: 'Humanitarian / NGO Logistics Lead',
        industry: 'International Aid & UN Agencies',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Operating in austere, low-infrastructure zones, rapid airlift coordination, and emergency relief distribution.',
        bridgeRequirements: [
          'Humanitarian aid coordination frameworks (UN OCHA / Red Cross protocols)',
          'International cross-border customs exemptions and diplomatic clearance procedures',
        ],
        whyItConnects: 'Disaster response agencies need operators who can land in earthquake or conflict zones and establish working food/water supply lines within 24 hours.',
        typicalTimeframe: '3–6 months transition',
        keyConsiderations: 'High sense of mission and global humanitarian impact.',
      },
      {
        id: 'critical-facilities-mgr',
        title: 'Critical Infrastructure / Data Center Operations',
        industry: 'Cloud Infrastructure & Telecoms',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Strict physical security protocols, backup power management, 24/7 uptime discipline, and team command.',
        bridgeRequirements: [
          'Data center infrastructure management (DCIM) and HVAC/power redundancy standards (Tier III/IV)',
          'ITIL service management and cloud facility compliance certifications',
        ],
        whyItConnects: 'Hyper-scale data center operators (AWS, Microsoft, Google) actively hire military operations personnel for mission-critical facility uptime.',
        typicalTimeframe: '6–9 months data center training',
        keyConsiderations: 'Lucrative tech infrastructure compensation and rapid leadership progression.',
      },
      {
        id: 'defense-program-mgr',
        title: 'Defense Aerospace Program Manager',
        industry: 'Defense Contracting & Aerospace',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Deep understanding of military doctrine, procurement cycles, operational requirements, and security clearances.',
        bridgeRequirements: [
          'Commercial program management credentials (e.g. PMP / APM / Earned Value Management)',
          'Defense contract pricing, FAR/DFARS compliance, and government milestone gate reviews',
        ],
        whyItConnects: 'Defense primes need program managers who speak the user’s language and can translate military capability needs into engineering delivery.',
        typicalTimeframe: '3–6 months credentialing',
        keyConsiderations: 'Maintains connection to defense mission while stepping into corporate executive compensation.',
      },
      {
        id: 'renewable-project-logistics',
        title: 'Offshore Wind / Energy Project Logistician',
        industry: 'Renewable Energy & Infrastructure',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Multimodal heavy-lift coordination, maritime transport, and safety-critical operational staging.',
        bridgeRequirements: [
          'Offshore maritime safety certifications (e.g. GWO / BOSIET)',
          'Specialist heavy-lift port logistics and turbine assembly supply planning',
        ],
        whyItConnects: 'Constructing multi-gigawatt offshore wind farms is an operational logistics campaign requiring military-grade staging and weather-window discipline.',
        typicalTimeframe: '6–12 months specialist training',
        keyConsiderations: 'Massive global capital investment driving high day rates and contract values.',
      },
      {
        id: 'operational-turnaround-consultant',
        title: 'Operations Excellence Consultant',
        industry: 'Management Consulting & Private Equity',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Lean process efficiency, elimination of operational waste, and structured leadership accountability.',
        bridgeRequirements: [
          'Lean Six Sigma Black Belt certification',
          'Financial statement analysis and management consulting presentation frameworks',
        ],
        whyItConnects: 'Private equity firms insert operational problem solvers into struggling portfolio companies to fix broken supply chains and restore margin.',
        typicalTimeframe: '6–12 months consulting onboarding',
        keyConsiderations: 'High intellectual variety and substantial performance bonus potential.',
      },
    ],
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer / Systems Developer',
    shortTitle: 'Software Engineer',
    domain: 'Software Engineering & Cloud Architecture',
    category: 'Engineering & Tech',
    description: 'Technical builder experienced in software architecture, distributed systems, algorithmic logic, data modeling, automated testing, and product delivery.',
    startingContext: 'Rigorous computational thinking, code delivery, system resilience, performance optimization, and technical teamwork.',
    capabilities: [
      {
        id: 'system-architecture',
        name: 'Distributed Systems Architecture',
        category: 'Architecture',
        description: 'Designing scalable, fault-tolerant cloud services, API ecosystems, microservices, and asynchronous event streams.',
      },
      {
        id: 'algorithmic-logic',
        name: 'Algorithmic Problem Solving & Code',
        category: 'Engineering',
        description: 'Translating complex business requirements into maintainable, performant, and secure production codebases.',
      },
      {
        id: 'ci-cd-automation',
        name: 'CI/CD & Infrastructure Automation',
        category: 'DevOps',
        description: 'Automating build pipelines, container orchestration (Kubernetes), infrastructure as code (Terraform), and observability.',
      },
      {
        id: 'data-modeling',
        name: 'Data Modeling & Query Optimization',
        category: 'Data',
        description: 'Designing relational, document, and vector data schemas, optimizing latency, and ensuring data integrity.',
      },
      {
        id: 'technical-collaboration',
        name: 'Technical Mentorship & Review',
        category: 'Collaboration',
        description: 'Conducting rigorous peer code reviews, writing architectural design records (ADRs), and mentoring junior developers.',
      },
    ],
    destinations: [
      {
        id: 'solutions-architect',
        title: 'Enterprise Solutions Architect',
        industry: 'Cloud Platforms & Enterprise Tech',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Deep technical credibility, system design mastery, and understanding of enterprise developer constraints.',
        bridgeRequirements: [
          'Executive communication and commercial value proposition presentation',
          'Enterprise security governance, vendor integration models, and cloud cost optimization',
        ],
        whyItConnects: 'Enterprise buyers trust architects who have written production code and can realistically evaluate technical feasibility.',
        typicalTimeframe: '3–6 months client communication coaching',
        keyConsiderations: 'Significantly higher base salary with substantial sales incentive bonuses.',
      },
      {
        id: 'engineering-manager',
        title: 'Engineering Manager / Director',
        industry: 'Technology & Scale-Ups',
        transferTier: 'Leadership Bridge',
        transferAdvantage: 'Intuitive understanding of developer velocity, technical debt trade-offs, and software delivery bottlenecks.',
        bridgeRequirements: [
          'People management, 1:1 coaching, performance management, and career progression frameworks',
          'Cross-functional headcount planning, engineering hiring, and stakeholder management',
        ],
        whyItConnects: 'Engineering teams perform best when led by technical practitioners who protect focus while developing people.',
        typicalTimeframe: '6–12 months leadership milestone',
        keyConsiderations: 'Shifts primary focus from personal code output to team multiplier and organizational health.',
      },
      {
        id: 'technical-product-mgr',
        title: 'Technical Product Manager (API / Core Tech)',
        industry: 'Developer Tools, AI Platforms & FinTech',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Direct empathy for developer end-users, API design intuition, and technical requirement translation.',
        bridgeRequirements: [
          'Product discovery, customer interviewing, and market prioritization frameworks',
          'Product analytics, unit economics, and feature adoption metrics tracking',
        ],
        whyItConnects: 'API-first and developer-tool companies need product managers who think in code schemas and developer workflows.',
        typicalTimeframe: '3–6 months product transition',
        keyConsiderations: 'High strategic influence shaping what gets built rather than solely how it is built.',
      },
      {
        id: 'security-engineer',
        title: 'Cloud Security / DevSecOps Architect',
        industry: 'Cybersecurity & Financial Infrastructure',
        transferTier: 'Additional Training Likely',
        transferAdvantage: 'Software architecture knowledge, automated pipeline integration, and infrastructure as code familiarity.',
        bridgeRequirements: [
          'Security certifications (e.g. CISSP / CCSP / Certified Kubernetes Security Specialist)',
          'Threat modeling, vulnerability remediation, and regulatory compliance (SOC2, ISO 27001)',
        ],
        whyItConnects: 'Cybersecurity is shifting left into code; security teams increasingly require software engineers who can automate security controls.',
        typicalTimeframe: '6–9 months security credentialing',
        keyConsiderations: 'Extreme market demand with virtually zero unemployment across senior practitioners.',
      },
      {
        id: 'ai-solutions-engineer',
        title: 'AI Systems & LLM Integrations Engineer',
        industry: 'Applied Artificial Intelligence',
        transferTier: 'Strong Transfer',
        transferAdvantage: 'Software engineering fundamentals, API orchestrations, data pipelines, and production deployment rigor.',
        bridgeRequirements: [
          'Vector database indexing, Retrieval-Augmented Generation (RAG) architectures, and LLM evaluation benchmarks',
          'Model fine-tuning pipelines and semantic caching optimization',
        ],
        whyItConnects: 'Enterprises need software engineers who can connect cutting-edge foundation models to real corporate databases with enterprise reliability.',
        typicalTimeframe: '3–6 months applied AI upskilling',
        keyConsiderations: 'Fastest growing category in software engineering with frontier equity upside.',
      },
      {
        id: 'technical-founder',
        title: 'Technical Co-Founder / CTO',
        industry: 'Early-Stage Ventures & Bootstrapped SaaS',
        transferTier: 'Leadership Bridge',
        transferAdvantage: 'Ability to build minimum viable products (MVPs) from scratch without costly external agency dependency.',
        bridgeRequirements: [
          'Rapid customer discovery, sales validation, and commercial business model design',
          'Venture fundraising, equity structuring, and early-team recruitment',
        ],
        whyItConnects: 'Builders who can ship functional software can test hypotheses in days and create real economic enterprise value.',
        typicalTimeframe: '6–12 months venture validation',
        keyConsiderations: 'Maximum long-term wealth creation and creative control, paired with early-stage financial risk.',
      },
    ],
  },
];
