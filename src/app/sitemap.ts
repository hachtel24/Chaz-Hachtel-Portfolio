import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chaz-hachtel-portfolio.vercel.app';
    return [
        { url: baseUrl, lastModified: new Date(), priority: 1 },
        { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/resume`, lastModified: new Date(), priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
        { url: `${baseUrl}/chachtel-sprints`, lastModified: new Date(), priority: 0.9 },
    ];
}
