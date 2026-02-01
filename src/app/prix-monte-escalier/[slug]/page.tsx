import { notFound } from "next/navigation";
import { getCityFromSlug, getAllCitySlugs, generateCityMetadata } from "@/lib/seo-utils";
import { getCityIntro } from "@/lib/text-utils";
import { CityHero } from "@/components/features/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";

// Next.js 15 params
type Props = {
    params: Promise<{ slug: string }>;
};

// ... existing imports

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);

    if (!city) {
        notFound();
    }

    // Dynamic Text Logic
    const introText = getCityIntro(city);

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

                <StepsModule city={city} />

                {/* Quote Widget Section */}
                <section className="mb-16" id="devis">
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Comparez les tarifs à {city.name}
                            </h2>
                            <p className="text-slate-600 font-medium">
                                Obtenez jusqu'à 3 devis gratuits d'artisans certifiés RGE intervenant à {city.name} ({city.zip}).
                                <br />
                                <span className="text-sm text-slate-500 font-normal">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>

                        <ViteUnDevisWidget />
                    </div>
                </section>

                <LocalAidsModule city={city} />

                {/* FAQ Section */}
                <section className="mb-16 mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes à {city.name}</h2>
                    <div className="space-y-6">
                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Quel est le prix moyen d'un monte-escalier à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Le prix dépend de la configuration de votre escalier. À {city.name}, pour un escalier droit, comptez entre 2 500 € et 5 000 €. Pour un tournant, le budget se situe généralement entre 6 000 € et 10 000 €, pose incluse.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Existe-t-il des aides à {city.name} ({city.department_code}) ?</h3>
                            <p className="text-slate-600">
                                Oui, vous pouvez prétendre à MaPrimeAdapt' (jusqu'à 70% de prise en charge) ou au crédit d'impôt. Le département {city.department_name} via la {city.department_info?.aide_locale || 'MDPH'} peut également proposer des allocations comme l'APA.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Combien de temps pour l'installation ?</h3>
                            <p className="text-slate-600">
                                Les installateurs du secteur {city.zip} interviennent généralement rapidement. Comptez 2 à 3 semaines de fabrication pour un droit, et 4 à 6 semaines pour un courbe sur-mesure. La pose elle-même ne dure qu'une demi-journée.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Où trouver un réparateur de monte-escalier à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Nos partenaires installateurs assurent également le SAV et l'entretien annuel obligatoire. En passant par notre comparateur, vous êtes mis en relation avec des professionnels locaux qui garantissent un dépannage rapide dans le {city.department_code}.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <NearbyCitiesModule city={city} />
        </div>
    );
}
