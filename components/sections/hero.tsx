"use client";

import { useEffect, useRef } from "react";
import {
  LanguageContextType,
  useLanguage,
} from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export default function Hero() {
  const { t } = useLanguage() as LanguageContextType;
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1682686580391-615b1e32be1f?q=80&w=2940)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="hero-content max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            {t("hero.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
