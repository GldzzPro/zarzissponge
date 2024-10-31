"use client";

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Anchor } from 'lucide-react';
import gsap from 'gsap';

export default function About() {
  const { translations } = useLanguage();
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="about-content space-y-8 text-center">
            <div className="flex justify-center">
              <Anchor className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold">
              Mediterranean Excellence Since 1970
            </h2>
            <p className="text-xl text-gray-600">
              Based in Zarzis, Tunisia, we specialize in harvesting and processing
              the finest Mediterranean sponges. Our commitment to quality and
              sustainable practices has made us a trusted name in the industry
              for over five decades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Sustainable</h3>
                <p className="text-gray-600">
                  Environmentally conscious harvesting practices
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Hand-selected for superior texture and durability
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Expert Care</h3>
                <p className="text-gray-600">
                  Professional processing and quality control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}