import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://karan-portfolio-kumar.vercel.app/', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'yearly', // Since portfolio content doesn't change frequently
      priority: 1.0, // Highest priority because it's the only page
    },
  ];
}
