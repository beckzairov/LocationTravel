"use client"; // Ensure this runs on the client side

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-gray-100 text-slate-800">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
        
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          {t("about.paragraph1")}
        </p>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          {t("about.paragraph2")}
        </p>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          {t("about.paragraph3")}
        </p>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          {t("about.paragraph4")}
        </p>
      </div>
    </section>
  );
}
