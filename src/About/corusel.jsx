import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CoruselLoader from "../Loaders/AboutCaruselL"; // ✅ Loader import qildik
import { LazyLoadImage } from "react-lazy-load-image-component";

const Corusel = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const swiperContainer = document.querySelector(".custom-swiper");
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.on("slideChange", () => {
        const { activeIndex, slides } = swiperContainer.swiper;
        const progress = ((activeIndex + 1) / slides.length) * 100;
        if (progressRef.current) {
          progressRef.current.style.width = `${progress}%`;
        }
      });
    }
  }, []);

  const { lang } = useParams();

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["about_bha_sliders"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/about_bha_sliders/records/97u6a0cbq63x8kg?expand=title,description"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <CoruselLoader />; // ✅ Loader komponenti yuklanish vaqtida ko‘rinadi
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Ensure data is correctly structured
  const record = data || {};
  const collectionName = record?.collectionId || "about_bha_sliders";
  const id = record?.id;
  const images = Array.isArray(record?.image) ? record.image : [];

  const title =
    record.expand?.title?.[lang] ||
    record.expand?.title?.uz ||
    "No title available";

  const description =
    record.expand?.description?.[lang] ||
    record.expand?.description?.uz ||
    "No description available";

  return (
    <div className="bg-[#012B3D] rounded-xl p-6 md:p-12 max-w-[1200px] mx-auto mb-32 shadow-lg relative">
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p
        className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-3xl text-center md:text-left"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mb-4 custom-swiper"
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <LazyLoadImage
                src={`https://back.holistic.saidoff.uz/api/files/${collectionName}/${id}/${image}`}
                alt={`Slide ${index + 1}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "0.5s" },
                }}
                className="rounded-xl shadow-lg object-cover h-[300px] md:h-[400px] w-full transition-transform duration-300 hover:scale-105"
              />
            
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-white">No images available</p>
        )}
      </Swiper>

      <div className="w-full flex justify-center mt-10">
        <div className="w-2/3 md:w-1/2 h-2 bg-white/30 rounded-full relative">
          <div
            ref={progressRef}
            className="h-2 bg-teal-400 rounded-full transition-all duration-300"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Corusel;
