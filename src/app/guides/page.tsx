import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getAllGuides } from "@/data/guides-content";

export const metadata = {
    title: "Guides & Conseils Monte-Escalier | Cout-Monte-Escalier.fr",
    description: "Nos dossiers complets pour bien choisir votre monte-escalier : prix, aides financières, modèles et installation.",
};

export default function GuidesPage() {
    const guides = getAllGuides();
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Guides & Conseils</h1>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Retrouvez toutes les informations indispensables pour réussir votre projet d'installation.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide) => (
                    <Card key={guide.slug} className="hover:shadow-lg transition-shadow border-slate-200">
                        {guide.image && (
                            <div className="relative w-full h-48 -mt-6">
                                <Image
                                    src={guide.image}
                                    alt={guide.title}
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="text-xl text-slate-900 line-clamp-2">{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-600 mb-4 text-base">
                                {guide.excerpt}
                            </CardDescription>
                            <Link href={`/guides/${guide.slug}`} className="text-orange-600 font-medium hover:underline">
                                Lire l'article &rarr;
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
