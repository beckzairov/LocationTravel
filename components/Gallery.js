"use client"; // Ensures this runs on the client side

import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();
  const images = t("gallery.images", { returnObjects: true });

  // Define size variations (1x1, 1x2, 2x2)
  const sizeClasses = [
    "row-span-2 col-span-1", // 1x2 (Tall)
    "col-span-2 row-span-2", // 2x2 (Big Square)
    "col-span-1 row-span-1", // 1x1 (Regular)
    "col-span-1 row-span-2", // 1x2 (Tall)
    "col-span-2 row-span-1", // 2x1 (Wide)
    "col-span-1 row-span-1", // 1x1 (Regular)
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-black">{t("gallery.title")}</h2>

        {/* Pinterest Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105 ${sizeClasses[index % sizeClasses.length]}`}
            >
              {/* Image */}
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80"></div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
