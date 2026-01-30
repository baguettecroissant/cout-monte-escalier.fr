import { City } from "@/types";
// We need to import the JSON. Typed imports for JSON require config usually, or just use require/import.
import citiesData from "@/lib/db/cities.json";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    return cities.find(c => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
}

export function generateCityMetadata(city: City) {
    return {
        title: `Prix Monte-Escalier ${city.name} (${city.zip}) - Devis & Installation`,
        description: `Quel est le prix d'un monte-escalier à ${city.name} ? Comparez les tarifs des installateurs du département ${city.department_name} et obtenez votre devis gratuit.`,
    };
}
