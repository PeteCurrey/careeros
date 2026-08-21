export interface PartnerTypeContribution {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  title: string;
  contributes: string[];
  careerOSContributes: string[];
  studentBenefit: string;
  whatYouDoNotAccess: string[];
  nextStep: string;
}

export const PARTNER_TYPES: PartnerTypeContribution[] = [
  {
    id: 'schools',
    category: 'Schools & Districts',
    badge: 'Educational Anchor',
    badgeColor: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
    title: 'High Schools, Academy Trusts & School Districts',
    contributes: [
      'Individual student pastoral care & guidance advisory',
      'School curriculum & local careers education delivery',
      'Designated safeguarding oversight (DSL leadership)',
      'Verification of school-assessed capstones & coursework',
    ],
    careerOSContributes: [
      '24/7 patient AI Career Mentor for every student',
      'Pre-conversation session briefs for counselors',
      'Multi-pathway parity across university, apprenticeships & trades',
      'Cohort-level aggregate analytics without student ranking',
    ],
    studentBenefit:
      'Students explore career pathways continuously between guidance sessions and enter 1:1 meetings with prepared context.',
    whatYouDoNotAccess: [
      'Private mentor reflections and unconsented personal doubts',
      'Non-school personal portfolio evidence kept confidential by student',
    ],
    nextStep: 'Join the Launch School program for secondary cohorts.',
  },
  {
    id: 'employers',
    category: 'Employers',
    badge: 'Workplace Insight',
    badgeColor: 'text-[#6BB8FF] bg-blue-950/40 border-blue-500/30',
    title: 'Enterprise, SME & Public Sector Employers',
    contributes: [
      'Real-world role descriptions & capability requirements',
      'Degree & advanced apprenticeship openings',
      'Work experience, shadowing & insight days',
      'Employer open houses, booth presence & career fair talks',
    ],
    careerOSContributes: [
      'Capability-first role definition (deconstructing job requirements)',
      'Responsible opportunity distribution to qualified talent',
      'Future Employer Agent candidate decision-support integration',
      'Preparation materials for students before meeting employer teams',
    ],
    studentBenefit:
      'Students see authentic workplaces and early career pipelines without being exposed to commercial recruiter cold-outreach.',
    whatYouDoNotAccess: [
      'Private student Career Twins and raw Mentor dialogues',
      'Searchable minor candidate directories or cold-messaging access',
      'School pastoral records or confidential counseling notes',
    ],
    nextStep: 'Submit early-career roles or host an employer insight event.',
  },
  {
    id: 'colleges-unis',
    category: 'Colleges & Universities',
    badge: 'Higher Education',
    badgeColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    title: 'Higher Education, Community Colleges & Technical Institutes',
    contributes: [
      'Academic degree, HND, and foundation course curricula',
      'Objective entry prerequisites and predicted grade thresholds',
      'Campus open days, subject masterclasses, and taster webinars',
      'Graduate destination outcomes and professional accreditations',
    ],
    careerOSContributes: [
      'Side-by-side comparison with degree apprenticeships and vocational routes',
      'Translating academic majors into transferable career trajectories',
      'Objective pathway guidance without paid university league bias',
      'Student preparation for university personal statements and interviews',
    ],
    studentBenefit:
      'Students understand exactly what higher education courses prepare them for—and what alternatives exist—before committing to loans.',
    whatYouDoNotAccess: [
      'Unrestricted contact details for prospective applicants',
      'Ability to purchase higher algorithmic recommendation priority',
    ],
    nextStep: 'Provide course taxonomy data or list upcoming campus open days.',
  },
  {
    id: 'apprenticeships',
    category: 'Apprenticeships',
    badge: 'Work-Based Learning',
    badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
    title: 'Apprenticeship Training Providers & Assessment Bodies',
    contributes: [
      'Standardized apprenticeship framework & standard curriculums',
      'Off-the-job training delivery and employer host matching',
      'End-Point Assessment (EPA) milestones and credentialing',
      'Workplace safety, wage scales, and progression roadmaps',
    ],
    careerOSContributes: [
      'Apprenticeship discovery with equal dignity alongside university degrees',
      'Career Passport tracking of workplace evidence portfolios',
      'Clarifying levy-funded employer vacancies to students and parents',
      'Long-term career compounding beyond initial apprenticeship completion',
    ],
    studentBenefit:
      'Young people discover debt-free qualification pathways with salary progression and clear chartership routes.',
    whatYouDoNotAccess: [
      'Private career exploration logs outside apprenticeship applications',
      'School pastoral and safeguarding records',
    ],
    nextStep: 'Integrate apprenticeship vacancies into Career OS discovery.',
  },
  {
    id: 'training',
    category: 'Training Providers',
    badge: 'Skill Development',
    badgeColor: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
    title: 'Vocational Training Organizations & Technical Academies',
    contributes: [
      'Specialist vocational bootcamps and micro-credentials',
      'Hands-on diagnostic, technical, and digital skill programs',
      'Industry-recognized certification pathways (e.g. AWS, City & Guilds, CompTIA)',
      'Practical workshop and lab-based training opportunities',
    ],
    careerOSContributes: [
      'Mapping technical training directly to Career Graph capability nodes',
      'Highlighting modular bridge requirements for career pivots',
      'Recording verified training completion in Career Passport',
      'Connecting training outcomes to real-world technician and specialist roles',
    ],
    studentBenefit:
      'Learners identify specific skill bridges needed to transition into high-demand technical careers.',
    whatYouDoNotAccess: [
      'Student browsing histories or unrelated career queries',
      'Direct unsolicited promotional marketing feeds',
    ],
    nextStep: 'Map training certifications to Career Graph skill nodes.',
  },
  {
    id: 'credentials',
    category: 'Credential Issuers',
    badge: 'Evidence Provenance',
    badgeColor: 'text-rose-300 bg-rose-950/40 border-rose-500/30',
    title: 'Awarding Bodies, Registrars & Certification Authorities',
    contributes: [
      'Direct verification of academic transcripts and vocational awards',
      'Cryptographic or authoritative registry status checks',
      'License renewal, expiry, and continuing education criteria',
      'Statutory practice entitlement confirmations (e.g. GMC, Bar, NMC, Gas Safe)',
    ],
    careerOSContributes: [
      'Career Passport verifiable evidence ledger architecture',
      '9-state provenance spectrum separating self-claims from issuer checks',
      'User-controlled selective sharing with prospective employers',
      'Clear representation of credential currency and renewal dates',
    ],
    studentBenefit:
      'Individuals own a portable, tamper-evident record of achievement that persists across educational institutions and employers.',
    whatYouDoNotAccess: [
      'Any user portfolio evidence outside the specific verified credential',
      'Private career reflections and AI Mentor coaching history',
    ],
    nextStep: 'Establish credential verification protocol alignment.',
  },
  {
    id: 'professional-bodies',
    category: 'Professional Bodies',
    badge: 'Industry Standards',
    badgeColor: 'text-indigo-300 bg-indigo-950/40 border-indigo-500/30',
    title: 'Chartered Institutes & Professional Associations',
    contributes: [
      'Occupational standards, ethical codes, and competency frameworks',
      'Chartership and professional registration progression pathways (CEng, ACCA, CIPD)',
      'Continuing Professional Development (CPD) guidelines',
      'Sector labor market intelligence and emerging discipline taxonomies',
    ],
    careerOSContributes: [
      'Embedding professional codes into Career Graph pathway topologies',
      'Guiding students on post-qualification chartership progression',
      'Connecting professional student memberships to school careers teams',
      'Honest distinction between entry-level roles and chartered status',
    ],
    studentBenefit:
      'Students understand the long-term professional development requirements of chartered careers from day one.',
    whatYouDoNotAccess: [
      'Unconsented student membership data or marketing lists',
      'Private school counseling workflows',
    ],
    nextStep: 'Review occupational standard taxonomy mapping in Career Graph.',
  },
  {
    id: 'public-workforce',
    category: 'Public & Workforce Bodies',
    badge: 'Regional Economy',
    badgeColor: 'text-teal-300 bg-teal-950/40 border-teal-500/30',
    title: 'Local Authorities, Workforce Development Boards & Skills Hubs',
    contributes: [
      'Regional priority skills strategies and green-economy targets',
      'Subsidised youth employment and retraining initiatives',
      'Labor market growth sectors and industrial development plans',
      'Local transport, childcare, and educational accessibility grants',
    ],
    careerOSContributes: [
      'Cohort-level aggregate insight into regional pathway interest',
      'Connecting local public initiatives to school career fairs',
      'Ensuring rural and underserved schools receive equal pathway breadth',
      'Highlighting public sector, civil service, and emergency pathways',
    ],
    studentBenefit:
      'Young people discover funded local training initiatives and high-growth regional employment opportunities.',
    whatYouDoNotAccess: [
      'Identifiable individual student data or demographic tracking',
      'School-specific individual performance rankings',
    ],
    nextStep: 'Explore regional workforce intelligence and careers event support.',
  },
  {
    id: 'nonprofits',
    category: 'Nonprofits & Charities',
    badge: 'Widening Access',
    badgeColor: 'text-fuchsia-300 bg-fuchsia-950/40 border-fuchsia-500/30',
    title: 'Social Mobility Charities & Community Organizations',
    contributes: [
      'Targeted mentoring and widening participation programs',
      'Support for care-experienced, neurodivergent, or first-generation youth',
      'Specialist bursary, equipment, and travel grant programs',
      'Community-grounded career exploration workshops',
    ],
    careerOSContributes: [
      'Neutral, barrier-free career guidance infrastructure for all learners',
      'Connecting eligible students to verified widening-access initiatives',
      'Career Passport evidence capture for community project participation',
      'Zero commercial paywalls on core individual guidance tools',
    ],
    studentBenefit:
      'Under-represented students gain access to high-caliber career intelligence, mentoring networks, and financial bursaries.',
    whatYouDoNotAccess: [
      'Student personal information without explicit program application consent',
      'Private conversational logs with AI Career Mentor',
    ],
    nextStep: 'Partner on widening-access programs and community initiatives.',
  },
  {
    id: 'events',
    category: 'Event Organizers',
    badge: 'Live Encounters',
    badgeColor: 'text-sky-300 bg-sky-950/40 border-sky-500/30',
    title: 'Career Fair Organizers & Industry Conference Hosts',
    contributes: [
      'Multi-employer recruitment halls and STEM exhibitions',
      'Apprenticeship showcases, hackathons, and skills competitions',
      'Virtual webinars, live employer Q&As, and panel discussions',
      'Industry open days and site visit opportunities',
    ],
    careerOSContributes: [
      'Centralised event discovery across geographical regions and sectors',
      'Pre-event student preparation briefings and tailored questions',
      'Post-event reflection logging and evidence capture in Career Passport',
      'Enforcing strict youth safeguarding standards on all listed events',
    ],
    studentBenefit:
      'Students attend career fairs with tailored prep sheets, knowing exactly which employers to meet and what questions to ask.',
    whatYouDoNotAccess: [
      'Direct marketing lists of student attendees without school registration',
      'Unrestricted contact access to youth attendees',
    ],
    nextStep: 'List your career fair or workshop on the Career OS Events platform.',
  },
];

export interface LocalEcosystemSector {
  sector: string;
  badgeColor: string;
  iconName: string;
  partners: {
    type: string;
    organization: string;
    contribution: string;
  }[];
}

export const LOCAL_ECOSYSTEM_EXAMPLE: LocalEcosystemSector[] = [
  {
    sector: 'Healthcare & Clinical Science',
    badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/40',
    iconName: 'HeartPulse',
    partners: [
      {
        type: 'Regional Hospital Trust',
        organization: 'Illustrative Regional NHS / Health Trust',
        contribution: 'Clinical work shadowing, nursing taster days, paramedic apprenticeships',
      },
      {
        type: 'Community Health Center',
        organization: 'Illustrative Primary Care Network',
        contribution: 'Allied health insight sessions, pharmacy technician pathways',
      },
    ],
  },
  {
    sector: 'Engineering & Advanced Manufacturing',
    badgeColor: 'text-[#6BB8FF] border-blue-500/30 bg-blue-950/40',
    iconName: 'Wrench',
    partners: [
      {
        type: 'Aerospace Components Manufacturer',
        organization: 'Illustrative Precision Engineering Ltd',
        contribution: 'Level 6 Degree Apprenticeships, CAD design workshop challenges',
      },
      {
        type: 'Green Energy Contractor',
        organization: 'Illustrative Renewable Power Systems',
        contribution: 'Wind turbine & solar technician open days, apprenticeship interviews',
      },
    ],
  },
  {
    sector: 'Skilled Trades & Infrastructure',
    badgeColor: 'text-amber-300 border-amber-500/30 bg-amber-950/40',
    iconName: 'Building2',
    partners: [
      {
        type: 'Electrical Contractors Association',
        organization: 'Illustrative Regional Trade Training Center',
        contribution: 'Level 3 Electrotechnical apprenticeships, 18th Edition guidance',
      },
      {
        type: 'Civil Construction Consortium',
        organization: 'Illustrative Infrastructure Builders',
        contribution: 'Surveying work experience, commercial project site tours',
      },
    ],
  },
  {
    sector: 'Higher & Further Education',
    badgeColor: 'text-purple-300 border-purple-500/30 bg-purple-950/40',
    iconName: 'GraduationCap',
    partners: [
      {
        type: 'Regional Technical College',
        organization: 'Illustrative Community Technical Institute',
        contribution: 'BTEC HND programs, dual-credit options, vocational labs',
      },
      {
        type: 'Civic University',
        organization: 'Illustrative State / Civic University',
        contribution: 'STEM masterclasses, campus taster days, degree admissions clarity',
      },
    ],
  },
  {
    sector: 'Public Service & Civic Emergency',
    badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40',
    iconName: 'Shield',
    partners: [
      {
        type: 'Fire & Rescue Authority',
        organization: 'Illustrative Regional Fire Service',
        contribution: 'Fitness standards guidance, firefighter apprenticeship intakes',
      },
      {
        type: 'Local Government Authority',
        organization: 'Illustrative County / Municipal Council',
        contribution: 'Public administration apprenticeships, urban planning talks',
      },
    ],
  },
];

export interface GovernanceStep {
  step: string;
  stage: string;
  title: string;
  checks: string[];
  outcome: string;
  outcomeColor: string;
}

export const OPPORTUNITY_GOVERNANCE_STEPS: GovernanceStep[] = [
  {
    step: '01',
    stage: 'Identity & Entity Verification',
    title: 'Organizer / Employer Identity Check',
    checks: [
      'Confirmed registered business or accredited educational institution entity',
      'Verified corporate email domain and authorized contact credentials',
      'Review against banned entity lists and commercial dispute registries',
    ],
    outcome: 'Entity Authenticated',
    outcomeColor: 'text-emerald-400',
  },
  {
    step: '02',
    stage: 'Youth Safeguarding & Age Suitability',
    title: 'Age-Appropriate Standard Audit',
    checks: [
      'Strict prohibition of minor direct messaging or unmoderated chat',
      'Clear compliance with statutory youth working hours and hazardous environment laws',
      'School or guardian consent requirement flagged where applicable (13–15 vs 16+)',
    ],
    outcome: 'Safeguarding Cleared',
    outcomeColor: 'text-[#6BB8FF]',
  },
  {
    step: '03',
    stage: 'Opportunity Information Quality',
    title: 'Salary, Wage & Requirement Transparency',
    checks: [
      'Transparent hourly wage or apprentice pay scale clearly stated (no unpaid commercial roles)',
      'Objective entry prerequisites and credential criteria defined',
      'Clear physical location, remote working arrangements, and transit feasibility',
    ],
    outcome: 'Information Complete',
    outcomeColor: 'text-purple-400',
  },
  {
    step: '04',
    stage: 'Commercial Disconnect from Advice',
    title: 'Anti-Pay-to-Influence Gate',
    checks: [
      'Paid event promotion clearly labeled as "Promoted Opportunity"',
      'Strict separation from Career Mentor independent advice and Career Graph topology',
      'Payment never guarantees algorithmic recommendation or ranking priority',
    ],
    outcome: 'Independence Protected',
    outcomeColor: 'text-amber-400',
  },
  {
    step: '05',
    stage: 'Editorial Decision & Distribution',
    title: 'Publish / Review / Reject Workflow',
    checks: [
      'Final human editorial sign-off for school-facing career events and vacancies',
      'Published to relevant regional and sector discovery streams',
      'Immediate retraction and suspension mechanism upon community report',
    ],
    outcome: 'Published with Standards',
    outcomeColor: 'text-emerald-400 font-bold',
  },
];

export const PARTNERSHIP_FAQ = [
  {
    q: 'What is a Career OS Partner?',
    a: 'A Career OS Partner is an accredited organization—such as a school, employer, college, apprenticeship provider, training academy, professional body, or charity—that contributes authentic career insights, verified educational pathways, training opportunities, or career events to the Career OS ecosystem around learners, without ever owning or restricting the individual student’s career journey.',
  },
  {
    q: 'Who can partner with Career OS?',
    a: 'We partner with accredited secondary schools, school districts, universities, vocational community colleges, licensed apprenticeship training providers, verified commercial and public-sector employers, professional chartered institutes, credential awarding bodies, and registered social mobility non-profits.',
  },
  {
    q: 'Can employers become Career OS partners?',
    a: 'Yes. Employers partner by contributing capability-first job briefs, degree and advanced apprenticeships, work shadowing days, and participating in school career events. Employers contribute real workplace knowledge and opportunities, but are strictly prohibited from cold-messaging minors or buying unrestricted access to student profiles.',
  },
  {
    q: 'Can colleges and universities become partners?',
    a: 'Yes. Higher and further education providers contribute objective course descriptions, entry prerequisites, open-day calendars, and subject masterclasses. Career OS displays university and college programs alongside apprenticeships and trades with strict architectural parity, without paid university rankings.',
  },
  {
    q: 'Can apprenticeship providers join the ecosystem?',
    a: 'Yes. Apprenticeship providers play a central role. They contribute framework standards, off-the-job training curricula, and employer vacancies. Career OS helps demystify apprenticeship wages, qualifications, and long-term career progression for students and parents.',
  },
  {
    q: 'Can vocational training organizations join?',
    a: 'Yes. Technical academies and training providers can map their specialized certifications (e.g. AWS, City & Guilds, CompTIA) directly to Career Graph skill nodes, helping students and career changers understand modular bridge requirements.',
  },
  {
    q: 'Can professional bodies partner with Career OS?',
    a: 'Yes. Chartered institutes and professional associations contribute competency frameworks, ethical codes, chartership roadmaps (such as CEng, ACCA, or CIPD), and sector labor market intelligence to ensure students understand professional standards from early exploration.',
  },
  {
    q: 'Can credential issuers integrate with Career Passport?',
    a: 'Credential awarding bodies can establish verified provenance protocols with Career Passport, allowing students to hold tamper-evident, portable proof of their qualifications that they can share selectively with employers.',
  },
  {
    q: 'Can charities and non-profit organizations partner with Career OS?',
    a: 'Yes. Social mobility charities, widening-access foundations, and youth organizations contribute mentoring programs, specialist bursaries, and community workshops to ensure underserved young people have equal access to career infrastructure.',
  },
  {
    q: 'Can government and regional workforce bodies partner?',
    a: 'Yes. Local authorities, regional enterprise partnerships, and workforce boards can contribute local skills priority data, public sector initiatives, and funded training schemes to connect regional economic needs with school careers programs.',
  },
  {
    q: 'Can event organizers list career fairs on Career OS?',
    a: 'Yes. Verified organizers can submit career fairs, apprenticeship exhibitions, university open days, and employer insight webinars to the Career OS Events platform, subject to editorial review and youth safeguarding standards.',
  },
  {
    q: 'Can partners promote paid opportunities on Career OS?',
    a: 'Where commercial promotion is permitted (such as promoted events or verified employer listings), it is always explicitly labeled as "Promoted" or "Sponsored". Promotion increases visibility within event discovery directories, but never alters AI Career Mentor guidance or algorithmic pathway recommendations.',
  },
  {
    q: 'Does paying Career OS make an opportunity more likely to be recommended by the AI Mentor?',
    a: 'Never. Commercial relationships and payment are strictly segregated from AI Career Mentor advice and Career Graph pathway topology. An employer or university cannot buy recommendation priority or pay to be presented as a "best career match".',
  },
  {
    q: 'Can partners access student Career Twins?',
    a: 'No. The Career Twin is a private developmental space belonging to the individual user. Partner organizations cannot browse, search, or inspect private user reflections, exploratory questions, or personal goals.',
  },
  {
    q: 'Can partners read student conversations with the AI Career Mentor?',
    a: 'Never. Mentor conversations are private to the student to ensure psychological safety. Neither employers, universities, nor training partners have access to conversational transcripts.',
  },
  {
    q: 'Can commercial employers search a directory of minor students?',
    a: 'No. We strictly prohibit recruiter cold-sourcing and searchable directories of users under 18. All youth engagement occurs through school-facilitated events, structured applications, or institutional programs.',
  },
  {
    q: 'Can employers contact students directly without school involvement?',
    a: 'For minors, unsolicited cold-messaging is strictly blocked. Any communication regarding internships, apprenticeships, or work experience follows transparent application channels governed by institutional policy and guardian oversight.',
  },
  {
    q: 'How does Career OS protect minors when interacting with partners?',
    a: 'We enforce age-appropriate boundary gates (16+ direct account, 13–15 school/guardian framework, <13 strict institutional only), prohibit unmoderated chat, audit opportunities for safety, and maintain immediate escalation to school safeguarding leads.',
  },
  {
    q: 'How are partner organizations vetted and reviewed?',
    a: 'All prospective partners undergo entity authentication, domain verification, and review against our Partner & Opportunity Standards before publishing events or opportunities.',
  },
  {
    q: 'Are all Career OS partners independently background-checked?',
    a: 'We verify registered corporate and institutional entity status and audit listed opportunities. We do not claim universal police background checks for all corporate staff; school-based contact remains governed by school visitor and safeguarding policies.',
  },
  {
    q: 'How are opportunities and vacancies reviewed?',
    a: 'Opportunities pass through our 5-stage governance pipeline: entity check, age suitability audit, wage transparency check, anti-pay-to-influence check, and editorial sign-off.',
  },
  {
    q: 'How are events reviewed for safety and relevance?',
    a: 'Events must clearly specify format, age suitability, physical or virtual location security, participating organizations, and agenda. Unverified commercial sales pitches disguised as career talks are rejected.',
  },
  {
    q: 'Can schools choose which local partners participate in their careers program?',
    a: 'Yes. School leadership and careers teams retain full institutional discretion over which local employers, colleges, and event organizers are invited to participate in their school-specific careers calendar.',
  },
  {
    q: 'Can a school restrict certain partners or opportunity types?',
    a: 'Yes. School institutional workspaces allow administrators to set policy parameters aligned with curriculum priorities, ensuring local institutional control.',
  },
  {
    q: 'Does Career OS charge partners to join the ecosystem?',
    a: 'Core partnership participation for schools, non-profits, and educational bodies is free. Commercial employers and enterprise event organizers may pay for value-added recruitment tools or promoted event listings, under strict transparency rules.',
  },
  {
    q: 'Are Career OS partnerships exclusive?',
    a: 'No. We believe in an open, inclusive careers ecosystem. We do not grant exclusive commercial monopoly rights to any employer, university, or training provider within a sector or geographic region.',
  },
  {
    q: 'Does Career OS share student data with commercial partners?',
    a: 'We never sell student personal data to third-party advertisers or data brokers. Data sharing occurs exclusively with explicit user consent when a student deliberately submits an application for an opportunity or event.',
  },
  {
    q: 'How does an organization apply to become a Career OS partner?',
    a: 'Organizations submit an enquiry through the Partner Application Form on this page. Our partnerships and ethics team reviews proposed contributions, checks entity credentials, and designs a tailored pilot onboarding plan.',
  },
];
