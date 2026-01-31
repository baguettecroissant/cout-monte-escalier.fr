import { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/seo-utils';

const BASE_URL = 'https://cout-monte-escalier.fr';
const ITEMS_PER_SITEMAP = 5000;

export async function generateSitemaps() {
    // 35k+ cities, so we need multiple sitemaps
    const citySlugs = getAllCitySlugs();
    const count = Math.ceil(citySlugs.length / ITEMS_PER_SITEMAP);

    // Create an array of IDs from 0 to count-1
    return Array.from({ length: count }, (_, id) => ({ id }));
}

export default async function sitemap({ id }: { id: number | Promise<number> }): Promise<MetadataRoute.Sitemap> {
    const citySlugs = getAllCitySlugs();
    const sitemapId = await id;

    // Main sitemap (id 0) also includes static pages
    if (Number(sitemapId) === 0) {
        // Get the first chunk of cities
        const start = 0;
        const end = ITEMS_PER_SITEMAP;
        const currentBatch = citySlugs.slice(start, end);

        const cityUrls = currentBatch.map((slug) => ({
            url: `${BASE_URL}/prix-monte-escalier/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        return [
            {
                url: BASE_URL,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1,
            },
            {
                url: `${BASE_URL}/guides`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            ...cityUrls,
        ];
    } else {
        // Other sitemaps just contain cities
        const start = Number(sitemapId) * ITEMS_PER_SITEMAP;
        const end = start + ITEMS_PER_SITEMAP;
        const currentBatch = citySlugs.slice(start, end);

        return currentBatch.map((slug) => ({
            url: `${BASE_URL}/prix-monte-escalier/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));
    }
}
