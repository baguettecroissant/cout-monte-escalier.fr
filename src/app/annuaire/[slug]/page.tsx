import { notFound } from "next/navigation";
import { getAllDepartments, getCitiesByDepartment, getDepartmentByCode } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { DepartmentCities } from "@/components/psea/DepartmentCities";

// Slug format: "gironde-33"
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    // To enable static generation for all departments
    const depts = getAllDepartments();
    // Simplified slug generation consistent with breadcrumb
    return depts.map(d => ({
        slug: `${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1]; // Last part is code
    const dept = getDepartmentByCode(code);

    if (!dept) return {};

    return {
        title: `Prix Monte-Escalier ${dept.name} (${dept.code}) - Installateurs & Devis`,
        description: `Trouvez un installateur de monte-escalier agrée dans le ${dept.name} (${dept.code}). Devis comparatifs gratuits, aides locales (${dept.aide_locale}) et prix moyens.`,
    };
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    // Extract code from end of slug "gironde-33" -> "33"
    const parts = slug.split('-');
    const code = parts[parts.length - 1];

    const dept = getDepartmentByCode(code);
    if (!dept) notFound();

    // Fetch ALL cities for SEO
    const cities = getCitiesByDepartment(code);

    // Alphabetical sort for consistent directory listing
    cities.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Dept */}
            <section className="bg-slate-900 text-white relative pb-32 pt-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block bg-white/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-white/10">
                        Département {dept.code}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Installateurs Monte-Escalier <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">{dept.name}</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Trouvez un artisan certifié RGE dans la région {dept.region}.
                        Profitez des aides locales ({dept.aide_locale}) pour financer votre projet.
                    </p>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
            </section>

            {/* Interactive Cities Section */}
            <section className="pb-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-4">
                    <DepartmentCities
                        departmentName={dept.name}
                        departmentCode={dept.code}
                        cities={cities}
                    />
                </div>
            </section>
        </div>
    );
}
