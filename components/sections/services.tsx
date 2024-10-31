"use client";

import { useRef, useEffect } from 'react';
import { LanguageContextType, useLanguage } from '@/components/language-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Package, RefreshCw, Ship } from 'lucide-react';
import gsap from 'gsap';

const services = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Rigorous testing and certification for every sponge',
  },
  {
    icon: Package,
    title: 'Wholesale Supply',
    description: 'Bulk orders for businesses with competitive pricing',
  },
  {
    icon: RefreshCw,
    title: 'Sponge Repair',
    description: 'Professional restoration and maintenance services',
  },
  {
    icon: Ship,
    title: 'Global Shipping',
    description: 'Worldwide delivery with careful packaging',
  },
];

export default function Services() {
  const { t } = useLanguage() as LanguageContextType;
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 mb-4 text-blue-600">
                  {<service.icon size={48} />}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}