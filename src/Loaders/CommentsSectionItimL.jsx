import React from "react";
import { SwiperSlide } from "swiper/react";

const TestimonialsItemLoader = () => {
  return (
    <SwiperSlide className="h-full flex">
      <div className="relative mt-6 bg-gray-800 text-white p-8 rounded-2xl shadow-lg max-w-md w-full h-full flex flex-col justify-between min-h-[450px] animate-pulse">
        <div>
          {/* Placeholder for User Avatar */}
          <div className="w-12 h-12 bg-gray-600 rounded-full mb-4"></div>

          {/* Placeholder for Testimonial Text */}
          <div className="h-6 w-full bg-gray-500 rounded-md mb-4"></div>
          <div className="h-6 w-3/4 bg-gray-500 rounded-md mb-4"></div>
        </div>

        {/* Placeholder for User Info */}
        <div className="relative flex items-center gap-4 mt-auto">
          <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
          <div>
            <div className="h-4 w-20 bg-gray-500 rounded-md mb-2"></div>
            <div className="h-3 w-32 bg-gray-500 rounded-md"></div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default TestimonialsItemLoader;
