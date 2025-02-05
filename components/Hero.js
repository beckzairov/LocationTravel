"use client"; // Ensure it runs on the client side

import { useTranslation } from "react-i18next";
import { IMAGES } from "../constants/images";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${IMAGES.hero})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative z-10 text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-8">
          {t("hero.description")}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#pricing"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
          >
            {t("hero.view_packages")}
          </a>
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
          >
            {t("hero.contact_us")}
          </a>
        </div>
      </div>
    </div>
  );
}
