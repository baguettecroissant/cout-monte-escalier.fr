
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { CheckCircle, Shield, Clock } from "lucide-react";

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
            </div>
        </div>
    );
}
