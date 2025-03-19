import React from "react";
import Logo from "../assets/LOGO.png";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AboutIntroLoader from "../Loaders/AboutIntroL";

const AboutHeader = () => {
  const { lang } = useParams();

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["about_bha"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/about_bha/records/fg5oy4p24j85109?expand=title,description"
      ).then((res) => res.json()),
  });

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Data validatsiyasi yaxshilandi va aniqlashtirildi
  const record = data || {};

  const title =
    record.expand?.title?.[lang] ||
    record.expand?.title?.uz ||
    "No title available";

  const description =
    record.expand?.description?.[lang] ||
    record.expand?.description?.uz ||
    "No description available";

  return (
    <>
      {isLoading ? (
        <AboutIntroLoader />
      ) : (
        <div>
          <div className="text-center mb-12">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-[120px] md:h-[150px] mx-auto mb-4"
              loading="lazy"
            />
          </div>
          <div className="max-w-[1200px] mx-auto text-left mb-20 px-4 ">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 md:mb-8"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>

            <p
              className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-3xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutHeader;
