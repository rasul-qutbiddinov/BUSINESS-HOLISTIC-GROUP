import React from "react";
import { Phone, Edit2 } from "lucide-react";
import Group from "../assets/Group.png";
import useParseHTML from "../components/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const AboutCard = () => {
  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams();

  const { error, data, isError, isSuccess } = useQuery({
    queryKey: ["about_us"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/about_us/records?expand=title,description"
      ).then((res) => res.json()),
  });

  console.log("About data", data);

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  if (!isSuccess) {
    return <p className="text-white text-center">Yuklanmoqda...</p>;
  }

  const record = data?.items?.[0];
  const collectionName = record?.collectionId || "about_us";
  const id = record?.id;
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
    <section className="px-4 md:px-8 py-12 bg-white flex flex-col items-center justify-center gap-10 relative max-w-[1920px] mx-auto">
      {/* Background Globe */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{
          backgroundImage: `url(${Group})`,
          zIndex: 0,
        }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 w-full max-w-6xl">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-4 max-w-lg w-full mx-auto text-center lg:text-left order-1 lg:order-2 relative">
          {/* Rotating Text */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 200 200" className="absolute top-0 left-0">
                <g className="animate-spin-slow">
                  {" "}
                  {/* ANIMATSIYA BU YERDA */}
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100,100 m -75,0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </defs>
                  <text fill="#0D3B66" fontSize="26" fontWeight="bold">
                    <textPath href="#circlePath">
                     TEAM FRIENDLY TEAM FRIENDLY TEAM FRIENDLY TEAM FRIENDLY
                    </textPath>
                  </text>
                </g>
              </svg>
            </div>
          </div>

          <div className="text-sm font-semibold text-teal-500 uppercase tracking-wide flex items-center justify-center lg:justify-start gap-2 mt-8">
            <span className="h-px w-8 bg-teal-500"></span> IN THE WORLD
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            dangerouslySetInnerHTML={{ __html: parseHTMLString(aboutTitle) }}
          ></h2>
          <p
            className="text-gray-600 text-sm md:text-base"
            dangerouslySetInnerHTML={{
              __html: parseHTMLString(aboutDescription),
            }}
          ></p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gray-200 active:bg-teal-500 text-teal-400 px-6 py-2 rounded-lg hover:bg-teal-400 hover:text-white flex items-center gap-2 transition w-full sm:w-auto">
              <Edit2 size={16} /> Fill in brief
            </button>
            <button className="bg-gray-200 active:bg-teal-500 px-6 py-2 rounded-xl text-teal-400 font-medium hover:bg-teal-400 hover:text-white flex items-center gap-2 transition w-full sm:w-auto">
              <Phone size={16} /> Call
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-col items-center gap-6 relative z-20 order-2 lg:order-1">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="absolute w-full h-full bg-transparent transition-all duration-300 ease-in-out  rounded-2xl group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <img
                  src={`https://back.holistic.saidoff.uz/api/files/${collectionName}/${id}/${image}`}
                  className="relative rounded-2xl object-cover shadow-lg w-full max-w-md h-auto border-[4px] border-transparent transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:translate-y-3"
                  alt={`About section image ${index + 1}`}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-600">Rasmlar mavjud emas</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
