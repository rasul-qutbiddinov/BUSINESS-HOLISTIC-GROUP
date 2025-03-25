import React from "react";
import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PartnerLoader from "../Loaders/AboutPartnersL"; // ✅ Loader import qildik
import { useParams } from "react-router-dom"; // 🌐 Tilni olish
import { PartnerTranslations } from "../data/translations"; // ✅ Tarjimalar

const Partner = () => {
  const { lang } = useParams(); // 🌐 URL'dan tilni olamiz

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/partners/records"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <PartnerLoader />;
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  const partners = Array.isArray(data?.items) ? data.items : [];

  const t = PartnerTranslations;

  return (
    <section className="max-w-[1200px] mx-auto text-center px-4 mb-10">
      <h3 className="text-sm text-teal-500 font-semibold mb-2 uppercase tracking-wide">
        {t.ourPartners[lang] || t.ourPartners.en}
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        {t.companiesThatBelieve[lang] || t.companiesThatBelieve.en}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {partners.length > 0 ? (
          partners.map((partner, index) => (
            <div
              key={partner.id || index}
              className="bg-[#012B3D] rounded-xl p-4 shadow-lg hover:scale-105 transition-transform"
            >
              <LazyLoadImage
                src={`https://back.holistic.saidoff.uz/api/files/partners/${partner.id}/${partner.image}`}
                alt={partner.name || `Partner ${index + 1}`}
                className="mx-auto h-12 md:h-20"
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "0.5s" },
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-white text-center">
            {t.noPartners[lang] || t.noPartners.en}
          </p>
        )}
      </div>
    </section>
  );
};

export default Partner;
