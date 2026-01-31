import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Qui Sommes-Nous ? | Cout-Monte-Escalier.fr",
    description: "Découvrez l'équipe derrière Cout-Monte-Escalier.fr, notre mission d'aide à l'autonomie et notre expertise dans le domaine du maintien à domicile.",
};

export default function QuiSommesNousPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-50 border-b border-slate-200 py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Notre Mission : Votre Autonomie
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Cout-Monte-Escalier.fr est le guide de référence indépendant pour l'équipement du maintien à domicile.
                        Nous aidons chaque année des milliers de seniors à retrouver leur indépendance en toute sécurité.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="prose prose-lg prose-slate mx-auto">
                    <h2>Qui se cache derrière ce site ?</h2>
                    <p>
                        Fondé par une équipe de passionnés du "bien-vieillir" et d'experts en accessibilité,
                        <strong>Cout-Monte-Escalier.fr</strong> est né d'un constat simple : il est difficile de s'y retrouver
                        parmi les centaines de modèles et d'installateurs de monte-escaliers en France.
                    </p>
                    <p>
                        Notre objectif est de démystifier ce marché en apportant de la transparence sur les prix,
                        les aides financières (MaPrimeAdapt', Crédit d'impôt) et la qualité des équipements.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 not-prose rounded-r-lg">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Notre Engagement Qualité</h3>
                        <p className="text-slate-700">
                            Nous ne sommes liés à aucun fabricant. Nos guides sont rédigés en toute indépendance,
                            basés sur des critères techniques objectifs et des retours d'utilisateurs réels.
                            Nous ne recommandons que des artisans certifiés <strong>RGE</strong> (Reconnu Garant de l'Environnement).
                        </p>
                    </div>

                    <h2>L'Équipe Éditoriale</h2>
                    <p>
                        Nos articles sont rédigés et vérifiés par des spécialistes du secteur médico-social
                        et des techniciens du bâtiment.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 not-prose my-12">
                        <div className="flex flex-col items-center p-6 bg-white border border-slate-100 shadow-sm rounded-xl">
                            <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-3xl">👨‍💻</div>
                            <h3 className="font-bold text-lg text-slate-900">Marc Delorme</h3>
                            <p className="text-orange-600 font-medium mb-2">Rédacteur en Chef & Expert Technique</p>
                            <p className="text-sm text-slate-500 text-center">
                                Ancien ergothérapeute, Marc apporte son regard expert sur l'ergonomie et la sécurité des installations.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white border border-slate-100 shadow-sm rounded-xl">
                            <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-3xl">👩‍💼</div>
                            <h3 className="font-bold text-lg text-slate-900">Sophie Martin</h3>
                            <p className="text-orange-600 font-medium mb-2">Spécialiste Aides & Financement</p>
                            <p className="text-sm text-slate-500 text-center">
                                Juriste de formation, Sophie décrypte pour vous les dossiers MaPrimeAdapt' et les crédits d'impôt.
                            </p>
                        </div>
                    </div>

                    <h2>Pourquoi nous faire confiance ?</h2>
                    <ul>
                        <li><strong>Indépendance totale :</strong> Nous choisissons nos sujets librement.</li>
                        <li><strong>Mise à jour régulière :</strong> Les prix et les lois changent, nos articles aussi.</li>
                        <li><strong>Réseau vérifié :</strong> Les demandes de devis sont transmises uniquement à des professionnels sélectionnés.</li>
                    </ul>

                    <hr className="my-12" />

                    <h2>Nous contacter</h2>
                    <p>
                        Vous avez une question sur un article ? Vous souhaitez signaler une erreur ?
                        Vous pouvez contacter notre rédaction à l'adresse suivante :
                    </p>
                    <p className="font-medium text-slate-900">
                        📧 contact@cout-monte-escalier.fr
                    </p>
                </div>
            </div>
        </div>
    );
}
