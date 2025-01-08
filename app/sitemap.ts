// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brandme.top';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/social-media-management`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/social-media-marketing`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/website-development`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/linkedin-masterclass`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/get-quote`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            priority: 0.5,
        },
    ];
}