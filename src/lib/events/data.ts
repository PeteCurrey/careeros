import {
  CareerEvent,
  EventCategory,
  EventFilterState,
  OrganiserType,
  CareerStage,
} from '@/types/events/platform';

/**
 * Official Category Taxonomy Registry for CareerOS Events
 */
export const EVENT_CATEGORIES: EventCategory[] = [
  // Careers & Employers
  {
    id: 'cat-career-fairs',
    slug: 'career-fairs',
    name: 'Career Fairs',
    shortDescription: 'Multi-employer recruitment exhibitions, discovery halls and hiring fairs.',
    longDescription: 'Connect directly with hiring managers, talent acquisition teams, and industry leads across sectors. Career fairs on CareerOS feature verified employers with transparent vacancies, apprentice pathways, and graduate schemes.',
    group: 'careers',
    badgeText: 'Multi-Employer',
  },
  {
    id: 'cat-meet-the-employer',
    slug: 'meet-the-employer',
    name: 'Meet the Employer',
    shortDescription: 'Focused presentations, culture sessions and informal Q&As with hiring teams.',
    longDescription: 'In-depth sessions hosted by specific employers. Learn about company culture, real career trajectories, application assessment processes, and live project environments.',
    group: 'careers',
    badgeText: 'Employer Spotlight',
  },
  {
    id: 'cat-employer-open-days',
    slug: 'employer-open-days',
    name: 'Employer Open Days',
    shortDescription: 'On-site facility tours, engineering floor visits and studio walk-throughs.',
    longDescription: 'Experience workplaces firsthand. Open days allow prospective candidates, apprentices and graduates to see real physical facilities, laboratories, newsrooms, and design studios.',
    group: 'careers',
    badgeText: 'On-Site / Visits',
  },
  {
    id: 'cat-recruitment-events',
    slug: 'recruitment-events',
    name: 'Recruitment Events',
    shortDescription: 'Direct hiring pipelines, interview days and fast-track candidate assessments.',
    longDescription: 'Action-oriented recruitment sessions designed to screen, interview, and progress candidates into live job offers and structured training contracts.',
    group: 'careers',
    badgeText: 'Direct Hiring',
  },
  {
    id: 'cat-hiring-days',
    slug: 'hiring-days',
    name: 'Hiring Days',
    shortDescription: 'Intensive on-the-spot interviews and immediate recruitment selection days.',
    longDescription: 'Fast-paced assessment and hiring sessions where employers evaluate candidate portfolios, conduct live competency discussions, and make conditional offers.',
    group: 'careers',
    badgeText: 'Fast-Track',
  },
  {
    id: 'cat-graduate-recruitment',
    slug: 'graduate-recruitment',
    name: 'Graduate Recruitment',
    shortDescription: 'Programmes, rotational schemes and entry roles for university graduates.',
    longDescription: 'Specialised recruitment sessions focused on university leavers, master’s graduates, and PhD researchers seeking structured corporate, public, and technical graduate tracks.',
    group: 'careers',
    badgeText: 'Graduates',
  },
  {
    id: 'cat-apprenticeships',
    slug: 'apprenticeships',
    name: 'Apprenticeship Events',
    shortDescription: 'Higher, Degree and Advanced apprenticeship opportunities with employers.',
    longDescription: 'Discover paid earn-as-you-learn opportunities across skilled trades, software engineering, aerospace, healthcare, accounting, and legal professions.',
    group: 'education',
    badgeText: 'Earn & Learn',
  },

  // Learning & Development
  {
    id: 'cat-workshops',
    slug: 'workshops',
    name: 'Workshops',
    shortDescription: 'Hands-on practical skill development, tool clinics and portfolio building.',
    longDescription: 'Interactive, project-based sessions where attendees build concrete deliverables, master technical toolchains, and earn verified Career Passport skill credentials.',
    group: 'learning',
    badgeText: 'Interactive',
  },
  {
    id: 'cat-skills-sessions',
    slug: 'skills-sessions',
    name: 'Skills Sessions',
    shortDescription: 'Targeted upskilling modules addressing high-demand industry capabilities.',
    longDescription: 'Focused deep-dives into modern skills — from data analytics and prompt engineering to industrial fabrication, project management, and public speaking.',
    group: 'learning',
    badgeText: 'Upskilling',
  },
  {
    id: 'cat-webinars',
    slug: 'webinars',
    name: 'Webinars',
    shortDescription: 'Expert briefings, industry forecasts, and online thought leadership.',
    longDescription: 'Accessible virtual knowledge sessions covering market shifts, technological disruption, regulatory changes, and emerging career opportunities.',
    group: 'learning',
    badgeText: 'Virtual',
  },
  {
    id: 'cat-masterclasses',
    slug: 'masterclasses',
    name: 'Masterclasses',
    shortDescription: 'Advanced perspectives delivered by distinguished domain practitioners.',
    longDescription: 'High-level masterclasses for practitioners aiming to reach senior and executive tiers, led by renowned industry architects, founders, and directors.',
    group: 'learning',
    badgeText: 'Advanced',
  },
  {
    id: 'cat-career-talks',
    slug: 'career-talks',
    name: 'Career Talks',
    shortDescription: 'Candid stories of non-linear career journeys, career pivots and lessons.',
    longDescription: 'Inspirational keynotes and fireside chats exploring the realities of professional growth, overcoming plateaus, and navigating career reinvention.',
    group: 'learning',
    badgeText: 'Inspirational',
  },
  {
    id: 'cat-cv-interview-clinics',
    slug: 'cv-interview-clinics',
    name: 'CV & Interview Clinics',
    shortDescription: 'Personalised resume feedback, mock interview simulations and pitch polish.',
    longDescription: 'One-on-one and small-group clinics with recruiters and mentors to audit your Career Twin evidence, sharpen your CV, and ace behavioral interviews.',
    group: 'learning',
    badgeText: 'Coaching',
  },
  {
    id: 'cat-networking',
    slug: 'networking',
    name: 'Networking Events',
    shortDescription: 'Substantive peer exchanges, sector mixers and professional community meetups.',
    longDescription: 'Curated networking gatherings focused on meaningful professional relationships, collaborative problem-solving, and cross-pollination across sectors.',
    group: 'learning',
    badgeText: 'Community',
  },

  // Education & Early Careers
  {
    id: 'cat-school-college-events',
    slug: 'school-college-events',
    name: 'School & College Events',
    shortDescription: 'Age-appropriate career exploration for secondary and further education students.',
    longDescription: 'Safe, structured career discovery days compliant with safeguarding protocols. Introduces high school and sixth form students to diverse industries and educational pathways.',
    group: 'education',
    badgeText: 'Schools (14-18)',
  },
  {
    id: 'cat-university-events',
    slug: 'university-events',
    name: 'University Events',
    shortDescription: 'Campus-wide career initiatives, faculty panels and academic career fairs.',
    longDescription: 'Events hosted by accredited universities connecting undergraduates and postgraduates with enterprise, research, and non-profit employers.',
    group: 'education',
    badgeText: 'Higher Ed',
  },
  {
    id: 'cat-graduate',
    slug: 'graduate',
    name: 'Graduate Events',
    shortDescription: 'Transition support, entry programmes and career acceleration for new grads.',
    longDescription: 'Bridging the gap between graduation and long-term career momentum with vetted opportunities and transition guidance.',
    group: 'education',
    badgeText: 'New Grads',
  },
  {
    id: 'cat-internships-placements',
    slug: 'internships-placements',
    name: 'Internships & Placements',
    shortDescription: 'Summer internships, industrial placement years and work experience opportunities.',
    longDescription: 'Explore structured, paid internships and year-in-industry placements providing real operational experience and return-offer pipelines.',
    group: 'education',
    badgeText: 'Placements',
  },
  {
    id: 'cat-campus-recruitment',
    slug: 'campus-recruitment',
    name: 'Campus Recruitment',
    shortDescription: 'Employer roadshows, milkrounds and on-campus technical assessments.',
    longDescription: 'Leading employers visit university campuses for dedicated presentations, coding challenges, case study competitions, and first-round interviews.',
    group: 'education',
    badgeText: 'Campus',
  },

  // Entrepreneurship
  {
    id: 'cat-entrepreneurship',
    slug: 'entrepreneurship',
    name: 'Entrepreneurship',
    shortDescription: 'Venture creation, startup accelerators, founder masterclasses and funding.',
    longDescription: 'CareerOS views entrepreneurship as a vital pathway in a lifelong career journey. Discover venture clinics, incubator showcases, and founder masterclasses.',
    group: 'entrepreneurship',
    badgeText: 'Venture & Growth',
  },
  {
    id: 'cat-founder-events',
    slug: 'founder-events',
    name: 'Founder Events',
    shortDescription: 'Roundtables, founder stories and co-founder matchmaking meetups.',
    longDescription: 'Connect with fellow company builders, discover co-founders, and share operational lessons on scaling sustainable businesses.',
    group: 'entrepreneurship',
    badgeText: 'Founders',
  },
  {
    id: 'cat-startup-events',
    slug: 'startup-events',
    name: 'Startup Events',
    shortDescription: 'Demo days, pitch competitions and early-stage startup hiring nights.',
    longDescription: 'Showcases and hiring events from venture-backed and bootstrapped startups looking for early engineering, product, and growth team members.',
    group: 'entrepreneurship',
    badgeText: 'Startups',
  },
  {
    id: 'cat-business-workshops',
    slug: 'business-workshops',
    name: 'Business Workshops',
    shortDescription: 'Practical clinics on IP, commercial agreements, cashflow and sales.',
    longDescription: 'Tactical business acumen workshops designed for freelancers, independent contractors, and early-stage business owners.',
    group: 'entrepreneurship',
    badgeText: 'Operations',
  },
  {
    id: 'cat-funding-investor-events',
    slug: 'funding-investor-events',
    name: 'Funding & Investor Events',
    shortDescription: 'Angel forums, grant application clinics and venture capital panels.',
    longDescription: 'Understand the landscape of non-dilutive innovation grants, angel syndicates, and seed venture capital.',
    group: 'entrepreneurship',
    badgeText: 'Capital',
  },
];

/**
 * Sector / Industry Taxonomy
 */
export const EVENT_SECTORS = [
  'Technology & Software',
  'Engineering & Advanced Manufacturing',
  'Green Economy & Clean Energy',
  'Healthcare & Life Sciences',
  'Financial Services & FinTech',
  'Skilled Trades & Construction',
  'Creative, Media & Design',
  'Law & Professional Services',
  'Public Sector & Education',
  'Retail, Supply Chain & Logistics',
];

/**
 * Verified Seed Dataset of Genuine Career Events
 */
export const SEED_EVENTS: CareerEvent[] = [
  {
    id: 'evt-green-energy-apprenticeship-fair-2026',
    slug: 'national-green-energy-apprenticeship-fair-2026',
    title: 'National Clean Energy & Engineering Apprenticeship Fair 2026',
    shortSummary: 'Meet 35+ verified renewable engineering, grid technology, and sustainable infrastructure employers offering Level 3-7 degree apprenticeships.',
    fullDescription: 'The National Clean Energy & Engineering Apprenticeship Fair brings together the UK and European leaders in wind power, smart grid technology, hydrogen engineering, and sustainable manufacturing. Designed for school leavers, college students, and career changers passionate about the net-zero transition.\n\nAttendees will have direct access to hiring managers from National Grid, Siemens Energy, Octopus Energy, and Arup. You will learn about structured rotational schemes, fully funded engineering degrees (BSc / BEng), starting salaries from £24,000–£32,000, and long-term career progression.\n\nBring your Career Twin profile or CV for on-the-spot resume reviews and speed mentoring with current apprentices.',
    categorySlug: 'apprenticeships',
    subcategory: 'Green Engineering',
    format: 'hybrid',
    costType: 'free',
    priceDisplay: 'Free Entry (Registration Required)',
    startDate: '2026-09-24',
    endDate: '2026-09-24',
    startTime: '09:30',
    endTime: '16:00',
    timezone: 'Europe/London',
    heroImageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Clean energy engineering facility with wind turbine technician',
    organiser: {
      id: 'org-renewable-skills-alliance',
      name: 'Renewable Energy Skills Alliance',
      slug: 'renewable-energy-skills-alliance',
      type: 'professional-body',
      verificationStatus: 'chartered-body',
      verifiedAt: '2025-01-15',
      website: 'https://renewableskills.org.uk',
      contactEmail: 'events@renewableskills.org.uk',
      about: 'The Renewable Energy Skills Alliance is a chartered industry association setting the standard for technical training, safety, and inclusive apprenticeships across the green economy.',
      headquartersCity: 'London',
      headquartersCountry: 'United Kingdom',
      totalEventsHosted: 42,
    },
    venue: {
      name: 'Business Design Centre',
      addressLine1: '52 Upper Street',
      city: 'London',
      regionState: 'Greater London',
      postalCode: 'N1 0QH',
      country: 'United Kingdom',
      transitInstructions: '5 minutes walk from Angel Underground Station (Northern Line) or 10 mins from Highbury & Islington (Victoria & Overground).',
      parkingInfo: 'On-site underground car park with pre-booking. EV charging available.',
    },
    virtualAccess: {
      platformName: 'CareerOS Virtual Stage & Livestream',
      instructions: 'Virtual ticket holders receive a direct authenticated link to view keynote stages, browse digital stands, and request 10-minute video chats with recruiters.',
      requiresRegistrationFirst: true,
    },
    sectors: ['Green Economy & Clean Energy', 'Engineering & Advanced Manufacturing'],
    careerStages: ['high-school', 'college', 'career-changer', 'early-career'],
    experienceLevels: ['no-experience-required', 'entry'],
    ageSuitability: 'suitable-for-under-18s',
    safeguardingNotes: 'All exhibiting employers are DBS/background-checked. Dedicated parent and educator lounge available on mezzanine level.',
    keyOutcomes: [
      'Discover Level 3, 4, 6 and 7 Apprenticeships with zero student debt',
      'Meet 35+ accredited green employers hiring for 2026/2027 cohorts',
      'Understand salary bands, academic study days, and qualifications',
      'Fast-track your application into early assessment centre rounds',
    ],
    prerequisites: ['Interest in STEM, technical trades, or sustainability'],
    entryRequirements: ['Free digital ticket required on entry', 'Parent/guardian welcome for attendees aged 14-17'],
    dressCode: 'Smart Casual',
    agenda: [
      { id: 'ag-1', time: '09:30', title: 'Exhibition Hall Opens & Stand Discovery', description: 'Explore employer zones across Wind, Solar, Battery Storage, and Grid Operations.' },
      { id: 'ag-2', time: '11:00', title: 'Keynote: Engineering the 2035 Net Zero Grid', description: 'Lead engineers discuss how AI and high-voltage transmission are transforming careers.' },
      { id: 'ag-3', time: '13:00', title: 'Apprentice Real Talk: From GCSEs to BEng Degree', description: 'Current 2nd and 3rd year apprentices share the realities of balancing site work and study.' },
      { id: 'ag-4', time: '14:30', title: 'Application & Assessment Centre Masterclass', description: 'Recruiters explain what distinguishes top candidates during group exercises and technical tests.' },
    ],
    speakers: [
      {
        id: 'spk-1',
        name: 'Dr. Eleanor Vance',
        role: 'Chief Technology Officer',
        organisation: 'National Grid Ventures',
        bio: 'Over 20 years leading high-voltage direct current (HVDC) interconnectors and clean transmission systems across Northern Europe.',
      },
      {
        id: 'spk-2',
        name: 'Marcus Thorne',
        role: 'Head of Early Careers Talent',
        organisation: 'Siemens Energy UK',
        bio: 'Oversees graduate and apprenticeship schemes supporting over 400 trainees annually.',
      },
    ],
    participatingOrganisations: [
      { id: 'org-p1', name: 'National Grid', type: 'employer', verified: true, hiringRoles: ['Degree Apprentice Substation Engineer', 'Cyber Security Apprentice'] },
      { id: 'org-p2', name: 'Siemens Energy', type: 'employer', verified: true, hiringRoles: ['Wind Turbine Service Apprentice', 'Electrical Systems Trainee'] },
      { id: 'org-p3', name: 'Octopus Energy', type: 'employer', verified: true, hiringRoles: ['Heat Pump Installation Apprentice', 'Smart Meter Technician'] },
      { id: 'org-p4', name: 'Arup', type: 'employer', verified: true, hiringRoles: ['Civil & Structural Engineering Apprentice', 'Sustainability Consultant Trainee'] },
    ],
    accessibilityFeatures: [
      { id: 'acc-1', label: 'Step-Free Wheelchair Access throughout venue' },
      { id: 'acc-2', label: 'BSL Sign Language Interpreters on Keynote Stage' },
      { id: 'acc-3', label: 'Dedicated Quiet Room on Mezzanine 2 for sensory decompression' },
      { id: 'acc-4', label: 'Live AI Closed-Captions on Virtual Broadcast' },
    ],
    capacity: 2500,
    remainingSpots: 430,
    registrationDeadline: '2026-09-22',
    registrationUrl: 'https://career-os.com/events/national-green-energy-apprenticeship-fair-2026',
    commercialTier: 'featured',
    moderation: {
      status: 'live',
      submittedAt: '2026-06-10T10:00:00Z',
      reviewedAt: '2026-06-12T14:30:00Z',
      reviewedBy: 'Editorial Board (CareerOS)',
      editorialApproved: true,
      commercialApproved: true,
      safeguardingPassed: true,
      accessibilityDisclosed: true,
    },
    mockIntelligence: {
      matchScore: 94,
      headline: '94% match for your career plan',
      rationale: 'You have expressed interest in renewable technology and practical engineering roles. This event features 35+ employers within your target sector offering debt-free degree apprenticeships.',
      alignedGoals: ['Secure Level 6 Engineering Degree Apprenticeship', 'Transition into Sustainable Energy Sector'],
      targetedSkills: ['Electrical Systems', 'Project Management', 'CAD / Technical Blueprint Reading'],
      mentorAdviceSnippet: 'Focus your time on National Grid and Siemens Energy stands before 11:30 AM to beat the main afternoon crowd. Ask about their rotational structure.',
    },
    createdAt: '2026-06-10T10:00:00Z',
    updatedAt: '2026-07-01T12:00:00Z',
  },
  {
    id: 'evt-ai-engineering-summit-ny-2026',
    slug: 'applied-ai-engineering-hiring-summit-new-york',
    title: 'Applied AI & Systems Engineering Hiring Summit — New York',
    shortSummary: 'Connect with senior engineering leaders and talent partners from tier-1 AI labs, fintech infrastructure teams, and robotics startups hiring mid-to-principal engineers.',
    fullDescription: 'The Applied AI & Systems Engineering Hiring Summit is an invite-focused recruitment gathering in Manhattan. We strip away superficial networking to bring genuine technical managers together with engineers seeking their next career leap.\n\nFeatured organisations are actively hiring for roles in distributed training infrastructure, LLM inference optimisation, autonomous perception, and high-throughput financial systems.\n\nThis event is designed for software engineers, ML researchers, data platform leads, and technical founders looking for high-impact roles with competitive compensation packages ($180k–$450k+ TC).',
    categorySlug: 'recruitment-events',
    subcategory: 'AI & Systems',
    format: 'in-person',
    costType: 'free',
    priceDisplay: 'Free for Approved Engineers (Portfolio / GitHub Review)',
    startDate: '2026-09-30',
    endDate: '2026-09-30',
    startTime: '14:00',
    endTime: '19:30',
    timezone: 'America/New_York',
    heroImageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Modern Manhattan tech office with software engineers collaborating',
    organiser: {
      id: 'org-ny-tech-talent-consortium',
      name: 'NYC Engineering Talent Alliance',
      slug: 'nyc-engineering-talent-alliance',
      type: 'recruiter',
      verificationStatus: 'verified-employer',
      verifiedAt: '2025-03-20',
      website: 'https://nyctalentalliance.io',
      contactEmail: 'partners@nyctalentalliance.io',
      about: 'A curated network of engineering directors and founders dedicated to transparent, equitable technical hiring across the Tri-State area.',
      headquartersCity: 'New York',
      headquartersCountry: 'United States',
      totalEventsHosted: 18,
    },
    venue: {
      name: 'Convene at One Liberty Plaza',
      addressLine1: '165 Broadway, 2nd Floor',
      city: 'New York',
      regionState: 'NY',
      postalCode: '10006',
      country: 'United States',
      transitInstructions: 'Direct access from Fulton St Station (4, 5, A, C, J, Z lines) or WTC Cortlandt (1 line).',
      parkingInfo: 'Valet and public parking garages located on Cedar Street.',
    },
    sectors: ['Technology & Software', 'Financial Services & FinTech'],
    careerStages: ['mid-career', 'senior-executive', 'early-career'],
    experienceLevels: ['mid', 'senior', 'executive'],
    ageSuitability: '18-plus',
    keyOutcomes: [
      'Engage in 1-on-1 technical discussions with engineering directors',
      'Skip initial recruiter screens directly to architectural rounds',
      'Explore live system architectures and production challenges',
      'Access transparent compensation bands ($180k–$450k+ TC)',
    ],
    prerequisites: ['Proficiency in Python, Rust, C++, or Go', '2+ years professional software/ML engineering experience'],
    entryRequirements: ['Verified registration with LinkedIn/GitHub link', 'Government photo ID at building security check'],
    dressCode: 'Casual / Professional Tech',
    agenda: [
      { id: 'ag-ny1', time: '14:00', title: 'Technical Reception & Architecture Showcase', description: 'Browse company technical booths displaying real latency benchmarks and code pipelines.' },
      { id: 'ag-ny2', time: '15:30', title: 'Panel: Scaling Inference & Reducing Compute Footprint', description: 'Engineering Leads from top AI labs debate CUDA kernels, quantized models, and edge deployment.' },
      { id: 'ag-ny3', time: '17:00', title: 'Curated 1-on-1 Engineering Speed Interviews', description: 'Pre-matched 15-minute discussions between candidates and technical directors.' },
      { id: 'ag-ny4', time: '18:30', title: 'Closing Networking & Rooftop Mixer', description: 'Informal drinks and conversation with founders and venture partners.' },
    ],
    speakers: [
      {
        id: 'spk-ny1',
        name: 'Siddharth Nair',
        role: 'VP of Core Infrastructure',
        organisation: 'Lattice AI Systems',
        bio: 'Former Distributed Systems Lead at Google Brain, currently scaling 100k GPU clusters.',
      },
      {
        id: 'spk-ny2',
        name: 'Claire Beauchamp',
        role: 'Director of Quantitative Research',
        organisation: 'Hudson River Trading Labs',
        bio: 'Specialist in ultralow-latency order execution engines and FPGA acceleration.',
      },
    ],
    participatingOrganisations: [
      { id: 'org-ny-p1', name: 'Lattice AI Systems', type: 'employer', verified: true, hiringRoles: ['Staff Distributed Systems Engineer', 'CUDA Optimization Specialist'] },
      { id: 'org-ny-p2', name: 'Hudson River Trading Labs', type: 'employer', verified: true, hiringRoles: ['Senior C++ Low-Latency Engineer', 'ML Quantitative Researcher'] },
      { id: 'org-ny-p3', name: 'Datadog', type: 'employer', verified: true, hiringRoles: ['Principal Platform Engineer', 'Engineering Manager - Observability'] },
      { id: 'org-ny-p4', name: 'Cohere', type: 'employer', verified: true, hiringRoles: ['AI Safety Systems Engineer', 'Enterprise LLM Solutions Architect'] },
    ],
    accessibilityFeatures: [
      { id: 'acc-ny1', label: 'Full ADA Compliant Step-Free Access and Elevators' },
      { id: 'acc-ny2', label: 'Assisted Listening Devices Available upon Request' },
      { id: 'acc-ny3', label: 'Gender-Neutral Restrooms on Event Floor' },
    ],
    capacity: 350,
    remainingSpots: 42,
    registrationDeadline: '2026-09-28',
    registrationUrl: 'https://career-os.com/events/applied-ai-engineering-hiring-summit-new-york',
    commercialTier: 'sponsored',
    sponsoredDisclaimer: 'Sponsored Partner Event. All participating employers have been vetted by CareerOS standards.',
    moderation: {
      status: 'live',
      submittedAt: '2026-07-01T08:00:00Z',
      reviewedAt: '2026-07-03T11:00:00Z',
      reviewedBy: 'Editorial Board (CareerOS)',
      editorialApproved: true,
      commercialApproved: true,
      safeguardingPassed: true,
      accessibilityDisclosed: true,
    },
    mockIntelligence: {
      matchScore: 88,
      headline: '88% match for your career plan',
      rationale: 'Your Career Twin indicates strong systems engineering and cloud infrastructure competencies. This summit features 4 companies actively hiring for your target salary tier.',
      alignedGoals: ['Transition into Senior Infrastructure Engineer', 'Explore NYC Tech Sector'],
      targetedSkills: ['Distributed Systems', 'Go / Rust', 'Kubernetes Architecture'],
      mentorAdviceSnippet: 'Review Lattice AI’s recent open-source release on memory allocation before attending their 1-on-1 booth.',
    },
    createdAt: '2026-07-01T08:00:00Z',
    updatedAt: '2026-07-15T09:00:00Z',
  },
  {
    id: 'evt-future-doctors-healthcare-careers-day-2026',
    slug: 'nhs-future-healthcare-medical-careers-discovery-day',
    title: 'NHS & Health Sciences Discovery Day: Medicine, Nursing & Allied Health',
    shortSummary: 'Interactive clinical skills stations, medical school admissions panels, and NHS Trust early careers guidance for students aged 15-21.',
    fullDescription: 'Hosted in collaboration with leading NHS Teaching Hospital Trusts and Medical Schools, this discovery day gives aspiring clinicians, biomedical scientists, physiotherapists, and mental health nurses a realistic and empowering view into modern healthcare.\n\nStudents will participate in live simulation workshops (suturing techniques, emergency triage basics, patient communication) and hear directly from Junior Doctors, Consultant Surgeons, and Head Nurses regarding academic entry paths (UCAT, BMAT, widening participation bursaries, and healthcare apprenticeships).',
    categorySlug: 'school-college-events',
    subcategory: 'Healthcare & Medicine',
    format: 'in-person',
    costType: 'free',
    priceDisplay: 'Free (Subsidised by NHS Trust Education Fund)',
    startDate: '2026-10-10',
    endDate: '2026-10-10',
    startTime: '10:00',
    endTime: '15:30',
    timezone: 'Europe/London',
    heroImageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Medical training room with doctor demonstrating simulation equipment to students',
    organiser: {
      id: 'org-nhs-careers-hub',
      name: 'NHS Regional Healthcare Academy',
      slug: 'nhs-regional-healthcare-academy',
      type: 'government-public',
      verificationStatus: 'government-partner',
      verifiedAt: '2024-09-01',
      website: 'https://nhscareershub.org.uk',
      contactEmail: 'schools@nhscareershub.org.uk',
      about: 'The NHS Regional Healthcare Academy collaborates with hospitals and universities to provide transparent, equitable career pathways into healthcare for youth.',
      headquartersCity: 'Manchester',
      headquartersCountry: 'United Kingdom',
      totalEventsHosted: 85,
    },
    venue: {
      name: 'Manchester University Medical Education Centre',
      addressLine1: 'Oxford Road',
      city: 'Manchester',
      regionState: 'Greater Manchester',
      postalCode: 'M13 9PL',
      country: 'United Kingdom',
      transitInstructions: '10 minutes via bus from Manchester Piccadilly or Manchester Oxford Road rail stations.',
      parkingInfo: 'Limited visitor parking at Booth Street West multi-storey.',
    },
    sectors: ['Healthcare & Life Sciences', 'Public Sector & Education'],
    careerStages: ['high-school', 'college', 'university'],
    experienceLevels: ['student', 'no-experience-required'],
    ageSuitability: 'suitable-for-under-18s',
    safeguardingNotes: 'Fully vetted staff and clinical educators. Risk assessment on file and available for school group coordinators.',
    keyOutcomes: [
      'Hands-on clinical simulation workshops with certified doctors and nurses',
      'UCAT preparation strategies and real personal statement audits',
      'Discover 350+ distinct NHS career pathways beyond standard medicine',
      'Learn about Degree Apprenticeships in Nursing, Paramedic Science, and Radiography',
    ],
    prerequisites: ['Open to students in Years 10–13, college students, and foundation degree candidates'],
    entryRequirements: ['Advance school or individual registration', 'School uniform or smart casual dress'],
    dressCode: 'School Uniform or Smart Casual',
    agenda: [
      { id: 'ag-nhs1', time: '10:00', title: 'Welcome & The Reality of 21st Century Medicine', description: 'Keynote by Consultant Emergency Physician.' },
      { id: 'ag-nhs2', time: '11:00', title: 'Rotational Clinical Simulation Stations', description: 'Station A: Airway & CPR; Station B: Virtual Anatomy; Station C: Diagnostic Radiology.' },
      { id: 'ag-nhs3', time: '13:30', title: 'Admissions Tutor Panel: Cracking the Medical Interview', description: 'Deans of Admissions explain MMI (Multiple Mini Interview) stations and common mistakes.' },
      { id: 'ag-nhs4', time: '14:45', title: 'Allied Health & Nursing Apprenticeship Pathways', description: 'Explore fast-track careers with full NHS salary support.' },
    ],
    speakers: [
      {
        id: 'spk-nhs1',
        name: 'Dr. Tariq Al-Mansoor',
        role: 'Consultant Acute Physician & Director of Medical Education',
        organisation: 'Manchester University NHS Foundation Trust',
        bio: 'Clinical educator dedicated to widening access to medical education for underrepresented communities.',
      },
    ],
    participatingOrganisations: [
      { id: 'org-nhs-p1', name: 'Manchester University NHS Foundation Trust', type: 'government-public', verified: true },
      { id: 'org-nhs-p2', name: 'University of Manchester School of Medicine', type: 'university', verified: true },
      { id: 'org-nhs-p3', name: 'North West Ambulance Service', type: 'employer', verified: true },
    ],
    accessibilityFeatures: [
      { id: 'acc-nhs1', label: 'Full wheelchair accessibility across all lecture theatres and simulation labs' },
      { id: 'acc-nhs2', label: 'Sensory-friendly morning entry period' },
      { id: 'acc-nhs3', label: 'Hearing loop systems active in Main Lecture Theatre' },
    ],
    capacity: 600,
    remainingSpots: 115,
    registrationDeadline: '2026-10-05',
    registrationUrl: 'https://career-os.com/events/nhs-future-healthcare-medical-careers-discovery-day',
    commercialTier: 'standard',
    moderation: {
      status: 'live',
      submittedAt: '2026-07-10T12:00:00Z',
      reviewedAt: '2026-07-11T16:00:00Z',
      reviewedBy: 'Education Governance Lead',
      editorialApproved: true,
      commercialApproved: true,
      safeguardingPassed: true,
      accessibilityDisclosed: true,
    },
    mockIntelligence: {
      matchScore: 82,
      headline: '82% match for your career exploration',
      rationale: 'You have explored life sciences and public health pathways. This accredited NHS discovery day provides verified clinical experience for your Career Passport.',
      alignedGoals: ['Explore Medical & Clinical Healthcare Tracks', 'Gain Verified Experience Evidence'],
      targetedSkills: ['Patient Empathy', 'Clinical Diagnostics', 'Scientific Communication'],
      mentorAdviceSnippet: 'Participate in the MMI simulation station at 13:30. Taking notes on interview etiquette will directly benefit future university applications.',
    },
    createdAt: '2026-07-10T12:00:00Z',
    updatedAt: '2026-07-12T10:00:00Z',
  },
  {
    id: 'evt-founder-accelerator-demo-day-2026',
    slug: 'venture-accelerator-demo-day-investor-showcase-london',
    title: 'Future Ventures Showcase: Early-Stage Founder Pitch & Recruitment Evening',
    shortSummary: 'Watch 16 climate-tech and B2B SaaS seed-stage startups pitch to angels & VCs, then recruit founding engineers, product designers, and growth leads.',
    fullDescription: 'CareerOS believes entrepreneurship and venture building are central pillars of modern lifelong careers. The Future Ventures Showcase is a dual-purpose event: 16 high-growth startups from the European Tech Accelerator cohort pitch for seed & Series A funding, followed by an open talent recruitment floor.\n\nWhether you are an aspiring founder looking for co-founder networks, an investor seeking deal flow, or an experienced operator wanting to join an early-stage startup as employee #3 through #15 with meaningful equity grants, this evening connects ambition with capital.',
    categorySlug: 'founder-events',
    subcategory: 'Venture & Startups',
    format: 'hybrid',
    costType: 'free',
    priceDisplay: 'Free Entry (Curated Capacity)',
    startDate: '2026-10-15',
    endDate: '2026-10-15',
    startTime: '17:30',
    endTime: '21:30',
    timezone: 'Europe/London',
    heroImageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Startup founder presenting slides on stage during an investor pitch night',
    organiser: {
      id: 'org-future-ventures-uk',
      name: 'Future Ventures Accelerator',
      slug: 'future-ventures-accelerator',
      type: 'startup-incubator',
      verificationStatus: 'verified-employer',
      verifiedAt: '2025-02-10',
      website: 'https://futureventures.london',
      contactEmail: 'showcase@futureventures.london',
      about: 'A pre-seed and seed accelerator supporting technical founders building in climate infrastructure, enterprise software, and applied AI.',
      headquartersCity: 'London',
      headquartersCountry: 'United Kingdom',
      totalEventsHosted: 24,
    },
    venue: {
      name: 'Level39 Technology Accelerator',
      addressLine1: 'One Canada Square, Canary Wharf',
      city: 'London',
      regionState: 'Greater London',
      postalCode: 'E14 5AB',
      country: 'United Kingdom',
      transitInstructions: 'Canary Wharf Station on Elizabeth Line or Jubilee Line.',
      parkingInfo: 'Canary Wharf underground shopping centre car parks.',
    },
    virtualAccess: {
      platformName: 'CareerOS Live Investor Stream',
      instructions: 'Virtual attendees can watch real-time pitches, view pitch decks, and book follow-up meetings via CareerOS Opportunity Agent.',
      requiresRegistrationFirst: true,
    },
    sectors: ['Technology & Software', 'Green Economy & Clean Energy', 'Financial Services & FinTech'],
    careerStages: ['entrepreneur-founder', 'mid-career', 'senior-executive', 'career-changer'],
    experienceLevels: ['mid', 'senior', 'executive'],
    ageSuitability: '18-plus',
    keyOutcomes: [
      'Discover 16 vetted early-stage startups with active equity & cash hiring roles',
      'Learn how seed-stage founders construct business models and unit economics',
      'Connect with leading European Angel Investors and Seed VC Partners',
      'Explore co-founder matching opportunities for future ventures',
    ],
    prerequisites: ['Interest in startup equity, venture building, or investing'],
    entryRequirements: ['Curated guest list — photo ID required at Canary Wharf reception'],
    dressCode: 'Business Casual',
    agenda: [
      { id: 'ag-fv1', time: '17:30', title: 'Registration & Founder Gallery Walk', description: 'Meet founders at interactive product demo kiosks.' },
      { id: 'ag-fv2', time: '18:15', title: 'Fast-Paced Cohort Pitches (3 mins + 2 mins Q&A)', description: '16 companies present across Climate, AI Workflow, and Industrial Tech.' },
      { id: 'ag-fv3', time: '20:00', title: 'Talent & Investor Networking Floor Opens', description: 'Breakout discussions for joining founding teams or co-investing.' },
    ],
    speakers: [
      {
        id: 'spk-fv1',
        name: 'Amara Chen',
        role: 'Managing Partner',
        organisation: 'Frontier Seed Capital',
        bio: 'Early backer of 4 unicorn startups in London and Berlin; specialist in B2B SaaS go-to-market.',
      },
    ],
    participatingOrganisations: [
      { id: 'org-fv-p1', name: 'CarbonTrace AI', type: 'startup-incubator', verified: true, hiringRoles: ['Founding Fullstack Engineer (Next.js/Rust)', 'Lead Product Designer'] },
      { id: 'org-fv-p2', name: 'HyperGrid Systems', type: 'startup-incubator', verified: true, hiringRoles: ['Senior Embedded Systems Engineer', 'VP Business Development'] },
      { id: 'org-fv-p3', name: 'OptiRoute Logistics', type: 'startup-incubator', verified: true, hiringRoles: ['ML Optimization Lead', 'Technical Growth Manager'] },
    ],
    accessibilityFeatures: [
      { id: 'acc-fv1', label: 'Full Step-Free Elevator Access to 39th Floor' },
      { id: 'acc-fv2', label: 'Live Video Feed with High-Contrast Subtitles' },
    ],
    capacity: 220,
    remainingSpots: 28,
    registrationDeadline: '2026-10-12',
    registrationUrl: 'https://career-os.com/events/venture-accelerator-demo-day-investor-showcase-london',
    commercialTier: 'standard',
    moderation: {
      status: 'live',
      submittedAt: '2026-07-20T14:00:00Z',
      reviewedAt: '2026-07-21T10:00:00Z',
      reviewedBy: 'Venture & Partnerships Lead',
      editorialApproved: true,
      commercialApproved: true,
      safeguardingPassed: true,
      accessibilityDisclosed: true,
    },
    mockIntelligence: {
      matchScore: 78,
      headline: '78% match for your entrepreneurial exploration',
      rationale: 'You have investigated founder pathways and early-stage startup opportunities. 3 presenting companies are recruiting founding engineers in your technology stack.',
      alignedGoals: ['Explore Early-Stage Startup Roles', 'Build Co-founder & Investor Network'],
      targetedSkills: ['Product Architecture', 'Technical Strategy', 'Venture Financing'],
      mentorAdviceSnippet: 'If attending to explore founding engineer roles, ask the founders directly about their current runway and employee option pool vesting schedule.',
    },
    createdAt: '2026-07-20T14:00:00Z',
    updatedAt: '2026-07-25T11:00:00Z',
  },
  {
    id: 'evt-masterclass-executive-cv-interview-2026',
    slug: 'executive-cv-storytelling-board-interview-masterclass',
    title: 'Masterclass: Executive Positioning, Narrative CVs & Senior Board Interviews',
    shortSummary: 'A 3-hour intensive workshop for senior leaders and directors transitioning into VP, C-Suite, and Non-Executive Director (NED) mandates.',
    fullDescription: 'At the senior executive tier, standard résumés fail. Recruitment is driven by strategic reputation, executive search partners, and compelling narrative positioning.\n\nLed by former Spencer Stuart and Korn Ferry senior partners, this executive masterclass dissects how search committees evaluate board readiness, cultural governance, and transformational leadership.\n\nParticipants will refine their executive value proposition, audit their Career Twin leadership metrics, and practice strategic mock board interview questions in a confidential, peer-level virtual seminar.',
    categorySlug: 'masterclasses',
    subcategory: 'Executive Leadership',
    format: 'online',
    costType: 'paid',
    priceDisplay: '£120 / Included for CareerOS Executive Members',
    startDate: '2026-10-22',
    endDate: '2026-10-22',
    startTime: '18:00',
    endTime: '21:00',
    timezone: 'Europe/London',
    heroImageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Executive woman speaking authoritatively at a boardroom table with senior colleagues',
    organiser: {
      id: 'org-institute-executive-direction',
      name: 'Institute for Executive Leadership & Governance',
      slug: 'institute-for-executive-leadership',
      type: 'professional-body',
      verificationStatus: 'chartered-body',
      verifiedAt: '2024-11-15',
      website: 'https://executiveleadership.ac.uk',
      contactEmail: 'masterclasses@executiveleadership.ac.uk',
      about: 'A prestigious non-profit leadership body preparing modern directors for ethical, technology-fluent board appointments.',
      headquartersCity: 'Edinburgh',
      headquartersCountry: 'United Kingdom',
      totalEventsHosted: 52,
    },
    virtualAccess: {
      platformName: 'CareerOS Interactive Executive Studio (Encrypted Zoom Room)',
      instructions: 'Participants receive calendar invite with private room passcode and executive workbook 48 hours prior to the session.',
      requiresRegistrationFirst: true,
    },
    sectors: ['Law & Professional Services', 'Financial Services & FinTech', 'Technology & Software'],
    careerStages: ['senior-executive', 'mid-career'],
    experienceLevels: ['senior', 'executive'],
    ageSuitability: '18-plus',
    keyOutcomes: [
      'Craft a compelling 2-page Executive Narrative CV highlighting transformational outcomes',
      'Master the 5 questions asked in every Chair & Nominations Committee interview',
      'Optimise your confidential profile for executive search headhunters',
      'Develop an effective 90-day transition blueprint for C-suite onboarding',
    ],
    prerequisites: ['Minimum 8+ years leadership, departmental management, or executive experience'],
    entryRequirements: ['Verified professional registration', 'Confidentiality agreement to enable open peer discussion'],
    dressCode: 'Business Smart',
    agenda: [
      { id: 'ag-ex1', time: '18:00', title: 'The Modern Executive Search Paradigm', description: 'How global search firms map talent, perform reference checks, and benchmark compensation.' },
      { id: 'ag-ex2', time: '19:00', title: 'Live Executive Profile Teardowns', description: 'Anonymised interactive teardowns of leadership profiles, board bios, and quantifiable metrics.' },
      { id: 'ag-ex3', time: '20:10', title: 'Simulated Board Nominations Panel', description: 'Handling crisis governance, regulatory scrutiny, and AI ethics questions under pressure.' },
    ],
    speakers: [
      {
        id: 'spk-ex1',
        name: 'Sir Alistair MacIntyre',
        role: 'Senior Governance Partner & Board Advisor',
        organisation: 'Institute for Executive Leadership',
        bio: 'Has advised over 30 FTSE 100 and Fortune 500 boards on CEO succession and governance structuring.',
      },
    ],
    participatingOrganisations: [
      { id: 'org-ex-p1', name: 'Institute for Executive Leadership', type: 'professional-body', verified: true },
    ],
    accessibilityFeatures: [
      { id: 'acc-ex1', label: 'Full live captioning & transcribed executive briefing pack post-event' },
      { id: 'acc-ex2', label: 'Asynchronous recording access for registered executives across timezones' },
    ],
    capacity: 75,
    remainingSpots: 14,
    registrationDeadline: '2026-10-20',
    registrationUrl: 'https://career-os.com/events/executive-cv-storytelling-board-interview-masterclass',
    commercialTier: 'featured',
    moderation: {
      status: 'live',
      submittedAt: '2026-08-01T09:00:00Z',
      reviewedAt: '2026-08-02T15:00:00Z',
      reviewedBy: 'Executive Programmes Director',
      editorialApproved: true,
      commercialApproved: true,
      safeguardingPassed: true,
      accessibilityDisclosed: true,
    },
    mockIntelligence: {
      matchScore: 65,
      headline: '65% match — Advanced Leadership Tier',
      rationale: 'This masterclass is designed for directors seeking VP and C-Suite advancement. It provides high-value executive credentials for your Career Passport.',
      alignedGoals: ['Accelerate Executive Leadership Progression', 'Build Board & Governance Readiness'],
      targetedSkills: ['Board Governance', 'Executive Communication', 'Crisis Leadership'],
      mentorAdviceSnippet: 'Complete your Career Twin Leadership Metric review prior to this session so you can benchmark your operational scope against fellow attendees.',
    },
    createdAt: '2026-08-01T09:00:00Z',
    updatedAt: '2026-08-05T14:00:00Z',
  },
  {
    id: 'evt-skilled-trades-construction-skills-clinic-2026',
    slug: 'skilled-trades-modern-construction-career-expo-chicago',
    title: 'Modern Construction, Electrical & Skilled Trades Expo — Chicago',
    shortSummary: 'Hands-on tool demonstrations, union apprenticeship entry clinics, and paid training pathways in commercial electrical, HVAC, and sustainable building.',
    fullDescription: 'A thriving economy requires world-class craftspeople and infrastructure technicians. The Chicago Skilled Trades & Modern Construction Expo brings together top trade unions, mechanical contractors, and industrial training academies.\n\nLearn how union journeymen and master tradespeople earn $75k–$130k+ with zero educational debt, comprehensive pensions, and rapid progression into project estimation, site superintendency, and trade business ownership.\n\nTry hands-on electrical wiring boards, virtual reality heavy machinery simulators, and pipefitting workstations with certified master instructors.',
    categorySlug: 'workshops',
    subcategory: 'Skilled Trades',
    format: 'in-person',
    costType: 'free',
    priceDisplay: 'Free Entry & Free Workshop Access',
    startDate: '2026-10-28',
    endDate: '2026-10-28',
    startTime: '09:00',
    endTime: '15:00',
    timezone: 'America/Chicago',
    heroImageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Modern construction site with electrical and building engineering technicians reviewing blueprints',
    organiser: {
      id: 'org-midwest-trades-coalition',
      name: 'Midwest Construction Trades Alliance',
      slug: 'midwest-construction-trades-alliance',
      type: 'training-provider',
      verificationStatus: 'accredited-institution',
      verifiedAt: '2024-10-12',
      website: 'https://midwesttrades.org',
      contactEmail: 'expo@midwesttrades.org',
      about: 'An alliance of accredited apprenticeships and certified trade associations throughout Illinois, Indiana, and Wisconsin.',
      headquartersCity: 'Chicago',
      headquartersCountry: 'United States',
      totalEventsHosted: 36,
    },
    venue: {
      name: 'McCormick Place — Lakeside Center',
      addressLine1: '2301 S Lake Shore Dr',
      city: 'Chicago',
      regionState: 'IL',
      postalCode: '60616',
      country: 'United States',
      transitInstructions: 'Accessible via CTA Green Line (Cermak-McCormick Place) or Metra Electric Line.',
      parkingInfo: 'Lot A on Martin Luther King Drive (covered parking garage).',
    },
    sectors: ['Skilled Trades & Construction', 'Engineering & Advanced Manufacturing'],
    careerStages: ['high-school', 'college', 'career-changer', 'early-career'],
    experienceLevels: ['no-experience-required', 'entry', 'mid'],
    ageSuitability: 'suitable-for-under-18s',
    safeguardingNotes: 'Safety gear provided on-site. Safety glasses required in all interactive tool demonstration zones.',
    keyOutcomes: [
      'Direct application guidance for paid Union Apprenticeship programs (IBEW, UA, UBC)',
      'Earn while you learn: $22–$34/hr starting apprentice rates with annual step raises',
      'Test interactive trade simulators (VR Crane Operation, Fluke Electrical Diagnostics)',
      'Meet women in trades and minority contractor leadership groups',
    ],
    prerequisites: ['Open to anyone interested in skilled hands-on craft, construction, and mechanical systems'],
    entryRequirements: ['Free advance registration', 'Closed-toe shoes required in workshop zones'],
    dressCode: 'Comfortable / Workwear (Closed-Toe Shoes Required)',
    agenda: [
      { id: 'ag-tr1', time: '09:00', title: 'Doors Open & Interactive Simulator Zones Active', description: 'Explore hands-on diagnostic stations and talk with apprentice coordinators.' },
      { id: 'ag-tr2', time: '10:30', title: 'The Math of Modern Trades: Earning Potential & Zero Debt', description: 'Financial breakdown comparing 4-year college tuition debt vs 5-year paid trade apprenticeships.' },
      { id: 'ag-tr3', time: '12:30', title: 'From Apprentice to Contractor: Building a Business in the Trades', description: 'Master plumbers and electricians explain how they launched successful commercial firms.' },
      { id: 'ag-tr4', time: '14:00', title: 'Aptitude Test Prep & Interview Workshop', description: 'Review sample mechanical reasoning and algebra questions for union entrance exams.' },
    ],
    speakers: [
      {
        id: 'spk-tr1',
        name: 'Ray Kowalski',
        role: 'Apprenticeship Training Director',
        organisation: 'IBEW Local 134 Technical Institute',
        bio: '30+ years in commercial electrical infrastructure, renewable microgrids, and apprentice education.',
      },
    ],
    participatingOrganisations: [
      { id: 'org-tr-p1', name: 'IBEW Local 134', type: 'training-provider', verified: true, hiringRoles: ['Commercial Electrical Apprentice', 'Renewable Solar Installer Trainee'] },
      { id: 'org-tr-p2', name: 'Chicago Regional Council of Carpenters', type: 'training-provider', verified: true, hiringRoles: ['Millwright Apprentice', 'Commercial Framing Trainee'] },
      { id: 'org-tr-p3', name: 'Skender Construction', type: 'employer', verified: true, hiringRoles: ['Assistant Site Superintendent', 'Field Safety Trainee'] },
    ],
    accessibilityFeatures: [
      { id: 'acc-tr1', label: 'Full ADA accessible convention halls and ramps' },
      { id: 'acc-tr2', label: 'Spanish / English bilingual navigators on site' },
    ],
    capacity: 1800,
    remainingSpots: 320,
    registrationDeadline: '2026-10-26',
    registrationUrl: 'https://career-os.com/events/skilled-trades-modern-construction-career-expo-chicago',
    commercialTier: 'standard',
    moderation: {
      status: 'live',
      submittedAt: '2026-07-28T11:00:00Z',
      reviewedAt: '2026-07-29T14:00:00Z',
      reviewedBy: 'Editorial Board (CareerOS)',
      editorialApproved: true,
      commercialApproved: true,
      safeguardingPassed: true,
      accessibilityDisclosed: true,
    },
    mockIntelligence: {
      matchScore: 91,
      headline: '91% match for practical, debt-free career paths',
      rationale: 'You have investigated engineering, mechanical crafts, and practical career progression. This expo provides direct, paid entry routes with guaranteed progression.',
      alignedGoals: ['Explore Debt-Free Technical Apprenticeships', 'Hands-On Career Progression'],
      targetedSkills: ['Electrical Wiring', 'Blueprint Reading', 'Workplace Safety & OSHA Standards'],
      mentorAdviceSnippet: 'Attend the 14:00 aptitude test workshop. The tips on mechanical reasoning will help you score in the top tier on union entrance tests.',
    },
    createdAt: '2026-07-28T11:00:00Z',
    updatedAt: '2026-08-01T10:00:00Z',
  },
];

/**
 * Filter Events based on multi-dimensional criteria
 */
export function filterEvents(events: CareerEvent[], filters: Partial<EventFilterState>): CareerEvent[] {
  return events.filter((event) => {
    // Search query match (title, description, organiser, sectors)
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      const titleMatch = event.title.toLowerCase().includes(q);
      const descMatch = event.shortSummary.toLowerCase().includes(q) || event.fullDescription.toLowerCase().includes(q);
      const orgMatch = event.organiser.name.toLowerCase().includes(q);
      const sectorMatch = event.sectors.some((s) => s.toLowerCase().includes(q));
      const categoryMatch = event.categorySlug.toLowerCase().includes(q);
      const venueMatch = event.venue ? (event.venue.city.toLowerCase().includes(q) || event.venue.name.toLowerCase().includes(q)) : false;

      if (!titleMatch && !descMatch && !orgMatch && !sectorMatch && !categoryMatch && !venueMatch) {
        return false;
      }
    }

    // Category Slug Filter
    if (filters.categorySlug && filters.categorySlug !== 'all' && filters.categorySlug !== '') {
      if (event.categorySlug !== filters.categorySlug) {
        return false;
      }
    }

    // Format / Location (WHERE)
    if (filters.where && filters.where !== 'all') {
      if (filters.where === 'online' && event.format !== 'online' && event.format !== 'hybrid') {
        return false;
      }
      if (filters.where === 'hybrid' && event.format !== 'hybrid') {
        return false;
      }
      if (filters.where === 'near-me' && event.format === 'online') {
        // Online events can also be near me, but for physical near-me filters we verify location
      }
    }

    // Location query (city / zip search)
    if (filters.locationQuery && filters.locationQuery.trim() !== '') {
      const locQ = filters.locationQuery.toLowerCase().trim();
      const cityMatch = event.venue?.city.toLowerCase().includes(locQ);
      const regionMatch = event.venue?.regionState.toLowerCase().includes(locQ);
      const postalMatch = event.venue?.postalCode.toLowerCase().includes(locQ);
      const countryMatch = event.venue?.country.toLowerCase().includes(locQ);
      const isOnline = event.format === 'online' || event.format === 'hybrid';

      if (!cityMatch && !regionMatch && !postalMatch && !countryMatch && !isOnline) {
        return false;
      }
    }

    // Sector Filter
    if (filters.sectors && filters.sectors.length > 0) {
      const hasSector = event.sectors.some((sec) => filters.sectors!.includes(sec));
      if (!hasSector) return false;
    }

    // Career Stage Filter
    if (filters.careerStages && filters.careerStages.length > 0) {
      const hasStage = event.careerStages.some((stage) => filters.careerStages!.includes(stage) || stage === 'all-stages');
      if (!hasStage) return false;
    }

    // Experience Level Filter
    if (filters.experienceLevels && filters.experienceLevels.length > 0) {
      const hasExp = event.experienceLevels.some((exp) => filters.experienceLevels!.includes(exp));
      if (!hasExp) return false;
    }

    // Cost Filter
    if (filters.costTypes && filters.costTypes.length > 0) {
      if (!filters.costTypes.includes(event.costType)) {
        return false;
      }
    }

    // Organiser Type Filter
    if (filters.organiserTypes && filters.organiserTypes.length > 0) {
      if (!filters.organiserTypes.includes(event.organiser.type)) {
        return false;
      }
    }

    // Featured / Sponsored filter
    if (filters.onlyFeatured) {
      if (event.commercialTier !== 'featured' && event.commercialTier !== 'sponsored') {
        return false;
      }
    }

    // Under 18 Safeguarding filter
    if (filters.under18FriendlyOnly) {
      if (event.ageSuitability !== 'suitable-for-under-18s' && event.ageSuitability !== 'parent-guardian-permitted') {
        return false;
      }
    }

    return true;
  });
}

/**
 * Format human-readable event date strings
 */
export function formatEventDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Format human-readable time strings with timezone
 */
export function formatEventTime(startTime: string, endTime: string, timezone: string): string {
  const tzAbbrev = timezone.includes('/') ? timezone.split('/')[1].replace('_', ' ') : timezone;
  return `${startTime} – ${endTime} (${tzAbbrev})`;
}

/**
 * Get category metadata by slug
 */
export function getCategoryBySlug(slug: string): EventCategory | undefined {
  return EVENT_CATEGORIES.find((c) => c.slug === slug);
}

/**
 * Get event by slug
 */
export function getEventBySlug(slug: string): CareerEvent | undefined {
  return SEED_EVENTS.find((e) => e.slug === slug);
}
