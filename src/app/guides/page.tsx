import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
    title: "Guides & Conseils Monte-Escalier | Cout-Monte-Escalier.fr",
    description: "Nos dossiers complets pour bien choisir votre monte-escalier : prix, aides financières, modèles et installation.",
};

const guides = [
    {
        title: "Guide complet du Crédit d'Impôt 2026",
        slug: "credit-impot-monte-escalier",
        excerpt: "Comment bénéficier de 25% de crédit d'impôt et de MaPrimeAdapt' pour votre installation ?"
    },
    {
        title: "Monte-escalier d'occasion : bonne ou mauvaise idée ?",
        slug: "monte-escalier-occasion",
        excerpt: "Les pièges à éviter et les garanties indispensables avant d'acheter un modèle reconditionné."
    },
    {
        title: "Prix moyen d'un monte-escalier tournant",
        slug: "prix-monte-escalier-tournant",
        excerpt: "Détail des coûts pour les escaliers courbes ou avec palier intermédiaire."
    }
];

export default function GuidesPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Guides & Conseils</h1>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Retrouvez toutes les informations indispensables pour réussir votre projet d'installation.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide) => (
                    <Card key={guide.slug} className="hover:shadow-lg transition-shadow border-slate-200">
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
