"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/components/language-provider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    // GSAP animations will be added here
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.hero-title',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-700">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>
    </main>
  );
}