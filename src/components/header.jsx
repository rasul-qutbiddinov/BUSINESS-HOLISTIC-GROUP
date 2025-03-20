/* eslint-disable no-unused-vars */
import { useLanguage } from "../hooks/useLanguage";
import useParseHTML from "./hooks";
import Navbar from "../components/navbar";
import SocialMediaScroll from "../components/socialmedia";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import headerback from "../assets/header_back.png";
import PlayButton from "../components/playbtn";
import MobilePlayButton from "../components/playbtnmobile"; // ✅ Mobil versiya uchun PlayButton
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeaderLoader from "../Loaders/HeaderL";

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
    return <HeaderLoader />;
  }

  const record = data?.items?.[0] || {};
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
      className="relative bg-gradient-to-b mt-10 from-[#012B3D] to-[#012B3D] text-white px-4 md:px-16 py-10 md:py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${headerback})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* ✅ `container` qo‘shildi */}
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <section
          className="relative flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between 
          mt-12 md:mt-10 gap-6 md:gap-10 z-10"
        >
          {/* ✅ Matn qismi */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1
              className="text-3xl md:text-6xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }}
            ></h1>

            <p
              className="text-gray-200 text-sm md:text-lg"
              dangerouslySetInnerHTML={{ __html: parseHTMLString(description) }}
            ></p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
              <button className="bg-gray-700 px-4 md:px-6 py-2 rounded-xl hover:bg-teal-400 transition">
                Get Started
              </button>
              <button className="bg-gray-700 px-4 md:px-6 py-2 rounded-xl font-medium hover:bg-teal-400 transition">
                See Our Work
              </button>
            </div>
          </div>

          {/* ✅ Rasm (faqat 400px dan kattaroq ekranlar uchun) */}
          <div
            className="flex-1 relative w-full max-w-md md:max-w-lg lg:max-w-xl items-center justify-center hidden sm:block"
          >
            {image ? (
              <div className="relative rounded-3xl shadow-lg overflow-hidden max-h-[300px] md:max-h-[500px]">
                <LazyLoadImage
                  src={`https://back.holistic.saidoff.uz/api/files/${collectionName}/${id}/${image}`}
                  className="object-cover w-full h-full"
                  alt="Team Working"
                  effect="blur"
                />

                {/* ✅ PlayButton - har doim rasmning chap pastki burchagida turadi */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <PlayButton />
                </div>
              </div>
            ) : (
              <div className="w-full max-h-[300px] md:max-h-[500px] bg-gray-500 animate-pulse rounded-3xl"></div>
            )}
          </div>
        </section>
      </div>

      {/* ✅ Mobil PlayButton - faqat mobil (`sm`) ekranlar uchun, textdan pastda va scroll mediadan tepada */}
      <div className="mt-6 flex justify-center sm:flex md:hidden">
        <MobilePlayButton />
      </div>

      {/* 🆕 Social media scroll - har doim mavjud */}
      <SocialMediaScroll />
    </header>
  );
}
