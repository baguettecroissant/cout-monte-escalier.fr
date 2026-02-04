
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getGuideBySlug, getAllGuides } from "@/data/guides-content";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Calendar, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);

    if (!guide) {
        return {
            title: "Article non trouvé",
        };
    }

    return {
        title: guide.metaTitle,
        description: guide.metaDescription,
    };
}

export async function generateStaticParams() {
    const guides = getAllGuides();
    return guides.map((guide) => ({
        slug: guide.slug,
    }));
}

export default async function GuidePost({ params }: PageProps) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header / Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200 py-8">
                <div className="container mx-auto px-4">
                    <Breadcrumbs
                        items={[
                            { label: "Guides", href: "/guides" },
                            { label: guide.title },
                        ]}
                    />
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl">
                        {guide.title}
                    </h1>
                    <div className="flex items-center gap-6 text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {guide.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <Link href="/qui-sommes-nous" className="hover:text-orange-600 hover:underline transition-colors">
                                {guide.author}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-2">
                    {guide.image && (
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-lg">
                            <Image
                                src={guide.image}
                                alt={guide.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-strong:text-slate-900"
                        dangerouslySetInnerHTML={{ __html: guide.content }}
                    />

                    {/* CTA Bottom Article */}
                    <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Besoin d'un devis précis ?</h3>
                        <p className="text-slate-700 mb-6">
                            Nos artisans partenaires sont certifiés RGE et peuvent vous aider à monter votre dossier MaPrimeAdapt'.
                        </p>
                        <Link href="/devis">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 rounded-full">
                                Comparer les tarifs gratuitement
                            </Button>
                        </Link>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Sticky Widget */}
                    <div className="sticky top-24">
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Devis Gratuit
                            </h3>
                            <p className="text-sm text-slate-600 mb-4">
                                Recevez jusqu'à 3 offres d'installateurs locaux.
                            </p>
                            <ViteUnDevisWidget />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
