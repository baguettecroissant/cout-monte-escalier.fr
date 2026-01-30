import { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/seo-utils';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cout-monte-escalier.fr'; // Replace with env var in production

    const citySlugs = getAllCitySlugs();

    const cityUrls = citySlugs.map((slug) => ({
        url: `${baseUrl}/prix-monte-escalier/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...cityUrls,
    ];
}
