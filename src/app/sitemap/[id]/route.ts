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

import { GUIDES } from '@/data/guides-content';
import { BRANDS } from '@/data/brands';
import departmentsData from '@/lib/db/departments-infos.json';

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
        const staticPages = [
            { path: '', priority: 1, frequency: 'daily' },
            { path: '/annuaire', priority: 0.9, frequency: 'weekly' },
            { path: '/devis', priority: 0.9, frequency: 'weekly' },
            { path: '/outils', priority: 0.9, frequency: 'weekly' },
            { path: '/simulateur-prix', priority: 0.8, frequency: 'weekly' },
            { path: '/calculateur-aides', priority: 0.8, frequency: 'weekly' },
            { path: '/simulation-delais', priority: 0.8, frequency: 'weekly' },
            { path: '/marques', priority: 0.8, frequency: 'weekly' },
            { path: '/faq', priority: 0.8, frequency: 'weekly' },
            { path: '/glossaire', priority: 0.7, frequency: 'monthly' },
            { path: '/qui-sommes-nous', priority: 0.5, frequency: 'monthly' },
            { path: '/mentions-legales', priority: 0.3, frequency: 'monthly' },
        ];

        // Core static pages
        urls = staticPages.map(p => ({
            url: `${BASE_URL}${p.path}`,
            lastModified: new Date(),
            changeFrequency: p.frequency,
            priority: p.priority,
        }));

        // Dynamic Guides
        GUIDES.forEach(guide => {
            urls.push({
                url: `${BASE_URL}/guides/${guide.slug}`,
                lastModified: new Date(guide.date),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Dynamic Brands
        BRANDS.forEach(brand => {
            urls.push({
                url: `${BASE_URL}/marques/${brand.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Department landing pages
        departmentsData.forEach(dept => {
            // Slug is usually "nom-code" but let's check existing logic or use code
            // Based on previous work, slugs are like "paris-75" or "ain-01"
            // Let's normalize name for slug
            const slug = `${dept.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${dept.code}`;
            urls.push({
                url: `${BASE_URL}/annuaire/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        });
    } else {
        const departmentCities = getCitiesByDepartment(sitemapId);

        if (departmentCities.length === 0) {
            return notFound();
        }

        urls = departmentCities.map((city) => ({
            url: `${BASE_URL}/prix-monte-escalier/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6, // Reduced city priority relative to depts/guides
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
