import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReasonsItem from "../components/reasons_item"; // Import the card component
import useParseHTML from "../components/hooks";
import ReasonsLoader from "../Loaders/ReasonSectionL"; // ✅ Loader import qildik

const Reasons = () => {
  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams(); // ✅ Get language from URL

  // Fetch main title and `why_us` service IDs
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["why_us_titles"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/why_us_titles/records?expand=title,why_us"
      ).then((res) => res.json()),
  });

  console.log("why_us_data:", data);

  // Handle errors
  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Handle loading state
  if (isLoading) {
    return <ReasonsLoader />; // ✅ Loader komponenti yuklanish vaqtida ko‘rinadi
  }

  // Ensure we have data
  const record = data?.items?.[0]; // Get first item
  if (!record) {
    return <p className="text-white text-center">No data available</p>;
  }

  // Extract title
  const title =
    record?.expand?.title?.[lang] ||
    record?.expand?.title?.uz ||
    "No title available";

  // Extract `why_us` service IDs
  const serviceIds = record?.why_us || [];

  return (
    <section className="px-8 py-16 bg-white text-gray-800">
      <h2 className="text-5xl font-bold text-center mb-12">
        <span dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }} />
      </h2>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {serviceIds.length > 0 ? (
          serviceIds.map((serviceId, index) => (
            <div
              key={serviceId}
              className={`
                ${index === 0 || index === 1 ? "col-span-1" : ""} 
                ${index === 2 ? "md:col-span-2 row-start-2" : ""} 
                ${index === 3 ? "md:col-span-1 md:row-span-2" : ""}
              `}
            >
              <ReasonsItem id={serviceId} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No services available.</p>
        )}
      </div>
    </section>
  );
};

export default Reasons;
