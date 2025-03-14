import React from "react";
import { Quote } from "lucide-react";
import { SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useParseHTML from "../components/hooks";

const TestimonialsItem = ({ id: propId }) => {
  const { parseHTMLString } = useParseHTML();
  const { id: paramId, lang } = useParams();
  const id = propId || paramId;

  // Fetch testimonial data
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
        <p className="text-white text-center">Yuklanmoqda...</p>
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
    : "https://via.placeholder.com/100"; // Default placeholder

  return (
    <SwiperSlide>
      <div className="bg-[#0A1722] text-white p-6 md:p-8 rounded-xl shadow-md relative w-full max-w-xs mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-l-8 md:hover:border-l-16 hover:border-teal-400">
        <Quote className="text-teal-400 mb-2 md:mb-4" size={24} />
        <p
          className="mb-4 md:mb-6 text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: parseHTMLString(testimonialText) }}
        />
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={imageUrl}
            alt="User"
            className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-teal-400"
          />
        </div>
      </div>
    </SwiperSlide>
  );
};

export default TestimonialsItem;
