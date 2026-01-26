// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://globaldatacapture.com/sitemap.xml',
    host: 'https://globaldatacapture.com',
  };
}
