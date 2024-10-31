"use client";

import { useEffect } from "react";
import {
  LanguageContextType,
  useLanguage,
} from "@/components/language-provider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { t } = useLanguage() as LanguageContextType;

  useEffect(() => {
    // GSAP animations will be added here
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-title",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
    </main>
  );
}
