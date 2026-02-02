
export interface GuideArticle {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string; // HTML content
    image?: string;
    imagePrompt?: string;
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
    },
    {
        slug: "cout-monte-escalier-tournant",
        title: "Prix d'un Monte-Escalier Tournant : Le Guide Expert (Tarifs 2026)",
        excerpt: "Ne payez pas trop cher votre installation. Analyse détaillée des prix 2026 pour monte-escaliers courbes : devis, normes techniques, et calcul des aides (MaPrimeAdapt').",
        date: "2026-02-02",
        author: "Jean-Marc Delornay, Expert Accessibilité",
        image: "/images/blog/cout-monte-escalier-tournant.jpg",
        metaTitle: "Prix Monte-Escalier Tournant 2026 : Le Vrai Coût (Guide Expert)",
        metaDescription: "Combien coûte vraiment un monte-escalier tournant ? Détail des prix matériel + pose, impact de la courbe, et dossier MaPrimeAdapt'. Lisez notre étude.",
        imagePrompt: "Architectural shot of a high-end curved stairlift in a french bourgeois house. The rail follows a complex curve. Warm lighting, focus on the engineering quality and comfort of the seat. 8k resolution, photorealistic.",
        content: `
            <h2>Pourquoi le monte-escalier tournant est-il un produit "Haute Couture" ?</h2>
            <p>Contrairement au monte-escalier droit qui est un produit "prêt-à-poser", le <strong>monte-escalier tournant</strong> est une prouesse d'ingénierie sur-mesure. En 2026, il représente près de 65% des installations en France due à l'architecture complexe de nos maisons individuelles.</p>
            <p>Son prix plus élevé s'explique par sa fabrication : le rail n'est pas simplement courbé, il est usiné au millimètre près (souvent grâce à la photogrammétrie) pour épouser les virages, les paliers intermédiaires et les changements de pente de votre escalier. C'est l'assurance d'une fluidité parfaite et d'une sécurité absolue.</p>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
                <h4 class="text-blue-900 font-bold text-lg mb-2">💡 L'Analyse de l'Expert</h4>
                <p class="text-blue-800">
                    Ne comparez jamais le devis d'un monte-escalier droit avec celui d'un tournant. La technologie n'est pas la même. Un rail tournant demande souvent 4 à 6 semaines de fabrication en usine, contre quelques jours pour un rail droit.
                </p>
            </div>

            <h2>Le Prix Réel en 2026 : Analyse Détaillée</h2>
            <p>Après avoir analysé des centaines de devis validés cette année, voici les fourchettes de prix réalistes pour une installation complète (Matériel + Pose + Garantie 2 ans) :</p>

            <h3>1. Configuration Standard (7 000 € - 9 000 €)</h3>
            <p>Ce tarif correspond à un escalier avec <strong>un seul virage</strong> (quart tournant bas ou haut) et une longueur de rail standard (environ 5-6 mètres). C'est le cas le plus fréquent dans les pavillons des années 80-90, comme on en voit beaucoup dans le <a href='/annuaire/nord-59' class='text-orange-600 hover:underline'>Nord (59)</a>.</p>

            <h3>2. Configuration Complexe (9 000 € - 12 000 €+)</h3>
            <p>Le prix grimpe si votre escalier présente :</p>
            <ul>
                <li>Plusieurs virages (demi-tournant, trémie en U).</li>
                <li>Des changements de pente.</li>
                <li>Une longueur importante (accès au 2ème étage).</li>
                <li>Un besoin de "parking" (le siège va se garer dans le couloir pour dégager l'escalier).</li>
            </ul>

            <h3>3. Le Monte-Escalier Extérieur Tournant (8 000 € - 11 000 €)</h3>
            <p>Plus rare, il nécessite un traitement spécifique anti-UV, une électronique étanche (IP65) et une housse de protection. Idéal pour les maisons surélevées.</p>

            <h2>Les 4 Facteurs Techniques qui Gonflent la Facture</h2>
            <p>Comprendre le devis, c'est comprendre ce que vous achetez. Voici ce qui fait varier le montant final :</p>
            
            <ol class="list-decimal pl-6 space-y-4 mb-6">
                <li>
                    <strong>Le type de Rail (Monorail vs Double Rail) :</strong>
                    <ul class="list-disc pl-4 mt-2">
                        <li>Le <strong>Monorail</strong> (plus esthétique, moins intrusif) est souvent légèrement plus cher car il demande un acier plus dense pour supporter le poids.</li>
                        <li>Le <strong>Double Rail</strong> offre une stabilité maximale mais peut sembler plus "massif".</li>
                    </ul>
                </li>
                <li>
                    <strong>Le Départ et l'Arrivée :</strong>
                    Un "départ 180°" (qui s'enroule autour de la rampe) ou une arrivée "Nez de marche" coûte moins cher qu'une arrivée prolongée sur le palier.
                </li>
                <li>
                    <strong>Le Pivotement Automatique :</strong>
                    Option quasi-indispensable pour les personnes à mobilité réduite : le siège tourne tout seul à l'arrivée pour vous permettre de vous lever face au palier, sans risque de chute. Comptez environ +400€ à +800€.
                </li>
                <li>
                    <strong>L'Option Rail Relevable :</strong>
                    Si le bas de l'escalier donne directement sur une porte ou un couloir étroit, le bas du rail doit pouvoir se relever (charnière motorisée) pour libérer le passage. C'est une option complexe facturée entre 800€ et 1 500€.
                </li>
            </ol>

            <div class="my-10 text-center">
                <a href="#top" class="inline-block bg-orange-600 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-700 hover:scale-105 transition-all shadow-xl text-lg">
                    Obtenir 3 devis comparatifs gratuits
                </a>
                <p class="text-sm text-gray-500 mt-2">Sans engagement • Réponse sous 48h</p>
            </div>

            <h2>Comment financer son installation (Les "Vraies" Aides)</h2>
            <p>La France dispose d'un des systèmes les plus généreux pour l'adaptation du logement. En cumulant les dispositifs, le reste à charge peut être minime.</p>

            <h3>MaPrimeAdapt' : La Révolution 2024-2026</h3>
            <p>Cette aide unique remplace les anciens crédits d'impôts pour les revenus modestes. Elle finance <strong>50% ou 70%</strong> de votre monte-escalier HT.</p>
            <p><em>Exemple concret :</em> Monsieur Martin, retraité aux revenus modestes habitant dans le <a href='/annuaire/pas-de-calais-62' class='text-orange-600 hover:underline'>Pas-de-Calais</a>, installe un tournant à 9 000€. Avec une prise en charge de 70%, il ne paie que 2 700€.</p>

            <h3>Le Crédit d'Impôt Autonomie (25%)</h3>
            <p>Accessible à tous (sans condition de ressources) si vous êtes éligible (GIR 1-4 ou handicap >50% ou +60 ans avec perte d'autonomie). Vous récupérez 25% de la facture TTC (plafond de dépenses : 5 000€ personne seule, 10 000€ couple).</p>

            <h3>La TVA Réduite (5,5%)</h3>
            <p>Appliquée d'office si vous passez par un professionnel pour la fourniture ET la pose. Si vous achetiez le matériel seul, vous paieriez 20% de TVA. C'est pourquoi l'auto-installation est une fausse économie.</p>

            <h2>Les Pièges à Éviter lors du Devis</h2>
            <p>En tant qu'experts, nous voyons trop souvent des seniors se faire piéger :</p>
            <ul>
                <li><strong>Le "Prix Salon" :</strong> Le vendeur vous met la pression pour signer tout de suite contre une remise "exceptionnelle". Refusez systématiquement. La loi vous protège (délai de rétractation), mais ne signez rien sous la pression.</li>
                <li><strong>L'Occasion Reconditionnée mal adaptée :</strong> Un rail tournant est sur-mesure. Il est quasiment impossible de réinstaller le rail d'un voisin chez vous. Seul le siège (moteur) peut être réutilisé, mais le rail doit être neuf.</li>
                <li><strong>L'absence de SAV local :</strong> Un monte-escalier en panne, c'est un étage inaccessible. Assurez-vous que l'installateur a une équipe technique à moins de 2h de chez vous, que vous soyez en <a href='/annuaire/gironde-33' class='text-orange-600 hover:underline'>Gironde</a> ou en Bretagne.</li>
            </ul>

            <h2>Conclusion : Quel budget prévoir ?</h2>
            <p>Pour un monte-escalier tournant de qualité, durable et sécurisé, tablez sur un budget de <strong>8 500 €</strong> avant déduction des aides. C'est un investissement important, mais qui reste bien inférieur au coût d'une maison de retraite (2 500€ / mois en moyenne).</p>
        `
    },
    {
        slug: "aides-monte-escalier-2026",
        title: "Aides Monte-Escalier 2026 : Le Guide Ultime (MaPrimeAdapt' & Co)",
        excerpt: "Ne perdez pas des milliers d'euros ! Dossier complet sur MaPrimeAdapt', le Crédit d'Impôt et les subventions locales. Simulations chiffrées et démarches pas à pas.",
        date: "2026-02-02",
        author: "Sophie Duranton, Juriste Spécialisée Silver Éco",
        image: "/images/blog/aides-monte-escalier-2026.jpg",
        metaTitle: "Aides Financières Monte-Escalier 2026 : Le Dossier Expert",
        metaDescription: "Comment financer votre monte-escalier en 2026 ? MaPrimeAdapt', Crédit d'Impôt, MDPH... Découvrez le montant exact de vos droits avec nos simulations.",
        imagePrompt: "Close up of an elderly woman looking relieved and happy holding a paper document with 'Accordé' stamped on it, sitting on a modern stairlift. Warm, reassuring atmosphere, golden hour lighting, high definition.",
        content: `
            <h2>Introduction : Le Paysage des Aides a Changé</h2>
            <p>2026 marque un tournant pour l'accessibilité en France. Avec le vieillissement démographique, l'État a massivement simplifié et renforcé les aides. Fini le labyrinthe administratif de l'Anah : place à <strong>MaPrimeAdapt'</strong>.</p>
            <p>Cependant, simplifier ne veut pas dire "automatique". De nombreux foyers passent encore à côté de milliers d'euros car ils ignorent les règles de cumul ou l'ordre exact des démarches.</p>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
                <h4 class="text-blue-900 font-bold text-lg mb-2">⚠️ L'Erreur Fatale</h4>
                <p class="text-blue-800">
                    <strong>Ne signez aucun devis avant d'avoir votre accusé de réception de demande d'aide.</strong> Si vous versez un acompte avant, votre dossier MaPrimeAdapt' sera automatiquement rejeté. C'est la règle d'or.
                </p>
            </div>

            <h2>1. MaPrimeAdapt' : La "Super-Aide" Décortiquée</h2>
            <p>C'est le pilier du financement. Elle remplace « Habiter Facile » de l'Anah, le crédit d'impôt pour les revenus modestes, et certaines aides de la CNAV.</p>

            <h3>Qui est éligible ?</h3>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>Âge :</strong> 70 ans et plus (sans condition de perte d'autonomie) OU 60-69 ans (avec GIR 1 à 6).</li>
                <li><strong>Statut :</strong> Propriétaire occupant ou locataire du parc privé (avec accord du bailleur).</li>
                <li><strong>Revenus :</strong> Vous devez appartenir aux catégories "Modestes" (Jaune) ou "Très Modestes" (Bleu) selon le barème de l'Anah.</li>
            </ul>

            <h3>Combien touche-t-on vraiment ?</h3>
            <p>Le calcul est simple, basé sur le montant Hors Taxe (HT) du devis :</p>
            <ul>
                <li><strong>Ménages Très Modestes :</strong> 70% du montant HT (Plafond de travaux : 22 000€).</li>
                <li><strong>Ménages Modestes :</strong> 50% du montant HT.</li>
            </ul>

            <h3 class="text-xl font-semibold mt-6 mb-3">La Procédure Pas à Pas :</h3>
            <ol class="list-decimal pl-6 space-y-2 mb-6">
                <li>Créez votre compte sur <strong>monprojet.anah.gouv.fr</strong>.</li>
                <li>Un <strong>AMO (Assistant à Maîtrise d'Ouvrage)</strong> vous est désigné gratuitement. Il vient chez vous faire un diagnostic.</li>
                <li>L'AMO valide votre projet de monte-escalier.</li>
                <li>Vous déposez les devis des artisans.</li>
                <li>Vous recevez la notification d'accord. <strong>VOUS POUVEZ SIGNER LE DEVIS !</strong></li>
            </ol>

            <h2>2. Le Crédit d'Impôt "Autonomie" (Pour les revenus intermédiaires)</h2>
            <p>Vous gagnez trop pour MaPrimeAdapt' ? L'État ne vous oublie pas.</p>
            <p>Le crédit d'impôt pour "dépenses d'équipement en faveur de l'aide aux personnes" reste en vigueur pour les ménages aux revenus intermédiaires et supérieurs.</p>
            
            <ul>
                <li><strong>Taux :</strong> 25% des dépenses TTC (pose incluse).</li>
                <li><strong>Plafond :</strong> 5 000€ pour une personne seule (soit 1 250€ de crédit d'impôt max), 10 000€ pour un couple.</li>
                <li><strong>Condition :</strong> Avoir un membre du foyer âgé ou handicapé / en perte d'autonomie.</li>
            </ul>

            <h2>3. Simulation Concrète : Combien ça coûte à la fin ?</h2>
            <p>Prenons l'exemple d'un monte-escalier tournant haut de gamme à <strong>10 000 € TTC</strong> (TVA 5,5% incluse, soit env. 9 480€ HT).</p>

            <div class="overflow-x-auto my-8">
                <table class="w-full border-collapse border border-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border p-3 text-left">Profil</th>
                            <th class="border p-3 text-left">Aide Principale</th>
                            <th class="border p-3 text-left">Montant Aide</th>
                            <th class="border p-3 text-left">Reste à Charge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-3">Ménage "Très Modeste" (Nord)</td>
                            <td class="border p-3">MaPrimeAdapt' (70%)</td>
                            <td class="border p-3">6 636 €</td>
                            <td class="border p-3 font-bold text-green-600">3 364 €</td>
                        </tr>
                        <tr>
                            <td class="border p-3">Ménage "Modeste" (Lyon)</td>
                            <td class="border p-3">MaPrimeAdapt' (50%)</td>
                            <td class="border p-3">4 740 €</td>
                            <td class="border p-3 font-bold text-green-600">5 260 €</td>
                        </tr>
                        <tr>
                            <td class="border p-3">Ménage Aisé (Paris)</td>
                            <td class="border p-3">Crédit Impôt (25%)</td>
                            <td class="border p-3">2 500 € (Plafond)</td>
                            <td class="border p-3 font-bold text-orange-600">7 500 €</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>4. Les Aides Complémentaires (Celles qu'on oublie)</h2>
            <p>Il est parfois possible de "gratter" encore un peu de financement auprès d'acteurs locaux :</p>
            
            <h3>La PCH (Prestation de Compensation du Handicap)</h3>
            <p>Gérée par la MDPH. Si vous avez moins de 60 ans, elle est très avantageuse car elle finance souvent <strong>100%</strong> de l'aménagement (dans la limite de 1 500€ si montant < 1500€, ou plus sur devis). <br>Pour en savoir plus, contactez la MDPH de votre département, que ce soit en <a href='/annuaire/loire-atlantique-44' class='text-orange-600 hover:underline'>Loire-Atlantique</a> ou ailleurs.</p>

            <h3>Les Caisses de Retraite</h3>
            <p>L'Agirc-Arrco, la CNRACL ou l'Ircantec disposent de fonds sociaux pour l'aide "Bien chez soi". Elles peuvent financer jusqu'à 2 000 € ou 3 000 € selon votre carrière.</p>

            <div class="my-8 text-center">
                <a href="#top" class="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 transition-colors shadow-lg">
                    Vérifier mon éligibilité en 1 minute
                </a>
            </div>

            <h2>FAQ : Vos questions fréquentes</h2>
            
            <h3 class="text-lg font-bold">Peut-on cumuler MaPrimeAdapt' et le Crédit d'Impôt ?</h3>
            <p>Non. C'est l'un ou l'autre. MaPrimeAdapt' est réservée aux revenus modestes, le Crédit d'Impôt prend le relais pour les autres.</p>

            <h3 class="text-lg font-bold">L'installateur s'occupe-t-il du dossier ?</h3>
            <p>Les bons installateurs (comme ceux de notre réseau en <a href='/annuaire/seine-et-marne-77' class='text-orange-600 hover:underline'>Seine-et-Marne</a>) ont l'habitude. Ils préparent les pièces techniques. Mais c'est souvent à VOUS ou à l'AMO de valider le dossier en ligne.</p>

            <h2>Conclusion</h2>
            <p>Un monte-escalier ne coûte jamais son prix facial. Avec le bon montage financier, il devient un équipement abordable.</p>
        `
    }
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
    return GUIDES.find(guide => guide.slug === slug);
}

export function getAllGuides(): GuideArticle[] {
    return GUIDES;
}
