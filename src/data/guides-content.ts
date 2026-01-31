
export interface GuideArticle {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string; // HTML content
    image?: string;
    metaTitle: string;
    metaDescription: string;
}

export const GUIDES: GuideArticle[] = [
    {
        slug: "prix-monte-escalier-2026",
        title: "Quel est le Prix Réel d'un Monte-Escalier en 2026 ? (Droit vs Tournant)",
        excerpt: "Budget, pose, et aides financières : découvrez le coût réel d'un monte-escalier en 2026 selon votre configuration (droit ou tournant).",
        date: "2026-01-31",
        author: "Équipe Rédaction",
        image: "/images/blog/monte_escalier_prix_2026_1769849010437.png",
        metaTitle: "Prix Monte-Escalier 2026 : Le Comparatif Réel (Droit & Tournant)",
        metaDescription: "Combien coûte vraiment un monte-escalier en 2026 ? Comparatif des prix installation comprise, crédit d'impôt et MaPrimeAdapt' déduits. Devis gratuit.",
        content: `
            <h2>Combien coûte un monte-escalier en 2026 : La réponse directe</h2>
            <p>En 2026, l'installation d'un monte-escalier représente un investissement important mais essentiel pour le maintien à domicile. Le prix varie considérablement selon la configuration de votre escalier.</p>
            
            <h3>Les fourchettes de prix moyennes (Pose comprise)</h3>
            <ul>
                <li><strong>Monte-escalier droit :</strong> Entre 2 400€ et 4 500€. C'est le modèle le plus simple, installé sur des rails droits.</li>
                <li><strong>Monte-escalier tournant :</strong> Entre 7 000€ et 12 000€. Nécessite des rails sur-mesure (courbes, paliers).</li>
                <li><strong>Monte-escalier extérieur :</strong> Entre 3 000€ et 9 000€. Traité pour résister aux intempéries.</li>
            </ul>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
                <h4 class="text-blue-900 font-bold text-lg mb-2">💡 Le Conseil de l'Expert</h4>
                <p class="text-blue-800">
                    Ne vous fiez pas à un prix "catalogue". Chaque escalier est unique (largeur, inclinaison, obstacles). 
                    Un technicien doit impérativement venir chez vous pour une étude de faisabilité technique gratuite.
                </p>
            </div>

            <h2>Quels éléments font varier le devis ?</h2>
            <p>Outre la forme de l'escalier, plusieurs facteurs influencent le coût final de votre <strong>fauteuil élévateur</strong> :</p>
            <ul>
                <li><strong>La longueur du rail :</strong> Un escalier de 10 marches coûte moins cher qu'un escalier de 15 marches.</li>
                <li><strong>Les options de confort :</strong> Siège pivotant motorisé, rail relevable (pour dégager une porte), repose-pieds automatique.</li>
                <li><strong>Le poids supporté :</strong> Certains modèles renforcés (pour plus de 120kg) sont plus onéreux.</li>
            </ul>

            <div class="my-8 text-center">
                <a href="/devis" class="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 transition-colors shadow-lg">
                    Comparer les devis gratuitement
                </a>
            </div>

            <h2>Les Aides Financières en 2026 : Réduisez la facture !</h2>
            <p>Bonne nouvelle : l'État soutient massivement l'<strong>accessibilité</strong> des seniors. En cumulant les aides, vous pouvez financer jusqu'à 70% de votre installation.</p>

            <h3>MaPrimeAdapt'</h3>
            <p>Disponible depuis 2024, cette aide unique fusionne les anciens dispositifs. Elle s'adresse aux propriétaires e revenus modestes et très modestes, finançant 50% à 70% des travaux.</p>

            <h3>Le Crédit d'Impôt (25%)</h3>
            <p>Si vous n'êtes pas éligible à MaPrimeAdapt', vous bénéficiez tout de même d'un crédit d'impôt de 25% sur les dépenses d'équipement (plafond de 5 000€ pour une personne seule).</p>

            <h2>Pourquoi faire appel à un installateur local ?</h2>
            <p>Choisir un artisan proche de chez vous garantit une intervention rapide en cas de besoin.</p>
            <p>Que vous habitiez en <a href='/annuaire/gironde-33' class='text-orange-600 hover:underline'>Gironde</a> ou en <a href='/annuaire/loire-atlantique-44' class='text-orange-600 hover:underline'>Loire-Atlantique</a>, notre annuaire référence les meilleurs installateurs certifiés de votre région.</p>
        `
    },
    {
        slug: "remboursement-monte-escalier-securite-sociale",
        title: "Monte-Escalier et Sécurité Sociale : Le Guide des Remboursements 2026",
        excerpt: "La Sécurité Sociale rembourse-t-elle les monte-escaliers ? Faites le point sur les prises en charge LPPR, APA et PCH en 2026.",
        date: "2026-01-31",
        author: "Équipe Rédaction",
        image: "/images/blog/remboursement_secu_monte_escalier_1769849025745.png",
        metaTitle: "Remboursement Sécurité Sociale Monte-Escalier : Le Guide 2026",
        metaDescription: "Peut-on se faire rembourser un monte-escalier par la Sécurité Sociale ? Tout savoir sur la base de remboursement LPPR, l'APA et la PCH.",
        content: `
            <h2>La Sécurité Sociale rembourse-t-elle l'installation ?</h2>
            <p>C'est une question fréquente : "La sécu prend-elle en charge mon monte-escalier ?". La réponse directe est : <strong>Partiellement, et sous conditions très strictes</strong>.</p>
            <p>Le monte-escalier n'est pas considéré comme un dispositif médical classique (comme des béquilles ou un lit médicalisé). Cependant, certains modèles spécifiques (avec siège coquille par exemple) peuvent bénéficier d'une prise en charge au titre de la <strong>LPPR</strong> (Liste des Produits et Prestations Remboursables).</p>

            <h3>Le Code LPPR pour monte-escalier</h3>
            <p>Si votre monte-escalier répond aux critères (notamment s'il permet le transfert d'une personne handicapée), la Sécurité Sociale peut rembourser une somme forfaitaire. Attention, ce montant est souvent faible par rapport au coût total de l'équipement.</p>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
                <h4 class="text-blue-900 font-bold text-lg mb-2">💡 Le Conseil de l'Expert</h4>
                <p class="text-blue-800">
                    Pour bénéficier d'une prise en charge LPPR, vous devez impérativement avoir une prescription médicale de votre médecin traitant prescrivant un "appareil élévateur vertical" ou similaire AVANT l'achat.
                </p>
            </div>

            <h2>Les vraies aides viennent des départements (APA et PCH)</h2>
            <p>Si la "Sécu" rembourse peu, les conseils départementaux sont beaucoup plus généreux pour compenser la <strong>perte d'autonomie</strong>.</p>

            <h3>L'APA (Allocation Personnalisée d'Autonomie)</h3>
            <p>Destinée aux personnes de plus de 60 ans (GIR 1 à 4), l'APA à domicile peut financer une partie des travaux d'aménagement du logement, dont le monte-escalier.</p>

            <h3>La PCH (Prestation de Compensation du Handicap)</h3>
            <p>Pour les personnes de moins de 60 ans ou dont le handicap a été reconnu avant cet âge. La PCH aménagement du logement peut couvrir jusqu'à 100% des travaux (dans la limite d'un plafond de 1 500€ à 10 000€ selon les cas payés sur 10 ans).</p>

            <div class="my-8 text-center">
                <a href="/devis" class="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 transition-colors shadow-lg">
                    Vérifier mon éligibilité gratuitement
                </a>
            </div>

            <h2>Et ma mutuelle ?</h2>
            <p>Certaines mutuelles "seniors" haut de gamme proposent un forfait "aménagement du domicile". Relisez bien votre contrat ou contactez votre conseiller.</p>

            <h2>Des installateurs agréés pour monter le dossier</h2>
            <p>Constituer ces dossiers administratifs peut être complexe. Heureusement, la plupart des installateurs certifiés RGE vous accompagnent dans ces démarches car ils connaissent les rouages locaux.</p>
            <p>Trouvez un expert près de chez vous, par exemple en <a href='/annuaire/seine-et-marne-77' class='text-orange-600 hover:underline'>Seine-et-Marne</a> ou dans les <a href='/annuaire/yvelines-78' class='text-orange-600 hover:underline'>Yvelines</a>, pour une étude personnalisée.</p>
        `
    },
    {
        slug: "monte-escalier-pas-cher",
        title: "Monte-Escalier Pas Cher : Les 5 Meilleurs Modèles Économiques en 2026",
        excerpt: "Est-il possible de s'équiper sans se ruiner ? Découvrez notre sélection de monte-escaliers fiables à petit prix et les astuces pour réduire la facture.",
        date: "2026-01-31",
        author: "Équipe Rédaction",
        image: "/images/blog/monte-escalier-pas-cher.jpg",
        metaTitle: "Monte-Escalier Pas Cher : Prix, Modèles et Avis 2026",
        metaDescription: "Quel budget pour un monte-escalier économique ? Comparatif des 5 modèles les moins chers du marché, aides financières déduites.",
        content: `
            <h2>Le prix juste pour votre autonomie : est-ce possible ?</h2>
            <p>L'installation d'un monte-escalier est souvent perçue comme un luxe inaccessible. Pourtant, face à la demande croissante liée au vieillissement de la population, les fabricants ont développé des gammes <strong>"access"</strong> ou <strong>"éco"</strong> qui allient sécurité et tarif maîtrisé.</p>
            <p>En 2026, un monte-escalier "pas cher" ne signifie plus "au rabais". C'est un équipement qui va à l'essentiel : vous transporter d'un étage à l'autre en toute sécurité, sans options superflues (écran LCD, cuir véritable, etc.).</p>

            <h3>Budget moyen : à quoi s'attendre ?</h3>
            <p>Pour vous donner une idée réaliste, voici les fourchettes de prix constatées pour des modèles économiques (pose comprise) :</p>
            <ul>
                <li><strong>Monte-escalier droit basique :</strong> Entre 2 800€ et 3 500€.</li>
                <li><strong>Monte-escalier tournant (entrée de gamme) :</strong> Entre 6 500€ et 8 500€.</li>
            </ul>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
                <h4 class="text-blue-900 font-bold text-lg mb-2">💡 Le Conseil de l'Expert</h4>
                <p class="text-blue-800">Méfiez-vous des prix "d'appel" à moins de 2 000€ souvent affichés sur internet. Ils cachent souvent des frais d'installation exorbitants ou concernent des modèles d'occasion sans garantie. Exigez toujours un devis "clés en main".</p>
            </div>

            <h2>Top 5 des Modèles Économiques (Rapport Qualité/Prix)</h2>
            <p>Nous avons sélectionné pour vous 5 modèles qui se distinguent par leur fiabilité et leur tarif compétitif.</p>

            <h3>1. Le "Levant" de ThyssenKrupp (TK Elevator)</h3>
            <p>C'est la référence du monte-escalier droit économique. Robuste, simple d'utilisation, il s'installe rapidement. Son design est neutre et s'intègre partout.</p>

            <h3>2. Le "Siena" de Stannah</h3>
            <p>Bien que Stannah soit une marque premium, le modèle Siena reste leur best-seller grâce à son excellent rapport qualité/prix. Il offre le confort légendaire de la marque sans les options luxueuses du modèle "Starla".</p>

            <h3>3. Le "HomeGlide" pour escalier droit</h3>
            <p>Conçu pour l'extérieur ou l'intérieur, c'est souvent le moins cher du marché (hors pose). Il est très basique mais fait le travail parfaitement.</p>

            <h3>4. L'Otolift Modul-Air (Tournant)</h3>
            <p>Pour les escaliers courbes, c'est un champion de l'économie grâce à son monorail fin. Moins de matière = moins cher à produire, et donc un prix final plus doux pour vous.</p>

            <h3>5. Le Handicare 1100</h3>
            <p>Ce modèle droit se distingue par son rail ultra-fin et son absence de crémaillère (pas de graisse). Moins d'entretien signifie des économies sur le long terme.</p>

            <div class="my-8 text-center">
                <a href="/devis" class="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 transition-colors shadow-lg">
                    Comparer les devis gratuitement
                </a>
            </div>

            <h2>Comment réduire encore la facture ?</h2>
            <p>Le prix catalogue n'est jamais le prix final. En France, nous avons la chance d'avoir de nombreuses aides pour le maintien à domicile.</p>
            
            <h3>MaPrimeAdapt' : Le "Game Changer"</h3>
            <p>Depuis 2024, cette aide unique peut financer jusqu'à <strong>70% du montant</strong> de votre monte-escalier si vos revenus sont modestes. Pour un appareil à 8 000€, vous pourriez ne payer que 2 400€ de votre poche.</p>

            <h3>Le Crédit d'Impôt</h3>
            <p>Si vous n'êtes pas éligible à MaPrimeAdapt', le crédit d'impôt autonomie vous rembourse <strong>25%</strong> des dépenses. C'est automatique lors de votre déclaration de revenus.</p>

            <h2>Trouver un installateur près de chez vous</h2>
            <p>Le prix dépend aussi de la proximité du technicien. Un artisan local facturera moins de frais de déplacement et sera plus réactif pour le SAV.</p>
            <p>Que vous habitiez dans le <a href='/annuaire/nord-59' class='text-orange-600 hover:underline'>Nord (59)</a>, où les maisons à étages sont nombreuses, ou dans le <a href='/annuaire/rhone-69' class='text-orange-600 hover:underline'>Rhône (69)</a> avec ses immeubles anciens, il existe forcément un spécialiste certifié près de chez vous.</p>

            <p>N'attendez pas la chute pour vous équiper. Un monte-escalier économique est un investissement pour votre sécurité et votre tranquillité d'esprit.</p>
        `
    }
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
    return GUIDES.find(guide => guide.slug === slug);
}

export function getAllGuides(): GuideArticle[] {
    return GUIDES;
}
