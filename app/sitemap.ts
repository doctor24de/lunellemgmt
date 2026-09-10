import type { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lunellemanagement.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...insights.map((article) => ({ url: `${base}/insights/${article.slug}`, lastModified: new Date(article.published), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
