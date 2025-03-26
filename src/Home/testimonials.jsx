import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useParseHTML from "../components/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TestimonialsItem from "../components/testimonials_item";
import TestimonialsCardLoader from "../Loaders/CommentsSectionL";

const TestimonialsCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const { parseHTMLString } = useParseHTML();
  const { lang } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["comments_titles"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/comments_titles/records/37f53pi047p45b3?expand=title,comments"
      ).then((res) => {
        if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
        return res.json();
      }),
  });

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [data]);

  if (isLoading) {
    return <TestimonialsCardLoader />;
  }

  if (isError) {
    return <p className="text-white text-center"></p>;
  }

  const title =
    data?.expand?.title?.[lang] ||
    data?.expand?.title?.uz ||
    "No title available";

  const commentIds = data?.comments || [];

  return (
    <section className="py-16 relative bg-[#012B3D] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-white mb-4"
          dangerouslySetInnerHTML={{ __html: parseHTMLString(title) }}
        />

        {/* TESTIMONIALS matnining orqasiga rasm qo‘shish */}
        <p className="text-teal-400 uppercase tracking-wide text-sm mb-6 bg-no-repeat bg-center bg-contain bg-[url('/COMMENTS.png')] p-6">
          TESTIMONIALS
        </p>

        {commentIds.length > 0 ? (
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="relative max-w-6xl mx-auto"
          >
            {commentIds.map((commentId) => (
              <SwiperSlide key={commentId} className="h-auto flex">
                <div className="w-full h-full flex">
                  <TestimonialsItem id={commentId} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-gray-400 text-center">
            No testimonials available.
          </p>
        )}

        <div className="flex justify-center gap-6 mt-6">
          <button
            ref={prevRef}
            className="text-white bg-gray-800 rounded-full w-10 h-10 shadow-lg transition"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="text-white bg-gray-800 rounded-full w-10 h-10 shadow-lg transition"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;
