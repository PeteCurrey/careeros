/**
 * Single Source of Truth for Indexable Public Marketing Routes
 * 
 * Used to generate src/app/sitemap.ts dynamically.
 * Never includes authenticated app routes, admin routes, or disallowed URLs.
 */

export interface IndexableRoute {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const PUBLIC_INDEXABLE_ROUTES: IndexableRoute[] = [
  // ── 1. Core Marketing & Overview ──
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/product', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/product/how-it-works', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/product/ai-career-mentor', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/product/career-twin', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/product/career-passport', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/product/career-graph', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/product/opportunity-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/product/employer-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/product/career-network', changeFrequency: 'monthly', priority: 0.8 },

  // ── 2. Mentors Estate ──
  { path: '/mentors', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/mentors/marcus-thorne', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/amara-osei', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/callum-reid', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/priya-chakraborty', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/isabelle-fontaine', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/jordan-park', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/darnell-hayes', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mentors/rosa-mbeki', changeFrequency: 'monthly', priority: 0.8 },

  // ── 3. Audience Hubs ──
  { path: '/for/students', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/for/professionals', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/for/high-schools', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/for/employers', changeFrequency: 'monthly', priority: 0.9 },

  // ── 4. Pathways Estate ──
  { path: '/pathways', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/pathways/college', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/pathways/university', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/pathways/apprenticeships', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pathways/trades', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pathways/first-job', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/pathways/career-progression', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/pathways/career-change', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pathways/leadership', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/pathways/entrepreneurship', changeFrequency: 'monthly', priority: 0.75 },

  // ── 5. Resources Estate ──
  { path: '/resources', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/resources/careers', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/resources/industries', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/resources/skills', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/resources/education', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/resources/guides', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/resources/entrepreneurship', changeFrequency: 'monthly', priority: 0.7 },

  // ── 6. Institutional Schools Estate ──
  { path: '/schools', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/schools/educators', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/schools/student-safety', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/schools/privacy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/schools/outcomes', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/schools/partnerships', changeFrequency: 'monthly', priority: 0.75 },

  // ── 7. Institutional Employers Estate ──
  { path: '/employers', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/employers/employer-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/employers/talent-discovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/employers/early-careers', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/employers/internships', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/employers/apprenticeships', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/employers/employer-standards', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/employers/responsible-hiring', changeFrequency: 'monthly', priority: 0.8 },

  // ── 8. Events Platform ──
  { path: '/events', changeFrequency: 'daily', priority: 0.95 },
  { path: '/events/career-fairs', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/apprenticeships', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/meet-the-employer', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/workshops', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/webinars', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/events/recruitment-events', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/graduate', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/entrepreneurship', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/events/promote', changeFrequency: 'monthly', priority: 0.8 },

  // ── 9. Trust & Assurance Centre ──
  { path: '/trust', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/trust/compliance', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/trust/responsible-ai', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/trust/ai-transparency', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/trust/human-oversight', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trust/data-ethics', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trust/fairness-and-bias', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trust/safeguarding', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/trust/security', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/trust/verification', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trust/transparency', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trust/accessibility', changeFrequency: 'monthly', priority: 0.75 },

  // ── 10. Platform Standards Centre ──
  { path: '/standards', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/standards/community-code', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/standards/mentor-code', changeFrequency: 'yearly', priority: 0.75 },
  { path: '/standards/employer-code', changeFrequency: 'yearly', priority: 0.75 },
  { path: '/standards/opportunity-standards', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/standards/anti-discrimination', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/standards/professional-conduct', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/standards/safety', changeFrequency: 'yearly', priority: 0.7 },

  // ── 11. Regulatory Alignment (US-First) ──
  { path: '/regulatory', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/regulatory/united-states', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/regulatory/student-privacy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/regulatory/student-assessments', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/regulatory/youth-employment', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/regulatory/fair-employment', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/regulatory/automated-hiring', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/regulatory/fcra-and-employment-reports', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/regulatory/state-privacy', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/regulatory/global-expansion', changeFrequency: 'monthly', priority: 0.7 },

  // ── 12. Legal & Governance Centre ──
  { path: '/legal', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/legal/terms', changeFrequency: 'yearly', priority: 0.65 },
  { path: '/legal/privacy', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/legal/cookies', changeFrequency: 'yearly', priority: 0.55 },
  { path: '/legal/acceptable-use', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/legal/ai-terms', changeFrequency: 'yearly', priority: 0.65 },
  { path: '/legal/student-terms', changeFrequency: 'yearly', priority: 0.65 },
  { path: '/legal/parent-guardian-notice', changeFrequency: 'yearly', priority: 0.65 },
  { path: '/legal/school-terms', changeFrequency: 'yearly', priority: 0.65 },
  { path: '/legal/employer-terms', changeFrequency: 'yearly', priority: 0.65 },
  { path: '/legal/candidate-privacy', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/legal/data-processing', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/legal/dpa', changeFrequency: 'yearly', priority: 0.55 },
  { path: '/legal/subprocessors', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/legal/data-retention', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/legal/copyright', changeFrequency: 'yearly', priority: 0.55 },
  { path: '/legal/accessibility', changeFrequency: 'yearly', priority: 0.55 },
  { path: '/legal/version-history', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/legal/data-sources-integrations', changeFrequency: 'weekly', priority: 0.8 },

  // ── 13. Company & Contact ──
  { path: '/company', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/company/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/company/mission', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/company/partners', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/company/press', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/company/careers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/company/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact/partnerships', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/support/report-data', changeFrequency: 'monthly', priority: 0.65 },
];
