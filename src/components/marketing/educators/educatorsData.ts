export interface StudentPrepScenario {
  id: string;
  tag: string;
  name: string;
  yearGroup: string;
  headline: string;
  statusBadge: string;
  statusStyle: string;
  currentExploration: {
    title: string;
    pathways: string[];
    description: string;
  };
  evidenceLogged: {
    item: string;
    source: string;
    status: string;
  }[];
  studentQuestion: string;
  uncertainties: string[];
  educatorSummary: string;
  suggestedPrompts: string[];
  possibleNextActions: string[];
  privacyPreservation: string;
}

export const STUDENT_PREP_SCENARIOS: StudentPrepScenario[] = [
  {
    id: 'student-a',
    tag: 'EXPLORING & COMPARING',
    name: 'Student A (Anonymised)',
    yearGroup: 'Year 11 / Grade 11',
    headline: 'Healthcare & Clinical Science',
    statusBadge: '1:1 Guidance Requested',
    statusStyle: 'bg-blue-500/10 text-[#6BB8FF] border-blue-500/20',
    currentExploration: {
      title: 'Comparing Clinical Pathways',
      pathways: ['BSc Adult Nursing (University)', 'Paramedic Science Degree Apprenticeship', 'Physiotherapy Direct Entry'],
      description: 'Student has completed exploratory modules across three healthcare specialisms. They understand clinical qualifications are required, but are uncertain whether full-time campus study or an employment-based apprenticeship suits their practical learning style.',
    },
    evidenceLogged: [
      { item: 'Voluntary Care Home Placement (12 hours)', source: 'Student Self-Reported', status: 'Context Only' },
      { item: 'Biology Extended Project: Respiratory Physiology', source: 'School Assessed', status: 'Academic Record' },
      { item: 'St John Ambulance Youth First Aid Certification', source: 'External Certificate', status: 'Logged' },
    ],
    studentQuestion: 'How different are the actual day-to-day working environments between hospital ward nursing and paramedic dispatch?',
    uncertainties: [
      'Shift work demands vs regular hours',
      'Tuition fee burden vs apprenticeship wages',
      'Clinical placement locations and travel requirements',
    ],
    educatorSummary: 'Student has high baseline interest in patient care but needs human guidance on practical vocational realities rather than more academic course listings.',
    suggestedPrompts: [
      'What appealed to you most during your care home volunteering?',
      'Have you considered how 12-hour rotating shift patterns might fit your daily routine?',
      'Let’s look at the entry criteria for the regional NHS Trust apprenticeship intake.',
    ],
    possibleNextActions: [
      'Connect student with the regional NHS Trust school-liaison open day.',
      'Suggest talking with the science department regarding chemistry prerequisite requirements.',
      'Encourage student to draft a 3-point reflection on clinical vs laboratory settings in their Career Passport.',
    ],
    privacyPreservation: 'Personal reflections on family health experiences and private mentor dialogues remain segregated and strictly with the student.',
  },
  {
    id: 'student-b',
    tag: 'TECHNICAL APPRENTICESHIP',
    name: 'Student B (Anonymised)',
    yearGroup: 'Year 11 / Grade 11',
    headline: 'Engineering & Advanced Diagnostics',
    statusBadge: 'Advising Follow-up Scheduled',
    statusStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    currentExploration: {
      title: 'Electro-Mechanical & Aerospace Routes',
      pathways: ['Level 4 Advanced Engineering Apprenticeship', 'BEng Mechanical Engineering (University)', 'College Higher National Diploma (HND)'],
      description: 'Strong practical inclination with extensive extracurricular workshop projects. Unsure if choosing an apprenticeship will create a ceiling on chartered engineer status later.',
    },
    evidenceLogged: [
      { item: 'VEX Robotics Competition Finalist Portfolio', source: 'Extracurricular Record', status: 'Logged' },
      { item: 'Design & Technology CNC Milling Practical Assessed Piece', source: 'School Assessed', status: 'Academic Record' },
      { item: 'Weekend Automotive Restoration Project Journal', source: 'Student Self-Reported', status: 'Context Only' },
    ],
    studentQuestion: 'Will taking an advanced apprenticeship prevent me from becoming a Chartered Engineer (CEng) later compared to doing a university degree first?',
    uncertainties: [
      'Long-term accreditation pathways via Institution of Mechanical Engineers (IMechE)',
      'Employer funding for degree top-ups after Level 4',
      'Application timeline differences (apprenticeships hire earlier than college application deadlines)',
    ],
    educatorSummary: 'Student has exceptional practical aptitude and portfolio evidence. Needs reassurance on career progression frameworks and guidance on employer recruitment cycles.',
    suggestedPrompts: [
      'Many engineering apprentices complete degree top-ups fully sponsored by their employer—have you reviewed the aerospace levy programs?',
      'Let’s look at how your robotics portfolio can be structured for technical employer interviews.',
      'Would you like to dual-track university applications as a backup while targeting top apprenticeship schemes?',
    ],
    possibleNextActions: [
      'Support student with employer aptitude test preparation resources.',
      'Review resume/evidence format for engineering apprenticeship submission.',
      'Set calendar reminder for early October employer vacancy openings.',
    ],
    privacyPreservation: 'Personal salary expectations and mobility preferences are in student control and not shared across the school.',
  },
  {
    id: 'student-c',
    tag: 'BROAD EXPLORATION (NOT BEHIND)',
    name: 'Student C (Anonymised)',
    yearGroup: 'Year 10 / Grade 10',
    headline: 'Multi-Disciplinary Exploration',
    statusBadge: 'Broad Discovery Phase',
    statusStyle: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    currentExploration: {
      title: 'Exploring Varied Sectors',
      pathways: ['Media Production & Digital Arts', 'Environmental Conservation & Ecology', 'Civil Construction Project Management'],
      description: 'Student has actively explored disparate domains without settling on a single trajectory. This represents healthy developmental curiosity, not a deficit or risk state.',
    },
    evidenceLogged: [
      { item: 'School Magazine Photography & Editorial Contributor', source: 'Extracurricular Record', status: 'Logged' },
      { item: 'Geography Fieldwork Environmental Survey', source: 'School Assessed', status: 'Academic Record' },
      { item: 'Duke of Edinburgh Bronze Expedition', source: 'External Certificate', status: 'Logged' },
    ],
    studentQuestion: 'I enjoy creative media and outdoor environmental science—do I have to pick one sector right now, or can I keep my options open?',
    uncertainties: [
      'Course selection for grades 11 and 12 (AP / IB / dual enrollment / CTE pathways)',
      'Fear of closing doors early',
      'Understanding which core transferable skills link creative and analytical fields',
    ],
    educatorSummary: 'Healthy exploratory posture. No need for artificial narrowing. Help student identify core working environment preferences (outdoor vs studio vs office).',
    suggestedPrompts: [
      'What did you enjoy most about the fieldwork survey compared to classroom work?',
      'Have you considered roles that blend communication and science, like environmental journalism or sustainable architectural planning?',
      'Let’s focus on picking subjects that keep maximum pathway breadth open for you.',
    ],
    possibleNextActions: [
      'Guide student through subject prerequisite matrix to ensure science and humanities options remain viable.',
      'Encourage student to log one creative and one scientific micro-project over the term.',
      'Schedule a light check-in next term after preliminary option choices.',
    ],
    privacyPreservation: 'Private exploration topics and self-doubt reflections are strictly confidential to the student.',
  },
  {
    id: 'student-d',
    tag: 'LEGITIMATE DIRECTION CHANGE',
    name: 'Student D (Anonymised)',
    yearGroup: 'Year 11 / Grade 11',
    headline: 'Pivoting from Corporate to Skilled Trades',
    statusBadge: 'Direction Shift Logged',
    statusStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    currentExploration: {
      title: 'Pivoting to High-Skill Electrical Installation',
      pathways: ['Level 3 Electrotechnical Apprenticeship', 'Renewable Energy Systems Installation', 'College Electrical Installation Certificate'],
      description: 'Previously focused on corporate finance and business administration. After practical work experience, student discovered a strong preference for active, hands-on, problem-solving technical work in renewable infrastructure.',
    },
    evidenceLogged: [
      { item: 'Business Studies Mock Enterprise Project', source: 'School Assessed', status: 'Academic Record' },
      { item: '1-Week Electrical Contractor Work Shadowing', source: 'Verified Employer Log', status: 'Logged' },
      { item: 'Mathematics Grade 7 Progress Tracking', source: 'School Assessed', status: 'Academic Record' },
    ],
    studentQuestion: 'My family expected me to study business at university, but after work shadowing an electrician, I really want to qualify in electrical installation and renewables. How do I explain this choice?',
    uncertainties: [
      'Parental perception of vocational trades vs traditional university degrees',
      'Earning potential and career progression from apprentice to independent contractor / business owner',
      'Math and physics prerequisites for renewable microgeneration certifications',
    ],
    educatorSummary: 'Constructive and deliberate pivot based on real-world work shadowing. Educator can provide neutral labor market data on electrical contractor earnings and entrepreneurship routes to assist family discussions.',
    suggestedPrompts: [
      'What specifically stood out during your electrical work shadowing compared to office environments?',
      'Did you know that commercial electrical contractors and renewable installers often build highly successful independent businesses?',
      'Let’s assemble some clear pathway data on apprenticeship wages, qualification steps, and master contractor licensing that you can discuss at home.',
    ],
    possibleNextActions: [
      'Provide student with the Renewable Energy Apprenticeship overview document.',
      'Offer a supportive joint meeting with parents/guardians if the student would find it helpful.',
      'Confirm application deadline for local electrotechnical training provider.',
    ],
    privacyPreservation: 'Family discussion notes and personal hesitation points remain private to the student unless joint disclosure is requested.',
  },
];

export interface WorkspaceTabItem {
  id: string;
  title: string;
  badge: string;
  badgeCount?: number;
  description: string;
}

export const WORKSPACE_TABS: WorkspaceTabItem[] = [
  { id: 'today', title: 'Today’s Guidance', badge: 'Active Workflow', badgeCount: 4, description: 'Upcoming prepared student conversations and explicit student follow-up requests.' },
  { id: 'students', title: 'Cohort Directory', badge: 'Context View', badgeCount: 148, description: 'Anonymised developmental context and student exploration states.' },
  { id: 'pathways', title: 'Pathway Distribution', badge: 'Aggregate Intelligence', description: 'Cohort-level exploration trends across university, apprenticeships, trades, and direct entry.' },
  { id: 'evidence', title: 'Evidence & Passports', badge: 'Skills & Portfolios', description: 'Overview of verified school projects, work experience logs, and external certifications.' },
  { id: 'events', title: 'Career Events', badge: 'Future Module', description: 'Upcoming career fairs, employer spotlights, apprenticeship workshops, and campus visits.' },
];

export const WORKSPACE_TODAY_ITEMS = [
  {
    time: '09:00 AM',
    student: 'Jordan M. (Year 11)',
    tag: 'Apprenticeship vs BEng',
    status: '1:1 Scheduled',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    prepSummary: 'Comparing Degree Apprenticeship with BSc Electrical Engineering. Robotics project logged in Career Passport.',
    actionRequired: 'Clarify math entry thresholds for degree apprenticeship partner employers.',
  },
  {
    time: '10:30 AM',
    student: 'Elena R. (Year 11)',
    tag: 'Clinical Healthcare',
    status: 'Follow-up Requested',
    statusColor: 'text-[#6BB8FF] bg-blue-500/10 border-blue-500/20',
    prepSummary: 'Student requested guidance on nursing placement realities after completing AI Mentor healthcare modules.',
    actionRequired: 'Provide regional NHS trust work shadowing contacts.',
  },
  {
    time: '01:15 PM',
    student: 'Marcus K. (Year 10)',
    tag: 'Subject Options',
    status: 'Options Guidance',
    statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    prepSummary: 'Broad exploration between creative media and environmental science. Seeking options breadth advice.',
    actionRequired: 'Review curriculum balance to keep both vocational and academic doors open.',
  },
  {
    time: '02:45 PM',
    student: 'Tariq A. (Year 11)',
    tag: 'Electrical Apprenticeship',
    status: 'Family Discussion Prep',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    prepSummary: 'Pivoted from business to skilled trades after work shadowing. Needs neutral earning and progression data.',
    actionRequired: 'Assemble electrotechnical career roadmap for family consultation.',
  },
];

export const MULTI_PATHWAY_ROUTES = [
  {
    id: 'uni',
    title: 'University Degree (BEng / MEng)',
    badge: 'Higher Education',
    badgeColor: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
    duration: '3–4 Years Full-Time',
    environment: 'Campus lecture theaters, research laboratories, independent academic study.',
    costStructure: 'Standard tuition fee loans + living maintenance loans.',
    evidenceProduced: 'Academic degree transcript, dissertation research, student society leadership.',
    typicalDestination: 'Graduate engineering rotational programs, research & design consultancies.',
    educatorRole: 'Support the college essay, review GPA projections, explore scholarships and financial aid.',
  },
  {
    id: 'apprentice',
    title: 'Degree Apprenticeship (Level 6)',
    badge: 'Employed Learning',
    badgeColor: 'text-[#6BB8FF] bg-blue-950/40 border-blue-500/30',
    duration: '4–5 Years Employed',
    environment: '4 days per week in commercial engineering facility + 1 day funded university study.',
    costStructure: 'Zero tuition fees (employer levy funded) + full competitive apprentice salary from Day 1.',
    evidenceProduced: 'Commercial engineering project portfolios, workplace safety logs, BEng degree.',
    typicalDestination: 'Immediate progression into substantive senior technician or project engineer role at host employer.',
    educatorRole: 'Assist with employer assessment center prep, technical portfolio presentation, early application timelines.',
  },
  {
    id: 'college',
    title: 'Technical College HND / Foundation',
    badge: 'Vocational Higher Ed',
    badgeColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    duration: '2 Years Full-Time / Part-Time',
    environment: 'Vocational workshops, computer-aided design suites, hands-on diagnostic bays.',
    costStructure: 'Lower tuition fee scale + flexible local study options allowing part-time employment.',
    evidenceProduced: 'BTEC Higher National Diploma, practical diagnostic assessments, CAD project portfolios.',
    typicalDestination: 'Direct entry as engineering technician or final-year university top-up degree.',
    educatorRole: 'Highlight flexible progression routes, local college partnerships, modular credit transfer.',
  },
  {
    id: 'trades',
    title: 'Advanced Skilled Trades (Level 3)',
    badge: 'Practical Craft & Licensure',
    badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
    duration: '3–4 Years Indentured',
    environment: 'Job site construction, commercial maintenance plants, technical training centers.',
    costStructure: 'Employed wage from start; employer covers college block-release training costs.',
    evidenceProduced: 'NVQ Level 3 portfolio, statutory electrical / gas safety certification, site logbook.',
    typicalDestination: 'Fully licensed qualified tradesperson, site supervisor, or independent contracting business owner.',
    educatorRole: 'Demystify trade licensures, provide objective wage and contractor growth data to students and parents.',
  },
  {
    id: 'direct',
    title: 'Direct Technician Entry & Armed Forces',
    badge: 'Technical Service',
    badgeColor: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
    duration: 'Structured Career Trajectory',
    environment: 'Defense engineering facilities, military logistics bases, civil aerospace maintenance depots.',
    costStructure: 'Fully paid military / defense salary + free accommodation and world-class certified technical training.',
    evidenceProduced: 'Military technical trade qualifications, security clearances, leadership accreditation.',
    typicalDestination: 'Chartered military technical officer, commercial defense contractor, aviation engineer.',
    educatorRole: 'Review defense bursary schemes, physical/academic entry criteria, return of service obligations.',
  },
];

export const PRIVACY_ACCESS_FIELDS = [
  {
    field: 'Career Families & Sectors Explored',
    student: 'Full Control',
    mentor: 'Active Context',
    educator: 'Aggregated & Permissioned Context',
    employer: 'Restricted (Zero Access)',
    note: 'Educators see broad exploration areas to prepare useful meetings without inspecting private searches.',
  },
  {
    field: 'Private Reflections & Personal Uncertainties',
    student: 'Private to Student',
    mentor: 'Conversational Memory Only',
    educator: 'Zero Access (Confidential)',
    employer: 'Zero Access (Strictly Segregated)',
    note: 'Personal doubts, family circumstances, and self-esteem reflections remain strictly with the student.',
  },
  {
    field: 'School-Assessed Projects & Portfolios',
    student: 'Owner & Curator',
    mentor: 'Context for Feedback',
    educator: 'Institutional Access (School Context)',
    employer: 'Only if Student Consents to Share',
    note: 'Academic and vocational evidence logged within school programs is visible to school careers staff.',
  },
  {
    field: '1:1 Guidance Meeting Requests & Topics',
    student: 'Initiates Request',
    mentor: 'Can Suggest Meeting',
    educator: 'Direct Guidance Workflow',
    employer: 'Zero Access',
    note: 'When a student asks to speak with their school counselor, the stated topic and question are routed directly.',
  },
  {
    field: 'Formal Qualifications & Predicated Grades',
    student: 'View & Manage',
    mentor: 'Prerequisite Check Context',
    educator: 'School Academic System Record',
    employer: 'Only upon Verified Application',
    note: 'Qualifications are governed under school records and only shared externally with explicit student authorization.',
  },
  {
    field: 'Employer Shared Applications & Messages',
    student: 'Consents & Sends',
    mentor: 'Drafting Support Only',
    educator: 'Advisory Oversight (Where Appropriate)',
    employer: 'Candidate-Authorized Profile Only',
    note: 'Under-18 students are protected from unrestricted employer outreach; all opportunities follow school policy.',
  },
];

export const COHORT_PATHWAY_STATS = [
  { label: 'University / Higher Education', percentage: 42, count: '62 students', color: 'bg-purple-500' },
  { label: 'Degree & Advanced Apprenticeships', percentage: 31, count: '46 students', color: 'bg-[#2F8FFF]' },
  { label: 'Technical Colleges & HNDs', percentage: 14, count: '21 students', color: 'bg-emerald-500' },
  { label: 'Skilled Trades & Practical Licensure', percentage: 8, count: '12 students', color: 'bg-amber-500' },
  { label: 'Public Service, Defense & Direct Entry', percentage: 5, count: '7 students', color: 'bg-cyan-500' },
];

export const COHORT_SECTOR_STATS = [
  { sector: 'Engineering, Manufacturing & Tech', percentage: 34, color: 'bg-blue-400' },
  { sector: 'Healthcare, Nursing & Clinical Sciences', percentage: 26, color: 'bg-emerald-400' },
  { sector: 'Business, Economics & Finance', percentage: 18, color: 'bg-purple-400' },
  { sector: 'Creative Arts, Media & Digital Design', percentage: 12, color: 'bg-amber-400' },
  { sector: 'Public Service, Environmental & Law', percentage: 10, color: 'bg-cyan-400' },
];

export const IMPLEMENTATION_STEPS = [
  {
    number: '01',
    title: 'Listen & Understand',
    description: 'We meet with your careers leader, counselors, and leadership to understand your school’s current career program, Gatsby Benchmark / framework commitments, and specific student demographics.',
  },
  {
    number: '02',
    title: 'Align Guidance Touchpoints',
    description: 'Define where Career OS adds leverage—such as Year 10/11 options preparation, Year 12 apprenticeship workshops, or supporting one-to-one careers interview workflows.',
  },
  {
    number: '03',
    title: 'Educator Familiarisation',
    description: 'Walk through both student and educator surfaces with your team so every counselor understands what students experience, what context is shared, and how privacy boundaries operate.',
  },
  {
    number: '04',
    title: 'Targeted Cohort Pilot',
    description: 'Deploy Career OS with a single year group or exploratory cohort. Students begin exploratory dialogues with their AI Mentor and start building Career Passport evidence.',
  },
  {
    number: '05',
    title: 'Review & Student Feedback',
    description: 'Gather qualitative feedback from counselors on session preparation quality and from students on pathway clarity. Identify any unique institutional needs.',
  },
  {
    number: '06',
    title: 'Refine Guidance Workflows',
    description: 'Customize meeting request categories, integrate local employer and college opportunities, and tune follow-up queues to match counseling department capacity.',
  },
  {
    number: '07',
    title: 'Sustainable Whole-School Scale',
    description: 'Expand across all secondary cohorts, ensuring every student has continuous career support from early exploration through post-secondary transition.',
  },
];

export const EDUCATORS_FAQ = [
  {
    q: 'Does Career OS replace career counselors or guidance advisers?',
    a: 'No. Career OS is explicitly built to augment educators, not replace them. The platform handles exploratory heavy-lifting between appointments—helping students research pathways, understand entry criteria, and log evidence—so human counselors can spend their limited 1:1 time having nuanced, high-judgment conversations rather than rediscovering basic context.',
  },
  {
    q: 'What does the AI Career Mentor do between educator meetings?',
    a: 'The Career Mentor acts as an always-available, patient exploration partner for students. It answers clarifying questions about industries, compares university and vocational routes, suggests evidence-building activities (like school clubs or work shadowing), and helps students formulate clear questions for their next conversation with a human counselor.',
  },
  {
    q: 'Can educators read private student conversations with the AI Mentor?',
    a: 'No. In order for students to explore authentically without fear of judgment, private conversational reflections and self-doubt are confidential to the student. Educators receive high-level, structured context—such as career families explored, pathways compared, and specific questions the student requested help with.',
  },
  {
    q: 'What information can educators actually access in their workspace?',
    a: 'Depending on your school’s configuration and student permissions, educators see: pathways currently being compared, evidence items logged to the student’s Career Passport, student-initiated meeting requests with specific discussion topics, and agreed action items from previous sessions.',
  },
  {
    q: 'Can an educator see every student’s Career Twin?',
    a: 'Educators see the educational and career guidance context appropriate to their institutional role. They do not have unrestrained access to private personal notes or non-school-related career reflections that the student has kept private.',
  },
  {
    q: 'How do students request human counselor support inside Career OS?',
    a: 'At any point during exploration, a student can tap "Request 1:1 Guidance" inside their mentor interface. They are prompted to state what specific question or pathway decision they would like to discuss. This populates the educator’s follow-up queue with context.',
  },
  {
    q: 'How does Career OS prioritize follow-up requests without scoring students?',
    a: 'Prioritization is strictly event-based and workflow-based, never person-based. Requests are ordered by explicit criteria such as: student requested a meeting, upcoming application deadlines, or an agreed follow-up date set by the counselor. There is zero algorithmic ranking or risk scoring of children.',
  },
  {
    q: 'Does Career OS calculate student employability or "career-readiness" scores?',
    a: 'Never. We reject reductive algorithmic scoring, employability percentages, and red/amber/green student ratings. Career exploration is non-linear and developmental. Reducing a young person to an AI score is pedagogically harmful and ethically unacceptable.',
  },
  {
    q: 'How does Career OS ensure equal visibility for university and non-university routes?',
    a: 'The platform treats university degrees, degree apprenticeships, technical colleges (HND/Foundation), skilled trades (NVQ/City & Guilds), and public service pathways with rigorous architectural parity. University is never presented as the default or superior option.',
  },
  {
    q: 'How does the platform support students interested in skilled trades?',
    a: 'Career OS breaks down technical trade pathways into clear licensing milestones (e.g. 18th Edition Electrical, Gas Safe, NVQ Level 3), explains apprentice wage scales, demonstrates contractor progression, and shows real evidence requirements for practical trades.',
  },
  {
    q: 'Can Career OS support military and public-service pathways?',
    a: 'Yes. The system includes detailed information on military technical apprenticeships, civil emergency services (paramedic, police, fire & rescue), public administration, and charitable sector careers alongside commercial sector roles.',
  },
  {
    q: 'What evidence can students add to their Career Passport?',
    a: 'Students can document school coursework projects, STEM competitions, arts portfolios, work experience journals, volunteering hours, part-time jobs, and extracurricular achievements. Career OS helps students recognize the transferable capability inside everyday school activities.',
  },
  {
    q: 'Is all Career Passport evidence verified?',
    a: 'No. Career OS maintains an explicit evidence spectrum. Self-reported projects are clearly marked as context, while school-assessed coursework, employer work-experience sign-offs, and external certificates maintain verified provenance. This ensures absolute honesty and transparency.',
  },
  {
    q: 'Can educators verify student evidence logged in the school context?',
    a: 'Yes. School careers teams and teachers can confirm completion of school-led work experience, internal capstone projects, and vocational workshop milestones, adding high-signal verification to the student’s Career Passport.',
  },
  {
    q: 'How does Career OS protect student privacy and data rights?',
    a: 'We operate under strict data protection principles. Career OS never sells student data to third-party advertisers or commercial brokers. Student data is processed strictly for educational and career guidance purposes under secure role-based access controls.',
  },
  {
    q: 'How does the platform handle students aged 13–15 versus 16+?',
    a: 'For students aged 13–15, accounts operate under approved institutional arrangements or verified guardian frameworks with strict youth safeguards. Students aged 16+ can maintain individual career accounts while participating in their school’s career workspace.',
  },
  {
    q: 'Can students under 13 use Career OS?',
    a: 'No open consumer accounts are permitted for children under 13. Any exploratory access for under-13s is strictly institutional and subject to verified legal and institutional compliance.',
  },
  {
    q: 'How does safeguarding work when a student is using the platform?',
    a: 'Career OS does not attempt to autonomously diagnose mental health or safeguarding risks. The platform incorporates age-appropriate boundaries, explicit disclosures, and clear signposting to human school safeguarding leads and emergency support services whenever sensitive concerns arise.',
  },
  {
    q: 'Can external employers contact high school students directly on Career OS?',
    a: 'No. Minors are strictly protected from unsolicited commercial recruiter contact. Employer engagement occurs exclusively through school-approved career events, verified apprenticeship listings, and structured institutional pathways governed by school policy.',
  },
  {
    q: 'How will Career OS connect with future school career events?',
    a: 'In future releases, the Career OS Events module will allow schools to publish internal career fairs, employer visits, and university webinars directly to student feeds, with preparation materials automatically provided before each session.',
  },
  {
    q: 'What happens to a student’s Career OS account when they graduate or leave school?',
    a: 'The individual’s career relationship continues beyond school. While school-specific administrative records remain governed by school retention policies, the student retains their personal Career Passport evidence and Career Twin context for their lifelong career journey.',
  },
  {
    q: 'Does Career OS integrate with school Information Systems (SIS / MIS) and Single Sign-On (SSO)?',
    a: 'SSO (SAML, Google Workspace for Education, Microsoft 365) and standardized roster integrations (e.g. OneRoster, Wonde) are part of our designed enterprise architecture for institutional deployments.',
  },
  {
    q: 'How are educators onboarded and trained?',
    a: 'We provide structured onboarding sessions for careers leaders, counselor briefing guides, and classroom launch materials. Our team ensures all staff understand the interface, privacy boundaries, and guidance augmentation workflows.',
  },
  {
    q: 'How can our school or district join the Launch School program?',
    a: 'Schools can apply directly through the Launch School form on this page or by contacting our schools team. We work closely with founding partner schools to refine workflows and support careers education excellence.',
  },
];
