import React from "react";
import useParseHTML from "../components/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ServicesItemLoader from "../Loaders/ServicesSectionItemL"; // ✅ Loader import qildik

const ServicesItem = ({ id: propId }) => {
  const { parseHTMLString } = useParseHTML();
  const { id: paramId, lang } = useParams(); // Get `id` and `lang` from the URL

  const id = propId || paramId; // Use prop if provided, otherwise get from URL
  console.log("Services item ID:", id);

  // Fetch the service data
  const {
    data: cardData,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [`our_services-card-${id}`],
    queryFn: () =>
      fetch(
        `https://back.holistic.saidoff.uz/api/collections/services/records/${id}?expand=title,description`
      ).then((res) => res.json()),
    enabled: !!id, // Ensure the request only runs if `id` exists
  });

  console.log("Services item data:", cardData);

  // Handle errors
  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Handle loading state
  if (isLoading) {
    return <ServicesItemLoader />; // ✅ Loader komponenti yuklanish vaqtida ko‘rinadi
  }

  // Ensure record exists
  if (!cardData) {
    return <p className="text-white text-center">No service found.</p>;
  }

  // Construct full icon URL if needed
  const baseUrl = "https://back.holistic.saidoff.uz/api/files/";
  const iconUrl = cardData.icon
    ? `${baseUrl}${cardData.collectionId}/${cardData.id}/${cardData.icon}`
    : "";

  return (
    <div
      key={cardData.id}
      className="group p-6 rounded-xl bg-slate-800 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex gap-4 items-center">
        {cardData.icon && (
          <img
            src={iconUrl}
            alt="Service Icon"
            className="w-12 h-12"
            loading="lazy"
          />
        )}
        <h3 className="text-xl font-semibold text-white">
          {parseHTMLString(
            cardData.expand?.title?.[lang] ||
              cardData.expand?.title?.uz ||
              "No title available"
          )}
        </h3>
      </div>
      <p className="mt-2 text-gray-300 text-sm">
        {parseHTMLString(
          cardData.expand?.description?.[lang] ||
            cardData.expand?.description?.uz ||
            "No description available"
        )}
      </p>

      <span className="absolute bottom-0 left-0 h-3 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute bottom-0 right-0 w-3 h-0 bg-teal-400 transition-all duration-300 group-hover:h-full"></span>
    </div>
  );
};

export default ServicesItem;
