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
  REGULATORY_YOUTH_EMPLOYMENT: '/regulatory/youth-employment',
  REGULATORY_FAIR_EMPLOYMENT: '/regulatory/fair-employment',
  REGULATORY_AUTOMATED_HIRING: '/regulatory/automated-hiring',
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
  APP_SETTINGS: '/app/settings',
  APP_SETTINGS_ACCOUNT: '/app/settings/account',
  APP_SETTINGS_PRIVACY: '/app/settings/privacy',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
