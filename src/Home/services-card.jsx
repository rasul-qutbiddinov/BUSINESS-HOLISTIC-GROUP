import React from "react";
import SevicesItem from "../components/services_item";
import useParseHTML from "../components/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ServicesCardLoader from "../Loaders/ServicesSectionL"; // ✅ Loader import qildik

const ServicesCard = () => {
  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams();

  // Fetch the service data
  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["our_services"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/our_services/records/0458uqy999j6fzg?expand=title,description"
      ).then((res) => res.json()),
  });

  // Handle errors
  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Handle loading state
  if (isLoading) {
    return <ServicesCardLoader />; // ✅ Loader komponenti yuklanish vaqtida ko‘rinadi
  }

  // Fix record access
  const record = data; // Directly use data instead of accessing `items[0]`

  // Safely extract translated content
  const title =
    record?.expand?.title?.[lang] ||
    record?.expand?.title?.uz ||
    "No title available";

  const description =
    record?.expand?.description?.[lang] ||
    record?.expand?.description?.uz ||
    "No description available";

  return (
    <section className="px-8 py-16 bg-gradient-to-b bg-[#012B3D] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#00578A"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute -top-40 -right-40 w-[438px] h-[429px] bg-[#00578A] opacity-40 rounded-full blur-[148px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[438px] h-[429px] bg-[#00578A] opacity-30 rounded-full blur-[148px]"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }}
        />

        <p
          className="text-gray-300 mb-12"
          dangerouslySetInnerHTML={{ __html: parseHTMLString(description) }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Services items */}
        {data &&
          data.service.map((service) => (
            <SevicesItem key={service} id={service} />
          ))}
      </div>
    </section>
  );
};

export default ServicesCard;
