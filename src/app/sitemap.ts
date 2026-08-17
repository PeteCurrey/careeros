import type { MetadataRoute } from 'next';

const BASE_URL = 'https://career-os.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // Marketing Home
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Audience Pages
    { url: `${BASE_URL}/for/high-schools`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/for/students`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/for/professionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/for/employers`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Product Pages
    { url: `${BASE_URL}/product`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/product/ai-career-mentor`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/product/career-twin`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/product/career-passport`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/product/career-graph`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/product/opportunity-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/product/employer-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/product/career-network`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/product/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Pathways
    { url: `${BASE_URL}/pathways`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pathways/apprenticeships`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/trades`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/college`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/university`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/first-job`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/career-progression`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/career-change`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pathways/entrepreneurship`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Events Platform
    { url: `${BASE_URL}/events`, lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    { url: `${BASE_URL}/events/career-fairs`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/apprenticeships`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/meet-the-employer`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/workshops`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/webinars`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/events/recruitment-events`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/graduate`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/entrepreneurship`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/events/promote`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Resources
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Trust Centre
    { url: `${BASE_URL}/trust`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/trust/responsible-ai`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/ai-transparency`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/human-oversight`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/data-ethics`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/fairness-and-bias`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/safeguarding`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/security`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/accessibility`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/verification`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/trust/transparency`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // Standards
    { url: `${BASE_URL}/standards`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/standards/community-code`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/standards/mentor-code`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/standards/employer-code`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/standards/opportunity-standards`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/standards/anti-discrimination`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/standards/professional-conduct`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },
    { url: `${BASE_URL}/standards/safety`, lastModified: now, changeFrequency: 'yearly', priority: 0.65 },

    // Regulatory
    { url: `${BASE_URL}/regulatory`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/regulatory/united-states`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/student-privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/student-assessments`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/youth-employment`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/fair-employment`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/automated-hiring`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/fcra-and-employment-reports`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/state-privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/regulatory/global-expansion`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // Legal
    { url: `${BASE_URL}/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/legal/acceptable-use`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/legal/ai-terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.55 },
    { url: `${BASE_URL}/legal/student-terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal/parent-guardian-notice`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal/school-terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal/employer-terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal/candidate-privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.55 },
    { url: `${BASE_URL}/legal/data-processing`, lastModified: now, changeFrequency: 'yearly', priority: 0.55 },
    { url: `${BASE_URL}/legal/dpa`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/legal/copyright`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/legal/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/legal/subprocessors`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/legal/data-retention`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/legal/version-history`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Company
    { url: `${BASE_URL}/company/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/company/mission`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/company/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/company/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/company/press`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/company/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // /login and /signup are disallowed in robots.ts and not indexable.
    // Do not include them in the sitemap.
  ];
}
