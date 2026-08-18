import type { MetadataRoute } from 'next';
import { PUBLIC_INDEXABLE_ROUTES } from '@/lib/seo/sitemap-manifest';

const BASE_URL = 'https://career-os.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return PUBLIC_INDEXABLE_ROUTES.map((route) => ({
    url: BASE_URL + route.path,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
