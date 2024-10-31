"use client";

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const products = [
  {
    id: 1,
    name: 'Natural Bath Sponge',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    price: '€24.99',
  },
  {
    id: 2,
    name: 'Premium Face Sponge',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    price: '€19.99',
  },
  {
    id: 3,
    name: 'Luxury Body Sponge',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    price: '€29.99',
  },
];

export default function Products() {
  const { translations } = useLanguage();
  const productsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: productsRef.current,
          start: 'top 80%',
        },
      });
    }, productsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={productsRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {translations.products}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="product-card overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {product.price}
                </p>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}