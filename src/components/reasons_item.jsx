import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useParseHTML from "../components/hooks";

const ReasonsItem = ({ id }) => {
  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams(); // Get language from URL

  console.log("ReasonsItem ID:", id);

  // Fetch individual reason card
  const {
    data: reasonData,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [`why_us-card-${id}`],
    queryFn: () =>
      fetch(
        `https://back.holistic.saidoff.uz/api/collections/why_us/records/${id}?expand=title,description`
      ).then((res) => res.json()),
    enabled: !!id, // Ensure request only runs if `id` exists
  });

  console.log("ReasonsItem Data:", reasonData);

  // Handle errors
  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Handle loading state
  if (isLoading) {
    return <p className="text-white text-center">Yuklanmoqda...</p>;
  }

  // Ensure record exists
  if (!reasonData) {
    return <p className="text-white text-center">No data found.</p>;
  }

  // Extract title & description
  const title =
    reasonData?.expand?.title?.[lang] ||
    reasonData?.expand?.title?.uz ||
    "No title available";

  const description =
    reasonData?.expand?.description?.[lang] ||
    reasonData?.expand?.description?.uz ||
    "No description available";

  // Construct icon URL
  const baseUrl = "https://back.holistic.saidoff.uz/api/files/";
  const iconUrl = reasonData?.icon
    ? `${baseUrl}${reasonData.collectionId}/${reasonData.id}/${reasonData.icon}`
    : "";

  return (
    <div className="group rounded-2xl p-8 shadow-md transition duration-300 flex flex-col justify-start bg-gray-100 relative overflow-hidden cursor-pointer hover:-translate-y-1">
      {iconUrl && (
        <img src={iconUrl} alt="Service Icon" className="w-12 h-12 mb-4" />
      )}
      <h3
        className="text-xl font-semibold mb-3 text-gray-800"
        dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }}
      />
      <p
        className="text-sm text-gray-600"
        dangerouslySetInnerHTML={{ __html: parseHTMLString(description) }}
      />
      <span className="absolute bottom-0 left-0 h-3 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute bottom-0 right-0 w-3 h-0 bg-teal-400 transition-all duration-300 group-hover:h-full"></span>
    </div>
  );
};

export default ReasonsItem;
