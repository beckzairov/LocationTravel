"use client"; // Ensures this runs on the client side

import { useTranslation } from "react-i18next";
import PriceCard from "./PriceCard";

export default function Pricing() {
  const { t } = useTranslation();
  
  // Template for destinations (modify this later)
  const destinations = [
    {
      id: "destination1",
      title: t("pricing.destinations.destination1.title"),
      departure: t("pricing.destinations.destination1.departure_date"),
      duration: t("pricing.destinations.destination1.duration"),
      hotels: t("pricing.destinations.destination1.hotels", { returnObjects: true })
    },
    {
      id: "destination2",
      title: t("pricing.destinations.destination2.title"),
      departure: t("pricing.destinations.destination2.departure_date"),
      duration: t("pricing.destinations.destination2.duration"),
      hotels: t("pricing.destinations.destination2.hotels", { returnObjects: true })
    },
    {
      id: "destination3",
      title: t("pricing.destinations.destination3.title"),
      departure: t("pricing.destinations.destination3.departure_date"),
      duration: t("pricing.destinations.destination3.duration"),
      hotels: t("pricing.destinations.destination3.hotels", { returnObjects: true })
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6">{t("pricing.title")}</h2>

        {destinations.map((destination) => (
          <div key={destination.id} className="mb-16">
            {/* Destination Title and Info */}
            <h3 className="text-2xl font-semibold text-gray-900">{destination.title}</h3>
            <p className="text-lg text-gray-600 mb-6">
              {destination.departure} | {destination.duration}
            </p>

            {/* Hotel Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.hotels.map((hotel, index) => (
                <PriceCard
                  key={index}
                  title={hotel.title}
                  price={hotel.price}
                  image={hotel.image}
                  description={hotel.description}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Included Services - Now Separated Properly */}
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("pricing.included.title")}
          </h3>
          <ul className="text-lg text-gray-700 space-y-3">
            <li>🏨 {t("pricing.included.hotel")}</li>
            <li>✈️ {t("pricing.included.flight")}</li>
            <li>📝 {t("pricing.included.insurance")}</li>
            <li>🍽 {t("pricing.included.food")}</li>
            <li>🚐 {t("pricing.included.transfer")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
