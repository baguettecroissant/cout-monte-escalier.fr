import { notFound } from "next/navigation";
import { getCityFromSlug, getAllCitySlugs, generateCityMetadata } from "@/lib/seo-utils";
import { CityHero } from "@/components/features/CityHero";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";

// Next.js 15 params
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = getAllCitySlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city);
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);

    if (!city) {
        notFound();
    }

    // Dynamic Text Logic
    let introText = "";
    const isLargeCity = (city.population || 0) > 10000;

    if (isLargeCity) {
        introText = `Grande ville du ${city.department_name}, ${city.name} dispose de nombreux installateurs qualifiés pour sécuriser votre escalier.`;
    } else {
        introText = `Village paisible, ${city.name} est parfaitement couverte par les techniciens de la région ${city.region}, habitués à intervenir en zone rurale.`;
    }

    return (
        <div className="min-h-screen bg-white">
            <SchemaOrg city={city} />

            <div className="bg-slate-50 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-4xl">
                    <DepartmentBreadcrumb city={city} />
                </div>
            </div>

            <CityHero city={city} />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        L'installation de monte-escalier à {city.name}
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p>
                            Vivre à <strong>{city.name}</strong> ({city.zip}) offre une qualité de vie appréciable. {introText}
                            Que vous résidiez en appartement ou dans une maison individuelle, l'installation d'un monte-escalier est souvent la solution la plus
                            économique pour éviter un déménagement.
                        </p>
                        <p className="mt-4">
                            Dans le département ({city.department_name}), de nombreux artisans spécialisés proposent des solutions
                            adaptées : monte-escalier droit, tournant, ou même extérieur pour l'accès au jardin.
                        </p>
                    </div>
                </section>

                {/* Price Placeholder */}
                <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Quel prix pour un monte-escalier à {city.name} ?
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Les tarifs varient selon la configuration de votre escalier. Voici les moyennes observées
                        en {city.region} :
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="text-slate-500 font-medium mb-2">Droit Standard</div>
                            <div className="text-3xl font-extrabold text-slate-900">2 800 €</div>
                            <div className="text-xs text-slate-400">Prix moyen installé</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="text-slate-500 font-medium mb-2">Tournant</div>
                            <div className="text-3xl font-extrabold text-slate-900">7 500 €</div>
                            <div className="text-xs text-slate-400">Prix moyen installé</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="text-slate-500 font-medium mb-2">Extérieur</div>
                            <div className="text-3xl font-extrabold text-slate-900">5 200 €</div>
                            <div className="text-xs text-slate-400">Prix moyen installé</div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes à {city.name}</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Existe-t-il des aides à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Oui, vous pouvez prétendre à MaPrimeAdapt' ou au crédit d'impôt (50%) qui s'appliquent partout en France, y compris à {city.name}.
                                Le département {city.department_name} peut également proposer d'autres aides spécifiques.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Combien de temps pour l'installation ?</h3>
                            <p className="text-slate-600">
                                Pour un escalier droit à {city.name}, comptez 2 à 3 semaines de fabrication. Pour un tournant, le délai est de 4 à 6 semaines.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <NearbyCitiesModule city={city} />
        </div>
    );
}
