/**
 * Central route registry for Career OS.
 * All application routes defined here — never hardcoded in components.
 */
export const ROUTES = {
  // Root
  HOME: '/',

  // Audience
  FOR_HIGH_SCHOOLS: '/for/high-schools',
  FOR_STUDENTS: '/for/students',
  FOR_PROFESSIONALS: '/for/professionals',
  FOR_EMPLOYERS: '/for/employers',

  // Product
  PRODUCT: '/product',
  PRODUCT_AI_CAREER_MENTOR: '/product/ai-career-mentor',
  PRODUCT_CAREER_TWIN: '/product/career-twin',
  PRODUCT_CAREER_PASSPORT: '/product/career-passport',
  PRODUCT_CAREER_GRAPH: '/product/career-graph',
  PRODUCT_OPPORTUNITY_AGENT: '/product/opportunity-agent',
  PRODUCT_EMPLOYER_AGENT: '/product/employer-agent',
  PRODUCT_CAREER_NETWORK: '/product/career-network',
  PRODUCT_HOW_IT_WORKS: '/product/how-it-works',

  // Pathways
  PATHWAYS: '/pathways',
  PATHWAYS_COLLEGE: '/pathways/college',
  PATHWAYS_UNIVERSITY: '/pathways/university',
  PATHWAYS_APPRENTICESHIPS: '/pathways/apprenticeships',
  PATHWAYS_TRADES: '/pathways/trades',
  PATHWAYS_FIRST_JOB: '/pathways/first-job',
  PATHWAYS_CAREER_PROGRESSION: '/pathways/career-progression',
  PATHWAYS_CAREER_CHANGE: '/pathways/career-change',
  PATHWAYS_LEADERSHIP: '/pathways/leadership',
  PATHWAYS_ENTREPRENEURSHIP: '/pathways/entrepreneurship',

  // Schools
  SCHOOLS: '/schools',
  SCHOOLS_EDUCATORS: '/schools/educators',
  SCHOOLS_STUDENT_SAFETY: '/schools/student-safety',
  SCHOOLS_PRIVACY: '/schools/privacy',
  SCHOOLS_OUTCOMES: '/schools/outcomes',
  SCHOOLS_PARTNERSHIPS: '/schools/partnerships',

  // Employers
  EMPLOYERS: '/employers',
  EMPLOYERS_EMPLOYER_AGENT: '/employers/employer-agent',
  EMPLOYERS_TALENT_DISCOVERY: '/employers/talent-discovery',
  EMPLOYERS_EARLY_CAREERS: '/employers/early-careers',
  EMPLOYERS_INTERNSHIPS: '/employers/internships',
  EMPLOYERS_APPRENTICESHIPS: '/employers/apprenticeships',
  EMPLOYERS_STANDARDS: '/employers/employer-standards',
  EMPLOYERS_RESPONSIBLE_HIRING: '/employers/responsible-hiring',

  // Resources
  RESOURCES: '/resources',
  RESOURCES_CAREERS: '/resources/careers',
  RESOURCES_INDUSTRIES: '/resources/industries',
  RESOURCES_SKILLS: '/resources/skills',
  RESOURCES_EDUCATION: '/resources/education',
  RESOURCES_GUIDES: '/resources/guides',
  RESOURCES_ENTREPRENEURSHIP: '/resources/entrepreneurship',

  // Trust
  TRUST: '/trust',
  TRUST_COMPLIANCE: '/trust/compliance',
  TRUST_RESPONSIBLE_AI: '/trust/responsible-ai',
  TRUST_AI_TRANSPARENCY: '/trust/ai-transparency',
  TRUST_HUMAN_OVERSIGHT: '/trust/human-oversight',
  TRUST_DATA_ETHICS: '/trust/data-ethics',
  TRUST_FAIRNESS_BIAS: '/trust/fairness-and-bias',
  TRUST_SAFEGUARDING: '/trust/safeguarding',
  TRUST_ACCESSIBILITY: '/trust/accessibility',
  TRUST_SECURITY: '/trust/security',
  TRUST_VERIFICATION: '/trust/verification',
  TRUST_TRANSPARENCY: '/trust/transparency',

  // Standards
  STANDARDS: '/standards',
  STANDARDS_COMMUNITY_CODE: '/standards/community-code',
  STANDARDS_MENTOR_CODE: '/standards/mentor-code',
  STANDARDS_EMPLOYER_CODE: '/standards/employer-code',
  STANDARDS_OPPORTUNITY_STANDARDS: '/standards/opportunity-standards',
  STANDARDS_ANTI_DISCRIMINATION: '/standards/anti-discrimination',
  STANDARDS_PROFESSIONAL_CONDUCT: '/standards/professional-conduct',
  STANDARDS_SAFETY: '/standards/safety',

  // Regulatory
  REGULATORY: '/regulatory',
  REGULATORY_UNITED_STATES: '/regulatory/united-states',
  REGULATORY_STUDENT_PRIVACY: '/regulatory/student-privacy',
  REGULATORY_STUDENT_ASSESSMENTS: '/regulatory/student-assessments',
  REGULATORY_YOUTH_EMPLOYMENT: '/regulatory/youth-employment',
  REGULATORY_FAIR_EMPLOYMENT: '/regulatory/fair-employment',
  REGULATORY_AUTOMATED_HIRING: '/regulatory/automated-hiring',
  REGULATORY_FCRA: '/regulatory/fcra-and-employment-reports',
  REGULATORY_STATE_PRIVACY: '/regulatory/state-privacy',
  REGULATORY_GLOBAL_EXPANSION: '/regulatory/global-expansion',

  // Legal
  LEGAL: '/legal',
  LEGAL_TERMS: '/legal/terms',
  LEGAL_PRIVACY: '/legal/privacy',
  LEGAL_COOKIES: '/legal/cookies',
  LEGAL_ACCEPTABLE_USE: '/legal/acceptable-use',
  LEGAL_AI_TERMS: '/legal/ai-terms',
  LEGAL_STUDENT_TERMS: '/legal/student-terms',
  LEGAL_PARENT_GUARDIAN: '/legal/parent-guardian-notice',
  LEGAL_SCHOOL_TERMS: '/legal/school-terms',
  LEGAL_EMPLOYER_TERMS: '/legal/employer-terms',
  LEGAL_CANDIDATE_PRIVACY: '/legal/candidate-privacy',
  LEGAL_DATA_PROCESSING: '/legal/data-processing',
  LEGAL_COPYRIGHT: '/legal/copyright',
  LEGAL_ACCESSIBILITY: '/legal/accessibility',
  LEGAL_DPA: '/legal/dpa',
  LEGAL_IP_POLICY: '/legal/ip-policy',
  LEGAL_GUARDIAN_NOTICE: '/legal/guardian-notice',
  LEGAL_API_TERMS: '/legal/api-terms',
  LEGAL_SUBPROCESSORS: '/legal/subprocessors',
  LEGAL_DATA_RETENTION: '/legal/data-retention',
  LEGAL_VERSION_HISTORY: '/legal/version-history',

  // Company
  COMPANY_ABOUT: '/company/about',
  COMPANY_MISSION: '/company/mission',
  COMPANY_PARTNERS: '/company/partners',
  COMPANY_PRESS: '/company/press',
  COMPANY_CAREERS: '/company/careers',
  COMPANY_CONTACT: '/company/contact',

  // Auth
  LOGIN: '/login',
  SIGNUP: '/signup',

  // App (authenticated)
  APP: '/app',
  APP_DASHBOARD: '/app',
  APP_ONBOARDING: '/app/onboarding',
  APP_SECURITY_SETUP: '/app/security/setup',
  APP_SETTINGS: '/app/settings',
  APP_SETTINGS_ACCOUNT: '/app/settings/account',
  APP_SETTINGS_PRIVACY: '/app/settings/privacy',
  APP_SETTINGS_SECURITY: '/app/settings/security',

  // Events Platform
  EVENTS: '/events',
  EVENTS_NEAR_ME: '/events?where=near-me',
  EVENTS_ONLINE: '/events?where=online',
  EVENTS_THIS_WEEK: '/events?when=this-week',
  EVENTS_THIS_MONTH: '/events?when=this-month',
  EVENTS_FEATURED: '/events?featured=true',
  EVENTS_CAREER_FAIRS: '/events/career-fairs',
  EVENTS_MEET_THE_EMPLOYER: '/events/meet-the-employer',
  EVENTS_EMPLOYER_OPEN_DAYS: '/events/employer-open-days',
  EVENTS_RECRUITMENT: '/events/recruitment-events',
  EVENTS_HIRING_DAYS: '/events/hiring-days',
  EVENTS_GRADUATE_RECRUITMENT: '/events/graduate-recruitment',
  EVENTS_APPRENTICESHIPS: '/events/apprenticeships',
  EVENTS_WORKSHOPS: '/events/workshops',
  EVENTS_SKILLS_SESSIONS: '/events/skills-sessions',
  EVENTS_WEBINARS: '/events/webinars',
  EVENTS_MASTERCLASSES: '/events/masterclasses',
  EVENTS_CAREER_TALKS: '/events/career-talks',
  EVENTS_CV_CLINICS: '/events/cv-interview-clinics',
  EVENTS_NETWORKING: '/events/networking',
  EVENTS_SCHOOL_COLLEGE: '/events/school-college-events',
  EVENTS_UNIVERSITY: '/events/university-events',
  EVENTS_GRADUATE: '/events/graduate',
  EVENTS_INTERNSHIPS: '/events/internships-placements',
  EVENTS_CAMPUS_RECRUITMENT: '/events/campus-recruitment',
  EVENTS_ENTREPRENEURSHIP: '/events/entrepreneurship',
  EVENTS_FOUNDERS: '/events/founder-events',
  EVENTS_STARTUPS: '/events/startup-events',
  EVENTS_BUSINESS_WORKSHOPS: '/events/business-workshops',
  EVENTS_FUNDING_INVESTORS: '/events/funding-investor-events',
  EVENTS_PROMOTE: '/events/promote',
  EVENTS_PROMOTE_CREATE: '/events/promote/create',
  EVENTS_ORGANISERS_DASHBOARD: '/events/organisers/dashboard',
  EVENTS_ADMIN: '/events/admin',

  // Admin Control Centre
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_SECURITY_SETUP: '/admin/security/setup',
  ADMIN_SECURITY_VERIFY: '/admin/security/verify',
  ADMIN_ACCOUNT_SECURITY: '/admin/account/security',
  ADMIN_ACTION_CENTRE: '/admin/action-centre',
  ADMIN_FORBIDDEN: '/admin/forbidden',
  ADMIN_SYSTEM_ADMINS: '/admin/system/admins',
  ADMIN_SYSTEM_SECURITY: '/admin/system/security',

  // Content
  ADMIN_CONTENT_PAGES: '/admin/content/pages',
  ADMIN_CONTENT_ARTICLES: '/admin/content/articles',
  ADMIN_CONTENT_MEDIA: '/admin/content/media',
  ADMIN_CONTENT_NAVIGATION: '/admin/content/navigation',
  ADMIN_CONTENT_CTAS: '/admin/content/ctas',
  ADMIN_CONTENT_REDIRECTS: '/admin/content/redirects',

  // Events
  ADMIN_EVENTS: '/admin/events',
  ADMIN_EVENTS_PUBLISHED: '/admin/events/published',
  ADMIN_EVENTS_SUBMISSIONS: '/admin/events/submissions',
  ADMIN_EVENTS_DISCOVERY: '/admin/events/discovery',
  ADMIN_EVENTS_SOURCES: '/admin/events/sources',
  ADMIN_EVENTS_DISCOVERY_RUNS: '/admin/events/discovery-runs',
  ADMIN_EVENTS_CATEGORIES: '/admin/events/categories',
  ADMIN_EVENTS_ORGANISERS: '/admin/events/organisers',
  ADMIN_EVENTS_PROMOTIONS: '/admin/events/promotions',

  // Opportunities
  ADMIN_OPPORTUNITIES_JOBS: '/admin/opportunities/jobs',
  ADMIN_OPPORTUNITIES_SUBMISSIONS: '/admin/opportunities/submissions',
  ADMIN_OPPORTUNITIES_EMPLOYERS: '/admin/opportunities/employers',
  ADMIN_OPPORTUNITIES_SOURCES: '/admin/opportunities/sources',
  ADMIN_OPPORTUNITIES_STALE: '/admin/opportunities/stale',

  // Users
  ADMIN_USERS: '/admin/users',
  ADMIN_USERS_SEGMENTS: '/admin/users/segments',
  ADMIN_USERS_ACTIVITY: '/admin/users/activity',
  ADMIN_USERS_SUPPORT: '/admin/users/support',
  ADMIN_USERS_TRUST_SAFETY: '/admin/users/trust-safety',
  ADMIN_USERS_DATA_REQUESTS: '/admin/users/data-requests',

  // Organisations
  ADMIN_ORGANISATIONS: '/admin/organisations',
  ADMIN_ORGANISATIONS_EMPLOYERS: '/admin/organisations/employers',
  ADMIN_ORGANISATIONS_SCHOOLS: '/admin/organisations/schools',
  ADMIN_ORGANISATIONS_ORGANISERS: '/admin/organisations/organisers',
  ADMIN_ORGANISATIONS_PARTNERS: '/admin/organisations/partners',

  // Partnerships CRM & Intelligence
  ADMIN_PARTNERSHIPS: '/admin/partnerships',
  ADMIN_PARTNERSHIPS_PIPELINE: '/admin/partnerships/pipeline',
  ADMIN_PARTNERSHIPS_TARGETS: '/admin/partnerships/targets',
  ADMIN_PARTNERSHIPS_OPPORTUNITIES: '/admin/partnerships/opportunities',
  ADMIN_PARTNERSHIPS_CONTACTS: '/admin/partnerships/contacts',
  ADMIN_PARTNERSHIPS_TASKS: '/admin/partnerships/tasks',
  ADMIN_PARTNERSHIPS_INTEGRATIONS: '/admin/partnerships/integrations',
  ADMIN_PARTNERSHIPS_DOCUMENTS: '/admin/partnerships/documents',
  ADMIN_PARTNERSHIPS_ANALYTICS: '/admin/partnerships/analytics',

  // AI Control Centre
  ADMIN_AI: '/admin/ai',
  ADMIN_AI_PROVIDERS: '/admin/ai/providers',
  ADMIN_AI_MODELS: '/admin/ai/models',
  ADMIN_AI_ROUTING: '/admin/ai/routing',
  ADMIN_AI_PROMPTS: '/admin/ai/prompts',
  ADMIN_AI_GUARDRAILS: '/admin/ai/guardrails',
  ADMIN_AI_EVALUATIONS: '/admin/ai/evaluations',
  ADMIN_AI_USAGE: '/admin/ai/usage',
  ADMIN_AI_ERRORS: '/admin/ai/errors',

  // Growth & SEO
  ADMIN_GROWTH_TRAFFIC: '/admin/growth/traffic',
  ADMIN_GROWTH_SEO: '/admin/growth/seo',
  ADMIN_GROWTH_SEARCH_CONSOLE: '/admin/growth/search-console',
  ADMIN_GROWTH_LANDING_PAGES: '/admin/growth/landing-pages',
  ADMIN_GROWTH_FUNNELS: '/admin/growth/funnels',
  ADMIN_GROWTH_CAMPAIGNS: '/admin/growth/campaigns',
  ADMIN_GROWTH_EXPERIMENTS: '/admin/growth/experiments',
  ADMIN_GROWTH_ATTRIBUTION: '/admin/growth/attribution',

  // Communications
  ADMIN_COMMS: '/admin/communications',
  ADMIN_COMMS_TEMPLATES: '/admin/communications/templates',
  ADMIN_COMMS_NEWSLETTERS: '/admin/communications/newsletters',
  ADMIN_COMMS_CAMPAIGNS: '/admin/communications/campaigns',
  ADMIN_COMMS_AUDIENCES: '/admin/communications/audiences',
  ADMIN_COMMS_AUTOMATIONS: '/admin/communications/automations',
  ADMIN_COMMS_DELIVERY: '/admin/communications/delivery-logs',

  // Revenue
  ADMIN_REVENUE: '/admin/revenue',
  ADMIN_REVENUE_EMPLOYERS: '/admin/revenue/employers',
  ADMIN_REVENUE_PROMOTED_EVENTS: '/admin/revenue/promoted-events',
  ADMIN_REVENUE_SPONSORSHIP: '/admin/revenue/sponsorship',
  ADMIN_REVENUE_TRANSACTIONS: '/admin/revenue/transactions',
  ADMIN_REVENUE_PRODUCTS: '/admin/revenue/products',

  // Compliance & Assurance
  ADMIN_COMPLIANCE: '/admin/compliance',
  ADMIN_COMPLIANCE_REGISTRY: '/admin/compliance/registry',
  ADMIN_COMPLIANCE_EVIDENCE: '/admin/compliance/evidence',
  ADMIN_COMPLIANCE_RENEWALS: '/admin/compliance/renewals',
  ADMIN_COMPLIANCE_REGULATIONS: '/admin/compliance/regulations',
  ADMIN_COMPLIANCE_AI_GOVERNANCE: '/admin/compliance/ai-governance',
  ADMIN_COMPLIANCE_REQUESTS: '/admin/compliance/requests',

  // System
  ADMIN_SYSTEM_INTEGRATIONS: '/admin/system/integrations',
  ADMIN_SYSTEM_JOBS: '/admin/system/jobs',
  ADMIN_SYSTEM_BACKGROUND_JOBS: '/admin/system/background-jobs',
  ADMIN_SYSTEM_FEATURE_FLAGS: '/admin/system/feature-flags',
  ADMIN_SYSTEM_WEBHOOKS: '/admin/system/webhooks',
  ADMIN_SYSTEM_ENVIRONMENT: '/admin/system/environment',
  ADMIN_SYSTEM_ERRORS: '/admin/system/errors',
  ADMIN_SYSTEM_SETTINGS: '/admin/system/settings',
  ADMIN_SYSTEM_AUDIT: '/admin/system/audit',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
