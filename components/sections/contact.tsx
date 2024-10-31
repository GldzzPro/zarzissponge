"use client";

import { useRef, useEffect } from "react";
import {
  LanguageContextType,
  useLanguage,
} from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import gsap from "gsap";

export default function Contact() {
  const { t } = useLanguage() as LanguageContextType;
  const { toast } = useToast();
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.success"),
      duration: 3000,
    });
  };

  return (
    <section id="contact" ref={contactRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="contact-content space-y-8">
            <h2 className="text-4xl font-bold text-center">
              {t("contact.title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input placeholder={t("contact.name")} required />
              </div>
              <div>
                <Input type="email" placeholder={t("contact.email")} required />
              </div>
              <div>
                <Textarea
                  placeholder={t("contact.message")}
                  required
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full">
                {t("contact.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
