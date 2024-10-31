"use client";

import { useRef, useEffect } from "react";
import {
  LanguageContextType,
  useLanguage,
} from "@/components/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Natural Bath Sponge",
    image: "epongetun.webp",
    price: "€24.99",
  },
  {
    id: 2,
    name: "Premium Face Sponge",
    image: "epongetun.webp",
    price: "€19.99",
  },
  {
    id: 3,
    name: "Luxury Body Sponge",
    image: "epongetun.webp",
    price: "€29.99",
  },
];

export default function Products() {
  const { t } = useLanguage() as LanguageContextType;
  const productsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%",
        },
      });
    }, productsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={productsRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("products.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="product-card overflow-hidden">
              <div className="aspect-square relative">
                <Image
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
