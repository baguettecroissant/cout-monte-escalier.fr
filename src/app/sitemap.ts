import { MetadataRoute } from 'next';
import { getAllCitySlugs, getAllDepartmentCodes, getCitiesByDepartment } from '@/lib/seo-utils';

const BASE_URL = 'https://cout-monte-escalier.fr';

export async function generateSitemaps() {
    // Generate sitemaps for 'main' (static pages) and each department
    const departmentCodes = getAllDepartmentCodes();

    return [
        { id: 'main' },
        ...departmentCodes.map(code => ({ id: code }))
    ];
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    const sitemapId = id;

    // Main sitemap (id 'main') includes static pages
    if (sitemapId === 'main') {
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
        ];
    } else {
        // Department sitemaps contain cities for that department
        const departmentCities = getCitiesByDepartment(sitemapId);

        return departmentCities.map((city) => ({
            url: `${BASE_URL}/prix-monte-escalier/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));
    }
}
