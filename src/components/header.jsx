/* eslint-disable no-unused-vars */
import { useLanguage } from "../hooks/useLanguage";
import useParseHTML from "./hooks"; // ✅ To‘g‘ri import
import Navbar from "../components/navbar";
import SocialMediaScroll from "../components/socialmedia";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import headerback from "../assets/header_back.png";
import PlayButton from "../components/playbtn"; // ✅ PlayButton to‘g‘ri import qilindi

export default function Header() {
  const { parseHTMLString } = useParseHTML();
  const { i18n } = useTranslation();
  const { lang } = useLanguage();

  const { error, data, isError, isSuccess } = useQuery({
    queryKey: ["hero"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/home_page/records?expand=title,description"
      ).then((res) => res.json()),
  });

  if (!isSuccess) {
    return <p className="text-white text-center">Yuklanmoqda...</p>;
  }

  const record = data?.items?.[0] || {}; // ✅ Xato oldini olish uchun
  const collectionName = record?.collectionId || "home_page";
  const id = record?.id || "";
  const image = record?.image || "";

  const languageMap = {
    uz: "uz",
    en: "en",
    ru: "ru",
  };

  const currentLanguage = languageMap[i18n.language] || "uz";

  const title =
    record?.expand?.title?.[lang] ||
    record?.expand?.title?.uz ||
    "No title available";
  const description =
    record?.expand?.description?.[lang] ||
    record?.expand?.description?.uz ||
    "No description available";

  return (
    <header
      className="relative bg-gradient-to-b from-[#012B3D] to-[#012B3D] text-white px-4 md:px-16 py-10 md:py-30 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${headerback})` }} // ✅ To‘g‘ri format
    >
      {/* Navbar */}
      <Navbar />

      <section className="relative flex flex-col md:flex-row items-center justify-between mt-12 md:mt-10 gap-6 md:gap-10 z-10">
        <div className="flex-1 space-y-4 md:space-y-6">
          <h1
            className="text-3xl md:text-6xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }}
          ></h1>

          <p
            className="text-gray-200 text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: parseHTMLString(description) }}
          ></p>

          <div className="flex gap-2 md:gap-4">
            <button className="bg-gray-700 px-4 md:px-6 py-2 rounded-xl hover:bg-teal-400">
              Get Started
            </button>
            <button className="bg-gray-700 px-4 md:px-6 py-2 rounded-xl font-medium hover:bg-teal-400">
              See Our Work
            </button>
          </div>
        </div>

        {/* Rasm va "Play" tugmasi */}
        <div className="flex-2 relative w-full md:w-auto group">
          {image ? (
            <div className="relative rounded-3xl shadow-lg overflow-hidden bg-[#4CCED0]">
              {/* ✅ Rasm */}
              <img
                src={`https://back.holistic.saidoff.uz/api/files/${collectionName}/${id}/${image}`} // ✅ To‘g‘ri format
                className="object-cover w-full h-full"
                alt="Team Working"
              />

              {/* ✅ PlayButton komponenti */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
            </div>
          ) : (
            <p className="text-gray-300">Loading image...</p>
          )}
        </div>
      </section>

      {/* 🆕 Social media scroll section qo‘shildi */}
      <SocialMediaScroll />
    </header>
  );
}
