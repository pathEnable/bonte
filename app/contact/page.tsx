import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
    title: "Contact & Réservation — Majestic Hotel Parakou",
    description: "Contactez le Majestic Hotel à Parakou pour vos réservations. Situé au quartier Arafat, nous sommes à votre disposition 24h/24.",
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen py-24 px-6">
            <Reveal>
                <div className="max-w-xl mx-auto">
                    <ContactForm />
                </div>
            </Reveal>
        </div>
    );
}
