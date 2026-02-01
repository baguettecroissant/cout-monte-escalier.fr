
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { CheckCircle, Shield, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Devis Gratuit Monte-Escalier | Comparateur 2026",
    description: "Obtenez 3 devis gratuits pour votre monte-escalier. Comparaison sans engagement d'artisans certifiés RGE près de chez vous.",
};

export default function DevisPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        Recevez <span className="text-orange-600">3 Devis Gratuits</span>
                        <br /> pour votre Monte-Escalier
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Comparez les installateurs certifiés de votre région et économisez jusqu'à 30% sur votre installation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Main Widget Area */}
                    <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        <div className="p-1 md:p-4">
                            <ViteUnDevisWidget />
                        </div>
                        <div className="bg-slate-50 p-4 text-center border-t border-slate-100 text-sm text-slate-500">
                            Vos données sont sécurisées et ne seront transmises qu'aux artisans sélectionnés.
                        </div>
                    </div>

                    {/* Sidebar Trust Signals */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Pourquoi comparer ?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold block text-slate-900">100% Gratuit</span>
                                        <span className="text-sm text-slate-600">Aucun frais, aucun engagement.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                        <Shield className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold block text-slate-900">Artisans Vérifiés</span>
                                        <span className="text-sm text-slate-600">RGE, Qualibat et décennale à jour.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                        <Clock className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold block text-slate-900">Rapide</span>
                                        <span className="text-sm text-slate-600">Vos devis sous 48h maximum.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl text-center text-white">
                            <div className="text-4xl font-bold text-orange-400 mb-2">1 500+</div>
                            <div className="text-slate-300">Familles accompagnées en 2026</div>
                        </div>
                    </div>
                </div>


                {/* SEO Content Section */}
                <div className="mt-20 pt-16 border-t border-slate-200">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <article className="prose prose-slate max-w-none">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi comparer plusieurs devis monte-escalier ?</h2>
                                <p>
                                    L'installation d'un monte-escalier est un projet sur-mesure dont le prix peut varier du simple au double selon les prestataires.
                                    En moyenne, nos utilisateurs constatent des écarts de prix allant jusqu'à <strong>30%</strong> pour une configuration identique.
                                </p>
                                <p>
                                    Demander plusieurs devis vous permet de :
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
                                    <li>Comparer les <strong>solutions techniques</strong> proposées (monorail vs double rail).</li>
                                    <li>Négocier les tarifs en faisant jouer la concurrence locale.</li>
                                    <li>Vérifier les garanties et les contrats de maintenance inclus.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Quels éléments font varier le devis ?</h2>
                                <p>
                                    Le coût final dépend de plusieurs facteurs clés que vous retrouverez détaillés dans notre <Link href="/guides/prix-monte-escalier-2026" className="text-orange-600 hover:underline font-medium">guide des prix 2026</Link> :
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <strong className="text-slate-900 block mb-1">La configuration de l'escalier</strong>
                                        <span className="text-slate-600 text-sm">Escalier droit (le moins cher) ou tournant (sur-mesure nécessaire).</span>
                                    </li>
                                    <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <strong className="text-slate-900 block mb-1">Les options de confort</strong>
                                        <span className="text-slate-600 text-sm">Siège pivotant automatique, rail relevable, coloris du rail...</span>
                                    </li>
                                    <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <strong className="text-slate-900 block mb-1">Les travaux annexes</strong>
                                        <span className="text-slate-600 text-sm">Besoin d'une prise électrique dédiée ou modifications de la menuiserie.</span>
                                    </li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                                    <h3 className="text-blue-900 font-bold mb-2">Bon à savoir : Les aides financières</h3>
                                    <p className="text-blue-800 text-sm">
                                        L'installation d'un monte-escalier donne droit à des aides de l'État comme <strong>MaPrimeAdapt'</strong> (jusqu'à 70% de prise en charge) ou le crédit d'impôt.
                                        Consultez notre dossier complet sur le <Link href="/guides/remboursement-monte-escalier-securite-sociale" className="underline hover:text-blue-600">remboursement et les aides</Link>.
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Questions Fréquentes</h3>
                                <div className="space-y-4">
                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            La demande est-elle payante ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Non, notre service de mise en relation est <strong>100% gratuit</strong> pour vous. Nous sommes rémunérés par les artisans partenaires, ce qui n'impacte pas votre devis final.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Suis-je engagé ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Absolument pas. Vous recevez vos devis librement. Si aucune proposition ne vous convient, vous n'avez aucune obligation de signer.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Quelle durée de validité ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Un devis est généralement valable entre <strong>1 et 3 mois</strong>. Au-delà, les tarifs des matériaux peuvent évoluer.
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
