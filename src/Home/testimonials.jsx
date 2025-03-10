import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css"; // Custom CSS

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "We develop websites with the high quality, from corporate websites to web applications.",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "We develop websites with the high quality, from corporate websites to web applications.",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback:
      "We develop websites with the high quality, from corporate websites to web applications.",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "We develop websites with the high quality, from corporate websites to web applications.",
  },
];

const TestimonialsCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      setTimeout(() => {
        swiperRef.current.navigation.update();
      }, 100); // 🔄 `setTimeout` bilan `navigation`ni yangilaymiz!
    }
  }, []);

  return (
    <section className="bg-[#012B3D] mb-0 py-16 relative">
      <div className="container mx-auto px-8 text-center relative">
        <h2 className="text-4xl font-bold text-white mb-4">
          What Our Client Say
        </h2>
        <p className="text-teal-400 mb-6">TESTIMONIALS</p>

        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onInit={(swiper) => {
            if (swiper && swiper.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          pagination={false}
          breakpoints={{
            240: { slidesPerView: 1, spaceBetween: 5 }, // Mobil uchun kichik hajm
            640: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mb-12 testimonials-swiper relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-[#0A1722] text-white p-4 md:p-10 rounded-xl shadow-md relative w-full max-w-xs mx-2 md:mx-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-l-8 md:hover:border-l-16 hover:border-teal-400">
                <Quote className="text-teal-400 mb-2 md:mb-4" size={24} />
                <p className="mb-4 md:mb-6 text-sm md:text-base">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center gap-2 md:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-teal-400"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCard;
