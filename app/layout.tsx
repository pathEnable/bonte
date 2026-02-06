import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Schema from "@/components/Schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Majestic Hotel Parakou — L'excellence au Nord du Bénin",
  description: "Découvrez le Majestic Hotel à Parakou : confort moderne, accueil chaleureux et authenticité. Réservez votre chambre climatisée dès maintenant au cœur de la cité des Koburu.",
  keywords: ["hôtel Parakou", "hébergement Bénin", "Majestic Hotel", "voyage Parakou", "chambre d'hôte Bénin"],
  authors: [{ name: "Majestic Hotel" }],
  openGraph: {
    title: "Majestic Hotel Parakou — Votre escale de prestige",
    description: "Le confort et l'élégance à Parakou. Réservez votre séjour dans notre établissement de référence.",
    url: "https://le-majestic-hotel.com",
    siteName: "Majestic Hotel",
    images: [
      {
        url: "/magestic1.png",
        width: 1200,
        height: 630,
        alt: "Majestic Hotel Parakou",
      },
    ],
    locale: "fr_BJ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Majestic Hotel Parakou",
    description: "L'élégance au cœur du septentrion béninois.",
    images: ["/magestic1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Schema />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = stored || (prefersLight ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
  } catch (e) {}
})();`,
          }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
