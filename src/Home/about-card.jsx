import React from "react";
import { Phone, Edit2 } from "lucide-react";
import Group from "../assets/Group.png";
import useParseHTML from "../components/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AboutCardLoader from "../Loaders/AboutSectionL"; // ✅ Loader import qildik
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AboutTranslations } from "../data/translations"; // ✅ Tarjimalarni import qilish

const AboutCard = () => {
  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams(); // 🔹 Hozirgi tilni olish

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["about_us"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/about_us/records?expand=title,description"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <AboutCardLoader />; // ✅ Loader komponenti yuklanish vaqtida ko‘rinadi
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  const record = data?.items?.[0] || {};
  const collectionName = record?.collectionId || "about_us";
  const id = record?.id || "";
  const images = record?.image || [];

  const aboutTitle =
    record?.expand?.title?.[lang] ||
    record?.expand?.title?.en ||
    "No title available";

  const aboutDescription =
    record?.expand?.description?.[lang] ||
    record?.expand?.description?.en ||
    "No description available";

  return (
    <div className="px-8 py-16 bg-white text-gray-800">
      <section className="px-4 md:px-8 py-12 bg-white flex flex-col items-center justify-center gap-10 relative max-w-[1920px] mx-auto">
        {/* Background Globe */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
          style={{
            backgroundImage: `url(${Group})`,
            zIndex: 0,
          }}
        ></div>

        <div className="grid grid-flow-col grid-rows-3 gap-6 relative z-10 w-full max-w-6xl">
          {/* Image 1 - bottom left */}
          {images[0] && (
            <div className="row-span-2 row-end-3 hidden sm:inline-block relative duration-500 ease-in-out hover:scale-105">
              <LazyLoadImage
                src={`https://back.holistic.saidoff.uz/api/files/${collectionName}/${id}/${images[0]}`}
                className="rounded-2xl shadow-lg object-cover w-full max-w-md h-100 border-4 border-transparent transition-all duration-300 ease-in-out hover:scale-105"
                alt="Team Image 1"
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "0.5s" },
                }}
              />
            </div>
          )}

          {/* Image 2 - top right */}
          {images[1] && (
            <div className="row-span-2 row-start-2 hidden sm:inline-block relative duration-500 ease-in-out hover:scale-105">
              <LazyLoadImage
                src={`https://back.holistic.saidoff.uz/api/files/${collectionName}/${id}/${images[1]}`}
                className="rounded-2xl shadow-lg object-cover w-full max-w-md h-100 border-4 border-transparent transition-all duration-300 ease-in-out hover:scale-105"
                alt="Team Image 2"
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "0.5s" },
                }}
              />
            </div>
          )}

          {/* Text Section - right side */}
          <div className="row-start-1 row-end-4 flex flex-col justify-center text-left">
            {/* Rotating Text */}
            <div className="relative flex justify-center lg:justify-start mb-6">
              <div className="w-32 h-32 relative">
                <svg viewBox="0 0 200 200" className="absolute top-0 left-0">
                  <g className="animate-spin-slow">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100,100 m -75,0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                      />
                    </defs>
                    <text
                      fill="#0D3B66"
                      fontWeight="bold"
                      style={{ letterSpacing: "15px", fontSize: "30px" }}
                    >
                      <textPath href="#circlePath">
                        {AboutTranslations.friendlyTeam[lang]}{" "}
                        {/* 🔥 Tarjima */}
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Title and Description */}
            <div className="text-sm font-semibold text-teal-500 uppercase tracking-wide flex items-center gap-2">
              <span className="h-px w-8 bg-teal-500"></span>
              {AboutTranslations.inTheWorld[lang]} {/* 🔥 Tarjima */}
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800"
              dangerouslySetInnerHTML={{ __html: parseHTMLString(aboutTitle) }}
            ></h2>
            <p
              className="text-gray-600 text-sm md:text-base mt-4"
              dangerouslySetInnerHTML={{
                __html: parseHTMLString(aboutDescription),
              }}
            ></p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 flex items-center gap-2 transition w-full sm:w-auto">
                <Edit2 size={16} /> {AboutTranslations.fillBrief[lang]}{" "}
                {/* 🔥 Tarjima */}
              </button>
              <button className="bg-gray-200 text-teal-600 px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white flex items-center gap-2 transition w-full sm:w-auto">
                <Phone size={16} /> {AboutTranslations.call[lang]}{" "}
                {/* 🔥 Tarjima */}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCard;
