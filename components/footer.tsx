"use client";

import {
  LanguageContextType,
  useLanguage,
} from "@/components/language-provider";
import { Waves } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage() as LanguageContextType;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">MedSponge</span>
            </div>
            <p className="text-gray-400">
              {"Premium Mediterranean sponges from the heart of Tunisia"}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{"Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {"Products"}
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {"About Us"}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {"Services"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{"Contact"}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Zarzis, Tunisia</li>
              <li>contact@medsponge.com</li>
              <li>+216 XX XXX XXX</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{"Follow Us"}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MedSponge.{" "}
            {"All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
