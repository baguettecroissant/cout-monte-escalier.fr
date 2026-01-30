import { City } from "@/types";

interface SchemaOrgProps {
    city: City;
}

export function SchemaOrg({ city }: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Installateur Monte-Escalier ${city.name}`,
        "image": "https://cout-monte-escalier.fr/images/monte-escalier-senior.jpg",
        "telephone": "0123456789",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "postalCode": city.zip,
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "url": `https://cout-monte-escalier.fr/prix-monte-escalier/${city.slug}-${city.zip}`,
        "priceRange": "€€€"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
