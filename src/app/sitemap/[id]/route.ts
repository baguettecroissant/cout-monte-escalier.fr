import { getAllDepartmentCodes, getCitiesByDepartment } from '@/lib/seo-utils';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

const BASE_URL = 'https://cout-monte-escalier.fr';

export async function generateStaticParams() {
    const departmentCodes = getAllDepartmentCodes();
    return [
        { id: 'main.xml' },
        ...departmentCodes.map(code => ({ id: `${code}.xml` }))
    ];
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    // Check if ID ends with .xml
    if (!id.endsWith('.xml')) {
        return notFound();
    }

    const sitemapId = id.replace('.xml', '');
    let urls: { url: string; lastModified: Date; changeFrequency: string; priority: number }[] = [];

    if (sitemapId === 'main') {
        urls = [
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
        const departmentCities = getCitiesByDepartment(sitemapId);

        if (departmentCities.length === 0) {
            return notFound();
        }

        urls = departmentCities.map((city) => ({
            url: `${BASE_URL}/prix-monte-escalier/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }));
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((item) => `
    <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
    </url>
    `).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
