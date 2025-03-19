import React from "react";

const CoruselLoader = () => {
  return (
    <div className="bg-[#012B3D] rounded-xl p-6 md:p-12 max-w-[1200px] mx-auto mb-32 shadow-lg relative animate-pulse">
      {/* Title Loader */}
      <div className="h-8 w-3/4 bg-gray-600 mx-auto md:mx-0 rounded-md mb-4"></div>

      {/* Description Loader */}
      <div className="h-6 w-full bg-gray-500 rounded-md mb-4"></div>
      <div className="h-6 w-2/3 bg-gray-500 rounded-md mb-4"></div>
      <div className="h-6 w-1/2 bg-gray-500 rounded-md mb-8"></div>

      {/* Swiper Loader */}
      <div className="flex gap-6 overflow-hidden">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-[300px] md:h-[400px] w-1/3 bg-gray-700 rounded-xl"
          ></div>
        ))}
      </div>

      {/* Progress Bar Loader */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-2/3 md:w-1/2 h-2 bg-white/30 rounded-full relative">
          <div className="h-2 bg-gray-500 rounded-full transition-all duration-300 w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default CoruselLoader;
