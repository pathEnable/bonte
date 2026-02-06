import { hotelDetails } from "@/lib/data";

export default function Schema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": hotelDetails.name,
        "description": hotelDetails.description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Parakou",
            "addressRegion": "Borgou",
            "streetAddress": hotelDetails.address,
            "addressCountry": "BJ"
        },
        "telephone": hotelDetails.phone,
        "email": hotelDetails.email,
        "url": "https://le-majestic-hotel.com",
        "image": "https://le-majestic-hotel.com/magestic1.png",
        "priceRange": "15000CFA - 35000CFA",
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuit", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Climatisation", "value": true }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
