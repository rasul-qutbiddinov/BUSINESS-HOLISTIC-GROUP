import React from "react";

const TestimonialsCardLoader = () => {
  return (
    <section className="py-16 relative animate-pulse">
      <div className="container mx-auto px-4 text-center">
        {/* Title Loader */}
        <div className="h-10 w-3/4 bg-gray-600 mx-auto rounded-md mb-4"></div>
        <div className="h-5 w-1/4 bg-teal-400 mx-auto rounded-md mb-6"></div>

        {/* Swiper Loader */}
        <div className="relative max-w-6xl mx-auto flex gap-6 overflow-hidden">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-64 w-80 bg-gray-700 rounded-2xl"
            ></div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCardLoader;
