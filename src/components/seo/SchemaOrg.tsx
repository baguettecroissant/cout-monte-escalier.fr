import { City } from "@/types";

interface SchemaOrgProps {
    city: City;
}

export function SchemaOrg({ city }: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Installation Monte-Escalier à ${city.name}`,
        "description": `Service d'installation et de maintenance de monte-escalier à ${city.name} (${city.zip}). Devis gratuits d'artisans certifiés RGE.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "address": {
                "@type": "PostalAddress",
                "postalCode": city.zip,
                "addressCountry": "FR"
            }
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "url": `https://www.cout-monte-escalier.fr/prix-monte-escalier/${city.slug}-${city.zip}`,
        "provider": {
            "@type": "Organization",
            "name": "Cout-Monte-Escalier.fr",
            "url": "https://www.cout-monte-escalier.fr"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
