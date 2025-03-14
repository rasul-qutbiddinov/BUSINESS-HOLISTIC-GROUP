import React, { useRef, useEffect } from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useParseHTML from "../components/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TestimonialsItem from "../components/testimonials_item";
import "../index.css";

const TestimonialsCard = () => {
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.navigation.update();
      }, 100);
    }
  }, []);
  // Swiper navigation references
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams();

  // Fetch testimonials from API
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["comments_titles"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/comments_titles/records/37f53pi047p45b3?expand=title,comments"
      ).then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.json();
      }),
  });


  // Handle errors and loading states
  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  if (isLoading) {
    return <p className="text-white text-center">Yuklanmoqda...</p>;
  }

  // Extract title and testimonials
  const title =
    data?.expand?.title?.[lang] ||
    data?.expand?.title?.uz ||
    "No title available";

  const commentIds = data?.comments || [];

  return (
    <section className="bg-[#012B3D] py-16 relative">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-white mb-4"
          dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }}
        />
        <p className="text-teal-400 uppercase tracking-wide text-sm mb-6">
          TESTIMONIALS
        </p>

        {/* Swiper for Testimonials */}
        {commentIds.length > 0 ? (
          <Swiper
            ref={swiperRef}
            slidesPerView={1} // ✅ Start with 1 slide per view for responsiveness
            spaceBetween={20} // ✅ Adds spacing
            loop={true}
            autoplay={{
              delay: 3000, // ✅ Smooth autoplay
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 30 }, // ✅ 3 slides on desktop
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="relative max-w-6xl mx-auto" // ✅ Centers the Swiper
          >
            {commentIds.length > 0 ? (
              commentIds.map((commentId) => (
                <SwiperSlide key={commentId}>
                  <TestimonialsItem id={commentId} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <p className="text-gray-400 text-center">
                  No testimonials available.
                </p>
              </SwiperSlide>
            )}
          </Swiper>
        ) : (
          <p className="text-gray-400 text-center">
            No testimonials available.
          </p>
        )}

        {/* Swiper Navigation */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            ref={prevRef}
            className="text-white bg-gray-800 rounded-full p-3 shadow-lg transition"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="text-white bg-gray-800 rounded-full p-3 shadow-lg  transition"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;
