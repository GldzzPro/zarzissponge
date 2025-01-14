"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export type Language = "en" | "fr";

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)[Language]) => string;
};

const translations = {
  en: {
    "hero.title": "Premium Mediterranean Sponges",
    "hero.subtitle": "From the pristine waters of Zarzis, Tunisia",
    "hero.cta": "Explore Our Products",
    "products.title": "Our Products",
    "about.title": "About Us",
    "services.title": "Our Services",
    "contact.title": "Contact Us",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
  },
  fr: {
    "hero.title": "Éponges Méditerranéennes Premium",
    "hero.subtitle": "Des eaux cristallines de Zarzis, Tunisie",
    "hero.cta": "Découvrir Nos Produits",
    "products.title": "Nos Produits",
    "about.title": "À Propos",
    "services.title": "Nos Services",
    "contact.title": "Contactez-Nous",
    "contact.success": "Message envoyé avec succès!",
    "contact.error": "Erreur lors de l'envoi du message. Veuillez réessayer.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Envoyer",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const { toast } = useToast();

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code?.toLowerCase();

        if (countryCode === "fr" || countryCode === "tn") {
          setLanguage("fr");
        }
      } catch (error) {
        console.error("Error detecting location:", error);
      }
    };

    detectLanguage();
  }, []);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
