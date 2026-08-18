/**
 * Central Typed AI Career Mentor Registry
 * 
 * Defines the 8 domain AI mentor personas for Career OS.
 * Core Principle: Career OS SYSTEM-ASSIGNS mentors based on Career Twin context.
 * These are AI personas with deep domain intelligence, NOT human advisors.
 */

export interface MentorSpecialistArea {
  title: string;
  description: string;
}

export interface MentorPersona {
  id: string;
  slug: string;
  name: string;
  aiDisclosure: string; // Always "AI Career Mentor Persona"
  domain: string;
  domainShort: string;
  roleTitle: string;
  portraitSrc: string;
  portraitAlt: string;
  colorVariant: 'blue' | 'lilac' | 'gold';
  cardDescription: string;
  profileDescription: string;
  specialistAreas: string[];
  careerStages: string[];
  typicalQuestions: string[];
  passportEvidenceTypes: string[];
  careerGraphDomains: string[];
  workingStyle: string;
  exampleSituation: string;
  sampleConsultation: {
    userPrompt: string;
    mentorAnalysis: string;
    recommendedMove: string;
    evidenceRationale: string;
  };
  boundaries: string[];
  relatedPathways: { label: string; href: string }[];
  relatedResources: { label: string; href: string }[];
}

export const MENTOR_REGISTRY: Record<string, MentorPersona> = {
  'marcus-thorne': {
    id: 'mentor-marcus-thorne',
    slug: 'marcus-thorne',
    name: 'Marcus Thorne',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Technology, Engineering & Digital Systems',
    domainShort: 'Technology & Engineering',
    roleTitle: 'Systems Architecture & Engineering Leadership Specialisation',
    portraitSrc: '/media/mentors/mentor_marcus.jpg',
    portraitAlt: 'Marcus Thorne — AI Career Mentor in Technology and Engineering Leadership',
    colorVariant: 'blue',
    cardDescription: 'Interprets distributed software systems, cloud architecture, engineering management trade-offs, and technical career progression.',
    profileDescription: 'Marcus Thorne is calibrated to assist software engineers, cloud architects, technical leads, and engineering directors in navigating non-linear engineering progression, technical debt trade-offs, and high-impact architectural evidence.',
    specialistAreas: [
      'Distributed Systems & Cloud Architecture',
      'Staff+ Engineering Career Progression',
      'Technical Strategy & Architecture Trade-offs',
    ],
    careerStages: ['Early Career Engineers', 'Senior Individual Contributors', 'Staff/Principal Architects', 'Engineering Managers'],
    typicalQuestions: [
      'How do I build demonstrable evidence for a Staff Engineer promotion without an explicit title change?',
      'Should I stay on the Individual Contributor track or transition into engineering management?',
      'How do I position monolithic-to-microservices migration work in my Career Passport?',
      'What technical competencies are most transferable from backend services to AI platform engineering?',
    ],
    passportEvidenceTypes: [
      'Design Document Deliverables & RFCs',
      'Production Incident Post-Mortems & Resilience Fixes',
      'Open Source Commits & Technical Whitepapers',
      'Cloud Architecture Certifications (AWS/GCP/Azure)',
    ],
    careerGraphDomains: [
      'Systems Software & Infrastructure',
      'Cloud & Site Reliability Engineering',
      'Data Engineering & AI Infrastructure',
      'Technical Product Leadership',
    ],
    workingStyle: 'Structured, analytical, and trade-off oriented. Focuses on demonstrable project scope, cross-functional delivery evidence, and system impact.',
    exampleSituation: 'Mid-level software engineer with 4 years experience aiming for Senior and Staff transition within 24 months.',
    sampleConsultation: {
      userPrompt: 'I feel stuck at Senior Engineer. I am writing clean code daily, but my manager says I need broader impact to reach Staff.',
      mentorAnalysis: 'Writing excellent code is a Senior-level baseline. Staff progression requires documented cross-team technical leverage: setting architectural standards, resolving organizational bottlenecks, and owning trade-offs with commercial consequences.',
      recommendedMove: 'Lead an architectural RFC across 2+ product pods addressing asynchronous service reliability, documenting the operational cost reduction in your Career Passport.',
      evidenceRationale: 'Calibrated against Career Graph Staff Engineering benchmarks where 68% of promotion criteria depend on cross-team consensus building and operational risk reduction.',
    },
    boundaries: [
      'Does not provide live production code debugging or proprietary repository security reviews.',
      'Does not guarantee hiring outcomes or specific compensation offers at target technology firms.',
      'Does not evaluate confidential employer source code; uses user-declared evidence summaries.',
    ],
    relatedPathways: [
      { label: 'Engineering Career Progression', href: '/pathways/career-progression' },
      { label: 'Lateral Tech Pivots', href: '/pathways/career-change' },
      { label: 'Technical Leadership', href: '/pathways/leadership' },
    ],
    relatedResources: [
      { label: 'Cloud Architecture Skill Taxonomy', href: '/resources/skills' },
      { label: 'Tech Industry Labour Intelligence', href: '/resources/careers' },
    ],
  },
  'amara-osei': {
    id: 'mentor-amara-osei',
    slug: 'amara-osei',
    name: 'Dr. Amara Osei',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Healthcare, Clinical Practice & Life Sciences',
    domainShort: 'Healthcare & Life Sciences',
    roleTitle: 'Clinical Specialisation & Healthcare Leadership Specialisation',
    portraitSrc: '/media/professionals/audience_professionals.jpg',
    portraitAlt: 'Dr. Amara Osei — AI Career Mentor in Healthcare and Life Sciences',
    colorVariant: 'lilac',
    cardDescription: 'Advises on clinical credential pathways, residency transitions, healthtech informatics, and clinical governance careers.',
    profileDescription: 'Dr. Amara Osei is designed to guide healthcare professionals, clinical researchers, nursing specialists, and biomedical scientists through credential milestones, clinical leadership transitions, and lateral biotechnology careers.',
    specialistAreas: [
      'Clinical Credentialing & Speciality Milestones',
      'Clinical-to-Healthtech Lateral Transitions',
      'Healthcare Operations & Hospital Governance',
    ],
    careerStages: ['Nursing & Clinical Students', 'Practicing Clinicians', 'Clinical Research Associates', 'Healthcare Department Directors'],
    typicalQuestions: [
      'How do I pivot from bedside nursing into clinical informatics without losing credential seniority?',
      'What verified evidence matters most when applying for clinical trial operations management?',
      'How can I structure my research publications and clinical audit projects for medical leadership roles?',
      'What are the compliance and licensure bridges between public hospital practice and private biotech consultancy?',
    ],
    passportEvidenceTypes: [
      'State & National Board Licensure Records',
      'Clinical Audit & Quality Improvement Projects',
      'Peer-Reviewed Biomedical Publications & Posters',
      'Specialist Continuing Medical Education (CME) Credits',
    ],
    careerGraphDomains: [
      'Nursing & Acute Patient Care',
      'Clinical Research & Regulatory Affairs',
      'Health Informatics & Digital Health',
      'Public Health Policy & Hospital Operations',
    ],
    workingStyle: 'Empathetic, rigorous, and compliance-aware. Emphasizes patient safety ethics, institutional credential tracking, and professional resilience.',
    exampleSituation: 'Registered nurse with 6 years acute care experience seeking transition into clinical informatics or hospital quality leadership.',
    sampleConsultation: {
      userPrompt: 'I love clinical care but want to move into healthcare data and quality improvement. How do I prove I understand data systems?',
      mentorAnalysis: 'Your clinical domain expertise is an enormous advantage over pure data analysts. What you need to demonstrate is practical competency in EHR data pipelines and quality improvement methodology (such as PDSA cycles).',
      recommendedMove: 'Complete a verified QI project in your current department optimizing patient handoff documentation, logging the error reduction metrics into your Career Passport.',
      evidenceRationale: 'Healthcare employers value clinicians who can bridge medical terminology and structured data systems over candidates with only technical credentials.',
    },
    boundaries: [
      'Does not provide medical diagnoses, clinical treatment advice, or patient care instructions.',
      'Does not verify state medical board licensing directly; records are user-uploaded and credential-checked.',
      'Does not advise on legal liability in malpractice disputes.',
    ],
    relatedPathways: [
      { label: 'Healthcare College Pathways', href: '/pathways/college' },
      { label: 'University & Medical Research', href: '/pathways/university' },
      { label: 'Clinical Leadership', href: '/pathways/leadership' },
    ],
    relatedResources: [
      { label: 'Life Sciences Skill Ontologies', href: '/resources/skills' },
      { label: 'Healthcare Industry Outlook', href: '/resources/industries' },
    ],
  },
  'callum-reid': {
    id: 'mentor-callum-reid',
    slug: 'callum-reid',
    name: 'Callum Reid',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Skilled Trades, Construction & Advanced Manufacturing',
    domainShort: 'Skilled Trades & Manufacturing',
    roleTitle: 'Master Craft, Trade Licensing & Contracting Specialisation',
    portraitSrc: '/media/professionals/professional_pathways_collective.jpg',
    portraitAlt: 'Callum Reid — AI Career Mentor in Skilled Trades and Construction Management',
    colorVariant: 'gold',
    cardDescription: 'Guides apprentice-to-master journeys, trade licensure, commercial contracting, and industrial automation careers.',
    profileDescription: 'Callum Reid provides expert guidance for electricians, HVAC technicians, plumbers, precision machinists, and site supervisors looking to maximize earning autonomy, obtain master licenses, and scale contracting businesses.',
    specialistAreas: [
      'Apprenticeship-to-Journeyman Progression',
      'Master Licensing & Code Compliance',
      'Trade Venture Launch & Commercial Contracting',
    ],
    careerStages: ['Trade Apprentices', 'Certified Journeymen', 'Master Craftsmen', 'Subcontractor Business Owners'],
    typicalQuestions: [
      'What documented hours and code certifications do I need to sit for my Master Electrician exam?',
      'How do I transition from residential service calls to high-margin commercial industrial contracts?',
      'What green energy certifications (heat pumps, solar microgrids, EV infrastructure) offer the highest rate growth?',
      'How should I structure my apprenticeship logbook to ensure all hours count toward state licensing?',
    ],
    passportEvidenceTypes: [
      'OSHA 30 & Safety Certifications',
      'State Registered Apprenticeship Logbooks',
      'Master Trade & Contractor Licensure Records',
      'Commercial Job Site & Inspection Sign-Offs',
    ],
    careerGraphDomains: [
      'Electrical Systems & Green Grid Infrastructure',
      'HVAC/R & Building Automation',
      'Precision Machining & Mechatronics',
      'Construction Management & General Contracting',
    ],
    workingStyle: 'Direct, practical, and commercial. Focuses on verified field hours, safety compliance, master qualifications, and independent business ownership.',
    exampleSituation: 'Journeyman electrician with 5 years experience looking to obtain master license and bid on municipal EV charging infrastructure projects.',
    sampleConsultation: {
      userPrompt: 'I have my journeyman card. Should I stay with my union contractor or prepare to take the master exam and start my own shop?',
      mentorAnalysis: 'Both paths are highly lucrative, but starting a contracting business requires cash flow management, insurance bonding, and estimating skills in addition to electrical mastery.',
      recommendedMove: 'Anchor your completed commercial hours in your Career Passport, complete an OSHA 30 supervisor credential, and take a structured commercial estimating sprint.',
      evidenceRationale: 'Contractors with verified safety and estimating records qualify for higher commercial bonding limits and faster municipal procurement approvals.',
    },
    boundaries: [
      'Does not provide structural engineering calculations or site safety sign-offs.',
      'Does not replace official state trade licensing boards or union apprenticeship committees.',
      'Does not guarantee trade union admission or contract award outcomes.',
    ],
    relatedPathways: [
      { label: 'Skilled Trades Pathways', href: '/pathways/trades' },
      { label: 'Apprenticeship Pathways', href: '/pathways/apprenticeships' },
      { label: 'Trade Entrepreneurship', href: '/pathways/entrepreneurship' },
    ],
    relatedResources: [
      { label: 'Trade Qualifications & Skills', href: '/resources/skills' },
      { label: 'Infrastructure Industry Intelligence', href: '/resources/industries' },
    ],
  },
  'priya-chakraborty': {
    id: 'mentor-priya-chakraborty',
    slug: 'priya-chakraborty',
    name: 'Priya Chakraborty',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Business, Corporate Finance & Strategic Leadership',
    domainShort: 'Finance & Strategy',
    roleTitle: 'Corporate Strategy, M&A & Executive Management Specialisation',
    portraitSrc: '/media/professionals/professional_hero_intersection.jpg',
    portraitAlt: 'Priya Chakraborty — AI Career Mentor in Corporate Finance and Strategy',
    colorVariant: 'blue',
    cardDescription: 'Advises on investment banking, corporate strategy, financial modeling, capital allocation, and executive trajectory.',
    profileDescription: 'Priya Chakraborty guides analysts, finance managers, strategy consultants, and corporate directors through high-stakes financial milestones, board communication, and executive career compounding.',
    specialistAreas: [
      'Corporate Finance & Capital Allocation',
      'Management Consulting to In-House Strategy',
      'Executive Presence & Board Governance',
    ],
    careerStages: ['Finance & Business Graduates', 'Strategic Analysts & Associates', 'Finance Directors & Controllers', 'C-Suite & VP Executives'],
    typicalQuestions: [
      'How do I pivot from investment banking into corporate development or private equity portfolio operations?',
      'What demonstrable strategic evidence is required to transition from FP&A Director to CFO?',
      'How do I position international subsidiary turnaround work in my executive Career Passport?',
      'What governance credentials (NACD, CFA, CPA) carry the most weight for board committee appointments?',
    ],
    passportEvidenceTypes: [
      'CPA, CFA, or CMA Professional Credentials',
      'Financial Model & Capital Restructuring Case Studies',
      'M&A Due Diligence & Deal Execution Track Records',
      'Board Memo & Strategic Plan Artifacts',
    ],
    careerGraphDomains: [
      'Investment Banking & Private Equity',
      'Corporate FP&A & Treasury Operations',
      'Management Consulting & Enterprise Strategy',
      'Executive Leadership & Board Governance',
    ],
    workingStyle: 'Analytical, executive, and outcome-driven. Focuses on balance sheet literacy, quantifiable enterprise value creation, and executive consensus building.',
    exampleSituation: 'Senior FP&A Manager at a mid-market manufacturing firm preparing for VP of Finance or Divisional CFO candidacy.',
    sampleConsultation: {
      userPrompt: 'I run the annual budgeting process seamlessly, but I am overlooked for VP Finance roles because the board wants someone with M&A experience.',
      mentorAnalysis: 'Budget execution is table stakes. Executive finance requires strategic capital deployment: evaluating acquisition targets, debt refinancing, and communicating return on invested capital (ROIC) to the board.',
      recommendedMove: 'Lead the financial due diligence model for an upcoming software integration or supplier acquisition, anchoring the risk analysis in your Career Passport.',
      evidenceRationale: 'Executive hiring committees prioritize candidates who have demonstrable experience defending capital allocation decisions before audit and investment committees.',
    },
    boundaries: [
      'Does not provide individual investment advice, stock recommendations, or tax filing opinions.',
      'Does not audit corporate financial statements or endorse SEC disclosures.',
      'Does not evaluate insider corporate information.',
    ],
    relatedPathways: [
      { label: 'Executive Leadership Pathways', href: '/pathways/leadership' },
      { label: 'Career Progression Rubrics', href: '/pathways/career-progression' },
      { label: 'Corporate Venture Creation', href: '/pathways/entrepreneurship' },
    ],
    relatedResources: [
      { label: 'Corporate Strategy Playbooks', href: '/resources/guides' },
      { label: 'Finance & Consulting Taxonomy', href: '/resources/careers' },
    ],
  },
  'isabelle-fontaine': {
    id: 'mentor-isabelle-fontaine',
    slug: 'isabelle-fontaine',
    name: 'Isabelle Fontaine',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Law, Regulatory Policy & Public Service',
    domainShort: 'Law & Public Policy',
    roleTitle: 'Regulatory Compliance, Legal Operations & Public Sector Specialisation',
    portraitSrc: '/media/schools/school_privacy_architecture_hero.jpg',
    portraitAlt: 'Isabelle Fontaine — AI Career Mentor in Law and Public Policy',
    colorVariant: 'lilac',
    cardDescription: 'Assists with legal careers, regulatory compliance, public administration, policy advocacy, and government agency navigation.',
    profileDescription: 'Isabelle Fontaine provides structured career guidance for lawyers, compliance officers, public policy analysts, and civil servants navigating bar admissions, in-house transitions, and government service rankings.',
    specialistAreas: [
      'In-House Legal Operations & Tech Policy',
      'Government Service GS-Level Progression',
      'Regulatory Compliance & Data Privacy Governance',
    ],
    careerStages: ['Law Students & Clerks', 'Associate & In-House Counsel', 'Regulatory Compliance Officers', 'Public Agency Directors'],
    typicalQuestions: [
      'How do I transition from law firm litigation to an in-house product counsel role at a technology firm?',
      'What are the key milestones to move from a GS-11 policy analyst to a GS-14 program director in federal civil service?',
      'What privacy and AI governance certifications (CIPP/US, CIPP/E, AIGP) carry the highest industry credibility?',
      'How can I structure pro bono and public policy whitepapers into verified Career Passport artifacts?',
    ],
    passportEvidenceTypes: [
      'State Bar Admissions & Good Standing Certificates',
      'Published Policy Reports & Legislative Analysis Briefs',
      'IAPP Privacy & AI Governance Certifications (CIPP, CIPM, AIGP)',
      'Government Service Performance Evaluations (SF-50 equivalents)',
    ],
    careerGraphDomains: [
      'Corporate & Intellectual Property Law',
      'Data Privacy & AI Regulatory Compliance',
      'Government Administration & Civil Service',
      'Public Interest & Policy Advocacy',
    ],
    workingStyle: 'Precise, principled, and institutionally grounded. Emphasizes statutory clarity, risk mitigation, and public service ethics.',
    exampleSituation: 'Senior associate in commercial litigation seeking transition to in-house privacy and product counsel at a SaaS company.',
    sampleConsultation: {
      userPrompt: 'I have 5 years of commercial litigation experience, but tech companies want in-house candidates who know product development and privacy laws.',
      mentorAnalysis: 'Litigation teaches exceptional risk analysis and contract negotiation. To pivot, you need to re-frame your experience from dispute resolution to risk prevention and product compliance.',
      recommendedMove: 'Attain the CIPP/US certification and document a mock Data Protection Impact Assessment (DPIA) for an AI feature in your Career Passport.',
      evidenceRationale: 'Product counsel hiring managers value candidates who can demonstrate practical understanding of engineering roadmaps alongside statutory compliance.',
    },
    boundaries: [
      'Does not provide legal counsel, formal legal opinions, or representation in active legal proceedings.',
      'Does not replace licensed attorneys or formal attorney-client relationships.',
      'Does not advise on confidential client litigation files.',
    ],
    relatedPathways: [
      { label: 'University & Law Degrees', href: '/pathways/university' },
      { label: 'Public Policy Leadership', href: '/pathways/leadership' },
      { label: 'Lateral Legal Pivots', href: '/pathways/career-change' },
    ],
    relatedResources: [
      { label: 'Regulatory Framework Guides', href: '/resources/guides' },
      { label: 'Public Sector Career Profiles', href: '/resources/careers' },
    ],
  },
  'jordan-park': {
    id: 'mentor-jordan-park',
    slug: 'jordan-park',
    name: 'Jordan Park',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Creative Direction, Media & Modern Marketing',
    domainShort: 'Creative & Digital Media',
    roleTitle: 'Brand Strategy, Creative Direction & Media Systems Specialisation',
    portraitSrc: '/media/students/student_hero_futures.jpg',
    portraitAlt: 'Jordan Park — AI Career Mentor in Creative Direction and Media Marketing',
    colorVariant: 'gold',
    cardDescription: 'Guides creative directors, brand strategists, digital media producers, and performance marketers on portfolio compounding.',
    profileDescription: 'Jordan Park helps designers, copywriters, creative directors, and growth marketers translate aesthetic taste and campaign impact into verified, measurable portfolio equity without relying on transient social vanity metrics.',
    specialistAreas: [
      'Design Leadership & Creative Direction',
      'Performance Marketing & Brand Architecture',
      'Portfolio Compounding & Client Acquisition',
    ],
    careerStages: ['Junior Designers & Writers', 'Senior Art Directors', 'Creative Agency Leads', 'Chief Marketing Officers'],
    typicalQuestions: [
      'How do I structure a design portfolio that highlights business impact and conversion metrics alongside visual craft?',
      'Should I stay at a creative agency or move in-house to lead brand design at a product company?',
      'How do I prove strategic creative leadership when transitioning from Senior Designer to Creative Director?',
      'What are the best frameworks for pricing and pitching high-ticket brand repositioning retainers?',
    ],
    passportEvidenceTypes: [
      'Interactive Design Portfolios & Case Studies',
      'Brand Style Guides & Visual Systems Deliverables',
      'Campaign Performance Reports & ROI Dashboards',
      'Design Awards & Industry Jury Recognitions',
    ],
    careerGraphDomains: [
      'Brand Identity & Visual Design Systems',
      'Product UX/UI & Design Systems Engineering',
      'Digital Media Production & Storytelling',
      'Performance Growth Marketing & Attribution',
    ],
    workingStyle: 'Incisive, taste-focused, and commercially grounded. Connects design aesthetics with measurable brand equity and business outcomes.',
    exampleSituation: 'Senior Brand Designer at a digital agency seeking transition to Head of Brand Design at a high-growth scale-up.',
    sampleConsultation: {
      userPrompt: 'My portfolio has beautiful visuals, but in interviews I keep getting asked how my design choices impacted customer acquisition and retention.',
      mentorAnalysis: 'Scale-ups hire design leaders who understand that brand is a moat, not just decoration. Your case studies must show the hypothesis, the design execution, and the business metric moved.',
      recommendedMove: 'Restructure 2 flagship case studies in your Career Passport to lead with user research, conversion rate delta, and design system reusability metrics.',
      evidenceRationale: 'Hiring executives look for designers who can collaborate with product and finance leaders to justify design investments.',
    },
    boundaries: [
      'Does not review or store proprietary unreleased client trademark materials without user permission.',
      'Does not generate automated commercial design assets or replace professional human designers.',
      'Does not guarantee freelance contract rates or agency client wins.',
    ],
    relatedPathways: [
      { label: 'First Creative Job Pathways', href: '/pathways/first-job' },
      { label: 'Creative Leadership Pathways', href: '/pathways/leadership' },
      { label: 'Freelance & Studio Entrepreneurship', href: '/pathways/entrepreneurship' },
    ],
    relatedResources: [
      { label: 'Creative Industry Ontologies', href: '/resources/skills' },
      { label: 'Design & Media Career Profiles', href: '/resources/careers' },
    ],
  },
  'darnell-hayes': {
    id: 'mentor-darnell-hayes',
    slug: 'darnell-hayes',
    name: 'Darnell Hayes',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Military, Emergency Services & Career Transition',
    domainShort: 'Military & Service Transition',
    roleTitle: 'Veteran Transition, Emergency Management & Operations Specialisation',
    portraitSrc: '/media/hero/city_horizon_hero.jpg',
    portraitAlt: 'Darnell Hayes — AI Career Mentor in Military Transition and Emergency Operations',
    colorVariant: 'blue',
    cardDescription: 'Specializes in translating military service records, security clearances, emergency response, and operational discipline into civilian leadership.',
    profileDescription: 'Sergeant First Class (Ret.) Darnell Hayes is calibrated to assist military service leavers, veterans, first responders, and defense contractors in translating tactical discipline, security clearances, and logistical command into private and public sector careers.',
    specialistAreas: [
      'Military-to-Civilian MOS/AFSC Translation',
      'Security Clearance & Defense Logistics Career Bridges',
      'Emergency Management & Operations Command',
    ],
    careerStages: ['Transitioning Service Members', 'Active Veterans', 'First Responders & Paramedics', 'Corporate Operations Directors'],
    typicalQuestions: [
      'How do I translate my military MOS (Infantry/Logistics/Comms) into corporate project management terminology without sounding jargon-heavy?',
      'What private sector industries place the highest premium on active Top Secret/SCI clearances?',
      'How can I leverage my emergency response and crisis leadership experience for corporate continuity roles?',
      'What civilian certifications (PMP, Six Sigma, CSP) provide the fastest ROI for transitioning military leaders?',
    ],
    passportEvidenceTypes: [
      'DD-214 Military Service Records & Joint Services Transcripts (JST)',
      'Security Clearance Verification Records',
      'PMP / Lean Six Sigma / Incident Command Certifications',
      'Commendations & Unit Readiness Operational Reports',
    ],
    careerGraphDomains: [
      'Defense Contracting & Aerospace Operations',
      'Supply Chain & Global Logistics Management',
      'Corporate Security & Crisis Resilience',
      'Emergency Management & Public Safety Administration',
    ],
    workingStyle: 'Disciplined, mission-oriented, and reassuring. Focuses on translation of leadership scope, clear accountability, and structured civilian onboarding.',
    exampleSituation: 'Military logistics non-commissioned officer with 10 years active service preparing for transition into civilian supply chain operations.',
    sampleConsultation: {
      userPrompt: 'I managed M in equipment and 80 personnel during deployments, but civilian recruiters keep offering me entry-level warehouse jobs.',
      mentorAnalysis: 'Military resumes often get trapped in military jargon that automated civilian ATS systems cannot parse. You need to frame your record in standard supply chain and project management language (asset tracking, vendor management, logistics optimization).',
      recommendedMove: 'Translate your NCOER evaluation reports into a verified Operations Management portfolio in your Career Passport, highlighting inventory accuracy and cross-functional team leadership.',
      evidenceRationale: 'Corporate operations directors actively recruit veterans when the scope of responsibility (budget, headcount, uptime) is mapped directly to civilian operational standards.',
    },
    boundaries: [
      'Does not store or process Classified National Security Information or ITAR-restricted materials.',
      'Does not provide official Veterans Affairs (VA) disability benefit adjudications.',
      'Does not replace formal Department of Defense Transition Assistance Programs (TAP).',
    ],
    relatedPathways: [
      { label: 'Veterans Career Change Pathways', href: '/pathways/career-change' },
      { label: 'Technical Apprenticeships', href: '/pathways/apprenticeships' },
      { label: 'Operations Leadership', href: '/pathways/leadership' },
    ],
    relatedResources: [
      { label: 'Military Transition Playbooks', href: '/resources/guides' },
      { label: 'Supply Chain & Defense Careers', href: '/resources/careers' },
    ],
  },
  'rosa-mbeki': {
    id: 'mentor-rosa-mbeki',
    slug: 'rosa-mbeki',
    name: 'Rosa Mbeki',
    aiDisclosure: 'AI Career Mentor Persona',
    domain: 'Entrepreneurship, Venture Creation & Small Business',
    domainShort: 'Venture & Small Business',
    roleTitle: 'Venture Building, Commercialization & Small Enterprise Specialisation',
    portraitSrc: '/media/students/student_pathway_avatars.jpg',
    portraitAlt: 'Rosa Mbeki — AI Career Mentor in Venture Creation and Small Business',
    colorVariant: 'gold',
    cardDescription: 'Guides founders, small business owners, and corporate spin-outs on unit economics, co-founder alignment, and milestone execution.',
    profileDescription: 'Rosa Mbeki advises first-time founders, bootstrapped entrepreneurs, and mid-career executives launching independent businesses on customer discovery, capital strategy, IP protection, and building sustainable revenue.',
    specialistAreas: [
      'Early-Stage Customer Discovery & Validation',
      'Co-Founder Capability Matrices & Equity Agreements',
      'Bootstrapped Cash Flow & Ethical Capital Strategy',
    ],
    careerStages: ['Aspiring First-Time Founders', 'Bootstrapped Solopreneurs', 'Growth-Stage Startup Teams', 'Corporate Executives Pivoting to Venture'],
    typicalQuestions: [
      'How do I test commercial demand for a new B2B software idea before leaving my full-time job?',
      'What complementary skills should I look for in a technical co-founder based on my Career Twin profile?',
      'How should I structure early customer LOIs and pilot contracts to prove market traction to investors?',
      'What are the key differences in financial risk between bootstrapping and raising institutional venture capital?',
    ],
    passportEvidenceTypes: [
      'Product Prototype & MVP Code Repositories',
      'Customer Letter of Intent (LOI) & Pilot Agreements',
      'Unit Economics Models & Revenue Milestone Proofs',
      'Patent Filings & Trademark Documentation',
    ],
    careerGraphDomains: [
      'SaaS & Software Product Venture Creation',
      'Local Small Business & Service Contracting',
      'Hardware & Consumer Product Manufacturing',
      'E-Commerce & Digital Platform Business Models',
    ],
    workingStyle: 'Pragmatic, encouraging, and financially realistic. Focuses on early revenue validation, cash flow sustainability, and founder resilience.',
    exampleSituation: 'Corporate product manager with 8 years experience exploring a B2B SaaS venture while currently employed.',
    sampleConsultation: {
      userPrompt: 'I have an idea for supply chain compliance software. Should I quit my job immediately and pitch VCs or build on weekends?',
      mentorAnalysis: 'Never quit without de-risking the commercial thesis. The most successful B2B founders secure 3–5 pre-launch Letters of Intent (LOIs) from prospective customers before writing extensive code or raising capital.',
      recommendedMove: 'Conduct 20 customer discovery interviews with target compliance directors and document validated problem statements in your Career Passport.',
      evidenceRationale: 'Institutional investors and accelerator programs rank validated customer discovery far higher than unverified slide decks or untested code.',
    },
    boundaries: [
      'Does not provide registered financial broker-dealer services or securities offering advice.',
      'Does not provide binding legal contracts or entity incorporation filings.',
      'Does not guarantee venture capital funding or business profitability.',
    ],
    relatedPathways: [
      { label: 'Entrepreneurship Pathways', href: '/pathways/entrepreneurship' },
      { label: 'First Job to Startup Pathways', href: '/pathways/first-job' },
      { label: 'Executive Founder Pivots', href: '/pathways/leadership' },
    ],
    relatedResources: [
      { label: 'Venture Creation Playbooks', href: '/resources/entrepreneurship' },
      { label: 'Small Business Skills & Strategy', href: '/resources/guides' },
    ],
  },
};

export const MENTOR_LIST: MentorPersona[] = Object.values(MENTOR_REGISTRY);

export function getMentorBySlug(slug: string): MentorPersona | undefined {
  return MENTOR_REGISTRY[slug];
}

export function getAllMentorSlugs(): string[] {
  return Object.keys(MENTOR_REGISTRY);
}
