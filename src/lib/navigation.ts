import { ROUTES } from './routes';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface MegaMenuSection {
  id: string;
  label: string;
  groups: NavGroup[];
  cta?: NavItem;
}

/** Primary desktop navigation items */
export const primaryNav: NavItem[] = [
  { label: 'Product', href: ROUTES.PRODUCT },
  { label: "Who It's For", href: ROUTES.FOR_PROFESSIONALS },
  { label: 'Pathways', href: ROUTES.PATHWAYS },
  { label: 'Resources', href: ROUTES.RESOURCES },
  { label: 'Trust', href: ROUTES.TRUST },
  { label: 'Company', href: ROUTES.COMPANY_ABOUT },
];

/** Mega menu content by section key */
export const megaMenuContent: Record<string, MegaMenuSection> = {
  product: {
    id: 'product',
    label: 'Product',
    groups: [
      {
        label: 'Core Systems',
        items: [
          { label: 'AI Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR, description: 'A system-assigned mentor that understands your career over time.' },
          { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN, description: 'A structured model of your professional self — beyond a résumé.' },
          { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT, description: 'A portable professional record of skills, evidence and achievements.' },
          { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH, description: 'Careers as connected pathways between skills, roles and destinations.' },
        ],
      },
      {
        label: 'Intelligence & Agents',
        items: [
          { label: 'Opportunity Agent', href: ROUTES.PRODUCT_OPPORTUNITY_AGENT, description: 'Proactive opportunity discovery — your career agent will find you.' },
          { label: 'Employer Agent', href: ROUTES.PRODUCT_EMPLOYER_AGENT, description: 'Responsible talent discovery for employers.' },
          { label: 'Career Network', href: ROUTES.PRODUCT_CAREER_NETWORK, description: 'A professional network built on evidence, not vanity.' },
        ],
      },
      {
        label: 'Understanding the Platform',
        items: [
          { label: 'How It Works', href: ROUTES.PRODUCT_HOW_IT_WORKS, description: 'The Career OS architecture from education through reinvention.' },
          { label: 'Product Overview', href: ROUTES.PRODUCT, description: 'A complete view of all Career OS systems.' },
        ],
      },
    ],
  },
  audiences: {
    id: 'audiences',
    label: "Who It's For",
    groups: [
      {
        label: 'Individuals',
        items: [
          { label: 'Students', href: ROUTES.FOR_STUDENTS, description: 'Career discovery, skills and first opportunities.' },
          { label: 'Professionals', href: ROUTES.FOR_PROFESSIONALS, description: 'Progression, pivots, leadership and international careers.' },
        ],
      },
      {
        label: 'Institutions',
        items: [
          { label: 'High Schools', href: ROUTES.FOR_HIGH_SCHOOLS, description: 'Personalised career development for every student.' },
          { label: 'Employers', href: ROUTES.FOR_EMPLOYERS, description: 'Intelligent talent discovery — not a vacancy board.' },
        ],
      },
    ],
    cta: { label: 'Start Your Career', href: ROUTES.SIGNUP },
  },
  pathways: {
    id: 'pathways',
    label: 'Pathways',
    groups: [
      {
        label: 'Education to Work',
        items: [
          { label: 'College', href: ROUTES.PATHWAYS_COLLEGE },
          { label: 'University', href: ROUTES.PATHWAYS_UNIVERSITY },
          { label: 'Apprenticeships', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
          { label: 'Trades & Technical', href: ROUTES.PATHWAYS_TRADES },
          { label: 'First Job', href: ROUTES.PATHWAYS_FIRST_JOB },
        ],
      },
      {
        label: 'Career Development',
        items: [
          { label: 'Career Progression', href: ROUTES.PATHWAYS_CAREER_PROGRESSION },
          { label: 'Career Change', href: ROUTES.PATHWAYS_CAREER_CHANGE },
          { label: 'Leadership', href: ROUTES.PATHWAYS_LEADERSHIP },
          { label: 'Entrepreneurship', href: ROUTES.PATHWAYS_ENTREPRENEURSHIP },
        ],
      },
    ],
  },
  trust: {
    id: 'trust',
    label: 'Trust',
    groups: [
      {
        label: 'Responsible AI',
        items: [
          { label: 'Responsible AI', href: ROUTES.TRUST_RESPONSIBLE_AI },
          { label: 'AI Transparency', href: ROUTES.TRUST_AI_TRANSPARENCY },
          { label: 'Human Oversight', href: ROUTES.TRUST_HUMAN_OVERSIGHT },
          { label: 'Fairness & Bias', href: ROUTES.TRUST_FAIRNESS_BIAS },
        ],
      },
      {
        label: 'Privacy & Safety',
        items: [
          { label: 'Data Ethics', href: ROUTES.TRUST_DATA_ETHICS },
          { label: 'Safeguarding', href: ROUTES.TRUST_SAFEGUARDING },
          { label: 'Security', href: ROUTES.TRUST_SECURITY },
          { label: 'Verification', href: ROUTES.TRUST_VERIFICATION },
          { label: 'Accessibility', href: ROUTES.TRUST_ACCESSIBILITY },
        ],
      },
    ],
  },
  company: {
    id: 'company',
    label: 'Company',
    groups: [
      {
        label: 'About',
        items: [
          { label: 'About Career OS', href: ROUTES.COMPANY_ABOUT },
          { label: 'Mission & Principles', href: ROUTES.COMPANY_MISSION },
          { label: 'Partners', href: ROUTES.COMPANY_PARTNERS },
        ],
      },
      {
        label: 'Connect',
        items: [
          { label: 'Press', href: ROUTES.COMPANY_PRESS },
          { label: 'Careers', href: ROUTES.COMPANY_CAREERS },
          { label: 'Contact', href: ROUTES.COMPANY_CONTACT },
        ],
      },
    ],
  },
};

/** Footer navigation groups */
export const footerNav: NavGroup[] = [
  {
    label: 'Product',
    items: [
      { label: 'Overview', href: ROUTES.PRODUCT },
      { label: 'AI Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
      { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH },
      { label: 'Opportunity Agent', href: ROUTES.PRODUCT_OPPORTUNITY_AGENT },
      { label: 'Employer Agent', href: ROUTES.PRODUCT_EMPLOYER_AGENT },
      { label: 'How It Works', href: ROUTES.PRODUCT_HOW_IT_WORKS },
    ],
  },
  {
    label: 'Individuals',
    items: [
      { label: 'For Students', href: ROUTES.FOR_STUDENTS },
      { label: 'For Professionals', href: ROUTES.FOR_PROFESSIONALS },
      { label: 'Pathways', href: ROUTES.PATHWAYS },
      { label: 'Apprenticeships', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
      { label: 'Trades', href: ROUTES.PATHWAYS_TRADES },
      { label: 'Entrepreneurship', href: ROUTES.PATHWAYS_ENTREPRENEURSHIP },
    ],
  },
  {
    label: 'Schools',
    items: [
      { label: 'For High Schools', href: ROUTES.FOR_HIGH_SCHOOLS },
      { label: 'Educators', href: ROUTES.SCHOOLS_EDUCATORS },
      { label: 'Student Safety', href: ROUTES.SCHOOLS_STUDENT_SAFETY },
      { label: 'Outcomes', href: ROUTES.SCHOOLS_OUTCOMES },
      { label: 'Privacy', href: ROUTES.SCHOOLS_PRIVACY },
      { label: 'Partnerships', href: ROUTES.SCHOOLS_PARTNERSHIPS },
    ],
  },
  {
    label: 'Employers',
    items: [
      { label: 'For Employers', href: ROUTES.FOR_EMPLOYERS },
      { label: 'Employer Agent', href: ROUTES.EMPLOYERS_EMPLOYER_AGENT },
      { label: 'Talent Discovery', href: ROUTES.EMPLOYERS_TALENT_DISCOVERY },
      { label: 'Early Careers', href: ROUTES.EMPLOYERS_EARLY_CAREERS },
      { label: 'Responsible Hiring', href: ROUTES.EMPLOYERS_RESPONSIBLE_HIRING },
    ],
  },
  {
    label: 'Trust',
    items: [
      { label: 'Trust Centre', href: ROUTES.TRUST },
      { label: 'Responsible AI', href: ROUTES.TRUST_RESPONSIBLE_AI },
      { label: 'Safeguarding', href: ROUTES.TRUST_SAFEGUARDING },
      { label: 'Data Ethics', href: ROUTES.TRUST_DATA_ETHICS },
      { label: 'Security', href: ROUTES.TRUST_SECURITY },
      { label: 'Accessibility', href: ROUTES.TRUST_ACCESSIBILITY },
    ],
  },
  {
    label: 'Standards',
    items: [
      { label: 'Standards Centre', href: ROUTES.STANDARDS },
      { label: 'Community Code', href: ROUTES.STANDARDS_COMMUNITY_CODE },
      { label: 'Employer Code', href: ROUTES.STANDARDS_EMPLOYER_CODE },
      { label: 'Anti-Discrimination', href: ROUTES.STANDARDS_ANTI_DISCRIMINATION },
      { label: 'Safety', href: ROUTES.STANDARDS_SAFETY },
    ],
  },
  {
    label: 'Regulatory',
    items: [
      { label: 'Regulatory Alignment', href: ROUTES.REGULATORY },
      { label: 'United States', href: ROUTES.REGULATORY_UNITED_STATES },
      { label: 'Student Privacy', href: ROUTES.REGULATORY_STUDENT_PRIVACY },
      { label: 'Automated Hiring', href: ROUTES.REGULATORY_AUTOMATED_HIRING },
      { label: 'Global Expansion', href: ROUTES.REGULATORY_GLOBAL_EXPANSION },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: ROUTES.COMPANY_ABOUT },
      { label: 'Mission', href: ROUTES.COMPANY_MISSION },
      { label: 'Partners', href: ROUTES.COMPANY_PARTNERS },
      { label: 'Press', href: ROUTES.COMPANY_PRESS },
      { label: 'Careers', href: ROUTES.COMPANY_CAREERS },
      { label: 'Contact', href: ROUTES.COMPANY_CONTACT },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Resources', href: ROUTES.RESOURCES },
      { label: 'Career Guides', href: ROUTES.RESOURCES_GUIDES },
      { label: 'Industries', href: ROUTES.RESOURCES_INDUSTRIES },
      { label: 'Skills', href: ROUTES.RESOURCES_SKILLS },
      { label: 'Education', href: ROUTES.RESOURCES_EDUCATION },
    ],
  },
  {
    label: 'Legal',
    items: [
      { label: 'Legal Centre', href: ROUTES.LEGAL },
      { label: 'Terms of Service', href: ROUTES.LEGAL_TERMS },
      { label: 'Privacy Policy', href: ROUTES.LEGAL_PRIVACY },
      { label: 'Cookie Policy', href: ROUTES.LEGAL_COOKIES },
      { label: 'AI Terms', href: ROUTES.LEGAL_AI_TERMS },
      { label: 'Student Terms', href: ROUTES.LEGAL_STUDENT_TERMS },
      { label: 'Employer Terms', href: ROUTES.LEGAL_EMPLOYER_TERMS },
      { label: 'Accessibility', href: ROUTES.LEGAL_ACCESSIBILITY },
    ],
  },
];
