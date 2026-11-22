import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

// Required so the file can be emitted by the static export used for GitHub Pages.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
