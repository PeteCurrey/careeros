import type { MetadataRoute } from 'next';

const IS_PRODUCTION = process.env.NEXT_PUBLIC_SITE_ENV === 'production';

export default function robots(): MetadataRoute.Robots {
  // Non-production deployments (preview, staging, local) must not be crawled.
  // Set NEXT_PUBLIC_SITE_ENV=production in Vercel production environment only.
  if (!IS_PRODUCTION) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      sitemap: undefined,
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/app/',
          '/api/',
          '/_next/',
          '/login',
          '/signup',
        ],
      },
    ],
    sitemap: 'https://career-os.com/sitemap.xml',
  };
}
