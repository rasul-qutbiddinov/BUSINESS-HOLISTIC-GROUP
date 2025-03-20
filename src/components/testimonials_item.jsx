import React from "react";
import { SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useParseHTML from "../components/hooks";
import comment from "../assets/testimonials.png";
import TestimonialsItemLoader from "../Loaders/CommentsSectionItimL"; // ✅ Loader import qildik

const TestimonialsItem = ({ id: propId }) => {
  const { parseHTMLString } = useParseHTML();
  const { id: paramId, lang } = useParams();
  const id = propId || paramId;

  const {
    data: cardData,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [`comments-card-${id}`],
    queryFn: () =>
      fetch(
        `https://back.holistic.saidoff.uz/api/collections/comments/records/${id}?expand=description`
      ).then((res) => res.json()),
    enabled: !!id,
  });

  if (isError) {
    console.error("Error fetching data:", error);
    return (
      <SwiperSlide>
        <p className="text-white text-center">Xatolik yuz berdi...</p>
      </SwiperSlide>
    );
  }

  if (isLoading) {
    return (
      <SwiperSlide>
        <TestimonialsItemLoader /> {/* ✅ TO‘G‘RI LOADER */}
      </SwiperSlide>
    );
  }

  if (!cardData) {
    return (
      <SwiperSlide>
        <p className="text-white text-center">No testimonial found.</p>
      </SwiperSlide>
    );
  }

  const testimonialText =
    cardData.expand?.description?.[lang] ||
    cardData.expand?.description?.uz ||
    "No testimonial available";
 
  const baseUrl = "https://back.holistic.saidoff.uz/api/files/";
  const imageUrl = cardData.image?.length
    ? `${baseUrl}${cardData.collectionId}/${cardData.id}/${cardData.image[0]}`
    : "https://via.placeholder.com/100";

  return (
    <SwiperSlide className="h-full flex">
      <div className="relative mt-6 bg-[#0A1722] text-white p-8 rounded-2xl shadow-lg max-w-md w-full h-full flex flex-col justify-between min-h-[450px]">
        <div>
          <div className="w-15">
            <img src={comment} alt="logo" loading="lazy" />
          </div>
          <p
            className="mb-6 text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: parseHTMLString(testimonialText),
            }}
          />
        </div>
        <div className="relative flex items-center gap-4 mt-auto">
          <img
            src={imageUrl}
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-teal-400"
            loading="lazy"
          />
          <div>
            <h3 className="font-bold">Leslie Alexander</h3>
            <p className="text-sm text-gray-400">CEO, Company</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default TestimonialsItem;
